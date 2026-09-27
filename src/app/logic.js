/* ตรรกะเกมล้วน ๆ — ไม่แตะ DOM เพื่อให้ทดสอบด้วย Node ได้
   ใช้ได้ทั้งในเบราว์เซอร์ (window.EP.logic) และ Node (vm) */
(function (root) {
  var EP = root.EP = root.EP || {};

  /* สุ่มสลับลำดับแบบ Fisher–Yates คืนอาร์เรย์ใหม่ ไม่แก้ของเดิม */
  function shuffle(arr, rnd) {
    rnd = rnd || Math.random;
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* เลือก n รายการไม่ซ้ำจาก pool */
  function sample(pool, n, rnd) {
    return shuffle(pool, rnd).slice(0, n);
  }

  /* ตัวลวงสำหรับการ์ด: มาจากชุดเดียวกัน ไม่ซ้ำ ไม่ใช่คำตอบ
     และไม่ใช้คำที่ข้อมูลระบุว่าอาจกำกวม (field x) หรือคำแปลไทยเหมือนกัน */
  function cardDistractors(word, setWords, count, rnd) {
    var avoid = (word.x || []).map(function (s) { return s.toLowerCase(); });
    var pool = setWords.filter(function (w) {
      if (w.w === word.w) return false;
      if (w.th === word.th) return false;
      if (avoid.indexOf(w.w.toLowerCase()) >= 0) return false;
      if ((w.x || []).map(function (s) { return s.toLowerCase(); }).indexOf(word.w.toLowerCase()) >= 0) return false;
      return true;
    });
    return sample(pool, count, rnd);
  }

  /* สร้างรอบการ์ด: สุ่มลำดับคำ และสุ่มตำแหน่งคำตอบ
     choices = 2|3|4, dir = 'en-th' | 'th-en'
     targets (ไม่บังคับ) = ถามเฉพาะคำเหล่านี้ (ใช้ทบทวนคำที่ผิด) แต่ตัวลวงยังมาจากทั้งชุด */
  function buildCardRound(setWords, choices, dir, rnd, targets) {
    return shuffle(targets || setWords, rnd).map(function (word) {
      var ds = cardDistractors(word, setWords, choices - 1, rnd);
      var opts = shuffle([word].concat(ds), rnd);
      return {
        word: word,
        dir: dir,
        options: opts,
        answer: opts.indexOf(word)
      };
    });
  }

  /* Post-test: สุ่ม 15 จากคลัง 25 ประโยคไม่ซ้ำ แต่ละข้อ 4 ตัวเลือกจากชุดเดียวกัน
     ตัวลวงไม่ใช้คำใน s.x (คำที่อาจเติมได้ด้วย) */
  function buildPostTest(sentences, setWords, n, rnd) {
    n = n || 15;
    var picked = sample(sentences, n, rnd);
    return picked.map(function (s) {
      var avoid = (s.x || []).map(function (v) { return v.toLowerCase(); });
      var pool = setWords.filter(function (w) {
        return w.w !== s.w && avoid.indexOf(w.w.toLowerCase()) < 0;
      });
      var target = setWords.filter(function (w) { return w.w === s.w; })[0];
      var ds = sample(pool, 3, rnd);
      var opts = shuffle([target].concat(ds), rnd);
      return { item: s, word: target, options: opts, answer: opts.indexOf(target) };
    });
  }

  /* แบ่งคำของระดับเป็นชุดละ 25 */
  function setsOf(levelWords, size) {
    size = size || 25;
    var out = [];
    for (var i = 0; i < levelWords.length; i += size) out.push(levelWords.slice(i, i + size));
    return out;
  }

  /* ประโยคที่มีช่องว่าง ___ เติมคำ */
  function fillBlank(sentence, word) {
    return sentence.replace('___', word);
  }

  /* อักขระภาษาไทยหรือไม่ — ใช้กันไม่ให้ส่งภาษาไทยเข้าเครื่องอ่านเสียง */
  function hasThai(text) {
    return /[฀-๿]/.test(String(text || ''));
  }

  EP.logic = {
    shuffle: shuffle,
    sample: sample,
    cardDistractors: cardDistractors,
    buildCardRound: buildCardRound,
    buildPostTest: buildPostTest,
    setsOf: setsOf,
    fillBlank: fillBlank,
    hasThai: hasThai
  };
})(typeof window !== 'undefined' ? window : globalThis);
