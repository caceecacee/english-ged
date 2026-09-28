# ทดสอบชื่อเล่นและตารางคะแนนสูงสุด: python3 test/e2e_players.py
import pathlib, sys
from playwright.sync_api import sync_playwright

URL = (pathlib.Path(__file__).resolve().parent.parent / 'dist' / 'index.html').as_uri()
fails = []
def check(c, m):
    if not c: fails.append(m); print('  ✗', m)

def board_rows(page, part='grammar'):
    return page.eval_on_selector_all(f'#lbw-{part} .board li', "els => els.map(e => [e.querySelector('.nick').textContent, +e.querySelector('.pts b').textContent, e.classList.contains('me')])")

with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={'width': 390, 'height': 844})
    page = ctx.new_page()
    errs = []
    page.on('pageerror', lambda e: errs.append(str(e)))
    page.goto(URL)

    # เรียนแบบยังไม่ใส่ชื่อ แล้วใส่ชื่อเล่นแรก → ความคืบหน้าย้ายมาที่ชื่อนี้
    check(page.locator('#nick-input').count() == 1, 'หน้าแรก Grammar ต้องมีช่องใส่ชื่อเล่น')
    check('ยังไม่มีชื่อในตาราง' in page.locator('.board, section:has(#lb-grammar)').first.inner_text(), 'ตารางว่างต้องมีข้อความแนะนำ')
    page.click('[data-lesson="0"]')
    for i in range(5): page.click(f'#gq-{i} .opt >> nth=0')
    page.click('[data-gback]')
    page.fill('#nick-input', '   ')
    page.click('[data-pform] button[type=submit]')
    check(page.locator('#nick-input').get_attribute('aria-invalid') == 'true', 'ชื่อว่างต้องแจ้งเตือน')
    page.fill('#nick-input', 'มะลิ')
    page.press('#nick-input', 'Enter')
    check('ย้ายความคืบหน้า' in page.locator('#toast').inner_text(), 'ชื่อแรกต้องรับความคืบหน้าเดิม')
    rows = board_rows(page)
    check(len(rows) == 1 and rows[0][0] == 'มะลิ' and rows[0][1] > 0 and rows[0][2], f'ตาราง Grammar หลังใส่ชื่อ: {rows}')
    mali_g = rows[0][1]

    # ผู้เล่นคนที่สองบนเครื่องเดียวกัน
    page.click('[data-pedit]')
    page.fill('#nick-input', 'Ton')
    page.press('#nick-input', 'Enter')
    check(page.locator('.lesson-item.done').count() == 0, 'ผู้เล่นใหม่ต้องเริ่มความคืบหน้าจากศูนย์')
    rows = board_rows(page)
    check([r[0] for r in rows] == ['มะลิ', 'Ton'] and rows[1][2], f'ลำดับตาราง Grammar ผิด: {rows}')

    # Ton ทำบทอ่าน 1 บท → ขึ้นอันดับ 1 ในตาราง Reading
    page.click('#tab-reading')
    page.click('.pass-list [data-rid="r1"]')
    for i in range(4): page.click(f'#rq-{i} .opt >> nth=0')
    check('บันทึกคะแนนให้' in page.locator('#rq-foot').inner_text(), 'ผลบทอ่านต้องบอกว่าบันทึกให้ใคร')
    page.click('[data-rback] >> nth=0')
    rows = board_rows(page, 'reading')
    ton = [r for r in rows if r[0] == 'Ton'][0]
    check(len(rows) == 2 and ton[2] and (ton[1] == 0 or rows[0][0] == 'Ton'), f'ตาราง Reading ผิด: {rows}')

    # Vocab มีช่องชื่อและตาราง
    page.click('#tab-vocab')
    check(page.locator('.player .nick').inner_text() == 'Ton', 'Part คำศัพท์ต้องแสดงผู้เล่นปัจจุบัน')
    check(page.locator('#lb-vocab').count() == 1, 'Part คำศัพท์ต้องมีตารางอันดับ')

    # สลับกลับ + โหลดหน้าใหม่แล้วยังอยู่
    page.click('#tab-grammar')
    page.click('[data-pedit]')
    page.click('[data-puse]')
    check(page.locator('.player .nick').inner_text() == 'มะลิ', 'สลับกลับเป็นมะลิไม่ได้')
    check(page.locator('.lesson-item.done').count() == 1, 'ความคืบหน้าของมะลิหาย')
    page.reload()
    check(page.locator('.player .nick').inner_text() == 'มะลิ', 'โหลดใหม่แล้วผู้เล่นปัจจุบันหาย')
    check(board_rows(page)[0][1] == mali_g, 'โหลดใหม่แล้วคะแนนเปลี่ยน')

    # ลบผู้เล่น (มีขั้นยืนยัน)
    page.click('#lbw-grammar .board li:has-text("Ton") [data-pdel]')
    check(page.locator('#lbw-grammar [data-pdelyes]').count() == 1, 'ลบต้องมีขั้นยืนยัน')
    page.click('#lbw-grammar [data-pdelyes]')
    check([r[0] for r in board_rows(page)] == ['มะลิ'], 'ลบ Ton ไม่สำเร็จ')

    # ชื่อยาว/อักขระพิเศษไม่ทำให้หน้าเสีย
    page.click('[data-pedit]')
    page.fill('#nick-input', '<b>x</b>ยาวมากๆๆๆๆๆๆๆๆๆๆๆ')
    page.press('#nick-input', 'Enter')
    check(page.locator('.player b.nick b').count() == 0 and '<b>' in page.locator('.player .nick').inner_text(), 'ชื่อเล่นต้องแสดงเป็นข้อความ ไม่ใช่ HTML')
    w = page.evaluate('[document.documentElement.scrollWidth, document.documentElement.clientWidth]')
    check(w[0] <= w[1], 'ชื่อยาวทำให้หน้าเลื่อนแนวนอน')
    page.screenshot(path='/tmp/claude-0/-home-claude/players.png', full_page=True)
    check(not errs, 'JS error: ' + '; '.join(errs))
    b.close()
print('✓ ผ่านทั้งหมด' if not fails else f'✗ ไม่ผ่าน {len(fails)}')
sys.exit(1 if fails else 0)
