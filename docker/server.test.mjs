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
