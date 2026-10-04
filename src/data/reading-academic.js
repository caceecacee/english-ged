/* บทอ่านเชิงวิชาการ — 4 บท (B2 · C1) ต่อจากชุด GED ใน reading.js
   ทุกบทแต่งขึ้นเพื่อการฝึก ไม่ใช่บทความจริงหรือข้อสอบจริง ชื่อเมือง ผู้เขียน และแหล่งที่อ้างเป็นเรื่องสมมุติ
   ไม่มีสถิติจริงในบทเหล่านี้ ระดับเป็นการจัดเพื่อฝึก ไม่ใช่ CEFR หรือเกณฑ์สอบทางการ
   รูปแบบเหมือน reading.js: s / th (จำนวนเท่ากัน), gloss, q[] ที่มี ev (ดัชนีประโยคหลักฐาน) */
(function (root) {
  var EP = root.EP = root.EP || {};
  EP.reading = EP.reading || [];
  EP.reading.push(
    {
      id: 'r13', subject: 'Academic', level: 'B2', title: 'Why Multitasking Slows Us Down', skill: 'ใจความหลัก · หลักฐาน · ความหมายจากบริบท · น้ำเสียงผู้เขียน',
      s: [
        'Many people believe they can answer messages, check the news, and write a report at the same time.',
        'Research on attention suggests that the brain does not truly perform these tasks together.',
        'Instead, it switches rapidly between them, and each switch takes a small amount of time and effort.',
        'Over a single afternoon, these small delays can add up to a significant loss of productive time.',
        'Switching can also leave residue, so that part of your attention remains on the previous task.',
        'This may explain why people often make more errors when they try to juggle several tasks.',
        'However, some routine tasks, such as walking while talking, can be done together with little cost, because they require little conscious attention.'
      ],
      th: [
        'คนจำนวนมากเชื่อว่าตนตอบข้อความ เช็กข่าว และเขียนรายงานพร้อมกันได้',
        'งานวิจัยเรื่องความสนใจชี้ว่าสมองไม่ได้ทำงานเหล่านี้พร้อมกันจริง ๆ',
        'แต่สมองจะสลับไปมาระหว่างงานอย่างรวดเร็ว และการสลับแต่ละครั้งใช้เวลาและความพยายามเล็กน้อย',
        'ในบ่ายวันเดียว ความล่าช้าเล็ก ๆ เหล่านี้อาจรวมกันเป็นการสูญเสียเวลาที่มีประสิทธิผลอย่างมาก',
        'การสลับงานยังอาจทิ้งร่องรอยไว้ ทำให้ส่วนหนึ่งของความสนใจยังค้างอยู่กับงานก่อนหน้า',
        'นี่อาจอธิบายได้ว่าทำไมคนมักทำผิดมากขึ้นเมื่อพยายามทำหลายงานพร้อมกัน',
        'อย่างไรก็ตาม งานประจำบางอย่าง เช่น การเดินไปพูดไป สามารถทำพร้อมกันได้โดยเสียค่าใช้จ่ายน้อย เพราะต้องใช้ความใส่ใจอย่างมีสติน้อย'
      ],
      gloss: [['switch', 'สลับ'], ['residue', 'ร่องรอยที่ค้างอยู่'], ['juggle', 'ทำหลายอย่างพร้อมกัน'], ['conscious attention', 'ความใส่ใจอย่างมีสติ'], ['significant', 'มีนัยสำคัญ / มาก']],
      q: [
        { q: 'What is the main idea of the passage?', qth: 'ใจความหลักของบทอ่านคืออะไร',
          o: ['Everyone can master multitasking with practice.', 'Switching between demanding tasks is costly.', 'Walking and talking should always be avoided.', 'Checking the news is the most productive activity.'], a: 1, ev: [2, 3],
          why: 'ประโยคที่ 2 และ 3 อธิบายว่าการสลับงานมีต้นทุนด้านเวลาและความพยายาม',
          n: ['ขัดกับบทอ่านที่บอกว่าสมองไม่ได้ทำพร้อมกันจริง', '', 'บทอ่านบอกว่างานประจำบางอย่างทำได้ ไม่ได้ให้เลี่ยงทั้งหมด', 'บทอ่านไม่ได้กล่าวถึงการเช็กข่าวว่ามีประสิทธิผลที่สุด'] },
        { q: 'In sentence 4, "residue" most nearly means:', qth: 'ในประโยคที่ 4 คำว่า "residue" มีความหมายใกล้เคียงกับข้อใดมากที่สุด',
          o: ['A lingering trace or effect', 'A useful tool', 'A sudden break', 'A formal document'], a: 0, ev: [4],
          why: 'ประโยคบอกว่าการสลับทิ้งส่วนของความสนใจที่ค้างอยู่กับงานก่อนหน้า จึงหมายถึงร่องรอยที่หลงเหลือ',
          n: ['', 'ไม่ตรงกับบริบทของการทิ้งร่องรอยความสนใจ', 'การหยุดกะทันหันไม่ตรงกับความหมายที่ค้างอยู่', 'เอกสารทางการไม่เกี่ยวกับบริบทนี้'] },
        { q: 'Why might people make more errors when they juggle several tasks?', qth: 'ทำไมคนอาจทำผิดมากขึ้นเมื่อทำหลายงานพร้อมกัน',
          o: ['Their attention is divided, and switching leaves traces of earlier tasks.', 'They do not know how to use computers.', 'Each task takes exactly the same time.', 'Tasks are always too easy to be interesting.'], a: 0, ev: [4, 5],
          why: 'ประโยคที่ 4 บอกว่าร่องรอยความสนใจค้างอยู่ และประโยคที่ 5 เชื่อมสิ่งนี้กับความผิดพลาด',
          n: ['', 'บทอ่านไม่ได้กล่าวถึงทักษะการใช้คอมพิวเตอร์', 'ขัดกับบทอ่านที่บอกว่าการสลับใช้เวลาเพิ่มขึ้น', 'บทอ่านไม่ได้บอกว่างานง่ายเกินไป'] },
        { q: 'Which best describes the author\'s tone?', qth: 'น้ำเสียงของผู้เขียนเป็นแบบใด',
          o: ['Cautious and evidence-based, avoiding absolute claims', 'Angry and certain', 'Humorous and dismissive', 'Neutral, with no view at all'], a: 0, ev: [1, 5],
          why: 'ผู้เขียนใช้ "suggests" และ "may explain" แทนการยืนยันเด็ดขาด',
          n: ['', 'บทอ่านไม่ได้แสดงความโกรธ และใช้คำที่ระมัดระวัง', 'บทอ่านไม่ได้ล้อเลียนหรือปฏิเสธอย่างไม่มีเหตุผล', 'ผู้เขียนมีจุดยืนชัดว่าการสลับงานมีต้นทุน'] },
        { q: 'According to the passage, which task is least affected by multitasking?', qth: 'ตามบทอ่าน งานประเภทใดได้รับผลกระทบจากการทำพร้อมกันน้อยที่สุด',
          o: ['Walking while talking', 'Writing a report', 'Answering several messages', 'Checking the news'], a: 0, ev: [6],
          why: 'ประโยคที่ 6 ระบุว่าการเดินไปพูดไปทำได้โดยเสียค่าใช้จ่ายน้อย',
          n: ['', 'บทอ่านไม่ได้ระบุว่างานเขียนรายงานได้รับผลกระทบน้อย', 'การตอบข้อความหลายข้อพร้อมกันอยู่ในกลุ่มงานที่สลับกันบ่อย', 'บทอ่านไม่ได้ระบุว่าการเช็กข่าวได้รับผลกระทบน้อย'] }
      ]
    },
    {
      id: 'r14', subject: 'Academic', level: 'B2', title: 'Correlation Is Not Cause', skill: 'ข้อโต้แย้ง · ข้อสมมติฐาน · ความหมายจากบริบท',
      s: [
        'A news report claims that people who drink coffee every morning live longer than those who do not.',
        'The report is based on a survey of several thousand adults, but the survey recorded habits at only one point in time.',
        'This kind of study can show a correlation, meaning that two things tend to appear together.',
        'It cannot, by itself, show that one thing causes the other.',
        'Coffee drinkers, for example, may also exercise more, sleep better, or have higher incomes, and any of these factors could explain the difference.',
        'Careful researchers therefore look for other explanations before accepting a causal claim.',
        'Readers should ask whether the study followed people over time and whether it considered other factors.'
      ],
      th: [
        'รายงานข่าวฉบับหนึ่งอ้างว่าคนที่ดื่มกาแฟทุกเช้ามีอายุยืนกว่าคนที่ไม่ดื่ม',
        'รายงานนี้อ้างอิงการสำรวจผู้ใหญ่หลายพันคน แต่การสำรวจบันทึกนิสัยเพียงครั้งเดียวในเวลาหนึ่ง',
        'การศึกษาแบบนี้อาจแสดงความสัมพันธ์ (correlation) คือสองสิ่งมักปรากฏด้วยกัน',
        'ตัวมันเองไม่สามารถแสดงว่าสิ่งหนึ่งเป็นสาเหตุของอีกสิ่งหนึ่งได้',
        'ตัวอย่างเช่น คนที่ดื่มกาแฟอาจออกกำลังกายมากกว่า นอนหลับดีกว่า หรือมีรายได้สูงกว่า และปัจจัยเหล่านี้อาจอธิบายความแตกต่างได้',
        'ดังนั้น นักวิจัยที่รอบคอบจึงมองหาคำอธิบายอื่นก่อนยอมรับข้ออ้างเรื่องเหตุและผล',
        'ผู้อ่านควรถามว่างานวิจัยติดตามผู้คนไปตามเวลาหรือไม่ และพิจารณาปัจจัยอื่นด้วยหรือเปล่า'
      ],
      gloss: [['correlation', 'ความสัมพันธ์ทางสถิติ'], ['causal', 'เกี่ยวกับเหตุและผล'], ['factor', 'ปัจจัย'], ['survey', 'การสำรวจ'], ['assumption', 'ข้อสมมติฐาน']],
      q: [
        { q: 'What is the claim in the news report?', qth: 'ข้ออ้างในรายงานข่าวคืออะไร',
          o: ['Coffee drinking is linked to longer life.', 'Coffee causes people to exercise more.', 'Adults should stop drinking coffee.', 'Surveys always give false results.'], a: 0, ev: [0],
          why: 'ประโยคแรกของบทอ่านระบุว่าการดื่มกาแฟทุกเช้าเกี่ยวข้องกับการมีอายุยืนขึ้น',
          n: ['', 'ไม่ได้อยู่ในรายงานข่าว', 'ไม่มีข้อความเสนอให้เลิกดื่มกาแฟ', 'บทอ่านไม่ได้บอกว่าการสำรวจผิดเสมอ'] },
        { q: 'Why can the survey alone not prove that coffee causes longer life?', qth: 'ทำไมการสำรวจเพียงอย่างเดียวจึงพิสูจน์ไม่ได้ว่ากาแฟทำให้อายุยืน',
          o: ['It records habits at one point, which can show correlation but not causation.', 'It included too few adults.', 'It was conducted by a coffee company.', 'It measured only sleep.'], a: 0, ev: [1, 2, 3],
          why: 'ประโยคที่ 1–3 อธิบายว่าการบันทึกครั้งเดียวแสดงได้เพียงความสัมพันธ์ ไม่ใช่เหตุและผล',
          n: ['', 'บทอ่านบอกว่ามีผู้ตอบหลายพันคน ไม่ได้บอกว่าน้อยเกินไป', 'ไม่มีข้อความระบุว่าใครเป็นผู้สำรวจ', 'การสำรวจบันทึกนิสัยหลายอย่าง ไม่ได้วัดการนอนอย่างเดียว'] },
        { q: 'In sentence 4, "factors" most nearly means:', qth: 'ในประโยคที่ 4 คำว่า "factors" มีความหมายใกล้เคียงกับข้อใดมากที่สุด',
          o: ['Things that contribute to an outcome', 'Mathematical results', 'Official documents', 'Daily routines only'], a: 0, ev: [4],
          why: 'ปัจจัยที่อธิบายความแตกต่างคือสิ่งที่มีส่วนทำให้เกิดผลลัพธ์นั้น',
          n: ['', 'ไม่ตรงกับบริบทของปัจจัยที่ส่งผลต่อผลลัพธ์', 'ไม่ตรงกับบริบท', 'ประโยคยกตัวอย่างหลายอย่างนอกเหนือจากกิจวัตร'] },
        { q: 'Which hidden assumption would the news report need to be true?', qth: 'รายงานข่าวต้องอาศัยข้อสมมติฐานใดที่ซ่อนอยู่เพื่อให้ข้ออ้างเป็นจริง',
          o: ['Other factors such as exercise and income do not explain the difference.', 'Coffee is cheaper than tea.', 'All adults drink coffee.', 'Surveys are never accurate.'], a: 0, ev: [4, 5],
          why: 'เพื่อให้กาแฟเป็นเหตุ ต้องสมมติว่าปัจจัยอื่นอย่างการออกกำลังกายและรายได้ไม่ได้อธิบายความแตกต่าง',
          n: ['', 'ราคากาแฟและชาไม่ได้เกี่ยวข้องกับข้ออ้างหลัก', 'บทอ่านบอกว่ามีคนไม่ดื่มกาแฟ จึงขัดกับข้อนี้', 'บทอ่านไม่ได้ว่าการสำรวจไม่แม่นยำเสมอ'] },
        { q: 'What is the author\'s advice to readers?', qth: 'ผู้เขียนแนะนำให้ผู้อ่านทำอย่างไร',
          o: ['Check whether the study followed people over time and considered other factors.', 'Believe any study that reports a result.', 'Ignore all health research.', 'Share the news immediately.'], a: 0, ev: [6],
          why: 'ประโยคสุดท้ายแนะนำให้ถามเรื่องการติดตามผลระยะยาวและปัจจัยอื่น',
          n: ['', 'ขัดกับคำแนะนำให้ตรวจสอบ', 'บทอ่านไม่ได้ให้ละทิ้งงานวิจัยทั้งหมด', 'บทอ่านไม่ได้แนะนำให้รีบแชร์'] }
      ]
    },
    {
      id: 'r15', subject: 'Academic', level: 'C1', title: 'Two Views on Online Learning', skill: 'เปรียบเทียบสองมุมมอง · น้ำเสียง · ความหมายจากบริบท',
      intro: 'บทความสองมุมมอง (แต่งขึ้นเพื่อฝึก)',
      label: { 0: 'Passage A', 3: 'Passage B' },
      s: [
        'Online courses give students flexibility, allowing them to learn at their own pace and around work schedules.',
        'For adults who cannot attend campus, this flexibility can be the difference between finishing a degree and giving up.',
        'Recorded lectures can also be replayed, which helps students who need extra time to understand difficult material.',
        'Critics, however, argue that the convenience of online study can conceal a serious loss of structure and community.',
        'Students who never meet classmates or instructors may struggle to stay motivated, and the absence of in-person deadlines can lead to procrastination.',
        'Such problems are not inevitable, but they suggest that online learning requires careful design rather than a simple transfer of classroom materials.',
        'Both views therefore accept that the quality of teaching, rather than the format alone, largely determines the outcome.'
      ],
      th: [
        'การเรียนออนไลน์ให้ความยืดหยุ่นแก่ผู้เรียน ทำให้เรียนได้ตามจังหวะของตนและเข้ากับตารางงานได้',
        'สำหรับผู้ใหญ่ที่เข้าเรียนในมหาวิทยาลัยไม่ได้ ความยืดหยุ่นนี้อาจเป็นสิ่งที่ทำให้จบปริญญาหรือยอมแพ้ไปเลย',
        'การบันทึกการบรรยายสามารถเปิดซ้ำได้ ซึ่งช่วยผู้เรียนที่ต้องการเวลาเพิ่มเพื่อเข้าใจเนื้อหายาก',
        'อย่างไรก็ตาม นักวิจารณ์โต้แย้งว่าความสะดวกของการเรียนออนไลน์อาจซ่อนการสูญเสียโครงสร้างและชุมชนการเรียนรู้ไปอย่างร้ายแรง',
        'ผู้เรียนที่ไม่เคยพบเพื่อนร่วมชั้นหรืออาจารย์อาจดิ้นรนเพื่อรักษาแรงจูงใจ และการไม่มีกำหนดส่งงานแบบพบหน้าอาจนำไปสู่การผัดผ่อน',
        'ปัญหาเหล่านี้ไม่ได้หลีกเลี่ยงไม่ได้ แต่ชี้ว่าการเรียนออนไลน์ต้องได้รับการออกแบบอย่างรอบคอบ ไม่ใช่การนำเนื้อหาจากห้องเรียนมาวางไว้เฉยๆ',
        'ดังนั้นทั้งสองมุมมองยอมรับว่าคุณภาพการสอนส่วนใหญ่เป็นตัวกำหนดผล มากกว่ารูปแบบเพียงอย่างเดียว'
      ],
      gloss: [['flexibility', 'ความยืดหยุ่น'], ['conceal', 'ซ่อนไว้'], ['procrastination', 'การผัดผ่อน'], ['inevitable', 'หลีกเลี่ยงไม่ได้'], ['convenience', 'ความสะดวก']],
      q: [
        { q: 'What is the main concern of Passage B?', qth: 'ประเด็นหลักที่บทความ B กังวลคืออะไร',
          o: ['Online study can lack structure and community.', 'Online courses are too cheap.', 'Recorded lectures are useless.', 'Adults should never study.'], a: 0, ev: [3, 4],
          why: 'ประโยคที่ 3–4 ของบทความ B พูดถึงการขาดโครงสร้างและชุมชน',
          n: ['', 'ไม่มีข้อความระบุเรื่องราคา', 'บทความ B ไม่ได้บอกว่าการบันทึกการบรรยายไร้ประโยชน์', 'บทความ B ไม่ได้บอกว่าผู้ใหญ่ไม่ควรเรียน'] },
        { q: 'Which evidence supports Passage A\'s claim about adult learners?', qth: 'หลักฐานใดสนับสนุนข้ออ้างของบทความ A เกี่ยวกับผู้เรียนผู้ใหญ่',
          o: ['For adults who cannot attend campus, this flexibility can be the difference between finishing and giving up.', 'Such problems are not inevitable.', 'Students never meet classmates.', 'Teaching quality matters most.'], a: 0, ev: [1],
          why: 'ประโยคที่ 1 ของบทความ A อธิบายผลต่อผู้ใหญ่ที่เข้าเรียนในมหาวิทยาลัยไม่ได้',
          n: ['', 'เป็นประเด็นของบทความ B', 'เป็นประเด็นของบทความ B', 'เป็นข้อสรุปร่วมของทั้งสองมุมมอง ไม่ใช่หลักฐานของ A'] },
        { q: 'The word "conceal" in sentence 3 most nearly means:', qth: 'คำว่า "conceal" ในประโยคที่ 3 มีความหมายใกล้เคียงกับข้อใดมากที่สุด',
          o: ['Hide or obscure', 'Advertise', 'Measure', 'Delay'], a: 0, ev: [3],
          why: 'ประโยคบอกว่าความสะดวกอาจ "ซ่อน" การสูญเสียโครงสร้างไว้ ความหมายจึงตรงกับการซ่อนหรือทำให้มองไม่เห็น',
          n: ['', 'ไม่ตรงกับบริบทของการซ่อนการสูญเสีย', 'ไม่ตรงกับบริบท', 'ไม่ตรงกับบริบท'] },
        { q: 'What do both passages ultimately agree on?', qth: 'ทั้งสองบทความเห็นพ้องกันในข้อใดในที่สุด',
          o: ['Teaching quality, more than format alone, shapes outcomes.', 'Online learning should be banned.', 'Campus learning has no advantages.', 'Recorded lectures always replace teachers.'], a: 0, ev: [6],
          why: 'ประโยคสุดท้ายระบุว่าทั้งสองมุมมองยอมรับว่าคุณภาพการสอนสำคัญกว่ารูปแบบ',
          n: ['', 'ไม่มีข้อความสนับสนุนให้ห้ามการเรียนออนไลน์', 'ไม่มีข้อความบอกว่าการเรียนในมหาวิทยาลัยไม่มีข้อดี', 'ไม่มีข้อความบอกว่าการบันทึกแทนที่ครูได้เสมอ'] },
        { q: 'Which best describes how Passage B relates to Passage A?', qth: 'ข้อใดอธิบายความสัมพันธ์ระหว่างบทความ B กับบทความ A ได้ดีที่สุด',
          o: ['It accepts some benefits but questions whether they are automatically realised.', 'It rejects all of Passage A.', 'It repeats Passage A word for word.', 'It is unrelated to online learning.'], a: 0, ev: [3, 5],
          why: 'บทความ B ยอมรับความสะดวก แต่ตั้งคำถามว่าประโยชน์เหล่านั้นจะเกิดขึ้นเองหรือไม่',
          n: ['', 'บทความ B ไม่ได้ปฏิเสธทั้งหมด เพราะยอมรับความสะดวกไว้แล้ว', 'ไม่ได้คัดลอกคำจากบทความ A', 'บทความ B เกี่ยวข้องกับการเรียนออนไลน์โดยตรง'] }
      ]
    },
    {
      id: 'r16', subject: 'Academic', level: 'C1', title: 'What Historians Ask of a Source', skill: 'ใจความหลัก · หลักฐานและแหล่งข้อมูล · การอนุมาน · ความหมายเชิงวิชาการ',
      s: [
        'A diary written during a war can seem like the most reliable window into the past.',
        'Yet a diary reflects one writer\'s perspective, shaped by fear, loyalty, or the wish to be remembered well.',
        'Historians therefore ask who wrote the source, why it was written, and who was expected to read it.',
        'A letter sent to a government office may exaggerate hardship in order to win support, while a private letter may omit it for fear of worrying family.',
        'Neither kind of evidence is useless, but each must be read against other sources before it is trusted.',
        'Corroboration, meaning the agreement of independent accounts, is one of the strongest tests of reliability.',
        'Even so, corroboration does not guarantee truth, since several writers may share the same bias or rely on the same rumour.'
      ],
      th: [
        'ไดอารี่ที่เขียนขณะเกิดสงครามอาจดูเหมือนหน้าต่างที่เชื่อถือได้มากที่สุดสู่อดีต',
        'แต่ไดอารี่สะท้อนมุมมองของผู้เขียนเพียงคนเดียว ซึ่งถูกหล่อหลอมด้วยความกลัว ความภักดี หรือความปรารถนาที่จะถูกจดจำในทางที่ดี',
        'ดังนั้น นักประวัติศาสตร์จึงถามว่าใครเป็นผู้เขียนแหล่งข้อมูล เขียนขึ้นเพราะเหตุใด และคาดว่าใครจะอ่าน',
        'จดหมายที่ส่งถึงหน่วยงานรัฐอาจพูดเกินจริงถึงความยากลำบาก เพื่อให้ได้รับการสนับสนุน ส่วนจดหมายส่วนตัวอาจละไว้เพราะกลัวทำให้ครอบครัวเป็นกังวล',
        'หลักฐานทั้งสองแบบไม่ได้ไร้ประโยชน์ แต่ต้องอ่านเทียบกับแหล่งอื่นก่อนจะนำมาเชื่อถือ',
        'การยืนยันจากหลายแหล่ง (corroboration) คือการที่บันทึกอิสระเห็นตรงกัน ซึ่งเป็นการทดสอบความน่าเชื่อถือที่แข็งแรงที่สุดอย่างหนึ่ง',
        'กระนั้น การยืนยันจากหลายแหล่งก็ไม่ได้รับประกันความจริง เพราะผู้เขียนหลายคนอาจมีอคติเดียวกัน หรือพึ่งข่าวลือเดียวกัน'
      ],
      gloss: [['reliable', 'น่าเชื่อถือ'], ['perspective', 'มุมมอง'], ['exaggerate', 'พูดเกินจริง'], ['corroboration', 'การยืนยันจากหลายแหล่ง'], ['bias', 'อคติ']],
      q: [
        { q: 'What is the main argument of the passage?', qth: 'ข้อโต้แย้งหลักของบทอ่านคืออะไร',
          o: ['No source should be trusted until its purpose, audience, and independence are examined.', 'Diaries are always the most accurate sources.', 'Government letters should never be used.', 'Corroboration proves that a source is true.'], a: 0, ev: [2, 4],
          why: 'ประโยคที่ 2 และ 4 อธิบายว่าต้องพิจารณาผู้เขียน เจตนา และผู้อ่าน และต้องอ่านเทียบกับแหล่งอื่นก่อนเชื่อถือ',
          n: ['', 'ขัดกับข้อความที่บอกว่าไดอารี่ก็มีมุมมองของผู้เขียน', 'ข้อความบอกว่าจดหมายไม่ไร้ประโยชน์ ไม่ได้ห้าม', 'ประโยคที่ 6 บอกว่าการยืนยันไม่ได้รับประกันความจริง'] },
        { q: 'In sentence 3, why might a letter to a government office exaggerate?', qth: 'ในประโยคที่ 3 เหตุใดจดหมายถึงหน่วยงานรัฐอาจพูดเกินจริง',
          o: ['To win support', 'To avoid writing anything', 'To record the weather', 'To copy a rumour exactly'], a: 0, ev: [3],
          why: 'ประโยคระบุว่าจดหมายถึงหน่วยงานรัฐอาจพูดเกินจริงเพื่อให้ได้รับการสนับสนุน',
          n: ['', 'ไม่ตรงกับเหตุผลที่ระบุไว้ในข้อความ', 'ข้อความไม่ได้กล่าวถึงสภาพอากาศ', 'ข้อความไม่ได้บอกว่าจดหมายคัดลอกข่าวลือเพื่อขยายความ'] },
        { q: 'Which best defines "corroboration" as used in the passage?', qth: 'ข้อใดนิยามคำว่า "corroboration" ตามที่ใช้ในบทอ่านได้ดีที่สุด',
          o: ['The agreement of independent accounts', 'A personal opinion about a diary', 'The deliberate hiding of evidence', 'A rule that bans government letters'], a: 0, ev: [5],
          why: 'ประโยคที่ 6 นิยาม corroboration ว่าเป็นการที่บันทึกอิสระเห็นตรงกัน',
          n: ['', 'ไม่ตรงกับนิยามในข้อความ', 'ไม่ตรงกับนิยามในข้อความ', 'ไม่ตรงกับนิยามในข้อความ'] },
        { q: 'Why does sentence 6 say corroboration does not guarantee truth?', qth: 'ทำไมประโยคที่ 6 จึงบอกว่าการยืนยันจากหลายแหล่งไม่ได้รับประกันความจริง',
          o: ['Several writers may share the same bias or rely on the same rumour.', 'Independent accounts are always false.', 'Historians never compare sources.', 'Diaries contain no information.'], a: 0, ev: [6],
          why: 'ประโยคสุดท้ายระบุว่าผู้เขียนหลายคนอาจมีอคติร่วมหรือพึ่งข่าวลือเดียวกัน',
          n: ['', 'ขัดกับข้อความที่ว่าการยืนยันเป็นการทดสอบที่แข็งแรง', 'ขัดกับข้อความที่ว่านักประวัติศาสตร์เทียบแหล่งข้อมูล', 'ขัดกับข้อความที่ว่าไดอารี่ให้มุมมองและข้อมูล'] },
        { q: 'Which practice is most consistent with the passage?', qth: 'แนวปฏิบัติใดสอดคล้องกับบทอ่านมากที่สุด',
          o: ['Asking who wrote a source, why, and for whom before relying on it', 'Trusting the most emotional account first', 'Using a source only because it is old', 'Ignoring the audience of a document'], a: 0, ev: [0, 2],
          why: 'ประโยคที่ 3 แนะนำให้ถามว่าใครเขียน เขียนเพราะอะไร และคาดว่าใครจะอ่าน',
          n: ['', 'ขัดกับหลักการอ่านแหล่งข้อมูลอย่างระมัดระวัง', 'ไม่มีข้อความบอกว่าแหล่งเก่าเชื่อถือได้มากกว่า', 'ขัดกับคำแนะนำให้พิจารณาผู้อ่านของเอกสาร'] }
      ]
    }
  );
})(typeof window !== 'undefined' ? window : globalThis);
