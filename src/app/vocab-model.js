/* แปลงข้อมูลคำศัพท์ดิบ (EP.vocabRaw) เป็นโครงสร้างที่เกมใช้ (EP.vocab)
   ไม่ต้องแก้ไฟล์นี้เมื่อเพิ่ม/แก้คำศัพท์ */
(function (root) {
  var EP = root.EP = root.EP || {};
  var raw = EP.vocabRaw || {};
  EP.vocab = {};
  Object.keys(raw).forEach(function (lv) {
    var r = raw[lv];
    var words = r.words.map(function (row, i) {
      return { w: row[0], p: row[1], th: row[2], s: row[3], st: row[4], x: row[5] || [], n: i + 1, lv: lv };
    });
    EP.vocab[lv] = {
      sets: EP.logic.setsOf(words, 25).map(function (ws, si) {
        return { name: r.sets[si] || ('ชุด ' + (si + 1)), words: ws };
      })
    };
  });
})(typeof window !== 'undefined' ? window : globalThis);
