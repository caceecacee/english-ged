# Docker Self-Hosted Deployment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stand up a self-hosted Docker deployment of English Path at `https://eng-ged.phoenix-super.org`, with a dependency-free Node backend that replaces Google Apps Script for this deployment's leaderboard, without touching the three other apps already running on the server.

**Architecture:** One new Node HTTP server (`docker/server.mjs`) serves the existing `docs/` static build and a `/api/scores` endpoint that behaviorally mirrors `apps-script/Code.gs` (same `MAX`/`PARTS`/nickname-cleaning/max-keep logic), backed by a JSON file (`/data/scores.json` in a Docker volume) written through an in-process queue to serialize concurrent updates. Packaged as a single Docker Compose service, reachable only via `127.0.0.1:3010`, fronted by a new nginx `server_name` block appended to the server's existing `block_domains.conf` (Cloudflare terminates HTTPS upstream — no certbot involved).

**Tech Stack:** Node.js ≥18 built-ins only (`node:http`, `node:fs/promises`, `node:test`, global `fetch`) — no new npm dependencies. Docker + Docker Compose (already installed on the target server).

**Spec:** `specs/2026-09-28-docker-self-hosted-deploy-design.md`

## Global Constraints

- Zero new runtime dependencies — Node built-in modules only, consistent with the rest of the project.
- `src/app/ui.js` must not change — only `scoreEndpoint` changes (to `/api/scores`, same-origin), via a Docker-specific `config.js`.
- `MAX = { grammar: 205, vocab: 640, reading: 53 }` and `PARTS = ['grammar', 'vocab', 'reading']` must match `apps-script/Code.gs` exactly.
- No TLS/certbot work on the server — Cloudflare already terminates HTTPS for this domain (and every other domain on the box).
- No auth on the new API — same trust model as `Code.gs` (anyone who can reach it can submit a score); this is intentional, not an oversight.
- Must not modify, restart, or interrupt `linebot_alpha-app-1`, `pgadmin_container_alpha`, `postgres_alpha`, or the existing nginx server blocks for `alpha.phoenix-super.org` / `pgalpha.phoenix-super.org` / `location.phoenix-super.org`. Only **append** a new block.
- New nginx block follows the existing house pattern in `/etc/nginx/conf.d/block_domains.conf` (`limit_req zone=mylimit burst=20 nodelay; proxy_pass http://127.0.0.1:<port>; proxy_http_version 1.1; ...`).
- New container publishes only on `127.0.0.1:3010` (loopback) — reachable exclusively through nginx.
- `dist/index.html` (Artifact build) and the GitHub Pages / Google Sheet deployment are untouched by this work.

## Review Focus

- **Concurrent submits for the same nickname from two devices at once** — the write queue must not lose either update (a naive read-modify-write race would silently drop one part's score). Covered in Task 2.
- **Nickname containing a leading formula-injection character (`=`, `+`, `-`, `@`)** — must be stripped exactly like `Code.gs`'s `cleanNick_`, not stored verbatim (spreadsheet-injection-style attacks translate to "weird string stored," but the behavior must still match the documented contract). Covered in Task 1.
- **Score fields that are negative, `NaN`, non-numeric, or far above `MAX`** — must clamp to `[0, MAX[part]]`, never crash the request or store an invalid number. Covered in Task 1.
- **Oversized or garbage POST bodies** — an unbounded body read could let one bad client grow server memory unboundedly; must be capped and rejected cleanly. Covered in Task 3.
- **Requests that try to read files outside the static `public/` directory** (`..` segments in the URL path) — must never resolve outside `publicDir`, even though `docs/` itself contains no secrets today; this is the kind of bug that becomes serious the day it doesn't. Covered in Task 3.

---

### Task 1: Pure scoring logic (`docker/scores-logic.mjs`)

**Files:**
- Create: `docker/scores-logic.mjs`
- Test: `docker/scores-logic.test.mjs`

**Interfaces:**
- Produces: `MAX: { grammar: number, vocab: number, reading: number }`, `PARTS: string[]`, `cleanNick(raw: unknown): string`, `mergeScore(existing: {grammar,vocab,reading}|undefined, incoming: {grammar,vocab,reading}, nick: string): {nick, grammar, vocab, reading, updated}`, `topRows(store: Record<string, {nick,grammar,vocab,reading,updated}>): Array<{nick,grammar,vocab,reading,updated}>` (sorted by total score descending).

- [ ] **Step 1: Write the failing tests**

```js
// docker/scores-logic.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cleanNick, mergeScore, topRows, MAX } from './scores-logic.mjs';

test('cleanNick strips leading formula-injection characters', () => {
  assert.equal(cleanNick('=SUM(1,1)'), 'SUM(1,1)');
  assert.equal(cleanNick('  +Bob  '), 'Bob');
  assert.equal(cleanNick('@evil'), 'evil');
});

test('cleanNick collapses whitespace and truncates to 20 chars', () => {
  assert.equal(cleanNick('a'.repeat(30)), 'a'.repeat(20));
  assert.equal(cleanNick('  a   b  '), 'a b');
});

test('cleanNick returns empty string for blank/undefined input', () => {
  assert.equal(cleanNick(''), '');
  assert.equal(cleanNick(undefined), '');
  assert.equal(cleanNick('   '), '');
});

test('mergeScore clamps negative, NaN, and over-max values to [0, MAX]', () => {
  const merged = mergeScore(undefined, { grammar: -5, vocab: NaN, reading: 9999 }, 'Ann');
  assert.equal(merged.grammar, 0);
  assert.equal(merged.vocab, 0);
  assert.equal(merged.reading, MAX.reading);
});

test('mergeScore keeps the higher of existing vs incoming per part', () => {
  const existing = { grammar: 100, vocab: 50, reading: 10 };
  const merged = mergeScore(existing, { grammar: 80, vocab: 200, reading: 5 }, 'Ann');
  assert.equal(merged.grammar, 100);
  assert.equal(merged.vocab, 200);
  assert.equal(merged.reading, 10);
});

test('topRows sorts by total score descending', () => {
  const store = {
    ann: { nick: 'Ann', grammar: 10, vocab: 10, reading: 10, updated: 't1' },
    bob: { nick: 'Bob', grammar: 50, vocab: 0, reading: 0, updated: 't2' }
  };
  const rows = topRows(store);
  assert.equal(rows[0].nick, 'Bob');
  assert.equal(rows[1].nick, 'Ann');
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `node --test docker/scores-logic.test.mjs`
Expected: FAIL — `Cannot find module './scores-logic.mjs'` (file doesn't exist yet).

- [ ] **Step 3: Write the implementation**

```js
// docker/scores-logic.mjs
export const MAX = { grammar: 205, vocab: 640, reading: 53 };
export const PARTS = ['grammar', 'vocab', 'reading'];

export function cleanNick(n) {
  return String(n || '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^[=+\-@\s]+/, '')
    .slice(0, 20);
}

export function mergeScore(existing, incoming, nick) {
  const next = { nick, updated: new Date().toISOString() };
  for (const p of PARTS) {
    const raw = Number(incoming[p]);
    const safe = Number.isFinite(raw) ? raw : 0;
    const inc = Math.max(0, Math.min(MAX[p], Math.floor(safe)));
    const cur = existing ? (Number(existing[p]) || 0) : 0;
    next[p] = Math.max(cur, inc);
  }
  return next;
}

export function topRows(store) {
  return Object.values(store)
    .map((r) => ({ nick: r.nick, grammar: r.grammar, vocab: r.vocab, reading: r.reading, updated: r.updated }))
    .sort((a, b) => (b.grammar + b.vocab + b.reading) - (a.grammar + a.vocab + a.reading));
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test docker/scores-logic.test.mjs`
Expected: PASS (6 tests).

- [ ] **Step 5: Commit**

```bash
git add docker/scores-logic.mjs docker/scores-logic.test.mjs
git commit -m "Add pure scoring logic for the self-hosted leaderboard API"
```

---

### Task 2: File-backed store with write serialization (`docker/store.mjs`)

**Files:**
- Create: `docker/store.mjs`
- Test: `docker/store.test.mjs`

**Interfaces:**
- Consumes: `cleanNick`, `mergeScore`, `topRows`, `MAX` from `./scores-logic.mjs` (Task 1).
- Produces: `createStore(filePath: string): { submit(rawNick: string, incoming: {grammar,vocab,reading}): Promise<{ok:true,saved:{grammar,vocab,reading}}|{ok:false,error:'no_nick'}>, top(): Promise<{ok:true,max:typeof MAX,rows:ReturnType<typeof topRows>}> }`.

- [ ] **Step 1: Write the failing tests**

```js
// docker/store.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createStore } from './store.mjs';

async function withTempStore(fn) {
  const dir = await mkdtemp(join(tmpdir(), 'eng-ged-store-'));
  const file = join(dir, 'scores.json');
  try {
    await fn(createStore(file));
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

test('submit rejects an empty nickname without writing a row', async () => {
  await withTempStore(async (store) => {
    const res = await store.submit('   ', { grammar: 10, vocab: 0, reading: 0 });
    assert.equal(res.ok, false);
    assert.equal(res.error, 'no_nick');
    const top = await store.top();
    assert.deepEqual(top.rows, []);
  });
});

test('submit keeps the higher score across two calls for the same nickname (case-insensitive)', async () => {
  await withTempStore(async (store) => {
    await store.submit('Ann', { grammar: 50, vocab: 0, reading: 0 });
    await store.submit('ann', { grammar: 30, vocab: 20, reading: 0 });
    const top = await store.top();
    assert.equal(top.rows.length, 1);
    assert.equal(top.rows[0].grammar, 50);
    assert.equal(top.rows[0].vocab, 20);
  });
});

test('concurrent submits for the same nickname do not lose an update', async () => {
  await withTempStore(async (store) => {
    await Promise.all([
      store.submit('Ann', { grammar: 10, vocab: 0, reading: 0 }),
      store.submit('Ann', { grammar: 0, vocab: 20, reading: 0 }),
      store.submit('Ann', { grammar: 0, vocab: 0, reading: 30 })
    ]);
    const top = await store.top();
    assert.equal(top.rows[0].grammar, 10);
    assert.equal(top.rows[0].vocab, 20);
    assert.equal(top.rows[0].reading, 30);
  });
});

test('top() returns an empty list and the MAX table when the file does not exist yet', async () => {
  await withTempStore(async (store) => {
    const top = await store.top();
    assert.deepEqual(top.rows, []);
    assert.deepEqual(top.max, { grammar: 205, vocab: 640, reading: 53 });
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `node --test docker/store.test.mjs`
Expected: FAIL — `Cannot find module './store.mjs'`.

- [ ] **Step 3: Write the implementation**

```js
// docker/store.mjs
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { cleanNick, mergeScore, topRows, MAX } from './scores-logic.mjs';

export function createStore(filePath) {
  let queue = Promise.resolve();

  async function readAll() {
    try {
      return JSON.parse(await readFile(filePath, 'utf8'));
    } catch (err) {
      if (err.code === 'ENOENT') return {};
      throw err;
    }
  }

  async function writeAll(data) {
    await mkdir(dirname(filePath), { recursive: true });
    await writeFile(filePath, JSON.stringify(data));
  }

  function submit(rawNick, incoming) {
    const task = queue.then(async () => {
      const nick = cleanNick(rawNick);
      if (!nick) return { ok: false, error: 'no_nick' };
      const data = await readAll();
      const key = nick.toLowerCase();
      data[key] = mergeScore(data[key], incoming, nick);
      await writeAll(data);
      const saved = data[key];
      return { ok: true, saved: { grammar: saved.grammar, vocab: saved.vocab, reading: saved.reading } };
    });
    queue = task.catch(() => {});
    return task;
  }

  async function top() {
    return { ok: true, max: MAX, rows: topRows(await readAll()) };
  }

  return { submit, top };
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test docker/store.test.mjs`
Expected: PASS (4 tests).

- [ ] **Step 5: Commit**

```bash
git add docker/store.mjs docker/store.test.mjs
git commit -m "Add file-backed, write-serialized score store"
```

---

### Task 3: HTTP server (`docker/server.mjs`)

**Files:**
- Create: `docker/server.mjs`
- Test: `docker/server.test.mjs`

**Interfaces:**
- Consumes: `createStore` from `./store.mjs` (Task 2).
- Produces: `createServer({ publicDir: string, dataFile: string }): http.Server` (exported for tests); running `node server.mjs` directly starts listening on `process.env.PORT` (default `8080`) serving `process.env.PUBLIC_DIR` (default `./public`) with data at `process.env.DATA_FILE` (default `/data/scores.json`).

- [ ] **Step 1: Write the failing tests**

```js
// docker/server.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, writeFile, mkdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createServer } from './server.mjs';

async function withServer(fn) {
  const dir = await mkdtemp(join(tmpdir(), 'eng-ged-public-'));
  await writeFile(join(dir, 'index.html'), '<h1>hi</h1>');
  await mkdir(join(dir, 'sub'));
  await writeFile(join(dir, 'sub', 'file.txt'), 'hello');
  const dataFile = join(dir, '..', `${Date.now()}-scores.json`);
  const server = createServer({ publicDir: dir, dataFile });
  await new Promise((resolve) => server.listen(0, resolve));
  const port = server.address().port;
  try {
    await fn(`http://127.0.0.1:${port}`);
  } finally {
    server.close();
    await rm(dir, { recursive: true, force: true });
    await rm(dataFile, { force: true });
  }
}

test('GET / serves index.html from the public dir', async () => {
  await withServer(async (base) => {
    const res = await fetch(`${base}/`);
    assert.equal(res.status, 200);
    assert.match(await res.text(), /<h1>hi<\/h1>/);
  });
});

test('GET a path that escapes the public dir is rejected, not leaked', async () => {
  await withServer(async (base) => {
    const res = await fetch(`${base}/../../../../etc/passwd`);
    assert.notEqual(res.status, 200);
  });
});

test('GET /api/scores?action=top returns an empty leaderboard initially', async () => {
  await withServer(async (base) => {
    const res = await fetch(`${base}/api/scores?action=top`);
    const json = await res.json();
    assert.equal(json.ok, true);
    assert.deepEqual(json.rows, []);
  });
});

test('POST /api/scores stores a score, then GET reflects it', async () => {
  await withServer(async (base) => {
    const post = await fetch(`${base}/api/scores`, {
      method: 'POST',
      body: JSON.stringify({ nick: 'Ann', grammar: 50, vocab: 0, reading: 0 })
    });
    const postJson = await post.json();
    assert.equal(postJson.ok, true);
    assert.equal(postJson.saved.grammar, 50);

    const top = await fetch(`${base}/api/scores?action=top`);
    const topJson = await top.json();
    assert.equal(topJson.rows[0].nick, 'Ann');
  });
});

test('POST /api/scores with malformed JSON returns ok:false bad_json', async () => {
  await withServer(async (base) => {
    const res = await fetch(`${base}/api/scores`, { method: 'POST', body: 'not json' });
    const json = await res.json();
    assert.equal(json.ok, false);
    assert.equal(json.error, 'bad_json');
  });
});

test('POST /api/scores with an oversized body is rejected with 413', async () => {
  await withServer(async (base) => {
    const bigBody = JSON.stringify({ nick: 'Ann', grammar: 'x'.repeat(200 * 1024) });
    const res = await fetch(`${base}/api/scores`, { method: 'POST', body: bigBody });
    assert.equal(res.status, 413);
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `node --test docker/server.test.mjs`
Expected: FAIL — `Cannot find module './server.mjs'`.

- [ ] **Step 3: Write the implementation**

```js
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
    const chunks = [];
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(Object.assign(new Error('payload_too_large'), { code: 'PAYLOAD_TOO_LARGE' }));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
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

export function createServer({ publicDir, dataFile }) {
  const store = createStore(dataFile);

  return http.createServer(async (req, res) => {
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
  });
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
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test docker/server.test.mjs`
Expected: PASS (6 tests).

- [ ] **Step 5: Run the full docker/ test suite together**

Run: `node --test docker`
Expected: PASS (16 tests total across the three files).

- [ ] **Step 6: Commit**

```bash
git add docker/server.mjs docker/server.test.mjs
git commit -m "Add HTTP server: static file serving + /api/scores endpoint"
```

---

### Task 4: Docker packaging (Dockerfile, compose file, same-origin config)

**Files:**
- Create: `docker/config.js`
- Create: `docker/Dockerfile`
- Create: `docker/docker-compose.yml`
- Create: `.dockerignore` (repo root)

**Interfaces:**
- Consumes: `docker/server.mjs`, `docker/store.mjs`, `docker/scores-logic.mjs` (Tasks 1–3) and the repo's already-committed `docs/` build output.
- Produces: a buildable image (`eng-ged:latest`) and a `docker compose` service definition other tasks deploy with.

- [ ] **Step 1: Write `docker/config.js`**

```js
// docker/config.js — overrides docs/config.js inside the image so the
// self-hosted deployment always talks to its own same-origin API.
window.EP_CONFIG = {
  scoreEndpoint: '/api/scores'
};
```

- [ ] **Step 2: Write `docker/Dockerfile`**

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY docker/scores-logic.mjs docker/store.mjs docker/server.mjs ./
COPY docs/ ./public/
COPY docker/config.js ./public/config.js
ENV PORT=8080
ENV DATA_FILE=/data/scores.json
VOLUME ["/data"]
EXPOSE 8080
CMD ["node", "server.mjs"]
```

- [ ] **Step 3: Write `docker/docker-compose.yml`**

```yaml
services:
  eng-ged:
    build:
      context: ..
      dockerfile: docker/Dockerfile
    image: eng-ged:latest
    container_name: eng-ged
    restart: unless-stopped
    ports:
      - "127.0.0.1:3010:8080"
    volumes:
      - eng_ged_data:/data

volumes:
  eng_ged_data:
```

- [ ] **Step 4: Write `.dockerignore` at the repo root**

```
.git
node_modules
dist
```

- [ ] **Step 5: Sanity-check the new JS files parse (no Docker required for this step)**

Run: `node --check docker/server.mjs && node --check docker/store.mjs && node --check docker/scores-logic.mjs`
Expected: no output, exit code 0 (syntax valid). Full build/run validation happens on the server in Task 6, where Docker is confirmed installed — this dev machine may not have Docker available.

- [ ] **Step 6: Commit**

```bash
git add docker/config.js docker/Dockerfile docker/docker-compose.yml .dockerignore
git commit -m "Add Docker packaging for the self-hosted deployment"
```

---

### Task 5: Push to GitHub

**Files:** none (git operation only).

- [ ] **Step 1: Confirm the full `docker/` suite still passes and the working tree is clean**

Run: `node --test docker && git status`
Expected: all tests PASS; `git status` shows a clean tree (everything from Tasks 1–4 already committed).

- [ ] **Step 2: Push**

```bash
git push origin main
```

Expected: push succeeds against `https://github.com/caceecacee/english-ged.git` (already the configured `origin`).

---

### Task 6: Deploy the container on the server

**Files:** none in this repo — remote shell commands only, run from this machine using the existing deploy key `~/.ssh/eng_ged_deploy` (already installed in `xphoenix@119.59.102.113`'s `authorized_keys`).

**Interfaces:**
- Consumes: the pushed `main` branch (Task 5), Docker + Docker Compose already confirmed present on the server.

- [ ] **Step 1: Clone or update the repo on the server**

```bash
ssh -i ~/.ssh/eng_ged_deploy -p 22 xphoenix@119.59.102.113 \
  'test -d /home/xphoenix/eng-ged/.git && git -C /home/xphoenix/eng-ged pull --ff-only || git clone https://github.com/caceecacee/english-ged.git /home/xphoenix/eng-ged'
```

Expected: prints either `Already up to date.` / a fast-forward summary, or a fresh clone log.

- [ ] **Step 2: Build and start the container**

```bash
ssh -i ~/.ssh/eng_ged_deploy -p 22 xphoenix@119.59.102.113 \
  'cd /home/xphoenix/eng-ged && docker compose -f docker/docker-compose.yml up -d --build'
```

Expected: image builds successfully, `eng-ged` container reported as `Started`/`Running`.

- [ ] **Step 3: Verify the container answers locally on the server (not yet reachable from outside — nginx isn't wired up until Task 7)**

```bash
ssh -i ~/.ssh/eng_ged_deploy -p 22 xphoenix@119.59.102.113 \
  'curl -s http://127.0.0.1:3010/api/scores?action=top; echo; curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:3010/'
```

Expected: first line `{"ok":true,"max":{"grammar":205,"vocab":640,"reading":53},"rows":[]}`; second line `200`.

- [ ] **Step 4: Confirm the three existing containers are untouched**

```bash
ssh -i ~/.ssh/eng_ged_deploy -p 22 xphoenix@119.59.102.113 \
  'docker ps --format "{{.Names}}\t{{.Status}}"'
```

Expected: `linebot_alpha-app-1`, `pgadmin_container_alpha`, `postgres_alpha` all still listed as `Up ...`, alongside the new `eng-ged` container.

---

### Task 7: Wire up nginx (requires the user's sudo password — manual checkpoint)

**Files:** none in this repo — remote nginx config only.

**Interfaces:**
- Consumes: the running container on `127.0.0.1:3010` (Task 6).

- [ ] **Step 1 (agent): Write the new server block to a local file and copy it to the server's `/tmp` (no sudo needed for this step)**

```bash
cat > /tmp/eng-ged-nginx-block.conf <<'CONF'

server {
    listen 80;
    server_name eng-ged.phoenix-super.org;
    client_max_body_size 1M;
    location / {
        limit_req zone=mylimit burst=20 nodelay;
        proxy_pass http://127.0.0.1:3010;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
CONF
scp -i ~/.ssh/eng_ged_deploy -P 22 /tmp/eng-ged-nginx-block.conf xphoenix@119.59.102.113:/tmp/eng-ged-nginx-block.conf
```

Expected: file copies without a password prompt (uses the existing key).

- [ ] **Step 2 (user, not the agent): append the block, test, and reload nginx**

This step needs `sudo`, which needs a password the agent does not have and should not be given inline where it would be logged. Run this yourself, in this session, using the `!` prefix (or in your own terminal) — you'll get nginx's own interactive password prompt:

```
ssh -i ~/.ssh/eng_ged_deploy -p 22 -t xphoenix@119.59.102.113 'sudo bash -c "cat /tmp/eng-ged-nginx-block.conf >> /etc/nginx/conf.d/block_domains.conf && nginx -t && systemctl reload nginx"'
```

Expected output ends with `nginx: configuration file /etc/nginx/nginx.conf test is successful` and no error from the reload. **Stop and report back before this step; do not proceed to Task 8 until the user confirms it succeeded.**

- [ ] **Step 3 (agent): Confirm the other nginx-routed domains still answer (sanity check that the appended block didn't corrupt the file)**

```bash
ssh -i ~/.ssh/eng_ged_deploy -p 22 xphoenix@119.59.102.113 \
  'curl -s -o /dev/null -w "alpha: %{http_code}\n" -H "Host: alpha.phoenix-super.org" http://127.0.0.1/; curl -s -o /dev/null -w "pgalpha: %{http_code}\n" -H "Host: pgalpha.phoenix-super.org" http://127.0.0.1/'
```

Expected: both print a response code (not connection refused / 502) — confirms `nginx -t` + reload didn't break the existing blocks.

---

### Task 8: End-to-end verification

**Files:** none.

- [ ] **Step 1: Verify the new domain resolves through Cloudflare end-to-end**

```bash
curl -s https://eng-ged.phoenix-super.org/api/scores?action=top
```

Expected: `{"ok":true,"max":{"grammar":205,"vocab":640,"reading":53},"rows":[]}`.

- [ ] **Step 2: Browser smoke test**

Open `https://eng-ged.phoenix-super.org` in a browser: set a nickname, complete one grammar mini-test (5/5), confirm the leaderboard section shows your nickname after a refresh. Repeat from a second browser/profile with a different nickname and confirm both nicknames appear in each other's leaderboard (the original cross-device ask).

- [ ] **Step 3: Final confirmation that nothing else on the server regressed**

```bash
ssh -i ~/.ssh/eng_ged_deploy -p 22 xphoenix@119.59.102.113 'docker ps --format "{{.Names}}\t{{.Status}}"; sudo -n nginx -t 2>&1 || echo "(sudo -n unavailable — already verified via Task 7 Step 3)"'
```

Expected: all four containers `Up`; nginx config still valid.
