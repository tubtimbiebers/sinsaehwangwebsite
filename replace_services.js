const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Find the services section boundaries
const startMarker = content.indexOf('<!-- ✦ SERVICES ✦ -->');
if (startMarker === -1) {
  console.log('ERROR: start marker not found. Looking for alternatives...');
  // Try to find the section differently
  const alt = content.indexOf('<section class="services section" id="services">');
  console.log('services section at char:', alt);
  process.exit(1);
}

// Find the closing </section> after the start
let searchFrom = startMarker;
const endTag = '</section>';
// Skip past the opening <section> tag
const openTag = content.indexOf('<section', startMarker);
// Find matching </section>
let depth = 0;
let pos = openTag;
while (pos < content.length) {
  if (content.startsWith('<section', pos)) {
    depth++;
    pos += 8;
  } else if (content.startsWith('</section>', pos)) {
    depth--;
    if (depth === 0) {
      pos += endTag.length;
      break;
    }
    pos += endTag.length;
  } else {
    pos++;
  }
}

const endPos = pos;
const originalBlock = content.substring(startMarker, endPos);
console.log('Found block, length:', originalBlock.length);
console.log('First 100 chars:', originalBlock.substring(0, 100));

const newBlock = `<!-- ✦ PROGRAMS ✦ -->
<section class="services section" id="services">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">โปรแกรมตั้งดวง</div>
      <h2 class="section-title">คำนวณดวงชะตา<br/><span>อัจฉริยะ 6 ระบบ</span></h2>
      <p class="section-desc">เลือกระบบโหราศาสตร์ที่ต้องการแล้วคำนวณดวงชะตาได้ทันที</p>
    </div>
    <div class="services-grid">

      <a href="tangduang.html#seven" class="service-card" id="svc-seven">
        <div class="card-icon">
          <span class="icon-zh">數</span>
        </div>
        <div class="card-body">
          <h3>เลข ๗ ตัว ๙ ฐาน</h3>
          <p>วิเคราะห์ตัวเลขชะตา 7 ตัวในฐาน 4–11 ตามหลักเลขศาสตร์โบราณ</p>
          <span class="card-tag">เลข 7 ตัว ฐาน 4-11</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

      <a href="tangduang.html#zodiac" class="service-card" id="svc-zodiac-prog">
        <div class="card-icon">
          <span class="icon-zh">星</span>
        </div>
        <div class="card-body">
          <h3>จักรราศี</h3>
          <p>ราศีจักรและตำแหน่งดาวประจำราศีเกิด วิเคราะห์ดวงแบบตะวันตก</p>
          <span class="card-tag">星盤命理</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

      <a href="tangduang.html#taksamahayuk" class="service-card" id="svc-taksa">
        <div class="card-icon">
          <span class="icon-zh">運</span>
        </div>
        <div class="card-body">
          <h3>ทักษามหายุค</h3>
          <p>ทักษาและดาวจรเสวยอายุประจำปี ตามหลักโหราศาสตร์ไทยโบราณ</p>
          <span class="card-tag">大限運程</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

      <a href="tangduang.html#daohern" class="service-card" id="svc-daohern">
        <div class="card-icon">
          <span class="icon-zh">玄</span>
        </div>
        <div class="card-body">
          <h3>ดาวเหิน</h3>
          <p>ฐานและทิศทางพลังงานฮวงจุ้ยตามดาวบินประจำปี</p>
          <span class="card-tag">飛星風水</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

      <a href="tangduang.html#bazi" class="service-card" id="svc-bazi">
        <div class="card-icon">
          <span class="icon-zh">命</span>
        </div>
        <div class="card-body">
          <h3>โป๊ยหยี่สี่เถี่ยว</h3>
          <p>ดวงชะตาจีนปาจื้อ 8 อักษร วิเคราะห์ชะตาชีวิตเชิงลึก</p>
          <span class="card-tag">八字命理</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

      <a href="tangduang.html#duthit" class="service-card service-card--cta" id="svc-duthit">
        <div class="card-icon">
          <span class="icon-zh">向</span>
        </div>
        <div class="card-body">
          <h3>ดูทิศฤกษ์ยาม</h3>
          <p>ตารางหาทิศทางมงคลและยามดีรายวัน สำหรับออกเดินทางหรือทำธุรกิจ</p>
          <span class="card-tag">擇日擇方</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

    </div>
  </div>
</section>`;

const newContent = content.substring(0, startMarker) + newBlock + content.substring(endPos);
fs.writeFileSync('index.html', newContent, 'utf8');
console.log('Done! index.html updated successfully.');
