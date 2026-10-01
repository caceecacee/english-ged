/* คลังคำศัพท์ "เตรียมสอบ" ทริปที่ 1 — อิง Oxford 3000 (A1–B2) และ Oxford 5000 (C1) เป็นแหล่งอ้างอิงระดับ
   ที่มา: oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/
          The_Oxford_3000_by_CEFR_level.pdf และ The_Oxford_5000_by_CEFR_level.pdf (ดึงและตรวจสอบระดับคำทุกคำจริง)

   นโยบายสัดส่วนการจัดบทเรียน (ไม่ใช่สัดส่วนทางการของ Oxford หรือของข้อสอบใด ๆ):
   A1 2% · A2 8% · B1 50% · B2 30% · C1 10% ของคำใหม่ที่นำมาสอน
   1 ทริป = 5 ชุด × 10 คำ = คำพื้นฐาน 1 (A1) + 4 (A2) + B1 25 + B2 15 + C1 5 = 50 คำ

   โครงสร้างคำแต่ละคำ:
   { w, pos, level, source, th, sentence, sentenceTh, collocations, quizBank, x }
   - level/source ตรวจสอบจริงจาก PDF ทางการ ณ วันที่ทำ (2026-09-30) ไม่ใช่การเดา
   - th/sentence/sentenceTh/collocations/quizBank เขียนขึ้นใหม่ทั้งหมด ไม่ได้คัดลอกจาก Oxford
   - quizBank มีอย่างน้อย 3 ประโยคต่อคำ (ไม่ซ้ำกับ sentence หลัก) สำหรับสุ่มออกข้อสอบซ้ำได้
   - x = คำอื่นในชุดเดียวกันที่ห้ามใช้เป็นตัวลวงเพราะอาจเติมประโยคได้เหมือนกัน (กันความกำกวม) */
(function (root) {
  var EP = root.EP = root.EP || {};
  EP.examVocab = EP.examVocab || { trips: [] };
  EP.examVocab.trips.push({
    id: 'trip-01',
    name: 'ก้าวแรกสู่รั้วมหาวิทยาลัย',
    sets: [
      {
        id: 'university-life', theme: 'University Life', themeTh: 'ชีวิตมหาวิทยาลัย',
        words: [
          { w: 'university', pos: 'n.', level: 'A1', source: 'Oxford 3000', th: 'มหาวิทยาลัย',
            sentence: 'She is studying biology at the ___.', sentenceTh: 'เธอกำลังเรียนชีววิทยาที่มหาวิทยาลัย',
            collocations: ['go to university', 'university degree'],
            quizBank: [
              { s: 'He wants to study medicine at ___.', sTh: 'เขาอยากเรียนแพทย์ที่มหาวิทยาลัย' },
              { s: 'My sister just started her first year at ___.', sTh: 'พี่สาวของฉันเพิ่งเริ่มปีแรกที่มหาวิทยาลัย' },
              { s: 'This ___ is famous for its engineering programs.', sTh: 'มหาวิทยาลัยนี้มีชื่อเสียงด้านหลักสูตรวิศวกรรม' }
            ] },
          { w: 'campus', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'พื้นที่/บริเวณมหาวิทยาลัย',
            sentence: 'There is a big library in the middle of the ___.', sentenceTh: 'มีห้องสมุดขนาดใหญ่อยู่กลางพื้นที่มหาวิทยาลัย',
            collocations: ['on campus', 'campus life'],
            quizBank: [
              { s: 'Most students live in dormitories on ___.', sTh: 'นักศึกษาส่วนใหญ่พักอยู่ในหอพักในพื้นที่มหาวิทยาลัย' },
              { s: 'The new ___ has a modern sports center.', sTh: 'บริเวณมหาวิทยาลัยแห่งใหม่มีศูนย์กีฬาที่ทันสมัย' },
              { s: 'You can rent a bicycle to move around ___.', sTh: 'คุณเช่าจักรยานเพื่อเดินทางไปมาในพื้นที่มหาวิทยาลัยได้' }
            ] },
          { w: 'assignment', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'งานที่ได้รับมอบหมาย',
            sentence: 'I need to finish my ___ before Friday.', sentenceTh: 'ฉันต้องทำงานที่ได้รับมอบหมายให้เสร็จก่อนวันศุกร์',
            collocations: ['submit an assignment', 'group assignment'],
            quizBank: [
              { s: 'The teacher gave us a difficult ___ about climate change.', sTh: 'ครูให้งานมอบหมายเรื่องการเปลี่ยนแปลงสภาพภูมิอากาศที่ยาก' },
              { s: 'She got a high score on her last ___.', sTh: 'เธอได้คะแนนสูงในงานที่มอบหมายครั้งล่าสุด' },
              { s: 'Can you help me with this ___? It is due tomorrow.', sTh: 'ช่วยฉันทำงานที่มอบหมายนี้หน่อยได้ไหม ต้องส่งพรุ่งนี้แล้ว' }
            ] },
          { w: 'graduate', pos: 'v., n.', level: 'B1', source: 'Oxford 3000', th: 'สำเร็จการศึกษา / บัณฑิต',
            sentence: 'He hopes to ___ next year with a degree in economics.', sentenceTh: 'เขาหวังว่าจะสำเร็จการศึกษาปีหน้าด้วยปริญญาด้านเศรษฐศาสตร์',
            collocations: ['graduate from university', 'a recent graduate'],
            quizBank: [
              { s: 'Both of my parents ___ from the same university.', sTh: 'พ่อแม่ของฉันทั้งคู่สำเร็จการศึกษาจากมหาวิทยาลัยเดียวกัน' },
              { s: 'As a new ___, she is looking for her first job.', sTh: 'ในฐานะบัณฑิตใหม่ เธอกำลังหางานแรก' },
              { s: 'Only half of the students ___ within four years.', sTh: 'มีนักศึกษาแค่ครึ่งหนึ่งที่สำเร็จการศึกษาภายในสี่ปี' }
            ] },
          { w: 'accommodation', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ที่พักอาศัย',
            sentence: 'The university helps new students find ___ near campus.', sentenceTh: 'มหาวิทยาลัยช่วยนักศึกษาใหม่หาที่พักใกล้บริเวณมหาวิทยาลัย',
            collocations: ['student accommodation', 'find accommodation'],
            quizBank: [
              { s: '___ in this city can be very expensive.', sTh: 'ที่พักอาศัยในเมืองนี้อาจมีราคาแพงมาก' },
              { s: 'We booked our ___ three months before the trip.', sTh: 'เราจองที่พักไว้สามเดือนก่อนการเดินทาง' },
              { s: 'The school arranged temporary ___ for the exchange students.', sTh: 'โรงเรียนจัดที่พักชั่วคราวให้นักเรียนแลกเปลี่ยน' }
            ] },
          { w: 'academic', pos: 'adj., n.', level: 'B1', source: 'Oxford 3000', th: 'เชิงวิชาการ / ด้านการเรียน',
            sentence: 'She has always had strong ___ results.', sentenceTh: 'เธอมีผลการเรียนที่ดีมาโดยตลอด',
            collocations: ['academic year', 'academic performance'],
            quizBank: [
              { s: 'The ___ year usually starts in August in this country.', sTh: 'ปีการศึกษามักเริ่มต้นในเดือนสิงหาคมในประเทศนี้' },
              { s: 'He struggled with the ___ pressure at his new school.', sTh: 'เขาเผชิญความกดดันด้านการเรียนที่โรงเรียนใหม่' },
              { s: 'Many ___s from different countries attended the conference.', sTh: 'นักวิชาการจากหลายประเทศเข้าร่วมการประชุมนี้' }
            ] },
          { w: 'scholarship', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'ทุนการศึกษา',
            sentence: 'She won a full ___ to study abroad.', sentenceTh: 'เธอได้รับทุนการศึกษาเต็มจำนวนไปเรียนต่อต่างประเทศ',
            collocations: ['apply for a scholarship', 'scholarship program'],
            quizBank: [
              { s: 'Only students with excellent grades can apply for this ___.', sTh: 'มีเพียงนักเรียนที่เกรดดีเยี่ยมเท่านั้นที่สมัครทุนนี้ได้' },
              { s: 'The ___ covers tuition fees but not living costs.', sTh: 'ทุนการศึกษานี้ครอบคลุมค่าเล่าเรียนแต่ไม่รวมค่าครองชีพ' },
              { s: 'He was very proud when he received the ___.', sTh: 'เขาภูมิใจมากตอนที่ได้รับทุนการศึกษา' }
            ] },
          { w: 'curriculum', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'หลักสูตร',
            sentence: 'The new ___ includes more practical skills training.', sentenceTh: 'หลักสูตรใหม่มีการฝึกทักษะเชิงปฏิบัติมากขึ้น',
            collocations: ['school curriculum', 'design a curriculum'],
            quizBank: [
              { s: 'Every subject in the ___ is chosen for a reason.', sTh: 'ทุกวิชาในหลักสูตรถูกเลือกมาด้วยเหตุผล' },
              { s: 'The university updates its ___ every five years.', sTh: 'มหาวิทยาลัยปรับปรุงหลักสูตรทุกห้าปี' },
              { s: 'Foreign languages are not part of the standard ___.', sTh: 'ภาษาต่างประเทศไม่ได้เป็นส่วนหนึ่งของหลักสูตรมาตรฐาน' }
            ] },
          { w: 'institution', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'สถาบัน',
            sentence: 'This is one of the oldest educational ___s in the country.', sentenceTh: 'นี่คือหนึ่งในสถาบันการศึกษาที่เก่าแก่ที่สุดในประเทศ',
            collocations: ['financial institution', 'educational institution'],
            quizBank: [
              { s: 'The research was funded by a private ___.', sTh: 'งานวิจัยนี้ได้รับทุนจากสถาบันเอกชน' },
              { s: 'Each ___ has its own admission requirements.', sTh: 'แต่ละสถาบันมีข้อกำหนดการรับสมัครของตัวเอง' },
              { s: 'She works for a well-known financial ___.', sTh: 'เธอทำงานให้สถาบันการเงินที่มีชื่อเสียง' }
            ] },
          { w: 'tuition', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'ค่าเล่าเรียน',
            sentence: '___ fees have increased sharply this year.', sentenceTh: 'ค่าเล่าเรียนเพิ่มขึ้นอย่างมากในปีนี้',
            collocations: ['tuition fees', 'pay tuition'],
            quizBank: [
              { s: 'The scholarship pays for ___ but not for books.', sTh: 'ทุนการศึกษาจ่ายค่าเล่าเรียนแต่ไม่รวมค่าหนังสือ' },
              { s: 'International students often pay higher ___ than local students.', sTh: 'นักศึกษาต่างชาติมักจ่ายค่าเล่าเรียนสูงกว่านักศึกษาท้องถิ่น' },
              { s: 'His parents took a loan to cover his ___.', sTh: 'พ่อแม่ของเขากู้เงินเพื่อจ่ายค่าเล่าเรียน' }
            ] }
        ]
      },
      {
        id: 'social-news', theme: 'Social News', themeTh: 'ข่าวสังคม',
        words: [
          { w: 'community', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'ชุมชน',
            sentence: 'The whole ___ helped clean up the park.', sentenceTh: 'ทั้งชุมชนช่วยกันทำความสะอาดสวนสาธารณะ',
            collocations: ['local community', 'community center'],
            quizBank: [
              { s: 'This charity supports poor ___ties in rural areas.', sTh: 'องค์กรการกุศลนี้ช่วยเหลือชุมชนยากจนในพื้นที่ชนบท' },
              { s: 'She volunteers at the ___ center every weekend.', sTh: 'เธอเป็นอาสาสมัครที่ศูนย์ชุมชนทุกสุดสัปดาห์' },
              { s: 'The new factory changed the local ___ a lot.', sTh: 'โรงงานใหม่เปลี่ยนแปลงชุมชนท้องถิ่นไปมาก' }
            ] },
          { w: 'election', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'การเลือกตั้ง',
            sentence: 'The next ___ will be held in March.', sentenceTh: 'การเลือกตั้งครั้งถัดไปจะจัดขึ้นในเดือนมีนาคม',
            collocations: ['win an election', 'general election'],
            quizBank: [
              { s: 'Many young people voted in this ___ for the first time.', sTh: 'คนหนุ่มสาวจำนวนมากลงคะแนนในการเลือกตั้งครั้งนี้เป็นครั้งแรก' },
              { s: 'The ___ results will be announced tonight.', sTh: 'ผลการเลือกตั้งจะประกาศคืนนี้' },
              { s: 'She lost the ___ by a small number of votes.', sTh: 'เธอแพ้การเลือกตั้งด้วยคะแนนเสียงจำนวนเล็กน้อย' }
            ] },
          { w: 'poverty', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ความยากจน',
            sentence: 'The program aims to reduce ___ in the region.', sentenceTh: 'โครงการนี้มีเป้าหมายลดความยากจนในภูมิภาคนี้',
            collocations: ['live in poverty', 'fight poverty'],
            quizBank: [
              { s: 'Millions of families still live in ___ today.', sTh: 'ครอบครัวหลายล้านครอบครัวยังคงอยู่ในความยากจนทุกวันนี้' },
              { s: 'Education is one way to escape ___.', sTh: 'การศึกษาเป็นวิธีหนึ่งในการหลุดพ้นจากความยากจน' },
              { s: 'The report shows that child ___ is rising.', sTh: 'รายงานแสดงว่าความยากจนในเด็กกำลังเพิ่มขึ้น' }
            ] },
          { w: 'unemployment', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'การว่างงาน',
            sentence: '___ has increased because of the economic crisis.', sentenceTh: 'การว่างงานเพิ่มขึ้นเพราะวิกฤตเศรษฐกิจ',
            collocations: ['unemployment rate', 'youth unemployment'],
            quizBank: [
              { s: 'The ___ rate is higher among young graduates.', sTh: 'อัตราการว่างงานสูงกว่าในกลุ่มบัณฑิตจบใหม่' },
              { s: 'The government promised to reduce ___ next year.', sTh: 'รัฐบาลสัญญาว่าจะลดการว่างงานในปีหน้า' },
              { s: 'Long-term ___ can affect a person\'s mental health.', sTh: 'การว่างงานระยะยาวอาจส่งผลต่อสุขภาพจิตของคนคนหนึ่ง' }
            ] },
          { w: 'policy', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'นโยบาย',
            sentence: 'The new ___ will affect thousands of workers.', sentenceTh: 'นโยบายใหม่จะส่งผลต่อคนงานหลายพันคน',
            collocations: ['government policy', 'change a policy'],
            quizBank: [
              { s: 'This ___ was designed to help small businesses.', sTh: 'นโยบายนี้ถูกออกแบบมาเพื่อช่วยธุรกิจขนาดเล็ก' },
              { s: 'Critics say the ___ is unfair to farmers.', sTh: 'นักวิจารณ์กล่าวว่านโยบายนี้ไม่เป็นธรรมต่อเกษตรกร' },
              { s: 'The company changed its ___ on remote work.', sTh: 'บริษัทเปลี่ยนนโยบายเรื่องการทำงานทางไกล' }
            ] },
          { w: 'candidate', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ผู้สมัคร (รับเลือกตั้ง/งาน)',
            sentence: 'Three ___s are running for mayor this year.', sentenceTh: 'มีผู้สมัครสามคนลงชิงตำแหน่งนายกเทศมนตรีในปีนี้',
            collocations: ['presidential candidate', 'the best candidate'],
            quizBank: [
              { s: 'The ___ promised to build more schools.', sTh: 'ผู้สมัครสัญญาว่าจะสร้างโรงเรียนเพิ่ม' },
              { s: 'Voters are still unsure which ___ to support.', sTh: 'ผู้มีสิทธิเลือกตั้งยังไม่แน่ใจว่าจะสนับสนุนผู้สมัครคนไหน' },
              { s: 'She is the youngest ___ in this election.', sTh: 'เธอเป็นผู้สมัครที่อายุน้อยที่สุดในการเลือกตั้งครั้งนี้' }
            ] },
          { w: 'homeless', pos: 'adj.', level: 'B2', source: 'Oxford 5000', th: 'ไร้ที่อยู่อาศัย',
            sentence: 'The shelter provides food for ___ people every night.', sentenceTh: 'ศูนย์พักพิงมอบอาหารให้คนไร้ที่อยู่อาศัยทุกคืน',
            collocations: ['homeless shelter', 'become homeless'],
            quizBank: [
              { s: 'Many families became ___ after the flood.', sTh: 'หลายครอบครัวกลายเป็นคนไร้ที่อยู่อาศัยหลังน้ำท่วม' },
              { s: 'The city opened a new shelter for ___ people.', sTh: 'เมืองเปิดศูนย์พักพิงใหม่สำหรับคนไร้ที่อยู่อาศัย' },
              { s: 'Volunteers hand out blankets to ___ people in winter.', sTh: 'อาสาสมัครแจกผ้าห่มให้คนไร้ที่อยู่อาศัยในฤดูหนาว' }
            ] },
          { w: 'immigration', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'การเข้าเมือง/การอพยพเข้าประเทศ',
            sentence: '___ rules changed after the new law was passed.', sentenceTh: 'กฎการเข้าเมืองเปลี่ยนไปหลังกฎหมายใหม่ผ่าน',
            collocations: ['immigration policy', 'illegal immigration'],
            quizBank: [
              { s: 'The country is debating a new ___ policy.', sTh: 'ประเทศนี้กำลังถกเถียงเรื่องนโยบายการเข้าเมืองใหม่' },
              { s: 'She works at the ___ office at the airport.', sTh: 'เธอทำงานที่สำนักงานตรวจคนเข้าเมืองที่สนามบิน' },
              { s: '___ has shaped the culture of this city for centuries.', sTh: 'การอพยพเข้าเมืองหล่อหลอมวัฒนธรรมของเมืองนี้มาหลายศตวรรษ' }
            ] },
          { w: 'welfare', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'สวัสดิการ',
            sentence: 'The company improved employee ___ this year.', sentenceTh: 'บริษัทปรับปรุงสวัสดิการพนักงานในปีนี้',
            collocations: ['animal welfare', 'social welfare'],
            quizBank: [
              { s: 'The government spends a large budget on ___ programs.', sTh: 'รัฐบาลใช้งบประมาณจำนวนมากกับโครงการสวัสดิการ' },
              { s: 'Animal ___ groups protested against the new farm.', sTh: 'กลุ่มสวัสดิภาพสัตว์ประท้วงต่อต้านฟาร์มแห่งใหม่' },
              { s: 'Child ___ services stepped in to help the family.', sTh: 'หน่วยงานสวัสดิการเด็กเข้ามาช่วยเหลือครอบครัวนี้' }
            ] },
          { w: 'inequality', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'ความเหลื่อมล้ำ',
            sentence: 'Income ___ is a major issue in many countries.', sentenceTh: 'ความเหลื่อมล้ำทางรายได้เป็นประเด็นสำคัญในหลายประเทศ',
            collocations: ['income inequality', 'social inequality'],
            quizBank: [
              { s: 'The report highlights growing ___ between rich and poor.', sTh: 'รายงานชี้ให้เห็นความเหลื่อมล้ำที่เพิ่มขึ้นระหว่างคนรวยและคนจน' },
              { s: 'Education can help reduce social ___.', sTh: 'การศึกษาสามารถช่วยลดความเหลื่อมล้ำทางสังคมได้' },
              { s: 'Gender ___ still exists in many workplaces.', sTh: 'ความเหลื่อมล้ำทางเพศยังคงมีอยู่ในที่ทำงานหลายแห่ง' }
            ] }
        ]
      },
      {
        id: 'environment', theme: 'Environment', themeTh: 'สิ่งแวดล้อม',
        words: [
          { w: 'pollution', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'มลพิษ',
            sentence: 'Air ___ is a serious problem in big cities.', sentenceTh: 'มลพิษทางอากาศเป็นปัญหาร้ายแรงในเมืองใหญ่',
            collocations: ['air pollution', 'reduce pollution'],
            quizBank: [
              { s: 'Factories are the main cause of ___ in this area.', sTh: 'โรงงานเป็นสาเหตุหลักของมลพิษในพื้นที่นี้' },
              { s: 'Water ___ has killed many fish in the river.', sTh: 'มลพิษทางน้ำทำให้ปลาในแม่น้ำตายไปจำนวนมาก' },
              { s: 'The city introduced new laws to cut ___.', sTh: 'เมืองออกกฎหมายใหม่เพื่อลดมลพิษ' }
            ] },
          { w: 'waste', pos: 'n., v., adj.', level: 'B1', source: 'Oxford 3000', th: 'ของเสีย/ขยะ; สิ้นเปลือง',
            sentence: 'The factory produces a lot of ___ every day.', sentenceTh: 'โรงงานผลิตของเสียจำนวนมากทุกวัน',
            collocations: ['waste management', 'a waste of time'],
            quizBank: [
              { s: 'We should not ___ so much food.', sTh: 'เราไม่ควรทำอาหารเสียเปล่าไปเยอะขนาดนี้' },
              { s: 'The city is building a new ___ treatment plant.', sTh: 'เมืองกำลังสร้างโรงบำบัดของเสียแห่งใหม่' },
              { s: 'Plastic ___ is filling up the ocean.', sTh: 'ขยะพลาสติกกำลังเต็มมหาสมุทร' }
            ] },
          { w: 'flood', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'น้ำท่วม',
            sentence: 'Heavy rain caused a ___ in the town.', sentenceTh: 'ฝนตกหนักทำให้เกิดน้ำท่วมในเมือง',
            collocations: ['flood warning', 'flash flood'],
            quizBank: [
              { s: 'The ___ destroyed hundreds of homes last year.', sTh: 'น้ำท่วมทำลายบ้านเรือนหลายร้อยหลังเมื่อปีที่แล้ว' },
              { s: 'Villagers had to leave their homes because of the ___.', sTh: 'ชาวบ้านต้องออกจากบ้านเพราะน้ำท่วม' },
              { s: 'Scientists warn that ___s will happen more often.', sTh: 'นักวิทยาศาสตร์เตือนว่าน้ำท่วมจะเกิดบ่อยขึ้น' }
            ] },
          { w: 'resource', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ทรัพยากร',
            sentence: 'Water is a ___ we must protect.', sentenceTh: 'น้ำเป็นทรัพยากรที่เราต้องปกป้อง',
            collocations: ['natural resource', 'limited resources'],
            quizBank: [
              { s: 'The country is rich in natural ___s like oil and gas.', sTh: 'ประเทศนี้อุดมไปด้วยทรัพยากรธรรมชาติอย่างน้ำมันและก๊าซ' },
              { s: 'We need to use our ___s more wisely.', sTh: 'เราต้องใช้ทรัพยากรของเราอย่างชาญฉลาดมากขึ้น' },
              { s: 'Forests are an important ___ for many animals.', sTh: 'ป่าไม้เป็นทรัพยากรสำคัญสำหรับสัตว์หลายชนิด' }
            ] },
          { w: 'global', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'ระดับโลก',
            sentence: '___ warming is affecting weather patterns everywhere.', sentenceTh: 'ภาวะโลกร้อนส่งผลต่อรูปแบบสภาพอากาศทั่วโลก',
            collocations: ['global warming', 'a global issue'],
            quizBank: [
              { s: 'Climate change is a ___ problem, not just a local one.', sTh: 'การเปลี่ยนแปลงสภาพภูมิอากาศเป็นปัญหาระดับโลก ไม่ใช่แค่ปัญหาท้องถิ่น' },
              { s: 'The company has become a ___ leader in solar energy.', sTh: 'บริษัทกลายเป็นผู้นำระดับโลกด้านพลังงานแสงอาทิตย์' },
              { s: 'Leaders from around the world met to discuss ___ issues.', sTh: 'ผู้นำจากทั่วโลกมาพบกันเพื่อหารือประเด็นระดับโลก' }
            ] },
          { w: 'fuel', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'เชื้อเพลิง',
            sentence: 'Cars need ___ to run.', sentenceTh: 'รถยนต์ต้องการเชื้อเพลิงเพื่อวิ่ง',
            collocations: ['fossil fuel', 'fuel prices'],
            quizBank: [
              { s: '___ prices have gone up again this month.', sTh: 'ราคาเชื้อเพลิงขึ้นอีกครั้งในเดือนนี้' },
              { s: 'Burning ___ releases gases that harm the air.', sTh: 'การเผาเชื้อเพลิงปล่อยก๊าซที่เป็นอันตรายต่ออากาศ' },
              { s: 'Scientists are looking for cleaner types of ___.', sTh: 'นักวิทยาศาสตร์กำลังมองหาเชื้อเพลิงประเภทที่สะอาดกว่า' }
            ] },
          { w: 'wildlife', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'สัตว์ป่า',
            sentence: 'This park protects ___ such as elephants and tigers.', sentenceTh: 'อุทยานแห่งนี้ปกป้องสัตว์ป่าอย่างช้างและเสือ',
            collocations: ['wildlife conservation', 'protect wildlife'],
            quizBank: [
              { s: 'Hunting has reduced ___ numbers in this forest.', sTh: 'การล่าสัตว์ทำให้จำนวนสัตว์ป่าในป่านี้ลดลง' },
              { s: 'The documentary shows rare ___ in their natural habitat.', sTh: 'สารคดีนี้แสดงสัตว์ป่าหายากในถิ่นที่อยู่ตามธรรมชาติ' },
              { s: 'Tourists come here to see the ___ up close.', sTh: 'นักท่องเที่ยวมาที่นี่เพื่อดูสัตว์ป่าอย่างใกล้ชิด' }
            ] },
          { w: 'species', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'สปีชีส์/ชนิดพันธุ์',
            sentence: 'This ___ of frog is only found in this forest.', sentenceTh: 'กบชนิดนี้พบได้เฉพาะในป่านี้เท่านั้น',
            collocations: ['endangered species', 'a new species'],
            quizBank: [
              { s: 'Many ___ are at risk of extinction.', sTh: 'สิ่งมีชีวิตหลายชนิดพันธุ์เสี่ยงต่อการสูญพันธุ์' },
              { s: 'Scientists discovered a new ___ of fish last year.', sTh: 'นักวิทยาศาสตร์ค้นพบปลาชนิดพันธุ์ใหม่เมื่อปีที่แล้ว' },
              { s: 'This island has many ___ found nowhere else.', sTh: 'เกาะนี้มีสิ่งมีชีวิตหลายชนิดพันธุ์ที่ไม่พบที่อื่น' }
            ] },
          { w: 'sustainable', pos: 'adj.', level: 'B2', source: 'Oxford 5000', th: 'ยั่งยืน',
            sentence: 'The company promotes ___ farming methods.', sentenceTh: 'บริษัทส่งเสริมวิธีการทำเกษตรแบบยั่งยืน',
            collocations: ['sustainable development', 'sustainable energy'],
            quizBank: [
              { s: 'We need more ___ ways to produce energy.', sTh: 'เราต้องการวิธีผลิตพลังงานที่ยั่งยืนมากขึ้น' },
              { s: 'The city plans to become fully ___ by 2050.', sTh: 'เมืองวางแผนจะยั่งยืนอย่างเต็มรูปแบบภายในปี 2050' },
              { s: 'Buying local food is a more ___ choice.', sTh: 'การซื้ออาหารท้องถิ่นเป็นทางเลือกที่ยั่งยืนกว่า' }
            ] },
          { w: 'vulnerable', pos: 'adj.', level: 'C1', source: 'Oxford 5000', th: 'เปราะบาง/เสี่ยงต่ออันตราย',
            sentence: 'Coastal towns are especially ___ to rising sea levels.', sentenceTh: 'เมืองชายฝั่งเสี่ยงต่ออันตรายจากระดับน้ำทะเลที่สูงขึ้นเป็นพิเศษ',
            collocations: ['vulnerable to', 'vulnerable species'],
            quizBank: [
              { s: 'Small islands are ___ to flooding from storms.', sTh: 'เกาะเล็ก ๆ เสี่ยงต่อน้ำท่วมจากพายุ' },
              { s: 'The elderly are more ___ during extreme heat.', sTh: 'ผู้สูงอายุมีความเปราะบางมากกว่าในช่วงอากาศร้อนจัด' },
              { s: 'This species is ___ because it lives in only one place.', sTh: 'สิ่งมีชีวิตชนิดนี้เปราะบางเพราะอาศัยอยู่ในที่เดียวเท่านั้น' }
            ] }
        ]
      },
      {
        id: 'science', theme: 'Science', themeTh: 'วิทยาศาสตร์',
        words: [
          { w: 'experiment', pos: 'n., v.', level: 'A2', source: 'Oxford 3000', th: 'การทดลอง',
            sentence: 'The students did an ___ to test the theory.', sentenceTh: 'นักเรียนทำการทดลองเพื่อทดสอบทฤษฎี',
            collocations: ['conduct an experiment', 'a science experiment'],
            quizBank: [
              { s: 'The ___ showed surprising results.', sTh: 'การทดลองแสดงผลลัพธ์ที่น่าประหลาดใจ' },
              { s: 'She decided to ___ with different amounts of sugar.', sTh: 'เธอตัดสินใจทดลองกับปริมาณน้ำตาลที่แตกต่างกัน' },
              { s: 'This ___ must be repeated to check the result.', sTh: 'การทดลองนี้ต้องทำซ้ำเพื่อตรวจสอบผลลัพธ์' }
            ] },
          { w: 'theory', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ทฤษฎี',
            sentence: 'Scientists tested the new ___ many times.', sentenceTh: 'นักวิทยาศาสตร์ทดสอบทฤษฎีใหม่หลายครั้ง',
            collocations: ['a scientific theory', 'in theory'],
            quizBank: [
              { s: 'His ___ was later proven wrong by other scientists.', sTh: 'ทฤษฎีของเขาถูกพิสูจน์ในภายหลังว่าผิดโดยนักวิทยาศาสตร์คนอื่น' },
              { s: 'In ___, the plan sounds simple, but it is not.', sTh: 'ในทางทฤษฎี แผนนี้ฟังดูง่าย แต่จริง ๆ ไม่ใช่' },
              { s: 'This is just a ___; we need more evidence.', sTh: 'นี่เป็นแค่ทฤษฎี เราต้องการหลักฐานเพิ่มเติม' }
            ] },
          { w: 'laboratory', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ห้องปฏิบัติการ',
            sentence: 'The samples were sent to the ___ for testing.', sentenceTh: 'ตัวอย่างถูกส่งไปยังห้องปฏิบัติการเพื่อทดสอบ',
            collocations: ['a research laboratory', 'laboratory equipment'],
            quizBank: [
              { s: 'She spends most of her day working in the ___.', sTh: 'เธอใช้เวลาส่วนใหญ่ในแต่ละวันทำงานในห้องปฏิบัติการ' },
              { s: 'The university built a new ___ for chemistry students.', sTh: 'มหาวิทยาลัยสร้างห้องปฏิบัติการใหม่สำหรับนักศึกษาเคมี' },
              { s: 'Safety rules are very strict inside the ___.', sTh: 'กฎความปลอดภัยเข้มงวดมากภายในห้องปฏิบัติการ' }
            ] },
          { w: 'chemical', pos: 'adj., n.', level: 'B1', source: 'Oxford 3000', th: 'สารเคมี / เชิงเคมี',
            sentence: 'The factory must handle ___s carefully.', sentenceTh: 'โรงงานต้องจัดการสารเคมีอย่างระมัดระวัง',
            collocations: ['chemical reaction', 'harmful chemicals'],
            quizBank: [
              { s: 'This cleaning product contains strong ___s.', sTh: 'ผลิตภัณฑ์ทำความสะอาดนี้มีสารเคมีที่รุนแรง' },
              { s: 'A ___ reaction produced a bright blue color.', sTh: 'ปฏิกิริยาเคมีทำให้เกิดสีฟ้าสด' },
              { s: 'Some farmers avoid using ___ pesticides.', sTh: 'เกษตรกรบางรายหลีกเลี่ยงการใช้ยาฆ่าแมลงที่เป็นสารเคมี' }
            ] },
          { w: 'scientific', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'เชิงวิทยาศาสตร์',
            sentence: 'There is no ___ proof that this method works.', sentenceTh: 'ไม่มีหลักฐานเชิงวิทยาศาสตร์ว่าวิธีนี้ได้ผล',
            collocations: ['scientific research', 'scientific evidence'],
            quizBank: [
              { s: 'The claim is not supported by ___ evidence.', sTh: 'ข้อกล่าวอ้างนี้ไม่มีหลักฐานเชิงวิทยาศาสตร์สนับสนุน' },
              { s: 'She has a strong ___ background in biology.', sTh: 'เธอมีพื้นฐานเชิงวิทยาศาสตร์ด้านชีววิทยาที่แข็งแกร่ง' },
              { s: 'The magazine publishes the latest ___ discoveries.', sTh: 'นิตยสารนี้ตีพิมพ์การค้นพบทางวิทยาศาสตร์ล่าสุด' }
            ] },
          { w: 'investigate', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'สืบสวน/ตรวจสอบ',
            sentence: 'Researchers will ___ the cause of the disease.', sentenceTh: 'นักวิจัยจะตรวจสอบสาเหตุของโรคนี้',
            collocations: ['investigate a problem', 'investigate further'],
            quizBank: [
              { s: 'Police are still trying to ___ the accident.', sTh: 'ตำรวจยังคงพยายามสืบสวนอุบัติเหตุนี้' },
              { s: 'Scientists ___ed why the ice was melting so fast.', sTh: 'นักวิทยาศาสตร์ตรวจสอบว่าทำไมน้ำแข็งถึงละลายเร็วขนาดนี้' },
              { s: 'The team will ___ the effects of the new drug.', sTh: 'ทีมงานจะตรวจสอบผลของยาตัวใหม่' }
            ] },
          { w: 'hypothesis', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'สมมติฐาน',
            sentence: 'Her ___ was that plants grow faster with music.', sentenceTh: 'สมมติฐานของเธอคือพืชโตเร็วขึ้นเมื่อได้ฟังเพลง',
            collocations: ['test a hypothesis', 'form a hypothesis'],
            quizBank: [
              { s: 'The experiment did not support the original ___.', sTh: 'การทดลองไม่สนับสนุนสมมติฐานเดิม' },
              { s: 'Scientists must test their ___ before making conclusions.', sTh: 'นักวิทยาศาสตร์ต้องทดสอบสมมติฐานก่อนสรุปผล' },
              { s: 'They formed a new ___ after seeing the results.', sTh: 'พวกเขาตั้งสมมติฐานใหม่หลังเห็นผลลัพธ์' }
            ] },
          { w: 'genetic', pos: 'adj.', level: 'B2', source: 'Oxford 5000', th: 'เกี่ยวกับพันธุกรรม',
            sentence: 'This illness may be caused by a ___ condition.', sentenceTh: 'ความเจ็บป่วยนี้อาจเกิดจากภาวะทางพันธุกรรม',
            collocations: ['genetic testing', 'genetic disorder'],
            quizBank: [
              { s: 'The test can identify certain ___ disorders early.', sTh: 'การตรวจนี้สามารถระบุความผิดปกติทางพันธุกรรมบางอย่างได้ตั้งแต่เนิ่น ๆ' },
              { s: 'Eye color is decided by ___ factors.', sTh: 'สีตาถูกกำหนดโดยปัจจัยทางพันธุกรรม' },
              { s: 'Scientists are studying the ___ causes of the disease.', sTh: 'นักวิทยาศาสตร์กำลังศึกษาสาเหตุทางพันธุกรรมของโรคนี้' }
            ] },
          { w: 'innovation', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'นวัตกรรม',
            sentence: 'The company is known for its ___ in technology.', sentenceTh: 'บริษัทมีชื่อเสียงด้านนวัตกรรมทางเทคโนโลยี',
            collocations: ['technological innovation', 'drive innovation'],
            quizBank: [
              { s: 'This ___ could change how we travel forever.', sTh: 'นวัตกรรมนี้อาจเปลี่ยนวิธีที่เราเดินทางไปตลอดกาล' },
              { s: 'The award recognizes ___ in medical research.', sTh: 'รางวัลนี้ยกย่องนวัตกรรมด้านการวิจัยทางการแพทย์' },
              { s: 'Investors are excited about this new ___.', sTh: 'นักลงทุนตื่นเต้นกับนวัตกรรมใหม่นี้' }
            ] },
          { w: 'breakthrough', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'ความก้าวหน้าครั้งสำคัญ',
            sentence: 'Doctors announced a major ___ in cancer treatment.', sentenceTh: 'แพทย์ประกาศความก้าวหน้าครั้งสำคัญในการรักษามะเร็ง',
            collocations: ['a scientific breakthrough', 'a major breakthrough'],
            quizBank: [
              { s: 'The research team finally had a ___ after years of work.', sTh: 'ทีมวิจัยประสบความก้าวหน้าครั้งสำคัญในที่สุดหลังทำงานมาหลายปี' },
              { s: 'This ___ could lead to cheaper clean energy.', sTh: 'ความก้าวหน้าครั้งนี้อาจนำไปสู่พลังงานสะอาดที่ถูกลง' },
              { s: 'Scientists celebrated the ___ in a press conference.', sTh: 'นักวิทยาศาสตร์เฉลิมฉลองความก้าวหน้าครั้งนี้ในงานแถลงข่าว' }
            ] }
        ]
      },
      {
        id: 'work', theme: 'Work', themeTh: 'การทำงาน',
        words: [
          { w: 'colleague', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'เพื่อนร่วมงาน',
            sentence: 'I had lunch with a ___ from the marketing team.', sentenceTh: 'ฉันกินข้าวเที่ยงกับเพื่อนร่วมงานจากทีมการตลาด',
            collocations: ['a close colleague', 'former colleague'],
            quizBank: [
              { s: 'She asked her ___ for help with the report.', sTh: 'เธอขอให้เพื่อนร่วมงานช่วยทำรายงาน' },
              { s: 'One of my ___s is moving to a new office.', sTh: 'เพื่อนร่วมงานคนหนึ่งของฉันกำลังจะย้ายไปสำนักงานใหม่' },
              { s: 'We celebrated our ___\'s promotion with a small party.', sTh: 'เราฉลองการเลื่อนตำแหน่งของเพื่อนร่วมงานด้วยงานปาร์ตี้เล็ก ๆ' }
            ] },
          { w: 'qualification', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'คุณสมบัติ/วุฒิการศึกษา',
            sentence: 'You need a teaching ___ to apply for this job.', sentenceTh: 'คุณต้องมีวุฒิการสอนเพื่อสมัครงานนี้',
            collocations: ['professional qualification', 'lack qualifications'],
            quizBank: [
              { s: 'His ___s made him the perfect candidate for the role.', sTh: 'คุณสมบัติของเขาทำให้เขาเหมาะสมกับตำแหน่งนี้ที่สุด' },
              { s: 'She is studying for a ___ in accounting.', sTh: 'เธอกำลังเรียนเพื่อรับวุฒิด้านบัญชี' },
              { s: 'The job requires specific ___s that few people have.', sTh: 'งานนี้ต้องการคุณสมบัติเฉพาะที่มีคนไม่กี่คนมี' }
            ] },
          { w: 'responsibility', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ความรับผิดชอบ',
            sentence: 'Managing the budget is her main ___.', sentenceTh: 'การจัดการงบประมาณเป็นความรับผิดชอบหลักของเธอ',
            collocations: ['take responsibility', 'job responsibilities'],
            quizBank: [
              { s: 'He takes full ___ for the mistake.', sTh: 'เขารับผิดชอบเต็มที่สำหรับความผิดพลาดนี้' },
              { s: 'The new job comes with more ___.', sTh: 'งานใหม่มาพร้อมกับความรับผิดชอบที่มากขึ้น' },
              { s: 'It is the company\'s ___ to keep workers safe.', sTh: 'เป็นความรับผิดชอบของบริษัทที่จะดูแลความปลอดภัยของพนักงาน' }
            ] },
          { w: 'shift', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'กะการทำงาน; เปลี่ยนแปลง',
            sentence: 'She works the night ___ three times a week.', sentenceTh: 'เธอทำงานกะกลางคืนสัปดาห์ละสามครั้ง',
            collocations: ['work a shift', 'night shift'],
            quizBank: [
              { s: 'Can you cover my ___ tomorrow morning?', sTh: 'พรุ่งนี้เช้าช่วยทำงานกะแทนฉันได้ไหม' },
              { s: 'The factory runs three ___s a day.', sTh: 'โรงงานทำงานสามกะต่อวัน' },
              { s: 'There has been a ___ in how people prefer to work.', sTh: 'มีการเปลี่ยนแปลงในวิธีที่ผู้คนต้องการทำงาน' }
            ] },
          { w: 'hire', pos: 'v., n.', level: 'B1', source: 'Oxford 3000', th: 'จ้างงาน',
            sentence: 'The company plans to ___ ten new engineers.', sentenceTh: 'บริษัทวางแผนจะจ้างวิศวกรใหม่สิบคน',
            collocations: ['hire staff', 'a new hire'],
            quizBank: [
              { s: 'They decided to ___ someone with more experience.', sTh: 'พวกเขาตัดสินใจจ้างคนที่มีประสบการณ์มากกว่า' },
              { s: 'It took months to ___ the right person.', sTh: 'ใช้เวลาหลายเดือนกว่าจะจ้างคนที่เหมาะสม' },
              { s: 'The new ___ starts working on Monday.', sTh: 'พนักงานใหม่ที่เพิ่งจ้างมาเริ่มงานวันจันทร์' }
            ] },
          { w: 'promote', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'เลื่อนตำแหน่ง/ส่งเสริม',
            sentence: 'She was ___d to team leader last month.', sentenceTh: 'เธอได้รับการเลื่อนตำแหน่งเป็นหัวหน้าทีมเมื่อเดือนที่แล้ว',
            collocations: ['get promoted', 'promote a product'],
            quizBank: [
              { s: 'Working hard does not always mean you get ___d.', sTh: 'การทำงานหนักไม่ได้แปลว่าจะได้เลื่อนตำแหน่งเสมอไป' },
              { s: 'The company wants to ___ healthy eating among staff.', sTh: 'บริษัทต้องการส่งเสริมการกินอาหารเพื่อสุขภาพในหมู่พนักงาน' },
              { s: 'He was ___d after just one year at the company.', sTh: 'เขาได้รับการเลื่อนตำแหน่งหลังทำงานที่บริษัทเพียงปีเดียว' }
            ] },
          { w: 'workplace', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'สถานที่ทำงาน',
            sentence: 'The company created a more relaxed ___.', sentenceTh: 'บริษัทสร้างสถานที่ทำงานที่ผ่อนคลายมากขึ้น',
            collocations: ['workplace safety', 'a positive workplace'],
            quizBank: [
              { s: '___ safety rules protect workers from accidents.', sTh: 'กฎความปลอดภัยในสถานที่ทำงานปกป้องพนักงานจากอุบัติเหตุ' },
              { s: 'A friendly ___ can make employees happier.', sTh: 'สถานที่ทำงานที่เป็นมิตรทำให้พนักงานมีความสุขมากขึ้น' },
              { s: 'The survey studied stress levels in the ___.', sTh: 'แบบสำรวจศึกษาระดับความเครียดในสถานที่ทำงาน' }
            ] },
          { w: 'contract', pos: 'n., v.', level: 'B2', source: 'Oxford 3000', th: 'สัญญา',
            sentence: 'She signed a two-year ___ with the company.', sentenceTh: 'เธอเซ็นสัญญาสองปีกับบริษัท',
            collocations: ['sign a contract', 'a work contract'],
            quizBank: [
              { s: 'Please read the ___ carefully before signing it.', sTh: 'กรุณาอ่านสัญญาอย่างละเอียดก่อนเซ็น' },
              { s: 'His ___ ends at the end of this year.', sTh: 'สัญญาของเขาสิ้นสุดปลายปีนี้' },
              { s: 'The company decided not to renew her ___.', sTh: 'บริษัทตัดสินใจไม่ต่อสัญญาของเธอ' }
            ] },
          { w: 'deadline', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'กำหนดส่งงาน',
            sentence: 'We have to finish the project before the ___.', sentenceTh: 'เราต้องทำโครงการให้เสร็จก่อนกำหนดส่งงาน',
            collocations: ['meet a deadline', 'miss a deadline'],
            quizBank: [
              { s: 'The ___ for the application is next Friday.', sTh: 'กำหนดส่งใบสมัครคือวันศุกร์หน้า' },
              { s: 'He always works better under a tight ___.', sTh: 'เขาทำงานได้ดีขึ้นเสมอเมื่ออยู่ภายใต้กำหนดเวลาที่กระชั้นชิด' },
              { s: 'They missed the ___ because of technical problems.', sTh: 'พวกเขาพลาดกำหนดส่งงานเพราะปัญหาทางเทคนิค' }
            ] },
          { w: 'productivity', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'ประสิทธิภาพการผลิต/การทำงาน',
            sentence: 'The new software helped increase ___ across the office.', sentenceTh: 'ซอฟต์แวร์ใหม่ช่วยเพิ่มประสิทธิภาพการทำงานทั่วทั้งออฟฟิศ',
            collocations: ['increase productivity', 'workplace productivity'],
            quizBank: [
              { s: 'Poor sleep can reduce a worker\'s ___.', sTh: 'การนอนหลับไม่เพียงพอสามารถลดประสิทธิภาพการทำงานของคนได้' },
              { s: 'The factory measures ___ by how many items are made per hour.', sTh: 'โรงงานวัดประสิทธิภาพจากจำนวนชิ้นงานที่ผลิตได้ต่อชั่วโมง' },
              { s: 'Managers are looking for ways to boost team ___.', sTh: 'ผู้จัดการกำลังมองหาวิธีเพิ่มประสิทธิภาพของทีม' }
            ] }
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
