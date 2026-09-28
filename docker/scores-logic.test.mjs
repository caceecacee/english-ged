// docker/scores-logic.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cleanNick, mergeScore, topRows, playersRows, MAX, DONE_MAX } from './scores-logic.mjs';

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

test('DONE_MAX matches known content totals (31 grammar lessons, 16 vocab sets, 12 reading passages)', () => {
  assert.deepEqual(DONE_MAX, { grammar: 31, vocab: 16, reading: 12 });
});

test('mergeScore clamps negative/NaN/over-max "done" counts to [0, DONE_MAX]', () => {
  const merged = mergeScore(undefined, { grammar: 1, vocab: 1, reading: 1, grammarDone: -5, vocabDone: NaN, readingDone: 999 }, 'Ann');
  assert.equal(merged.grammarDone, 0);
  assert.equal(merged.vocabDone, 0);
  assert.equal(merged.readingDone, DONE_MAX.reading);
});

test('mergeScore keeps the higher "done" count across two calls, independently of scores', () => {
  const existing = { grammar: 0, vocab: 0, reading: 0, grammarDone: 10, vocabDone: 5, readingDone: 2 };
  const merged = mergeScore(existing, { grammar: 0, vocab: 0, reading: 0, grammarDone: 3, vocabDone: 8, readingDone: 1 }, 'Ann');
  assert.equal(merged.grammarDone, 10);
  assert.equal(merged.vocabDone, 8);
  assert.equal(merged.readingDone, 2);
});

test('playersRows sorts by updatedAt descending (most recently active first)', () => {
  const store = {
    ann: { nick: 'Ann', grammar: 10, vocab: 0, reading: 0, grammarDone: 1, vocabDone: 0, readingDone: 0, updated: '2026-01-01T00:00:00.000Z' },
    bob: { nick: 'Bob', grammar: 5, vocab: 0, reading: 0, grammarDone: 1, vocabDone: 0, readingDone: 0, updated: '2026-02-01T00:00:00.000Z' }
  };
  const rows = playersRows(store);
  assert.equal(rows[0].nick, 'Bob');
  assert.equal(rows[1].nick, 'Ann');
  assert.equal(rows[0].updatedAt, '2026-02-01T00:00:00.000Z');
});
