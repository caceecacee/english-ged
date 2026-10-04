/* หมวด 8: Academic Writing — การเขียนเรียงความเชิงวิชาการ (B2 → C1)
   ฝึกโครงสร้างเรียงความ ประโยคหลัก (thesis) ย่อหน้า คำเชื่อม การอ้างแหล่ง และบทสรุป
   ตัวอย่างทั้งหมดเป็นเรื่องสมมุติเพื่อการฝึก (ชื่อผู้เขียนในการอ้างอิงเป็นชื่อสมมุติ) ไม่มีสถิติจริง
   งานเขียนในหมวดนี้ตรวจด้วยตนเองตาม checklist ระบบไม่ให้คะแนนอัตโนมัติ */
(function (root) {
  var EP = root.EP = root.EP || {};
  EP.grammar = EP.grammar || [];
  EP.grammar.push({
    id: 'essay',
    name: 'Academic Writing',
    th: 'การเขียนเรียงความเชิงวิชาการ',
    blurb: 'จากประโยคเดียวไปสู่เรียงความทั้งชิ้น — โครงสร้าง ประโยคหลัก ย่อหน้า คำเชื่อม การอ้างแหล่ง และบทสรุป (งานเขียนตรวจด้วยตนเอง)',
    lessons: [
      {
        id: 'essay-structure', level: 'B2', title: 'Essay Structure', th: 'โครงสร้างเรียงความ: แนะนำ – เนื้อหา – สรุป',
        explain: 'เรียงความวิชาการมีอย่างน้อยสามส่วน: <b>Introduction</b> (แนะนำหัวข้อและเสนอประโยคหลัก) <b>Body</b> (อย่างน้อยสองย่อหน้า แต่ละย่อหน้าพัฒนาหนึ่งประเด็น พร้อมหลักฐาน) และ <b>Conclusion</b> (สรุปและชี้ให้เห็นความหมาย) ผู้อ่านควรเดาได้ว่าแต่ละย่อหน้าจะพูดเรื่องอะไรจากประโยคแรกของย่อหน้านั้น',
        formula: 'Introduction (background + thesis) → Body 1 (point 1 + evidence) → Body 2 (point 2 + evidence) → [Body 3 (counter-argument)] → Conclusion (restate + implication)',
        examples: [
          { en: 'S:Introduction|V:gives|O:background and thesis', th: 'ย่อหน้าแนะนำให้บริบทและเสนอประโยคหลัก' },
          { en: 'S:Body paragraph|V:develops|O:one main idea', th: 'ย่อหน้าเนื้อหาพัฒนาหนึ่งประเด็นต่อหนึ่งย่อหน้า' },
          { en: 'S:Conclusion|V:restates|O:the thesis in new words', th: 'บทสรุปเขียนประโยคหลักใหม่ด้วยถ้อยคำอื่น' }
        ],
        confuse: [
          'ผู้เรียนไทยมักเขียนบทนำยาวเกินไปจนไม่ถึงประโยคหลัก ควรให้บริบทสั้นๆ แล้วเสนอ thesis ให้เร็ว',
          'ย่อหน้าเนื้อหาไม่ควรแนะนำหัวข้อใหม่ทั้งหมด ถ้าเริ่มเรื่องใหม่ควรเป็นย่อหน้าใหม่ที่ต่อจาก thesis'
        ],
        quiz: [
          { q: 'Which part should introduce the thesis?', o: ['Introduction', 'Body 1', 'Body 2', 'Conclusion'], a: 0,
            clue: 'ส่วนแรกของเรียงความ', rule: 'thesis อยู่ในย่อหน้าแนะนำ', why: 'Introduction ให้บริบทและเสนอประโยคหลัก',
            n: ['', 'Body 1 เริ่มพัฒนาประเด็นแรก ไม่ใช่จุดเสนอ thesis', 'Body 2 พัฒนาประเด็นที่สอง', 'Conclusion สรุป ไม่ได้แนะนำ'],
            ex: 'The thesis appears at the end of the introduction.' },
          { q: 'Which sentence belongs in the conclusion?', o: ['In summary, the evidence suggests that the program is worth expanding.', 'According to a new source, the program started in 2015.', 'This paragraph will discuss the cost.', 'Here is a new example.'], a: 0,
            clue: 'สรุปและชี้ความหมาย', rule: 'conclusion สรุปและบอกนัยยะ ไม่เพิ่มหลักฐานใหม่',
            why: 'ประโยคแรกเป็นการสรุปความหมายของหลักฐาน', n: ['', 'เพิ่มแหล่งข้อมูลใหม่ เหมาะกับ body มากกว่า', 'เป็นประโยคบอกโครงเรื่อง เหมาะกับ introduction', 'ยกตัวอย่างใหม่ ควรอยู่ใน body'],
            ex: 'In conclusion, the results point to a clear need for more funding.' },
          { q: 'Which is NOT a typical role of a body paragraph?', o: ['Introduce the background of the topic from scratch', 'Develop one main idea with evidence', 'Explain how the evidence supports the thesis', 'Address a possible counter-argument'], a: 0,
            clue: 'บทบาทของ body คือการพัฒนาประเด็น', rule: 'การแนะนำบริบทเริ่มต้นอยู่ที่ introduction',
            why: 'ย่อหน้าเนื้อหาควรพัฒนาประเด็น ไม่ควรเริ่มแนะนำหัวข้อใหม่ทั้งหมด', n: ['', 'การพัฒนาประเด็นด้วยหลักฐานคือหน้าที่หลักของ body', 'การอธิบายว่าหลักฐานสนับสนุน thesis อย่างไร เป็นหน้าที่ของ body', 'การรับมือกับข้อโต้แย้งเป็นหน้าที่ที่พบได้ใน body'],
            ex: 'Each body paragraph should focus on one idea.' },
          { q: 'A short academic essay typically has ___ body paragraphs.', o: ['at least two', 'none', 'exactly one line', 'twenty'], a: 0,
            clue: 'เรียงความต้องมีเนื้อหาพอสมควร', rule: 'โครงสร้างพื้นฐานมีอย่างน้อยสองย่อหน้าเนื้อหา',
            why: 'ถ้ามีเพียงย่อหน้าเดียวจะยังไม่พอพัฒนาประเด็นให้หนักแน่น', n: ['', 'เรียงความไม่มีย่อหน้าเนื้อหาไม่ได้ เป็นโครงสร้างที่ไม่ครบ', 'หนึ่งบรรทัดไม่ใช่ย่อหน้าเนื้อหา', 'ยี่สิบย่อหน้าเกินความจำเป็นสำหรับเรียงความสั้น'],
            ex: 'Two well-developed body paragraphs are enough for this task.' },
          { q: 'Which order is correct?', o: ['Introduction → Body → Conclusion', 'Conclusion → Body → Introduction', 'Body → Introduction → Conclusion', 'Introduction → Conclusion → Body'], a: 0,
            clue: 'ลำดับจากต้นจนจบ', rule: 'แนะนำ → เนื้อหา → สรุป',
            why: 'เรียงความเดินตามลำดับนี้เสมอ', n: ['', 'ลำดับกลับหัวทำให้ผู้อ่านไม่เข้าใจ', 'บทนำต้องมาก่อนเนื้อหา', 'สรุปต้องมาหลังเนื้อหา ไม่ใช่ก่อน'],
            ex: 'Read the introduction first to see where the essay is going.' }
        ],
        writing: [
          { prompt: 'เขียนบทนำ 3–4 ประโยคสำหรับหัวข้อ "Should schools start later in the morning?" โดยมีบริบทและ thesis ยังไม่ต้องใส่หลักฐาน',
            sample: 'Many students struggle to stay alert in early morning classes. Sleep research has increasingly linked school schedules to learning outcomes. This essay argues that schools should start later in the morning, because adolescents need more sleep and later starts can improve attention in class.',
            checklist: ['มีบริบทสั้นๆ ก่อนถึง thesis', 'thesis อยู่ท้ายบทนำและเป็นข้อโต้แย้งที่พิสูจน์ได้', 'ไม่มีหลักฐานเต็มรูปแบบในบทนำ'] },
          { prompt: 'ระบุว่าประโยคต่อไปนี้ควรอยู่ส่วนไหนของเรียงความ: "In conclusion, later start times seem to benefit students." (Introduction / Body / Conclusion) และอธิบายว่าทำไม',
            sample: 'Conclusion — the sentence summarises the argument with "In conclusion" and does not introduce new evidence.',
            checklist: ['เลือกส่วนที่ถูกต้องได้', 'อธิบายเหตุผลจากคำเชื่อมและหน้าที่ของประโยค', 'ไม่ได้เพิ่มหลักฐานใหม่'] }
        ]
      },
      {
        id: 'essay-thesis', level: 'B2', title: 'The Thesis Statement', th: 'ประโยคหลัก (Thesis) ที่ถกเถียงได้',
        explain: '<b>Thesis</b> คือประโยคเดียวที่บอกจุดยืนของเรียงความ และต้อง<b>ถกเถียงได้</b> (arguable) หมายความว่ามีคนเห็นต่างได้และเรียงความต้องใช้หลักฐานพิสูจน์ ประโยคข้อเท็จจริงทั่วไป หรือหัวข้อที่ไม่มีจุดยืน ไม่ใช่ thesis ที่ดี ควรเขียนให้เฉพาะเจาะจงพอจะรู้ว่าเรียงความจะพิสูจน์อะไร และอาจบอกเหตุผลหลักด้วย',
        formula: 'Topic + claim (จุดยืน) + because/reasons = Thesis · เช่น "X should Y because A, B, and C."',
        examples: [
          { en: 'S:Schools|aux:should|V:limit|O:phone use|X:because it reduces focus', th: 'โรงเรียนควรจำกัดการใช้โทรศัพท์เพราะช่วยลดสมาธิที่หายไป' },
          { en: 'S:Cities|aux:should|V:fund|O:bike lanes|X:because they improve safety and health', th: 'เมืองควรสนับสนุนเลนจักรยานเพราะช่วยความปลอดภัยและสุขภาพ' }
        ],
        confuse: [
          'ข้อเท็จจริงไม่ใช่ thesis: "Water boils at 100 degrees Celsius at sea level" ไม่มีอะไรให้ถกเถียง',
          'หัวข้อกว้างเกินไปไม่ใช่ thesis: "Technology affects education in many ways" ยังไม่บอกจุดยืนว่าอะไรดีหรือไม่ดี'
        ],
        quiz: [
          { q: 'Which sentence is an arguable thesis?', o: ['Social media is used by many people.', 'Schools should limit phone use during lessons because it reduces focus.', 'Water boils at 100 degrees Celsius at sea level.', 'Many students attend university.'], a: 1,
            clue: 'มีจุดยืนชัดเจนและมีคนเห็นต่างได้', rule: 'thesis ที่ดีต้องเป็นจุดยืนที่ถกเถียงได้',
            why: 'ประโยคนี้บอกจุดยืน (should limit) และเหตุผล (reduces focus)', n: ['เป็นข้อเท็จจริงทั่วไป ไม่มีจุดยืน', '', 'เป็นข้อเท็จจริงทางวิทยาศาสตร์ ไม่มีอะไรให้ถกเถียง', 'เป็นการบรรยายสถิติกว้างๆ ไม่ใช่จุดยืน'],
            ex: 'Public libraries should stay open longer because they serve workers.' },
          { q: 'Which thesis is too vague?', o: ['Technology affects education in many ways.', 'Online exams should be banned because they increase cheating.', 'Public transport should be free for students.', 'Recycling reduces landfill waste in the city.'], a: 0,
            clue: 'ไม่บอกว่าเป็นผลดีหรือผลเสีย และไม่มีจุดยืน', rule: 'thesis ต้องเฉพาะเจาะจงและมีจุดยืน',
            why: 'Technology affects education ยังบอกจุดยืนไม่ได้ว่าดีหรือไม่ดี', n: ['', 'มีจุดยืนชัด (banned) และเหตุผล (cheating)', 'มีจุดยืนชัด (free) และกลุ่มเป้าหมาย', 'เป็นข้อโต้แย้งที่เฉพาะเจาะจงเรื่องของเสีย'],
            ex: 'Recycling should be taught in schools because it builds habits early.' },
          { q: 'Where does the thesis usually appear?', o: ['At the end of the introduction', 'In the middle of the conclusion', 'As the last sentence of body 1', 'Only in the title'], a: 0,
            clue: 'ตำแหน่งมาตรฐานของ thesis', rule: 'thesis อยู่ท้ายบทนำเพื่อบอกทิศทางของเรียงความ',
            why: 'ผู้อ่านต้องเห็น thesis ก่อนเข้าสู่เนื้อหา', n: ['', 'สรุปใช้ restate thesis แต่ไม่ใช่ที่วาง thesis ครั้งแรก', 'body 1 ควรพิสูจน์ thesis ไม่ใช่เสนอ', 'ชื่อเรื่องไม่สามารถบรรจุ thesis ที่สมบูรณ์ได้'],
            ex: 'The last sentence of the introduction states the thesis.' },
          { q: 'An "arguable" thesis means:', o: ['It can be supported or challenged with evidence', 'It is a fact everyone already knows', 'It is a personal feeling with no reasons', 'It is a question, not a statement'], a: 0,
            clue: 'คำว่า arguable ในงานวิชาการ', rule: 'thesis ต้องรับหลักฐานได้และคนค้านได้',
            why: 'ความหมายของ arguable คือสามารถถกเถียงด้วยหลักฐาน', n: ['', 'ข้อเท็จจริงที่ทุกคนรู้ไม่มีอะไรให้โต้แย้ง', 'ความรู้สึกส่วนตัวไม่มีเหตุผลรองรับ ไม่ใช่ thesis ที่ดี', 'คำถามไม่ได้เป็นจุดยืน (thesis ต้องเป็นประโยคบอกเล่า)'],
            ex: 'A good thesis invites reasonable disagreement.' },
          { q: 'Which sentence has a thesis plus reasons?', o: ['Urban gardens should be funded because they improve food access, lower costs, and strengthen community ties.', 'Urban gardens are green.', 'I like gardens.', 'Gardens exist in many cities.'], a: 0,
            clue: 'มีจุดยืน + เหตุผลสามข้อ', rule: 'thesis ที่ดีมักบอกเหตุผลหลักที่จะพิสูจน์',
            why: 'ประโยคนี้บอกจุดยืน (should be funded) และแนวเรื่องสามประเด็น', n: ['', 'เป็นข้อบรรยาย ไม่มีจุดยืนหรือเหตุผล', 'เป็นความชอบส่วนตัว ไม่ใช่ thesis ทางวิชาการ', 'เป็นข้อเท็จจริงทั่วไป ไม่มีอะไรให้พิสูจน์'],
            ex: 'Libraries should expand their hours because they support students who work.' }
        ],
        writing: [
          { prompt: 'เปลี่ยนหัวข้อ "Remote work" ให้เป็น thesis ที่ถกเถียงได้ พร้อมเหตุผลอย่างน้อยสองข้อ',
            sample: 'Companies should allow remote work for most office jobs because it improves employee focus and reduces daily commuting costs.',
            checklist: ['มีจุดยืนชัดเจน (should / should not)', 'บอกเหตุผลอย่างน้อยสองข้อ', 'เฉพาะเจาะจงพอที่จะพิสูจน์ได้'] },
          { prompt: 'เขียน thesis ที่ "อ่อนเกินไป" จากหัวข้อ "Plastic bags" แล้วเขียนใหม่ให้แข็งแรงขึ้น',
            sample: 'Weak: Plastic bags cause problems. Stronger: Cities should ban single-use plastic bags because they clog drainage systems and harm marine life.',
            checklist: ['ระบุได้ว่า thesis เดิมอ่อนเพราะอะไร', 'thesis ใหม่มีจุดยืนและเหตุผล', 'ไม่ใช้ข้อมูลหรือตัวเลขที่ไม่ได้ตรวจสอบ'] }
        ]
      },
      {
        id: 'essay-topic-sentence', level: 'B2', title: 'Body Paragraphs (PEEL)', th: 'ย่อหน้าเนื้อหา: ประโยคหลัก หลักฐาน อธิบาย เชื่อม',
        explain: 'ย่อหน้าเนื้อหาที่ดีมักใช้โครงสร้าง <b>PEEL</b>: <b>P</b>oint (ประโยคหลักของย่อหน้า) <b>E</b>vidence (หลักฐานหรือตัวอย่าง) <b>E</b>xplain (อธิบายว่าหลักฐานนี้สนับสนุน thesis อย่างไร) <b>L</b>ink (เชื่อมกลับไปยัง thesis หรือย่อหน้าถัดไป) ถ้าขาด Explain ย่อหน้าจะเป็นเพียงรายการข้อมูล',
        formula: 'Topic sentence (point) → Evidence (example, source) → Explanation (why it matters) → Link (back to thesis or next point)',
        examples: [
          { en: 'S:The program|V:saves|O:money for families|X:in three ways', th: 'โครงการช่วยประหยัดเงินให้ครอบครัวได้สามทาง (ประโยคหลักของย่อหน้า)' },
          { en: 'S:Lower costs|V:allow|O:families to spend more on education', th: 'ค่าใช้จ่ายที่ลดลงทำให้ครอบครัวใช้จ่ายด้านการศึกษาได้มากขึ้น (คำอธิบาย)' }
        ],
        confuse: [
          'ผู้เรียนมักใส่หลักฐานแล้วหยุด ไม่อธิบายว่าหลักฐานนั้นพิสูจน์อะไร ทำให้ย่อหน้าอ่อน',
          'ประโยคหลักที่ดีบอกประเด็นของย่อหน้า ไม่ใช่ความคิดเห็นทั่วไป: "Some people like the program" ยังไม่ใช่ประเด็นทางวิชาการ'
        ],
        quiz: [
          { q: 'Which is the best topic sentence for a paragraph about cost?', o: ['The program saves money for families in three ways.', 'Some people like the program.', 'Thank you for reading.', 'Prices changed last year.'], a: 0,
            clue: 'ประเด็นเรื่องการประหยัดเงิน', rule: 'topic sentence ต้องบอกประเด็นของย่อหน้าอย่างเฉพาะเจาะจง',
            why: 'เป็นประเด็นเดียวที่บอกว่าย่อหน้านี้จะพูดเรื่องต้นทุนและแนวทางพิสูจน์', n: ['', 'เป็นความชอบ ไม่ใช่ประเด็นต้นทุน', 'เป็นประโยคขอบคุณ ไม่ควรอยู่ในย่อหน้าเนื้อหา', 'ประเด็นราคาที่เปลี่ยนไม่ได้บอกว่าโครงการช่วยอย่างไร'],
            ex: 'The first reason the policy works is that families keep more income.' },
          { q: 'What does "E" (Explain) do in PEEL?', o: ['Connects the evidence back to the thesis', 'Gives a new unrelated fact', 'Repeats the topic sentence word for word', 'Ends the essay'], a: 0,
            clue: 'ทำให้หลักฐานมีความหมาย', rule: 'Explain อธิบายความสำคัญของหลักฐานต่อ thesis',
            why: 'ถ้าไม่อธิบาย ผู้อ่านไม่รู้ว่าหลักฐานพิสูจน์อะไร', n: ['', 'เป็นการเพิ่มข้อมูลที่ไม่เกี่ยว ทำให้ย่อหน้ากระจัดกระจาย', 'การซ้ำประโยคหลักไม่ได้อธิบายอะไรเพิ่ม', 'การจบเรียงความเป็นหน้าที่ของ conclusion'],
            ex: 'This matters because it shows that the policy helps low-income families most.' },
          { q: 'A good evidence sentence should:', o: ['Support the point with a source or example', 'Be an opinion with no support', 'Be the conclusion of the essay', 'Be a question only'], a: 0,
            clue: 'หลักฐานต้องหนุนประเด็น', rule: 'หลักฐานต้องมาจากแหล่งหรือตัวอย่างที่ตรวจสอบได้',
            why: 'ความคิดเห็นที่ไม่มีที่มาไม่ถือเป็นหลักฐาน', n: ['', 'ความคิดเห็นที่ไม่มีหลักฐานรองรับอ่อนเกินไปสำหรับงานวิชาการ', 'การสรุปอยู่ใน conclusion ไม่ใช่หลักฐาน', 'คำถามไม่ได้ให้หลักฐานที่หนุนประเด็น'],
            ex: 'A study in one school found that attendance improved after the change.' },
          { q: 'Which paragraph has a clear topic sentence?', o: ['There are many things to consider.', 'Cost is the first reason the policy works, because families keep more of their income.', 'This is interesting.', 'Some things happened.'], a: 1,
            clue: 'ประโยคแรกบอกประเด็นชัด', rule: 'topic sentence ต้องบอกว่าย่อหน้าจะพิสูจน์อะไร',
            why: 'ประโยคนี้บอกประเด็นและเหตุผลไว้ในประโยคเดียว', n: ['คลุมเครือ ไม่บอกประเด็น', '', 'ความเห็นทั่วไป ไม่บอกประเด็นทางวิชาการ', 'คลุมเครือเกินไป ไม่รู้ว่าเกิดอะไรขึ้น'],
            ex: 'The second reason is that the policy reduces transport costs.' },
          { q: 'Which explanation sentence is best?', o: ['This matters because lower costs allow families to spend more on education.', 'I think it is good.', 'The end.', 'It is a fact.'], a: 0,
            clue: 'ต้องเชื่อมหลักฐานกับผลต่อประเด็น', rule: 'Explain ต้องบอกว่าเพราะอะไรหลักฐานนี้จึงสำคัญ',
            why: 'ประโยคนี้อธิบายว่าหลักฐานนำไปสู่ผลอะไร', n: ['', 'เป็นความเห็นที่ไม่ได้อธิบายว่าสนับสนุนประเด็นอย่างไร', 'เป็นการจบ ไม่ได้อธิบายหลักฐาน', 'เป็นการยืนยันว่าเป็นความจริงโดยไม่อธิบาย'],
            ex: 'This explains why the program affects enrolment in local schools.' }
        ],
        writing: [
          { prompt: 'เขียนประโยคหลัก (topic sentence) และประโยคอธิบาย (explain) สำหรับย่อหน้าเรื่อง "Later start times improve attention".',
            sample: 'Later start times improve attention in the morning. This matters because students who are more alert can absorb new material more easily during first-period lessons.',
            checklist: ['ประโยคหลักบอกประเด็นเดียว', 'ประโยคอธิบายเชื่อมกับประเด็น', 'ไม่ใช้ตัวเลขหรือสถิติที่ไม่ได้ระบุแหล่ง'] },
          { prompt: 'ตรวจย่อหน้านี้ด้วย PEEL แล้วบอกว่าขาดส่วนไหน: "Libraries are important. Many students use them. They have books and computers."',
            sample: 'It lacks an explanation of why the evidence matters and does not link back to the thesis. The topic sentence is also too general.',
            checklist: ['ระบุได้ว่าขาด Explain และ Link', 'บอกได้ว่า topic sentence ทั่วไปเกินไป', 'เสนอแนวทางปรับปรุงอย่างน้อยหนึ่งข้อ'] }
        ]
      },
      {
        id: 'essay-transitions', level: 'B2', title: 'Transitions & Linking Ideas', th: 'คำเชื่อมระหว่างความคิดในเรียงความ',
        explain: 'คำเชื่อมบอกความสัมพันธ์ระหว่างประโยคหรือย่อหน้า: <b>เพิ่มเติม</b> (furthermore, moreover, in addition) <b>ตรงข้าม</b> (however, in contrast, nevertheless) <b>ผลลัพธ์</b> (therefore, as a result, consequently) และ <b>ยกตัวอย่าง</b> (for instance, for example) ใช้คำเชื่อมให้ตรงความสัมพันธ์ เพราะใช้ผิดทำให้ผู้อ่านเข้าใจเหตุผลผิด คำเชื่อมขึ้นต้นประโยคมักตามด้วยเครื่องหมายจุลภาค (,)',
        formula: 'Contrast: However, · Result: As a result, · Addition: Moreover, · Example: For instance, · Sentence start → comma after the transition',
        examples: [
          { en: 'S:The plan was expensive|aux:However|S:it|V:produced|O:clear benefits', th: 'แผนนั้นมีค่าใช้จ่ายสูง แต่ก็ให้ผลประโยชน์ที่ชัดเจน' },
          { en: 'S:The bridge was damaged|aux:As a result|S:buses|V:took|O:a longer route', th: 'สะพานเสียหาย ส่งผลให้รถเมล์ต้องใช้เส้นทางที่ยาวขึ้น' }
        ],
        confuse: [
          'ผู้เรียนไทยมักใช้ however เพื่อเพิ่มความคิด แต่ however หมายถึงการสวนทาง ควรใช้ moreover หรือ furthermore แทน',
          'การใช้ therefore โดยไม่มีเหตุผลก่อนหน้า ทำให้ผู้อ่านสงสัยว่าเหตุผลอยู่ที่ไหน'
        ],
        quiz: [
          { q: 'The plan was expensive. ___, it produced clear benefits.', o: ['However,', 'Therefore,', 'For instance,', 'Moreover,'], a: 0,
            clue: 'ประโยคที่สองขัดกับความคาดหมายจากประโยคแรก', rule: 'however ใช้เมื่อความคิดสองประโยคขัดแย้งหรือสวนทางกัน',
            why: 'ค่าใช้จ่ายสูงกับผลประโยชน์ที่ชัดเจนเป็นการสวนทาง', n: ['', 'therefore บอกผลลัพธ์ ไม่ได้บอกการสวนทาง', 'for instance บอกตัวอย่าง ไม่ใช่การสวนทาง', 'moreover เพิ่มความคิด แต่ไม่สื่อความขัดแย้ง'],
            ex: 'The course was short. However, it covered the essentials.' },
          { q: 'The bridge was damaged. ___, buses had to take a longer route.', o: ['As a result,', 'However,', 'For example,', 'In contrast,'], a: 0,
            clue: 'ประโยคหลังเป็นผลของประโยคแรก', rule: 'as a result บอกผลลัพธ์ที่เกิดจากเหตุก่อนหน้า',
            why: 'รถเมล์ต้องวิ่งเส้นทางยาวเพราะสะพานเสียหาย', n: ['', 'however บอกการสวนทาง ไม่ใช่ผลลัพธ์', 'for example ใช้ยกตัวอย่าง ไม่ใช่ผลลัพธ์', 'in contrast บอกความต่าง ไม่ใช่ผลลัพธ์'],
            ex: 'The power failed. As a result, the classes were cancelled.' },
          { q: 'Many students work part-time. ___, they still finish their degrees.', o: ['Nevertheless,', 'Therefore,', 'For example,', 'Similarly,'], a: 0,
            clue: 'ความยากลำบาก แต่ยังสำเร็จ', rule: 'nevertheless บอกว่าแม้มีอุปสรรคแต่ผลยังเกิดขึ้น',
            why: 'การทำงานพิเศษเป็นอุปสรรค แต่นักศึกษายังจบได้ ซึ่งเป็นการสวนทาง', n: ['', 'therefore บอกว่าเป็นผลของการทำงาน ซึ่งไม่สมเหตุสมผล', 'for example ใช้ยกตัวอย่างไม่ได้ในบริบทนี้', 'similarly บอกความคล้ายกัน ไม่ใช่การสวนทาง'],
            ex: 'The task was difficult. Nevertheless, the team completed it on time.' },
          { q: 'Choose the correct punctuation: "Moreover ___ the results were consistent."', o: ['Moreover, the results were consistent.', 'Moreover the results were consistent.', 'Moreover; the results were consistent.', 'Moreover. the results were consistent.'], a: 0,
            clue: 'คำเชื่อมขึ้นต้นประโยค', rule: 'คำเชื่อมขึ้นต้นประโยคตามด้วยจุลภาค',
            why: 'moreover ขึ้นต้นประโยคต้องตามด้วยจุลภาค และตัวเล็กหลังจุด', n: ['', 'ขาดเครื่องหมายจุลภาคหลัง moreover', 'เซมิโคลอนไม่ใช่เครื่องหมายที่ใช้หลังคำเชื่อมขึ้นต้นประโยคนี้', 'จุดตามด้วยตัวเล็กไม่ถูกต้อง'],
            ex: 'Furthermore, the data were collected in two cities.' },
          { q: 'Many cities have cycling lanes. ___, Copenhagen has a well-known network.', o: ['For instance,', 'Consequently,', 'However,', 'In contrast,'], a: 0,
            clue: 'ประโยคหลังเป็นตัวอย่างของประโยคแรก', rule: 'for instance ใช้นำตัวอย่างที่ยืนยันประเด็น',
            why: 'Copenhagen เป็นตัวอย่างเฉพาะของการมีเลนจักรยาน', n: ['', 'consequently บอกผลลัพธ์ ไม่ใช่ตัวอย่าง', 'however บอกการสวนทาง ไม่ใช่ตัวอย่าง', 'in contrast บอกความต่าง ไม่ใช่ตัวอย่าง'],
            ex: 'Many students use the library. For instance, first-year students visit it weekly.' }
        ],
        writing: [
          { prompt: 'เติมคำเชื่อมที่เหมาะสมลงในช่องว่าง: "The traffic was heavy. ___, we arrived late."',
            sample: 'The traffic was heavy. As a result, we arrived late.',
            checklist: ['เลือกคำเชื่อมที่บอกผลลัพธ์', 'มีจุลภาคหลังคำเชื่อมที่ขึ้นต้นประโยค', 'ไม่ใช้ however หรือ therefore โดยไม่ตรงความหมาย'] },
          { prompt: 'เขียนประโยคสองประโยคที่เชื่อมด้วย "However" เพื่อแสดงความขัดแย้งเรื่อง "online classes"',
            sample: 'Online classes are convenient for working students. However, they can make it harder to build relationships with classmates.',
            checklist: ['ประโยคที่สองขัดกับประโยคแรกจริง', 'มีจุลภาคหลัง However', 'ใช้ตัวอย่างหรือเหตุผลที่สมเหตุสมผล'] }
        ]
      },
      {
        id: 'essay-citation', level: 'C1', title: 'Signal Phrases & Citing Sources', th: 'การอ้างแหล่งข้อมูลและการเขียนสรุปด้วยคำของตัวเอง',
        explain: 'เมื่อใช้ความคิดของผู้อื่น ต้อง<b>ระบุแหล่ง</b>เสมอ ไม่ว่าจะยกคำพูดโดยตรงหรือเขียนสรุปด้วยคำของตัวเอง (paraphrase) <b>Signal phrase</b> เช่น "According to Lee (2019)," หรือ "Lee (2019) suggests that..." ช่วยให้ผู้อ่านรู้ว่าความคิดนี้มาจากใคร และการใช้คำรายงานที่ระมัดระวัง (suggests, may) ตรงกับระดับหลักฐาน การคัดลอกประโยคโดยไม่มีเครื่องหมายคำพูดและไม่อ้างแหล่งถือเป็นการลอกผลงาน (plagiarism) <br><i>ชื่อ Lee (2019) ในบทนี้เป็นชื่อสมมุติเพื่อการฝึก</i>',
        formula: 'According to [Author] (year), [paraphrase]. · [Author] (year) suggests that [paraphrase]. · [Author] (year) writes, "[exact words]." (ใช้เครื่องหมายคำพูดเมื่อคัดลอกคำเดิม)',
        examples: [
          { en: 'S:According to Lee (2019)|V:sleep|O:supports memory', th: 'ตามที่ Lee (2019) ระบุ การนอนช่วยเรื่องความจำ (สมมุติ)' },
          { en: 'S:Lee (2019)|V:suggests|O:that rest may improve learning', th: 'Lee (2019) เสนอว่าการพักผ่อนอาจช่วยการเรียนรู้ (สมมุติ)' }
        ],
        confuse: [
          'การอ้างแหล่งไม่ได้แค่ใส่ชื่อท้ายประโยค ต้องชัดว่าส่วนไหนเป็นความคิดของใคร',
          'การเปลี่ยนแค่บางคำแล้วคงโครงประโยคเดิม ยังถือเป็นการลอกผลงาน ต้องเขียนโครงใหม่และอ้างแหล่งด้วย'
        ],
        quiz: [
          { q: 'Which is a correct signal phrase?', o: ['According to Lee (2019), sleep affects memory.', 'Lee (2019) according to sleep affects memory.', 'Lee 2019 sleep affects memory according.', 'Sleep affects memory, according Lee 2019.'], a: 0,
            clue: 'ลำดับมาตรฐานของการอ้างแหล่ง', rule: 'According to [Author] (year), [claim].',
            why: 'รูปแบบนี้ชัดเจนว่าความคิดเป็นของใคร และใช้วงเล็บปีอย่างถูกต้อง', n: ['', 'ลำดับคำผิด ไม่ใช่รูปแบบมาตรฐาน', 'ไม่มีวงเล็บและลำดับคำวนผิด', 'ลำดับคำผิดและไม่มีคำบุพบท according to'],
            ex: 'According to Patel (2021), group work improves retention.' },
          { q: 'Why should you paraphrase instead of copying?', o: ['To show understanding and avoid plagiarism', 'To make the essay longer', 'Because copying is always allowed', 'To hide the source'], a: 0,
            clue: 'เหตุผลของการเขียนด้วยคำของตัวเอง', rule: 'การเขียนสรุปด้วยคำของตนแสดงความเข้าใจและต้องอ้างแหล่งเสมอ',
            why: 'การเขียนด้วยคำของตนแสดงความเข้าใจ และไม่ทำให้ถูกมองว่าลอกผลงาน', n: ['', 'ความยาวไม่ใช่เหตุผลของการ paraphrase', 'การลอกไม่ถูกอนุญาตโดยทั่วไป ไม่ว่าจะเป็นงานวิชาการ', 'การซ่อนแหล่งที่มาเป็นการลอกผลงาน'],
            ex: 'Paraphrasing shows that you understood the source, not just copied it.' },
          { q: 'Which is plagiarism?', o: ['Copying a sentence word-for-word without quotation marks or a citation', 'Paraphrasing and citing the source', 'Summarising in your own words and citing it', 'Quoting a short phrase with quotation marks and a citation'], a: 0,
            clue: 'คัดลอกคำเดิมโดยไม่มีเครื่องหมายคำพูดและไม่อ้างแหล่ง', rule: 'คำที่ไม่ใช่ของเรา ต้องมีทั้งเครื่องหมายคำพูดหรือการเขียนใหม่ และต้องอ้างแหล่ง',
            why: 'การคัดลอกคำโดยไม่ระบุแหล่งคือการลอกผลงาน', n: ['', 'การเขียนด้วยคำของตนและอ้างแหล่งถูกต้อง', 'การสรุปด้วยคำของตนและอ้างแหล่งถูกต้อง', 'การยกคำสั้นๆ พร้อมเครื่องหมายคำพูดและอ้างแหล่งถูกต้อง'],
            ex: 'Quoting a short phrase is acceptable when you use quotation marks and cite it.' },
          { q: 'Where does the citation go in a paraphrase?', o: ['At the end of the sentence or after the author\'s name', 'Never anywhere', 'Only in the title', 'At the start of the conclusion only'], a: 0,
            clue: 'ตำแหน่งการอ้างแหล่งที่ชัดเจน', rule: 'ระบุแหล่งในประโยคที่มีความคิดนั้น',
            why: 'การอ้างแหล่งอยู่ใกล้ความคิดที่อ้างถึง ทำให้ผู้อ่านรู้ว่ามาจากใคร', n: ['', 'ไม่ระบุแหล่งคือการลอกผลงาน', 'ชื่อเรื่องไม่ใช่ตำแหน่งสำหรับอ้างแหล่งของความคิดเฉพาะ', 'การอ้างเฉพาะในบทสรุปไม่ครอบคลุมความคิดในเนื้อหา'],
            ex: 'Sleep affects memory consolidation (Lee, 2019).' },
          { q: 'Which uses appropriately hedged reporting language?', o: ['Lee (2019) suggests that sleep may support memory.', 'Lee (2019) proves that sleep always supports memory.', 'Lee (2019) shows without doubt that everyone remembers more after sleep.', 'Lee (2019) is the only truth about sleep.'], a: 0,
            clue: 'ระดับความมั่นใจต้องตรงกับหลักฐาน', rule: 'ใช้ suggests / may เมื่อหลักฐานยังไม่แน่นอนทั้งหมด',
            why: 'suggests และ may สอดคล้องกับการศึกษาที่ไม่ได้ยืนยันเด็ดขาด', n: ['', 'proves และ always ยืนยันเกินหลักฐานที่มีในงานวิจัยทั่วไป', 'without doubt และ everyone เกินจริง', 'the only truth เป็นการอ้างความจริงที่เด็ดขาดเกินไป'],
            ex: 'The study suggests that the effect may be small.' }
        ],
        writing: [
          { prompt: 'เขียนประโยคสรุป (paraphrase) พร้อมการอ้างแหล่งจาก "Sleep supports memory consolidation" โดยใช้ Lee (2019) เป็นชื่อสมมุติ',
            sample: 'According to Lee (2019), sleep plays an important role in consolidating memories.',
            checklist: ['ใช้โครงประโยคใหม่ ไม่คัดลอกคำตรงๆ', 'มี signal phrase และปีในวงเล็บ', 'ไม่เกินระดับหลักฐานที่มี'] },
          { prompt: 'ระบุว่าประโยคใดเป็นการลอกผลงาน แล้วเขียนใหม่ให้ถูกต้อง: "Students who sleep well perform better in exams."',
            sample: 'If this sentence came from a source without quotation marks or citation, it is plagiarism. A correct version: Lee (2019) suggests that students who sleep well may perform better in exams.',
            checklist: ['ระบุได้ว่าประโยคเดิมต้องมีการอ้างแหล่งถ้าไม่ใช่ความคิดของเรา', 'เขียนใหม่ด้วยโครงใหม่และอ้างแหล่ง', 'ใช้ hedging ให้สอดคล้องกับหลักฐาน'] }
        ]
      },
      {
        id: 'essay-conclusion', level: 'C1', title: 'Conclusions That Land', th: 'บทสรุปที่หนักแน่นและไม่เพิ่มหลักฐานใหม่',
        explain: 'บทสรุปที่ดีทำสามอย่าง: <b>restate</b> ประโยคหลักด้วยถ้อยคำใหม่ <b>summarise</b> ประเด็นหลักสั้นๆ และ <b>imply</b> ความหมายที่กว้างขึ้น (เช่น ข้อเสนอแนะหรือคำถามที่เหลืออยู่) บทสรุป<b>ไม่ควรเพิ่มหลักฐานใหม่</b> และไม่ควรคัดลอกประโยคหลักคำต่อคำ การใช้ hedging ยังสำคัญในบทสรุปเช่นกัน',
        formula: 'In conclusion, [restated thesis in new words] · [Summary of two or three main points] · [Implication, e.g., This suggests that X should Y.]',
        examples: [
          { en: 'S:This evidence|aux:suggests|C:that bike lanes may improve safety', th: 'หลักฐานนี้ชี้ว่าเลนจักรยานอาจช่วยความปลอดภัย (ใช้ hedging)' },
          { en: 'S:Taken together|V:the points|O:support the case for reform', th: 'เมื่อรวมประเด็นทั้งหมดแล้ว สนับสนุนการปฏิรูป' }
        ],
        confuse: [
          'บทสรุปที่คัดลอกประโยคหลักคำต่อคำดูไม่มีการคิดต่อ ควรเขียนใหม่ด้วยถ้อยคำและความหมายที่ชัดขึ้น',
          'การเพิ่มหลักฐานใหม่ในบทสรุปทำให้ผู้อ่านสงสัยว่าทำไมไม่อยู่ในเนื้อหา'
        ],
        quiz: [
          { q: 'Which conclusion sentence restates the thesis without copying?', o: ['Clearly, cities that fund bike lanes gain healthier residents.', 'Bike lanes are in the essay.', 'Thesis: bike lanes help cities.', 'A new study shows something else.'], a: 0,
            clue: 'เขียนใหม่ ไม่คัดลอก และยังมีความหมายเดิม', rule: 'restate คือเขียนประโยคหลักด้วยถ้อยคำอื่นแต่ความหมายเดิม',
            why: 'เป็นประโยคที่แสดงความหมายเดิมด้วยคำใหม่', n: ['', 'ไม่ได้บอกความหมายของประโยคหลัก เพียงบอกว่าอยู่ในเรียงความ', 'คัดลอกโครงของ thesis และใส่คำว่า Thesis ซึ่งไม่เหมาะกับบทสรุป', 'เพิ่มหลักฐานใหม่ ไม่ใช่การ restate'],
            ex: 'Overall, the essay has shown that transport investment pays off.' },
          { q: 'What should NOT appear in a conclusion?', o: ['A brand-new piece of evidence', 'A summary of the main points', 'A statement of implications', 'A restated thesis'], a: 0,
            clue: 'สิ่งที่ไม่ควรมีในบทสรุป', rule: 'บทสรุปไม่เพิ่มหลักฐานใหม่',
            why: 'หลักฐานใหม่ควรอยู่ในเนื้อหาให้ผู้อ่านประเมินก่อนถึงบทสรุป', n: ['', 'การสรุปประเด็นหลักเป็นหน้าที่ปกติของบทสรุป', 'การบอกความหมายที่กว้างขึ้นเป็นหน้าที่ปกติของบทสรุป', 'การ restate thesis เป็นหน้าที่ปกติของบทสรุป'],
            ex: 'The conclusion pulls the essay together without introducing new sources.' },
          { q: 'Which sentence states an implication?', o: ['This suggests that the city should invest in safer routes.', 'The city is in Thailand.', 'I enjoyed writing this.', 'A bike is a vehicle.'], a: 0,
            clue: 'บอกความหมายที่กว้างขึ้นจากงาน', rule: 'implication บอกว่าผลของงานนำไปสู่อะไร',
            why: 'ประโยคนี้บอกข้อเสนอที่ต่อยอดจากหลักฐาน', n: ['', 'เป็นข้อบรรยาย ไม่ได้บอกความหมายของงาน', 'เป็นความเห็นส่วนตัวไม่เกี่ยวกับประเด็น', 'เป็นข้อเท็จจริงทั่วไป ไม่ได้บอกนัยยะ'],
            ex: 'These findings imply that schools should review their timetables.' },
          { q: 'Which phrase best starts a conclusion?', o: ['In conclusion,', 'Furthermore,', 'For example,', 'First,'], a: 0,
            clue: 'คำขึ้นต้นบทสรุปมาตรฐาน', rule: 'ใช้ In conclusion หรือวลีที่บอกการสรุปเพื่อให้ผู้อ่านรู้ว่าจบแล้ว',
            why: 'In conclusion บอกผู้อ่านชัดว่าเข้าสู่ส่วนสรุป', n: ['', 'furthermore บอกการเพิ่มความคิด ไม่ใช่การสรุป', 'for example ใช้ยกตัวอย่าง ไม่ใช่การสรุป', 'first บอกลำดับเริ่มต้น ไม่ใช่การสรุป'],
            ex: 'In conclusion, the evidence points to a simple solution.' },
          { q: 'Restating means:', o: ['Expressing the same idea in new words', 'Copying the thesis exactly', 'Adding new facts', 'Removing the thesis'], a: 0,
            clue: 'ความหมายของ restate', rule: 'restate = ความหมายเดิม คำใหม่',
            why: 'การ restate คือการเขียนความหมายเดิมด้วยถ้อยคำใหม่', n: ['', 'การคัดลอกคำต่อคำไม่ใช่ restate ที่ดี', 'การเพิ่มข้อเท็จจริงใหม่ไม่ใช่ restate', 'การตัด thesis ออกไม่ใช่การ restate'],
            ex: 'Restating the thesis helps readers remember the main argument.' }
        ],
        writing: [
          { prompt: 'เขียนบทสรุปสองประโยคจาก thesis: "Schools should start later because students need more sleep." โดยไม่คัดลอกคำต่อคำ และไม่เพิ่มหลักฐานใหม่',
            sample: 'Overall, the argument shows that later start times would help students who need more rest. This suggests that school administrators should review the timetable.',
            checklist: ['เขียน thesis ใหม่ด้วยถ้อยคำอื่น', 'ไม่เพิ่มหลักฐานหรือข้อเท็จจริงใหม่', 'มีนัยยะหรือข้อเสนอแนะหนึ่งข้อ'] },
          { prompt: 'ตรวจบทสรุปนี้: "In conclusion, bike lanes are good. A new study from 2025 also shows they reduce crime." บอกว่าปัญหาคืออะไรและแก้อย่างไร',
            sample: 'The conclusion adds a new source (a 2025 study) that was never discussed in the body, so it should be removed or moved into the body. The first sentence could be rewritten with a clearer, hedged implication.',
            checklist: ['ระบุว่ามีการเพิ่มหลักฐานใหม่ในบทสรุป', 'เสนอวิธีแก้ เช่น ย้ายเข้าเนื้อหา หรือตัดออก', 'ปรับประโยคให้มี hedging และนัยยะชัดเจน'] }
        ]
      }
    ],
    post: [
      { q: 'Where should the thesis usually be placed?', o: ['Introduction', 'Conclusion', 'Body 2 only', 'References'], a: 0,
        clue: 'ผู้อ่านต้องเห็นจุดยืนก่อนเนื้อหา', rule: 'thesis อยู่ท้ายบทนำ',
        why: 'บทนำคือส่วนที่เสนอ thesis', n: ['', 'สรุปใช้ restate thesis ไม่ใช่ที่วางครั้งแรก', 'body 2 พัฒนาประเด็น ไม่ใช่จุดเสนอ thesis', 'references เป็นรายการแหล่ง ไม่ใช่ส่วนของเรียงความ'],
        ex: 'The thesis closes the introduction and guides the reader.' },
      { q: 'Which is the best arguable thesis?', o: ['Cars exist.', 'Cities should limit car use downtown because it reduces air pollution and traffic deaths.', 'Some people drive.', 'Driving is a verb.'], a: 1,
        clue: 'มีจุดยืนและเหตุผลที่พิสูจน์ได้', rule: 'thesis ต้องถกเถียงได้และบอกเหตุผลหลัก',
        why: 'ประโยคนี้บอกจุดยืนและเหตุผลสองประการ', n: ['ข้อเท็จจริงทั่วไป ไม่มีจุดยืน', '', 'บรรยายพฤติกรรม ไม่มีจุดยืน', 'เป็นข้อเท็จจริงทางไวยากรณ์ ไม่ใช่ thesis'],
        ex: 'Libraries should extend their hours because they support working students.' },
      { q: 'What should a topic sentence do?', o: ['Introduce the main point of the paragraph', 'List all the references', 'End the essay', 'Repeat the title'], a: 0,
        clue: 'หน้าที่ของประโยคแรกของย่อหน้า', rule: 'topic sentence บอกประเด็นของย่อหน้า',
        why: 'ผู้อ่านรู้ว่าย่อหน้าจะพิสูจน์อะไรจากประโยคนี้', n: ['', 'รายการแหล่งอยู่ท้ายเรียงความ ไม่ใช่หน้าที่ของ topic sentence', 'การจบเรียงความเป็นหน้าที่ของ conclusion', 'การซ้ำชื่อเรื่องไม่ได้บอกประเด็นของย่อหน้า'],
        ex: 'The second cost is maintenance, which often goes unnoticed.' },
      { q: 'The data were incomplete. ___, the team proceeded with caution.', o: ['Nevertheless,', 'For example,', 'Consequently,', 'Similarly,'], a: 0,
        clue: 'ข้อมูลไม่ครบ แต่ยังดำเนินการต่อ', rule: 'nevertheless บอกการสวนทางกับอุปสรรค',
        why: 'แม้มีอุปสรรคแต่ทีมยังทำงานต่อ', n: ['', 'for example ใช้ยกตัวอย่างไม่ได้ในบริบทนี้', 'consequently บอกผลลัพธ์ ไม่สื่อการสวนทาง', 'similarly บอกความคล้ายกัน ไม่ใช่การสวนทาง'],
        ex: 'The sample was small. Nevertheless, the findings were useful.' },
      { q: 'Which uses correct quotation and citation for a direct quote?', o: ['Lee (2019) writes, "Rest improves memory."', 'Lee (2019) writes Rest improves memory.', 'Lee writes "Rest improves memory" 2019.', '"Rest improves memory", Lee.'], a: 0,
        clue: 'คำพูดตรงต้องมีเครื่องหมายคำพูดและปีที่อ้างถึง', rule: 'quote ต้องใช้เครื่องหมายคำพูดและ signal phrase ที่ระบุผู้เขียน',
        why: 'รูปแบบนี้ระบุผู้เขียน ปี และใช้เครื่องหมายคำพูด', n: ['', 'ไม่มีเครื่องหมายคำพูด ทำให้ไม่ชัดว่าเป็นคำเดิม', 'ตำแหน่งปีและลำดับคำผิด', 'ลำดับไม่ชัดเจนและไม่มีคำบอกการอ้างอิง'],
        ex: 'Patel (2021) writes, "Practice makes the method reliable."' },
      { q: 'Which mistake weakens a conclusion most?', o: ['Introducing a brand-new statistic', 'Restating the thesis', 'Stating an implication', 'Summarising the main points'], a: 0,
        clue: 'สิ่งที่ทำให้บทสรุปอ่อนลง', rule: 'บทสรุปไม่เพิ่มหลักฐานใหม่',
        why: 'ตัวเลขใหม่ทำให้ผู้อ่านสงสัยว่าทำไมไม่อยู่ในเนื้อหา', n: ['', 'การ restate เป็นหน้าที่ที่ดีของบทสรุป', 'การบอกนัยยะเป็นหน้าที่ที่ดีของบทสรุป', 'การสรุปประเด็นหลักเป็นหน้าที่ที่ดีของบทสรุป'],
        ex: 'The conclusion should not introduce new numbers.' },
      { q: 'Which conclusion uses appropriate hedging?', o: ['This evidence suggests that bike lanes may improve safety.', 'Bike lanes always improve safety.', 'Bike lanes definitely make cities perfect.', 'Bike lanes prove everything.'], a: 0,
        clue: 'ระดับความมั่นใจต้องตรงกับหลักฐาน', rule: 'suggests + may สำหรับหลักฐานที่ยังไม่ยืนยันเด็ดขาด',
        why: 'ประโยคนี้ไม่เกินหลักฐานที่มี', n: ['', 'always เกินหลักฐานที่มีในงานทั่วไป', 'definitely และ perfect เกินจริง', 'prove everything เกินหลักฐานมาก'],
        ex: 'The findings may indicate a modest benefit.' },
      { q: 'Which best describes the link between paragraphs?', o: ['Each paragraph connects to the thesis and to the next paragraph with a transition', 'Each paragraph is independent of the others', 'Paragraphs contain no connections', 'Only the last paragraph connects to the thesis'], a: 0,
        clue: 'ความต่อเนื่องของเรียงความ', rule: 'ย่อหน้าต้องผูกกับ thesis และย่อหน้าถัดไปด้วยคำเชื่อม',
        why: 'ทำให้ผู้อ่านติดตามเหตุผลได้ตลอดทาง', n: ['', 'ย่อหน้าที่แยกกันขาดการเชื่อมโยงเหตุผล', 'ไม่มีการเชื่อมต่อทำให้เรียงความขาดความต่อเนื่อง', 'ทุกย่อหน้าต้องเชื่อมกับ thesis ไม่ใช่เฉพาะย่อหน้าสุดท้าย'],
        ex: 'Building on this point, the next paragraph examines cost.' },
      { q: 'Which thesis best fits an essay that weighs both sides?', o: ['Remote work has benefits and drawbacks, but the benefits outweigh the costs for most employees.', 'Remote work is work done at home.', 'Some people like remote work.', 'Work is good.'], a: 0,
        clue: 'เรียงความที่ชั่งน้ำหนักทั้งสองด้าน', rule: 'thesis ที่ดียอมรับข้อดีข้อเสียและบอกจุดยืนสุดท้าย',
        why: 'ประโยคนี้ยอมรับทั้งสองด้านและบอกจุดยืนชัดเจน', n: ['', 'เป็นคำนิยาม ไม่มีจุดยืน', 'เป็นความชอบส่วนตัว ไม่ชั่งน้ำหนัก', 'กว้างเกินไปและไม่มีจุดยืนที่พิสูจน์ได้'],
        ex: 'Public transport has limits, but investment still makes sense for most cities.' },
      { q: 'Which sentence reports a limited finding correctly?', o: ['Lee (2019) suggests that sleep may support memory in young adults.', 'Lee (2019) proves that sleep always supports memory.', 'Lee (2019) shows that everyone remembers more after sleep.', 'Lee (2019) is the only truth about sleep.'], a: 0,
        clue: 'ผลที่จำกัดต้องมีคำที่ระมัดระวัง', rule: 'ระบุกลุ่มที่ศึกษาและใช้ may/suggests',
        why: 'ประโยคนี้ระบุกลุ่ม (young adults) และไม่เกินหลักฐาน', n: ['', 'proves และ always เกินหลักฐานของงานเดียว', 'everyone เป็นการอ้างเกินกลุ่มที่ศึกษา', 'the only truth เป็นการอ้างความจริงที่เด็ดขาดเกินไป'],
        ex: 'The study suggests the effect may be strongest in older children.' }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
