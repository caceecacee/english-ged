/* คลังคำศัพท์ "เตรียมสอบ" ทริปที่ 13 — อิง Oxford 3000 (A1–B2) และ Oxford 5000 (C1) เป็นแหล่งอ้างอิงระดับ
   ที่มา: oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/
          The_Oxford_3000_by_CEFR_level.pdf และ The_Oxford_5000_by_CEFR_level.pdf (ดึงและตรวจสอบระดับคำทุกคำจริง)
   ดูนโยบายสัดส่วน/โครงสร้างข้อมูลเต็มที่ examvocab-trip-01.js — ทริปนี้ใช้กฎเดียวกันทุกข้อ (50 คำใหม่ ไม่ซ้ำกับทริป 1-12) */
(function (root) {
  var EP = root.EP = root.EP || {};
  EP.examVocab = EP.examVocab || { trips: [] };
  EP.examVocab.trips.push({
    id: 'trip-13',
    name: 'ก้าวข้ามพรมแดน',
    sets: [
      {
        id: 'university-life-13', theme: 'University Life XIII', themeTh: 'ชีวิตมหาวิทยาลัย (ก้าวข้ามพรมแดน)',
        words: [
          { w: 'student', pos: 'n.', level: 'A1', source: 'Oxford 3000', th: 'นักศึกษา',
            sentence: 'Every ___ receives a welcome pack on the first day.', sentenceTh: 'นักศึกษาทุกคนได้รับชุดต้อนรับในวันแรก',
            collocations: ['an international student', 'a student card'],
            quizBank: [
              { s: 'The ___ union organizes events for new arrivals.', sTh: 'สหภาพนักศึกษาจัดกิจกรรมสำหรับผู้มาใหม่' },
              { s: 'A foreign ___ must register with the office within a week.', sTh: 'นักศึกษาต่างชาติต้องลงทะเบียนกับสำนักงานภายในหนึ่งสัปดาห์' },
              { s: 'Each ___ gets access to the library with a valid card.', sTh: 'นักศึกษาแต่ละคนเข้าห้องสมุดได้ด้วยบัตรที่ใช้งานได้' }
            ] },
          { w: 'suitable', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'เหมาะสม',
            sentence: 'This apartment is ___ for students who study abroad.', sentenceTh: 'อพาร์ตเมนต์นี้เหมาะสมสำหรับนักศึกษาที่ไปเรียนต่างประเทศ',
            collocations: ['suitable for', 'a suitable course'],
            quizBank: [
              { s: 'The university helps students find a ___ place to live.', sTh: 'มหาวิทยาลัยช่วยนักศึกษาหาที่พักที่เหมาะสม' },
              { s: 'Is this program ___ for someone with no experience?', sTh: 'โปรแกรมนี้เหมาะสมกับคนที่ไม่มีประสบการณ์ไหม' },
              { s: 'Choose a ___ time to meet your advisor.', sTh: 'เลือกเวลาที่เหมาะสมในการพบอาจารย์ที่ปรึกษา' }
            ] },
          { w: 'amazed', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'ทึ่ง/ประหลาดใจ',
            sentence: 'She was ___ by how quickly the city felt like home.', sentenceTh: 'เธอทึ่งที่เมืองนี้รู้สึกเหมือนบ้านได้อย่างรวดเร็ว',
            collocations: ['be amazed at', 'an amazed look'],
            quizBank: [
              { s: 'He was ___ at the size of the university library.', sTh: 'เขาทึ่งกับขนาดของห้องสมุดมหาวิทยาลัย' },
              { s: 'The visitors looked ___ as they walked through the campus.', sTh: 'ผู้มาเยือนดูทึ่งขณะเดินชมมหาวิทยาลัย' },
              { s: 'Her ___ expression showed how much she loved the lecture.', sTh: 'สีหน้าทึ่งของเธอแสดงให้เห็นว่าเธอชอบการบรรยายมาก' }
            ] },
          { w: 'disappointed', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'ผิดหวัง',
            sentence: 'He felt ___ when his application was delayed.', sentenceTh: 'เขารู้สึกผิดหวังเมื่อใบสมัครของเขาล่าช้า',
            collocations: ['feel disappointed', 'disappointed with'],
            quizBank: [
              { s: 'She was ___ with her first exam result.', sTh: 'เธอผิดหวังกับผลสอบครั้งแรกของเธอ' },
              { s: 'Many students feel ___ when a course is full.', sTh: 'นักเรียนหลายคนรู้สึกผิดหวังเมื่อคอร์สเต็ม' },
              { s: 'The ___ students left the hall after the announcement.', sTh: 'นักเรียนที่ผิดหวังออกจากหอประชุมหลังประกาศ' }
            ] },
          { w: 'uncomfortable', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'ไม่สบายใจ',
            sentence: 'Speaking in a new language can feel ___ at first.', sentenceTh: 'การพูดภาษาใหม่อาจรู้สึกไม่สบายใจในช่วงแรก',
            collocations: ['feel uncomfortable', 'an uncomfortable silence'],
            quizBank: [
              { s: 'The narrow dormitory bed was ___ for him.', sTh: 'เตียงแคบในหอพักทำให้เขาไม่สบาย' },
              { s: 'She felt ___ asking for help in a foreign office.', sTh: 'เธอรู้สึกไม่สบายใจที่ต้องขอความช่วยเหลือในสำนักงานต่างประเทศ' },
              { s: 'A ___ silence filled the room after the question.', sTh: 'ความเงียบที่ไม่สบายใจปกคลุมห้องหลังคำถาม' }
            ] },
          { w: 'aware', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'ตระหนัก/รู้ตัว',
            sentence: 'Most new students are ___ of the cost of living abroad.', sentenceTh: 'นักศึกษาใหม่ส่วนใหญ่ตระหนักถึงค่าครองชีพในต่างประเทศ',
            collocations: ['aware of', 'become aware'],
            quizBank: [
              { s: 'He was not ___ that the deadline had changed.', sTh: 'เขาไม่รู้ตัวว่ากำหนดเวลาเปลี่ยนไปแล้ว' },
              { s: 'Please make students ___ of the safety rules.', sTh: 'กรุณาทำให้นักศึกษาตระหนักถึงกฎความปลอดภัย' },
              { s: 'She became ___ of the scholarship only at the last minute.', sTh: 'เธอรู้ตัวเรื่องทุนการศึกษาก็ตอนนาทีสุดท้าย' }
            ] },
          { w: 'attempt', pos: 'n., v.', level: 'B2', source: 'Oxford 3000', th: 'ความพยายาม/พยายาม',
            sentence: 'Her first ___ to apply abroad was unsuccessful.', sentenceTh: 'ความพยายามครั้งแรกของเธอในการสมัครเรียนต่างประเทศไม่สำเร็จ',
            collocations: ['make an attempt', 'attempt to'],
            quizBank: [
              { s: 'He made a serious ___ to improve his grades this year.', sTh: 'เขาพยายามอย่างจริงจังเพื่อพัฒนาเกรดในปีนี้' },
              { s: 'They ___ed to finish the project before the deadline.', sTh: 'พวกเขาพยายามทำโครงการให้เสร็จก่อนกำหนด' },
              { s: 'Every ___ to pass the test was worth the effort.', sTh: 'ทุกความพยายามที่จะสอบผ่านคุ้มค่ากับความพยายามนั้น' }
            ] },
          { w: 'adapt', pos: 'v.', level: 'B2', source: 'Oxford 3000', th: 'ปรับตัว',
            sentence: 'Most students quickly ___ to life in a new country.', sentenceTh: 'นักศึกษาส่วนใหญ่ปรับตัวกับชีวิตในประเทศใหม่ได้อย่างรวดเร็ว',
            collocations: ['adapt to', 'adapt quickly'],
            quizBank: [
              { s: 'It takes time to ___ to a different education system.', sTh: 'ต้องใช้เวลาในการปรับตัวกับระบบการศึกษาที่แตกต่าง' },
              { s: 'She learned to ___ her study habits to the new schedule.', sTh: 'เธอเรียนรู้ที่จะปรับนิสัยการอ่านหนังสือให้เข้ากับตารางใหม่' },
              { s: 'Animals must ___ to changing weather conditions.', sTh: 'สัตว์ต้องปรับตัวให้เข้ากับสภาพอากาศที่เปลี่ยนไป' }
            ] },
          { w: 'approval', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'การอนุมัติ',
            sentence: 'The student needed the advisor\'s ___ before studying abroad.', sentenceTh: 'นักศึกษาต้องได้รับการอนุมัติจากอาจารย์ที่ปรึกษาก่อนไปเรียนต่างประเทศ',
            collocations: ['gain approval', 'official approval'],
            quizBank: [
              { s: 'The course change still needs final ___ from the dean.', sTh: 'การเปลี่ยนคอร์สยังต้องได้รับการอนุมัติขั้นสุดท้ายจากคณบดี' },
              { s: 'Her plan received quick ___ from the committee.', sTh: 'แผนของเธอได้รับการอนุมัติอย่างรวดเร็วจากคณะกรรมการ' },
              { s: 'The exchange program needs ___ from the ministry.', sTh: 'โครงการแลกเปลี่ยนต้องได้รับการอนุมัติจากกระทรวง' }
            ] },
          { w: 'eligible', pos: 'adj.', level: 'C1', source: 'Oxford 5000', th: 'มีคุณสมบัติ',
            sentence: 'Only final-year students are ___ for the exchange scholarship.', sentenceTh: 'มีเพียงนักศึกษาชั้นปีสุดท้ายที่มีคุณสมบัติสำหรับทุนแลกเปลี่ยน',
            collocations: ['eligible for', 'eligible to apply'],
            quizBank: [
              { s: 'Students with a valid visa are ___ to enroll.', sTh: 'นักศึกษาที่มีวีซ่าที่ใช้งานได้มีคุณสมบัติในการลงทะเบียน' },
              { s: 'Check whether you are ___ before submitting the form.', sTh: 'ตรวจสอบว่าคุณมีคุณสมบัติหรือไม่ก่อนส่งแบบฟอร์ม' },
              { s: 'Only ___ applicants will be invited to an interview.', sTh: 'มีเพียงผู้สมัครที่มีคุณสมบัติเท่านั้นที่จะได้รับเชิญสัมภาษณ์' }
            ] }
        ]
      },
      {
        id: 'social-news-13', theme: 'Social News XIII', themeTh: 'ความเชื่อและศาสนา (ก้าวข้ามพรมแดน)',
        words: [
          { w: 'celebrate', pos: 'v.', level: 'A2', source: 'Oxford 3000', th: 'เฉลิมฉลอง',
            sentence: 'Families gather in the temple to ___ the New Year.', sentenceTh: 'ครอบครัวมารวมตัวกันที่วัดเพื่อเฉลิมฉลองปีใหม่',
            collocations: ['celebrate a festival', 'celebrate together'],
            quizBank: [
              { s: 'The town will ___ its founding with a parade.', sTh: 'เมืองจะเฉลิมฉลองวันก่อตั้งด้วยขบวนพาเหรด' },
              { s: 'Students ___d their graduation with a big dinner.', sTh: 'นักศึกษาเฉลิมฉลองการจบการศึกษาด้วยการทานอาหารค่ำใหญ่' },
              { s: 'People come from far away to ___ the harvest festival.', sTh: 'ผู้คนเดินทางมาไกลเพื่อเฉลิมฉลองเทศกาลเก็บเกี่ยว' }
            ] },
          { w: 'religion', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ศาสนา',
            sentence: 'The museum explains how ___ shaped the local culture.', sentenceTh: 'พิพิธภัณฑ์อธิบายว่าศาสนาหล่อหลอมวัฒนธรรมท้องถิ่นอย่างไร',
            collocations: ['a world religion', 'freedom of religion'],
            quizBank: [
              { s: 'The course explores the history of major world ___s.', sTh: 'คอร์สนี้สำรวจประวัติศาสตร์ของศาสนาหลักของโลก' },
              { s: 'Every citizen has the right to choose their own ___.', sTh: 'พลเมืองทุกคนมีสิทธิเลือกศาสนาของตนเอง' },
              { s: 'Many festivals in the region are linked to ___.', sTh: 'เทศกาลหลายแห่งในภูมิภาคนี้เกี่ยวข้องกับศาสนา' }
            ] },
          { w: 'belief', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ความเชื่อ (ทั่วไป)',
            sentence: 'Her ___ in fairness guided every decision she made.', sentenceTh: 'ความเชื่อเรื่องความเป็นธรรมนำทางการตัดสินใจทุกครั้งของเธอ',
            collocations: ['a strong belief', 'beyond belief'],
            quizBank: [
              { s: 'Many people hold the ___ that hard work brings success.', sTh: 'คนจำนวนมากมีความเชื่อว่าการทำงานหนักนำไปสู่ความสำเร็จ' },
              { s: 'The village shares a common ___ about the river spirit.', sTh: 'หมู่บ้านมีความเชื่อร่วมกันเกี่ยวกับวิญญาณแม่น้ำ' },
              { s: 'His ___ that people can change was never shaken.', sTh: 'ความเชื่อของเขาว่าคนเปลี่ยนแปลงได้ไม่เคยสั่นคลอน' }
            ] },
          { w: 'priest', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'นักบวช/บาทหลวง',
            sentence: 'The old ___ welcomed visitors at the small church.', sentenceTh: 'นักบวชคนเก่าต้อนรับผู้มาเยือนที่โบสถ์เล็กๆ',
            collocations: ['a Catholic priest', 'a local priest'],
            quizBank: [
              { s: 'The ___ led the morning ceremony in the village.', sTh: 'นักบวชเป็นผู้นำพิธีในตอนเช้าของหมู่บ้าน' },
              { s: 'A young ___ started a weekly meeting for students.', sTh: 'นักบวชหนุ่มเริ่มการประชุมรายสัปดาห์สำหรับนักเรียน' },
              { s: 'Families asked the ___ to bless their new house.', sTh: 'ครอบครัวขอให้นักบวชอวยพรบ้านใหม่ของพวกเขา' }
            ] },
          { w: 'pray', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'สวดมนต์/อธิษฐาน',
            sentence: 'Villagers gather at dawn to ___ for good rain.', sentenceTh: 'ชาวบ้านมารวมตัวตอนรุ่งสางเพื่ออธิษฐานขอฝนดี',
            collocations: ['pray for', 'pray together'],
            quizBank: [
              { s: 'Some people ___ before every meal.', sTh: 'บางคนสวดมนต์ก่อนทุกมื้ออาหาร' },
              { s: 'The family went to the temple to ___ for their sick father.', sTh: 'ครอบครัวไปวัดเพื่ออธิษฐานให้พ่อที่ป่วย' },
              { s: 'She ___ed silently before the big exam.', sTh: 'เธอสวดมนต์เงียบๆ ก่อนการสอบใหญ่' }
            ] },
          { w: 'prayer', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'การสวดมนต์',
            sentence: 'The community held a short ___ for the victims.', sentenceTh: 'ชุมชนจัดการสวดมนต์สั้นๆ เพื่อผู้ประสบภัย',
            collocations: ['say a prayer', 'a prayer meeting'],
            quizBank: [
              { s: 'Every morning, the monks begin with a quiet ___.', sTh: 'ทุกเช้า พระสงฆ์เริ่มต้นด้วยการสวดมนต์อย่างเงียบๆ' },
              { s: 'The ___ room is open to visitors of all faiths.', sTh: 'ห้องสวดมนต์เปิดให้ผู้เยี่ยมชมทุกศรัทธา' },
              { s: 'He whispered a ___ before entering the examination hall.', sTh: 'เขากระซิบคำอธิษฐานก่อนเข้าห้องสอบ' }
            ] },
          { w: 'faith', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'ศรัทธา',
            sentence: 'Her ___ gave her strength during the hard years.', sentenceTh: 'ศรัทธาของเธอให้กำลังใจในช่วงปีที่ยากลำบาก',
            collocations: ['have faith in', 'a deep faith'],
            quizBank: [
              { s: 'People of many different ___s live peacefully in the city.', sTh: 'ผู้คนที่มีศรัทธาต่างกันมากมายอยู่ร่วมกันอย่างสงบในเมือง' },
              { s: 'He lost ___ in the system after the unfair decision.', sTh: 'เขาสูญเสียศรัทธาในระบบหลังการตัดสินที่ไม่เป็นธรรม' },
              { s: 'Her ___ in the community helped her to keep going.', sTh: 'ความศรัทธาในชุมชนช่วยให้เธอก้าวต่อไปได้' }
            ] },
          { w: 'temple', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'วัด/วิหาร',
            sentence: 'Tourists often visit the old ___ in the hills.', sentenceTh: 'นักท่องเที่ยวมักไปเยี่ยมชมวัดเก่าบนเนินเขา',
            collocations: ['a Buddhist temple', 'visit a temple'],
            quizBank: [
              { s: 'The ___ attracts thousands of visitors every spring.', sTh: 'วัดนี้ดึงดูดผู้มาเยือนหลายพันคนทุกฤดูใบไม้ผลิ' },
              { s: 'Visitors must remove their shoes before entering the ___.', sTh: 'ผู้มาเยือนต้องถอดรองเท้าก่อนเข้าวัด' },
              { s: 'The ___ was restored after the earthquake.', sTh: 'วัดได้รับการบูรณะหลังแผ่นดินไหว' }
            ] },
          { w: 'mosque', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'มัสยิด',
            sentence: 'The new ___ opened near the central market.', sentenceTh: 'มัสยิดแห่งใหม่เปิดใกล้ตลาดกลาง',
            collocations: ['a large mosque', 'attend a mosque'],
            quizBank: [
              { s: 'Neighbors gathered at the ___ for the Friday prayer.', sTh: 'เพื่อนบ้านมารวมตัวกันที่มัสยิดเพื่อละหมาดวันศุกร์' },
              { s: 'The ___ hosts a community kitchen every weekend.', sTh: 'มัสยิดจัดครัวชุมชนทุกสุดสัปดาห์' },
              { s: 'Architects studied the design of the old ___.', sTh: 'สถาปนิกศึกษาการออกแบบของมัสยิดเก่า' }
            ] },
          { w: 'sacred', pos: 'adj.', level: 'C1', source: 'Oxford 5000', th: 'ศักดิ์สิทธิ์',
            sentence: 'The mountain is considered ___ by the local people.', sentenceTh: 'ภูเขาลูกนี้ถือว่าศักดิ์สิทธิ์โดยชาวบ้านท้องถิ่น',
            collocations: ['sacred site', 'a sacred place'],
            quizBank: [
              { s: 'The river is a ___ place for many communities.', sTh: 'แม่น้ำเป็นสถานที่ศักดิ์สิทธิ์สำหรับหลายชุมชน' },
              { s: 'Visitors must show respect at this ___ ground.', sTh: 'ผู้มาเยือนต้องแสดงความเคารพในพื้นที่ศักดิ์สิทธิ์นี้' },
              { s: 'The ancient text is treated as a ___ document.', sTh: 'ข้อความโบราณนี้ถูกปฏิบัติเหมือนเอกสารศักดิ์สิทธิ์' }
            ] }
        ]
      },
      {
        id: 'environment-13', theme: 'Environment XIV', themeTh: 'ป่าไม้ (ก้าวข้ามพรมแดน)',
        words: [
          { w: 'forest', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'ป่า',
            sentence: 'The ___ is home to more than fifty bird species.', sentenceTh: 'ป่านี้เป็นที่อยู่ของนกมากกว่าห้าสิบชนิด',
            collocations: ['a rain forest', 'deep in the forest'],
            quizBank: [
              { s: 'Rangers patrol the ___ every night to stop illegal logging.', sTh: 'เจ้าหน้าที่ลาดตระเวนป่าทุกคืนเพื่อหยุดการตัดไม้ผิดกฎหมาย' },
              { s: 'Children learned about plants during a walk in the ___.', sTh: 'เด็กๆ เรียนรู้เรื่องพืชระหว่างการเดินในป่า' },
              { s: 'Much of the ___ was lost to fires last year.', sTh: 'ป่าส่วนใหญ่สูญเสียไปจากไฟป่าเมื่อปีที่แล้ว' }
            ] },
          { w: 'leaf', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ใบไม้',
            sentence: 'Each autumn, the tree drops its orange ___s.', sentenceTh: 'ทุกฤดูใบไม้ร่วง ต้นไม้ทิ้งใบสีส้ม',
            collocations: ['a green leaf', 'fallen leaves'],
            quizBank: [
              { s: 'A single ___ can collect a lot of sunlight.', sTh: 'ใบไม้ใบเดียวสามารถรับแสงอาทิตย์ได้มาก' },
              { s: 'The path was covered with wet ___s after the rain.', sTh: 'ทางเดินปกคลุมด้วยใบไม้เปียกหลังฝนตก' },
              { s: 'Scientists studied the veins of the ___ under a microscope.', sTh: 'นักวิทยาศาสตร์ศึกษาเส้นใบของใบไม้ผ่านกล้องจุลทรรศน์' }
            ] },
          { w: 'branch', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'กิ่งไม้',
            sentence: 'A heavy ___ fell across the trail during the storm.', sentenceTh: 'กิ่งไม้หนักหล่นขวางทางเดินระหว่างพายุ',
            collocations: ['a tree branch', 'a broken branch'],
            quizBank: [
              { s: 'Birds built their nest on a high ___.', sTh: 'นกสร้างรังบนกิ่งไม้สูง' },
              { s: 'Remove any dead ___es before the storm season.', sTh: 'ตัดกิ่งไม้ที่ตายแล้วออกก่อนฤดูพายุ' },
              { s: 'The monkey jumped from one ___ to another.', sTh: 'ลิงกระโดดจากกิ่งไม้หนึ่งไปอีกกิ่งหนึ่ง' }
            ] },
          { w: 'mud', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'โคลน',
            sentence: 'The hikers were covered in ___ after the rain.', sentenceTh: 'นักเดินป่าเต็มไปด้วยโคลนหลังฝนตก',
            collocations: ['thick mud', 'mud and rain'],
            quizBank: [
              { s: 'The truck got stuck in the ___ near the river.', sTh: 'รถบรรทุกติดอยู่ในโคลนใกล้แม่น้ำ' },
              { s: 'Children love to play in the ___ after a storm.', sTh: 'เด็กๆ ชอบเล่นในโคลนหลังพายุ' },
              { s: 'Heavy rain turned the trail into deep ___.', sTh: 'ฝนตกหนักทำให้ทางเดินกลายเป็นโคลนลึก' }
            ] },
          { w: 'guard', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'ยาม/คุ้มกัน',
            sentence: 'A park ___ checks the entrance every morning.', sentenceTh: 'ยามของอุทยานตรวจทางเข้าทุกเช้า',
            collocations: ['guard the forest', 'a security guard'],
            quizBank: [
              { s: 'Two ___s protect the reserve from poachers at night.', sTh: 'ยามสองคนคุ้มกันเขตอนุรักษ์จากผู้ลักลอบล่าสัตว์ตอนกลางคืน' },
              { s: 'Volunteers ___ the nesting area during the breeding season.', sTh: 'อาสาสมัครคุ้มกันพื้นที่ทำรังในฤดูผสมพันธุ์' },
              { s: 'The ___ stopped the trucks at the gate.', sTh: 'ยามหยุดรถบรรทุกที่ประตู' }
            ] },
          { w: 'spread', pos: 'v., n.', level: 'B1', source: 'Oxford 3000', th: 'แพร่กระจาย',
            sentence: 'The fire began to ___ quickly through the dry grass.', sentenceTh: 'ไฟเริ่มลามอย่างรวดเร็วผ่านหญ้าแห้ง',
            collocations: ['spread quickly', 'spread of disease'],
            quizBank: [
              { s: 'The disease can ___ from tree to tree.', sTh: 'โรคนี้สามารถแพร่กระจายจากต้นไม้หนึ่งไปอีกต้นได้' },
              { s: 'Rangers worked hard to stop the ___ of the fire.', sTh: 'เจ้าหน้าที่ทำงานหนักเพื่อหยุดการลุกลามของไฟ' },
              { s: 'Seeds ___ far by the wind in autumn.', sTh: 'เมล็ดพันธุ์แพร่กระจายไปไกลด้วยลมในฤดูใบไม้ร่วง' }
            ] },
          { w: 'shade', pos: 'n., v.', level: 'B2', source: 'Oxford 3000', th: 'ร่มเงา',
            sentence: 'Hikers rested in the cool ___ under the old oak.', sentenceTh: 'นักเดินป่าพักในร่มเงาเย็นใต้ต้นโอ๊กเก่า',
            collocations: ['in the shade', 'shade from the sun'],
            quizBank: [
              { s: 'Tall trees provide ___ for the animals below.', sTh: 'ต้นไม้สูงให้ร่มเงาแก่สัตว์ที่อยู่ข้างล่าง' },
              { s: 'A thick canopy can ___ the forest floor from sunlight.', sTh: 'เรือนยอดที่หนาสามารถบังแสงแดดจากพื้นป่าได้' },
              { s: 'Please sit in the ___ during the afternoon heat.', sTh: 'กรุณานั่งในร่มเงาในช่วงความร้อนตอนบ่าย' }
            ] },
          { w: 'bush', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'พุ่มไม้',
            sentence: 'A small bird hid inside the thick ___.', sentenceTh: 'นกตัวเล็กซ่อนตัวอยู่ในพุ่มไม้หนาทึบ',
            collocations: ['a thorny bush', 'a rose bush'],
            quizBank: [
              { s: 'Caterpillars often feed on the leaves of this ___.', sTh: 'หนอนผีเสื้อมักกินใบของพุ่มไม้ชนิดนี้' },
              { s: 'Rabbits ran under the ___ when the dog barked.', sTh: 'กระต่ายวิ่งลอดใต้พุ่มไม้เมื่อสุนัขเห่า' },
              { s: 'The park removed the dry ___es along the path.', sTh: 'อุทยานตัดพุ่มไม้แห้งออกตามทางเดิน' }
            ] },
          { w: 'crack', pos: 'v., n.', level: 'B2', source: 'Oxford 5000', th: 'รอยแตก/แตกร้าว',
            sentence: 'A thin ___ appeared in the old wooden bridge.', sentenceTh: 'รอยแตกเล็กๆ ปรากฏบนสะพานไม้เก่า',
            collocations: ['a crack in', 'crack open'],
            quizBank: [
              { s: 'Dry weather can ___ the bark of old trees.', sTh: 'อากาศแห้งสามารถทำให้เปลือกไม้เก่าแตกได้' },
              { s: 'Engineers checked the path for any ___s after the flood.', sTh: 'วิศวกรตรวจทางเดินหารอยแตกใดๆ หลังน้ำท่วม' },
              { s: 'The ground ___ed open during the long drought.', sTh: 'พื้นดินแตกออกระหว่างภัยแล้งที่ยาวนาน' }
            ] },
          { w: 'timber', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'ไม้ซุง/ไม้ก่อสร้าง',
            sentence: 'Illegal loggers cut down trees to sell the ___.', sentenceTh: 'คนตัดไม้ผิดกฎหมายตัดต้นไม้เพื่อขายไม้ซุง',
            collocations: ['timber industry', 'high-quality timber'],
            quizBank: [
              { s: 'The house was built with local ___ and stone.', sTh: 'บ้านหลังนี้สร้างด้วยไม้ก่อสร้างและหินในท้องถิ่น' },
              { s: 'Export of raw ___ is now restricted by law.', sTh: 'การส่งออกไม้ซุงดิบถูกจำกัดโดยกฎหมายแล้ว' },
              { s: 'The factory turns ___ into furniture and floors.', sTh: 'โรงงานแปรรูปไม้ก่อสร้างเป็นเฟอร์นิเจอร์และพื้น' }
            ] }
        ]
      },
      {
        id: 'science-13', theme: 'Science XIV', themeTh: 'โลกและแร่ธาตุ (ก้าวข้ามพรมแดน)',
        words: [
          { w: 'rock', pos: 'n., v.', level: 'A2', source: 'Oxford 3000', th: 'หิน',
            sentence: 'Geologists study the ___s found in the mountain cliffs.', sentenceTh: 'นักธรณีวิทยาศึกษาหินที่พบบนหน้าผาภูเขา',
            collocations: ['solid rock', 'a rock formation'],
            quizBank: [
              { s: 'The hikers sat on a large flat ___ by the lake.', sTh: 'นักเดินป่านั่งบนหินแบนขนาดใหญ่ริมทะเลสาบ' },
              { s: 'Volcanic ___ can be black, grey, or red.', sTh: 'หินภูเขาไฟอาจเป็นสีดำ เทา หรือแดง' },
              { s: 'The boat ___ed gently from side to side in the waves.', sTh: 'เรือโยกเบาๆ จากซ้ายไปขวาตามคลื่น' }
            ] },
          { w: 'earthquake', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'แผ่นดินไหว',
            sentence: 'Engineers designed the building to survive an ___.', sentenceTh: 'วิศวกรออกแบบอาคารให้รอดจากแผ่นดินไหว',
            collocations: ['a strong earthquake', 'earthquake damage'],
            quizBank: [
              { s: 'The ___ shook the whole city for almost a minute.', sTh: 'แผ่นดินไหวทำให้ทั้งเมืองสั่นไหวเกือบหนึ่งนาที' },
              { s: 'Scientists study how each ___ releases energy.', sTh: 'นักวิทยาศาสตร์ศึกษาว่าแผ่นดินไหวแต่ละครั้งปลดปล่อยพลังงานอย่างไร' },
              { s: 'Schools practice drills in case of an ___.', sTh: 'โรงเรียนซ้อมการอพยพกรณีเกิดแผ่นดินไหว' }
            ] },
          { w: 'iron', pos: 'n., adj.', level: 'B1', source: 'Oxford 3000', th: 'เหล็ก',
            sentence: 'The core of the Earth is mostly made of ___.', sentenceTh: 'แกนกลางของโลกประกอบด้วยเหล็กเป็นหลัก',
            collocations: ['cast iron', 'iron ore'],
            quizBank: [
              { s: 'Old bridges were often built with heavy ___.', sTh: 'สะพานเก่ามักถูกสร้างด้วยเหล็กหนัก' },
              { s: 'The rust on the ___ gate showed its age.', sTh: 'สนิมบนประตูเหล็กแสดงให้เห็นอายุของมัน' },
              { s: 'Blood contains a small amount of ___.', sTh: 'เลือดมีเหล็กอยู่ในปริมาณเล็กน้อย' }
            ] },
          { w: 'diamond', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'เพชร',
            sentence: 'The hardest natural material on Earth is the ___.', sentenceTh: 'วัสดุธรรมชาติที่แข็งที่สุดบนโลกคือเพชร',
            collocations: ['a diamond ring', 'a rough diamond'],
            quizBank: [
              { s: 'Miners found a tiny ___ in the river gravel.', sTh: 'คนงานเหมืองพบเพชรเม็ดเล็กในกรวดแม่น้ำ' },
              { s: 'A ___ can cut through almost any other mineral.', sTh: 'เพชรสามารถตัดแร่อื่นเกือบทุกชนิดได้' },
              { s: 'The jeweler polished the ___ until it sparkled.', sTh: 'ช่างอัญมณีขัดเพชรจนระยิบระยับ' }
            ] },
          { w: 'bury', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'ฝัง',
            sentence: 'Ancient animals were often ___ied under layers of mud.', sentenceTh: 'สัตว์โบราณมักถูกฝังอยู่ใต้ชั้นโคลน',
            collocations: ['bury treasure', 'buried deep'],
            quizBank: [
              { s: 'Archaeologists ___ied tools near the old settlement.', sTh: 'นักโบราณคดีพบเครื่องมือที่ฝังไว้ใกล้ชุมชนโบราณ' },
              { s: 'The seeds were ___ied in the soil before winter.', sTh: 'เมล็ดพันธุ์ถูกฝังในดินก่อนฤดูหนาว' },
              { s: 'Volcanic ash can ___ entire villages in hours.', sTh: 'เถ้าภูเขาไฟสามารถฝังหมู่บ้านทั้งหมดได้ภายในไม่กี่ชั่วโมง' }
            ] },
          { w: 'explode', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'ระเบิด',
            sentence: 'The volcano began to ___ after weeks of tremors.', sentenceTh: 'ภูเขาไฟเริ่มระเบิดหลังจากเกิดการสั่นสะเทือนหลายสัปดาห์',
            collocations: ['explode into', 'explode suddenly'],
            quizBank: [
              { s: 'Gas can ___ if it is trapped in a sealed container.', sTh: 'แก๊สสามารถระเบิดได้หากถูกขังไว้ในภาชนะปิดสนิท' },
              { s: 'The pressure built up until the rock began to ___.', sTh: 'แรงดันสะสมจนหินเริ่มระเบิด' },
              { s: 'Scientists watched the star ___ in a bright flash.', sTh: 'นักวิทยาศาสตร์เฝ้าดูดาวระเบิดเป็นแสงวาบสว่าง' }
            ] },
          { w: 'era', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'ยุค',
            sentence: 'Fossils from this ___ reveal how the first forests grew.', sentenceTh: 'ฟอสซิลจากยุคนี้เผยให้เห็นว่าป่าแรกเติบโตอย่างไร',
            collocations: ['the Ice Age era', 'a new era'],
            quizBank: [
              { s: 'The museum displays tools from the stone ___.', sTh: 'พิพิธภัณฑ์จัดแสดงเครื่องมือจากยุคหิน' },
              { s: 'Geologists divide Earth\'s history into long ___s.', sTh: 'นักธรณีวิทยาแบ่งประวัติศาสตร์โลกเป็นยุคยาวนาน' },
              { s: 'Dinosaurs lived in an ___ long before humans appeared.', sTh: 'ไดโนเสาร์อาศัยอยู่ในยุคหนึ่งนานก่อนที่มนุษย์จะปรากฏ' }
            ] },
          { w: 'split', pos: 'v., n.', level: 'B2', source: 'Oxford 3000', th: 'แยก/แตก',
            sentence: 'The rock ___ into two pieces after the heavy frost.', sentenceTh: 'หินแตกออกเป็นสองชิ้นหลังน้ำค้างแข็งหนัก',
            collocations: ['split apart', 'a split in'],
            quizBank: [
              { s: 'The continent slowly began to ___ over millions of years.', sTh: 'ทวีปค่อยๆ แยกออกจากกันเป็นเวลาหลายล้านปี' },
              { s: 'Water seeped into the crack and ___ the stone.', sTh: 'น้ำไหลเข้าไปในรอยแตกและทำให้หินแยกออก' },
              { s: 'The team argued and the group ___ into two camps.', sTh: 'ทีมโต้เถียงกันและกลุ่มแยกเป็นสองฝ่าย' }
            ] },
          { w: 'hollow', pos: 'adj., n.', level: 'B2', source: 'Oxford 3000', th: 'กลวง',
            sentence: 'The cave walls are ___ and filled with echoes.', sentenceTh: 'ผนังถ้ำกลวงและเต็มไปด้วยเสียงก้อง',
            collocations: ['a hollow tree', 'hollow sound'],
            quizBank: [
              { s: 'Knock on the wall; a ___ sound means the space is empty.', sTh: 'เคาะผนัง เสียงกลวงแปลว่าข้างในว่างเปล่า' },
              { s: 'Birds nest in the ___ trunk of the old tree.', sTh: 'นกทำรังในลำต้นกลวงของต้นไม้เก่า' },
              { s: 'The rock looked solid but was ___ inside.', sTh: 'หินดูแข็งแต่ข้างในกลวง' }
            ] },
          { w: 'copper', pos: 'n., adj.', level: 'C1', source: 'Oxford 5000', th: 'ทองแดง',
            sentence: 'Electric wires are usually made of ___.', sentenceTh: 'สายไฟฟ้ามักทำจากทองแดง',
            collocations: ['copper wire', 'copper mine'],
            quizBank: [
              { s: 'The old pipes were replaced with new ___ ones.', sTh: 'ท่อเก่าถูกเปลี่ยนเป็นท่อทองแดงใหม่' },
              { s: 'Miners extracted ___ from the deep tunnel.', sTh: 'คนงานเหมืองสกัดทองแดงจากอุโมงค์ลึก' },
              { s: 'The statue has turned green from ___ oxidation.', sTh: 'รูปปั้นกลายเป็นสีเขียวจากการเกิดออกซิเดชันของทองแดง' }
            ] }
        ]
      },
      {
        id: 'work-13', theme: 'Work XIII', themeTh: 'การสมัครงาน (ก้าวข้ามพรมแดน)',
        words: [
          { w: 'experience', pos: 'n., v.', level: 'A2', source: 'Oxford 3000', th: 'ประสบการณ์',
            sentence: 'She has three years of ___ in marketing.', sentenceTh: 'เธอมีประสบการณ์ด้านการตลาดสามปี',
            collocations: ['work experience', 'gain experience'],
            quizBank: [
              { s: 'Employers often look for relevant ___ in new hires.', sTh: 'นายจ้างมักมองหาประสบการณ์ที่เกี่ยวข้องในพนักงานใหม่' },
              { s: 'The summer internship gave him valuable ___.', sTh: 'การฝึกงานช่วงฤดูร้อนให้ประสบการณ์ที่มีค่าแก่เขา' },
              { s: 'Few people ___ such a rapid rise in their first job.', sTh: 'คนไม่กี่คนที่ได้ประสบการณ์การเติบโตอย่างรวดเร็วในงานแรก' }
            ] },
          { w: 'reject', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'ปฏิเสธ/ไม่รับ',
            sentence: 'The company decided to ___ the first draft of the proposal.', sentenceTh: 'บริษัทตัดสินใจปฏิเสธร่างแรกของข้อเสนอ',
            collocations: ['reject an application', 'reject an offer'],
            quizBank: [
              { s: 'The committee will ___ any application with missing documents.', sTh: 'คณะกรรมการจะไม่รับใบสมัครที่มีเอกสารไม่ครบ' },
              { s: 'She was ___ed by her first choice of university.', sTh: 'เธอถูกมหาวิทยาลัยที่เลือกเป็นอันดับแรกปฏิเสธ' },
              { s: 'He chose to ___ the job offer and stay in his city.', sTh: 'เขาเลือกปฏิเสธข้อเสนองานและอยู่ในเมืองของตัวเอง' }
            ] },
          { w: 'impressive', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'น่าประทับใจ',
            sentence: 'His portfolio was so ___ that they offered him the job.', sentenceTh: 'แฟ้มผลงานของเขาน่าประทับใจมากจนพวกเขาเสนองานให้',
            collocations: ['an impressive record', 'impressive results'],
            quizBank: [
              { s: 'Her presentation was clear and ___.', sTh: 'การนำเสนอของเธอชัดเจนและน่าประทับใจ' },
              { s: 'The team delivered an ___ result in just three months.', sTh: 'ทีมส่งมอบผลงานที่น่าประทับใจได้ในเวลาเพียงสามเดือน' },
              { s: 'The candidate had an ___ list of previous projects.', sTh: 'ผู้สมัครมีรายการโครงการก่อนหน้าที่น่าประทับใจ' }
            ] },
          { w: 'impression', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ความประทับใจ',
            sentence: 'A good first ___ can help you get the job.', sentenceTh: 'ความประทับใจแรกที่ดีช่วยให้คุณได้งานได้',
            collocations: ['make an impression', 'a strong impression'],
            quizBank: [
              { s: 'The interviewer left a positive ___ on the whole panel.', sTh: 'ผู้สัมภาษณ์สร้างความประทับใจเชิงบวกให้คณะกรรมการทั้งหมด' },
              { s: 'Her calm answers gave a strong ___ of confidence.', sTh: 'คำตอบที่สงบของเธอสร้างความประทับใจเรื่องความมั่นใจ' },
              { s: 'I had the ___ that the job was already filled.', sTh: 'ฉันมีความรู้สึกว่างานนี้มีคนรับไปแล้ว' }
            ] },
          { w: 'involved', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'มีส่วนเกี่ยวข้อง',
            sentence: 'Every team member became ___ in the new project.', sentenceTh: 'สมาชิกทุกคนในทีมมีส่วนเกี่ยวข้องกับโครงการใหม่',
            collocations: ['get involved', 'be involved in'],
            quizBank: [
              { s: 'She was deeply ___ in the planning of the event.', sTh: 'เธอมีส่วนเกี่ยวข้องอย่างลึกซึ้งในการวางแผนงาน' },
              { s: 'Staff who are ___ in decisions feel more motivated.', sTh: 'พนักงานที่มีส่วนเกี่ยวข้องกับการตัดสินใจจะมีแรงจูงใจมากขึ้น' },
              { s: 'Many people were ___ in the recruitment process.', sTh: 'หลายคนมีส่วนเกี่ยวข้องในกระบวนการสรรหา' }
            ] },
          { w: 'ambitious', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'ทะเยอทะยาน',
            sentence: 'The young designer has ___ plans for her career.', sentenceTh: 'นักออกแบบรุ่นใหม่มีแผนการอาชีพที่ทะเยอทะยาน',
            collocations: ['an ambitious goal', 'highly ambitious'],
            quizBank: [
              { s: 'He set an ___ target of doubling sales this year.', sTh: 'เขาตั้งเป้าหมายที่ทะเยอทะยานในการเพิ่มยอดขายเป็นสองเท่าในปีนี้' },
              { s: 'The company launched an ___ plan to expand abroad.', sTh: 'บริษัทเปิดแผนที่ทะเยอทะยานในการขยายไปต่างประเทศ' },
              { s: 'Her ___ attitude pushed the whole team forward.', sTh: 'ทัศนคติที่ทะเยอทะยานของเธอผลักดันทั้งทีมไปข้างหน้า' }
            ] },
          { w: 'withdraw', pos: 'v.', level: 'B2', source: 'Oxford 5000', th: 'ถอนตัว/ถอนออก',
            sentence: 'The candidate decided to ___ from the final round.', sentenceTh: 'ผู้สมัครตัดสินใจถอนตัวจากรอบสุดท้าย',
            collocations: ['withdraw from', 'withdraw an application'],
            quizBank: [
              { s: 'She asked to ___ her application before the deadline.', sTh: 'เธอขอถอนใบสมัครก่อนกำหนดเวลา' },
              { s: 'The company will ___ its offer if the contract is unsigned.', sTh: 'บริษัทจะถอนข้อเสนอหากสัญญายังไม่ได้ลงนาม' },
              { s: 'Two teams ___ from the competition due to injuries.', sTh: 'สองทีมถอนตัวจากการแข่งขันเพราะการบาดเจ็บ' }
            ] },
          { w: 'willing', pos: 'adj.', level: 'B2', source: 'Oxford 3000', th: 'เต็มใจ',
            sentence: 'Employers want staff who are ___ to learn new skills.', sentenceTh: 'นายจ้างต้องการพนักงานที่เต็มใจเรียนรู้ทักษะใหม่',
            collocations: ['willing to', 'willing to help'],
            quizBank: [
              { s: 'The manager was ___ to hear new ideas from everyone.', sTh: 'ผู้จัดการเต็มใจรับฟังความคิดใหม่จากทุกคน' },
              { s: 'Are you ___ to work on weekends during the launch?', sTh: 'คุณเต็มใจทำงานวันเสาร์-อาทิตย์ระหว่างการเปิดตัวหรือไม่' },
              { s: 'Some graduates are not ___ to move to another city.', sTh: 'บัณฑิตบางคนไม่เต็มใจย้ายไปอยู่เมืองอื่น' }
            ] },
          { w: 'capable', pos: 'adj.', level: 'B2', source: 'Oxford 3000', th: 'มีความสามารถ',
            sentence: 'She is ___ of leading a team of twenty people.', sentenceTh: 'เธอมีความสามารถในการนำทีมยี่สิบคน',
            collocations: ['capable of', 'a capable leader'],
            quizBank: [
              { s: 'The new staff member is clearly ___ and reliable.', sTh: 'พนักงานใหม่มีความสามารถและน่าเชื่อถืออย่างชัดเจน' },
              { s: 'Few machines are ___ of doing that task so quickly.', sTh: 'เครื่องจักรไม่กี่ชนิดที่มีความสามารถทำงานนั้นได้เร็วขนาดนี้' },
              { s: 'He is a ___ engineer who solves problems calmly.', sTh: 'เขาเป็นวิศวกรที่มีความสามารถและแก้ปัญหาได้อย่างสงบ' }
            ] },
          { w: 'appoint', pos: 'v.', level: 'C1', source: 'Oxford 5000', th: 'แต่งตั้ง',
            sentence: 'The board will ___ a new director next month.', sentenceTh: 'คณะกรรมการจะแต่งตั้งกรรมการบริหารคนใหม่เดือนหน้า',
            collocations: ['appoint someone as', 'appoint a committee'],
            quizBank: [
              { s: 'The university ___ed her as head of the research center.', sTh: 'มหาวิทยาลัยแต่งตั้งเธอเป็นหัวหน้าศูนย์วิจัย' },
              { s: 'They plan to ___ an independent investigator.', sTh: 'พวกเขาวางแผนจะแต่งตั้งผู้สืบสวนอิสระ' },
              { s: 'The minister ___ed a team to review the policy.', sTh: 'รัฐมนตรีแต่งตั้งทีมเพื่อทบทวนนโยบาย' }
            ] }
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
