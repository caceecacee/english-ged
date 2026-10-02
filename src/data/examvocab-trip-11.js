/* คลังคำศัพท์ "เตรียมสอบ" ทริปที่ 11 — อิง Oxford 3000 (A1–B2) และ Oxford 5000 (C1) เป็นแหล่งอ้างอิงระดับ
   ที่มา: oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/
          The_Oxford_3000_by_CEFR_level.pdf และ The_Oxford_5000_by_CEFR_level.pdf (ดึงและตรวจสอบระดับคำทุกคำจริง)
   ดูนโยบายสัดส่วน/โครงสร้างข้อมูลเต็มที่ examvocab-trip-01.js — ทริปนี้ใช้กฎเดียวกันทุกข้อ (50 คำใหม่ ไม่ซ้ำกับทริป 1-10) */
(function (root) {
  var EP = root.EP = root.EP || {};
  EP.examVocab = EP.examVocab || { trips: [] };
  EP.examVocab.trips.push({
    id: 'trip-11',
    name: 'อยู่ได้ด้วยตัวเอง',
    sets: [
      {
        id: 'university-life-11', theme: 'University Life XI', themeTh: 'ชีวิตมหาวิทยาลัย (อยู่ได้ด้วยตัวเอง)',
        words: [
          { w: 'alone', pos: 'adj., adv.', level: 'A2', source: 'Oxford 3000', th: 'คนเดียว/อยู่ตัวเดียว',
            sentence: 'She moved to the city and lived ___ for the first time.', sentenceTh: 'เธอย้ายมาอยู่ในเมืองและใช้ชีวิตคนเดียวเป็นครั้งแรก',
            collocations: ['live alone', 'all alone'],
            quizBank: [
              { s: 'Many students find it hard to live ___ at first.', sTh: 'นักเรียนหลายคนพบว่ายากที่จะอยู่คนเดียวในช่วงแรก' },
              { s: 'He prefers studying ___ rather than in a group.', sTh: 'เขาชอบอ่านหนังสือคนเดียวมากกว่าเป็นกลุ่ม' },
              { s: 'Being ___ gave her time to think about her future.', sTh: 'การอยู่คนเดียวทำให้เธอมีเวลาคิดเรื่องอนาคต' }
            ] },
          { w: 'living', pos: 'adj., n.', level: 'B1', source: 'Oxford 3000', th: 'การดำรงชีวิต/ค่าครองชีพ',
            sentence: 'The cost of ___ near campus is very high.', sentenceTh: 'ค่าครองชีพใกล้มหาวิทยาลัยสูงมาก',
            collocations: ['cost of living', 'independent living'],
            quizBank: [
              { s: 'Many students struggle with the cost of ___ in the city.', sTh: 'นักเรียนหลายคนลำบากกับค่าครองชีพในเมือง' },
              { s: 'Her first year of ___ alone taught her many skills.', sTh: 'ปีแรกของการดำรงชีวิตคนเดียวสอนทักษะหลายอย่างให้เธอ' },
              { s: 'Independent ___ requires good budgeting skills.', sTh: 'การดำรงชีวิตอย่างอิสระต้องการทักษะการจัดการเงินที่ดี' }
            ] },
          { w: 'organized', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'มีการจัดการที่ดี',
            sentence: 'Staying ___ helps her manage both classes and chores.', sentenceTh: 'การมีการจัดการที่ดีช่วยให้เธอจัดการทั้งเรียนและงานบ้าน',
            collocations: ['stay organized', 'a well-organized plan'],
            quizBank: [
              { s: 'He keeps an ___ schedule to balance study and sleep.', sTh: 'เขามีตารางที่จัดการดีเพื่อสร้างสมดุลระหว่างการเรียนและการนอน' },
              { s: 'Being ___ made the move to a new apartment easier.', sTh: 'การมีการจัดการที่ดีทำให้การย้ายไปอพาร์ตเมนต์ใหม่ง่ายขึ้น' },
              { s: 'Her ___ notes helped her study for finals quickly.', sTh: 'สมุดบันทึกที่จัดการดีของเธอช่วยให้อ่านสอบปลายภาคได้เร็ว' }
            ] },
          { w: 'lonely', pos: 'adj.', level: 'B1', source: 'Oxford 3000', th: 'เหงา',
            sentence: 'She felt ___ during her first weeks away from home.', sentenceTh: 'เธอรู้สึกเหงาในช่วงสัปดาห์แรกๆ ที่อยู่ห่างจากบ้าน',
            collocations: ['feel lonely', 'a lonely life'],
            quizBank: [
              { s: 'Many first-year students feel ___ before making new friends.', sTh: 'นักเรียนปีหนึ่งหลายคนรู้สึกเหงาก่อนที่จะมีเพื่อนใหม่' },
              { s: 'Joining a club helped him feel less ___.', sTh: 'การเข้าชมรมช่วยให้เขารู้สึกเหงาน้อยลง' },
              { s: 'Living alone can feel ___ at first.', sTh: 'การอยู่คนเดียวอาจรู้สึกเหงาในช่วงแรก' }
            ] },
          { w: 'ingredient', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ส่วนผสม (อาหาร)',
            sentence: 'She learned to cook with simple ___s on a budget.', sentenceTh: 'เธอเรียนทำอาหารด้วยส่วนผสมง่ายๆ ในงบจำกัด',
            collocations: ['a key ingredient', 'buy ingredients'],
            quizBank: [
              { s: 'He forgot one ___ while cooking his first meal alone.', sTh: 'เขาลืมส่วนผสมหนึ่งอย่างตอนทำอาหารมื้อแรกคนเดียว' },
              { s: 'The recipe only needs five cheap ___s.', sTh: 'สูตรอาหารใช้ส่วนผสมราคาถูกเพียงห้าอย่าง' },
              { s: 'Buying fresh ___s every week saved her money.', sTh: 'การซื้อส่วนผสมสดทุกสัปดาห์ช่วยให้เธอประหยัดเงิน' }
            ] },
          { w: 'mess', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ความยุ่งเหยิง',
            sentence: 'His room was a ___ after exam week.', sentenceTh: 'ห้องของเขายุ่งเหยิงหลังจากสัปดาห์สอบ',
            collocations: ['make a mess', 'clean up a mess'],
            quizBank: [
              { s: 'She cleaned up the ___ before her roommate came home.', sTh: 'เธอทำความสะอาดความยุ่งเหยิงก่อนที่รูมเมทจะกลับมา' },
              { s: 'Cooking for the first time left quite a ___ in the kitchen.', sTh: 'การทำอาหารครั้งแรกทำให้ห้องครัวยุ่งเหยิงพอสมควร' },
              { s: 'He always leaves a ___ when he studies late at night.', sTh: 'เขามักทำห้องยุ่งเหยิงเมื่ออ่านหนังสือดึกๆ' }
            ] },
          { w: 'cope', pos: 'v.', level: 'B2', source: 'Oxford 5000', th: 'รับมือ (กับความเครียด/ปัญหา)',
            sentence: 'It took her a while to ___ with living alone.', sentenceTh: 'เธอใช้เวลาสักพักในการรับมือกับการอยู่คนเดียว',
            collocations: ['cope with stress', 'learn to cope'],
            quizBank: [
              { s: 'Students learn to ___ with a heavier workload each year.', sTh: 'นักเรียนเรียนรู้ที่จะรับมือกับงานที่หนักขึ้นทุกปี' },
              { s: 'Talking to friends helps her ___ with homesickness.', sTh: 'การพูดคุยกับเพื่อนช่วยให้เธอรับมือกับความคิดถึงบ้านได้' },
              { s: 'He found it hard to ___ without his family nearby.', sTh: 'เขาพบว่ายากที่จะรับมือโดยไม่มีครอบครัวอยู่ใกล้' }
            ] },
          { w: 'adjust', pos: 'v.', level: 'B2', source: 'Oxford 5000', th: 'ปรับตัว',
            sentence: 'It took him a month to ___ to living alone.', sentenceTh: 'เขาใช้เวลาหนึ่งเดือนในการปรับตัวกับการอยู่คนเดียว',
            collocations: ['adjust to', 'quickly adjust'],
            quizBank: [
              { s: 'Most freshmen ___ to independent life within a semester.', sTh: 'นักศึกษาปีหนึ่งส่วนใหญ่ปรับตัวกับการใช้ชีวิตอิสระได้ภายในหนึ่งเทอม' },
              { s: 'She had to ___ her budget after rent increased.', sTh: 'เธอต้องปรับงบประมาณหลังค่าเช่าสูงขึ้น' },
              { s: 'It took time to ___ to cooking for just one person.', sTh: 'ใช้เวลาในการปรับตัวกับการทำอาหารสำหรับคนเดียว' }
            ] },
          { w: 'independence', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'ความเป็นอิสระ',
            sentence: 'Living away from home gave her a sense of ___.', sentenceTh: 'การอยู่ไกลจากบ้านทำให้เธอรู้สึกถึงความเป็นอิสระ',
            collocations: ['gain independence', 'a sense of independence'],
            quizBank: [
              { s: 'Many students value the ___ of living on their own.', sTh: 'นักเรียนหลายคนให้ความสำคัญกับความเป็นอิสระในการอยู่คนเดียว' },
              { s: 'His parents encouraged his growing ___.', sTh: 'พ่อแม่ของเขาสนับสนุนความเป็นอิสระที่เพิ่มขึ้น' },
              { s: 'Managing her own money gave her real financial ___.', sTh: 'การจัดการเงินของตัวเองทำให้เธอมีความเป็นอิสระทางการเงินอย่างแท้จริง' }
            ] },
          { w: 'tenant', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'ผู้เช่า',
            sentence: 'As a new ___, she had to sign a one-year lease.', sentenceTh: 'ในฐานะผู้เช่าใหม่ เธอต้องเซ็นสัญญาเช่าหนึ่งปี',
            collocations: ['a new tenant', 'tenant rights'],
            quizBank: [
              { s: 'The landlord explained the rules to every new ___.', sTh: 'เจ้าของบ้านอธิบายกฎให้ผู้เช่าใหม่ทุกคน' },
              { s: 'Each ___ pays a deposit before moving in.', sTh: 'ผู้เช่าแต่ละคนจ่ายเงินมัดจำก่อนย้ายเข้า' },
              { s: '___s are responsible for keeping the apartment clean.', sTh: 'ผู้เช่ามีหน้าที่รักษาความสะอาดของอพาร์ตเมนต์' }
            ] }
        ]
      },
      {
        id: 'social-news-11', theme: 'Social News XI', themeTh: 'ข่าวสังคม (อยู่ได้ด้วยตัวเอง)',
        words: [
          { w: 'platform', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'แพลตฟอร์ม (ออนไลน์)',
            sentence: 'The new ___ is popular among teenagers.', sentenceTh: 'แพลตฟอร์มใหม่เป็นที่นิยมในหมู่วัยรุ่น',
            collocations: ['a social media platform', 'use a platform'],
            quizBank: [
              { s: 'This ___ lets users share short videos.', sTh: 'แพลตฟอร์มนี้ให้ผู้ใช้แบ่งปันวิดีโอสั้นๆ' },
              { s: 'Millions of people joined the ___ in its first year.', sTh: 'คนหลายล้านคนเข้าร่วมแพลตฟอร์มในปีแรก' },
              { s: 'The company launched a new ___ for creators.', sTh: 'บริษัทเปิดตัวแพลตฟอร์มใหม่สำหรับผู้สร้างเนื้อหา' }
            ] },
          { w: 'setting', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'การตั้งค่า',
            sentence: 'She changed her privacy ___s after the article was published.', sentenceTh: 'เธอเปลี่ยนการตั้งค่าความเป็นส่วนตัวหลังบทความถูกเผยแพร่',
            collocations: ['privacy settings', 'adjust a setting'],
            quizBank: [
              { s: 'Check your account ___s before sharing personal photos.', sTh: 'ตรวจสอบการตั้งค่าบัญชีของคุณก่อนแบ่งปันรูปถ่ายส่วนตัว' },
              { s: 'He adjusted the ___ to limit who could see his posts.', sTh: 'เขาปรับการตั้งค่าเพื่อจำกัดว่าใครเห็นโพสต์ของเขาได้' },
              { s: 'The app\'s default ___ shares your location.', sTh: 'การตั้งค่าเริ่มต้นของแอปแบ่งปันตำแหน่งของคุณ' }
            ] },
          { w: 'content', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'เนื้อหา (ที่โพสต์)',
            sentence: 'She creates ___ about healthy cooking.', sentenceTh: 'เธอสร้างเนื้อหาเกี่ยวกับการทำอาหารเพื่อสุขภาพ',
            collocations: ['create content', 'online content'],
            quizBank: [
              { s: 'This platform removed ___ that broke its rules.', sTh: 'แพลตฟอร์มนี้ลบเนื้อหาที่ผิดกฎของตัวเอง' },
              { s: 'He posts new ___ every single day.', sTh: 'เขาโพสต์เนื้อหาใหม่ทุกวัน' },
              { s: 'Her ___ reached millions of viewers last year.', sTh: 'เนื้อหาของเธอเข้าถึงผู้ชมหลายล้านคนในปีที่แล้ว' }
            ] },
          { w: 'viewer', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ผู้ชม (ออนไลน์)',
            sentence: 'The video attracted thousands of ___s within an hour.', sentenceTh: 'วิดีโอดึงดูดผู้ชมหลายพันคนภายในหนึ่งชั่วโมง',
            collocations: ['a loyal viewer', 'attract viewers'],
            quizBank: [
              { s: 'Many ___s commented on how helpful the video was.', sTh: 'ผู้ชมหลายคนแสดงความเห็นว่าวิดีโอมีประโยชน์มาก' },
              { s: 'The channel\'s ___ numbers grew quickly this month.', sTh: 'จำนวนผู้ชมของช่องเติบโตอย่างรวดเร็วเดือนนี้' },
              { s: 'A loyal group of ___s watches every new video.', sTh: 'กลุ่มผู้ชมที่ภักดีดูวิดีโอใหม่ทุกคลิป' }
            ] },
          { w: 'channel', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ช่องทาง (เนื้อหา)',
            sentence: 'He started his ___ three years ago.', sentenceTh: 'เขาเริ่มช่องของตัวเองเมื่อสามปีก่อน',
            collocations: ['a YouTube channel', 'subscribe to a channel'],
            quizBank: [
              { s: 'Her ___ now has over a million followers.', sTh: 'ช่องของเธอตอนนี้มีผู้ติดตามกว่าหนึ่งล้านคน' },
              { s: 'He uploads new videos to his ___ every week.', sTh: 'เขาอัปโหลดวิดีโอใหม่ไปยังช่องของตัวเองทุกสัปดาห์' },
              { s: 'Several news ___s covered the same story.', sTh: 'หลายช่องข่าวนำเสนอเรื่องเดียวกัน' }
            ] },
          { w: 'attract', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'ดึงดูด',
            sentence: 'Bright colors ___ more attention on social media.', sentenceTh: 'สีสันสดใสดึงดูดความสนใจบนโซเชียลมีเดียมากกว่า',
            collocations: ['attract attention', 'attract followers'],
            quizBank: [
              { s: 'A catchy title can ___ many new viewers.', sTh: 'ชื่อที่น่าสนใจสามารถดึงดูดผู้ชมใหม่จำนวนมาก' },
              { s: 'Her honest style ___ed a loyal audience.', sTh: 'สไตล์ที่จริงใจของเธอดึงดูดผู้ชมที่ภักดี' },
              { s: 'The video\'s title was written to ___ clicks.', sTh: 'ชื่อวิดีโอถูกเขียนเพื่อดึงดูดการคลิก' }
            ] },
          { w: 'popularity', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'ความนิยม',
            sentence: 'The app\'s ___ grew rapidly among teenagers.', sentenceTh: 'ความนิยมของแอปเติบโตอย่างรวดเร็วในหมู่วัยรุ่น',
            collocations: ['gain popularity', 'rapid popularity'],
            quizBank: [
              { s: 'Her channel\'s sudden ___ surprised even her.', sTh: 'ความนิยมที่เพิ่มขึ้นอย่างกะทันหันของช่องเธอทำให้แม้แต่เธอเองก็ประหลาดใจ' },
              { s: 'This trend\'s ___ faded after a few months.', sTh: 'ความนิยมของเทรนด์นี้ลดลงหลังจากไม่กี่เดือน' },
              { s: 'The platform\'s ___ keeps rising every year.', sTh: 'ความนิยมของแพลตฟอร์มเพิ่มขึ้นทุกปี' }
            ] },
          { w: 'interaction', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'การมีปฏิสัมพันธ์',
            sentence: 'Her videos encourage ___ through comments and questions.', sentenceTh: 'วิดีโอของเธอส่งเสริมการมีปฏิสัมพันธ์ผ่านคอมเมนต์และคำถาม',
            collocations: ['online interaction', 'encourage interaction'],
            quizBank: [
              { s: 'Live streams allow direct ___ with viewers.', sTh: 'การสตรีมสดช่วยให้มีปฏิสัมพันธ์โดยตรงกับผู้ชม' },
              { s: 'This ___ between fans and creators built a strong community.', sTh: 'การมีปฏิสัมพันธ์ระหว่างแฟนกับผู้สร้างเนื้อหาสร้างชุมชนที่แข็งแรง' },
              { s: 'He replies to comments to keep up ___ with his audience.', sTh: 'เขาตอบคอมเมนต์เพื่อรักษาการมีปฏิสัมพันธ์กับผู้ชม' }
            ] },
          { w: 'restriction', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'ข้อจำกัด',
            sentence: 'New ___s limit screen time for young users.', sentenceTh: 'ข้อจำกัดใหม่จำกัดเวลาหน้าจอสำหรับผู้ใช้วัยเยาว์',
            collocations: ['age restriction', 'impose a restriction'],
            quizBank: [
              { s: 'The app added age ___s after public pressure.', sTh: 'แอปเพิ่มข้อจำกัดด้านอายุหลังถูกกดดันจากสาธารณะ' },
              { s: 'Parents asked for stricter ___s on content for children.', sTh: 'พ่อแม่ขอข้อจำกัดที่เข้มงวดขึ้นสำหรับเนื้อหาสำหรับเด็ก' },
              { s: 'The new ___ limits how long teenagers can use the app daily.', sTh: 'ข้อจำกัดใหม่จำกัดเวลาที่วัยรุ่นสามารถใช้แอปได้ต่อวัน' }
            ] },
          { w: 'creator', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'ผู้สร้างเนื้อหา',
            sentence: 'Many young people dream of becoming a content ___.', sentenceTh: 'คนหนุ่มสาวหลายคนฝันอยากเป็นผู้สร้างเนื้อหา',
            collocations: ['a content creator', 'support a creator'],
            quizBank: [
              { s: 'This ___ earns money through advertising and sponsorships.', sTh: 'ผู้สร้างเนื้อหาคนนี้หารายได้จากการโฆษณาและสปอนเซอร์' },
              { s: 'The platform pays ___s based on how many people watch.', sTh: 'แพลตฟอร์มจ่ายเงินให้ผู้สร้างเนื้อหาตามจำนวนคนที่ดู' },
              { s: 'She became a full-time ___ after college.', sTh: 'เธอกลายเป็นผู้สร้างเนื้อหาเต็มเวลาหลังเรียนจบมหาวิทยาลัย' }
            ] }
        ]
      },
      {
        id: 'environment-11', theme: 'Environment XII', themeTh: 'ท่องเที่ยวธรรมชาติ (อยู่ได้ด้วยตัวเอง)',
        words: [
          { w: 'tourism', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'การท่องเที่ยว',
            sentence: 'Eco-friendly ___ is growing in popularity.', sentenceTh: 'การท่องเที่ยวที่เป็นมิตรกับสิ่งแวดล้อมได้รับความนิยมเพิ่มขึ้น',
            collocations: ['eco-tourism', 'boost tourism'],
            quizBank: [
              { s: 'The park depends on ___ for most of its income.', sTh: 'อุทยานพึ่งพาการท่องเที่ยวเป็นแหล่งรายได้หลัก' },
              { s: '___ brings thousands of visitors to this region each year.', sTh: 'การท่องเที่ยวดึงดูดผู้มาเยือนหลายพันคนมายังภูมิภาคนี้ทุกปี' },
              { s: 'Officials want to manage ___ without harming the forest.', sTh: 'เจ้าหน้าที่ต้องการบริหารจัดการการท่องเที่ยวโดยไม่ทำลายป่า' }
            ] },
          { w: 'path', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ทางเดิน',
            sentence: 'Visitors must stay on the marked ___.', sentenceTh: 'ผู้มาเยือนต้องอยู่บนทางเดินที่มีเครื่องหมายไว้',
            collocations: ['stay on the path', 'follow a path'],
            quizBank: [
              { s: 'The ___ leads straight to the waterfall.', sTh: 'ทางเดินนำตรงไปยังน้ำตก' },
              { s: 'Wandering off the ___ can damage plant life.', sTh: 'การเดินออกนอกทางเดินอาจทำลายพืชพรรณ' },
              { s: 'A new ___ was built to protect the fragile grass.', sTh: 'ทางเดินใหม่ถูกสร้างขึ้นเพื่อปกป้องหญ้าที่บอบบาง' }
            ] },
          { w: 'fence', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'รั้ว',
            sentence: 'A low ___ keeps visitors away from the nesting area.', sentenceTh: 'รั้วเตี้ยช่วยกันผู้มาเยือนออกจากพื้นที่ทำรัง',
            collocations: ['a wooden fence', 'build a fence'],
            quizBank: [
              { s: 'The park built a ___ around the fragile wetland.', sTh: 'อุทยานสร้างรั้วรอบพื้นที่ชุ่มน้ำที่บอบบาง' },
              { s: 'Visitors are asked not to climb over the ___.', sTh: 'ผู้มาเยือนถูกขอให้ไม่ปีนข้ามรั้ว' },
              { s: 'The old wooden ___ was replaced after the storm.', sTh: 'รั้วไม้เก่าถูกเปลี่ยนใหม่หลังพายุ' }
            ] },
          { w: 'entrance', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ทางเข้า',
            sentence: 'The park\'s main ___ was crowded this weekend.', sentenceTh: 'ทางเข้าหลักของอุทยานคนแน่นในสุดสัปดาห์นี้',
            collocations: ['the main entrance', 'near the entrance'],
            quizBank: [
              { s: 'Maps are available right at the ___.', sTh: 'มีแผนที่ให้บริการตรงทางเข้า' },
              { s: 'A ranger checked tickets at the ___.', sTh: 'เจ้าหน้าที่พิทักษ์ป่าตรวจตั๋วที่ทางเข้า' },
              { s: 'The ___ fee helps fund park conservation.', sTh: 'ค่าธรรมเนียมทางเข้าช่วยสนับสนุนการอนุรักษ์อุทยาน' }
            ] },
          { w: 'rope', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'เชือก (กั้นเขต)',
            sentence: 'A ___ marked the edge of the protected area.', sentenceTh: 'เชือกกั้นแนวเขตของพื้นที่ที่ได้รับการปกป้อง',
            collocations: ['a thick rope', 'cross a rope'],
            quizBank: [
              { s: 'Visitors are asked not to cross the ___ barrier.', sTh: 'ผู้มาเยือนถูกขอให้ไม่ข้ามแนวกั้นเชือก' },
              { s: 'A ___ guided hikers along the safest route.', sTh: 'เชือกนำทางให้นักเดินป่าไปตามเส้นทางที่ปลอดภัยที่สุด' },
              { s: 'Staff set up a ___ to protect the nesting birds.', sTh: 'พนักงานตั้งเชือกเพื่อปกป้องนกที่กำลังทำรัง' }
            ] },
          { w: 'tent', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'เต็นท์',
            sentence: 'They set up their ___ before it got dark.', sentenceTh: 'พวกเขากางเต็นท์ก่อนที่จะมืด',
            collocations: ['set up a tent', 'sleep in a tent'],
            quizBank: [
              { s: 'Campers must only pitch a ___ in designated areas.', sTh: 'นักกางเต็นท์ต้องตั้งเต็นท์เฉพาะในพื้นที่ที่กำหนดเท่านั้น' },
              { s: 'The wind nearly blew their ___ away overnight.', sTh: 'ลมเกือบพัดเต็นท์ของพวกเขาหายไปในชั่วข้ามคืน' },
              { s: 'A small ___ can fit two people comfortably.', sTh: 'เต็นท์เล็กสามารถรองรับคนสองคนได้อย่างสบาย' }
            ] },
          { w: 'steep', pos: 'adj.', level: 'B2', source: 'Oxford 3000', th: 'ชัน',
            sentence: 'The trail becomes very ___ near the summit.', sentenceTh: 'เส้นทางชันมากใกล้ยอดเขา',
            collocations: ['a steep slope', 'a steep climb'],
            quizBank: [
              { s: 'This ___ path is not suitable for beginners.', sTh: 'ทางเดินที่ชันนี้ไม่เหมาะกับผู้เริ่มต้น' },
              { s: 'The ___ hill made the final stretch exhausting.', sTh: 'เนินที่ชันทำให้ช่วงสุดท้ายเหนื่อยล้ามาก' },
              { s: 'Hikers were warned about the ___ drop ahead.', sTh: 'นักเดินป่าถูกเตือนเรื่องทางลาดชันที่อยู่ข้างหน้า' }
            ] },
          { w: 'landscape', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'ภูมิทัศน์',
            sentence: 'The ___ changes dramatically as you climb higher.', sentenceTh: 'ภูมิทัศน์เปลี่ยนแปลงอย่างมากเมื่อปีนขึ้นไปสูงขึ้น',
            collocations: ['a beautiful landscape', 'protect the landscape'],
            quizBank: [
              { s: 'Visitors come from around the world to see this ___.', sTh: 'ผู้มาเยือนเดินทางมาจากทั่วโลกเพื่อชมภูมิทัศน์นี้' },
              { s: 'The park protects this unique mountain ___.', sTh: 'อุทยานปกป้องภูมิทัศน์ภูเขาที่เป็นเอกลักษณ์นี้' },
              { s: 'A fire changed the ___ of the entire valley.', sTh: 'ไฟป่าเปลี่ยนภูมิทัศน์ของหุบเขาทั้งหมด' }
            ] },
          { w: 'shelter', pos: 'n., v.', level: 'B2', source: 'Oxford 3000', th: 'ที่พักพิง (ระหว่างเดินป่า)',
            sentence: 'Hikers found ___ in a small cabin during the storm.', sentenceTh: 'นักเดินป่าหาที่พักพิงในกระท่อมเล็กๆ ระหว่างพายุ',
            collocations: ['find shelter', 'a mountain shelter'],
            quizBank: [
              { s: 'A wooden ___ along the trail protects hikers from rain.', sTh: 'ที่พักพิงไม้ตามเส้นทางช่วยปกป้องนักเดินป่าจากฝน' },
              { s: 'They had to ___ under a rock when the weather turned.', sTh: 'พวกเขาต้องหลบใต้หินเมื่อสภาพอากาศเปลี่ยน' },
              { s: 'The park built a ___ for hikers caught in sudden storms.', sTh: 'อุทยานสร้างที่พักพิงสำหรับนักเดินป่าที่เจอพายุกะทันหัน' }
            ] },
          { w: 'summit', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'ยอดเขา',
            sentence: 'They finally reached the ___ after six hours of climbing.', sentenceTh: 'พวกเขาในที่สุดก็ถึงยอดเขาหลังเดินปีนหกชั่วโมง',
            collocations: ['reach the summit', 'climb to the summit'],
            quizBank: [
              { s: 'The view from the ___ made the long climb worth it.', sTh: 'วิวจากยอดเขาทำให้การปีนที่ยาวนานคุ้มค่า' },
              { s: 'Bad weather forced the team to turn back before the ___.', sTh: 'สภาพอากาศแย่ทำให้ทีมต้องหันกลับก่อนถึงยอดเขา' },
              { s: 'Few hikers manage to reach the ___ in winter.', sTh: 'นักเดินป่ามีน้อยคนที่สามารถถึงยอดเขาได้ในฤดูหนาว' }
            ] }
        ]
      },
      {
        id: 'science-11', theme: 'Science XII', themeTh: 'สุขภาพและร่างกาย (อยู่ได้ด้วยตัวเอง)',
        words: [
          { w: 'health', pos: 'n.', level: 'A1', source: 'Oxford 3000', th: 'สุขภาพ',
            sentence: 'Regular exercise is good for your ___.', sentenceTh: 'การออกกำลังกายอย่างสม่ำเสมอดีต่อสุขภาพของคุณ',
            collocations: ['good health', 'health problems'],
            quizBank: [
              { s: 'Doctors recommend sleep for better ___.', sTh: 'แพทย์แนะนำการนอนหลับเพื่อสุขภาพที่ดีขึ้น' },
              { s: 'Her ___ improved after she started eating better.', sTh: 'สุขภาพของเธอดีขึ้นหลังจากเริ่มกินอาหารที่ดีขึ้น' },
              { s: 'A balanced diet supports overall ___.', sTh: 'อาหารที่สมดุลสนับสนุนสุขภาพโดยรวม' }
            ] },
          { w: 'fitness', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ความฟิตของร่างกาย',
            sentence: 'She joined a gym to improve her ___.', sentenceTh: 'เธอเข้ายิมเพื่อพัฒนาความฟิตของร่างกาย',
            collocations: ['physical fitness', 'a fitness goal'],
            quizBank: [
              { s: 'His ___ improved after months of regular training.', sTh: 'ความฟิตของเขาดีขึ้นหลังฝึกฝนอย่างสม่ำเสมอมาหลายเดือน' },
              { s: 'This app tracks your daily ___ activities.', sTh: 'แอปนี้ติดตามกิจกรรมความฟิตของคุณในแต่ละวัน' },
              { s: 'Good ___ can reduce the risk of many illnesses.', sTh: 'ความฟิตที่ดีสามารถลดความเสี่ยงของการเจ็บป่วยหลายอย่าง' }
            ] },
          { w: 'breathe', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'หายใจ',
            sentence: 'Try to ___ slowly and deeply during exercise.', sentenceTh: 'ลองหายใจอย่างช้าๆ และลึกระหว่างออกกำลังกาย',
            collocations: ['breathe deeply', 'breathe normally'],
            quizBank: [
              { s: 'Runners learn to ___ properly to improve their pace.', sTh: 'นักวิ่งเรียนรู้ที่จะหายใจอย่างถูกวิธีเพื่อพัฒนาความเร็ว' },
              { s: 'He had to stop and ___ after running up the hill.', sTh: 'เขาต้องหยุดและหายใจหลังวิ่งขึ้นเนิน' },
              { s: 'Yoga teaches students to ___ calmly under stress.', sTh: 'โยคะสอนให้นักเรียนหายใจอย่างสงบในช่วงเครียด' }
            ] },
          { w: 'strength', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'ความแข็งแรง',
            sentence: 'Lifting weights builds muscle ___ over time.', sentenceTh: 'การยกน้ำหนักสร้างความแข็งแรงของกล้ามเนื้อเมื่อเวลาผ่านไป',
            collocations: ['build strength', 'physical strength'],
            quizBank: [
              { s: 'Her ___ improved greatly after months of training.', sTh: 'ความแข็งแรงของเธอดีขึ้นมากหลังฝึกฝนมาหลายเดือน' },
              { s: 'This exercise helps build core ___.', sTh: 'การออกกำลังกายนี้ช่วยสร้างความแข็งแรงของแกนกลางลำตัว' },
              { s: 'He gradually increased his ___ by lifting heavier weights.', sTh: 'เขาเพิ่มความแข็งแรงอย่างค่อยเป็นค่อยไปด้วยการยกน้ำหนักที่หนักขึ้น' }
            ] },
          { w: 'injure', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'ทำให้บาดเจ็บ',
            sentence: 'She did not warm up and ___d her leg.', sentenceTh: 'เธอไม่ได้วอร์มร่างกายและทำให้ขาบาดเจ็บ',
            collocations: ['injure yourself', 'badly injured'],
            quizBank: [
              { s: 'He ___d his back lifting a heavy box.', sTh: 'เขาทำให้หลังบาดเจ็บตอนยกกล่องหนัก' },
              { s: 'Stretching before running helps avoid getting ___d.', sTh: 'การยืดเหยียดก่อนวิ่งช่วยหลีกเลี่ยงการบาดเจ็บ' },
              { s: 'The player was ___d during the final minutes of the match.', sTh: 'นักกีฬาบาดเจ็บในช่วงนาทีสุดท้ายของการแข่งขัน' }
            ] },
          { w: 'lack', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'การขาด (สิ่งที่จำเป็น)',
            sentence: 'A ___ of sleep can affect your health badly.', sentenceTh: 'การขาดการนอนหลับสามารถส่งผลต่อสุขภาพอย่างรุนแรง',
            collocations: ['a lack of', 'lack energy'],
            quizBank: [
              { s: 'A ___ of exercise is linked to many health problems.', sTh: 'การขาดการออกกำลังกายเชื่อมโยงกับปัญหาสุขภาพหลายอย่าง' },
              { s: 'She felt tired due to a ___ of good nutrition.', sTh: 'เธอรู้สึกเหนื่อยเพราะขาดสารอาหารที่ดี' },
              { s: 'A ___ of water during exercise can cause dizziness.', sTh: 'การขาดน้ำระหว่างออกกำลังกายอาจทำให้เวียนศีรษะ' }
            ] },
          { w: 'obesity', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'ภาวะอ้วน',
            sentence: 'Doctors warn that childhood ___ is increasing.', sentenceTh: 'แพทย์เตือนว่าภาวะอ้วนในเด็กกำลังเพิ่มขึ้น',
            collocations: ['childhood obesity', 'prevent obesity'],
            quizBank: [
              { s: 'Poor diet is a major cause of ___.', sTh: 'อาหารที่ไม่ดีเป็นสาเหตุหลักของภาวะอ้วน' },
              { s: 'The study links ___ to a lack of exercise.', sTh: 'งานวิจัยเชื่อมโยงภาวะอ้วนกับการขาดการออกกำลังกาย' },
              { s: 'Schools are teaching healthy habits to fight ___.', sTh: 'โรงเรียนสอนพฤติกรรมเพื่อสุขภาพเพื่อต่อสู้กับภาวะอ้วน' }
            ] },
          { w: 'protein', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'โปรตีน',
            sentence: 'Eating enough ___ helps repair muscles after exercise.', sentenceTh: 'การกินโปรตีนให้เพียงพอช่วยซ่อมแซมกล้ามเนื้อหลังออกกำลังกาย',
            collocations: ['a protein source', 'high in protein'],
            quizBank: [
              { s: 'Eggs and beans are good sources of ___.', sTh: 'ไข่และถั่วเป็นแหล่งโปรตีนที่ดี' },
              { s: 'Athletes often need more ___ than other people.', sTh: 'นักกีฬามักต้องการโปรตีนมากกว่าคนอื่น' },
              { s: 'A diet low in ___ can slow down muscle recovery.', sTh: 'อาหารที่มีโปรตีนต่ำสามารถทำให้การฟื้นตัวของกล้ามเนื้อช้าลง' }
            ] },
          { w: 'vital', pos: 'adj.', level: 'B2', source: 'Oxford 3000', th: 'สำคัญอย่างยิ่งต่อชีวิต',
            sentence: 'Clean water is ___ for good health.', sentenceTh: 'น้ำสะอาดสำคัญอย่างยิ่งต่อสุขภาพที่ดี',
            collocations: ['a vital role', 'absolutely vital'],
            quizBank: [
              { s: 'Sleep plays a ___ role in recovery after exercise.', sTh: 'การนอนหลับมีบทบาทสำคัญอย่างยิ่งในการฟื้นตัวหลังออกกำลังกาย' },
              { s: 'Regular check-ups are ___ for catching problems early.', sTh: 'การตรวจสุขภาพเป็นประจำสำคัญอย่างยิ่งในการพบปัญหาแต่เนิ่นๆ' },
              { s: 'A ___ part of fitness is proper rest between workouts.', sTh: 'ส่วนที่สำคัญอย่างยิ่งของความฟิตคือการพักผ่อนอย่างเหมาะสมระหว่างการฝึก' }
            ] },
          { w: 'pulse', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'ชีพจร',
            sentence: 'The trainer checked her ___ after the workout.', sentenceTh: 'เทรนเนอร์ตรวจชีพจรของเธอหลังออกกำลังกาย',
            collocations: ['check a pulse', 'a rapid pulse'],
            quizBank: [
              { s: 'A fast ___ during rest can be a warning sign.', sTh: 'ชีพจรที่เร็วขณะพักอาจเป็นสัญญาณเตือน' },
              { s: 'Doctors measure your ___ during every check-up.', sTh: 'แพทย์วัดชีพจรของคุณในทุกการตรวจสุขภาพ' },
              { s: 'Her ___ returned to normal a few minutes after running.', sTh: 'ชีพจรของเธอกลับเป็นปกติไม่กี่นาทีหลังวิ่ง' }
            ] }
        ]
      },
      {
        id: 'work-11', theme: 'Work XI', themeTh: 'งานก่อสร้าง (อยู่ได้ด้วยตัวเอง)',
        words: [
          { w: 'site', pos: 'n.', level: 'A2', source: 'Oxford 3000', th: 'พื้นที่ก่อสร้าง',
            sentence: 'Visitors must wear a helmet at the construction ___.', sentenceTh: 'ผู้มาเยือนต้องสวมหมวกนิรภัยที่พื้นที่ก่อสร้าง',
            collocations: ['a construction site', 'a building site'],
            quizBank: [
              { s: 'Workers arrive at the ___ early every morning.', sTh: 'คนงานมาถึงพื้นที่ก่อสร้างแต่เช้าทุกวัน' },
              { s: 'The ___ was closed to the public during work hours.', sTh: 'พื้นที่ก่อสร้างถูกปิดไม่ให้บุคคลทั่วไปเข้าในช่วงเวลาทำงาน' },
              { s: 'A fence was built around the ___ for safety.', sTh: 'มีการสร้างรั้วรอบพื้นที่ก่อสร้างเพื่อความปลอดภัย' }
            ] },
          { w: 'engineering', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'วิศวกรรม',
            sentence: 'This bridge was a major ___ achievement.', sentenceTh: 'สะพานนี้เป็นความสำเร็จด้านวิศวกรรมครั้งสำคัญ',
            collocations: ['civil engineering', 'engineering project'],
            quizBank: [
              { s: 'The ___ team checked every support beam carefully.', sTh: 'ทีมวิศวกรรมตรวจสอบคานรองรับทุกตัวอย่างละเอียด' },
              { s: 'She studied civil ___ at university.', sTh: 'เธอเรียนวิศวกรรมโยธาที่มหาวิทยาลัย' },
              { s: 'Good ___ keeps tall buildings safe during storms.', sTh: 'วิศวกรรมที่ดีช่วยให้อาคารสูงปลอดภัยในช่วงพายุ' }
            ] },
          { w: 'frame', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'โครงสร้าง (อาคาร)',
            sentence: 'Workers finished the steel ___ by the end of the week.', sentenceTh: 'คนงานทำโครงสร้างเหล็กเสร็จภายในสิ้นสัปดาห์',
            collocations: ['a steel frame', 'build a frame'],
            quizBank: [
              { s: 'The building\'s ___ must support its own weight.', sTh: 'โครงสร้างของอาคารต้องรองรับน้ำหนักของตัวเอง' },
              { s: 'Engineers checked the ___ before adding the walls.', sTh: 'วิศวกรตรวจสอบโครงสร้างก่อนเติมผนัง' },
              { s: 'A strong ___ is essential for a tall building.', sTh: 'โครงสร้างที่แข็งแรงเป็นสิ่งจำเป็นสำหรับอาคารสูง' }
            ] },
          { w: 'ceiling', pos: 'n.', level: 'B1', source: 'Oxford 3000', th: 'เพดาน',
            sentence: 'Workers painted the ___ before the floor.', sentenceTh: 'คนงานทาสีเพดานก่อนทาสีพื้น',
            collocations: ['a high ceiling', 'paint the ceiling'],
            quizBank: [
              { s: 'A crack appeared in the ___ after the earthquake.', sTh: 'เกิดรอยแตกบนเพดานหลังเกิดแผ่นดินไหว' },
              { s: 'The new office has a high ___ and large windows.', sTh: 'ออฟฟิศใหม่มีเพดานสูงและหน้าต่างบานใหญ่' },
              { s: 'Workers installed lights into the ___ carefully.', sTh: 'คนงานติดตั้งไฟเข้าไปในเพดานอย่างระมัดระวัง' }
            ] },
          { w: 'base', pos: 'n., v.', level: 'B1', source: 'Oxford 3000', th: 'ฐาน (โครงสร้าง)',
            sentence: 'The tower needs a solid concrete ___.', sentenceTh: 'หอคอยต้องการฐานคอนกรีตที่แข็งแรง',
            collocations: ['a solid base', 'a concrete base'],
            quizBank: [
              { s: 'Without a strong ___, the structure could collapse.', sTh: 'หากไม่มีฐานที่แข็งแรง โครงสร้างอาจพังถล่มได้' },
              { s: 'Workers poured concrete to form the building\'s ___.', sTh: 'คนงานเทคอนกรีตเพื่อสร้างฐานของอาคาร' },
              { s: 'Engineers tested the ___ before construction continued.', sTh: 'วิศวกรทดสอบฐานก่อนการก่อสร้างจะดำเนินต่อ' }
            ] },
          { w: 'pour', pos: 'v.', level: 'B1', source: 'Oxford 3000', th: 'เท (คอนกรีต)',
            sentence: 'Workers will ___ the concrete early tomorrow.', sentenceTh: 'คนงานจะเทคอนกรีตเช้าตรู่วันพรุ่งนี้',
            collocations: ['pour concrete', 'pour a foundation'],
            quizBank: [
              { s: 'They had to ___ the foundation before the rain started.', sTh: 'พวกเขาต้องเทฐานก่อนฝนเริ่มตก' },
              { s: 'It took all morning to ___ the concrete floor.', sTh: 'ใช้เวลาตลอดเช้าในการเทพื้นคอนกรีต' },
              { s: 'The crew ___ed the mixture into the wooden frame.', sTh: 'ทีมงานเทส่วนผสมเข้าไปในโครงไม้' }
            ] },
          { w: 'construction', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'การก่อสร้าง',
            sentence: '___ on the new bridge will take two years.', sentenceTh: 'การก่อสร้างสะพานใหม่จะใช้เวลาสองปี',
            collocations: ['under construction', 'begin construction'],
            quizBank: [
              { s: 'The building is still under ___.', sTh: 'อาคารยังอยู่ระหว่างการก่อสร้าง' },
              { s: '___ delays pushed the opening date back by months.', sTh: 'ความล่าช้าในการก่อสร้างทำให้วันเปิดเลื่อนออกไปหลายเดือน' },
              { s: 'The city approved ___ of a new school this year.', sTh: 'เมืองอนุมัติการก่อสร้างโรงเรียนใหม่ในปีนี้' }
            ] },
          { w: 'foundation', pos: 'n.', level: 'B2', source: 'Oxford 5000', th: 'ฐานราก',
            sentence: 'A deep ___ keeps the building stable.', sentenceTh: 'ฐานรากที่ลึกช่วยให้อาคารมั่นคง',
            collocations: ['a solid foundation', 'lay a foundation'],
            quizBank: [
              { s: 'Workers dug deep to lay the ___.', sTh: 'คนงานขุดลึกเพื่อวางฐานราก' },
              { s: 'A cracked ___ can cause serious structural problems.', sTh: 'ฐานรากที่แตกสามารถก่อให้เกิดปัญหาโครงสร้างที่ร้ายแรง' },
              { s: 'The ___ took weeks to set before building could continue.', sTh: 'ฐานรากใช้เวลาหลายสัปดาห์จึงจะแห้งก่อนการก่อสร้างจะดำเนินต่อได้' }
            ] },
          { w: 'crew', pos: 'n.', level: 'B2', source: 'Oxford 3000', th: 'ทีมงาน (ก่อสร้าง)',
            sentence: 'A ___ of twenty workers finished the roof in two days.', sentenceTh: 'ทีมงานยี่สิบคนทำหลังคาเสร็จภายในสองวัน',
            collocations: ['a construction crew', 'a work crew'],
            quizBank: [
              { s: 'The ___ started work before sunrise.', sTh: 'ทีมงานเริ่มทำงานก่อนพระอาทิตย์ขึ้น' },
              { s: 'Each ___ member wore proper safety gear.', sTh: 'สมาชิกทีมงานแต่ละคนสวมอุปกรณ์ความปลอดภัยที่เหมาะสม' },
              { s: 'A second ___ was brought in to finish the project on time.', sTh: 'มีการเรียกทีมงานชุดที่สองมาเพื่อทำโครงการให้เสร็จตรงเวลา' }
            ] },
          { w: 'contractor', pos: 'n.', level: 'C1', source: 'Oxford 5000', th: 'ผู้รับเหมา',
            sentence: 'The ___ promised to finish the project by spring.', sentenceTh: 'ผู้รับเหมาสัญญาจะทำโครงการให้เสร็จก่อนฤดูใบไม้ผลิ',
            collocations: ['hire a contractor', 'a general contractor'],
            quizBank: [
              { s: 'They hired a local ___ to build the new office.', sTh: 'พวกเขาจ้างผู้รับเหมาท้องถิ่นเพื่อสร้างออฟฟิศใหม่' },
              { s: 'The ___ was responsible for managing all the workers.', sTh: 'ผู้รับเหมามีหน้าที่จัดการคนงานทั้งหมด' },
              { s: 'A good ___ keeps the project within budget.', sTh: 'ผู้รับเหมาที่ดีรักษาโครงการให้อยู่ในงบประมาณ' }
            ] }
        ]
      }
    ]
  });
})(typeof window !== 'undefined' ? window : globalThis);
