const fs = require('fs');
const path = require('path');

// The services section to insert before footer
const servicesSection = `
<!-- ✦ SERVICES PRE-FOOTER ✦ -->
<section class="services section" id="services-footer" style="padding:4rem 0; background:var(--cream, #FFF9E6);">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">บริการของเรา</div>
      <h2 class="section-title">ศาสตร์แห่งโชคชะตา<br/><span>ที่ครบครัน</span></h2>
      <p class="section-desc">รวมองค์ความรู้โหราศาสตร์จีน-ไทยชั้นสูงไว้ในที่เดียว</p>
    </div>
    <div class="services-grid">

      <a href="chinese-astrology.html" class="service-card" id="svc-footer-chinese">
        <div class="card-icon"><span class="icon-zh">命</span></div>
        <div class="card-body">
          <h3>โหราศาสตร์จีน</h3>
          <p>ปาจื้อ ชะตา 8 ตัวอักษร วิเคราะห์ดาวมงคล-ร้าย ธาตุ 5 ประการ ดวงชะตาตามวันเกิด</p>
          <span class="card-tag">八字命理</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

      <a href="thai-astrology.html" class="service-card" id="svc-footer-thai">
        <div class="card-icon"><span class="icon-zh">星</span></div>
        <div class="card-body">
          <h3>โหราศาสตร์ไทย</h3>
          <p>ลัคนา ดาวพระเคราะห์ ราศี ฤกษ์มงคล วันดีคืนดี การพยากรณ์ตามหลักโบราณ</p>
          <span class="card-tag">โหราไทย</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

      <a href="iching.html" class="service-card" id="svc-footer-iching">
        <div class="card-icon"><span class="icon-zh">易</span></div>
        <div class="card-body">
          <h3>อี้จิง 易經</h3>
          <p>ทำนายด้วยหยินหยาง 64 กวา คัมภีร์แห่งการเปลี่ยนแปลง วิเคราะห์เหตุการณ์ชีวิต</p>
          <span class="card-tag">易經占卜</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

      <a href="fengshui.html" class="service-card" id="svc-footer-fengshui">
        <div class="card-icon"><span class="icon-zh">風</span></div>
        <div class="card-body">
          <h3>ฮวงจุ้ย 風水</h3>
          <p>วิเคราะห์พลังงานที่อยู่อาศัย ออฟฟิศ แก้ฮวงจุ้ย จัดวางบ้านตามหลักโบราณ</p>
          <span class="card-tag">風水堪輿</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

      <a href="lucky-colors.html" class="service-card" id="svc-footer-colors">
        <div class="card-icon"><span class="icon-zh">色</span></div>
        <div class="card-body">
          <h3>คู่สีมงคล</h3>
          <p>สีมงคลตามวันเกิด ราศี ธาตุ เพิ่มโชคลาภ สุขภาพ ความรัก การงาน</p>
          <span class="card-tag">五行顏色</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

      <a href="chinese-zodiac.html" class="service-card" id="svc-footer-zodiac">
        <div class="card-icon"><span class="icon-zh">生</span></div>
        <div class="card-body">
          <h3>ราศีจีน 12 นักษัตร</h3>
          <p>ลักษณะนิสัย ความเข้ากันได้ ดวงปีนี้ ความรัก การงาน สุขภาพ โชคลาภ</p>
          <span class="card-tag">十二生肖</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

      <a href="numerology.html" class="service-card" id="svc-footer-num">
        <div class="card-icon"><span class="icon-zh">數</span></div>
        <div class="card-body">
          <h3>เลขมงคลจีน</h3>
          <p>วิเคราะห์เลขมงคล ทะเบียนรถ เบอร์โทร บ้านเลขที่ ตามหลักโหราศาสตร์</p>
          <span class="card-tag">數字命理</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

      <a href="consult.html" class="service-card service-card--cta" id="svc-footer-consult">
        <div class="card-icon"><span class="icon-zh">問</span></div>
        <div class="card-body">
          <h3>ปรึกษาซินแสโดยตรง</h3>
          <p>นัดหมายพบซินแสหวางโดยตรง ทั้งออนไลน์และพบปะ รับคำแนะนำเฉพาะตัว</p>
          <span class="card-tag">個人諮詢</span>
        </div>
        <div class="card-arrow">→</div>
      </a>

    </div>
  </div>
</section>

`;

// Pages that need the services section before footer
// (exclude index.html since it already has the section)
const targetFiles = [
  'blog.html',
  'blog-detail.html',
  'about.html',
  'chinese-astrology.html',
  'chinese-zodiac.html',
  'consult.html',
  'contact.html',
  'fengshui.html',
  'iching.html',
  'lucky-colors.html',
  'numerology.html',
  'privacy.html',
  'terms.html',
  'thai-astrology.html',
  'tangduang.html',
];

// Remove existing services-footer section if already inserted (idempotent)
const existingRegex = /\n?<!-- ✦ SERVICES PRE-FOOTER ✦ -->[\s\S]*?<\/section>\n\n/g;

// Pattern to match <!-- ✦ FOOTER ✦ --> or just <footer
const footerMarker = /<!-- ✦ FOOTER ✦ -->\n<footer/;

let updated = 0;
for (const file of targetFiles) {
  if (!fs.existsSync(file)) { console.log('SKIP (not found): ' + file); continue; }
  let content = fs.readFileSync(file, 'utf8');
  // Remove any existing insertion first
  content = content.replace(existingRegex, '\n');
  // Insert before footer marker
  if (footerMarker.test(content)) {
    content = content.replace(footerMarker, servicesSection + '<!-- ✦ FOOTER ✦ -->\n<footer');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated: ' + file);
    updated++;
  } else {
    console.log('SKIP (footer marker not found): ' + file);
  }
}
console.log(`\nDone. Updated ${updated} files.`);
