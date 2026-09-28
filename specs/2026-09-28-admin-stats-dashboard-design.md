# Teacher/admin stats dashboard (SQLite) — design spec

Date: 2026-09-28
Status: approved for implementation planning

## Context

The self-hosted Docker deployment (`docker/`, see `specs/2026-09-28-docker-self-hosted-deploy-design.md`) currently persists only a per-nickname leaderboard (best `grammar`/`vocab`/`reading` score) in a flat JSON file (`docker/store.mjs` → `/data/scores.json`). Detailed per-lesson progress lives only in each browser's `localStorage` and is never sent to the server — there is no view of "how far has this student actually gotten" anywhere outside their own device.

The user wants a real database (this app's own, not shared with the other three containers already on the server) so a teacher can see, per student, an overview of progress — not a full event log, just current standing.

## Goals

- A teacher/admin can open a web page on the same domain and see, per nickname: lessons/sets/passages completed (out of the known totals), current best scores, and when they were last active.
- Storage moves from the JSON file to SQLite (`node:sqlite`, Node built-in — confirmed working on the deployed `node:22-alpine` base image; **zero new npm/runtime dependencies**, consistent with the rest of the project).
- The dashboard is gated by a simple shared passcode (`ADMIN_KEY`), not open to everyone like the rest of the site.
- The existing leaderboard contract (`GET/POST /api/scores`) keeps working unchanged for the learner-facing app and for `apps-script/Code.gs` (Google Sheets deployment) — this is additive, not a breaking change.

## Non-goals

- No per-event/timestamped history (every quiz answer, every click) — overview counts only, per the user's explicit choice.
- No migration of old data — `/data/scores.json` on production is currently empty (verified via SSH before writing this spec), so the new SQLite store starts empty. A migration script is not built; if this is ever needed against non-empty data in the future, that's a separate follow-up.
- No changes to `apps-script/Code.gs`, `dist/` (Artifact build), or GitHub Pages — this only affects the `docker/` self-hosted deployment.
- No per-user accounts for the dashboard — one shared passcode, matching the classroom-scale trust model already documented for the rest of this deployment.
- No changes to the other three containers on the server (`linebot_alpha-app-1`, `pgadmin_container_alpha`, `postgres_alpha`) or their nginx blocks.

## Architecture

```
docker/
  scores-logic.mjs   # extended: DONE_MAX, done-count clamping/merge
  store.mjs          # rewritten: SQLite-backed (node:sqlite) instead of JSON file
  server.mjs         # extended: GET /api/admin/players (ADMIN_KEY-gated)
  admin.html          # new: static teacher dashboard page
  docker-compose.yml # extended: env_file for ADMIN_KEY
  .env.example        # new: documents ADMIN_KEY (committed)
  .env                 # new, gitignored: the real secret, set on the server only
```

### Data model — SQLite (`/data/scores.db`, one table)

```sql
CREATE TABLE players (
  nick_key      TEXT PRIMARY KEY,   -- lowercase nick, same key semantics as today's JSON
  nick          TEXT NOT NULL,      -- display form
  grammar       INTEGER NOT NULL DEFAULT 0,
  vocab         INTEGER NOT NULL DEFAULT 0,
  reading       INTEGER NOT NULL DEFAULT 0,
  grammar_done  INTEGER NOT NULL DEFAULT 0,  -- lessons with a completed mini-test, out of 31
  vocab_done    INTEGER NOT NULL DEFAULT 0,  -- sets with a completed post-test, out of 16
  reading_done  INTEGER NOT NULL DEFAULT 0,  -- passages attempted, out of 12
  updated_at    TEXT NOT NULL                -- ISO timestamp of the last submit
);
```

`grammar_done`/`vocab_done`/`reading_done` totals (31/16/12) are **derived from content data**, never hardcoded twice — `docker/scores-logic.mjs` exports `DONE_MAX` computed the same way `test/validate.mjs` already computes lesson/set/passage counts, and `test/validate.mjs` is extended to cross-check `DONE_MAX` against real content counts, exactly like the existing `MAX` cross-check added in commit `f2400f8` (this is the same class of bug that fix addressed — a third place these numbers could silently drift — so the new counts get the same guard from day one, not bolted on later).

Merge semantics for **all six numeric fields** (scores and done-counts alike): `next = max(existing, incoming)`, clamped to `[0, MAX[part]]` / `[0, DONE_MAX[part]]`. Same reasoning as today's score merge — a device with stale/incomplete local data must never regress a student's recorded progress.

### `docker/store.mjs` — new interface

```
createStore(dbFilePath) -> {
  submit(rawNick, incoming): Promise<{ok:true, saved:{...}} | {ok:false, error}>,
  top(): Promise<{ok:true, max:MAX, rows:[...]}>,           // unchanged contract, existing leaderboard
  players(): Promise<{ok:true, doneMax:DONE_MAX, rows:[...]}> // new, for the admin dashboard
}
```

`submit`'s `incoming` shape grows from `{grammar,vocab,reading}` to `{grammar,vocab,reading,grammarDone,vocabDone,readingDone}` — all six merged the same way, in the same write-queue-serialized, atomic (write-tmp+rename) fashion already used for the JSON store (Task from the previous plan; `node:sqlite`'s synchronous `DatabaseSync` API removes the need for the manual tmp-file dance for the DB file itself — SQLite's own transaction gives us atomicity — but the in-process write queue is kept to serialize concurrent submits the same way).

### `docker/server.mjs` — additions

- `POST /api/scores` — same route, body grows to include `grammarDone`/`vocabDone`/`readingDone` (both optional; missing/non-numeric treated as `0`, same defensive coercion as the existing fields — no behavior change for older cached clients that only send the original three fields).
- `GET /api/admin/players` — new route:
  - Requires header `X-Admin-Key: <value>` matching `process.env.ADMIN_KEY`. Missing `ADMIN_KEY` in the environment (misconfiguration) → the route always returns 503, never silently open.
  - Wrong/missing key → `401 { ok:false, error:'unauthorized' }`.
  - Success → `200 { ok:true, doneMax:{grammar:31,vocab:16,reading:12}, players:[ {nick,grammar,vocab,reading,grammarDone,vocabDone,readingDone,updatedAt}, ... ] }`, sorted by `updatedAt` descending (most recently active first — the natural thing a teacher checks).

### `docker/admin.html` — new static page

- Plain HTML + inline vanilla JS (no framework, no build step — matches the project's ethos), copied into the image the same way `config.js` is (`COPY docker/admin.html ./public/admin.html` in the Dockerfile), reachable at `/admin.html`. Not linked from the learner-facing app.
- On load: if no key in `sessionStorage`, show a password prompt. Submitting it stores the key in `sessionStorage` and fetches `/api/admin/players` with the `X-Admin-Key` header.
- `401` response → clear the stored key, show "รหัสผ่านไม่ถูกต้อง" and re-prompt.
- Success → render a table: nickname, "บทเรียน X/31", "คำศัพท์ X/16", "อ่าน X/12", คะแนนรวม, เวลาที่ใช้งานล่าสุด (relative, e.g. "5 นาทีที่แล้ว").
- Thai UI text, consistent with the rest of the app.

### Client (`src/app/ui.js`) changes

- New helper `progressCounts(p)` next to the existing `partScore(p, part)`:
  - `grammar`: count of lesson ids in `p.grammar` where `.answered === 5`.
  - `vocab`: count of distinct sets (same `set` grouping `partScore('vocab')` already computes) where the post-test has been completed at least once (`.post > 0`).
  - `reading`: count of distinct passage ids present as keys in `p.reading`.
- `Remote.send()` extended to include `grammarDone`, `vocabDone`, `readingDone` in the POST body alongside the existing three score fields. Confirmed safe for both backends: `apps-script/Code.gs`'s `doPost` only reads the `PARTS` keys it knows about and silently ignores unrecognized JSON fields (verified by reading `Code.gs` — no schema validation that would reject extra fields).
- No other UI change — students don't see anything new; this is purely additional data riding on the existing sync call.

### Access control / secrets

- `ADMIN_KEY` lives in `docker/.env` (gitignored), loaded via `env_file:` in `docker-compose.yml`. `docker/.env.example` is committed with a placeholder and a comment, documented in `SETUP.md`.
- This is the first real secret in this repo's deployment — everything else (`docker/config.js`, `apps-script/Code.gs` URL) is not sensitive. The `.env` file must be created by hand on the server (not generated by this plan) since it holds a real secret; the plan will stop and ask the user to set it, the same way Task 7 of the previous plan stopped for `sudo`.

## Error handling

- `/api/admin/players` with no `ADMIN_KEY` configured on the server → `503`, never falls open.
- `/api/scores` POST missing the new done-count fields (older cached page, or a future non-Docker client) → coerced to `0` via the same `Number.isFinite(...)` defensive pattern already used for the score fields (`mergeScore` in `docker/scores-logic.mjs`); never crashes.
- SQLite file missing on first boot → `node:sqlite` creates it; `CREATE TABLE IF NOT EXISTS` on store initialization, same "just works on first run" behavior as the JSON store had.

## Testing

- `docker/scores-logic.test.mjs` — extend with tests for `DONE_MAX`, clamping/merge of the three new fields (negative/NaN/over-max), mirroring the existing score tests.
- `docker/store.test.mjs` — extend/rewrite for the SQLite backend: submit/merge correctness (scores + done-counts), concurrent-submit serialization (same race test as today, now against SQLite), `players()` listing shape and sort order, fresh-file-doesn't-exist-yet behavior.
- `docker/server.test.mjs` — new tests for `/api/admin/players`: 200 with correct key, 401 with wrong/missing key, 503 when `ADMIN_KEY` isn't set, correct row shape.
- `test/validate.mjs` — extend the existing `MAX` cross-check to also cross-check `DONE_MAX` against real grammar-lesson/vocab-set/reading-passage counts (same mechanism as the `f2400f8` fix).
- No new Playwright/e2e coverage for `admin.html` itself — it's an internal teacher-only tool outside the learner-facing app's test surface; flagged here as a deliberate trade-off rather than an oversight. Manual verification (`curl` with/without the key, then a real browser check against the deployed page) covers it instead.
- Manual server verification after deploy: confirm the other three containers and their nginx blocks are untouched (same check as the previous plan's Task 6/7).

## Rollback

- Docker: `docker compose down` removes only this container; the named volume (now holding `/data/scores.db` instead of `/data/scores.json`) is preserved for a retry.
- If SQLite turns out to be a problem post-deploy, the store's public interface (`submit`/`top`/`players`) is unchanged from what a JSON-backed implementation would expose, so reverting `store.mjs` to a JSON-file implementation is a contained, single-file change.
