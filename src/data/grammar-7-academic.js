/* หมวด 7: Academic Language — ภาษาเชิงวิชาการ (C1)
   สำหรับผู้เรียนที่เตรียมอ่าน/เขียนภาษาอังกฤษเชิงวิชาการ เช่น เพื่อสมัครมหาวิทยาลัยต่างประเทศ
   บทเรียนนี้สอนไวยากรณ์/ภาษาเชิงวิชาการเท่านั้น ไม่ใช่แบบฝึกข้อสอบ IELTS/TOEFL และไม่รับรองว่าผ่านบทแล้วจะได้คะแนนสอบหรือผ่านเกณฑ์รับสมัคร */
(function (root) {
  var EP = root.EP = root.EP || {};
  EP.grammar = EP.grammar || [];
  EP.grammar.push({
    id: 'academic',
    name: 'Academic Language',
    th: 'ภาษาเชิงวิชาการ',
    blurb: 'ภาษาที่ใช้ในงานเขียนวิชาการ/เรียงความสมัครเรียนต่อ — ระมัดระวังคำพูด เชื่อมความคิด และอ้างหลักฐานอย่างมีน้ำหนัก',
    lessons: [
      {
        id: 'acad-hedging', level: 'C1', title: 'Hedging Language', th: 'ภาษาที่ระมัดระวังคำพูด (ไม่ยืนยันมั่นคงเกินไป)',
        explain: 'งานเขียนวิชาการหลีกเลี่ยงการพูด<b>ยืนยันเด็ดขาด</b>เมื่อหลักฐานยังไม่หนักแน่นพอ ใช้ <b>hedging</b> (คำ/โครงสร้างที่ลดความมั่นใจลง) เพื่อให้<b>น้ำหนักของคำพูดตรงกับน้ำหนักของหลักฐาน</b><br>คำ/โครงสร้างที่ใช้บ่อย: <b>may, might, could, tend to, appear to, seem to, is likely to, suggests that, to some extent</b><br>เทียบ: "Coffee causes cancer." (ยืนยันเด็ดขาด — เกินจริงถ้าหลักฐานยังไม่แน่น) → "Some studies suggest that excessive coffee consumption <b>may be linked to</b> certain health risks." (ระมัดระวัง ตรงกับหลักฐานที่ยังไม่ฟันธง)',
        formula: 'ข้อความยืนยันเด็ดขาด (X causes Y) → <b>Hedged:</b> X <b>may/might/tend to</b> + V1 · X <b>is likely to</b> + V1 · <b>research suggests that</b> X ...',
        examples: [
          { en: 'S:Excessive screen time|aux:may|V:affect|O:sleep quality', th: 'การใช้หน้าจอมากเกินไปอาจส่งผลต่อคุณภาพการนอน (ไม่ฟันธงว่าเกิดขึ้นเสมอ)' },
          { en: 'S:The results|aux:suggest that|S:the treatment|aux:could be|C:effective', th: 'ผลการศึกษาชี้ว่าการรักษานี้อาจได้ผล (suggest = เสนอแนะ ไม่ใช่ยืนยัน)' },
          { en: 'S:This factor|aux:tends to|V:increase|O:the risk|Pl:to some extent', th: 'ปัจจัยนี้มีแนวโน้มเพิ่มความเสี่ยงในระดับหนึ่ง (tend to + to some extent = ระมัดระวังสองชั้น)' }
        ],
        confuse: [
          'ผู้เรียนไทยมักแปลความคิดเห็นของตัวเองแบบยืนยันเด็ดขาดตรงตัว (เช่น จากคำว่า "แน่นอน") ทำให้ภาษาอังกฤษเชิงวิชาการฟังดูมั่นใจเกินหลักฐานที่มี — ควรถามตัวเองว่า "หลักฐานที่มีแน่นขนาดนี้จริงหรือ" ก่อนใช้คำยืนยันเด็ดขาดอย่าง always/never/definitely/proves',
          'Hedging ≠ พูดคลุมเครือจนไม่มีความหมาย — ยัง<b>ต้องมีจุดยืนที่ชัดเจน</b> แค่ปรับระดับความมั่นใจให้เหมาะกับหลักฐาน ไม่ใช่หลีกเลี่ยงการพูดอะไรเลย'
        ],
        quiz: [
          { q: 'A small preliminary study found a possible link. ข้อใดเหมาะสมที่สุด', o: ['This proves that X causes Y.', 'This study suggests that X may be linked to Y.', 'X definitely causes Y.', 'Everyone agrees that X causes Y.'], a: 1,
            clue: 'preliminary study = หลักฐานยังไม่หนักแน่น', rule: 'หลักฐานเบื้องต้น/ยังไม่แน่น → ใช้ hedging (suggest, may)',
            why: 'การศึกษาเบื้องต้นเพียงชิ้นเดียวยังไม่พอจะ "พิสูจน์" อะไรได้ ต้องใช้ suggest/may',
            n: ['proves เป็นการยืนยันเด็ดขาดเกินหลักฐานที่มี', '', 'definitely เกินจริง', 'ไม่มีหลักฐานว่า "ทุกคนเห็นด้วย"'],
            ex: 'Preliminary results suggest that the drug might reduce symptoms.' },
          { q: 'Extensive research over 30 years strongly confirms X causes Y. ข้อใดเหมาะสมที่สุด', o: ['X might possibly cause Y, perhaps.', 'X causes Y.', 'It is remotely possible that X causes Y.', 'X may or may not be related to Y.'], a: 1,
            clue: 'extensive research + strongly confirms = หลักฐานหนักแน่นมาก', rule: 'หลักฐานหนักแน่นมาก → ใช้ข้อความที่มั่นใจได้ ไม่ต้อง hedge มากเกินไป',
            why: 'เมื่อมีหลักฐานหนักแน่นมากพอ การ hedge มากเกินไปจะทำให้คำพูดอ่อนเกินความเป็นจริง',
            n: ['hedge มากเกินไปทั้งที่หลักฐานหนักแน่นแล้ว', '', 'hedge มากเกินไป', 'hedge มากเกินไปและขัดกับ "strongly confirms"'],
            ex: 'Decades of research confirm that smoking causes lung cancer.' },
          { q: 'The results ___ that stress may affect memory. (เสนอแนะ ไม่ใช่ยืนยัน)', o: ['prove', 'suggest', 'guarantee', 'confirm absolutely'], a: 1,
            clue: 'may affect = ไม่ฟันธง', rule: 'suggest = เสนอแนะ/ชี้ว่าอาจเป็นไปได้ เหมาะกับข้อความที่มี may',
            why: 'suggest สอดคล้องกับความไม่แน่นอนที่ "may" สื่อไว้',
            n: ['prove สื่อความมั่นใจเกินไป ขัดกับ may', '', 'guarantee สื่อความมั่นใจเกินไป', 'confirm absolutely ขัดกับ may โดยตรง'],
            ex: 'The data suggest that the policy may reduce costs.' },
          { q: 'ข้อใดใช้ hedging ได้เหมาะสมที่สุดสำหรับข้อสังเกตจากกลุ่มตัวอย่างเล็ก', o: ['This always happens to everyone.', 'This tends to happen in some cases.', 'This never fails.', 'This is a universal law.'], a: 1,
            clue: 'กลุ่มตัวอย่างเล็ก = สรุปกว้างไม่ได้', rule: 'ตัวอย่างเล็ก/ไม่ครอบคลุม → ใช้ tend to/in some cases ไม่ใช่ always/never',
            why: 'tend to + in some cases เหมาะกับข้อสรุปจากกลุ่มตัวอย่างที่ไม่ใหญ่พอจะสรุปแบบเหมาเข่ง',
            n: ['always/everyone เกินจริงสำหรับกลุ่มตัวอย่างเล็ก', '', 'never ก็เกินจริงเช่นกัน', 'ไม่มีหลักฐานเพียงพอจะเรียกว่า universal law'],
            ex: 'This pattern tends to occur among younger participants.' },
          { q: 'เรียงคำให้ถูก: may / this / factor / to / contribute / the problem', o: ['This factor may contribute to the problem.', 'This factor contribute may to the problem.', 'May this factor contribute to the problem.', 'This factor may to contribute the problem.'], a: 0,
            clue: 'S + may + V1 + to + O', rule: 'S + may/might + V1 (+to+O)',
            why: 'This factor (S) → may contribute (hedge+V1) → to the problem',
            n: ['', 'may ต้องอยู่หน้ากริยาแท้', 'รูปนี้เป็นคำถาม ไม่ใช่บอกเล่า', 'contribute to ไม่ใช้ to ซ้ำแบบนี้'],
            ex: 'Several factors may contribute to climate change.' }
        ],
        writing: [
          { prompt: 'เขียนข้อความยืนยันเด็ดขาดนี้ใหม่ให้ระมัดระวังขึ้น (hedged): "Social media makes teenagers depressed."', sample: 'Some research suggests that heavy social media use may be associated with increased feelings of depression among teenagers.',
            checklist: ['เปลี่ยนคำยืนยันเด็ดขาด (makes) เป็นคำที่ระมัดระวังกว่า (may be associated with)', 'อ้างถึงแหล่งหลักฐานอย่างกว้าง ๆ (some research/studies)', 'ยังมีจุดยืนชัดเจน ไม่ใช่คลุมเครือจนไม่มีความหมาย'] },
          { prompt: 'แต่งประโยคเชิงวิชาการ 1 ประโยคที่ใช้ hedging เสนอความคิดเห็นของคุณเองอย่างระมัดระวัง', sample: 'It seems likely that remote work will continue to grow in popularity.',
            checklist: ['ใช้คำ/โครงสร้าง hedging อย่างน้อย 1 คำ (seems, likely, may, tend to)', 'ไม่ใช้คำยืนยันเด็ดขาด (always, definitely, proves)', 'ประโยคยังมีความหมายชัดเจน'] }
        ]
      },
      {
        id: 'acad-nominal', level: 'C1', title: 'Nominalisation', th: 'การแปลงกริยา/คุณศัพท์เป็นคำนามเชิงวิชาการ',
        explain: 'งานเขียนวิชาการมักเปลี่ยนกริยาหรือคุณศัพท์ให้เป็น<b>คำนามเชิงนามธรรม</b> (nominalisation) เพื่อให้น้ำเสียง<b>เป็นทางการและกระชับ</b>ขึ้น เช่น decide (v) → decision (n), significant (adj) → significance (n), increase (v) → increase/increment (n), analyze (v) → analysis (n)<br>เทียบ: "Scientists <b>decided</b> to reduce the dosage because the drug was <b>significant</b> in causing side effects." (พูดแบบธรรมดา) → "The <b>decision</b> to reduce the dosage was based on the drug\'s <b>significance</b> in causing side effects." (นามธรรม เป็นวิชาการมากขึ้น)',
        formula: 'กริยา/คุณศัพท์ → <b>คำนามธรรม</b>: decide→decision, analyze→analysis, significant→significance, improve→improvement, increase→increase(n)',
        examples: [
          { en: 'S:The committee|V:made|O:a decision|Pl:to postpone the project', th: 'คณะกรรมการทำการตัดสินใจเลื่อนโครงการ (decide → decision)' },
          { en: 'S:The significance|Pl:of the finding|V:surprised|O:the researchers', th: 'ความสำคัญของการค้นพบทำให้นักวิจัยแปลกใจ (significant → significance)' },
          { en: 'S:An analysis|Pl:of the data|V:revealed|O:a clear pattern', th: 'การวิเคราะห์ข้อมูลเผยให้เห็นรูปแบบที่ชัดเจน (analyze → analysis)' }
        ],
        confuse: [
          'ไม่ใช่ทุกกริยาเปลี่ยนรูปคำนามแบบเดา ๆ ได้ — บางคำเปลี่ยนไม่สม่ำเสมอ ต้องจำเป็นคำ ๆ ไป: improve→improve<b>ment</b>, decide→decis<b>ion</b>, significant→signific<b>ance</b>, know→know<b>ledge</b>',
          'ใช้ nominalisation<b>มากเกินไป</b>จนทุกประโยคเป็นคำนามล้วนจะทำให้อ่านยากและแข็งกระด้าง — ใช้เมื่อต้องการเน้นแนวคิดเป็นหลัก ไม่ใช่ใช้ทุกประโยค'
        ],
        quiz: [
          { q: 'The company announced its ___ to expand overseas. (decide)', o: ['decide', 'deciding', 'decision', 'decisive'], a: 2,
            clue: 'its + ___ = ต้องเป็นคำนาม', rule: 'decide (v) → decision (n)',
            why: 'หลัง its ต้องเป็นคำนาม และรูปคำนามของ decide คือ decision',
            n: ['decide เป็นกริยา ใช้หลัง its ไม่ได้', 'deciding เป็น gerund ไม่ตรงกับบริบทนี้', '', 'decisive เป็นคุณศัพท์'],
            ex: 'The decision to merge the two companies was unexpected.' },
          { q: 'The ___ of climate change on agriculture is well documented. (significant)', o: ['significant', 'significantly', 'significance', 'signify'], a: 2,
            clue: 'The ___ of = ต้องเป็นคำนาม', rule: 'significant (adj) → significance (n)',
            why: 'The + ___ + of ต้องเป็นคำนาม และรูปคำนามของ significant คือ significance',
            n: ['significant เป็นคุณศัพท์', 'significantly เป็น adverb', '', 'signify เป็นกริยา'],
            ex: 'The significance of this discovery cannot be overstated.' },
          { q: 'Researchers conducted a detailed ___ of the survey results. (analyze)', o: ['analyze', 'analyzing', 'analysis', 'analytic'], a: 2,
            clue: 'a detailed ___ = ต้องเป็นคำนาม', rule: 'analyze (v) → analysis (n)',
            why: 'a detailed + ___ ต้องเป็นคำนาม และรูปคำนามของ analyze คือ analysis',
            n: ['analyze เป็นกริยา', 'analyzing เป็น gerund ไม่เข้ากับ "a detailed" แบบนี้', '', 'analytic เป็นคุณศัพท์'],
            ex: 'The report includes a thorough analysis of consumer behavior.' },
          { q: 'ข้อใดเป็นการเขียนเชิงวิชาการที่ดีกว่า', o: ['We improved the process a lot, and it was very significant.', 'The improvement of the process had significant results.', 'We improve process good, significant.', 'The process, we improved, was significant, a lot.'], a: 1,
            clue: 'ใช้ nominalisation (improvement) แทนกริยา', rule: 'เปลี่ยนกริยาเป็นคำนามธรรมเพื่อความเป็นทางการ',
            why: '"The improvement of the process" ใช้ nominalisation ทำให้น้ำเสียงเป็นทางการกว่า',
            n: ['ใช้ภาษาพูดทั่วไป (a lot, very) ไม่เป็นวิชาการ', '', 'ผิดหลักไวยากรณ์หลายจุด', 'โครงสร้างประโยคสับสน'],
            ex: 'The implementation of the new policy led to measurable improvements.' },
          { q: 'เรียงคำให้ถูก: of / led / The / to / new / discoveries / analysis / the data', o: ['The analysis of the data led to new discoveries.', 'The data analysis of led to new discoveries.', 'Analysis the of data led to new discoveries.', 'The analysis led of the data to new discoveries.'], a: 0,
            clue: '[The analysis of the data] (ประธาน) + led to + [new discoveries]', rule: 'nominalised noun phrase ทำหน้าที่ประธานได้ทั้งก้อน',
            why: 'The analysis of the data (ประธานนามธรรม) → led to (V) → new discoveries (O)',
            n: ['', 'ลำดับคำใน noun phrase ผิด', 'ลำดับคำผิดทั้งหมด', 'of the data ต้องอยู่ติดกับ analysis'],
            ex: 'The evaluation of the results confirmed our hypothesis.' }
        ],
        writing: [
          { prompt: 'เขียนประโยคนี้ใหม่โดยใช้ nominalisation: "Scientists decided to reduce the dosage because the drug was significant in causing side effects."', sample: "The decision to reduce the dosage was based on the drug's significance in causing side effects.",
            checklist: ['เปลี่ยน decided เป็นรูปคำนาม (decision)', 'เปลี่ยน significant เป็นรูปคำนาม (significance)', 'ประโยคยังสื่อความหมายเดิมและอ่านเข้าใจได้'] },
          { prompt: 'แต่งประโยคเชิงวิชาการ 1 ประโยคที่ใช้คำนามธรรม (เช่น improvement, analysis, decision, significance) เป็นประธานของประโยค', sample: 'The improvement in test scores reflects the success of the new teaching method.',
            checklist: ['ประธานของประโยคเป็นคำนามธรรม (nominalised noun)', 'ประโยคมีความหมายชัดเจนและเป็นทางการ', 'ไม่ใช้คำนามธรรมมากเกินไปจนอ่านยาก'] }
        ]
      },
      {
        id: 'acad-parallel', level: 'C1', title: 'Parallel Structure', th: 'โครงสร้างคู่ขนานในการเขียน',
        explain: 'เมื่อเขียนรายการหรือเปรียบเทียบหลายสิ่งในประโยคเดียว <b>ทุกส่วนต้องอยู่ในรูปแบบไวยากรณ์เดียวกัน (parallel)</b><br>ผิด: "The study aims to identify causes, analyzing patterns, <b>and proposal of solutions</b>." (ผสม to+V1, V-ing, noun)<br>ถูก: "The study aims <b>to identify</b> causes, <b>to analyze</b> patterns, and <b>to propose</b> solutions." (ทุกส่วนเป็น to+V1 เหมือนกัน)',
        formula: 'A, B, and C ในรายการเดียวกัน ต้องมีรูปไวยากรณ์<b>เหมือนกันทุกตัว</b> (ทั้งหมดเป็น to+V1 หรือทั้งหมดเป็น V-ing หรือทั้งหมดเป็นคำนาม)',
        examples: [
          { en: 'S:The report|V:describes|O:the problem, explains the cause, and suggests a solution', th: 'รายงานอธิบายปัญหา อธิบายสาเหตุ และเสนอทางออก (describes, explains, suggests — กริยารูปเดียวกันหมด)' },
          { en: 'S:Good research requires|O:patience, discipline, and attention to detail', th: 'งานวิจัยที่ดีต้องมีความอดทน ความมีระเบียบ และความละเอียด (คำนามทั้งสามคำ)' },
          { en: 'S:She|V:enjoys|O:reading, writing, and traveling', th: 'เธอชอบอ่านหนังสือ เขียนหนังสือ และท่องเที่ยว (V-ing ทั้งสามคำ)' }
        ],
        confuse: [
          'จุดที่ผู้เรียนไทยพลาดบ่อย: ลืมปรับรูปคำตัวสุดท้ายในรายการให้ตรงกับตัวก่อนหน้า เพราะโฟกัสแค่ความหมาย ไม่ได้ตรวจรูปไวยากรณ์ย้อนกลับ',
          'Parallel structure ใช้ได้กับ<b>การเปรียบเทียบ</b>ด้วย ไม่ใช่แค่รายการ: "Learning online is <u>as effective as</u> attending in person." ต้องเทียบ gerund กับ gerund (learning...attending) ไม่ใช่ gerund กับ noun เปล่า ๆ'
        ],
        quiz: [
          { q: 'ข้อใดมีโครงสร้างคู่ขนานถูกต้อง', o: ['The plan is to save money, investing wisely, and retire early.', 'The plan is to save money, to invest wisely, and to retire early.', 'The plan is saving money, to invest wisely, and retirement early.', 'The plan is to save money, invest wisely, retiring early.'], a: 1,
            clue: 'ทุกส่วนต้องเป็นรูปเดียวกัน', rule: 'รายการในประโยคเดียวกันต้องมีรูปไวยากรณ์เหมือนกันทุกตัว',
            why: 'ทั้งสามส่วนเป็น to+V1 เหมือนกันหมด (to save, to invest, to retire)',
            n: ['ผสม to+V1, V-ing, V1 เปล่า ไม่คู่ขนาน', '', 'ผสม V-ing, to+V1, noun ไม่คู่ขนาน', 'ผสม to+V1, V1, V-ing ไม่คู่ขนาน'],
            ex: 'She likes to swim, to run, and to cycle.' },
          { q: 'The course teaches students to write clearly, ___ effectively, and think critically.', o: ['speak', 'speaking', 'to speak', 'spoken'], a: 2,
            clue: 'to write...___...think critically = รายการ 3 ส่วน', rule: 'ต้องเป็น to+V1 ให้ตรงกับ "to write" และ "(to) think"',
            why: 'ส่วนแรกเป็น to write ส่วนสุดท้ายเป็น think (ละ to ซ้ำได้) ส่วนกลางต้องเป็น to speak เพื่อคู่ขนานกัน',
            n: ['ขาด to ทำให้ไม่คู่ขนานกับ to write', 'V-ing ไม่คู่ขนานกับ to+V1', '', 'V3 ไม่คู่ขนานกับ to+V1'],
            ex: 'The program aims to build skills, boost confidence, and inspire creativity.' },
          { q: 'ข้อใดผิดหลัก parallel structure', o: ['She is intelligent, hardworking, and creative.', 'She is intelligent, hardworking, and has creativity.', 'The job requires creativity, patience, and skill.', 'He wants to travel, to learn, and to grow.'], a: 1,
            clue: 'intelligent, hardworking (คุณศัพท์) + has creativity (กริยา+คำนาม)', rule: 'รายการคุณศัพท์ต้องเป็นคุณศัพท์ทั้งหมด',
            why: '"has creativity" ทำลายความคู่ขนานกับ intelligent และ hardworking ซึ่งเป็นคุณศัพท์ ควรเป็น "creative"',
            n: ['ถูกต้อง คุณศัพท์ทั้งสามคำ', '', 'ถูกต้อง คำนามทั้งสามคำ', 'ถูกต้อง to+V1 ทั้งสามคำ'],
            ex: 'She is intelligent, hardworking, and creative. (ไม่ใช่ "and has creativity")' },
          { q: 'Working from home is as convenient as ___ in a shared office.', o: ['work', 'to work', 'working', 'worked'], a: 2,
            clue: 'Working (gerund) as...as ___', rule: 'การเปรียบเทียบต้องคู่ขนานกัน: gerund เทียบกับ gerund',
            why: 'ส่วนแรกของการเปรียบเทียบคือ Working (gerund) จึงต้องเทียบกับ working (gerund) เช่นกัน',
            n: ['ไม่คู่ขนานกับ Working', 'ไม่คู่ขนานกับ Working', '', 'ไม่คู่ขนานกับ Working (เป็นอดีต)'],
            ex: 'Reading books is as enjoyable as watching movies.' },
          { q: 'เรียงคำให้ถูก: to identify / aims / analyze / and / to / propose / solutions / to / The study / causes,', o: ['The study aims to identify causes, to analyze, and to propose solutions.', 'The study aims identify to causes, analyzing, and propose solutions to.', 'The study aims to identify causes, analyzing, and to propose solutions.', 'The study to aims identify causes, to analyze, propose to solutions.'], a: 0,
            clue: 'to identify, to analyze, to propose = คู่ขนานทั้งหมด', rule: 'รายการ to+V1 ทุกตัวต้องมี to นำหน้าเหมือนกัน',
            why: 'ทั้งสามส่วน (to identify, to analyze, to propose) อยู่ในรูป to+V1 เหมือนกันหมด',
            n: ['', 'ลำดับคำผิดและไม่คู่ขนาน', 'analyzing ไม่คู่ขนานกับ to identify/to propose', 'ลำดับคำผิดทั้งหมด'],
            ex: 'The plan is to research, to design, and to test the product.' }
        ],
        writing: [
          { prompt: 'แก้ประโยคนี้ให้มีโครงสร้างคู่ขนานที่ถูกต้อง: "The manager is responsible for hiring staff, training, and to manage the budget."', sample: 'The manager is responsible for hiring staff, training employees, and managing the budget.',
            checklist: ['ทั้งสามรายการอยู่ในรูป V-ing เหมือนกัน (hiring, training, managing)', 'ประโยคยังสื่อความหมายเดิม', 'ไม่มีการผสมรูปไวยากรณ์ในรายการเดียวกัน'] },
          { prompt: 'แต่งประโยค 1 ประโยคที่มีรายการ 3 สิ่งโดยใช้โครงสร้างคู่ขนาน (เลือกรูปแบบเดียว: to+V1 หรือ V-ing หรือคำนาม)', sample: 'A good leader should be honest, patient, and decisive.',
            checklist: ['เลือกรูปแบบเดียวสำหรับทั้ง 3 รายการ', 'ทุกรายการอยู่ในรูปแบบเดียวกันจริง ไม่มีการผสม', 'ประโยคสมบูรณ์และสมเหตุสมผล'] }
        ]
      },
      {
        id: 'acad-reporting', level: 'C1', title: 'Reporting Verbs', th: 'คำกริยารายงานคำพูด/ผลการศึกษาเชิงวิชาการ',
        explain: 'งานเขียนวิชาการเลี่ยงการใช้ "say/said" ซ้ำ ๆ และเลือกกริยารายงานที่บอก<b>น้ำหนัก/ท่าทีของผู้พูด</b>ต่อสิ่งที่พูดด้วย<br>• <b>argue</b> = เสนอจุดยืนพร้อมเหตุผล (มีการโต้แย้ง)<br>• <b>claim</b> = กล่าวอ้าง (ผู้เขียนอาจไม่เห็นด้วยเต็มที่)<br>• <b>suggest</b> = เสนอแนะอย่างระมัดระวัง (ไม่ฟันธง)<br>• <b>demonstrate/show</b> = แสดงให้เห็นด้วยหลักฐานที่ชัดเจน (มั่นใจสูง)<br>• <b>note/point out</b> = ชี้ให้เห็นข้อเท็จจริงหนึ่งอย่าง (เป็นกลาง)',
        formula: 'S + <b>argue/claim/suggest/demonstrate/note</b> + that + ประโยค (เลือกกริยาตามน้ำหนักความมั่นใจที่ต้องการสื่อ)',
        examples: [
          { en: 'S:The author|V:argues|R:that|S:stricter laws|aux:would|V:reduce|O:crime', th: 'ผู้เขียนเสนอจุดยืนว่ากฎหมายที่เข้มงวดขึ้นจะลดอาชญากรรม (มีเหตุผลรองรับ)' },
          { en: 'S:Critics|V:claim|R:that|S:the policy|aux:has|V:failed', th: 'ผู้วิจารณ์กล่าวอ้างว่านโยบายนี้ล้มเหลว (claim = อ้าง อาจไม่เห็นด้วยเต็มที่)' },
          { en: 'S:The data|V:demonstrate|R:that|S:the new method|aux:is|C:more effective', th: 'ข้อมูลแสดงให้เห็นว่าวิธีใหม่ได้ผลดีกว่า (demonstrate = มีหลักฐานชัดเจน)' }
        ],
        confuse: [
          'อย่าใช้ "say/said" พร่ำเพรื่อในงานเขียนวิชาการ — มันไม่ได้บอกว่าผู้เขียนคิดอย่างไรกับสิ่งที่พูด ในขณะที่ argue/claim/suggest ให้ข้อมูลเพิ่มว่าเป็นการโต้แย้ง การอ้าง หรือการเสนอแนะ',
          '<b>claim</b> มักสื่อความ<b>สงสัย/ไม่เห็นด้วยเล็กน้อย</b>จากผู้เขียน ต่างจาก <b>demonstrate/show</b> ที่สื่อว่าผู้เขียนเห็นด้วยกับความน่าเชื่อถือของหลักฐาน — เลือกผิดจะสื่อท่าทีผิดจากที่ตั้งใจ'
        ],
        quiz: [
          { q: 'The study provides strong, verified evidence that the vaccine works. ข้อใดเหมาะสมที่สุด', o: ['The study claims that the vaccine works.', 'The study demonstrates that the vaccine works.', 'The study might say the vaccine works.', 'Someone said the vaccine works.'], a: 1,
            clue: 'strong, verified evidence = หลักฐานหนักแน่น', rule: 'หลักฐานหนักแน่น/ชัดเจน → demonstrate/show',
            why: 'demonstrate สื่อว่ามีหลักฐานชัดเจนรองรับ ตรงกับ "strong, verified evidence"',
            n: ['claim สื่อความสงสัย ไม่เหมาะกับหลักฐานที่หนักแน่นขนาดนี้', '', 'ไม่เป็นทางการและไม่สื่อความมั่นใจ', 'said ไม่บอกน้ำหนักของหลักฐานเลย'],
            ex: 'The experiment demonstrates that the hypothesis is correct.' },
          { q: 'The politician stated something without solid proof, and the author is skeptical. ข้อใดเหมาะสมที่สุด', o: ['The politician demonstrates that the plan will work.', 'The politician claims that the plan will work.', 'The politician proves that the plan will work.', 'The politician shows that the plan will work.'], a: 1,
            clue: 'without solid proof + skeptical = ผู้เขียนไม่ค่อยเห็นด้วย', rule: 'ไม่มีหลักฐานหนักแน่น + ผู้เขียนสงสัย → claim',
            why: 'claim สื่อว่าเป็นการกล่าวอ้างที่ผู้เขียนไม่ได้ยืนยันว่าจริง ตรงกับความสงสัยของผู้เขียน',
            n: ['demonstrate สื่อว่ามีหลักฐานหนักแน่น ขัดกับ "without solid proof"', '', 'proves สื่อความมั่นใจเกินไป', 'shows สื่อความมั่นใจเกินไป'],
            ex: 'The company claims that its product is completely safe.' },
          { q: 'The writer presents a position with reasons to persuade readers. ข้อใดเหมาะสมที่สุด', o: ['The writer notes that the policy is unfair.', 'The writer argues that the policy is unfair.', 'The writer wonders that the policy is unfair.', 'The writer hopes that the policy is unfair.'], a: 1,
            clue: 'presents a position with reasons to persuade = การโต้แย้งอย่างมีเหตุผล', rule: 'เสนอจุดยืนพร้อมเหตุผล → argue',
            why: 'argue ตรงกับการเสนอจุดยืนที่มีเหตุผลรองรับเพื่อโน้มน้าวผู้อ่าน',
            n: ['note เป็นการชี้ข้อเท็จจริงเป็นกลาง ไม่ใช่การโต้แย้ง', '', 'wonder ไม่ใช้กับ that-clause แบบนี้ตามความหมายนี้', 'hope สื่อความปรารถนา ไม่ใช่การโต้แย้งด้วยเหตุผล'],
            ex: 'The essay argues that social media has damaged public discourse.' },
          { q: 'ข้อใดเป็นการชี้ข้อเท็จจริงอย่างเป็นกลาง (ไม่ใช่การโต้แย้งหรือกล่าวอ้าง)', o: ['The report argues that costs will rise.', 'The report notes that costs rose by 5% last year.', 'The report claims that costs will rise.', 'The report demonstrates that costs must rise.'], a: 1,
            clue: 'ข้อเท็จจริงตัวเลขที่วัดได้ ไม่มีการตีความ', rule: 'note/point out = ชี้ข้อเท็จจริงเป็นกลาง',
            why: 'ข้อความนี้เป็นข้อเท็จจริงที่วัดได้ (costs rose by 5%) ไม่ใช่การโต้แย้งหรือคาดการณ์ จึงใช้ note',
            n: ['argue ใช้กับการเสนอจุดยืน ไม่ใช่ข้อเท็จจริงล้วน ๆ', '', 'claim สื่อความสงสัย ไม่เหมาะกับข้อเท็จจริงที่วัดได้ชัดเจน', 'demonstrate สื่อการพิสูจน์ ไม่ใช่การรายงานข้อเท็จจริงเฉย ๆ'],
            ex: 'The survey notes that most respondents prefer remote work.' },
          { q: 'เรียงคำให้ถูก: argues / that / education / the author / reform / needs', o: ['The author argues that education needs reform.', 'The author that argues education needs reform.', 'Argues the author that education needs reform.', 'The author argues education that needs reform.'], a: 0,
            clue: 'S + argues + that + ประโยค', rule: 'S + reporting verb + that + S + V',
            why: 'The author (S) → argues (V) → that education needs reform (สิ่งที่โต้แย้ง)',
            n: ['', 'that ต้องอยู่หลัง argues ไม่ใช่หน้า', 'argues ต้องอยู่หลังประธาน', 'that ต้องอยู่หน้า education ไม่ใช่แทรกกลาง'],
            ex: 'Researchers argue that early intervention improves outcomes.' }
        ],
        writing: [
          { prompt: 'เลือก reporting verb ที่เหมาะสม แล้วแต่งประโยครายงานข้อความนี้: มีการศึกษาขนาดใหญ่และน่าเชื่อถือแสดงว่าการออกกำลังกายช่วยลดความเครียด', sample: 'Extensive research demonstrates that exercise helps reduce stress.',
            checklist: ['เลือก reporting verb ที่สื่อความมั่นใจสูง (demonstrate/show) ให้ตรงกับ "การศึกษาที่น่าเชื่อถือ"', 'ใช้โครงสร้าง S + reporting verb + that + ประโยค', 'ประโยคสื่อความหมายตรงกับข้อความต้นฉบับ'] },
          { prompt: 'แต่งประโยครายงานความเห็นของคนอื่นที่คุณไม่ค่อยเห็นด้วย โดยเลือก reporting verb ที่สื่อความสงสัยเล็กน้อย', sample: 'The company claims that its new product is completely eco-friendly.',
            checklist: ['เลือก claim (ไม่ใช่ demonstrate/show ซึ่งสื่อว่าผู้เขียนเห็นด้วย)', 'ใช้โครงสร้าง S + claim + that + ประโยค', 'เนื้อหาสมเหตุสมผลกับท่าทีที่ต้องการสื่อ'] }
        ]
      },
      {
        id: 'acad-cohesion', level: 'C1', title: 'Paragraph Cohesion', th: 'การเชื่อมความคิดในระดับย่อหน้า',
        explain: 'ย่อหน้าที่ดีต้อง<b>เชื่อมประโยคเข้าด้วยกัน</b> ไม่ใช่แค่เรียงประโยคเดี่ยว ๆ ต่อกัน ใช้ 2 เทคนิคหลัก:<br>1) <b>Linking devices</b> ตามความสัมพันธ์ของความคิด — เพิ่มเติม: moreover, in addition · ขัดแย้ง: however, on the other hand · ผลลัพธ์: as a result, consequently, therefore<br>2) <b>Reference words</b> แทนคำนามที่พูดไปแล้วเพื่อไม่พูดซ้ำ: this, these, such, the former — ต้องชัดเจนว่า<b>อ้างถึงอะไร</b> ไม่ให้ผู้อ่านสับสน',
        formula: '[ประโยค 1]. <b>However/Moreover/As a result</b>, [ประโยค 2 ที่เชื่อมโยงกับประโยคแรก]. <b>This</b> [คำนามช่วยขยายความ] ...',
        examples: [
          { en: 'S:The plan was expensive.|R:However,|S:the city|V:approved|O:it', th: 'แผนนี้มีราคาแพง อย่างไรก็ตาม เมืองก็อนุมัติ (however เชื่อมความขัดแย้ง)' },
          { en: 'S:Sales dropped|Pl:in the first quarter.|R:As a result,|S:the company|V:cut|O:costs', th: 'ยอดขายลดลงในไตรมาสแรก เป็นผลให้บริษัทลดต้นทุน (as a result เชื่อมเหตุ-ผล)' },
          { en: 'S:The report|V:cites|O:two studies.|M:The former|V:focuses|Pl:on urban areas', th: 'รายงานอ้างงานวิจัยสองชิ้น ชิ้นแรก (the former) มุ่งเน้นพื้นที่เมือง (reference word แทนงานวิจัยชิ้นแรกที่พูดไปแล้ว)' }
        ],
        confuse: [
          'ผู้เรียนไทยมักใช้ "and" เชื่อมทุกอย่างเพราะแปลจาก "และ" ตรงตัว — ควรเลือก linking device ให้ตรงกับความสัมพันธ์จริง (ขัดแย้ง/ผลลัพธ์/เพิ่มเติม) ไม่ใช่ "and" ทุกครั้ง',
          'reference word อย่าง "this/these/such" ต้อง<b>ชัดเจนว่าอ้างถึงคำนามตัวไหน</b> — ถ้าประโยคก่อนหน้ามีคำนามหลายตัว การใช้ "this" เดี่ยว ๆ อาจทำให้ผู้อ่านสับสนว่าหมายถึงอะไร ควรระบุให้ชัด เช่น "this policy" ไม่ใช่แค่ "this"'
        ],
        quiz: [
          { q: 'The company invested heavily in research. ___, profits declined for two years.', o: ['Moreover', 'However', 'Similarly', 'For example'], a: 1,
            clue: 'ลงทุนหนัก ↔ กำไรลดลง (ขัดแย้งกับที่คาดหวัง)', rule: 'ความคิดที่ขัดแย้งกัน → However',
            why: 'การลงทุนหนักน่าจะทำให้กำไรเพิ่ม แต่กลับลดลง จึงเป็นความขัดแย้ง ใช้ However',
            n: ['Moreover ใช้เพิ่มเติมความคิดที่ไปด้วยกัน ไม่ใช่ขัดแย้ง', '', 'Similarly ใช้เทียบความคล้ายกัน', 'For example ใช้ยกตัวอย่าง'],
            ex: 'The plan seemed perfect. However, it failed within a month.' },
          { q: 'Traffic congestion increased sharply. ___, the city built a new subway line.', o: ['As a result', 'In contrast', 'Similarly', 'Nevertheless'], a: 0,
            clue: 'รถติดมากขึ้น → สร้างรถไฟใต้ดิน (ผลลัพธ์/การตอบสนอง)', rule: 'เหตุ→ผล → As a result',
            why: 'การสร้างรถไฟใต้ดินเป็นผลลัพธ์ที่ตอบสนองต่อปัญหารถติด จึงใช้ As a result',
            n: ['', 'In contrast ใช้กับความขัดแย้ง ไม่ใช่เหตุ-ผล', 'Similarly ใช้เทียบความคล้ายกัน', 'Nevertheless ใช้กับความขัดแย้ง'],
            ex: 'Demand grew rapidly. As a result, the factory expanded production.' },
          { q: 'The report discusses two policies: tax cuts and subsidies. ___ mainly benefits large businesses.', o: ['The latter', 'The former', 'This one', 'That thing'], a: 1,
            clue: 'tax cuts (พูดถึงก่อน) และ subsidies (พูดถึงหลัง) — ประโยชน์ต่อธุรกิจใหญ่มักหมายถึงตัวแรก', rule: 'the former = ตัวแรกที่กล่าวถึง · the latter = ตัวหลัง',
            why: 'ในบริบทวิชาการทั่วไป tax cuts (ตัวแรก) มักเชื่อมโยงกับประโยชน์ต่อธุรกิจใหญ่ จึงใช้ the former',
            n: ['the latter หมายถึงตัวหลัง (subsidies) ไม่ตรงกับบริบทนี้', '', 'ไม่ชัดเจนว่าอ้างถึงอะไร', 'ไม่เป็นทางการและไม่ชัดเจน'],
            ex: 'The essay compares two theories; the former is more widely accepted.' },
          { q: 'ข้อใดใช้ reference word ได้ชัดเจนที่สุด (ไม่คลุมเครือ)', o: ['The government introduced a new tax and a new subsidy. This caused confusion.', 'The government introduced a new tax and a new subsidy. This policy caused confusion.', 'The government did things. This caused confusion.', 'Many changes happened. This.'], a: 1,
            clue: 'มีคำนาม 2 ตัวก่อนหน้า (tax, subsidy) — "this" เดี่ยว ๆ กำกวม', rule: 'ระบุคำนามที่ this อ้างถึงให้ชัดเจนเมื่อมีตัวเลือกมากกว่าหนึ่ง',
            why: '"This policy" ระบุชัดว่าหมายถึงอะไร ต่างจาก "This" เดี่ยว ๆ ที่กำกวมเมื่อมีคำนามสองตัวก่อนหน้า',
            n: ['This เดี่ยว ๆ กำกวมเพราะมีคำนามสองตัวให้อ้างถึง', '', 'things ไม่ชัดเจนว่าหมายถึงอะไร', 'ไม่มีกริยา ประโยคไม่สมบูรณ์'],
            ex: 'The team changed the design and the pricing. This redesign improved sales.' },
          { q: 'เรียงคำให้ถูก: was / result / delayed / a / As / the / project / , / the / flight', o: ['As a result, the project was delayed.', 'The project, as a result was delayed.', 'As result a, the project was delayed.', 'The project was delayed, as a result.'], a: 0,
            clue: 'As a result, + [ผลลัพธ์]', rule: 'As a result มักอยู่ต้นประโยคพร้อม comma',
            why: '"As a result," เป็น linking device ที่นิยมวางไว้ต้นประโยคตามด้วย comma',
            n: ['', 'as a result ควรอยู่ต้นประโยค ไม่ใช่แทรกกลาง', 'ลำดับคำใน "as a result" ผิด', 'วางท้ายประโยคได้แต่ไม่เป็นธรรมชาติเท่าวางต้นประโยคในบริบทนี้ (ตัวเลือกที่ถูกคือรูปแบบมาตรฐานที่สุด)'],
            ex: 'As a result, the meeting was postponed.' }
        ],
        writing: [
          { prompt: 'เชื่อมสองประโยคนี้ให้เป็นย่อหน้าที่ลื่นไหลโดยใช้ linking device ที่เหมาะสม: "Renewable energy costs have fallen. Many countries still rely heavily on coal."', sample: 'Renewable energy costs have fallen significantly in recent years. However, many countries still rely heavily on coal.',
            checklist: ['เลือก linking device ที่สื่อความขัดแย้ง (however) เพราะสองประโยคขัดกับสิ่งที่คาดหวัง', 'มี comma หลัง linking device ที่ต้นประโยค', 'ย่อหน้าอ่านลื่นไหลกว่าประโยคเดี่ยว ๆ'] },
          { prompt: 'เขียนย่อหน้าสั้น 2-3 ประโยคอธิบายเหตุและผลของสถานการณ์หนึ่ง โดยใช้ "As a result" หรือ "Consequently" เชื่อมประโยค', sample: 'Fewer students applied to the university this year. As a result, the admissions office lowered the entry requirements.',
            checklist: ['มีประโยคที่เป็นเหตุและประโยคที่เป็นผลชัดเจน', 'ใช้ linking device เชื่อมเหตุ-ผล (as a result/consequently)', 'ย่อหน้ามีความต่อเนื่องเป็นเหตุเป็นผล'] }
        ]
      },
      {
        id: 'acad-summarize', level: 'C1', title: 'Summarizing & Comparing Evidence', th: 'การสรุปและเปรียบเทียบหลักฐาน',
        explain: 'การสรุปเชิงวิชาการที่ดี: 1) <b>ใช้คำพูดของตัวเอง</b> (paraphrase) ไม่ลอกคำต่อคำ 2) <b>ระบุน้ำหนักของหลักฐาน</b> (strong evidence / limited evidence / a single study) 3) เมื่อเปรียบเทียบ 2 แหล่ง ใช้คำเปรียบเทียบ: <b>similarly, likewise</b> (คล้ายกัน) · <b>in contrast, whereas, while</b> (ต่างกัน) · <b>both...and</b> (มีร่วมกัน)<br>ปิดท้ายด้วย<b>ข้อสรุปที่มีเหตุผลรองรับ</b> ไม่ใช่แค่ทวนซ้ำข้อมูล',
        formula: '[สรุปแหล่งที่ 1 ด้วยคำพูดตัวเอง]. <b>In contrast/Similarly</b>, [สรุปแหล่งที่ 2]. <b>Overall/Taken together</b>, [ข้อสรุปที่มีเหตุผล]',
        examples: [
          { en: 'S:Study A|V:found|R:that|S:exercise|aux:improves|O:mood', th: 'งานวิจัย A พบว่าการออกกำลังกายช่วยให้อารมณ์ดีขึ้น (สรุปด้วยคำพูดตัวเอง ไม่ลอกต้นฉบับ)' },
          { en: 'R:In contrast,|S:Study B|V:found|O:no significant effect', th: 'ในทางตรงกันข้าม งานวิจัย B ไม่พบผลที่มีนัยสำคัญ (in contrast เปรียบเทียบความต่าง)' },
          { en: 'R:Taken together,|S:the evidence|aux:remains|C:inconclusive', th: 'เมื่อพิจารณาร่วมกัน หลักฐานยังสรุปแน่ชัดไม่ได้ (สรุปตามน้ำหนักหลักฐานจริง ไม่เกินจริง)' }
        ],
        confuse: [
          'Paraphrase ≠ เปลี่ยนแค่คำสองสามคำจากต้นฉบับ — ต้องเปลี่ยน<b>โครงสร้างประโยค</b>ด้วย ไม่ใช่แค่สับเปลี่ยนคำพ้องความหมาย มิฉะนั้นยังถือเป็นการลอก',
          'อย่าสรุปหลักฐานที่มีจำกัด (การศึกษาเดียว กลุ่มตัวอย่างเล็ก) ให้ฟังดูเป็นข้อสรุปที่แน่ชัด — ต้องบอกตามความเป็นจริงว่าหลักฐานยัง "จำกัด" หรือ "ยังไม่สรุปแน่ชัด"'
        ],
        quiz: [
          { q: 'Original: "The results indicate a strong correlation between sleep and academic performance." ข้อใดคือ paraphrase ที่ดี (ไม่ใช่การลอก)', o: ['The results indicate a strong correlation between sleep and academic performance.', 'The findings suggest that students who sleep well tend to perform better academically.', 'Results indicate strong correlation sleep academic performance.', 'The results indicate a strong link between sleep and grades.'], a: 1,
            clue: 'เปลี่ยนโครงสร้างประโยค ไม่ใช่แค่สับคำ', rule: 'Paraphrase ที่ดีเปลี่ยนทั้งคำและโครงสร้างประโยค',
            why: 'ตัวเลือกนี้เปลี่ยนทั้งคำศัพท์และโครงสร้างประโยคทั้งหมด ไม่ใช่แค่ตัดคำหรือสลับคำเดี่ยว ๆ',
            n: ['เป็นการลอกคำต่อคำทั้งหมด ไม่ใช่ paraphrase', '', 'ตัดคำจนประโยคไม่สมบูรณ์ ไม่ใช่ paraphrase ที่ดี', 'เปลี่ยนแค่คำเดียว (link แทน correlation) โครงสร้างเดิมทั้งหมด ยังถือว่าใกล้เคียงการลอกมากเกินไป'],
            ex: 'Original: "Costs rose sharply." Paraphrase: "There was a sharp increase in costs."' },
          { q: 'Study A (500 participants, replicated 3 times) found X. Study B (10 participants, one-time) found Y. ข้อใดสรุปน้ำหนักหลักฐานได้เหมาะสมที่สุด', o: ['Both studies are equally reliable.', 'Study A provides stronger evidence than Study B due to its larger sample and replication.', 'Study B is more reliable because it is newer.', 'Neither study provides any useful evidence.'], a: 1,
            clue: '500 คน ทำซ้ำ 3 ครั้ง vs 10 คน ทำครั้งเดียว', rule: 'กลุ่มตัวอย่างใหญ่กว่า + ทำซ้ำได้ = หลักฐานหนักแน่นกว่า',
            why: 'ขนาดกลุ่มตัวอย่างและการทำซ้ำได้เป็นตัวชี้วัดความน่าเชื่อถือของหลักฐานทางวิชาการ',
            n: ['ขนาดกลุ่มตัวอย่างต่างกันมาก ไม่ควรถือว่าเท่ากัน', '', 'ความใหม่ไม่ใช่ตัวชี้วัดความน่าเชื่อถือของหลักฐาน', 'ทั้งสองงานยังมีข้อมูลที่มีประโยชน์ แม้จะน้ำหนักต่างกัน'],
            ex: 'A meta-analysis of 50 studies provides stronger evidence than a single small trial.' },
          { q: 'Study A found rising incomes; Study B found rising incomes too, in a different country. ข้อใดเชื่อมสองงานได้เหมาะสมที่สุด', o: ['In contrast, Study B found similar results.', 'Similarly, Study B found comparable results in another country.', 'However, Study B agreed with Study A.', 'On the other hand, both studies found the same thing.'], a: 1,
            clue: 'ผลลัพธ์คล้ายกัน (rising incomes ทั้งคู่)', rule: 'ผลลัพธ์คล้ายกัน → similarly/likewise',
            why: 'ทั้งสองงานพบผลลัพธ์คล้ายกัน (รายได้เพิ่มขึ้น) จึงควรใช้ similarly ไม่ใช่คำที่สื่อความขัดแย้ง',
            n: ['In contrast สื่อความขัดแย้ง ไม่ตรงกับผลลัพธ์ที่คล้ายกัน', '', 'However สื่อความขัดแย้ง ไม่เข้ากับ "agreed"', 'On the other hand สื่อความขัดแย้ง ไม่เหมาะกับผลลัพธ์ที่เหมือนกัน'],
            ex: 'Study A showed improved outcomes; similarly, Study B reported the same trend.' },
          { q: 'ข้อใดเป็นข้อสรุปที่มีเหตุผลรองรับเหมาะสมกับหลักฐานที่ "ยังจำกัด"', o: ['This proves the theory is completely correct.', 'The evidence is limited, so further research is needed before drawing firm conclusions.', 'Everyone should believe this theory now.', 'This theory is obviously false.'], a: 1,
            clue: 'หลักฐานยังจำกัด = ยังฟันธงไม่ได้', rule: 'หลักฐานจำกัด → ข้อสรุปต้องระมัดระวัง ไม่ฟันธง',
            why: 'ข้อสรุปนี้ยอมรับข้อจำกัดของหลักฐานตามจริง และเสนอแนะอย่างสมเหตุผล (ต้องการวิจัยเพิ่ม)',
            n: ['proves ฟันธงเกินหลักฐานที่มีจำกัด', '', 'ไม่มีเหตุผลรองรับ เป็นการชักจูงไม่ใช่ข้อสรุปวิชาการ', 'ฟันธงในทางลบเกินหลักฐานที่มี'],
            ex: 'Given the limited sample size, these findings should be interpreted with caution.' },
          { q: 'เรียงคำให้ถูก: the / Taken / evidence / together / remains / inconclusive', o: ['Taken together, the evidence remains inconclusive.', 'The evidence, taken together remains inconclusive.', 'Taken the evidence together, remains inconclusive.', 'The evidence remains, taken together, inconclusive.'], a: 0,
            clue: 'Taken together, + [ข้อสรุป]', rule: 'Taken together มักวางต้นประโยคพร้อม comma เมื่อสรุปจากหลายแหล่ง',
            why: '"Taken together," เป็นวลีเชื่อมที่นิยมวางต้นประโยคก่อนข้อสรุปรวม',
            n: ['', 'ตำแหน่ง comma และลำดับคำไม่เป็นธรรมชาติเท่าตัวเลือกที่ถูก', 'ลำดับคำใน "taken together" ผิด', 'แทรกกลางประโยคทำให้อ่านสับสน'],
            ex: 'Taken together, these findings support the initial hypothesis.' }
        ],
        writing: [
          { prompt: 'สรุปข้อความนี้ด้วยคำพูดของตัวเอง (paraphrase) ไม่ลอกคำต่อคำ: "The survey revealed that most employees prefer flexible working hours over higher salaries."', sample: 'According to the survey, flexible schedules were valued by most employees more than increased pay.',
            checklist: ['เปลี่ยนโครงสร้างประโยค ไม่ใช่แค่สับเปลี่ยนคำ', 'ความหมายตรงกับต้นฉบับ', 'ไม่ลอกคำต่อคำจากประโยคต้นฉบับ'] },
          { prompt: 'เขียนย่อหน้าสั้นเปรียบเทียบผลการศึกษา 2 ชิ้นที่ได้ผลต่างกัน (สมมติขึ้น) แล้วปิดท้ายด้วยข้อสรุปที่มีเหตุผลรองรับ (ระบุว่าข้อมูลสมมุติ)', sample: 'Study A (ข้อมูลสมมุติ) found that remote work increased productivity, while Study B (ข้อมูลสมมุติ) found no significant change. Taken together, the mixed evidence suggests that the effect of remote work may depend on the type of job.',
            checklist: ['ใช้คำเปรียบเทียบความต่าง (while/in contrast)', 'ระบุชัดว่าข้อมูลเป็นข้อมูลสมมุติ (ข้อมูลสมมุติ)', 'ปิดท้ายด้วยข้อสรุปที่สมเหตุผล ไม่ใช่แค่ทวนข้อมูล'] }
        ]
      }
    ],
    post: [
      { q: 'A small preliminary study found a possible link. ข้อใดเหมาะสมที่สุด', o: ['This proves that X causes Y.', 'This study suggests that X may be linked to Y.', 'X definitely causes Y.', 'Everyone agrees that X causes Y.'], a: 1,
        clue: 'preliminary study = หลักฐานยังไม่หนักแน่น', rule: 'หลักฐานเบื้องต้น/ยังไม่แน่น → ใช้ hedging (suggest, may)',
        why: 'การศึกษาเบื้องต้นเพียงชิ้นเดียวยังไม่พอจะ "พิสูจน์" อะไรได้ ต้องใช้ suggest/may',
        n: ['proves เป็นการยืนยันเด็ดขาดเกินหลักฐานที่มี', '', 'definitely เกินจริง', 'ไม่มีหลักฐานว่า "ทุกคนเห็นด้วย"'],
        ex: 'Preliminary results suggest that the drug might reduce symptoms.' },
      { q: 'The company announced its ___ to expand overseas. (decide)', o: ['decide', 'deciding', 'decision', 'decisive'], a: 2,
        clue: 'its + ___ = ต้องเป็นคำนาม', rule: 'decide (v) → decision (n)',
        why: 'หลัง its ต้องเป็นคำนาม และรูปคำนามของ decide คือ decision',
        n: ['decide เป็นกริยา ใช้หลัง its ไม่ได้', 'deciding เป็น gerund ไม่ตรงกับบริบทนี้', '', 'decisive เป็นคุณศัพท์'],
        ex: 'The decision to merge the two companies was unexpected.' },
      { q: 'ข้อใดมีโครงสร้างคู่ขนานถูกต้อง', o: ['The plan is to save money, investing wisely, and retire early.', 'The plan is to save money, to invest wisely, and to retire early.', 'The plan is saving money, to invest wisely, and retirement early.', 'The plan is to save money, invest wisely, retiring early.'], a: 1,
        clue: 'ทุกส่วนต้องเป็นรูปเดียวกัน', rule: 'รายการในประโยคเดียวกันต้องมีรูปไวยากรณ์เหมือนกันทุกตัว',
        why: 'ทั้งสามส่วนเป็น to+V1 เหมือนกันหมด (to save, to invest, to retire)',
        n: ['ผสม to+V1, V-ing, V1 เปล่า ไม่คู่ขนาน', '', 'ผสม V-ing, to+V1, noun ไม่คู่ขนาน', 'ผสม to+V1, V1, V-ing ไม่คู่ขนาน'],
        ex: 'She likes to swim, to run, and to cycle.' },
      { q: 'The study provides strong, verified evidence that the vaccine works. ข้อใดเหมาะสมที่สุด', o: ['The study claims that the vaccine works.', 'The study demonstrates that the vaccine works.', 'The study might say the vaccine works.', 'Someone said the vaccine works.'], a: 1,
        clue: 'strong, verified evidence = หลักฐานหนักแน่น', rule: 'หลักฐานหนักแน่น/ชัดเจน → demonstrate/show',
        why: 'demonstrate สื่อว่ามีหลักฐานชัดเจนรองรับ ตรงกับ "strong, verified evidence"',
        n: ['claim สื่อความสงสัย ไม่เหมาะกับหลักฐานที่หนักแน่นขนาดนี้', '', 'ไม่เป็นทางการและไม่สื่อความมั่นใจ', 'said ไม่บอกน้ำหนักของหลักฐานเลย'],
        ex: 'The experiment demonstrates that the hypothesis is correct.' },
      { q: 'The ___ of climate change on agriculture is well documented. (significant)', o: ['significant', 'significantly', 'significance', 'signify'], a: 2,
        clue: 'The ___ of = ต้องเป็นคำนาม', rule: 'significant (adj) → significance (n)',
        why: 'The + ___ + of ต้องเป็นคำนาม และรูปคำนามของ significant คือ significance',
        n: ['significant เป็นคุณศัพท์', 'significantly เป็น adverb', '', 'signify เป็นกริยา'],
        ex: 'The significance of this discovery cannot be overstated.' },
      { q: 'The company invested heavily in research. ___, profits declined for two years.', o: ['Moreover', 'However', 'Similarly', 'For example'], a: 1,
        clue: 'ลงทุนหนัก ↔ กำไรลดลง (ขัดแย้งกับที่คาดหวัง)', rule: 'ความคิดที่ขัดแย้งกัน → However',
        why: 'การลงทุนหนักน่าจะทำให้กำไรเพิ่ม แต่กลับลดลง จึงเป็นความขัดแย้ง ใช้ However',
        n: ['Moreover ใช้เพิ่มเติมความคิดที่ไปด้วยกัน ไม่ใช่ขัดแย้ง', '', 'Similarly ใช้เทียบความคล้ายกัน', 'For example ใช้ยกตัวอย่าง'],
        ex: 'The plan seemed perfect. However, it failed within a month.' },
      { q: 'Original: "The results indicate a strong correlation between sleep and academic performance." ข้อใดคือ paraphrase ที่ดี', o: ['The results indicate a strong correlation between sleep and academic performance.', 'The findings suggest that students who sleep well tend to perform better academically.', 'Results indicate strong correlation sleep academic performance.', 'The results indicate a strong link between sleep and grades.'], a: 1,
        clue: 'เปลี่ยนโครงสร้างประโยค ไม่ใช่แค่สับคำ', rule: 'Paraphrase ที่ดีเปลี่ยนทั้งคำและโครงสร้างประโยค',
        why: 'ตัวเลือกนี้เปลี่ยนทั้งคำศัพท์และโครงสร้างประโยคทั้งหมด ไม่ใช่แค่ตัดคำหรือสลับคำเดี่ยว ๆ',
        n: ['เป็นการลอกคำต่อคำทั้งหมด ไม่ใช่ paraphrase', '', 'ตัดคำจนประโยคไม่สมบูรณ์', 'เปลี่ยนแค่คำเดียว โครงสร้างเดิมทั้งหมด ยังใกล้เคียงการลอกมากเกินไป'],
        ex: 'Original: "Costs rose sharply." Paraphrase: "There was a sharp increase in costs."' },
      { q: 'The politician stated something without solid proof, and the author is skeptical. ข้อใดเหมาะสมที่สุด', o: ['The politician demonstrates that the plan will work.', 'The politician claims that the plan will work.', 'The politician proves that the plan will work.', 'The politician shows that the plan will work.'], a: 1,
        clue: 'without solid proof + skeptical = ผู้เขียนไม่ค่อยเห็นด้วย', rule: 'ไม่มีหลักฐานหนักแน่น + ผู้เขียนสงสัย → claim',
        why: 'claim สื่อว่าเป็นการกล่าวอ้างที่ผู้เขียนไม่ได้ยืนยันว่าจริง ตรงกับความสงสัยของผู้เขียน',
        n: ['demonstrate สื่อว่ามีหลักฐานหนักแน่น ขัดกับ "without solid proof"', '', 'proves สื่อความมั่นใจเกินไป', 'shows สื่อความมั่นใจเกินไป'],
        ex: 'The company claims that its product is completely safe.' },
      { q: 'Study A (500 participants, replicated 3 times) found X. Study B (10 participants, one-time) found Y. ข้อใดสรุปน้ำหนักหลักฐานได้เหมาะสมที่สุด', o: ['Both studies are equally reliable.', 'Study A provides stronger evidence than Study B due to its larger sample and replication.', 'Study B is more reliable because it is newer.', 'Neither study provides any useful evidence.'], a: 1,
        clue: '500 คน ทำซ้ำ 3 ครั้ง vs 10 คน ทำครั้งเดียว', rule: 'กลุ่มตัวอย่างใหญ่กว่า + ทำซ้ำได้ = หลักฐานหนักแน่นกว่า',
        why: 'ขนาดกลุ่มตัวอย่างและการทำซ้ำได้เป็นตัวชี้วัดความน่าเชื่อถือของหลักฐานทางวิชาการ',
        n: ['ขนาดกลุ่มตัวอย่างต่างกันมาก ไม่ควรถือว่าเท่ากัน', '', 'ความใหม่ไม่ใช่ตัวชี้วัดความน่าเชื่อถือของหลักฐาน', 'ทั้งสองงานยังมีข้อมูลที่มีประโยชน์ แม้จะน้ำหนักต่างกัน'],
        ex: 'A meta-analysis of 50 studies provides stronger evidence than a single small trial.' },
      { q: 'ข้อใดเป็นข้อสรุปที่มีเหตุผลรองรับเหมาะสมกับหลักฐานที่ "ยังจำกัด"', o: ['This proves the theory is completely correct.', 'The evidence is limited, so further research is needed before drawing firm conclusions.', 'Everyone should believe this theory now.', 'This theory is obviously false.'], a: 1,
        clue: 'หลักฐานยังจำกัด = ยังฟันธงไม่ได้', rule: 'หลักฐานจำกัด → ข้อสรุปต้องระมัดระวัง ไม่ฟันธง',
        why: 'ข้อสรุปนี้ยอมรับข้อจำกัดของหลักฐานตามจริง และเสนอแนะอย่างสมเหตุผล',
        n: ['proves ฟันธงเกินหลักฐานที่มีจำกัด', '', 'ไม่มีเหตุผลรองรับ เป็นการชักจูงไม่ใช่ข้อสรุปวิชาการ', 'ฟันธงในทางลบเกินหลักฐานที่มี'],
        ex: 'Given the limited sample size, these findings should be interpreted with caution.' }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
