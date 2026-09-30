# ทดสอบการใช้งานจริงในเบราว์เซอร์ (Chromium แบบ headless) ขนาดจอมือถือ 390×844
# ใช้: python3 test/e2e.py   (ต้องมี playwright + chromium)
import pathlib, re, sys
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
URL = (ROOT / 'dist' / 'index.html').as_uri()
OUT = ROOT / 'test' / 'shots'
OUT.mkdir(exist_ok=True)
THAI = re.compile('[฀-๿]')

# จำลอง speechSynthesis เพื่อบันทึกว่าพูดอะไร และพูดเมื่อไร
STUB = """
window.__spoken = [];
const fake = { speaking:false, cancel(){}, getVoices(){ return [{lang:'en-US', name:'Test US', localService:true}]; },
  speak(u){ window.__spoken.push(u.text); if(u.onstart) u.onstart(); setTimeout(()=>u.onend && u.onend(), 10); }, onvoiceschanged:null };
Object.defineProperty(window, 'speechSynthesis', { value: fake, configurable: true });
window.SpeechSynthesisUtterance = function(t){ this.text = t; };
"""
NO_SPEECH = "delete window.speechSynthesis; Object.defineProperty(window,'speechSynthesis',{value:undefined,configurable:true});"

fails = []
def check(cond, msg):
    if not cond:
        fails.append(msg); print('  ✗', msg)

def no_overflow(page, where):
    w = page.evaluate('[document.documentElement.scrollWidth, document.documentElement.clientWidth]')
    check(w[0] <= w[1], f'{where}: หน้าเลื่อนแนวนอน ({w[0]} > {w[1]})')

with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True)
    ctx.add_init_script(STUB)
    page = ctx.new_page()
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('console', lambda m: m.type == 'error' and 'Failed to load resource' not in m.text and errors.append(m.text))  # ฟอนต์ภายนอกอาจถูกบล็อกในเครื่องทดสอบ
    page.goto(URL)
    page.wait_for_selector('.lesson-item')
    check(page.evaluate('window.__spoken.length') == 0, 'มีเสียงเล่นเองตอนเปิดหน้า')
    no_overflow(page, 'หน้า Grammar')
    page.screenshot(path=str(OUT / '1-grammar-list.png'), full_page=False)

    # ---------- Grammar: ทุกหมวด ทุกบท ----------
    print('■ Grammar')
    cats = page.locator('[data-gcat]').count()
    check(cats == 6, f'หมวด Grammar {cats} ≠ 6')
    total_lessons = 0
    for ci in range(cats):
        page.click(f'[data-gcat="{ci}"]')
        n = page.locator('[data-lesson]').count()
        check(page.locator('[data-gpost]').get_attribute('aria-disabled') == 'true', f'หมวด {ci}: Post-test ต้องล็อกก่อนเรียนครบ')
        for li in range(n):
            total_lessons += 1
            page.click('[data-gback]') if page.locator('[data-gback]').count() else None
            page.click(f'[data-lesson="{li}"]')
            page.wait_for_selector('#mt')
            check(page.locator('#mt .q').count() == 5, f'หมวด {ci} บท {li}: mini-test ไม่ใช่ 5 ข้อ')
            nxt = '[data-gnext]' if li < n - 1 else '#mt-foot [data-gpost]'
            check(page.locator(nxt).is_disabled(), f'หมวด {ci} บท {li}: ปุ่มถัดไปต้องกดไม่ได้ก่อนตอบครบ')
            for qi in range(5):
                page.click(f'#gq-{qi} .opt >> nth=0')
                labels = page.locator(f'#gq-{qi} .fb-steps li > b').all_inner_texts()
                check(labels[:4] == ['คำตอบที่ถูก', 'ดูจากคำ', 'กฎที่ใช้', 'ทำไมจึงเลือก'] and labels[-1] == 'ตัวอย่าง/ภาพจำ', f'หมวด {ci} บท {li} ข้อ {qi}: ลำดับเฉลยผิด {labels}')
            if li < n - 1:
                check(not page.locator('[data-gnext]').is_disabled(), f'หมวด {ci} บท {li}: ตอบครบแล้วปุ่มบทถัดไปยังกดไม่ได้')
            if ci == 0 and li == 2:
                no_overflow(page, 'หน้าบทเรียน')
                page.screenshot(path=str(OUT / '2-lesson.png'), full_page=False)
            page.click('[data-gback]')
        # Post-test หมวดนี้
        check(page.locator('[data-gpost]').get_attribute('aria-disabled') is None, f'หมวด {ci}: เรียนครบแล้ว Post-test ยังล็อก')
        page.click('.lesson-item[data-gpost]')
        for k in range(10):
            check(page.locator('#gp .opt').count() == 4, f'หมวด {ci} Post ข้อ {k}: ตัวเลือกไม่ใช่ 4')
            page.click('#gp .opt >> nth=1')
            page.click('[data-gpostnext]')
        txt = page.locator('.score-big').inner_text()
        check('/10' in txt, f'หมวด {ci}: ไม่แสดงคะแนน Post-test /10 ({txt})')
        page.click('.score-card [data-gback]')
    print(f'  เล่นครบ {total_lessons} บท + Post-test {cats} หมวด')

    # ---------- Vocab ----------
    print('■ Vocab')
    page.click('#tab-vocab')
    for lv in ['A1', 'A2', 'B1', 'B2']:
        page.click(f'[data-vlv="{lv}"]')
        for si in range(4):
            page.click(f'[data-vset="{si}"]')
            check(page.locator('.word-list li').count() == 25, f'{lv} ชุด {si+1}: รายการคำไม่ใช่ 25')
    page.click('[data-vlv="A1"]'); page.click('[data-vset="0"]')
    for choices, direction in [(2, 'th-en'), (3, 'en-th'), (4, 'en-th')]:
        page.click(f'[data-vch="{choices}"]'); page.click(f'[data-vdir="{direction}"]')
        page.click('[data-vstart]')
        seen = []
        for k in range(25):
            check(page.locator('[data-vcard]').count() == choices, f'การ์ด {choices} ตัวเลือก: ได้ {page.locator("[data-vcard]").count()}')
            stat = page.locator('.stat-row span >> nth=0').inner_text()
            check(f'{k+1}' in stat and '/25' in stat, f'ตัวนับการ์ดผิด: {stat}')
            prompt = page.locator('.flash .prompt').inner_text()
            seen.append(prompt)
            before = len(page.evaluate('window.__spoken'))
            page.click('[data-vcard] >> nth=0')
            check(page.locator('[data-vnext]').count() == 1 and page.locator('.fb').count() == 1, 'หลังตอบการ์ดต้องเห็นเฉลยและปุ่มถัดไป')
            check(len(page.evaluate('window.__spoken')) == before, 'มีเสียงเล่นเองหลังตอบการ์ด')
            if k == 0 and choices == 4:
                page.screenshot(path=str(OUT / '3-card.png'), full_page=False)
                no_overflow(page, 'การ์ดคำศัพท์')
            page.click('[data-vnext]')
        check(len(set(seen)) == 25, f'การ์ดซ้ำในรอบ ({len(set(seen))} ไม่ซ้ำ)')
        page.click('[data-vpost]')
        sentences = []
        for k in range(15):
            opts = page.locator('[data-vpostans]').all_inner_texts()
            check(len(opts) == 4 and len(set(opts)) == 4, f'Post-test ข้อ {k}: ตัวเลือกต้องเป็น 4 ไม่ซ้ำ {opts}')
            sentences.append(page.locator('.sentence').inner_text())
            if k == 0:
                page.click('[data-vhint]')
            page.click('[data-vpostans] >> nth=2')
            check(page.locator('.fb .filled, .sentence .filled').count() >= 1, 'หลังตอบ Post-test ต้องเห็นประโยคเต็ม')
            if k == 0 and choices == 4:
                page.screenshot(path=str(OUT / '4-vocab-post.png'), full_page=False)
            page.click('[data-vpostnext]')
        check(len(set(sentences)) == 15, 'Post-test มีประโยคซ้ำในรอบ')
        pair = page.locator('.score-pair').inner_text()
        check('/25' in pair and '/15' in pair, 'หน้าสรุปต้องแยกคะแนนการ์ด /25 และ Post-test /15')
        if page.locator('[data-vreview]').count():
            page.click('[data-vreview]')
            check(page.locator('[data-vcard]').count() == choices, 'โหมดทบทวนคำที่ผิดเปิดไม่ได้')
            page.click('[data-vquit]')
        else:
            page.click('[data-vquit]')
    # ปุ่มฟังเสียง: ต้องพูดเฉพาะอังกฤษ
    page.click('details.words summary')
    page.click('.word-list .say >> nth=0')
    page.wait_for_timeout(50)
    spoken = page.evaluate('window.__spoken')
    check(len(spoken) >= 1 and spoken[-1] == 'family', f'กดฟังแล้วไม่ได้ยินคำที่ถูก: {spoken[-1:]}')

    # ---------- Reading ----------
    print('■ Reading')
    page.click('#tab-reading')
    check(page.locator('[data-rid]').count() >= 12, 'บทอ่านไม่ครบ 12')
    ids = page.eval_on_selector_all('.pass-list [data-rid]', 'els => els.map(e => e.dataset.rid)')
    for rid in ids:
        page.click(f'.pass-list [data-rid="{rid}"]')
        qn = page.locator('#rq .q').count()
        for qi in range(qn):
            page.click(f'#rq-{qi} .opt >> nth=0')
            check(page.locator(f'#rq-{qi} .quote').count() >= 1, f'{rid} ข้อ {qi}: เฉลยไม่แสดงหลักฐาน')
        check(page.locator('#rq-foot .score-big').count() == 1, f'{rid}: ไม่แสดงคะแนนท้ายบท')
        if rid in ('r5', 'r9'):
            page.click('[data-rth]')
            page.screenshot(path=str(OUT / f'5-reading-{rid}.png'), full_page=True)
            no_overflow(page, f'บทอ่าน {rid}')
            page.click('[data-rth]')
        page.click('[data-rback] >> nth=0')

    spoken = page.evaluate('window.__spoken')
    check(all(not THAI.search(t) for t in spoken), 'มีการส่งข้อความภาษาไทยไปอ่านออกเสียง')
    print(f'  เสียงที่ถูกเรียกทั้งหมด {len(spoken)} ครั้ง ทั้งหมดเป็นภาษาอังกฤษ')

    # ---------- เบราว์เซอร์ที่ไม่มีเสียง ----------
    ctx2 = b.new_context(viewport={'width': 390, 'height': 844})
    ctx2.add_init_script(NO_SPEECH)
    p2 = ctx2.new_page()
    p2.on('pageerror', lambda e: errors.append('no-speech: ' + str(e)))
    p2.goto(URL + '#vocab')
    p2.click('details.words summary')
    p2.click('.word-list .say >> nth=0')
    check(p2.locator('#toast').is_visible() and 'ไม่มีระบบเสียง' in p2.locator('#toast').inner_text(), 'ไม่มีข้อความช่วยเหลือเมื่อเบราว์เซอร์ไม่มีเสียง')

    # ---------- ฟอนต์ภายนอกโหลดไม่ได้ / ไม่มีที่เก็บข้อมูล ----------
    ctx3 = b.new_context(viewport={'width': 360, 'height': 740})
    ctx3.route('**/fonts.googleapis.com/**', lambda r: r.abort())
    ctx3.route('**/fonts.gstatic.com/**', lambda r: r.abort())
    ctx3.add_init_script("Object.defineProperty(window,'localStorage',{get(){throw new Error('blocked')}})")
    p3 = ctx3.new_page()
    p3.on('pageerror', lambda e: errors.append('offline-fonts: ' + str(e)))
    p3.goto(URL)
    check(p3.locator('.lesson-item').count() > 0, 'หน้าไม่แสดงเมื่อโหลดฟอนต์/ที่เก็บข้อมูลไม่ได้')
    p3.click('[data-lesson="0"]'); p3.click('#gq-0 .opt >> nth=0')
    check(p3.locator('#gq-0 .fb').count() == 1, 'ตอบคำถามไม่ได้เมื่อไม่มี localStorage')
    w = p3.evaluate('[document.documentElement.scrollWidth, document.documentElement.clientWidth]')
    check(w[0] <= w[1], 'จอ 360px ฟอนต์สำรอง: หน้าเลื่อนแนวนอน')

    check(not errors, 'JS error: ' + '; '.join(errors[:5]))
    b.close()

print('\n' + ('✓ ผ่านทั้งหมด' if not fails else f'✗ ไม่ผ่าน {len(fails)} รายการ'))
sys.exit(1 if fails else 0)
