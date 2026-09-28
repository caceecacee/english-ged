// docker/store.mjs
import { DatabaseSync } from 'node:sqlite';
import { mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { cleanNick, mergeScore, topRows, playersRows, MAX, DONE_MAX } from './scores-logic.mjs';

const SCHEMA = `
  CREATE TABLE IF NOT EXISTS players (
    nick_key      TEXT PRIMARY KEY,
    nick          TEXT NOT NULL,
    grammar       INTEGER NOT NULL DEFAULT 0,
    vocab         INTEGER NOT NULL DEFAULT 0,
    reading       INTEGER NOT NULL DEFAULT 0,
    grammar_done  INTEGER NOT NULL DEFAULT 0,
    vocab_done    INTEGER NOT NULL DEFAULT 0,
    reading_done  INTEGER NOT NULL DEFAULT 0,
    updated_at    TEXT NOT NULL
  )
`;

function rowToRecord(row) {
  if (!row) return undefined;
  return {
    nick: row.nick,
    grammar: row.grammar, vocab: row.vocab, reading: row.reading,
    grammarDone: row.grammar_done, vocabDone: row.vocab_done, readingDone: row.reading_done,
    updated: row.updated_at
  };
}

export function createStore(dbFilePath) {
  let db;
  // One-time async setup (creating the directory is async; everything after
  // that is synchronous DatabaseSync calls). Every public method awaits this
  // once. Because DatabaseSync has no internal await points, once `ready`
  // has resolved, a submit's read-modify-write runs to completion on the
  // microtask queue before any other queued call can start — no explicit
  // write queue/lock is needed the way the JSON-file store needed one.
  const ready = (async () => {
    await mkdir(dirname(dbFilePath), { recursive: true });
    db = new DatabaseSync(dbFilePath);
    db.exec(SCHEMA);
  })();

  async function submit(rawNick, incoming) {
    await ready;
    const nick = cleanNick(rawNick);
    if (!nick) return { ok: false, error: 'no_nick' };
    const key = nick.toLowerCase();
    const existingRow = db.prepare('SELECT * FROM players WHERE nick_key = ?').get(key);
    const merged = mergeScore(rowToRecord(existingRow), incoming, nick);
    db.prepare(`
      INSERT INTO players (nick_key, nick, grammar, vocab, reading, grammar_done, vocab_done, reading_done, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(nick_key) DO UPDATE SET
        nick=excluded.nick, grammar=excluded.grammar, vocab=excluded.vocab, reading=excluded.reading,
        grammar_done=excluded.grammar_done, vocab_done=excluded.vocab_done, reading_done=excluded.reading_done,
        updated_at=excluded.updated_at
    `).run(key, merged.nick, merged.grammar, merged.vocab, merged.reading, merged.grammarDone, merged.vocabDone, merged.readingDone, merged.updated);
    return { ok: true, saved: { grammar: merged.grammar, vocab: merged.vocab, reading: merged.reading } };
  }

  async function allRecords() {
    await ready;
    const rows = db.prepare('SELECT * FROM players').all();
    const map = {};
    for (const row of rows) map[row.nick_key] = rowToRecord(row);
    return map;
  }

  async function top() {
    return { ok: true, max: MAX, rows: topRows(await allRecords()) };
  }

  async function players() {
    return { ok: true, doneMax: DONE_MAX, rows: playersRows(await allRecords()) };
  }

  // The long-running server never calls this — it's here so tests (and
  // anything else that opens many short-lived stores) can release the file
  // handle. On Windows, an unclosed DatabaseSync handle blocks deleting the
  // file/directory it lives in (EBUSY), which the JSON-file store never hit.
  async function close() {
    await ready;
    db.close();
  }

  return { submit, top, players, close };
}
