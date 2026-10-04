/**
 * English Path — ตัวกลางเก็บคะแนนใน Google Sheet
 * วางโค้ดนี้ใน Extensions → Apps Script ของชีต "คะแนนรวม" แล้ว Deploy เป็น Web app
 * (Execute as: Me · Who has access: Anyone) ดูขั้นตอนเต็มใน SETUP.md
 *
 * GET  ?action=top                  → { ok, max, rows:[{nick, grammar, vocab, reading, updated}] }
 * POST {action:'submit', nick, grammar, vocab, reading}  (Content-Type: text/plain)
 *      → บันทึกเฉพาะคะแนนที่สูงกว่าเดิมของชื่อเล่นนั้น
 */
const SHEET_NAME = 'Scores';
const HEADERS = ['key', 'nickname', 'grammar', 'vocab', 'reading', 'total', 'updated'];
const MAX = { grammar: 430, vocab: 640, reading: 73 }; // คะแนนเต็มของแต่ละ Part ในเว็บเวอร์ชันนี้
const PARTS = ['grammar', 'vocab', 'reading'];

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
    sh.setFrozenRows(1);
    sh.getRange('A:B').setNumberFormat('@'); // ชื่อเล่นเป็นข้อความเสมอ ไม่ถูกตีความเป็นสูตร
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function cleanNick_(n) {
  return String(n || '').replace(/\s+/g, ' ').trim().replace(/^[=+\-@\s]+/, '').slice(0, 20);
}

function readRows_() {
  const values = getSheet_().getDataRange().getValues();
  return values.slice(1).filter(function (r) { return r[1] !== ''; }).map(function (r) {
    return {
      nick: String(r[1]),
      grammar: Number(r[2]) || 0,
      vocab: Number(r[3]) || 0,
      reading: Number(r[4]) || 0,
      updated: r[6] instanceof Date ? r[6].toISOString() : String(r[6] || '')
    };
  });
}

function doGet() {
  return json_({ ok: true, max: MAX, rows: readRows_() });
}

function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return json_({ ok: false, error: 'bad_json' });
  }
  const nick = cleanNick_(data.nick);
  if (!nick) return json_({ ok: false, error: 'no_nick' });

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return json_({ ok: false, error: 'busy' });
  try {
    const sh = getSheet_();
    const key = nick.toLowerCase();
    const values = sh.getDataRange().getValues();
    let row = -1;
    for (let i = 1; i < values.length; i++) {
      if (String(values[i][0]) === key) { row = i + 1; break; }
    }
    const old = row > 0 ? values[row - 1] : null;
    const next = {};
    PARTS.forEach(function (p, idx) {
      const incoming = Math.max(0, Math.min(MAX[p], Math.floor(Number(data[p]) || 0)));
      const current = old ? Number(old[2 + idx]) || 0 : 0;
      next[p] = Math.max(current, incoming);
    });
    const line = [key, nick, next.grammar, next.vocab, next.reading, next.grammar + next.vocab + next.reading, new Date()];
    if (row > 0) sh.getRange(row, 1, 1, line.length).setValues([line]);
    else sh.appendRow(line);
    return json_({ ok: true, saved: next });
  } finally {
    lock.releaseLock();
  }
}

/** กดรันฟังก์ชันนี้หนึ่งครั้งในหน้า Apps Script เพื่อสร้างแท็บ Scores และอนุญาตสิทธิ์ */
function setup() {
  getSheet_();
}
