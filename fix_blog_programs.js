const fs = require('fs');

const newSection = `<!-- ✦ DESTINY PROGRAMS ✦ -->
<section class="services section" style="padding:3rem 0; background:var(--cream, #FFF9E6);">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">โปรแกรมตั้งดวง</div>
      <h2 class="section-title">คำนวณดวงชะตา<br/><span>อัจฉริยะ 6 ระบบ</span></h2>
      <p class="section-desc">คลิกที่โปรแกรมเพื่อเข้าใช้งานและคำนวณดวงชะตาทันที</p>
    </div>
    <div class="services-grid">

      <a href="tangduang.html#seven" class="service-card">
        <div class="card-icon"><span class="icon-zh">數</span></div>
        <div class="card-body">
          <h3>เลข ๗ ตัว ๙ ฐาน</h3>
          <p>วิเคราะห์ตัวเลขชะตา 7 ตัวในฐาน 4-11 ตามหลักเลขศาสตร์</p>
          <span class="card-tag">เลข 7 ตัว ฐาน 4-11</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

      <a href="tangduang.html#zodiac" class="service-card">
        <div class="card-icon"><span class="icon-zh">星</span></div>
        <div class="card-body">
          <h3>จักรราศี</h3>
          <p>ราศีจักรและตำแหน่งดาวประจำราศีเกิด วิเคราะห์ดวงแบบตะวันตก</p>
          <span class="card-tag">星盤命理</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

      <a href="tangduang.html#taksamahayuk" class="service-card">
        <div class="card-icon"><span class="icon-zh">運</span></div>
        <div class="card-body">
          <h3>ทักษามหายุค</h3>
          <p>ทักษาและดาวจรเสวยอายุประจำปี ตามหลักโหราศาสตร์ไทย</p>
          <span class="card-tag">大限運程</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

      <a href="tangduang.html#daohern" class="service-card">
        <div class="card-icon"><span class="icon-zh">玄</span></div>
        <div class="card-body">
          <h3>ดาวเหิน</h3>
          <p>ฐานและทิศทางพลังงานฮวงจุ้ยตามดาวบินประจำปี</p>
          <span class="card-tag">飛星風水</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

      <a href="tangduang.html#bazi" class="service-card">
        <div class="card-icon"><span class="icon-zh">命</span></div>
        <div class="card-body">
          <h3>โป๊ยหยี่สี่เถี่ยว</h3>
          <p>ดวงชะตาจีนปาจื้อ 8 อักษร วิเคราะห์ชะตาชีวิตเชิงลึก</p>
          <span class="card-tag">八字命理</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

      <a href="tangduang.html#duthit" class="service-card">
        <div class="card-icon"><span class="icon-zh">向</span></div>
        <div class="card-body">
          <h3>ดูทิศฤกษ์ยาม</h3>
          <p>ตารางหาทิศทางมงคลและยามดีรายวัน สำหรับออกเดินทาง</p>
          <span class="card-tag">擇日擇方</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

    </div>
  </div>
</section>`;

// Regex to match the blog-programs-menu div block
const regex = /<!-- ✦ DESTINY PROGRAMS SUB-MENU ✦ -->\s*<div class="blog-programs-menu">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g;

['blog.html', 'blog-detail.html'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (regex.test(content)) {
    content = content.replace(regex, newSection);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  } else {
    console.log('Pattern not found in ' + file);
  }
  // Reset regex lastIndex
  regex.lastIndex = 0;
});
