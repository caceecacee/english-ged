/* บทอ่านฝึกแนว GED — 12 บท (RLA 4 · Science 4 · Social Studies 4) เรียงจากง่ายไปยาก
   ทุกบทแต่งขึ้นเพื่อการฝึก ไม่ใช่ข้อสอบ GED จริง (ยกเว้นข้อความจาก Declaration of Independence ปี 1776 ซึ่งเป็นสาธารณสมบัติ)
   ข้อมูลตัวเลขในบทที่ระบุว่า "ข้อมูลสมมุติ" แต่งขึ้นเพื่อฝึกอ่านกราฟ/ตาราง
   รูปแบบ:
   s   = ประโยคภาษาอังกฤษ (อ้างถึงด้วยเลขลำดับเริ่มที่ 0)
   th  = คำแปลไทยทีละประโยค (จำนวนเท่ากับ s)
   label = (ไม่บังคับ) ป้ายหัวย่อหน้า ใส่ที่ index ของประโยคนั้น เช่น {0:'Passage A', 3:'Passage B'}
   visual = (ไม่บังคับ) {kind:'bar'|'table', ...}
   q.ev = ประโยคที่เป็นหลักฐาน (index) และ/หรือ 'visual' */
(function (root) {
  var EP = root.EP = root.EP || {};
  EP.reading = [
    {
      id: 'r1', subject: 'RLA', level: 'A2', title: 'The Garden on Maple Street', skill: 'ใจความหลัก · ลำดับเหตุการณ์',
      s: [
        'Last spring, the people on Maple Street had an empty lot.',
        'Nobody used it, and trash piled up there.',
        'Then Mrs. Lee had an idea.',
        'She asked her neighbors to help her turn the lot into a garden.',
        'Every Saturday, they cleaned, planted seeds, and watered the soil.',
        'By summer, the garden was full of tomatoes, beans, and flowers.',
        'Now neighbors meet there every weekend, and they share the vegetables.'
      ],
      th: [
        'ฤดูใบไม้ผลิที่แล้ว ผู้คนบนถนนเมเปิลมีที่ดินว่างอยู่แปลงหนึ่ง',
        'ไม่มีใครใช้ และขยะก็กองพะเนินอยู่ที่นั่น',
        'แล้วคุณนายลีก็มีความคิดขึ้นมา',
        'เธอขอให้เพื่อนบ้านช่วยกันเปลี่ยนที่ดินแปลงนั้นให้เป็นสวน',
        'ทุกวันเสาร์ พวกเขาทำความสะอาด หว่านเมล็ด และรดน้ำดิน',
        'พอถึงฤดูร้อน สวนก็เต็มไปด้วยมะเขือเทศ ถั่ว และดอกไม้',
        'ตอนนี้เพื่อนบ้านพบกันที่นั่นทุกสุดสัปดาห์ และแบ่งผักกัน'
      ],
      gloss: [['empty lot', 'ที่ดินว่าง'], ['trash', 'ขยะ'], ['pile up', 'กองสะสม'], ['neighbor', 'เพื่อนบ้าน'], ['share', 'แบ่งปัน']],
      q: [
        { q: 'What is the passage mainly about?', qth: 'บทอ่านนี้เกี่ยวกับอะไรเป็นหลัก',
          o: ['Neighbors turned an empty lot into a shared garden.', 'Mrs. Lee\'s favorite vegetables.', 'How to grow tomatoes quickly.', 'Why trash is bad for the city.'], a: 0, ev: [3, 5, 6],
          why: 'ประโยคที่ 4, 6 และ 7 เล่าตั้งแต่ขอความช่วยเหลือ จนได้สวนและแบ่งผักกัน ทั้งเรื่องจึงเป็นการเปลี่ยนที่ว่างให้เป็นสวนของชุมชน',
          n: ['', 'ไม่มีการบอกว่าคุณนายลีชอบผักอะไร', 'บทอ่านไม่ได้สอนวิธีปลูก', 'ขยะเป็นแค่รายละเอียดตอนต้น ไม่ใช่ใจความหลัก'] },
        { q: 'What happened FIRST?', qth: 'เหตุการณ์ใดเกิดขึ้นก่อน',
          o: ['Trash piled up in the empty lot.', 'The neighbors shared vegetables.', 'Tomatoes grew in the garden.', 'Mrs. Lee asked her neighbors for help.'], a: 0, ev: [1],
          why: 'ประโยคที่ 2 เกิดก่อนคำว่า Then ในประโยคที่ 3 ขยะกองอยู่ก่อนที่คุณนายลีจะมีความคิด',
          n: ['', 'เกิดขึ้นท้ายสุด (Now)', 'เกิดขึ้นในฤดูร้อน หลังจากปลูก', 'เกิดหลังจากที่ขยะกองอยู่แล้ว'] },
        { q: 'In sentence 3, the word "Then" shows ___.', qth: 'คำว่า "Then" ในประโยคที่ 3 แสดงอะไร',
          o: ['the next event in time', 'a reason', 'a contrast', 'an example'], a: 0, ev: [2],
          why: 'Then = แล้วต่อมา ใช้บอกเหตุการณ์ถัดไปตามลำดับเวลา',
          n: ['', 'เหตุผลใช้ because', 'ความขัดแย้งใช้ but หรือ however', 'ตัวอย่างใช้ for example'] },
        { q: 'What can you infer about the neighbors now?', qth: 'อนุมานได้ว่าตอนนี้เพื่อนบ้านเป็นอย่างไร',
          o: ['They know each other better.', 'They want to sell the lot.', 'They stopped working in the garden.', 'They do not like vegetables.'], a: 0, ev: [6],
          why: 'ประโยคที่ 7 บอกว่าพบกันทุกสุดสัปดาห์และแบ่งผักกัน แสดงว่าสนิทกันมากขึ้น แม้บทอ่านไม่ได้พูดตรง ๆ',
          n: ['', 'ไม่มีข้อความใดพูดถึงการขาย', 'ยังพบกันที่สวนทุกสุดสัปดาห์', 'พวกเขาแบ่งผักกัน จึงน่าจะชอบผัก'] }
      ]
    },
    {
      id: 'r2', subject: 'Science', level: 'A2', title: 'Why Do We Sweat?', skill: 'จุดประสงค์ · เหตุและผล',
      s: [
        'When your body gets too hot, you start to sweat.',
        'Sweat is mostly water, and it comes out through tiny holes in your skin.',
        'As the sweat dries, it takes heat away from your body.',
        'This cools you down.',
        'Because sweat contains water, you need to drink more when you exercise or when the weather is hot.',
        'If you do not drink enough, you may feel tired or dizzy.'
      ],
      th: [
        'เมื่อร่างกายร้อนเกินไป คุณจะเริ่มมีเหงื่อออก',
        'เหงื่อส่วนใหญ่เป็นน้ำ และออกมาทางรูเล็ก ๆ บนผิวหนัง',
        'เมื่อเหงื่อแห้ง มันจะพาความร้อนออกไปจากร่างกาย',
        'สิ่งนี้ทำให้คุณเย็นลง',
        'เพราะเหงื่อมีน้ำ คุณจึงต้องดื่มน้ำมากขึ้นเมื่อออกกำลังกายหรือเมื่ออากาศร้อน',
        'ถ้าดื่มไม่พอ คุณอาจรู้สึกเหนื่อยหรือเวียนหัว'
      ],
      gloss: [['sweat', 'เหงื่อ, เหงื่อออก'], ['tiny', 'เล็กมาก'], ['skin', 'ผิวหนัง'], ['cool down', 'ทำให้เย็นลง'], ['dizzy', 'เวียนหัว']],
      q: [
        { q: 'What is the main purpose of the passage?', qth: 'จุดประสงค์หลักของบทอ่านคืออะไร',
          o: ['To explain how sweat helps cool the body.', 'To tell a story about a runner.', 'To sell a sports drink.', 'To compare people and animals.'], a: 0, ev: [0, 2, 3],
          why: 'บทอ่านอธิบายขั้นตอน: ร้อน → เหงื่อออก → เหงื่อแห้งพาความร้อนออก → เย็นลง จึงเป็นบทอธิบาย',
          n: ['', 'ไม่มีตัวละครหรือเรื่องเล่า', 'ไม่มีการโฆษณาสินค้า', 'ไม่มีการเปรียบเทียบกับสัตว์'] },
        { q: 'In sentence 4, "This" refers to ___.', qth: '"This" ในประโยคที่ 4 หมายถึงอะไร',
          o: ['sweat drying and taking heat away', 'drinking water', 'the tiny holes in your skin', 'exercise'], a: 0, ev: [2, 3],
          why: 'This ต้นประโยคหมายถึงความคิดทั้งประโยคก่อนหน้า คือการที่เหงื่อแห้งแล้วพาความร้อนออกไป',
          n: ['', 'การดื่มน้ำพูดถึงทีหลัง ในประโยคที่ 5', 'รูบนผิวไม่ได้ทำให้เย็นลงเอง', 'การออกกำลังกายพูดถึงทีหลัง'] },
        { q: 'According to the passage, what can happen if you do not drink enough water?', qth: 'ตามบทอ่าน ถ้าดื่มน้ำไม่พอจะเกิดอะไรขึ้น',
          o: ['You may feel tired or dizzy.', 'You will stop sweating forever.', 'Your skin will get new holes.', 'Your body will get colder.'], a: 0, ev: [5],
          why: 'ประโยคที่ 6 บอกตรง ๆ ว่าอาจรู้สึกเหนื่อยหรือเวียนหัว',
          n: ['', 'บทอ่านไม่ได้พูดถึงการหยุดเหงื่อถาวร', 'ไม่มีข้อความนี้', 'บทอ่านไม่ได้บอกว่าร่างกายจะเย็นลงเพราะดื่มน้ำน้อย'] },
        { q: 'A runner is exercising on a hot day. Based on the passage, what should she do?', qth: 'นักวิ่งออกกำลังกายในวันที่อากาศร้อน ตามบทอ่าน เธอควรทำอะไร',
          o: ['Drink extra water.', 'Wear a thick jacket.', 'Stop sweating.', 'Eat more salt only.'], a: 0, ev: [4],
          why: 'ประโยคที่ 5 บอกว่าต้องดื่มน้ำมากขึ้นเมื่อออกกำลังกายหรืออากาศร้อน นักวิ่งเข้าเงื่อนไขทั้งสองอย่าง',
          n: ['', 'เสื้อหนาทำให้ร้อนขึ้น', 'เราเลือกหยุดเหงื่อเองไม่ได้ และเหงื่อช่วยให้เย็น', 'บทอ่านไม่ได้พูดถึงเกลือ'] }
      ]
    },
    {
      id: 'r3', subject: 'Social Studies', level: 'A2', title: 'Why Cities Collect Taxes', skill: 'ใจความหลัก · คำเชื่อม',
      s: [
        'Cities need money to provide services for the people who live there.',
        'Most of this money comes from taxes.',
        'For example, property taxes are paid by people who own homes and land.',
        'Cities use tax money to pay for police officers, firefighters, parks, and street lights.',
        'Many residents complain that their taxes are too high.',
        'However, without taxes, many public services would not exist.'
      ],
      th: [
        'เมืองต้องใช้เงินเพื่อจัดบริการให้ผู้คนที่อาศัยอยู่ที่นั่น',
        'เงินส่วนใหญ่มาจากภาษี',
        'เช่น ภาษีที่ดินและสิ่งปลูกสร้างจ่ายโดยผู้ที่เป็นเจ้าของบ้านและที่ดิน',
        'เมืองใช้เงินภาษีจ่ายค่าตำรวจ นักดับเพลิง สวนสาธารณะ และไฟถนน',
        'ผู้อยู่อาศัยหลายคนบ่นว่าภาษีสูงเกินไป',
        'อย่างไรก็ตาม ถ้าไม่มีภาษี บริการสาธารณะหลายอย่างก็จะไม่มี'
      ],
      gloss: [['provide', 'จัดให้มี'], ['service', 'บริการ'], ['property', 'ทรัพย์สิน (บ้าน ที่ดิน)'], ['resident', 'ผู้อยู่อาศัย'], ['complain', 'บ่น, ร้องเรียน'], ['public', 'สาธารณะ']],
      q: [
        { q: 'What is the main idea of the passage?', qth: 'ใจความหลักของบทอ่านคืออะไร',
          o: ['Cities collect taxes to pay for public services.', 'Firefighters are paid more than police officers.', 'Only rich people pay taxes.', 'Parks are the most important city service.'], a: 0, ev: [0, 1, 3],
          why: 'ประโยคที่ 1, 2 และ 4 รวมกันบอกว่าเมืองเก็บภาษีเพื่อใช้จ่ายค่าบริการสาธารณะ',
          n: ['', 'บทอ่านไม่ได้เปรียบเทียบเงินเดือน', 'บทอ่านไม่ได้บอกว่าเฉพาะคนรวย', 'บทอ่านไม่ได้จัดอันดับความสำคัญ'] },
        { q: 'Which is an example of a service paid for by city taxes?', qth: 'ข้อใดเป็นตัวอย่างบริการที่จ่ายด้วยภาษีของเมือง',
          o: ['Street lights', 'Private cars', 'Home televisions', 'Restaurant meals'], a: 0, ev: [3],
          why: 'ประโยคที่ 4 ระบุ street lights (ไฟถนน) ไว้ในรายการ',
          n: ['', 'รถส่วนตัวไม่ใช่บริการสาธารณะ', 'ทีวีในบ้านเป็นของส่วนตัว', 'อาหารในร้านเป็นธุรกิจเอกชน'] },
        { q: 'What does the word "However" in the last sentence show?', qth: 'คำว่า "However" ในประโยคสุดท้ายแสดงอะไร',
          o: ['A contrast with the complaint that taxes are too high', 'An example of a city service', 'The time when taxes are paid', 'The cause of high taxes'], a: 0, ev: [4, 5],
          why: 'ประโยคที่ 5 บ่นว่าภาษีสูง แล้ว However นำความเห็นที่ขัดกันมาว่า ถ้าไม่มีภาษีก็ไม่มีบริการ',
          n: ['', 'ตัวอย่างใช้ For example', 'However ไม่ได้บอกเวลา', 'บทอ่านไม่ได้อธิบายสาเหตุที่ภาษีสูง'] },
        { q: 'The author most likely believes that ___.', qth: 'ผู้เขียนน่าจะเชื่อว่าอย่างไร',
          o: ['taxes are necessary even if some people complain', 'cities should stop collecting taxes', 'people who own land should not pay taxes', 'public services are not useful'], a: 0, ev: [5],
          why: 'ผู้เขียนปิดท้ายด้วย However ... บอกว่าไม่มีภาษีก็ไม่มีบริการ แสดงว่าเห็นว่าภาษีจำเป็น',
          n: ['', 'ขัดกับประโยคสุดท้าย', 'ขัดกับประโยคที่ 3', 'ผู้เขียนยกตัวอย่างบริการที่มีประโยชน์'] }
      ]
    },
    {
      id: 'r4', subject: 'RLA', level: 'B1', title: 'Keep the Library Open Late', skill: 'ข้อโต้แย้ง · หลักฐาน · ข้อเท็จจริง/ความคิดเห็น',
      intro: 'จดหมายถึงบรรณาธิการ (แต่งขึ้นเพื่อฝึก)',
      s: [
        'The city council plans to close the Central Library at 5 p.m. instead of 9 p.m. to save money.',
        'I believe this is a mistake.',
        'Many adults who work during the day can only visit the library in the evening.',
        'Last year, more than 12,000 people used the library after 5 p.m., according to the library\'s own report.',
        'Students also use the free computers at night to finish homework because they do not have internet at home.',
        'Closing early would save about $40,000 a year, but it would hurt the people who need the library most.',
        'The council should find another way to save money.'
      ],
      th: [
        'สภาเมืองวางแผนปิดห้องสมุดกลางตอนห้าโมงเย็นแทนสามทุ่มเพื่อประหยัดเงิน',
        'ฉันเชื่อว่านี่เป็นความผิดพลาด',
        'ผู้ใหญ่หลายคนที่ทำงานตอนกลางวันมาห้องสมุดได้เฉพาะตอนเย็น',
        'ปีที่แล้ว มีผู้ใช้ห้องสมุดหลังห้าโมงเย็นมากกว่า 12,000 คน ตามรายงานของห้องสมุดเอง',
        'นักเรียนก็ใช้คอมพิวเตอร์ฟรีตอนกลางคืนเพื่อทำการบ้าน เพราะที่บ้านไม่มีอินเทอร์เน็ต',
        'การปิดเร็วขึ้นจะประหยัดเงินได้ราว 40,000 ดอลลาร์ต่อปี แต่จะส่งผลเสียต่อคนที่ต้องการห้องสมุดมากที่สุด',
        'สภาควรหาวิธีอื่นในการประหยัดเงิน'
      ],
      gloss: [['council', 'สภา (ท้องถิ่น)'], ['instead of', 'แทนที่จะ'], ['mistake', 'ความผิดพลาด'], ['according to', 'ตามที่ ... ระบุ'], ['report', 'รายงาน'], ['hurt', 'ทำให้เดือดร้อน']],
      q: [
        { q: 'What is the writer\'s main claim?', qth: 'ข้อโต้แย้งหลักของผู้เขียนคืออะไร',
          o: ['The library should stay open until 9 p.m.', 'The library should close at 5 p.m.', 'Students should have internet at home.', 'The council spends too much on parks.'], a: 0, ev: [1, 6],
          why: 'ประโยคที่ 2 บอกว่าแผนปิดเร็วเป็น "ความผิดพลาด" และประโยคสุดท้ายให้หาทางประหยัดวิธีอื่น แปลว่าผู้เขียนต้องการให้เปิดถึงสามทุ่มเหมือนเดิม',
          n: ['', 'เป็นแผนของสภา ซึ่งผู้เขียนคัดค้าน', 'เป็นรายละเอียดสนับสนุน ไม่ใช่ข้อโต้แย้งหลัก', 'บทอ่านไม่ได้พูดถึงสวนสาธารณะ'] },
        { q: 'Which detail BEST supports the writer\'s claim with a number?', qth: 'รายละเอียดใดสนับสนุนข้อโต้แย้งด้วยตัวเลขได้ดีที่สุด',
          o: ['More than 12,000 people used the library after 5 p.m.', 'Closing early would save about $40,000 a year.', 'The library now closes at 9 p.m.', 'Students do homework at night.'], a: 0, ev: [3],
          why: 'ตัวเลข 12,000 คนแสดงว่ามีคนใช้ห้องสมุดช่วงเย็นจำนวนมาก จึงสนับสนุนว่าไม่ควรปิดเร็ว',
          n: ['', 'ตัวเลขนี้สนับสนุนฝั่งสภา (ประหยัดเงิน) มากกว่า', 'เป็นข้อมูลเวลา ไม่ได้แสดงความต้องการของผู้ใช้', 'สนับสนุนได้ แต่ไม่มีตัวเลข'] },
        { q: 'Which statement is an OPINION?', qth: 'ข้อความใดเป็นความคิดเห็น',
          o: ['"I believe this is a mistake."', '"The city council plans to close the Central Library at 5 p.m."', '"More than 12,000 people used the library after 5 p.m."', '"Closing early would save about $40,000 a year."'], a: 0, ev: [1],
          why: 'I believe ... แสดงความเชื่อส่วนตัว พิสูจน์ว่าจริงหรือเท็จไม่ได้ ส่วนข้ออื่นตรวจสอบได้จากเอกสาร',
          n: ['', 'ตรวจสอบได้จากแผนของสภา = ข้อเท็จจริง', 'มีรายงานยืนยัน = ข้อเท็จจริง', 'เป็นตัวเลขที่คำนวณได้ = ข้อเท็จจริง (หรือการประมาณการ)'] },
        { q: 'Why does the writer mention students in sentence 5?', qth: 'ทำไมผู้เขียนจึงพูดถึงนักเรียนในประโยคที่ 5',
          o: ['To show another group that would be hurt by closing early', 'To argue that students should study less', 'To explain how the library saves money', 'To show that students prefer the daytime'], a: 0, ev: [4],
          why: 'นักเรียนที่ไม่มีอินเทอร์เน็ตที่บ้านต้องพึ่งคอมพิวเตอร์ตอนกลางคืน เป็นอีกกลุ่มที่จะเดือดร้อน นอกจากผู้ใหญ่วัยทำงาน',
          n: ['', 'ไม่มีข้อความนี้', 'การประหยัดเงินพูดในประโยคที่ 6', 'ขัดกับข้อความที่ว่าใช้ตอนกลางคืน'] },
        { q: 'Which point about the council\'s plan does the writer ADMIT is true?', qth: 'ผู้เขียนยอมรับว่าข้อใดเกี่ยวกับแผนของสภาเป็นความจริง',
          o: ['It would save money.', 'It would help students.', 'It would help working adults.', 'It would increase library use.'], a: 0, ev: [5],
          why: 'ประโยคที่ 6 ยอมรับว่าประหยัดได้ราว 40,000 ดอลลาร์ แล้วใช้ but แย้งว่าแต่จะทำให้คนเดือดร้อน',
          n: ['', 'ผู้เขียนบอกว่าจะทำให้นักเรียนเดือดร้อน', 'ผู้เขียนบอกว่าผู้ใหญ่ทำงานจะมาไม่ได้', 'การปิดเร็วไม่ทำให้คนใช้มากขึ้น'] }
      ]
    },
    {
      id: 'r5', subject: 'Science', level: 'B1', title: 'Sunlight and Bean Plants', skill: 'ตัวแปร · อ่านแผนภูมิ · ข้อสรุป',
      s: [
        'A class wanted to know how sunlight affects plant growth.',
        'They planted four bean seeds in the same kind of soil and gave each one the same amount of water.',
        'The only difference was the number of hours of sunlight each plant received per day.',
        'After three weeks, the students measured the height of each plant.',
        'Their results are shown in the chart.',
        'The students concluded that more sunlight helps bean plants grow taller, up to a point.'
      ],
      th: [
        'นักเรียนชั้นหนึ่งอยากรู้ว่าแสงแดดส่งผลต่อการเติบโตของพืชอย่างไร',
        'พวกเขาปลูกเมล็ดถั่วสี่เมล็ดในดินชนิดเดียวกัน และรดน้ำเท่ากันทุกต้น',
        'สิ่งเดียวที่ต่างกันคือจำนวนชั่วโมงที่แต่ละต้นได้รับแสงแดดต่อวัน',
        'หลังจากสามสัปดาห์ นักเรียนวัดความสูงของแต่ละต้น',
        'ผลการทดลองแสดงอยู่ในแผนภูมิ',
        'นักเรียนสรุปว่าแสงแดดที่มากขึ้นช่วยให้ต้นถั่วสูงขึ้น แต่ถึงจุดหนึ่งเท่านั้น'
      ],
      gloss: [['affect', 'ส่งผลต่อ'], ['growth', 'การเติบโต'], ['amount', 'ปริมาณ'], ['receive', 'ได้รับ'], ['measure', 'วัด'], ['conclude', 'สรุป'], ['up to a point', 'ถึงระดับหนึ่งเท่านั้น']],
      visual: { kind: 'bar', title: 'Plant height after 3 weeks', unit: 'cm', note: 'ข้อมูลสมมุติเพื่อการฝึก',
        labels: ['A · 0 h', 'B · 4 h', 'C · 8 h', 'D · 12 h'], values: [3, 11, 18, 19], axis: 'Hours of sunlight per day' },
      q: [
        { q: 'What did the students change on purpose in this experiment?', qth: 'ในการทดลองนี้ นักเรียนตั้งใจเปลี่ยนอะไร',
          o: ['The hours of sunlight', 'The kind of soil', 'The amount of water', 'The type of seed'], a: 0, ev: [2],
          why: 'ประโยคที่ 3 บอกว่าสิ่งเดียวที่ต่างกันคือจำนวนชั่วโมงแสงแดด นี่คือตัวแปรที่เปลี่ยน',
          n: ['', 'ใช้ดินชนิดเดียวกัน', 'รดน้ำเท่ากัน', 'ใช้เมล็ดถั่วทุกต้น'] },
        { q: 'According to the chart, which plant grew the tallest?', qth: 'ตามแผนภูมิ ต้นใดสูงที่สุด',
          o: ['Plant D', 'Plant C', 'Plant B', 'Plant A'], a: 0, ev: ['visual'],
          why: 'แท่งของ D สูงที่สุดที่ 19 cm',
          n: ['', 'C สูง 18 cm น้อยกว่า D', 'B สูง 11 cm', 'A สูงแค่ 3 cm'] },
        { q: 'How much taller was Plant C than Plant B?', qth: 'ต้น C สูงกว่าต้น B กี่เซนติเมตร',
          o: ['7 cm', '8 cm', '11 cm', '18 cm'], a: 0, ev: ['visual'],
          why: 'C = 18 cm และ B = 11 cm → 18 − 11 = 7 cm',
          n: ['', 'ลบผิด', 'เป็นความสูงของ B เอง', 'เป็นความสูงของ C เอง'] },
        { q: 'Why did the students say "up to a point"?', qth: 'ทำไมนักเรียนจึงใช้คำว่า "up to a point"',
          o: ['Plant D got 4 more hours of sun than Plant C but grew only 1 cm more.', 'Plant A did not grow at all.', 'All four plants grew to the same height.', 'Plant B grew taller than Plant C.'], a: 0, ev: [5, 'visual'],
          why: 'จาก B ไป C เพิ่มแสง 4 ชม. สูงขึ้น 7 cm แต่จาก C ไป D เพิ่มแสง 4 ชม. เท่ากัน สูงขึ้นแค่ 1 cm แปลว่าแสงช่วยได้ถึงระดับหนึ่งเท่านั้น',
          n: ['', 'A สูง 3 cm จึงโตอยู่บ้าง และไม่ได้อธิบายคำว่า up to a point', 'ความสูงไม่เท่ากัน', 'B เตี้ยกว่า C'] },
        { q: 'Why did the students give each plant the same amount of water?', qth: 'ทำไมนักเรียนจึงรดน้ำทุกต้นเท่ากัน',
          o: ['So that only sunlight could explain the differences in height', 'Because bean plants do not need water', 'To make the plants grow at the same speed', 'Because water was the variable they changed'], a: 0, ev: [1, 2],
          why: 'ถ้าควบคุมสิ่งอื่นให้เท่ากัน ความต่างของความสูงจะมาจากแสงแดดเท่านั้น การทดลองจึงยุติธรรม',
          n: ['', 'พืชต้องการน้ำ', 'ความสูงสุดท้ายไม่เท่ากัน', 'ตัวแปรที่เปลี่ยนคือแสงแดด ไม่ใช่น้ำ'] }
      ]
    },
    {
      id: 'r6', subject: 'Social Studies', level: 'B1', title: 'Winning the Vote for Women', skill: 'ลำดับเหตุการณ์ · ความหมายจากบริบท',
      s: [
        'For most of American history, women could not vote in national elections.',
        'In 1848, a group of women and men met in Seneca Falls, New York, to demand equal rights, including the right to vote.',
        'Over the next seventy years, activists gave speeches, wrote articles, and marched in the streets.',
        'Some western territories and states, such as Wyoming, allowed women to vote before the rest of the country did.',
        'Finally, in 1920, the Nineteenth Amendment to the Constitution was ratified.',
        'It said that the right to vote could not be denied because of a person\'s sex.'
      ],
      th: [
        'ตลอดประวัติศาสตร์อเมริกาส่วนใหญ่ ผู้หญิงลงคะแนนเสียงในการเลือกตั้งระดับชาติไม่ได้',
        'ในปี 1848 กลุ่มผู้หญิงและผู้ชายกลุ่มหนึ่งประชุมกันที่เมืองเซเนกาฟอลส์ รัฐนิวยอร์ก เพื่อเรียกร้องสิทธิที่เท่าเทียม รวมถึงสิทธิเลือกตั้ง',
        'ตลอดราวเจ็ดสิบปีต่อมา นักเคลื่อนไหวกล่าวสุนทรพจน์ เขียนบทความ และเดินขบวนบนท้องถนน',
        'ดินแดนและรัฐทางตะวันตกบางแห่ง เช่น ไวโอมิง อนุญาตให้ผู้หญิงลงคะแนนเสียงได้ก่อนส่วนอื่นของประเทศ',
        'ในที่สุด ปี 1920 การแก้ไขเพิ่มเติมรัฐธรรมนูญครั้งที่ 19 ก็ได้รับการให้สัตยาบัน',
        'บทบัญญัตินี้ระบุว่าจะปฏิเสธสิทธิเลือกตั้งของบุคคลเพราะเพศไม่ได้'
      ],
      gloss: [['demand', 'เรียกร้อง'], ['equal rights', 'สิทธิที่เท่าเทียม'], ['activist', 'นักเคลื่อนไหว'], ['territory', 'ดินแดน (ที่ยังไม่เป็นรัฐ)'], ['amendment', 'การแก้ไขเพิ่มเติม'], ['ratify', 'ให้สัตยาบัน, รับรอง'], ['deny', 'ปฏิเสธ, ไม่ให้']],
      q: [
        { q: 'Which event happened LAST?', qth: 'เหตุการณ์ใดเกิดขึ้นหลังสุด',
          o: ['The Nineteenth Amendment was ratified.', 'People met in Seneca Falls.', 'Activists marched in the streets.', 'Wyoming allowed women to vote.'], a: 0, ev: [4],
          why: 'ปี 1920 เป็นปีล่าสุดในบทอ่าน และมีคำว่า Finally บอกว่าเป็นเหตุการณ์สุดท้าย',
          n: ['', 'เกิดปี 1848 ซึ่งเป็นเหตุการณ์แรก', 'เกิดในช่วงเจ็ดสิบปีก่อนปี 1920', 'เกิด "ก่อนส่วนอื่นของประเทศ" จึงก่อนปี 1920'] },
        { q: 'What did the Nineteenth Amendment say?', qth: 'การแก้ไขเพิ่มเติมครั้งที่ 19 ระบุว่าอย่างไร',
          o: ['The right to vote cannot be denied because of a person\'s sex.', 'Only women living in the West can vote.', 'People must be 21 years old to vote.', 'Every state must hold a meeting like Seneca Falls.'], a: 0, ev: [5],
          why: 'ประโยคที่ 6 ระบุเนื้อหาตรง ๆ ว่าห้ามปฏิเสธสิทธิเลือกตั้งเพราะเพศ',
          n: ['', 'บทอ่านไม่ได้จำกัดเฉพาะภาคตะวันตก', 'บทอ่านไม่ได้พูดถึงอายุ', 'ไม่มีข้อความนี้'] },
        { q: 'In sentence 3, "activists" most likely means ___.', qth: 'คำว่า "activists" ในประโยคที่ 3 น่าจะหมายถึงอะไร',
          o: ['people who work to bring about change', 'people who write laws', 'people who live in the West', 'people who refuse to vote'], a: 0, ev: [2],
          why: 'บริบทบอกว่าพวกเขากล่าวสุนทรพจน์ เขียนบทความ และเดินขบวน ซึ่งเป็นการเคลื่อนไหวเพื่อการเปลี่ยนแปลง',
          n: ['', 'ผู้เขียนกฎหมายคือสภา ไม่ใช่คนที่เดินขบวน', 'บทอ่านไม่ได้บอกที่อยู่ของพวกเขา', 'พวกเขาต่อสู้เพื่อให้ได้สิทธิเลือกตั้ง'] },
        { q: 'The passage suggests that winning the right to vote ___.', qth: 'บทอ่านชี้ให้เห็นว่าการได้มาซึ่งสิทธิเลือกตั้งเป็นอย่างไร',
          o: ['took many years of effort', 'happened in one day', 'was never supported by men', 'started in Wyoming in 1920'], a: 0, ev: [1, 2, 4],
          why: 'เริ่มเรียกร้องปี 1848 และสำเร็จปี 1920 ห่างกันราว 70 ปี พร้อมกิจกรรมมากมาย แปลว่าใช้เวลาและความพยายามมาก',
          n: ['', 'ขัดกับช่วงเวลา 70 ปี', 'ประโยคที่ 2 บอกว่ามีผู้ชายร่วมประชุมด้วย', 'ไวโอมิงให้สิทธิก่อนปี 1920'] }
      ]
    },
    {
      id: 'r7', subject: 'RLA', level: 'B1', title: 'The Empty Box', skill: 'แรงจูงใจตัวละคร · การอนุมาน · อารมณ์',
      intro: 'เรื่องสั้น (แต่งขึ้นเพื่อฝึก)',
      s: [
        'Ana stared at the application on the kitchen table.',
        'The deadline was tomorrow, and the box marked "Education" was still empty.',
        'She had left school at sixteen to help her mother run the family shop.',
        'For twelve years she had counted coins, stocked shelves, and smiled at customers, telling herself there would be time later.',
        'Now her daughter was starting first grade, and Ana wanted to be able to help with homework and to show her that it is never too late.',
        'She picked up the pen, took a deep breath, and wrote: "Currently studying for the GED."'
      ],
      th: [
        'อานาจ้องมองใบสมัครบนโต๊ะในครัว',
        'พรุ่งนี้เป็นวันสุดท้าย และช่อง "การศึกษา" ยังว่างอยู่',
        'เธอออกจากโรงเรียนตอนอายุสิบหกเพื่อช่วยแม่ดูแลร้านของครอบครัว',
        'ตลอดสิบสองปี เธอนับเหรียญ จัดของขึ้นชั้น และยิ้มให้ลูกค้า พร้อมบอกตัวเองว่าเดี๋ยวค่อยมีเวลาทีหลัง',
        'ตอนนี้ลูกสาวของเธอกำลังจะเข้าชั้น ป.1 และอานาอยากช่วยสอนการบ้านได้ และอยากให้ลูกเห็นว่าไม่มีคำว่าสายเกินไป',
        'เธอหยิบปากกา หายใจเข้าลึก ๆ แล้วเขียนว่า "กำลังเตรียมสอบ GED"'
      ],
      gloss: [['stare', 'จ้องมอง'], ['application', 'ใบสมัคร'], ['deadline', 'วันหมดเขต'], ['stock shelves', 'จัดสินค้าขึ้นชั้น'], ['take a deep breath', 'หายใจเข้าลึก ๆ'], ['currently', 'ในขณะนี้']],
      q: [
        { q: 'Why does Ana decide to study for the GED?', qth: 'ทำไมอานาจึงตัดสินใจเตรียมสอบ GED',
          o: ['She wants to help her daughter and show her it is never too late.', 'Her mother told her to go back to school.', 'She wants to close the family shop.', 'The application does not accept empty boxes.'], a: 0, ev: [4],
          why: 'ประโยคที่ 5 บอกเหตุผลตรง ๆ: อยากช่วยลูกทำการบ้าน และอยากเป็นแบบอย่างว่าไม่มีคำว่าสาย',
          n: ['', 'ไม่มีข้อความว่าแม่เป็นคนบอก', 'ไม่มีข้อความว่าจะปิดร้าน', 'เป็นแรงกดดันเล็ก ๆ แต่ไม่ใช่เหตุผลที่เรื่องให้ไว้'] },
        { q: 'About how old is Ana now?', qth: 'ตอนนี้อานาน่าจะอายุประมาณเท่าไร',
          o: ['28', '16', '22', '40'], a: 0, ev: [2, 3],
          why: 'ออกจากโรงเรียนตอน 16 ปี แล้วทำงานมา 12 ปี → 16 + 12 = 28',
          n: ['', 'เป็นอายุตอนออกจากโรงเรียน', 'บวกเลขไม่ครบ', 'ไม่มีข้อมูลรองรับ'] },
        { q: 'What does "telling herself there would be time later" suggest?', qth: 'วลี "telling herself there would be time later" สื่อว่าอย่างไร',
          o: ['She kept putting off her education.', 'She did not like her customers.', 'She finished school at night.', 'She had no time to eat.'], a: 0, ev: [3],
          why: 'บอกตัวเองว่า "เดี๋ยวค่อยมีเวลา" แปลว่าเลื่อนเรื่องเรียนออกไปเรื่อย ๆ',
          n: ['', 'เธอยิ้มให้ลูกค้า', 'ช่องการศึกษายังว่าง แปลว่ายังไม่จบ', 'ไม่มีข้อความเกี่ยวกับการกิน'] },
        { q: 'How does Ana most likely feel at the end?', qth: 'ตอนจบ อานาน่าจะรู้สึกอย่างไร',
          o: ['Nervous but determined', 'Angry and bored', 'Relaxed and careless', 'Sad and ready to give up'], a: 0, ev: [5],
          why: 'หายใจลึก ๆ บอกความประหม่า แต่เธอก็หยิบปากกาเขียนจริง แสดงความตั้งใจ',
          n: ['', 'ไม่มีสัญญาณของความโกรธหรือเบื่อ', 'การหายใจลึกไม่ใช่ความชิลล์', 'เธอไม่ยอมแพ้ เธอเขียนลงไป'] }
      ]
    },
    {
      id: 'r8', subject: 'Science', level: 'B2', title: 'How Bacteria Beat Medicine', skill: 'สรุปความ · ลำดับกระบวนการ · การนำไปใช้',
      s: [
        'Antibiotics are medicines that kill bacteria or stop them from growing.',
        'When a person takes an antibiotic, most of the harmful bacteria in the body die.',
        'However, a few bacteria may have small genetic differences that help them survive the medicine.',
        'These surviving bacteria can then reproduce, passing their resistance to the next generation.',
        'Over time, a population of bacteria that the antibiotic can no longer kill may develop.',
        'For this reason, doctors warn patients to take the full course of antibiotics and not to use them for viral infections such as the common cold, which antibiotics cannot treat.'
      ],
      th: [
        'ยาปฏิชีวนะคือยาที่ฆ่าแบคทีเรียหรือหยุดไม่ให้แบคทีเรียเติบโต',
        'เมื่อคนกินยาปฏิชีวนะ แบคทีเรียที่เป็นอันตรายส่วนใหญ่ในร่างกายจะตาย',
        'อย่างไรก็ตาม แบคทีเรียบางตัวอาจมีความแตกต่างทางพันธุกรรมเล็กน้อยที่ช่วยให้รอดจากยา',
        'แบคทีเรียที่รอดเหล่านี้จึงขยายพันธุ์ได้ และส่งต่อความดื้อยาไปยังรุ่นต่อไป',
        'เมื่อเวลาผ่านไป อาจเกิดประชากรแบคทีเรียที่ยาปฏิชีวนะฆ่าไม่ได้อีกต่อไป',
        'ด้วยเหตุนี้ แพทย์จึงเตือนผู้ป่วยให้กินยาปฏิชีวนะให้ครบตามกำหนด และไม่ใช้กับโรคติดเชื้อไวรัส เช่น ไข้หวัด ซึ่งยาปฏิชีวนะรักษาไม่ได้'
      ],
      gloss: [['antibiotic', 'ยาปฏิชีวนะ'], ['harmful', 'เป็นอันตราย'], ['genetic', 'ทางพันธุกรรม'], ['survive', 'รอดชีวิต'], ['reproduce', 'สืบพันธุ์, ขยายพันธุ์'], ['resistance', 'การดื้อ (ยา)'], ['full course', 'ครบตามกำหนด'], ['viral infection', 'การติดเชื้อไวรัส']],
      q: [
        { q: 'Which statement BEST summarizes the passage?', qth: 'ข้อใดสรุปบทอ่านได้ดีที่สุด',
          o: ['Bacteria that survive antibiotics can multiply and form resistant populations.', 'Antibiotics are the best treatment for the common cold.', 'All bacteria are harmful to people.', 'Doctors no longer use antibiotics.'], a: 0, ev: [2, 3, 4],
          why: 'ประโยคที่ 3–5 เป็นแกนของเรื่อง: บางตัวรอด → ขยายพันธุ์ → เกิดประชากรที่ดื้อยา',
          n: ['', 'ประโยคสุดท้ายบอกว่ายาปฏิชีวนะรักษาหวัดไม่ได้', 'บทอ่านพูดถึง harmful bacteria แสดงว่าไม่ใช่ทุกตัวที่อันตราย', 'แพทย์ยังใช้ แต่เตือนให้ใช้อย่างถูกต้อง'] },
        { q: 'What happens right AFTER a few bacteria survive the medicine?', qth: 'หลังจากแบคทีเรียบางตัวรอดจากยา เกิดอะไรขึ้นต่อทันที',
          o: ['The surviving bacteria reproduce.', 'The person takes an antibiotic.', 'Most harmful bacteria die.', 'Doctors warn patients.'], a: 0, ev: [3],
          why: 'ประโยคที่ 4 ใช้คำว่า then บอกขั้นถัดไปว่าแบคทีเรียที่รอดจะขยายพันธุ์',
          n: ['', 'เกิดก่อน', 'เกิดก่อนการรอด', 'เป็นข้อสรุปท้ายสุด ไม่ใช่ขั้นถัดไปทันที'] },
        { q: 'In sentence 4, "These surviving bacteria" are bacteria that ___.', qth: '"These surviving bacteria" ในประโยคที่ 4 คือแบคทีเรียแบบใด',
          o: ['have genetic differences that help them survive', 'cause the common cold', 'were killed by the medicine', 'live only in doctors\' offices'], a: 0, ev: [2, 3],
          why: 'These ชี้กลับไปยังประโยคที่ 3 คือแบคทีเรียส่วนน้อยที่มีความต่างทางพันธุกรรมจนรอดจากยา',
          n: ['', 'หวัดเกิดจากไวรัส', 'ตัวที่ตายไม่สามารถขยายพันธุ์ได้', 'ไม่มีข้อความนี้'] },
        { q: 'Based on the passage, why should antibiotics NOT be used for a cold?', qth: 'ตามบทอ่าน ทำไมไม่ควรใช้ยาปฏิชีวนะรักษาไข้หวัด',
          o: ['Colds are viral infections, which antibiotics cannot treat.', 'Colds are caused by harmful bacteria.', 'Antibiotics are too expensive.', 'Colds make bacteria stronger.'], a: 0, ev: [5],
          why: 'ประโยคสุดท้ายบอกว่าไข้หวัดเป็นการติดเชื้อไวรัส ซึ่งยาปฏิชีวนะรักษาไม่ได้',
          n: ['', 'ขัดกับบทอ่าน (หวัดเป็นไวรัส)', 'บทอ่านไม่ได้พูดเรื่องราคา', 'บทอ่านไม่ได้บอกแบบนี้'] },
        { q: 'The phrase "For this reason" in the last sentence connects ___.', qth: 'วลี "For this reason" ในประโยคสุดท้ายเชื่อมอะไรกับอะไร',
          o: ['the danger of resistance to the doctors\' advice', 'the common cold to bacteria', 'medicine prices to doctors', 'healthy bacteria to harmful bacteria'], a: 0, ev: [4, 5],
          why: 'ปัญหาดื้อยาในประโยคที่ 5 เป็นเหตุ และคำแนะนำของแพทย์ในประโยคที่ 6 เป็นผล',
          n: ['', 'ไม่ได้เชื่อมหวัดกับแบคทีเรีย', 'ไม่มีเรื่องราคายา', 'ไม่ได้เปรียบเทียบสองแบบนี้'] }
      ]
    },
    {
      id: 'r9', subject: 'Social Studies', level: 'B2', title: 'Education, Jobs, and Pay', skill: 'อ่านตาราง · ข้อจำกัดของข้อมูล',
      s: [
        'Economists often study how education is connected to jobs and pay.',
        'The table shows data from a fictional state in one year.',
        'Workers with more education were less likely to be unemployed.',
        'They also tended to earn more each week.',
        'However, the data do not prove that education alone causes higher pay; other factors, such as work experience and the local job market, may also play a role.'
      ],
      th: [
        'นักเศรษฐศาสตร์มักศึกษาว่าการศึกษาเชื่อมโยงกับงานและรายได้อย่างไร',
        'ตารางแสดงข้อมูลจากรัฐสมมุติแห่งหนึ่งในหนึ่งปี',
        'คนงานที่มีการศึกษาสูงกว่ามีโอกาสว่างงานน้อยกว่า',
        'และมักมีรายได้ต่อสัปดาห์สูงกว่าด้วย',
        'อย่างไรก็ตาม ข้อมูลไม่ได้พิสูจน์ว่าการศึกษาเพียงอย่างเดียวทำให้รายได้สูงขึ้น ปัจจัยอื่น เช่น ประสบการณ์ทำงานและตลาดแรงงานในพื้นที่ ก็อาจมีส่วนด้วย'
      ],
      gloss: [['economist', 'นักเศรษฐศาสตร์'], ['fictional', 'สมมุติ, แต่งขึ้น'], ['unemployed', 'ว่างงาน'], ['tend to', 'มีแนวโน้มจะ'], ['prove', 'พิสูจน์'], ['factor', 'ปัจจัย'], ['median', 'ค่ามัธยฐาน (ค่ากลาง)']],
      visual: { kind: 'table', title: 'Unemployment rate and median weekly earnings by education', note: 'ข้อมูลสมมุติเพื่อการฝึก',
        head: ['Education level', 'Unemployment rate', 'Median weekly earnings'],
        rows: [['Less than high school', '6.0%', '$700'], ['High school diploma or GED', '4.0%', '$880'], ['Bachelor\'s degree', '2.2%', '$1,500']] },
      q: [
        { q: 'What was the unemployment rate for workers with a high school diploma or GED?', qth: 'อัตราการว่างงานของคนที่จบมัธยมปลายหรือ GED คือเท่าไร',
          o: ['4.0%', '6.0%', '2.2%', '$880'], a: 0, ev: ['visual'],
          why: 'แถว "High school diploma or GED" คอลัมน์ Unemployment rate = 4.0%',
          n: ['', 'เป็นของกลุ่มที่ไม่จบมัธยมปลาย', 'เป็นของกลุ่มปริญญาตรี', 'เป็นรายได้ต่อสัปดาห์ ไม่ใช่อัตราว่างงาน'] },
        { q: 'About how much more per week did a worker with a bachelor\'s degree earn than a worker with a high school diploma or GED?', qth: 'คนจบปริญญาตรีมีรายได้ต่อสัปดาห์มากกว่าคนจบมัธยมปลาย/GED ประมาณเท่าไร',
          o: ['$620', '$800', '$180', '$1,500'], a: 0, ev: ['visual'],
          why: '$1,500 − $880 = $620',
          n: ['', 'เป็นผลต่างระหว่างปริญญาตรีกับกลุ่มไม่จบมัธยม ($1,500 − $700)', 'เป็นผลต่างระหว่างมัธยมกับไม่จบมัธยม', 'เป็นรายได้ของปริญญาตรีเอง ไม่ใช่ผลต่าง'] },
        { q: 'Why does the author say the data "do not prove" that education causes higher pay?', qth: 'ทำไมผู้เขียนจึงบอกว่าข้อมูล "ไม่ได้พิสูจน์" ว่าการศึกษาทำให้รายได้สูงขึ้น',
          o: ['Other factors, like work experience, may also affect pay.', 'The table has mistakes in it.', 'Education has no connection to pay.', 'Only one worker was studied.'], a: 0, ev: [4],
          why: 'ประโยคสุดท้ายบอกว่ามีปัจจัยอื่น เช่น ประสบการณ์และตลาดแรงงาน ที่อาจมีผลด้วย ความสัมพันธ์จึงยังไม่ใช่เหตุและผลแน่นอน',
          n: ['', 'ผู้เขียนไม่ได้บอกว่าตารางผิด', 'ขัดกับประโยคที่ 3–4 ที่บอกว่ามีความเชื่อมโยง', 'ตารางเป็นข้อมูลระดับรัฐ ไม่ใช่คนเดียว'] },
        { q: 'Which claim is BEST supported by the table?', qth: 'ข้อความใดได้รับการสนับสนุนจากตารางมากที่สุด',
          o: ['Unemployment was lowest among workers with a bachelor\'s degree.', 'Every worker with a GED earns exactly $880 a week.', 'Education is the only cause of higher pay.', 'Workers without a diploma can never find jobs.'], a: 0, ev: ['visual'],
          why: '2.2% เป็นอัตราว่างงานต่ำสุดในตาราง',
          n: ['', '$880 เป็นค่ามัธยฐาน ไม่ใช่รายได้ของทุกคน', 'ผู้เขียนบอกชัดว่าข้อมูลพิสูจน์ไม่ได้', '6.0% ว่างงาน แปลว่าคนส่วนใหญ่ในกลุ่มนี้ยังมีงาน'] }
      ]
    },
    {
      id: 'r10', subject: 'RLA', level: 'B2', title: 'Should Downtown Ban Cars?', skill: 'เปรียบเทียบสองบทความ · หลักฐาน',
      intro: 'บทความสองมุมมอง (แต่งขึ้นเพื่อฝึก เมือง Riverton เป็นเมืองสมมุติ)',
      label: { 0: 'Passage A', 3: 'Passage B' },
      s: [
        'Banning cars from downtown streets would make cities healthier and safer.',
        'In the city of Riverton, air pollution downtown fell by 20 percent in the first year after cars were banned.',
        'Fewer cars also means fewer accidents, and people can walk without breathing exhaust.',
        'A downtown car ban sounds good, but it would hurt the people who can least afford it.',
        'Many workers live far from the city center and have no train or bus line nearby.',
        'Small shop owners also depend on customers who drive in, and some Riverton shops reported lower sales after the ban.',
        'Before banning cars, cities should first build better public transportation.'
      ],
      th: [
        'การห้ามรถยนต์เข้าถนนในย่านใจกลางเมืองจะทำให้เมืองมีสุขภาพดีและปลอดภัยขึ้น',
        'ในเมืองริเวอร์ตัน มลพิษทางอากาศในใจกลางเมืองลดลงร้อยละ 20 ในปีแรกหลังห้ามรถยนต์',
        'รถน้อยลงยังหมายถึงอุบัติเหตุน้อยลง และผู้คนเดินได้โดยไม่ต้องสูดควันไอเสีย',
        'การห้ามรถยนต์ในใจกลางเมืองฟังดูดี แต่จะทำร้ายคนที่มีกำลังจ่ายน้อยที่สุด',
        'คนทำงานจำนวนมากอาศัยอยู่ไกลจากใจกลางเมืองและไม่มีรถไฟหรือรถเมล์ผ่านใกล้บ้าน',
        'เจ้าของร้านเล็ก ๆ ก็พึ่งลูกค้าที่ขับรถเข้ามา และร้านบางร้านในริเวอร์ตันรายงานว่ายอดขายลดลงหลังมีการห้าม',
        'ก่อนห้ามรถยนต์ เมืองควรสร้างระบบขนส่งสาธารณะให้ดีขึ้นก่อน'
      ],
      gloss: [['ban', 'ห้าม'], ['downtown', 'ใจกลางเมือง'], ['exhaust', 'ไอเสีย'], ['afford', 'มีกำลังจ่าย'], ['depend on', 'พึ่งพา'], ['public transportation', 'ระบบขนส่งสาธารณะ']],
      q: [
        { q: 'What is the main claim of Passage A?', qth: 'ข้อโต้แย้งหลักของบทความ A คืออะไร',
          o: ['Banning cars downtown would make cities healthier and safer.', 'Cities should build better buses first.', 'Shops sell more when cars are allowed.', 'Riverton has too many accidents.'], a: 0, ev: [0],
          why: 'ประโยคแรกของบทความ A ระบุข้อโต้แย้งไว้ชัดเจน ส่วนประโยคที่ตามมาเป็นหลักฐาน',
          n: ['', 'เป็นข้อเสนอของบทความ B', 'เป็นแนวคิดของฝั่ง B', 'ไม่มีข้อความนี้'] },
        { q: 'Which evidence from Passage A uses a statistic?', qth: 'หลักฐานใดในบทความ A ใช้ตัวเลขสถิติ',
          o: ['Air pollution downtown fell by 20 percent.', 'People can walk without breathing exhaust.', 'Fewer cars means fewer accidents.', 'Cities would be healthier and safer.'], a: 0, ev: [1],
          why: '"20 percent" เป็นตัวเลขสถิติ ข้ออื่นเป็นคำกล่าวทั่วไปไม่มีตัวเลข',
          n: ['', 'ไม่มีตัวเลข', 'ไม่มีตัวเลข', 'เป็นข้อโต้แย้งหลัก ไม่ใช่หลักฐานที่เป็นตัวเลข'] },
        { q: 'How does the author of Passage B respond to the idea of a car ban?', qth: 'ผู้เขียนบทความ B ตอบสนองต่อแนวคิดห้ามรถอย่างไร',
          o: ['Agrees it sounds good but argues it would hurt some people', 'Says it would reduce pollution by more than 20 percent', 'Agrees completely and wants it right away', 'Says Riverton never banned cars'], a: 0, ev: [3],
          why: 'ประโยคที่ 4 ยอมรับว่า "sounds good" แล้วใช้ but แย้งว่าจะทำร้ายคนที่มีกำลังจ่ายน้อย',
          n: ['', 'บทความ B ไม่ได้พูดถึงตัวเลขมลพิษ', 'บทความ B ต้องการให้สร้างขนส่งสาธารณะก่อน', 'บทความ B ยอมรับว่าริเวอร์ตันห้ามรถ'] },
        { q: 'Which statement would BOTH authors most likely agree with?', qth: 'ข้อความใดที่ผู้เขียนทั้งสองน่าจะเห็นด้วย',
          o: ['The Riverton ban changed life downtown.', 'Cars should be banned immediately.', 'Public transportation must come before any ban.', 'The Riverton ban had no effects at all.'], a: 0, ev: [1, 5],
          why: 'A บอกว่ามลพิษลดลง B บอกว่ายอดขายร้านลดลง ทั้งคู่ยอมรับว่าการห้ามมีผลต่อย่านใจกลางเมือง',
          n: ['', 'B ไม่เห็นด้วย', 'A ไม่ได้เสนอเงื่อนไขนี้', 'ทั้งคู่ยกผลกระทบมา'] },
        { q: 'What does Passage B suggest cities do?', qth: 'บทความ B เสนอให้เมืองทำอะไร',
          o: ['Build better public transportation before banning cars', 'Ban cars only on weekends', 'Give shop owners free parking forever', 'Stop measuring air pollution'], a: 0, ev: [6],
          why: 'ประโยคสุดท้ายเสนอตรง ๆ ว่าควรสร้างขนส่งสาธารณะให้ดีก่อน',
          n: ['', 'ไม่มีข้อเสนอนี้', 'ไม่มีข้อเสนอนี้', 'ไม่มีข้อเสนอนี้'] }
      ]
    },
    {
      id: 'r11', subject: 'Science', level: 'B2', title: 'Warm Water, Less Oxygen', skill: 'อ่านกราฟ · แนวโน้ม · ใช้ข้อมูลตอบ',
      s: [
        'Fish and other water animals breathe oxygen that is dissolved in water.',
        'The amount of oxygen water can hold depends on its temperature.',
        'The chart shows the maximum amount of dissolved oxygen that fresh water can hold at different temperatures.',
        'Most fish need at least 5 milligrams of oxygen per liter (mg/L) to stay healthy.',
        'In summer, power plants sometimes release warm water into rivers, which can cause problems for fish downstream.'
      ],
      th: [
        'ปลาและสัตว์น้ำอื่น ๆ หายใจเอาออกซิเจนที่ละลายอยู่ในน้ำ',
        'ปริมาณออกซิเจนที่น้ำเก็บได้ขึ้นอยู่กับอุณหภูมิของน้ำ',
        'แผนภูมิแสดงปริมาณออกซิเจนละลายสูงสุดที่น้ำจืดเก็บได้ที่อุณหภูมิต่าง ๆ',
        'ปลาส่วนใหญ่ต้องการออกซิเจนอย่างน้อย 5 มิลลิกรัมต่อลิตร (mg/L) เพื่อให้มีสุขภาพดี',
        'ในฤดูร้อน โรงไฟฟ้าบางแห่งปล่อยน้ำอุ่นลงแม่น้ำ ซึ่งอาจก่อปัญหาให้ปลาที่อยู่ปลายน้ำ'
      ],
      gloss: [['dissolved', 'ละลาย (อยู่ในน้ำ)'], ['maximum', 'สูงสุด'], ['depend on', 'ขึ้นอยู่กับ'], ['power plant', 'โรงไฟฟ้า'], ['downstream', 'ปลายน้ำ'], ['per liter', 'ต่อลิตร']],
      visual: { kind: 'bar', title: 'Maximum dissolved oxygen in fresh water', unit: 'mg/L', note: 'ค่าโดยประมาณ ปัดเศษเพื่อการฝึก',
        labels: ['10°C', '15°C', '20°C', '25°C', '30°C'], values: [11.3, 10.1, 9.1, 8.3, 7.6], axis: 'Water temperature', line: { value: 5, label: 'ขั้นต่ำที่ปลาส่วนใหญ่ต้องการ 5 mg/L' } },
      q: [
        { q: 'What pattern does the chart show?', qth: 'แผนภูมิแสดงรูปแบบอะไร',
          o: ['As water gets warmer, it can hold less oxygen.', 'As water gets warmer, it can hold more oxygen.', 'Temperature has no effect on oxygen.', 'Oxygen is highest at 30°C.'], a: 0, ev: ['visual', 1],
          why: 'แท่งลดลงจาก 11.3 ที่ 10°C ไปเป็น 7.6 ที่ 30°C น้ำอุ่นขึ้นจึงเก็บออกซิเจนได้น้อยลง',
          n: ['', 'ตรงกันข้ามกับแผนภูมิ', 'ค่าเปลี่ยนตามอุณหภูมิชัดเจน', 'ที่ 30°C ต่ำที่สุด'] },
        { q: 'About how much oxygen can fresh water hold at 20°C?', qth: 'น้ำจืดที่ 20°C เก็บออกซิเจนได้ประมาณเท่าไร',
          o: ['9.1 mg/L', '10.1 mg/L', '8.3 mg/L', '5 mg/L'], a: 0, ev: ['visual'],
          why: 'แท่ง 20°C มีค่า 9.1 mg/L',
          n: ['', 'เป็นค่าที่ 15°C', 'เป็นค่าที่ 25°C', 'เป็นระดับขั้นต่ำที่ปลาต้องการ ไม่ใช่ค่าที่ 20°C'] },
        { q: 'Why might warm water from a power plant cause problems for fish?', qth: 'ทำไมน้ำอุ่นจากโรงไฟฟ้าจึงอาจเป็นปัญหาต่อปลา',
          o: ['Warmer water holds less oxygen for fish to breathe.', 'Warm water has more oxygen, which hurts fish.', 'Fish cannot swim in water above 10°C.', 'Power plants add salt to rivers.'], a: 0, ev: [1, 4, 'visual'],
          why: 'ประโยคที่ 2 และแผนภูมิบอกว่าน้ำอุ่นเก็บออกซิเจนได้น้อยลง น้ำอุ่นจากโรงไฟฟ้าจึงทำให้ปลามีออกซิเจนน้อยลง',
          n: ['', 'น้ำอุ่นมีออกซิเจนน้อยกว่า ไม่ใช่มากกว่า', 'บทอ่านไม่ได้บอกแบบนี้', 'บทอ่านไม่ได้พูดถึงเกลือ'] },
        { q: 'Based on the chart and the passage, can water at 30°C hold enough oxygen for most fish?', qth: 'จากแผนภูมิและบทอ่าน น้ำที่ 30°C เก็บออกซิเจนได้พอสำหรับปลาส่วนใหญ่หรือไม่',
          o: ['Yes, its maximum (7.6 mg/L) is above 5 mg/L, but there is less extra oxygen than in cooler water.', 'No, water at 30°C holds no oxygen.', 'No, the maximum at 30°C is below 5 mg/L.', 'Yes, 30°C water holds the most oxygen of all.'], a: 0, ev: [3, 'visual'],
          why: '7.6 มากกว่า 5 จึงเพียงพอได้ แต่เผื่อไว้น้อยกว่าน้ำเย็น (เช่น 11.3 ที่ 10°C) ข้อควรระวัง: เป็นค่าสูงสุด น้ำจริงอาจมีน้อยกว่านั้น',
          n: ['', 'แผนภูมิแสดงค่า 7.6 ไม่ใช่ 0', '7.6 มากกว่า 5', '30°C มีค่าน้อยที่สุด'] }
      ]
    },
    {
      id: 'r12', subject: 'Social Studies', level: 'B2', title: 'Consent of the Governed', skill: 'แหล่งข้อมูลปฐมภูมิ · ความหมายเชิงวิชาการ',
      intro: 'ข้อความในเครื่องหมายคำพูดยกมาจาก Declaration of Independence (1776) ซึ่งเป็นสาธารณสมบัติ ส่วนที่เหลือแต่งขึ้นเพื่ออธิบาย',
      s: [
        'The Declaration of Independence was adopted by the Continental Congress on July 4, 1776.',
        'The following lines are from its second paragraph.',
        '"We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness."',
        '"That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed."',
        'Many historians point out that in 1776 these rights were not applied to everyone; enslaved people and women, for example, were denied many of them.'
      ],
      th: [
        'คำประกาศอิสรภาพได้รับการรับรองโดยสภาภาคพื้นทวีปเมื่อวันที่ 4 กรกฎาคม 1776',
        'ข้อความต่อไปนี้มาจากย่อหน้าที่สอง',
        '"เราถือว่าความจริงเหล่านี้ประจักษ์ชัดในตัวเอง ว่ามนุษย์ทุกคนถูกสร้างมาเท่าเทียมกัน ได้รับสิทธิบางประการที่ไม่อาจพรากไปได้จากพระผู้สร้าง ซึ่งรวมถึงชีวิต เสรีภาพ และการแสวงหาความสุข"',
        '"เพื่อปกป้องสิทธิเหล่านี้ จึงมีการจัดตั้งรัฐบาลขึ้นในหมู่มนุษย์ โดยได้อำนาจอันชอบธรรมมาจากความยินยอมของผู้ถูกปกครอง"',
        'นักประวัติศาสตร์หลายคนชี้ว่าในปี 1776 สิทธิเหล่านี้ไม่ได้ใช้กับทุกคน เช่น ทาสและผู้หญิงถูกปฏิเสธสิทธิหลายประการ'
      ],
      gloss: [['self-evident', 'ชัดเจนในตัวเอง'], ['endowed', 'ได้รับมอบ'], ['unalienable', 'ที่ไม่อาจพรากไปได้'], ['secure', 'ปกป้อง, ทำให้มั่นคง'], ['instituted', 'ก่อตั้งขึ้น'], ['consent', 'ความยินยอม'], ['the governed', 'ผู้ถูกปกครอง (ประชาชน)']],
      q: [
        { q: 'According to the excerpt, why are governments created?', qth: 'ตามข้อความที่ยกมา รัฐบาลถูกจัดตั้งขึ้นเพื่ออะไร',
          o: ['To secure (protect) people\'s rights', 'To collect taxes from the colonies', 'To choose a king', 'To create a national religion'], a: 0, ev: [3],
          why: '"to secure these rights, Governments are instituted" = รัฐบาลตั้งขึ้นเพื่อปกป้องสิทธิ',
          n: ['', 'ข้อความไม่ได้พูดถึงภาษี', 'ข้อความไม่ได้พูดถึงการเลือกกษัตริย์', 'ข้อความไม่ได้พูดถึงศาสนาประจำชาติ'] },
        { q: '"The consent of the governed" means that a government\'s power comes from ___.', qth: '"the consent of the governed" หมายความว่าอำนาจของรัฐบาลมาจากอะไร',
          o: ['the agreement of the people', 'the strongest army', 'the richest families', 'another country'], a: 0, ev: [3],
          why: 'consent = ความยินยอม และ the governed = ผู้ถูกปกครอง คือประชาชน อำนาจจึงมาจากการยินยอมของประชาชน',
          n: ['', 'ไม่มีการพูดถึงกองทัพ', 'ไม่มีการพูดถึงความร่ำรวย', 'ข้อความพูดถึงผู้ถูกปกครองในประเทศเอง'] },
        { q: 'Which three rights are named in the excerpt?', qth: 'ข้อความระบุสิทธิสามประการใด',
          o: ['Life, Liberty, and the pursuit of Happiness', 'Speech, Religion, and Press', 'Voting, Property, and Education', 'Equality, Justice, and Peace'], a: 0, ev: [2],
          why: '"among these are Life, Liberty and the pursuit of Happiness"',
          n: ['', 'เป็นเสรีภาพใน First Amendment ไม่ได้อยู่ในข้อความนี้', 'ไม่ได้ระบุในข้อความ', 'ไม่ได้ระบุเป็นรายการในข้อความ'] },
        { q: 'What point do historians make in the last sentence?', qth: 'นักประวัติศาสตร์ชี้ประเด็นอะไรในประโยคสุดท้าย',
          o: ['The ideals were not applied equally to everyone in 1776.', 'The Declaration was written in 1920.', 'Women wrote most of the Declaration.', 'Everyone had equal rights in 1776.'], a: 0, ev: [4],
          why: 'ประโยคสุดท้ายบอกว่าสิทธิไม่ได้ใช้กับทุกคน เช่น ทาสและผู้หญิง',
          n: ['', 'ประกาศเมื่อปี 1776', 'ไม่มีข้อความนี้', 'ขัดกับประโยคสุดท้ายโดยตรง'] },
        { q: 'Which modern practice is MOST connected to "consent of the governed"?', qth: 'แนวปฏิบัติในปัจจุบันข้อใดเกี่ยวข้องกับ "consent of the governed" มากที่สุด',
          o: ['Citizens voting in free elections', 'A king choosing his own heir', 'An army taking control of a city', 'A company setting its own prices'], a: 0, ev: [3],
          why: 'การเลือกตั้งที่เสรีเป็นวิธีที่ประชาชนแสดงความยินยอมให้รัฐบาลมีอำนาจ',
          n: ['', 'เป็นการสืบทอดอำนาจโดยไม่ต้องได้รับความยินยอมจากประชาชน', 'เป็นการใช้กำลัง ไม่ใช่ความยินยอม', 'เป็นเรื่องธุรกิจ ไม่ใช่การปกครอง'] }
      ]
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
