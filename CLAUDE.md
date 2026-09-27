# CLAUDE.md — English Path

Self-study English web app for Thai learners, A1 → GED reading. Vanilla JS, no framework, no runtime dependencies. UI text is Thai; learning content is English.

## Commands

```bash
npm run build        # src/ → dist/index.html (single file, claude.ai Artifact) + docs/ (GitHub Pages)
npm run validate     # data + game-logic checks (Node only, ~1s) — run after ANY data edit
npm run test:e2e     # full browser run at phone size (needs: pip install playwright && playwright install chromium)
npm test             # validate + all e2e suites
npm run dev          # serve docs/ at http://localhost:8080
```

Always `npm run build` after editing `src/`; `docs/` and `dist/` are generated — never hand-edit them (except `docs/config.js`, see below).

## Layout

```
src/data/            ALL learning content (edit here, not in ui.js)
  grammar-1..5-*.js  5 categories → lessons (explain, formula, examples, confuse, quiz[5]) + post[10]
  vocab-a1..b2.js    100 words per level, rows 1–25 = set 1 … (16 sets × 25)
  reading.js         12 passages, questions cite evidence sentence indexes (ev)
src/app/logic.js     pure game logic (shuffle, distractors, card round, post-test) — no DOM, tested in Node
src/app/vocab-model.js  raw vocab rows → EP.vocab
src/app/ui.js        everything on screen: rendering, speech, local profiles, Google Sheet sync
src/styles.css       design tokens (light/dark), components
src/index.template.html  page shell; build injects CSS, scripts, and (docs only) config.js
apps-script/Code.gs  Google Apps Script backend for the shared leaderboard (paste into the sheet)
test/validate.mjs    counts, uniqueness, ambiguity lists, 1000s of simulated rounds
test/e2e*.py         Playwright: full flows, nicknames, cross-device leaderboard with a mock endpoint
docs/                GitHub Pages output (index.html + config.js)
dist/                Artifact output (gitignored)
```

Scripts load in order: logic → data → vocab-model → ui (see `scripts` in build.mjs). Everything hangs off the global `window.EP`.

## Content rules (validate.mjs enforces most of these)

- Grammar: every lesson has exactly 5 quiz items; every category exactly 10 `post` items, easy → hard; lessons ordered A1→B2 within a category. Each question needs `q, o[4], a, clue, rule, why, n[4] (why each wrong option is wrong), ex`. Options are shuffled at render time, so `a` can be any index.
- Test only what was taught earlier in that lesson/category.
- Vocab row: `[word, pos, thai, sentence with exactly one ___, thai translation, [same-set words that could ALSO fill the blank]]`. Thai meanings must be unique within a set. Exactly 100 words per level. The last array prevents ambiguous distractors — when adding a sentence, check it against all 24 other words in the set.
- Reading: `th.length === s.length`; `ev` indexes are 0-based sentence indexes or `'visual'`. Mark all invented content as practice; never copy real GED items. Invented statistics must be labeled "ข้อมูลสมมุติ".
- Levels are for practice, not official CEFR/GED lists — keep that disclaimer.

## Behavior that must not regress

- Speech: English only, only on user click (`Speech.speak` rejects Thai via `L.hasThai`). Never autoplay.
- "Next lesson" stays disabled until all 5 mini-test answers are in; category post-test unlocks only when every lesson's mini-test is done.
- Vocab: cards never change before feedback is shown; post-test = 15 unique items from the set's 25, 4 options from the same set.
- Correct/wrong is shown with text + symbol, not color alone. Respect `prefers-reduced-motion`. No horizontal scroll at 360px.
- Progress lives in localStorage key `english-path:v2`, per nickname profile (`__guest` = no nickname). Wrap every storage access in try/catch — the page must work with storage blocked.

## Shared leaderboard (Google Sheet)

- `docs/config.js` sets `window.EP_CONFIG.scoreEndpoint` to the Apps Script `/exec` URL. Empty → local-only leaderboard. `npm run build` does not overwrite an existing config.js (use `node build.mjs --reset-config` to regenerate).
- Client POSTs `text/plain` JSON (avoids CORS preflight, which Apps Script can't answer) and GETs `?action=top`. Server keeps the max per nickname per part and clamps to part maxima (`MAX` in Code.gs must match `partMax()` in ui.js if content counts change: grammar 205, vocab 640, reading 53).
- The claude.ai Artifact build (dist/) cannot call external hosts, so it always runs local-only.
- No auth: anyone with the endpoint can submit. Fine for classroom motivation; don't present it as secure.

## Setup for the teacher

See SETUP.md (Thai): Apps Script deploy → push repo → Settings → Pages → `main` / `docs` → paste URL into `docs/config.js`.
