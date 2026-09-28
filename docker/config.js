// docker/config.js — overrides docs/config.js inside the image so the
// self-hosted deployment always talks to its own same-origin API.
window.EP_CONFIG = {
  scoreEndpoint: location.origin + '/api/scores'
};
