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
