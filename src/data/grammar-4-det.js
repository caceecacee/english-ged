/* หมวด 4: Pronouns & Determiners — สรรพนามและคำนำหน้านาม */
(function (root) {
  var EP = root.EP = root.EP || {};
  EP.grammar = EP.grammar || [];
  EP.grammar.push({
    id: 'det',
    name: 'Pronouns & Determiners',
    th: 'สรรพนามและคำนำหน้านาม',
    blurb: 'เขา/เธอ/มัน อยู่ตรงไหน และคำนามนี้หมายถึงอันไหน',
    lessons: [
      {
        id: 'det-subobj', level: 'A1', title: 'Subject & Object pronouns', th: 'สรรพนามประธานและกรรม',
        explain: 'สรรพนามเปลี่ยนรูปตาม <b>ตำแหน่ง</b><br>• <b>หน้ากริยา</b> (ประธาน): I, you, he, she, it, we, they<br>• <b>หลังกริยาหรือหลังบุพบท</b> (กรรม): me, you, him, her, it, us, them',
        formula: 'I → <b>me</b> · he → <b>him</b> · she → <b>her</b> · we → <b>us</b> · they → <b>them</b><br>(you และ it ใช้รูปเดิม)<br><b>ประธาน</b> + V + <b>กรรม</b> → <b>She</b> helps <b>me</b>.',
        examples: [
          { en: 'S:She|V:helps|O:me', th: 'เธอช่วยฉัน (She = ประธาน, me = กรรม)' },
          { en: 'S:I|V:called|O:him|T:yesterday', th: 'ฉันโทรหาเขาเมื่อวาน' },
          { en: 'S:Our teacher|V:likes|O:us', th: 'ครูชอบพวกเรา' }
        ],
        confuse: [
          'ภาษาไทยใช้ "ฉัน" ทั้งประธานและกรรม แต่อังกฤษต้องเปลี่ยน: Help <b>me</b> ✓ · Help I ✗',
          'หลังบุพบทใช้รูปกรรม: with <b>them</b>, for <b>her</b>, to <b>us</b>'
        ],
        quiz: [
          { q: 'Please help ___.', o: ['I', 'me', 'my', 'mine'], a: 1,
            clue: 'help (กริยา) + ___', rule: 'หลังกริยาใช้สรรพนามรูปกรรม',
            why: 'ตำแหน่งกรรม ต้องใช้ me',
            n: ['I ใช้เป็นประธาน', '', 'my ต้องมีคำนามตามหลัง', 'mine = ของฉัน ไม่ใช่ผู้ถูกช่วย'],
            ex: 'Can you call me?' },
          { q: '___ are my friends.', o: ['They', 'Them', 'Their', 'Theirs'], a: 0,
            clue: 'ตำแหน่งหน้า are', rule: 'หน้ากริยาใช้สรรพนามรูปประธาน',
            why: 'ประธานพหูพจน์ → They',
            n: ['', 'Them ใช้เป็นกรรม', 'Their ต้องมีคำนามตามหลัง', 'Theirs = ของพวกเขา ไม่ใช่ประธานในที่นี้'],
            ex: 'We are classmates.' },
          { q: 'I called Anna, but ___ didn\'t answer.', o: ['she', 'her', 'hers', 'he'], a: 0,
            clue: 'หน้า didn\'t answer (ประธาน) + Anna', rule: 'ประธานใช้รูป she',
            why: 'Anna เป็นผู้หญิงและอยู่ตำแหน่งประธาน → she',
            n: ['', 'her ใช้เป็นกรรม', 'hers = ของเธอ', 'he ใช้กับผู้ชาย'],
            ex: 'I met Tom, and he smiled.' },
          { q: 'Give the book to ___. (Tom)', o: ['him', 'he', 'his', 'her'], a: 0,
            clue: 'to (บุพบท) + ___ + Tom (ชาย)', rule: 'หลังบุพบทใช้รูปกรรม',
            why: 'Tom เป็นผู้ชายและอยู่หลัง to → him',
            n: ['', 'he ใช้เป็นประธาน', 'his ต้องมีคำนามตามหลัง', 'her ใช้กับผู้หญิง'],
            ex: 'Sit next to her.' },
          { q: 'Our teacher likes ___. (Nid and me)', o: ['us', 'we', 'our', 'ours'], a: 0,
            clue: 'likes + ___ + Nid and me (รวมผู้พูด)', rule: 'we ในตำแหน่งกรรม → us',
            why: 'กลุ่มที่มีผู้พูดอยู่ด้วยในตำแหน่งกรรม → us',
            n: ['', 'we ใช้เป็นประธาน', 'our ต้องมีคำนามตามหลัง', 'ours = ของพวกเรา'],
            ex: 'They invited us.' }
        ]
      },
      {
        id: 'det-this', level: 'A1', title: 'this / that / these / those', th: 'นี่ · นั่น',
        explain: 'ใช้ชี้คำนามว่า <b>ใกล้หรือไกล</b> และ <b>หนึ่งหรือหลาย</b>',
        formula: '<table class="mini"><tr><th></th><th>ใกล้</th><th>ไกล</th></tr><tr><th>1 ชิ้น</th><td><b>this</b></td><td><b>that</b></td></tr><tr><th>หลายชิ้น</th><td><b>these</b></td><td><b>those</b></td></tr></table>',
        examples: [
          { en: 'det:This|n:book|Pl:in my hand|V:is|adj:new', th: 'หนังสือเล่มนี้ในมือฉันเป็นของใหม่' },
          { en: 'det:Those|n:shoes|Pl:over there|V:are|adj:expensive', th: 'รองเท้าคู่นั้นตรงโน้นแพง' },
          { en: 'V:Look|prep:at|det:those|n:birds|Pl:in the sky', th: 'ดูนกพวกนั้นบนท้องฟ้าสิ' }
        ],
        confuse: [
          'these/those ต้องตามด้วยคำนามพหูพจน์: these <b>books</b> ✓ · these book ✗',
          'คำบอกตำแหน่ง เช่น here, in my hand = ใกล้ · there, over there, in the sky = ไกล'
        ],
        quiz: [
          { q: '___ book in my hand is new.', o: ['This', 'These', 'Those', 'They'], a: 0,
            clue: 'book (1 เล่ม) + in my hand (ใกล้)', rule: 'ใกล้ + เอกพจน์ → this',
            why: 'หนังสือเล่มเดียวอยู่ในมือ จึงใช้ This',
            n: ['', 'These ใช้กับพหูพจน์', 'Those ใช้กับพหูพจน์และไกล', 'They วางหน้าคำนามแบบนี้ไม่ได้'],
            ex: 'This cup is hot.' },
          { q: '___ shoes over there are expensive.', o: ['Those', 'This', 'That', 'These'], a: 0,
            clue: 'shoes (หลายชิ้น) + over there (ไกล)', rule: 'ไกล + พหูพจน์ → those',
            why: 'รองเท้าหลายข้างอยู่ไกล → Those',
            n: ['', 'This ใช้กับเอกพจน์ใกล้', 'That ใช้กับเอกพจน์', 'These ใช้กับสิ่งที่อยู่ใกล้ ขัดกับ over there'],
            ex: 'Those houses are old.' },
          { q: 'Look at ___ birds in the sky!', o: ['those', 'this', 'that', 'it'], a: 0,
            clue: 'birds (หลายตัว) + in the sky (ไกล)', rule: 'ไกล + พหูพจน์ → those',
            why: 'นกหลายตัวอยู่ไกลบนฟ้า',
            n: ['', 'this ใช้กับเอกพจน์', 'that ใช้กับเอกพจน์', 'it วางหน้าคำนามไม่ได้'],
            ex: 'Can you see those stars?' },
          { q: '___ is my house. (บ้านที่ยืนอยู่ตรงหน้า)', o: ['This', 'These', 'Those', 'They'], a: 0,
            clue: 'my house (1 หลัง) + อยู่ใกล้', rule: 'ใกล้ + เอกพจน์ → this',
            why: 'บ้านหลังเดียวที่อยู่ตรงหน้า',
            n: ['', 'These ใช้กับพหูพจน์', 'Those ใช้กับพหูพจน์', 'They ใช้กับพหูพจน์ และ is ไม่ตรงกับ They'],
            ex: 'This is my brother.' },
          { q: 'Are ___ your keys? (กุญแจในมือฉัน)', o: ['these', 'this', 'that', 'it'], a: 0,
            clue: 'keys (หลายดอก) + ในมือ (ใกล้) + Are', rule: 'ใกล้ + พหูพจน์ → these',
            why: 'กุญแจหลายดอกอยู่ใกล้ → these',
            n: ['', 'this ใช้กับเอกพจน์และไม่ตรงกับ are', 'that ใช้กับเอกพจน์', 'it ใช้กับเอกพจน์'],
            ex: 'These are my photos.' }
        ]
      },
      {
        id: 'det-poss', level: 'A2', title: 'Possessives', th: 'คำแสดงความเป็นเจ้าของ',
        explain: '<b>ตามด้วยคำนาม</b>: my, your, his, her, its, our, their (my <b>bag</b>)<br><b>ใช้เดี่ยว ๆ ไม่มีคำนามตาม</b>: mine, yours, his, hers, ours, theirs (The bag is <b>mine</b>.)<br><b>ชื่อคน/คำนาม</b> + <b>\'s</b>: Somchai<b>\'s</b> car, the dog<b>\'s</b> bowl<br>ระวัง: <b>its</b> = ของมัน · <b>it\'s</b> = it is',
        formula: '<b>my</b> + noun ⇄ <b>mine</b> (ไม่มี noun)<br>your → yours · her → hers · our → ours · their → theirs<br>ชื่อ + <b>\'s</b> + noun',
        examples: [
          { en: 'S:This|V:is|det:my|n:bag', th: 'นี่คือกระเป๋าของฉัน' },
          { en: 'S:The bag|V:is|C:mine', th: 'กระเป๋าใบนั้นเป็นของฉัน' },
          { en: 'S:The dog|V:wagged|det:its|n:tail', th: 'สุนัขกระดิกหางของมัน' }
        ],
        confuse: [
          'its (ของมัน) ไม่มี apostrophe · it\'s = it is',
          'ไม่มีคำว่า her\'s หรือ your\'s ให้ใช้ hers, yours'
        ],
        quiz: [
          { q: 'This is ___ bag.', o: ['my', 'mine', 'me', 'I'], a: 0,
            clue: '___ + bag (มีคำนามตาม)', rule: 'มีคำนามตามหลังใช้ my',
            why: 'bag อยู่หลังช่องว่าง จึงใช้ my',
            n: ['', 'mine ใช้เมื่อไม่มีคำนามตาม', 'me เป็นรูปกรรม', 'I เป็นรูปประธาน'],
            ex: 'That is your phone.' },
          { q: 'The bag is ___.', o: ['mine', 'my', 'me', 'I'], a: 0,
            clue: 'ไม่มีคำนามตามหลัง', rule: 'ไม่มีคำนามตามใช้ mine',
            why: 'ท้ายประโยคไม่มีคำนาม จึงใช้ mine',
            n: ['', 'my ต้องมีคำนามตาม', 'me ไม่ได้บอกความเป็นเจ้าของ', 'I เป็นรูปประธาน'],
            ex: 'The red pen is yours.' },
          { q: 'The dog wagged ___ tail.', o: ['its', 'it\'s', 'it', 'their'], a: 0,
            clue: 'The dog (ตัวเดียว) + tail', rule: 'ของมัน = its (ไม่มี \')',
            why: 'หางของสุนัขตัวเดียว → its tail',
            n: ['', 'it\'s = it is', 'it ไม่ได้บอกความเป็นเจ้าของ', 'their ใช้กับหลายตัว'],
            ex: 'The tree lost its leaves.' },
          { q: 'That is ___ car.', o: ['Somchai\'s', 'Somchais', 'Somchai', 'Somchai is'], a: 0,
            clue: 'ชื่อ + car', rule: 'ชื่อ + \'s + คำนาม',
            why: 'รถของสมชาย → Somchai\'s car',
            n: ['', 'ขาด apostrophe', 'ไม่ได้บอกความเป็นเจ้าของ', 'ทำให้มีกริยาซ้ำ'],
            ex: 'my mother\'s kitchen' },
          { q: 'Is this pen yours or ___?', o: ['hers', 'her', 'she', 'her\'s'], a: 0,
            clue: 'yours or ___ (ไม่มีคำนามตาม)', rule: 'ไม่มีคำนามตามใช้ hers',
            why: 'เทียบกับ yours จึงใช้รูปเดี่ยว hers',
            n: ['', 'her ต้องมีคำนามตาม', 'she เป็นรูปประธาน', 'her\'s ไม่มีในภาษาอังกฤษ'],
            ex: 'This seat is ours.' }
        ]
      },
      {
        id: 'det-article', level: 'A2', title: 'a / an / the', th: 'คำนำหน้านาม',
        explain: '<b>a / an</b> ใช้กับคำนามนับได้ <b>หนึ่งสิ่ง</b> ที่พูดถึง <b>ครั้งแรก</b> หรือไม่เจาะจง<br>• <b>a</b> หน้า <b>เสียง</b> พยัญชนะ: a car, a <b>u</b>niversity (ยู-)<br>• <b>an</b> หน้า <b>เสียง</b> สระ: an apple, an <b>h</b>our (อาว-)<br><b>the</b> ใช้เมื่อ <b>ผู้ฟังรู้ว่าอันไหน</b>: พูดถึงแล้ว, มีอยู่หนึ่งเดียว (the sun), หรือระบุชัด (the book on the table)<br>คำนามพหูพจน์หรือนับไม่ได้ที่พูดแบบทั่วไป <b>ไม่ใส่คำนำหน้า</b>: I like <b>music</b>.',
        formula: 'ครั้งแรก → <b>a/an</b> · ครั้งต่อไป → <b>the</b><br>ตัดสินที่ <b>เสียง</b> ไม่ใช่ตัวอักษร: <b>an</b> hour · <b>a</b> university',
        examples: [
          { en: 'S:I|V:bought|O:a shirt.|det:The|n:shirt|V:is|adj:blue', th: 'ฉันซื้อเสื้อมาตัวหนึ่ง เสื้อตัวนั้นสีฟ้า' },
          { en: 'S:She|V:waited|M:for an hour', th: 'เธอรอหนึ่งชั่วโมง (hour ออกเสียงสระ → an)' },
          { en: 'det:The|n:sun|V:is|adj:hot', th: 'ดวงอาทิตย์ร้อน (มีหนึ่งเดียว → the)' }
        ],
        confuse: [
          'ดูเสียงแรก ไม่ใช่ตัวอักษรแรก: <b>an</b> hour, <b>a</b> uniform, <b>an</b> MBA',
          'ภาษาไทยไม่มีคำนำหน้านาม จึงมักลืมใส่: I have <b>a</b> dog ✓ · I have dog ✗'
        ],
        quiz: [
          { q: 'I want to eat ___ apple. Do you have one?', o: ['an', 'a', '(ไม่ใส่)', 'two'], a: 0,
            clue: 'apple (เสียงสระ) + one', rule: 'หน้าเสียงสระใช้ an',
            why: 'apple ขึ้นต้นด้วยเสียงสระ และหมายถึงลูกเดียว',
            n: ['', 'a ใช้หน้าเสียงพยัญชนะ', 'apple นับได้ ต้องมีคำนำหน้าเมื่อเป็นเอกพจน์', 'two ต้องตามด้วยพหูพจน์ apples'],
            ex: 'an egg, an orange' },
          { q: 'She waited for ___ hour.', o: ['an', 'a', '(ไม่ใส่)', 'two'], a: 0,
            clue: 'hour (h ไม่ออกเสียง → เสียงสระ)', rule: 'ตัดสินจากเสียง ไม่ใช่ตัวอักษร',
            why: 'hour ออกเสียงขึ้นต้นด้วยสระ จึงใช้ an',
            n: ['', 'แม้ขึ้นต้นด้วย h แต่ไม่ออกเสียง h', 'hour นับได้ เอกพจน์ต้องมีคำนำหน้า', 'two ต้องใช้ hours'],
            ex: 'an honest man' },
          { q: 'He studies at ___ university in Bangkok.', o: ['a', 'an', '(ไม่ใส่)', 'two'], a: 0,
            clue: 'university ออกเสียง "ยู" (เสียงพยัญชนะ y)', rule: 'หน้าเสียงพยัญชนะใช้ a',
            why: 'แม้ขึ้นต้นด้วย u แต่ออกเสียงเหมือน y จึงใช้ a',
            n: ['', 'an ใช้หน้าเสียงสระ', 'university นับได้ เอกพจน์ต้องมีคำนำหน้า', 'two ต้องใช้ universities'],
            ex: 'a uniform, a European city' },
          { q: 'I bought a shirt and a hat. ___ shirt is blue.', o: ['The', 'A', 'An', '(ไม่ใส่)'], a: 0,
            clue: 'shirt ถูกพูดถึงแล้ว', rule: 'พูดถึงครั้งที่สอง → the',
            why: 'ผู้ฟังรู้แล้วว่าเสื้อตัวไหน จึงใช้ The',
            n: ['', 'A ใช้เมื่อพูดถึงครั้งแรก', 'An ใช้หน้าเสียงสระ', 'shirt เอกพจน์นับได้ ต้องมีคำนำหน้า'],
            ex: 'I saw a dog. The dog was black.' },
          { q: '___ sun is very hot today.', o: ['The', 'A', 'An', '(ไม่ใส่)'], a: 0,
            clue: 'sun มีหนึ่งเดียว', rule: 'สิ่งที่มีหนึ่งเดียว → the',
            why: 'ดวงอาทิตย์มีดวงเดียว ทุกคนรู้ว่าหมายถึงดวงไหน',
            n: ['', 'a ใช้กับสิ่งที่ไม่เจาะจง', 'an ใช้หน้าเสียงสระ', 'sun ต้องมี the'],
            ex: 'the moon, the sky, the Earth' }
        ]
      },
      {
        id: 'det-compare', level: 'A2', title: 'Comparatives & Superlatives', th: 'การเปรียบเทียบขั้นกว่าและขั้นสุด',
        explain: 'เปรียบเทียบ <b>2 สิ่ง</b> ใช้ <b>ขั้นกว่า (comparative)</b> + <b>than</b> · เปรียบเทียบ <b>3 สิ่งขึ้นไป</b> ใช้ <b>ขั้นสุด (superlative)</b> + <b>the</b><br>• คำสั้น (1 พยางค์) → เติม <b>-er / -est</b>: tall → tall<b>er</b> → the tall<b>est</b><br>• ลงท้าย e → เติมแค่ -r/-st: nice → nicer → the nicest<br>• พยัญชนะ+y → เปลี่ยน y เป็น i: happy → happ<b>ier</b> → the happ<b>iest</b><br>• คำยาว (2 พยางค์ขึ้นไปส่วนใหญ่) → ใช้ <b>more/the most</b> แทน: expensive → <b>more</b> expensive → <b>the most</b> expensive<br>• คำผิดปกติ: good → better → the best, bad → worse → the worst',
        formula: 'ขั้นกว่า (2 สิ่ง): S + be + <b>adj-er / more adj</b> + than + ...<br>ขั้นสุด (3 สิ่งขึ้นไป): S + be + <b>the adj-est / the most adj</b>',
        examples: [
          { en: 'S:My brother|V:is|C:taller than me', th: 'พี่ชายฉันสูงกว่าฉัน (เทียบ 2 คน)' },
          { en: 'S:This book|V:is|C:more interesting than that one', th: 'หนังสือเล่มนี้น่าสนใจกว่าเล่มนั้น (คำยาว ใช้ more)' },
          { en: 'S:Mount Everest|V:is|C:the highest mountain|Pl:in the world', th: 'เอเวอเรสต์เป็นภูเขาที่สูงที่สุดในโลก (เทียบมากกว่า 2 แห่ง)' }
        ],
        confuse: [
          'ห้ามใช้ -er กับ more พร้อมกัน: "more taller" ✗ ใช้แค่ "taller" หรือ "more tall" ไม่ได้ทั้งคู่พร้อมกัน (ที่จริง tall เป็นคำสั้น ต้องใช้ taller เท่านั้น)',
          'ขั้นสุดต้องมี <b>the</b> นำหน้าเสมอ: "the tallest" ไม่ใช่แค่ "tallest" ลอย ๆ',
          'good/bad ไม่เติม -er/-est แบบปกติ ต้องจำเป็นคำพิเศษ: good → better (ไม่ใช่ gooder), bad → worse (ไม่ใช่ badder)'
        ],
        quiz: [
          { q: 'My brother is ___ than me. (tall)', o: ['tall', 'taller', 'more tall', 'the tallest'], a: 1,
            clue: 'tall = คำสั้น 1 พยางค์ + than = เทียบ 2 คน', rule: 'คำสั้นเติม -er เมื่อเทียบ 2 สิ่งและมี than',
            why: 'tall เป็นคำสั้น เติม -er และมี than บอกว่าเทียบ 2 คน',
            n: ['ขาด -er และคำเปรียบเทียบต้องมีรูปเปรียบเทียบ', '', 'tall เป็นคำสั้น ไม่ใช้ more', 'the tallest ใช้เมื่อเทียบ 3 คนขึ้นไป ไม่มี than'],
            ex: 'She is shorter than her sister.' },
          { q: 'This book is ___ than that one. (interesting)', o: ['interestinger', 'more interesting', 'the most interesting', 'interesting'], a: 1,
            clue: 'interesting = คำยาว', rule: 'คำยาว (2 พยางค์ขึ้นไปส่วนใหญ่) ใช้ more แทนการเติม -er',
            why: 'interesting เป็นคำยาว จึงใช้ more interesting ไม่เติม -er',
            n: ['คำยาวไม่เติม -er ตรง ๆ แบบนี้', '', 'the most ใช้เมื่อเทียบ 3 สิ่งขึ้นไป ไม่มี than', 'ขาดคำเปรียบเทียบ'],
            ex: 'This exam is more difficult than the last one.' },
          { q: 'Mount Everest is ___ mountain in the world. (high)', o: ['higher', 'more high', 'the highest', 'high'], a: 2,
            clue: 'in the world = เทียบกับภูเขาทุกลูกในโลก (มากกว่า 2)', rule: 'เทียบ 3 สิ่งขึ้นไปใช้ the + adj-est',
            why: '"in the world" บอกว่าเทียบกับภูเขาทุกลูก (มากกว่า 2) จึงใช้ขั้นสุด the highest',
            n: ['higher ใช้เทียบแค่ 2 สิ่งและต้องมี than', 'high เป็นคำสั้น ไม่ใช้ more', '', 'ขาด the และรูปเปรียบเทียบ'],
            ex: 'She is the best student in the class.' },
          { q: 'รูปขั้นกว่าและขั้นสุดของ good คือข้อใด', o: ['gooder / goodest', 'more good / most good', 'better / the best', 'best / bester'], a: 2,
            clue: 'good เป็นคำพิเศษ ไม่เติม -er/-est ปกติ', rule: 'good → better → the best (คำผิดปกติ ต้องจำ)',
            why: 'good เป็นคำที่เปลี่ยนรูปพิเศษ ไม่ใช่กฎ -er/-est ทั่วไป',
            n: ['ไม่มีรูปนี้ในภาษาอังกฤษ', 'good ไม่ใช้ more/most', '', 'สลับลำดับและสะกดผิด'],
            ex: 'This cake is better than that one. It is the best cake here.' },
          { q: 'เรียงคำให้ถูก: is / than / happier / She / her brother', o: ['She is happier than her brother.', 'She happier is than her brother.', 'She is happy than her brother.', 'She is more happier than her brother.'], a: 0,
            clue: 'happy → happier (พยัญชนะ+y เปลี่ยนเป็น i)', rule: 'S + be + adj-er + than + ...',
            why: 'She (S) → is (V) → happier than her brother (C เปรียบเทียบ)',
            n: ['', 'ต้องใช้รูป happier ไม่ใช่ happy เฉย ๆ', 'ขาด -er ที่ท้าย happy', 'ห้ามใช้ more กับ -er พร้อมกัน'],
            ex: 'He is busier than me these days.' }
        ],
        writing: [
          { prompt: 'แต่งประโยคเปรียบเทียบตัวคุณกับเพื่อนคนหนึ่ง โดยใช้ขั้นกว่า (comparative) + than', sample: 'My friend is more talkative than me.',
            checklist: ['ใช้รูปขั้นกว่าให้ถูกต้องตามความยาวของคำ (adj-er หรือ more adj)', 'มีคำว่า than', 'เปรียบเทียบแค่ 2 สิ่ง/คนเท่านั้น'] },
          { prompt: 'แต่งประโยคขั้นสุด (superlative) บอกว่าอะไรเป็นที่สุดในกลุ่ม/ในครอบครัวของคุณ', sample: 'My grandmother is the kindest person in my family.',
            checklist: ['มี the นำหน้าคำคุณศัพท์เสมอ', 'ใช้รูปขั้นสุดให้ถูกต้อง (adj-est หรือ the most adj)', 'ระบุกลุ่มที่เปรียบเทียบ (in my family / in the class ฯลฯ)'] }
        ]
      },
      {
        id: 'det-relative', level: 'B1', title: 'Relative Clauses', th: 'อนุประโยคขยายคำนาม',
        explain: 'ใช้ขยายคำนามให้ชัดเจนขึ้น โดยไม่ต้องแยกเป็นสองประโยค — แทนที่จะพูด "I have a friend. He lives in Japan." รวมเป็น "I have a friend <b>who lives in Japan</b>."<br>• <b>who</b> = แทนคน (ทำหน้าที่ประธาน/กรรม)<br>• <b>which</b> = แทนสิ่งของ/สัตว์<br>• <b>that</b> = แทนได้ทั้งคนและสิ่งของ (ไม่เป็นทางการ ใช้แทน who/which ได้)<br>• <b>whose</b> = แสดงความเป็นเจ้าของ (ของใคร/ของอะไร)',
        formula: '[คำนาม] + <b>who/which/that</b> + V ... (ขยายคำนามที่อยู่ข้างหน้าทันที)',
        examples: [
          { en: 'S:I|V:have|O:a friend|M:who|V:lives|Pl:in Japan', th: 'ฉันมีเพื่อนที่อาศัยอยู่ญี่ปุ่น (who แทนคน)' },
          { en: 'S:This is|O:the book|M:that|S:I|V:borrowed|Pl:from the library', th: 'นี่คือหนังสือที่ฉันยืมมาจากห้องสมุด (that แทนสิ่งของ)' },
          { en: 'S:That\'s|O:the man|M:whose|O:car|aux:was|V:stolen', th: 'นั่นคือผู้ชายที่รถของเขาถูกขโมย (whose แสดงความเป็นเจ้าของ)' }
        ],
        confuse: [
          'ห้ามใส่สรรพนามซ้ำหลัง relative clause: "I have a friend who <s>he</s> lives in Japan." ✗ — who ทำหน้าที่แทนประธานไปแล้ว ไม่ต้องมี he ซ้ำ',
          '<b>who</b> ใช้กับคนเท่านั้น ห้ามใช้กับสิ่งของ: "the book <u>who</u> I read" ✗ ต้องเป็น "the book <u>that/which</u> I read" ✓'
        ],
        quiz: [
          { q: 'I know a girl ___ speaks four languages.', o: ['which', 'who', 'whose', 'what'], a: 1,
            clue: 'a girl = คน', rule: 'who ใช้แทนคน',
            why: 'girl เป็นคน จึงใช้ who',
            n: ['which ใช้กับสิ่งของ ไม่ใช่คน', '', 'whose ใช้แสดงความเป็นเจ้าของ ไม่ใช่แทนประธาน', 'what ไม่ใช้เป็น relative pronoun แบบนี้'],
            ex: 'He has a sister who works as a nurse.' },
          { q: 'This is the car ___ I bought last year.', o: ['who', 'which', 'whose', 'where'], a: 1,
            clue: 'the car = สิ่งของ', rule: 'which (หรือ that) ใช้แทนสิ่งของ',
            why: 'car เป็นสิ่งของ จึงใช้ which',
            n: ['who ใช้กับคนเท่านั้น', '', 'whose ใช้แสดงความเป็นเจ้าของ ไม่เข้ากับบริบทนี้', 'where ใช้กับสถานที่'],
            ex: 'I lost the pen which my father gave me.' },
          { q: 'ข้อใดผิด (มีสรรพนามซ้ำ)', o: ['I have a friend who lives in Paris.', 'I have a friend who he lives in Paris.', 'This is the book that I bought.', 'She is the woman whose son is a doctor.'], a: 1,
            clue: 'who...he ซ้ำซ้อน', rule: 'ห้ามใส่สรรพนามซ้ำหลัง relative pronoun',
            why: '"who he lives" มี he ซ้ำซ้อนกับ who ซึ่งทำหน้าที่ประธานอยู่แล้ว',
            n: ['ถูกต้อง ไม่มีสรรพนามซ้ำ', '', 'ถูกต้อง ไม่มีสรรพนามซ้ำ', 'ถูกต้อง ไม่มีสรรพนามซ้ำ'],
            ex: 'She has a car which she drives to work. (ไม่ใช่ which she drives it)' },
          { q: 'That\'s the man ___ car was stolen last night.', o: ['who', 'which', 'whose', 'that'], a: 2,
            clue: 'car ของผู้ชายคนนั้น (เจ้าของ)', rule: 'whose แสดงความเป็นเจ้าของ',
            why: 'รถเป็นของผู้ชายคนนั้น จึงใช้ whose',
            n: ['who ไม่แสดงความเป็นเจ้าของ', 'which ไม่แสดงความเป็นเจ้าของ', '', 'that ไม่แสดงความเป็นเจ้าของ'],
            ex: 'I know a student whose parents are both doctors.' },
          { q: 'เรียงคำให้ถูก: who / a doctor / friend / is / My', o: ['My friend who is a doctor.', 'My who friend is a doctor.', 'Who is my friend a doctor.', 'My friend is who a doctor.'], a: 0,
            clue: '[คำนาม] + who + V + C', rule: '[คำนาม] + relative pronoun + V ...',
            why: 'My friend (คำนาม) → who is a doctor (อนุประโยคขยาย)',
            n: ['', 'who ต้องอยู่หลังคำนามที่ขยายทันที', 'ลำดับคำผิด', 'who ต้องอยู่หน้า is ไม่ใช่หลัง'],
            ex: 'The teacher who taught me English moved away.' }
        ],
        writing: [
          { prompt: 'รวมสองประโยคนี้เป็นประโยคเดียวด้วย relative clause: "I have a neighbor. She is a doctor."', sample: 'I have a neighbor who is a doctor.',
            checklist: ['ใช้ who เพราะ neighbor เป็นคน', 'ไม่มีสรรพนามซ้ำ (she) หลัง who', 'ประโยครวมเป็นประโยคเดียวสมบูรณ์'] },
          { prompt: 'แต่งประโยคที่ใช้ whose แสดงความเป็นเจ้าของ', sample: 'I met a woman whose daughter is my classmate.',
            checklist: ['ใช้ whose ตามด้วยคำนามที่เป็นเจ้าของ', 'ประโยคสมเหตุสมผล', 'ไม่มีสรรพนามซ้ำ'] }
        ]
      },
      {
        id: 'det-some', level: 'B1', title: 'some / any / each / every', th: 'บางส่วน · ใด ๆ · แต่ละ · ทุก',
        explain: '<b>some</b> ใช้ในประโยค <b>บอกเล่า</b> และการเสนอ/ขอ (Would you like some tea?)<br><b>any</b> ใช้ในประโยค <b>ปฏิเสธ</b> และ <b>คำถาม</b> ทั่วไป<br><b>each / every</b> + <b>คำนามเอกพจน์</b> + <b>กริยาเอกพจน์</b>: Every student <b>has</b> a book.<br>each เน้นทีละคน/ทีละชิ้น · every เน้นทั้งกลุ่ม',
        formula: 'บอกเล่า → <b>some</b> · ปฏิเสธ/คำถาม → <b>any</b><br><b>each/every</b> + noun (เอกพจน์) + V-s',
        examples: [
          { en: 'S:I|V:have|O:some questions', th: 'ฉันมีคำถามบางข้อ' },
          { en: 'S:We|neg:don\'t|V:have|O:any milk', th: 'เราไม่มีนมเลย' },
          { en: 'det:Every|n:student|V:has|O:a book', th: 'นักเรียนทุกคนมีหนังสือ (student เอกพจน์ → has)' }
        ],
        confuse: [
          'every ความหมายว่า "ทุก" แต่ใช้กับเอกพจน์: every <b>day</b> ✓ · every days ✗',
          'some ใช้ในคำถามได้เมื่อเป็นการเสนอหรือขอ: Can I have some water?'
        ],
        quiz: [
          { q: 'I have ___ questions.', o: ['some', 'any', 'every', 'each'], a: 0,
            clue: 'ประโยคบอกเล่า + questions (พหูพจน์)', rule: 'บอกเล่าใช้ some',
            why: 'ประโยคบอกเล่าและคำนามพหูพจน์ → some',
            n: ['', 'any ใช้กับปฏิเสธ/คำถาม', 'every ต้องตามด้วยเอกพจน์', 'each ต้องตามด้วยเอกพจน์'],
            ex: 'She bought some apples.' },
          { q: 'We don\'t have ___ milk.', o: ['any', 'some', 'every', 'each'], a: 0,
            clue: 'don\'t (ปฏิเสธ)', rule: 'ปฏิเสธใช้ any',
            why: 'ประโยคปฏิเสธจึงใช้ any',
            n: ['', 'some ใช้กับบอกเล่า', 'every ใช้กับคำนามนับได้เอกพจน์', 'each ใช้กับคำนามนับได้เอกพจน์'],
            ex: 'There isn\'t any sugar.' },
          { q: 'Every student ___ a book.', o: ['has', 'have', 'having', 'are'], a: 0,
            clue: 'Every student (เอกพจน์)', rule: 'every + นามเอกพจน์ + กริยาเอกพจน์',
            why: 'Every student ถือเป็นเอกพจน์ → has',
            n: ['', 'have ใช้กับพหูพจน์', 'having ไม่ใช่กริยาแท้', 'are ใช้กับพหูพจน์และไม่ได้แปลว่ามี'],
            ex: 'Every child needs love.' },
          { q: 'Is there ___ water in the bottle?', o: ['any', 'every', 'each', 'a'], a: 0,
            clue: 'Is there ...? (คำถามทั่วไป) + water (นับไม่ได้)', rule: 'คำถามทั่วไปใช้ any',
            why: 'เป็นคำถามว่ามีน้ำไหม และ water นับไม่ได้ → any',
            n: ['', 'every ใช้กับนามนับได้เอกพจน์', 'each ใช้กับนามนับได้เอกพจน์', 'water นับไม่ได้ ใช้ a ไม่ได้'],
            ex: 'Do you have any money?' },
          { q: 'Each child ___ a gift.', o: ['receives', 'receive', 'receiving', 'are receive'], a: 0,
            clue: 'Each child (เอกพจน์)', rule: 'each + นามเอกพจน์ + กริยาเอกพจน์',
            why: 'Each child เป็นเอกพจน์ → receives',
            n: ['', 'receive ใช้กับพหูพจน์', 'receiving ไม่ใช่กริยาแท้', 'are กับ receive ใช้ด้วยกันแบบนี้ไม่ได้'],
            ex: 'Each room has a window.' }
        ]
      },
      {
        id: 'det-participle', level: 'B2', title: 'Participle Clauses', th: 'อนุประโยคแบบย่อด้วย -ing/-ed',
        explain: 'ใช้<b>ย่อ</b> relative clause ให้สั้นลง โดยตัด relative pronoun (who/which/that) และกริยาช่วยออก แล้วเปลี่ยนกริยาเป็น <b>-ing (active)</b> หรือ <b>-ed/V3 (passive)</b><br>• Active (ประธานเป็นผู้ทำ): "the man <u>who is standing</u> there" → "the man <b>standing</b> there"<br>• Passive (ประธานถูกกระทำ): "the book <u>which was written</u> by her" → "the book <b>written</b> by her"<br>นิยมใช้ในบทอ่านวิชาการเพื่อให้ประโยคกระชับ',
        formula: 'who/which + is/are + V-ing → <b>V-ing</b> (active)<br>who/which + is/are + V3 → <b>V3</b> (passive)',
        examples: [
          { en: 'S:The girl|M:standing|Pl:near the door|V:is|C:my sister', th: 'เด็กผู้หญิงที่ยืนอยู่ใกล้ประตูคือน้องสาวฉัน (ย่อจาก who is standing)' },
          { en: 'S:The report|M:written|Pl:by the committee|aux:was|V:approved', th: 'รายงานที่เขียนโดยคณะกรรมการได้รับการอนุมัติ (ย่อจาก which was written)' },
          { en: 'S:People|M:living|Pl:in big cities|V:face|O:more stress', th: 'คนที่อาศัยอยู่ในเมืองใหญ่เผชิญความเครียดมากกว่า (ย่อจาก who live/are living)' }
        ],
        confuse: [
          'เลือก -ing หรือ -ed/V3 ตามว่า<b>ประธานเป็นผู้ทำ (active)</b> หรือ<b>ถูกกระทำ (passive)</b>: คนที่ "กำลังยืน" (ทำเอง) ใช้ standing แต่รายงานที่ "ถูกเขียน" (ถูกกระทำ) ใช้ written ไม่ใช่ writing',
          'Participle clause แบบนี้ใช้ย่อได้เฉพาะเมื่อ relative clause มี be (is/are/was/were) อยู่แล้ว หรือเป็นกริยาที่แปลงเป็น -ing ได้ตามความหมาย ไม่ใช่ใช้ย่อได้ทุกประโยค'
        ],
        quiz: [
          { q: 'The man ___ over there is my uncle. (who is standing)', o: ['stand', 'standing', 'stood', 'to stand'], a: 1,
            clue: 'ผู้ชายกำลังยืน = ประธานเป็นผู้ทำ (active)', rule: 'ย่อจาก who is + V-ing → V-ing',
            why: 'ผู้ชายเป็นผู้ยืนเอง (active) จึงย่อเหลือ standing',
            n: ['ขาด -ing', '', 'stood เป็นอดีต ไม่ใช่รูปย่อที่ถูกต้อง', 'to stand ไม่ใช่รูป participle clause'],
            ex: 'The woman talking on the phone is my boss.' },
          { q: 'The email ___ yesterday contained important news. (which was sent)', o: ['sending', 'sent', 'send', 'to send'], a: 1,
            clue: 'อีเมลถูกส่ง = ถูกกระทำ (passive)', rule: 'ย่อจาก which was + V3 → V3',
            why: 'อีเมลถูกส่ง (passive) จึงย่อเหลือ sent (V3)',
            n: ['sending สื่อว่าอีเมลเป็นผู้ส่งเอง ไม่ถูกต้อง', '', 'send ไม่ใช่รูป participle', 'to send ไม่ใช่รูป participle clause'],
            ex: 'The car parked outside belongs to my neighbor.' },
          { q: 'People ___ in this area should register first. (who live)', o: ['live', 'living', 'lived', 'to live'], a: 1,
            clue: 'คนอาศัยอยู่เอง = active', rule: 'who live/are living → living',
            why: 'people เป็นผู้อาศัยเอง (active) จึงใช้ living',
            n: ['ต้องเติม -ing', '', 'lived สื่อความ passive ผิดความหมายในที่นี้', 'to live ไม่ใช่รูป participle clause'],
            ex: 'Students studying abroad often feel homesick.' },
          { q: 'ข้อใดถูกต้อง (เลือก active/passive ให้ตรง)', o: ['The window breaking by the storm was fixed.', 'The window broken by the storm was fixed.', 'The window break by the storm was fixed.', 'The window to break by the storm was fixed.'], a: 1,
            clue: 'หน้าต่างถูกทำให้แตก = passive', rule: 'ถูกกระทำ → V3',
            why: 'หน้าต่างถูกพายุทำให้แตก (passive) จึงใช้ broken (V3) ไม่ใช่ breaking',
            n: ['breaking สื่อว่าหน้าต่างเป็นผู้ทำเอง ผิดความหมาย', '', 'break ไม่ใช่รูป participle', 'to break ไม่ใช่รูป participle clause'],
            ex: 'The house damaged by the fire has been rebuilt.' },
          { q: 'เรียงคำให้ถูก: sitting / The / next to me / man / is / my teacher', o: ['The man sitting next to me is my teacher.', 'The man sit next to me is my teacher.', 'Sitting the man next to me is my teacher.', 'The man is sitting next to me my teacher.'], a: 0,
            clue: '[คำนาม] + V-ing + [ส่วนขยาย] + V + C', rule: '[คำนาม] + participle clause (V-ing/V3) + ...',
            why: 'The man (คำนาม) → sitting next to me (participle clause ขยาย) → is my teacher (กริยาหลัก)',
            n: ['', 'ต้องเติม -ing ไม่ใช่ sit เฉย ๆ', 'sitting ต้องอยู่หลังคำนามที่ขยาย ไม่ใช่หน้าประโยค', 'ลำดับคำผิด ทำให้มีกริยาซ้ำไม่ชัดเจน'],
            ex: 'The kids playing in the yard are my cousins.' }
        ],
        writing: [
          { prompt: 'ย่อประโยคนี้ด้วย participle clause: "The girl who is reading a book is my classmate."', sample: 'The girl reading a book is my classmate.',
            checklist: ['ตัด who is ออก', 'ใช้ V-ing (reading) เพราะประธานเป็นผู้ทำเอง', 'ประโยคยังสื่อความหมายเดิมครบถ้วน'] },
          { prompt: 'แต่งประโยคที่มี participle clause แบบ passive (V3) ขยายคำนาม', sample: 'The letter written in French was hard to understand.',
            checklist: ['ใช้ V3 เพราะคำนามถูกกระทำ (passive)', 'participle clause อยู่ติดหลังคำนามที่ขยาย', 'ประโยคสมบูรณ์และสมเหตุสมผล'] }
        ]
      },
      {
        id: 'det-ref', level: 'B2', title: 'Tracking references', th: 'หาว่าคำนี้หมายถึงอะไร',
        explain: 'ในบทอ่าน คำอย่าง <b>it, they, this, these, their</b> ชี้กลับไปที่สิ่งที่พูดไปแล้ว คำถาม GED มักถามว่า "คำนี้หมายถึงอะไร"<br>วิธีหา:<br>1. ดู <b>จำนวน</b>: it/this = เอกพจน์ · they/these/their = พหูพจน์<br>2. มองย้อนไปที่ <b>ประโยคก่อนหน้า</b><br>3. <b>แทนค่ากลับ</b> ลงไปแล้วอ่านว่าความหมายสมเหตุผลไหม<br><b>This</b> ต้นประโยคมักหมายถึง <b>ทั้งความคิด</b> ในประโยคก่อน ไม่ใช่คำเดียว',
        formula: 'it / this → 1 สิ่ง หรือ 1 ความคิด<br>they / these / their → หลายสิ่ง<br>แทนค่ากลับ → อ่านแล้วต้องสมเหตุผล',
        examples: [
          { en: 'S:Bees|V:carry|O:pollen.|pro:This|V:helps|O:plants|V:grow', th: 'ผึ้งขนละอองเรณู สิ่งนี้ช่วยให้พืชเติบโต (This = การที่ผึ้งขนละอองเรณู)' },
          { en: 'S:The city|V:built|O:new bike lanes.|pro:They|V:made|O:streets safer', th: 'เมืองสร้างเลนจักรยานใหม่ ซึ่งทำให้ถนนปลอดภัยขึ้น (They = bike lanes)' },
          { en: 'S:The law|V:protects|O:workers.|pro:It|adv:also|V:sets|O:a minimum wage', th: 'กฎหมายคุ้มครองแรงงาน และยังกำหนดค่าแรงขั้นต่ำด้วย (It = the law)' }
        ],
        confuse: [
          'The city เป็นเอกพจน์ ใช้ it ไม่ใช้ they แม้เมืองจะมีคนมาก',
          'ถ้าแทนค่าแล้วมีสองตัวเลือกที่เป็นไปได้ ให้ดูว่าอันไหนทำกริยานั้นได้จริง'
        ],
        quiz: [
          { q: '"Bees carry pollen from flower to flower. This helps plants grow fruit." — This หมายถึงอะไร', o: ['การที่ผึ้งขนละอองเรณูจากดอกไม้สู่ดอกไม้', 'ดอกไม้', 'ผลไม้', 'พืช'], a: 0,
            clue: 'This ต้นประโยค + helps plants', rule: 'This ต้นประโยคมักหมายถึงความคิดทั้งประโยคก่อนหน้า',
            why: 'สิ่งที่ช่วยให้พืชออกผลคือการที่ผึ้งขนละอองเรณู',
            n: ['', 'ดอกไม้ไม่ได้ช่วยพืชในประโยคนี้', 'ผลไม้เป็นผลลัพธ์ ไม่ใช่สิ่งที่ช่วย', 'พืชเป็นผู้ได้รับความช่วยเหลือ'],
            ex: 'Prices rose. This made people angry. (This = การที่ราคาสูงขึ้น)' },
          { q: '"The city built new bike lanes. They made streets safer." — They หมายถึงอะไร', o: ['the new bike lanes', 'the city', 'streets', 'people'], a: 0,
            clue: 'They (พหูพจน์)', rule: 'they ชี้กลับไปที่คำนามพหูพจน์ก่อนหน้า',
            why: 'bike lanes เป็นพหูพจน์ และเป็นสิ่งที่ทำให้ถนนปลอดภัย',
            n: ['', 'the city เป็นเอกพจน์ จะใช้ it', 'streets เป็นสิ่งที่ปลอดภัยขึ้น ไม่ใช่ผู้ทำ', 'people ไม่ได้ถูกกล่าวถึง'],
            ex: 'The school bought tablets. They help students read.' },
          { q: '"When the scientists tested the water, they found high levels of lead." — they หมายถึงใคร', o: ['the scientists', 'the water', 'levels', 'lead'], a: 0,
            clue: 'they + found (ผู้ที่ค้นพบ)', rule: 'แทนค่ากลับแล้วต้องทำกริยาได้จริง',
            why: 'ผู้ที่ค้นพบได้คือนักวิทยาศาสตร์',
            n: ['', 'water เป็นเอกพจน์และค้นพบอะไรไม่ได้', 'levels อยู่หลัง they', 'lead เป็นสิ่งที่ถูกพบ'],
            ex: 'When the workers finished, they went home.' },
          { q: '"The law protects workers. It also sets a minimum wage." — It หมายถึงอะไร', o: ['the law', 'workers', 'a minimum wage', 'work'], a: 0,
            clue: 'It (เอกพจน์) + sets', rule: 'it ชี้กลับไปที่คำนามเอกพจน์ที่ทำกริยาได้',
            why: 'กฎหมายเป็นผู้กำหนดค่าแรงขั้นต่ำ',
            n: ['', 'workers เป็นพหูพจน์', 'minimum wage อยู่หลัง It', 'ไม่มีคำว่า work ในบทอ่าน'],
            ex: 'The plan is simple. It saves money.' },
          { q: '"Solar panels are expensive at first, but their cost falls over time." — their หมายถึงอะไร', o: ['solar panels', 'cost', 'time', 'people'], a: 0,
            clue: 'their (พหูพจน์) + cost', rule: 'their ชี้กลับไปที่เจ้าของที่เป็นพหูพจน์',
            why: 'ราคาของแผงโซลาร์ลดลง',
            n: ['', 'cost เป็นสิ่งที่ถูกเป็นเจ้าของ', 'time เป็นเอกพจน์', 'people ไม่ได้ถูกกล่าวถึง'],
            ex: 'Trees are important. Their roots hold the soil.' }
        ]
      }
    ],
    post: [
      { q: 'Can you help ___?', o: ['us', 'we', 'our', 'ours'], a: 0,
        clue: 'help + ___ (กรรม)', rule: 'หลังกริยาใช้รูปกรรม',
        why: 'ตำแหน่งกรรมของ we คือ us',
        n: ['', 'we เป็นรูปประธาน', 'our ต้องมีคำนามตาม', 'ours = ของเรา'],
        ex: 'They thanked us.' },
      { q: 'Is that ___ phone?', o: ['your', 'yours', 'you', 'you\'re'], a: 0,
        clue: '___ + phone', rule: 'มีคำนามตามใช้ your',
        why: 'phone ตามหลัง จึงใช้ your',
        n: ['', 'yours ใช้เมื่อไม่มีคำนามตาม', 'you ไม่ได้บอกความเป็นเจ้าของ', 'you\'re = you are'],
        ex: 'Is this your seat?' },
      { q: 'I know a girl ___ speaks four languages.', o: ['which', 'who', 'whose', 'what'], a: 1,
        clue: 'a girl = คน', rule: 'who ใช้แทนคน',
        why: 'girl เป็นคน จึงใช้ who',
        n: ['which ใช้กับสิ่งของ ไม่ใช่คน', '', 'whose ใช้แสดงความเป็นเจ้าของ ไม่ใช่แทนประธาน', 'what ไม่ใช้เป็น relative pronoun แบบนี้'],
        ex: 'He has a sister who works as a nurse.' },
      { q: 'I don\'t have ___ money.', o: ['any', 'some', 'every', 'a'], a: 0,
        clue: 'don\'t (ปฏิเสธ)', rule: 'ปฏิเสธใช้ any',
        why: 'ประโยคปฏิเสธ → any',
        n: ['', 'some ใช้กับบอกเล่า', 'every ใช้กับนามนับได้เอกพจน์', 'money นับไม่ได้ ใช้ a ไม่ได้'],
        ex: 'He didn\'t eat any rice.' },
      { q: 'The cat drank ___ milk.', o: ['its', 'it\'s', 'it', 'them'], a: 0,
        clue: 'The cat (ตัวเดียว) + milk', rule: 'ของมัน = its',
        why: 'นมของแมว → its milk',
        n: ['', 'it\'s = it is', 'it ไม่ได้บอกความเป็นเจ้าของ', 'them เป็นรูปกรรมพหูพจน์'],
        ex: 'The company changed its name.' },
      { q: 'Every house on this street ___ a garden.', o: ['has', 'have', 'are', 'having'], a: 0,
        clue: 'Every house (เอกพจน์)', rule: 'every + เอกพจน์ + กริยาเอกพจน์',
        why: 'Every house เป็นเอกพจน์ → has',
        n: ['', 'have ใช้กับพหูพจน์', 'are ใช้กับพหูพจน์และไม่ได้แปลว่ามี', 'having ไม่ใช่กริยาแท้'],
        ex: 'Every phone has a camera.' },
      { q: 'This road is ___ than that one. (narrow)', o: ['narrower', 'more narrow', 'narrowest', 'the narrowest'], a: 0,
        clue: 'narrow = คำสั้น + than = เทียบ 2 สิ่ง', rule: 'คำสั้นเติม -er เมื่อเทียบ 2 สิ่งและมี than',
        why: 'narrow เป็นคำสั้น เติม -er และมี than บอกว่าเทียบ 2 ถนน',
        n: ['', 'narrow เป็นคำสั้น ไม่ใช้ more', 'ขาด than และเป็นรูปขั้นสุดซึ่งใช้เทียบ 3 สิ่งขึ้นไป', 'the narrowest ใช้เมื่อเทียบ 3 สิ่งขึ้นไป ไม่มี than'],
        ex: 'This bag is heavier than that one.' },
      { q: 'The book is not mine. It\'s ___.', o: ['Sara\'s', 'Sara', 'Saras', 'Sara is'], a: 0,
        clue: 'ของซาร่า (ไม่มีคำนามตาม)', rule: 'ชื่อ + \'s บอกความเป็นเจ้าของ',
        why: 'หนังสือเป็นของซาร่า → Sara\'s',
        n: ['', 'ไม่ได้บอกความเป็นเจ้าของ', 'ขาด apostrophe', 'ทำให้มีกริยาซ้ำ'],
        ex: 'This bike is Ken\'s.' },
      { q: 'The man ___ over there is my uncle. (who is standing)', o: ['stand', 'standing', 'stood', 'to stand'], a: 1,
        clue: 'ผู้ชายกำลังยืน = ประธานเป็นผู้ทำ (active)', rule: 'ย่อจาก who is + V-ing → V-ing',
        why: 'ผู้ชายเป็นผู้ยืนเอง (active) จึงย่อเหลือ standing',
        n: ['ขาด -ing', '', 'stood เป็นอดีต ไม่ใช่รูปย่อที่ถูกต้อง', 'to stand ไม่ใช่รูป participle clause'],
        ex: 'The woman talking on the phone is my boss.' },
      { q: '"Many farmers now use drones. These machines save time and water." — These machines หมายถึงอะไร', o: ['drones', 'farmers', 'time', 'water'], a: 0,
        clue: 'These machines (เครื่องจักร พหูพจน์)', rule: 'แทนค่ากลับแล้วต้องเป็นเครื่องจักร',
        why: 'drones เป็นเครื่องจักรที่ช่วยประหยัดเวลาและน้ำ',
        n: ['', 'farmers เป็นคน ไม่ใช่เครื่องจักร', 'time เป็นสิ่งที่ถูกประหยัด', 'water เป็นสิ่งที่ถูกประหยัด'],
        ex: 'The town has new buses. These vehicles run on electricity.' }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
