// docker/store.mjs
import { readFile, writeFile, mkdir, rename } from 'node:fs/promises';
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
    const tmpPath = `${filePath}.tmp`;
    await writeFile(tmpPath, JSON.stringify(data));
    await rename(tmpPath, filePath); // atomic replace — no reader ever sees a truncated file
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
    await queue; // wait for any write in flight so we never read mid-write
    return { ok: true, max: MAX, rows: topRows(await readAll()) };
  }

  return { submit, top };
}
