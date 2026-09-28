// docker/store.mjs
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { cleanNick, mergeScore, topRows, MAX } from './scores-logic.mjs';

export function createStore(filePath) {
  let queue = Promise.resolve();

  async function readAll() {
    try {
      return JSON.parse(await readFile(filePath, 'utf8'));
    } catch (err) {
      if (err.code === 'ENOENT') return {};
      throw err;
    }
  }

  async function writeAll(data) {
    await mkdir(dirname(filePath), { recursive: true });
    await writeFile(filePath, JSON.stringify(data));
  }

  function submit(rawNick, incoming) {
    const task = queue.then(async () => {
      const nick = cleanNick(rawNick);
      if (!nick) return { ok: false, error: 'no_nick' };
      const data = await readAll();
      const key = nick.toLowerCase();
      data[key] = mergeScore(data[key], incoming, nick);
      await writeAll(data);
      const saved = data[key];
      return { ok: true, saved: { grammar: saved.grammar, vocab: saved.vocab, reading: saved.reading } };
    });
    queue = task.catch(() => {});
    return task;
  }

  async function top() {
    return { ok: true, max: MAX, rows: topRows(await readAll()) };
  }

  return { submit, top };
}
