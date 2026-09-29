/* หมวด 2: Basic Tenses — กาลพื้นฐาน */
(function (root) {
  var EP = root.EP = root.EP || {};
  EP.grammar = EP.grammar || [];
  EP.grammar.push({
    id: 'tense',
    name: 'Basic Tenses',
    th: 'กาลพื้นฐาน',
    blurb: 'ดูคำบอกเวลาและรูปกริยา แล้วรู้ทันทีว่าเรื่องเกิดเมื่อไร',
    lessons: [
      {
        id: 'tense-helpers', level: 'Basic', title: 'be, do, have — Helper Verbs', th: 'กริยาช่วยตัวหลัก be, do, have',
        explain: 'be, do, have เป็นกริยาที่พิเศษ เพราะใช้ได้ 2 แบบ:<br>1) เป็น <b>กริยาแท้</b> ของประโยคเอง เช่น "She <b>is</b> tired." (be), "I <b>do</b> my homework." (do), "He <b>has</b> a car." (have)<br>2) เป็น <b>กริยาช่วย (helper)</b> ที่ไปอยู่กับกริยาอีกตัวเพื่อสร้างรูปประโยคใหม่ เช่น ปฏิเสธ/คำถาม/กำลังทำ — ใน<b>บทนี้เรียนแค่ให้จำหน้าตาไว้ก่อน</b> ส่วนวิธีใช้จริงแต่ละแบบจะเรียนละเอียดในบทถัดไป (Present Continuous ใช้ be, คำถาม/ปฏิเสธใช้ do, Present Perfect ใช้ have)',
        formula: '<b>be</b>: am / is / are (ปัจจุบัน) · was / were (อดีต)<br><b>do</b>: do / does (ปัจจุบัน) · did (อดีต)<br><b>have</b>: have / has (ปัจจุบัน) · had (อดีต)',
        examples: [
          { en: 'S:She|V:is|C:a nurse', th: 'เธอเป็นพยาบาล (is = กริยาแท้)' },
          { en: 'S:She|aux:is|V:working|T:now', th: 'เธอกำลังทำงานอยู่ตอนนี้ (is = กริยาช่วย + working)' },
          { en: 'S:I|aux:don\'t|V:like|O:coffee', th: 'ฉันไม่ชอบกาแฟ (don\'t = do ที่ทำหน้าที่กริยาช่วยสร้างปฏิเสธ)' }
        ],
        confuse: [
          'be/do/have ตัวเดียวกัน แต่ทำหน้าที่ต่างกันได้ในสองประโยค: "I <b>have</b> a dog." (have = กริยาแท้ แปลว่า "มี") กับ "I <b>have</b> finished." (have = กริยาช่วย ไม่ได้แปลว่ามี)',
          'เมื่อ do/does ทำหน้าที่กริยาช่วย (ปฏิเสธ/คำถาม) กริยาแท้ที่ตามมาต้อง<b>กลับเป็นช่อง 1เสมอ</b> ไม่ว่าประธานจะเป็นใคร: He <b>doesn\'t like</b> it. (ไม่ใช่ doesn\'t likes)'
        ],
        quiz: [
          { q: '"He has a car." คำว่า has ในที่นี้ทำหน้าที่ใด', o: ['กริยาช่วย', 'กริยาแท้ แปลว่า "มี"', 'คำนาม', 'คำคุณศัพท์'], a: 1,
            clue: 'has ตามด้วย a car', rule: 'have/has ที่แปลว่า "มี" และเป็นกริยาหลักของประโยค คือกริยาแท้',
            why: 'ประโยคนี้พูดว่าเขามีรถ has จึงเป็นกริยาแท้ ไม่ใช่กริยาช่วย',
            n: ['ไม่มีกริยาอีกตัวให้ has ช่วย', '', 'has ทำหน้าที่กริยา ไม่ใช่ชื่อสิ่งของ', 'has ไม่ได้บอกลักษณะ'],
            ex: 'They have two children. (have = มี)' },
          { q: '"I don\'t like coffee." คำว่า don\'t มาจากคำช่วยตัวใด', o: ['be', 'do', 'have', 'will'], a: 1,
            clue: "don't = do + not", rule: 'do/does/did เป็นกริยาช่วยหลักที่ใช้สร้างปฏิเสธ/คำถามของกริยาแท้',
            why: "don't ย่อมาจาก do not",
            n: ['be ย่อเป็น isn\'t/aren\'t/wasn\'t', '', "have ย่อเป็น haven't/hasn't", "will ย่อเป็น won't"],
            ex: "She doesn't eat meat." },
          { q: '"She is working now." คำว่า is ในที่นี้ทำหน้าที่ใด', o: ['กริยาแท้ของประโยค', 'กริยาช่วยที่ไปกับ working', 'คำนาม', 'คำบุพบท'], a: 1,
            clue: 'is อยู่หน้ากริยา -ing', rule: 'be + V-ing คือ be ทำหน้าที่กริยาช่วยสร้างรูปกำลังทำ',
            why: 'is ช่วยสร้างรูป "กำลังทำ" ร่วมกับ working ซึ่งเป็นกริยาแท้ของประโยคนี้',
            n: ['working เป็นกริยาแท้ ไม่ใช่ is', '', 'is ไม่ใช่ชื่อสิ่งของ', 'is ไม่ใช่บุพบท'],
            ex: 'They are studying English.' },
          { q: 'ข้อใดใช้ have เป็น "กริยาแท้" (แปลว่ามี) ไม่ใช่กริยาช่วย', o: ['I have finished my homework.', 'I have a new phone.', 'Have you seen this movie?', 'She has already left.'], a: 1,
            clue: 'have ตามด้วยสิ่งของที่เป็นเจ้าของ ไม่ใช่กริยาช่อง 3', rule: 'have + คำนาม (ของที่มี) = กริยาแท้ แปลว่ามี · have + กริยาช่อง 3 = กริยาช่วย',
            why: '"a new phone" เป็นคำนาม ไม่ใช่กริยาช่อง 3 จึงเป็น have ที่แปลว่า "มี"',
            n: ['finished เป็นกริยาช่อง 3 → have เป็นกริยาช่วย', '', 'seen เป็นกริยาช่อง 3 → Have เป็นกริยาช่วย', 'left เป็นกริยาช่อง 3 → has เป็นกริยาช่วย'],
            ex: 'We have a big garden. (have = มี)' },
          { q: '"Does he like tea?" กริยาแท้ของประโยคนี้คือคำใด', o: ['Does', 'he', 'like', 'tea'], a: 2,
            clue: 'Does เป็นตัวช่วยสร้างคำถาม', rule: 'ในคำถามที่มี do/does/did กริยาแท้คือคำที่อยู่หลังประธาน ไม่ใช่ do/does/did เอง',
            why: 'like เป็นกริยาแท้ (การกระทำ) ส่วน Does เป็นกริยาช่วยที่มาช่วยสร้างคำถามเท่านั้น',
            n: ['Does เป็นกริยาช่วย ไม่ใช่กริยาแท้', 'he เป็นประธาน', '', 'tea เป็นกรรม'],
            ex: 'Did she call you? (call = กริยาแท้)' }
        ],
        writing: [
          { prompt: 'แต่งประโยคที่ใช้ "have" เป็นกริยาแท้ (แปลว่า "มี")', sample: 'I have a small cat.',
            checklist: ['have/has ตามด้วยคำนาม ไม่ใช่กริยาช่อง 3', 'ประโยคแปลว่า "มี...จริง ๆ"', 'เลือก have หรือ has ให้ตรงกับประธาน'] },
          { prompt: 'แต่งประโยคปฏิเสธโดยใช้ "don\'t" หรือ "doesn\'t" (do เป็นกริยาช่วย)', sample: "My brother doesn't drink coffee.",
            checklist: ["ใช้ don't (I/you/we/they) หรือ doesn't (he/she/it) ให้ตรงกับประธาน", 'กริยาแท้ที่ตามมาอยู่ในรูปช่อง 1 เสมอ', 'ประโยคมีความหมายชัดเจน'] }
        ]
      },
      {
        id: 'tense-present', level: 'A1', title: 'Present Simple', th: 'ปัจจุบันกาลธรรมดา',
        explain: 'ใช้พูดถึง <b>สิ่งที่ทำเป็นประจำ</b> (นิสัย กิจวัตร) และ <b>ข้อเท็จจริงทั่วไป</b><br>• I/you/we/they + กริยาช่อง 1 (play)<br>• he/she/it หรือคำนามเอกพจน์ + กริยาเติม <b>-s</b> (plays)<br>• ลงท้าย s, x, ch, sh, o → เติม <b>-es</b> (watches, goes)<br>• พยัญชนะ + y → เปลี่ยน y เป็น <b>-ies</b> (study → studies)<br>คำบอกเวลาที่พบบ่อย: every day, usually, always, often, on Sundays',
        formula: 'I/You/We/They + <b>V1</b><br>He/She/It + <b>V1 + s/es</b><br>สัญญาณ: every ..., usually, always, often',
        examples: [
          { en: 'S:She|V:goes|Pl:to work|M:by bus|T:every day', th: 'เธอไปทำงานโดยรถเมล์ทุกวัน (She → goes)' },
          { en: 'S:The sun|V:rises|Pl:in the east', th: 'ดวงอาทิตย์ขึ้นทางทิศตะวันออก (ข้อเท็จจริง)' },
          { en: 'S:My brothers|V:play|O:football|T:on Sundays', th: 'พี่ชายของฉันเล่นฟุตบอลทุกวันอาทิตย์ (หลายคน → ไม่เติม s)' }
        ],
        confuse: [
          'ภาษาไทยไม่เปลี่ยนกริยาตามประธาน แต่อังกฤษต้องเติม -s เมื่อประธานเป็น he/she/it: He <b>works</b>.',
          'ประธานหลายคน เช่น My brothers, The students ไม่เติม -s ที่กริยา'
        ],
        quiz: [
          { q: 'She ___ to work by bus.', o: ['go', 'goes', 'going', 'gone'], a: 1,
            clue: 'She (เอกพจน์)', rule: 'he/she/it + V1 เติม s/es · go ลงท้าย o → goes',
            why: 'ประธาน She ต้องใช้ goes',
            n: ['go ใช้กับ I/you/we/they', '', 'going ต้องมี be (is going)', 'gone เป็นกริยาช่อง 3 ใช้เดี่ยว ๆ ไม่ได้'],
            ex: 'He does his homework after dinner.' },
          { q: 'The sun ___ in the east.', o: ['rise', 'rises', 'rising', 'rose'], a: 1,
            clue: 'ข้อเท็จจริงทั่วไป + The sun (เอกพจน์)', rule: 'ข้อเท็จจริงใช้ Present Simple',
            why: 'ดวงอาทิตย์ขึ้นทางทิศตะวันออกเสมอ และ The sun เป็นเอกพจน์ → rises',
            n: ['ขาด -s สำหรับประธานเอกพจน์', '', 'rising ต้องมี be นำหน้า', 'rose เป็นอดีต ไม่ใช่ข้อเท็จจริงที่เป็นจริงเสมอ'],
            ex: 'Water freezes at 0°C.' },
          { q: 'My brothers ___ football every Sunday.', o: ['plays', 'play', 'playing', 'is play'], a: 1,
            clue: 'My brothers (หลายคน) + every Sunday', rule: 'ประธานพหูพจน์ใช้ V1 ไม่เติม s',
            why: 'brothers เป็นพหูพจน์ จึงใช้ play',
            n: ['plays ใช้กับประธานเอกพจน์', '', 'playing ต้องมี are นำหน้า', 'is กับ play ใช้ด้วยกันแบบนี้ไม่ได้'],
            ex: 'The children walk to school.' },
          { q: 'He ___ TV at night.', o: ['watchs', 'watches', 'watch', 'watching'], a: 1,
            clue: 'He + watch (ลงท้าย ch)', rule: 'ลงท้าย s, x, ch, sh, o เติม -es',
            why: 'watch ลงท้าย ch และประธานคือ He → watches',
            n: ['ต้องเติม -es ไม่ใช่ -s', '', 'ขาด -es สำหรับ He', 'watching ต้องมี is นำหน้า'],
            ex: 'She washes the dishes. He fixes cars.' },
          { q: 'Water ___ at 100°C.', o: ['boil', 'boils', 'boiled', 'boiling'], a: 1,
            clue: 'ข้อเท็จจริงทางวิทยาศาสตร์ + Water (นามนับไม่ได้ = เอกพจน์)', rule: 'ข้อเท็จจริงใช้ Present Simple',
            why: 'น้ำเดือดที่ 100°C เป็นจริงเสมอ และ water นับเป็นเอกพจน์ → boils',
            n: ['ขาด -s', '', 'boiled เป็นอดีต', 'boiling ต้องมี is'],
            ex: 'Plants need sunlight.' }
        ]
      },
      {
        id: 'tense-cont', level: 'A1', title: 'Present Continuous', th: 'ปัจจุบันกาลกำลังทำ',
        explain: 'ใช้พูดถึง <b>สิ่งที่กำลังเกิดขึ้นตอนนี้เดี๋ยวนี้</b> (ขณะพูด) ต่างจาก Present Simple ที่พูดถึงสิ่งที่ทำ<b>เป็นประจำ</b><br>โครงสร้าง: <b>am/is/are + V-ing</b><br>• ลงท้าย e (ตัด e ทิ้ง) → make → mak<b>ing</b><br>• สระเดี่ยว+พยัญชนะเดี่ยว (พยางค์เดียว) → เพิ่มพยัญชนะซ้ำ → run → run<b>ning</b><br>คำบอกเวลาที่พบบ่อย: now, right now, at the moment, Look!, Listen!',
        formula: 'S + <b>am/is/are</b> + V-<b>ing</b><br>สัญญาณ: now, right now, at the moment, Look! / Listen!',
        examples: [
          { en: 'S:I|aux:am|V:eating|O:lunch|T:right now', th: 'ฉันกำลังกินข้าวเที่ยงอยู่ตอนนี้' },
          { en: 'S:They|aux:are|V:playing|O:football|Pl:in the park', th: 'พวกเขากำลังเล่นฟุตบอลอยู่ในสวน (ตอนนี้)' },
          { en: 'q:Look!|S:It|aux:is|V:raining', th: 'ดูสิ! ฝนกำลังตก' }
        ],
        confuse: [
          'Present Simple (นิสัย) vs Present Continuous (กำลังทำตอนนี้) — สังเกตคำบอกเวลา: "She <b>plays</b> tennis <b>every weekend</b>." (นิสัย) ต่างจาก "She <b>is playing</b> tennis <b>now</b>." (กำลังทำ)',
          'กริยาบางกลุ่มไม่ใช้รูป -ing แม้จะพูดถึง "ตอนนี้" เช่น know, like, love, want, need, believe — ต้องใช้ Present Simple เสมอ: "I <b>know</b> the answer." ✓ · "I am knowing" ✗'
        ],
        quiz: [
          { q: 'Look! It ___ outside.', o: ['rain', 'rains', 'is raining', 'rained'], a: 2,
            clue: 'Look! = เห็นตอนนี้เลย', rule: 'สิ่งที่เกิดขึ้นตอนนี้ + สัญญาณ Look! ใช้ Present Continuous',
            why: 'Look! บอกว่าเห็นเหตุการณ์เกิดขึ้นตรงหน้าตอนนี้ จึงใช้ is raining',
            n: ['ขาด is และ -ing', 'เป็น Present Simple ไม่เข้ากับ Look!', '', 'rained เป็นอดีต'],
            ex: 'Listen! The birds are singing.' },
          { q: 'She usually ___ tennis on Sundays, but right now she ___ at home.', o: ['plays / is resting', 'is playing / rests', 'play / rest', 'played / rested'], a: 0,
            clue: 'usually (นิสัย) ... right now (ตอนนี้)', rule: 'นิสัยประจำ → Present Simple · เกิดขึ้นตอนนี้ → Present Continuous',
            why: 'usually บอกนิสัย → plays · right now บอกตอนนี้ → is resting',
            n: ['', 'สลับกันผิด: usually ควรใช้ Present Simple ไม่ใช่ Continuous', 'ขาด s สำหรับ she และขาด is', 'เป็นอดีต ไม่ตรงกับ usually/right now'],
            ex: 'I usually walk to school, but today I am taking the bus.' },
          { q: 'ข้อใดถูกต้อง (know เป็นกริยาที่ไม่ใช้รูป -ing)', o: ['I am knowing her name.', 'I know her name.', 'I is knowing her name.', 'I knowing her name.'], a: 1,
            clue: 'know = รู้ (สภาวะ ไม่ใช่การกระทำที่เห็นได้)', rule: 'know, like, want, need, believe ไม่ใช้รูป -ing ใช้ Present Simple เสมอ',
            why: 'know ไม่ใช้รูป -ing แม้จะพูดถึงตอนนี้ จึงใช้ know เฉย ๆ',
            n: ['know ไม่ใช้รูป -ing', '', 'know ไม่ใช้รูป -ing และประธาน I ไม่ใช้ is', 'ขาดกริยาช่วย am และไม่ควรใช้ -ing กับ know'],
            ex: 'I like this song. (ไม่ใช่ I am liking)' },
          { q: 'รูป -ing ของ run คือข้อใด', o: ['runing', 'runming', 'running', 'runeing'], a: 2,
            clue: 'run = สระเดี่ยว u + พยัญชนะเดี่ยว n (พยางค์เดียว)', rule: 'สระเดี่ยว+พยัญชนะเดี่ยว พยางค์เดียว → เพิ่มพยัญชนะซ้ำ + ing',
            why: 'run → runn (เพิ่ม n ซ้ำ) → running',
            n: ['ขาดตัว n ซ้ำ', 'ไม่มีรูปนี้', '', 'run ไม่มี e ท้ายคำ จึงไม่ตัด e'],
            ex: 'swim → swimming, sit → sitting' },
          { q: 'เรียงคำให้ถูก: is / She / a letter / writing', o: ['She is writing a letter.', 'She writing is a letter.', 'Is she writing a letter.', 'She a letter is writing.'], a: 0,
            clue: 'S + is + V-ing + O', rule: 'S + am/is/are + V-ing (+O)',
            why: 'She (S) → is (aux) → writing (V-ing) → a letter (O)',
            n: ['', 'is ต้องอยู่หน้ากริยา -ing ไม่ใช่หลัง', 'รูปนี้เป็นคำถาม ไม่ใช่บอกเล่า', 'กรรมต้องอยู่หลังกริยา -ing'],
            ex: 'He is cooking dinner.' }
        ],
        writing: [
          { prompt: 'แต่งประโยคบอกว่าคุณกำลังทำอะไรอยู่ตอนนี้ โดยใช้ Present Continuous', sample: 'I am doing my English homework right now.',
            checklist: ['มี am/is/are ตรงกับประธาน', 'กริยาหลักอยู่ในรูป -ing', 'มีคำบอกเวลาอย่าง now/right now (จะมีหรือไม่มีก็ได้ แต่ช่วยให้ชัดเจน)'] },
          { prompt: 'แต่งประโยค 1 คู่ เทียบ Present Simple (นิสัย) กับ Present Continuous (กำลังทำตอนนี้) ของกิจกรรมเดียวกัน', sample: 'I usually cook dinner at 6 pm, but today I am cooking at 7 pm.',
            checklist: ['ประโยคแรกใช้ Present Simple พร้อมคำบอกความถี่ (usually/every day)', 'ประโยคสองใช้ Present Continuous พร้อมคำบอกตอนนี้ (now/today)', 'ทั้งสองประโยคพูดถึงกิจกรรมเดียวกัน'] }
        ]
      },
      {
        id: 'tense-past-reg', level: 'A1', title: 'Past Simple (regular verbs)', th: 'อดีตกาล (กริยาปกติ)',
        explain: 'ใช้กับเหตุการณ์ที่ <b>เกิดขึ้นและจบแล้วในอดีต</b> มักมีคำบอกเวลา เช่น yesterday, last week, two days ago, in 2020<br>กริยาปกติเติม <b>-ed</b> และ <b>ใช้รูปเดียวกันกับทุกประธาน</b><br>• ลงท้าย e → เติม <b>-d</b> (live → lived)<br>• พยัญชนะ + y → <b>-ied</b> (study → studied)<br>• สระเดี่ยว + พยัญชนะเดี่ยว (คำพยางค์เดียว) → เพิ่มพยัญชนะตัวท้าย + ed (stop → stopped)',
        formula: 'S + <b>V-ed</b> + ... + yesterday / last ... / ... ago / in 2020<br>live → live<b>d</b> · study → stud<b>ied</b> · stop → sto<b>pped</b>',
        examples: [
          { en: 'S:I|V:visited|O:my grandmother|T:yesterday', th: 'ฉันไปเยี่ยมยายเมื่อวานนี้' },
          { en: 'S:They|V:lived|Pl:in Chiang Mai|T:in 2020', th: 'พวกเขาอาศัยอยู่ที่เชียงใหม่ในปี 2020' },
          { en: 'S:The bus|V:stopped|T:five minutes ago', th: 'รถเมล์จอดเมื่อห้านาทีก่อน' }
        ],
        confuse: [
          'Past Simple ไม่ต้องเติม -s แม้ประธานเป็น he/she: She <b>walked</b> ✓ · She walkeds ✗',
          '"ago" อยู่หลังช่วงเวลา: two days <b>ago</b> (ไม่ใช่ ago two days)'
        ],
        quiz: [
          { q: 'I ___ my grandmother yesterday.', o: ['visit', 'visited', 'visits', 'visiting'], a: 1,
            clue: 'yesterday', rule: 'yesterday → Past Simple (V-ed)',
            why: 'เหตุการณ์เกิดเมื่อวาน จึงใช้ visited',
            n: ['visit เป็นปัจจุบัน', '', 'visits เป็นปัจจุบันสำหรับ he/she/it', 'visiting ต้องมี be นำหน้า'],
            ex: 'We cleaned the house yesterday.' },
          { q: 'They ___ in Chiang Mai in 2020.', o: ['live', 'lived', 'lives', 'liveed'], a: 1,
            clue: 'in 2020 (ปีที่ผ่านมาแล้ว)', rule: 'live ลงท้าย e → เติม -d',
            why: 'เป็นเรื่องในอดีต และ live + d = lived',
            n: ['live เป็นปัจจุบัน', '', 'lives เป็นปัจจุบันสำหรับ he/she/it', 'ลงท้าย e แล้ว เติมแค่ -d'],
            ex: 'She danced at the party.' },
          { q: 'รูปอดีตของ study คือข้อใด', o: ['studyed', 'studied', 'studed', 'studys'], a: 1,
            clue: 'study ลงท้าย พยัญชนะ (d) + y', rule: 'พยัญชนะ + y → เปลี่ยน y เป็น i แล้วเติม -ed',
            why: 'study → studied',
            n: ['ต้องเปลี่ยน y เป็น i ก่อน', '', 'ตัด y ทิ้งไม่ได้', 'studys ไม่ใช่รูปอดีต'],
            ex: 'carry → carried, cry → cried (แต่ play → played เพราะ a + y)' },
          { q: 'รูปอดีตของ stop คือข้อใด', o: ['stoped', 'stopped', 'stopt', 'stops'], a: 1,
            clue: 'stop = สระเดี่ยว o + พยัญชนะเดี่ยว p', rule: 'คำพยางค์เดียว สระเดี่ยว + พยัญชนะเดี่ยว → เพิ่มพยัญชนะท้าย + ed',
            why: 'stop → stopped (p ซ้ำสองตัว)',
            n: ['ต้องเพิ่ม p อีกตัว', '', 'stopt ไม่ใช่รูปมาตรฐาน', 'stops เป็นปัจจุบัน'],
            ex: 'plan → planned, drop → dropped' },
          { q: 'She ___ the door five minutes ago.', o: ['open', 'opened', 'opens', 'opening'], a: 1,
            clue: 'five minutes ago', rule: '... ago → Past Simple',
            why: 'ago บอกว่าเกิดขึ้นในอดีต จึงใช้ opened',
            n: ['open เป็นปัจจุบัน', '', 'opens เป็นปัจจุบัน', 'opening ต้องมี be'],
            ex: 'He called me an hour ago.' }
        ]
      },
      {
        id: 'tense-past-irr', level: 'A2', title: 'Past Simple (irregular, did)', th: 'อดีตกาล (กริยาไม่ปกติ และ did)',
        explain: 'กริยาหลายคำ <b>เปลี่ยนรูปเอง</b> ในอดีต ต้องจำ: go → went, eat → ate, see → saw, have → had, make → made, take → took, buy → bought, write → wrote<br>be ในอดีต: I/he/she/it → <b>was</b> · you/we/they → <b>were</b><br>ปฏิเสธและคำถามใช้ <b>did</b> แล้วกริยากลับเป็น <b>ช่อง 1</b>: I <b>didn\'t eat</b>. / <b>Did</b> you <b>see</b> it?',
        formula: 'บอกเล่า: S + <b>V2</b> (went, ate)<br>ปฏิเสธ: S + <b>didn\'t + V1</b><br>คำถาม: <b>Did</b> + S + <b>V1</b>?',
        examples: [
          { en: 'S:We|V:went|Pl:to the beach|T:last weekend', th: 'เราไปทะเลเมื่อสุดสัปดาห์ที่แล้ว (go → went)' },
          { en: 'S:He|aux:didn\'t|V:eat|O:breakfast', th: 'เขาไม่ได้กินอาหารเช้า (didn\'t + eat)' },
          { en: 'q:Did|S:you|V:see|O:the movie|T:yesterday?', th: 'เมื่อวานคุณได้ดูหนังไหม' }
        ],
        confuse: [
          'หลัง did/didn\'t ใช้ช่อง 1 เสมอ: didn\'t <b>go</b> ✓ · didn\'t went ✗',
          'was ใช้กับ I/he/she/it · were ใช้กับ you/we/they'
        ],
        quiz: [
          { q: 'We ___ to the beach last weekend.', o: ['go', 'went', 'goed', 'gone'], a: 1,
            clue: 'last weekend', rule: 'go เป็นกริยาไม่ปกติ อดีตคือ went',
            why: 'last weekend เป็นอดีต และ go → went',
            n: ['go เป็นปัจจุบัน', '', 'goed ไม่มีในภาษาอังกฤษ', 'gone เป็นช่อง 3 ใช้เดี่ยว ๆ ไม่ได้'],
            ex: 'She went home early.' },
          { q: 'I ___ tired last night.', o: ['was', 'were', 'am', 'be'], a: 0,
            clue: 'I + last night', rule: 'อดีตของ be: I/he/she/it → was',
            why: 'ประธาน I และเป็นอดีต → was',
            n: ['', 'were ใช้กับ you/we/they', 'am เป็นปัจจุบัน', 'be ใช้หลังประธานตรง ๆ ไม่ได้'],
            ex: 'They were at school. He was sick.' },
          { q: 'He didn\'t ___ breakfast this morning.', o: ['eat', 'ate', 'eats', 'eaten'], a: 0,
            clue: 'didn\'t', rule: 'didn\'t + V1',
            why: 'did แสดงอดีตไปแล้ว กริยาจึงกลับเป็นช่อง 1 คือ eat',
            n: ['', 'ate ซ้ำอดีตกับ didn\'t', 'eats ไม่ใช้หลัง didn\'t', 'eaten เป็นช่อง 3'],
            ex: 'I didn\'t sleep well.' },
          { q: '___ you see the movie yesterday?', o: ['Did', 'Do', 'Does', 'Were'], a: 0,
            clue: 'yesterday + see (V1)', rule: 'คำถามอดีต: Did + S + V1',
            why: 'เป็นอดีตและกริยาเป็น see จึงขึ้นต้นด้วย Did',
            n: ['', 'Do ใช้กับปัจจุบัน', 'Does ใช้กับปัจจุบัน he/she/it', 'Were ใช้กับ be ไม่ใช้กับ see'],
            ex: 'Did she call you?' },
          { q: 'They ___ a new car last month.', o: ['buyed', 'bought', 'buy', 'buys'], a: 1,
            clue: 'last month', rule: 'buy เป็นกริยาไม่ปกติ อดีตคือ bought',
            why: 'last month เป็นอดีต และ buy → bought',
            n: ['buyed ไม่มีในภาษาอังกฤษ', '', 'buy เป็นปัจจุบัน', 'buys เป็นปัจจุบัน'],
            ex: 'I bought a book. She wrote a letter.' }
        ]
      },
      {
        id: 'tense-past-cont', level: 'A2', title: 'Past Continuous', th: 'อดีตกาลกำลังทำ',
        explain: 'ใช้พูดถึง <b>สิ่งที่กำลังทำอยู่ ณ จุดหนึ่งในอดีต</b> โครงสร้าง: <b>was/were + V-ing</b><br>ใช้บ่อยเมื่อพูดว่า <b>"กำลังทำอย่างหนึ่งอยู่ แล้วมีอีกเหตุการณ์หนึ่ง (สั้นกว่า) แทรกเข้ามา"</b> — เหตุการณ์ที่ "กำลังทำอยู่" (ยาวกว่า) ใช้ Past Continuous ส่วนเหตุการณ์ที่ "แทรกเข้ามา" (สั้น จบไปแล้ว) ใช้ Past Simple',
        formula: 'S + <b>was/were</b> + V-<b>ing</b><br>Past Continuous (เหตุการณ์ยาวกว่า) + <b>while/when</b> + Past Simple (เหตุการณ์สั้นแทรกเข้ามา)',
        examples: [
          { en: 'S:I|aux:was|V:sleeping|T:at 10 pm', th: 'ฉันกำลังนอนอยู่ตอน 4 ทุ่ม' },
          { en: 'S:I|aux:was|V:cooking|T:when|S:the phone|V:rang', th: 'ฉันกำลังทำอาหารอยู่ตอนที่โทรศัพท์ดัง (ทำอาหาร = ยาวกว่า, โทรศัพท์ดัง = สั้นแทรกเข้ามา)' },
          { en: 'T:While|S:she|aux:was|V:studying,|S:her sister|V:watched|O:TV', th: 'ขณะที่เธอกำลังเรียนอยู่ น้องสาวของเธอดูทีวี' }
        ],
        confuse: [
          'สังเกตคำเชื่อม: <b>when</b> มักนำหน้าเหตุการณ์สั้น (Past Simple) ส่วน <b>while</b> มักนำหน้าเหตุการณ์ยาว (Past Continuous): "I was reading <b>when</b> she called." / "<b>While</b> I was reading, she called."',
          'ถ้าสองเหตุการณ์เกิดพร้อมกันตลอดช่วงเวลา (ไม่มีอันไหนแทรก) ใช้ Past Continuous ทั้งคู่ได้: "While I was cooking, he was cleaning."'
        ],
        quiz: [
          { q: 'I ___ dinner when the phone rang.', o: ['cook', 'cooked', 'was cooking', 'cooking'], a: 2,
            clue: 'when the phone rang = เหตุการณ์สั้นแทรกเข้ามา', rule: 'เหตุการณ์ที่กำลังทำอยู่ (ยาวกว่า) ก่อนถูกแทรก ใช้ Past Continuous',
            why: 'ฉันกำลังทำอาหารอยู่ (ยาวกว่า) แล้วโทรศัพท์ดังแทรกเข้ามา (สั้นกว่า) จึงใช้ was cooking',
            n: ['เป็นปัจจุบัน ไม่ตรงกับ rang (อดีต)', 'เหตุการณ์นี้ควรเป็นกำลังทำอยู่ ไม่ใช่จบแล้ว', '', 'ขาด was'],
            ex: 'She was walking home when it started to rain.' },
          { q: '___ you sleeping at 11 pm last night?', o: ['Do', 'Did', 'Were', 'Are'], a: 2,
            clue: 'at 11 pm last night + sleeping', rule: 'คำถาม Past Continuous ใช้ Was/Were นำหน้าประธาน',
            why: 'ถามว่ากำลังทำอะไรอยู่ ณ ช่วงเวลาหนึ่งในอดีต ใช้ Were you sleeping',
            n: ['Do ใช้กับปัจจุบัน', 'Did ต้องตามด้วยกริยาช่อง 1 ไม่ใช่ V-ing', '', 'Are ใช้กับปัจจุบัน'],
            ex: 'Were they watching a movie at 9?' },
          { q: 'เลือกคำเชื่อมที่เหมาะสม: ___ I was walking to school, it started to rain.', o: ['When', 'While', 'Because', 'So'], a: 1,
            clue: 'I was walking = เหตุการณ์ยาว', rule: 'While มักนำหน้าเหตุการณ์ที่กำลังดำเนินอยู่ (Past Continuous)',
            why: 'While นำหน้าเหตุการณ์ยาวกว่าได้เหมาะสมที่สุดในที่นี้',
            n: ['When มักนำหน้าเหตุการณ์สั้นกว่าที่แทรกเข้ามา', '', 'Because บอกเหตุผล ไม่ใช่ช่วงเวลา', 'So บอกผลลัพธ์ ไม่ใช่ช่วงเวลา'],
            ex: 'While I was walking to school, it started to rain.' },
          { q: 'ข้อใดถูกต้องที่สุด (สองเหตุการณ์ ความยาวไม่เท่ากัน)', o: ['She was cooking when the guests arrived.', 'She cooked when the guests were arriving.', 'She was cooking when the guests were arriving.', 'She cooks when the guests arrived.'], a: 0,
            clue: 'guests arrived = แทรกเข้ามาแบบสั้น', rule: 'เหตุการณ์ยาว (Past Continuous) + when + เหตุการณ์สั้น (Past Simple)',
            why: 'cooking เป็นเหตุการณ์ที่ทำอยู่นาน arrived เป็นการมาถึงที่เกิดแค่ครั้งเดียว',
            n: ['', 'สลับผิด: guests ควรเป็น Past Simple (แทรกเข้ามา)', 'ทั้งคู่เป็น Continuous ไม่เห็นว่าอันไหนแทรก', 'ผสมปัจจุบันกับอดีตผิด'],
            ex: 'He was driving when he saw the accident.' },
          { q: 'เรียงคำให้ถูก: was / studying / She / when / I / called', o: ['She was studying when I called.', 'She studying was when I called.', 'When She was studying I called.', 'She was studying I called when.'], a: 0,
            clue: 'S + was + V-ing + when + S + V-ed', rule: 'Past Continuous + when + Past Simple',
            why: 'She (S) → was studying (Past Continuous) → when I called (Past Simple แทรกเข้ามา)',
            n: ['', 'was ต้องอยู่หน้ากริยา -ing', 'when ไม่ควรอยู่ต้นประโยคในโครงสร้างนี้ (ได้แต่ต้องสลับลำดับส่วนอื่นด้วย)', 'ลำดับ when กับ I called ผิดที่'],
            ex: 'They were watching TV when I arrived.' }
        ],
        writing: [
          { prompt: 'แต่งประโยคบอกว่าคุณกำลังทำอะไรอยู่ ณ เวลาหนึ่งเมื่อวาน โดยใช้ Past Continuous', sample: 'I was watching a movie at 9 pm yesterday.',
            checklist: ['ใช้ was/were ให้ตรงกับประธาน', 'กริยาหลักอยู่ในรูป -ing', 'ระบุช่วงเวลาในอดีตให้ชัดเจน'] },
          { prompt: 'แต่งประโยคที่มี 2 เหตุการณ์: เหตุการณ์หนึ่งกำลังทำอยู่ (Past Continuous) แล้วมีอีกเหตุการณ์สั้นแทรกเข้ามา (Past Simple) โดยใช้ when หรือ while', sample: 'While I was doing my homework, my friend called me.',
            checklist: ['เหตุการณ์ที่ยาวกว่าอยู่ในรูป Past Continuous', 'เหตุการณ์ที่แทรกเข้ามาอยู่ในรูป Past Simple', 'ใช้ when หรือ while เชื่อมสองเหตุการณ์อย่างเหมาะสม'] }
        ]
      },
      {
        id: 'tense-future', level: 'A2', title: 'Future: will / be going to', th: 'อนาคตกาล',
        explain: '<b>will + V1</b> ใช้เมื่อ <b>ตัดสินใจตอนพูด</b> สัญญา หรือคาดการณ์ทั่วไป<br><b>be going to + V1</b> ใช้กับ <b>แผนที่ตั้งใจไว้แล้ว</b> หรือสิ่งที่ <b>มีหลักฐานให้เห็นตอนนี้</b> (เมฆดำ → ฝนจะตก)<br>คำบอกเวลา: tomorrow, next week, soon, in 2030<br>หลัง will ใช้ช่อง 1 เสมอ: will <b>be</b>, will <b>go</b>',
        formula: 'S + <b>will</b> + V1<br>S + <b>am/is/are going to</b> + V1<br>สัญญาณ: tomorrow, next ..., soon',
        examples: [
          { en: 'S:I|aux:will|V:call|O:you|T:tomorrow', th: 'ฉันจะโทรหาคุณพรุ่งนี้ (สัญญา)' },
          { en: 'S:It|aux:is going to|V:rain', th: 'ฝนกำลังจะตก (เห็นเมฆดำอยู่ตอนนี้)' },
          { en: 'S:We|aux:are going to|V:visit|O:Japan|T:next year', th: 'เราตั้งใจจะไปญี่ปุ่นปีหน้า (มีแผนแล้ว)' }
        ],
        confuse: [
          'will ไม่เปลี่ยนตามประธาน: He <b>will</b> go (ไม่ใช่ He wills go)',
          'be going to ต้องมี am/is/are: I <b>am</b> going to study ✓ · I going to study ✗'
        ],
        quiz: [
          { q: 'I ___ call you tomorrow.', o: ['will', 'am', 'did', 'was'], a: 0,
            clue: 'tomorrow + call (V1)', rule: 'will + V1 สำหรับอนาคต',
            why: 'tomorrow เป็นอนาคต จึงใช้ will call',
            n: ['', 'am ตามด้วย call ตรง ๆ ไม่ได้', 'did เป็นอดีต', 'was เป็นอดีต'],
            ex: 'She will help you.' },
          { q: 'She will ___ late.', o: ['be', 'is', 'being', 'was'], a: 0,
            clue: 'will + ___', rule: 'หลัง will ใช้ V1 และ V1 ของ is/am/are คือ be',
            why: 'will ต้องตามด้วย be',
            n: ['', 'is ใช้หลัง will ไม่ได้', 'being ใช้หลัง will แบบนี้ไม่ได้', 'was เป็นอดีต'],
            ex: 'It will be sunny tomorrow.' },
          { q: 'Look at those dark clouds! It ___ rain.', o: ['is going to', 'was', 'did', 'rains'], a: 0,
            clue: 'Look at those dark clouds (หลักฐานตอนนี้)', rule: 'เห็นหลักฐานตอนนี้ → be going to',
            why: 'เมฆดำเป็นหลักฐานว่าฝนจะตก จึงใช้ is going to rain',
            n: ['', 'was เป็นอดีต และตามด้วย rain ตรง ๆ ไม่ได้', 'did ใช้กับอดีต', 'rains เป็นข้อเท็จจริงทั่วไป ไม่ใช่การคาดการณ์'],
            ex: 'Be careful! You are going to fall.' },
          { q: 'We ___ to visit Japan next year. We already bought the tickets.', o: ['are going', 'will going', 'go', 'went'], a: 0,
            clue: 'already bought the tickets (มีแผนแล้ว) + to visit', rule: 'แผนที่ตั้งใจไว้ → be going to + V1',
            why: 'มีตั๋วแล้ว = แผนชัดเจน จึงใช้ are going (to visit)',
            n: ['', 'will ต้องตามด้วย V1 ไม่ใช่ going', 'go ไม่ใช่รูปอนาคต และตามด้วย to visit ไม่ได้', 'went เป็นอดีต ขัดกับ next year'],
            ex: 'I am going to study medicine.' },
          { q: 'The phone is ringing. "OK, I ___ answer it."', o: ['will', 'am', 'did', 'was'], a: 0,
            clue: 'ตัดสินใจตอนนี้', rule: 'ตัดสินใจทันทีตอนพูด → will + V1',
            why: 'ผู้พูดตัดสินใจรับโทรศัพท์ตอนที่ได้ยินเสียง จึงใช้ will answer (พูดสั้นว่า I\'ll)',
            n: ['', 'am ตามด้วย answer ตรง ๆ ไม่ได้', 'did ใช้กับอดีต', 'was เป็นอดีต'],
            ex: 'It\'s cold. I\'ll close the window.' }
        ]
      },
      {
        id: 'tense-modals1', level: 'A2', title: 'Modals: can / should / must', th: 'กริยาช่วยแสดงความหมาย: ทำได้ ควรทำ ต้องทำ',
        explain: 'Modal verbs เป็นกริยาช่วยที่เติมความหมายพิเศษให้กริยาแท้ <b>ตามด้วยกริยาช่อง 1 เสมอ ไม่เติม -s/-ed ไม่ว่าประธานจะเป็นใคร</b><br>• <b>can</b> = ทำได้ / มีความสามารถ (ปฏิเสธ: can\'t)<br>• <b>should</b> = ควรทำ (คำแนะนำ) (ปฏิเสธ: shouldn\'t)<br>• <b>must / have to</b> = ต้องทำ (จำเป็น/มีกฎ) (ปฏิเสธ mustn\'t = ห้ามทำ, don\'t have to = ไม่จำเป็นต้องทำ — <b>ความหมายต่างกันมาก</b>)',
        formula: 'S + <b>can/should/must</b> + <b>V1</b> (ไม่เติม s แม้ประธานเป็น he/she/it)',
        examples: [
          { en: 'S:She|aux:can|V:swim|M:very well', th: 'เธอว่ายน้ำได้เก่งมาก (มีความสามารถ)' },
          { en: 'S:You|aux:should|V:see|O:a doctor', th: 'คุณควรไปหาหมอ (คำแนะนำ)' },
          { en: 'S:Students|aux:must|V:wear|O:a uniform', th: 'นักเรียนต้องใส่ชุดนักเรียน (กฎ/ข้อบังคับ)' }
        ],
        confuse: [
          'หลัง modal verb ใช้กริยาช่อง 1 เสมอ แม้ประธานเป็น he/she/it: "He <b>can swim</b>." ✓ ไม่ใช่ "He can swims" หรือ "He cans swim"',
          '<b>mustn\'t</b> (ห้ามทำ) กับ <b>don\'t have to</b> (ไม่จำเป็นต้องทำ) ความหมายต่างกันคนละเรื่อง: "You mustn\'t smoke here." (ห้ามสูบ ผิดกฎ) ≠ "You don\'t have to come." (มาหรือไม่มาก็ได้ ไม่บังคับ)'
        ],
        quiz: [
          { q: 'She ___ speak three languages.', o: ['can', 'cans', 'canning', 'is can'], a: 0,
            clue: 'She (he/she/it) + modal', rule: 'Modal verb ไม่เติม -s แม้ประธานเป็น she',
            why: 'can ไม่เปลี่ยนรูปตามประธาน',
            n: ['', 'modal verb ไม่เติม s', 'ไม่มีรูปนี้', 'can ไม่ใช้กับ be'],
            ex: 'He can play the guitar.' },
          { q: 'You look tired. You ___ get some rest.', o: ['should', 'shoulds', 'must to', 'can to'], a: 0,
            clue: 'ให้คำแนะนำ', rule: 'should = ให้คำแนะนำ ตามด้วย V1',
            why: 'เป็นคำแนะนำที่ดีต่อผู้ฟัง จึงใช้ should',
            n: ['', 'modal ไม่เติม s', 'must ตามด้วย V1 ตรง ๆ ไม่มี to', 'can ตามด้วย V1 ตรง ๆ ไม่มี to'],
            ex: 'You should drink more water.' },
          { q: 'This is a hospital. You ___ smoke here. (ห้ามเด็ดขาด)', o: ['don\'t have to', 'mustn\'t', 'shouldn\'t always', 'can'], a: 1,
            clue: 'ห้ามเด็ดขาด ไม่ใช่แค่ไม่จำเป็น', rule: 'mustn\'t = ห้ามทำ (ผิดกฎ) ต่างจาก don\'t have to = ไม่จำเป็นต้องทำ',
            why: 'โรงพยาบาลห้ามสูบบุหรี่โดยกฎ จึงใช้ mustn\'t ไม่ใช่แค่ "ไม่จำเป็น"',
            n: ['หมายความว่าไม่จำเป็นต้องทำ ไม่ใช่ห้าม ความหมายผิด', '', 'shouldn\'t เบากว่านี้ (แค่คำแนะนำ ไม่ใช่ข้อห้ามเด็ดขาด)', 'can หมายความว่าทำได้ ตรงข้ามกับที่ต้องการ'],
            ex: 'You mustn\'t park here. (ห้ามจอด)' },
          { q: 'Students ___ (จำเป็นต้อง) wear a uniform at this school.', o: ['can', 'should', 'must', 'may'], a: 2,
            clue: 'จำเป็นต้อง = มีกฎบังคับ', rule: 'must = ต้องทำ (จำเป็น/มีกฎ) หนักแน่นกว่า should',
            why: 'เป็นกฎของโรงเรียน (บังคับ) จึงใช้ must ไม่ใช่แค่คำแนะนำอย่าง should',
            n: ['can หมายถึงความสามารถ ไม่ใช่ข้อบังคับ', 'should เป็นแค่คำแนะนำ เบากว่าข้อบังคับ', '', 'may หมายถึงอาจจะ/ขออนุญาต ไม่ใช่ข้อบังคับ'],
            ex: 'Drivers must wear a seatbelt.' },
          { q: 'เรียงคำให้ถูก: help / you / I / can', o: ['I can help you.', 'I help can you.', 'Can I you help.', 'I can you help.'], a: 0,
            clue: 'S + modal + V1 + O', rule: 'S + can/should/must + V1 (+O)',
            why: 'I (S) → can (modal) → help (V1) → you (O)',
            n: ['', 'modal ต้องอยู่หน้ากริยาแท้', 'รูปนี้เป็นคำถาม ไม่ใช่บอกเล่า', 'กรรมต้องอยู่หลังกริยา ไม่ใช่หลัง modal'],
            ex: 'You must finish this today.' }
        ],
        writing: [
          { prompt: 'แต่งประโยคให้คำแนะนำเพื่อนโดยใช้ "should"', sample: 'You should sleep earlier.',
            checklist: ['ใช้ should ตามด้วยกริยาช่อง 1', 'เนื้อหาเป็นคำแนะนำที่สมเหตุสมผล', 'ไม่เติม -s หลัง should'] },
          { prompt: 'แต่งประโยค 1 คู่ เทียบ "mustn\'t" (ห้ามทำ) กับ "don\'t have to" (ไม่จำเป็นต้องทำ)', sample: "You mustn't be late for the exam, but you don't have to arrive very early.",
            checklist: ["ประโยคแรกใช้ mustn't แปลว่าห้ามทำ", "ประโยคสองใช้ don't have to แปลว่าไม่จำเป็นต้องทำ", 'ความหมายทั้งสองประโยคต่างกันชัดเจน ไม่ใช่ความหมายเดียวกัน'] }
        ]
      },
      {
        id: 'tense-perfect1', level: 'A2', title: 'Present Perfect (introduction)', th: 'ปัจจุบันสมบูรณ์ (เบื้องต้น)',
        explain: 'ใช้พูดถึง <b>ประสบการณ์ในชีวิต</b> (เคยทำไหม) โดย<b>ไม่สนใจว่าเกิดขึ้นเมื่อไรที่แน่นอน</b> — ถ้าอยากรู้ว่า "เคยไหม" ใช้โครงสร้างนี้ ถ้าอยากบอกว่า "เกิดขึ้นเมื่อไร" ให้ใช้ Past Simple แทน (บทที่เทียบสองกาลนี้แบบละเอียดจะเรียนในระดับ B1)<br>โครงสร้าง: <b>have/has + V3 (กริยาช่อง 3)</b>',
        formula: 'I/You/We/They + <b>have</b> + V3<br>He/She/It + <b>has</b> + V3<br>คำที่ใช้บ่อย: ever, never, already, just',
        examples: [
          { en: 'q:Have|S:you|M:ever|V:visited|O:Japan?', th: 'คุณเคยไปญี่ปุ่นไหม (ไม่สนว่าเมื่อไร)' },
          { en: 'S:I|aux:have|neg:never|V:eaten|O:durian', th: 'ฉันไม่เคยกินทุเรียนเลย' },
          { en: 'S:She|aux:has|M:already|V:finished|O:her homework', th: 'เธอทำการบ้านเสร็จแล้ว' }
        ],
        confuse: [
          'Present Perfect ไม่บอกเวลาที่แน่นอน ถ้าอยากบอกว่า "เมื่อไร" ต้องเปลี่ยนไปใช้ Past Simple: "I <b>have visited</b> Japan." (เคย ไม่บอกเมื่อไร) แต่ "I <b>visited</b> Japan <b>last year</b>." (บอกเมื่อไรชัดเจน) — <b>ห้ามใช้คำบอกเวลาที่แน่นอนอย่าง yesterday/last year กับ Present Perfect</b>',
          'กริยาช่อง 3 ของกริยาไม่ปกติต้องจำเพิ่มจากช่อง 2: go → gone (ไม่ใช่ went), eat → eaten, see → seen, do → done'
        ],
        quiz: [
          { q: 'Have you ever ___ to Japan?', o: ['go', 'went', 'been', 'going'], a: 2,
            clue: 'Have you ever + กริยาช่อง 3', rule: 'Present Perfect ใช้ have/has + V3',
            why: 'go ช่อง 3 คือ been (สำหรับพูดถึงการไปแล้วกลับมา) ตามหลัง have',
            n: ['ต้องเป็นช่อง 3 ไม่ใช่ช่อง 1', 'went เป็นช่อง 2 ใช้กับ Past Simple ไม่ใช้กับ have', '', 'ต้องเป็นช่อง 3 ไม่ใช่ -ing'],
            ex: 'I have been to Korea twice.' },
          { q: 'I ___ never ___ durian.', o: ['have / eaten', 'has / eaten', 'have / ate', 'did / eat'], a: 0,
            clue: 'I + never + กริยาช่อง 3', rule: 'I/you/we/they ใช้ have + V3',
            why: 'ประธาน I ใช้ have และ eat ช่อง 3 คือ eaten',
            n: ['', 'I ใช้ have ไม่ใช่ has', 'ต้องใช้ V3 (eaten) ไม่ใช่ V2 (ate)', 'โครงสร้างนี้ไม่ใช่ Present Perfect'],
            ex: 'They have never seen snow.' },
          { q: 'ข้อใดผิด (ใช้ Present Perfect กับคำบอกเวลาที่แน่นอนไม่ได้)', o: ['I have visited Japan.', 'I have visited Japan yesterday.', 'I have already visited Japan.', 'Have you ever visited Japan?'], a: 1,
            clue: 'yesterday = เวลาที่แน่นอน', rule: 'ห้ามใช้ yesterday, last year, in 2020 กับ Present Perfect',
            why: 'yesterday บอกเวลาที่แน่นอน ต้องใช้ Past Simple: "I visited Japan yesterday." ไม่ใช่ Present Perfect',
            n: ['ประโยคนี้ถูก ไม่มีคำบอกเวลาที่แน่นอน', '', 'already ใช้กับ Present Perfect ได้ตามปกติ', 'ever ใช้กับ Present Perfect ได้ตามปกติ'],
            ex: 'I visited Japan last year. (ไม่ใช่ have visited)' },
          { q: 'She ___ already ___ her homework.', o: ['have / finish', 'has / finished', 'has / finish', 'have / finished'], a: 1,
            clue: 'She (he/she/it)', rule: 'he/she/it ใช้ has + V3',
            why: 'She ใช้ has และ finish ช่อง 3 คือ finished',
            n: ['She ใช้ has ไม่ใช่ have', '', 'ต้องเป็น V3 (finished) ไม่ใช่ V1', 'She ใช้ has ไม่ใช่ have'],
            ex: 'He has already left.' },
          { q: 'เรียงคำให้ถูก: seen / that / have / I / movie', o: ['I have seen that movie.', 'I seen have that movie.', 'Have I seen that movie.', 'I have that movie seen.'], a: 0,
            clue: 'S + have + V3 + O', rule: 'S + have/has + V3 (+O)',
            why: 'I (S) → have (aux) → seen (V3) → that movie (O)',
            n: ['', 'have ต้องอยู่หน้า V3', 'รูปนี้เป็นคำถาม ไม่ใช่บอกเล่า', 'กรรมต้องอยู่หลังกริยาช่อง 3'],
            ex: 'We have finished the project.' }
        ],
        writing: [
          { prompt: 'แต่งประโยคถามว่าเพื่อนคุณ "เคย" ทำอะไรมาก่อนไหม โดยใช้ Have you ever...?', sample: 'Have you ever tried Korean food?',
            checklist: ['ขึ้นต้นด้วย Have you ever', 'กริยาหลักอยู่ในรูปช่อง 3', 'ไม่มีคำบอกเวลาที่แน่นอน เช่น yesterday/last year'] },
          { prompt: 'แต่งประโยคบอกประสบการณ์ของตัวเองโดยใช้ I have never... (ไม่เคย)', sample: 'I have never seen snow in real life.',
            checklist: ["ใช้ have (ไม่ใช่ has เพราะประธานคือ I)", 'มี never อยู่ระหว่าง have กับกริยาช่อง 3', 'กริยาหลักอยู่ในรูปช่อง 3 ไม่ใช่ช่อง 2'] }
        ]
      },
      {
        id: 'tense-perfect2', level: 'B1', title: 'Present Perfect vs Past Simple', th: 'ปัจจุบันสมบูรณ์ vs อดีตกาล',
        explain: 'ทั้งสองกาลพูดถึงเรื่องที่เกิดในอดีต แต่<b>โฟกัสต่างกัน</b>:<br>• <b>Past Simple</b> = เกิดขึ้น<b>และจบไปแล้ว</b> ณ เวลาที่<b>ระบุชัดเจน</b> โฟกัสที่ "เมื่อไร"<br>• <b>Present Perfect</b> = โฟกัสที่ <b>ผลตอนนี้</b> หรือ <b>ประสบการณ์สะสม</b> ไม่สนว่าเมื่อไร<br>กฎสำคัญ: ถ้าประโยคมีคำบอกเวลาที่แน่นอน (yesterday, in 2020, last week) <b>ต้องใช้ Past Simple เท่านั้น</b> ห้ามใช้ Present Perfect เด็ดขาด',
        formula: 'มีเวลาที่แน่นอน (yesterday, in 2020) → <b>Past Simple</b><br>ไม่บอกเวลา/เน้นผลตอนนี้/ประสบการณ์ (ever, never, already, yet, since, for) → <b>Present Perfect</b>',
        examples: [
          { en: 'S:I|V:lost|O:my keys|T:yesterday', th: 'ฉันทำกุญแจหาย เมื่อวานนี้ (บอกเวลาแน่นอน → Past Simple)' },
          { en: 'S:I|aux:have|V:lost|O:my keys', th: 'ฉันทำกุญแจหาย (ไม่บอกว่าเมื่อไร เน้นผล: ตอนนี้ไม่มีกุญแจ → Present Perfect)' },
          { en: 'S:She|aux:has|V:lived|Pl:in Bangkok|T:for five years', th: 'เธออาศัยอยู่ในกรุงเทพฯ มา 5 ปีแล้ว (ยังอยู่ต่อเนื่องถึงตอนนี้ → Present Perfect + for)' }
        ],
        confuse: [
          '"for" กับ "since" ต่างกัน: <b>for</b> + ช่วงเวลา (for five years, for two hours) · <b>since</b> + จุดเริ่มต้น (since 2019, since Monday) — ทั้งคู่ใช้กับ Present Perfect เมื่อเรื่องยังดำเนินต่อถึงตอนนี้',
          'ผู้เรียนไทยมักพูด "I have lost my keys yesterday." ผสมสองกาลผิด — มี yesterday (เวลาแน่นอน) ต้องใช้ Past Simple ล้วน: "I lost my keys yesterday."'
        ],
        quiz: [
          { q: 'I ___ my homework yesterday.', o: ['have finished', 'finished', 'has finished', 'finish'], a: 1,
            clue: 'yesterday = เวลาแน่นอน', rule: 'มีเวลาที่แน่นอน → Past Simple เท่านั้น',
            why: 'yesterday บอกเวลาชัดเจน ห้ามใช้ Present Perfect',
            n: ['มี yesterday ห้ามใช้ Present Perfect', '', 'มี yesterday ห้ามใช้ Present Perfect และประธาน I ไม่ใช้ has', 'finish ต้องผันตามกาล ไม่ใช่ปล่อยเป็น V1'],
            ex: 'She called me last night.' },
          { q: 'A: Where is your phone? B: I ___ it. I don\'t know where it is now.', o: ['lost', 'have lost', 'was losing', 'lose'], a: 1,
            clue: 'ไม่บอกเวลา + เน้นผลตอนนี้ (ไม่มีโทรศัพท์)', rule: 'ไม่บอกเวลา + เน้นผลปัจจุบัน → Present Perfect',
            why: 'ไม่มีคำบอกเวลา และประโยคเน้นผลตอนนี้ (ไม่รู้ว่าโทรศัพท์อยู่ไหน) จึงใช้ have lost',
            n: ['ไม่ผิดหลักแต่ไม่เน้นผลตอนนี้เท่า Present Perfect ในบริบทนี้', '', 'was losing สื่อว่ากำลังทำอยู่ ไม่ตรงกับสถานการณ์', 'lose ต้องผันกาล'],
            ex: "I can't find my wallet. I think I have lost it." },
          { q: 'She has lived here ___ 2019.', o: ['for', 'since', 'in', 'at'], a: 1,
            clue: '2019 = จุดเริ่มต้น (ปี)', rule: 'since + จุดเริ่มต้น',
            why: '2019 เป็นจุดเริ่มต้นของการอาศัยอยู่ จึงใช้ since',
            n: ['for ใช้กับช่วงเวลา เช่น for 5 years ไม่ใช่ปีที่ระบุแบบนี้', '', 'in ไม่ใช้ในโครงสร้างนี้', 'at ไม่ใช้กับปี'],
            ex: 'I have known him since 2015.' },
          { q: 'ข้อใดผิด (ผสมสองกาลผิด)', o: ['I visited Paris last year.', 'I have visited Paris.', 'I have visited Paris yesterday.', 'I have never visited Paris.'], a: 2,
            clue: 'yesterday + have visited', rule: 'ห้ามใช้ yesterday กับ Present Perfect',
            why: '"have visited" (Present Perfect) ใช้ร่วมกับ "yesterday" (เวลาแน่นอน) ไม่ได้',
            n: ['ถูกต้อง: เวลาแน่นอน + Past Simple', 'ถูกต้อง: ไม่บอกเวลา + Present Perfect', '', 'ถูกต้อง: never ใช้กับ Present Perfect ได้'],
            ex: 'I visited Paris yesterday. (ไม่ใช่ have visited)' },
          { q: 'เรียงคำให้ถูก: for / has / She / ten years / taught / English', o: ['She has taught English for ten years.', 'She taught has English for ten years.', 'She has taught English since ten years.', 'She has English taught for ten years.'], a: 0,
            clue: 'for + ช่วงเวลา + Present Perfect ต่อเนื่อง', rule: 'S + has/have + V3 + O + for + ช่วงเวลา',
            why: 'She (S) → has taught (Present Perfect) → English (O) → for ten years (ช่วงเวลา)',
            n: ['', 'has ต้องอยู่หน้า V3 ไม่ใช่หลัง', 'ten years เป็นช่วงเวลา ต้องใช้ for ไม่ใช่ since', 'กรรมต้องอยู่หลังกริยาทั้งหมด ไม่ใช่แทรกกลาง'],
            ex: 'He has worked here for three years.' }
        ],
        writing: [
          { prompt: 'แต่งประโยค 1 คู่ เทียบ Past Simple (บอกเวลาแน่นอน) กับ Present Perfect (ไม่บอกเวลา) ของเหตุการณ์เดียวกัน', sample: 'I watched that movie last week. I have watched that movie three times.',
            checklist: ['ประโยคแรกมีคำบอกเวลาแน่นอนและใช้ Past Simple', 'ประโยคสองไม่มีคำบอกเวลาแน่นอนและใช้ Present Perfect', 'ทั้งสองประโยคพูดถึงกิจกรรมเดียวกัน'] },
          { prompt: 'แต่งประโยคบอกว่าคุณทำอะไรมานานแค่ไหนแล้ว (ต่อเนื่องถึงตอนนี้) โดยใช้ for หรือ since', sample: 'I have studied English for six years.',
            checklist: ['ใช้ have/has + กริยาช่อง 3', 'เลือก for (ช่วงเวลา) หรือ since (จุดเริ่มต้น) ให้ถูกต้อง', 'เหตุการณ์ยังดำเนินต่อเนื่องถึงตอนนี้'] }
        ]
      },
      {
        id: 'tense-reported', level: 'B1', title: 'Reported Speech (statements)', th: 'การรายงานคำพูด (ประโยคบอกเล่า)',
        explain: 'เมื่อเล่าสิ่งที่คนอื่นพูดโดยไม่พูดคำต่อคำ (ไม่มีเครื่องหมายคำพูด) กริยาต้อง <b>ถอยหลังไปหนึ่งขั้น (backshift)</b> เพราะเวลาผ่านไปแล้วตั้งแต่ตอนที่พูด:<br>• Present Simple → Past Simple<br>• Present Continuous → Past Continuous<br>• Past Simple → Past Perfect<br>• will → would · can → could<br>สรรพนามและคำบอกเวลาก็ต้องปรับ: I → he/she, tomorrow → the next day, today → that day',
        formula: 'S + said (that) + S + V<b>ถอยหลังหนึ่งขั้น</b> + ...<br>"I am tired," she said. → She said (that) she <b>was</b> tired.',
        examples: [
          { en: 'x:"I|x:am|x:tired,"|S:she|V:said', th: '"ฉันเหนื่อย" เธอพูด' },
          { en: 'S:She|V:said|R:that|S:she|aux:was|C:tired', th: 'เธอบอกว่าเธอเหนื่อย (am → was ถอยหลังหนึ่งขั้น)' },
          { en: 'S:He|V:said|R:that|S:he|aux:would|V:call|M:the next day', th: 'เขาบอกว่าเขาจะโทรมาวันถัดไป (will → would, tomorrow → the next day)' }
        ],
        confuse: [
          'ถ้าสิ่งที่พูดเป็น<b>ความจริงที่ไม่เปลี่ยนแปลง</b> (ข้อเท็จจริงทางวิทยาศาสตร์ กฎทั่วไป) ไม่จำเป็นต้อง backshift ก็ได้: "The sun rises in the east," he said. → He said that the sun <b>rises</b> in the east. (คงปัจจุบันได้)',
          'คำบอกเวลา/สถานที่ต้องปรับด้วย ไม่ใช่แค่กริยา: this → that, here → there, tomorrow → the next day, yesterday → the day before'
        ],
        quiz: [
          { q: '"I am busy," she said. → She said that she ___ busy.', o: ['is', 'was', 'has been', 'be'], a: 1,
            clue: 'am → backshift หนึ่งขั้น', rule: 'Present Simple (am/is/are) → Past Simple (was/were)',
            why: 'am ถอยหลังหนึ่งขั้นเป็น was',
            n: ['ไม่ถอยหลัง ยังเป็นปัจจุบันอยู่', '', 'ถอยหลังมากเกินไป (สองขั้น)', 'ไม่ใช่รูปกริยาที่ถูกต้อง'],
            ex: '"I am ready," he said. → He said he was ready.' },
          { q: '"I will call you," he said. → He said that he ___ call me.', o: ['will', 'would', 'can', 'shall'], a: 1,
            clue: 'will → backshift', rule: 'will → would',
            why: 'will ถอยหลังหนึ่งขั้นเป็น would',
            n: ['ไม่ถอยหลัง', '', 'can เป็นกริยาช่วยคนละความหมาย', 'shall ไม่ใช่รูปถอยหลังของ will'],
            ex: '"I will help you," she said. → She said she would help me.' },
          { q: '"I work here," she said yesterday. → She said that she ___ there.', o: ['works', 'worked', 'has worked', 'work'], a: 1,
            clue: 'work (ปัจจุบัน) → backshift', rule: 'Present Simple → Past Simple',
            why: 'work ถอยหลังหนึ่งขั้นเป็น worked และ here → there (เปลี่ยนสถานที่ตามบริบทของผู้เล่า)',
            n: ['ไม่ถอยหลัง', '', 'ถอยหลังมากเกินไป', 'ไม่ผันกาลเลย'],
            ex: '"I live here," he said. → He said he lived there.' },
          { q: '"The Earth goes around the sun," the teacher said. ข้อใดถูกต้องที่สุด', o: ['The teacher said that the Earth went around the sun.', 'The teacher said that the Earth goes around the sun.', 'The teacher said that the Earth is going around the sun.', 'The teacher said the Earth will go around the sun.'], a: 1,
            clue: 'ข้อเท็จจริงทางวิทยาศาสตร์ที่ไม่เปลี่ยนแปลง', rule: 'ความจริงที่ไม่เปลี่ยนแปลง ไม่จำเป็นต้อง backshift',
            why: 'นี่คือข้อเท็จจริงทางวิทยาศาสตร์ที่ยังเป็นจริงเสมอ จึงคงรูปปัจจุบัน goes ได้',
            n: ['ถอยหลังโดยไม่จำเป็น (แต่ก็ไม่ผิดกฎเสมอไป — ข้อนี้ดีที่สุดเพราะสื่อว่ายังเป็นจริง)', '', 'ผิดรูป ไม่ใช่ backshift ปกติของ goes', 'will ไม่เหมาะกับข้อเท็จจริงถาวรแบบนี้'],
            ex: 'She said that water boils at 100°C.' },
          { q: 'เรียงคำให้ถูก: that / said / tired / was / he / he', o: ['He said that he was tired.', 'He said he that was tired.', 'He was said that he tired.', 'He said that tired he was.'], a: 0,
            clue: 'S + said + (that) + S + V(ถอยหลัง)', rule: 'S + said + (that) + S + V',
            why: 'He (S) → said (V) → that he was tired (สิ่งที่พูด ถอยหลังหนึ่งขั้น)',
            n: ['', 'that ต้องอยู่หน้ากลุ่มประโยคที่รายงาน', 'was ต้องอยู่หลัง he ตัวที่สอง ไม่ใช่หน้า said', 'ลำดับคำในส่วนที่รายงานผิด'],
            ex: 'She said that she was happy.' }
        ],
        writing: [
          { prompt: 'แต่งประโยคบอกเล่าตรง ๆ (direct speech) 1 ประโยค แล้วเปลี่ยนเป็น reported speech', sample: '"I am hungry," Tom said. → Tom said that he was hungry.',
            checklist: ['ประโยคตรงใช้เครื่องหมายคำพูด', 'ประโยครายงานถอยหลังกริยาหนึ่งขั้นถูกต้อง', 'สรรพนามเปลี่ยนให้สมเหตุสมผล (I → he/she)'] },
          { prompt: 'แต่งประโยครายงานคำพูดที่มี will เปลี่ยนเป็น would', sample: '"I will finish it tomorrow," she said. → She said that she would finish it the next day.',
            checklist: ['will เปลี่ยนเป็น would', 'tomorrow เปลี่ยนเป็น the next day (ปรับคำบอกเวลา)', 'สรรพนามสอดคล้องกับบริบท'] }
        ]
      },
      {
        id: 'tense-signals', level: 'B1', title: 'Time words & choosing a tense', th: 'คำบอกเวลาและการเลือกกาล',
        explain: 'ก่อนเลือกรูปกริยา ให้ <b>หาคำบอกเวลาในประโยคก่อน</b><br>• ปัจจุบัน (นิสัย/ข้อเท็จจริง): every day, usually, often, always, now (บางกรณี)<br>• อดีต: yesterday, last ..., ... ago, in 1990, when I was young<br>• อนาคต: tomorrow, next ..., soon, in 2030<br>คำบอกเวลาอาจอยู่ <b>ต้นประโยค</b> หรือ <b>ท้ายประโยค</b> ก็ได้',
        formula: 'every / usually → <b>V1(s)</b><br>yesterday / last / ago → <b>V2</b><br>tomorrow / next / soon → <b>will + V1</b>',
        examples: [
          { en: 'T:Every morning,|S:Nam|V:drinks|O:coffee', th: 'ทุกเช้า นามดื่มกาแฟ' },
          { en: 'T:Last year,|S:the company|V:hired|O:50 workers', th: 'ปีที่แล้ว บริษัทจ้างคนงาน 50 คน' },
          { en: 'T:Next month,|S:the city|aux:will|V:open|O:a new park', th: 'เดือนหน้า เมืองจะเปิดสวนสาธารณะแห่งใหม่' }
        ],
        confuse: [
          'คำบอกเวลาที่อยู่ต้นประโยคก็ใช้ได้เหมือนท้ายประโยค อย่ามองข้าม',
          'ปีที่ผ่านมาแล้ว (in 1969) ใช้อดีต · ปีที่ยังไม่ถึง (in 2040) ใช้อนาคต'
        ],
        quiz: [
          { q: 'Every morning, Nam ___ coffee.', o: ['drinks', 'drank', 'will drink', 'drinking'], a: 0,
            clue: 'Every morning + Nam (เอกพจน์)', rule: 'every → Present Simple, he/she + s',
            why: 'เป็นกิจวัตร และ Nam เป็นคนเดียว → drinks',
            n: ['', 'drank เป็นอดีต ไม่เข้ากับ every morning ในประโยคนี้', 'will drink เป็นอนาคต', 'drinking ต้องมี be'],
            ex: 'Every Friday, we eat out.' },
          { q: 'Last year, the company ___ 50 workers.', o: ['hires', 'hired', 'will hire', 'hire'], a: 1,
            clue: 'Last year', rule: 'last ... → Past Simple',
            why: 'Last year เป็นอดีต จึงใช้ hired',
            n: ['hires เป็นปัจจุบัน', '', 'will hire เป็นอนาคต', 'hire เป็นปัจจุบันและไม่ตรงกับประธานเอกพจน์'],
            ex: 'Last night, I finished the book.' },
          { q: 'Next month, the city ___ a new park.', o: ['will open', 'opened', 'open', 'opening'], a: 0,
            clue: 'Next month', rule: 'next ... → will + V1',
            why: 'เป็นอนาคต จึงใช้ will open',
            n: ['', 'opened เป็นอดีต', 'open ไม่ตรงกับประธานเอกพจน์ the city', 'opening ต้องมี be'],
            ex: 'Next week, I will start a new job.' },
          { q: 'คำบอกเวลาใดใช้กับ Past Simple', o: ['ago', 'tomorrow', 'usually', 'next week'], a: 0,
            clue: 'หาคำที่หมายถึงอดีต', rule: '... ago = ... ที่แล้ว → อดีต',
            why: 'ago หมายถึงช่วงเวลาที่ผ่านไปแล้ว',
            n: ['', 'tomorrow เป็นอนาคต', 'usually บอกความเป็นประจำ (ปัจจุบัน)', 'next week เป็นอนาคต'],
            ex: 'three years ago, a moment ago' },
          { q: 'In 1969, astronauts ___ on the Moon.', o: ['land', 'landed', 'will land', 'lands'], a: 1,
            clue: 'In 1969 (ปีที่ผ่านมาแล้ว)', rule: 'ปีในอดีต → Past Simple',
            why: 'ค.ศ. 1969 ผ่านมาแล้ว จึงใช้ landed',
            n: ['land เป็นปัจจุบัน', '', 'will land เป็นอนาคต', 'lands เป็นปัจจุบัน'],
            ex: 'In 1932, Thailand changed its system of government.' }
        ]
      },
      {
        id: 'tense-modals2', level: 'B2', title: 'Modals of Deduction', th: 'กริยาช่วยแสดงการคาดเดา',
        explain: 'ใช้ modal verb เพื่อ<b>คาดเดา</b>ว่าอะไรน่าจะจริงจากหลักฐานที่มี ไม่ใช่บอกข้อเท็จจริง 100%<br>• <b>must</b> = มั่นใจมากว่าจริง (หลักฐานชัดเจน)<br>• <b>might / may / could</b> = อาจจะจริง (ไม่แน่ใจ)<br>• <b>can\'t</b> = มั่นใจมากว่าไม่จริง (ตรงข้ามกับ must)<br>สำหรับ<b>เหตุการณ์ในอดีต</b> ใช้ <b>modal + have + V3</b>: must have been, might have left, can\'t have known',
        formula: 'คาดเดาปัจจุบัน: S + <b>must/might/can\'t</b> + be/V1<br>คาดเดาอดีต: S + <b>must/might/can\'t have</b> + V3',
        examples: [
          { en: 'S:The lights|V:are|C:off. She|aux:must|V:be|C:asleep', th: 'ไฟดับหมด เธอต้องหลับแน่ ๆ (หลักฐานชัดเจน)' },
          { en: 'S:He|aux:might|V:be|Pl:at work', th: 'เขาอาจจะอยู่ที่ทำงาน (ไม่แน่ใจ)' },
          { en: 'S:She|aux:can\'t|aux:have|V:left|R:already', th: 'เธอคงยังไม่ออกไปหรอก (มั่นใจว่าไม่จริง — เร็วเกินไป)' }
        ],
        confuse: [
          '<b>can\'t</b> ในความหมายคาดเดา ≠ "ไม่สามารถ" ปกติ — "She can\'t be at home." แปลว่า "เธอต้องไม่ได้อยู่บ้านแน่ ๆ" (คาดเดา) ไม่ใช่ "เธอไม่สามารถอยู่บ้านได้" (ความสามารถ)',
          'คาดเดาเหตุการณ์ในอดีตต้องมี <b>have</b>: "He must have forgotten." ✓ ไม่ใช่ "He must forgot." ✗'
        ],
        quiz: [
          { q: 'The ground is wet. It ___ rained last night.', o: ['can', 'must have', 'should', 'will'], a: 1,
            clue: 'พื้นเปียก = หลักฐานชัดเจนว่าฝนตก (อดีต)', rule: 'หลักฐานชัดเจน + อดีต → must have + V3',
            why: 'พื้นเปียกเป็นหลักฐานที่ชัดเจนมากว่าฝนตกเมื่อคืน จึงใช้ must have rained',
            n: ['can ไม่ใช้คาดเดาแบบนี้', '', 'should สื่อคำแนะนำ ไม่ใช่คาดเดา', 'will เป็นอนาคต ไม่ใช่คาดเดาอดีต'],
            ex: 'The floor is broken. Someone must have dropped something heavy.' },
          { q: 'I\'m not sure where he is. He ___ be at the gym.', o: ['must', 'might', 'can\'t', 'shouldn\'t'], a: 1,
            clue: 'ไม่แน่ใจ (I\'m not sure)', rule: 'ไม่แน่ใจ/เป็นไปได้ → might/may/could',
            why: 'ผู้พูดไม่แน่ใจ จึงใช้ might ซึ่งสื่อความเป็นไปได้ ไม่ใช่ความมั่นใจ',
            n: ['must สื่อว่ามั่นใจมาก ขัดกับ "not sure"', '', 'can\'t สื่อว่ามั่นใจว่าไม่จริง ขัดกับบริบท', 'shouldn\'t เป็นคำแนะนำ ไม่ใช่คาดเดา'],
            ex: 'She might be stuck in traffic.' },
          { q: 'He just ate a huge lunch. He ___ be hungry now.', o: ['must', 'might', 'can\'t', 'could'], a: 2,
            clue: 'เพิ่งกินอิ่มมา = หลักฐานว่าไม่น่าจะหิว', rule: 'มั่นใจว่าไม่จริง → can\'t',
            why: 'เพิ่งกินอาหารมื้อใหญ่มา จึงมั่นใจว่าไม่น่าจะหิวตอนนี้ ใช้ can\'t',
            n: ['must สื่อว่ามั่นใจว่าจริง ตรงข้ามกับที่ควรเป็น', 'might ไม่มั่นใจพอ ขัดกับหลักฐานชัดเจนนี้', '', 'could ไม่มั่นใจพอเช่นกัน'],
            ex: 'He just woke up. He can\'t be tired already.' },
          { q: 'ข้อใดถูกต้อง (คาดเดาเหตุการณ์ในอดีต)', o: ['She must forgot her keys.', 'She must have forgotten her keys.', 'She must forgetting her keys.', 'She must to forget her keys.'], a: 1,
            clue: 'คาดเดาอดีต ต้องมี have', rule: 'modal + have + V3 สำหรับคาดเดาอดีต',
            why: 'ต้องมี have ตามด้วยกริยาช่อง 3 (forgotten) เมื่อคาดเดาเหตุการณ์ในอดีต',
            n: ['ขาด have และ forgot ไม่ใช่ V3', '', 'ขาด have และรูปผิด', 'ไม่มีโครงสร้าง must to'],
            ex: 'They must have left early.' },
          { q: 'เรียงคำให้ถูก: have / She / left / must / already', o: ['She must have already left.', 'She have must left already.', 'She must already have left.', 'She left must have already.'], a: 0,
            clue: 'S + must + have + V3 + already', rule: 'S + must + have + V3 (+M)',
            why: 'She (S) → must have (คาดเดาอดีต) → left (V3) → already (ส่วนขยาย)',
            n: ['', 'must ต้องอยู่หน้า have', 'already วางตรงนี้ทำให้แปลกในบริบทนี้ (ตัวเลือก 0 เป็นธรรมชาติกว่า)', 'ลำดับผิดทั้งหมด'],
            ex: 'He must have already gone home.' }
        ],
        writing: [
          { prompt: 'แต่งประโยคคาดเดาสถานการณ์ปัจจุบันจากหลักฐานที่เห็น โดยใช้ must/might/can\'t', sample: "The car isn't in the driveway. She must be out.",
            checklist: ['เลือก must/might/can\'t ให้สอดคล้องกับความมั่นใจ', 'มีหลักฐานหรือบริบทที่ทำให้การคาดเดานั้นสมเหตุสมผล', 'ใช้ V1/be หลัง modal (คาดเดาปัจจุบัน)'] },
          { prompt: 'แต่งประโยคคาดเดาเหตุการณ์ในอดีตโดยใช้ must have / might have / can\'t have + กริยาช่อง 3', sample: "The lights are off. They can't have come home yet.",
            checklist: ['มี have ตามด้วยกริยาช่อง 3', 'เลือก must/might/can\'t ให้สอดคล้องกับความมั่นใจ', 'ประโยคสมเหตุสมผลกับสถานการณ์ที่ตั้งไว้'] }
        ]
      },
      {
        id: 'tense-shift', level: 'B2', title: 'Tense shifts in a paragraph', th: 'การสลับกาลเมื่ออ่านหลายประโยค',
        explain: 'บทอ่าน GED มักเล่า <b>อดีต → ปัจจุบัน → อนาคต</b> ในย่อหน้าเดียว รูปกริยาบอกว่าแต่ละประโยคเป็น <b>ประวัติ</b> (V2) <b>สภาพตอนนี้/ข้อเท็จจริง</b> (V1) หรือ <b>แผน/การคาดการณ์</b> (will)<br>ข้อเท็จจริงที่เป็นจริงเสมอ <b>ใช้ Present Simple แม้อยู่ในเรื่องเล่าอดีต</b> เช่น Galileo believed that the Earth <b>moves</b> around the Sun.',
        formula: 'อดีต (V2) → ตอนนี้ (V1) → อนาคต (will + V1)<br>In the past ... <b>lived</b> · Now ... <b>live</b> · In the future ... <b>will live</b>',
        examples: [
          { en: 'S:The bridge|V:opened|T:in 1995.|T:Today,|S:it|V:carries|O:20,000 cars a day', th: 'สะพานเปิดในปี 1995 ทุกวันนี้รองรับรถวันละ 20,000 คัน' },
          { en: 'S:Scientists|V:found|O:the virus|T:in 2019.|S:They|aux:will|V:test|O:a vaccine|T:next year', th: 'นักวิทยาศาสตร์พบไวรัสในปี 2019 ปีหน้าพวกเขาจะทดสอบวัคซีน' },
          { en: 'S:Galileo|V:believed|M:that the Earth moves around the Sun', th: 'กาลิเลโอเชื่อว่าโลกโคจรรอบดวงอาทิตย์ (moves = ข้อเท็จจริง)' }
        ],
        confuse: [
          'อย่าคิดว่าทั้งย่อหน้าต้องใช้กาลเดียว ดูคำบอกเวลาของแต่ละประโยค',
          'Today / Now / These days มักเปลี่ยนจากเรื่องอดีตมาเป็นปัจจุบัน'
        ],
        quiz: [
          { q: 'The bridge opened in 1995. Today, it ___ 20,000 cars a day.', o: ['carries', 'carried', 'will carry', 'carry'], a: 0,
            clue: 'Today + it', rule: 'สภาพปัจจุบันที่เกิดประจำ → Present Simple',
            why: 'Today บอกว่าเปลี่ยนมาพูดถึงตอนนี้ และ it เอกพจน์ → carries',
            n: ['', 'carried เป็นอดีต ขัดกับ Today', 'will carry เป็นอนาคต', 'carry ไม่ตรงกับประธาน it'],
            ex: 'The school opened in 1980. Now it has 900 students.' },
          { q: '"Scientists found the virus in 2019. They now study how it spreads. Next year, they will test a new vaccine." ประโยคใดบอก <b>แผนในอนาคต</b>', o: ['ประโยคที่ 1 (found)', 'ประโยคที่ 2 (now study)', 'ประโยคที่ 3 (will test)', 'ทุกประโยค'], a: 2,
            clue: 'Next year + will', rule: 'will + V1 และ next ... บอกอนาคต',
            why: 'ประโยคที่ 3 มี Next year และ will test',
            n: ['found เป็นอดีต', 'now study เป็นปัจจุบัน', '', 'สองประโยคแรกไม่ใช่อนาคต'],
            ex: 'The company will open a new office next year.' },
          { q: 'In the past, most people ___ on farms. Now, most people live in cities.', o: ['live', 'lived', 'will live', 'living'], a: 1,
            clue: 'In the past ↔ Now', rule: 'In the past → Past Simple',
            why: 'ประโยคแรกพูดถึงอดีต จึงใช้ lived',
            n: ['live เป็นปัจจุบัน ใช้กับ Now', '', 'will live เป็นอนาคต', 'living ต้องมี be'],
            ex: 'In the past, letters took weeks. Now, emails take seconds.' },
          { q: 'The report shows that sales fell last year. The company expects that sales ___ next year.', o: ['will rise', 'rose', 'rises', 'rise'], a: 0,
            clue: 'expects + next year', rule: 'การคาดการณ์อนาคต → will + V1',
            why: 'next year เป็นอนาคต จึงใช้ will rise',
            n: ['', 'rose เป็นอดีต', 'rises ไม่ตรงกับ sales (พหูพจน์) และไม่ใช่อนาคต', 'rise เป็นปัจจุบัน ขัดกับ next year'],
            ex: 'Experts predict that prices will fall.' },
          { q: 'ทำไม "Galileo believed that the Earth <u>moves</u> around the Sun." จึงใช้ moves', o: ['เพราะเป็นข้อเท็จจริงที่เป็นจริงเสมอ', 'เพราะเกิดขึ้นในอดีต', 'เพราะเป็นแผนในอนาคต', 'เพราะเป็นคำถาม'], a: 0,
            clue: 'the Earth moves around the Sun', rule: 'ข้อเท็จจริงที่เป็นจริงเสมอใช้ Present Simple ได้แม้อยู่ในเรื่องเล่าอดีต',
            why: 'โลกโคจรรอบดวงอาทิตย์ทั้งในอดีตและตอนนี้',
            n: ['', 'ถ้าเป็นอดีตจะใช้ moved', 'ไม่มี will หรือคำบอกอนาคต', 'ประโยคนี้เป็นบอกเล่า'],
            ex: 'The teacher said that water boils at 100°C.' }
        ]
      }
    ],
    post: [
      { q: 'She ___ coffee every morning.', o: ['drink', 'drinks', 'drank', 'drinking'], a: 1,
        clue: 'every morning + She', rule: 'กิจวัตร + he/she/it → V1 + s',
        why: 'เป็นกิจวัตรประจำ และประธาน She ต้องเติม -s',
        n: ['ขาด -s สำหรับ She', '', 'drank เป็นอดีต ขัดกับ every morning', 'drinking ต้องมี be นำหน้า'],
        ex: 'He drinks tea every day.' },
      { q: 'I ___ TV when you called.', o: ['watch', 'watched', 'was watching', 'am watching'], a: 2,
        clue: 'when you called = เหตุการณ์สั้นแทรกเข้ามา', rule: 'เหตุการณ์ที่กำลังทำอยู่ (ยาวกว่า) ก่อนถูกแทรก → Past Continuous',
        why: 'ฉันกำลังดูทีวีอยู่ (ยาวกว่า) แล้วคุณโทรมาแทรก (สั้นกว่า) จึงใช้ was watching',
        n: ['เป็นปัจจุบัน ไม่ตรงกับ called (อดีต)', 'บอกว่าดูจบแล้ว ไม่ใช่กำลังดูอยู่ตอนที่ถูกแทรก', '', 'am เป็นปัจจุบัน ไม่ตรงกับ called'],
        ex: 'She was cooking when the fire alarm rang.' },
      { q: 'Look at those clouds! It ___ rain soon.', o: ['is going to', 'will', 'was going to', 'rained'], a: 0,
        clue: 'เห็นหลักฐาน (clouds) ตรงหน้า', rule: 'มีหลักฐานตรงหน้าตอนพูด → be going to',
        why: 'เห็นเมฆครึ้มเป็นหลักฐานตอนนี้ จึงใช้ is going to แทนการทายเฉย ๆ ด้วย will',
        n: ['', 'will เหมาะกับการทำนาย/ตัดสินใจตอนพูด ไม่ใช่เมื่อมีหลักฐานตรงหน้าแบบนี้', 'was going to เป็นอดีต', 'rained เป็นอดีต'],
        ex: 'Watch out! That glass is going to fall.' },
      { q: 'Riding a motorbike without a helmet is illegal here. You ___ wear one.', o: ['can', 'should', 'must', 'may'], a: 2,
        clue: 'illegal = ผิดกฎหมาย (บังคับ ไม่ใช่แค่แนะนำ)', rule: 'ข้อบังคับตามกฎหมาย/กฎเข้มงวด → must',
        why: 'เป็นข้อบังคับตามกฎหมาย ไม่ใช่แค่คำแนะนำ จึงใช้ must ไม่ใช่ should',
        n: ['can บอกความสามารถ ไม่ใช่ข้อบังคับ', 'should เป็นแค่คำแนะนำ เบากว่ากฎหมาย', '', 'may บอกความเป็นไปได้/ขออนุญาต ไม่ใช่ข้อบังคับ'],
        ex: 'Passengers must fasten their seatbelts.' },
      { q: '___ you ever ___ sushi?', o: ['Do / eat', 'Have / eaten', 'Did / eat', 'Are / eating'], a: 1,
        clue: 'ever = เคยไหม (ไม่สนว่าเมื่อไร)', rule: 'ประสบการณ์ (เคยไหม) → Have/Has + V3',
        why: 'ever เป็นสัญญาณของ Present Perfect และ eat ช่อง 3 คือ eaten',
        n: ['Do/eat เป็น Present Simple ไม่ใช้กับ ever แบบนี้', '', 'Did/eat ถามเหตุการณ์เฉพาะ ไม่ใช่ถามประสบการณ์ทั่วไป', 'Are/eating เป็น Present Continuous'],
        ex: 'Have you ever visited Korea?' },
      { q: 'You ___ smoke in the hospital, but you ___ bring your own food.', o: ["mustn't / don't have to", "don't have to / mustn't", "shouldn't / must", "can't / can"], a: 0,
        clue: 'ห้ามเด็ดขาด vs ไม่บังคับ', rule: "mustn't = ห้ามทำ (ผิดกฎ) ต่างจาก don't have to = ไม่จำเป็นต้องทำ",
        why: 'สูบบุหรี่ในโรงพยาบาลผิดกฎ (ห้ามเด็ดขาด) ส่วนการพกอาหารเองไม่บังคับ (จะทำหรือไม่ก็ได้)',
        n: ['', 'สลับความหมายกัน', 'เบากว่าและหนักกว่าความหมายจริงตามลำดับ', 'can\'t/can ไม่ตรงกับบริบทกฎของโรงพยาบาล'],
        ex: "You mustn't run in the corridor, but you don't have to whisper." },
      { q: 'A: Where is your phone? B: I ___ it. I don\'t know where it is.', o: ['lost', 'have lost', 'was losing', 'lose'], a: 1,
        clue: 'ไม่บอกเวลา + เน้นผลตอนนี้', rule: 'ไม่บอกเวลา + เน้นผลปัจจุบัน → Present Perfect',
        why: 'ไม่มีคำบอกเวลาแน่นอน และเน้นผลตอนนี้ (ไม่รู้ว่าโทรศัพท์อยู่ไหน) จึงใช้ have lost',
        n: ['ไม่ผิดหลักแต่ไม่เน้นผลตอนนี้เท่า Present Perfect ในบริบทนี้', '', 'was losing สื่อว่ากำลังทำอยู่ ไม่ตรงกับสถานการณ์', 'lose ต้องผันกาล'],
        ex: "I can't find my wallet. I think I have lost it." },
      { q: '"I am busy," she said. → She said that she ___ busy.', o: ['is', 'was', 'has been', 'be'], a: 1,
        clue: 'am → backshift หนึ่งขั้น', rule: 'Present Simple (am/is/are) → Past Simple ใน reported speech',
        why: 'am ถอยหลังหนึ่งขั้นเป็น was',
        n: ['ไม่ถอยหลัง ยังเป็นปัจจุบันอยู่', '', 'ถอยหลังมากเกินไป (สองขั้น)', 'ไม่ใช่รูปกริยาที่ถูกต้อง'],
        ex: '"I am ready," he said. → He said he was ready.' },
      { q: 'The ground is wet. It ___ rained last night.', o: ['can', 'must have', 'should', 'will'], a: 1,
        clue: 'พื้นเปียก = หลักฐานชัดเจนว่าฝนตก (อดีต)', rule: 'หลักฐานชัดเจน + อดีต → must have + V3',
        why: 'พื้นเปียกเป็นหลักฐานชัดเจนมากว่าฝนตกเมื่อคืน จึงใช้ must have rained',
        n: ['can ไม่ใช้คาดเดาแบบนี้', '', 'should สื่อคำแนะนำ ไม่ใช่คาดเดา', 'will เป็นอนาคต ไม่ใช่คาดเดาอดีต'],
        ex: 'The floor is broken. Someone must have dropped something heavy.' },
      { q: '"The factory closed in 2010. Now, the building is a museum. Next year, it will add a café." ตอนนี้อาคารเป็นอะไร', o: ['โรงงาน', 'พิพิธภัณฑ์', 'คาเฟ่', 'อาคารว่าง'], a: 1,
        clue: 'Now, the building is a museum', rule: 'Now + is (ปัจจุบัน) บอกสภาพตอนนี้',
        why: 'ประโยคที่ใช้ Now และ is ระบุว่าเป็นพิพิธภัณฑ์',
        n: ['โรงงานเป็นอดีต (closed in 2010)', '', 'คาเฟ่เป็นแผนในอนาคต (will add)', 'บทอ่านไม่ได้บอกว่าว่าง'],
        ex: 'The land was a farm. Now it is a park.' }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
