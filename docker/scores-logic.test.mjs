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
