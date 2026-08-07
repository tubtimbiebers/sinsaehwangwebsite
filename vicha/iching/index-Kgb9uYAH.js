(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={
  "1":  { "zh": "乾", "th": "เชี่ยน — ฟ้า",        "upper": "乾 ฟ้า",     "lower": "乾 ฟ้า",     "upper_zh": "乾", "lower_zh": "乾", "lines": [1,1,1,1,1,1],
          "oracle": "พลังสร้างสรรค์สูงสุดรวมกัน สิ่งยิ่งใหญ่กำลังเริ่มต้น จงก้าวไปด้วยความมั่นใจ",
          "symbol": "มังกรทองพุ่งขึ้นฟ้า — เวลาแห่งพลังและอำนาจมาถึงแล้ว",
          "advice": "ริเริ่มได้เลย พลังทั้งหมดอยู่ในมือคุณ อย่าลังเล" },

  "2":  { "zh": "坤", "th": "คุน — แผ่นดิน",       "upper": "坤 แผ่นดิน", "lower": "坤 แผ่นดิน", "upper_zh": "坤", "lower_zh": "坤", "lines": [0,0,0,0,0,0],
          "oracle": "แผ่นดินรองรับทุกสรรพสิ่ง ความอ่อนน้อมและอดทนคือพลังที่แท้จริง",
          "symbol": "ทุ่งกว้างอุดมสมบูรณ์ — ผลิดอกออกผลตามวาระของมัน",
          "advice": "รับฟังและสนับสนุน อย่านำหน้า ความสำเร็จจะตามมาเอง" },

  "3":  { "zh": "屯", "th": "จุน — เริ่มต้นยาก",   "upper": "坎 น้ำ",     "lower": "震 สายฟ้า",  "upper_zh": "坎", "lower_zh": "震", "lines": [1,0,0,0,1,0],
          "oracle": "การเริ่มต้นมักเต็มไปด้วยอุปสรรค แต่ต้นไม้ใหญ่ก็ผ่านความมืดใต้ดินมาก่อน",
          "symbol": "หน่ออ่อนดันผ่านพื้นดินแข็ง — ชีวิตใหม่กำลังงอกเงย",
          "advice": "อดทนและขอความช่วยเหลือจากผู้มีประสบการณ์ อย่าฝ่าเพียงลำพัง" },

  "4":  { "zh": "蒙", "th": "เมิ่ง — เยาว์อ่อน",  "upper": "艮 ภูเขา",   "lower": "坎 น้ำ",     "upper_zh": "艮", "lower_zh": "坎", "lines": [0,1,0,0,0,1],
          "oracle": "ผู้ไม่รู้ควรแสวงหาครู ปัญญาเกิดจากการถามและการฟัง",
          "symbol": "น้ำพุใต้ภูเขา — ความรู้รอการค้นพบอยู่เสมอ",
          "advice": "เปิดใจรับการเรียนรู้ ความอ่อนน้อมต่อครูคือรากฐานแห่งปัญญา" },

  "5":  { "zh": "需", "th": "ซวี — รอคอย",         "upper": "坎 น้ำ",     "lower": "乾 ฟ้า",     "upper_zh": "坎", "lower_zh": "乾", "lines": [1,1,1,0,1,0],
          "oracle": "เมฆฝนรออยู่บนฟ้า เวลาที่เหมาะสมยังไม่มาถึง จงอดทนรอด้วยความสงบ",
          "symbol": "นักรบพักกินข้าวก่อนสู้ — การเตรียมพร้อมคือชัยชนะ",
          "advice": "หยุดรอและเตรียมตัว อย่าเร่งรัด โอกาสทองจะมาเองในเวลาอันควร" },

  "6":  { "zh": "訟", "th": "ซ่ง — ความขัดแย้ง",  "upper": "乾 ฟ้า",     "lower": "坎 น้ำ",     "upper_zh": "乾", "lower_zh": "坎", "lines": [0,1,0,1,1,1],
          "oracle": "ความขัดแย้งกำลังก่อตัว การฟ้องร้องไม่ใช่ทางออกที่ดีที่สุด",
          "symbol": "ฟ้าและน้ำแล่นสวนทาง — สองพลังที่ไม่อาจประสานกัน",
          "advice": "หาทางประนีประนอม อย่าพาเรื่องขึ้นศาล ยอมถอยบ้างดีกว่าแพ้ทั้งหมด" },

  "7":  { "zh": "師", "th": "ซือ — กองทัพ",        "upper": "坤 แผ่นดิน", "lower": "坎 น้ำ",     "upper_zh": "坤", "lower_zh": "坎", "lines": [0,1,0,0,0,0],
          "oracle": "การนำทัพต้องอาศัยวินัยและผู้นำที่เข้มแข็ง ความสามัคคีคือกุญแจสู่ชัยชนะ",
          "symbol": "น้ำซึมลึกใต้แผ่นดิน — พลังที่ซ่อนเร้นแต่ทรงพลัง",
          "advice": "จัดระเบียบทีมให้ดี มีผู้นำที่ชัดเจน แล้วทุกอย่างจะเดินหน้าได้" },

  "8":  { "zh": "比", "th": "ปี้ — สามัคคี",       "upper": "坎 น้ำ",     "lower": "坤 แผ่นดิน", "upper_zh": "坎", "lower_zh": "坤", "lines": [0,0,0,0,1,0],
          "oracle": "การสามัคคีและร่วมมือกันนำมาซึ่งโชคดี เวลานี้เหมาะกับการรวมพลัง",
          "symbol": "น้ำไหลบนแผ่นดิน — ทุกสายรวมกันเป็นแม่น้ำใหญ่",
          "advice": "หาพันธมิตรที่ไว้วางใจได้ ร่วมมือกันดีกว่าต่อสู้คนเดียว" },

  "9":  { "zh": "小畜", "th": "เสี่ยวชู — สะสมเล็กน้อย", "upper": "巽 ลม", "lower": "乾 ฟ้า",  "upper_zh": "巽", "lower_zh": "乾", "lines": [1,1,1,0,1,1],
          "oracle": "เมฆมาก แต่ฝนยังไม่ตก การสะสมพลังเล็กน้อยยังไม่เพียงพอต่อการก้าวใหญ่",
          "symbol": "ลมพัดเมฆบนฟ้า — สัญญาณฝนแต่ยังรอเวลา",
          "advice": "สะสมความรู้และทรัพยากรต่อไป ยังไม่ใช่เวลาลงมือใหญ่" },

  "10": { "zh": "履", "th": "หลี่ — ย่างก้าว",     "upper": "乾 ฟ้า",     "lower": "兌 บึง",     "upper_zh": "乾", "lower_zh": "兌", "lines": [1,1,0,1,1,1],
          "oracle": "เดินบนหางเสือโดยไม่ถูกกัด — ความระวังและมารยาทพาผ่านอันตรายได้",
          "symbol": "คนเดินบนเส้นบางๆ — ทุกก้าวต้องมีสติ",
          "advice": "ระวังมารยาทและท่าทีของตัวเอง ความสุภาพเปิดประตูที่ปิดอยู่" },

  "11": { "zh": "泰", "th": "ไท่ — สันติสุข",      "upper": "坤 แผ่นดิน", "lower": "乾 ฟ้า",     "upper_zh": "坤", "lower_zh": "乾", "lines": [1,1,1,0,0,0],
          "oracle": "ฟ้าดินประสานกัน ทุกอย่างไหลเวียนสมดุล ช่วงเวลาแห่งความเจริญรุ่งเรืองมาถึง",
          "symbol": "ฤดูใบไม้ผลิ — ดอกไม้บานพร้อมกันทั่วทุกทิศ",
          "advice": "ลงมือทำได้เลย ทุกแผนที่วางไว้จะสำเร็จในช่วงนี้" },

  "12": { "zh": "否", "th": "ปี้ — อุดตัน",        "upper": "乾 ฟ้า",     "lower": "坤 แผ่นดิน", "upper_zh": "乾", "lower_zh": "坤", "lines": [0,0,0,1,1,1],
          "oracle": "ฟ้าดินแยกห่าง การสื่อสารติดขัด พลังหยินหยางไม่ไหลเวียน",
          "symbol": "ฤดูหนาวที่แข็งตัว — เมล็ดพันธุ์รอฤดูใบไม้ผลิอยู่ใต้ดิน",
          "advice": "อย่าฝืนกระแส รักษาตัวให้ดี รอเวลาที่เหมาะสมกว่านี้" },

  "13": { "zh": "同人", "th": "ถงเหริน — คนเป็นน้ำหนึ่งใจเดียว", "upper": "乾 ฟ้า", "lower": "離 ไฟ", "upper_zh": "乾", "lower_zh": "離", "lines": [1,0,1,1,1,1],
          "oracle": "มนุษย์รวมใจเป็นหนึ่งภายใต้ฟ้าเดียวกัน ความร่วมมือนำมาซึ่งความยิ่งใหญ่",
          "symbol": "ไฟสว่างบนฟ้า — แสงสว่างที่ทุกคนมองเห็นร่วมกัน",
          "advice": "รวมคนที่มีอุดมการณ์เดียวกัน พลังหมู่ยิ่งใหญ่กว่าพลังเดี่ยวเสมอ" },

  "14": { "zh": "大有", "th": "ต้าโหย่ว — มีมาก",  "upper": "離 ไฟ",      "lower": "乾 ฟ้า",     "upper_zh": "離", "lower_zh": "乾", "lines": [1,1,1,1,0,1],
          "oracle": "ไฟส่องแสงบนฟ้า ความมั่งคั่งและความสำเร็จอยู่ตรงหน้า",
          "symbol": "ดวงอาทิตย์กลางฟ้า — ทุกอย่างอยู่ภายใต้แสงสว่างของท่าน",
          "advice": "แบ่งปันความมั่งคั่งกับผู้อื่น ความเอื้อเฟื้อจะยิ่งทำให้รุ่งเรืองมากขึ้น" },

  "15": { "zh": "謙", "th": "เชียน — ถ่อมตน",      "upper": "坤 แผ่นดิน", "lower": "艮 ภูเขา",   "upper_zh": "坤", "lower_zh": "艮", "lines": [0,0,1,0,0,0],
          "oracle": "ภูเขาซ่อนตัวอยู่ใต้แผ่นดิน ยิ่งถ่อมตนยิ่งได้รับการยกย่อง",
          "symbol": "ภูเขาสูงที่สุดซ่อนยอดไว้ในเมฆ — ความยิ่งใหญ่ไม่จำเป็นต้องโอ้อวด",
          "advice": "วางตัวให้ต่ำไว้ คนที่ถ่อมตนจะได้รับโอกาสที่คนหยิ่งพลาดไป" },

  "16": { "zh": "豫", "th": "ยวี่ — ความยินดี",    "upper": "震 สายฟ้า",  "lower": "坤 แผ่นดิน", "upper_zh": "震", "lower_zh": "坤", "lines": [0,0,0,1,0,0],
          "oracle": "ฟ้าร้องกึกก้อง แผ่นดินตอบรับด้วยความยินดี เวลาแห่งการเฉลิมฉลองมาถึง",
          "symbol": "ฟ้าฝนหลังฤดูแล้ง — โลกทั้งใบโล่งอกและเบิกบาน",
          "advice": "เฉลิมฉลองความสำเร็จ แต่อย่าลืมเตรียมพร้อมสำหรับสิ่งที่ตามมา" },

  "17": { "zh": "隨", "th": "ซุ่ย — ติดตาม",       "upper": "兌 บึง",     "lower": "震 สายฟ้า",  "upper_zh": "兌", "lower_zh": "震", "lines": [1,0,0,0,1,1],
          "oracle": "รู้จักปรับตัวตามสถานการณ์ การยืดหยุ่นนำมาซึ่งความสำเร็จในยามเปลี่ยนแปลง",
          "symbol": "น้ำในบึงสะท้อนฟ้า — ปรับตัวได้ทุกรูปแบบ",
          "advice": "ติดตามกระแสที่ถูกต้อง อย่าดื้อรั้น การยอมรับการเปลี่ยนแปลงคือพลัง" },

  "18": { "zh": "蠱", "th": "กู้ — แก้ไขความเสื่อม", "upper": "艮 ภูเขา", "lower": "巽 ลม",      "upper_zh": "艮", "lower_zh": "巽", "lines": [0,1,1,0,0,1],
          "oracle": "สิ่งที่ผุพังต้องได้รับการซ่อมแซม ปัญหาที่สั่งสมนานต้องได้รับการแก้ไขอย่างจริงจัง",
          "symbol": "หนอนในอาหารเก่า — ต้องทำความสะอาดก่อนจะเน่าเสียหมด",
          "advice": "เผชิญปัญหาที่ซ่อนอยู่ตรงๆ การแก้ไขช้าจะยิ่งเพิ่มความเสียหาย" },

  "19": { "zh": "臨", "th": "หลิน — ปกครอง",        "upper": "坤 แผ่นดิน", "lower": "兌 บึง",     "upper_zh": "坤", "lower_zh": "兌", "lines": [1,1,0,0,0,0],
          "oracle": "ผู้ยิ่งใหญ่ลงมาดูแลประชาชน อำนาจที่ใช้ด้วยความเมตตาคือสิ่งที่ยั่งยืน",
          "symbol": "แผ่นดินโอบอุ้มน้ำไว้ — ผู้นำที่โอบรับผู้อื่น",
          "advice": "ดูแลและใส่ใจผู้ที่อยู่ใต้การดูแล ความเมตตาคือรากฐานของอำนาจที่แท้จริง" },

  "20": { "zh": "觀", "th": "กวาน — ชม / สังเกต",  "upper": "巽 ลม",      "lower": "坤 แผ่นดิน", "upper_zh": "巽", "lower_zh": "坤", "lines": [0,0,0,0,1,1],
          "oracle": "หยุดและมองให้เห็นความจริง การสังเกตอย่างลึกซึ้งนำมาซึ่งปัญญา",
          "symbol": "ลมพัดผ่านแผ่นดิน มองทุกอย่างอย่างทั่วถึง — ไม่มีอะไรหลุดรอดสายตา",
          "advice": "ถอยออกมาสังเกตก่อนลงมือ ความเข้าใจที่ถูกต้องคือก้าวแรกสู่ความสำเร็จ" },

  "21": { "zh": "噬嗑", "th": "ชื่อเขอ — กัดเคี้ยว", "upper": "離 ไฟ",    "lower": "震 สายฟ้า",  "upper_zh": "離", "lower_zh": "震", "lines": [1,0,0,1,0,1],
          "oracle": "มีสิ่งกีดขวางอยู่ระหว่างกลาง ต้องกัดผ่านอุปสรรคนั้นด้วยความเด็ดขาด",
          "symbol": "ปากกัดผ่านกระดูก — ต้องใช้ความมุ่งมั่นจึงจะผ่านได้",
          "advice": "จัดการกับอุปสรรคตรงๆ อย่าเลี่ยง ความเด็ดขาดในตอนนี้จะแก้ปัญหาได้" },

  "22": { "zh": "賁", "th": "ปี้ — ประดับประดา",   "upper": "艮 ภูเขา",   "lower": "離 ไฟ",      "upper_zh": "艮", "lower_zh": "離", "lines": [1,0,1,0,0,1],
          "oracle": "ความงามภายนอกเสริมสิ่งที่ดีงามภายใน แต่เนื้อหาสำคัญกว่าเปลือกนอกเสมอ",
          "symbol": "ไฟสว่างใต้ภูเขา — แสงเรืองรองที่ประดับประดาโลก",
          "advice": "ดูแลรูปลักษณ์และการนำเสนอ แต่อย่าปล่อยให้ความสวยงามบดบังเนื้อแท้" },

  "23": { "zh": "剝", "th": "ปั๋ว — ลอก / สลาย",  "upper": "艮 ภูเขา",   "lower": "坤 แผ่นดิน", "upper_zh": "艮", "lower_zh": "坤", "lines": [0,0,0,0,0,1],
          "oracle": "สิ่งเก่ากำลังสลายทีละชั้น นี่คือช่วงที่ต้องรักษาตัวให้รอด ไม่ใช่เวลาบุกหน้า",
          "symbol": "ผลไม้ร่วงจากกิ่ง — วัฏจักรแห่งการสิ้นสุดที่หลีกเลี่ยงไม่ได้",
          "advice": "ยึดมั่นในคุณธรรม รอให้พ้นช่วงถดถอย อย่าต่อสู้กับกระแสที่แข็งกว่า" },

  "24": { "zh": "復", "th": "ฝู — กลับคืน",        "upper": "坤 แผ่นดิน", "lower": "震 สายฟ้า",  "upper_zh": "坤", "lower_zh": "震", "lines": [1,0,0,0,0,0],
          "oracle": "แสงแรกของฤดูใบไม้ผลิกำลังมา สิ่งที่หายไปกำลังจะคืนกลับมา",
          "symbol": "ดวงอาทิตย์โผล่พ้นขอบฟ้า — การเริ่มต้นใหม่ที่เต็มไปด้วยความหวัง",
          "advice": "นี่คือจุดเปลี่ยน จงเริ่มต้นใหม่ด้วยพลังบริสุทธิ์ อดีตเป็นบทเรียน ไม่ใช่โซ่ตรวน" },

  "25": { "zh": "無妄", "th": "อู๋วั่ง — ไม่ประมาท", "upper": "乾 ฟ้า",  "lower": "震 สายฟ้า",  "upper_zh": "乾", "lower_zh": "震", "lines": [1,0,0,1,1,1],
          "oracle": "ทำในสิ่งที่ถูกต้องโดยไม่หวังผลตอบแทน ความบริสุทธิ์ใจนำโชคมาเอง",
          "symbol": "ฟ้าร้องใต้ฟ้าใส — สิ่งที่เกิดขึ้นตามธรรมชาติล้วนถูกต้อง",
          "advice": "ทำดีโดยไม่คำนวณ ความจริงใจคือเกราะกำบังที่ดีที่สุด" },

  "26": { "zh": "大畜", "th": "ต้าชู — สะสมมาก",   "upper": "艮 ภูเขา",   "lower": "乾 ฟ้า",     "upper_zh": "艮", "lower_zh": "乾", "lines": [1,1,1,0,0,1],
          "oracle": "ภูเขาบรรจุพลังฟ้าไว้ภายใน การสะสมความรู้และพลังอย่างมากนำมาซึ่งความยิ่งใหญ่",
          "symbol": "ฟ้าซ่อนอยู่ในภูเขา — พลังมหาศาลรอวันปลดปล่อย",
          "advice": "ลงทุนในความรู้และตัวเอง เวลาที่สะสมวันนี้จะให้ผลทวีคูณในอนาคต" },

  "27": { "zh": "頤", "th": "อี — หล่อเลี้ยง",     "upper": "艮 ภูเขา",   "lower": "震 สายฟ้า",  "upper_zh": "艮", "lower_zh": "震", "lines": [1,0,0,0,0,1],
          "oracle": "ใส่ใจสิ่งที่หล่อเลี้ยงกายและจิต อาหารที่คุณกินและความคิดที่คุณคิดสร้างตัวคุณ",
          "symbol": "ปากเปิดรับอาหาร — เลือกสิ่งที่หล่อเลี้ยงได้อย่างชาญฉลาด",
          "advice": "ดูแลสุขภาพกายและใจ เลือกรับสิ่งที่ดีและละทิ้งสิ่งที่บั่นทอน" },

  "28": { "zh": "大過", "th": "ต้ากั้ว — เกินพอดี", "upper": "兌 บึง",    "lower": "巽 ลม",      "upper_zh": "兌", "lower_zh": "巽", "lines": [0,1,1,1,1,0],
          "oracle": "คานกลางหักเพราะรับน้ำหนักเกิน สถานการณ์ตึงเครียดเกินพอดีต้องการการแก้ไขด่วน",
          "symbol": "ต้นไม้งอโค้งจนเกือบหัก — ต้องตัดสินใจก่อนที่จะสายเกินไป",
          "advice": "ลดภาระที่แบกรับอยู่ แบ่งงานหรือขอความช่วยเหลือ ก่อนที่ทุกอย่างพังพินาศ" },

  "29": { "zh": "坎", "th": "คั่น — น้ำ / เหวลึก", "upper": "坎 น้ำ",     "lower": "坎 น้ำ",     "upper_zh": "坎", "lower_zh": "坎", "lines": [0,1,0,0,1,0],
          "oracle": "อันตรายซ้อนทับกันสองชั้น จงมีใจมั่นคงดังน้ำที่ไหลผ่านหินโดยไม่หยุด",
          "symbol": "น้ำไหลในหุบเหวลึก — มืดมนแต่ไม่เคยหยุดไหล",
          "advice": "ฝ่าฟันด้วยความศรัทธาในตัวเอง อย่ายอมแพ้ ทุกอุปสรรคมีทางออกเสมอ" },

  "30": { "zh": "離", "th": "หลี — ไฟ",            "upper": "離 ไฟ",      "lower": "離 ไฟ",      "upper_zh": "離", "lower_zh": "離", "lines": [1,0,1,1,0,1],
          "oracle": "ไฟสองกองส่องแสงสว่างสดใส ความชัดเจนและปัญญาอยู่ในระดับสูงสุด",
          "symbol": "ดวงอาทิตย์คู่ส่องแสง — ความจริงไม่มีวันหลบซ่อนได้",
          "advice": "ใช้ปัญญานำทางและตัดสินใจ แต่ระวังอย่าให้ความร้อนแรงเผาผลาญตัวเอง" },

  "31": { "zh": "咸", "th": "เสียน — ความรู้สึก",  "upper": "兌 บึง",     "lower": "艮 ภูเขา",   "upper_zh": "兌", "lower_zh": "艮", "lines": [0,0,1,1,1,0],
          "oracle": "ภูเขาและบึงดึงดูดกัน หัวใจที่เปิดรับความรู้สึกสร้างความสัมพันธ์ที่ลึกซึ้ง",
          "symbol": "ภูเขาสูงสะท้อนในบึงสงบ — สองสิ่งที่ต่างกันแต่เชื่อมถึงกัน",
          "advice": "เปิดใจและฟังความรู้สึกของตัวเองและผู้อื่น ความสัมพันธ์ต้องการการสัมผัสที่แท้จริง" },

  "32": { "zh": "恆", "th": "เหิง — ยาวนาน",       "upper": "震 สายฟ้า",  "lower": "巽 ลม",      "upper_zh": "震", "lower_zh": "巽", "lines": [0,1,1,1,0,0],
          "oracle": "สายฟ้าและลมไม่หยุดเคลื่อน ความสม่ำเสมอและความเพียรคือรหัสแห่งความสำเร็จ",
          "symbol": "ดวงอาทิตย์และดวงจันทร์สลับกันอย่างไม่มีสิ้นสุด — กฎของจักรวาล",
          "advice": "ยึดมั่นในเส้นทางและอย่าเปลี่ยนแปลงทิศทางบ่อยนัก ความสม่ำเสมอคือกุญแจ" },

  "33": { "zh": "遯", "th": "ตุ้น — ถอยหลัง",      "upper": "乾 ฟ้า",     "lower": "艮 ภูเขา",   "upper_zh": "乾", "lower_zh": "艮", "lines": [0,0,1,1,1,1],
          "oracle": "บางครั้งการถอยคือกลยุทธ์ที่ชาญฉลาดที่สุด รักษาพลังไว้เพื่อโอกาสที่ดีกว่า",
          "symbol": "ภูเขาหยุดนิ่งใต้ฟ้า — ถอยหลังหนึ่งก้าวเพื่อวิ่งไปข้างหน้าสองก้าว",
          "advice": "ถอยออกจากสถานการณ์ที่ไม่เป็นใจ รอดีกว่าสูญเสีย" },

  "34": { "zh": "大壯", "th": "ต้าจ้วง — ยิ่งใหญ่", "upper": "震 สายฟ้า", "lower": "乾 ฟ้า",    "upper_zh": "震", "lower_zh": "乾", "lines": [1,1,1,1,0,0],
          "oracle": "พลังมหาศาลอยู่ในมือคุณ แต่ผู้แข็งแกร่งที่แท้จริงรู้ว่าเมื่อใดควรหยุด",
          "symbol": "ฟ้าร้องฟาดฝ่า — พลังที่ยิ่งใหญ่ต้องการทิศทางที่ถูกต้อง",
          "advice": "ใช้พลังที่มีอย่างชาญฉลาด ความแข็งแกร่งโดยไม่มีปัญญาอาจทำลายตัวเอง" },

  "35": { "zh": "晉", "th": "จิ้น — ก้าวหน้า",     "upper": "離 ไฟ",      "lower": "坤 แผ่นดิน", "upper_zh": "離", "lower_zh": "坤", "lines": [0,0,0,1,0,1],
          "oracle": "ดวงอาทิตย์โผล่พ้นขอบฟ้า ความก้าวหน้าและการเลื่อนขั้นกำลังจะมาถึง",
          "symbol": "แสงอรุณรุ่งเหนือแผ่นดิน — ทุกก้าวเดินไปข้างหน้าสู่แสงสว่าง",
          "advice": "เดินหน้าได้เลย โอกาสเปิดกว้าง คนที่มีคุณธรรมจะได้รับการสนับสนุน" },

  "36": { "zh": "明夷", "th": "หมิงอี — แสงมอด",   "upper": "坤 แผ่นดิน", "lower": "離 ไฟ",      "upper_zh": "坤", "lower_zh": "離", "lines": [1,0,1,0,0,0],
          "oracle": "แสงสว่างถูกกลืนเข้าไปในความมืด ซ่อนปัญญาไว้ในยามที่อำนาจชั่วครองเมือง",
          "symbol": "ดวงอาทิตย์จมลงใต้แผ่นดิน — แสงยังมีอยู่ เพียงแต่รอเวลา",
          "advice": "ซ่อนความสามารถและรอเวลา อย่าเผชิญหน้ากับอำนาจที่ยิ่งใหญ่กว่าในตอนนี้" },

  "37": { "zh": "家人", "th": "เจียเหริน — ครอบครัว", "upper": "巽 ลม",   "lower": "離 ไฟ",      "upper_zh": "巽", "lower_zh": "離", "lines": [1,0,1,0,1,1],
          "oracle": "ไฟอุ่นในบ้านทำให้ครอบครัวแข็งแกร่ง บทบาทที่ชัดเจนสร้างความสงบสุข",
          "symbol": "ลมพัดเหนือไฟในเตาผิง — ความอบอุ่นกระจายไปทั่วครอบครัว",
          "advice": "ดูแลความสัมพันธ์ในครอบครัวและทีมงาน บ้านที่แข็งแกร่งคือรากฐานของทุกความสำเร็จ" },

  "38": { "zh": "睽", "th": "ขุย — แตกแยก",        "upper": "離 ไฟ",      "lower": "兌 บึง",     "upper_zh": "離", "lower_zh": "兌", "lines": [1,1,0,1,0,1],
          "oracle": "สองพลังหันหน้าออกจากกัน ความแตกต่างไม่ใช่ศัตรู แต่คือโอกาสเรียนรู้",
          "symbol": "ไฟและน้ำที่ไม่อาจผสมกัน — แต่ต่างก็มีคุณค่าในตัวเอง",
          "advice": "ยอมรับความแตกต่าง หาจุดร่วมเล็กๆ ก่อน แล้วค่อยขยายออก" },

  "39": { "zh": "蹇", "th": "เจี่ยน — ขาเจ็บ",     "upper": "坎 น้ำ",     "lower": "艮 ภูเขา",   "upper_zh": "坎", "lower_zh": "艮", "lines": [0,0,1,0,1,0],
          "oracle": "ภูเขาสูงและน้ำขวางหน้า เส้นทางยากลำบาก ต้องหาทางอ้อมหรือขอความช่วยเหลือ",
          "symbol": "คนเดินขาเจ็บบนทางลูกรัง — บางครั้งหยุดพักดีกว่าฝืนเดิน",
          "advice": "หยุดพักและประเมินสถานการณ์ใหม่ ขอความช่วยเหลือไม่ใช่ความอ่อนแอ" },

  "40": { "zh": "解", "th": "เจี่ย — คลี่คลาย",    "upper": "震 สายฟ้า",  "lower": "坎 น้ำ",     "upper_zh": "震", "lower_zh": "坎", "lines": [0,1,0,1,0,0],
          "oracle": "ฝนตกหลังพายุ ความตึงเครียดคลี่คลาย ภาระที่แบกรับกำลังจะหลุดพ้น",
          "symbol": "ฟ้าฝนชำระล้างทุกสิ่ง — โลกใสสะอาดหลังพายุผ่านไป",
          "advice": "ปล่อยวางสิ่งที่กดทับอยู่ ให้อภัยและก้าวไปข้างหน้า อย่ายึดติดกับอดีต" },

  "41": { "zh": "損", "th": "ซุ่น — ลดลง",         "upper": "艮 ภูเขา",   "lower": "兌 บึง",     "upper_zh": "艮", "lower_zh": "兌", "lines": [1,1,0,0,0,1],
          "oracle": "การลดน้อยในเบื้องต้นนำมาซึ่งการเพิ่มพูนในภายหลัง ความเรียบง่ายคือปัญญา",
          "symbol": "บึงลดระดับเพื่อเติมภูเขา — การให้บางครั้งคือการรับ",
          "advice": "ลดทอนสิ่งที่ไม่จำเป็น เสียสละเล็กน้อยในวันนี้เพื่อผลลัพธ์ที่ยิ่งใหญ่ในวันหน้า" },

  "42": { "zh": "益", "th": "อี้ — เพิ่มพูน",      "upper": "巽 ลม",      "lower": "震 สายฟ้า",  "upper_zh": "巽", "lower_zh": "震", "lines": [1,0,0,0,1,1],
          "oracle": "ฟ้าฝนและลมนำความอุดมสมบูรณ์ นี่คือช่วงเวลาแห่งการเติบโตและการขยาย",
          "symbol": "ฝนและลมหนุนพืชพันธุ์ — ทุกอย่างเติบโตอย่างรวดเร็วและอุดม",
          "advice": "ลงทุนและขยายตัวได้เลย ช่วงนี้ทุกอย่างที่ทำจะให้ผลตอบแทนงาม" },

  "43": { "zh": "夬", "th": "กว้าย — ตัดสิน",      "upper": "兌 บึง",     "lower": "乾 ฟ้า",     "upper_zh": "兌", "lower_zh": "乾", "lines": [1,1,1,1,1,0],
          "oracle": "ต้องประกาศความจริงต่อสาธารณะ ความชั่วร้ายจะพ่ายแพ้ต่อความกล้าหาญ",
          "symbol": "น้ำท่วมฟ้า — แรงกดดันสูงสุดต้องการการปลดปล่อย",
          "advice": "พูดความจริงอย่างกล้าหาญ แต่อย่าใช้ความรุนแรง ปัญญาดีกว่ากำลัง" },

  "44": { "zh": "姤", "th": "โกว — พบปะ",          "upper": "乾 ฟ้า",     "lower": "巽 ลม",      "upper_zh": "乾", "lower_zh": "巽", "lines": [0,1,1,1,1,1],
          "oracle": "การพบกันโดยบังเอิญอาจมีนัยสำคัญ ระวังอิทธิพลอ่อนที่แอบเล็ดรอดเข้ามา",
          "symbol": "ลมพัดใต้ฟ้า — สิ่งที่เบาบางที่สุดสามารถซึมซาบได้ทุกที่",
          "advice": "ระมัดระวังคนหรือสถานการณ์ใหม่ที่เข้ามา ไม่ทุกการพบปะจะเป็นมงคล" },

  "45": { "zh": "萃", "th": "ชุ้ย — รวมกลุ่ม",     "upper": "兌 บึง",     "lower": "坤 แผ่นดิน", "upper_zh": "兌", "lower_zh": "坤", "lines": [0,0,0,1,1,0],
          "oracle": "การรวมกลุ่มและชุมนุมกันนำมาซึ่งพลังมหาศาล ผู้นำที่ดีดึงดูดคนเก่งมารวมกัน",
          "symbol": "น้ำรวมกันบนแผ่นดิน — ทีละหยดกลายเป็นทะเลสาบ",
          "advice": "รวบรวมทีมและทรัพยากร การทำงานเป็นหมู่คณะจะนำมาซึ่งผลลัพธ์ที่ยิ่งใหญ่" },

  "46": { "zh": "升", "th": "เซิง — ขึ้นสูง",      "upper": "坤 แผ่นดิน", "lower": "巽 ลม",      "upper_zh": "坤", "lower_zh": "巽", "lines": [0,1,1,0,0,0],
          "oracle": "ต้นไม้เติบโตขึ้นจากแผ่นดิน ความก้าวหน้าทีละขั้นคือเส้นทางที่มั่นคง",
          "symbol": "ต้นไม้เติบใหญ่ทะลุดิน — การเติบโตช้าแต่มั่นคงและยั่งยืน",
          "advice": "ค่อยๆ ก้าวขึ้นไปอย่างมั่นคง อย่าข้ามขั้น ความสำเร็จที่สร้างทีละชั้นคงทนที่สุด" },

  "47": { "zh": "困", "th": "คุน — ติดขัด",        "upper": "兌 บึง",     "lower": "坎 น้ำ",     "upper_zh": "兌", "lower_zh": "坎", "lines": [0,1,0,1,1,0],
          "oracle": "บึงแห้งน้ำหมด อยู่ในสถานการณ์ที่ขัดสนทั้งกายและใจ แต่คนมีคุณธรรมไม่ท้อถอย",
          "symbol": "น้ำขังในร่องลึก ออกไปไหนไม่ได้ — ความอดทนคือทางออก",
          "advice": "ยืนหยัดในความดีแม้ไม่มีใครเห็น ช่วงเวลานี้จะผ่านไป ความซื่อสัตย์คือสมบัติที่เหลืออยู่" },

  "48": { "zh": "井", "th": "จิ่ง — บ่อน้ำ",       "upper": "坎 น้ำ",     "lower": "巽 ลม",      "upper_zh": "坎", "lower_zh": "巽", "lines": [0,1,1,0,1,0],
          "oracle": "บ่อน้ำหล่อเลี้ยงชุมชนโดยไม่เคยหมด ทรัพยากรที่แท้จริงอยู่ที่ความรู้และคุณธรรม",
          "symbol": "บ่อน้ำที่ไม่มีวันแห้ง — ปัญญาที่ยิ่งตักออกยิ่งเพิ่มพูน",
          "advice": "แบ่งปันความรู้และทักษะของคุณ ยิ่งให้ยิ่งได้ ความรู้ไม่ลดลงเมื่อแบ่งปัน" },

  "49": { "zh": "革", "th": "เก๋อ — ปฏิรูป",       "upper": "兌 บึง",     "lower": "離 ไฟ",      "upper_zh": "兌", "lower_zh": "離", "lines": [1,0,1,1,1,0],
          "oracle": "ไฟในน้ำ การเปลี่ยนแปลงขนานใหญ่กำลังจะเกิดขึ้น เหมือนหนังสัตว์ที่ลอกคราบใหม่",
          "symbol": "น้ำดับไฟ ไฟต้มน้ำ — สองพลังประทะกันก่อให้เกิดสิ่งใหม่",
          "advice": "กล้าเปลี่ยนแปลงในสิ่งที่ล้าสมัย แต่รอให้ถึงเวลาที่เหมาะสมก่อนลงมือ" },

  "50": { "zh": "鼎", "th": "ติ่ง — หม้อสามขา",    "upper": "離 ไฟ",      "lower": "巽 ลม",      "upper_zh": "離", "lower_zh": "巽", "lines": [0,1,1,1,0,1],
          "oracle": "หม้อหุงข้าวของกษัตริย์ที่ปรุงโชคชะตา การแปลงสิ่งดิบให้กลายเป็นสิ่งประณีต",
          "symbol": "ไฟลุกใต้หม้อทอง — การหลอมรวมสิ่งดีที่สุดให้กลายเป็นความสมบูรณ์",
          "advice": "รวบรวมคนเก่งและทรัพยากรที่ดีที่สุด แล้วผสานให้กลายเป็นผลงานชิ้นเอก" },

  "51": { "zh": "震", "th": "เจิ้น — สายฟ้า",      "upper": "震 สายฟ้า",  "lower": "震 สายฟ้า",  "upper_zh": "震", "lower_zh": "震", "lines": [1,0,0,1,0,0],
          "oracle": "ฟ้าร้องกระหึ่มสองครั้ง สิ่งที่คาดไม่ถึงมาเยือน ความสั่นสะเทือนปลุกจิตสำนึก",
          "symbol": "ฟ้าแลบสองแสง — ความตื่นตระหนกที่นำมาซึ่งความตื่นรู้",
          "advice": "รับมือกับเหตุการณ์กะทันหันด้วยสติ สิ่งที่ทำให้ตกใจมักพาการเติบโตมาด้วย" },

  "52": { "zh": "艮", "th": "เกิ้น — ภูเขา",       "upper": "艮 ภูเขา",   "lower": "艮 ภูเขา",   "upper_zh": "艮", "lower_zh": "艮", "lines": [0,0,1,0,0,1],
          "oracle": "ภูเขาสองลูกนิ่งอยู่กับที่ เวลานี้ต้องหยุดนิ่งและมองเข้าข้างใน ไม่ใช่วิ่งออกข้างนอก",
          "symbol": "ภูเขาสองลูกซ้อนกัน — ความสงบนิ่งที่ไม่อาจโยกคลอน",
          "advice": "หยุดและนั่งสงบ คำตอบที่ต้องการอยู่ข้างในคุณ ไม่ใช่ข้างนอก" },

  "53": { "zh": "漸", "th": "เจี้ยน — ค่อยเป็นค่อยไป", "upper": "巽 ลม",  "lower": "艮 ภูเขา",   "upper_zh": "巽", "lower_zh": "艮", "lines": [0,0,1,0,1,1],
          "oracle": "นกป่าบินขึ้นสูงทีละก้าว ความสำเร็จที่แท้จริงต้องการเวลาและความอดทน",
          "symbol": "ต้นไม้บนภูเขาที่โตช้าแต่แข็งแกร่ง — รากลึกทนพายุได้ทุกลูก",
          "advice": "อย่าเร่งรัด ทำทีละขั้นอย่างถูกต้อง กระบวนการที่ถูกต้องสำคัญกว่าความเร็ว" },

  "54": { "zh": "歸妹", "th": "กุยเม่ย — หญิงสาวแต่งงาน", "upper": "震 สายฟ้า", "lower": "兌 บึง", "upper_zh": "震", "lower_zh": "兌", "lines": [1,1,0,1,0,0],
          "oracle": "การเคลื่อนที่ด้วยความยินดีในตำแหน่งที่ไม่ใช่ตำแหน่งหลัก ต้องใช้ความอดทนและความเข้าใจ",
          "symbol": "สายฟ้าเหนือบึง — ความสัมพันธ์ที่ต้องใช้ความระมัดระวัง",
          "advice": "รู้บทบาทของตัวเองและทำให้ดีที่สุด อย่าเรียกร้องมากกว่าที่ควรได้ในตอนนี้" },

  "55": { "zh": "豐", "th": "เฟิง — ความอุดมสมบูรณ์", "upper": "震 สายฟ้า", "lower": "離 ไฟ",  "upper_zh": "震", "lower_zh": "離", "lines": [1,0,1,1,0,0],
          "oracle": "แสงและเสียงฟ้าร้องรวมกัน นี่คือจุดสูงสุดของความอุดมสมบูรณ์และความรุ่งเรือง",
          "symbol": "ดวงอาทิตย์กลางวันสูงสุด — แสงสว่างเต็มที่ เงาสั้นที่สุด",
          "advice": "เก็บเกี่ยวผลและเฉลิมฉลอง แต่จำไว้ว่าหลังจุดสูงสุดมีแต่ลง เตรียมพร้อมไว้" },

  "56": { "zh": "旅", "th": "หลวี่ — การเดินทาง",   "upper": "離 ไฟ",      "lower": "艮 ภูเขา",   "upper_zh": "離", "lower_zh": "艮", "lines": [0,0,1,1,0,1],
          "oracle": "นักเดินทางในแดนแปลกหน้า ต้องระวังรักษาตัวและไม่เสียหน้าในที่ที่ไม่รู้จัก",
          "symbol": "ไฟลุกบนภูเขา — แสงสว่างที่เคลื่อนที่ไปทั่วทุกที่",
          "advice": "ปรับตัวให้เข้ากับสิ่งแวดล้อมใหม่ มีสติและระวังตัว อย่าแสดงตัวมากเกินไป" },

  "57": { "zh": "巽", "th": "ซุ่น — ลม",            "upper": "巽 ลม",      "lower": "巽 ลม",      "upper_zh": "巽", "lower_zh": "巽", "lines": [0,1,1,0,1,1],
          "oracle": "ลมพัดซ้ำสองทิศ ความอ่อนโยนและสม่ำเสมอซึมผ่านทุกสิ่งได้ดีกว่าแรงผลัก",
          "symbol": "ลมสองกองพัดพร้อมกัน — อิทธิพลที่ไม่มีใครมองเห็นแต่รู้สึกได้",
          "advice": "ใช้ความอ่อนโยนและความสม่ำเสมอแทนการบังคับ อิทธิพลที่แท้จริงมาจากความไว้วางใจ" },

  "58": { "zh": "兌", "th": "ตุ้ย — ความยินดี",     "upper": "兌 บึง",     "lower": "兌 บึง",     "upper_zh": "兌", "lower_zh": "兌", "lines": [1,1,0,1,1,0],
          "oracle": "บึงสองแห่งหล่อเลี้ยงกัน ความยินดีและการสื่อสารที่เปิดเผยนำมาซึ่งความเจริญ",
          "symbol": "บึงสะท้อนกัน — ความสุขที่แท้จริงเกิดจากการแบ่งปัน",
          "advice": "แสดงความยินดีและเปิดใจสื่อสาร พลังแห่งความสุขแพร่กระจายและกลับคืนมาหาคุณ" },

  "59": { "zh": "渙", "th": "ฮวน — กระจาย",         "upper": "巽 ลม",      "lower": "坎 น้ำ",     "upper_zh": "巽", "lower_zh": "坎", "lines": [0,1,0,0,1,1],
          "oracle": "ลมกระจายน้ำออกไปทั่ว ความแข็งกระด้างและการแบ่งแยกกำลังจะละลายหายไป",
          "symbol": "ลมพัดคลื่นน้ำกระจาย — อุปสรรคสลายเพราะการเคลื่อนไหว",
          "advice": "ใช้ความอ่อนโยนและการสื่อสารแก้ไขความขัดแย้ง การรวมใจทำได้ด้วยความจริงใจ" },

  "60": { "zh": "節", "th": "เจี๋ย — ปรับสมดุล",    "upper": "坎 น้ำ",     "lower": "兌 บึง",     "upper_zh": "坎", "lower_zh": "兌", "lines": [1,1,0,0,1,0],
          "oracle": "น้ำในบึงต้องมีขอบเขต กฎระเบียบและการกำหนดขีดจำกัดที่ถูกต้องนำมาซึ่งความเจริญ",
          "symbol": "น้ำขังในบึงที่มีฝั่ง — ขอบเขตที่ถูกต้องสร้างพลัง ไม่ใช่จำกัด",
          "advice": "วางกฎระเบียบที่เหมาะสม ทั้งกับตัวเองและผู้อื่น ความมีวินัยคือเสรีภาพที่แท้จริง" },

  "61": { "zh": "中孚", "th": "จงฝู — ความจริงใจ",  "upper": "巽 ลม",      "lower": "兌 บึง",     "upper_zh": "巽", "lower_zh": "兌", "lines": [1,1,0,0,1,1],
          "oracle": "ความจริงใจที่อยู่ในใจกลางสามารถเคลื่อนใจแม้แต่หมูและปลา",
          "symbol": "ลมพัดเหนือบึง — ความจริงใจที่ซึมซาบเข้าถึงทุกสิ่ง",
          "advice": "จงซื่อสัตย์และจริงใจในทุกการกระทำ ความจริงใจเป็นพลังที่แข็งแกร่งที่สุด" },

  "62": { "zh": "小過", "th": "เสี่ยวกั้ว — เกินเล็กน้อย", "upper": "震 สายฟ้า", "lower": "艮 ภูเขา", "upper_zh": "震", "lower_zh": "艮", "lines": [0,0,1,1,0,0],
          "oracle": "นกบินต่ำดีกว่าบินสูงในวันที่ลมพัดแรง ทำสิ่งเล็กน้อยอย่างถูกต้องดีกว่าทำใหญ่แล้วผิดพลาด",
          "symbol": "นกบินต่ำเหนือภูเขา — รู้ขีดความสามารถของตัวเอง",
          "advice": "ทำสิ่งเล็กน้อยที่อยู่ในมือก่อน อย่าวางแผนใหญ่โตเกินกำลัง ความพอดีคือปัญญา" },

  "63": { "zh": "既濟", "th": "จี้จี้ — สำเร็จแล้ว", "upper": "坎 น้ำ",    "lower": "離 ไฟ",      "upper_zh": "坎", "lower_zh": "離", "lines": [1,0,1,0,1,0],
          "oracle": "ทุกอย่างสำเร็จสมบูรณ์แล้ว ไฟและน้ำอยู่ในตำแหน่งที่ถูกต้อง แต่ความสมดุลต้องรักษา",
          "symbol": "น้ำเดือดบนไฟ — ความสำเร็จที่ต้องการการดูแลอย่างต่อเนื่อง",
          "advice": "ดูแลรักษาสิ่งที่สร้างมา ความสำเร็จไม่ใช่จุดสิ้นสุด แต่คือจุดเริ่มต้นของการรักษา" },

  "64": { "zh": "未濟", "th": "เว่ยจี้ — ยังไม่สำเร็จ", "upper": "離 ไฟ",  "lower": "坎 น้ำ",     "upper_zh": "離", "lower_zh": "坎", "lines": [0,1,0,1,0,1],
          "oracle": "ไฟและน้ำยังไม่ประสานกัน งานยังไม่เสร็จสมบูรณ์ แต่เส้นชัยอยู่ตรงหน้าแล้ว",
          "symbol": "ลูกสุนัขน้อยข้ามแม่น้ำ — อีกนิดเดียวก็ถึงฝั่ง อย่าท้อตอนนี้",
          "advice": "อดทนต่ออีกเล็กน้อย ความสำเร็จใกล้แค่เอื้อม แต่ต้องระวังและไม่ประมาทในช่วงสุดท้าย" }
}
;async function t(){try{e=await(await fetch(`./hexagrams_64_filled.json`)).json()}catch(e){console.error(`Could not load hexagram data:`,e)}}var n={yang:[`รากฐานแข็งแกร่ง เริ่มต้นด้วยพลังบริสุทธิ์`,`ผู้ยิ่งใหญ่ปรากฏ ขอคำแนะนำจากผู้มีปัญญา`,`ขยันหมั่นเพียรตลอดวัน ระวังในยามค่ำคืน`,`กระโดดสู่ห้วงน้ำด้วยความกล้า ไม่มีความผิดพลาด`,`มังกรทองโลดแล่นบนฟ้า ฤกษ์ยามนี้งดงาม`,`ผู้ที่ขึ้นสูงเกินไปย่อมเสียใจ รู้จักจุดพอดี`],yin:[`เดินตามรอยน้ำค้าง ความระมัดระวังนำโชค`,`ตรงไปตรงมา ยิ่งใหญ่ แผ่กว้าง ไม่จำเป็นต้องฝึกฝน`,`ซ่อนคุณงามความดีไว้ รอโอกาสจากผู้ยิ่งใหญ่`,`ถุงผูกปิดสนิท ไม่มีทั้งคำชมและคำตำหนิ`,`เสื้อคลุมสีเหลือง — ความสูงส่งสุดยอดแห่งความดี`,`มังกรที่ทุ่งหญ้า เลือดสีดำเหลือง — ฟ้าดินปะทะกัน`]},r=null,i=0,a=null;function o(e){return String(e).padStart(2,`0`)}function s(e){document.querySelectorAll(`.screen`).forEach(e=>e.classList.remove(`active`)),document.getElementById(e).classList.add(`active`),window.scrollTo({top:0,behavior:`smooth`})}function c(t){let n=e[String(t)];return n?[...n.lines]:[1,1,1,1,1,1]}function l(e){i=Math.max(0,Math.min(64,e)),document.getElementById(`num-display`).textContent=o(i),document.getElementById(`hex-slider`).value=i}function u(e,t,r){let i=document.createElement(`div`);i.className=`line-slot`+(r?` revealed`:``),i.id=`line-slot-`+t;let a=document.createElement(`div`);a.className=`line-num`,a.textContent=`爻`+t;let o=document.createElement(`div`);if(o.className=`line-graphic`,e===1){let e=document.createElement(`div`);e.className=`yang-bar`,o.appendChild(e)}else{let e=document.createElement(`div`);e.className=`yin-bar`;let t=document.createElement(`div`);t.className=`yin-gap`;let n=document.createElement(`div`);n.className=`yin-bar`,o.appendChild(e),o.appendChild(t),o.appendChild(n)}let s=document.createElement(`div`);s.className=`line-label`,s.textContent=e===1?`陽`:`陰`;let c=document.createElement(`div`);c.className=`line-left-group`,c.appendChild(a),c.appendChild(o),c.appendChild(s);let l=document.createElement(`div`);return l.className=`line-text`,l.textContent=e===1?n.yang[t-1]:n.yin[t-1],i.appendChild(c),i.appendChild(l),i}function d(t,n){s(`screen-cast`);let i=document.getElementById(`hex-stage`);i.innerHTML=``;let a=document.getElementById(`cast-status`),o=document.getElementById(`prog`),c=document.getElementById(`prog-label`),l=document.getElementById(`reveal-zone`);if(n===0){r={num:0,data:{zh:`無`,th:`ความว่างเปล่า`,oracle:`จิตใจที่ว่างเปล่า หรือควบคุมสติไม่ได้ไม่สามารถมีคำทำนายขึ้นที่ใบนี้ ให้ท่านหายใจลึกๆ 3ครั้ง คำทำนายจะปรากฏหลังจากที่ท่านกดคำทำนายใหม่อีกครั้ง ขอจงสำเร็จ`,symbol:`ไม่มีคำทำนาย`,advice:`สูดหายใจลึกๆ 3 ครั้ง แล้วกดตั้งจิตถามใหม่อีกครั้ง`,lines:[],upper:``,upper_zh:``,lower:``,lower_zh:``}},a.textContent=`เตรียมเปิดคำทำนาย...`,a.classList.remove(`pulse`),l.classList.add(`show`),o.style.width=`100%`,c.textContent=`0 / 0`;return}let d=[];for(let e=1;e<=6;e++){let n=u(t[e-1],e,!1);d.unshift(n)}d.forEach(e=>i.appendChild(e)),l.classList.remove(`show`),a.classList.add(`pulse`);let f=i.querySelectorAll(`.line-slot`);function p(i){if(i>=6){let t=e[String(n)];r={num:n,data:t},a.textContent=`เฮ็กซะแกรมสมบูรณ์ — `+(t?t.zh:``)+` กดเปิดคำทำนาย`,a.classList.remove(`pulse`),l.classList.add(`show`);return}let s=i+1,u=5-i;a.textContent=`เส้นที่ ${s} — ${t[i]===1?`หยาง (สว่าง/แกร่ง)`:`หยิน (สงบ/อ่อนโยน)`}`,f[u].classList.add(`revealed`),o.style.width=(i+1)/6*100+`%`,c.textContent=`${i+1} / 6`,setTimeout(()=>p(i+1),850)}setTimeout(()=>p(0),500)}async function f(){let e=document.getElementById(`meditation-overlay`),t=document.getElementById(`meditation-text`),n=e.querySelector(`.loader-bar`),r=[`โปรดตั้งสติ...`,`นึกถึงคำถามที่อยากถาม...`,`หายใจลึกๆ...`,`คำทำนายจะปรากฏ ณ บัดนี้`];e.classList.add(`active`),n.style.transition=`none`,n.style.width=`0%`,n.offsetWidth,n.style.transition=`width 3000ms linear`,n.style.width=`100%`;for(let e=0;e<r.length;e++)t.style.opacity=`0`,setTimeout(()=>{t.textContent=r[e],t.style.opacity=`1`},200),await new Promise(e=>setTimeout(e,750));await new Promise(e=>setTimeout(e,200)),e.classList.remove(`active`),setTimeout(()=>{p()},500)}function p(){let{num:e,data:t}=r;if(!t){s(`screen-home`);return}s(`screen-result`);let i=(t.th||``).split(`—`)[0].trim();document.getElementById(`r-num`).textContent=`ไพ่ที่ ${o(e)} · ${i}`,document.getElementById(`r-name-zh`).textContent=t.zh,document.getElementById(`r-name-th`).textContent=t.th,document.getElementById(`r-oracle`).textContent=t.oracle,document.getElementById(`r-symbol-text`).textContent=t.symbol,document.getElementById(`r-advice`).textContent=t.advice;let a=document.getElementById(`r-illust`);a&&(a.src=`images/ic${String(e).padStart(3,`0`)}.webp`,a.style.display=`block`,a.onerror=()=>{a.style.display=`none`});let c=document.getElementById(`r-line-matrix`);c.innerHTML=``,t.lines&&t.lines.forEach((e,t)=>{let r=document.createElement(`div`);r.className=`line-matrix-row`;let i=document.createElement(`div`);if(i.className=`line-graphic-mini`,e===1){let e=document.createElement(`div`);e.className=`yang-bar`,i.appendChild(e)}else{let e=document.createElement(`div`);e.className=`yin-bar`;let t=document.createElement(`div`);t.className=`yin-gap`;let n=document.createElement(`div`);n.className=`yin-bar`,i.appendChild(e),i.appendChild(t),i.appendChild(n)}let a=document.createElement(`div`);a.className=`line-meaning-text`,a.textContent=e===1?n.yang[t]:n.yin[t],r.appendChild(i),r.appendChild(a),c.appendChild(r),setTimeout(()=>{r.classList.add(`revealed`)},300+t*250)});let l=document.getElementById(`r-trigram-boxes`);l&&(e===0?l.innerHTML=``:l.innerHTML=`
        <div class="trigram-summary-box">
          <span class="trigram-label">ลักษณ์บน (ภายนอก)</span>
          <div class="trigram-name">${t.upper_zh||``} ${(t.upper||``).split(` `).slice(1).join(` `)}</div>
        </div>
        <div class="trigram-summary-box">
          <span class="trigram-label">ลักษณ์ล่าง (ภายใน)</span>
          <div class="trigram-name">${t.lower_zh||``} ${(t.lower||``).split(` `).slice(1).join(` `)}</div>
        </div>
      `)}function m(e,t){a={lines:e,hexNum:t},s(`screen-pray`)}function h(){let t=Array.from({length:6},()=>Math.random()<.5?0:1),n=1,r=-1;for(let[i,a]of Object.entries(e)){let e=a.lines.reduce((e,n,r)=>e+(n===t[r]?1:0),0);e>r&&(r=e,n=parseInt(i))}document.getElementById(`cast-mode-label`).textContent=`สุ่มพยากรณ์ — ตั้งจิตถามคำถามของคุณ`,m(c(n),n)}function g(){let t=i;if(t===0){document.getElementById(`cast-mode-label`).textContent=`เลือกไพ่ที่ 00 — ความว่างเปล่า`,m([],0);return}let n=e[String(t)];if(!n){document.getElementById(`num-display`).classList.add(`shake`),setTimeout(()=>document.getElementById(`num-display`).classList.remove(`shake`),450);return}document.getElementById(`cast-mode-label`).textContent=`เลือกไพ่ที่ ${o(t)} — ${n.th}`,m([...n.lines],t)}document.addEventListener(`DOMContentLoaded`,async()=>{await t(),document.getElementById(`btn-random`).addEventListener(`click`,h),document.getElementById(`btn-manual-toggle`).addEventListener(`click`,()=>{document.getElementById(`manual-zone`).classList.toggle(`open`)}),document.getElementById(`num-up`).addEventListener(`click`,()=>l(i+1)),document.getElementById(`num-down`).addEventListener(`click`,()=>l(i-1));let e=null;function n(t){e=setInterval(()=>l(i+t),120)}function r(){clearInterval(e)}document.getElementById(`num-up`).addEventListener(`mousedown`,()=>n(1)),document.getElementById(`num-down`).addEventListener(`mousedown`,()=>n(-1)),document.getElementById(`num-up`).addEventListener(`touchstart`,()=>n(1),{passive:!0}),document.getElementById(`num-down`).addEventListener(`touchstart`,()=>n(-1),{passive:!0}),[`mouseup`,`mouseleave`,`touchend`].forEach(e=>{document.getElementById(`num-up`).addEventListener(e,r),document.getElementById(`num-down`).addEventListener(e,r)}),document.getElementById(`hex-slider`).addEventListener(`input`,e=>{l(parseInt(e.target.value))}),document.getElementById(`btn-go-manual`).addEventListener(`click`,g),document.getElementById(`btn-pray-go`).addEventListener(`click`,()=>{a&&(d(a.lines,a.hexNum),a=null)}),document.getElementById(`btn-reveal`).addEventListener(`click`,f),document.getElementById(`back1`).addEventListener(`click`,()=>s(`screen-home`)),document.getElementById(`btn-result-back`).addEventListener(`click`,()=>{s(`screen-cast`)}),document.getElementById(`btn-result-restart`).addEventListener(`click`,()=>{s(`screen-home`),document.getElementById(`manual-zone`).classList.remove(`open`)}),document.getElementById(`btn-again`).addEventListener(`click`,()=>{s(`screen-home`),document.getElementById(`manual-zone`).classList.remove(`open`)});let o=document.getElementById(`r-illust`),c=document.getElementById(`zoom-modal`),u=document.getElementById(`zoom-img`),p=document.querySelector(`.zoom-modal-close`),m=0;function _(){u.src=o.src,c.classList.add(`active`),document.body.classList.add(`modal-open`)}function v(){c.classList.remove(`active`),document.body.classList.remove(`modal-open`)}o.addEventListener(`click`,e=>{let t=Date.now(),n=t-m;n<350&&n>0&&(e.cancelable&&e.preventDefault(),_()),m=t}),o.addEventListener(`touchend`,e=>{let t=Date.now();t-m<350&&_(),m=t}),p.addEventListener(`click`,v),c.addEventListener(`click`,e=>{(e.target===c||e.target.classList.contains(`zoom-modal-content`))&&v()}),document.addEventListener(`contextmenu`,e=>{e.target.closest(`#result-card`)&&e.preventDefault()}),document.getElementById(`hex-slider`).addEventListener(`keydown`,e=>{e.key===`Enter`&&g()})});
