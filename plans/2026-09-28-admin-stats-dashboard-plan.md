# Teacher/Admin Stats Dashboard (SQLite) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the self-hosted leaderboard store from a JSON file to SQLite (`node:sqlite`, Node built-in) and add a passcode-gated `/admin.html` dashboard showing each player's progress overview (lessons/sets/passages done, best scores, last active) — without touching the learner-facing app's behavior, the Google Sheets deployment, or the other three containers on the server.

**Architecture:** `docker/scores-logic.mjs` gains a `DONE_MAX` table and extends `mergeScore`/adds `playersRows` for the three new "done count" fields. `docker/store.mjs` is rewritten on top of `node:sqlite`'s synchronous `DatabaseSync`, keeping its `submit`/`top` contract and adding `players()`. `docker/server.mjs` extends `POST /api/scores` to accept the three new fields and adds `GET /api/admin/players`, gated by an `X-Admin-Key` header checked against `process.env.ADMIN_KEY`. `docker/admin.html` is a new, framework-free static page served from the same container. `src/app/ui.js`'s `Remote.send()` computes and sends the three done-counts alongside the existing scores — additive to the wire format, so `apps-script/Code.gs` (which ignores unrecognized JSON fields) and the GitHub Pages deployment are unaffected.

**Tech Stack:** Node.js ≥18 built-ins only, now including `node:sqlite` (confirmed working on the deployed `node:22-alpine` image — no new npm dependency). Same vanilla-JS, no-framework approach for `admin.html`.

**Spec:** `specs/2026-09-28-admin-stats-dashboard-design.md`

## Global Constraints

- Zero new runtime dependencies — `node:sqlite` is a Node built-in (confirmed present and working on `node:22-alpine`), not an npm package.
- `MAX = { grammar: 205, vocab: 640, reading: 53 }` and the new `DONE_MAX = { grammar: 31, vocab: 16, reading: 12 }` must stay correct — `test/validate.mjs` cross-checks both against real content counts (same mechanism already in place for `MAX` since commit `f2400f8`).
- `apps-script/Code.gs` and `docs/` (GitHub Pages / Google Sheets deployment) are not modified — the client change is purely additive to the POST body.
- No auth on `/api/scores` (unchanged, existing trust model) — but `/api/admin/players` is gated by `ADMIN_KEY` and must never fall open if that env var is unset.
- Must not modify, restart, or interrupt `linebot_alpha-app-1`, `pgadmin_container_alpha`, `postgres_alpha`, or their nginx server blocks.
- `docker/.env` (holding the real `ADMIN_KEY`) must never be committed — add it to `.gitignore`; only `docker/.env.example` (a placeholder) is committed.
- No migration of the old `/data/scores.json` — verified empty on production before this plan was written; the SQLite store starts fresh at a new path (`/data/scores.db`) in the same volume.

## Review Focus

- **`ADMIN_KEY` unset on the server (misconfiguration)** — `/api/admin/players` must return `503`, never fall open and serve data with no gate. Covered in Task 4.
- **A crafted `POST /api/scores` body with negative/huge/non-numeric done-count fields, bypassing the real client entirely** — must clamp to `[0, DONE_MAX[part]]` exactly like the existing score fields, never store a raw out-of-range value or crash the request. Covered in Task 1 (clamp logic) and Task 4 (server passthrough test).
- **A nickname containing `<script>`/HTML rendered on the teacher's dashboard** — nicknames are attacker-controlled (no auth on submission) and reach an authenticated admin's browser; must render as literal text, never execute. Covered by `admin.html`'s `esc()` helper in Task 5, verified manually in Task 7.
- **Two different nicknames submitting concurrently** — both rows must persist correctly; the existing race test only covers repeated submits for the *same* nickname. Covered by a new test in Task 3.
- **The production Docker volume already contains the old `/data/scores.json` from before this change** — switching to `/data/scores.db` in the same volume must not error or conflict with the pre-existing file. Covered by manual verification in Task 7 (this is the real, already-populated-in-the-past volume, not a fresh test fixture).

---

### Task 1: Extend `docker/scores-logic.mjs` with `DONE_MAX` and done-count merging

**Files:**
- Modify: `docker/scores-logic.mjs`
- Test: `docker/scores-logic.test.mjs`

**Interfaces:**
- Consumes: nothing new.
- Produces: `DONE_MAX: {grammar:31, vocab:16, reading:12}`, `mergeScore(existing, incoming, nick)` now also merges `grammarDone`/`vocabDone`/`readingDone` (same max-of-existing-vs-clamped-incoming semantics as the score fields), `playersRows(store): Array<{nick, grammar, vocab, reading, grammarDone, vocabDone, readingDone, updatedAt}>` sorted by `updatedAt` descending. Task 3 (`store.mjs`) consumes `DONE_MAX`, the extended `mergeScore`, and `playersRows`.

- [ ] **Step 1: Write the failing tests**

Add to `docker/scores-logic.test.mjs` (append after the existing tests, keep the existing ones unchanged):

```js
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
```

Update the import line at the top of `docker/scores-logic.test.mjs` to:

```js
import { cleanNick, mergeScore, topRows, playersRows, MAX, DONE_MAX } from './scores-logic.mjs';
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `node --test docker/scores-logic.test.mjs`
Expected: FAIL — `DONE_MAX`/`playersRows` are not exported yet (existing 7 tests still pass, the 4 new ones fail).

- [ ] **Step 3: Write the implementation**

Replace the full contents of `docker/scores-logic.mjs` with:

```js
// docker/scores-logic.mjs
export const MAX = { grammar: 205, vocab: 640, reading: 53 };
export const DONE_MAX = { grammar: 31, vocab: 16, reading: 12 };
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
```

(`clampInt` is `mergeScore`'s original inline clamping logic pulled into a shared helper — behavior-identical to before, now reused for the three new fields.)

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test docker/scores-logic.test.mjs`
Expected: PASS (11 tests: 7 existing + 4 new).

- [ ] **Step 5: Commit**

```bash
git add docker/scores-logic.mjs docker/scores-logic.test.mjs
git commit -m "Add DONE_MAX and done-count merging to the scoring logic"
```

---

### Task 2: Cross-check `DONE_MAX` against real content counts in `test/validate.mjs`

**Files:**
- Modify: `test/validate.mjs`

**Interfaces:**
- Consumes: `DONE_MAX` from `docker/scores-logic.mjs` (Task 1).
- Produces: nothing new for later tasks — this is a standalone regression guard, same role as the existing `MAX` cross-check.

- [ ] **Step 1: Update the import line**

In `test/validate.mjs`, change:

```js
import { MAX as DOCKER_MAX } from '../docker/scores-logic.mjs';
```

to:

```js
import { MAX as DOCKER_MAX, DONE_MAX as DOCKER_DONE_MAX } from '../docker/scores-logic.mjs';
```

- [ ] **Step 2: Add the three cross-checks**

Immediately after the existing grammar cross-check (the line `ok(DOCKER_MAX.grammar === miniCount + postCount, ...)`, currently around line 70), add:

```js
ok(DOCKER_DONE_MAX.grammar === lessonCount, 'docker/scores-logic.mjs DONE_MAX.grammar (' + DOCKER_DONE_MAX.grammar + ') ต้องเท่ากับจำนวนบทเรียนจริง (' + lessonCount + ')');
```

Immediately after the existing vocab cross-check (the line `ok(DOCKER_MAX.vocab === totalVocabSets * 40, ...)`, currently around line 104), add:

```js
ok(DOCKER_DONE_MAX.vocab === totalVocabSets, 'docker/scores-logic.mjs DONE_MAX.vocab (' + DOCKER_DONE_MAX.vocab + ') ต้องเท่ากับจำนวนชุดคำศัพท์จริง (' + totalVocabSets + ')');
```

Immediately after the existing reading-passage-count check (the line `ok(EP.reading.length === 12, ...)`, currently around line 156), add:

```js
ok(DOCKER_DONE_MAX.reading === EP.reading.length, 'docker/scores-logic.mjs DONE_MAX.reading (' + DOCKER_DONE_MAX.reading + ') ต้องเท่ากับจำนวนบทอ่านจริง (' + EP.reading.length + ')');
```

- [ ] **Step 3: Run validate to confirm it passes**

Run: `npm run validate`
Expected: `✓ ผ่านทั้งหมด (...)` — all checks pass, including the 3 new ones (total check count goes up by 3 from the previous run).

- [ ] **Step 4: Confirm the guard actually fires (same verification style as the `f2400f8` precedent)**

Temporarily change `DONE_MAX` in `docker/scores-logic.mjs` to `{ grammar: 999, vocab: 16, reading: 12 }`, run `npm run validate` again, confirm it now FAILS with the new grammar message, then revert the temporary change and re-run to confirm it passes again.

- [ ] **Step 5: Commit**

```bash
git add test/validate.mjs
git commit -m "Cross-check DONE_MAX against real lesson/set/passage counts"
```

---

### Task 3: Rewrite `docker/store.mjs` on `node:sqlite`

**Files:**
- Modify: `docker/store.mjs`
- Modify: `docker/store.test.mjs`

**Interfaces:**
- Consumes: `cleanNick`, `mergeScore`, `topRows`, `playersRows`, `MAX`, `DONE_MAX` from `./scores-logic.mjs` (Task 1).
- Produces: `createStore(dbFilePath: string) -> { submit(rawNick, incoming): Promise<{ok:true,saved:{grammar,vocab,reading}}|{ok:false,error:'no_nick'}>, top(): Promise<{ok:true,max:MAX,rows:[...]}>, players(): Promise<{ok:true,doneMax:DONE_MAX,rows:[...]}> }`. Task 4 (`server.mjs`) consumes `players()`.

- [ ] **Step 1: Write the failing tests**

Replace the full contents of `docker/store.test.mjs` with:

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
  const file = join(dir, 'scores.db');
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
  try {
    await createStore(file).submit('Ann', { grammar: 42, vocab: 0, reading: 0 });
    const reopened = createStore(file);
    const top = await reopened.top();
    assert.equal(top.rows[0].grammar, 42);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `node --test docker/store.test.mjs`
Expected: FAIL — `store.players is not a function` (the old JSON-backed implementation doesn't have it yet).

- [ ] **Step 3: Write the implementation**

Replace the full contents of `docker/store.mjs` with:

```js
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

  return { submit, top, players };
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test docker/store.test.mjs`
Expected: PASS (9 tests). You will see `(node:...) ExperimentalWarning: SQLite is an experimental feature and might change at any time` printed to stderr — this is expected and harmless (confirmed during spec research against both the local Node and the deployed `node:22-alpine` image); it does not affect the test results.

- [ ] **Step 5: Commit**

```bash
git add docker/store.mjs docker/store.test.mjs
git commit -m "Rewrite the leaderboard store on node:sqlite, add players()"
```

---

### Task 4: Extend `docker/server.mjs` — done-counts in `POST /api/scores`, new `GET /api/admin/players`

**Files:**
- Modify: `docker/server.mjs`
- Modify: `docker/server.test.mjs`

**Interfaces:**
- Consumes: `store.submit` (now accepting `grammarDone`/`vocabDone`/`readingDone`), `store.players()` from `./store.mjs` (Task 3).
- Produces: `GET /api/admin/players` → `200 {ok:true, doneMax, rows}` / `401 {ok:false, error:'unauthorized'}` / `503 {ok:false, error:'admin_not_configured'}`, gated by header `X-Admin-Key` against `process.env.ADMIN_KEY`. Task 5 (`admin.html`) consumes this route.

- [ ] **Step 1: Rename `withServer`'s temp data file to reflect that it's now a SQLite database, not JSON**

In `docker/server.test.mjs`, change:

```js
  const dataFile = join(dir, '..', `${Date.now()}-scores.json`);
```

to:

```js
  const dataFile = join(dir, '..', `${Date.now()}-scores.db`);
```

(Purely a naming clarity fix — `createStore` doesn't care about the extension, but a `.json` name on a SQLite file would confuse the next person reading this test.)

- [ ] **Step 2: Write the failing tests**

Add to `docker/server.test.mjs` (append after the existing tests):

```js
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
```

- [ ] **Step 3: Run tests to verify they fail**

Run: `node --test docker/server.test.mjs`
Expected: FAIL — `/api/admin/players` returns 404 (route doesn't exist yet); the done-count passthrough test fails at the admin-endpoint step for the same reason.

- [ ] **Step 4: Write the implementation**

In `docker/server.mjs`, change the `POST` branch inside `handleRequest` (the `store.submit(...)` call) from:

```js
      const result = await store.submit(data.nick, {
        grammar: data.grammar,
        vocab: data.vocab,
        reading: data.reading
      });
```

to:

```js
      const result = await store.submit(data.nick, {
        grammar: data.grammar,
        vocab: data.vocab,
        reading: data.reading,
        grammarDone: data.grammarDone,
        vocabDone: data.vocabDone,
        readingDone: data.readingDone
      });
```

Then add a new branch inside `handleRequest`, right before the existing `if (url.pathname === '/api/scores') {` block:

```js
  if (url.pathname === '/api/admin/players' && req.method === 'GET') {
    const adminKey = process.env.ADMIN_KEY;
    if (!adminKey) return sendJson(res, 503, { ok: false, error: 'admin_not_configured' });
    if (req.headers['x-admin-key'] !== adminKey) return sendJson(res, 401, { ok: false, error: 'unauthorized' });
    return sendJson(res, 200, await store.players());
  }

```

- [ ] **Step 5: Run tests to verify they pass**

Run: `node --test docker/server.test.mjs`
Expected: PASS (13 tests: 9 existing + 4 new).

- [ ] **Step 6: Commit**

```bash
git add docker/server.mjs docker/server.test.mjs
git commit -m "Accept done-counts in POST /api/scores, add ADMIN_KEY-gated GET /api/admin/players"
```

---

### Task 5: `docker/admin.html` dashboard + Docker/compose/secret wiring

**Files:**
- Create: `docker/admin.html`
- Create: `docker/.env.example`
- Modify: `docker/Dockerfile`
- Modify: `docker/docker-compose.yml`
- Modify: `.gitignore`

**Interfaces:**
- Consumes: `GET /api/admin/players` (Task 4).
- Produces: a static page reachable at `/admin.html` once deployed (Task 7).

- [ ] **Step 1: Write `docker/admin.html`**

```html
<!doctype html>
<html lang="th">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>English Path — สถิติผู้เรียน</title>
<style>
  body { font-family: system-ui, sans-serif; max-width: 900px; margin: 24px auto; padding: 0 16px; color: #1a2433; }
  h1 { font-size: 1.25rem; }
  table { width: 100%; border-collapse: collapse; margin-top: 16px; }
  th, td { text-align: left; padding: 8px 10px; border-bottom: 1px solid #ddd; font-size: .9rem; }
  th { color: #555; font-weight: 600; }
  .err { color: #b00020; }
  .muted { color: #777; font-size: .85rem; }
  input, button { font-size: 1rem; padding: 8px 10px; }
</style>
</head>
<body>
<h1>English Path — สถิติผู้เรียน (สำหรับครู)</h1>
<div id="gate">
  <p class="muted">ใส่รหัสผ่านที่ตั้งไว้บน server</p>
  <input id="key" type="password" placeholder="รหัสผ่าน" autocomplete="off">
  <button id="go">เข้าดู</button>
  <p id="err" class="err" role="alert"></p>
</div>
<div id="out"></div>
<script>
(function () {
  var KEY_STORAGE = 'eng-ged-admin-key';
  var gate = document.getElementById('gate');
  var out = document.getElementById('out');
  var err = document.getElementById('err');

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function relTime(iso) {
    var diffMs = Date.now() - new Date(iso).getTime();
    var min = Math.round(diffMs / 60000);
    if (min < 1) return 'เมื่อสักครู่';
    if (min < 60) return min + ' นาทีที่แล้ว';
    var hr = Math.round(min / 60);
    if (hr < 24) return hr + ' ชั่วโมงที่แล้ว';
    return Math.round(hr / 24) + ' วันที่แล้ว';
  }

  function render(data) {
    var dm = data.doneMax;
    var rows = data.rows.map(function (r) {
      return '<tr><td>' + esc(r.nick) + '</td>' +
        '<td>' + r.grammarDone + '/' + dm.grammar + '</td>' +
        '<td>' + r.vocabDone + '/' + dm.vocab + '</td>' +
        '<td>' + r.readingDone + '/' + dm.reading + '</td>' +
        '<td>' + (r.grammar + r.vocab + r.reading) + '</td>' +
        '<td>' + esc(relTime(r.updatedAt)) + '</td></tr>';
    }).join('');
    out.innerHTML = '<table><thead><tr><th>ชื่อเล่น</th><th>Grammar</th><th>คำศัพท์</th><th>อ่าน</th>' +
      '<th>คะแนนรวม</th><th>ใช้งานล่าสุด</th></tr></thead><tbody>' +
      (rows || '<tr><td colspan="6" class="muted">ยังไม่มีข้อมูล</td></tr>') + '</tbody></table>';
  }

  function load(key) {
    err.textContent = '';
    fetch('/api/admin/players', { headers: { 'X-Admin-Key': key } })
      .then(function (r) {
        if (r.status === 401) { sessionStorage.removeItem(KEY_STORAGE); throw new Error('unauthorized'); }
        return r.json();
      })
      .then(function (data) {
        if (!data || !data.ok) throw new Error('bad');
        gate.hidden = true;
        render(data);
      })
      .catch(function () {
        err.textContent = 'รหัสผ่านไม่ถูกต้อง หรือเชื่อมต่อไม่ได้';
        gate.hidden = false;
      });
  }

  document.getElementById('go').addEventListener('click', function () {
    var key = document.getElementById('key').value.trim();
    if (!key) return;
    try { sessionStorage.setItem(KEY_STORAGE, key); } catch (e) {}
    load(key);
  });

  var saved = null;
  try { saved = sessionStorage.getItem(KEY_STORAGE); } catch (e) {}
  if (saved) load(saved);
})();
</script>
</body>
</html>
```

- [ ] **Step 2: Write `docker/.env.example`**

```
# คัดลอกไฟล์นี้เป็น .env แล้วตั้งรหัสผ่านของจริง (ห้าม commit .env ขึ้น git)
# ใช้เข้าหน้า /admin.html สำหรับครู/แอดมิน ดูสถิติผู้เรียน
ADMIN_KEY=changeme-set-a-real-secret
```

- [ ] **Step 3: Add `docker/.env` to `.gitignore`**

Add this line to the end of `.gitignore`:

```
docker/.env
```

- [ ] **Step 4: Update `docker/Dockerfile`**

Change:

```dockerfile
FROM node:22-alpine
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

to:

```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY docker/scores-logic.mjs docker/store.mjs docker/server.mjs ./
COPY docs/ ./public/
COPY docker/config.js ./public/config.js
COPY docker/admin.html ./public/admin.html
ENV PORT=8080
ENV DATA_FILE=/data/scores.db
VOLUME ["/data"]
EXPOSE 8080
CMD ["node", "server.mjs"]
```

- [ ] **Step 5: Update `docker/docker-compose.yml`**

Change:

```yaml
services:
  eng-ged:
    build:
      context: ..
      dockerfile: docker/Dockerfile
    image: eng-ged:latest
    container_name: eng-ged
    init: true
    restart: unless-stopped
    ports:
      - "127.0.0.1:3010:8080"
    volumes:
      - eng_ged_data:/data

volumes:
  eng_ged_data:
```

to:

```yaml
services:
  eng-ged:
    build:
      context: ..
      dockerfile: docker/Dockerfile
    image: eng-ged:latest
    container_name: eng-ged
    init: true
    restart: unless-stopped
    env_file:
      - .env
    ports:
      - "127.0.0.1:3010:8080"
    volumes:
      - eng_ged_data:/data

volumes:
  eng_ged_data:
```

(`env_file: .env` is resolved relative to this compose file's own directory, i.e. `docker/.env` — matches where `docker/.env.example` lives.)

- [ ] **Step 6: Sanity-check the new/changed files**

Run: `node --check docker/server.mjs && node --check docker/store.mjs && node --check docker/scores-logic.mjs`
Expected: no output, exit code 0.

There is deliberately no automated test for `admin.html` itself (per the design spec's explicit, considered choice — it's an internal teacher-only tool outside the learner-facing app's test surface); `GET /api/admin/players`, the actual logic it depends on, is already fully covered by Task 4. It gets a manual `curl` + browser check during deployment in Task 7, including a check that a nickname containing `<script>` renders as text, not markup.

- [ ] **Step 7: Commit**

```bash
git add docker/admin.html docker/.env.example docker/Dockerfile docker/docker-compose.yml .gitignore
git commit -m "Add the admin.html dashboard and ADMIN_KEY wiring"
```

---

### Task 6: Client changes — `src/app/ui.js` sends progress counts

**Files:**
- Modify: `src/app/ui.js`
- Modify: `test/e2e_sheet.py`

**Interfaces:**
- Consumes: `Store.data` shape already established in `ui.js` (`p.grammar[id].answered`, `p.vocab` keys, `p.reading` keys — same data `partScore` already reads).
- Produces: `progressCounts(p): {grammar, vocab, reading}` (counts, not scores). `Remote.send()`'s POST body grows to include `grammarDone`/`vocabDone`/`readingDone`.

- [ ] **Step 1: Add `progressCounts` next to `partScore`**

In `src/app/ui.js`, immediately after the closing `}` of `partScore` (the function ending with `Object.keys(p.reading || {}).forEach(function (k) { sum += p.reading[k].best || 0; }); return sum; }`), add:

```js
  function progressCounts(p) {
    var g = 0;
    Object.keys(p.grammar || {}).forEach(function (k) { if (p.grammar[k].answered === 5) g++; });
    var vocabSets = {};
    Object.keys(p.vocab || {}).forEach(function (k) {
      var set = k.split('-').slice(0, 2).join('-');
      if (p.vocab[k].post > 0) vocabSets[set] = true;
    });
    return { grammar: g, vocab: Object.keys(vocabSets).length, reading: Object.keys(p.reading || {}).length };
  }
```

- [ ] **Step 2: Extend `Remote.send()` to include the counts**

In `src/app/ui.js`, change the `send` method of `Remote` from:

```js
    send: function () {
      var p = Store.data;
      if (!p || !p.nick || Store.root.current === GUEST) return;
      var body = { action: 'submit', nick: p.nick, grammar: partScore(p, 'grammar'), vocab: partScore(p, 'vocab'), reading: partScore(p, 'reading') };
      var sig = p.nick + '|' + body.grammar + '/' + body.vocab + '/' + body.reading;
      if (p.sent === sig) return;
      if (!body.grammar && !body.vocab && !body.reading) return; // ยังไม่มีคะแนน ไม่ต้องสร้างแถว
```

to:

```js
    send: function () {
      var p = Store.data;
      if (!p || !p.nick || Store.root.current === GUEST) return;
      var counts = progressCounts(p);
      var body = {
        action: 'submit', nick: p.nick,
        grammar: partScore(p, 'grammar'), vocab: partScore(p, 'vocab'), reading: partScore(p, 'reading'),
        grammarDone: counts.grammar, vocabDone: counts.vocab, readingDone: counts.reading
      };
      var sig = p.nick + '|' + body.grammar + '/' + body.vocab + '/' + body.reading + '|' + body.grammarDone + '/' + body.vocabDone + '/' + body.readingDone;
      if (p.sent === sig) return;
      if (!body.grammar && !body.vocab && !body.reading && !body.grammarDone && !body.vocabDone && !body.readingDone) return; // ยังไม่มีความคืบหน้า ไม่ต้องสร้างแถว
```

(The rest of `send` — the `fetch(...)` call and its `.then`/`.catch` — is unchanged.)

- [ ] **Step 3: Extend the mock leaderboard server in `test/e2e_sheet.py` to capture the new fields**

In `test/e2e_sheet.py`, change:

```python
MAX = {'grammar': 205, 'vocab': 640, 'reading': 53}
```

to:

```python
MAX = {'grammar': 205, 'vocab': 640, 'reading': 53}
DONE_MAX = {'grammar': 31, 'vocab': 16, 'reading': 12}
```

Then change `do_POST`'s body from:

```python
    def do_POST(self):
        LOG['post'] += 1
        if not self.headers.get('Content-Type', '').startswith('text/plain'): LOG['bad_ct'] += 1
        d = json.loads(self.rfile.read(int(self.headers['Content-Length'])))
        nick = str(d.get('nick', '')).strip()[:20]
        key = nick.lower()
        old = SHEET.get(key, {'nick': nick, 'grammar': 0, 'vocab': 0, 'reading': 0})
        for p in MAX: old[p] = max(old[p], min(MAX[p], int(d.get(p, 0))))
        old['nick'] = nick; SHEET[key] = old
        self._json({'ok': True, 'saved': old})
```

to:

```python
    def do_POST(self):
        LOG['post'] += 1
        if not self.headers.get('Content-Type', '').startswith('text/plain'): LOG['bad_ct'] += 1
        d = json.loads(self.rfile.read(int(self.headers['Content-Length'])))
        nick = str(d.get('nick', '')).strip()[:20]
        key = nick.lower()
        old = SHEET.get(key, {'nick': nick, 'grammar': 0, 'vocab': 0, 'reading': 0, 'grammarDone': 0, 'vocabDone': 0, 'readingDone': 0})
        for p in MAX: old[p] = max(old[p], min(MAX[p], int(d.get(p, 0))))
        for p in DONE_MAX:
            dk = p + 'Done'
            old[dk] = max(old.get(dk, 0), min(DONE_MAX[p], int(d.get(dk, 0))))
        old['nick'] = nick; SHEET[key] = old
        self._json({'ok': True, 'saved': old})
```

- [ ] **Step 4: Add assertions that the client actually sends the new fields**

In `test/e2e_sheet.py`, immediately after the existing line `check(g_mali > 0, 'คะแนน Grammar ของมะลิในชีตต้องมากกว่า 0')`, add:

```python
    check(SHEET.get('มะลิ', {}).get('grammarDone', 0) >= 1, f'เครื่อง A ต้องส่ง grammarDone (จำนวนบทที่ทำแล้ว) เข้า sheet ด้วย: {SHEET.get("มะลิ")}')
```

Immediately after the existing line `check(SHEET.get('ton', {}).get('reading', 0) > 0, 'เครื่อง B ส่งคะแนนอ่านไม่สำเร็จ')`, add:

```python
    check(SHEET.get('ton', {}).get('readingDone', 0) >= 1, f'เครื่อง B ต้องส่ง readingDone เข้า sheet ด้วย: {SHEET.get("ton")}')
```

- [ ] **Step 5: Build and run the e2e sheet test**

Run: `npm run build && python test/e2e_sheet.py` (or `python3` depending on your platform's alias)
Expected: `✓ ผ่านทั้งหมด`. Run it 2-3 times — this file has a pre-existing, unrelated `#lbw-grammar .board li` timeout flake (~1/3 of runs, confirmed via `git stash` against the pre-this-project code); a lone timeout failure there is not this task's regression, but every `grammarDone`/`readingDone`/`doneMax`-related assertion must pass on every run that completes.

- [ ] **Step 6: Commit**

```bash
git add src/app/ui.js test/e2e_sheet.py
git commit -m "Send lesson/set/passage completion counts alongside scores"
```

---

### Task 7: Push and deploy (requires a manual secret-setup checkpoint)

**Files:** none in this repo — remote shell commands, run from this machine using the existing deploy key `~/.ssh/eng_ged_deploy` (`xphoenix@119.59.102.113`), same as every previous deploy in this project.

**Interfaces:**
- Consumes: the pushed `main` branch (Tasks 1–6), the running container (rebuilt in this task).

- [ ] **Step 1: Confirm the full local suite passes and the tree is clean**

Run: `npm run validate && npm run test:docker` (note: `test:docker` in `package.json` already lists all four `docker/*.test.mjs` files explicitly, so the new/changed tests run automatically — no `package.json` change needed) `&& git status`
Expected: validate passes with 3 more checks than before Task 2; `test:docker` reports more passing tests than before (11 scores-logic + 9 store + 13 server + 2 config = 35 total, up from 23); working tree clean (everything from Tasks 1–6 committed).

- [ ] **Step 2: Push**

```bash
git push origin main
```

- [ ] **Step 3 (agent): Pull the new code on the server (do not rebuild yet — `.env` doesn't exist there yet, and `env_file: .env` makes `docker compose` refuse to start without it)**

```bash
ssh -i ~/.ssh/eng_ged_deploy -p 22 xphoenix@119.59.102.113 'cd /home/xphoenix/eng-ged && git pull --ff-only'
```

Expected: a fast-forward summary listing the files from Tasks 1–6.

- [ ] **Step 4 (user, not the agent): create the real `docker/.env` on the server**

This holds a real secret the agent should not generate or see. Run this yourself, in your own terminal:

```
ssh -i ~/.ssh/eng_ged_deploy -p 22 xphoenix@119.59.102.113
cd /home/xphoenix/eng-ged/docker
cp .env.example .env
nano .env   # replace ADMIN_KEY's value with a real passcode you'll remember, save (Ctrl+O, Enter), exit (Ctrl+X)
exit
```

**Stop and confirm back here once this is done** — the agent cannot proceed to the rebuild until `docker/.env` exists on the server (you don't need to tell the agent what key you chose).

- [ ] **Step 5 (agent): Rebuild and restart the container**

```bash
ssh -i ~/.ssh/eng_ged_deploy -p 22 xphoenix@119.59.102.113 \
  'cd /home/xphoenix/eng-ged && docker compose -f docker/docker-compose.yml up -d --build'
```

Expected: image builds, `eng-ged` container reported `Started`/`Running` (no `.env not found` error, since Step 4 already created it).

- [ ] **Step 6 (agent): Verify the leaderboard endpoint still works (unaffected by this change) and the admin gate is enforced**

```bash
ssh -i ~/.ssh/eng_ged_deploy -p 22 xphoenix@119.59.102.113 '
  echo "-- leaderboard, unaffected --"; curl -s http://127.0.0.1:3010/api/scores?action=top; echo
  echo "-- admin, no key --"; curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:3010/api/admin/players
  echo "-- admin, wrong key --"; curl -s -o /dev/null -w "%{http_code}\n" -H "X-Admin-Key: definitely-wrong" http://127.0.0.1:3010/api/admin/players
  echo "-- admin.html is served --"; curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:3010/admin.html
'
```

Expected: first line `{"ok":true,"max":{...},"rows":[]}`; the two admin checks both print `401` (proves `ADMIN_KEY` is set on the server *and* being enforced — not `503`, which would mean Step 4 didn't actually take effect); `admin.html` prints `200`.

- [ ] **Step 7 (agent): XSS check — a nickname with `<script>` must render as text, not execute, on the dashboard**

```bash
ssh -i ~/.ssh/eng_ged_deploy -p 22 xphoenix@119.59.102.113 \
  'curl -s -X POST http://127.0.0.1:3010/api/scores -H "Content-Type: text/plain" -d "{\"nick\":\"<script>x</script>\",\"grammar\":1,\"grammarDone\":1}"'
```

Then open `https://eng-ged.phoenix-super.org/admin.html` in a real browser, enter the key you set in Step 4, and confirm the row shows the literal text `<script>x</script>` in the nickname column (not a broken page, not an alert box). Clean this test row up afterward the same way earlier test nicknames were removed from `/data/scores.db` in this project (open a shell in the container and delete that row, or reset the file — same pattern used earlier for `/data/scores.json`).

- [ ] **Step 8 (agent): Confirm the other three containers are untouched**

```bash
ssh -i ~/.ssh/eng_ged_deploy -p 22 xphoenix@119.59.102.113 'docker ps --format "{{.Names}}\t{{.Status}}"'
```

Expected: `linebot_alpha-app-1`, `pgadmin_container_alpha`, `postgres_alpha` all still `Up`, alongside the rebuilt `eng-ged`.

- [ ] **Step 9 (user): full dashboard smoke test**

Open `https://eng-ged.phoenix-super.org/admin.html`, enter your key, complete a mini-test on the main site under a real nickname from another tab, refresh the dashboard, and confirm that player's row appears with the right "X/31" grammar count and a recent "ใช้งานล่าสุด" time.
