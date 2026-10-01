/* คลังคำศัพท์ "เตรียมสอบ" ทริปที่ 2 — อิง Oxford 3000 (A1–B2) และ Oxford 5000 (C1) เป็นแหล่งอ้างอิงระดับ
   ที่มา: oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/
          The_Oxford_3000_by_CEFR_level.pdf และ The_Oxford_5000_by_CEFR_level.pdf (ดึงและตรวจสอบระดับคำทุกคำจริง)
   ดูนโยบายสัดส่วน/โครงสร้างข้อมูลเต็มที่ examvocab-trip-01.js — ทริปนี้ใช้กฎเดียวกันทุกข้อ (50 คำใหม่ ไม่ซ้ำกับทริป 1) */
(function (root) {
  var EP = root.EP = root.EP || {};
  EP.examVocab = EP.examVocab || { trips: [] };
  EP.examVocab.trips.push({
    id: 'trip-02',
    name: 'เดินหน้าต่อ: เรื่องรอบตัวในมหาวิทยาลัย',
    sets: [
      {
        id: 'university-life-2', theme: 'University Life II', themeTh: 'ชีวิตมหาวิทยาลัย (ต่อ)',
        words: [
          { w: 'course', pos: 'n.', level: 'A1', source: 'Oxford 3000', th: 'วิชา/หลักสูตรที่เรียน',
            sentence: 'She is taking a ___ in computer science this semester.', sentenceTh: 'เธอกำลังเรียนวิชาด้านวิทยาการคอมพิวเตอร์ในเทอมนี้',
            collocations: ['take a course', 'online course'],
            quizBank: [
              { s: 'This ___ covers both theory and practical skills.', sTh: 'วิชานี้ครอบคลุมทั้งทฤษฎีและทักษะปฏิบัติ' },
              { s: 'He signed up for an online ___ about marketing.', sTh: 'เขาลงทะเบียนเรียนวิชาออนไลน์เรื่องการตลาด' },
              { s: 'The ___ is very popular, so it fills up fast.', sTh: 'วิชานี้เป็นที่นิยมมาก จึงเต็มเร็ว' }
            ] },
          { w: 'grade', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'เกรด/ให้คะแนน',
            sentence: 'He got a good ___ on his final exam.', sentenceTh: 'เขาได้เกรดดีในการสอบปลายภาค',
            collocations: ['get a good grade', 'grade a test'],
            quizBank: [
              { s: 'Teachers usually ___ assignments within two weeks.', sTh: 'ครูมักให้คะแนนงานที่มอบหมายภายในสองสัปดาห์' },
              { s: 'Her ___s improved a lot after she got a tutor.', sTh: 'เกรดของเธอดีขึ้นมากหลังจากมีติวเตอร์' },
              { s: 'A low ___ in this subject can affect your scholarship.', sTh: 'เกรดต่ำในวิชานี้อาจส่งผลต่อทุนการศึกษาของคุณ' }
            ] },
          { w: 'presentation', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'การนำเสนอ',
            sentence: 'Each student must give a ___ in front of the class.', sentenceTh: 'นักเรียนทุกคนต้องนำเสนอหน้าชั้นเรียน',
            collocations: ['give a presentation', 'prepare a presentation'],
            quizBank: [
              { s: 'Her ___ about climate change was very clear.', sTh: 'การนำเสนอของเธอเรื่องการเปลี่ยนแปลงสภาพภูมิอากาศชัดเจนมาก' },
              { s: 'I am still working on my slides for the ___.', sTh: 'ฉันยังทำสไลด์สำหรับการนำเสนออยู่' },
              { s: 'The teacher gave feedback after each ___.', sTh: 'ครูให้ข้อเสนอแนะหลังการนำเสนอแต่ละครั้ง' }
            ] },
          { w: 'qualified', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'มีคุณสมบัติ/จบการศึกษาพร้อมทำงาน',
            sentence: 'She is fully ___ to teach high school science.', sentenceTh: 'เธอมีคุณสมบัติครบที่จะสอนวิทยาศาสตร์ระดับมัธยม',
            collocations: ['highly qualified', 'become qualified'],
            quizBank: [
              { s: 'He became a ___ doctor after many years of study.', sTh: 'เขาเป็นหมอที่มีคุณสมบัติครบหลังเรียนมาหลายปี' },
              { s: 'The company only hires ___ engineers.', sTh: 'บริษัทรับเฉพาะวิศวกรที่มีคุณสมบัติครบ' },
              { s: 'She is well ___ for this teaching position.', sTh: 'เธอมีคุณสมบัติเหมาะสมดีกับตำแหน่งครูนี้' }
            ] },
          { w: 'participate', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'เข้าร่วม',
            sentence: 'All students are encouraged to ___ in class discussions.', sentenceTh: 'นักเรียนทุกคนได้รับการสนับสนุนให้เข้าร่วมพูดคุยในชั้นเรียน',
            collocations: ['participate in', 'actively participate'],
            quizBank: [
              { s: 'Many students ___ in the university sports festival every year.', sTh: 'นักศึกษาหลายคนเข้าร่วมงานกีฬามหาวิทยาลัยทุกปี' },
              { s: 'She decided to ___ in the debate competition.', sTh: 'เธอตัดสินใจเข้าร่วมการแข่งขันโต้วาที' },
              { s: 'Everyone in the group should ___ equally.', sTh: 'ทุกคนในกลุ่มควรเข้าร่วมอย่างเท่าเทียมกัน' }
            ] },
          { w: 'exchange', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'การแลกเปลี่ยน',
            sentence: 'He spent a year on a student ___ program in France.', sentenceTh: 'เขาใช้เวลาหนึ่งปีในโครงการแลกเปลี่ยนนักศึกษาที่ฝรั่งเศส',
            collocations: ['exchange program', 'exchange ideas'],
            quizBank: [
              { s: 'Studying abroad through an ___ program changed her life.', sTh: 'การเรียนต่างประเทศผ่านโครงการแลกเปลี่ยนเปลี่ยนชีวิตเธอ' },
              { s: 'Students can ___ ideas freely during the workshop.', sTh: 'นักเรียนสามารถแลกเปลี่ยนความคิดกันได้อย่างเสรีในเวิร์กชอป' },
              { s: 'Our university has an ___ agreement with a school in Japan.', sTh: 'มหาวิทยาลัยของเรามีข้อตกลงแลกเปลี่ยนกับโรงเรียนในญี่ปุ่น' }
            ] },
          { w: 'minor', pos: 'adj., n.', level: 'B2', source: 'Oxford 3000', th: 'วิชาโท/เล็กน้อย',
            sentence: 'She is majoring in biology with a ___ in chemistry.', sentenceTh: 'เธอเรียนเอกชีววิทยาและเรียนโทเคมี',
            collocations: ['a minor in', 'a minor problem'],
            quizBank: [
              { s: 'He faced only a ___ problem with his schedule.', sTh: 'เขาเจอปัญหาเล็กน้อยเท่านั้นกับตารางเรียน' },
              { s: 'Choosing a ___ subject can broaden your skills.', sTh: 'การเลือกวิชาโทสามารถขยายทักษะของคุณได้' },
              { s: 'The damage to the building was ___.', sTh: 'ความเสียหายต่ออาคารมีเพียงเล็กน้อย' }
            ] },
          { w: 'seminar', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'การสัมมนา',
            sentence: 'The professor organized a ___ on modern literature.', sentenceTh: 'อาจารย์จัดสัมมนาเรื่องวรรณกรรมสมัยใหม่',
            collocations: ['attend a seminar', 'hold a seminar'],
            quizBank: [
              { s: 'I learned a lot from the career-planning ___ last week.', sTh: 'ฉันได้เรียนรู้มากมายจากการสัมมนาวางแผนอาชีพสัปดาห์ที่แล้ว' },
              { s: 'The ___ is open to all graduate students.', sTh: 'การสัมมนานี้เปิดให้นักศึกษาระดับบัณฑิตศึกษาทุกคน' },
              { s: 'Each ___ ends with a question-and-answer session.', sTh: 'การสัมมนาแต่ละครั้งจบด้วยช่วงถาม-ตอบ' }
            ] },
          { w: 'feedback', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'ข้อเสนอแนะ',
            sentence: 'The teacher gave useful ___ on my essay.', sentenceTh: 'ครูให้ข้อเสนอแนะที่มีประโยชน์เกี่ยวกับงานเขียนของฉัน',
            collocations: ['give feedback', 'positive feedback'],
            quizBank: [
              { s: 'Students appreciate detailed ___ on their work.', sTh: 'นักเรียนให้ความสำคัญกับข้อเสนอแนะที่ละเอียดในงานของพวกเขา' },
              { s: 'We ask customers for ___ after every service.', sTh: 'เราขอข้อเสนอแนะจากลูกค้าหลังการให้บริการทุกครั้ง' },
              { s: 'His ___ helped me improve my writing a lot.', sTh: 'ข้อเสนอแนะของเขาช่วยให้งานเขียนของฉันดีขึ้นมาก' }
            ] },
          { w: 'mentor', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'พี่เลี้ยง/ที่ปรึกษา',
            sentence: 'Her ___ guided her through the whole research project.', sentenceTh: 'พี่เลี้ยงของเธอชี้แนะเธอตลอดโครงการวิจัย',
            collocations: ['a good mentor', 'find a mentor'],
            quizBank: [
              { s: 'Every new student is assigned a ___ for the first year.', sTh: 'นักศึกษาใหม่ทุกคนจะได้รับพี่เลี้ยงในปีแรก' },
              { s: 'He became a ___ to younger employees at the company.', sTh: 'เขากลายเป็นพี่เลี้ยงให้พนักงานรุ่นน้องในบริษัท' },
              { s: 'Finding a good ___ can shape your whole career.', sTh: 'การได้พี่เลี้ยงที่ดีสามารถกำหนดทิศทางอาชีพทั้งหมดของคุณ' }
            ] }
        ]
      },
      {
        id: 'social-news-2', theme: 'Social News II', themeTh: 'ข่าวสังคม (ต่อ)',
        words: [
          { w: 'society', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'สังคม',
            sentence: 'Technology has changed ___ in many ways.', sentenceTh: 'เทคโนโลยีเปลี่ยนแปลงสังคมในหลายด้าน',
            collocations: ['modern society', 'benefit society'],
            quizBank: [
              { s: 'Every member of ___ has rights and responsibilities.', sTh: 'สมาชิกทุกคนในสังคมมีสิทธิและความรับผิดชอบ' },
              { s: 'This charity works to improve ___ as a whole.', sTh: 'องค์กรการกุศลนี้ทำงานเพื่อพัฒนาสังคมโดยรวม' },
              { s: 'In modern ___, many people work from home.', sTh: 'ในสังคมสมัยใหม่ หลายคนทำงานจากที่บ้าน' }
            ] },
          { w: 'vote', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'ลงคะแนนเสียง/คะแนนเสียง',
            sentence: 'Citizens over 18 have the right to ___.', sentenceTh: 'พลเมืองที่อายุเกิน 18 ปีมีสิทธิลงคะแนนเสียง',
            collocations: ['cast a vote', 'vote for'],
            quizBank: [
              { s: 'She decided to ___ for the candidate with the best plan.', sTh: 'เธอตัดสินใจลงคะแนนให้ผู้สมัครที่มีแผนดีที่สุด' },
              { s: 'The final ___ count will be announced tomorrow.', sTh: 'ผลการนับคะแนนเสียงครั้งสุดท้ายจะประกาศพรุ่งนี้' },
              { s: 'Many young people did not ___ in the last election.', sTh: 'คนหนุ่มสาวจำนวนมากไม่ได้ไปลงคะแนนเสียงในการเลือกตั้งครั้งที่แล้ว' }
            ] },
          { w: 'protest', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'การประท้วง/ประท้วง',
            sentence: 'Hundreds of people joined the ___ outside the city hall.', sentenceTh: 'คนหลายร้อยคนเข้าร่วมประท้วงนอกศาลาว่าการเมือง',
            collocations: ['stage a protest', 'protest against'],
            quizBank: [
              { s: 'Workers planned to ___ against the new rule.', sTh: 'คนงานวางแผนจะประท้วงกฎใหม่' },
              { s: 'The ___ remained peaceful throughout the day.', sTh: 'การประท้วงดำเนินไปอย่างสงบตลอดทั้งวัน' },
              { s: 'Students organized a ___ to demand cheaper textbooks.', sTh: 'นักเรียนจัดการประท้วงเพื่อเรียกร้องหนังสือเรียนที่ถูกลง' }
            ] },
          { w: 'volunteer', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'อาสาสมัคร/ทำงานอาสา',
            sentence: 'She works as a ___ at the animal shelter every weekend.', sentenceTh: 'เธอทำงานอาสาสมัครที่ศูนย์พักพิงสัตว์ทุกสุดสัปดาห์',
            collocations: ['volunteer work', 'volunteer to help'],
            quizBank: [
              { s: 'Many students ___ to help clean the beach.', sTh: 'นักเรียนหลายคนอาสาช่วยทำความสะอาดชายหาด' },
              { s: 'The hospital always needs more ___s.', sTh: 'โรงพยาบาลต้องการอาสาสมัครเพิ่มเสมอ' },
              { s: 'He decided to ___ during his summer break.', sTh: 'เขาตัดสินใจทำงานอาสาช่วงปิดเทอมฤดูร้อน' }
            ] },
          { w: 'campaign', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'การรณรงค์/หาเสียง',
            sentence: 'The ___ focused on improving public schools.', sentenceTh: 'การรณรงค์นี้เน้นเรื่องการพัฒนาโรงเรียนรัฐ',
            collocations: ['run a campaign', 'election campaign'],
            quizBank: [
              { s: 'The company launched a new ___ to promote recycling.', sTh: 'บริษัทเปิดตัวการรณรงค์ใหม่เพื่อส่งเสริมการรีไซเคิล' },
              { s: 'Her election ___ lasted almost six months.', sTh: 'การหาเสียงเลือกตั้งของเธอใช้เวลาเกือบหกเดือน' },
              { s: 'This health ___ reached millions of people online.', sTh: 'การรณรงค์ด้านสุขภาพนี้เข้าถึงคนหลายล้านคนทางออนไลน์' }
            ] },
          { w: 'donate', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'บริจาค',
            sentence: 'Many people ___ old clothes to the charity shop.', sentenceTh: 'หลายคนบริจาคเสื้อผ้าเก่าให้ร้านการกุศล',
            collocations: ['donate money', 'donate blood'],
            quizBank: [
              { s: 'He decided to ___ part of his salary every month.', sTh: 'เขาตัดสินใจบริจาคเงินส่วนหนึ่งจากเงินเดือนทุกเดือน' },
              { s: 'The company ___d food to families after the flood.', sTh: 'บริษัทบริจาคอาหารให้ครอบครัวหลังน้ำท่วม' },
              { s: 'You can ___ blood at this hospital every three months.', sTh: 'คุณสามารถบริจาคเลือดที่โรงพยาบาลนี้ได้ทุกสามเดือน' }
            ] },
          { w: 'justice', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'ความยุติธรรม',
            sentence: 'The family fought for years to get ___.', sentenceTh: 'ครอบครัวนี้ต่อสู้มาหลายปีเพื่อให้ได้รับความยุติธรรม',
            collocations: ['social justice', 'bring to justice'],
            quizBank: [
              { s: 'Many protesters are calling for social ___.', sTh: 'ผู้ประท้วงจำนวนมากเรียกร้องความยุติธรรมทางสังคม' },
              { s: 'The court promised to deliver ___ fairly.', sTh: 'ศาลสัญญาว่าจะให้ความยุติธรรมอย่างเป็นธรรม' },
              { s: 'It took many years before ___ was finally served.', sTh: 'ใช้เวลาหลายปีกว่าความยุติธรรมจะเกิดขึ้นในที่สุด' }
            ] },
          { w: 'minority', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'กลุ่มคนส่วนน้อย',
            sentence: 'The policy was designed to protect ___ groups.', sentenceTh: 'นโยบายนี้ถูกออกแบบมาเพื่อปกป้องกลุ่มคนส่วนน้อย',
            collocations: ['ethnic minority', 'a small minority'],
            quizBank: [
              { s: 'Only a small ___ disagreed with the new plan.', sTh: 'มีเพียงคนส่วนน้อยที่ไม่เห็นด้วยกับแผนใหม่' },
              { s: 'The organization supports ethnic ___ communities.', sTh: 'องค์กรนี้สนับสนุนชุมชนกลุ่มชาติพันธุ์ส่วนน้อย' },
              { s: '___ languages are at risk of disappearing.', sTh: 'ภาษาของกลุ่มคนส่วนน้อยเสี่ยงต่อการสูญหาย' }
            ] },
          { w: 'awareness', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'ความตระหนักรู้',
            sentence: 'The event aims to raise ___ about mental health.', sentenceTh: 'กิจกรรมนี้มีเป้าหมายสร้างความตระหนักรู้เรื่องสุขภาพจิต',
            collocations: ['raise awareness', 'public awareness'],
            quizBank: [
              { s: 'Public ___ of the issue has grown in recent years.', sTh: 'ความตระหนักรู้ของสาธารณชนต่อประเด็นนี้เพิ่มขึ้นในช่วงไม่กี่ปีที่ผ่านมา' },
              { s: 'Schools are teaching more about environmental ___.', sTh: 'โรงเรียนสอนเรื่องความตระหนักรู้ด้านสิ่งแวดล้อมมากขึ้น' },
              { s: 'The campaign successfully raised ___ among young people.', sTh: 'การรณรงค์นี้สร้างความตระหนักรู้ในกลุ่มคนหนุ่มสาวได้สำเร็จ' }
            ] },
          { w: 'activist', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'นักกิจกรรม/นักเคลื่อนไหว',
            sentence: 'The young ___ gave a powerful speech about climate change.', sentenceTh: 'นักเคลื่อนไหวหนุ่มสาวกล่าวสุนทรพจน์ที่ทรงพลังเรื่องการเปลี่ยนแปลงสภาพภูมิอากาศ',
            collocations: ['human rights activist', 'environmental activist'],
            quizBank: [
              { s: 'Several ___s were arrested during the demonstration.', sTh: 'นักเคลื่อนไหวหลายคนถูกจับกุมในระหว่างการเดินขบวน' },
              { s: 'She has worked as a human rights ___ for a decade.', sTh: 'เธอทำงานเป็นนักเคลื่อนไหวด้านสิทธิมนุษยชนมาสิบปีแล้ว' },
              { s: 'The ___ organized a petition that collected thousands of signatures.', sTh: 'นักเคลื่อนไหวจัดทำคำร้องที่รวบรวมลายเซ็นได้หลายพันคน' }
            ] }
        ]
      },
      {
        id: 'environment-2', theme: 'Environment II', themeTh: 'สิ่งแวดล้อม (ต่อ)',
        words: [
          { w: 'climate', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'สภาพภูมิอากาศ',
            sentence: 'The ___ in this region is hot and dry most of the year.', sentenceTh: 'สภาพภูมิอากาศในภูมิภาคนี้ร้อนและแห้งเกือบทั้งปี',
            collocations: ['climate change', 'tropical climate'],
            quizBank: [
              { s: '___ change is one of the biggest challenges of our time.', sTh: 'การเปลี่ยนแปลงสภาพภูมิอากาศเป็นหนึ่งในปัญหาใหญ่ที่สุดของยุคเรา' },
              { s: 'Plants grow differently depending on the local ___.', sTh: 'พืชเติบโตแตกต่างกันขึ้นอยู่กับสภาพภูมิอากาศในท้องถิ่น' },
              { s: 'Scientists study how human activity affects the ___.', sTh: 'นักวิทยาศาสตร์ศึกษาว่ากิจกรรมของมนุษย์ส่งผลต่อสภาพภูมิอากาศอย่างไร' }
            ] },
          { w: 'damage', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'ความเสียหาย/ทำให้เสียหาย',
            sentence: 'The storm caused serious ___ to the coastal village.', sentenceTh: 'พายุก่อให้เกิดความเสียหายร้ายแรงต่อหมู่บ้านชายฝั่ง',
            collocations: ['cause damage', 'environmental damage'],
            quizBank: [
              { s: 'Chemical waste can ___ rivers and lakes.', sTh: 'ของเสียจากสารเคมีสามารถทำให้แม่น้ำและทะเลสาบเสียหาย' },
              { s: 'It will take years to repair the ___ from the fire.', sTh: 'ต้องใช้เวลาหลายปีเพื่อซ่อมแซมความเสียหายจากไฟไหม้' },
              { s: 'Air pollution does long-term ___ to our health.', sTh: 'มลพิษทางอากาศทำให้สุขภาพของเราเสียหายในระยะยาว' }
            ] },
          { w: 'atmosphere', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ชั้นบรรยากาศ',
            sentence: 'Carbon dioxide traps heat in the Earth\'s ___.', sentenceTh: 'คาร์บอนไดออกไซด์กักเก็บความร้อนในชั้นบรรยากาศของโลก',
            collocations: ['Earth\'s atmosphere', 'enter the atmosphere'],
            quizBank: [
              { s: 'Gases released into the ___ affect the climate.', sTh: 'แก๊สที่ถูกปล่อยสู่ชั้นบรรยากาศส่งผลต่อสภาพภูมิอากาศ' },
              { s: 'The rocket left the Earth\'s ___ within minutes.', sTh: 'จรวดออกจากชั้นบรรยากาศของโลกภายในเวลาไม่กี่นาที' },
              { s: 'Pollution has changed the makeup of the ___ over time.', sTh: 'มลพิษเปลี่ยนแปลงองค์ประกอบของชั้นบรรยากาศไปตามเวลา' }
            ] },
          { w: 'rare', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'หายาก',
            sentence: 'This is a ___ plant that only grows in cold climates.', sentenceTh: 'นี่เป็นพืชหายากที่เติบโตเฉพาะในภูมิอากาศเย็น',
            collocations: ['a rare species', 'extremely rare'],
            quizBank: [
              { s: 'The zoo has several ___ animals from Africa.', sTh: 'สวนสัตว์มีสัตว์หายากหลายชนิดจากแอฟริกา' },
              { s: 'It is ___ to see snow in this part of the country.', sTh: 'เป็นเรื่องหายากที่จะเห็นหิมะในพื้นที่นี้ของประเทศ' },
              { s: 'Hunting has made this bird extremely ___.', sTh: 'การล่าสัตว์ทำให้นกชนิดนี้หายากอย่างยิ่ง' }
            ] },
          { w: 'layer', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ชั้น',
            sentence: 'The ozone ___ protects us from harmful rays.', sentenceTh: 'ชั้นโอโซนปกป้องเราจากรังสีที่เป็นอันตราย',
            collocations: ['ozone layer', 'a thin layer'],
            quizBank: [
              { s: 'Scientists are worried about damage to the ozone ___.', sTh: 'นักวิทยาศาสตร์กังวลเรื่องความเสียหายต่อชั้นโอโซน' },
              { s: 'A thin ___ of ice covered the pond.', sTh: 'มีน้ำแข็งชั้นบางๆ ปกคลุมสระน้ำ' },
              { s: 'There is a ___ of smoke over the city today.', sTh: 'วันนี้มีควันเป็นชั้นปกคลุมเมือง' }
            ] },
          { w: 'impact', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'ผลกระทบ/ส่งผลกระทบ',
            sentence: 'Plastic waste has a huge ___ on marine life.', sentenceTh: 'ขยะพลาสติกส่งผลกระทบอย่างมากต่อสิ่งมีชีวิตในทะเล',
            collocations: ['have an impact on', 'environmental impact'],
            quizBank: [
              { s: 'The factory\'s closure will ___ hundreds of workers.', sTh: 'การปิดโรงงานจะส่งผลกระทบต่อคนงานหลายร้อยคน' },
              { s: 'Scientists are studying the ___ of rising temperatures.', sTh: 'นักวิทยาศาสตร์กำลังศึกษาผลกระทบของอุณหภูมิที่สูงขึ้น' },
              { s: 'Small daily habits can have a big ___ on the planet.', sTh: 'พฤติกรรมเล็กๆ ในแต่ละวันสามารถส่งผลกระทบใหญ่ต่อโลกได้' }
            ] },
          { w: 'decrease', pos: 'v., n.', level: 'B2', source: 'Oxford 3000', th: 'ลดลง/การลดลง',
            sentence: 'Fish populations have started to ___ in this lake.', sentenceTh: 'จำนวนปลาในทะเลสาบนี้เริ่มลดลง',
            collocations: ['decrease sharply', 'a decrease in'],
            quizBank: [
              { s: 'There has been a sharp ___ in rainfall this year.', sTh: 'ปริมาณฝนปีนี้ลดลงอย่างมาก' },
              { s: 'Planting more trees could help ___ air pollution.', sTh: 'การปลูกต้นไม้เพิ่มอาจช่วยลดมลพิษทางอากาศได้' },
              { s: 'The number of bees has ___d significantly over the past decade.', sTh: 'จำนวนผึ้งลดลงอย่างมากในช่วงสิบปีที่ผ่านมา' }
            ] },
          { w: 'organic', pos: 'adj.', level: 'B2', source: 'Oxford 5000', th: 'เกษตรอินทรีย์/ปลอดสารเคมี',
            sentence: 'More people are choosing to buy ___ vegetables.', sentenceTh: 'คนจำนวนมากขึ้นเลือกซื้อผักเกษตรอินทรีย์',
            collocations: ['organic food', 'organic farming'],
            quizBank: [
              { s: '___ farming avoids the use of chemical pesticides.', sTh: 'เกษตรอินทรีย์หลีกเลี่ยงการใช้ยาฆ่าแมลงที่เป็นสารเคมี' },
              { s: 'This supermarket has a whole section for ___ products.', sTh: 'ซูเปอร์มาร์เก็ตนี้มีแผนกทั้งหมดสำหรับสินค้าเกษตรอินทรีย์' },
              { s: '___ food is often more expensive than regular food.', sTh: 'อาหารเกษตรอินทรีย์มักมีราคาแพงกว่าอาหารทั่วไป' }
            ] },
          { w: 'melt', pos: 'v.', level: 'B2', source: 'Oxford 3000', th: 'ละลาย',
            sentence: 'The ice caps are starting to ___ faster than before.', sentenceTh: 'แผ่นน้ำแข็งขั้วโลกเริ่มละลายเร็วกว่าเดิม',
            collocations: ['melt away', 'ice melts'],
            quizBank: [
              { s: 'Rising temperatures cause glaciers to ___ around the world.', sTh: 'อุณหภูมิที่สูงขึ้นทำให้ธารน้ำแข็งละลายทั่วโลก' },
              { s: 'The snow began to ___ as soon as the sun came out.', sTh: 'หิมะเริ่มละลายทันทีที่พระอาทิตย์ออก' },
              { s: 'Scientists warn that the ice will continue to ___ in the coming years.', sTh: 'นักวิทยาศาสตร์เตือนว่าน้ำแข็งจะยังคงละลายต่อไปในปีข้างหน้า' }
            ] },
          { w: 'unprecedented', pos: 'adj.', level: 'C1', source: 'Oxford 5000', th: 'ที่ไม่เคยเกิดขึ้นมาก่อน',
            sentence: 'This year saw ___ levels of rainfall in the region.', sentenceTh: 'ปีนี้มีปริมาณฝนตกในภูมิภาคนี้ในระดับที่ไม่เคยเกิดขึ้นมาก่อน',
            collocations: ['unprecedented levels', 'an unprecedented event'],
            quizBank: [
              { s: 'The heatwave reached ___ temperatures this summer.', sTh: 'คลื่นความร้อนในฤดูร้อนนี้สูงถึงระดับที่ไม่เคยเกิดขึ้นมาก่อน' },
              { s: 'Scientists called the ice melt an ___ event.', sTh: 'นักวิทยาศาสตร์เรียกการละลายของน้ำแข็งครั้งนี้ว่าเป็นเหตุการณ์ที่ไม่เคยเกิดขึ้นมาก่อน' },
              { s: 'The city faced ___ flooding after days of heavy rain.', sTh: 'เมืองเผชิญน้ำท่วมในระดับที่ไม่เคยเกิดขึ้นมาก่อนหลังฝนตกหนักหลายวัน' }
            ] }
        ]
      },
      {
        id: 'science-2', theme: 'Science II', themeTh: 'วิทยาศาสตร์ (ต่อ)',
        words: [
          { w: 'technology', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'เทคโนโลยี',
            sentence: 'New ___ makes it easier to communicate with people far away.', sentenceTh: 'เทคโนโลยีใหม่ทำให้การสื่อสารกับคนที่อยู่ไกลง่ายขึ้น',
            collocations: ['modern technology', 'advanced technology'],
            quizBank: [
              { s: 'Schools are using more ___ in the classroom these days.', sTh: 'โรงเรียนใช้เทคโนโลยีในห้องเรียนมากขึ้นในปัจจุบัน' },
              { s: 'This hospital uses the latest medical ___.', sTh: 'โรงพยาบาลนี้ใช้เทคโนโลยีการแพทย์ล่าสุด' },
              { s: '___ has changed the way we shop and travel.', sTh: 'เทคโนโลยีเปลี่ยนวิธีที่เราซื้อของและเดินทาง' }
            ] },
          { w: 'measure', pos: 'v., n.', level: 'B1', source: 'Oxford 3000', th: 'วัด/การวัด',
            sentence: 'Scientists use special tools to ___ air quality.', sentenceTh: 'นักวิทยาศาสตร์ใช้เครื่องมือพิเศษเพื่อวัดคุณภาพอากาศ',
            collocations: ['measure accurately', 'take a measure'],
            quizBank: [
              { s: 'We need to ___ the temperature every hour during the experiment.', sTh: 'เราต้องวัดอุณหภูมิทุกชั่วโมงระหว่างการทดลอง' },
              { s: 'The new device can ___ distance very precisely.', sTh: 'อุปกรณ์ใหม่นี้สามารถวัดระยะทางได้อย่างแม่นยำมาก' },
              { s: 'It is hard to ___ exactly how much the policy helped.', sTh: 'ยากที่จะวัดได้แน่ชัดว่านโยบายนี้ช่วยได้มากแค่ไหน' }
            ] },
          { w: 'sample', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'ตัวอย่าง (ที่เก็บมาตรวจ)',
            sentence: 'The doctor took a blood ___ for testing.', sentenceTh: 'หมอเก็บตัวอย่างเลือดไปตรวจ',
            collocations: ['take a sample', 'a water sample'],
            quizBank: [
              { s: 'Researchers collected water ___s from the river.', sTh: 'นักวิจัยเก็บตัวอย่างน้ำจากแม่น้ำ' },
              { s: 'A small ___ of the soil was sent to the lab.', sTh: 'ตัวอย่างดินจำนวนเล็กน้อยถูกส่งไปที่ห้องปฏิบัติการ' },
              { s: 'The study only used a ___ of 50 people.', sTh: 'การศึกษานี้ใช้กลุ่มตัวอย่างเพียง 50 คน' }
            ] },
          { w: 'analyse', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'วิเคราะห์',
            sentence: 'The team will ___ the results next week.', sentenceTh: 'ทีมงานจะวิเคราะห์ผลลัพธ์สัปดาห์หน้า',
            collocations: ['analyse data', 'carefully analyse'],
            quizBank: [
              { s: 'Scientists ___d the samples to find out what caused the illness.', sTh: 'นักวิทยาศาสตร์วิเคราะห์ตัวอย่างเพื่อหาสาเหตุของความเจ็บป่วย' },
              { s: 'It takes time to ___ such a large amount of data.', sTh: 'ต้องใช้เวลาในการวิเคราะห์ข้อมูลจำนวนมากขนาดนี้' },
              { s: 'We need to ___ the problem before finding a solution.', sTh: 'เราต้องวิเคราะห์ปัญหาก่อนหาทางแก้ไข' }
            ] },
          { w: 'substance', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'สาร/วัตถุ',
            sentence: 'This ___ is dangerous if it touches your skin.', sentenceTh: 'สารนี้เป็นอันตรายหากสัมผัสผิวหนัง',
            collocations: ['a chemical substance', 'harmful substance'],
            quizBank: [
              { s: 'The factory was fined for releasing a harmful ___ into the river.', sTh: 'โรงงานถูกปรับเพราะปล่อยสารอันตรายลงแม่น้ำ' },
              { s: 'Scientists discovered a new ___ that kills bacteria.', sTh: 'นักวิทยาศาสตร์ค้นพบสารใหม่ที่ฆ่าแบคทีเรียได้' },
              { s: 'This white ___ turned out to be ordinary salt.', sTh: 'สารสีขาวนี้ปรากฎว่าเป็นเกลือธรรมดา' }
            ] },
          { w: 'element', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ธาตุ/องค์ประกอบ',
            sentence: 'Oxygen is an ___ that humans need to breathe.', sentenceTh: 'ออกซิเจนเป็นธาตุที่มนุษย์ต้องใช้ในการหายใจ',
            collocations: ['a chemical element', 'a key element'],
            quizBank: [
              { s: 'Gold is a rare and valuable ___.', sTh: 'ทองคำเป็นธาตุที่หายากและมีค่า' },
              { s: 'Trust is an important ___ of any friendship.', sTh: 'ความไว้ใจเป็นองค์ประกอบสำคัญของความเป็นเพื่อนไม่ว่าแบบใด' },
              { s: 'Each ___ on the periodic table has its own symbol.', sTh: 'ธาตุแต่ละชนิดในตารางธาตุมีสัญลักษณ์ของตัวเอง' }
            ] },
          { w: 'observe', pos: 'v.', level: 'B2', source: 'Oxford 3000', th: 'สังเกต/เฝ้าดู',
            sentence: 'Students were asked to ___ the plant\'s growth for a month.', sentenceTh: 'นักเรียนถูกขอให้สังเกตการเติบโตของพืชเป็นเวลาหนึ่งเดือน',
            collocations: ['observe closely', 'observe behavior'],
            quizBank: [
              { s: 'Scientists ___d the animals in their natural habitat.', sTh: 'นักวิทยาศาสตร์สังเกตสัตว์ในถิ่นที่อยู่ตามธรรมชาติของมัน' },
              { s: 'She likes to ___ how children learn new languages.', sTh: 'เธอชอบสังเกตว่าเด็กๆ เรียนภาษาใหม่อย่างไร' },
              { s: 'We could ___ a clear change in the water\'s color.', sTh: 'เราสังเกตเห็นการเปลี่ยนแปลงของสีน้ำที่ชัดเจน' }
            ] },
          { w: 'calculate', pos: 'v.', level: 'B2', source: 'Oxford 3000', th: 'คำนวณ',
            sentence: 'You need to ___ the total cost before you start the project.', sentenceTh: 'คุณต้องคำนวณต้นทุนรวมก่อนเริ่มโครงการ',
            collocations: ['calculate carefully', 'calculate the risk'],
            quizBank: [
              { s: 'Engineers ___d how much weight the bridge could hold.', sTh: 'วิศวกรคำนวณว่าสะพานรับน้ำหนักได้เท่าไร' },
              { s: 'It is hard to ___ the exact impact of the new policy.', sTh: 'ยากที่จะคำนวณผลกระทบที่แน่ชัดของนโยบายใหม่' },
              { s: 'Please ___ how much time you will need for each task.', sTh: 'กรุณาคำนวณว่าแต่ละงานต้องใช้เวลาเท่าไร' }
            ] },
          { w: 'procedure', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'ขั้นตอน/กระบวนการ',
            sentence: 'Follow the safety ___ before starting the experiment.', sentenceTh: 'ปฏิบัติตามขั้นตอนความปลอดภัยก่อนเริ่มการทดลอง',
            collocations: ['follow a procedure', 'standard procedure'],
            quizBank: [
              { s: 'The hospital has a strict ___ for handling emergencies.', sTh: 'โรงพยาบาลมีขั้นตอนที่เข้มงวดสำหรับจัดการสถานการณ์ฉุกเฉิน' },
              { s: 'This ___ must be repeated exactly the same way each time.', sTh: 'ขั้นตอนนี้ต้องทำซ้ำแบบเดียวกันทุกครั้ง' },
              { s: 'New employees must learn the safety ___ on their first day.', sTh: 'พนักงานใหม่ต้องเรียนรู้ขั้นตอนความปลอดภัยในวันแรก' }
            ] },
          { w: 'formula', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'สูตร',
            sentence: 'The ___ for water is H2O.', sentenceTh: 'สูตรของน้ำคือ H2O',
            collocations: ['a chemical formula', 'a mathematical formula'],
            quizBank: [
              { s: 'Students must memorize this ___ for the exam.', sTh: 'นักเรียนต้องจำสูตรนี้ไว้สำหรับการสอบ' },
              { s: 'There is no simple ___ for success in business.', sTh: 'ไม่มีสูตรง่ายๆ สำหรับความสำเร็จในธุรกิจ' },
              { s: 'The scientist wrote the chemical ___ on the whiteboard.', sTh: 'นักวิทยาศาสตร์เขียนสูตรเคมีบนกระดานไวท์บอร์ด' }
            ] }
        ]
      },
      {
        id: 'work-2', theme: 'Work II', themeTh: 'การทำงาน (ต่อ)',
        words: [
          { w: 'employee', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'ลูกจ้าง/พนักงาน',
            sentence: 'Every ___ must wear a uniform at this restaurant.', sentenceTh: 'พนักงานทุกคนต้องใส่ชุดยูนิฟอร์มที่ร้านนี้',
            collocations: ['a new employee', 'employee benefits'],
            quizBank: [
              { s: 'The company has over 500 ___s worldwide.', sTh: 'บริษัทมีพนักงานกว่า 500 คนทั่วโลก' },
              { s: 'New ___s receive training during their first week.', sTh: 'พนักงานใหม่จะได้รับการฝึกอบรมในสัปดาห์แรก' },
              { s: 'The manager praised the ___ for her hard work.', sTh: 'ผู้จัดการชมเชยพนักงานคนนี้ที่ทำงานหนัก' }
            ] },
          { w: 'profession', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'วิชาชีพ',
            sentence: 'Teaching is a respected ___ in this country.', sentenceTh: 'การสอนเป็นวิชาชีพที่ได้รับความเคารพในประเทศนี้',
            collocations: ['a medical profession', 'choose a profession'],
            quizBank: [
              { s: 'She chose nursing as her ___ because she wanted to help people.', sTh: 'เธอเลือกวิชาชีพพยาบาลเพราะอยากช่วยเหลือผู้คน' },
              { s: 'Many people in this ___ work long hours.', sTh: 'คนจำนวนมากในวิชาชีพนี้ทำงานเป็นเวลานาน' },
              { s: 'The medical ___ requires years of training.', sTh: 'วิชาชีพแพทย์ต้องใช้เวลาฝึกฝนหลายปี' }
            ] },
          { w: 'unemployed', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'ว่างงาน',
            sentence: 'He has been ___ since the factory closed.', sentenceTh: 'เขาว่างงานตั้งแต่โรงงานปิด',
            collocations: ['remain unemployed', 'long-term unemployed'],
            quizBank: [
              { s: 'Many young graduates are ___ right after finishing university.', sTh: 'บัณฑิตใหม่จำนวนมากว่างงานทันทีหลังเรียนจบ' },
              { s: 'The program helps ___ workers find new jobs.', sTh: 'โครงการนี้ช่วยคนงานที่ว่างงานหางานใหม่' },
              { s: 'She was ___ for almost a year before finding this job.', sTh: 'เธอว่างงานอยู่เกือบหนึ่งปีก่อนจะได้งานนี้' }
            ] },
          { w: 'performance', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ประสิทธิภาพการทำงาน/การแสดง',
            sentence: 'The manager reviews each employee\'s ___ every year.', sentenceTh: 'ผู้จัดการประเมินประสิทธิภาพการทำงานของพนักงานทุกคนทุกปี',
            collocations: ['job performance', 'improve performance'],
            quizBank: [
              { s: 'Her ___ improved a lot after the training course.', sTh: 'ประสิทธิภาพการทำงานของเธอดีขึ้นมากหลังเข้าคอร์สฝึกอบรม' },
              { s: 'Poor sleep can affect your ___ at work.', sTh: 'การนอนไม่พอสามารถส่งผลต่อประสิทธิภาพการทำงานของคุณ' },
              { s: 'The team\'s ___ was excellent this quarter.', sTh: 'ประสิทธิภาพของทีมในไตรมาสนี้ยอดเยี่ยม' }
            ] },
          { w: 'reliable', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'น่าเชื่อถือ/ไว้ใจได้',
            sentence: 'He is known as a ___ and hardworking employee.', sentenceTh: 'เขาเป็นที่รู้จักว่าเป็นพนักงานที่น่าเชื่อถือและขยัน',
            collocations: ['a reliable worker', 'reliable information'],
            quizBank: [
              { s: 'The company needs a more ___ supplier for these parts.', sTh: 'บริษัทต้องการผู้จัดหาสินค้าที่น่าเชื่อถือกว่านี้สำหรับชิ้นส่วนเหล่านี้' },
              { s: 'She is always ___ and never misses a deadline.', sTh: 'เธอน่าเชื่อถือเสมอและไม่เคยพลาดกำหนดเวลา' },
              { s: 'Make sure your sources are ___ before you cite them.', sTh: 'ตรวจสอบให้แน่ใจว่าแหล่งข้อมูลน่าเชื่อถือก่อนจะอ้างอิง' }
            ] },
          { w: 'duty', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'หน้าที่',
            sentence: 'It is his ___ to check the equipment every morning.', sentenceTh: 'เป็นหน้าที่ของเขาที่ต้องตรวจเครื่องมือทุกเช้า',
            collocations: ['on duty', 'do your duty'],
            quizBank: [
              { s: 'The security guard is on ___ from 6 pm to 6 am.', sTh: 'ยามรักษาความปลอดภัยอยู่ปฏิบัติหน้าที่ตั้งแต่ 6 โมงเย็นถึง 6 โมงเช้า' },
              { s: 'Answering customer questions is part of her daily ___.', sTh: 'การตอบคำถามลูกค้าเป็นส่วนหนึ่งของหน้าที่ประจำวันของเธอ' },
              { s: 'He takes his job ___ very seriously.', sTh: 'เขาให้ความสำคัญกับหน้าที่การงานของตัวเองมาก' }
            ] },
          { w: 'leadership', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'ภาวะผู้นำ',
            sentence: 'Strong ___ helped the company survive the crisis.', sentenceTh: 'ภาวะผู้นำที่แข็งแกร่งช่วยให้บริษัทผ่านวิกฤตมาได้',
            collocations: ['leadership skills', 'show leadership'],
            quizBank: [
              { s: 'The company offers ___ training for new managers.', sTh: 'บริษัทมีการฝึกอบรมภาวะผู้นำสำหรับผู้จัดการใหม่' },
              { s: 'Good ___ means listening to your team as well as giving orders.', sTh: 'ภาวะผู้นำที่ดีคือการฟังทีมด้วย ไม่ใช่แค่สั่งงาน' },
              { s: 'Her ___ during the difficult project impressed everyone.', sTh: 'ภาวะผู้นำของเธอในช่วงโครงการที่ยากสร้างความประทับใจให้ทุกคน' }
            ] },
          { w: 'motivation', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'แรงจูงใจ',
            sentence: 'Her main ___ for working hard is to support her family.', sentenceTh: 'แรงจูงใจหลักของเธอในการทำงานหนักคือการดูแลครอบครัว',
            collocations: ['lack of motivation', 'a source of motivation'],
            quizBank: [
              { s: 'Low pay can be a reason for low ___ among workers.', sTh: 'ค่าจ้างต่ำอาจเป็นสาเหตุของแรงจูงใจต่ำในหมู่คนงาน' },
              { s: 'His biggest ___ is helping other people succeed.', sTh: 'แรงจูงใจที่ใหญ่ที่สุดของเขาคือการช่วยให้คนอื่นประสบความสำเร็จ' },
              { s: 'The bonus gave the team extra ___ to finish on time.', sTh: 'โบนัสให้แรงจูงใจเพิ่มแก่ทีมให้เสร็จงานตรงเวลา' }
            ] },
          { w: 'wage', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'ค่าจ้าง',
            sentence: 'The government raised the minimum ___ this year.', sentenceTh: 'รัฐบาลปรับขึ้นค่าจ้างขั้นต่ำในปีนี้',
            collocations: ['minimum wage', 'a fair wage'],
            quizBank: [
              { s: 'Many workers are demanding a higher ___.', sTh: 'คนงานหลายคนเรียกร้องค่าจ้างที่สูงขึ้น' },
              { s: 'The factory pays a low ___ compared to other companies.', sTh: 'โรงงานจ่ายค่าจ้างต่ำเมื่อเทียบกับบริษัทอื่น' },
              { s: 'A fair ___ is important for workers\' quality of life.', sTh: 'ค่าจ้างที่เป็นธรรมสำคัญต่อคุณภาพชีวิตของคนงาน' }
            ] },
          { w: 'supervisor', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'หัวหน้างาน/ผู้ควบคุมดูแล',
            sentence: 'You should report any problems to your ___ first.', sentenceTh: 'คุณควรรายงานปัญหาใดๆ ให้หัวหน้างานของคุณทราบก่อน',
            collocations: ['a direct supervisor', 'report to a supervisor'],
            quizBank: [
              { s: 'Her ___ praised her for finishing the project early.', sTh: 'หัวหน้างานของเธอชมเชยที่ทำโครงการเสร็จก่อนกำหนด' },
              { s: 'The new ___ introduced several changes to the team.', sTh: 'หัวหน้างานคนใหม่นำการเปลี่ยนแปลงหลายอย่างมาสู่ทีม' },
              { s: 'Ask your ___ for approval before taking time off.', sTh: 'ขออนุมัติจากหัวหน้างานก่อนลาพัก' }
            ] }
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
