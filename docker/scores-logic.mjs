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
