// docker/config.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';

test('config.js sets scoreEndpoint to an absolute same-origin URL (not a bare relative path)', () => {
  const source = readFileSync(new URL('./config.js', import.meta.url), 'utf8');
  const context = { window: {}, location: { origin: 'https://eng-ged.phoenix-super.org' } };
  vm.createContext(context);
  vm.runInContext(source, context);

  // src/app/ui.js's Remote.enabled() only accepts endpoints matching
  // ^https://  or  ^http://(localhost|127.0.0.1) — a bare '/api/scores'
  // matches neither, which silently disables the whole leaderboard.
  assert.match(context.window.EP_CONFIG.scoreEndpoint, /^https:\/\//);
  assert.equal(context.window.EP_CONFIG.scoreEndpoint, 'https://eng-ged.phoenix-super.org/api/scores');
});

test('config.js works for a local http://localhost deployment too', () => {
  const source = readFileSync(new URL('./config.js', import.meta.url), 'utf8');
  const context = { window: {}, location: { origin: 'http://localhost:3010' } };
  vm.createContext(context);
  vm.runInContext(source, context);
  assert.equal(context.window.EP_CONFIG.scoreEndpoint, 'http://localhost:3010/api/scores');
});
