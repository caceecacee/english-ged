/* คลังคำศัพท์ "เตรียมสอบ" ทริปที่ 3 — อิง Oxford 3000 (A1–B2) และ Oxford 5000 (C1) เป็นแหล่งอ้างอิงระดับ
   ที่มา: oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/
          The_Oxford_3000_by_CEFR_level.pdf และ The_Oxford_5000_by_CEFR_level.pdf (ดึงและตรวจสอบระดับคำทุกคำจริง)
   ดูนโยบายสัดส่วน/โครงสร้างข้อมูลเต็มที่ examvocab-trip-01.js — ทริปนี้ใช้กฎเดียวกันทุกข้อ (50 คำใหม่ ไม่ซ้ำกับทริป 1-2) */
(function (root) {
  var EP = root.EP = root.EP || {};
  EP.examVocab = EP.examVocab || { trips: [] };
  EP.examVocab.trips.push({
    id: 'trip-03',
    name: 'เจาะลึกขึ้นอีกขั้น',
    sets: [
      {
        id: 'university-life-3', theme: 'University Life III', themeTh: 'ชีวิตมหาวิทยาลัย (เจาะลึก)',
        words: [
          { w: 'library', pos: 'n.', level: 'A1', source: 'Oxford 3000', th: 'ห้องสมุด',
            sentence: 'She spends most afternoons studying at the ___.', sentenceTh: 'เธอใช้เวลาช่วงบ่ายส่วนใหญ่อ่านหนังสือที่ห้องสมุด',
            collocations: ['go to the library', 'borrow from the library'],
            quizBank: [
              { s: 'The university ___ is open until midnight during exams.', sTh: 'ห้องสมุดมหาวิทยาลัยเปิดถึงเที่ยงคืนช่วงสอบ' },
              { s: 'I need to return these books to the ___ today.', sTh: 'ฉันต้องคืนหนังสือเหล่านี้ที่ห้องสมุดวันนี้' },
              { s: 'You can find quiet study rooms in the ___.', sTh: 'คุณสามารถหาห้องอ่านหนังสือที่เงียบในห้องสมุดได้' }
            ] },
          { w: 'challenge', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'ความท้าทาย/ท้าทาย',
            sentence: 'Writing the thesis was the biggest ___ of her studies.', sentenceTh: 'การเขียนวิทยานิพนธ์เป็นความท้าทายที่ใหญ่ที่สุดในการเรียนของเธอ',
            collocations: ['face a challenge', 'a real challenge'],
            quizBank: [
              { s: 'Learning a new language can be a big ___.', sTh: 'การเรียนภาษาใหม่อาจเป็นความท้าทายที่ใหญ่' },
              { s: 'He decided to ___ himself by taking harder classes.', sTh: 'เขาตัดสินใจท้าทายตัวเองด้วยการเรียนวิชาที่ยากขึ้น' },
              { s: 'Every ___ she faced made her stronger.', sTh: 'ความท้าทายทุกครั้งที่เธอเจอทำให้เธอแข็งแกร่งขึ้น' }
            ] },
          { w: 'revise', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'ทบทวน (ก่อนสอบ)',
            sentence: 'I need to ___ all my notes before the final exam.', sentenceTh: 'ฉันต้องทบทวนสมุดบันทึกทั้งหมดก่อนสอบปลายภาค',
            collocations: ['revise for an exam', 'revise notes'],
            quizBank: [
              { s: 'She spent the whole weekend trying to ___ for chemistry.', sTh: 'เธอใช้เวลาทั้งสุดสัปดาห์ทบทวนวิชาเคมี' },
              { s: 'It helps to ___ a little every day instead of all at once.', sTh: 'การทบทวนทีละน้อยทุกวันช่วยได้มากกว่าทำทีเดียว' },
              { s: 'Did you ___ the material we covered last week?', sTh: 'คุณทบทวนเนื้อหาที่เราเรียนสัปดาห์ที่แล้วหรือยัง' }
            ] },
          { w: 'concentrate', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'มีสมาธิ/จดจ่อ',
            sentence: 'It is hard to ___ with so much noise outside.', sentenceTh: 'มันยากที่จะมีสมาธิเมื่อมีเสียงดังจากข้างนอกมากมาย',
            collocations: ['concentrate on', 'unable to concentrate'],
            quizBank: [
              { s: 'He tried to ___ on his homework despite feeling tired.', sTh: 'เขาพยายามจดจ่อกับการบ้านแม้จะรู้สึกเหนื่อย' },
              { s: 'Turning off your phone can help you ___ better.', sTh: 'การปิดโทรศัพท์ช่วยให้คุณมีสมาธิดีขึ้น' },
              { s: 'She finds it easier to ___ in the early morning.', sTh: 'เธอพบว่ามีสมาธิได้ง่ายกว่าในตอนเช้าตรู่' }
            ] },
          { w: 'talent', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ความสามารถพิเศษ/พรสวรรค์',
            sentence: 'She has a real ___ for solving math problems.', sentenceTh: 'เธอมีพรสวรรค์จริงๆ ในการแก้ปัญหาคณิตศาสตร์',
            collocations: ['natural talent', 'show talent'],
            quizBank: [
              { s: 'His ___ for writing was clear from a young age.', sTh: 'พรสวรรค์ด้านการเขียนของเขาเห็นได้ชัดตั้งแต่อายุยังน้อย' },
              { s: 'The university offers scholarships for students with special ___.', sTh: 'มหาวิทยาลัยมีทุนการศึกษาสำหรับนักเรียนที่มีความสามารถพิเศษ' },
              { s: 'Hard work matters more than natural ___ in the long run.', sTh: 'ในระยะยาว ความพยายามสำคัญกว่าพรสวรรค์ตามธรรมชาติ' }
            ] },
          { w: 'effort', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ความพยายาม',
            sentence: 'She put a lot of ___ into her final project.', sentenceTh: 'เธอทุ่มเทความพยายามอย่างมากกับโครงการสุดท้าย',
            collocations: ['make an effort', 'put in effort'],
            quizBank: [
              { s: 'It took a great deal of ___ to finish the thesis on time.', sTh: 'ต้องใช้ความพยายามอย่างมากเพื่อทำวิทยานิพนธ์ให้เสร็จทันเวลา' },
              { s: 'Please make an ___ to arrive on time for the presentation.', sTh: 'กรุณาพยายามมาให้ตรงเวลาสำหรับการนำเสนอ' },
              { s: 'Their ___ to improve the library was clearly successful.', sTh: 'ความพยายามของพวกเขาในการปรับปรุงห้องสมุดเห็นผลสำเร็จอย่างชัดเจน' }
            ] },
          { w: 'institute', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'สถาบัน (มักเฉพาะทาง)',
            sentence: 'He studies robotics at a famous technology ___.', sentenceTh: 'เขาเรียนหุ่นยนต์ที่สถาบันเทคโนโลยีที่มีชื่อเสียง',
            collocations: ['a research institute', 'technology institute'],
            quizBank: [
              { s: 'The ___ publishes new research papers every month.', sTh: 'สถาบันแห่งนี้ตีพิมพ์งานวิจัยใหม่ทุกเดือน' },
              { s: 'She works at a medical research ___.', sTh: 'เธอทำงานที่สถาบันวิจัยทางการแพทย์' },
              { s: 'This ___ trains some of the best engineers in the country.', sTh: 'สถาบันนี้ฝึกฝนวิศวกรที่ดีที่สุดบางคนของประเทศ' }
            ] },
          { w: 'peer', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'คนรุ่นเดียวกัน/เพื่อนร่วมระดับ',
            sentence: 'Students often learn well from their ___s.', sentenceTh: 'นักเรียนมักเรียนรู้ได้ดีจากคนรุ่นเดียวกัน',
            collocations: ['peer pressure', 'peer review'],
            quizBank: [
              { s: 'He felt ___ pressure to join the same club as his friends.', sTh: 'เขารู้สึกถูกกดดันจากคนรุ่นเดียวกันให้เข้าร่วมชมรมเดียวกับเพื่อน' },
              { s: 'This research paper went through ___ review before publishing.', sTh: 'งานวิจัยนี้ผ่านการตรวจสอบโดยผู้เชี่ยวชาญระดับเดียวกันก่อนตีพิมพ์' },
              { s: 'Working with your ___s can make studying more enjoyable.', sTh: 'การทำงานกับคนรุ่นเดียวกันทำให้การเรียนสนุกขึ้น' }
            ] },
          { w: 'evaluate', pos: 'v.', level: 'B2', source: 'Oxford 3000', th: 'ประเมิน',
            sentence: 'Teachers ___ student progress at the end of each term.', sentenceTh: 'ครูประเมินความก้าวหน้าของนักเรียนในช่วงปลายเทอม',
            collocations: ['evaluate performance', 'carefully evaluate'],
            quizBank: [
              { s: 'The committee will ___ each application carefully.', sTh: 'คณะกรรมการจะประเมินใบสมัครแต่ละใบอย่างละเอียด' },
              { s: 'It is important to ___ your own strengths and weaknesses.', sTh: 'สำคัญที่ต้องประเมินจุดแข็งและจุดอ่อนของตัวเอง' },
              { s: 'The professor asked students to ___ their own essays first.', sTh: 'อาจารย์ขอให้นักเรียนประเมินงานเขียนของตัวเองก่อน' }
            ] },
          { w: 'faculty', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'คณะ (ในมหาวิทยาลัย)/คณาจารย์',
            sentence: 'She studies in the ___ of engineering.', sentenceTh: 'เธอเรียนในคณะวิศวกรรมศาสตร์',
            collocations: ['faculty of science', 'faculty members'],
            quizBank: [
              { s: 'Each ___ has its own building on campus.', sTh: 'ทุกคณะมีอาคารของตัวเองในมหาวิทยาลัย' },
              { s: 'The ___ of medicine is the most competitive to enter.', sTh: 'คณะแพทยศาสตร์เป็นคณะที่เข้ายากที่สุด' },
              { s: '___ members meet once a month to discuss the curriculum.', sTh: 'คณาจารย์ประชุมกันเดือนละครั้งเพื่อหารือเรื่องหลักสูตร' }
            ] }
        ]
      },
      {
        id: 'social-news-3', theme: 'Social News III', themeTh: 'ข่าวสังคม (เจาะลึก)',
        words: [
          { w: 'government', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'รัฐบาล',
            sentence: 'The ___ announced a new plan to support small businesses.', sentenceTh: 'รัฐบาลประกาศแผนใหม่เพื่อสนับสนุนธุรกิจขนาดเล็ก',
            collocations: ['the government announced', 'local government'],
            quizBank: [
              { s: 'The ___ is responsible for building new roads and schools.', sTh: 'รัฐบาลมีหน้าที่สร้างถนนและโรงเรียนใหม่' },
              { s: 'Many citizens criticized the ___ for raising taxes.', sTh: 'พลเมืองหลายคนวิจารณ์รัฐบาลที่ขึ้นภาษี' },
              { s: 'The local ___ held a meeting to discuss the new park.', sTh: 'รัฐบาลท้องถิ่นจัดประชุมเพื่อหารือเรื่องสวนสาธารณะใหม่' }
            ] },
          { w: 'issue', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'ประเด็น/ปัญหา',
            sentence: 'Housing is a major ___ in this city.', sentenceTh: 'ที่อยู่อาศัยเป็นประเด็นสำคัญในเมืองนี้',
            collocations: ['a serious issue', 'address an issue'],
            quizBank: [
              { s: 'The council discussed several ___s at the meeting.', sTh: 'สภาหารือหลายประเด็นในการประชุม' },
              { s: 'This is a difficult ___ with no easy solution.', sTh: 'นี่เป็นประเด็นที่ยากและไม่มีทางแก้ที่ง่าย' },
              { s: 'The government plans to ___ a new policy next month.', sTh: 'รัฐบาลวางแผนออกนโยบายใหม่เดือนหน้า' }
            ] },
          { w: 'represent', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'เป็นตัวแทน',
            sentence: 'She was chosen to ___ her country at the conference.', sentenceTh: 'เธอถูกเลือกให้เป็นตัวแทนประเทศในการประชุม',
            collocations: ['represent a group', 'represent the public'],
            quizBank: [
              { s: 'This group ___s the interests of local farmers.', sTh: 'กลุ่มนี้เป็นตัวแทนผลประโยชน์ของเกษตรกรท้องถิ่น' },
              { s: 'Elected officials should ___ all citizens fairly.', sTh: 'ผู้ที่ได้รับเลือกตั้งควรเป็นตัวแทนพลเมืองทุกคนอย่างเป็นธรรม' },
              { s: 'He will ___ the students in the next meeting.', sTh: 'เขาจะเป็นตัวแทนนักเรียนในการประชุมครั้งถัดไป' }
            ] },
          { w: 'authority', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'อำนาจ/หน่วยงานรัฐ',
            sentence: 'The city ___ decided to close the old bridge.', sentenceTh: 'หน่วยงานรัฐของเมืองตัดสินใจปิดสะพานเก่า',
            collocations: ['local authority', 'have the authority'],
            quizBank: [
              { s: 'Only the ___ can give permission for this event.', sTh: 'มีเพียงหน่วยงานรัฐเท่านั้นที่ให้อนุญาตสำหรับงานนี้ได้' },
              { s: 'The local ___ is responsible for public transport.', sTh: 'หน่วยงานรัฐท้องถิ่นมีหน้าที่ดูแลระบบขนส่งสาธารณะ' },
              { s: 'She does not have the ___ to make that decision alone.', sTh: 'เธอไม่มีอำนาจที่จะตัดสินใจเรื่องนั้นเพียงคนเดียว' }
            ] },
          { w: 'responsible', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'รับผิดชอบ',
            sentence: 'The council is ___ for keeping the streets clean.', sentenceTh: 'สภามีหน้าที่รับผิดชอบดูแลให้ถนนสะอาด',
            collocations: ['responsible for', 'socially responsible'],
            quizBank: [
              { s: 'Who is ___ for fixing this broken streetlight?', sTh: 'ใครรับผิดชอบซ่อมไฟถนนที่เสียนี้' },
              { s: 'Companies should be ___ for the waste they produce.', sTh: 'บริษัทควรรับผิดชอบต่อขยะที่พวกเขาสร้างขึ้น' },
              { s: 'She felt ___ for the whole team\'s success.', sTh: 'เธอรู้สึกรับผิดชอบต่อความสำเร็จของทั้งทีม' }
            ] },
          { w: 'equal', pos: 'adj., v.', level: 'B1', source: 'Oxford 3000', th: 'เท่าเทียมกัน',
            sentence: 'Everyone should have ___ access to education.', sentenceTh: 'ทุกคนควรมีสิทธิเข้าถึงการศึกษาอย่างเท่าเทียมกัน',
            collocations: ['equal rights', 'equal opportunity'],
            quizBank: [
              { s: 'The law says men and women deserve ___ pay for the same job.', sTh: 'กฎหมายกล่าวว่าชายและหญิงควรได้รับค่าจ้างเท่าเทียมกันสำหรับงานเดียวกัน' },
              { s: 'All students were given an ___ chance to compete.', sTh: 'นักเรียนทุกคนได้รับโอกาสที่เท่าเทียมกันในการแข่งขัน' },
              { s: 'Two plus two ___s four.', sTh: 'สองบวกสองเท่ากับสี่' }
            ] },
          { w: 'refugee', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'ผู้ลี้ภัย',
            sentence: 'The camp provides shelter for thousands of ___s.', sentenceTh: 'ค่ายแห่งนี้ให้ที่พักพิงแก่ผู้ลี้ภัยหลายพันคน',
            collocations: ['a refugee camp', 'refugee family'],
            quizBank: [
              { s: 'Many ___s fled their country because of the war.', sTh: 'ผู้ลี้ภัยหลายคนหนีออกจากประเทศเพราะสงคราม' },
              { s: 'Volunteers help ___ families find housing and jobs.', sTh: 'อาสาสมัครช่วยครอบครัวผู้ลี้ภัยหาที่อยู่และงาน' },
              { s: 'The ___ crisis has affected several neighboring countries.', sTh: 'วิกฤตผู้ลี้ภัยส่งผลกระทบต่อประเทศใกล้เคียงหลายประเทศ' }
            ] },
          { w: 'debate', pos: 'n., v.', level: 'B2', source: 'Oxford 3000', th: 'การโต้วาที/ถกเถียง',
            sentence: 'The topic caused a heated ___ among the students.', sentenceTh: 'หัวข้อนี้ทำให้เกิดการถกเถียงอย่างดุเดือดในหมู่นักเรียน',
            collocations: ['a public debate', 'debate an issue'],
            quizBank: [
              { s: 'Politicians will ___ the new tax plan next week.', sTh: 'นักการเมืองจะถกเถียงแผนภาษีใหม่สัปดาห์หน้า' },
              { s: 'The ___ lasted for almost two hours.', sTh: 'การโต้วาทีดำเนินไปเกือบสองชั่วโมง' },
              { s: 'There is an ongoing ___ about the best way to reduce traffic.', sTh: 'มีการถกเถียงกันอย่างต่อเนื่องเรื่องวิธีที่ดีที่สุดในการลดการจราจร' }
            ] },
          { w: 'crisis', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'วิกฤต',
            sentence: 'The country is facing an economic ___.', sentenceTh: 'ประเทศกำลังเผชิญวิกฤตเศรษฐกิจ',
            collocations: ['a financial crisis', 'in crisis'],
            quizBank: [
              { s: 'The housing ___ has made it hard for young people to buy homes.', sTh: 'วิกฤตที่อยู่อาศัยทำให้คนหนุ่มสาวซื้อบ้านได้ยาก' },
              { s: 'Leaders met urgently to deal with the ___.', sTh: 'ผู้นำประชุมกันอย่างเร่งด่วนเพื่อจัดการกับวิกฤต' },
              { s: 'The ___ left many families without enough money for food.', sTh: 'วิกฤตนี้ทำให้หลายครอบครัวไม่มีเงินพอซื้ออาหาร' }
            ] },
          { w: 'equality', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'ความเท่าเทียม',
            sentence: 'The organization fights for gender ___ in the workplace.', sentenceTh: 'องค์กรนี้ต่อสู้เพื่อความเท่าเทียมทางเพศในที่ทำงาน',
            collocations: ['gender equality', 'fight for equality'],
            quizBank: [
              { s: 'True ___ means equal pay and equal opportunity for everyone.', sTh: 'ความเท่าเทียมที่แท้จริงหมายถึงค่าจ้างและโอกาสที่เท่ากันสำหรับทุกคน' },
              { s: 'The new law aims to promote racial ___.', sTh: 'กฎหมายใหม่มีเป้าหมายส่งเสริมความเท่าเทียมทางเชื้อชาติ' },
              { s: 'Decades of effort have improved ___ in many countries.', sTh: 'ความพยายามหลายสิบปีช่วยให้ความเท่าเทียมในหลายประเทศดีขึ้น' }
            ] }
        ]
      },
      {
        id: 'environment-3', theme: 'Environment III', themeTh: 'สิ่งแวดล้อม (เจาะลึก)',
        words: [
          { w: 'nature', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'ธรรมชาติ',
            sentence: 'Spending time in ___ can reduce stress.', sentenceTh: 'การใช้เวลาอยู่กับธรรมชาติช่วยลดความเครียดได้',
            collocations: ['protect nature', 'love of nature'],
            quizBank: [
              { s: 'The documentary shows the beauty of ___ in the mountains.', sTh: 'สารคดีนี้แสดงความสวยงามของธรรมชาติในภูเขา' },
              { s: 'Many city parks try to bring people closer to ___.', sTh: 'สวนสาธารณะในเมืองหลายแห่งพยายามให้คนใกล้ชิดธรรมชาติมากขึ้น' },
              { s: 'He has always had a deep respect for ___.', sTh: 'เขามีความเคารพธรรมชาติอย่างลึกซึ้งมาตลอด' }
            ] },
          { w: 'survive', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'อยู่รอด',
            sentence: 'These plants can ___ in very dry conditions.', sentenceTh: 'พืชเหล่านี้สามารถอยู่รอดได้ในสภาพแห้งมาก',
            collocations: ['survive the winter', 'barely survive'],
            quizBank: [
              { s: 'Few animals can ___ in such extreme cold.', sTh: 'สัตว์มีน้อยชนิดที่อยู่รอดได้ในความหนาวจัดเช่นนี้' },
              { s: 'The fish could not ___ in the polluted water.', sTh: 'ปลาไม่สามารถอยู่รอดในน้ำที่มีมลพิษ' },
              { s: 'Without rain, the crops will not ___ this season.', sTh: 'ถ้าไม่มีฝน พืชผลจะไม่รอดในฤดูนี้' }
            ] },
          { w: 'environmental', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'ด้านสิ่งแวดล้อม',
            sentence: 'The factory was fined for breaking ___ laws.', sentenceTh: 'โรงงานถูกปรับเพราะทำผิดกฎหมายด้านสิ่งแวดล้อม',
            collocations: ['environmental protection', 'environmental damage'],
            quizBank: [
              { s: 'The group campaigns for stronger ___ protection.', sTh: 'กลุ่มนี้รณรงค์เพื่อการปกป้องสิ่งแวดล้อมที่เข้มแข็งขึ้น' },
              { s: 'Many companies now have an ___ policy.', sTh: 'บริษัทหลายแห่งตอนนี้มีนโยบายด้านสิ่งแวดล้อม' },
              { s: 'Scientists warned about the ___ risks of the new mine.', sTh: 'นักวิทยาศาสตร์เตือนเรื่องความเสี่ยงด้านสิ่งแวดล้อมของเหมืองใหม่' }
            ] },
          { w: 'pressure', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ความดัน/แรงกดดัน',
            sentence: 'Fishing has put a lot of ___ on ocean life.', sentenceTh: 'การจับปลาสร้างแรงกดดันอย่างมากต่อสิ่งมีชีวิตในทะเล',
            collocations: ['under pressure', 'put pressure on'],
            quizBank: [
              { s: 'Growing cities put ___ on local water supplies.', sTh: 'เมืองที่เติบโตขึ้นสร้างแรงกดดันต่อแหล่งน้ำในท้องถิ่น' },
              { s: 'Air ___ changes quickly at high altitudes.', sTh: 'ความดันอากาศเปลี่ยนแปลงอย่างรวดเร็วที่ความสูงมาก' },
              { s: 'Public ___ forced the company to change its plan.', sTh: 'แรงกดดันจากสาธารณะทำให้บริษัทต้องเปลี่ยนแผน' }
            ] },
          { w: 'balance', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'ความสมดุล/ทำให้สมดุล',
            sentence: 'We need to ___ economic growth with protecting the environment.', sentenceTh: 'เราต้องสร้างความสมดุลระหว่างการเติบโตทางเศรษฐกิจกับการปกป้องสิ่งแวดล้อม',
            collocations: ['a natural balance', 'balance out'],
            quizBank: [
              { s: 'Removing one species can upset the ___ of the whole ecosystem.', sTh: 'การกำจัดสิ่งมีชีวิตหนึ่งชนิดสามารถทำให้ความสมดุลของระบบนิเวศทั้งหมดเสียไป' },
              { s: 'The city tries to ___ development with green spaces.', sTh: 'เมืองพยายามสร้างความสมดุลระหว่างการพัฒนากับพื้นที่สีเขียว' },
              { s: 'Nature usually finds its own ___ over time.', sTh: 'ธรรมชาติมักจะหาความสมดุลของตัวเองได้เมื่อเวลาผ่านไป' }
            ] },
          { w: 'risk', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'ความเสี่ยง/เสี่ยง',
            sentence: 'Rising sea levels put coastal towns at ___.', sentenceTh: 'ระดับน้ำทะเลที่สูงขึ้นทำให้เมืองชายฝั่งตกอยู่ในความเสี่ยง',
            collocations: ['at risk', 'risk extinction'],
            quizBank: [
              { s: 'Without protection, this species could ___ extinction.', sTh: 'หากไม่มีการปกป้อง สิ่งมีชีวิตชนิดนี้อาจเสี่ยงต่อการสูญพันธุ์' },
              { s: 'Scientists say the ___ of flooding is increasing every year.', sTh: 'นักวิทยาศาสตร์กล่าวว่าความเสี่ยงน้ำท่วมเพิ่มขึ้นทุกปี' },
              { s: 'Many old buildings are at ___ from stronger storms.', sTh: 'อาคารเก่าหลายแห่งตกอยู่ในความเสี่ยงจากพายุที่รุนแรงขึ้น' }
            ] },
          { w: 'habitat', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'ถิ่นที่อยู่อาศัย',
            sentence: 'Cutting down forests destroys the ___ of many animals.', sentenceTh: 'การตัดไม้ทำลายป่าทำลายถิ่นที่อยู่ของสัตว์หลายชนิด',
            collocations: ['natural habitat', 'destroy a habitat'],
            quizBank: [
              { s: 'This bird\'s natural ___ is disappearing quickly.', sTh: 'ถิ่นที่อยู่ตามธรรมชาติของนกชนิดนี้กำลังหายไปอย่างรวดเร็ว' },
              { s: 'The park was created to protect the local ___.', sTh: 'อุทยานนี้สร้างขึ้นเพื่อปกป้องถิ่นที่อยู่ในท้องถิ่น' },
              { s: 'Many sea creatures depend on coral reefs as their ___.', sTh: 'สิ่งมีชีวิตในทะเลหลายชนิดพึ่งพาแนวปะการังเป็นถิ่นที่อยู่' }
            ] },
          { w: 'creature', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'สิ่งมีชีวิต',
            sentence: 'Deep-sea ___s can survive extreme pressure.', sentenceTh: 'สิ่งมีชีวิตใต้ทะเลลึกสามารถทนความดันอันรุนแรงได้',
            collocations: ['a living creature', 'wild creature'],
            quizBank: [
              { s: 'Scientists found a strange new ___ in the rainforest.', sTh: 'นักวิทยาศาสตร์พบสิ่งมีชีวิตแปลกใหม่ในป่าดิบชื้น' },
              { s: 'Every ___ in this ecosystem plays an important role.', sTh: 'สิ่งมีชีวิตทุกชนิดในระบบนิเวศนี้มีบทบาทสำคัญ' },
              { s: 'The documentary follows a tiny ___ that lives underground.', sTh: 'สารคดีติดตามสิ่งมีชีวิตขนาดเล็กที่อาศัยอยู่ใต้ดิน' }
            ] },
          { w: 'drought', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'ภัยแห้ง',
            sentence: 'The region suffered its worst ___ in decades.', sentenceTh: 'ภูมิภาคนี้เผชิญภัยแห้งที่รุนแรงที่สุดในหลายสิบปี',
            collocations: ['a severe drought', 'drought conditions'],
            quizBank: [
              { s: 'Farmers lost most of their crops because of the ___.', sTh: 'เกษตรกรเสียผลผลิตส่วนใหญ่เพราะภัยแห้ง' },
              { s: 'The long ___ caused water shortages across the country.', sTh: 'ภัยแห้งที่ยืดเยื้อทำให้ขาดแคลนน้ำทั่วประเทศ' },
              { s: 'Scientists linked the ___ to changing rainfall patterns.', sTh: 'นักวิทยาศาสตร์เชื่อมโยงภัยแห้งกับรูปแบบฝนที่เปลี่ยนไป' }
            ] },
          { w: 'toxic', pos: 'adj.', level: 'C1', source: 'Oxford 5000', th: 'เป็นพิษ',
            sentence: 'The factory was leaking ___ chemicals into the river.', sentenceTh: 'โรงงานปล่อยสารเคมีเป็นพิษลงแม่น้ำ',
            collocations: ['toxic waste', 'highly toxic'],
            quizBank: [
              { s: 'These fumes are ___ and should not be inhaled.', sTh: 'ไอควันนี้เป็นพิษและไม่ควรสูดดม' },
              { s: '___ waste from the mine polluted the nearby soil.', sTh: 'ขยะพิษจากเหมืองทำให้ดินใกล้เคียงปนเปื้อน' },
              { s: 'Some household cleaning products contain ___ substances.', sTh: 'ผลิตภัณฑ์ทำความสะอาดบ้านบางชนิดมีสารพิษ' }
            ] }
        ]
      },
      {
        id: 'science-3', theme: 'Science III', themeTh: 'วิทยาศาสตร์ (เจาะลึก)',
        words: [
          { w: 'data', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'ข้อมูล',
            sentence: 'The team collected ___ from over a thousand participants.', sentenceTh: 'ทีมงานเก็บข้อมูลจากผู้เข้าร่วมกว่าพันคน',
            collocations: ['collect data', 'analyze data'],
            quizBank: [
              { s: 'This chart shows ___ from the last five years.', sTh: 'แผนภูมินี้แสดงข้อมูลจากห้าปีที่ผ่านมา' },
              { s: 'Researchers use ___ to support their conclusions.', sTh: 'นักวิจัยใช้ข้อมูลเพื่อสนับสนุนข้อสรุปของพวกเขา' },
              { s: 'The ___ was stored safely on a secure computer.', sTh: 'ข้อมูลถูกเก็บไว้อย่างปลอดภัยในคอมพิวเตอร์ที่มีระบบรักษาความปลอดภัย' }
            ] },
          { w: 'prove', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'พิสูจน์',
            sentence: 'The experiment helped ___ the scientist\'s idea.', sentenceTh: 'การทดลองช่วยพิสูจน์แนวคิดของนักวิทยาศาสตร์',
            collocations: ['prove a theory', 'prove wrong'],
            quizBank: [
              { s: 'It took years of research to finally ___ the theory.', sTh: 'ใช้เวลาวิจัยหลายปีกว่าจะพิสูจน์ทฤษฎีได้สำเร็จ' },
              { s: 'The new data seems to ___ the earlier results wrong.', sTh: 'ข้อมูลใหม่ดูเหมือนจะพิสูจน์ว่าผลลัพธ์ก่อนหน้าผิด' },
              { s: 'Can you ___ that this method actually works?', sTh: 'คุณพิสูจน์ได้ไหมว่าวิธีนี้ได้ผลจริง' }
            ] },
          { w: 'conclusion', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ข้อสรุป',
            sentence: 'The researchers reached an interesting ___.', sentenceTh: 'นักวิจัยได้ข้อสรุปที่น่าสนใจ',
            collocations: ['draw a conclusion', 'reach a conclusion'],
            quizBank: [
              { s: 'Her ___ was based on three separate experiments.', sTh: 'ข้อสรุปของเธออ้างอิงจากการทดลองสามครั้งที่แยกกัน' },
              { s: 'Do not jump to a ___ before seeing all the evidence.', sTh: 'อย่าสรุปก่อนที่จะเห็นหลักฐานทั้งหมด' },
              { s: 'The study\'s ___ surprised many scientists.', sTh: 'ข้อสรุปของงานวิจัยนี้ทำให้นักวิทยาศาสตร์หลายคนประหลาดใจ' }
            ] },
          { w: 'function', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'หน้าที่/ทำงาน',
            sentence: 'What is the main ___ of this part of the cell?', sentenceTh: 'ส่วนของเซลล์นี้มีหน้าที่หลักอะไร',
            collocations: ['serve a function', 'function properly'],
            quizBank: [
              { s: 'The machine stopped working because this part did not ___ correctly.', sTh: 'เครื่องจักรหยุดทำงานเพราะชิ้นส่วนนี้ทำงานไม่ถูกต้อง' },
              { s: 'Each organ in the body has its own ___.', sTh: 'อวัยวะแต่ละส่วนในร่างกายมีหน้าที่ของตัวเอง' },
              { s: 'Scientists are still studying the exact ___ of this gene.', sTh: 'นักวิทยาศาสตร์ยังคงศึกษาหน้าที่ที่แน่ชัดของยีนนี้' }
            ] },
          { w: 'comparison', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'การเปรียบเทียบ',
            sentence: 'The report made a ___ between the two methods.', sentenceTh: 'รายงานทำการเปรียบเทียบระหว่างสองวิธี',
            collocations: ['in comparison', 'make a comparison'],
            quizBank: [
              { s: 'In ___ to the old method, this one is much faster.', sTh: 'เมื่อเปรียบเทียบกับวิธีเดิม วิธีนี้เร็วกว่ามาก' },
              { s: 'The scientists made a ___ of results from different countries.', sTh: 'นักวิทยาศาสตร์ทำการเปรียบเทียบผลลัพธ์จากหลายประเทศ' },
              { s: 'There is no ___ between these two very different experiments.', sTh: 'ไม่มีการเปรียบเทียบระหว่างการทดลองที่แตกต่างกันมากสองครั้งนี้' }
            ] },
          { w: 'prediction', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'การคาดการณ์',
            sentence: 'The weather ___ for tomorrow says it will rain.', sentenceTh: 'การคาดการณ์สภาพอากาศพรุ่งนี้บอกว่าฝนจะตก',
            collocations: ['make a prediction', 'an accurate prediction'],
            quizBank: [
              { s: 'Her ___ about the test results turned out to be correct.', sTh: 'การคาดการณ์ของเธอเรื่องผลการทดสอบกลายเป็นว่าถูกต้อง' },
              { s: 'Scientists made a ___ based on years of climate data.', sTh: 'นักวิทยาศาสตร์คาดการณ์โดยอ้างอิงข้อมูลสภาพภูมิอากาศหลายปี' },
              { s: 'It is hard to make an accurate ___ this far in advance.', sTh: 'ยากที่จะคาดการณ์ได้อย่างแม่นยำล่วงหน้านานขนาดนี้' }
            ] },
          { w: 'accuracy', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'ความถูกต้องแม่นยำ',
            sentence: 'The new device measures temperature with great ___.', sentenceTh: 'อุปกรณ์ใหม่วัดอุณหภูมิได้อย่างแม่นยำมาก',
            collocations: ['measure with accuracy', 'improve accuracy'],
            quizBank: [
              { s: 'Scientists worked to improve the ___ of their predictions.', sTh: 'นักวิทยาศาสตร์พยายามปรับปรุงความแม่นยำของการพยากรณ์' },
              { s: 'The test results are checked twice for ___.', sTh: 'ผลการทดสอบถูกตรวจสอบสองครั้งเพื่อความแม่นยำ' },
              { s: 'This tool can predict the weather with surprising ___.', sTh: 'เครื่องมือนี้ทำนายสภาพอากาศได้แม่นยำอย่างน่าประหลาดใจ' }
            ] },
          { w: 'assumption', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'ข้อสมมติ',
            sentence: 'The whole experiment was based on a wrong ___.', sentenceTh: 'การทดลองทั้งหมดอิงจากข้อสมมติที่ผิด',
            collocations: ['a basic assumption', 'challenge an assumption'],
            quizBank: [
              { s: 'It is risky to make an ___ without checking the facts.', sTh: 'เป็นเรื่องเสี่ยงที่จะตั้งข้อสมมติโดยไม่ตรวจสอบข้อเท็จจริง' },
              { s: 'Scientists must state their ___s clearly in a report.', sTh: 'นักวิทยาศาสตร์ต้องระบุข้อสมมติของตนอย่างชัดเจนในรายงาน' },
              { s: 'Her research challenged a common ___ about memory.', sTh: 'งานวิจัยของเธอท้าทายข้อสมมติทั่วไปเกี่ยวกับความทรงจำ' }
            ] },
          { w: 'observation', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'การสังเกต',
            sentence: 'Careful ___ is the first step in any experiment.', sentenceTh: 'การสังเกตอย่างรอบคอบเป็นขั้นแรกในการทดลองทุกครั้ง',
            collocations: ['careful observation', 'make an observation'],
            quizBank: [
              { s: 'Based on her ___s, the plant needed more sunlight.', sTh: 'จากการสังเกตของเธอ พืชต้องการแสงแดดมากกว่านี้' },
              { s: 'The scientist recorded daily ___s of the animal\'s behavior.', sTh: 'นักวิทยาศาสตร์บันทึกการสังเกตพฤติกรรมสัตว์ทุกวัน' },
              { s: 'Simple ___ can sometimes lead to important discoveries.', sTh: 'การสังเกตอย่างง่ายๆ บางครั้งนำไปสู่การค้นพบที่สำคัญ' }
            ] },
          { w: 'variable', pos: 'n., adj.', level: 'C1', source: 'Oxford 5000', th: 'ตัวแปร',
            sentence: 'Temperature was the only ___ that changed in this experiment.', sentenceTh: 'อุณหภูมิเป็นตัวแปรเดียวที่เปลี่ยนแปลงในการทดลองนี้',
            collocations: ['control a variable', 'a key variable'],
            quizBank: [
              { s: 'Scientists try to control every ___ except one.', sTh: 'นักวิทยาศาสตร์พยายามควบคุมตัวแปรทุกตัวยกเว้นตัวเดียว' },
              { s: 'Weather can be a difficult ___ to predict accurately.', sTh: 'สภาพอากาศเป็นตัวแปรที่ทำนายได้ยากให้แม่นยำ' },
              { s: 'The study measured how the ___ of diet affected growth.', sTh: 'งานวิจัยนี้วัดว่าตัวแปรด้านอาหารส่งผลต่อการเจริญเติบโตอย่างไร' }
            ] }
        ]
      },
      {
        id: 'work-3', theme: 'Work III', themeTh: 'การทำงาน (เจาะลึก)',
        words: [
          { w: 'manager', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'ผู้จัดการ',
            sentence: 'The ___ called a meeting to discuss the new schedule.', sentenceTh: 'ผู้จัดการเรียกประชุมเพื่อหารือเรื่องตารางงานใหม่',
            collocations: ['a store manager', 'report to the manager'],
            quizBank: [
              { s: 'She was promoted to ___ after three years at the company.', sTh: 'เธอได้รับการเลื่อนตำแหน่งเป็นผู้จัดการหลังทำงานที่บริษัทสามปี' },
              { s: 'Please speak to the ___ if you have any complaints.', sTh: 'กรุณาพูดคุยกับผู้จัดการหากคุณมีข้อร้องเรียนใดๆ' },
              { s: 'The new ___ introduced several helpful changes.', sTh: 'ผู้จัดการคนใหม่นำการเปลี่ยนแปลงที่เป็นประโยชน์หลายอย่างมา' }
            ] },
          { w: 'ambition', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ความทะเยอทะยาน',
            sentence: 'Her biggest ___ is to start her own company one day.', sentenceTh: 'ความทะเยอทะยานที่ใหญ่ที่สุดของเธอคือการเริ่มบริษัทของตัวเองสักวันหนึ่ง',
            collocations: ['career ambition', 'achieve an ambition'],
            quizBank: [
              { s: 'He has always had the ___ to become a pilot.', sTh: 'เขามีความทะเยอทะยานที่จะเป็นนักบินมาตลอด' },
              { s: 'Her strong ___ pushed her to work extra hours.', sTh: 'ความทะเยอทะยานที่แรงกล้าของเธอผลักดันให้เธอทำงานล่วงเวลา' },
              { s: 'Finishing the marathon was a personal ___ for him.', sTh: 'การวิ่งมาราธอนจบเป็นความทะเยอทะยานส่วนตัวของเขา' }
            ] },
          { w: 'retire', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'เกษียณอายุ',
            sentence: 'My grandfather plans to ___ next year.', sentenceTh: 'ปู่ของฉันวางแผนจะเกษียณในปีหน้า',
            collocations: ['retire early', 'ready to retire'],
            quizBank: [
              { s: 'She worked at the same company for 30 years before she ___d.', sTh: 'เธอทำงานที่บริษัทเดียวกันมา 30 ปีก่อนจะเกษียณ' },
              { s: 'He hopes to ___ early and travel the world.', sTh: 'เขาหวังจะเกษียณก่อนกำหนดและไปเที่ยวรอบโลก' },
              { s: 'Many workers ___ around the age of sixty.', sTh: 'คนทำงานหลายคนเกษียณตอนอายุประมาณหกสิบ' }
            ] },
          { w: 'client', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ลูกค้า (ธุรกิจ/บริการ)',
            sentence: 'She has a meeting with an important ___ this afternoon.', sentenceTh: 'เธอมีประชุมกับลูกค้าคนสำคัญบ่ายนี้',
            collocations: ['a new client', 'client satisfaction'],
            quizBank: [
              { s: 'The lawyer explained the contract carefully to her ___.', sTh: 'ทนายอธิบายสัญญาอย่างละเอียดให้ลูกค้าของเธอ' },
              { s: 'We always try to respond to ___ emails within a day.', sTh: 'เราพยายามตอบอีเมลลูกค้าภายในหนึ่งวันเสมอ' },
              { s: 'The company lost a major ___ after the price increase.', sTh: 'บริษัทเสียลูกค้ารายใหญ่หลังจากขึ้นราคา' }
            ] },
          { w: 'aim', pos: 'v., n.', level: 'B1', source: 'Oxford 3000', th: 'มุ่งหมาย/เป้าหมาย',
            sentence: 'The company\'s main ___ is to improve customer service.', sentenceTh: 'เป้าหมายหลักของบริษัทคือการพัฒนาบริการลูกค้า',
            collocations: ['aim to', 'achieve an aim'],
            quizBank: [
              { s: 'We ___ to finish the project before the end of the month.', sTh: 'เรามุ่งหมายจะทำโครงการนี้ให้เสร็จก่อนสิ้นเดือน' },
              { s: 'Her ___ is to become a manager within five years.', sTh: 'เป้าหมายของเธอคือการเป็นผู้จัดการภายในห้าปี' },
              { s: 'The training program ___s to improve everyone\'s computer skills.', sTh: 'โครงการฝึกอบรมนี้มุ่งหมายพัฒนาทักษะคอมพิวเตอร์ของทุกคน' }
            ] },
          { w: 'staff', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'พนักงานทั้งหมด',
            sentence: 'All ___ must attend the safety training next week.', sentenceTh: 'พนักงานทุกคนต้องเข้าร่วมการฝึกอบรมความปลอดภัยสัปดาห์หน้า',
            collocations: ['hire staff', 'support staff'],
            quizBank: [
              { s: 'The restaurant needs more ___ during the holiday season.', sTh: 'ร้านอาหารต้องการพนักงานเพิ่มช่วงฤดูท่องเที่ยว' },
              { s: 'The company offers its ___ free health insurance.', sTh: 'บริษัทมอบประกันสุขภาพให้พนักงานฟรี' },
              { s: 'Some ___ members have worked here for over ten years.', sTh: 'พนักงานบางคนทำงานที่นี่มากว่าสิบปีแล้ว' }
            ] },
          { w: 'flexible', pos: 'adj.', level: 'B2', source: 'Oxford 3000', th: 'มีความยืดหยุ่น',
            sentence: 'This company offers ___ working hours.', sentenceTh: 'บริษัทนี้มีเวลาทำงานที่ยืดหยุ่น',
            collocations: ['flexible hours', 'a flexible schedule'],
            quizBank: [
              { s: 'She prefers a job with a ___ schedule so she can care for her kids.', sTh: 'เธอชอบงานที่มีตารางยืดหยุ่นเพื่อดูแลลูกได้' },
              { s: 'The manager was ___ about letting staff work from home.', sTh: 'ผู้จัดการมีความยืดหยุ่นเรื่องให้พนักงานทำงานจากบ้าน' },
              { s: 'A ___ plan allows the team to adjust quickly to changes.', sTh: 'แผนที่ยืดหยุ่นช่วยให้ทีมปรับตัวตามการเปลี่ยนแปลงได้เร็ว' }
            ] },
          { w: 'sector', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'ภาคส่วน (ของเศรษฐกิจ)',
            sentence: 'The tourism ___ was badly affected by the crisis.', sentenceTh: 'ภาคส่วนการท่องเที่ยวได้รับผลกระทบอย่างหนักจากวิกฤต',
            collocations: ['public sector', 'private sector'],
            quizBank: [
              { s: 'Many jobs in the technology ___ allow remote work.', sTh: 'งานหลายตำแหน่งในภาคส่วนเทคโนโลยีอนุญาตให้ทำงานทางไกลได้' },
              { s: 'The government ___ employs thousands of people in this city.', sTh: 'ภาคส่วนรัฐบาลจ้างงานคนหลายพันคนในเมืองนี้' },
              { s: 'Growth in the private ___ helped the economy recover.', sTh: 'การเติบโตในภาคส่วนเอกชนช่วยให้เศรษฐกิจฟื้นตัว' }
            ] },
          { w: 'expertise', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'ความเชี่ยวชาญ',
            sentence: 'The company hired her for her ___ in marketing.', sentenceTh: 'บริษัทจ้างเธอเพราะความเชี่ยวชาญด้านการตลาด',
            collocations: ['technical expertise', 'share expertise'],
            quizBank: [
              { s: 'His ___ in data analysis made him the best person for this project.', sTh: 'ความเชี่ยวชาญด้านการวิเคราะห์ข้อมูลทำให้เขาเหมาะกับโครงการนี้ที่สุด' },
              { s: 'The team relies on her ___ to solve technical problems.', sTh: 'ทีมพึ่งพาความเชี่ยวชาญของเธอในการแก้ปัญหาทางเทคนิค' },
              { s: 'Years of ___ allowed him to work quickly and confidently.', sTh: 'ความเชี่ยวชาญที่สั่งสมมาหลายปีทำให้เขาทำงานได้เร็วและมั่นใจ' }
            ] },
          { w: 'flexibility', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'ความยืดหยุ่น (เชิงนามธรรม)',
            sentence: 'Working from home gives employees more ___.', sentenceTh: 'การทำงานจากบ้านให้ความยืดหยุ่นแก่พนักงานมากขึ้น',
            collocations: ['offer flexibility', 'financial flexibility'],
            quizBank: [
              { s: 'The new policy was praised for its ___.', sTh: 'นโยบายใหม่ได้รับการยกย่องในด้านความยืดหยุ่น' },
              { s: 'Freelancing offers more ___ but less financial security.', sTh: 'งานฟรีแลนซ์ให้ความยืดหยุ่นมากขึ้นแต่ความมั่นคงทางการเงินน้อยกว่า' },
              { s: 'Companies need ___ to survive sudden changes in the market.', sTh: 'บริษัทต้องมีความยืดหยุ่นเพื่ออยู่รอดจากการเปลี่ยนแปลงตลาดอย่างกะทันหัน' }
            ] }
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
