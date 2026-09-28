// docker/store.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createStore } from './store.mjs';

async function withTempStore(fn) {
  const dir = await mkdtemp(join(tmpdir(), 'eng-ged-store-'));
  const file = join(dir, 'scores.db');
  const store = createStore(file);
  try {
    await fn(store);
  } finally {
    await store.close();
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

test('submit keeps the higher "done" counts across two calls, independently of scores', async () => {
  await withTempStore(async (store) => {
    await store.submit('Ann', { grammar: 0, vocab: 0, reading: 0, grammarDone: 3, vocabDone: 1, readingDone: 0 });
    await store.submit('Ann', { grammar: 0, vocab: 0, reading: 0, grammarDone: 1, vocabDone: 5, readingDone: 2 });
    const players = await store.players();
    assert.equal(players.rows[0].grammarDone, 3);
    assert.equal(players.rows[0].vocabDone, 5);
    assert.equal(players.rows[0].readingDone, 2);
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

test('concurrent submits for two DIFFERENT nicknames both persist (neither is dropped)', async () => {
  await withTempStore(async (store) => {
    await Promise.all([
      store.submit('Ann', { grammar: 10, vocab: 0, reading: 0 }),
      store.submit('Bob', { grammar: 0, vocab: 20, reading: 0 })
    ]);
    const top = await store.top();
    assert.equal(top.rows.length, 2);
    const byNick = Object.fromEntries(top.rows.map((r) => [r.nick, r]));
    assert.equal(byNick.Ann.grammar, 10);
    assert.equal(byNick.Bob.vocab, 20);
  });
});

test('top() returns an empty list and the MAX table when the database is brand new', async () => {
  await withTempStore(async (store) => {
    const top = await store.top();
    assert.deepEqual(top.rows, []);
    assert.deepEqual(top.max, { grammar: 205, vocab: 640, reading: 53 });
  });
});

test('players() returns the DONE_MAX table and per-player done counts, sorted by most recently active', async () => {
  await withTempStore(async (store) => {
    await store.submit('Ann', { grammar: 5, vocab: 0, reading: 0, grammarDone: 1, vocabDone: 0, readingDone: 0 });
    await new Promise((r) => setTimeout(r, 5)); // ensure a strictly later updatedAt timestamp
    await store.submit('Bob', { grammar: 1, vocab: 0, reading: 0, grammarDone: 1, vocabDone: 0, readingDone: 0 });
    const players = await store.players();
    assert.deepEqual(players.doneMax, { grammar: 31, vocab: 16, reading: 12 });
    assert.equal(players.rows[0].nick, 'Bob');
    assert.equal(players.rows[1].nick, 'Ann');
  });
});

test('data persists across store instances pointed at the same database file', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'eng-ged-store-'));
  const file = join(dir, 'scores.db');
  const first = createStore(file);
  const reopened = createStore(file);
  try {
    await first.submit('Ann', { grammar: 42, vocab: 0, reading: 0 });
    await first.close();
    const top = await reopened.top();
    assert.equal(top.rows[0].grammar, 42);
  } finally {
    await reopened.close();
    await rm(dir, { recursive: true, force: true });
  }
});
