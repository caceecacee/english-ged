// docker/scores-logic.mjs
export const MAX = { grammar: 340, vocab: 640, reading: 53 };
export const DONE_MAX = { grammar: 56, vocab: 16, reading: 12 };
export const PARTS = ['grammar', 'vocab', 'reading'];
const DONE_KEYS = { grammar: 'grammarDone', vocab: 'vocabDone', reading: 'readingDone' };

export function cleanNick(n) {
  const s = (typeof n === 'string' || typeof n === 'number') ? String(n) : '';
  return s
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^[=+\-@\s]+/, '')
    .slice(0, 20);
}

function clampInt(v, max) {
  const raw = (typeof v === 'number' || typeof v === 'string') ? Number(v) : NaN;
  const safe = Number.isFinite(raw) ? raw : 0;
  return Math.max(0, Math.min(max, Math.floor(safe)));
}

export function mergeScore(existing, incoming, nick) {
  const next = { nick, updated: new Date().toISOString() };
  for (const p of PARTS) {
    const inc = clampInt(incoming[p], MAX[p]);
    const cur = existing ? (Number(existing[p]) || 0) : 0;
    next[p] = Math.max(cur, inc);
  }
  for (const p of PARTS) {
    const key = DONE_KEYS[p];
    const inc = clampInt(incoming[key], DONE_MAX[p]);
    const cur = existing ? (Number(existing[key]) || 0) : 0;
    next[key] = Math.max(cur, inc);
  }
  return next;
}

export function topRows(store) {
  return Object.values(store)
    .map((r) => ({ nick: r.nick, grammar: r.grammar, vocab: r.vocab, reading: r.reading, updated: r.updated }))
    .sort((a, b) => (b.grammar + b.vocab + b.reading) - (a.grammar + a.vocab + a.reading));
}

export function playersRows(store) {
  return Object.values(store)
    .map((r) => ({
      nick: r.nick,
      grammar: r.grammar, vocab: r.vocab, reading: r.reading,
      grammarDone: r.grammarDone, vocabDone: r.vocabDone, readingDone: r.readingDone,
      updatedAt: r.updated
    }))
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}
