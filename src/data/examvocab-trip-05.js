/* คลังคำศัพท์ "เตรียมสอบ" ทริปที่ 5 — อิง Oxford 3000 (A1–B2) และ Oxford 5000 (C1) เป็นแหล่งอ้างอิงระดับ
   ที่มา: oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/
          The_Oxford_3000_by_CEFR_level.pdf และ The_Oxford_5000_by_CEFR_level.pdf (ดึงและตรวจสอบระดับคำทุกคำจริง)
   ดูนโยบายสัดส่วน/โครงสร้างข้อมูลเต็มที่ examvocab-trip-01.js — ทริปนี้ใช้กฎเดียวกันทุกข้อ (50 คำใหม่ ไม่ซ้ำกับทริป 1-4) */
(function (root) {
  var EP = root.EP = root.EP || {};
  EP.examVocab = EP.examVocab || { trips: [] };
  EP.examVocab.trips.push({
    id: 'trip-05',
    name: 'ก้าวข้ามขีดจำกัด',
    sets: [
      {
        id: 'university-life-5', theme: 'University Life V', themeTh: 'ชีวิตมหาวิทยาลัย (ก้าวข้ามขีดจำกัด)',
        words: [
          { w: 'lecture', pos: 'n., v.', level: 'A2', source: 'Oxford 3000', th: 'การบรรยาย/บรรยาย',
            sentence: 'The ___ starts at nine o\'clock every Monday.', sentenceTh: 'การบรรยายเริ่มเก้าโมงทุกวันจันทร์',
            collocations: ['attend a lecture', 'give a lecture'],
            quizBank: [
              { s: 'Hundreds of students attended the professor\'s ___.', sTh: 'นักเรียนหลายร้อยคนเข้าฟังการบรรยายของอาจารย์' },
              { s: 'She took notes during the whole ___.', sTh: 'เธอจดบันทึกตลอดการบรรยายทั้งหมด' },
              { s: 'The guest speaker will ___ on climate change today.', sTh: 'วิทยากรรับเชิญจะบรรยายเรื่องการเปลี่ยนแปลงสภาพภูมิอากาศวันนี้' }
            ] },
          { w: 'qualify', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'มีคุณสมบัติผ่าน',
            sentence: 'You need three years of study to ___ for this degree.', sentenceTh: 'คุณต้องเรียนสามปีเพื่อให้มีคุณสมบัติผ่านสำหรับปริญญานี้',
            collocations: ['qualify for', 'qualify as'],
            quizBank: [
              { s: 'Her grades were high enough to ___ for the scholarship.', sTh: 'เกรดของเธอสูงพอที่จะมีคุณสมบัติผ่านสำหรับทุนการศึกษา' },
              { s: 'He studied hard to ___ as an engineer.', sTh: 'เขาเรียนหนักเพื่อให้มีคุณสมบัติผ่านเป็นวิศวกร' },
              { s: 'Not every student will ___ for the advanced course.', sTh: 'ไม่ใช่นักเรียนทุกคนที่จะมีคุณสมบัติผ่านสำหรับวิชาขั้นสูง' }
            ] },
          { w: 'application', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ใบสมัคร',
            sentence: 'Please send your ___ before the end of the month.', sentenceTh: 'กรุณาส่งใบสมัครก่อนสิ้นเดือน',
            collocations: ['submit an application', 'an application form'],
            quizBank: [
              { s: 'Her university ___ included two letters of recommendation.', sTh: 'ใบสมัครมหาวิทยาลัยของเธอมีจดหมายแนะนำสองฉบับ' },
              { s: 'The ___ process takes about six weeks.', sTh: 'กระบวนการสมัครใช้เวลาประมาณหกสัปดาห์' },
              { s: 'He filled out the ___ form very carefully.', sTh: 'เขากรอกแบบฟอร์มใบสมัครอย่างระมัดระวังมาก' }
            ] },
          { w: 'admit', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'รับเข้า (เรียน/เข้าร่วม)',
            sentence: 'The university will ___ only 200 new students this year.', sentenceTh: 'มหาวิทยาลัยจะรับนักเรียนใหม่เพียง 200 คนในปีนี้',
            collocations: ['admit a student', 'be admitted to'],
            quizBank: [
              { s: 'She was ___ted to her first-choice university.', sTh: 'เธอได้รับเข้าเรียนที่มหาวิทยาลัยอันดับแรกที่เลือก' },
              { s: 'The college only ___s students who pass the entrance test.', sTh: 'วิทยาลัยรับเข้าเฉพาะนักเรียนที่ผ่านการสอบเข้า' },
              { s: 'This program ___s a small number of students each year.', sTh: 'โปรแกรมนี้รับนักเรียนจำนวนน้อยในแต่ละปี' }
            ] },
          { w: 'advise', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'ให้คำแนะนำ',
            sentence: 'Her teacher ___d her to apply for more scholarships.', sentenceTh: 'ครูของเธอแนะนำให้เธอสมัครทุนการศึกษาเพิ่มขึ้น',
            collocations: ['advise someone to', 'strongly advise'],
            quizBank: [
              { s: 'I would ___ you to start studying early for finals.', sTh: 'ฉันขอแนะนำให้คุณเริ่มอ่านหนังสือสำหรับสอบปลายภาคแต่เนิ่นๆ' },
              { s: 'The advisor ___d him to choose a different major.', sTh: 'อาจารย์ที่ปรึกษาแนะนำให้เขาเลือกวิชาเอกอื่น' },
              { s: 'Professors often ___ students on which courses to take.', sTh: 'อาจารย์มักให้คำแนะนำนักเรียนว่าควรเรียนวิชาใด' }
            ] },
          { w: 'summarize', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'สรุป (เนื้อหา)',
            sentence: 'Please ___ the article in no more than one paragraph.', sentenceTh: 'กรุณาสรุปบทความในไม่เกินหนึ่งย่อหน้า',
            collocations: ['summarize briefly', 'summarize the main points'],
            quizBank: [
              { s: 'She was asked to ___ the chapter before the next class.', sTh: 'เธอถูกขอให้สรุปบทเรียนก่อนชั่วโมงถัดไป' },
              { s: 'Can you ___ what the professor said at the start of the lecture?', sTh: 'คุณสรุปสิ่งที่อาจารย์พูดตอนต้นการบรรยายได้ไหม' },
              { s: 'A good conclusion should ___ the main argument of the essay.', sTh: 'บทสรุปที่ดีควรสรุปประเด็นหลักของงานเขียน' }
            ] },
          { w: 'certificate', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'ประกาศนียบัตร',
            sentence: 'She received a ___ for completing the course.', sentenceTh: 'เธอได้รับประกาศนียบัตรสำหรับการเรียนจบหลักสูตร',
            collocations: ['a training certificate', 'earn a certificate'],
            quizBank: [
              { s: 'He proudly hung his ___ on the office wall.', sTh: 'เขาแขวนประกาศนียบัตรไว้ที่ผนังห้องทำงานด้วยความภูมิใจ' },
              { s: 'This online course offers a ___ at the end.', sTh: 'คอร์สออนไลน์นี้มอบประกาศนียบัตรให้เมื่อเรียนจบ' },
              { s: 'You need a teaching ___ to work at this school.', sTh: 'คุณต้องมีประกาศนียบัตรการสอนเพื่อทำงานที่โรงเรียนนี้' }
            ] },
          { w: 'applicant', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'ผู้สมัคร',
            sentence: 'Over a thousand ___s applied for the scholarship.', sentenceTh: 'มีผู้สมัครกว่าหนึ่งพันคนสมัครทุนการศึกษานี้',
            collocations: ['a strong applicant', 'shortlist applicants'],
            quizBank: [
              { s: 'The committee interviewed five ___s for the position.', sTh: 'คณะกรรมการสัมภาษณ์ผู้สมัครห้าคนสำหรับตำแหน่งนี้' },
              { s: 'Each ___ had to submit two essays.', sTh: 'ผู้สมัครแต่ละคนต้องส่งเรียงความสองเรื่อง' },
              { s: 'Only the strongest ___s were invited for an interview.', sTh: 'มีเพียงผู้สมัครที่แข็งแกร่งที่สุดเท่านั้นที่ถูกเชิญสัมภาษณ์' }
            ] },
          { w: 'thesis', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'วิทยานิพนธ์',
            sentence: 'Her ___ took almost a year to finish.', sentenceTh: 'วิทยานิพนธ์ของเธอใช้เวลาเกือบหนึ่งปีจึงจะเสร็จ',
            collocations: ['write a thesis', 'defend a thesis'],
            quizBank: [
              { s: 'He will defend his ___ in front of three professors.', sTh: 'เขาจะป้องกันวิทยานิพนธ์ของตัวเองต่อหน้าอาจารย์สามคน' },
              { s: 'The ___ examines how students learn new languages.', sTh: 'วิทยานิพนธ์นี้ศึกษาวิธีที่นักเรียนเรียนรู้ภาษาใหม่' },
              { s: 'Writing a ___ requires months of careful research.', sTh: 'การเขียนวิทยานิพนธ์ต้องใช้การวิจัยอย่างรอบคอบหลายเดือน' }
            ] },
          { w: 'admission', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'การรับเข้า (เรียน/สถาบัน)',
            sentence: 'The university\'s ___ requirements are quite strict.', sentenceTh: 'ข้อกำหนดการรับเข้าเรียนของมหาวิทยาลัยค่อนข้างเข้มงวด',
            collocations: ['admission requirements', 'gain admission'],
            quizBank: [
              { s: 'She gained ___ to one of the best medical schools.', sTh: 'เธอได้รับการรับเข้าหนึ่งในโรงเรียนแพทย์ที่ดีที่สุด' },
              { s: 'The ___ process includes an interview and a written test.', sTh: 'กระบวนการรับเข้ารวมถึงการสัมภาษณ์และการสอบข้อเขียน' },
              { s: '___ to the program depends on both grades and experience.', sTh: 'การรับเข้าโปรแกรมขึ้นอยู่กับทั้งเกรดและประสบการณ์' }
            ] }
        ]
      },
      {
        id: 'social-news-5', theme: 'Social News V', themeTh: 'ข่าวสังคม (ก้าวข้ามขีดจำกัด)',
        words: [
          { w: 'peace', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'ความสงบสุข/สันติภาพ',
            sentence: 'The two countries finally agreed to work for ___.', sentenceTh: 'สองประเทศในที่สุดตกลงร่วมกันทำงานเพื่อสันติภาพ',
            collocations: ['make peace', 'live in peace'],
            quizBank: [
              { s: 'People across the country called for ___ after years of fighting.', sTh: 'ผู้คนทั่วประเทศเรียกร้องสันติภาพหลังจากการสู้รบมาหลายปี' },
              { s: 'The two leaders shook hands as a sign of ___.', sTh: 'ผู้นำทั้งสองจับมือกันเพื่อเป็นสัญลักษณ์แห่งสันติภาพ' },
              { s: 'Many communities worked together to maintain ___.', sTh: 'หลายชุมชนร่วมมือกันเพื่อรักษาความสงบสุข' }
            ] },
          { w: 'violent', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'รุนแรง (มีความรุนแรง)',
            sentence: 'The protest turned ___ after dark.', sentenceTh: 'การประท้วงกลายเป็นความรุนแรงหลังมืดค่ำ',
            collocations: ['a violent protest', 'violent crime'],
            quizBank: [
              { s: 'Police were called in after the demonstration became ___.', sTh: 'ตำรวจถูกเรียกมาหลังการชุมนุมกลายเป็นความรุนแรง' },
              { s: 'The news report showed images of the ___ clash.', sTh: 'ข่าวแสดงภาพการปะทะที่รุนแรง' },
              { s: 'Leaders urged both sides to avoid ___ actions.', sTh: 'ผู้นำเรียกร้องให้ทั้งสองฝ่ายหลีกเลี่ยงการกระทำที่รุนแรง' }
            ] },
          { w: 'peaceful', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'สงบ/อย่างสันติ',
            sentence: 'Thousands joined the ___ march through the city.', sentenceTh: 'คนหลายพันคนร่วมเดินขบวนอย่างสันติผ่านเมือง',
            collocations: ['a peaceful protest', 'peaceful solution'],
            quizBank: [
              { s: 'Organizers promised the rally would remain ___.', sTh: 'ผู้จัดงานสัญญาว่าการชุมนุมจะดำเนินไปอย่างสงบ' },
              { s: 'The two sides finally reached a ___ agreement.', sTh: 'ทั้งสองฝ่ายในที่สุดก็บรรลุข้อตกลงอย่างสันติ' },
              { s: 'A ___ solution is always better than conflict.', sTh: 'ทางออกอย่างสันติดีกว่าความขัดแย้งเสมอ' }
            ] },
          { w: 'agreement', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ข้อตกลง',
            sentence: 'The two nations signed an ___ to reduce pollution together.', sentenceTh: 'สองประเทศลงนามในข้อตกลงร่วมกันลดมลพิษ',
            collocations: ['reach an agreement', 'sign an agreement'],
            quizBank: [
              { s: 'After hours of talks, they reached an ___.', sTh: 'หลังจากพูดคุยหลายชั่วโมง พวกเขาก็บรรลุข้อตกลง' },
              { s: 'The trade ___ will take effect next year.', sTh: 'ข้อตกลงทางการค้าจะมีผลในปีหน้า' },
              { s: 'Both sides finally came to an ___ on the new rules.', sTh: 'ทั้งสองฝ่ายในที่สุดก็ตกลงกันในกฎใหม่' }
            ] },
          { w: 'border', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'เขตแดน/มีเขตแดนติดกัน',
            sentence: 'Thousands crossed the ___ to escape the fighting.', sentenceTh: 'คนหลายพันคนข้ามเขตแดนเพื่อหลบหนีการสู้รบ',
            collocations: ['cross the border', 'border control'],
            quizBank: [
              { s: 'The two countries share a long ___.', sTh: 'สองประเทศนี้มีเขตแดนติดกันเป็นแนวยาว' },
              { s: 'New rules made it harder to cross the ___.', sTh: 'กฎใหม่ทำให้การข้ามเขตแดนยากขึ้น' },
              { s: 'The ___ was closed for several weeks after the incident.', sTh: 'เขตแดนถูกปิดหลายสัปดาห์หลังเกิดเหตุการณ์' }
            ] },
          { w: 'ban', pos: 'v., n.', level: 'B1', source: 'Oxford 3000', th: 'สั่งห้าม/การห้าม',
            sentence: 'The government decided to ___ plastic bags in all shops.', sentenceTh: 'รัฐบาลตัดสินใจสั่งห้ามถุงพลาสติกในร้านค้าทั้งหมด',
            collocations: ['impose a ban', 'ban something'],
            quizBank: [
              { s: 'The city introduced a ___ on smoking in public parks.', sTh: 'เมืองออกคำสั่งห้ามสูบบุหรี่ในสวนสาธารณะ' },
              { s: 'Many countries ___ the sale of this chemical.', sTh: 'หลายประเทศสั่งห้ามการขายสารเคมีชนิดนี้' },
              { s: 'The new ___ affected hundreds of local businesses.', sTh: 'คำสั่งห้ามใหม่ส่งผลกระทบต่อธุรกิจท้องถิ่นหลายร้อยแห่ง' }
            ] },
          { w: 'minister', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'รัฐมนตรี',
            sentence: 'The foreign ___ met with leaders from three countries.', sentenceTh: 'รัฐมนตรีต่างประเทศพบกับผู้นำจากสามประเทศ',
            collocations: ['prime minister', 'foreign minister'],
            quizBank: [
              { s: 'The ___ announced new plans to fight unemployment.', sTh: 'รัฐมนตรีประกาศแผนใหม่เพื่อแก้ปัญหาการว่างงาน' },
              { s: 'A former ___ was invited to speak at the university.', sTh: 'รัฐมนตรีคนก่อนได้รับเชิญไปพูดที่มหาวิทยาลัย' },
              { s: 'The prime ___ addressed the nation on live television.', sTh: 'นายกรัฐมนตรีกล่าวต่อประชาชนทางโทรทัศน์สด' }
            ] },
          { w: 'conflict', pos: 'n., v.', level: 'B2', source: 'Oxford 3000', th: 'ความขัดแย้ง',
            sentence: 'The ___ between the two groups lasted for years.', sentenceTh: 'ความขัดแย้งระหว่างสองกลุ่มยืดเยื้อมาหลายปี',
            collocations: ['resolve a conflict', 'armed conflict'],
            quizBank: [
              { s: 'International leaders tried to resolve the ___ peacefully.', sTh: 'ผู้นำนานาชาติพยายามแก้ไขความขัดแย้งอย่างสันติ' },
              { s: 'The ___ forced thousands of families to leave their homes.', sTh: 'ความขัดแย้งทำให้หลายพันครอบครัวต้องออกจากบ้าน' },
              { s: 'Their opinions seemed to ___ with each other.', sTh: 'ความเห็นของพวกเขาดูเหมือนขัดแย้งกัน' }
            ] },
          { w: 'negotiate', pos: 'v.', level: 'B2', source: 'Oxford 5000', th: 'เจรจา',
            sentence: 'The two sides agreed to ___ a peaceful solution.', sentenceTh: 'ทั้งสองฝ่ายตกลงเจรจาเพื่อหาทางออกอย่างสันติ',
            collocations: ['negotiate a deal', 'negotiate with'],
            quizBank: [
              { s: 'Diplomats worked for weeks to ___ the agreement.', sTh: 'นักการทูตทำงานหลายสัปดาห์เพื่อเจรจาข้อตกลง' },
              { s: 'It took skill to ___ with both angry groups.', sTh: 'ต้องใช้ทักษะในการเจรจากับทั้งสองกลุ่มที่โกรธ' },
              { s: 'The union tried to ___ better pay for its members.', sTh: 'สหภาพพยายามเจรจาเรื่องค่าจ้างที่ดีขึ้นให้สมาชิก' }
            ] },
          { w: 'citizenship', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'สัญชาติ/ความเป็นพลเมือง',
            sentence: 'She applied for ___ after living there for ten years.', sentenceTh: 'เธอยื่นขอสัญชาติหลังอาศัยอยู่ที่นั่นมาสิบปี',
            collocations: ['apply for citizenship', 'dual citizenship'],
            quizBank: [
              { s: 'He gained ___ after passing a language test.', sTh: 'เขาได้รับสัญชาติหลังผ่านการทดสอบภาษา' },
              { s: 'Many immigrants hope to earn ___ one day.', sTh: 'ผู้อพยพหลายคนหวังจะได้รับสัญชาติสักวันหนึ่ง' },
              { s: 'The law allows ___ to be passed on to children.', sTh: 'กฎหมายอนุญาตให้สัญชาติส่งต่อไปยังลูกได้' }
            ] }
        ]
      },
      {
        id: 'environment-5', theme: 'Environment V', themeTh: 'สิ่งแวดล้อม (ก้าวข้ามขีดจำกัด)',
        words: [
          { w: 'ocean', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'มหาสมุทร',
            sentence: 'Plastic waste is a growing problem in the ___.', sentenceTh: 'ขยะพลาสติกเป็นปัญหาที่เพิ่มขึ้นในมหาสมุทร',
            collocations: ['across the ocean', 'ocean life'],
            quizBank: [
              { s: 'Scientists study how warming affects ___ temperatures.', sTh: 'นักวิทยาศาสตร์ศึกษาว่าภาวะโลกร้อนส่งผลต่ออุณหภูมิมหาสมุทรอย่างไร' },
              { s: 'Many fish species live only in the deep ___.', sTh: 'ปลาหลายชนิดอาศัยอยู่เฉพาะในมหาสมุทรลึก' },
              { s: 'The ___ covers most of the Earth\'s surface.', sTh: 'มหาสมุทรครอบคลุมพื้นผิวโลกส่วนใหญ่' }
            ] },
          { w: 'poison', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'สารพิษ/ทำให้เป็นพิษ',
            sentence: 'Chemical waste can ___ rivers and lakes.', sentenceTh: 'ขยะเคมีสามารถทำให้แม่น้ำและทะเลสาบเป็นพิษได้',
            collocations: ['poison the water', 'food poison'],
            quizBank: [
              { s: 'The spill may ___ fish living nearby.', sTh: 'การรั่วไหลอาจทำให้ปลาที่อยู่ใกล้เคียงเป็นพิษ' },
              { s: 'Scientists found ___ in the soil near the old factory.', sTh: 'นักวิทยาศาสตร์พบสารพิษในดินใกล้โรงงานเก่า' },
              { s: 'Illegal dumping can ___ an entire water supply.', sTh: 'การทิ้งขยะอย่างผิดกฎหมายสามารถทำให้แหล่งน้ำทั้งหมดเป็นพิษ' }
            ] },
          { w: 'coal', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ถ่านหิน',
            sentence: 'Burning ___ for energy releases a lot of carbon.', sentenceTh: 'การเผาถ่านหินเพื่อผลิตพลังงานปล่อยคาร์บอนออกมามาก',
            collocations: ['a coal mine', 'burn coal'],
            quizBank: [
              { s: 'This power plant still runs on ___.', sTh: 'โรงไฟฟ้านี้ยังคงใช้ถ่านหิน' },
              { s: 'Many countries are trying to use less ___ every year.', sTh: 'หลายประเทศพยายามใช้ถ่านหินน้อยลงทุกปี' },
              { s: 'Workers dug deep underground to find ___.', sTh: 'คนงานขุดลึกลงไปใต้ดินเพื่อหาถ่านหิน' }
            ] },
          { w: 'native', pos: 'adj., n.', level: 'B1', source: 'Oxford 3000', th: 'พื้นถิ่น/ท้องถิ่นดั้งเดิม',
            sentence: 'This tree is ___ to the southern forests.', sentenceTh: 'ต้นไม้นี้เป็นพันธุ์พื้นถิ่นของป่าทางตอนใต้',
            collocations: ['native species', 'a native plant'],
            quizBank: [
              { s: 'Planting ___ trees helps support local wildlife.', sTh: 'การปลูกต้นไม้พื้นถิ่นช่วยสนับสนุนสัตว์ป่าในท้องถิ่น' },
              { s: 'These flowers are ___ to this region only.', sTh: 'ดอกไม้เหล่านี้เป็นพันธุ์พื้นถิ่นเฉพาะภูมิภาคนี้' },
              { s: 'New species sometimes threaten ___ animals.', sTh: 'สิ่งมีชีวิตชนิดใหม่บางครั้งเป็นภัยต่อสัตว์พื้นถิ่น' }
            ] },
          { w: 'seed', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'เมล็ด',
            sentence: 'Farmers plant ___s early in the spring.', sentenceTh: 'เกษตรกรปลูกเมล็ดในช่วงต้นฤดูใบไม้ผลิ',
            collocations: ['plant a seed', 'seed bank'],
            quizBank: [
              { s: 'Scientists keep rare plant ___s in a special bank.', sTh: 'นักวิทยาศาสตร์เก็บเมล็ดพันธุ์พืชหายากไว้ในธนาคารพิเศษ' },
              { s: 'Each ___ needs enough water and sunlight to grow.', sTh: 'เมล็ดแต่ละเมล็ดต้องการน้ำและแสงแดดเพียงพอเพื่อเติบโต' },
              { s: 'Birds often carry ___s from one place to another.', sTh: 'นกมักจะพาเมล็ดพันธุ์จากที่หนึ่งไปอีกที่หนึ่ง' }
            ] },
          { w: 'shell', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'เปลือก/กระดอง',
            sentence: 'The turtle pulled its head inside its ___.', sentenceTh: 'เต่าหดหัวเข้าไปในกระดองของมัน',
            collocations: ['a hard shell', 'break a shell'],
            quizBank: [
              { s: 'Ocean pollution can weaken a sea creature\'s ___.', sTh: 'มลพิษในมหาสมุทรสามารถทำให้เปลือกของสัตว์ทะเลอ่อนแอลง' },
              { s: 'Scientists study how temperature affects the thickness of a ___.', sTh: 'นักวิทยาศาสตร์ศึกษาว่าอุณหภูมิส่งผลต่อความหนาของเปลือกอย่างไร' },
              { s: 'The crab\'s ___ protects it from predators.', sTh: 'กระดองของปูช่วยปกป้องมันจากสัตว์ที่ล่าเป็นอาหาร' }
            ] },
          { w: 'fossil', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'ซากดึกดำบรรพ์/เชื้อเพลิงฟอสซิล',
            sentence: 'We must reduce our use of ___ fuels.', sentenceTh: 'เราต้องลดการใช้เชื้อเพลิงฟอสซิล',
            collocations: ['fossil fuel', 'dig up a fossil'],
            quizBank: [
              { s: 'Burning ___ fuels is a major cause of climate change.', sTh: 'การเผาเชื้อเพลิงฟอสซิลเป็นสาเหตุหลักของการเปลี่ยนแปลงสภาพภูมิอากาศ' },
              { s: 'Scientists discovered a dinosaur ___ in the desert.', sTh: 'นักวิทยาศาสตร์พบซากดึกดำบรรพ์ไดโนเสาร์ในทะเลทราย' },
              { s: 'Many countries plan to move away from ___ fuels by 2050.', sTh: 'หลายประเทศวางแผนเลิกใช้เชื้อเพลิงฟอสซิลภายในปี 2050' }
            ] },
          { w: 'severe', pos: 'adj.', level: 'B2', source: 'Oxford 3000', th: 'รุนแรง (สภาพอากาศ/ผลกระทบ)',
            sentence: 'The region suffered ___ flooding last winter.', sentenceTh: 'ภูมิภาคนี้เผชิญน้ำท่วมรุนแรงเมื่อฤดูหนาวที่แล้ว',
            collocations: ['severe weather', 'severe damage'],
            quizBank: [
              { s: 'The storm caused ___ damage to coastal towns.', sTh: 'พายุก่อให้เกิดความเสียหายรุนแรงต่อเมืองชายฝั่ง' },
              { s: 'Scientists warned of more ___ droughts in the future.', sTh: 'นักวิทยาศาสตร์เตือนเรื่องภัยแห้งที่รุนแรงขึ้นในอนาคต' },
              { s: 'This year\'s heatwave was the most ___ in decades.', sTh: 'คลื่นความร้อนปีนี้รุนแรงที่สุดในหลายสิบปี' }
            ] },
          { w: 'shortage', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'การขาดแคลน',
            sentence: 'The drought caused a serious water ___.', sentenceTh: 'ภัยแห้งก่อให้เกิดการขาดแคลนน้ำอย่างรุนแรง',
            collocations: ['a water shortage', 'food shortage'],
            quizBank: [
              { s: 'A food ___ left many families struggling.', sTh: 'การขาดแคลนอาหารทำให้หลายครอบครัวลำบาก' },
              { s: 'The city faced an energy ___ during the heatwave.', sTh: 'เมืองเผชิญการขาดแคลนพลังงานช่วงคลื่นความร้อน' },
              { s: 'Experts warned about a global water ___ in coming decades.', sTh: 'ผู้เชี่ยวชาญเตือนเรื่องการขาดแคลนน้ำระดับโลกในทศวรรษหน้า' }
            ] },
          { w: 'mining', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'การทำเหมือง',
            sentence: '___ for metals can seriously damage the land.', sentenceTh: 'การทำเหมืองเพื่อหาแร่สามารถทำลายที่ดินอย่างรุนแรง',
            collocations: ['coal mining', 'illegal mining'],
            quizBank: [
              { s: 'The village protested against the new ___ project.', sTh: 'ชาวบ้านประท้วงต่อต้านโครงการทำเหมืองใหม่' },
              { s: '___ companies must follow strict environmental rules.', sTh: 'บริษัททำเหมืองต้องปฏิบัติตามกฎสิ่งแวดล้อมที่เข้มงวด' },
              { s: 'Illegal ___ has destroyed large areas of the forest.', sTh: 'การทำเหมืองอย่างผิดกฎหมายทำลายพื้นที่ป่าขนาดใหญ่' }
            ] }
        ]
      },
      {
        id: 'science-5', theme: 'Science V', themeTh: 'วิทยาศาสตร์ (ก้าวข้ามขีดจำกัด)',
        words: [
          { w: 'chemistry', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'วิชาเคมี',
            sentence: 'She loves ___ because she enjoys mixing chemicals safely.', sentenceTh: 'เธอชอบวิชาเคมีเพราะชอบผสมสารเคมีอย่างปลอดภัย',
            collocations: ['a chemistry lesson', 'study chemistry'],
            quizBank: [
              { s: 'Our ___ teacher showed us an exciting experiment today.', sTh: 'ครูเคมีของเราแสดงการทดลองที่น่าตื่นเต้นให้ดูวันนี้' },
              { s: 'He plans to major in ___ at university.', sTh: 'เขาวางแผนจะเรียนวิชาเอกเคมีที่มหาวิทยาลัย' },
              { s: '___ class requires careful attention to safety rules.', sTh: 'วิชาเคมีต้องให้ความสำคัญกับกฎความปลอดภัยอย่างมาก' }
            ] },
          { w: 'property', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'คุณสมบัติ (ทางวิทยาศาสตร์)',
            sentence: 'Water has the ___ of expanding when it freezes.', sentenceTh: 'น้ำมีคุณสมบัติขยายตัวเมื่อแข็งตัว',
            collocations: ['a chemical property', 'physical property'],
            quizBank: [
              { s: 'Scientists study the ___ of new materials before using them.', sTh: 'นักวิทยาศาสตร์ศึกษาคุณสมบัติของวัสดุใหม่ก่อนนำไปใช้' },
              { s: 'This metal has a useful ___: it does not rust.', sTh: 'โลหะนี้มีคุณสมบัติที่มีประโยชน์คือไม่เกิดสนิม' },
              { s: 'Each element has its own unique chemical ___.', sTh: 'ธาตุแต่ละชนิดมีคุณสมบัติทางเคมีที่เป็นเอกลักษณ์ของตัวเอง' }
            ] },
          { w: 'category', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ประเภท/หมวดหมู่',
            sentence: 'Scientists sort animals into different ___s.', sentenceTh: 'นักวิทยาศาสตร์แบ่งสัตว์ออกเป็นประเภทต่างๆ',
            collocations: ['fall into a category', 'a separate category'],
            quizBank: [
              { s: 'This insect belongs to a very large ___.', sTh: 'แมลงชนิดนี้อยู่ในหมวดหมู่ที่มีขนาดใหญ่มาก' },
              { s: 'Researchers created a new ___ for this strange discovery.', sTh: 'นักวิจัยสร้างหมวดหมู่ใหม่สำหรับการค้นพบที่แปลกนี้' },
              { s: 'Each sample was placed into the correct ___.', sTh: 'ตัวอย่างแต่ละชิ้นถูกจัดเข้าหมวดหมู่ที่ถูกต้อง' }
            ] },
          { w: 'complex', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'ซับซ้อน',
            sentence: 'The human brain is an extremely ___ organ.', sentenceTh: 'สมองของมนุษย์เป็นอวัยวะที่ซับซ้อนอย่างมาก',
            collocations: ['a complex system', 'highly complex'],
            quizBank: [
              { s: 'This ecosystem is far more ___ than scientists first thought.', sTh: 'ระบบนิเวศนี้ซับซ้อนกว่าที่นักวิทยาศาสตร์คิดไว้ตอนแรกมาก' },
              { s: 'The experiment required a ___ set of instructions.', sTh: 'การทดลองนี้ต้องใช้คำสั่งที่ซับซ้อน' },
              { s: 'Scientists built a ___ model to predict the weather.', sTh: 'นักวิทยาศาสตร์สร้างแบบจำลองที่ซับซ้อนเพื่อพยากรณ์อากาศ' }
            ] },
          { w: 'indicate', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'บ่งชี้/ชี้ให้เห็น',
            sentence: 'The results ___ that the new drug is effective.', sentenceTh: 'ผลการทดสอบบ่งชี้ว่ายาตัวใหม่มีประสิทธิภาพ',
            collocations: ['indicate a trend', 'clearly indicate'],
            quizBank: [
              { s: 'This data ___s a clear link between the two factors.', sTh: 'ข้อมูลนี้บ่งชี้ความเชื่อมโยงที่ชัดเจนระหว่างสองปัจจัย' },
              { s: 'Rising temperatures ___ a change in the local climate.', sTh: 'อุณหภูมิที่สูงขึ้นบ่งชี้การเปลี่ยนแปลงของสภาพภูมิอากาศท้องถิ่น' },
              { s: 'The test results ___d that more research was needed.', sTh: 'ผลการทดสอบบ่งชี้ว่าจำเป็นต้องมีการวิจัยเพิ่มเติม' }
            ] },
          { w: 'practical', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'เชิงปฏิบัติ',
            sentence: 'Students need a ___ exam as well as a written one.', sentenceTh: 'นักเรียนต้องสอบเชิงปฏิบัติด้วย ไม่ใช่แค่สอบข้อเขียน',
            collocations: ['practical experience', 'a practical test'],
            quizBank: [
              { s: 'The course combines theory with ___ laboratory work.', sTh: 'คอร์สนี้รวมทฤษฎีเข้ากับงานปฏิบัติในห้องแล็บ' },
              { s: 'She gained ___ skills by working on real experiments.', sTh: 'เธอได้ทักษะเชิงปฏิบัติจากการทำการทดลองจริง' },
              { s: 'A ___ demonstration helps students understand the theory better.', sTh: 'การสาธิตเชิงปฏิบัติช่วยให้นักเรียนเข้าใจทฤษฎีได้ดีขึ้น' }
            ] },
          { w: 'characteristic', pos: 'n., adj.', level: 'B2', source: 'Oxford 3000', th: 'ลักษณะเฉพาะ',
            sentence: 'One key ___ of this species is its bright color.', sentenceTh: 'ลักษณะเฉพาะสำคัญของสิ่งมีชีวิตชนิดนี้คือสีสันที่สดใส',
            collocations: ['a key characteristic', 'share a characteristic'],
            quizBank: [
              { s: 'Scientists listed the main ___s of the new material.', sTh: 'นักวิทยาศาสตร์ระบุลักษณะเฉพาะหลักของวัสดุใหม่' },
              { s: 'This gene controls a ___ that is passed to offspring.', sTh: 'ยีนนี้ควบคุมลักษณะเฉพาะที่ถูกถ่ายทอดไปยังลูกหลาน' },
              { s: 'Both samples shared a similar chemical ___.', sTh: 'ตัวอย่างทั้งสองมีลักษณะเฉพาะทางเคมีที่คล้ายกัน' }
            ] },
          { w: 'classify', pos: 'v.', level: 'B2', source: 'Oxford 5000', th: 'จัดประเภท/จำแนก',
            sentence: 'Scientists ___ living things into different groups.', sentenceTh: 'นักวิทยาศาสตร์จำแนกสิ่งมีชีวิตออกเป็นกลุ่มต่างๆ',
            collocations: ['classify into groups', 'correctly classify'],
            quizBank: [
              { s: 'This new animal was difficult to ___ at first.', sTh: 'สัตว์ชนิดใหม่นี้ยากที่จะจำแนกในตอนแรก' },
              { s: 'Researchers ___ rocks based on how they were formed.', sTh: 'นักวิจัยจำแนกหินตามวิธีที่มันก่อตัวขึ้น' },
              { s: 'The sample was ___ed as a rare mineral.', sTh: 'ตัวอย่างนี้ถูกจำแนกว่าเป็นแร่หายาก' }
            ] },
          { w: 'accurate', pos: 'adj.', level: 'B2', source: 'Oxford 3000', th: 'ถูกต้องแม่นยำ',
            sentence: 'The new tool gives more ___ results than the old one.', sentenceTh: 'เครื่องมือใหม่ให้ผลลัพธ์ที่แม่นยำกว่าเครื่องเก่า',
            collocations: ['an accurate measurement', 'highly accurate'],
            quizBank: [
              { s: 'Scientists need ___ data to draw the right conclusion.', sTh: 'นักวิทยาศาสตร์ต้องการข้อมูลที่แม่นยำเพื่อให้ได้ข้อสรุปที่ถูกต้อง' },
              { s: 'This instrument is extremely ___ even at high temperatures.', sTh: 'เครื่องมือนี้แม่นยำอย่างมากแม้ในอุณหภูมิสูง' },
              { s: 'Her prediction turned out to be surprisingly ___.', sTh: 'การคาดการณ์ของเธอกลายเป็นว่าแม่นยำอย่างน่าประหลาดใจ' }
            ] },
          { w: 'precision', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'ความแม่นยำสูง',
            sentence: 'The experiment required great ___ to succeed.', sentenceTh: 'การทดลองนี้ต้องใช้ความแม่นยำสูงจึงจะสำเร็จ',
            collocations: ['with great precision', 'scientific precision'],
            quizBank: [
              { s: 'This machine can cut metal with incredible ___.', sTh: 'เครื่องจักรนี้สามารถตัดโลหะได้ด้วยความแม่นยำสูงอย่างน่าทึ่ง' },
              { s: 'Modern telescopes can measure distances with amazing ___.', sTh: 'กล้องโทรทรรศน์สมัยใหม่สามารถวัดระยะทางได้ด้วยความแม่นยำที่น่าทึ่ง' },
              { s: 'Every step of the experiment was carried out with ___.', sTh: 'ทุกขั้นตอนของการทดลองดำเนินไปด้วยความแม่นยำสูง' }
            ] }
        ]
      },
      {
        id: 'work-5', theme: 'Work V', themeTh: 'การทำงาน (ก้าวข้ามขีดจำกัด)',
        words: [
          { w: 'career', pos: 'n.', level: 'A1', source: 'Oxford 3000', th: 'อาชีพ/เส้นทางการทำงาน',
            sentence: 'She hopes to build a long ___ in medicine.', sentenceTh: 'เธอหวังจะสร้างเส้นทางอาชีพที่ยาวนานในด้านการแพทย์',
            collocations: ['a career in', 'change careers'],
            quizBank: [
              { s: 'He changed ___s twice before becoming a teacher.', sTh: 'เขาเปลี่ยนอาชีพสองครั้งก่อนจะมาเป็นครู' },
              { s: 'Choosing the right ___ can take a lot of thought.', sTh: 'การเลือกอาชีพที่เหมาะสมอาจต้องใช้ความคิดมาก' },
              { s: 'Her ___ in journalism started right after university.', sTh: 'อาชีพด้านสื่อสารมวลชนของเธอเริ่มต้นทันทีหลังเรียนจบมหาวิทยาลัย' }
            ] },
          { w: 'management', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'การบริหารจัดการ',
            sentence: 'Good ___ keeps the whole team working smoothly.', sentenceTh: 'การบริหารจัดการที่ดีทำให้ทั้งทีมทำงานได้อย่างราบรื่น',
            collocations: ['time management', 'senior management'],
            quizBank: [
              { s: 'Poor ___ was the main reason the project failed.', sTh: 'การบริหารจัดการที่ไม่ดีเป็นสาเหตุหลักที่โครงการล้มเหลว' },
              { s: 'She took a course in project ___ last year.', sTh: 'เธอเรียนคอร์สการบริหารจัดการโครงการเมื่อปีที่แล้ว' },
              { s: 'The company\'s senior ___ approved the new plan.', sTh: 'ผู้บริหารระดับสูงของบริษัทอนุมัติแผนใหม่' }
            ] },
          { w: 'afford', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'มีเงินพอ (จะซื้อ/ทำ)',
            sentence: 'We cannot ___ to hire more staff this year.', sentenceTh: 'เราไม่มีเงินพอที่จะจ้างพนักงานเพิ่มในปีนี้',
            collocations: ['afford to', 'can afford'],
            quizBank: [
              { s: 'The company could not ___ the new equipment.', sTh: 'บริษัทไม่มีเงินพอซื้ออุปกรณ์ใหม่' },
              { s: 'Can you ___ to take unpaid leave this month?', sTh: 'คุณมีเงินพอจะลาแบบไม่รับค่าจ้างเดือนนี้ไหม' },
              { s: 'Small businesses often cannot ___ expensive training programs.', sTh: 'ธุรกิจขนาดเล็กมักไม่มีเงินพอสำหรับโปรแกรมฝึกอบรมที่มีราคาแพง' }
            ] },
          { w: 'achievement', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ความสำเร็จ',
            sentence: 'Finishing the project early was a great ___.', sentenceTh: 'การทำโครงการเสร็จก่อนกำหนดเป็นความสำเร็จที่ยอดเยี่ยม',
            collocations: ['a great achievement', 'sense of achievement'],
            quizBank: [
              { s: 'Her biggest ___ was leading the team to success.', sTh: 'ความสำเร็จที่ยิ่งใหญ่ที่สุดของเธอคือการนำทีมไปสู่ความสำเร็จ' },
              { s: 'The award recognized his lifetime ___s.', sTh: 'รางวัลนี้เป็นการยกย่องความสำเร็จตลอดชีวิตของเขา' },
              { s: 'Completing the marathon felt like a personal ___.', sTh: 'การวิ่งมาราธอนจบรู้สึกเหมือนความสำเร็จส่วนตัว' }
            ] },
          { w: 'effective', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'ได้ผล/มีประสิทธิผล',
            sentence: 'Clear instructions make training more ___.', sentenceTh: 'คำแนะนำที่ชัดเจนทำให้การฝึกอบรมได้ผลมากขึ้น',
            collocations: ['an effective method', 'highly effective'],
            quizBank: [
              { s: 'The new training program proved to be very ___.', sTh: 'โปรแกรมฝึกอบรมใหม่พิสูจน์แล้วว่าได้ผลมาก' },
              { s: 'Good communication is an ___ way to avoid mistakes.', sTh: 'การสื่อสารที่ดีเป็นวิธีที่ได้ผลในการหลีกเลี่ยงความผิดพลาด' },
              { s: 'Her plan was simple but extremely ___.', sTh: 'แผนของเธอเรียบง่ายแต่ได้ผลอย่างมาก' }
            ] },
          { w: 'quit', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'ลาออก/เลิก (งาน)',
            sentence: 'He decided to ___ his job to start his own business.', sentenceTh: 'เขาตัดสินใจลาออกจากงานเพื่อเริ่มธุรกิจของตัวเอง',
            collocations: ['quit a job', 'quit smoking'],
            quizBank: [
              { s: 'She wanted to ___ but stayed because of the good pay.', sTh: 'เธอต้องการลาออกแต่ก็อยู่ต่อเพราะค่าจ้างที่ดี' },
              { s: 'Many employees ___ after the company cut their benefits.', sTh: 'พนักงานหลายคนลาออกหลังจากบริษัทตัดสวัสดิการ' },
              { s: 'He finally ___ his stressful job for a calmer one.', sTh: 'ในที่สุดเขาก็ลาออกจากงานที่เครียดเพื่อไปทำงานที่สบายกว่า' }
            ] },
          { w: 'income', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'รายได้',
            sentence: 'Her monthly ___ increased after the promotion.', sentenceTh: 'รายได้ต่อเดือนของเธอเพิ่มขึ้นหลังได้เลื่อนตำแหน่ง',
            collocations: ['a steady income', 'extra income'],
            quizBank: [
              { s: 'Many families rely on a second ___ to cover costs.', sTh: 'หลายครอบครัวพึ่งพารายได้ที่สองเพื่อครอบคลุมค่าใช้จ่าย' },
              { s: 'His freelance work gives him some extra ___.', sTh: 'งานฟรีแลนซ์ของเขาให้รายได้เสริมบางส่วน' },
              { s: 'The new job offers a much higher ___.', sTh: 'งานใหม่ให้รายได้ที่สูงกว่ามาก' }
            ] },
          { w: 'reward', pos: 'n., v.', level: 'B2', source: 'Oxford 3000', th: 'รางวัล/ตอบแทน',
            sentence: 'The company offers a ___ for the best new idea.', sentenceTh: 'บริษัทมอบรางวัลให้สำหรับความคิดใหม่ที่ดีที่สุด',
            collocations: ['a financial reward', 'reward hard work'],
            quizBank: [
              { s: 'Managers should ___ employees who work hard.', sTh: 'ผู้จัดการควรให้รางวัลตอบแทนพนักงานที่ทำงานหนัก' },
              { s: 'The team received a ___ for finishing the project early.', sTh: 'ทีมได้รับรางวัลสำหรับการทำโครงการเสร็จก่อนกำหนด' },
              { s: 'A small ___ can boost morale across the whole office.', sTh: 'รางวัลเล็กๆ สามารถยกระดับกำลังใจทั้งออฟฟิศได้' }
            ] },
          { w: 'resign', pos: 'v.', level: 'B2', source: 'Oxford 5000', th: 'ลาออก (เป็นทางการ)',
            sentence: 'She decided to ___ after fifteen years at the company.', sentenceTh: 'เธอตัดสินใจลาออกหลังทำงานที่บริษัทมาสิบห้าปี',
            collocations: ['resign from a position', 'officially resign'],
            quizBank: [
              { s: 'He chose to ___ rather than accept the new policy.', sTh: 'เขาเลือกที่จะลาออกมากกว่ายอมรับนโยบายใหม่' },
              { s: 'The manager ___ed suddenly, surprising the whole team.', sTh: 'ผู้จัดการลาออกอย่างกะทันหัน ทำให้ทั้งทีมประหลาดใจ' },
              { s: 'She submitted a letter to formally ___ from her role.', sTh: 'เธอยื่นหนังสือลาออกจากตำแหน่งอย่างเป็นทางการ' }
            ] },
          { w: 'integrity', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'ความซื่อสัตย์ (เชิงหลักการ)',
            sentence: 'He is known for his honesty and professional ___.', sentenceTh: 'เขาเป็นที่รู้จักในเรื่องความซื่อตรงและความซื่อสัตย์ในงาน',
            collocations: ['act with integrity', 'professional integrity'],
            quizBank: [
              { s: 'The company values ___ more than quick profit.', sTh: 'บริษัทให้ความสำคัญกับความซื่อสัตย์มากกว่าผลกำไรที่รวดเร็ว' },
              { s: 'She handled the difficult situation with great ___.', sTh: 'เธอจัดการสถานการณ์ที่ยากลำบากด้วยความซื่อตรงอย่างมาก' },
              { s: 'Employees are expected to act with ___ at all times.', sTh: 'พนักงานถูกคาดหวังให้ปฏิบัติด้วยความซื่อสัตย์ตลอดเวลา' }
            ] }
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
