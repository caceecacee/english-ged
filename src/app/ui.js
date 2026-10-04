/* English Path — UI และการเชื่อมข้อมูลกับตรรกะเกม
   ไฟล์นี้ไม่มีเนื้อหาบทเรียน ข้อมูลทั้งหมดอยู่ใน src/data/ */
(function () {
  'use strict';
  var EP = window.EP;
  var L = EP.logic;
  var LEVELS = ['A1', 'A2', 'B1', 'B2']; // ระดับคำศัพท์ (4 ระดับ)
  var GLEVELS = ['Basic', 'A1', 'A2', 'B1', 'B2', 'C1']; // ระดับ Grammar (ข้ามหมวด ใช้จัดเส้นทางเรียน)
  var KEYS = ['A', 'B', 'C', 'D'];
  var THAI_MARK = ['ก', 'ข', 'ค', 'ง', 'จ', 'ฉ'];

  /* ---------- เครื่องมือเล็ก ๆ ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function stripTags(s) { return String(s).replace(/<[^>]*>/g, ''); }

  var ICON = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 9v6h4l5 4V5L8 9H4zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>',
    back: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M15.4 6.4 14 5l-7 7 7 7 1.4-1.4L9.8 12z"/></svg>',
    book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5a1.5 1.5 0 0 0 0 3H20v1H6.5A2.5 2.5 0 0 1 4 19.5v-15zM8 6v2h8V6H8zm0 4v2h6v-2H8z"/></svg>',
    cards: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 7.5 12.2 3l5 10.3-9.2 4.5L3 7.5zm15.4 5.3L14.6 5H19a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-8.5l7.9-8.2z"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 2h6v2h4v18H5V4h4V2zm0 4H7v12h10V6h-2v2H9V6zm1.5 6.5 2 2 4-4 1.4 1.4-5.4 5.4-3.4-3.4z"/></svg>',
    read: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 6.5C10.2 5 7.7 4 5 4c-1 0-2 .1-3 .4v14c1-.3 2-.4 3-.4 2.7 0 5.2 1 7 2.5 1.8-1.5 4.3-2.5 7-2.5 1 0 2 .1 3 .4v-14C21 4.1 20 4 19 4c-2.7 0-5.2 1-7 2.5zm-1 11.2A11.8 11.8 0 0 0 5 16c-.3 0-.7 0-1 .1V6.1L5 6c2.2 0 4.3.8 6 2.1v9.6z"/></svg>'
  };
  function sayBtn(text, small) {
    return '<button type="button" class="say' + (small ? ' sm' : '') + '" data-say="' + esc(text) + '" aria-label="ฟังเสียงภาษาอังกฤษ: ' + esc(text) + '">' + ICON.play + '</button>';
  }
  function lvBadge(lv) { return '<span class="lv" data-lv="' + lv + '">' + lv + '</span>'; }

  /* ---------- แจ้งเตือน ---------- */
  var toastTimer;
  function toast(msg) {
    var t = $('#toast');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 5200);
  }

  /* ---------- บันทึกความคืบหน้าในเครื่อง แยกตามชื่อเล่น ----------
     root = { v:2, current:<key>, profiles:{ <key>: {nick, updated, grammar, gpost, vocab, reading} } }
     key '__guest' = ยังไม่ใส่ชื่อเล่น (ไม่ขึ้นตารางอันดับ) */
  var GUEST = '__guest';
  function emptyProfile(nick) { return { nick: nick || '', updated: 0, grammar: {}, gpost: {}, vocab: {}, reading: {}, review: {}, examvocab: {}, mock: {} }; }
  // "จำกฎได้" = โจทย์ที่ถามกฎตรง ๆ (ไม่มีช่องว่างให้เติม) · "ใช้ในประโยคได้" = โจทย์เติมคำ/ใช้ในบริบทจริง (มี ___)
  function quizType(q) { return /___/.test(q.q) ? 'usage' : 'rule'; }
  function recordReview(key, title, wrongPqs) {
    if (!Store.data.review) Store.data.review = {};
    var ruleWrong = 0, usageWrong = 0;
    wrongPqs.forEach(function (pq) { if (quizType(pq.src) === 'rule') ruleWrong++; else usageWrong++; });
    Store.data.review[key] = { title: title, ruleWrong: ruleWrong, usageWrong: usageWrong, at: Date.now() };
    Store.save();
  }
  function nickKey(nick) { return 'n:' + nick.trim().toLowerCase(); }
  var Store = {
    key: 'english-path:v2',
    root: { v: 2, current: GUEST, profiles: {} },
    data: null,
    load: function () {
      this.root.profiles[GUEST] = emptyProfile('');
      try {
        var s = window.localStorage.getItem(this.key);
        if (s) {
          var r = JSON.parse(s);
          if (r && r.profiles) this.root = r;
        } else {
          var old = window.localStorage.getItem('english-path:v1'); // ย้ายข้อมูลจากเวอร์ชันแรก
          if (old) {
            var d = JSON.parse(old);
            ['grammar', 'gpost', 'vocab', 'reading'].forEach(function (k) { if (d[k]) Store.root.profiles[GUEST][k] = d[k]; });
          }
        }
      } catch (e) { /* ไม่มีที่เก็บ ใช้ต่อได้โดยไม่บันทึก */ }
      if (!this.root.profiles[GUEST]) this.root.profiles[GUEST] = emptyProfile('');
      if (!this.root.profiles[this.root.current]) this.root.current = GUEST;
      this.data = this.root.profiles[this.root.current];
    },
    save: function () {
      if (this.data) this.data.updated = Date.now();
      this.saveLocal();
      if (typeof Remote !== 'undefined') Remote.queue();
    },
    saveLocal: function () {
      try { window.localStorage.setItem(this.key, JSON.stringify(this.root)); } catch (e) { }
    },
    named: function () {
      var ps = this.root.profiles;
      return Object.keys(ps).filter(function (k) { return k !== GUEST; }).map(function (k) { return { key: k, p: ps[k] }; });
    },
    /* ตั้ง/สลับชื่อเล่น: ชื่อที่มีอยู่แล้วจะสลับไปใช้, ชื่อแรกของเครื่องจะรับความคืบหน้าที่ทำไว้ก่อนใส่ชื่อ */
    use: function (nick) {
      var key = nickKey(nick);
      var existed = !!this.root.profiles[key];
      var moved = false;
      if (!existed) {
        var prof = emptyProfile(nick.trim());
        var g = this.root.profiles[GUEST];
        if (this.named().length === 0 && hasProgress(g)) {
          ['grammar', 'gpost', 'vocab', 'reading', 'review', 'examvocab', 'mock'].forEach(function (k) { prof[k] = g[k]; });
          this.root.profiles[GUEST] = emptyProfile('');
          moved = true;
        }
        this.root.profiles[key] = prof;
      }
      this.root.current = key;
      this.data = this.root.profiles[key];
      this.save();
      return { existed: existed, moved: moved };
    },
    guest: function () { this.root.current = GUEST; this.data = this.root.profiles[GUEST]; this.save(); },
    remove: function (key) {
      if (key === GUEST) return;
      delete this.root.profiles[key];
      if (this.root.current === key) { this.root.current = GUEST; this.data = this.root.profiles[GUEST]; }
      this.save();
    }
  };
  function hasProgress(p) {
    return ['grammar', 'gpost', 'vocab', 'reading', 'review', 'examvocab', 'mock'].some(function (k) { return p[k] && Object.keys(p[k]).length > 0; });
  }

  /* ---------- คะแนนรวมของแต่ละ Part (ใช้จัดอันดับ) ---------- */
  var PARTS = {
    grammar: { label: 'Grammar', unit: 'คะแนนรวมสูงสุดจาก mini-test และ Post-test' },
    vocab: { label: 'คำศัพท์', unit: 'คะแนนรวมสูงสุดจากการ์ดและ Post-test ทุกชุด' },
    reading: { label: 'ฝึกอ่าน', unit: 'คะแนนรวมสูงสุดจากทุกบทอ่าน' }
  };
  function partMax(part) {
    if (part === 'grammar') return EP.grammar.reduce(function (s, c) { return s + c.lessons.length * 5 + c.post.length; }, 0);
    if (part === 'vocab') return 16 * 40;
    return EP.reading.reduce(function (s, p) { return s + p.q.length; }, 0);
  }
  function partScore(p, part) {
    var sum = 0;
    if (part === 'grammar') {
      Object.keys(p.grammar || {}).forEach(function (k) { sum += p.grammar[k].best || 0; });
      Object.keys(p.gpost || {}).forEach(function (k) { sum += p.gpost[k] || 0; });
      return sum;
    }
    if (part === 'vocab') {
      var best = {};
      Object.keys(p.vocab || {}).forEach(function (k) {
        var set = k.split('-').slice(0, 2).join('-');
        var r = p.vocab[k];
        var b = best[set] || { card: 0, post: 0 };
        b.card = Math.max(b.card, r.card > 0 ? r.card : 0);
        b.post = Math.max(b.post, r.post > 0 ? r.post : 0);
        best[set] = b;
      });
      Object.keys(best).forEach(function (k) { sum += best[k].card + best[k].post; });
      return sum;
    }
    Object.keys(p.reading || {}).forEach(function (k) { sum += p.reading[k].best || 0; });
    return sum;
  }
  function partDone(p, part) {
    if (part === 'grammar') {
      var n = 0;
      EP.grammar.forEach(function (c) { c.lessons.forEach(function (l) { var r = (p.grammar || {})[l.id]; if (r && r.answered >= 5) n++; }); });
      return n;
    }
    if (part === 'vocab') {
      var sets = {};
      Object.keys(p.vocab || {}).forEach(function (k) {
        var r = p.vocab[k];
        if (r && r.post != null) sets[k.split('-').slice(0, 2).join('-')] = true;
      });
      return Object.keys(sets).length;
    }
    return Object.keys(p.reading || {}).length;
  }

  /* ---------- ตารางคะแนนรวมผ่าน Google Sheet (ใช้เมื่อ config.js ระบุ scoreEndpoint) ----------
     ส่ง: POST {action:'submit', nick, grammar, vocab, reading} แบบ text/plain (ไม่ต้องขอ CORS preflight)
     ดึง: GET ?action=top → {ok:true, rows:[{nick, grammar, vocab, reading, updated}]}
     ถ้าเชื่อมไม่ได้ เว็บใช้งานต่อได้ และตารางจะแสดงข้อมูลในเครื่องแทน */
  var CFG = window.EP_CONFIG || {};
  var Remote = {
    url: String(CFG.scoreEndpoint || '').trim(),
    rows: null,
    status: 'idle',
    fetchedAt: 0,
    timer: null,
    enabled: function () { return /^https:\/\//.test(this.url) || /^http:\/\/(localhost|127\.0\.0\.1)(:|\/)/.test(this.url); },
    load: function (force) {
      if (!this.enabled() || this.status === 'loading') return;
      if (!force && this.fetchedAt && Date.now() - this.fetchedAt < 30000) return;
      var self = this;
      this.status = 'loading';
      fetch(this.url + (this.url.indexOf('?') < 0 ? '?' : '&') + 'action=top&t=' + Date.now())
        .then(function (r) { return r.json(); })
        .then(function (d) {
          if (!d || !d.ok || !Array.isArray(d.rows)) throw new Error('bad');
          self.rows = d.rows; self.status = 'ok'; self.fetchedAt = Date.now(); refreshBoards();
        })
        .catch(function () { self.status = 'error'; self.fetchedAt = Date.now(); refreshBoards(); });
    },
    queue: function () {
      if (!this.enabled() || Store.root.current === GUEST) return;
      var self = this;
      clearTimeout(this.timer);
      this.timer = setTimeout(function () { self.send(); }, 1200);
    },
    send: function () {
      var p = Store.data;
      if (!p || !p.nick || Store.root.current === GUEST) return;
      var body = {
        action: 'submit', nick: p.nick,
        grammar: partScore(p, 'grammar'), vocab: partScore(p, 'vocab'), reading: partScore(p, 'reading'),
        grammarDone: partDone(p, 'grammar'), vocabDone: partDone(p, 'vocab'), readingDone: partDone(p, 'reading')
      };
      var sig = p.nick + '|' + body.grammar + '/' + body.vocab + '/' + body.reading + '|' + body.grammarDone + '/' + body.vocabDone + '/' + body.readingDone;
      if (p.sent === sig) return;
      if (!body.grammar && !body.vocab && !body.reading && !body.grammarDone && !body.vocabDone && !body.readingDone) return; // ยังไม่มีคะแนน ไม่ต้องสร้างแถว
      var self = this;
      fetch(this.url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body) })
        .then(function (r) { return r.json(); })
        .then(function (d) {
          if (!d || !d.ok) throw new Error('bad');
          p.sent = sig; Store.saveLocal(); self.load(true);
        })
        .catch(function () { /* ส่งไม่สำเร็จ จะลองใหม่เมื่อมีการบันทึกครั้งถัดไปหรือเปิดหน้าใหม่ */ });
    }
  };
  function refreshBoards() {
    ['grammar', 'vocab', 'reading'].forEach(function (part) {
      var el = document.getElementById('lbw-' + part);
      if (el) el.innerHTML = leaderboardInner(part);
    });
    var totalEl = document.getElementById('lbw-total');
    if (totalEl) totalEl.innerHTML = totalLeaderboardInner();
  }
  function cleanNick(n) { return String(n || '').replace(/\s+/g, ' ').trim().replace(/^[=+\-@\s]+/, '').slice(0, 20); }

  /* ---------- เสียง: อ่านเฉพาะภาษาอังกฤษ และเฉพาะเมื่อผู้ใช้กด ---------- */
  var Speech = {
    supported: typeof window.speechSynthesis !== 'undefined' && typeof window.SpeechSynthesisUtterance !== 'undefined',
    voice: null,
    warned: false,
    pick: function () {
      var vs = [];
      try { vs = window.speechSynthesis.getVoices() || []; } catch (e) { }
      var en = vs.filter(function (v) { return /^en([-_]|$)/i.test(v.lang); });
      var us = en.filter(function (v) { return /en[-_]US/i.test(v.lang); });
      this.voice = us.filter(function (v) { return v.localService; })[0] || us[0] || en[0] || null;
      return { total: vs.length, english: en.length };
    },
    speak: function (text, btn) {
      if (!text || L.hasThai(text)) return; // กันไม่ให้อ่านภาษาไทยเด็ดขาด
      if (!this.supported) {
        toast('เบราว์เซอร์นี้ไม่มีระบบเสียงอ่าน ลองเปิดหน้านี้ด้วย Chrome, Safari หรือ Edge รุ่นใหม่');
        return;
      }
      var info = this.pick();
      if (info.total > 0 && info.english === 0 && !this.warned) {
        this.warned = true;
        toast('ไม่พบเสียงภาษาอังกฤษในอุปกรณ์นี้ ระบบจะลองใช้เสียงเริ่มต้น หากไม่ได้ยิน ให้เพิ่มเสียงภาษาอังกฤษในการตั้งค่าอุปกรณ์');
      }
      var synth = window.speechSynthesis;
      try { synth.cancel(); } catch (e) { }
      var u = new window.SpeechSynthesisUtterance(text);
      u.lang = this.voice ? this.voice.lang : 'en-US';
      if (this.voice) u.voice = this.voice;
      u.rate = 0.9;
      var started = false;
      $all('.say.playing').forEach(function (b) { b.classList.remove('playing'); });
      if (btn) btn.classList.add('playing');
      u.onstart = function () { started = true; };
      u.onend = function () { if (btn) btn.classList.remove('playing'); };
      u.onerror = function (e) {
        if (btn) btn.classList.remove('playing');
        if (e && (e.error === 'interrupted' || e.error === 'canceled')) return;
        toast('เล่นเสียงไม่สำเร็จ ตรวจว่าเปิดเสียงเครื่องแล้ว หรือกดฟังอีกครั้ง');
      };
      synth.speak(u);
      setTimeout(function () {
        if (!started && btn && btn.classList.contains('playing')) {
          btn.classList.remove('playing');
          if (!synth.speaking) toast('ยังไม่มีเสียง ตรวจว่าเครื่องไม่ได้ปิดเสียงหรืออยู่ในโหมดเงียบ แล้วลองกดใหม่');
        }
      }, 2500);
    }
  };
  if (Speech.supported) {
    try { window.speechSynthesis.onvoiceschanged = function () { Speech.pick(); }; } catch (e) { }
  }

  /* ---------- สถานะหน้า ---------- */
  var S = {
    tab: 'grammar',
    g: { cat: 0, view: 'list', lesson: 0 },
    v: { lv: 'A1', set: 0, dir: 'en-th', choices: 4, phase: 'setup' },
    vmode: 'exam', // 'exam' = เตรียมสอบ (Oxford 3000/5000) · 'basic' = ปูพื้นฐานเดิม (400 คำ)
    ex: { tripIdx: 0, setIdx: 0, phase: 'setup', batch: 5, ri: 0, ans: [], typed: null, postI: 0, postAns: [] },
    r: { filter: 'all', view: 'list', id: null, showTh: false },
    p: { editing: false, del: null }
  };

  /* ---------- แท็บหลัก ---------- */
  var TABS = [
    { id: 'grammar', label: 'เรียน Grammar', icon: ICON.book },
    { id: 'vocab', label: 'เกมคำศัพท์', icon: ICON.cards },
    { id: 'reading', label: 'ฝึกอ่าน GED', icon: ICON.read },
    { id: 'mock', label: 'ทดสอบ', icon: ICON.check }
  ];
  function renderNav() {
    var nav = $('#nav');
    nav.innerHTML = TABS.map(function (t) {
      var sel = S.tab === t.id;
      return '<button type="button" role="tab" id="tab-' + t.id + '" aria-controls="view" aria-selected="' + sel + '" tabindex="' + (sel ? 0 : -1) + '" data-tab="' + t.id + '">' + t.icon + '<span>' + t.label + '</span></button>';
    }).join('');
  }
  function setTab(id, focusView) {
    S.tab = id;
    renderNav();
    render();
    try { history.replaceState(null, '', '#' + id); } catch (e) { }
    if (focusView) { var h = $('#view h2'); if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); } }
    window.scrollTo(0, 0);
  }

  /* ปุ่มกลุ่มแบบแท็บ: เลื่อนด้วยลูกศรซ้าย/ขวา/Home/End */
  function tabKeys(e, selector) {
    var keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
    if (keys.indexOf(e.key) < 0) return false;
    var items = $all(selector, e.currentTarget);
    var i = items.indexOf(document.activeElement);
    if (i < 0) return false;
    e.preventDefault();
    var n = e.key === 'Home' ? 0 : e.key === 'End' ? items.length - 1 : (i + (e.key === 'ArrowRight' ? 1 : -1) + items.length) % items.length;
    items[n].focus();
    items[n].click();
    return true;
  }

  /* ---------- เส้นทางแนะนำ ---------- */
  function renderRoute() {
    var stops = [['A1', '--a1'], ['A2', '--a2'], ['B1', '--b1'], ['B2', '--b2'], ['GED', '--ged']];
    var html = '';
    stops.forEach(function (s, i) {
      if (i) html += '<span class="seg" style="--c1:var(' + stops[i - 1][1] + ');--c2:var(' + s[1] + ')" aria-hidden="true"></span>';
      html += '<span class="stop' + (s[0] === 'GED' ? ' ged' : '') + '" style="--c:var(' + s[1] + ')"><span class="stop-dot" aria-hidden="true"></span><span class="stop-name">' + s[0] + '</span></span>';
    });
    $('#route').innerHTML = html;
  }

  /* ===================================================================
     ตัวสร้างแบบทดสอบ (ใช้ร่วมกัน Grammar และ Reading)
     =================================================================== */
  function prepQuestion(q, escapeText) {
    var items = q.o.map(function (text, i) { return { text: escapeText ? esc(text) : text, note: q.n ? q.n[i] : '', correct: i === q.a }; });
    return { src: q, items: L.shuffle(items) };
  }

  function optionsHTML(pq, qi, chosen, en) {
    var answered = chosen != null;
    return '<div class="opts' + (pq.items.every(function (it) { return stripTags(it.text).length < 26; }) ? ' two' : '') + '" role="group" aria-label="ตัวเลือกข้อ ' + (qi + 1) + '">' +
      pq.items.map(function (it, i) {
        var cls = 'opt';
        var mark = '';
        if (answered) {
          if (it.correct) { cls += ' correct'; mark = '✓ ถูก'; }
          else if (i === chosen) { cls += ' wrong'; mark = '✗ ที่เลือก'; }
          else cls += ' dim';
        }
        return '<button type="button" class="' + cls + '" data-q="' + qi + '" data-o="' + i + '"' + (answered ? ' disabled aria-disabled="true"' : '') + '>' +
          '<span class="key" aria-hidden="true">' + KEYS[i] + '</span><span class="' + (en ? 'en' : '') + '">' + it.text + '</span>' +
          (mark ? '<span class="mark">' + mark + '</span>' : '') + '</button>';
      }).join('') + '</div>';
  }

  /* เฉลย Grammar: คำตอบที่ถูก → ดูจากคำใด → ใช้กฎใด → ทำไม/ทำไมข้อที่เลือกผิด → ตัวอย่างเพิ่ม */
  function grammarFeedback(pq, chosen) {
    var q = pq.src;
    var right = pq.items[chosen].correct;
    var correctItem = pq.items.filter(function (it) { return it.correct; })[0];
    var steps = [
      ['คำตอบที่ถูก', '<b class="en">' + correctItem.text + '</b>'],
      ['ดูจากคำ', q.clue],
      ['กฎที่ใช้', q.rule],
      ['ทำไมจึงเลือก', q.why]
    ];
    if (!right) steps.push(['ข้อที่เลือกผิดเพราะ', '<span class="en">' + pq.items[chosen].text + '</span> — ' + pq.items[chosen].note]);
    steps.push(['ตัวอย่าง/ภาพจำ', '<span class="en">' + q.ex + '</span>']);
    return '<div class="fb ' + (right ? 'good' : 'bad') + '" role="status">' +
      '<p class="fb-verdict">' + (right ? '✓ ถูกต้อง' : '✗ ยังไม่ถูก') + '</p>' +
      '<ul class="fb-steps">' + steps.map(function (s) { return '<li><b>' + s[0] + '</b><span>' + s[1] + '</span></li>'; }).join('') + '</ul></div>';
  }

  /* เฉลย Reading: คำตอบ → หลักฐานจากบทอ่าน → เหตุผล → ทำไมข้อที่เลือกผิด */
  function readingFeedback(pq, chosen, passage) {
    var q = pq.src;
    var right = pq.items[chosen].correct;
    var correctItem = pq.items.filter(function (it) { return it.correct; })[0];
    var ev = q.ev.map(function (e) {
      if (e === 'visual') return '<div class="quote">' + (passage.visual.kind === 'table' ? 'ดูจากตาราง' : 'ดูจากแผนภูมิ') + ': ' + esc(passage.visual.title) + '</div>';
      return '<div class="quote">ประโยคที่ ' + (e + 1) + ': ' + esc(passage.s[e]) + '</div>';
    }).join('');
    var steps = [
      ['คำตอบที่ถูก', '<b class="en">' + correctItem.text + '</b>'],
      ['หลักฐาน', ev + '<button type="button" class="link-btn" data-show-ev="' + esc(q.ev.join(',')) + '">ดูในบทอ่าน</button>'],
      ['เหตุผล', esc(q.why)]
    ];
    if (!right) steps.push(['ข้อที่เลือกผิดเพราะ', esc(pq.items[chosen].note)]);
    return '<div class="fb ' + (right ? 'good' : 'bad') + '" role="status">' +
      '<p class="fb-verdict">' + (right ? '✓ ถูกต้อง' : '✗ ยังไม่ถูก') + '</p>' +
      '<ul class="fb-steps">' + steps.map(function (s) { return '<li><b>' + s[0] + '</b><span>' + s[1] + '</span></li>'; }).join('') + '</ul></div>';
  }

  /* ===================================================================
     GRAMMAR
     =================================================================== */
  var TAGS = {
    n: ['Noun', '--c-n'], pro: ['Pronoun', '--c-pro'], v: ['Verb', '--c-v'], adj: ['Adjective', '--c-adj'], adv: ['Adverb', '--c-adv'],
    prep: ['Preposition', '--c-prep'], conj: ['Conjunction', '--c-conj'], int: ['Interjection', '--c-int'], det: ['Determiner', '--c-det'],
    S: ['ประธาน · ใคร', '--c-n'], V: ['กริยา · ทำอะไร', '--c-v'], O: ['กรรม · กับอะไร', '--c-adj'], C: ['ส่วนเติมเต็ม', '--c-adv'],
    T: ['เวลา · เมื่อไร', '--c-prep'], Pl: ['สถานที่ · ที่ไหน', '--c-pro'], R: ['เหตุผล · เพราะอะไร', '--c-conj'], M: ['ส่วนขยาย', '--c-det'],
    aux: ['กริยาช่วย', '--c-int'], neg: ['ปฏิเสธ', '--c-int'], q: ['ตัวถาม', '--c-int'], x: ['', '']
  };
  function diagram(en) {
    return '<div class="diagram">' + en.split('|').map(function (tok) {
      var k = tok.slice(0, tok.indexOf(':'));
      var w = tok.slice(tok.indexOf(':') + 1);
      var t = TAGS[k] || TAGS.x;
      return '<span class="tok' + (k === 'x' ? ' x' : '') + '"' + (t[1] ? ' style="--c:var(' + t[1] + ')"' : '') + '><span class="w">' + esc(w) + '</span><span class="l">' + esc(t[0]) + '</span></span>';
    }).join('<span aria-hidden="true" class="muted" style="align-self:center;padding-bottom:18px">→</span>') + '</div>';
  }
  function exampleText(en) { return en.split('|').map(function (t) { return t.slice(t.indexOf(':') + 1); }).join(' ').replace(/\s+([.,?!])/g, '$1') + (/[.?!]$/.test(en) ? '' : '.'); }

  function lessonDone(id) { var r = Store.data.grammar[id]; return r && r.answered >= 5; }
  function catProgress(cat) { return cat.lessons.filter(function (l) { return lessonDone(l.id); }).length; }

  function reviewCount() {
    var review = Store.data.review || {};
    return Object.keys(review).filter(function (k) { return (review[k].ruleWrong + review[k].usageWrong) > 0; }).length;
  }
  function catIndexById(id) { for (var i = 0; i < EP.grammar.length; i++) if (EP.grammar[i].id === id) return i; return 0; }
  function lessonLocatorById(id) {
    for (var ci = 0; ci < EP.grammar.length; ci++) {
      var li = EP.grammar[ci].lessons.map(function (l) { return l.id; }).indexOf(id);
      if (li >= 0) return ci + '-' + li;
    }
    return '0-0';
  }
  function renderGReview(view) {
    var review = Store.data.review || {};
    var entries = Object.keys(review).map(function (k) { return { key: k, r: review[k] }; })
      .filter(function (e) { return (e.r.ruleWrong + e.r.usageWrong) > 0; })
      .sort(function (a, b) { return b.r.at - a.r.at; });
    view.innerHTML = '<div class="stack">' +
      '<button type="button" class="back" data-gback="1">' + ICON.back + 'กลับไปหน้าหมวด Grammar</button>' +
      '<h2>ทบทวนของฉัน</h2>' +
      '<p class="small muted">หัวข้อที่ยังตอบผิดจากครั้งล่าสุด แยกให้เห็นว่า <b>จำกฎได้</b> (ตอบคำถามเกี่ยวกับกฎตรง ๆ) กับ <b>ใช้ในประโยคได้</b> (เติมคำ/เลือกใช้ในบริบทจริง) ต่างกันอย่างไร — ทำเรื่องเดิมใหม่ให้ถูกครบ เรื่องนั้นจะหายจากลิสต์นี้เอง</p>' +
      (entries.length ? '<div class="lesson-list">' + entries.map(function (e) {
        var parts = [];
        if (e.r.ruleWrong) parts.push('จำกฎได้: ผิด ' + e.r.ruleWrong + ' ข้อ');
        if (e.r.usageWrong) parts.push('ใช้ในประโยคได้: ผิด ' + e.r.usageWrong + ' ข้อ');
        var isLesson = e.key.indexOf('lesson:') === 0;
        var attr = isLesson ? 'data-go-lesson="' + lessonLocatorById(e.key.slice(7)) + '"' : 'data-review-cat="' + catIndexById(e.key.slice(5)) + '"';
        return '<button type="button" class="lesson-item" ' + attr + '><span class="num" aria-hidden="true">!</span><span class="t"><span class="en">' + esc(e.r.title) + '</span><small>' + parts.join(' · ') + '</small></span></button>';
      }).join('') + '</div>' : '<p class="muted small">ยังไม่มีข้อที่ตอบผิดค้างไว้ตอนนี้ เยี่ยมมาก!</p>') +
      '</div>';
  }
  var GLEVEL_TH = { Basic: 'พื้นฐาน', A1: 'A1', A2: 'A2', B1: 'B1', B2: 'B2', C1: 'C1 · วิชาการ' };
  function allGrammarLessons() {
    var out = [];
    EP.grammar.forEach(function (c, ci) { c.lessons.forEach(function (l, li) { out.push({ ci: ci, li: li, l: l, cat: c }); }); });
    return out;
  }
  function renderGPath(view) {
    var all = allGrammarLessons();
    var totalDone = all.filter(function (x) { return lessonDone(x.l.id); }).length;
    var next = nextGrammarLesson();
    var groups = GLEVELS.map(function (lv) { return { lv: lv, items: all.filter(function (x) { return x.l.level === lv; }) }; })
      .filter(function (g) { return g.items.length > 0; });
    view.innerHTML = '<div class="stack">' +
      '<button type="button" class="back" data-gback="1">' + ICON.back + 'กลับไปหน้าหมวด Grammar</button>' +
      '<div class="row" style="justify-content:space-between"><h2>เส้นทาง Grammar ทุกระดับ</h2><span class="small muted">รวมทุกหมวด เรียงจากพื้นฐานไปสูงสุด</span></div>' +
      '<p class="small muted">เรียนแล้ว ' + totalDone + '/' + all.length + ' บท ทุกหมวด — เลือกเรียนบทไหนก่อนก็ได้ ไม่บังคับต้องเรียงตามหมวด</p>' +
      (next ? '<div class="panel stack" style="border:2px solid var(--accent)"><p class="eyebrow">แนะนำบทต่อไป (ระดับต่ำสุดที่ยังไม่ได้เรียน)</p><button type="button" class="btn primary" data-go-lesson="' + next.ci + '-' + next.li + '">' + lvBadge(next.l.level) + ' <span class="en">' + next.l.title + '</span> · ' + next.cat.th + '</button></div>' : '') +
      groups.map(function (g) {
        var done = g.items.filter(function (x) { return lessonDone(x.l.id); }).length;
        return '<section class="panel stack"><div class="row" style="justify-content:space-between">' +
          '<h3>' + lvBadge(g.lv) + ' ' + GLEVEL_TH[g.lv] + '</h3><span class="small muted">' + done + '/' + g.items.length + '</span></div>' +
          '<div class="lesson-list">' + g.items.map(function (x) {
            var d = lessonDone(x.l.id);
            return '<button type="button" class="lesson-item' + (d ? ' done' : '') + '" data-go-lesson="' + x.ci + '-' + x.li + '">' +
              '<span class="num" aria-hidden="true">' + (d ? '✓' : '·') + '</span>' +
              '<span class="t"><span class="en">' + x.l.title + '</span><small>' + x.cat.th + ' · ' + x.l.th + '</small></span></button>';
          }).join('') + '</div></section>';
      }).join('') +
      '</div>';
  }
  function renderGrammar(view) {
    var cat = EP.grammar[S.g.cat];
    if (S.g.view === 'lesson') return renderLesson(view, cat, S.g.lesson);
    if (S.g.view === 'post') return renderGPost(view, cat);
    if (S.g.view === 'path') return renderGPath(view);
    if (S.g.view === 'review') return renderGReview(view);
    var done = catProgress(cat);
    var postBest = Store.data.gpost[cat.id];
    var unlocked = done === cat.lessons.length;
    view.innerHTML =
      '<div class="stack">' +
      '<div class="row" style="justify-content:space-between"><h2>เรียน Grammar</h2><span class="small muted">' + EP.grammar.length + ' หมวด · mini-test บทละ 5 ข้อ · Post-test หมวดละ 10 ข้อ</span></div>' +
      '<div class="row" style="gap:16px">' +
      '<button type="button" class="link-btn small" data-gpath="1">ดูเส้นทางเรียนทุกระดับ (ข้ามหมวด) →</button>' +
      '<button type="button" class="link-btn small" data-greview="1">ทบทวนของฉัน' + (reviewCount() ? ' (' + reviewCount() + ')' : '') + ' →</button>' +
      '</div>' +
      playerBar('grammar') +
      '<div class="chips" role="tablist" aria-label="หมวด Grammar" id="gcats">' +
      EP.grammar.map(function (c, i) {
        var sel = i === S.g.cat;
        return '<button type="button" class="chip" role="tab" aria-selected="' + sel + '" tabindex="' + (sel ? 0 : -1) + '" data-gcat="' + i + '"><span class="en">' + c.name + '</span><small>' + c.th + ' · ' + catProgress(c) + '/' + c.lessons.length + '</small></button>';
      }).join('') + '</div>' +
      '<section class="panel stack" aria-labelledby="cat-h">' +
      '<div><p class="eyebrow">หมวด ' + (S.g.cat + 1) + ' จาก ' + EP.grammar.length + '</p><h3 id="cat-h"><span class="en">' + cat.name + '</span> · ' + cat.th + '</h3><p class="muted small">' + cat.blurb + '</p></div>' +
      '<div class="row small muted"><span>เรียนแล้ว ' + done + '/' + cat.lessons.length + ' บท</span></div>' +
      '<div class="progress" aria-hidden="true"><span style="width:' + Math.round(done / cat.lessons.length * 100) + '%"></span></div>' +
      '<div class="lesson-list">' +
      cat.lessons.map(function (l, i) {
        var r = Store.data.grammar[l.id];
        var d = lessonDone(l.id);
        return '<button type="button" class="lesson-item' + (d ? ' done' : '') + '" data-lesson="' + i + '">' +
          '<span class="num" aria-hidden="true">' + (d ? '✓' : i + 1) + '</span>' +
          '<span class="t"><span class="en">' + l.title + '</span><small>' + l.th + '</small></span>' +
          '<span class="st">' + lvBadge(l.level) + (r && r.best != null ? '<span>mini-test ' + r.best + '/5</span>' : '<span>ยังไม่เรียน</span>') + '</span></button>';
      }).join('') +
      '<button type="button" class="lesson-item post" data-gpost="1"' + (unlocked ? '' : ' aria-disabled="true"') + '>' +
      '<span class="num" aria-hidden="true">★</span><span class="t">Post-test หมวดนี้<small>' + (unlocked ? '10 ข้อ ไล่จากง่ายไปยาก' : 'ทำ mini-test ให้ครบทุกบทก่อน (' + done + '/' + cat.lessons.length + ')') + '</small></span>' +
      '<span class="st">' + (postBest != null ? '<span>ดีที่สุด ' + postBest + '/10</span>' : '<span>' + (unlocked ? 'พร้อมทำ' : 'ล็อก') + '</span>') + '</span></button>' +
      '</div>' +
      resetBlock('grammar', 'ล้างความคืบหน้า Grammar ของผู้เล่นนี้') +
      '</section>' + leaderboard('grammar') + '</div>';
  }

  var gQuiz = null; // สถานะ mini-test ของบทที่เปิดอยู่
  function renderLesson(view, cat, idx) {
    var l = cat.lessons[idx];
    if (!gQuiz || gQuiz.id !== l.id) gQuiz = { id: l.id, qs: l.quiz.map(prepQuestion), ans: [null, null, null, null, null] };
    var answered = gQuiz.ans.filter(function (a) { return a != null; }).length;
    var score = gQuiz.ans.reduce(function (s, a, i) { return s + (a != null && gQuiz.qs[i].items[a].correct ? 1 : 0); }, 0);
    var isLast = idx === cat.lessons.length - 1;
    var usesPOS = /^pos-/.test(l.id);
    var legendKeys = usesPOS ? ['n', 'pro', 'v', 'adj', 'adv', 'prep', 'conj', 'int', 'det'] : ['S', 'V', 'O', 'C', 'T', 'Pl', 'R', 'M'];
    view.innerHTML =
      '<div class="stack lesson">' +
      '<button type="button" class="back" data-gback="1">' + ICON.back + 'กลับไปหมวด ' + cat.name + '</button>' +
      '<header class="stack" style="gap:6px"><div class="row">' + lvBadge(l.level) + '<span class="eyebrow">' + cat.name + ' · บทที่ ' + (idx + 1) + '/' + cat.lessons.length + '</span></div>' +
      '<h2><span class="en">' + l.title + '</span> ' + l.th + '</h2></header>' +
      '<section class="panel stack">' +
      part(0, 'อธิบายสั้น ๆ', '<div class="explain">' + l.explain + '</div>') +
      part(1, 'สูตร / ภาพจำ', '<div class="formula">' + l.formula + '</div>') +
      part(2, 'ตัวอย่าง + แผนภาพหน้าที่คำ',
        '<div class="legend" aria-label="คำอธิบายสี">' + legendKeys.map(function (k) { return '<span style="--c:var(' + TAGS[k][1] + ')">' + TAGS[k][0] + '</span>'; }).join('') + '</div>' +
        l.examples.map(function (e) {
          var text = exampleText(e.en);
          return '<div class="example"><div class="row" style="align-items:flex-start;flex-wrap:nowrap">' + diagram(e.en) + '<span style="margin-left:auto">' + sayBtn(text, true) + '</span></div><p class="th">' + e.th + '</p></div>';
        }).join('') +
        '<p class="small muted">ป้ายใต้แต่ละคำบอกหน้าที่ของคำนั้น สีเป็นตัวช่วยเสริม</p>') +
      part(3, 'จุดที่มักสับสน', '<ul class="confuse">' + l.confuse.map(function (c) { return '<li>' + c + '</li>'; }).join('') + '</ul>') +
      (l.writing ? part(4, 'ลองแต่งประโยคเอง', writingHTML(l)) : '') +
      '</section>' +
      '<section class="panel stack" aria-labelledby="mt-h"><div class="part-head"><span class="part-mark">' + THAI_MARK[5] + '</span><h3 id="mt-h">Mini-test 5 ข้อ</h3></div>' +
      '<p class="small muted">ถามเฉพาะเรื่องในบทนี้ ตอบครบ 5 ข้อเพื่อไปบทถัดไป</p>' +
      '<div id="mt">' + gQuiz.qs.map(function (pq, i) { return gQuestionHTML(pq, i, gQuiz.ans[i]); }).join('') + '</div>' +
      '<div class="stack" id="mt-foot">' + lessonFoot(answered, score, idx, isLast, cat) + '</div>' +
      '</section></div>';
  }
  function part(i, title, body) {
    return '<div class="part"><div class="part-head"><span class="part-mark">' + THAI_MARK[i] + '</span><h3>' + title + '</h3></div>' + body + '</div>';
  }
  function writingHTML(l) {
    return '<p class="small muted">ลองแต่งประโยคเองในกระดาษ/สมุด ไม่มีคะแนน ไม่มีการตรวจอัตโนมัติ เพราะคำตอบที่ถูกมีได้หลายแบบ — ใช้ checklist ตรวจตัวเองแทน</p>' +
      l.writing.map(function (w, i) {
        return '<div class="write-task"><p><b>' + (i + 1) + '.</b> ' + esc(w.prompt) + '</p>' +
          '<details><summary>ดูตัวอย่างคำตอบ + checklist ตรวจตัวเอง</summary>' +
          '<p class="en" style="margin-top:8px">' + esc(w.sample) + '</p>' + sayBtn(w.sample, true) +
          '<ul class="confuse">' + w.checklist.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul>' +
          '</details></div>';
      }).join('');
  }
  function gQuestionHTML(pq, i, chosen) {
    return '<div class="q" id="gq-' + i + '"><p class="q-num">ข้อ ' + (i + 1) + '</p><p class="q-stem">' + pq.src.q.replace(/___/g, '<span class="blank en">?</span>') + '</p>' +
      optionsHTML(pq, i, chosen, true) + (chosen != null ? grammarFeedback(pq, chosen) : '') + '</div>';
  }
  function lessonFoot(answered, score, idx, isLast, cat) {
    var all = answered === 5;
    var buttons = [];
    var notes = [];
    if (all) buttons.push('<button type="button" class="btn" data-gretry="1">ทำ mini-test ใหม่</button>');
    if (isLast) {
      var remaining = cat.lessons.filter(function (l, i) { return i !== idx && !lessonDone(l.id); }).length;
      buttons.push('<button type="button" class="btn primary" data-gpost="1"' + (all && remaining === 0 ? '' : ' disabled') + '>ไป Post-test หมวดนี้</button>');
      if (all && remaining > 0) notes.push('ยังมีอีก ' + remaining + ' บทในหมวดนี้ที่ยังไม่ได้ทำ mini-test กลับไปทำให้ครบเพื่อเปิด Post-test');
    } else {
      buttons.push('<button type="button" class="btn primary" data-gnext="1"' + (all ? '' : ' disabled') + '>บทถัดไป →</button>');
    }
    if (!all) notes.push('ตอบให้ครบ 5 ข้อก่อน ปุ่ม' + (isLast ? ' Post-test' : 'บทถัดไป') + 'จึงจะใช้ได้');
    return '<div class="progress" aria-hidden="true"><span style="width:' + answered * 20 + '%"></span></div>' +
      '<p class="gate" aria-live="polite">' + (all ? 'คะแนน mini-test: <b>' + score + '/5</b>' : 'ตอบแล้ว ' + answered + '/5 ข้อ') + '</p>' +
      '<div class="row" style="justify-content:center">' + buttons.join('') + '</div>' +
      notes.map(function (n) { return '<p class="gate">' + n + '</p>'; }).join('');
  }
  function answerLesson(qi, oi) {
    if (!gQuiz || gQuiz.ans[qi] != null) return;
    gQuiz.ans[qi] = oi;
    var box = $('#gq-' + qi);
    box.outerHTML = gQuestionHTML(gQuiz.qs[qi], qi, oi);
    var cat = EP.grammar[S.g.cat];
    var idx = S.g.lesson;
    var answered = gQuiz.ans.filter(function (a) { return a != null; }).length;
    var score = gQuiz.ans.reduce(function (s, a, i) { return s + (a != null && gQuiz.qs[i].items[a].correct ? 1 : 0); }, 0);
    if (answered === 5) {
      var rec = Store.data.grammar[gQuiz.id] || {};
      rec.answered = 5;
      rec.last = score;
      rec.best = Math.max(rec.best || 0, score);
      Store.data.grammar[gQuiz.id] = rec;
      Store.save();
      var wrongPqs = gQuiz.qs.filter(function (pq, i) { return !pq.items[gQuiz.ans[i]].correct; });
      recordReview('lesson:' + gQuiz.id, cat.lessons[idx].title + ' · ' + cat.lessons[idx].th, wrongPqs);
    }
    $('#mt-foot').innerHTML = lessonFoot(answered, score, idx, idx === cat.lessons.length - 1, cat);
    var fb = $('#gq-' + qi + ' .fb');
    if (fb) { fb.setAttribute('tabindex', '-1'); fb.focus({ preventScroll: true }); fb.scrollIntoView({ block: 'nearest', behavior: reduceMotion() ? 'auto' : 'smooth' }); }
  }

  var gPost = null;
  function renderGPost(view, cat) {
    if (!gPost || gPost.cat !== cat.id) gPost = { cat: cat.id, qs: cat.post.map(prepQuestion), ans: [], i: 0 };
    var total = gPost.qs.length;
    if (gPost.i >= total) {
      var score = gPost.ans.reduce(function (s, a, i) { return s + (gPost.qs[i].items[a].correct ? 1 : 0); }, 0);
      var wrong = gPost.qs.map(function (pq, i) { return { pq: pq, i: i, a: gPost.ans[i] }; }).filter(function (x) { return !x.pq.items[x.a].correct; });
      if (!gPost.recorded) { gPost.recorded = true; recordReview('post:' + cat.id, 'Post-test ' + cat.name + ' · ' + cat.th, wrong.map(function (x) { return x.pq; })); }
      view.innerHTML = '<div class="stack">' +
        '<button type="button" class="back" data-gback="1">' + ICON.back + 'กลับไปหมวด ' + cat.name + '</button>' +
        '<h2>Post-test: <span class="en">' + cat.name + '</span></h2>' +
        '<section class="panel score-card"><p class="eyebrow">คะแนน Post-test</p><p class="score-big">' + score + '<small>/10</small></p>' +
        '<p class="muted">' + (score >= 8 ? 'เยี่ยม พร้อมไปหมวดถัดไป' : score >= 5 ? 'ดีแล้ว ทบทวนข้อที่ผิดด้านล่าง แล้วลองใหม่' : 'กลับไปทบทวนบทเรียนในหมวดนี้ก่อน แล้วลองใหม่') + '</p>' +
        savedNote() + '<div class="row" style="justify-content:center"><button type="button" class="btn" data-gpostretry="1">ทำใหม่</button><button type="button" class="btn primary" data-gback="1">กลับไปทบทวนบทเรียน</button></div></section>' +
        (wrong.length ? '<section class="panel stack"><h3>ข้อที่ยังไม่ถูก</h3>' + wrong.map(function (x) {
          return '<div class="q"><p class="q-num">ข้อ ' + (x.i + 1) + '</p><p class="q-stem">' + x.pq.src.q.replace(/___/g, '<span class="blank en">?</span>') + '</p>' + grammarFeedback(x.pq, x.a) + '</div>';
        }).join('') + '</section>' : '') + '</div>';
      return;
    }
    var i = gPost.i;
    var pq = gPost.qs[i];
    var chosen = gPost.ans[i];
    var answered = chosen != null;
    var score2 = gPost.ans.reduce(function (s, a, k) { return s + (gPost.qs[k].items[a].correct ? 1 : 0); }, 0);
    view.innerHTML = '<div class="stack">' +
      '<button type="button" class="back" data-gback="1">' + ICON.back + 'ออกจาก Post-test</button>' +
      '<h2>Post-test: <span class="en">' + cat.name + '</span></h2>' +
      '<section class="panel stack">' +
      '<div class="stat-row"><span>ข้อ <b>' + (i + 1) + '</b>/' + total + '</span><span>คะแนน <b>' + score2 + '</b></span></div>' +
      '<div class="progress" aria-hidden="true"><span style="width:' + ((i + (answered ? 1 : 0)) / total * 100) + '%"></span></div>' +
      '<div class="q" id="gp"><p class="q-stem">' + pq.src.q.replace(/___/g, '<span class="blank en">?</span>') + '</p>' + optionsHTML(pq, i, chosen, true) +
      (answered ? grammarFeedback(pq, chosen) : '') + '</div>' +
      (answered ? '<button type="button" class="btn primary block" data-gpostnext="1">' + (i === total - 1 ? 'ดูคะแนน' : 'ข้อถัดไป →') + '</button>' : '<p class="gate">เลือกคำตอบเพื่อดูเฉลย</p>') +
      '</section></div>';
  }
  function answerGPost(oi) {
    if (gPost.ans[gPost.i] != null) return;
    gPost.ans[gPost.i] = oi;
    render();
    var b = $('[data-gpostnext]');
    if (b) b.focus({ preventScroll: true });
    var fb = $('#gp .fb'); if (fb) fb.scrollIntoView({ block: 'nearest', behavior: reduceMotion() ? 'auto' : 'smooth' });
  }
  function finishGPost() {
    gPost.i++;
    if (gPost.i >= gPost.qs.length) {
      var score = gPost.ans.reduce(function (s, a, i) { return s + (gPost.qs[i].items[a].correct ? 1 : 0); }, 0);
      Store.data.gpost[gPost.cat] = Math.max(Store.data.gpost[gPost.cat] || 0, score);
      Store.save();
    }
    render();
    focusHeading();
  }

  /* ===================================================================
     VOCAB
     =================================================================== */
  var game = null;
  function vKey(lv, set, dir, choices) { return lv + '-' + (set + 1) + '-' + dir + '-' + choices; }
  function vRec(lv, set) {
    var r = Store.data.vocab[vKey(lv, set, S.v.dir, S.v.choices)];
    return r || null;
  }
  function vocabModeToggle() {
    return '<div class="row" style="gap:8px;margin-bottom:4px" role="group" aria-label="โหมดคำศัพท์">' +
      '<button type="button" class="chip" aria-pressed="' + (S.vmode === 'exam') + '" data-vmode="exam">เตรียมสอบ (Oxford 3000/5000)</button>' +
      '<button type="button" class="chip" aria-pressed="' + (S.vmode === 'basic') + '" data-vmode="basic">ปูพื้นฐาน (400 คำเดิม)</button>' +
      '</div>';
  }
  function renderVocab(view) {
    if (S.vmode === 'exam') return renderVocabExam(view);
    return renderVocabBasic(view);
  }
  function renderVocabBasic(view) {
    if (game && S.v.phase !== 'setup') return renderGame(view);
    var level = EP.vocab[S.v.lv];
    var set = level.sets[S.v.set];
    var lvColor = { A1: '--a1', A2: '--a2', B1: '--b1', B2: '--b2' };
    view.innerHTML = '<div class="stack">' +
      '<div class="row" style="justify-content:space-between"><h2>เกมการ์ดคำศัพท์ · ปูพื้นฐาน</h2><span class="small muted">4 ระดับ × 4 ชุด × 25 คำ = 400 คำ</span></div>' +
      vocabModeToggle() +
      playerBar('vocab') +
      '<section class="panel stack">' +
      '<div class="field"><span class="label" id="lv-l">ระดับ</span><div class="seg-ctl" role="group" aria-labelledby="lv-l">' +
      LEVELS.map(function (lv) { return '<button type="button" aria-pressed="' + (lv === S.v.lv) + '" data-vlv="' + lv + '" style="' + (lv === S.v.lv ? 'background:var(' + lvColor[lv] + ');color:var(--surface)' : 'color:var(' + lvColor[lv] + ')') + '">' + lv + '</button>'; }).join('') + '</div></div>' +
      '<div class="field"><span class="label" id="set-l">ชุดคำศัพท์</span><div class="set-grid" role="group" aria-labelledby="set-l">' +
      level.sets.map(function (st, i) {
        var r = vRec(S.v.lv, i);
        return '<button type="button" class="set-card" aria-pressed="' + (i === S.v.set) + '" data-vset="' + i + '" style="--c:var(' + lvColor[S.v.lv] + ')">' +
          '<span class="n">ชุด ' + (i + 1) + ' · คำที่ ' + (i * 25 + 1) + '–' + (i * 25 + 25) + '</span><span class="t">' + st.name + '</span>' +
          '<span class="best">' + (r ? 'การ์ด ' + (r.card != null ? r.card : '–') + '/25 · Post ' + (r.post != null ? r.post : '–') + '/15' : 'ยังไม่เล่นในโหมดนี้') + '</span></button>';
      }).join('') + '</div></div>' +
      '<div class="row" style="gap:18px;align-items:flex-start">' +
      '<div class="field"><span class="label" id="dir-l">ทิศทาง</span><div class="seg-ctl" role="group" aria-labelledby="dir-l">' +
      [['en-th', 'อังกฤษ → ไทย'], ['th-en', 'ไทย → อังกฤษ']].map(function (d) { return '<button type="button" aria-pressed="' + (S.v.dir === d[0]) + '" data-vdir="' + d[0] + '">' + d[1] + '</button>'; }).join('') + '</div></div>' +
      '<div class="field"><span class="label" id="ch-l">จำนวนตัวเลือกในการ์ด</span><div class="seg-ctl" role="group" aria-labelledby="ch-l">' +
      [2, 3, 4].map(function (n) { return '<button type="button" aria-pressed="' + (S.v.choices === n) + '" data-vch="' + n + '">' + n + '</button>'; }).join('') + '</div></div></div>' +
      '<button type="button" class="btn primary block" data-vstart="1">เริ่มชุด ' + (S.v.set + 1) + ' ระดับ ' + S.v.lv + ' (25 การ์ด + Post-test 15 ข้อ)</button>' +
      '<p class="small muted"><b>วิธีเล่น:</b> ทำการ์ด 25 คำให้ครบ (สุ่มลำดับใหม่ทุกครั้ง) แล้วทำ Post-test เติมคำ 15 ข้อที่สุ่มจากคลัง 25 ประโยคของชุดนี้ กดปุ่ม ' + ICON.play.replace('<svg', '<svg width="14" height="14" style="vertical-align:-2px"') + ' เพื่อฟังเสียงภาษาอังกฤษ เสียงจะไม่เล่นเอง</p>' +
      '</section>' +
      '<section class="panel stack"><details class="words"><summary>ดูคำศัพท์ทั้ง 25 คำในชุดนี้</summary><ul class="word-list" style="padding:0;margin:8px 0 0">' +
      set.words.map(function (w) { return '<li>' + sayBtn(w.w, true) + '<span><span class="en">' + esc(w.w) + '</span> <span class="small muted">' + w.p + '</span><br><span class="th">' + esc(w.th) + '</span></span></li>'; }).join('') +
      '</ul></details>' + resetBlock('vocab', 'ล้างคะแนนคำศัพท์ของผู้เล่นนี้') + '</section>' + leaderboard('vocab') +
      '<p class="small muted">รายการคำศัพท์นี้คัดและจัดระดับเพื่อการฝึกเรียน ไม่ใช่บัญชีคำศัพท์ทางการของ GED หรือการรับรองระดับ CEFR</p>' +
      '</div>';
  }

  /* ===================================================================
     คำศัพท์ "เตรียมสอบ" — อิง Oxford 3000 (A1–B2) / Oxford 5000 (C1)
     แยกจากระบบ "ปูพื้นฐาน" เดิมทั้งหมด ไม่แตะ EP.vocab/game/startGame เดิมเลย
     =================================================================== */
  var EX_ACT = [
    { key: 'recognize1', label: 'เลือกความหมาย', kind: 'recognize' },
    { key: 'recall1', label: 'ไทย → อังกฤษ', kind: 'recall' },
    { key: 'listen', label: 'ฟังแล้วเลือกคำ', kind: 'recognize' },
    { key: 'fill', label: 'เติมคำในประโยค', kind: 'context' },
    { key: 'type', label: 'พิมพ์คำศัพท์', kind: 'recall' }
  ];
  function examTrip() { return EP.examVocab.trips[S.ex.tripIdx]; }
  function examSetObj() { return examTrip().sets[S.ex.setIdx]; }
  function examWordState(w) {
    var d = Store.data.examvocab || (Store.data.examvocab = {});
    return d[w] || { recognize: false, recall: false, context: false, box: 0, dueAt: 0, wrongStreak: 0 };
  }
  function examMastered(w) { var st = examWordState(w); return st.recognize && st.recall && st.context; }
  function examMarkResult(word, kind, correct) {
    var d = Store.data.examvocab || (Store.data.examvocab = {});
    var st = d[word] || { recognize: false, recall: false, context: false, box: 0, dueAt: 0, wrongStreak: 0 };
    var DAY = 24 * 60 * 60 * 1000;
    if (correct) {
      st[kind] = true;
      st.box = Math.min(4, (st.box || 0) + 1);
      st.wrongStreak = 0;
    } else {
      st.box = 0;
      st.wrongStreak = (st.wrongStreak || 0) + 1;
    }
    var intervalDays = [0, 1, 3, 7, 14]; // box คือ index เสมอ (0-4) ห้ามใช้ || เพราะ 0 วันเป็นค่าที่ถูกต้อง ไม่ใช่ค่าที่ต้อง fallback
    st.dueAt = Date.now() + intervalDays[st.box] * DAY;
    d[word] = st;
    Store.save();
  }
  function examSetProgress(setObj) { return setObj.words.filter(function (w) { return examMastered(w.w); }).length; }
  function examDueWords() {
    var out = [];
    (EP.examVocab.trips || []).forEach(function (trip) {
      trip.sets.forEach(function (set) {
        set.words.forEach(function (w) {
          var st = (Store.data.examvocab || {})[w.w];
          if (st && st.dueAt && st.dueAt <= Date.now() && st.box < 4) out.push(w);
        });
      });
    });
    return out;
  }
  function buildExamFillRound(words, rnd) {
    var byWord = {};
    var flat = [];
    words.forEach(function (w) {
      flat.push({ w: w.w, s: w.sentence, x: w.x || [] });
      (w.quizBank || []).forEach(function (q) { flat.push({ w: w.w, s: q.s, x: w.x || [] }); });
    });
    EP.logic.shuffle(flat, rnd).forEach(function (item) { if (!byWord[item.w]) byWord[item.w] = item; });
    var chosen = words.map(function (w) { return byWord[w.w]; });
    return EP.logic.buildPostTest(chosen, words, chosen.length, rnd);
  }
  function startExamBatch(n) {
    var setObj = examSetObj();
    var words = EP.logic.shuffle(setObj.words, Math.random).slice(0, n);
    S.ex.words = words;
    S.ex.rounds = {
      recognize1: EP.logic.buildCardRound(words, Math.min(4, words.length), 'en-th', Math.random),
      recall1: EP.logic.buildCardRound(words, Math.min(4, words.length), 'th-en', Math.random),
      listen: EP.logic.buildCardRound(words, Math.min(4, words.length), 'th-en', Math.random),
      fill: buildExamFillRound(words, Math.random)
    };
    S.ex.ans = { recognize1: words.map(function () { return null; }), recall1: words.map(function () { return null; }), listen: words.map(function () { return null; }), fill: words.map(function () { return null; }) };
    S.ex.typed = words.map(function () { return null; });
    S.ex.actIdx = 0;
    S.ex.qi = 0;
    S.ex.phase = 'play';
  }
  function examCurrentRound() { return S.ex.rounds[EX_ACT[S.ex.actIdx].key]; }
  function examAnswerChoice(oi) {
    var act = EX_ACT[S.ex.actIdx];
    var round = examCurrentRound();
    var q = round[S.ex.qi];
    if (S.ex.ans[act.key][S.ex.qi] != null) return;
    S.ex.ans[act.key][S.ex.qi] = oi;
    var word = q.word;
    examMarkResult(word.w, act.kind, oi === q.answer);
    render();
    var fb = $('#ex-fb');
    if (fb) { fb.setAttribute('tabindex', '-1'); fb.focus({ preventScroll: true }); }
  }
  function examSubmitTyped(value) {
    var word = S.ex.words[S.ex.qi];
    if (S.ex.typed[S.ex.qi] != null) return;
    var correct = String(value || '').trim().toLowerCase() === word.w.toLowerCase();
    S.ex.typed[S.ex.qi] = { value: value, correct: correct };
    examMarkResult(word.w, 'recall', correct);
    render();
  }
  function examAnswerPost(oi) {
    if (examPost.ans[examPost.i] != null) return;
    examPost.ans[examPost.i] = oi;
    var q = examPost.qs[examPost.i];
    examMarkResult(q.word.w, 'context', oi === q.answer);
    render();
    var fb = $('#ex-fb');
    if (fb) { fb.setAttribute('tabindex', '-1'); fb.focus({ preventScroll: true }); }
  }
  function examNextQuestion() {
    var act = EX_ACT[S.ex.actIdx];
    var total = act.key === 'type' ? S.ex.words.length : examCurrentRound().length;
    if (S.ex.qi < total - 1) { S.ex.qi++; render(); focusHeading(); return; }
    if (S.ex.actIdx < EX_ACT.length - 1) { S.ex.actIdx++; S.ex.qi = 0; render(); focusHeading(); return; }
    S.ex.phase = 'result';
    render(); focusHeading();
  }
  function examHintFor(word) {
    var st = examWordState(word.w);
    if (st.recall) return ''; // เคยนึกคำเองได้แล้ว ไม่ต้องมีคำใบ้
    if (st.wrongStreak >= 2) return word.w.slice(0, Math.min(3, word.w.length)); // ผิดซ้ำ ให้คำใบ้มากขึ้น
    return word.w.slice(0, 1); // ครั้งแรก ใบ้แค่ตัวแรก
  }
  function renderExamSetup(view) {
    var trip = examTrip();
    var setObj = examSetObj();
    var due = examDueWords();
    view.innerHTML = '<div class="stack">' +
      '<div class="row" style="justify-content:space-between"><h2>คำศัพท์เตรียมสอบ</h2><span class="small muted">อิง Oxford 3000 (A1–B2) และ Oxford 5000 (C1)</span></div>' +
      vocabModeToggle() +
      playerBar('vocab') +
      (due.length ? '<section class="panel stack"><h3>ทบทวนวันนี้ (' + due.length + ' คำ)</h3><p class="small muted">คำที่เคยตอบผิดหรือถึงกำหนดทบทวนแบบเว้นระยะ</p><button type="button" class="btn primary block" data-exreview="1">เริ่มทบทวน</button></section>' : '') +
      (EP.examVocab.trips.length > 1 ? '<div class="chips" role="tablist" aria-label="ทริปคำศัพท์">' +
        EP.examVocab.trips.map(function (tp, i) {
          var tDone = tp.sets.reduce(function (s, st) { return s + examSetProgress(st); }, 0);
          var tTotal = tp.sets.reduce(function (s, st) { return s + st.words.length; }, 0);
          return '<button type="button" class="chip" role="tab" aria-selected="' + (i === S.ex.tripIdx) + '" data-extrip="' + i + '"><span class="en">ทริป ' + (i + 1) + '</span><small>' + tDone + '/' + tTotal + ' คำ</small></button>';
        }).join('') + '</div>' : '') +
      '<section class="panel stack" aria-labelledby="ex-trip-h"><h3 id="ex-trip-h"><span class="en">' + esc(trip.name) + '</span></h3>' +
      '<p class="small muted">1 ทริป = 5 ชุด × 10 คำ ตามสัดส่วนที่เว็บกำหนด (ไม่ใช่สัดส่วนทางการของ Oxford) — A1 1 · A2 4 · B1 25 · B2 15 · C1 5 คำ ต่อทริป</p>' +
      '<div class="set-grid" role="group" aria-label="เลือกชุดคำศัพท์">' +
      trip.sets.map(function (st, i) {
        var done = examSetProgress(st);
        return '<button type="button" class="set-card" aria-pressed="' + (i === S.ex.setIdx) + '" data-exset="' + i + '" style="--c:var(--b1)">' +
          '<span class="n">ชุด ' + (i + 1) + ' · ' + st.themeTh + '</span><span class="t">' + esc(st.theme) + '</span>' +
          '<span class="best">เรียนแล้ว ' + done + '/' + st.words.length + ' คำ</span></button>';
      }).join('') + '</div>' +
      '<div class="field"><span class="label" id="ex-batch-l">เล่นครั้งละ</span><div class="seg-ctl" role="group" aria-labelledby="ex-batch-l">' +
      [5, 10].map(function (n) { return '<button type="button" aria-pressed="' + (S.ex.batch === n) + '" data-exbatch="' + n + '">' + n + ' คำ</button>'; }).join('') + '</div></div>' +
      '<button type="button" class="btn primary block" data-exstart="1">เริ่มเรียน ' + Math.min(S.ex.batch, setObj.words.length) + ' คำ (' + setObj.themeTh + ')</button>' +
      (examSetProgress(setObj) === setObj.words.length ? '<button type="button" class="btn block" data-expost="1">ทำ Post-test ชุดนี้ (10 ข้อ)</button>' : '') +
      '<p class="small muted"><b>วิธีเล่น:</b> สลับ 5 กิจกรรม (เลือกความหมาย, ไทย→อังกฤษ, ฟังแล้วเลือกคำ, เติมคำในประโยค, พิมพ์คำศัพท์) ทำครบทุกคำในชุดครบทั้ง 3 ด้าน (รู้จักเมื่อเห็น/นึกคำเองได้/ใช้ในบริบทได้) แล้วปลดล็อก Post-test ของชุดนั้น</p>' +
      '</section>' +
      '<section class="panel stack"><details class="words"><summary>ดูคำศัพท์ทั้ง 10 คำในชุดนี้ (พร้อมระดับและแหล่งอ้างอิง)</summary><ul class="word-list" style="padding:0;margin:8px 0 0">' +
      setObj.words.map(function (w) {
        var st = examWordState(w.w);
        var mark = examMastered(w.w) ? ' ✓ ใช้ในบริบทได้แล้ว' : (st.recognize || st.recall) ? ' · กำลังฝึก' : '';
        return '<li>' + sayBtn(w.w, true) + '<span>' + lvBadge(w.level) + ' <span class="en">' + esc(w.w) + '</span> <span class="small muted">' + esc(w.pos) + ' · ' + w.source + '</span><br><span class="th">' + esc(w.th) + '</span><span class="small muted">' + mark + '</span></span></li>';
      }).join('') +
      '</ul></details>' + resetBlock('examvocab', 'ล้างความคืบหน้าคำศัพท์เตรียมสอบของผู้เล่นนี้') + '</section>' +
      leaderboard('vocab') +
      '<p class="small muted">ชุดคำศัพท์นี้เป็น "ชุดคัดเลือกอิง Oxford 3000/5000" คัดมาสอน ' + (EP.examVocab.trips.reduce(function (s, t) { return s + t.sets.reduce(function (s2, st) { return s2 + st.words.length; }, 0); }, 0)) + ' คำจากทั้งหมดหลายพันคำในคลังทางการ ไม่ได้ครอบคลุมครบทุกคำ</p>' +
      '</div>';
  }
  function examOptionsHTML(items, chosen, correctIdx, renderText) {
    return '<div class="opts" role="group">' + items.map(function (opt, i) {
      var cls = 'opt';
      var mark = '';
      if (chosen != null) {
        if (i === correctIdx) { cls += ' correct'; mark = '✓ ถูก'; }
        else if (i === chosen) { cls += ' wrong'; mark = '✗ ที่เลือก'; }
        else cls += ' dim';
      }
      return '<button type="button" class="' + cls + '" data-exopt="' + i + '"' + (chosen != null ? ' disabled' : '') + '><span class="key" aria-hidden="true">' + KEYS[i] + '</span><span>' + renderText(opt) + '</span>' + (mark ? '<span class="mark">' + mark + '</span>' : '') + '</button>';
    }).join('') + '</div>';
  }
  function renderExamPlay(view) {
    var act = EX_ACT[S.ex.actIdx];
    var setObj = examSetObj();
    var head = '<button type="button" class="back" data-exquit="1">' + ICON.back + 'ออกจากบทเรียน</button>' +
      '<div class="row"><span class="eyebrow">' + setObj.themeTh + ' · กิจกรรม ' + (S.ex.actIdx + 1) + '/' + EX_ACT.length + ': ' + act.label + '</span></div>';
    var body = '';
    if (act.key === 'type') {
      var word = S.ex.words[S.ex.qi];
      var typed = S.ex.typed[S.ex.qi];
      var hint = examHintFor(word);
      body = '<section class="panel stack">' +
        '<p class="eyebrow">พิมพ์คำศัพท์จากความหมาย</p>' +
        '<p class="prompt thai">' + esc(word.th) + '</p><p class="pos">' + esc(word.pos) + '</p>' +
        (hint ? '<p class="small muted">คำใบ้: ' + esc(hint) + '…</p>' : '') +
        '<form data-extypeform="1" class="row" style="flex-wrap:nowrap">' +
        '<input type="text" id="ex-type-input" autocomplete="off" autocapitalize="off" spellcheck="false" ' + (typed ? 'disabled' : '') + ' value="' + (typed ? esc(typed.value) : '') + '" aria-label="พิมพ์คำศัพท์ภาษาอังกฤษ">' +
        (typed ? '' : '<button type="submit" class="btn primary" style="flex:0 0 auto">ตรวจคำตอบ</button>') +
        '</form>' +
        (typed ? '<p class="gate" id="ex-fb" tabindex="-1">' + (typed.correct ? '✓ ถูกต้อง! ' : '✗ ที่ถูกคือ ') + '<b class="en">' + esc(word.w) + '</b> — ' + esc(word.th) + sayBtn(word.w, true) + '</p>' +
          '<button type="button" class="btn primary block" data-exnext="1">' + (S.ex.qi < S.ex.words.length - 1 ? 'ข้อถัดไป →' : 'ดูสรุป') + '</button>' : '') +
        '</section>';
    } else {
      var round = examCurrentRound();
      var q = round[S.ex.qi];
      var chosen = S.ex.ans[act.key][S.ex.qi];
      var promptHTML = '';
      if (act.key === 'recognize1') promptHTML = '<p class="prompt en">' + esc(q.word.w) + '</p><p class="pos">' + esc(q.word.pos) + '</p>' + sayBtn(q.word.w);
      else if (act.key === 'recall1') promptHTML = '<p class="prompt thai">' + esc(q.word.th) + '</p><p class="pos">เลือกคำภาษาอังกฤษ</p>';
      else if (act.key === 'listen') promptHTML = '<p class="small muted">ฟังเสียงแล้วเลือกคำที่ถูกต้อง</p><div class="row" style="justify-content:center">' + sayBtn(q.word.w).replace('class="say', 'class="say lg') + '</div>';
      else if (act.key === 'fill') promptHTML = '<p class="q-stem en">' + esc(q.item.s).replace(/___/g, '<span class="blank en">?</span>') + '</p><p class="small muted">' + esc(q.item.sTh || '') + '</p>';
      var optsHTML = act.key === 'recognize1'
        ? examOptionsHTML(q.options, chosen, q.answer, function (o) { return esc(o.th); })
        : examOptionsHTML(q.options, chosen, q.answer, function (o) { return '<span class="en">' + esc(o.w) + '</span>'; });
      var fbHTML = chosen != null ? '<p class="gate" id="ex-fb" tabindex="-1">' + (chosen === q.answer ? '✓ ถูกต้อง' : '✗ ที่ถูกคือ ' + esc(q.word.th)) + ' — <b class="en">' + esc(q.word.w) + '</b> ' + sayBtn(q.word.w, true) + '</p>' +
        '<button type="button" class="btn primary block" data-exnext="1">' + (S.ex.qi < round.length - 1 ? 'ข้อถัดไป →' : 'ดูสรุป') + '</button>' : '';
      body = '<section class="panel stack">' + promptHTML + optsHTML + fbHTML + '</section>';
    }
    var totalQ = act.key === 'type' ? S.ex.words.length : examCurrentRound().length;
    view.innerHTML = '<div class="stack lesson">' + head +
      '<div class="progress" aria-hidden="true"><span style="width:' + Math.round((S.ex.qi) / totalQ * 100) + '%"></span></div>' +
      '<p class="small muted">ข้อ ' + (S.ex.qi + 1) + '/' + totalQ + '</p>' + body + '</div>';
  }
  function renderExamResult(view) {
    var setObj = examSetObj();
    var done = examSetProgress(setObj);
    var allDone = done === setObj.words.length;
    view.innerHTML = '<div class="stack">' +
      '<h2>สรุปผลการฝึก</h2>' +
      '<section class="panel score-card"><p class="eyebrow">ความคืบหน้าชุด ' + esc(setObj.themeTh) + '</p>' +
      '<p class="score-big">' + done + '<small>/' + setObj.words.length + '</small></p>' +
      '<p class="muted">คำที่ "ใช้ในบริบทได้" ครบทั้ง 3 ด้านแล้ว</p>' +
      '<div class="row" style="justify-content:center">' +
      '<button type="button" class="btn" data-exback="1">กลับไปเลือกชุด</button>' +
      (allDone ? '<button type="button" class="btn primary" data-expost="1">ทำ Post-test ชุดนี้</button>' : '<button type="button" class="btn primary" data-exstart="1">ฝึกต่ออีกรอบ</button>') +
      '</div></section></div>';
  }
  var examPost = null;
  function renderExamPost(view) {
    var setObj = examSetObj();
    if (!examPost || examPost.setId !== setObj.id) {
      var rnd = Math.random;
      var flat = [];
      setObj.words.forEach(function (w) {
        flat.push({ w: w.w, s: w.sentence, x: w.x || [] });
        (w.quizBank || []).forEach(function (q) { flat.push({ w: w.w, s: q.s, x: w.x || [] }); });
      });
      examPost = { setId: setObj.id, qs: EP.logic.buildPostTest(flat, setObj.words, 10, rnd), i: 0, ans: [] };
    }
    if (examPost.i >= examPost.qs.length) {
      var score = examPost.ans.reduce(function (s, a, i) { return s + (a === examPost.qs[i].answer ? 1 : 0); }, 0);
      view.innerHTML = '<div class="stack">' +
        '<button type="button" class="back" data-exback="1">' + ICON.back + 'กลับไปเลือกชุด</button>' +
        '<h2>Post-test: ' + esc(setObj.themeTh) + '</h2>' +
        '<section class="panel score-card"><p class="eyebrow">คะแนน Post-test</p><p class="score-big">' + score + '<small>/10</small></p>' + savedNote() +
        '<div class="row" style="justify-content:center"><button type="button" class="btn" data-expostretry="1">ทำใหม่</button><button type="button" class="btn primary" data-exback="1">กลับไปเลือกชุด</button></div></section></div>';
      return;
    }
    var i = examPost.i;
    var q = examPost.qs[i];
    var chosen = examPost.ans[i];
    view.innerHTML = '<div class="stack">' +
      '<button type="button" class="back" data-exquit="1">' + ICON.back + 'ออกจาก Post-test</button>' +
      '<h2>Post-test: ' + esc(setObj.themeTh) + '</h2>' +
      '<section class="panel stack"><p class="small muted">ข้อ ' + (i + 1) + '/10</p>' +
      '<p class="q-stem en">' + esc(q.item.s).replace(/___/g, '<span class="blank en">?</span>') + '</p>' +
      examOptionsHTML(q.options, chosen, q.answer, function (o) { return '<span class="en">' + esc(o.w) + '</span>'; }) +
      (chosen != null ? '<p class="gate">' + (chosen === q.answer ? '✓ ถูกต้อง' : '✗ ที่ถูกคือ ' + esc(q.word.th)) + ' — <b class="en">' + esc(q.word.w) + '</b></p><button type="button" class="btn primary block" data-expostnext="1">' + (i < 9 ? 'ข้อถัดไป →' : 'ดูคะแนน') + '</button>' : '') +
      '</section></div>';
  }
  function renderVocabExam(view) {
    if (S.ex.phase === 'play') return renderExamPlay(view);
    if (S.ex.phase === 'result') return renderExamResult(view);
    if (S.ex.phase === 'post') return renderExamPost(view);
    renderExamSetup(view);
  }

  function startGame(review) {
    var set = EP.vocab[S.v.lv].sets[S.v.set];
    var targets = review ? game.missed.slice() : null;
    game = {
      lv: S.v.lv, set: S.v.set, dir: S.v.dir, choices: S.v.choices, words: set.words,
      review: !!review,
      cards: L.buildCardRound(set.words, S.v.choices, S.v.dir, Math.random, targets),
      ci: 0, cAns: [], post: null, pi: 0, pAns: [], hint: false,
      missed: []
    };
    S.v.phase = 'cards';
    render();
    focusHeading();
  }
  function cardScore() { return game.cAns.reduce(function (s, a, i) { return s + (a === game.cards[i].answer ? 1 : 0); }, 0); }
  function postScore() { return game.pAns.reduce(function (s, a, i) { return s + (a === game.post[i].answer ? 1 : 0); }, 0); }

  function renderGame(view) {
    var total = game.cards.length;
    var head = '<button type="button" class="back" data-vquit="1">' + ICON.back + 'ออกจากเกม</button>' +
      '<div class="row">' + lvBadge(game.lv) + '<span class="eyebrow">ชุด ' + (game.set + 1) + ' · ' + (game.dir === 'en-th' ? 'อังกฤษ → ไทย' : 'ไทย → อังกฤษ') + ' · ' + game.choices + ' ตัวเลือก' + (game.review ? ' · ทบทวนคำที่ผิด' : '') + (Store.root.current !== GUEST ? ' · ' + esc(Store.data.nick) : '') + '</span></div>';
    var lvc = { A1: '--a1', A2: '--a2', B1: '--b1', B2: '--b2' }[game.lv];

    if (S.v.phase === 'cards') {
      var c = game.cards[game.ci];
      var chosen = game.cAns[game.ci];
      var answered = chosen != null;
      var enPrompt = game.dir === 'en-th';
      var prompt = enPrompt
        ? '<p class="prompt" lang="en">' + esc(c.word.w) + '</p><p class="pos">' + c.word.p + '</p>' + sayBtn(c.word.w)
        : '<p class="prompt thai">' + esc(c.word.th) + '</p><p class="pos">เลือกคำภาษาอังกฤษ · ' + c.word.p + '</p>';
      var opts = '<div class="opts" role="group" aria-label="ตัวเลือก">' + c.options.map(function (o, i) {
        var cls = 'opt';
        var mark = '';
        if (answered) {
          if (i === c.answer) { cls += ' correct'; mark = '✓ ถูก'; }
          else if (i === chosen) { cls += ' wrong'; mark = '✗ ที่เลือก'; }
          else cls += ' dim';
        }
        var label = enPrompt ? esc(o.th) : '<span class="en">' + esc(o.w) + '</span>';
        var btn = '<button type="button" class="' + cls + '" data-vcard="' + i + '"' + (answered ? ' disabled' : '') + '><span class="key" aria-hidden="true">' + KEYS[i] + '</span><span>' + label + '</span>' + (mark ? '<span class="mark">' + mark + '</span>' : '') + '</button>';
        return enPrompt ? btn : '<div class="opt-row">' + btn + sayBtn(o.w) + '</div>';
      }).join('') + '</div>';
      var fb = '';
      if (answered) {
        var right = chosen === c.answer;
        fb = '<div class="fb ' + (right ? 'good' : 'bad') + '" role="status"><p class="fb-verdict">' + (right ? '✓ ถูกต้อง' : '✗ ยังไม่ถูก') + '</p>' +
          '<div class="row" style="flex-wrap:nowrap">' + sayBtn(c.word.w, true) + '<p><b class="en">' + esc(c.word.w) + '</b> <span class="small muted">(' + c.word.p + ')</span> = ' + esc(c.word.th) + '</p></div>' +
          (!right ? '<p class="small">คุณเลือก: ' + (enPrompt ? esc(c.options[chosen].th) + ' ซึ่งหมายถึง <span class="en">' + esc(c.options[chosen].w) + '</span>' : '<span class="en">' + esc(c.options[chosen].w) + '</span> = ' + esc(c.options[chosen].th)) + '</p>' : '') +
          '</div>';
      }
      var last = game.ci === total - 1;
      view.innerHTML = '<div class="stack">' + head +
        '<h2 class="sr">การ์ดคำศัพท์</h2>' +
        '<section class="card-stage">' +
        '<div class="stat-row"><span>การ์ด <b>' + (game.ci + 1) + '</b>/' + total + '</span><span>คะแนน <b>' + cardScore() + '</b>/' + total + '</span></div>' +
        '<div class="progress" role="progressbar" aria-label="ความคืบหน้าการ์ด" aria-valuemin="0" aria-valuemax="' + total + '" aria-valuenow="' + (game.ci + (answered ? 1 : 0)) + '"><span style="width:' + ((game.ci + (answered ? 1 : 0)) / total * 100) + '%"></span></div>' +
        '<div class="flash" style="--c:var(' + lvc + ')">' + prompt + '</div>' + opts + fb +
        (answered ? '<button type="button" class="btn primary block" data-vnext="1">' + (last ? (game.review ? 'ดูผลการทบทวน' : 'ไปทำ Post-test →') : 'คำถัดไป →') + '</button>' : '<p class="gate">เลือกคำตอบเพื่อดูเฉลย แล้วค่อยไปคำถัดไป</p>') +
        '</section></div>';
      return;
    }

    if (S.v.phase === 'bridge') {
      var cs = cardScore();
      view.innerHTML = '<div class="stack">' + head + '<h2>การ์ดครบ 25 คำแล้ว</h2>' +
        '<section class="panel score-card"><p class="eyebrow">คะแนนการ์ด</p><p class="score-big">' + cs + '<small>/25</small></p>' +
        '<p class="muted" style="max-width:48ch">ต่อไปคือ Post-test 15 ข้อ เติมคำในประโยคสั้น ๆ แต่ละข้อมี 4 ตัวเลือกจากชุดเดียวกัน สุ่มจากคลัง 25 ประโยค ไม่ซ้ำกันในรอบนี้</p>' +
        '<button type="button" class="btn primary" data-vpost="1">เริ่ม Post-test 15 ข้อ</button></section></div>';
      return;
    }

    if (S.v.phase === 'post') {
      var p = game.post[game.pi];
      var ch = game.pAns[game.pi];
      var done = ch != null;
      var parts = p.item.s.split('___');
      var sentence = done
        ? esc(parts[0]) + '<span class="filled">' + esc(p.word.w) + '</span>' + esc(parts[1])
        : esc(parts[0]) + '<span class="blank" aria-label="ช่องว่าง">?</span>' + esc(parts[1]);
      var popts = '<div class="opts two" role="group" aria-label="ตัวเลือก">' + p.options.map(function (o, i) {
        var cls = 'opt';
        var mark = '';
        if (done) {
          if (i === p.answer) { cls += ' correct'; mark = '✓'; }
          else if (i === ch) { cls += ' wrong'; mark = '✗'; }
          else cls += ' dim';
        }
        return '<div class="opt-row"><button type="button" class="' + cls + '" data-vpostans="' + i + '"' + (done ? ' disabled' : '') + '><span class="key" aria-hidden="true">' + KEYS[i] + '</span><span class="en">' + esc(o.w) + '</span>' + (mark ? '<span class="mark">' + mark + '</span>' : '') + '</button>' + sayBtn(o.w) + '</div>';
      }).join('') + '</div>';
      var pfb = '';
      if (done) {
        var ok = ch === p.answer;
        var full = L.fillBlank(p.item.s, p.word.w);
        pfb = '<div class="fb ' + (ok ? 'good' : 'bad') + '" role="status"><p class="fb-verdict">' + (ok ? '✓ ถูกต้อง' : '✗ ยังไม่ถูก') + '</p>' +
          '<ul class="fb-steps"><li><b>คำที่ถูก</b><span><b class="en">' + esc(p.word.w) + '</b> (' + p.word.p + ') = ' + esc(p.word.th) + '</span></li>' +
          '<li><b>ประโยคเต็ม</b><span class="row" style="flex-wrap:nowrap;align-items:flex-start"><span class="en">' + esc(full) + '</span>' + sayBtn(full, true) + '</span></li>' +
          '<li><b>คำแปล</b><span>' + esc(p.item.st) + '</span></li>' +
          (!ok ? '<li><b>ที่เลือก</b><span><span class="en">' + esc(p.options[ch].w) + '</span> = ' + esc(p.options[ch].th) + ' ใช้ในประโยคนี้ไม่ได้</span></li>' : '') +
          '</ul></div>';
      }
      view.innerHTML = '<div class="stack">' + head + '<h2 class="sr">Post-test คำศัพท์</h2>' +
        '<section class="panel stack">' +
        '<div class="stat-row"><span>Post-test ข้อ <b>' + (game.pi + 1) + '</b>/15</span><span>คะแนน <b>' + postScore() + '</b>/15</span></div>' +
        '<div class="progress" aria-hidden="true"><span style="width:' + ((game.pi + (done ? 1 : 0)) / 15 * 100) + '%"></span></div>' +
        '<p class="small muted">เลือกคำที่เติมในช่องว่างแล้วได้ความหมายถูกต้อง</p>' +
        '<p class="sentence">' + sentence + '</p>' +
        (!done ? (game.hint ? '<p class="small"><span class="tag">คำใบ้</span> ' + esc(p.item.st.replace(p.word.th.split(',')[0].trim(), '___')) + '</p>' : '<button type="button" class="link-btn" data-vhint="1">ดูคำใบ้ภาษาไทย</button>') : '') +
        popts + pfb +
        (done ? '<button type="button" class="btn primary block" data-vpostnext="1">' + (game.pi === 14 ? 'ดูผลรวม' : 'ข้อถัดไป →') + '</button>' : '') +
        '</section></div>';
      return;
    }

    if (S.v.phase === 'result') {
      var cs2 = cardScore();
      var missed = game.missed;
      var nextSet = game.set < 3 ? { lv: game.lv, set: game.set + 1 } : (LEVELS.indexOf(game.lv) < 3 ? { lv: LEVELS[LEVELS.indexOf(game.lv) + 1], set: 0 } : null);
      view.innerHTML = '<div class="stack">' + head + '<h2>' + (game.review ? 'ผลการทบทวน' : 'สรุปผลชุดนี้') + '</h2>' +
        '<section class="panel score-card">' +
        (game.review
          ? '<p class="eyebrow">ทบทวนคำที่ผิด</p><p class="score-big">' + cs2 + '<small>/' + game.cards.length + '</small></p>'
          : '<div class="score-pair"><div><p class="eyebrow">การ์ด</p><p class="score-big">' + cs2 + '<small>/25</small></p></div><div><p class="eyebrow">Post-test</p><p class="score-big">' + postScore() + '<small>/15</small></p></div></div>') +
        (game.review ? '' : savedNote()) + '<div class="row" style="justify-content:center">' +
        (missed.length ? '<button type="button" class="btn" data-vreview="1">ฝึกคำที่ผิดอีกครั้ง (' + missed.length + ')</button>' : '') +
        '<button type="button" class="btn" data-vreplay="1">เล่นชุดเดิมใหม่</button>' +
        (nextSet ? '<button type="button" class="btn primary" data-vnextset="' + nextSet.lv + '-' + nextSet.set + '">ไปชุดถัดไป (' + nextSet.lv + ' ชุด ' + (nextSet.set + 1) + ')</button>' : '') +
        '</div></section>' +
        (missed.length ? '<section class="panel stack"><h3>คำที่ควรทบทวน</h3><ul class="missed" style="padding:0;margin:0">' + missed.map(function (w) {
          return '<li>' + sayBtn(w.w, true) + '<span><b class="en">' + esc(w.w) + '</b> <span class="small muted">' + w.p + '</span> = ' + esc(w.th) + '<br><span class="small muted en">' + esc(L.fillBlank(w.s, w.w)) + '</span></span></li>';
        }).join('') + '</ul></section>' : '<p class="muted" style="text-align:center">ไม่มีคำที่ตอบผิดในรอบนี้</p>') +
        '</div>';
    }
  }
  function addMissed(word) { if (game.missed.indexOf(word) < 0) game.missed.push(word); }
  function answerCard(i) {
    if (game.cAns[game.ci] != null) return;
    game.cAns[game.ci] = i;
    if (i !== game.cards[game.ci].answer) addMissed(game.cards[game.ci].word);
    render();
    var b = $('[data-vnext]'); if (b) b.focus({ preventScroll: true });
  }
  function nextCard() {
    if (game.ci < game.cards.length - 1) { game.ci++; render(); var o = $('[data-vcard]'); if (o) o.focus({ preventScroll: true }); return; }
    if (game.review) { S.v.phase = 'result'; game.missed = game.cards.filter(function (c, k) { return game.cAns[k] !== c.answer; }).map(function (c) { return c.word; }); render(); focusHeading(); return; }
    saveVocab('card', cardScore());
    S.v.phase = 'bridge';
    render();
    focusHeading();
  }
  function startPost() {
    game.post = L.buildPostTest(game.words, game.words, 15, Math.random);
    game.pi = 0; game.pAns = []; game.hint = false;
    S.v.phase = 'post';
    render();
    focusHeading();
  }
  function answerPost(i) {
    if (game.pAns[game.pi] != null) return;
    game.pAns[game.pi] = i;
    if (i !== game.post[game.pi].answer) addMissed(game.post[game.pi].word);
    render();
    var b = $('[data-vpostnext]'); if (b) b.focus({ preventScroll: true });
  }
  function nextPost() {
    if (game.pi < 14) { game.pi++; game.hint = false; render(); var o = $('[data-vpostans]'); if (o) o.focus({ preventScroll: true }); return; }
    saveVocab('post', postScore());
    S.v.phase = 'result';
    render();
    focusHeading();
  }
  function saveVocab(kind, score) {
    var k = vKey(game.lv, game.set, game.dir, game.choices);
    var r = Store.data.vocab[k] || {};
    r[kind] = Math.max(r[kind] == null ? -1 : r[kind], score);
    if (kind === 'post') r.plays = (r.plays || 0) + 1;
    Store.data.vocab[k] = r;
    Store.save();
  }

  /* ===================================================================
     READING
     =================================================================== */
  var OFFICIAL = [
    { href: 'https://www.ged.com/en/test-previews.html', t: 'GED Test Previews', d: 'ตัวอย่างข้อสอบจากเว็บไซต์ GED ทางการ ใช้ดูรูปแบบข้อสอบจริง' },
    { href: 'https://www.ged.com/educators-admins/teaching/classroom-materials/study-guides.html', t: 'GED Study Guides', d: 'คู่มือหัวข้อที่ต้องเตรียมในแต่ละวิชา จาก GED ทางการ' }
  ];
  var rQuiz = null;
  function renderReading(view) {
    if (S.r.view === 'passage') return renderPassage(view);
    var filters = [['all', 'ทั้งหมด'], ['RLA', 'RLA'], ['Science', 'Science'], ['Social Studies', 'Social Studies'], ['Academic', 'Academic Reading']];
    var list = EP.reading.filter(function (p) { return S.r.filter === 'all' || p.subject === S.r.filter; });
    view.innerHTML = '<div class="stack">' +
      '<div class="row" style="justify-content:space-between"><h2>ฝึกอ่านแนว GED</h2><span class="small muted">12 บท · เรียงจากง่ายไปยาก</span></div>' +
      playerBar('reading') +
      '<section class="panel stack"><div class="row"><span class="tag official">ของทางการ</span><span class="small muted">ใช้ดูรูปแบบข้อสอบจริง เปิดในแท็บใหม่</span></div><div class="official">' +
      OFFICIAL.map(function (o) { return '<a href="' + o.href + '" target="_blank" rel="noopener"><span><b class="en">' + o.t + '</b><small>' + o.d + '</small></span><span aria-hidden="true" style="margin-left:auto">↗</span></a>'; }).join('') +
      '</div></section>' +
      '<section class="panel stack">' +
      '<div class="row"><span class="tag practice">แบบฝึกแต่งขึ้น</span><span class="small muted">บทอ่านและคำถามด้านล่างเขียนขึ้นเพื่อฝึก ไม่ใช่ข้อสอบ GED จริง</span></div>' +
      '<div class="chips" role="tablist" aria-label="กรองตามวิชา" id="rfil">' +
      filters.map(function (f) { var sel = S.r.filter === f[0]; return '<button type="button" class="chip" role="tab" aria-selected="' + sel + '" tabindex="' + (sel ? 0 : -1) + '" data-rfil="' + f[0] + '">' + f[1] + '</button>'; }).join('') + '</div>' +
      '<div class="pass-list">' + list.map(function (p) {
        var r = Store.data.reading[p.id];
        var n = EP.reading.indexOf(p) + 1;
        return '<button type="button" class="pass-item" data-rid="' + p.id + '"><span><span class="subj" data-s="' + p.subject + '">' + n + ' · ' + p.subject + '</span><br><span class="t">' + esc(p.title) + '</span></span>' +
          '<span style="display:grid;justify-items:end;gap:4px">' + lvBadge(p.level) + (r ? '<span class="small muted">ดีที่สุด ' + r.best + '/' + p.q.length + '</span>' : '') + '</span>' +
          '<span class="sk">' + p.skill + ' · ' + p.q.length + ' คำถาม' + (p.visual ? ' · มี' + (p.visual.kind === 'table' ? 'ตาราง' : 'แผนภูมิ') : '') + '</span></button>';
      }).join('') + '</div>' + resetBlock('reading', 'ล้างคะแนนการอ่านของผู้เล่นนี้') + '</section>' + leaderboard('reading') + '</div>';
  }

  function barChart(v) {
    var W = 560, H = 270, padL = 44, padR = 12, padT = 18, padB = 56;
    var max = Math.max.apply(null, v.values.concat(v.line ? [v.line.value] : []));
    var nice = Math.ceil(max / 5) * 5;
    var ph = H - padT - padB, pw = W - padL - padR;
    var bw = pw / v.values.length;
    var y = function (val) { return padT + ph - val / nice * ph; };
    var ticks = [];
    for (var t = 0; t <= nice; t += nice / 5) ticks.push(t);
    var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(v.title + ': ' + v.labels.map(function (l, i) { return l + ' ' + v.values[i] + ' ' + v.unit; }).join(', ')) + '">';
    ticks.forEach(function (t) {
      svg += '<line x1="' + padL + '" x2="' + (W - padR) + '" y1="' + y(t) + '" y2="' + y(t) + '" style="stroke:var(--line)" stroke-width="1"/>' +
        '<text x="' + (padL - 8) + '" y="' + (y(t) + 4) + '" text-anchor="end" style="fill:var(--muted);font:12px var(--f-en)">' + (Math.round(t * 10) / 10) + '</text>';
    });
    v.values.forEach(function (val, i) {
      var x = padL + i * bw + bw * 0.18;
      var w = bw * 0.64;
      svg += '<rect x="' + x + '" y="' + y(val) + '" width="' + w + '" height="' + (y(0) - y(val)) + '" rx="5" style="fill:var(--a2)"/>' +
        '<text x="' + (x + w / 2) + '" y="' + (y(val) - 6) + '" text-anchor="middle" style="fill:var(--ink);font:600 13px var(--f-en)">' + val + '</text>' +
        '<text x="' + (x + w / 2) + '" y="' + (H - padB + 18) + '" text-anchor="middle" style="fill:var(--ink-2);font:12px var(--f-en)">' + esc(v.labels[i]) + '</text>';
    });
    if (v.line) {
      svg += '<line x1="' + padL + '" x2="' + (W - padR) + '" y1="' + y(v.line.value) + '" y2="' + y(v.line.value) + '" style="stroke:var(--bad)" stroke-width="2" stroke-dasharray="6 4"/>' +
        '<text x="' + (W - padR) + '" y="' + (y(v.line.value) - 6) + '" text-anchor="end" style="fill:var(--bad);font:600 11px var(--f-body)">' + esc(v.line.label) + '</text>';
    }
    svg += '<text x="' + (padL + pw / 2) + '" y="' + (H - 10) + '" text-anchor="middle" style="fill:var(--muted);font:12px var(--f-en)">' + esc(v.axis) + '</text>' +
      '<text x="12" y="' + (padT + ph / 2) + '" text-anchor="middle" transform="rotate(-90 12 ' + (padT + ph / 2) + ')" style="fill:var(--muted);font:12px var(--f-en)">' + esc(v.unit) + '</text></svg>';
    return svg;
  }
  function visualHTML(v) {
    var inner = v.kind === 'bar' ? barChart(v)
      : '<table><thead><tr>' + v.head.map(function (h) { return '<th scope="col">' + esc(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        v.rows.map(function (r) { return '<tr>' + r.map(function (c, i) { return i ? '<td>' + esc(c) + '</td>' : '<th scope="row" style="text-align:left;color:var(--ink);font-size:.92rem">' + esc(c) + '</th>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
    return '<figure class="viz" style="margin:0" id="viz"><figcaption class="viz-cap">' + esc(v.title) + '</figcaption>' + inner + '<p class="viz-note">' + esc(v.note || '') + '</p></figure>';
  }

  function renderPassage(view) {
    var p = EP.reading.filter(function (x) { return x.id === S.r.id; })[0];
    if (!rQuiz || rQuiz.id !== p.id) rQuiz = { id: p.id, qs: p.q.map(function (q) { return prepQuestion(q, true); }), ans: p.q.map(function () { return null; }), ev: [] };
    var idx = EP.reading.indexOf(p);
    var answered = rQuiz.ans.filter(function (a) { return a != null; }).length;
    var sents = p.s.map(function (s, i) {
      var label = p.label && p.label[i] ? '<p class="para-label">' + esc(p.label[i]) + '</p>' : '';
      return label + '<div class="sent' + (rQuiz.ev.indexOf(i) >= 0 ? ' ev' : '') + '" id="s-' + i + '"><span class="no">' + (i + 1) + '</span><span>' + esc(s) + '</span>' + sayBtn(s, true) +
        (S.r.showTh ? '<span class="tr">' + esc(p.th[i]) + '</span>' : '') + '</div>';
    }).join('');
    view.innerHTML = '<div class="stack">' +
      '<button type="button" class="back" data-rback="1">' + ICON.back + 'กลับไปรายการบทอ่าน</button>' +
      '<header class="stack" style="gap:6px"><div class="row"><span class="subj" data-s="' + p.subject + '">' + p.subject + '</span>' + lvBadge(p.level) + '<span class="tag practice">แบบฝึกแต่งขึ้น</span></div>' +
      '<h2 class="en">' + esc(p.title) + '</h2><p class="small muted">ทักษะ: ' + p.skill + (p.intro ? ' · ' + esc(p.intro) : '') + '</p></header>' +
      '<section class="panel stack">' +
      '<div class="row" style="justify-content:space-between"><h3>บทอ่าน</h3><button type="button" class="btn" style="min-height:40px" aria-pressed="' + S.r.showTh + '" data-rth="1">' + (S.r.showTh ? 'ซ่อนคำแปลไทย' : 'แสดงคำแปลไทย') + '</button></div>' +
      '<div class="passage" lang="en">' + sents + '</div>' +
      (p.visual ? visualHTML(p.visual) : '') +
      '<div class="stack" style="gap:6px"><p class="eyebrow">คำศัพท์ช่วยอ่าน</p><div class="gloss">' + p.gloss.map(function (g) { return '<span><span class="en">' + esc(g[0]) + '</span> ' + esc(g[1]) + sayBtn(g[0], true) + '</span>'; }).join('') + '</div></div>' +
      '</section>' +
      '<section class="panel stack" aria-labelledby="rq-h"><h3 id="rq-h">คำถาม ' + p.q.length + ' ข้อ</h3><p class="small muted">คำถามเป็นภาษาอังกฤษแบบ GED มีคำอธิบายไทยใต้คำถาม หลังตอบจะเห็นว่าคำตอบมาจากประโยคไหน</p>' +
      '<div id="rq">' + rQuiz.qs.map(function (pq, i) { return rQuestionHTML(pq, i, rQuiz.ans[i], p); }).join('') + '</div>' +
      '<div id="rq-foot">' + readingFoot(p, answered, idx) + '</div></section></div>';
  }
  function rQuestionHTML(pq, i, chosen, p) {
    return '<div class="q" id="rq-' + i + '"><p class="q-num">ข้อ ' + (i + 1) + '</p><p class="q-stem en">' + esc(pq.src.q).replace(/___/g, '<span class="blank">?</span>') + '</p><p class="qth">' + esc(pq.src.qth) + '</p>' +
      optionsHTML(pq, i, chosen, true) +
      (chosen != null ? readingFeedback(pq, chosen, p) : '') + '</div>';
  }
  function readingFoot(p, answered, idx) {
    var total = p.q.length;
    if (answered < total) return '<p class="gate">ตอบแล้ว ' + answered + '/' + total + ' ข้อ</p>';
    var score = rQuiz.ans.reduce(function (s, a, i) { return s + (rQuiz.qs[i].items[a].correct ? 1 : 0); }, 0);
    var next = EP.reading[idx + 1];
    return '<div class="score-card"><p class="eyebrow">คะแนนบทนี้</p><p class="score-big">' + score + '<small>/' + total + '</small></p>' + savedNote() +
      '<div class="row" style="justify-content:center"><button type="button" class="btn" data-rretry="1">ทำใหม่</button>' +
      (next ? '<button type="button" class="btn primary" data-rid="' + next.id + '">บทถัดไป: <span class="en">' + esc(next.title) + '</span></button>' : '<button type="button" class="btn primary" data-rback="1">กลับไปรายการ</button>') + '</div></div>';
  }
  function answerReading(qi, oi) {
    if (rQuiz.ans[qi] != null) return;
    rQuiz.ans[qi] = oi;
    var p = EP.reading.filter(function (x) { return x.id === S.r.id; })[0];
    rQuiz.ev = p.q[qi].ev.filter(function (e) { return e !== 'visual'; });
    $all('.sent').forEach(function (el, i) { el.classList.toggle('ev', rQuiz.ev.indexOf(i) >= 0); });
    $('#rq-' + qi).outerHTML = rQuestionHTML(rQuiz.qs[qi], qi, oi, p);
    var answered = rQuiz.ans.filter(function (a) { return a != null; }).length;
    if (answered === p.q.length) {
      var score = rQuiz.ans.reduce(function (s, a, i) { return s + (rQuiz.qs[i].items[a].correct ? 1 : 0); }, 0);
      var rec = Store.data.reading[p.id] || {};
      rec.best = Math.max(rec.best || 0, score);
      rec.last = score;
      Store.data.reading[p.id] = rec;
      Store.save();
    }
    $('#rq-foot').innerHTML = readingFoot(p, answered, EP.reading.indexOf(p));
    var fb = $('#rq-' + qi + ' .fb');
    if (fb) { fb.setAttribute('tabindex', '-1'); fb.focus({ preventScroll: true }); fb.scrollIntoView({ block: 'nearest', behavior: reduceMotion() ? 'auto' : 'smooth' }); }
  }
  function showEvidence(list) {
    var ids = list.split(',');
    var nums = ids.filter(function (x) { return x !== 'visual'; }).map(Number);
    $all('.sent').forEach(function (el, i) { el.classList.toggle('ev', nums.indexOf(i) >= 0); });
    var target = nums.length ? $('#s-' + nums[0]) : $('#viz');
    if (target) target.scrollIntoView({ block: 'center', behavior: reduceMotion() ? 'auto' : 'smooth' });
  }

  /* ---------- ชื่อเล่นและตารางคะแนนสูงสุด (เก็บในเครื่อง) ---------- */
  function initial(nick) { return esc((nick || '?').trim().charAt(0).toUpperCase()); }
  function savedNote() {
    return Store.root.current === GUEST
      ? '<p class="small muted">ยังไม่ได้ใส่ชื่อเล่น คะแนนนี้จึงไม่ขึ้นตารางอันดับ ใส่ชื่อได้ที่หน้าแรกของแต่ละ Part</p>'
      : '<p class="small muted">บันทึกคะแนนให้ <b>' + esc(Store.data.nick) + '</b> แล้ว' + (Remote.enabled() ? ' และส่งเข้าตารางรวม' : '') + '</p>';
  }
  function playerBar(part) {
    var named = Store.root.current !== GUEST;
    var max = partMax(part);
    var head = '<p class="eyebrow">ผู้เล่น · ' + PARTS[part].label + '</p>';
    if (named && !S.p.editing) {
      var sc = partScore(Store.data, part);
      return '<section class="panel player" aria-label="ผู้เล่น">' + head +
        '<div class="row" style="flex-wrap:nowrap"><span class="avatar" aria-hidden="true">' + initial(Store.data.nick) + '</span>' +
        '<div style="min-width:0;flex:1"><b class="nick">' + esc(Store.data.nick) + '</b><br><span class="small muted">คะแนน ' + PARTS[part].label + ' ของคุณ <b class="en" style="color:var(--ink)">' + sc + '</b>/' + max + '</span></div>' +
        '<button type="button" class="btn" style="min-height:42px;padding:0 14px" data-pedit="1">เปลี่ยนผู้เล่น</button></div></section>';
    }
    var others = Store.named().filter(function (x) { return x.key !== Store.root.current; });
    return '<section class="panel player stack" aria-label="ใส่ชื่อเล่น">' + head +
      '<form class="nick-form" data-pform="1" novalidate>' +
      '<label for="nick-input" class="small" style="font-weight:600">' + (named ? 'เปลี่ยนเป็นชื่อเล่นอื่น' : 'ใส่ชื่อเล่นเพื่อบันทึกสถิติคะแนนสูงสุด') + '</label>' +
      '<div class="row" style="flex-wrap:nowrap"><input id="nick-input" name="nick" type="text" maxlength="20" autocomplete="nickname" placeholder="เช่น มะลิ, Ton, น้องเก่ง" aria-describedby="nick-help">' +
      '<button type="submit" class="btn primary" style="flex:0 0 auto">ใช้ชื่อนี้</button></div>' +
      '<p id="nick-help" class="small muted">1–20 ตัวอักษร ความคืบหน้าและคะแนนแยกตามชื่อเล่น หลายคนใช้เครื่องเดียวกันได้</p></form>' +
      (others.length ? '<div class="stack" style="gap:6px"><p class="small" style="font-weight:600">หรือเลือกชื่อที่เคยใช้ในเครื่องนี้</p><div class="chips" style="flex-wrap:wrap">' +
        others.map(function (x) { return '<button type="button" class="chip" data-puse="' + esc(x.key) + '"><span class="avatar sm" aria-hidden="true">' + initial(x.p.nick) + '</span> ' + esc(x.p.nick) + '</button>'; }).join('') + '</div></div>' : '') +
      (named ? '<div class="row"><button type="button" class="link-btn" data-pcancel="1">ยกเลิก</button><button type="button" class="link-btn" style="color:var(--muted)" data-pguest="1">เล่นแบบไม่ระบุชื่อ</button></div>'
             : '<p class="small muted">ยังไม่ใส่ชื่อก็เรียนได้ แต่คะแนนจะไม่ขึ้นตารางอันดับ</p>') +
      '</section>';
  }
  function leaderboard(part) {
    Remote.load(false);
    return '<div id="lbw-' + part + '">' + leaderboardInner(part) + '</div>';
  }
  function boardRowsTotal(rows, totalMax, local) {
    var gMax = partMax('grammar'), vMax = partMax('vocab'), rMax = partMax('reading');
    return '<ol class="board">' + rows.map(function (r, i) {
      var pct = totalMax ? Math.round(r.score / totalMax * 100) : 0;
      var del = local && S.p.del === r.key
        ? '<span class="confirm" style="grid-column:1/-1"><span>ลบ ' + esc(r.nick) + ' และคะแนนทั้งหมดของชื่อนี้ในเครื่องนี้?</span><button type="button" class="btn" data-pdelyes="' + esc(r.key) + '">ลบ</button><button type="button" class="btn ghost" data-pdelno="1">ยกเลิก</button></span>'
        : '';
      return '<li class="' + (r.me ? 'me' : '') + (local ? '' : ' nox') + '"><span class="rank' + (i < 3 ? ' top' : '') + '">' + (i + 1) + '</span>' +
        '<span class="who"><span class="nick">' + esc(r.nick) + '</span>' + (r.me ? ' <span class="tag">คุณ</span>' : '') +
        '<span class="small muted">Grammar ' + r.g + '/' + gMax + ' · คำศัพท์ ' + r.v + '/' + vMax + ' · อ่าน ' + r.rd + '/' + rMax + '</span>' +
        '<span class="bar" aria-hidden="true"><span style="width:' + pct + '%"></span></span></span>' +
        '<span class="pts en"><b>' + r.score + '</b><small>/' + totalMax + '</small></span>' +
        (local ? '<button type="button" class="x" data-pdel="' + esc(r.key) + '" aria-label="ลบ ' + esc(r.nick) + ' ออกจากตาราง">×</button>' + del : '') + '</li>';
    }).join('') + '</ol>';
  }
  function boardRows(rows, max, local) {
    return '<ol class="board">' + rows.map(function (r, i) {
      var pct = max ? Math.round(r.score / max * 100) : 0;
      var del = local && S.p.del === r.key
        ? '<span class="confirm" style="grid-column:1/-1"><span>ลบ ' + esc(r.nick) + ' และคะแนนทั้งหมดของชื่อนี้ในเครื่องนี้?</span><button type="button" class="btn" data-pdelyes="' + esc(r.key) + '">ลบ</button><button type="button" class="btn ghost" data-pdelno="1">ยกเลิก</button></span>'
        : '';
      return '<li class="' + (r.me ? 'me' : '') + (local ? '' : ' nox') + '"><span class="rank' + (i < 3 ? ' top' : '') + '">' + (i + 1) + '</span>' +
        '<span class="who"><span class="nick">' + esc(r.nick) + '</span>' + (r.me ? ' <span class="tag">คุณ</span>' : '') +
        '<span class="bar" aria-hidden="true"><span style="width:' + pct + '%"></span></span></span>' +
        '<span class="pts en"><b>' + r.score + '</b><small>/' + max + '</small></span>' +
        (local ? '<button type="button" class="x" data-pdel="' + esc(r.key) + '" aria-label="ลบ ' + esc(r.nick) + ' ออกจากตาราง">×</button>' + del : '') + '</li>';
    }).join('') + '</ol>';
  }
  function leaderboardInner(part) {
    var max = partMax(part);
    var myNick = Store.root.current === GUEST ? null : Store.data.nick.toLowerCase();
    var head = function (title, note) {
      return '<div><p class="eyebrow">สถิติคะแนนสูงสุด</p><h3 id="lb-' + part + '">' + title + '</h3><p class="small muted">' + PARTS[part].unit + ' (เต็ม ' + max + ') · ' + note + '</p></div>';
    };
    if (Remote.enabled() && Remote.status !== 'error' && (Remote.rows || Remote.status === 'loading')) {
      if (!Remote.rows) return '<section class="panel stack" aria-labelledby="lb-' + part + '">' + head('ตารางอันดับรวม ' + PARTS[part].label, 'กำลังโหลด') + '<p class="muted small" role="status">กำลังโหลดคะแนนของทุกคน…</p></section>';
      var list = Remote.rows.map(function (r) { return { nick: String(r.nick || ''), score: Math.max(0, Math.floor(+r[part] || 0)), me: !!myNick && String(r.nick || '').toLowerCase() === myNick }; });
      if (myNick) { // คะแนนในเครื่องที่ยังส่งไม่ถึงชีต ให้แสดงค่าที่สูงกว่า
        var mine = list.filter(function (r) { return r.me; })[0];
        var local = partScore(Store.data, part);
        if (mine) mine.score = Math.max(mine.score, local); else if (local > 0) list.push({ nick: Store.data.nick, score: local, me: true });
      }
      list = list.filter(function (r) { return r.nick && (r.score > 0 || r.me); }).sort(function (a, b) { return b.score - a.score || a.nick.localeCompare(b.nick); });
      var myRank = -1; list.forEach(function (r, i) { if (r.me) myRank = i; });
      var top = list.slice(0, 20);
      var t = new Date(Remote.fetchedAt);
      var when = ('0' + t.getHours()).slice(-2) + ':' + ('0' + t.getMinutes()).slice(-2);
      return '<section class="panel stack" aria-labelledby="lb-' + part + '">' + head('ตารางอันดับรวม ' + PARTS[part].label, 'รวมทุกคนที่เล่นผ่านลิงก์นี้ · อัปเดต ' + when) +
        (top.length ? boardRows(top, max, false) : '<p class="muted small">ยังไม่มีใครมีคะแนนใน Part นี้ เริ่มเป็นคนแรกได้เลย</p>') +
        (myRank >= 20 ? '<p class="small">อันดับของคุณ: <b>' + (myRank + 1) + '</b> จาก ' + list.length + ' คน</p>' : '') +
        (!myNick ? '<p class="small muted">ใส่ชื่อเล่นด้านบน คะแนนของคุณจะขึ้นตารางนี้</p>' : '') +
        '<button type="button" class="link-btn small" data-lbrefresh="1" style="justify-self:start">รีเฟรชตาราง</button></section>';
    }
    var rows = Store.named().map(function (x) { return { key: x.key, nick: x.p.nick, score: partScore(x.p, part), updated: x.p.updated || 0, me: x.key === Store.root.current }; })
      .sort(function (a, b) { return b.score - a.score || a.updated - b.updated || a.nick.localeCompare(b.nick); });
    var note = Remote.enabled() ? 'เชื่อมตารางรวมไม่ได้ตอนนี้ จึงแสดงเฉพาะในเครื่องนี้' : 'เก็บในเบราว์เซอร์ของเครื่องนี้ ไม่รวมกับเครื่องอื่น';
    var body = rows.length ? boardRows(rows.slice(0, 10), max, true) + (rows.length > 10 ? '<p class="small muted">แสดง 10 อันดับแรกจาก ' + rows.length + ' ชื่อ</p>' : '')
      : '<p class="muted small">ยังไม่มีชื่อในตาราง ใส่ชื่อเล่นด้านบนแล้วเริ่มทำแบบฝึก คะแนนสูงสุดจะขึ้นที่นี่</p>';
    return '<section class="panel stack" aria-labelledby="lb-' + part + '">' + head('ตารางอันดับ ' + PARTS[part].label, note) + body +
      (Remote.enabled() ? '<button type="button" class="link-btn small" data-lbrefresh="1" style="justify-self:start">ลองเชื่อมตารางรวมอีกครั้ง</button>' : '') + '</section>';
  }
  function leaderboardTotal() {
    Remote.load(false);
    return '<div id="lbw-total">' + totalLeaderboardInner() + '</div>';
  }
  function totalLeaderboardInner() {
    var totalMax = partMax('grammar') + partMax('vocab') + partMax('reading');
    var myNick = Store.root.current === GUEST ? null : Store.data.nick.toLowerCase();
    var head = function (note) {
      return '<div><p class="eyebrow">สถิติคะแนนรวม</p><h3 id="lb-total">ตารางอันดับรวมทุก Part</h3><p class="small muted">Grammar + คำศัพท์ + ฝึกอ่าน (เต็ม ' + totalMax + ') · ' + note + '</p></div>';
    };
    if (Remote.enabled() && Remote.status !== 'error' && (Remote.rows || Remote.status === 'loading')) {
      if (!Remote.rows) return '<section class="panel stack" aria-labelledby="lb-total">' + head('กำลังโหลด') + '<p class="muted small" role="status">กำลังโหลดคะแนนของทุกคน…</p></section>';
      var list = Remote.rows.map(function (r) {
        var me = !!myNick && String(r.nick || '').toLowerCase() === myNick;
        return { nick: String(r.nick || ''), g: Math.max(0, Math.floor(+r.grammar || 0)), v: Math.max(0, Math.floor(+r.vocab || 0)), rd: Math.max(0, Math.floor(+r.reading || 0)), me: me };
      });
      if (myNick) { // คะแนนในเครื่องที่ยังส่งไม่ถึงชีต ให้ใช้ค่าที่สูงกว่าต่อ part ก่อนรวม
        var mine = list.filter(function (r) { return r.me; })[0];
        var lg = partScore(Store.data, 'grammar'), lv = partScore(Store.data, 'vocab'), lr = partScore(Store.data, 'reading');
        if (mine) { mine.g = Math.max(mine.g, lg); mine.v = Math.max(mine.v, lv); mine.rd = Math.max(mine.rd, lr); }
        else if (lg || lv || lr) list.push({ nick: Store.data.nick, g: lg, v: lv, rd: lr, me: true });
      }
      var rows = list.map(function (r) { return { nick: r.nick, score: r.g + r.v + r.rd, g: r.g, v: r.v, rd: r.rd, me: r.me }; })
        .filter(function (r) { return r.nick && (r.score > 0 || r.me); })
        .sort(function (a, b) { return b.score - a.score || a.nick.localeCompare(b.nick); });
      var myRank = -1; rows.forEach(function (r, i) { if (r.me) myRank = i; });
      var top = rows.slice(0, 20);
      var t = new Date(Remote.fetchedAt);
      var when = ('0' + t.getHours()).slice(-2) + ':' + ('0' + t.getMinutes()).slice(-2);
      return '<section class="panel stack" aria-labelledby="lb-total">' + head('รวมทุกคนที่เล่นผ่านลิงก์นี้ · อัปเดต ' + when) +
        (top.length ? boardRowsTotal(top, totalMax, false) : '<p class="muted small">ยังไม่มีใครมีคะแนนรวม เริ่มเป็นคนแรกได้เลย</p>') +
        (myRank >= 20 ? '<p class="small">อันดับของคุณ: <b>' + (myRank + 1) + '</b> จาก ' + rows.length + ' คน</p>' : '') +
        (!myNick ? '<p class="small muted">ใส่ชื่อเล่นในแต่ละ Part คะแนนรวมของคุณจะขึ้นตารางนี้</p>' : '') +
        '<button type="button" class="link-btn small" data-lbrefresh="1" style="justify-self:start">รีเฟรชตาราง</button></section>';
    }
    var localRows = Store.named().map(function (x) {
      var g = partScore(x.p, 'grammar'), v = partScore(x.p, 'vocab'), rd = partScore(x.p, 'reading');
      return { key: x.key, nick: x.p.nick, score: g + v + rd, g: g, v: v, rd: rd, updated: x.p.updated || 0, me: x.key === Store.root.current };
    }).sort(function (a, b) { return b.score - a.score || a.updated - b.updated || a.nick.localeCompare(b.nick); });
    var note = Remote.enabled() ? 'เชื่อมตารางรวมไม่ได้ตอนนี้ จึงแสดงเฉพาะในเครื่องนี้' : 'เก็บในเบราว์เซอร์ของเครื่องนี้ ไม่รวมกับเครื่องอื่น';
    var body = localRows.length ? boardRowsTotal(localRows.slice(0, 10), totalMax, true) + (localRows.length > 10 ? '<p class="small muted">แสดง 10 อันดับแรกจาก ' + localRows.length + ' ชื่อ</p>' : '')
      : '<p class="muted small">ยังไม่มีชื่อในตาราง ใส่ชื่อเล่นแล้วเริ่มทำแบบฝึก คะแนนรวมจะขึ้นที่นี่</p>';
    return '<section class="panel stack" aria-labelledby="lb-total">' + head(note) + body +
      (Remote.enabled() ? '<button type="button" class="link-btn small" data-lbrefresh="1" style="justify-self:start">ลองเชื่อมตารางรวมอีกครั้ง</button>' : '') + '</section>';
  }

  /* ---------- ล้างความคืบหน้า (มีขั้นยืนยันในหน้า) ---------- */
  var confirming = null;
  function resetBlock(part, label) {
    if (confirming === part) {
      return '<div class="confirm" role="alert"><span>ลบคะแนนและความคืบหน้าส่วนนี้ในเครื่องนี้ใช่ไหม ย้อนกลับไม่ได้</span><button type="button" class="btn" data-reset-yes="' + part + '">ลบ</button><button type="button" class="btn ghost" data-reset-no="1">ยกเลิก</button></div>';
    }
    return '<button type="button" class="link-btn small" data-reset="' + part + '" style="color:var(--muted);justify-self:start">' + label + '</button>';
  }

  /* ---------- ต่อจากที่ค้างไว้ ---------- */
  function nextGrammarLesson() {
    // แนะนำบทที่ยังไม่ทำโดยไล่ตามระดับก่อน (Basic→A1→...→C1) แล้วค่อยไล่ตามหมวด
    // ไม่ใช่ไล่ตามหมวดก่อน — กันไม่ให้ต้องเก็บหมวดเดิมจนถึง B2 ก่อนจึงจะเห็นหมวดอื่นที่เป็น A1
    var candidates = [];
    EP.grammar.forEach(function (c, ci) {
      c.lessons.forEach(function (l, li) { if (!lessonDone(l.id)) candidates.push({ ci: ci, li: li, l: l, cat: c, lv: GLEVELS.indexOf(l.level) }); });
    });
    candidates.sort(function (a, b) { return a.lv - b.lv || a.ci - b.ci || a.li - b.li; });
    return candidates[0] || null;
  }
  var GOALS = {
    basic: { label: 'เรียนภาษาอังกฤษพื้นฐาน', line: '<b>เส้นทางแนะนำต่อวัน:</b> Grammar 1 บท → คำศัพท์ ~10 คำ → อ่านสั้น 1 บท แล้วทบทวนเหตุผล' },
    ged: { label: 'เตรียมอ่าน GED', line: '<b>เส้นทางแนะนำต่อวัน:</b> อ่าน GED 1 บท → Grammar 1 บทที่ยังไม่ทำ → คำศัพท์ ~10 คำ' },
    university: { label: 'เตรียมภาษาอังกฤษเพื่อสมัครมหาวิทยาลัยต่างประเทศ', line: '<b>เส้นทางแนะนำต่อวัน:</b> Grammar 1 บท (รวมหมวด Academic Language) → ลองงานเขียนเองท้ายบท → ทบทวนของฉัน' }
  };
  function renderGoalPicker() {
    var g = Store.data.goal;
    return '<div class="row" style="width:100%;gap:6px;margin-bottom:6px" role="group" aria-label="เลือกเป้าหมายการเรียน"><span class="small muted" style="width:100%">เป้าหมายของคุณ:</span>' +
      Object.keys(GOALS).map(function (k) {
        return '<button type="button" class="chip" aria-pressed="' + (g === k) + '" data-goal="' + k + '">' + GOALS[k].label + '</button>';
      }).join('') + '</div>';
  }
  function renderContinue() {
    var goal = GOALS[Store.data.goal] || GOALS.basic;
    var gNext = nextGrammarLesson();
    var rNext = EP.reading.filter(function (p) { return !Store.data.reading[p.id]; })[0];
    var html = renderGoalPicker();
    html += '<span class="small muted" style="width:100%">' + goal.line + '</span>';
    html += gNext ? '<button type="button" class="chip" data-go-lesson="' + gNext.ci + '-' + gNext.li + '"><small>1 · Grammar ต่อไป</small><span class="en">' + gNext.l.title + '</span></button>' : '<span class="chip"><small>1 · Grammar</small>เรียนครบทุกบทแล้ว</span>';
    if (S.vmode === 'exam') {
      var exSet = examSetObj();
      var exDone = examSetProgress(exSet);
      html += '<button type="button" class="chip" data-go-vocab="1"><small>2 · คำศัพท์เตรียมสอบ</small><span class="en">' + esc(exSet.themeTh) + '</span> ' + exDone + '/' + exSet.words.length + '</button>';
      var due = examDueWords();
      if (due.length) html += '<button type="button" class="chip" data-go-vocab="1"><small>ทบทวนวันนี้</small>' + due.length + ' คำ</button>';
    } else {
      html += '<button type="button" class="chip" data-go-vocab="1"><small>2 · คำศัพท์ปูพื้นฐาน</small>' + S.v.lv + ' ชุด ' + (S.v.set + 1) + '</button>';
    }
    html += rNext ? '<button type="button" class="chip" data-rid="' + rNext.id + '"><small>3 · บทอ่านต่อไป</small><span class="en">' + esc(rNext.title) + '</span></button>' : '<span class="chip"><small>3 · อ่าน</small>อ่านครบ 12 บทแล้ว</span>';
    if (Store.data.goal === 'university') {
      html += '<span class="small muted" style="width:100%">บทเรียนหมวด Academic Language ช่วยฝึก<b>ภาษา</b>ที่ใช้ในงานเขียนวิชาการ ไม่ใช่แบบฝึกข้อสอบ IELTS/TOEFL และไม่ได้รับรองว่าเรียนแล้วจะได้คะแนนสอบหรือผ่านเกณฑ์รับสมัคร — ควรฝึกข้อสอบจริงแยกต่างหากกับแหล่งข้อสอบที่เป็นทางการ</span>';
    }
    $('#continue').innerHTML = html;
  }

  /* ---------- วาดหน้า ---------- */
  /* ---------- ทดสอบจำลอง (บทอ่านเชิงวิชาการ 4 บท + งานเขียน 1 ชิ้นตรวจด้วย checklist) ---------- */
  var MOCK_MINUTES = 30;
  function mockState() { return S.m || (S.m = { phase: 'intro', endAt: 0, timer: null, result: null }); }
  function mockPassages() { return EP.reading.filter(function (p) { return p.subject === 'Academic'; }); }
  function mockWriting() {
    var c = EP.grammar.filter(function (x) { return x.id === 'essay'; })[0];
    var l = c && c.lessons.filter(function (x) { return x.id === 'essay-thesis'; })[0];
    return l && l.writing ? l.writing[0] : null;
  }
  function mockStop() { var m = mockState(); if (m.timer) { clearInterval(m.timer); m.timer = null; } }
  function mockClockText(ms) {
    var s = Math.max(0, Math.ceil(ms / 1000)), mm = Math.floor(s / 60), ss = s % 60;
    return (mm < 10 ? '0' : '') + mm + ':' + (ss < 10 ? '0' : '') + ss;
  }
  function mockTick() {
    var m = mockState();
    var left = m.endAt - Date.now();
    var el = $('#mock-clock');
    if (el) el.textContent = mockClockText(left);
    if (left <= 0) mockSubmit(true);
  }
  function mockStart() {
    var m = mockState();
    m.phase = 'running'; m.result = null;
    m.endAt = Date.now() + MOCK_MINUTES * 60000;
    mockStop();
    m.timer = setInterval(mockTick, 1000);
    render();
    focusHeading();
  }
  function mockSubmit(auto) {
    var m = mockState();
    if (m.phase !== 'running') return;
    mockStop();
    var details = [], score = 0, max = 0;
    mockPassages().forEach(function (p) {
      p.q.forEach(function (q, qi) {
        max++;
        var checked = document.querySelector('input[name="mq-' + p.id + '-' + qi + '"]:checked');
        var oi = checked ? Number(checked.value) : null;
        var ok = oi === q.a;
        if (ok) score++;
        details.push({ pid: p.id, qi: qi, q: q.q, picked: oi === null ? null : q.o[oi], correct: q.o[q.a], why: q.why, ok: ok });
      });
    });
    var wr = mockWriting(), ticked = document.querySelectorAll('#mock-checks input:checked').length;
    var wmax = wr ? wr.checklist.length : 0;
    m.phase = 'done';
    m.result = { score: score, max: max, ticked: ticked, wmax: wmax, auto: !!auto, details: details };
    Store.data.mock = Store.data.mock || {};
    Store.data.mock.last = { reading: { score: score, max: max }, writing: { ticked: ticked, max: wmax }, auto: !!auto, at: Date.now() };
    Store.save();
    render();
    focusHeading();
  }
  function mockReset() { var m = mockState(); m.phase = 'intro'; m.result = null; render(); focusHeading(); }
  function mockAct(act) {
    if (act === 'start') mockStart();
    else if (act === 'submit') mockSubmit(false);
    else if (act === 'reset') mockReset();
  }

  function progressHTML() {
    var prog = EP.logic.progressReport(Store.data, EP.grammar, EP.reading);
    var st = { ok: 'ผ่าน ✓', review: 'ควรทบทวน !', incomplete: 'ยังไม่ครบ –' };
    var gaps = prog.gaps.length
      ? '<ul class="small" style="margin:0;padding-left:20px">' + prog.gaps.map(function (g) { return '<li>' + esc(g.label) + '</li>'; }).join('') + '</ul>'
      : '<p class="small muted" style="margin:0">ยังไม่พบช่องว่างที่ต้องทบทวน</p>';
    var cats = prog.grammar.cats.map(function (c) {
      return '<li><b>' + esc(c.th) + '</b> · บท ' + c.done + '/' + c.total + ' · Post-test ' + c.postBest + '/' + c.postMax + ' · <span class="small">' + st[c.status] + (c.nextLesson && c.status === 'incomplete' ? ' (บทถัดไป: ' + esc(c.nextLesson) + ')' : '') + '</span></li>';
    }).join('');
    var pctTxt = function (x) { return x.pct === null ? 'ยังไม่ทำ' : x.pct + '%'; };
    var subj = prog.reading.subjects.map(function (s) { return '<li><b>' + esc(s.subject) + '</b> · ทำแล้ว ' + s.done + '/' + s.total + ' บท · คะแนนที่ดีที่สุด ' + pctTxt(s) + '</li>'; }).join('');
    var lvls = prog.reading.levels.map(function (l) { return '<li><b>' + l.level + '</b> · ทำแล้ว ' + l.done + '/' + l.total + ' บท · ' + pctTxt(l) + '</li>'; }).join('');
    return '<section class="stack" style="gap:10px" aria-labelledby="prog-h">' +
      '<h2 id="prog-h">ความก้าวหน้าของคุณ</h2>' +
      '<p class="small muted" style="margin:0">รายงานนี้บอกช่องว่างการฝึกเท่านั้น ไม่ใช่การทำนายผลสอบ · เกณฑ์ "ผ่าน" คือ Post-test อย่างน้อย ' + EP.logic.PROGRESS_MIN + '/10 ข้อ</p>' +
      '<div><p class="eyebrow" style="margin:0 0 6px">ช่องว่างที่ควรทบทวน</p>' + gaps + '</div>' +
      '<div><p class="eyebrow" style="margin:0 0 6px">Grammar</p><ul class="small" style="margin:0;padding-left:20px">' + cats + '</ul></div>' +
      '<div><p class="eyebrow" style="margin:0 0 6px">บทอ่านตามวิชา</p><ul class="small" style="margin:0;padding-left:20px">' + subj + '</ul></div>' +
      '<div><p class="eyebrow" style="margin:0 0 6px">บทอ่านตามระดับ</p><ul class="small" style="margin:0;padding-left:20px">' + lvls + '</ul></div>' +
      '</section>';
  }

  function mockIntroHTML() {
    var wr = mockWriting(), last = (Store.data.mock || {}).last;
    return '<section class="stack" style="gap:10px" aria-labelledby="mock-h">' +
      '<h2 id="mock-h">ทดสอบจำลอง</h2>' +
      '<p class="small muted" style="margin:0">ชุดนี้ฝึกรูปแบบข้อสอบ: อ่านบทวิชาการ 4 บท (' + mockPassages().reduce(function (s, p) { return s + p.q.length; }, 0) + ' ข้อ) โดยไม่มีคำแปลและคำช่วยอ่าน และเขียนงาน 1 ชิ้น ตรวจด้วย checklist ด้วยตนเอง</p>' +
      '<ul class="small" style="margin:0;padding-left:20px"><li>เวลา ' + MOCK_MINUTES + ' นาที ระบบส่งคำตอบอัตโนมัติเมื่อหมดเวลา</li><li>คำตอบที่ไม่ได้เลือกนับเป็นข้อที่ไม่ถูก</li><li>งานเขียน: ' + (wr ? esc(wr.prompt) : '—') + '</li></ul>' +
      (last ? '<p class="small muted" style="margin:0">ผลครั้งล่าสุด: บทอ่าน ' + last.reading.score + '/' + last.reading.max + ' · งานเขียน ตรวจแล้ว ' + last.writing.ticked + '/' + last.writing.max + ' ข้อ</p>' : '') +
      '<div><button type="button" class="btn primary" data-mock-act="start">เริ่มทดสอบ ' + MOCK_MINUTES + ' นาที</button></div></section>';
  }
  function mockRunningHTML() {
    var wr = mockWriting();
    var passages = mockPassages().map(function (p) {
      var qs = p.q.map(function (q, qi) {
        return '<fieldset style="border:0;padding:0;margin:0 0 12px"><legend style="font-weight:600;margin-bottom:6px">' + (qi + 1) + '. ' + esc(q.q) + '</legend>' +
          q.o.map(function (o, oi) {
            var id = 'mq-' + p.id + '-' + qi + '-' + oi;
            return '<div><input type="radio" id="' + id + '" name="mq-' + p.id + '-' + qi + '" value="' + oi + '"> <label for="' + id + '">' + esc(o) + '</label></div>';
          }).join('') + '</fieldset>';
      }).join('');
      return '<article class="stack" style="gap:8px"><h3 style="margin:0">' + esc(p.title) + ' <span class="small muted">(' + esc(p.level) + ')</span></h3>' +
        '<div class="en" style="line-height:1.7">' + esc(p.s.join(' ')) + '</div>' + qs + '</article>';
    }).join('<hr style="border:0;border-top:1px solid var(--line);margin:16px 0">');
    var checks = wr ? wr.checklist.map(function (c, i) {
      return '<div><input type="checkbox" id="mock-chk-' + i + '"> <label for="mock-chk-' + i + '">' + esc(c) + '</label></div>';
    }).join('') : '';
    return '<section class="stack" style="gap:12px" aria-labelledby="mock-h">' +
      '<div class="row" style="justify-content:space-between"><h2 id="mock-h">ทดสอบจำลอง</h2><span class="small" role="timer" aria-label="เวลาที่เหลือ"><span id="mock-clock" class="en">' + mockClockText(mockState().endAt - Date.now()) + '</span></span></div>' +
      passages +
      '<section class="stack" style="gap:8px" aria-labelledby="mock-w"><h3 id="mock-w" style="margin:0">งานเขียน</h3>' +
      '<p style="margin:0">' + (wr ? esc(wr.prompt) : '') + '</p>' +
      '<textarea rows="8" aria-label="พิมพ์งานเขียนของคุณที่นี่ (ไม่ถูกบันทึก)" style="width:100%"></textarea>' +
      '<p class="small muted" style="margin:0">ข้อความนี้ไม่ถูกบันทึก ตรวจด้วย checklist หลังส่งคำตอบ</p>' +
      '<div id="mock-checks" class="small stack" style="gap:6px">' + checks + '</div></section>' +
      '<div><button type="button" class="btn primary" data-mock-act="submit">ส่งคำตอบ</button></div></section>';
  }
  function mockDoneHTML() {
    var r = mockState().result;
    var rows = r.details.map(function (d, i) {
      return '<li><b>' + (d.ok ? '✓ ถูก' : '✗ ผิด') + '</b> · ข้อ ' + (i + 1) + ': ' + esc(d.q) + '<br><span class="small">คำตอบของคุณ: ' + (d.picked === null ? 'ไม่ได้ตอบ' : esc(d.picked)) + (d.ok ? '' : ' · เฉลย: ' + esc(d.correct) + '<br>' + esc(d.why)) + '</span></li>';
    }).join('');
    return '<section class="stack" style="gap:12px" aria-labelledby="mock-h">' +
      '<h2 id="mock-h">ผลทดสอบจำลอง' + (r.auto ? ' (หมดเวลา ส่งอัตโนมัติ)' : '') + '</h2>' +
      '<p style="margin:0">บทอ่าน: <b>' + r.score + '/' + r.max + '</b> ข้อ · งานเขียน: ตรวจแล้ว <b>' + r.ticked + '/' + r.wmax + '</b> ข้อใน checklist</p>' +
      '<p class="small muted" style="margin:0">ผลนี้เป็นการฝึกเท่านั้น ไม่ได้รับรองคะแนนสอบจริง งานเขียนควรให้ผู้สอนหรือเพื่อนตรวจซ้ำ</p>' +
      '<ol class="small" style="padding-left:20px;margin:0;display:grid;gap:10px">' + rows + '</ol>' +
      '<div><button type="button" class="btn" data-mock-act="reset">กลับไปหน้าเริ่ม</button></div></section>';
  }
  function renderMock(view) {
    var m = mockState();
    if (m.phase === 'running') { view.innerHTML = '<div class="stack" style="gap:28px">' + mockRunningHTML() + '</div>'; return; }
    var body = m.phase === 'done' ? mockDoneHTML() : mockIntroHTML();
    view.innerHTML = '<div class="stack" style="gap:28px">' + body + progressHTML() + '</div>';
  }

  function render() {
    var view = $('#view');
    view.setAttribute('aria-labelledby', 'tab-' + S.tab);
    if (S.tab !== 'mock') mockStop();
    if (S.tab === 'grammar') renderGrammar(view);
    else if (S.tab === 'vocab') renderVocab(view);
    else if (S.tab === 'mock') renderMock(view);
    else renderReading(view);
    renderContinue();
    renderTotalBoard();
  }
  function renderTotalBoard() {
    var el = $('#lbtotal');
    if (el) el.innerHTML = leaderboardTotal();
  }
  function focusHeading() {
    var h = $('#view h2');
    if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
    window.scrollTo(0, Math.max(0, $('#view').getBoundingClientRect().top + window.scrollY - 12));
  }
  function reduceMotion() { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }

  /* ---------- ตัวจัดการคลิกรวม ---------- */
  document.addEventListener('click', function (e) {
    var t = e.target.closest('button, a');
    if (!t) return;
    var d = t.dataset;
    if (d.say != null) { e.preventDefault(); Speech.speak(d.say, t); return; }
    if (d.tab) { setTab(d.tab, true); return; }
    if (d.mockAct) { mockAct(d.mockAct); return; }

    if (d.reset) { confirming = d.reset; render(); var y = $('[data-reset-yes]'); if (y) y.focus(); return; }
    if (d.resetNo) { confirming = null; render(); return; }
    if (d.resetYes) {
      var part = d.resetYes;
      Store.data[part] = {};
      if (part === 'grammar') { Store.data.gpost = {}; gQuiz = null; gPost = null; }
      if (part === 'reading') rQuiz = null;
      if (part === 'examvocab') { examPost = null; S.ex.phase = 'setup'; }
      Store.save(); confirming = null; render(); toast('ล้างความคืบหน้าแล้ว'); return;
    }

    if (d.lbrefresh) { Remote.status = 'idle'; Remote.load(true); refreshBoards(); return; }
    if (d.pedit) { S.p.editing = true; render(); var ni = $('#nick-input'); if (ni) ni.focus(); return; }
    if (d.pcancel) { S.p.editing = false; render(); return; }
    if (d.puse) { var pr = Store.root.profiles[d.puse]; if (pr) { Store.use(pr.nick); afterSwitch('สลับเป็น ' + pr.nick + ' แล้ว'); } return; }
    if (d.pguest) { Store.guest(); afterSwitch('เล่นแบบไม่ระบุชื่อ คะแนนจะไม่ขึ้นตารางอันดับ'); return; }
    if (d.pdel) { S.p.del = d.pdel; render(); var dy = $('[data-pdelyes]'); if (dy) dy.focus(); return; }
    if (d.pdelno) { S.p.del = null; render(); return; }
    if (d.pdelyes) { var gone = (Store.root.profiles[d.pdelyes] || {}).nick; Store.remove(d.pdelyes); S.p.del = null; resetSessions(); render(); toast('ลบ ' + gone + ' ออกจากเครื่องนี้แล้ว'); return; }
    if (d.goLesson) { var gl = d.goLesson.split('-'); S.tab = 'grammar'; S.g.cat = +gl[0]; S.g.lesson = +gl[1]; S.g.view = 'lesson'; gQuiz = null; renderNav(); render(); focusHeading(); return; }
    if (d.goVocab) { S.tab = 'vocab'; S.v.phase = game ? S.v.phase : 'setup'; renderNav(); render(); focusHeading(); return; }

    // Grammar
    if (d.gcat != null) { S.g.cat = +d.gcat; S.g.view = 'list'; confirming = null; render(); var c = $('[data-gcat="' + d.gcat + '"]'); if (c) { c.focus(); c.scrollIntoView({ inline: 'nearest', block: 'nearest' }); } return; }
    if (d.lesson != null) { S.g.lesson = +d.lesson; S.g.view = 'lesson'; gQuiz = null; render(); focusHeading(); return; }
    if (d.gback) { S.g.view = 'list'; render(); focusHeading(); return; }
    if (d.gpath) { S.g.view = 'path'; render(); focusHeading(); return; }
    if (d.goal) { Store.data.goal = d.goal; Store.save(); renderContinue(); return; }
    if (d.greview) { S.g.view = 'review'; render(); focusHeading(); return; }
    if (d.reviewCat != null) { S.g.cat = +d.reviewCat; S.g.view = 'post'; gPost = null; render(); focusHeading(); return; }
    if (d.gnext) { S.g.lesson++; gQuiz = null; render(); focusHeading(); return; }
    if (d.gretry) { gQuiz = null; render(); var q0 = $('#gq-0'); if (q0) q0.scrollIntoView({ block: 'start' }); return; }
    if (d.gpost) {
      if (t.getAttribute('aria-disabled') === 'true') { toast('ทำ mini-test ให้ครบทุกบทในหมวดนี้ก่อน Post-test จึงจะเปิด'); return; }
      S.g.view = 'post'; gPost = null; render(); focusHeading(); return;
    }
    if (d.gpostnext) { finishGPost(); return; }
    if (d.gpostretry) { gPost = null; render(); focusHeading(); return; }
    if (d.q != null && d.o != null) {
      if (S.tab === 'grammar' && S.g.view === 'lesson') answerLesson(+d.q, +d.o);
      else if (S.tab === 'grammar' && S.g.view === 'post') answerGPost(+d.o);
      else if (S.tab === 'reading') answerReading(+d.q, +d.o);
      return;
    }

    // Vocab
    if (d.vmode) { S.vmode = d.vmode; render(); focusHeading(); return; }
    if (d.vlv) { S.v.lv = d.vlv; S.v.set = 0; render(); var lb = $('[data-vlv="' + d.vlv + '"]'); if (lb) lb.focus(); return; }
    if (d.vset != null) { S.v.set = +d.vset; render(); var sb = $('[data-vset="' + d.vset + '"]'); if (sb) sb.focus(); return; }
    if (d.vdir) { S.v.dir = d.vdir; render(); var db = $('[data-vdir="' + d.vdir + '"]'); if (db) db.focus(); return; }
    if (d.vch) { S.v.choices = +d.vch; render(); var cb = $('[data-vch="' + d.vch + '"]'); if (cb) cb.focus(); return; }
    if (d.vstart) { startGame(false); return; }
    if (d.vcard != null) { answerCard(+d.vcard); return; }
    if (d.vnext) { nextCard(); return; }
    if (d.vpost) { startPost(); return; }
    if (d.vhint) { game.hint = true; render(); return; }
    if (d.vpostans != null) { answerPost(+d.vpostans); return; }
    if (d.vpostnext) { nextPost(); return; }
    if (d.vreview) { S.v.lv = game.lv; S.v.set = game.set; S.v.dir = game.dir; S.v.choices = game.choices; startGame(true); return; }
    if (d.vreplay) { S.v.lv = game.lv; S.v.set = game.set; S.v.dir = game.dir; S.v.choices = game.choices; startGame(false); return; }
    if (d.vnextset) { var ns = d.vnextset.split('-'); S.v.lv = ns[0]; S.v.set = +ns[1]; startGame(false); return; }
    if (d.vquit) { game = null; S.v.phase = 'setup'; render(); focusHeading(); return; }

    // คำศัพท์เตรียมสอบ (Oxford 3000/5000)
    if (d.extrip != null) { S.ex.tripIdx = +d.extrip; S.ex.setIdx = 0; render(); var etb = $('[data-extrip="' + d.extrip + '"]'); if (etb) etb.focus(); return; }
    if (d.exset != null) { S.ex.setIdx = +d.exset; render(); var esb = $('[data-exset="' + d.exset + '"]'); if (esb) esb.focus(); return; }
    if (d.exbatch != null) { S.ex.batch = +d.exbatch; render(); var ebb = $('[data-exbatch="' + d.exbatch + '"]'); if (ebb) ebb.focus(); return; }
    if (d.exstart) { startExamBatch(Math.min(S.ex.batch, examSetObj().words.length)); render(); focusHeading(); return; }
    if (d.exopt != null) { if (S.ex.phase === 'post') examAnswerPost(+d.exopt); else examAnswerChoice(+d.exopt); return; }
    if (d.exnext) { examNextQuestion(); return; }
    if (d.exquit) { S.ex.phase = 'setup'; render(); focusHeading(); return; }
    if (d.exback) { S.ex.phase = 'setup'; examPost = null; render(); focusHeading(); return; }
    if (d.expost) { S.ex.phase = 'post'; examPost = null; render(); focusHeading(); return; }
    if (d.expostretry) { examPost = null; render(); focusHeading(); return; }
    if (d.expostnext) {
      var pi = examPost.i;
      if (examPost.ans[pi] == null) return;
      examPost.i++;
      render(); focusHeading(); return;
    }
    if (d.exreview) {
      var due = examDueWords();
      if (!due.length) return;
      S.ex.words = due.slice(0, 10);
      S.ex.rounds = {
        recognize1: EP.logic.buildCardRound(S.ex.words, Math.min(4, S.ex.words.length), 'en-th', Math.random),
        recall1: EP.logic.buildCardRound(S.ex.words, Math.min(4, S.ex.words.length), 'th-en', Math.random),
        listen: EP.logic.buildCardRound(S.ex.words, Math.min(4, S.ex.words.length), 'th-en', Math.random),
        fill: buildExamFillRound(S.ex.words, Math.random)
      };
      S.ex.ans = { recognize1: S.ex.words.map(function () { return null; }), recall1: S.ex.words.map(function () { return null; }), listen: S.ex.words.map(function () { return null; }), fill: S.ex.words.map(function () { return null; }) };
      S.ex.typed = S.ex.words.map(function () { return null; });
      S.ex.actIdx = 0; S.ex.qi = 0; S.ex.phase = 'play';
      render(); focusHeading(); return;
    }

    // Reading
    if (d.rfil) { S.r.filter = d.rfil; render(); var f = $('[data-rfil="' + d.rfil + '"]'); if (f) f.focus(); return; }
    if (d.rid) { S.tab = 'reading'; S.r.id = d.rid; S.r.view = 'passage'; rQuiz = null; renderNav(); render(); focusHeading(); return; }
    if (d.rback) { S.r.view = 'list'; render(); focusHeading(); return; }
    if (d.rth) { S.r.showTh = !S.r.showTh; render(); var th = $('[data-rth]'); if (th) th.focus(); return; }
    if (d.rretry) { rQuiz = null; render(); var rq0 = $('#rq-0'); if (rq0) rq0.scrollIntoView({ block: 'start' }); return; }
    if (d.showEv) { showEvidence(d.showEv); return; }
  });

  function resetSessions() { gQuiz = null; gPost = null; rQuiz = null; game = null; examPost = null; S.v.phase = 'setup'; S.g.view = 'list'; S.r.view = 'list'; S.ex.phase = 'setup'; }
  function afterSwitch(msg) { S.p.editing = false; S.p.del = null; confirming = null; resetSessions(); render(); toast(msg); }
  document.addEventListener('submit', function (e) {
    var tf = e.target.closest('[data-extypeform]');
    if (tf) { e.preventDefault(); examSubmitTyped(tf.querySelector('#ex-type-input').value); return; }
    var f = e.target.closest('[data-pform]');
    if (!f) return;
    e.preventDefault();
    var input = f.querySelector('#nick-input');
    var nick = cleanNick(input.value);
    if (!nick) { input.setAttribute('aria-invalid', 'true'); toast('พิมพ์ชื่อเล่นอย่างน้อย 1 ตัวอักษร'); input.focus(); return; }
    var res = Store.use(nick);
    afterSwitch(res.existed ? 'สลับเป็น ' + nick + ' แล้ว' : res.moved ? 'สวัสดี ' + nick + ' ย้ายความคืบหน้าที่ทำไว้ก่อนหน้ามาไว้ที่ชื่อนี้แล้ว' : 'สวัสดี ' + nick + ' เริ่มบันทึกคะแนนแล้ว');
  });

  document.addEventListener('keydown', function (e) {
    var group = e.target.closest && e.target.closest('#nav, #gcats, #rfil');
    if (!group) return;
    var sel = group.id === 'nav' ? '[role="tab"]' : '.chip';
    var fake = { key: e.key, currentTarget: group, preventDefault: function () { e.preventDefault(); } };
    if (tabKeys(fake, sel) && group.id === 'nav') {
      var cur = $('#nav [aria-selected="true"]');
      if (cur) cur.focus();
    }
  });

  /* ---------- เริ่มต้น ---------- */
  Store.load();
  var hash = (location.hash || '').replace('#', '');
  if (['grammar', 'vocab', 'reading'].indexOf(hash) >= 0) S.tab = hash;
  renderRoute();
  renderNav();
  render();
  Remote.queue();
})();
