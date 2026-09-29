/* หมวด 3: Sentence Structure — โครงสร้างประโยค */
(function (root) {
  var EP = root.EP = root.EP || {};
  EP.grammar = EP.grammar || [];
  EP.grammar.push({
    id: 'sent',
    name: 'Sentence Structure',
    th: 'โครงสร้างประโยค',
    blurb: 'ใคร → ทำอะไร → กับอะไร → เพราะอะไร แยกชิ้นประโยคให้เห็นแกนก่อน',
    lessons: [
      {
        id: 'sent-core', level: 'Basic', title: 'What a Sentence Needs', th: 'ประโยคหนึ่งประโยคต้องมีอะไรบ้าง',
        explain: 'ประโยคภาษาอังกฤษที่บอกเล่าเรื่องราวต้องมีอย่างน้อย <b>Subject (ประธาน = ใคร)</b> และ <b>Verb (กริยา = ทำอะไร)</b> สองส่วนนี้พอจะเป็นประโยคได้แล้ว เช่น "Birds fly."<br>กริยาบางตัวต้องมีคำต่อท้ายอีกส่วนหนึ่งจึงจะได้ความสมบูรณ์ แบ่งเป็น 2 แบบที่มักสับสน:<br>• <b>Object (กรรม)</b> = สิ่งที่<b>ถูกกระทำ</b>โดยกริยานั้น เช่น hit <b>the ball</b> (ลูกบอลถูกตี)<br>• <b>Complement (ส่วนเติมเต็ม)</b> = คำที่บอกว่า<b>ประธานเป็นใคร/เป็นอะไร/เป็นอย่างไร</b> ไม่ได้ถูกกระทำ เช่น is <b>happy</b> (เธอไม่ได้ "ทำ" ให้ happy เกิดขึ้น happy แค่อธิบายเธอ)',
        formula: 'S + V &nbsp;(จบได้แล้ว)<br>S + V + <b>O</b> ถ้ากริยาต้องมีสิ่งถูกกระทำ<br>S + V + <b>C</b> ถ้ากริยาบอกว่าประธานเป็นอะไร/เป็นอย่างไร (มักตามหลัง be, become, look, seem)',
        examples: [
          { en: 'S:Birds|V:fly', th: 'นกบิน (มี S + V ก็เป็นประโยคสมบูรณ์แล้ว)' },
          { en: 'S:She|V:is|C:happy', th: 'เธอมีความสุข (happy เติมเต็มบอกว่าเธอเป็นอย่างไร ไม่ใช่สิ่งที่ถูกกระทำ)' },
          { en: 'S:He|V:hit|O:the ball', th: 'เขาตีลูกบอล (the ball ถูกตี = กรรม)' }
        ],
        confuse: [
          'Object กับ Complement แยกกันด้วยคำถาม "สิ่งนี้ถูกกระทำไหม" — ถ้าใช่คือ Object (hit <u>the ball</u>) ถ้าเป็นแค่คำอธิบายประธานคือ Complement (is <u>happy</u>, is <u>a nurse</u>)',
          'ประโยคที่ไม่มีประธานให้เห็น เช่น "Close the door." ไม่ได้แปลว่าอังกฤษไม่ต้องมีประธาน — เป็นประโยคขอ/สั่ง (imperative) ที่ทุกคนเข้าใจตรงกันว่าประธานคือ <b>you</b> จึงไม่พูดออกมา',
          'ภาษาไทยละประธานได้บ่อยกว่า เช่น "หิวไหม" แต่อังกฤษที่ไม่ใช่ imperative ต้องพูดประธานเสมอ: <u>Are you</u> hungry?'
        ],
        quiz: [
          { q: '"Birds fly." ประโยคนี้ขาดส่วนใดหรือไม่', o: ['ขาด Object', 'ขาด Complement', 'ไม่ขาด สมบูรณ์แล้วด้วย S+V', 'ขาดประธาน'], a: 2,
            clue: 'fly ไม่ต้องมีกรรมหรือส่วนเติมเต็มก็ได้ความ', rule: 'บางกริยามี S+V ก็จบประโยคได้ ไม่ต้องมี O หรือ C',
            why: 'fly เป็นกริยาที่ไม่ต้องมีอะไรตามหลัง ประโยคนี้จบสมบูรณ์แล้ว',
            n: ['fly ไม่จำเป็นต้องมีกรรม', 'fly ไม่ใช่กริยาประเภทที่ต้องมี complement', '', 'Birds คือประธานอยู่แล้ว'],
            ex: 'The baby cried. (S+V ก็จบได้)' },
          { q: '"He is a teacher." คำว่า "a teacher" ทำหน้าที่ใด', o: ['Object เพราะถูกกระทำ', 'Complement เพราะบอกว่าประธานเป็นอะไร', 'Subject', 'Verb'], a: 1,
            clue: 'a teacher ไม่ได้ถูกใครทำอะไร', rule: 'หลัง be มักเป็น Complement ที่บอกว่าประธานเป็นใคร/อะไร',
            why: 'a teacher ไม่ถูกกระทำ แค่บอกว่า he เป็นอะไร จึงเป็น complement',
            n: ['a teacher ไม่ถูกกระทำ จึงไม่ใช่ object', '', 'a teacher ไม่ใช่ประธาน', 'a teacher ไม่ใช่กริยา'],
            ex: 'This is my bag. (my bag = complement)' },
          { q: '"She kicked the ball." คำว่า "the ball" ทำหน้าที่ใด', o: ['Complement เพราะอธิบายประธาน', 'Object เพราะถูกเตะ (ถูกกระทำ)', 'Subject', 'Verb'], a: 1,
            clue: 'the ball ถูกเตะ', rule: 'สิ่งที่ถูกกระทำโดยกริยาคือ Object',
            why: 'the ball ถูกเตะ (ถูกกระทำ) จึงเป็น Object ไม่ใช่ Complement',
            n: ['the ball ไม่ได้อธิบายว่า she เป็นอะไร', '', 'the ball ไม่ใช่ผู้ทำ', 'the ball ไม่ใช่การกระทำ'],
            ex: 'I ate the cake. (the cake = object)' },
          { q: 'ข้อใดเป็นประโยคขอ/สั่ง (imperative) ที่ประธาน "you" ถูกละไว้', o: ['You close the door.', 'Close the door.', 'She closes the door.', 'Is the door closed?'], a: 1,
            clue: 'ไม่เห็นประธาน แต่ยังสั่งได้', rule: 'Imperative sentence ไม่พูดประธาน you ออกมา แต่ทุกคนเข้าใจว่าหมายถึงผู้ฟัง',
            why: '"Close the door." ไม่มีประธานให้เห็น แต่เข้าใจว่าคือ you',
            n: ['ข้อนี้พูด You ออกมาแล้ว ไม่ใช่ imperative', '', 'ข้อนี้มีประธาน She ชัดเจน', 'ข้อนี้เป็นประโยคคำถาม'],
            ex: 'Sit down, please. (you ถูกละไว้)' },
          { q: 'เรียงคำให้เป็นประโยคที่ถูกต้อง: is / My sister / a doctor', o: ['My sister is a doctor.', 'Is my sister a doctor.', 'A doctor my sister is.', 'My sister a doctor is.'], a: 0,
            clue: 'S + V + C', rule: 'ประโยคบอกเล่าเรียง Subject + Verb (+Object/Complement)',
            why: 'My sister (S) → is (V) → a doctor (C บอกว่าน้องสาวเป็นอะไร)',
            n: ['', 'รูปนี้เป็นคำถาม ไม่ใช่ประโยคบอกเล่า', 'สลับตำแหน่ง complement มาไว้หน้าประธาน', 'complement ต้องอยู่หลัง verb ไม่ใช่หน้า is'],
            ex: 'That book is interesting.' }
        ],
        writing: [
          { prompt: 'แต่งประโยค 1 ประโยคที่มีแค่ S + V (ไม่ต้องมี Object หรือ Complement)', sample: 'The sun rises.',
            checklist: ['มีประธาน (Subject) ชัดเจน', 'มีกริยา (Verb) ที่ไม่ต้องมีคำต่อท้ายก็ได้ความ', 'ไม่มีจุด (.) มากกว่า 1 ประโยค'] },
          { prompt: 'แต่งประโยค 1 ประโยคที่มี Complement (บอกว่าประธานเป็นอะไร/เป็นอย่างไร) โดยใช้ is/am/are', sample: 'My father is kind.',
            checklist: ['ใช้ be (is/am/are) เป็นกริยา', 'คำหลัง be บอกว่าประธานเป็นอะไร/เป็นอย่างไร ไม่ใช่สิ่งที่ถูกกระทำ', 'สะกดคำถูกต้องและมีจุดจบประโยค'] }
        ]
      },
      {
        id: 'sent-svo', level: 'A1', title: 'Subject + Verb + Object', th: 'ประธาน + กริยา + กรรม',
        explain: 'ประโยคพื้นฐานของภาษาอังกฤษเรียงแบบ <b>ใคร (Subject) → ทำอะไร (Verb) → กับอะไร (Object)</b><br>• <b>Subject</b> = ผู้ทำ มักอยู่หน้าสุด<br>• <b>Verb</b> = การกระทำ<br>• <b>Object</b> = สิ่งที่ถูกกระทำ อยู่หลังกริยา<br>ข้อมูลอื่น เช่น ที่ไหน/เมื่อไร มักตามหลังกรรม',
        formula: '<b>S</b> ใคร → <b>V</b> ทำอะไร → <b>O</b> กับอะไร → ที่ไหน → เมื่อไร',
        examples: [
          { en: 'S:I|V:love|O:my dog', th: 'ฉันรักสุนัขของฉัน' },
          { en: 'S:The children|V:eat|O:rice|T:every day', th: 'เด็ก ๆ กินข้าวทุกวัน' },
          { en: 'S:Somchai|V:reads|O:the newspaper|Pl:in the kitchen', th: 'สมชายอ่านหนังสือพิมพ์ในครัว' }
        ],
        confuse: [
          'ประโยคบอกเล่า/คำถามทั่วไปต้องมีประธานเสมอ ภาษาไทยพูด "กินข้าวแล้ว" ได้โดยไม่พูดผู้พูด แต่อังกฤษต้องเป็น <b>I</b> ate. — <b>ข้อยกเว้น</b> คือประโยคขอ/สั่ง (imperative) เช่น "Close the door." ไม่มีประธานให้เห็น เพราะ<b>ผู้ฟัง (you) เป็นประธานที่เข้าใจตรงกันโดยไม่ต้องพูด</b> ไม่ใช่ว่าประโยคนี้ไม่มีประธานจริง ๆ',
          'สลับตำแหน่งแล้วความหมายเปลี่ยน: The dog bit the man. ≠ The man bit the dog.'
        ],
        quiz: [
          { q: 'ข้อใดเรียงคำถูกต้อง', o: ['I love my dog.', 'Love I my dog.', 'I my dog love.', 'Dog my love I.'], a: 0,
            clue: 'S → V → O', rule: 'ประโยคพื้นฐานเรียง ประธาน + กริยา + กรรม',
            why: 'I (S) → love (V) → my dog (O)',
            n: ['', 'กริยาอยู่หน้าประธาน', 'กรรมอยู่หน้ากริยา', 'เรียงกลับหลังทั้งหมด'],
            ex: 'She likes music.' },
          { q: 'ประธานของ "The children eat rice." คือข้อใด', o: ['The children', 'eat', 'rice', 'eat rice'], a: 0,
            clue: 'ใครกิน', rule: 'Subject คือผู้ทำ อยู่หน้ากริยา',
            why: 'The children เป็นผู้กิน',
            n: ['', 'eat เป็นกริยา', 'rice เป็นกรรม', 'eat rice คือกริยา + กรรม'],
            ex: '<u>My sister</u> sings well.' },
          { q: 'กรรมของ "Somchai reads the newspaper." คือข้อใด', o: ['Somchai', 'reads', 'the newspaper', 'Somchai reads'], a: 2,
            clue: 'อ่านอะไร', rule: 'Object คือสิ่งที่ถูกกระทำ อยู่หลังกริยา',
            why: 'the newspaper เป็นสิ่งที่ถูกอ่าน',
            n: ['Somchai เป็นประธาน', 'reads เป็นกริยา', '', 'เป็นประธาน + กริยา'],
            ex: 'I drink <u>water</u>.' },
          { q: 'กริยาของ "My mother cooks dinner." คือข้อใด', o: ['My mother', 'cooks', 'dinner', 'My'], a: 1,
            clue: 'แม่ทำอะไร', rule: 'Verb บอกการกระทำของประธาน',
            why: 'cooks = ทำอาหาร เป็นการกระทำของแม่',
            n: ['เป็นประธาน', '', 'เป็นกรรม', 'my เป็นคำแสดงความเป็นเจ้าของ'],
            ex: 'They <u>build</u> houses.' },
          { q: 'ข้อใดเรียงคำถูกต้อง', o: ['She drinks milk.', 'She milk drinks.', 'Drinks she milk.', 'Milk drinks she.'], a: 0,
            clue: 'S → V → O', rule: 'ประธาน + กริยา + กรรม',
            why: 'She (S) → drinks (V) → milk (O)',
            n: ['', 'กรรมอยู่หน้ากริยา', 'กริยาอยู่หน้าสุด', 'กลายเป็นนมดื่มเธอ'],
            ex: 'We play games.' }
        ]
      },
      {
        id: 'sent-be', level: 'A1', title: 'Sentences with be', th: 'ประโยคที่ใช้ be',
        explain: 'เมื่อบอกว่า <b>เป็นใคร/เป็นอะไร</b>, <b>เป็นอย่างไร</b> หรือ <b>อยู่ที่ไหน</b> ต้องใช้ <b>be</b> (am/is/are) เป็นกริยา<br>• S + be + <b>คำนาม</b>: She is <b>a doctor</b>.<br>• S + be + <b>คุณศัพท์</b>: She is <b>tired</b>.<br>• S + be + <b>สถานที่</b>: She is <b>at home</b>.<br>ภาษาไทยมักไม่มีคำว่า "เป็น/อยู่" ในประโยคแบบนี้ แต่ภาษาอังกฤษ <b>ต้องมี be เสมอ</b>',
        formula: 'S + <b>am/is/are</b> + คำนาม / คุณศัพท์ / สถานที่',
        examples: [
          { en: 'S:I|V:am|C:a student', th: 'ฉันเป็นนักเรียน' },
          { en: 'S:She|V:is|C:very tired', th: 'เธอเหนื่อยมาก (ไทยไม่มี "เป็น" แต่อังกฤษต้องมี is)' },
          { en: 'S:The books|V:are|Pl:on the desk', th: 'หนังสืออยู่บนโต๊ะ' }
        ],
        confuse: [
          'She very tired. ✗ → She <b>is</b> very tired. ✓',
          'ประธานพหูพจน์ใช้ are: The books <b>are</b> ...'
        ],
        quiz: [
          { q: 'I ___ a student.', o: ['am', 'is', 'are', 'be'], a: 0,
            clue: 'I', rule: 'I + am',
            why: 'ประธาน I ใช้ am เสมอ',
            n: ['', 'is ใช้กับ he/she/it', 'are ใช้กับ you/we/they', 'be ไม่ใช้หลังประธานตรง ๆ'],
            ex: 'I am Thai.' },
          { q: 'The books ___ on the desk.', o: ['is', 'are', 'am', 'be'], a: 1,
            clue: 'The books (พหูพจน์)', rule: 'ประธานพหูพจน์ + are',
            why: 'books หลายเล่ม จึงใช้ are',
            n: ['is ใช้กับเอกพจน์', '', 'am ใช้กับ I', 'be ไม่ใช้หลังประธานตรง ๆ'],
            ex: 'The keys are in my bag.' },
          { q: 'My father ___ a doctor.', o: ['is', 'are', 'am', 'does'], a: 0,
            clue: 'My father (1 คน) + เป็นอะไร', rule: 'บอกว่าเป็นอะไรใช้ be · เอกพจน์ใช้ is',
            why: 'My father = he จึงใช้ is',
            n: ['', 'are ใช้กับพหูพจน์', 'am ใช้กับ I', 'does ไม่ใช่ be ใช้บอกว่าเป็นอะไรไม่ได้'],
            ex: 'My aunt is a farmer.' },
          { q: 'She ___ very tired.', o: ['is', '(ไม่ต้องใส่คำ)', 'does', 'has'], a: 0,
            clue: 'very tired (คุณศัพท์)', rule: 'S + be + คุณศัพท์ ต้องมี be',
            why: 'ประโยคต้องมีกริยา และ tired เป็นคุณศัพท์ จึงต้องมี is',
            n: ['', 'ภาษาอังกฤษขาดกริยาไม่ได้', 'does ใช้กับกริยาแท้ ไม่ใช้กับคุณศัพท์', 'has tired ไม่ได้แปลว่าเหนื่อย'],
            ex: 'He is hungry. They are happy.' },
          { q: 'It ___ cold today.', o: ['is', 'are', 'am', 'has'], a: 0,
            clue: 'It + cold (คุณศัพท์)', rule: 'it + is',
            why: 'พูดถึงอากาศใช้ It is',
            n: ['', 'are ใช้กับพหูพจน์', 'am ใช้กับ I', 'has ไม่ใช้บอกสภาพอากาศแบบนี้'],
            ex: 'It is sunny. It is late.' }
        ]
      },
      {
        id: 'sent-there', level: 'A1', title: 'There is / There are', th: 'มี... (บอกว่ามีอะไรอยู่ตรงนั้น)',
        explain: 'เมื่อจะบอกว่า <b>"มีอะไรอยู่ที่หนึ่ง"</b> เป็นครั้งแรก (ผู้ฟังยังไม่รู้ว่ามี) ภาษาอังกฤษใช้ <b>There + is/are</b> นำหน้า ไม่ใช่เอาสิ่งของขึ้นต้นประโยคเหมือน "a cat is..." <br>• สิ่งเดียว/นับไม่ได้ → <b>There is (There\'s)</b><br>• หลายสิ่ง → <b>There are</b><br>คำว่า "there" ในโครงสร้างนี้ไม่ได้แปลว่า "ที่นั่น" มันเป็นแค่ตัวเปิดประโยค ส่วนสถานที่จริงจะพูดต่อท้าย: There is a cat <b>on the sofa</b>.',
        formula: '<b>There is</b> + คำนามเอกพจน์/นับไม่ได้<br><b>There are</b> + คำนามพหูพจน์<br>ปฏิเสธ: There isn\'t / There aren\'t · คำถาม: Is there...? / Are there...?',
        examples: [
          { en: 'x:There|V:is|O:a cat|Pl:on the sofa', th: 'มีแมวตัวหนึ่งอยู่บนโซฟา' },
          { en: 'x:There|V:are|O:three students|Pl:in the room', th: 'มีนักเรียนสามคนอยู่ในห้อง' },
          { en: 'x:Is|x:there|O:any milk|Pl:in the fridge?', th: 'มีนมอยู่ในตู้เย็นไหม' }
        ],
        confuse: [
          'ห้ามพูดว่า "A cat is on the sofa." เมื่อกำลัง<b>บอกครั้งแรกว่ามีอะไร</b> — โครงสร้างนี้ต้องขึ้นต้นด้วย There is/are: "There is a cat on the sofa." (ถ้าพูดถึงแมวตัวที่รู้จักอยู่แล้ว จึงพูด "The cat is on the sofa." ได้)',
          'นับตามคำนามที่ตามหลัง ไม่ใช่ตาม "there": There <u>is</u> a book. / There <u>are</u> books. (books พหูพจน์ ใช้ are)',
          'คำนามนับไม่ได้ (water, milk, money) ใช้ There is เสมอ แม้จะดูเหมือน "มีหลายอย่าง": There is some water in the bottle.'
        ],
        quiz: [
          { q: '___ a book on the table.', o: ['There is', 'There are', 'It is', 'This is'], a: 0,
            clue: 'a book (นับได้ เอกพจน์)', rule: 'สิ่งเดียวใช้ There is',
            why: 'a book เป็นคำนามเอกพจน์ จึงใช้ There is',
            n: ['', 'are ใช้กับพหูพจน์', 'It is ใช้พูดถึงของที่รู้จักแล้ว ไม่ใช่บอกว่ามีครั้งแรก', 'This is ชี้เฉพาะสิ่งที่อยู่ใกล้ ไม่ใช่โครงสร้างบอกว่ามีอะไร'],
            ex: 'There is a pen in my bag.' },
          { q: '___ many students in the class.', o: ['There is', 'There are', 'There has', 'It has'], a: 1,
            clue: 'many students (พหูพจน์)', rule: 'หลายสิ่งใช้ There are',
            why: 'students เป็นพหูพจน์ จึงใช้ There are',
            n: ['is ใช้กับเอกพจน์', '', 'ไม่มีโครงสร้าง there has แบบนี้', 'it has ไม่ใช้บอกว่ามีอะไรอยู่ที่หนึ่ง'],
            ex: 'There are five apples in the bowl.' },
          { q: '___ any milk in the fridge?', o: ['Is there', 'Are there', 'Does there', 'There is'], a: 0,
            clue: 'milk นับไม่ได้ + เป็นคำถาม', rule: 'คำถามสลับเป็น Is there / Are there และ milk นับไม่ได้ใช้ is',
            why: 'milk นับไม่ได้ใช้ is และคำถามต้องสลับ is มาไว้หน้า there',
            n: ['', 'milk นับไม่ได้ ไม่ใช้ are', 'ไม่มีโครงสร้าง does there', 'this is a statement form ไม่ใช่คำถาม'],
            ex: 'Is there a doctor here?' },
          { q: 'ข้อใดถูกต้องเมื่อบอกว่า "มีแมวตัวหนึ่งอยู่ใต้โต๊ะ" เป็นครั้งแรก', o: ['A cat is under the table.', 'There is a cat under the table.', 'The cat under the table.', 'Cat is under the table.'], a: 1,
            clue: 'บอกครั้งแรกว่ามีอะไร', rule: 'บอกว่ามีอะไรครั้งแรกต้องขึ้นต้นด้วย There is/are ไม่ใช่เอาคำนามขึ้นต้น',
            why: 'ประโยคนี้แนะนำแมวตัวนี้ครั้งแรก จึงต้องใช้ There is',
            n: ['เอาคำนามขึ้นต้นแบบนี้ใช้ตอนที่ผู้ฟังรู้จักแมวตัวนี้อยู่แล้ว', '', 'ประโยคนี้ไม่มีกริยา', 'ขาดคำนำหน้านาม the/a และกริยา'],
            ex: 'There is a surprise for you.' },
          { q: 'เรียงคำให้ถูก: are / three / There / windows / in the room', o: ['There are three windows in the room.', 'Three there are windows in the room.', 'There three are windows in the room.', 'Windows are there three in the room.'], a: 0,
            clue: 'There + are + จำนวน + คำนามพหูพจน์', rule: 'There are + คำนามพหูพจน์ + (สถานที่)',
            why: 'There are (มี) → three windows (คำนามพหูพจน์) → in the room (สถานที่)',
            n: ['', 'three ต้องอยู่หลัง are ไม่ใช่หน้า There', 'are ต้องอยู่หลัง There ไม่ใช่กลางประโยค', 'ลำดับผิดทั้งหมด'],
            ex: 'There are two chairs by the window.' }
        ],
        writing: [
          { prompt: 'แต่งประโยคบอกว่า "มีอะไรอยู่ที่ไหน" โดยใช้ There is + คำนามเอกพจน์', sample: 'There is a dog in the garden.',
            checklist: ['ขึ้นต้นด้วย There is', 'คำนามที่ตามมาเป็นเอกพจน์หรือนับไม่ได้', 'มีการบอกสถานที่ต่อท้าย (in/on/at...)'] },
          { prompt: 'แต่งคำถามโดยใช้ Is there หรือ Are there ถามว่ามีสิ่งของอะไรอยู่ในกระเป๋าของคุณ', sample: 'Are there any books in your bag?',
            checklist: ['สลับ is/are มาไว้หน้า there (เพราะเป็นคำถาม)', 'เลือก is/are ให้ตรงกับคำนามที่ตามมา (เอกพจน์/พหูพจน์)', 'ลงท้ายด้วยเครื่องหมายคำถาม (?)'] }
        ]
      },
      {
        id: 'sent-neg', level: 'A2', title: 'Negative sentences', th: 'ประโยคปฏิเสธ',
        explain: 'ประโยคปฏิเสธมี 3 แบบหลัก ดูว่าประโยคเดิมมีอะไร<br>• มี <b>be</b> → เติม <b>not</b> หลัง be: is not (isn\'t), are not (aren\'t), was not (wasn\'t)<br>• กริยาแท้ปัจจุบัน → <b>don\'t / doesn\'t + V1</b><br>• กริยาแท้อดีต → <b>didn\'t + V1</b><br>• อนาคต → <b>won\'t (will not) + V1</b>',
        formula: 'S + <b>be + not</b> + ...<br>S + <b>don\'t/doesn\'t</b> + V1<br>S + <b>didn\'t</b> + V1<br>S + <b>won\'t</b> + V1',
        examples: [
          { en: 'S:He|neg:doesn\'t|V:like|O:fish', th: 'เขาไม่ชอบปลา' },
          { en: 'S:They|V:aren\'t|Pl:at school|T:now', th: 'ตอนนี้พวกเขาไม่ได้อยู่ที่โรงเรียน' },
          { en: 'S:I|neg:didn\'t|V:go|Pl:to the party', th: 'ฉันไม่ได้ไปงานเลี้ยง' }
        ],
        confuse: [
          'หลัง doesn\'t ไม่เติม -s ที่กริยาอีก: He doesn\'t <b>like</b> ✓ · He doesn\'t likes ✗',
          'ประโยคที่มี be ห้ามใช้ don\'t: They <b>aren\'t</b> happy ✓ · They don\'t happy ✗'
        ],
        quiz: [
          { q: 'He ___ like fish.', o: ['don\'t', 'doesn\'t', 'isn\'t', 'not'], a: 1,
            clue: 'He + like (กริยาแท้)', rule: 'he/she/it + doesn\'t + V1',
            why: 'ประธาน He และกริยาแท้ like → doesn\'t like',
            n: ['don\'t ใช้กับ I/you/we/they', '', 'isn\'t ใช้กับ be ไม่ใช้กับกริยาแท้', 'not อย่างเดียววางหน้ากริยาแท้ไม่ได้'],
            ex: 'She doesn\'t eat meat.' },
          { q: 'They ___ at school now.', o: ['aren\'t', 'don\'t', 'doesn\'t', 'isn\'t'], a: 0,
            clue: 'at school (สถานที่ ไม่มีกริยาแท้)', rule: 'ประโยค be → be + not',
            why: 'ต้องใช้ be บอกว่าอยู่ที่ไหน และ They ใช้ are → aren\'t',
            n: ['', 'don\'t ใช้กับกริยาแท้', 'doesn\'t ใช้กับกริยาแท้', 'isn\'t ใช้กับเอกพจน์'],
            ex: 'We aren\'t ready.' },
          { q: 'I ___ go to the party last night.', o: ['didn\'t', 'don\'t', 'wasn\'t', 'doesn\'t'], a: 0,
            clue: 'last night + go (กริยาแท้)', rule: 'อดีต + กริยาแท้ → didn\'t + V1',
            why: 'เป็นอดีตและมีกริยา go จึงใช้ didn\'t',
            n: ['', 'don\'t เป็นปัจจุบัน', 'wasn\'t ใช้กับ be ไม่ใช้กับ go', 'doesn\'t เป็นปัจจุบันและไม่ใช้กับ I'],
            ex: 'She didn\'t come.' },
          { q: 'She doesn\'t ___ a car.', o: ['has', 'have', 'had', 'having'], a: 1,
            clue: 'doesn\'t', rule: 'doesn\'t + V1',
            why: 'doesn\'t มี -s แล้ว กริยาจึงใช้ have',
            n: ['has ซ้ำกับ doesn\'t', '', 'had เป็นอดีต', 'having ไม่ใช้หลัง doesn\'t'],
            ex: 'He doesn\'t know.' },
          { q: 'We ___ be late tomorrow.', o: ['won\'t', 'don\'t', 'aren\'t', 'didn\'t'], a: 0,
            clue: 'tomorrow + be (V1)', rule: 'อนาคตปฏิเสธ → won\'t + V1',
            why: 'tomorrow เป็นอนาคต จึงใช้ won\'t be',
            n: ['', 'don\'t ใช้กับกริยาแท้ปัจจุบัน', 'aren\'t ตามด้วย be ไม่ได้', 'didn\'t เป็นอดีต'],
            ex: 'I won\'t forget.' }
        ]
      },
      {
        id: 'sent-q', level: 'A2', title: 'Questions', th: 'ประโยคคำถาม',
        explain: '<b>คำถาม Yes/No</b>: ย้าย be หรือกริยาช่วยมาไว้ <b>หน้าประธาน</b><br>• Are you ...? / Is she ...?<br>• Do/Does + S + V1 ...? (ปัจจุบัน) · Did + S + V1 ...? (อดีต)<br><b>คำถาม Wh-</b>: วางคำแสดงคำถามไว้หน้าสุด แล้วเรียงแบบ Yes/No<br>What (อะไร) · Where (ที่ไหน) · When (เมื่อไร) · Who (ใคร) · Why (ทำไม) · How (อย่างไร)',
        formula: '<b>Be</b> + S + ...? → Are you ready?<br><b>Do/Does/Did</b> + S + V1? → Does she work?<br><b>Wh-</b> + do/does/did + S + V1? → Where do you live?',
        examples: [
          { en: 'q:Are|S:you|C:a student?', th: 'คุณเป็นนักเรียนไหม' },
          { en: 'q:Does|S:she|V:live|Pl:in Bangkok?', th: 'เธออาศัยอยู่ในกรุงเทพฯ ไหม' },
          { en: 'q:What|aux:did|S:you|V:eat?', th: 'คุณกินอะไร' }
        ],
        confuse: [
          'หลัง Did ใช้ช่อง 1: What did you <b>eat</b>? ✓ · What did you ate? ✗',
          'ภาษาไทยเติม "ไหม" ท้ายประโยค แต่อังกฤษต้องย้ายคำมาไว้หน้าประธาน'
        ],
        quiz: [
          { q: '___ you a student?', o: ['Are', 'Do', 'Is', 'Does'], a: 0,
            clue: 'you + a student (ไม่มีกริยาแท้)', rule: 'คำถามประโยค be: Be + S ...?',
            why: 'ถามว่า "เป็น" นักเรียนไหม ต้องใช้ be และ you ใช้ are',
            n: ['', 'Do ใช้กับกริยาแท้', 'Is ใช้กับ he/she/it', 'Does ใช้กับกริยาแท้และ he/she/it'],
            ex: 'Are they ready?' },
          { q: '___ she live in Bangkok?', o: ['Does', 'Do', 'Is', 'Are'], a: 0,
            clue: 'she + live (กริยาแท้)', rule: 'Does + he/she/it + V1?',
            why: 'ประธาน she และกริยาแท้ live → Does',
            n: ['', 'Do ใช้กับ I/you/we/they', 'Is ใช้กับ be', 'Are ใช้กับ be'],
            ex: 'Does he play tennis?' },
          { q: 'Where ___ they work?', o: ['do', 'does', 'are', 'is'], a: 0,
            clue: 'they + work (กริยาแท้)', rule: 'Wh- + do + I/you/we/they + V1',
            why: 'they ใช้ do และ work เป็นกริยาแท้',
            n: ['', 'does ใช้กับ he/she/it', 'are ใช้กับ be', 'is ใช้กับ be'],
            ex: 'What do you want?' },
          { q: 'คำใดใช้ถาม <b>เวลา</b>', o: ['When', 'Where', 'Who', 'Why'], a: 0,
            clue: 'เวลา = เมื่อไร', rule: 'When = เมื่อไร',
            why: 'When ใช้ถามเวลา',
            n: ['', 'Where ถามสถานที่', 'Who ถามบุคคล', 'Why ถามเหตุผล'],
            ex: 'When does the class start?' },
          { q: 'ข้อใดถูกต้อง', o: ['What did you eat?', 'What you ate?', 'What did you ate?', 'What you did eat?'], a: 0,
            clue: 'Wh- + did + S + V1', rule: 'คำถามอดีต: Wh- + did + S + V1',
            why: 'What + did + you + eat',
            n: ['', 'ขาด did และไม่สลับตำแหน่ง', 'หลัง did ต้องใช้ eat ไม่ใช่ ate', 'did ต้องอยู่หน้าประธาน'],
            ex: 'Where did they go?' }
        ]
      },
      {
        id: 'sent-passive', level: 'B1', title: 'Passive Voice', th: 'ประโยคที่ประธานถูกกระทำ',
        explain: 'ปกติประธาน<b>เป็นผู้ทำ</b> (active) แต่บางครั้งเราอยากเน้น<b>สิ่งที่ถูกกระทำ</b>แทน โดยไม่สนใจ/ไม่รู้ว่าใครทำ (passive)<br>วิธีเปลี่ยน: เอา<b>กรรมเดิม</b>มาเป็น<b>ประธานใหม่</b> + <b>be + V3</b><br>Active: The chef <b>cooks</b> the meal. → Passive: The meal <b>is cooked</b> (by the chef).<br>ใช้ be ให้ตรงกาลเดิม: is/are (ปัจจุบัน), was/were (อดีต), will be (อนาคต)',
        formula: 'Active: S + V + O → Passive: <b>O</b> (ประธานใหม่) + <b>be + V3</b> + (by + S เดิม)',
        examples: [
          { en: 'S:The letter|aux:was|V:written|Pl:by Tom', th: 'จดหมายถูกเขียนโดยทอม (เน้นจดหมาย ไม่เน้นว่าใครเขียน)' },
          { en: 'S:This bridge|aux:was|V:built|T:in 1990', th: 'สะพานนี้ถูกสร้างในปี 1990 (ไม่รู้/ไม่สำคัญว่าใครสร้าง)' },
          { en: 'S:English|aux:is|V:spoken|Pl:in many countries', th: 'ภาษาอังกฤษถูกพูดในหลายประเทศ' }
        ],
        confuse: [
          'กริยาต้องเป็น <b>V3 (กริยาช่อง 3)</b> เสมอ ไม่ใช่ V1 หรือ V-ing: "is written" ✓ ไม่ใช่ "is write" หรือ "is writing" (ซึ่งเป็นคนละความหมาย)',
          'ไม่ต้องใส่ "by + ผู้ทำ" เสมอไป — ใส่เฉพาะเมื่อรู้และสำคัญ: "My phone was stolen." (ไม่รู้ว่าใครขโมย ไม่ต้องมี by)',
          'ประโยคที่ไม่มีกรรม (เช่น "He sleeps.") <b>เปลี่ยนเป็น passive ไม่ได้</b> เพราะไม่มีอะไรจะมาเป็นประธานใหม่'
        ],
        quiz: [
          { q: 'This song ___ by a famous singer.', o: ['sings', 'sang', 'was sung', 'sing'], a: 2,
            clue: 'This song (ประธานถูกกระทำ) + by', rule: 'Passive: be + V3',
            why: 'song ถูกร้อง (ไม่ได้ร้องเอง) จึงใช้ was sung',
            n: ['เป็น active form ไม่ใช่ passive', 'ขาด be และเป็นอดีตธรรมดา ไม่ใช่ passive', '', 'ขาด be'],
            ex: 'This house was designed by a famous architect.' },
          { q: 'Rice ___ in Thailand.', o: ['grows', 'is grown', 'grew', 'growing'], a: 1,
            clue: 'ข้าวถูกปลูก (ไม่ได้ปลูกเอง) + ข้อเท็จจริงทั่วไป', rule: 'ข้อเท็จจริงทั่วไปแบบ passive: is/are + V3',
            why: 'ข้าวถูกปลูกโดยคน จึงใช้ passive is grown',
            n: ['เป็น active แปลว่าข้าวปลูกเอง ไม่สมเหตุผล', '', 'growing ต้องมี is นำหน้าและควรเป็น V3 ไม่ใช่ V-ing สำหรับ passive', 'เป็นอดีต ไม่ใช่ข้อเท็จจริงทั่วไป'],
            ex: 'Coffee is grown in many countries.' },
          { q: 'ข้อใดคือ passive ของ "Someone stole my bike."', o: ['My bike stole someone.', 'My bike was stolen.', 'My bike is stealing.', 'Someone was stolen my bike.'], a: 1,
            clue: 'my bike = กรรมเดิม → ประธานใหม่', rule: 'กรรมเดิมกลายเป็นประธานใหม่ + be + V3',
            why: 'my bike (กรรมเดิม) กลายเป็นประธาน + was stolen (be + V3)',
            n: ['สลับบทบาทผิด', '', 'stealing ไม่ใช่ V3 และไม่ตรงกาลอดีต', 'ประธานเดิม (someone) ไม่ควรเป็นประธานใน passive แบบนี้'],
            ex: 'Someone broke the window. → The window was broken.' },
          { q: 'ประโยคใดเปลี่ยนเป็น passive ไม่ได้ (ไม่มีกรรม)', o: ['She wrote a letter.', 'He sleeps early.', 'They built a house.', 'The chef cooked dinner.'], a: 1,
            clue: 'sleep ไม่มีกรรม', rule: 'ต้องมีกรรม (object) ถึงจะเปลี่ยนเป็น passive ได้',
            why: '"sleeps early" ไม่มีกรรม จึงไม่มีอะไรมาเป็นประธานใหม่',
            n: ['a letter เป็นกรรม เปลี่ยนได้: A letter was written.', '', 'a house เป็นกรรม เปลี่ยนได้', 'dinner เป็นกรรม เปลี่ยนได้'],
            ex: 'He arrived late. (arrive ไม่มีกรรม เปลี่ยน passive ไม่ได้เช่นกัน)' },
          { q: 'เรียงคำให้ถูก: built / The / was / bridge / 1990 / in', o: ['The bridge was built in 1990.', 'The bridge built was in 1990.', 'Was the bridge built in 1990.', 'The bridge was in built 1990.'], a: 0,
            clue: 'S + was + V3 + in + ปี', rule: 'S (ประธานใหม่) + be + V3 + (by...) + เวลา',
            why: 'The bridge (S) → was built (be+V3) → in 1990 (เวลา)',
            n: ['', 'was ต้องอยู่หน้า built ไม่ใช่หลัง', 'รูปนี้เป็นคำถาม ไม่ใช่บอกเล่า', 'in ต้องอยู่หน้าปี ไม่ใช่แทรกกลาง'],
            ex: 'The museum was opened in 2005.' }
        ],
        writing: [
          { prompt: 'เปลี่ยนประโยค active นี้เป็น passive: "Workers built this factory in 1985."', sample: 'This factory was built in 1985.',
            checklist: ['กรรมเดิม (this factory) กลายเป็นประธานใหม่', 'กริยาอยู่ในรูป be + V3 (was built)', 'ตัด "by workers" ได้เพราะไม่สำคัญว่าใครสร้าง หรือใส่ไว้ก็ได้'] },
          { prompt: 'แต่งประโยค passive 1 ประโยคที่ไม่ต้องบอกว่าใครเป็นคนทำ (ไม่มี by)', sample: 'My wallet was stolen last night.',
            checklist: ['เป็นรูป passive (be + V3)', 'ไม่มี by + ผู้ทำ เพราะไม่รู้หรือไม่สำคัญ', 'ประโยคสมเหตุสมผล'] }
        ]
      },
      {
        id: 'sent-cond1', level: 'B1', title: 'Conditionals: Zero & First', th: 'ประโยคเงื่อนไข: จริงเสมอ & น่าจะเป็นจริง',
        explain: 'ประโยคเงื่อนไข (if) มีสองแบบพื้นฐาน:<br>• <b>Zero Conditional</b> (จริงเสมอ/ข้อเท็จจริง): <b>If + Present Simple, Present Simple</b> — ใช้กับสิ่งที่เป็นจริงทุกครั้ง เช่น กฎวิทยาศาสตร์<br>• <b>First Conditional</b> (น่าจะเกิดขึ้นได้ในอนาคต): <b>If + Present Simple, will + V1</b> — ใช้กับสิ่งที่มีโอกาสเกิดจริง',
        formula: 'Zero: If + <b>V1(s)</b>, <b>V1(s)</b> (ข้อเท็จจริง)<br>First: If + <b>V1(s)</b>, <b>will + V1</b> (คาดว่าจะเกิด)',
        examples: [
          { en: 'R:If|S:you|V:heat|O:water|T:to 100°C,|S:it|V:boils', th: 'ถ้าคุณต้มน้ำถึง 100 องศา น้ำจะเดือด (จริงเสมอ)' },
          { en: 'R:If|S:it|V:rains|T:tomorrow,|S:we|aux:will|V:stay|Pl:home', th: 'ถ้าพรุ่งนี้ฝนตก เราจะอยู่บ้าน (น่าจะเกิดได้จริง)' },
          { en: 'S:I|aux:will|V:call|O:you|R:if|S:I|aux:have|C:time', th: 'ฉันจะโทรหาคุณถ้าฉันมีเวลา (สลับที่ if-clause ไปท้ายประโยคได้)' }
        ],
        confuse: [
          'if-clause (เงื่อนไข) ใช้ <b>Present Simple เสมอ</b> แม้จะพูดถึงอนาคต — ห้ามใช้ "will" ในประโยคที่มี if: "If it <u>will rain</u>" ✗ ต้องเป็น "If it <u>rains</u>" ✓',
          'ถ้า if-clause อยู่<b>หน้าประโยค</b> ต้องมี<b>comma (,)</b> คั่นก่อนส่วนผล แต่ถ้า if-clause อยู่<b>ท้ายประโยค</b> ไม่ต้องมี comma'
        ],
        quiz: [
          { q: 'If you heat ice, it ___ .', o: ['melt', 'melts', 'will melt', 'melted'], a: 1,
            clue: 'ข้อเท็จจริงทางวิทยาศาสตร์', rule: 'Zero Conditional: If + V1(s), V1(s)',
            why: 'น้ำแข็งละลายเมื่อโดนความร้อนเป็นจริงเสมอ ทั้งสองประโยคใช้ Present Simple',
            n: ['ขาด -s', '', 'will melt ใช้กับ First Conditional ไม่ใช่ข้อเท็จจริงถาวรแบบนี้ (แม้จะไม่ผิดมาก แต่ melts ถูกต้องกว่าสำหรับข้อเท็จจริง)', 'melted เป็นอดีต ไม่ใช่ข้อเท็จจริงทั่วไป'],
            ex: 'If you mix red and blue, you get purple.' },
          { q: 'If it ___ tomorrow, we will cancel the picnic.', o: ['will rain', 'rains', 'rained', 'raining'], a: 1,
            clue: 'if-clause ใช้ Present Simple แม้พูดถึงอนาคต', rule: 'First Conditional: If + Present Simple, will + V1',
            why: 'if-clause ห้ามใช้ will แม้จะพูดถึงเรื่องในอนาคต (tomorrow) ต้องใช้ rains',
            n: ['if-clause ห้ามใช้ will', '', 'rained เป็นอดีต ไม่ตรงกับ tomorrow', 'raining ต้องมี is นำหน้าและไม่ใช่รูปที่ถูกต้องสำหรับ if-clause นี้'],
            ex: 'If she studies hard, she will pass the exam.' },
          { q: 'If you don\'t water plants, they ___ .', o: ['die', 'dies', 'will died', 'died'], a: 0,
            clue: 'ข้อเท็จจริงทั่วไป + they (พหูพจน์)', rule: 'Zero Conditional + ประธานพหูพจน์ไม่เติม s',
            why: 'เป็นข้อเท็จจริงทั่วไปและ they เป็นพหูพจน์ จึงใช้ die เฉย ๆ',
            n: ['', 'dies ใช้กับประธานเอกพจน์', 'will died ผิดโครงสร้าง (will ตามด้วย V1 เสมอ)', 'died เป็นอดีต'],
            ex: 'If people don\'t sleep enough, they feel tired.' },
          { q: 'ข้อใดถูกต้อง (First Conditional)', o: ['If I will see him, I will tell him.', 'If I see him, I will tell him.', 'If I see him, I tell him.', 'If I saw him, I will tell him.'], a: 1,
            clue: 'if-clause ต้องเป็น Present Simple', rule: 'If + Present Simple, will + V1',
            why: 'if-clause ใช้ see (Present Simple) ไม่มี will และส่วนผลใช้ will tell',
            n: ['if-clause ห้ามมี will', '', 'ส่วนผลต้องใช้ will tell ไม่ใช่ tell เฉย ๆ (นั่นจะกลายเป็น Zero Conditional ซึ่งไม่ตรงกับสถานการณ์ที่ไม่แน่นอนนี้)', 'if-clause ใช้ saw (อดีต) ผิด ต้องเป็น Present Simple'],
            ex: 'If it gets dark, we will turn on the lights.' },
          { q: 'เรียงคำให้ถูก: rains, / If / stay / it / home / we\'ll', o: ["If it rains, we'll stay home.", "It rains if, we'll stay home.", "If it rain, we'll stay home.", "We'll stay home, rains if it."], a: 0,
            clue: 'If + Present Simple, + will + V1', rule: 'If-clause หน้าประโยค ต้องมี comma คั่น',
            why: 'If it rains (เงื่อนไข) + comma + we\'ll stay home (ผล)',
            n: ['', 'If ต้องอยู่ต้นประโยค', 'ขาด -s ที่ rain (it เป็นเอกพจน์)', 'ลำดับส่วนเงื่อนไขและผลสลับกันโดยไม่มี comma ที่ถูกตำแหน่ง'],
            ex: "If you're free, call me." }
        ],
        writing: [
          { prompt: 'แต่งประโยค Zero Conditional 1 ประโยค (ข้อเท็จจริงที่จริงเสมอ)', sample: 'If you freeze water, it turns into ice.',
            checklist: ['ทั้งสองส่วนใช้ Present Simple', 'เนื้อหาเป็นความจริงที่เกิดขึ้นเสมอ ไม่ใช่แค่ครั้งเดียว', 'มี comma คั่นถ้า if-clause อยู่หน้าประโยค'] },
          { prompt: 'แต่งประโยค First Conditional 1 ประโยค (สิ่งที่น่าจะเกิดขึ้นได้ในอนาคต)', sample: "If I have free time this weekend, I will visit my grandmother.", checklist: ['if-clause ใช้ Present Simple (ไม่มี will)', 'ส่วนผลใช้ will + V1', 'เนื้อหาเป็นเรื่องที่มีโอกาสเกิดขึ้นจริงได้'] }
        ]
      },
      {
        id: 'sent-cond2', level: 'B1', title: 'Conditionals: Second (Unreal Present)', th: 'ประโยคเงื่อนไข: สมมติที่ไม่จริงตอนนี้',
        explain: 'ใช้พูดถึงสถานการณ์ <b>สมมติที่ไม่เป็นจริงในปัจจุบัน</b> หรือ<b>ไม่น่าจะเกิดขึ้นได้</b> (ฝันกลางวัน คำแนะนำแบบสมมติ)<br>โครงสร้าง: <b>If + Past Simple, would + V1</b><br>สังเกต: ใช้รูป<b>อดีต</b>แต่<b>ไม่ได้พูดถึงอดีตจริง</b> — เป็นแค่รูปแบบไวยากรณ์ที่บอกว่า "สมมติ ไม่จริง"<br>กับ be มักใช้ <b>were</b> กับทุกประธาน (แม้ I/he/she/it) ในบริบทที่เป็นทางการ/สำนวน "If I were you"',
        formula: 'If + <b>Past Simple</b>, <b>would + V1</b><br>"If I <b>were</b> you, I <b>would</b> study harder."',
        examples: [
          { en: 'R:If|S:I|V:had|O:a million dollars,|S:I|aux:would|V:travel|Pl:around the world', th: 'ถ้าฉันมีเงินล้าน ฉันจะเดินทางรอบโลก (สมมติ ไม่ได้มีจริง)' },
          { en: 'R:If|S:I|aux:were|C:you,|S:I|aux:would|V:apologize', th: 'ถ้าฉันเป็นคุณ ฉันจะขอโทษ (คำแนะนำแบบสมมติ)' },
          { en: 'R:If|S:she|V:knew|O:the answer,|S:she|aux:would|V:tell|O:us', th: 'ถ้าเธอรู้คำตอบ เธอคงบอกเราแล้ว (บอกเป็นนัยว่าจริง ๆ เธอไม่รู้)' }
        ],
        confuse: [
          'First Conditional (น่าจะเกิดได้จริง) vs Second Conditional (สมมติ ไม่จริง/ไม่น่าเกิด): "If I <u>win</u> the lottery, I <u>will</u> buy a car." (ซื้อลอตเตอรี่จริง มีโอกาส) vs "If I <u>won</u> the lottery, I <u>would</u> buy a car." (พูดเล่น ๆ ไม่ได้ซื้อจริง)',
          '"If I were you" เป็นสำนวนให้คำแนะนำที่ใช้บ่อยมาก ใช้ were ไม่ใช่ was แม้ประธานจะเป็น I'
        ],
        quiz: [
          { q: 'If I ___ rich, I would buy a big house.', o: ['am', 'was', 'were', 'will be'], a: 2,
            clue: 'สมมติ ไม่จริงตอนนี้', rule: 'Second Conditional: If + Past Simple (were กับทุกประธาน)',
            why: 'เป็นสถานการณ์สมมติ ไม่จริงตอนนี้ จึงใช้ were',
            n: ['เป็นปัจจุบันจริง ไม่ใช่สมมติ', 'ใช้ได้ในบางบริบทไม่เป็นทางการ แต่ were เป็นคำตอบที่ถูกต้องมาตรฐานกว่าสำหรับ Conditional นี้', '', 'จะกลายเป็นอนาคตจริง ไม่ใช่สมมติ'],
            ex: 'If I were a bird, I would fly everywhere.' },
          { q: 'If she ___ harder, she would pass the exam.', o: ['studies', 'studied', 'will study', 'study'], a: 1,
            clue: 'สมมติ (นัยว่าจริง ๆ เธอไม่ได้ขยันพอ)', rule: 'If + Past Simple, would + V1',
            why: 'if-clause ของ Second Conditional ใช้ Past Simple (studied)',
            n: ['เป็น First Conditional ไม่ใช่ Second', '', 'ห้ามใช้ will ใน if-clause', 'ขาด -ed'],
            ex: 'If he ate more vegetables, he would be healthier.' },
          { q: 'A: What would you do if you saw a ghost? B: I ___ scream!', o: ['will', 'would', 'am going to', 'do'], a: 1,
            clue: 'ตอบคำถามสมมติ', rule: 'ส่วนผลของ Second Conditional ใช้ would + V1',
            why: 'คำถามเป็นแบบสมมติ (if you saw) ส่วนคำตอบจึงต้องใช้ would ให้สอดคล้องกัน',
            n: ['จะกลายเป็นคำตอบสำหรับสถานการณ์จริง ไม่สอดคล้องกับคำถามสมมติ', '', 'ไม่สอดคล้องกับรูปแบบคำถาม', 'ไม่สอดคล้องกับรูปแบบคำถาม'],
            ex: "If I won the lottery, I would quit my job." },
          { q: 'ข้อใดคือ Second Conditional ที่ถูกต้อง', o: ['If I have wings, I will fly.', 'If I had wings, I would fly.', 'If I had wings, I will fly.', 'If I have wings, I would fly.'], a: 1,
            clue: 'มีปีก = สมมติ เป็นไปไม่ได้จริง', rule: 'If + Past Simple, would + V1 (ทั้งสองส่วนต้องสอดคล้องกัน)',
            why: 'สถานการณ์ "มีปีก" เป็นไปไม่ได้จริง ต้องใช้ had (if-clause) และ would (ส่วนผล) คู่กัน',
            n: ['เป็น First Conditional โครงสร้าง ไม่เหมาะกับสถานการณ์ที่เป็นไปไม่ได้นี้', '', 'ผสมสองโครงสร้าง: had (Second) กับ will (First)', 'ผสมสองโครงสร้างผิด: have (First) กับ would (Second)'],
            ex: 'If I had more time, I would learn to paint.' },
          { q: 'เรียงคำให้ถูก: were / I / would / apologize / you / If / I,', o: ['If I were you, I would apologize.', 'If I was you, I would apologize.', 'I would apologize, if I were you', 'If I were you, I apologize would.'], a: 0,
            clue: 'If I were you (สำนวนคำแนะนำ)', rule: 'If + S + were + ..., S + would + V1',
            why: 'If I were you (เงื่อนไขสมมติ) + I would apologize (คำแนะนำ)',
            n: ['', 'ใช้ were ไม่ใช่ was ในสำนวนนี้', 'ลำดับกลับหน้าหลังไม่เป็นธรรมชาติเท่าตัวเลือกที่ถูก (แม้จะสลับได้แต่ comma ต้องหายไป ทำให้ข้อนี้ไม่สมบูรณ์)', 'would ต้องอยู่หน้า apologize ไม่ใช่หลัง'],
            ex: 'If I were rich, I would help many people.' }
        ],
        writing: [
          { prompt: 'แต่งประโยค Second Conditional สมมติว่าคุณมีของ/ความสามารถที่ไม่มีจริงตอนนี้', sample: 'If I could speak five languages, I would work as a translator.',
            checklist: ['if-clause ใช้ Past Simple', 'ส่วนผลใช้ would + V1', 'เนื้อหาเป็นสิ่งที่ไม่จริง/ไม่น่าเกิดขึ้นในตอนนี้'] },
          { prompt: 'แต่งประโยคให้คำแนะนำแบบสมมติโดยใช้สำนวน "If I were you, ..."', sample: 'If I were you, I would talk to the teacher about it.',
            checklist: ['ใช้ "If I were you" (ไม่ใช่ was)', 'ส่วนผลใช้ would + V1', 'เป็นคำแนะนำที่สมเหตุสมผล'] }
        ]
      },
      {
        id: 'sent-link', level: 'B1', title: 'Linking ideas', th: 'คำเชื่อมความคิด',
        explain: 'คำเชื่อมบอก <b>ความสัมพันธ์</b> ระหว่างความคิดสองส่วน<br>• เพิ่มเติม: <b>and</b> · ทางเลือก: <b>or</b><br>• ขัดแย้ง: <b>but</b>, <b>although</b> (แม้ว่า), <b>However,</b> (อย่างไรก็ตาม)<br>• เหตุ: <b>because</b> (เพราะ) · ผล: <b>so</b> (ดังนั้น)<br><b>However</b> ขึ้นต้นประโยคใหม่และตามด้วยจุลภาค · <b>Although</b> ตามด้วยประโยคแล้วต่อด้วยประโยคหลัก',
        formula: 'เหตุ → <b>so</b> → ผล &nbsp;|&nbsp; ผล ← <b>because</b> ← เหตุ<br><b>Although</b> A, B. (A กับ B ขัดกัน)<br>A. <b>However,</b> B.',
        examples: [
          { en: 'S:I|V:studied|M:hard,|conj:so|S:I|V:passed|O:the test', th: 'ฉันเรียนหนัก จึงสอบผ่าน (so = ผล)' },
          { en: 'S:We|V:stayed|Pl:inside|conj:because|R:it was very hot', th: 'เราอยู่ในบ้านเพราะอากาศร้อนมาก (because = เหตุ)' },
          { en: 'conj:Although|M:he was tired,|S:he|V:finished|O:the report', th: 'แม้ว่าเขาจะเหนื่อย เขาก็ทำรายงานเสร็จ' }
        ],
        confuse: [
          'because ตามด้วย <b>เหตุ</b> · so ตามด้วย <b>ผล</b> สลับกันแล้วความหมายกลับด้าน',
          'Although กับ but ไม่ใช้ในประโยคเดียวกัน: Although it rained, <s>but</s> we played.'
        ],
        quiz: [
          { q: 'I studied hard, ___ I passed the test.', o: ['so', 'but', 'because', 'or'], a: 0,
            clue: 'เรียนหนัก (เหตุ) → สอบผ่าน (ผล)', rule: 'so + ผลลัพธ์',
            why: 'สอบผ่านเป็นผลจากการเรียนหนัก',
            n: ['', 'but ใช้กับความที่ขัดกัน', 'because ต้องตามด้วยเหตุ แต่สอบผ่านไม่ใช่เหตุของการเรียน', 'or ใช้กับทางเลือก'],
            ex: 'It was late, so we went home.' },
          { q: 'She was sick. ___, she went to work.', o: ['However', 'Because', 'So', 'And'], a: 0,
            clue: 'ป่วย ↔ ไปทำงาน (ขัดกัน) + จุลภาคหลังช่องว่าง', rule: 'However, = อย่างไรก็ตาม เริ่มประโยคใหม่ที่ขัดกับประโยคก่อน',
            why: 'ป่วยแต่ยังไปทำงาน จึงขัดกัน และมีจุลภาคตาม',
            n: ['', 'Because ต้องตามด้วยเหตุ ไม่ตามด้วยจุลภาคแบบนี้', 'So บอกผล แต่การไปทำงานไม่ใช่ผลของการป่วย', 'And ไม่แสดงความขัดแย้ง'],
            ex: 'The test was hard. However, many students passed.' },
          { q: 'We stayed inside ___ it was very hot.', o: ['because', 'so', 'but', 'or'], a: 0,
            clue: 'อยู่ในบ้าน (ผล) ← ร้อนมาก (เหตุ)', rule: 'because + เหตุ',
            why: 'ร้อนมากเป็นเหตุผลที่อยู่ในบ้าน',
            n: ['', 'so ต้องตามด้วยผล', 'but ใช้กับความที่ขัดกัน', 'or ใช้กับทางเลือก'],
            ex: 'He was late because the bus broke down.' },
          { q: '___ he was tired, he finished the report.', o: ['Although', 'Because', 'So', 'But'], a: 0,
            clue: 'เหนื่อย ↔ ทำเสร็จ (ขัดกัน) + ต้นประโยค', rule: 'Although + A, B = แม้ว่า A แต่ก็ B',
            why: 'ความเหนื่อยไม่ได้ทำให้เขาหยุด จึงขัดกัน',
            n: ['', 'Because ทำให้ความหมายเป็น "เพราะเหนื่อยจึงทำเสร็จ" ซึ่งไม่สมเหตุผล', 'So ไม่ใช้ขึ้นต้นแบบนี้', 'But ไม่ใช้ขึ้นต้นประโยคย่อยแบบนี้'],
            ex: 'Although it was raining, we played football.' },
          { q: 'Would you like tea ___ coffee? Please choose one.', o: ['or', 'and', 'but', 'so'], a: 0,
            clue: 'Please choose one (เลือกหนึ่งอย่าง)', rule: 'or = หรือ ใช้กับทางเลือก',
            why: 'ให้เลือกอย่างใดอย่างหนึ่ง จึงใช้ or',
            n: ['', 'and หมายถึงเอาทั้งสองอย่าง ขัดกับ choose one', 'but ใช้กับความขัดแย้ง', 'so บอกผล'],
            ex: 'Do you want to walk or take a taxi?' }
        ]
      },
      {
        id: 'sent-cond3', level: 'B2', title: 'Conditionals: Third & Mixed', th: 'ประโยคเงื่อนไข: ย้อนอดีตไม่จริง & ผสม',
        explain: '<b>Third Conditional</b> พูดถึง<b>อดีตที่ไม่ได้เกิดขึ้นจริง</b> (เสียใจ/สมมติย้อนอดีต): <b>If + Past Perfect (had + V3), would have + V3</b><br>"If I had studied, I would have passed." (จริง ๆ ไม่ได้เรียน เลยไม่ผ่าน)<br><b>Mixed Conditional</b> ผสมเวลาสองช่วง: เงื่อนไขเป็น<b>อดีต</b> แต่ผลกระทบต่อเนื่องถึง<b>ปัจจุบัน</b>: <b>If + Past Perfect, would + V1</b>',
        formula: 'Third: If + <b>had + V3</b>, <b>would have + V3</b> (ทั้งคู่เป็นอดีตที่ไม่เกิดขึ้นจริง)<br>Mixed: If + <b>had + V3</b> (อดีต), <b>would + V1</b> (ผลกระทบตอนนี้)',
        examples: [
          { en: 'R:If|S:I|aux:had|V:studied,|S:I|aux:would have|V:passed|O:the exam', th: 'ถ้าฉันได้อ่านหนังสือ ฉันคงสอบผ่านแล้ว (จริง ๆ ไม่ได้อ่าน เลยไม่ผ่าน)' },
          { en: 'R:If|S:she|aux:hadn\'t|V:missed|O:the bus,|S:she|aux:wouldn\'t have|V:been|C:late', th: 'ถ้าเธอไม่พลาดรถเมล์ เธอคงไม่สายแล้ว' },
          { en: 'R:If|S:I|aux:had|V:taken|O:that job,|S:I|aux:would|V:live|Pl:in another city|T:now', th: 'ถ้าตอนนั้นฉันรับงานนั้น ตอนนี้ฉันคงอาศัยอยู่เมืองอื่น (เงื่อนไขอดีต ผลกระทบถึงตอนนี้ = Mixed)' }
        ],
        confuse: [
          'Third Conditional พูดถึง<b>อดีตล้วน ๆ</b> (ทั้งเงื่อนไขและผลเป็นอดีตที่ไม่เกิดขึ้นจริง) ต่างจาก Mixed Conditional ที่<b>ผลกระทบอยู่ในปัจจุบัน</b> (now) — สังเกตคำบอกเวลาในส่วนผลเพื่อแยกสองแบบนี้',
          'ต้องมี <b>have</b> ในส่วนผลของ Third Conditional เสมอ: "I would have passed." ✓ ไม่ใช่ "I would passed." ✗'
        ],
        quiz: [
          { q: 'If I ___ harder, I would have passed the exam.', o: ['study', 'studied', 'had studied', 'have studied'], a: 2,
            clue: 'อดีตที่ไม่เกิดขึ้นจริง (สอบไม่ผ่านไปแล้ว)', rule: 'Third Conditional: If + had + V3',
            why: 'เหตุการณ์นี้เป็นอดีตที่ไม่ได้เกิดขึ้นจริง (ไม่ได้อ่านหนังสือ) จึงใช้ had studied',
            n: ['เป็น Zero/First Conditional ไม่ใช่ Third', 'เป็น Past Simple ธรรมดา ไม่ใช่ Past Perfect', '', 'ไม่ใช่รูปที่ถูกต้องสำหรับ if-clause นี้'],
            ex: 'If she had left earlier, she would have caught the train.' },
          { q: 'If he had saved money, he ___ a car now.', o: ['would have', 'will have', 'would', 'had'], a: 2,
            clue: 'now = ผลกระทบถึงปัจจุบัน', rule: 'Mixed Conditional: If + had + V3 (อดีต), would + V1 (ผลตอนนี้)',
            why: '"now" บอกว่าผลกระทบอยู่ในปัจจุบัน จึงใช้ would + V1 (would have แบบ Third Conditional ใช้กับผลที่เป็นอดีตเท่านั้น)',
            n: ['would have ใช้เมื่อผลเป็นอดีต ไม่ตรงกับ now', 'will ไม่ใช้ในโครงสร้าง conditional แบบนี้', '', 'ไม่ใช่รูปที่ถูกต้อง'],
            ex: 'If I had taken that job, I would be rich now.' },
          { q: 'She missed the flight. Which sentence expresses regret correctly?', o: ['If she wakes up earlier, she catches the flight.', 'If she had woken up earlier, she would have caught the flight.', 'If she woke up earlier, she would catch the flight.', 'If she wake up earlier, she will catch the flight.'], a: 1,
            clue: 'เสียใจกับอดีตที่ผ่านไปแล้ว', rule: 'Third Conditional ใช้แสดงความเสียใจ/สมมติย้อนอดีต',
            why: 'เหตุการณ์นี้จบไปแล้ว (พลาดเที่ยวบิน) การแสดงความเสียใจใช้ Third Conditional: had woken up / would have caught',
            n: ['เป็น Zero Conditional ไม่เหมาะกับการเสียใจอดีต', '', 'เป็น Second Conditional (สมมติปัจจุบัน) ไม่ใช่อดีต', 'โครงสร้างผิดหลักไวยากรณ์'],
            ex: 'If I had known you were coming, I would have cleaned the house.' },
          { q: 'ข้อใดผิด (ขาด have ในส่วนผล)', o: ['If I had known, I would have told you.', 'If I had known, I would told you.', 'If I had known, I would have helped.', 'If she had asked, I would have said yes.'], a: 1,
            clue: 'would + told (ขาด have)', rule: 'ส่วนผลของ Third Conditional ต้องมี have',
            why: '"would told" ขาด have ต้องเป็น "would have told"',
            n: ['ถูกต้อง มี have แล้ว', '', 'ถูกต้อง มี have แล้ว', 'ถูกต้อง มี have แล้ว'],
            ex: 'If I had had more time, I would have finished it.' },
          { q: 'เรียงคำให้ถูก: rained, / it / stayed / would / have / we / If / home / had', o: ['If it had rained, we would have stayed home.', 'If it rained, we would have stayed home.', 'If it had rained, we would stayed home.', 'We would have stayed home, had it rained if.'], a: 0,
            clue: 'If + had + V3, would have + V3', rule: 'Third Conditional เต็มรูปแบบ',
            why: 'If it had rained (เงื่อนไขอดีต) + we would have stayed home (ผลอดีต)',
            n: ['', 'ขาด had ใน if-clause (ต้องเป็น Third Conditional เต็มรูป)', 'ขาด have ในส่วนผล', 'ลำดับคำผิดทั้งหมด'],
            ex: 'If they had left earlier, they would have avoided the traffic.' }
        ],
        writing: [
          { prompt: 'แต่งประโยค Third Conditional แสดงความเสียใจต่อเรื่องในอดีตที่ไม่ได้เกิดขึ้นจริง', sample: 'If I had listened to my teacher, I would have gotten a better score.',
            checklist: ['if-clause ใช้ had + V3 (Past Perfect)', 'ส่วนผลใช้ would have + V3', 'เนื้อหาเป็นอดีตที่ไม่ได้เกิดขึ้นจริง'] },
          { prompt: 'แต่งประโยค Mixed Conditional ที่เงื่อนไขเป็นอดีตแต่ผลกระทบอยู่ในปัจจุบัน', sample: 'If I had studied medicine, I would be a doctor now.',
            checklist: ['if-clause ใช้ had + V3', 'ส่วนผลใช้ would + V1 (ไม่ใช่ would have)', 'มีคำบอกเวลาปัจจุบัน เช่น now ในส่วนผล'] }
        ]
      },
      {
        id: 'sent-noun-clause', level: 'B2', title: 'Noun Clauses', th: 'อนุประโยคทำหน้าที่คำนาม',
        explain: 'บางครั้งทั้งประโยคย่อย (clause) ทำหน้าที่เป็น<b>คำนาม</b>ได้ทั้งก้อน — เป็นประธาน กรรม หรือส่วนเติมเต็มของประโยคใหญ่<br>ขึ้นต้นด้วย <b>that, what, whether/if, who, where, when, why, how</b><br>• เป็นกรรม: I know <b>what you mean</b>.<br>• เป็นประธาน: <b>What she said</b> surprised me.<br>• หลัง be: The problem is <b>that we have no time</b>.',
        formula: '[Noun clause: that/what/whether/who/where/when/why/how + S + V] ทำหน้าที่เป็นคำนามก้อนหนึ่งในประโยคใหญ่',
        examples: [
          { en: 'S:I|V:don\'t know|O:what he wants', th: 'ฉันไม่รู้ว่าเขาต้องการอะไร (what he wants = กรรมของ know)' },
          { en: 'S:What she said|V:surprised|O:everyone', th: 'สิ่งที่เธอพูดทำให้ทุกคนแปลกใจ (What she said = ประธานของประโยค)' },
          { en: 'S:I|aux:am not sure|C:whether he will come', th: 'ฉันไม่แน่ใจว่าเขาจะมาไหม (whether...come = ส่วนเติมเต็ม)' }
        ],
        confuse: [
          'noun clause <b>ไม่ใช่คำถามจริง</b> จึงเรียงคำแบบประโยคบอกเล่าปกติ ไม่ใช่แบบคำถาม: "I don\'t know <u>what he wants</u>." ✓ ไม่ใช่ "I don\'t know <u>what does he want</u>." ✗',
          'ใช้ <b>whether/if</b> สำหรับคำถามแบบ yes/no ที่กลายเป็น noun clause: "I don\'t know if she is coming." (ไม่ใช่ that)'
        ],
        quiz: [
          { q: 'I don\'t know ___ he lives.', o: ['where does', 'where', 'does he where', 'where he does'], a: 1,
            clue: 'noun clause เรียงแบบบอกเล่า', rule: 'Noun clause: Wh-word + S + V (ไม่ใช่รูปคำถาม)',
            why: 'noun clause เรียงคำแบบประโยคบอกเล่าปกติ ไม่ใส่ does',
            n: ['เป็นรูปคำถาม ผิดสำหรับ noun clause', '', 'ลำดับคำผิด', 'ลำดับคำผิด'],
            ex: "I don't know where she works." },
          { q: '___ he said made everyone laugh.', o: ['What', 'That', 'Whether', 'Where'], a: 0,
            clue: 'สิ่งที่เขาพูด = ประธานของประโยค', rule: 'What + S + V สามารถทำหน้าที่เป็นประธานของประโยคใหญ่ได้',
            why: '"What he said" ทำหน้าที่เป็นประธานของ made everyone laugh',
            n: ['', 'that ไม่ใช้ขึ้นต้นแบบนี้เพื่อทำหน้าที่ประธานในบริบทนี้', 'whether ใช้กับคำถาม yes/no ไม่ใช่สิ่งที่พูด', 'where ไม่เข้ากับบริบทนี้'],
            ex: 'What surprised me was his honesty.' },
          { q: 'I\'m not sure ___ she will agree.', o: ['that', 'whether', 'what', 'who'], a: 1,
            clue: 'ไม่แน่ใจว่า...ไหม (yes/no)', rule: 'whether/if ใช้กับคำถามแบบ yes/no',
            why: 'ประโยคนี้ถามว่า "เห็นด้วยหรือไม่" (yes/no) จึงใช้ whether',
            n: ['that ใช้กับข้อความที่ยืนยัน ไม่ใช่ความไม่แน่ใจแบบ yes/no', '', 'what ใช้ถามสิ่งของ ไม่ใช่ yes/no', 'who ใช้ถามคน ไม่ใช่ yes/no'],
            ex: "I don't know whether he is telling the truth." },
          { q: 'The problem is ___ we don\'t have enough time.', o: ['what', 'whether', 'that', 'where'], a: 2,
            clue: 'ระบุปัญหาชัดเจน (ไม่ใช่คำถาม)', rule: 'that + S + V ใช้เชื่อมข้อความที่ระบุชัดเจนหลัง be',
            why: 'ประโยคนี้ระบุปัญหาอย่างชัดเจน ไม่ใช่คำถาม yes/no หรือสิ่งของ จึงใช้ that',
            n: ['what ใช้เมื่อไม่ระบุสิ่งของชัดเจน ไม่เข้ากับบริบทนี้', 'whether ใช้กับ yes/no ไม่เข้ากับบริบทนี้', '', 'where ใช้ถามสถานที่ ไม่เข้ากับบริบทนี้'],
            ex: 'The good news is that everyone is safe.' },
          { q: 'เรียงคำให้ถูก: is / What / matters / you / try / that', o: ['What matters is that you try.', 'What is matters that you try.', 'That matters is what you try.', 'What matters that is you try.'], a: 0,
            clue: '[What matters] (ประธาน) + is + [that you try] (ส่วนเติมเต็ม)', rule: 'Noun clause ทำหน้าที่ประธานและส่วนเติมเต็มได้ในประโยคเดียวกัน',
            why: 'What matters (ประธาน) → is (V) → that you try (ส่วนเติมเต็ม)',
            n: ['', 'is ต้องอยู่หลัง What matters ทั้งก้อน', 'สลับตำแหน่ง what กับ that ผิด', 'ลำดับคำผิด'],
            ex: 'What counts is that you tried your best.' }
        ],
        writing: [
          { prompt: 'แต่งประโยคที่มี noun clause ทำหน้าที่เป็นกรรม โดยใช้ "I don\'t know what/where/when..."', sample: "I don't know where he went.",
            checklist: ['noun clause เรียงคำแบบบอกเล่า ไม่ใช่คำถาม', 'noun clause ทำหน้าที่เป็นกรรมของประโยคใหญ่', 'ใช้ wh-word ให้เหมาะกับความหมาย'] },
          { prompt: 'แต่งประโยคที่ใช้ noun clause ขึ้นต้นด้วย "What..." ทำหน้าที่เป็นประธานของประโยค', sample: 'What she needs is more practice.',
            checklist: ['ขึ้นต้นด้วย What + S + V', 'ก้อน What...ทั้งหมดทำหน้าที่เป็นประธาน ตามด้วยกริยาของประโยคใหญ่', 'ประโยคสมบูรณ์และสมเหตุสมผล'] }
        ]
      },
      {
        id: 'sent-long', level: 'B2', title: 'Reading long sentences', th: 'อ่านประโยคยาวให้เห็นแกน',
        explain: 'ประโยคในบทอ่าน GED ยาวเพราะมี <b>ส่วนขยาย</b> แทรก วิธีอ่านคือ <b>หาแกน S + V ก่อน</b> แล้วค่อยอ่านส่วนขยาย<br>ส่วนขยายที่พบบ่อย:<br>• บุพบทวลี: of the city, in the markets<br>• ประโยคขยาย who/which/that: the students <b>who studied</b>, the river, <b>which flows ...</b>,<br>• ส่วนที่อยู่ระหว่างจุลภาค มักเป็น <b>ข้อมูลเสริม</b> ตัดออกแล้วประโยคยังสมบูรณ์<br>กริยาหลักต้อง <b>ตรงกับประธานหลัก</b> ไม่ใช่คำนามในส่วนขยาย',
        formula: '[<b>S</b> + (ส่วนขยาย)] + <b>V</b> + ...<br>The list (of new rules) <b>is</b> on the wall.<br>The students (who studied) <b>passed</b>.',
        examples: [
          { en: 'S:The students|M:who studied every night|V:passed|O:the exam', th: 'นักเรียนที่อ่านหนังสือทุกคืนสอบผ่าน (แกน: students passed)' },
          { en: 'S:The price|M:of fresh vegetables|V:rose|adv:sharply', th: 'ราคาผักสดสูงขึ้นอย่างมาก (แกน: price rose)' },
          { en: 'S:The river,|M:which flows through three countries,|V:provides|O:water', th: 'แม่น้ำซึ่งไหลผ่านสามประเทศเป็นแหล่งน้ำ (ส่วนระหว่างจุลภาคเป็นข้อมูลเสริม)' }
        ],
        confuse: [
          'The list of new rules <b>is</b> ... ประธานคือ list (เอกพจน์) ไม่ใช่ rules',
          'กริยาใน who/which clause ไม่ใช่กริยาหลักของประโยค'
        ],
        quiz: [
          { q: '"The students who studied every night passed the exam." — กริยาหลักคือข้อใด', o: ['studied', 'passed', 'every', 'who'], a: 1,
            clue: 'ตัด "who studied every night" ออก', rule: 'กริยาใน who-clause เป็นส่วนขยาย ไม่ใช่กริยาหลัก',
            why: 'แกนประโยคคือ The students passed the exam',
            n: ['studied อยู่ในส่วนขยาย who ...', '', 'every เป็นคำบอกความถี่', 'who เป็นคำเชื่อมประโยคขยาย'],
            ex: 'The woman who called me <u>works</u> at the bank.' },
          { q: 'ประธานหลักของ "The price of fresh vegetables in the city markets rose sharply." คือข้อใด', o: ['The price', 'vegetables', 'markets', 'city'], a: 0,
            clue: 'อะไร rose', rule: 'บุพบทวลี (of ..., in ...) เป็นส่วนขยาย ไม่ใช่ประธาน',
            why: 'สิ่งที่สูงขึ้นคือราคา → The price rose',
            n: ['', 'vegetables อยู่ใน of-phrase', 'markets อยู่ใน in-phrase', 'city ขยาย markets'],
            ex: 'The number of cars on the roads <u>is</u> growing.' },
          { q: 'The list of new rules ___ on the wall.', o: ['is', 'are', 'be', 'being'], a: 0,
            clue: 'ประธานหลัก = The list (เอกพจน์)', rule: 'กริยาตรงกับประธานหลัก ไม่ใช่คำนามในส่วนขยาย',
            why: 'list เป็นเอกพจน์ จึงใช้ is',
            n: ['', 'are ตรงกับ rules ซึ่งอยู่ในส่วนขยาย', 'be ไม่ใช้หลังประธานตรง ๆ', 'being ใช้เป็นกริยาหลักเดี่ยว ๆ ไม่ได้'],
            ex: 'A box of apples is on the table.' },
          { q: '"The river, which flows through three countries, provides water for millions." ส่วนใดเป็น <b>ข้อมูลเสริม</b>', o: ['which flows through three countries', 'The river', 'provides water', 'for millions'], a: 0,
            clue: 'ส่วนที่อยู่ระหว่างจุลภาค', rule: 'ข้อมูลระหว่างจุลภาคตัดออกได้โดยประโยคยังสมบูรณ์',
            why: 'ตัดออกแล้วยังเหลือ The river provides water for millions.',
            n: ['', 'เป็นประธานหลัก ตัดออกไม่ได้', 'เป็นกริยาหลักและกรรม', 'บอกว่าให้น้ำแก่ใคร เป็นส่วนของแกนความหมาย'],
            ex: 'Bangkok, which is the capital, has heavy traffic.' },
          { q: '"Farmers who use less water can still grow healthy crops." — ใครใช้น้ำน้อยลง', o: ['Farmers (เกษตรกร)', 'crops (พืชผล)', 'water (น้ำ)', 'ไม่มีใคร'], a: 0,
            clue: 'who ขยายคำนามที่อยู่ข้างหน้า', rule: 'who-clause ขยายคำนามที่อยู่หน้า who',
            why: 'who use less water ขยาย Farmers',
            n: ['', 'crops อยู่หลัง who clause', 'water เป็นกรรมของ use', 'ประโยคบอกชัดว่าเป็นเกษตรกร'],
            ex: 'Students who sleep well learn faster.' }
        ]
      }
    ],
    post: [
      { q: 'ข้อใดเรียงคำถูกต้อง', o: ['We play games.', 'We games play.', 'Play we games.', 'Games we play play.'], a: 0,
        clue: 'S → V → O', rule: 'ประธาน + กริยา + กรรม',
        why: 'We (S) play (V) games (O)',
        n: ['', 'กรรมอยู่หน้ากริยา', 'กริยาอยู่หน้าประธาน', 'มีกริยาซ้ำ'],
        ex: 'They watch movies.' },
      { q: '"My father is a pilot." คำว่า "a pilot" ทำหน้าที่ใด', o: ['Object เพราะถูกกระทำ', 'Complement เพราะบอกว่าประธานเป็นอะไร', 'Subject', 'Verb'], a: 1,
        clue: 'a pilot ไม่ได้ถูกใครทำอะไร', rule: 'หลัง be มักเป็น Complement ที่บอกว่าประธานเป็นใคร/เป็นอะไร ไม่ใช่ Object',
        why: 'a pilot ไม่ถูกกระทำ เป็นแค่คำอธิบายว่า my father เป็นอาชีพอะไร จึงเป็น Complement',
        n: ['a pilot ไม่ถูกกระทำโดยใคร', '', 'a pilot ไม่ใช่ผู้ทำ', 'a pilot ไม่ใช่การกระทำ'],
        ex: 'This is my sister. (my sister = complement)' },
      { q: 'The weather ___ nice today.', o: ['is', 'are', 'am', 'be'], a: 0,
        clue: 'The weather (เอกพจน์) + nice (คุณศัพท์)', rule: 'S + be + คุณศัพท์',
        why: 'weather เป็นเอกพจน์ → is',
        n: ['', 'are ใช้กับพหูพจน์', 'am ใช้กับ I', 'be ใช้หลังประธานตรง ๆ ไม่ได้'],
        ex: 'The food is delicious.' },
      { q: 'He ___ at home last night.', o: ['wasn\'t', 'didn\'t', 'doesn\'t', 'isn\'t'], a: 0,
        clue: 'at home (ไม่มีกริยาแท้) + last night', rule: 'ประโยค be อดีตปฏิเสธ → wasn\'t',
        why: 'บอกว่าไม่ได้อยู่ที่ไหนใช้ be และเป็นอดีต → wasn\'t',
        n: ['', 'didn\'t ต้องตามด้วยกริยาแท้', 'doesn\'t เป็นปัจจุบันและต้องมีกริยาแท้', 'isn\'t เป็นปัจจุบัน'],
        ex: 'They weren\'t at the meeting.' },
      { q: 'This bridge ___ in 1990.', o: ['built', 'was built', 'builds', 'is building'], a: 1,
        clue: 'สะพานถูกสร้าง (ไม่ได้สร้างเอง) + 1990', rule: 'Passive: be + V3',
        why: 'สะพานถูกสร้างโดยคน (passive) และ 1990 เป็นอดีต จึงใช้ was built',
        n: ['เป็น active form ไม่ใช่ passive', '', 'เป็นปัจจุบัน ไม่ตรงกับ 1990', 'ขาด V3 และไม่ตรงกาล'],
        ex: 'This song was written by a famous composer.' },
      { q: 'If it rains tomorrow, we ___ the picnic. (น่าจะเกิดขึ้นได้จริง)', o: ['will cancel', 'cancel', 'would cancel', 'cancelled'], a: 0,
        clue: 'tomorrow + น่าจะเกิดได้จริง', rule: 'First Conditional: If + Present Simple, will + V1',
        why: 'เป็นสถานการณ์ที่มีโอกาสเกิดขึ้นได้จริงในอนาคต จึงใช้ First Conditional (will cancel)',
        n: ['', 'จะกลายเป็น Zero Conditional (ข้อเท็จจริงเสมอ) ไม่ตรงกับสถานการณ์ที่ไม่แน่นอนนี้', 'would ใช้กับ Second Conditional (สมมติ ไม่น่าเกิดขึ้นจริง)', 'เป็นอดีต ไม่ตรงกับ tomorrow'],
        ex: 'If she calls, I will answer.' },
      { q: '"The man who lives next door works at a bank." — กริยาหลักคือข้อใด', o: ['lives', 'works', 'next', 'who'], a: 1,
        clue: 'ตัด "who lives next door" ออก', rule: 'กริยาใน who-clause ไม่ใช่กริยาหลัก',
        why: 'แกนคือ The man works at a bank',
        n: ['lives อยู่ในส่วนขยาย', '', 'next เป็นส่วนของ next door', 'who เป็นคำเชื่อม'],
        ex: 'The girl who sings <u>is</u> my cousin.' },
      { q: 'The results of the survey ___ surprising.', o: ['were', 'was', 'is', 'be'], a: 0,
        clue: 'ประธานหลัก = The results (พหูพจน์)', rule: 'กริยาตรงกับประธานหลัก',
        why: 'results เป็นพหูพจน์ จึงใช้ were (หรือ are ในปัจจุบัน)',
        n: ['', 'was ตรงกับ survey ซึ่งอยู่ในส่วนขยาย', 'is ตรงกับเอกพจน์', 'be ใช้หลังประธานตรง ๆ ไม่ได้'],
        ex: 'The members of the team are ready.' },
      { q: 'I don\'t know ___ he lives.', o: ['where does', 'where', 'does he where', 'where he does'], a: 1,
        clue: 'noun clause เรียงแบบบอกเล่า', rule: 'Noun clause: Wh-word + S + V (ไม่ใช่รูปคำถาม)',
        why: 'noun clause เรียงคำแบบประโยคบอกเล่าปกติ ไม่ใส่ does',
        n: ['เป็นรูปคำถาม ผิดสำหรับ noun clause', '', 'ลำดับคำผิด', 'ลำดับคำผิด'],
        ex: "I don't know where she works." },
      { q: '"Although the plan was expensive, the city approved it because it would reduce traffic." เมืองอนุมัติแผนเพราะอะไร', o: ['แผนมีราคาแพง', 'แผนจะช่วยลดการจราจร', 'แผนมีราคาถูก', 'เมืองมีเงินมาก'], a: 1,
        clue: 'because it would reduce traffic', rule: 'เหตุผลอยู่หลัง because ส่วน although บอกสิ่งที่ขัดกัน',
        why: 'ส่วนที่ตามหลัง because คือเหตุผลของการอนุมัติ',
        n: ['ราคาแพงเป็นสิ่งที่ขัดกับการอนุมัติ (อยู่หลัง although)', '', 'ขัดกับ expensive', 'บทอ่านไม่ได้กล่าวถึง'],
        ex: 'Although it was late, she called because it was urgent.' }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
