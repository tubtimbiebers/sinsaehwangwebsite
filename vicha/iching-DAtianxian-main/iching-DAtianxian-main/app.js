/* ==============================================
   เปิดคำทำนายอี้จิง — app.js
   Loads all 64 hexagrams from hexagrams_64_filled.json
   ============================================== */

/* ================================================
   บทกลอนคำทำนายอี้จิง 64 กง
   จากไฟล์: 64 meaning v1 update1.pdf
   ================================================ */
const PDF_MEANINGS = {
  "1":  { poem: "ฟ้าเปิดทาง สร้างฝัน อันยิ่งใหญ่\nเหมือนแรงใจ ผลักคน พ้นหม่นหมอง\nมีพลัง มีความหวัง ดังแสงทอง\nให้หมายปอง ก้าวไป ไม่ลังเล", title_en: "CREATIVE POWER" },
  "2":  { poem: "ดุจแผ่นดิน ถิ่นกว้าง อย่างอ่อนโยน\nแม้เงียบงม ก็รองรับ ทุกข์สุขได้\nไม่ชิงเด่น ไม่เร่งร้อน ก่อนเวลาไป\nแต่กลับให้ ชีวิตงอก ออกงามดี", title_en: "RECEPTIVE POWER" },
  "3":  { poem: "ค่อยๆ ผ่อนคลาย ตั้งสติ ยามไหวหวาม\nหากยังมีมืดมัว อย่าฝืนเดินจนเกินความ\nรอคนตามช่วยชี้ทาง จึงค่อยไป\nความอดทน คือกุญแจ ไขประตูชัย", title_en: "DIFFICULTY AT THE BEGINNING" },
  "4":  { poem: "ดั่งต้นอ่อน กลางหุบ พึ่งแยบออก\nยามเมฆหมอก ยังบัง อยู่พราวไหว\nจำต้องหา ครูดี ช่วยชี้นำไป\nเพื่อมิให้ เดินหลง ตกเล่ห์กล", title_en: "INEXPERIENCE" },
  "5":  { poem: "เมฆตั้งเค้า คลุมฟ้า พาใจนิ่ง\nเหมือนหลายสิ่ง ยังไม่ถึง ซึ่งเวลา\nแม้อยากเร่ง อยากรีบไป ให้ถึงครา\nแต่ชะตา ยังบอกไว้ ให้นั่งรอ", title_en: "CALCULATED PATIENCE" },
  "6":  { poem: "เมื่อน้ำไหล ย้อนทาง ตรงกลางหุบ\nย่อมเกิดยุบ ย่อแย่ เสียทีไฉน\nจิตกับใจ แย้งกัน เพราะหวั่นไป\nควรละวาง ในใจ ที่รวนเร", title_en: "CONFLICT" },
  "7":  { poem: "หากขาดวินัย กองทัพ ย่อมวุ่นวาย\nความสำเร็จ จะกลับกลาย เป็นพ่ายหนี\nยามได้รับ มอบอำนาจ ที่ควรมี\nจงใช้ดี ให้สมคาด ด้วยปัญญา", title_en: "DISCIPLINE / THE ARMY" },
  "8":  { poem: "น้ำหลากไหล รวมเจ้า เป็นสายใหญ่\nคือพลัง แห่งความร่วม เป็นมิตรศรี\nหากโดดเดี่ยว ย่อมแพ้พ่าย ในชีวี\nต้องหาที่ ยึดเหนี่ยว เกี่ยวพาดพัน", title_en: "HOLDING TOGETHER" },
  "9":  { poem: "เหมือนเมฆฝน ลอยต่ำ แต่ยังไม่ร่วง\nพลังมี เพียงน้อยนิด ให้ห่วงหา\nยังมิควร มุ่งหน้า ทุรังไป ตามบัญชา\nแต่ควรสั่งสม ความสงบ เตรียมรับกาล", title_en: "GENTLE RESTRAINT" },
  "10": { poem: "ดุจเดิน ตามหลังพยัคฆ์ ลำบากแน่\nหากไม่แร่ รู้วิถี ที่ควรผัน\nต้องนอบน้อม ยำเกรง ด้วยใจมั่น\nจึงจะพ้น อันตราย อันอาจมี", title_en: "CONDUCT / TREADING" },
  "11": { poem: "แผ่นดินสงบ โอบฟ้าไว้ อย่างอ่อนโยน\nผู้คนพ้น เรื่องวุ่นวาย หายหม่นหมอง\nโชคและทาง เปิดรับกัน ดังครรลอง\nสิ่งทั้งผอง ดำเนินดี มีสุขใจ\nยามนี้เหมือน บุญหนุน อุ่นทุกด้าน\nเรื่องที่หวัง มีเกณฑ์สม ดังตั้งใจ", title_en: "PEACE" },
  "12": { poem: "ยามฟ้ากับดิน ผินหลัง ให้กันและกัน\nความสัมพันธ์ จึงหยุดนิ่ง ดั่งขวางกั้น\nเป็นช่วงเวลา ที่ต้อง อดทน รอคอย\nรักษาความสัตย์ ถ่อมตน เข้าไว้\nแล้ววันใหม่ ที่สดใส จะหาเอย", title_en: "STAGNATION" },
  "13": { poem: "ยามผู้คน พร้อมหน้า มารวมผล\nมิตรภาพ ก่อเกิด ในทุกหน\nจงเปิดใจ รับฟัง และแลกเปลี่ยน\nมิตรภาพ จะเปรียบเสมือน สายธาร", title_en: "FELLOWSHIP WITH MEN" },
  "14": { poem: "ยามแสงอาทิตย์ ส่องสว่าง กลางนภา\nความรุ่งเรือง เฟื่องฟู ก็ตามมา\nทรัพย์สิน เงินทอง หลั่งไหล ดั่งธารา\nจงมีเมตตา และแบ่งปัน ในทันที\nเพื่อรักษา ความโชคดี ให้ยืนยาว", title_en: "POSSESSION IN GREAT MEASURE" },
  "15": { poem: "ดั่งขุนเขา ที่ซ่อนตน อยู่ใต้ดิน\nความยิ่งใหญ่ แต่งามสง่า ไม่สูญสิ้น\nผู้ที่มี ความถ่อมตน ทั่วทั้งริน\nย่อมประเสริฐ และได้รับ ความชื่นชม", title_en: "HUMILITY" },
  "16": { poem: "ดั่งเสียงฟ้าร้อง ก้องกังวาน ทั่วแดนดิน\nปลุกชีวิต ให้ฟื้นตื่น ไม่สูญสิ้น\nความกระตือรือร้น นำโชค มาให้กิน\nจงใช้พลัง สร้างสรรค์ ให้เป็นทุน", title_en: "ENTHUSIASM" },
  "17": { poem: "การคล้อยตาม อย่างมีสติ และเหมาะสม\nย่อมนำมา ซึ่งความสุข และความสมบูรณ์\nจงมองหา ผู้นำที่ มีคุณธรรม\nแล้วก้าวตาม ด้วยความ ตั้งใจนี้", title_en: "FOLLOWING" },
  "18": { poem: "เมื่อสิ่งที่ คั่งค้าง กระจายตัว\nเป็นเงาสลัว บดบัง ทางก้าวหน้า\nจงเร่งรีบ แก้ไข ด้วยปัญญา\nจงกล้าเผชิญหน้า กับความจริง\nแล้วทุกสิ่ง จะกลับมา ดีดังเดิม", title_en: "WORK ON WHAT HAS BEEN SPOILED" },
  "19": { poem: "ดั่งท้องฟ้า ที่โน้มตัว ลงสู่พื้น\nความเมตตา ย่อมเรียก ความชื่นมื่น\nโอกาสทอง กำลังจะ มาถึงคืน\nมีผู้ใหญ่ คอยช่วยเหลือ และนับถือ\nจงรักษาระเบียบวินัย เป็นคู่มือ", title_en: "APPROACH" },
  "20": { poem: "ดั่งลมแรง ที่พัดผ่าน ยอดหอคอย\nผู้ที่ฉลาด ย่อมรอคอย และมองดู\nการพิจารณา อย่างถ่องแท้ จะนำสู่\nความเข้าใจ ในเหตุ และในผล\nจงสังเกต และเรียนรู้ เพื่อใช้ตน", title_en: "CONTEMPLATION" },
  "21": { poem: "มีสิ่งกีดขวาง อยู่ตรงกลาง ต้องกัดผ่าน\nด้วยความเด็ดขาด ยุติธรรม มั่นคง\nอย่าลังเล ในการ ตัดสินใจ\nเพราะความเด็ดเดี่ยว คือทาง ไปสู่ชัย", title_en: "BITING THROUGH" },
  "22": { poem: "ความงามจาก ภายใน มั่นคงกว่า\nรูปลักษณ์ ภายนอก ที่ตาเห็น\nตกแต่ง ประดับประดา ให้งดงาม\nแต่อย่าลืม นำเนื้อหา มาเป็นหลักใจ", title_en: "GRACE" },
  "23": { poem: "ยามเสื่อมสลาย ให้หยุดนิ่ง อดทนรอ\nอย่าฝืนกระแส ที่แรงกว่า ตนเอง\nสิ่งเก่ากำลัง สลายทีละชั้น\nรักษาตัวไว้ เพื่อวัน ใหม่ที่ดี", title_en: "SPLIT APART" },
  "24": { poem: "แสงแรก ของฤดูใบไม้ผลิ กำลังมา\nสิ่งที่หายไป กำลังจะ คืนกลับมา\nจงเริ่มต้น ใหม่ด้วย พลังบริสุทธิ์\nอดีตคือบทเรียน ไม่ใช่ โซ่ตรวน", title_en: "RETURN" },
  "25": { poem: "ทำในสิ่ง ที่ถูกต้อง โดยไม่หวังผล\nความบริสุทธิ์ใจ นำโชค มาเอง\nจิตที่ใส ไม่มี สิ่งเจือปน\nความจริงใจ คือเกราะกำบัง ที่ดีที่สุด", title_en: "INNOCENCE" },
  "26": { poem: "ภูเขาบรรจุ พลังฟ้า ไว้ภายใน\nการสะสมความรู้ พลังอย่างมาก\nนำมาซึ่ง ความยิ่งใหญ่ ในอนาคต\nลงทุนใน ความรู้ และตัวเอง", title_en: "GREAT TAMING POWER" },
  "27": { poem: "ใส่ใจสิ่ง ที่หล่อเลี้ยง กายและจิต\nอาหารที่คุณกิน ความคิดที่คุณคิด\nสร้างตัวตน ให้เป็นคน ที่ดีงาม\nเลือกรับสิ่งดี ละทิ้ง สิ่งบั่นทอน", title_en: "NOURISHMENT" },
  "28": { poem: "คานกลาง หักเพราะ รับน้ำหนักเกิน\nสถานการณ์ ตึงเครียด เกินพอดี\nต้องตัดสินใจ ก่อนที่ จะสายเกิน\nลดภาระ ที่แบกรับ อยู่ลงเสีย", title_en: "PREPONDERANCE OF THE GREAT" },
  "29": { poem: "อันตราย ซ้อนทับกัน สองชั้น\nจงมีใจ มั่นคง ดังน้ำไหล\nน้ำไหลใน หุบเหว ลึก ไม่เคยหยุด\nทุกอุปสรรค มีทางออก เสมอ", title_en: "THE ABYSMAL" },
  "30": { poem: "ไฟสองกอง ส่องแสง สว่างสดใส\nความชัดเจน ปัญญา อยู่สูงสุด\nใช้ปัญญา นำทาง ตัดสินใจ\nแสงแห่งปัญญา นำทาง ชีวิตให้สว่าง", title_en: "THE CLINGING" },
  "31": { poem: "ภูเขาและบึง ดึงดูด ซึ่งกันและกัน\nหัวใจที่เปิดรับ ความรู้สึก\nสร้างความสัมพันธ์ ที่ลึกซึ้ง\nเปิดใจ ฟังความรู้สึก ของตัวเองและผู้อื่น", title_en: "INFLUENCE / WOOING" },
  "32": { poem: "สายฟ้าและลม ไม่หยุด เคลื่อน\nความสม่ำเสมอ ความเพียร คือรหัส\nยึดมั่น ในเส้นทาง อย่าเปลี่ยนทิศ\nความสม่ำเสมอ คือกุญแจ สู่ความสำเร็จ", title_en: "DURATION" },
  "33": { poem: "บางครั้ง การถอย คือกลยุทธ์ที่ชาญฉลาด\nรักษาพลัง ไว้เพื่อ โอกาสที่ดีกว่า\nถอยหลัง หนึ่งก้าว เพื่อวิ่งไปข้างหน้า\nรอดีกว่า สูญเสีย ในยามนี้", title_en: "RETREAT" },
  "34": { poem: "พลังมหาศาล อยู่ในมือ คุณ\nแต่ผู้แข็งแกร่ง ที่แท้จริง รู้ว่าเมื่อใดควรหยุด\nใช้พลัง ที่มี อย่างชาญฉลาด\nความแข็งแกร่ง ต้องมีปัญญา นำทาง", title_en: "GREAT POWER" },
  "35": { poem: "ดวงอาทิตย์ โผล่พ้น ขอบฟ้า\nความก้าวหน้า การเลื่อนขั้น กำลังจะมา\nเดินหน้า ได้เลย โอกาสเปิดกว้าง\nคนที่มีคุณธรรม จะได้รับ การสนับสนุน", title_en: "PROGRESS" },
  "36": { poem: "แสงสว่าง ถูกกลืน เข้าไปในความมืด\nซ่อนปัญญา ไว้ใน ยามที่อำนาจชั่วครอง\nดวงอาทิตย์ จมลง ใต้แผ่นดิน\nซ่อนความสามารถ และรอเวลา", title_en: "DARKENING OF THE LIGHT" },
  "37": { poem: "ไฟอุ่น ในบ้าน ทำให้ครอบครัวแข็งแกร่ง\nบทบาท ที่ชัดเจน สร้างความสงบสุข\nความอบอุ่น กระจาย ไปทั่วครอบครัว\nบ้านที่แข็งแกร่ง คือรากฐาน ของทุกความสำเร็จ", title_en: "THE FAMILY" },
  "38": { poem: "สองพลัง หันหน้า ออกจากกัน\nความแตกต่าง ไม่ใช่ศัตรู แต่คือโอกาสเรียนรู้\nยอมรับ ความแตกต่าง หาจุดร่วมเล็กๆ\nแล้วค่อยๆ ขยายออก สู่ความเข้าใจ", title_en: "OPPOSITION" },
  "39": { poem: "ภูเขาสูง และน้ำขวางหน้า\nเส้นทางยากลำบาก ต้องหาทางอ้อม\nหยุดพัก และประเมิน สถานการณ์ใหม่\nขอความช่วยเหลือ ไม่ใช่ความอ่อนแอ", title_en: "OBSTRUCTION" },
  "40": { poem: "ฝนตก หลังพายุ ความตึงเครียดคลี่คลาย\nภาระ ที่แบกรับ กำลังจะหลุดพ้น\nปล่อยวาง สิ่งที่กดทับ อยู่\nให้อภัย และก้าวไปข้างหน้า อย่ายึดติด", title_en: "DELIVERANCE" },
  "41": { poem: "การลดน้อย ในเบื้องต้น นำมาซึ่ง\nการเพิ่มพูน ในภายหลัง ความเรียบง่าย\nการให้ บางครั้งคือ การรับ\nเสียสละเล็กน้อย วันนี้ เพื่อผลยิ่งใหญ่", title_en: "DECREASE" },
  "42": { poem: "ฟ้าฝน และลม นำความอุดมสมบูรณ์\nนี่คือช่วงเวลา แห่งการเติบโต\nลงทุน และขยายตัว ได้เลย\nช่วงนี้ ทุกอย่างที่ทำ จะให้ผลตอบแทน", title_en: "INCREASE" },
  "43": { poem: "ต้องประกาศ ความจริง ต่อสาธารณะ\nความชั่วร้าย จะพ่ายแพ้ต่อ ความกล้าหาญ\nพูดความจริง อย่างกล้าหาญ แต่ไม่ใช้ความรุนแรง\nปัญญาดีกว่า กำลัง เสมอ", title_en: "BREAK-THROUGH" },
  "44": { poem: "การพบกัน โดยบังเอิญ อาจมีนัยสำคัญ\nระวัง อิทธิพลอ่อน ที่แอบเล็ดรอด\nระมัดระวัง คนหรือสถานการณ์ใหม่ ที่เข้ามา\nไม่ทุกการพบปะ จะเป็นมงคล", title_en: "COMING TO MEET" },
  "45": { poem: "การรวมกลุ่ม และชุมนุมกัน นำมาซึ่ง\nพลังมหาศาล ผู้นำดีดึงดูด คนเก่ง\nรวบรวมทีม และทรัพยากร\nการทำงาน เป็นหมู่คณะ จะนำผลลัพธ์ยิ่งใหญ่", title_en: "GATHERING TOGETHER" },
  "46": { poem: "ต้นไม้ เติบโตขึ้น จากแผ่นดิน\nความก้าวหน้า ทีละขั้น คือเส้นทางมั่นคง\nค่อยๆ ก้าวขึ้นไป อย่างมั่นคง\nอย่าข้ามขั้น ความสำเร็จที่สร้างทีละชั้น คงทนที่สุด", title_en: "PUSHING UPWARD" },
  "47": { poem: "บึงแห้ง น้ำหมด อยู่ในสถานการณ์ขัดสน\nแต่คนมีคุณธรรม ไม่ท้อถอย\nยึดมั่น ในความดี แม้ไม่มีใครเห็น\nช่วงเวลานี้ จะผ่านไป ความซื่อสัตย์คือสมบัติ", title_en: "OPPRESSION / EXHAUSTION" },
  "48": { poem: "บ่อน้ำ หล่อเลี้ยงชุมชน โดยไม่เคยหมด\nทรัพยากรที่แท้จริง อยู่ที่ความรู้ คุณธรรม\nแบ่งปัน ความรู้ และทักษะของคุณ\nยิ่งให้ยิ่งได้ ความรู้ไม่ลดลง เมื่อแบ่งปัน", title_en: "THE WELL" },
  "49": { poem: "ไฟในน้ำ การเปลี่ยนแปลง ขนานใหญ่กำลังจะเกิด\nเหมือนหนังสัตว์ ที่ลอกคราบใหม่\nกล้าเปลี่ยนแปลง สิ่งที่ล้าสมัย\nรอให้ถึงเวลา ที่เหมาะสม ก่อนลงมือ", title_en: "REVOLUTION" },
  "50": { poem: "หม้อหุงข้าว ของกษัตริย์ ที่ปรุงโชคชะตา\nการแปลง สิ่งดิบ ให้กลายเป็นสิ่งประณีต\nรวบรวม คนเก่งและทรัพยากร ที่ดีที่สุด\nแล้วผสาน ให้กลายเป็น ผลงานชิ้นเอก", title_en: "THE CALDRON" },
  "51": { poem: "ฟ้าร้อง กระหึ่ม สองครั้ง\nสิ่งที่คาดไม่ถึง มาเยือน\nรับมือ กับเหตุการณ์กะทันหัน ด้วยสติ\nสิ่งที่ทำให้ตกใจ มักพาการเติบโต มาด้วย", title_en: "THE AROUSING" },
  "52": { poem: "ภูเขาสองลูก นิ่งอยู่กับที่\nเวลานี้ ต้องหยุดนิ่ง มองเข้าข้างใน\nหยุด และนั่งสงบ คำตอบอยู่ข้างในคุณ\nไม่ใช่ ข้างนอก", title_en: "KEEPING STILL" },
  "53": { poem: "นกป่า บินขึ้นสูง ทีละก้าว\nความสำเร็จที่แท้จริง ต้องการเวลา\nอย่าเร่งรัด ทำทีละขั้น อย่างถูกต้อง\nกระบวนการที่ถูกต้อง สำคัญกว่า ความเร็ว", title_en: "DEVELOPMENT" },
  "54": { poem: "การเคลื่อนที่ ด้วยความยินดี ในตำแหน่งที่ไม่ใช่หลัก\nต้องใช้ ความอดทน และความเข้าใจ\nรู้บทบาท ของตัวเอง และทำให้ดีที่สุด\nอย่าเรียกร้อง มากกว่าที่ควรได้ ในตอนนี้", title_en: "THE MARRYING MAIDEN" },
  "55": { poem: "แสงและเสียงฟ้าร้อง รวมกัน\nนี่คือจุดสูงสุด ของความอุดมสมบูรณ์\nเก็บเกี่ยวผล และเฉลิมฉลอง\nจำไว้ว่า หลังจุดสูงสุด มีแต่ลง เตรียมพร้อม", title_en: "ABUNDANCE" },
  "56": { poem: "นักเดินทาง ในแดนแปลกหน้า\nต้องระวัง รักษาตัว ไม่เสียหน้า\nปรับตัว ให้เข้ากับสิ่งแวดล้อมใหม่\nมีสติ ระวังตัว อย่าแสดงตัวมากเกิน", title_en: "THE WANDERER" },
  "57": { poem: "ลมพัด ซ้ำสองทิศ\nความอ่อนโยน สม่ำเสมอ ซึมผ่านทุกสิ่ง\nใช้ความอ่อนโยน และความสม่ำเสมอ แทนการบังคับ\nอิทธิพลแท้จริง มาจาก ความไว้วางใจ", title_en: "THE GENTLE" },
  "58": { poem: "บึงสองแห่ง หล่อเลี้ยงกัน\nความยินดี และการสื่อสารที่เปิดเผย\nความสุขที่แท้จริง เกิดจาก การแบ่งปัน\nแสดงความยินดี เปิดใจสื่อสาร พลังแห่งความสุข", title_en: "THE JOYOUS" },
  "59": { poem: "ลม กระจายน้ำ ออกไปทั่ว\nความแข็งกระด้าง การแบ่งแยก กำลังจะละลาย\nใช้ความอ่อนโยน และการสื่อสาร\nแก้ไขความขัดแย้ง ด้วยความจริงใจ", title_en: "DISPERSION" },
  "60": { poem: "น้ำในบึง ต้องมีขอบเขต\nกฎระเบียบ และการกำหนดขีดจำกัด ที่ถูกต้อง\nขอบเขตที่ถูกต้อง สร้างพลัง ไม่ใช่จำกัด\nความมีวินัย คือเสรีภาพ ที่แท้จริง", title_en: "LIMITATION" },
  "61": { poem: "ความจริงใจ ที่อยู่ในใจกลาง\nสามารถเคลื่อนใจ แม้แต่หมูและปลา\nจงซื่อสัตย์ และจริงใจ ในทุกการกระทำ\nความจริงใจ เป็นพลัง ที่แข็งแกร่งที่สุด", title_en: "INNER TRUTH" },
  "62": { poem: "นกบิน ต่ำดีกว่า บินสูง\nในวันที่ลมพัดแรง ทำสิ่งเล็กน้อย\nรู้ขีดความสามารถ ของตัวเอง\nทำสิ่งเล็กน้อย ที่อยู่ในมือ ก่อน", title_en: "PREPONDERANCE OF THE SMALL" },
  "63": { poem: "ทุกอย่าง สำเร็จสมบูรณ์ แล้ว\nไฟและน้ำ อยู่ในตำแหน่ง ที่ถูกต้อง\nความสำเร็จ ที่ต้องการ การดูแลต่อเนื่อง\nดูแลรักษา สิ่งที่สร้างมา ความสำเร็จไม่ใช่จุดสิ้นสุด", title_en: "AFTER COMPLETION" },
  "64": { poem: "ไฟและน้ำ ยังไม่ประสาน กัน\nงานยังไม่ เสร็จสมบูรณ์\nอีกนิดเดียว ก็ถึงฝั่ง อย่าท้อตอนนี้\nอดทน อีกเล็กน้อย ความสำเร็จใกล้แค่เอื้อม", title_en: "BEFORE COMPLETION" }
};


/* ---------- Load hexagram data ---------- */
let HEXAGRAMS = {};

async function loadHexagrams() {
  try {
    const res = await fetch('/hexagrams_64_filled.json');
    HEXAGRAMS = await res.json();
  } catch (e) {
    console.error('Could not load hexagram data:', e);
  }
}

/* ---------- Line meanings ---------- */
const LINE_MEANINGS = {
  yang: [
    'รากฐานแข็งแกร่ง เริ่มต้นด้วยพลังบริสุทธิ์',
    'ผู้ยิ่งใหญ่ปรากฏ ขอคำแนะนำจากผู้มีปัญญา',
    'ขยันหมั่นเพียรตลอดวัน ระวังในยามค่ำคืน',
    'กระโดดสู่ห้วงน้ำด้วยความกล้า ไม่มีความผิดพลาด',
    'มังกรทองโลดแล่นบนฟ้า ฤกษ์ยามนี้งดงาม',
    'ผู้ที่ขึ้นสูงเกินไปย่อมเสียใจ รู้จักจุดพอดี'
  ],
  yin: [
    'เดินตามรอยน้ำค้าง ความระมัดระวังนำโชค',
    'ตรงไปตรงมา ยิ่งใหญ่ แผ่กว้าง ไม่จำเป็นต้องฝึกฝน',
    'ซ่อนคุณงามความดีไว้ รอโอกาสจากผู้ยิ่งใหญ่',
    'ถุงผูกปิดสนิท ไม่มีทั้งคำชมและคำตำหนิ',
    'เสื้อคลุมสีเหลือง — ความสูงส่งสุดยอดแห่งความดี',
    'มังกรที่ทุ่งหญ้า เลือดสีดำเหลือง — ฟ้าดินปะทะกัน'
  ]
};

/* ---------- State ---------- */
let currentHex = null;
let currentLines = [];
let selectedNum = 0;
let pendingCast = null;

/* ---------- Utility ---------- */
function pad2(n) { return String(n).padStart(2, '0'); }

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function linesFromHex(num) {
  const data = HEXAGRAMS[String(num)];
  return data ? [...data.lines] : [1,1,1,1,1,1];
}

/* ---------- Number Scroller ---------- */
function updateNumDisplay(n) {
  selectedNum = Math.max(0, Math.min(64, n));
  document.getElementById('num-display').textContent = pad2(selectedNum);
  document.getElementById('hex-slider').value = selectedNum;
}

/* ---------- Line builder ---------- */
function buildLineSlot(lineVal, pos, revealed) {
  const slot = document.createElement('div');
  slot.className = 'line-slot' + (revealed ? ' revealed' : '');
  slot.id = 'line-slot-' + pos;

  // Position label
  const numEl = document.createElement('div');
  numEl.className = 'line-num';
  numEl.textContent = '爻' + pos;

  // Graphic
  const graphic = document.createElement('div');
  graphic.className = 'line-graphic';
  if (lineVal === 1) {
    const bar = document.createElement('div');
    bar.className = 'yang-bar';
    graphic.appendChild(bar);
  } else {
    const b1 = document.createElement('div'); b1.className = 'yin-bar';
    const gap = document.createElement('div'); gap.className = 'yin-gap';
    const b2 = document.createElement('div'); b2.className = 'yin-bar';
    graphic.appendChild(b1); graphic.appendChild(gap); graphic.appendChild(b2);
  }

  // Yang/Yin label
  const label = document.createElement('div');
  label.className = 'line-label';
  label.textContent = lineVal === 1 ? '陽' : '陰';

  // Group left items: num, graphic, label
  const leftGroup = document.createElement('div');
  leftGroup.className = 'line-left-group';
  leftGroup.appendChild(numEl);
  leftGroup.appendChild(graphic);
  leftGroup.appendChild(label);

  // Text on the right
  const text = document.createElement('div');
  text.className = 'line-text';
  text.textContent = lineVal === 1
    ? LINE_MEANINGS.yang[pos - 1]
    : LINE_MEANINGS.yin[pos - 1];

  slot.appendChild(leftGroup);
  slot.appendChild(text);
  return slot;
}

/* ---------- Cast animation ---------- */
function startCast(lines, hexNum) {
  currentLines = lines;
  showScreen('screen-cast');

  const stage = document.getElementById('hex-stage');
  stage.innerHTML = '';

  const statusEl = document.getElementById('cast-status');
  const progEl   = document.getElementById('prog');
  const progLabel = document.getElementById('prog-label');
  const revealZone = document.getElementById('reveal-zone');

  if (hexNum === 0) {
    const data = {
      zh: "無",
      th: "ความว่างเปล่า",
      oracle: "จิตใจที่ว่างเปล่า หรือควบคุมสติไม่ได้ไม่สามารถมีคำทำนายขึ้นที่ใบนี้ ให้ท่านหายใจลึกๆ 3ครั้ง คำทำนายจะปรากฏหลังจากที่ท่านกดคำทำนายใหม่อีกครั้ง ขอจงสำเร็จ",
      symbol: "ไม่มีคำทำนาย",
      advice: "สูดหายใจลึกๆ 3 ครั้ง แล้วกดตั้งจิตถามใหม่อีกครั้ง",
      lines: [],
      upper: "", upper_zh: "", lower: "", lower_zh: ""
    };
    currentHex = { num: 0, data };
    statusEl.textContent = 'เตรียมเปิดคำทำนาย...';
    statusEl.classList.remove('pulse');
    revealZone.classList.add('show');
    progEl.style.width = '100%';
    progLabel.textContent = '0 / 0';
    return;
  }

  // Build slots in display order (line 6 at top, line 1 at bottom)
  const slots = [];
  for (let i = 1; i <= 6; i++) {
    const slot = buildLineSlot(lines[i - 1], i, false);
    slots.unshift(slot); // prepend → line 6 first
  }
  slots.forEach(s => stage.appendChild(s));

  revealZone.classList.remove('show');
  statusEl.classList.add('pulse');

  const lineNodes = stage.querySelectorAll('.line-slot');

  function revealLine(idx) {
    if (idx >= 6) {
      const data = HEXAGRAMS[String(hexNum)];
      currentHex = { num: hexNum, data };
      statusEl.textContent = 'เฮ็กซะแกรมสมบูรณ์ — ' + (data ? data.zh : '') + ' กดเปิดคำทำนาย';
      statusEl.classList.remove('pulse');
      revealZone.classList.add('show');
      return;
    }

    // Traditional I Ching: Line 1 (l-r index 0) is at the bottom, Line 6 (l-r index 5) is at the top.
    // In our DOM, slots are [L6, L5, L4, L3, L2, L1].
    // So to reveal L1 first: lineNum = idx + 1, nodeIdx = 5 - idx.
    const lineNum = idx + 1;
    const nodeIdx = 5 - idx;
    const val = lines[idx];

    // Accurate and neutral labeling to avoid "mismatch" with result
    statusEl.textContent = `เส้นที่ ${lineNum} — ${val === 1 ? 'หยาง (สว่าง/แกร่ง)' : 'หยิน (สงบ/อ่อนโยน)'}`;
    lineNodes[nodeIdx].classList.add('revealed');
    progEl.style.width = ((idx + 1) / 6 * 100) + '%';
    progLabel.textContent = `${idx + 1} / 6`;

    setTimeout(() => revealLine(idx + 1), 850);
  }

  setTimeout(() => revealLine(0), 500);
}

/* ---------- Meditation Sequence ---------- */
async function startMeditation() {
  const overlay = document.getElementById('meditation-overlay');
  const textEl = document.getElementById('meditation-text');
  const bar = overlay.querySelector('.loader-bar');
  
  const phrases = [
    "โปรดตั้งสติ...",
    "นึกถึงคำถามที่อยากถาม...",
    "หายใจลึกๆ...",
    "คำทำนายจะปรากฏ ณ บัดนี้"
  ];
  
  overlay.classList.add('active');
  bar.style.transition = 'none';
  bar.style.width = '0%';
  
  // Force reflow
  void bar.offsetWidth;
  
  bar.style.transition = 'width 3000ms linear';
  bar.style.width = '100%';
  
  for (let i = 0; i < phrases.length; i++) {
    textEl.style.opacity = '0';
    setTimeout(() => {
      textEl.textContent = phrases[i];
      textEl.style.opacity = '1';
    }, 200);
    await new Promise(r => setTimeout(r, 750));
  }
  
  // Final smooth transition out
  await new Promise(r => setTimeout(r, 200)); 
  overlay.classList.remove('active');
  
  setTimeout(() => {
    showResult();
  }, 500);
}

/* ---------- Show result ---------- */
function showResult() {
  const { num, data } = currentHex;
  if (!data) { showScreen('screen-home'); return; }

  showScreen('screen-result');

  // Title Badge
  const titleName = (data.th || '').split('—')[0].trim();
  document.getElementById('r-num').textContent = `ไพ่ที่ ${pad2(num)} · ${titleName}`;
  
  // Basic Info
  document.getElementById('r-name-zh').textContent = data.zh;
  document.getElementById('r-name-th').textContent = data.th;
  document.getElementById('r-oracle').textContent = data.oracle;
  document.getElementById('r-symbol-text').textContent = data.symbol;
  document.getElementById('r-advice').textContent = data.advice;

  // Illustration
  const illustEl = document.getElementById('r-illust');
  if (illustEl) {
    const paddedNum = String(num).padStart(3, '0');
    illustEl.src = `assets/images/ic${paddedNum}.webp`;
    illustEl.style.display = 'block';
    illustEl.onerror = () => { illustEl.style.display = 'none'; };
  }

  // Line Matrix (Lines + Row-by-row translations)
  const matrixEl = document.getElementById('r-line-matrix');
  matrixEl.innerHTML = '';
  // lines array: index 0 = line 1 (bottom)
  // We want to append them in order, and CSS flex-direction: column-reverse handles the bottom-up look.
  if (data.lines) {
    data.lines.forEach((l, idx) => {
      const row = document.createElement('div');
      row.className = 'line-matrix-row';

      // Mini Graphic
      const graphic = document.createElement('div');
      graphic.className = 'line-graphic-mini';
      if (l === 1) {
        const bar = document.createElement('div'); bar.className = 'yang-bar'; graphic.appendChild(bar);
      } else {
        const b1 = document.createElement('div'); b1.className = 'yin-bar';
        const gap = document.createElement('div'); gap.className = 'yin-gap';
        const b2 = document.createElement('div'); b2.className = 'yin-bar';
        graphic.appendChild(b1); graphic.appendChild(gap); graphic.appendChild(b2);
      }

      // Meaning Text
      const text = document.createElement('div');
      text.className = 'line-meaning-text';
      text.textContent = l === 1 ? LINE_MEANINGS.yang[idx] : LINE_MEANINGS.yin[idx];

      row.appendChild(graphic);
      row.appendChild(text);
      matrixEl.appendChild(row);

      // Staggered reveal animation
      setTimeout(() => {
        row.classList.add('revealed');
      }, 300 + (idx * 250)); // Stagger by 250ms starting from bottom
    });
  }

  // Trigram Comparison Boxes
  const boxesEl = document.getElementById('r-trigram-boxes');
  if (boxesEl) {
    if (num === 0) {
      boxesEl.innerHTML = '';
    } else {
      boxesEl.innerHTML = `
        <div class="trigram-summary-box">
          <span class="trigram-label">ลักษณ์บน (ภายนอก)</span>
          <div class="trigram-name">${data.upper_zh || ''} ${(data.upper || '').split(' ').slice(1).join(' ')}</div>
        </div>
        <div class="trigram-summary-box">
          <span class="trigram-label">ลักษณ์ล่าง (ภายใน)</span>
          <div class="trigram-name">${data.lower_zh || ''} ${(data.lower || '').split(' ').slice(1).join(' ')}</div>
        </div>
      `;
    }
  }
}

/* ---------- Pray Screen Transition ---------- */
function showPrayScreen(lines, hexNum) {
  pendingCast = { lines, hexNum };
  showScreen('screen-pray');
}

/* ---------- Random cast ---------- */
function doRandom() {
  // Generate 6 random lines (0=yin, 1=yang)
  const lines = Array.from({ length: 6 }, () => Math.random() < 0.5 ? 0 : 1);

  // Find closest matching hexagram by comparing lines array
  let bestMatch = 1;
  let bestScore = -1;
  for (const [key, hex] of Object.entries(HEXAGRAMS)) {
    const score = hex.lines.reduce((acc, v, i) => acc + (v === lines[i] ? 1 : 0), 0);
    if (score > bestScore) { bestScore = score; bestMatch = parseInt(key); }
  }

  document.getElementById('cast-mode-label').textContent = 'สุ่มพยากรณ์ — ตั้งจิตถามคำถามของคุณ';
  showPrayScreen(linesFromHex(bestMatch), bestMatch);
}

/* ---------- Manual cast ---------- */
function doManual() {
  const n = selectedNum;
  if (n === 0) {
    document.getElementById('cast-mode-label').textContent = `เลือกไพ่ที่ 00 — ความว่างเปล่า`;
    showPrayScreen([], 0);
    return;
  }
  const data = HEXAGRAMS[String(n)];
  if (!data) {
    document.getElementById('num-display').classList.add('shake');
    setTimeout(() => document.getElementById('num-display').classList.remove('shake'), 450);
    return;
  }
  document.getElementById('cast-mode-label').textContent = `เลือกไพ่ที่ ${pad2(n)} — ${data.th}`;
  showPrayScreen([...data.lines], n);
}


/* ---------- Event listeners ---------- */
document.addEventListener('DOMContentLoaded', async () => {
  await loadHexagrams();

  /* Home buttons */
  document.getElementById('btn-random').addEventListener('click', doRandom);

  document.getElementById('btn-manual-toggle').addEventListener('click', () => {
    const zone = document.getElementById('manual-zone');
    zone.classList.toggle('open');
  });

  /* Number scroller */
  document.getElementById('num-up').addEventListener('click', () => updateNumDisplay(selectedNum + 1));
  document.getElementById('num-down').addEventListener('click', () => updateNumDisplay(selectedNum - 1));

  /* Long-press repeat for scroller buttons */
  let repeatTimer = null;
  function startRepeat(dir) {
    repeatTimer = setInterval(() => updateNumDisplay(selectedNum + dir), 120);
  }
  function stopRepeat() { clearInterval(repeatTimer); }

  document.getElementById('num-up').addEventListener('mousedown',  () => startRepeat(1));
  document.getElementById('num-down').addEventListener('mousedown', () => startRepeat(-1));
  document.getElementById('num-up').addEventListener('touchstart',  () => startRepeat(1),  { passive: true });
  document.getElementById('num-down').addEventListener('touchstart', () => startRepeat(-1), { passive: true });
  ['mouseup','mouseleave','touchend'].forEach(evt => {
    document.getElementById('num-up').addEventListener(evt, stopRepeat);
    document.getElementById('num-down').addEventListener(evt, stopRepeat);
  });

  /* Slider */
  document.getElementById('hex-slider').addEventListener('input', e => {
    updateNumDisplay(parseInt(e.target.value));
  });

  /* Go manual */
  document.getElementById('btn-go-manual').addEventListener('click', doManual);

  /* Cast screen */
  document.getElementById('btn-pray-go').addEventListener('click', () => {
    if (pendingCast) {
      startCast(pendingCast.lines, pendingCast.hexNum);
      pendingCast = null;
    }
  });

  document.getElementById('btn-reveal').addEventListener('click', startMeditation);
  document.getElementById('back1').addEventListener('click', () => showScreen('screen-home'));

  /* Result screen */
  document.getElementById('btn-result-back').addEventListener('click', () => {
    showScreen('screen-cast');
  });
  document.getElementById('btn-result-restart').addEventListener('click', () => {
    showScreen('screen-home');
    document.getElementById('manual-zone').classList.remove('open');
  });

  document.getElementById('btn-again').addEventListener('click', () => {
    showScreen('screen-home');
    document.getElementById('manual-zone').classList.remove('open');
  });

  /* Zoom Modal Logic */
  const illust = document.getElementById('r-illust');
  const zoomModal = document.getElementById('zoom-modal');
  const zoomImg = document.getElementById('zoom-img');
  const zoomClose = document.querySelector('.zoom-modal-close');
  let lastTap = 0;

  function handleZoom() {
    zoomImg.src = illust.src;
    zoomModal.classList.add('active');
    document.body.classList.add('modal-open');
  }

  function closeZoom() {
    zoomModal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  // Unified Double Tap / Logic
  const onDoubleTap = (e) => {
    const now = Date.now();
    const timesince = now - lastTap;
    if (timesince < 350 && timesince > 0) {
      if (e.cancelable) e.preventDefault();
      handleZoom();
    }
    lastTap = now;
  };

  illust.addEventListener('click', onDoubleTap);
  illust.addEventListener('touchend', (e) => {
     const now = Date.now();
     if (now - lastTap < 350) {
       // Only prevent if we actually triggered zoom
       handleZoom();
     }
     lastTap = now;
  });

  zoomClose.addEventListener('click', closeZoom);
  zoomModal.addEventListener('click', (e) => {
    if (e.target === zoomModal || e.target.classList.contains('zoom-modal-content')) {
      closeZoom();
    }
  });

  /* Block right-click on result card */
  document.addEventListener('contextmenu', e => {
    if (e.target.closest('#result-card')) e.preventDefault();
  });

  /* Keyboard: Enter on slider or manual zone */
  document.getElementById('hex-slider').addEventListener('keydown', e => {
    if (e.key === 'Enter') doManual();
  });
});
