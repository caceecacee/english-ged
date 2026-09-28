// docker/server.mjs
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, normalize, extname, dirname as pathDirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createStore } from './store.mjs';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

const MAX_BODY_BYTES = 100 * 1024;

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    let rejected = false;
    const chunks = [];
    req.on('data', (chunk) => {
      if (rejected) return;
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        rejected = true;
        reject(Object.assign(new Error('payload_too_large'), { code: 'PAYLOAD_TOO_LARGE' }));
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      if (!rejected) resolve(Buffer.concat(chunks).toString('utf8'));
    });
    req.on('error', reject);
  });
}

function sendJson(res, status, obj) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(obj));
}

async function serveStatic(publicDir, pathname, res) {
  const relPath = pathname === '/' ? '/index.html' : pathname;
  const filePath = normalize(join(publicDir, relPath));
  if (!filePath.startsWith(publicDir)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }
  try {
    const st = await stat(filePath);
    if (st.isDirectory()) {
      res.writeHead(404);
      return res.end('Not found');
    }
    const data = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
}

async function handleRequest(req, res, store, publicDir) {
  const url = new URL(req.url, 'http://localhost');

  if (url.pathname === '/api/scores') {
    if (req.method === 'GET' && url.searchParams.get('action') === 'top') {
      return sendJson(res, 200, await store.top());
    }
    if (req.method === 'POST') {
      let raw;
      try {
        raw = await readBody(req);
      } catch (err) {
        return sendJson(res, err.code === 'PAYLOAD_TOO_LARGE' ? 413 : 400, { ok: false, error: 'bad_request' });
      }
      let data;
      try {
        data = JSON.parse(raw);
      } catch {
        data = null;
      }
      if (!data || typeof data !== 'object') {
        return sendJson(res, 200, { ok: false, error: 'bad_json' });
      }
      const result = await store.submit(data.nick, {
        grammar: data.grammar,
        vocab: data.vocab,
        reading: data.reading
      });
      return sendJson(res, 200, result);
    }
    res.writeHead(405);
    return res.end('Method not allowed');
  }

  if (req.method !== 'GET') {
    res.writeHead(405);
    return res.end('Method not allowed');
  }
  return serveStatic(publicDir, url.pathname, res);
}

export function createServer({ publicDir, dataFile }) {
  const store = createStore(dataFile);

  const server = http.createServer((req, res) => {
    handleRequest(req, res, store, publicDir).catch(() => {
      if (!res.headersSent) {
        sendJson(res, 500, { ok: false, error: 'server_error' });
      } else {
        res.end();
      }
    });
  });
  // Release the SQLite file handle when the HTTP server shuts down — mainly
  // so tests can delete their temp database file right after server.close()
  // (unclosed handles block deletion on Windows); the long-running production
  // process never triggers this since it never calls server.close().
  server.on('close', () => { store.close().catch(() => {}); });
  return server;
}

function main() {
  const port = Number(process.env.PORT) || 8080;
  const __dirname = pathDirname(fileURLToPath(import.meta.url));
  const publicDir = normalize(process.env.PUBLIC_DIR || join(__dirname, 'public'));
  const dataFile = process.env.DATA_FILE || '/data/scores.json';
  const server = createServer({ publicDir, dataFile });
  server.listen(port, () => {
    console.log(`English Path server listening on :${port} (public=${publicDir}, data=${dataFile})`);
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
