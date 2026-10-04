/* คลังคำศัพท์ "เตรียมสอบ" ทริปที่ 15 — อิง Oxford 3000 (A1–B2) และ Oxford 5000 (C1) เป็นแหล่งอ้างอิงระดับ
   ที่มา: oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/
          The_Oxford_3000_by_CEFR_level.pdf และ The_Oxford_5000_by_CEFR_level.pdf (ดึงและตรวจสอบระดับคำทุกคำจริง)
   ดูนโยบายสัดส่วน/โครงสร้างข้อมูลเต็มที่ examvocab-trip-01.js — ทริปนี้ใช้กฎเดียวกันทุกข้อ (50 คำใหม่ ไม่ซ้ำกับทริป 1-14) */
(function (root) {
  var EP = root.EP = root.EP || {};
  EP.examVocab = EP.examVocab || { trips: [] };
  EP.examVocab.trips.push({
    id: 'trip-15',
    name: 'กระแสน้ำใหม่',
    sets: [
      {
        id: 'university-life-15', theme: 'University Life XV', themeTh: 'ชีวิตมหาวิทยาลัย (กระแสน้ำใหม่)',
        words: [
          { w: 'publish', pos: 'v.', level: 'A2', source: 'Oxford 3000', th: 'เผยแพร่/ตีพิมพ์',
            sentence: 'The student hopes to ___ her first research paper next year.', sentenceTh: 'นักเรียนหวังจะตีพิมพ์งานวิจัยชิ้นแรกของเธอในปีหน้า',
            collocations: ['publish a paper', 'publish online'],
            quizBank: [
              { s: 'The department will ___ its annual report in spring.', sTh: 'ฝ่ายจะเผยแพร่รายงานประจำปีในฤดูใบไม้ผลิ' },
              { s: 'Many researchers prefer to ___ their findings in open access journals.', sTh: 'นักวิจัยหลายคนชอบเผยแพร่ผลการค้นพบในวารสารแบบเปิด' },
              { s: 'The publisher agreed to ___ the textbook this summer.', sTh: 'สำนักพิมพ์ตกลงจะตีพิมพ์ตำราเล่มนี้ในฤดูร้อนนี้' }
            ] },
          { w: 'journal', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'วารสารวิชาการ',
            sentence: 'Her study was accepted by a respected science ___.', sentenceTh: 'งานวิจัยของเธอได้รับการตอบรับจากวารสารวิทยาศาสตร์ที่มีชื่อเสียง',
            collocations: ['a academic journal', 'publish in a journal'],
            quizBank: [
              { s: 'The ___ publishes two new issues every year.', sTh: 'วารสารนี้ตีพิมพ์สองฉบับใหม่ทุกปี' },
              { s: 'Read the latest article in the medical ___.', sTh: 'อ่านบทความล่าสุดในวารสารการแพทย์' },
              { s: 'He keeps a daily ___ of his field experiments.', sTh: 'เขาเก็บบันทึกประจำวันของการทดลองภาคสนาม' }
            ] },
          { w: 'highlight', pos: 'v., n.', level: 'B1', source: 'Oxford 3000', th: 'เน้น/ไฮไลต์',
            sentence: 'Please ___ the key sentences in the reading passage.', sentenceTh: 'กรุณาเน้นประโยคสำคัญในบทอ่าน',
            collocations: ['highlight the main points', 'a highlight of the trip'],
            quizBank: [
              { s: 'The professor ___ed the main argument in red.', sTh: 'อาจารย์เน้นข้อโต้แย้งหลักด้วยสีแดง' },
              { s: 'The ___ of the conference was a keynote by a Nobel winner.', sTh: 'จุดเด่นของการประชุมคือการปาฐกถาโดยผู้ได้รับรางวัลโนเบล' },
              { s: 'The report ___s the main risks for the project.', sTh: 'รายงานเน้นความเสี่ยงหลักของโครงการ' }
            ] },
          { w: 'chapter', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'บท (ของหนังสือ)',
            sentence: 'Read the second ___ before the next lecture.', sentenceTh: 'อ่านบทที่สองก่อนการบรรยายครั้งหน้า',
            collocations: ['a chapter of a book', 'the opening chapter'],
            quizBank: [
              { s: 'The final ___ summarizes the main ideas of the book.', sTh: 'บทสุดท้ายสรุปแนวคิดหลักของหนังสือ' },
              { s: 'Each ___ of the thesis focuses on one research question.', sTh: 'แต่ละบทของวิทยานิพนธ์เน้นคำถามวิจัยหนึ่งข้อ' },
              { s: 'The history textbook has twelve ___s.', sTh: 'ตำราประวัติศาสตร์มีสิบสองบท' }
            ] },
          { w: 'definition', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'คำนิยาม',
            sentence: 'The dictionary gives a clear ___ of each word.', sentenceTh: 'พจนานุกรมให้คำนิยามที่ชัดเจนของแต่ละคำ',
            collocations: ['a clear definition', 'by definition'],
            quizBank: [
              { s: 'Begin your essay with a ___ of the key term.', sTh: 'เริ่มงานเขียนด้วยคำนิยามของคำสำคัญ' },
              { s: 'The ___ of poverty changed after the new study.', sTh: 'คำนิยามของความยากจนเปลี่ยนไปหลังงานวิจัยใหม่' },
              { s: 'Check the ___ before you use the word in writing.', sTh: 'ตรวจคำนิยามก่อนใช้คำนี้ในงานเขียน' }
            ] },
          { w: 'define', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'นิยาม/กำหนดความหมาย',
            sentence: 'The professor will ___ the terms used in the course.', sentenceTh: 'อาจารย์จะนิยามคำศัพท์ที่ใช้ในคอร์ส',
            collocations: ['define a term', 'clearly defined'],
            quizBank: [
              { s: 'Please ___ the word \'sustainable\' in your own words.', sTh: 'กรุณานิยามคำว่า sustainable ด้วยคำของคุณเอง' },
              { s: 'The law ___s who counts as a student.', sTh: 'กฎหมายกำหนดว่าใครนับเป็นนักเรียน' },
              { s: 'It is hard to ___ success in a single way.', sTh: 'ยากที่จะนิยามความสำเร็จด้วยวิธีเดียว' }
            ] },
          { w: 'principle', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'หลักการ',
            sentence: 'The research follows a basic ___ of fairness.', sentenceTh: 'งานวิจัยนี้ยึดหลักการพื้นฐานของความเป็นธรรม',
            collocations: ['in principle', 'a basic principle'],
            quizBank: [
              { s: 'The course explains the ___s of good experiment design.', sTh: 'คอร์สอธิบายหลักการของการออกแบบการทดลองที่ดี' },
              { s: 'Their decision was based on a moral ___.', sTh: 'การตัดสินใจของพวกเขาอิงจากหลักการทางศีลธรรม' },
              { s: 'In ___, the plan could work, but it needs more money.', sTh: 'ตามหลักการ แผนนี้อาจทำได้ แต่ต้องการเงินเพิ่ม' }
            ] },
          { w: 'abstract', pos: 'n., adj.', level: 'B2', source: 'Oxford 5000', th: 'บทคัดย่อ/นามธรรม',
            sentence: 'Read the ___ first to decide whether the paper is relevant.', sentenceTh: 'อ่านบทคัดย่อก่อนเพื่อตัดสินว่างานนี้เกี่ยวข้องหรือไม่',
            collocations: ['a short abstract', 'abstract ideas'],
            quizBank: [
              { s: 'Her ___ describes the method in fifty words.', sTh: 'บทคัดย่อของเธออธิบายวิธีการในห้าสิบคำ' },
              { s: 'Philosophy often deals with ___ concepts.', sTh: 'ปรัชญามักจัดการกับแนวคิดเชิงนามธรรม' },
              { s: 'The conference accepted two ___s from our team.', sTh: 'การประชุมรับบทคัดย่อสองชิ้นจากทีมของเรา' }
            ] },
          { w: 'framework', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'กรอบแนวคิด',
            sentence: 'The study uses a simple ___ to compare the two groups.', sentenceTh: 'งานวิจัยใช้กรอบแนวคิดง่ายๆ เพื่อเปรียบเทียบสองกลุ่ม',
            collocations: ['a legal framework', 'a theoretical framework'],
            quizBank: [
              { s: 'The thesis is built on a clear theoretical ___.', sTh: 'วิทยานิพนธ์สร้างขึ้นบนกรอบแนวคิดเชิงทฤษฎีที่ชัดเจน' },
              { s: 'The new law provides a ___ for protecting data.', sTh: 'กฎหมายใหม่ให้กรอบการปกป้องข้อมูล' },
              { s: 'Each team member works within the same ___.', sTh: 'สมาชิกแต่ละคนทำงานภายในกรอบเดียวกัน' }
            ] },
          { w: 'critique', pos: 'n., v.', level: 'C1', source: 'Oxford 5000', th: 'การวิจารณ์เชิงวิชาการ',
            sentence: 'Her essay offers a careful ___ of the old theory.', sentenceTh: 'งานเขียนของเธอให้การวิจารณ์เชิงวิชาการอย่างรอบคอบต่อทฤษฎีเก่า',
            collocations: ['a sharp critique', 'critique the method'],
            quizBank: [
              { s: 'The reviewer wrote a detailed ___ of the proposal.', sTh: 'ผู้ตรวจทานเขียนการวิจารณ์เชิงวิชาการอย่างละเอียดต่อข้อเสนอ' },
              { s: 'Students must ___ the articles they read this term.', sTh: 'นักเรียนต้องวิจารณ์บทความที่พวกเขาอ่านในเทอมนี้' },
              { s: 'The ___ focused on the study\'s weak sample.', sTh: 'การวิจารณ์เน้นไปที่กลุ่มตัวอย่างที่อ่อนของงานวิจัย' }
            ] }
        ]
      },
      {
        id: 'social-news-15', theme: 'Social News XV', themeTh: 'การเมืองและราชวงศ์ (กระแสน้ำใหม่)',
        words: [
          { w: 'king', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'กษัตริย์',
            sentence: 'The ___ visited the village to meet the farmers.', sentenceTh: 'กษัตริย์เสด็จเยี่ยมหมู่บ้านเพื่อพบชาวนา',
            collocations: ['the king of', 'a young king'],
            quizBank: [
              { s: 'The people celebrated the new ___ with music and dance.', sTh: 'ประชาชนเฉลิมฉลองกษัตริย์องค์ใหม่ด้วยดนตรีและการเต้นรำ' },
              { s: 'The old ___ ruled the country for forty years.', sTh: 'กษัตริย์องค์เก่าปกครองประเทศมาสี่สิบปี' },
              { s: 'A story about a wise ___ is told in every school.', sTh: 'นิทานเรื่องกษัตริย์ผู้ฉลาดถูกเล่าในทุกโรงเรียน' }
            ] },
          { w: 'politics', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'การเมือง',
            sentence: 'She is interested in local ___ and public policy.', sentenceTh: 'เธอสนใจการเมืองท้องถิ่นและนโยบายสาธารณะ',
            collocations: ['party politics', 'politics of'],
            quizBank: [
              { s: 'Many students study ___ and international relations.', sTh: 'นักเรียนหลายคนศึกษาการเมืองและความสัมพันธ์ระหว่างประเทศ' },
              { s: 'The debate turned into a discussion about ___.', sTh: 'การดีเบตกลายเป็นการพูดคุยเรื่องการเมือง' },
              { s: 'Keep ___ out of the classroom, the teacher said.', sTh: 'ครูบอกว่าให้เก็บการเมืองออกไปจากห้องเรียน' }
            ] },
          { w: 'politician', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'นักการเมือง',
            sentence: 'The ___ promised to build more schools in the district.', sentenceTh: 'นักการเมืองสัญญาว่าจะสร้างโรงเรียนเพิ่มในเขต',
            collocations: ['a senior politician', 'a famous politician'],
            quizBank: [
              { s: 'Voters doubted whether the ___ would keep the promise.', sTh: 'ผู้มีสิทธิเลือกตั้งสงสัยว่านักการเมืองจะรักษาคำสัญญาหรือไม่' },
              { s: 'The young ___ spoke about housing at the rally.', sTh: 'นักการเมืองหนุ่มพูดเรื่องที่อยู่อาศัยที่การชุมนุม' },
              { s: 'Every ___ must answer questions from reporters.', sTh: 'นักการเมืองทุกคนต้องตอบคำถามจากนักข่าว' }
            ] },
          { w: 'royal', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'เกี่ยวกับราชวงศ์',
            sentence: 'The ___ family attended the opening of the new hospital.', sentenceTh: 'ครอบครัวราชวงศ์เข้าร่วมพิธีเปิดโรงพยาบาลใหม่',
            collocations: ['the royal family', 'a royal palace'],
            quizBank: [
              { s: 'Tourists visit the ___ palace every summer.', sTh: 'นักท่องเที่ยวไปเยี่ยมพระราชวังทุกฤดูร้อน' },
              { s: 'The museum displays ___ jewelry from the old dynasty.', sTh: 'พิพิธภัณฑ์จัดแสดงเครื่องประดับเกี่ยวกับราชวงศ์จากราชวงศ์เก่า' },
              { s: 'A ___ decree was announced on television.', sTh: 'พระราชกฤษฎีกาถูกประกาศทางโทรทัศน์' }
            ] },
          { w: 'prince', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'เจ้าชาย',
            sentence: 'The young ___ opened the new school with a speech.', sentenceTh: 'เจ้าชายหนุ่มเปิดโรงเรียนใหม่ด้วยการกล่าวสุนทรพจน์',
            collocations: ['a crown prince', 'a fairy-tale prince'],
            quizBank: [
              { s: 'The ___ studied law before taking his royal duties.', sTh: 'เจ้าชายศึกษากฎหมายก่อนรับหน้าที่ราชวงศ์' },
              { s: 'In the old story, a brave ___ rescued the princess.', sTh: 'ในนิทานเก่า เจ้าชายผู้กล้าหาญช่วยเจ้าหญิงไว้' },
              { s: 'The ___ attended the children\'s hospital visit.', sTh: 'เจ้าชายเข้าร่วมการเยี่ยมโรงพยาบาลเด็ก' }
            ] },
          { w: 'prisoner', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'นักโทษ',
            sentence: 'The ___ was released after serving five years.', sentenceTh: 'นักโทษได้รับการปล่อยตัวหลังรับโทษห้าปี',
            collocations: ['a political prisoner', 'take a prisoner'],
            quizBank: [
              { s: 'The guard checked each ___ before the morning count.', sTh: 'ผู้คุมตรวจนักโทษแต่ละคนก่อนการนับตอนเช้า' },
              { s: 'Human rights groups visited the ___s in the camp.', sTh: 'กลุ่มสิทธิมนุษยชนเยี่ยมนักโทษในค่าย' },
              { s: 'The ___ wrote letters to his family every week.', sTh: 'นักโทษเขียนจดหมายถึงครอบครัวทุกสัปดาห์' }
            ] },
          { w: 'freedom', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'เสรีภาพ',
            sentence: 'Citizens fought hard for their ___ of speech.', sentenceTh: 'พลเมืองต่อสู้อย่างหนักเพื่อเสรีภาพในการพูด',
            collocations: ['freedom of speech', 'gain freedom'],
            quizBank: [
              { s: 'The charter guarantees ___ of the press.', sTh: 'กฎบัตรรับประกันเสรีภาพของสื่อ' },
              { s: 'Students value the ___ to choose their own subjects.', sTh: 'นักเรียนให้คุณค่ากับเสรีภาพในการเลือกวิชาของตัวเอง' },
              { s: 'After the war, the country finally won its ___.', sTh: 'หลังสงคราม ประเทศในที่สุดก็ได้รับเสรีภาพ' }
            ] },
          { w: 'rival', pos: 'n., adj.', level: 'B2', source: 'Oxford 5000', th: 'คู่แข่ง/คู่อริ',
            sentence: 'The two parties have been ___s for many decades.', sentenceTh: 'สองพรรคเป็นคู่แข่งกันมาหลายทศวรรษ',
            collocations: ['a bitter rival', 'rival party'],
            quizBank: [
              { s: 'His ___ won the seat by a small margin.', sTh: 'คู่แข่งของเขาชนะที่นั่งด้วยคะแนนนำเพียงเล็กน้อย' },
              { s: 'The ___ candidate criticized the new policy.', sTh: 'ผู้สมัครคู่แข่งวิจารณ์นโยบายใหม่' },
              { s: 'Two ___ companies announced a merger.', sTh: 'บริษัทคู่แข่งสองแห่งประกาศการควบรวม' }
            ] },
          { w: 'strike', pos: 'v., n.', level: 'B2', source: 'Oxford 3000', th: 'นัดหยุดงาน/โจมตี',
            sentence: 'The teachers voted to ___ next Monday.', sentenceTh: 'ครูลงมติจะนัดหยุดงานวันจันทร์หน้า',
            collocations: ['go on strike', 'a general strike'],
            quizBank: [
              { s: 'Workers began a ___ over unpaid wages.', sTh: 'คนงานเริ่มการนัดหยุดงานเพราะค่าจ้างค้างจ่าย' },
              { s: 'The storm may ___ the city tonight.', sTh: 'พายุอาจโจมตีเมืองคืนนี้' },
              { s: 'The clock began to ___ midnight.', sTh: 'นาฬิกาเริ่มตีเที่ยงคืน' }
            ] },
          { w: 'constitution', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'รัฐธรรมนูญ',
            sentence: 'The ___ protects the basic rights of every citizen.', sentenceTh: 'รัฐธรรมนูญคุ้มครองสิทธิขั้นพื้นฐานของพลเมืองทุกคน',
            collocations: ['a new constitution', 'under the constitution'],
            quizBank: [
              { s: 'Lawyers studied the ___ before the court hearing.', sTh: 'ทนายศึกษารัฐธรรมนูญก่อนการพิจารณาคดีในศาล' },
              { s: 'Parliament voted to change the ___ last year.', sTh: 'รัฐสภาลงมติแก้ไขรัฐธรรมนูญเมื่อปีที่แล้ว' },
              { s: 'The ___ sets out how the government must work.', sTh: 'รัฐธรรมนูญกำหนดว่ารัฐบาลต้องทำงานอย่างไร' }
            ] }
        ]
      },
      {
        id: 'environment-15', theme: 'Environment XVI', themeTh: 'แม่น้ำและลำธาร (กระแสน้ำใหม่)',
        words: [
          { w: 'river', pos: 'n.', level: 'A1', source: 'Oxford 3000', th: 'แม่น้ำ',
            sentence: 'The ___ flows through the middle of the city.', sentenceTh: 'แม่น้ำไหลผ่านใจกลางเมือง',
            collocations: ['a long river', 'along the river'],
            quizBank: [
              { s: 'Fishermen gather at the ___ early in the morning.', sTh: 'ชาวประมงมารวมตัวกันที่แม่น้ำตั้งแต่เช้าตรู่' },
              { s: 'Pollution has made the ___ dark and dirty.', sTh: 'มลพิษทำให้แม่น้ำดำและสกปรก' },
              { s: 'A small boat crossed the ___ at dusk.', sTh: 'เรือลำเล็กข้ามแม่น้ำตอนพลบค่ำ' }
            ] },
          { w: 'flow', pos: 'v., n.', level: 'B1', source: 'Oxford 3000', th: 'ไหล',
            sentence: 'Clean water must ___ freely through the channel.', sentenceTh: 'น้ำสะอาดต้องไหลอย่างอิสระผ่านทางน้ำ',
            collocations: ['flow freely', 'a steady flow'],
            quizBank: [
              { s: 'Traffic began to ___ again after the accident.', sTh: 'การจราจรเริ่มไหลอีกครั้งหลังอุบัติเหตุ' },
              { s: 'A steady ___ of water fed the rice fields.', sTh: 'น้ำที่ไหลอย่างสม่ำเสมอเลี้ยงนาข้าว' },
              { s: 'Lava began to ___ slowly down the hillside.', sTh: 'ลาวาเริ่มไหลช้าๆ ลงตามเนินเขา' }
            ] },
          { w: 'dirt', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ดิน/สิ่งสกปรก',
            sentence: 'Heavy rain washed a lot of ___ into the river.', sentenceTh: 'ฝนตกหนักพัดดินจำนวนมากลงสู่แม่น้ำ',
            collocations: ['covered in dirt', 'dirt road'],
            quizBank: [
              { s: 'The children came home covered in ___ after playing outside.', sTh: 'เด็กๆ กลับบ้านเปรอะไปด้วยดินหลังเล่นข้างนอก' },
              { s: 'The factory dumped ___ and oil into the stream.', sTh: 'โรงงานทิ้งสิ่งสกปรกและน้ำมันลงในลำธาร' },
              { s: 'Wash the vegetables to remove the ___.', sTh: 'ล้างผักเพื่อกำจัดดินที่ติดอยู่' }
            ] },
          { w: 'pipe', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ท่อ',
            sentence: 'A broken ___ leaked dirty water onto the road.', sentenceTh: 'ท่อที่แตกทำให้น้ำสกปรกไหลลงถนน',
            collocations: ['a water pipe', 'burst pipe'],
            quizBank: [
              { s: 'Engineers replaced the old metal ___ under the street.', sTh: 'วิศวกรเปลี่ยนท่อโลหะเก่าใต้ถนน' },
              { s: 'The ___ carries clean water to the village.', sTh: 'ท่อนำน้ำสะอาดไปยังหมู่บ้าน' },
              { s: 'Plumbers fixed the ___ before the flood spread.', sTh: 'ช่างประปาซ่อมท่อก่อนน้ำท่วมจะลุกลาม' }
            ] },
          { w: 'poisonous', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'มีพิษ',
            sentence: 'The fish from the lake may be ___ to eat.', sentenceTh: 'ปลาจากทะเลสาบอาจมีพิษเมื่อกิน',
            collocations: ['poisonous gas', 'poisonous chemicals'],
            quizBank: [
              { s: 'Warning signs were placed near the ___ water.', sTh: 'มีป้ายเตือนวางไว้ใกล้น้ำที่มีพิษ' },
              { s: 'Some mushrooms in the forest are highly ___.', sTh: 'เห็ดบางชนิดในป่ามีพิษสูงมาก' },
              { s: 'Keep the ___ chemicals out of reach of children.', sTh: 'เก็บสารเคมีที่มีพิษให้พ้นจากมือเด็ก' }
            ] },
          { w: 'mixture', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ของผสม',
            sentence: 'The river water was a ___ of mud and plastic.', sentenceTh: 'น้ำในแม่น้ำเป็นของผสมระหว่างโคลนและพลาสติก',
            collocations: ['a rich mixture', 'a mixture of'],
            quizBank: [
              { s: 'The soil is a ___ of sand, clay, and organic matter.', sTh: 'ดินเป็นของผสมระหว่างทราย ดินเหนียว และอินทรียวัตถุ' },
              { s: 'Add the ___ slowly to the boiling water.', sTh: 'เติมของผสมลงในน้ำเดือดอย่างช้าๆ' },
              { s: 'The sea breeze carried a strange ___ of smells.', sTh: 'สายลมทะเลพัดพากลิ่นผสมแปลกๆ มา' }
            ] },
          { w: 'stream', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'ลำธาร',
            sentence: 'Children played in the cold ___ near the village.', sentenceTh: 'เด็กๆ เล่นในลำธารเย็นใกล้หมู่บ้าน',
            collocations: ['a mountain stream', 'a steady stream of'],
            quizBank: [
              { s: 'The ___ runs down from the hills into the lake.', sTh: 'ลำธารไหลลงจากเนินเขาสู่ทะเลสาบ' },
              { s: 'A small ___ of visitors arrived each hour.', sTh: 'ผู้มาเยือนจำนวนหนึ่งไหลเข้ามาทุกชั่วโมง' },
              { s: 'Clear ___ water supports many fish species.', sTh: 'น้ำในลำธารใสรองรับปลาหลายสายพันธุ์' }
            ] },
          { w: 'rapid', pos: 'adj.', level: 'B2', source: 'Oxford 3000', th: 'เชี่ยว/รวดเร็ว',
            sentence: 'The ___ current made swimming dangerous near the dam.', sentenceTh: 'กระแสน้ำเชี่ยวทำให้การว่ายน้ำใกล้เขื่อนเป็นอันตราย',
            collocations: ['rapid growth', 'rapid change'],
            quizBank: [
              { s: 'The river has ___ water after heavy rain.', sTh: 'แม่น้ำมีน้ำเชี่ยวหลังฝนตกหนัก' },
              { s: 'Cities have grown at a ___ rate in the past decade.', sTh: 'เมืองขยายตัวด้วยอัตรารวดเร็วในทศวรรษที่ผ่านมา' },
              { s: 'The flood caused ___ changes to the shoreline.', sTh: 'น้ำท่วมทำให้ชายฝั่งเปลี่ยนแปลงอย่างรวดเร็ว' }
            ] },
          { w: 'canal', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'คลอง',
            sentence: 'Boats travel slowly along the old ___.', sentenceTh: 'เรือแล่นช้าๆ ไปตามคลองเก่า',
            collocations: ['a navigable canal', 'build a canal'],
            quizBank: [
              { s: 'The city dug a new ___ to drain the flooded streets.', sTh: 'เมืองขุดคลองใหม่เพื่อระบายน้ำจากถนนที่น้ำท่วม' },
              { s: 'Tourists take a boat trip along the ___ every afternoon.', sTh: 'นักท่องเที่ยวนั่งเรือล่องคลองทุกบ่าย' },
              { s: 'Trash clogged the ___ and stopped the water flow.', sTh: 'ขยะอุดตันคลองและหยุดการไหลของน้ำ' }
            ] },
          { w: 'tide', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'กระแสน้ำขึ้นลง',
            sentence: 'The fishing boats wait for the ___ to turn.', sentenceTh: 'เรือประมงรอให้น้ำขึ้นน้ำลงเปลี่ยนทิศทาง',
            collocations: ['high tide', 'low tide'],
            quizBank: [
              { s: 'The beach looks very different at low ___.', sTh: 'ชายหาดดูต่างไปมากตอนน้ำลงต่ำสุด' },
              { s: 'Strong ___s can carry plastic waste far out to sea.', sTh: 'กระแสน้ำขึ้นลงที่แรงสามารถพาขยะพลาสติกออกไปไกลในทะเล' },
              { s: 'The rising ___ flooded the lower streets of the village.', sTh: 'น้ำทะเลที่ขึ้นสูงท่วมถนนด้านล่างของหมู่บ้าน' }
            ] }
        ]
      },
      {
        id: 'science-15', theme: 'Science XVI', themeTh: 'วัสดุและสิ่งทอ (กระแสน้ำใหม่)',
        words: [
          { w: 'material', pos: 'n., adj.', level: 'A2', source: 'Oxford 3000', th: 'วัสดุ',
            sentence: 'Engineers test each ___ before using it in a bridge.', sentenceTh: 'วิศวกรทดสอบวัสดุแต่ละชนิดก่อนนำไปใช้ในสะพาน',
            collocations: ['raw material', 'building material'],
            quizBank: [
              { s: 'The factory uses recycled ___ to make new bottles.', sTh: 'โรงงานใช้วัสดุรีไซเคิลผลิตขวดใหม่' },
              { s: 'Strong ___ can resist heat and pressure.', sTh: 'วัสดุที่แข็งแรงสามารถทนความร้อนและแรงดันได้' },
              { s: 'Students studied the course ___ before the exam.', sTh: 'นักเรียนศึกษาเนื้อหาวิชาก่อนสอบ' }
            ] },
          { w: 'coloured', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'มีสี',
            sentence: 'The children made a picture with ___ pencils.', sentenceTh: 'เด็กๆ วาดรูปด้วยดินสอสี',
            collocations: ['brightly coloured', 'coloured glass'],
            quizBank: [
              { s: 'The market was full of ___ fabrics and flowers.', sTh: 'ตลาดเต็มไปด้วยผ้าและดอกไม้ที่มีสีสัน' },
              { s: 'Scientists use a ___ dye to mark the cells.', sTh: 'นักวิทยาศาสตร์ใช้สีย้อมที่มีสีเพื่อทำเครื่องหมายเซลล์' },
              { s: 'The bird has a ___ feather on its wing.', sTh: 'นกมีขนสีบนปีก' }
            ] },
          { w: 'shiny', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'วาววับ',
            sentence: 'The metal surface looked ___ after polishing.', sentenceTh: 'พื้นผิวโลหะดูวาววับหลังขัด',
            collocations: ['a shiny surface', 'shiny new'],
            quizBank: [
              { s: 'The beetle has a ___ green shell.', sTh: 'ด้วงมีเปลือกสีเขียววาววับ' },
              { s: 'Her new shoes were ___ and clean.', sTh: 'รองเท้าใหม่ของเธอวาววับและสะอาด' },
              { s: 'The ___ coins were stored in a small box.', sTh: 'เหรียญที่วาววับถูกเก็บไว้ในกล่องเล็กๆ' }
            ] },
          { w: 'pale', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'ซีด/จาง',
            sentence: 'The sand looked ___ under the bright morning sun.', sentenceTh: 'ทรายดูซีดจางภายใต้แสงอาทิตย์ยามเช้า',
            collocations: ['pale blue', 'turn pale'],
            quizBank: [
              { s: 'She went ___ when she heard the bad news.', sTh: 'เธอหน้าซีดเมื่อได้ยินข่าวร้าย' },
              { s: 'The paint faded to a ___ yellow after a year.', sTh: 'สีทาจางลงเป็นสีเหลืองซีดหลังหนึ่งปี' },
              { s: 'The ___ light made it hard to read the label.', sTh: 'แสงจางทำให้อ่านฉลากได้ยาก' }
            ] },
          { w: 'cotton', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ผ้าฝ้าย',
            sentence: 'This shirt is made of soft ___.', sentenceTh: 'เสื้อตัวนี้ทำจากผ้าฝ้ายนุ่ม',
            collocations: ['pure cotton', 'cotton fabric'],
            quizBank: [
              { s: 'Farmers grow ___ in the dry northern fields.', sTh: 'เกษตรกรปลูกฝ้ายในทุ่งทางเหนือที่แห้งแล้ง' },
              { s: 'Wash the ___ towels in warm water.', sTh: 'ซักผ้าขนหนูผ้าฝ้ายด้วยน้ำอุ่น' },
              { s: 'The ___ bag can be reused many times.', sTh: 'ถุงผ้าฝ้ายสามารถนำมาใช้ซ้ำได้หลายครั้ง' }
            ] },
          { w: 'wool', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ขนแกะ/ผ้าขนสัตว์',
            sentence: 'Her winter sweater was knitted from thick ___.', sentenceTh: 'เสื้อสเวตเตอร์ฤดูหนาวของเธอถักจากขนแกะหนา',
            collocations: ['pure wool', 'a wool sweater'],
            quizBank: [
              { s: 'Sheep provide ___ for warm clothing.', sTh: 'แกะให้ขนแกะสำหรับทำเสื้อผ้าที่อุ่น' },
              { s: 'The scarf is made of soft grey ___.', sTh: 'ผ้าพันคอทำจากขนแกะสีเทานุ่ม' },
              { s: 'Hang the ___ blanket outside to dry.', sTh: 'แขวนผ้าห่มขนแกะไว้ข้างนอกให้แห้ง' }
            ] },
          { w: 'fabric', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'ผ้า/เนื้อผ้า',
            sentence: 'The new ___ is light, warm, and waterproof.', sentenceTh: 'ผ้าชนิดใหม่นี้เบา อุ่น และกันน้ำ',
            collocations: ['a soft fabric', 'woven fabric'],
            quizBank: [
              { s: 'The tent is made from a strong synthetic ___.', sTh: 'เต็นท์ทำจากผ้าสังเคราะห์ที่แข็งแรง' },
              { s: 'Designers chose a rough ___ for the winter coat.', sTh: 'นักออกแบบเลือกเนื้อผ้าหยาบสำหรับเสื้อโค้ทฤดูหนาว' },
              { s: 'The factory produces cloth and ___ for export.', sTh: 'โรงงานผลิตผ้าและเนื้อผ้าสำหรับส่งออก' }
            ] },
          { w: 'absorb', pos: 'v.', level: 'B2', source: 'Oxford 5000', th: 'ดูดซับ',
            sentence: 'Cotton can ___ a lot of water quickly.', sentenceTh: 'ผ้าฝ้ายสามารถดูดซับน้ำได้มากอย่างรวดเร็ว',
            collocations: ['absorb water', 'absorb light'],
            quizBank: [
              { s: 'Dark surfaces ___ more heat from the sun.', sTh: 'พื้นผิวสีเข้มดูดซับความร้อนจากดวงอาทิตย์มากกว่า' },
              { s: 'The sponge can ___ liquid without dripping.', sTh: 'ฟองน้ำสามารถดูดซับของเหลวได้โดยไม่หยด' },
              { s: 'Plants ___ nutrients through their roots.', sTh: 'พืชดูดซับสารอาหารผ่านราก' }
            ] },
          { w: 'stretch', pos: 'v., n.', level: 'B2', source: 'Oxford 3000', th: 'ยืด',
            sentence: 'Rubber bands ___ easily when pulled.', sentenceTh: 'ยางรัดจะยืดได้ง่ายเมื่อดึง',
            collocations: ['stretch out', 'a long stretch'],
            quizBank: [
              { s: 'Fabric that can ___ is comfortable for sports.', sTh: 'ผ้าที่ยืดได้สบายเหมาะกับการเล่นกีฬา' },
              { s: 'Before running, ___ your legs slowly.', sTh: 'ก่อนวิ่ง ให้ยืดขาช้าๆ' },
              { s: 'The road runs for a long ___ along the coast.', sTh: 'ถนนทอดยาวเป็นระยะทางไกลตามชายฝั่ง' }
            ] },
          { w: 'texture', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'เนื้อสัมผัส',
            sentence: 'The fabric has a smooth ___ that feels soft.', sentenceTh: 'ผ้ามีเนื้อสัมผัสเรียบที่รู้สึกนุ่ม',
            collocations: ['rough texture', 'a rich texture'],
            quizBank: [
              { s: 'The cake has a light, airy ___.', sTh: 'เค้กมีเนื้อสัมผัสเบาและฟู' },
              { s: 'Scientists measured the ___ of each new material.', sTh: 'นักวิทยาศาสตร์วัดเนื้อสัมผัสของวัสดุใหม่แต่ละชนิด' },
              { s: 'The painting shows a rough ___ on the canvas.', sTh: 'ภาพวาดแสดงเนื้อสัมผัสหยาบบนผืนผ้าใบ' }
            ] }
        ]
      },
      {
        id: 'work-15', theme: 'Work XV', themeTh: 'การตลาดและธุรกิจ (กระแสน้ำใหม่)',
        words: [
          { w: 'employer', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'นายจ้าง',
            sentence: 'The ___ offers training for all new staff.', sentenceTh: 'นายจ้างจัดการฝึกอบรมให้พนักงานใหม่ทุกคน',
            collocations: ['a large employer', 'a good employer'],
            quizBank: [
              { s: 'Each ___ must pay wages on time.', sTh: 'นายจ้างแต่ละรายต้องจ่ายค่าจ้างตรงเวลา' },
              { s: 'Her ___ supports flexible working hours.', sTh: 'นายจ้างของเธอสนับสนุนเวลาทำงานที่ยืดหยุ่น' },
              { s: 'The local ___ hired fifty people this year.', sTh: 'นายจ้างในท้องถิ่นจ้างคนห้าสิบคนในปีนี้' }
            ] },
          { w: 'marketing', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'การตลาด',
            sentence: 'The company hired a team to lead its ___ campaign.', sentenceTh: 'บริษัทจ้างทีมเพื่อนำแคมเปญการตลาด',
            collocations: ['digital marketing', 'marketing strategy'],
            quizBank: [
              { s: 'She studies ___ at a business school.', sTh: 'เธอเรียนการตลาดที่โรงเรียนธุรกิจ' },
              { s: 'Good ___ helps a small shop reach new customers.', sTh: 'การตลาดที่ดีช่วยให้ร้านเล็กๆ เข้าถึงลูกค้าใหม่' },
              { s: 'The ___ department prepared a new logo.', sTh: 'ฝ่ายการตลาดเตรียมโลโก้ใหม่' }
            ] },
          { w: 'commercial', pos: 'adj., n.', level: 'B1', source: 'Oxford 3000', th: 'เชิงพาณิชย์',
            sentence: 'The building was designed for ___ use only.', sentenceTh: 'อาคารนี้ออกแบบมาเพื่อใช้เชิงพาณิชย์เท่านั้น',
            collocations: ['commercial property', 'a commercial break'],
            quizBank: [
              { s: 'The ___ success of the app surprised its creators.', sTh: 'ความสำเร็จเชิงพาณิชย์ของแอปทำให้ผู้สร้างประหลาดใจ' },
              { s: 'The channel shows a ___ every fifteen minutes.', sTh: 'ช่องนี้ฉายโฆษณาทุกสิบห้านาที' },
              { s: 'The farm now sells its crops on a ___ scale.', sTh: 'ฟาร์มขายพืชผลในระดับเชิงพาณิชย์แล้ว' }
            ] },
          { w: 'competitor', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'คู่แข่งทางธุรกิจ',
            sentence: 'Our main ___ opened a new store across the street.', sentenceTh: 'คู่แข่งหลักของเราเปิดร้านใหม่ฝั่งตรงข้ามถนน',
            collocations: ['a major competitor', 'beat the competitor'],
            quizBank: [
              { s: 'The ___ lowered its prices to win more customers.', sTh: 'คู่แข่งลดราคาเพื่อดึงดูดลูกค้ามากขึ้น' },
              { s: 'Every ___ tries to offer better service.', sTh: 'คู่แข่งทุกรายพยายามเสนอบริการที่ดีกว่า' },
              { s: 'The company studied its ___s before launching.', sTh: 'บริษัทศึกษาคู่แข่งก่อนเปิดตัว' }
            ] },
          { w: 'competitive', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'แข่งขันได้',
            sentence: 'The job market is very ___ this year.', sentenceTh: 'ตลาดงานแข่งขันกันสูงมากในปีนี้',
            collocations: ['competitive prices', 'a competitive market'],
            quizBank: [
              { s: 'Our product offers a ___ price for students.', sTh: 'สินค้าของเรามีราคาที่แข่งขันได้สำหรับนักเรียน' },
              { s: 'The team was ___ and wanted to win every match.', sTh: 'ทีมมีจิตแข่งขันสูงและต้องการชนะทุกแมตช์' },
              { s: 'Universities must stay ___ to attract good students.', sTh: 'มหาวิทยาลัยต้องคงความแข่งขันได้เพื่อดึงดูดนักเรียนดี' }
            ] },
          { w: 'valuable', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'มีค่า',
            sentence: 'Her advice was very ___ for the new manager.', sentenceTh: 'คำแนะนำของเธอมีค่ามากสำหรับผู้จัดการคนใหม่',
            collocations: ['a valuable asset', 'valuable experience'],
            quizBank: [
              { s: 'The old painting is extremely ___ to collectors.', sTh: 'ภาพวาดเก่าชิ้นนี้มีค่ามากสำหรับนักสะสม' },
              { s: 'Employees gave ___ feedback during the review.', sTh: 'พนักงานให้ข้อเสนอแนะที่มีค่าระหว่างการทบทวน' },
              { s: 'Time is the most ___ resource a student has.', sTh: 'เวลาคือทรัพยากรที่มีค่าที่สุดที่นักเรียนมี' }
            ] },
          { w: 'trading', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'การค้า/ซื้อขาย',
            sentence: 'Online ___ has grown quickly in the region.', sentenceTh: 'การค้าออนไลน์เติบโตอย่างรวดเร็วในภูมิภาคนี้',
            collocations: ['stock trading', 'fair trading'],
            quizBank: [
              { s: 'The market closed early because of heavy ___.', sTh: 'ตลาดปิดเร็วเพราะการซื้อขายหนาแน่น' },
              { s: 'Two countries agreed to expand ___ across the border.', sTh: 'สองประเทศตกลงขยายการค้าข้ามแดน' },
              { s: 'Her firm specializes in currency ___.', sTh: 'บริษัทของเธอเชี่ยวชาญการซื้อขายสกุลเงิน' }
            ] },
          { w: 'investor', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'นักลงทุน',
            sentence: 'The new ___ put money into the start-up.', sentenceTh: 'นักลงทุนรายใหม่ใส่เงินเข้าไปในสตาร์ทอัพ',
            collocations: ['a private investor', 'attract investors'],
            quizBank: [
              { s: 'Small ___s often prefer safer investments.', sTh: 'นักลงทุนรายย่อยมักชอบการลงทุนที่ปลอดภัยกว่า' },
              { s: 'The company needs a new ___ to grow abroad.', sTh: 'บริษัทต้องการนักลงทุนรายใหม่เพื่อขยายไปต่างประเทศ' },
              { s: 'Each ___ received a report every quarter.', sTh: 'นักลงทุนแต่ละคนได้รับรายงานทุกไตรมาส' }
            ] },
          { w: 'founder', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'ผู้ก่อตั้ง',
            sentence: 'The ___ of the company gave a talk at the university.', sentenceTh: 'ผู้ก่อตั้งบริษัทบรรยายที่มหาวิทยาลัย',
            collocations: ['co-founder', 'the founder of'],
            quizBank: [
              { s: 'The ___ wrote the first business plan on a napkin.', sTh: 'ผู้ก่อตั้งเขียนแผนธุรกิจฉบับแรกบนผ้าเช็ดปาก' },
              { s: 'Her grandfather was the ___ of a local bakery.', sTh: 'ปู่ของเธอเป็นผู้ก่อตั้งร้านเบเกอรี่ท้องถิ่น' },
              { s: 'Each ___ shares the responsibility for the company.', sTh: 'ผู้ก่อตั้งแต่ละคนแบ่งความรับผิดชอบของบริษัท' }
            ] },
          { w: 'marketplace', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'ตลาด (การค้า)',
            sentence: 'Small farmers now sell their goods in the online ___.', sentenceTh: 'เกษตรกรรายย่อยตอนนี้ขายสินค้าในตลาดออนไลน์',
            collocations: ['a global marketplace', 'enter the marketplace'],
            quizBank: [
              { s: 'New brands struggle to enter a crowded ___.', sTh: 'แบรนด์ใหม่ดิ้นรนเข้าสู่ตลาดที่แออัด' },
              { s: 'The local ___ opens every Saturday morning.', sTh: 'ตลาดท้องถิ่นเปิดทุกเช้าวันเสาร์' },
              { s: 'Prices in the ___ change with the season.', sTh: 'ราคาในตลาดเปลี่ยนไปตามฤดูกาล' }
            ] }
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
