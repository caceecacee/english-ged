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
  const dataFile = join(dir, '..', `${Date.now()}-scores.db`);
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

test('POST /api/scores with a JSON body that is not an object does not crash the server', async () => {
  await withServer(async (base) => {
    const res = await fetch(`${base}/api/scores`, { method: 'POST', body: 'null' });
    const json = await res.json();
    assert.equal(json.ok, false);

    // the process must still be alive and serving requests afterward
    const followUp = await fetch(`${base}/api/scores?action=top`);
    assert.equal(followUp.status, 200);
  });
});

test('POST /api/scores with a non-string nick (object with a non-callable toString) does not crash', async () => {
  await withServer(async (base) => {
    const res = await fetch(`${base}/api/scores`, {
      method: 'POST',
      body: JSON.stringify({ nick: { toString: 1 }, grammar: 5 })
    });
    const json = await res.json();
    assert.equal(json.ok, false);

    const followUp = await fetch(`${base}/api/scores?action=top`);
    assert.equal(followUp.status, 200);
  });
});

test('POST /api/scores with a non-numeric score field is clamped to 0, not crashed', async () => {
  await withServer(async (base) => {
    const res = await fetch(`${base}/api/scores`, {
      method: 'POST',
      body: JSON.stringify({ nick: 'Ann', grammar: { valueOf: 1 } })
    });
    const json = await res.json();
    assert.equal(json.ok, true);
    assert.equal(json.saved.grammar, 0);
  });
});

test('POST /api/scores accepts and clamps the three "done" count fields', async () => {
  await withServer(async (base) => {
    const res = await fetch(`${base}/api/scores`, {
      method: 'POST',
      body: JSON.stringify({ nick: 'Ann', grammar: 5, vocab: 0, reading: 0, grammarDone: 999, vocabDone: -3, readingDone: 'x' })
    });
    const json = await res.json();
    assert.equal(json.ok, true);

    // done-counts aren't in the POST response (saved only echoes scores, same as before),
    // so confirm the clamp landed by reading it back through the admin endpoint.
    process.env.ADMIN_KEY = 'test-key';
    try {
      const admin = await fetch(`${base}/api/admin/players`, { headers: { 'X-Admin-Key': 'test-key' } });
      const adminJson = await admin.json();
      assert.equal(adminJson.rows[0].grammarDone, 31); // clamped to DONE_MAX.grammar
      assert.equal(adminJson.rows[0].vocabDone, 0);     // negative clamped to 0
      assert.equal(adminJson.rows[0].readingDone, 0);   // non-numeric clamped to 0
    } finally {
      delete process.env.ADMIN_KEY;
    }
  });
});

test('GET /api/admin/players without ADMIN_KEY configured on the server returns 503, never falls open', async () => {
  await withServer(async (base) => {
    const res = await fetch(`${base}/api/admin/players`);
    assert.equal(res.status, 503);
    const json = await res.json();
    assert.equal(json.ok, false);
  });
});

test('GET /api/admin/players with a missing or wrong key returns 401', async () => {
  process.env.ADMIN_KEY = 'secret123';
  try {
    await withServer(async (base) => {
      const noKey = await fetch(`${base}/api/admin/players`);
      assert.equal(noKey.status, 401);
      const wrongKey = await fetch(`${base}/api/admin/players`, { headers: { 'X-Admin-Key': 'nope' } });
      assert.equal(wrongKey.status, 401);
    });
  } finally {
    delete process.env.ADMIN_KEY;
  }
});

test('GET /api/admin/players with the correct key returns player rows with done-counts and doneMax', async () => {
  process.env.ADMIN_KEY = 'secret123';
  try {
    await withServer(async (base) => {
      await fetch(`${base}/api/scores`, {
        method: 'POST',
        body: JSON.stringify({ nick: 'Ann', grammar: 5, vocab: 0, reading: 0, grammarDone: 2, vocabDone: 1, readingDone: 0 })
      });
      const res = await fetch(`${base}/api/admin/players`, { headers: { 'X-Admin-Key': 'secret123' } });
      assert.equal(res.status, 200);
      const json = await res.json();
      assert.equal(json.ok, true);
      assert.deepEqual(json.doneMax, { grammar: 31, vocab: 16, reading: 12 });
      assert.equal(json.rows[0].nick, 'Ann');
      assert.equal(json.rows[0].grammarDone, 2);
    });
  } finally {
    delete process.env.ADMIN_KEY;
  }
});
