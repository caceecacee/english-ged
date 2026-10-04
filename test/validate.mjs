// ตรวจข้อมูลและตรรกะเกมทั้งหมด: node test/validate.mjs
// ไม่ต้องติดตั้งแพ็กเกจเพิ่ม ใช้ Node 18+ เท่านั้น
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { MAX as DOCKER_MAX, DONE_MAX as DOCKER_DONE_MAX } from '../docker/scores-logic.mjs';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const ctx = { console };
ctx.globalThis = ctx;
vm.createContext(ctx);
const files = [
  'src/app/logic.js',
  'src/data/grammar-1-pos.js', 'src/data/grammar-2-tense.js', 'src/data/grammar-3-sentence.js',
  'src/data/grammar-4-det.js', 'src/data/grammar-5-prep.js', 'src/data/grammar-6-academic.js',
  'src/data/vocab-a1.js', 'src/data/vocab-a2.js', 'src/data/vocab-b1.js', 'src/data/vocab-b2.js',
  'src/data/examvocab-trip-01.js', 'src/data/examvocab-trip-02.js', 'src/data/examvocab-trip-03.js', 'src/data/examvocab-trip-04.js', 'src/data/examvocab-trip-05.js', 'src/data/examvocab-trip-06.js', 'src/data/examvocab-trip-07.js', 'src/data/examvocab-trip-08.js', 'src/data/examvocab-trip-09.js', 'src/data/examvocab-trip-10.js', 'src/data/examvocab-trip-11.js', 'src/data/examvocab-trip-12.js',
  'src/data/reading.js', 'src/app/vocab-model.js'
];
for (const f of files) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
const EP = ctx.EP;

let fails = 0, checks = 0;
const ok = (cond, msg) => { checks++; if (!cond) { fails++; console.log('  ✗ ' + msg); } };
const section = (t) => console.log('\n■ ' + t);

/* ---------- Grammar ---------- */
section('Grammar');
const GLEVELS = ['Basic', 'A1', 'A2', 'B1', 'B2', 'C1'];
const LEVELS = ['A1', 'A2', 'B1', 'B2']; // ใช้กับ Vocabulary ด้านล่าง (คำศัพท์ยังมีแค่ 4 ระดับ)
ok(EP.grammar.length === 6, 'ต้องมี 6 หมวด (พบ ' + EP.grammar.length + ')');
let lessonCount = 0, miniCount = 0, postCount = 0;
const lessonIds = new Set();
function checkQ(q, where) {
  ok(typeof q.q === 'string' && q.q.length > 0, where + ': ไม่มีโจทย์');
  ok(Array.isArray(q.o) && q.o.length === 4, where + ': ต้องมี 4 ตัวเลือก');
  ok(new Set(q.o).size === q.o.length, where + ': ตัวเลือกซ้ำ');
  ok(Number.isInteger(q.a) && q.a >= 0 && q.a < q.o.length, where + ': เฉลยไม่อยู่ในช่วงตัวเลือก');
  for (const k of ['clue', 'rule', 'why', 'ex']) ok(typeof q[k] === 'string' && q[k].length > 0, where + ': ขาด ' + k);
  ok(Array.isArray(q.n) && q.n.length === q.o.length, where + ': หมายเหตุตัวเลือก (n) ต้องครบทุกตัวเลือก');
  if (Array.isArray(q.n)) q.n.forEach((t, i) => { if (i !== q.a) ok(t && t.length > 0, where + ': ขาดคำอธิบายว่าทำไมตัวเลือก ' + i + ' ผิด'); });
}
for (const cat of EP.grammar) {
  ok(cat.post.length === 10, cat.id + ': Post-test ต้องมี 10 ข้อ (พบ ' + cat.post.length + ')');
  postCount += cat.post.length;
  let lastLevel = 0;
  for (const L of cat.lessons) {
    lessonCount++;
    ok(!lessonIds.has(L.id), 'id บทซ้ำ ' + L.id); lessonIds.add(L.id);
    const lv = GLEVELS.indexOf(L.level);
    ok(lv >= 0, L.id + ': ระดับไม่ถูกต้อง');
    ok(lv >= lastLevel, L.id + ': ระดับต้องเรียง A1→B2 ภายในหมวด');
    lastLevel = Math.max(lastLevel, lv);
    for (const k of ['explain', 'formula']) ok(L[k] && L[k].length > 20, L.id + ': ขาด ' + k);
    ok(L.examples.length >= 2, L.id + ': ตัวอย่างน้อยกว่า 2');
    L.examples.forEach((e, i) => {
      ok(e.th && e.th.length > 0, L.id + ' ตัวอย่าง ' + i + ': ไม่มีคำแปล');
      e.en.split('|').forEach(tok => ok(/^[A-Za-z]+:.+/.test(tok), L.id + ' ตัวอย่าง ' + i + ': โทเคนผิดรูปแบบ "' + tok + '"'));
    });
    ok(L.confuse.length >= 1, L.id + ': ไม่มีจุดที่มักสับสน');
    ok(L.quiz.length === 5, L.id + ': mini-test ต้องมี 5 ข้อ (พบ ' + L.quiz.length + ')');
    miniCount += L.quiz.length;
    L.quiz.forEach((q, i) => checkQ(q, L.id + ' ข้อ ' + (i + 1)));
  }
  cat.post.forEach((q, i) => checkQ(q, cat.id + ' post ' + (i + 1)));
}
console.log(`  บทเรียน ${lessonCount} บท · mini-test ${miniCount} ข้อ · Post-test ${postCount} ข้อ`);
ok(lessonCount >= 29, 'บทเรียนต้องไม่น้อยกว่า 29');
ok(miniCount >= 145, 'mini-test ต้องไม่น้อยกว่า 145');
ok(postCount === EP.grammar.length * 10, 'Post-test ต้องเป็นจำนวนหมวด × 10 (พบ ' + postCount + ' หมวด ' + EP.grammar.length + ')');
ok(DOCKER_MAX.grammar === miniCount + postCount, 'docker/scores-logic.mjs MAX.grammar (' + DOCKER_MAX.grammar + ') ต้องเท่ากับ mini-test+Post-test จริง (' + (miniCount + postCount) + ')');
ok(DOCKER_DONE_MAX.grammar === lessonCount, 'docker/scores-logic.mjs DONE_MAX.grammar (' + DOCKER_DONE_MAX.grammar + ') ต้องเท่ากับจำนวนบทเรียนจริง (' + lessonCount + ')');

/* ---------- Vocabulary ---------- */
section('Vocabulary');
const allWords = new Set();
const V = EP.vocab;
let totalWords = 0, totalSentences = 0;
for (const lv of LEVELS) {
  const level = V[lv];
  ok(level && level.sets.length === 4, lv + ': ต้องมี 4 ชุด');
  let lvCount = 0;
  level.sets.forEach((set, si) => {
    ok(set.words.length === 25, `${lv} ชุด ${si + 1}: ต้องมี 25 คำ (พบ ${set.words.length})`);
    const inSet = new Set(set.words.map(w => w.w));
    ok(inSet.size === 25, `${lv} ชุด ${si + 1}: คำซ้ำในชุด`);
    const th = new Set(set.words.map(w => w.th));
    ok(th.size === 25, `${lv} ชุด ${si + 1}: ความหมายไทยซ้ำในชุด (กำกวมในโหมดการ์ด)`);
    set.words.forEach(w => {
      lvCount++; totalWords++;
      ok(!allWords.has(w.w), `${lv}: "${w.w}" ซ้ำกับระดับ/ชุดอื่น`); allWords.add(w.w);
      ok((w.s.match(/___/g) || []).length === 1, `${lv} "${w.w}": ประโยคต้องมีช่องว่าง ___ หนึ่งจุด`);
      ok(w.st && w.st.length > 0, `${lv} "${w.w}": ไม่มีคำแปลประโยค`);
      ok(!EP.logic.hasThai(w.w) && !EP.logic.hasThai(w.s), `${lv} "${w.w}": คำ/ประโยคอังกฤษมีอักษรไทยปน`);
      ok(EP.logic.hasThai(w.th), `${lv} "${w.w}": ความหมายไทยไม่มีอักษรไทย`);
      (w.x || []).forEach(x => ok(inSet.has(x), `${lv} "${w.w}": คำใน x "${x}" ไม่อยู่ในชุดเดียวกัน`));
      totalSentences++;
    });
  });
  ok(lvCount === 100, `${lv}: ต้องมี 100 คำพอดี (พบ ${lvCount})`);
  console.log(`  ${lv}: ${lvCount} คำ = ${level.sets.map(s => s.words.length).join(' + ')}`);
}
ok(totalWords === 400, 'รวมคำต้องเป็น 400 (พบ ' + totalWords + ')');
ok(totalSentences === 400, 'รวมประโยคคลังต้องเป็น 400 (พบ ' + totalSentences + ')');
const totalVocabSets = LEVELS.length * 4;
ok(DOCKER_MAX.vocab === totalVocabSets * 40, 'docker/scores-logic.mjs MAX.vocab (' + DOCKER_MAX.vocab + ') ต้องเท่ากับ ' + totalVocabSets + ' ชุด × 40 คะแนน (' + (totalVocabSets * 40) + ')');
ok(DOCKER_DONE_MAX.vocab === totalVocabSets, 'docker/scores-logic.mjs DONE_MAX.vocab (' + DOCKER_DONE_MAX.vocab + ') ต้องเท่ากับจำนวนชุดคำศัพท์จริง (' + totalVocabSets + ')');
console.log(`  รวม ${totalWords} คำ · คลังประโยค ${totalSentences} ข้อ (16 ชุด × 25)`);

/* ---------- คำศัพท์เตรียมสอบ (อิง Oxford 3000/5000) ---------- */
section('คำศัพท์เตรียมสอบ (อิง Oxford 3000/5000)');
const EXAM_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
const examTrips = (EP.examVocab && EP.examVocab.trips) || [];
ok(examTrips.length >= 1, 'ต้องมีคำศัพท์เตรียมสอบอย่างน้อย 1 ทริป');
let examWordTotal = 0;
examTrips.forEach((trip) => {
  ok(trip.sets.length === 5, `ทริป ${trip.id}: ต้องมี 5 ชุด (พบ ${trip.sets.length})`);
  const seenWords = new Set();
  const lvCount = {};
  trip.sets.forEach((set) => {
    ok(set.words.length === 10, `${trip.id}/${set.id}: ต้องมี 10 คำ (พบ ${set.words.length})`);
    const ths = new Set();
    set.words.forEach((w) => {
      examWordTotal++;
      ok(!seenWords.has(w.w), `${trip.id}: คำ "${w.w}" ซ้ำข้ามชุด`);
      seenWords.add(w.w);
      ok(EXAM_LEVELS.indexOf(w.level) >= 0, `${w.w}: ระดับ "${w.level}" ไม่ถูกต้อง`);
      ok(w.source === 'Oxford 3000' || w.source === 'Oxford 5000', `${w.w}: ต้องระบุแหล่งอ้างอิงเป็น Oxford 3000/5000 (พบ "${w.source}")`);
      ok(w.pos && w.pos.length > 0, `${w.w}: ไม่มีชนิดคำ`);
      ok(w.th && EP.logic.hasThai(w.th), `${w.w}: ความหมายไทยไม่ถูกต้อง`);
      ok(!ths.has(w.th), `${set.id}: ความหมายไทย "${w.th}" ซ้ำในชุดเดียวกัน (กำกวมในโหมดเลือกความหมาย)`);
      ths.add(w.th);
      ok((w.sentence.match(/___/g) || []).length === 1, `${w.w}: ประโยคหลักต้องมีช่องว่าง ___ หนึ่งจุด`);
      ok(w.sentenceTh && EP.logic.hasThai(w.sentenceTh), `${w.w}: ไม่มีคำแปลประโยคหลัก`);
      ok(!EP.logic.hasThai(w.sentence), `${w.w}: ประโยคหลักมีอักษรไทยปน`);
      ok(Array.isArray(w.quizBank) && w.quizBank.length >= 3, `${w.w}: quizBank ต้องมีอย่างน้อย 3 ข้อ (พบ ${(w.quizBank || []).length})`);
      (w.quizBank || []).forEach((q, i) => {
        ok((q.s.match(/___/g) || []).length === 1, `${w.w} quizBank ${i}: ต้องมีช่องว่าง ___ หนึ่งจุด`);
        ok(q.sTh && EP.logic.hasThai(q.sTh), `${w.w} quizBank ${i}: ไม่มีคำแปล`);
        ok(!EP.logic.hasThai(q.s), `${w.w} quizBank ${i}: ประโยคมีอักษรไทยปน`);
      });
      lvCount[w.level] = (lvCount[w.level] || 0) + 1;
    });
  });
  ok(lvCount.A1 === 1 && lvCount.A2 === 4 && lvCount.B1 === 25 && lvCount.B2 === 15 && lvCount.C1 === 5,
    `ทริป ${trip.id}: สัดส่วนระดับต่อทริปต้องเป็น A1:1 A2:4 B1:25 B2:15 C1:5 (พบ ${JSON.stringify(lvCount)})`);
});
console.log(`  ${examTrips.length} ทริป · ${examWordTotal} คำ (ตรวจสอบระดับจริงจาก Oxford 3000/5000 แล้วทุกคำ)`);

/* ---------- Game logic simulation ---------- */
section('ตรรกะเกม (สุ่มจำลอง)');
let seed = 12345;
const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
const RUNS = 300;
for (const lv of LEVELS) {
  V[lv].sets.forEach((set, si) => {
    const tag = `${lv} ชุด ${si + 1}`;
    for (const choices of [2, 3, 4]) {
      for (const dir of ['en-th', 'th-en']) {
        for (let r = 0; r < 20; r++) {
          const round = EP.logic.buildCardRound(set.words, choices, dir, rnd);
          if (round.length !== 25) { ok(false, `${tag}: รอบการ์ดไม่ครบ 25`); break; }
          const seen = new Set(round.map(c => c.word.w));
          ok(seen.size === 25, `${tag}: การ์ดซ้ำในรอบ`);
          for (const c of round) {
            if (c.options.length !== choices) { ok(false, `${tag} ${choices} ตัวเลือก: ได้ ${c.options.length} (${c.word.w})`); continue; }
            const ids = c.options.map(o => o.w);
            if (new Set(ids).size !== ids.length) ok(false, `${tag}: ตัวเลือกซ้ำ`);
            if (c.options[c.answer] !== c.word) ok(false, `${tag}: ตำแหน่งเฉลยผิด`);
            const ths = c.options.map(o => o.th);
            if (new Set(ths).size !== ths.length) ok(false, `${tag}: คำแปลไทยในตัวเลือกซ้ำ`);
            for (const o of c.options) if (o !== c.word && (c.word.x || []).includes(o.w)) ok(false, `${tag}: ตัวลวงกำกวม ${o.w} สำหรับ ${c.word.w}`);
          }
          checks++;
        }
      }
    }
    for (let r = 0; r < RUNS; r++) {
      const pt = EP.logic.buildPostTest(set.words, set.words, 15, rnd);
      if (pt.length !== 15) ok(false, `${tag}: Post-test ไม่ครบ 15`);
      const items = new Set(pt.map(p => p.item.w));
      if (items.size !== 15) ok(false, `${tag}: Post-test ข้อซ้ำในรอบ`);
      for (const p of pt) {
        if (p.options.length !== 4) ok(false, `${tag}: Post-test ต้องมี 4 ตัวเลือก`);
        const ids = p.options.map(o => o.w);
        if (new Set(ids).size !== 4) ok(false, `${tag}: Post-test ตัวเลือกซ้ำ`);
        if (p.options[p.answer].w !== p.item.w) ok(false, `${tag}: Post-test เฉลยผิดตำแหน่ง`);
        for (const o of p.options) if (o.w !== p.item.w && (p.item.x || []).includes(o.w)) ok(false, `${tag}: Post-test ตัวลวงกำกวม ${o.w}`);
      }
      checks++;
    }
  });
}
console.log(`  การ์ด: 16 ชุด × {2,3,4} ตัวเลือก × {อังกฤษ→ไทย, ไทย→อังกฤษ} × 20 รอบ`);
console.log(`  Post-test: 16 ชุด × ${RUNS} รอบ (15 ข้อไม่ซ้ำ, 4 ตัวเลือก, ไม่มีตัวลวงกำกวมที่ระบุไว้)`);

/* ---------- Reading ---------- */
section('Reading');
ok(EP.reading.length === 12, 'ต้องมีบทอ่าน 12 บท (พบ ' + EP.reading.length + ')');
ok(DOCKER_DONE_MAX.reading === EP.reading.length, 'docker/scores-logic.mjs DONE_MAX.reading (' + DOCKER_DONE_MAX.reading + ') ต้องเท่ากับจำนวนบทอ่านจริง (' + EP.reading.length + ')');
const bySubj = {};
let rq = 0, lastLv = 0;
for (const p of EP.reading) {
  bySubj[p.subject] = (bySubj[p.subject] || 0) + 1;
  ok(p.s.length === p.th.length, p.id + ': จำนวนคำแปลไม่เท่ากับจำนวนประโยค');
  const lv = LEVELS.indexOf(p.level);
  ok(lv >= lastLv, p.id + ': ระดับต้องไล่จากง่ายไปยาก'); lastLv = Math.max(lastLv, lv);
  for (const q of p.q) {
    rq++;
    checkQ({ ...q, clue: 'x', rule: 'x', ex: 'x' }, p.id + ' ' + q.q.slice(0, 30));
    ok(Array.isArray(q.ev) && q.ev.length > 0, p.id + ': ไม่มีหลักฐานในเฉลย');
    (q.ev || []).forEach(e => {
      if (e === 'visual') ok(!!p.visual, p.id + ': อ้าง visual แต่บทนี้ไม่มีกราฟ/ตาราง');
      else ok(Number.isInteger(e) && e >= 0 && e < p.s.length, p.id + ': หลักฐานชี้ประโยคที่ไม่มี ' + e);
    });
  }
  if (p.visual && p.visual.kind === 'bar') ok(p.visual.labels.length === p.visual.values.length, p.id + ': กราฟป้ายกับค่าไม่เท่ากัน');
}
console.log('  ' + Object.entries(bySubj).map(([k, v]) => k + ' ' + v).join(' · ') + ` · คำถามรวม ${rq} ข้อ`);
ok(bySubj['RLA'] === 4 && bySubj['Science'] === 4 && bySubj['Social Studies'] === 4, 'ต้องมีวิชาละ 4 บท');
ok(DOCKER_MAX.reading === rq, 'docker/scores-logic.mjs MAX.reading (' + DOCKER_MAX.reading + ') ต้องเท่ากับจำนวนคำถามอ่านจริง (' + rq + ')');

console.log(`\n${fails === 0 ? '✓ ผ่านทั้งหมด' : '✗ ไม่ผ่าน ' + fails + ' รายการ'} (${checks} การตรวจ)`);
process.exit(fails ? 1 : 0);
