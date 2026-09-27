# ทดสอบตารางรวมข้ามเครื่องด้วยเซิร์ฟเวอร์จำลองที่ทำงานแบบเดียวกับ Apps Script
# ใช้: python3 test/e2e_sheet.py   (ต้อง node build.mjs ก่อน)
import json, threading, pathlib, sys, functools
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler, SimpleHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE = ROOT / 'docs'
MAX = {'grammar': 205, 'vocab': 640, 'reading': 53}
SHEET = {}          # key -> row  (จำลองแท็บ Scores)
LOG = {'post': 0, 'options': 0, 'bad_ct': 0}

class Api(BaseHTTPRequestHandler):
    def log_message(self, *a): pass
    def _json(self, obj):
        b = json.dumps(obj).encode()
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers(); self.wfile.write(b)
    def do_OPTIONS(self):          # Apps Script ไม่ตอบ preflight — ถ้าเว็บส่ง preflight ถือว่าผิด
        LOG['options'] += 1
        self.send_response(405); self.end_headers()
    def do_GET(self):
        rows = [{'nick': r['nick'], 'grammar': r['grammar'], 'vocab': r['vocab'], 'reading': r['reading'], 'updated': ''} for r in SHEET.values()]
        self._json({'ok': True, 'max': MAX, 'rows': rows})
    def do_POST(self):
        LOG['post'] += 1
        if not self.headers.get('Content-Type', '').startswith('text/plain'): LOG['bad_ct'] += 1
        d = json.loads(self.rfile.read(int(self.headers['Content-Length'])))
        nick = str(d.get('nick', '')).strip()[:20]
        key = nick.lower()
        old = SHEET.get(key, {'nick': nick, 'grammar': 0, 'vocab': 0, 'reading': 0})
        for p in MAX: old[p] = max(old[p], min(MAX[p], int(d.get(p, 0))))
        old['nick'] = nick; SHEET[key] = old
        self._json({'ok': True, 'saved': old})

api = ThreadingHTTPServer(('127.0.0.1', 8765), Api)
web = ThreadingHTTPServer(('127.0.0.1', 8766), functools.partial(SimpleHTTPRequestHandler, directory=str(SITE)))
web.RequestHandlerClass.log_message = lambda *a: None
for s in (api, web): threading.Thread(target=s.serve_forever, daemon=True).start()

CFG = "window.EP_CONFIG = { scoreEndpoint: 'http://127.0.0.1:8765/exec' };"
fails = []
def check(c, m):
    if not c: fails.append(m); print('  ✗', m)
def board(page):
    return page.eval_on_selector_all('.board li', "els => els.map(e => [e.querySelector('.nick').textContent, +e.querySelector('.pts b').textContent])")

with sync_playwright() as p:
    b = p.chromium.launch()
    errs = []
    def device(name):
        ctx = b.new_context(viewport={'width': 390, 'height': 844})
        ctx.route('**/config.js', lambda r: r.fulfill(body=CFG, content_type='application/javascript'))
        pg = ctx.new_page(); pg.on('pageerror', lambda e: errs.append(name + ': ' + str(e)))
        pg.goto('http://127.0.0.1:8766/index.html'); return pg

    A = device('A')
    A.fill('#nick-input', 'มะลิ'); A.press('#nick-input', 'Enter')
    A.click('[data-lesson="0"]')
    for i in range(5): A.click(f'#gq-{i} .opt >> nth=0')
    A.wait_for_timeout(1800)
    check('มะลิ' in [k['nick'] for k in SHEET.values()], f'เครื่อง A ส่งคะแนนเข้าชีตไม่สำเร็จ {SHEET}')
    g_mali = SHEET.get('มะลิ', {}).get('grammar', 0)
    check(g_mali > 0, 'คะแนน Grammar ของมะลิในชีตต้องมากกว่า 0')

    B = device('B')
    check('ตารางอันดับรวม' in B.locator('#lb-grammar').inner_text(), 'เครื่อง B ต้องเห็นหัวข้อตารางอันดับรวม')
    B.wait_for_selector('#lbw-grammar .board li')
    check(board(B) == [['มะลิ', g_mali]], f'เครื่อง B ต้องเห็นคะแนนมะลิจากเครื่อง A: {board(B)}')
    B.fill('#nick-input', 'Ton'); B.press('#nick-input', 'Enter')
    B.click('#tab-reading'); B.click('.pass-list [data-rid="r1"]')
    for i in range(4): B.click(f'#rq-{i} .opt >> nth=0')
    check('ส่งเข้าตารางรวม' in B.locator('#rq-foot').inner_text(), 'ผลบทอ่านต้องบอกว่าส่งเข้าตารางรวม')
    B.wait_for_timeout(1800)
    check(SHEET.get('ton', {}).get('reading', 0) > 0, 'เครื่อง B ส่งคะแนนอ่านไม่สำเร็จ')

    A.click('[data-gback]'); A.click('#tab-reading')
    A.click('[data-lbrefresh]'); A.wait_for_timeout(500)
    names = [r[0] for r in board(A)]
    check('Ton' in names, f'เครื่อง A ต้องเห็น Ton ในตารางอ่าน: {board(A)}')
    check(A.locator('#lbw-reading .board li.me').count() == 0 or 'มะลิ' in A.locator('#lbw-reading .board li.me').inner_text(), 'ไฮไลต์ "คุณ" ผิดคน')

    # ส่งคะแนนต่ำกว่าเดิมต้องไม่ลดคะแนนในชีต
    before = SHEET['มะลิ']['grammar']
    A.evaluate("fetch('http://127.0.0.1:8765/exec',{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({action:'submit',nick:'มะลิ',grammar:1,vocab:0,reading:0})})")
    A.wait_for_timeout(300)
    check(SHEET['มะลิ']['grammar'] == before, 'คะแนนในชีตลดลง')

    check(LOG['options'] == 0, f'เว็บส่ง CORS preflight {LOG["options"]} ครั้ง (Apps Script ไม่รองรับ)')
    check(LOG['bad_ct'] == 0, 'POST ต้องเป็น text/plain')

    # ปิดเซิร์ฟเวอร์คะแนน → เว็บยังใช้ได้ และแสดงตารางในเครื่อง
    api.shutdown(); api.server_close()
    C = b.new_context(viewport={'width': 390, 'height': 844})
    C.route('**/config.js', lambda r: r.fulfill(body=CFG, content_type='application/javascript'))
    pc = C.new_page(); pc.on('pageerror', lambda e: errs.append('C: ' + str(e)))
    pc.goto('http://127.0.0.1:8766/index.html')
    pc.wait_for_timeout(1500)
    check('เชื่อมตารางรวมไม่ได้' in pc.locator('#lbw-grammar').inner_text(), 'เมื่อเชื่อมชีตไม่ได้ต้องแจ้งและแสดงตารางในเครื่อง')
    pc.click('[data-lesson="0"]'); pc.click('#gq-0 .opt >> nth=0')
    check(pc.locator('#gq-0 .fb').count() == 1, 'เชื่อมชีตไม่ได้แล้วเรียนต่อไม่ได้')
    A.click('#tab-grammar')
    A.screenshot(path='/tmp/claude-0/-home-claude/sheet-board.png', full_page=True)
    check(not errs, 'JS error: ' + '; '.join(errs))
    b.close()
web.shutdown()
print(f'ชีตจำลอง: {list(SHEET.values())} · POST {LOG["post"]} ครั้ง')
print('✓ ผ่านทั้งหมด' if not fails else f'✗ ไม่ผ่าน {len(fails)}')
sys.exit(1 if fails else 0)
