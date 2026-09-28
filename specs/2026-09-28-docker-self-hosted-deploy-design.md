# Docker self-hosted deployment — design spec

Date: 2026-09-28
Status: approved for implementation planning

## Context

English Path currently ships two builds from `build.mjs`:
- `dist/index.html` — single-file Artifact build, always local-only leaderboard.
- `docs/index.html` + `docs/config.js` — GitHub Pages build, leaderboard optionally backed by a Google Apps Script + Google Sheet (`apps-script/Code.gs`).

The user has a Linux server (`119.59.102.113`, user `xphoenix`, Docker + Docker Compose + nginx already installed) with the domain `eng-ged.phoenix-super.org` already pointed at it via Cloudflare (Cloudflare terminates HTTPS; origin traffic is plain HTTP). The server already runs three other Docker-based apps proxied through nginx by `server_name` (`alpha.phoenix-super.org` → `127.0.0.1:3002`, `pgalpha.phoenix-super.org` → `127.0.0.1:8081`, plus a `postgres_alpha` container). nginx vhost config lives in `/etc/nginx/conf.d/block_domains.conf`. No certbot/TLS is installed on the box — every domain relies on Cloudflare for HTTPS at the edge.

Goal: self-host English Path (including its leaderboard backend) on this server/domain, replacing the Google Apps Script dependency for this deployment, without touching the existing three apps or nginx blocks.

## Goals

- Serve the built static site at `https://eng-ged.phoenix-super.org` (via Cloudflare → nginx → new Docker container).
- Replace Google Apps Script with a self-hosted leaderboard API that is behaviorally identical to `apps-script/Code.gs` (same clamping via `MAX`, same "keep the higher score per nickname per part" merge logic, same `GET ?action=top` / `POST` JSON contract) so `src/app/ui.js` needs **zero code changes** — only `scoreEndpoint` changes, to a same-origin relative path.
- Persist leaderboard data across container restarts/redeploys (Docker volume).
- Zero new runtime dependencies (stay consistent with the project's vanilla-JS/no-dependency ethos) — implement the API with Node's built-in `http` module only.
- Leave `dist/`, GitHub Pages (`docs/` + Google Sheet), and all other containers/nginx blocks on the server untouched.

## Non-goals

- No TLS/certbot work on the server (Cloudflare already handles HTTPS for this domain, same as the other three domains).
- No migration of existing Google Sheet leaderboard data — this is a fresh, independent leaderboard for the self-hosted deployment.
- No changes to `apps-script/Code.gs` or the GitHub Pages deployment path.
- No auth on the new API — same trust model as the existing Apps Script backend (documented, not hidden): anyone who can reach the endpoint can submit a score. Fine for classroom motivation.

## Architecture

One new Docker container, built from a new `docker/` directory in this repo:

```
docker/
  Dockerfile
  server.mjs
  docker-compose.yml
```

`server.mjs` is a dependency-free Node HTTP server that:
1. Serves static files from `./public` (the `docs/` build output, copied in at image build time) for any path that isn't `/api/scores`.
2. Implements `/api/scores`:
   - `GET /api/scores?action=top` → `{ ok: true, max: MAX, rows: [...] }` — same shape as `Code.gs`'s `doGet`.
   - `POST /api/scores` (body: JSON, any `Content-Type` accepted — no CORS preflight concerns since same-origin) → validates/cleans `nick`, clamps each part to `MAX`, keeps the max of (existing, incoming) per part per nickname (case-insensitive key), persists, returns `{ ok: true, saved: {...} }`. Mirrors `cleanNick_`, `MAX`, `PARTS` from `Code.gs` exactly.
3. Persists scores as JSON to `/data/scores.json` (a Docker named volume mounted at `/data`), with a simple in-process write queue (Node is single-threaded per request; serialize writes so two concurrent POSTs can't interleave a corrupt file — matches the intent of `Code.gs`'s `LockService` lock).

`MAX` and `PARTS` constants are duplicated from `Code.gs` into `server.mjs` (kept in sync manually — same as today's cross-file constraint documented in root `CLAUDE.md` between `Code.gs` and `ui.js`'s `partMax()`).

### Data model — `/data/scores.json`

```json
{
  "nickname-lowercase-key": {
    "nick": "Display Name",
    "grammar": 0,
    "vocab": 0,
    "reading": 0,
    "updated": "2026-09-28T12:00:00.000Z"
  }
}
```

`GET` response `rows` is `Object.values()` of this map, sorted by total descending (grammar+vocab+reading), matching current client expectations for a leaderboard list.

### nginx integration

Add a **new** server block to the existing `/etc/nginx/conf.d/block_domains.conf` (appended, not replacing anything), following the exact pattern already used for `alpha.phoenix-super.org` / `pgalpha.phoenix-super.org`:

```nginx
server {
    listen 80;
    server_name eng-ged.phoenix-super.org;
    client_max_body_size 1M;
    location / {
        limit_req zone=mylimit burst=20 nodelay;
        proxy_pass http://127.0.0.1:3010;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Port `3010` chosen because `3002` and `8081` are already in use. Change requires `sudo` (config edit + `nginx -t` + `systemctl reload nginx`); the three existing server blocks in that file are not modified.

### Docker Compose

Single service, host-only port publish (`127.0.0.1:3010:8080` — not exposed on `0.0.0.0`, since nginx is the only intended entry point, matching how `alpha`/`pgalpha` containers are bound), named volume for `/data`, `restart: unless-stopped`.

### Build-time config

A new `docker/config.js` (analogous to `docs/config.js`) sets:
```js
window.EP_CONFIG = { scoreEndpoint: '/api/scores' };
```
The Dockerfile copies the `docs/` build output as `public/`, then overwrites `public/config.js` with this same-origin version — so the self-hosted deployment always talks to its own `/api/scores`, independent of whatever is in the repo's `docs/config.js` (which stays wired to Google Sheets / empty for GitHub Pages, untouched).

## Deployment flow

1. `npm run build` locally (produces current `docs/`).
2. Commit + push to GitHub (existing `origin` = `caceecacee/english-ged.git`).
3. On the server: clone or `git pull` the repo into `/home/xphoenix/eng-ged`.
4. `docker compose -f docker/docker-compose.yml up -d --build` (build context = repo root, so the Dockerfile can `COPY docs/ ./public`).
5. Append the new nginx server block (sudo), `sudo nginx -t`, `sudo systemctl reload nginx`.
6. Verify: `curl http://127.0.0.1:3010/api/scores?action=top` returns `{"ok":true,...}`; browser check `https://eng-ged.phoenix-super.org` loads the site and a mini-test submits/reflects in the leaderboard.

## Error handling

- Malformed POST body → `{ ok: false, error: 'bad_json' }` (matches `Code.gs`).
- Missing/empty nickname after cleaning → `{ ok: false, error: 'no_nick' }`.
- `scores.json` missing on first boot → treated as empty map, file created on first write.
- Write serialization: an in-process promise chain (no external lock needed — single container, single process).

## Testing

- Manual `curl` checks for `GET ?action=top` (empty then populated) and `POST` (new nickname, higher score overwrite, lower score ignored, clamping above `MAX`).
- Browser smoke test through the real domain: nickname entry, one mini-test, leaderboard refresh, and a second "device" (different browser/profile) to confirm cross-device visibility — this was the original ask.
- Confirm `docker ps` still shows `linebot_alpha-app-1`, `pgadmin_container_alpha`, `postgres_alpha` running unaffected, and `alpha.phoenix-super.org` / `pgalpha.phoenix-super.org` still resolve correctly after the nginx reload.

## Rollback

- nginx: the added block is a self-contained, appended stanza — removable independently; `nginx -t` before reload catches syntax errors before they can affect other domains.
- Docker: `docker compose down` removes only the new container; named volume keeps score data for a future retry.
