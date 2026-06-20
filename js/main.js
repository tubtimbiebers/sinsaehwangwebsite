/* ═══════════════════════════════════════════════════════════════
   ซินแสหวาง · Sinsae Hwang · 星師皇
   Main JavaScript — Interactions, Animations, Data
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ── DATA ── */
const ZODIAC_ANIMALS = [
  { emoji:'🐭', name:'หนู', zh:'子', year:2020, element:'น้ำ', lucky:'น้ำเงิน ดำ' },
  { emoji:'🐮', name:'วัว', zh:'丑', year:2021, element:'ดิน', lucky:'เหลือง น้ำตาล' },
  { emoji:'🐯', name:'เสือ', zh:'寅', year:2022, element:'ไม้', lucky:'เขียว' },
  { emoji:'🐰', name:'กระต่าย', zh:'卯', year:2023, element:'ไม้', lucky:'เขียว ขาว' },
  { emoji:'🐲', name:'มังกร', zh:'辰', year:2024, element:'ดิน', lucky:'เหลือง ทอง' },
  { emoji:'🐍', name:'งู', zh:'巳', year:2025, element:'ไฟ', lucky:'แดง เหลือง' },
  { emoji:'🐴', name:'ม้า', zh:'午', year:2026, element:'ไฟ', lucky:'แดง ส้ม' },
  { emoji:'🐏', name:'แพะ', zh:'未', year:2027, element:'ดิน', lucky:'เขียว แดง' },
  { emoji:'🐵', name:'ลิง', zh:'申', year:2016, element:'ทอง', lucky:'ขาว ทอง' },
  { emoji:'🐔', name:'ไก่', zh:'酉', year:2017, element:'ทอง', lucky:'ทอง เหลือง' },
  { emoji:'🐶', name:'หมา', zh:'戌', year:2018, element:'ดิน', lucky:'แดง เขียว' },
  { emoji:'🐷', name:'หมู', zh:'亥', year:2019, element:'น้ำ', lucky:'เหลือง น้ำเงิน' },
];

const HEXAGRAMS = [
  { num:1,  symbol:'䷀', zh:'乾', th:'เฉียน – ฟ้า',   meaning:'ความแข็งแกร่ง พลังสร้างสรรค์ ผู้นำ ความมุ่งมั่น' },
  { num:2,  symbol:'䷁', zh:'坤', th:'คุน – ดิน',    meaning:'ความอ่อนน้อม ยืดหยุ่น รับ และเลี้ยงดู' },
  { num:3,  symbol:'䷂', zh:'屯', th:'ตุน – ยากเย็น', meaning:'เริ่มต้นที่ยากลำบาก แต่มีศักยภาพ' },
  { num:4,  symbol:'䷃', zh:'蒙', th:'เมิ้ง – เยาว์', meaning:'การเรียนรู้ ขอคำแนะนำจากผู้รู้' },
  { num:5,  symbol:'䷄', zh:'需', th:'ซวี่ – รอคอย', meaning:'ความอดทน เวลาที่เหมาะสมจะมาถึง' },
  { num:6,  symbol:'䷅', zh:'訟', th:'ซ่ง – ขัดแย้ง', meaning:'ความขัดแย้ง ระวังการฟ้องร้อง' },
  { num:7,  symbol:'䷆', zh:'師', th:'ชือ – กองทัพ', meaning:'วินัย การจัดระเบียบ ผู้นำที่แข็งแกร่ง' },
  { num:8,  symbol:'䷇', zh:'比', th:'ปี้ – ร่วมมือ', meaning:'การรวมกัน พันธมิตร ความสามัคคี' },
];

const BLOG_POSTS = [
  {
    icon:'命', cat:'โหราศาสตร์จีน',
    title:'ปาจื้อคืออะไร? ศาสตร์ 8 ตัวอักษรแห่งโชคชะตา',
    excerpt:'ปาจื้อ (八字) หรือ BaZi เป็นศาสตร์โหราศาสตร์จีนที่ใช้วันเวลาเกิดเพื่อวิเคราะห์ชะตาชีวิต...',
    date:'15 มิ.ย. 2568', read:'5 นาที'
  },
  {
    icon:'易', cat:'อี้จิง',
    title:'64 กวาในอี้จิง — ความหมายและการทำนาย',
    excerpt:'อี้จิงแบ่งออกเป็น 64 กวา แต่ละกวามีความหมายเฉพาะตัวที่สะท้อนสถานการณ์ชีวิต...',
    date:'10 มิ.ย. 2568', read:'8 นาที'
  },
  {
    icon:'風', cat:'ฮวงจุ้ย',
    title:'5 หลักการฮวงจุ้ยบ้านที่ควรรู้ก่อนย้ายเข้า',
    excerpt:'การจัดบ้านตามหลักฮวงจุ้ยไม่ใช่แค่เรื่องความเชื่อ แต่มีหลักการทางพลังงาน...',
    date:'5 มิ.ย. 2568', read:'6 นาที'
  },
];

const ORACLE_DATA = {
  daily: [
    { stars:'★★★★★', text:'วันเยี่ยมสำหรับการเริ่มต้นใหม่ พลังงานดาวสนับสนุน เหมาะแก่การลงนามสัญญาและเจรจาธุรกิจ' },
    { stars:'★★★★☆', text:'วันนี้ดาวมงคลอยู่ทิศตะวันออก เหมาะแก่การพบปะผู้คน ริเริ่มสิ่งใหม่ พลังงานเป็นบวก' },
    { stars:'★★★☆☆', text:'วันกลางๆ ไม่ดีไม่เสีย เน้นทำงานประจำ ไม่ควรตัดสินใจใหญ่' },
    { stars:'★★★★☆', text:'ดวงดีในด้านความสร้างสรรค์ วันดีสำหรับงานศิลปะ การออกแบบ และความคิดใหม่' },
    { stars:'★★★★★', text:'วันมหามงคล ดาวทั้ง 5 ธาตุสอดคล้องกัน เหมาะแก่กิจการทุกอย่าง' },
    { stars:'★★★☆☆', text:'ระวังความขัดแย้งกับเพื่อนร่วมงาน เน้นใจเย็น ฟังมากกว่าพูด' },
    { stars:'★★★★☆', text:'วันแห่งโอกาส เปิดตาเปิดใจรับสิ่งใหม่ โชคดีจากคนต่างถิ่น' },
  ]
};

/* ── UTILITY ── */
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => [...ctx.querySelectorAll(sel)];
const dayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now - start) / 86400000);
};

/* ── LOADER ── */
function initLoader() {
  const loader = $('#loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 1200);
  });
  // Fallback
  setTimeout(() => loader.classList.add('hidden'), 3500);
}

/* ── PARTICLE CANVAS ── */
function initParticles() {
  const canvas = $('#particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let W, H;
  const COLORS = ['rgba(201,146,42,', 'rgba(232,184,75,', 'rgba(139,26,26,', 'rgba(255,255,255,'];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.1,
      alpha: Math.random() * 0.5 + 0.1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      life: Math.random() * 200 + 100,
      age: 0,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: 80 }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy; p.age++;
      if (p.age > p.life || p.y < -10) particles[i] = createParticle();
      const fade = p.age < 20 ? p.age / 20 : p.age > p.life - 20 ? (p.life - p.age) / 20 : 1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color}${p.alpha * fade})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', () => { resize(); });
}

/* ── NAVBAR ── */
function initNavbar() {
  const navbar = $('#navbar');
  const toggle = $('#navToggle');
  const menu   = $('#navMenu');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    $('#backToTop')?.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  toggle?.addEventListener('click', () => {
    menu?.classList.toggle('open');
    const spans = $$('span', toggle);
    if (menu?.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close menu on link click
  $$('.nav-link', menu || document).forEach(link => {
    link.addEventListener('click', () => {
      menu?.classList.remove('open');
    });
  });

  // Active link on scroll
  const sections = $$('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    $$('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`
        || (link.getAttribute('href') === 'index.html' && current === ''));
    });
  }, { passive: true });
}

/* ── BACK TO TOP ── */
function initBackToTop() {
  const btn = $('#backToTop');
  btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── COUNTER ANIMATION ── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString('th-TH');
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ── SCROLL REVEAL ── */
function initScrollReveal() {
  const revealEls = $$('.reveal, .reveal-left, .reveal-right');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Counter
        $$('[data-target]', entry.target).forEach(animateCounter);
        const counterEls = entry.target.matches('[data-target]') ? [entry.target] : [];
        counterEls.forEach(animateCounter);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => obs.observe(el));

  // Counters in hero
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $$('[data-target]').forEach(animateCounter);
        counterObs.disconnect();
      }
    });
  }, { threshold: 0.3 });
  const heroStats = $('.hero-stats');
  if (heroStats) counterObs.observe(heroStats);
}

/* ── ADD REVEAL CLASSES ── */
function addRevealClasses() {
  const map = [
    ['.service-card',      'reveal'],
    ['.element-card',      'reveal'],
    ['.oracle-card',       'reveal'],
    ['.blog-card',         'reveal'],
    ['.zodiac-left',       'reveal-left'],
    ['.zodiac-right',      'reveal-right'],
    ['.iching-intro',      'reveal-left'],
    ['.iching-hexagram-display', 'reveal-right'],
    ['.fengshui-content',  'reveal-right'],
    ['.compass-container', 'reveal-left'],
    ['.section-header',    'reveal'],
    ['.cta-text',          'reveal-left'],
    ['.cta-actions',       'reveal-right'],
  ];
  map.forEach(([sel, cls]) => {
    $$(sel).forEach((el, i) => {
      el.classList.add(cls);
      if (i < 4) el.classList.add(`reveal-delay-${i+1}`);
    });
  });
}

/* ── ZODIAC LIST ── */
function initZodiac() {
  const list = $('#zodiacList');
  if (!list) return;
  ZODIAC_ANIMALS.forEach((z, i) => {
    const btn = document.createElement('button');
    btn.className = 'zodiac-badge';
    btn.innerHTML = `<span class="z-emoji">${z.emoji}</span>${z.name}`;
    btn.id = `zodiac-${z.name}`;
    btn.addEventListener('click', () => {
      $$('.zodiac-badge').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Update wheel year display
      const yr = $('#wheelYear');
      const lbl = yr?.nextElementSibling;
      if (yr) yr.textContent = z.year + 543;
      if (lbl) lbl.textContent = `ปี${z.name}${z.element}`;
    });
    list.appendChild(btn);
  });
}

/* ── ICHING HEXAGRAM ── */
function initIching() {
  const btn = $('#nextHexBtn');
  let currentIdx = 0;
  if (!btn) return;
  function showHex(idx) {
    const h = HEXAGRAMS[idx];
    const card = $('#hexagramCard');
    if (!card) return;
    card.style.opacity = '0';
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
      $('#hexNum').textContent = h.num;
      $('#hexSymbol').textContent = h.symbol;
      $('#hexNameZh').textContent = h.zh;
      $('#hexNameTh').textContent = h.th;
      $('#hexMeaning').textContent = h.meaning;
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'scale(1)';
    }, 200);
  }
  btn.addEventListener('click', () => {
    currentIdx = (currentIdx + 1) % HEXAGRAMS.length;
    showHex(currentIdx);
  });
}

/* ── ORACLE TODAY ── */
function initOracle() {
  const dateEl = $('#todayDate');
  if (!dateEl) return;
  const now = new Date();
  const thaiMonths = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
  const thaiDay = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัส','ศุกร์','เสาร์'];
  dateEl.textContent = `วัน${thaiDay[now.getDay()]}ที่ ${now.getDate()} ${thaiMonths[now.getMonth()]} พ.ศ. ${now.getFullYear()+543}`;

  // Set oracle based on day of year
  const idx = dayOfYear() % ORACLE_DATA.daily.length;
  const oracle = ORACLE_DATA.daily[idx];
  const starsEl = $('#oracleStars');
  const textEl  = $('#oracleText');
  if (starsEl) starsEl.textContent = oracle.stars;
  if (textEl)  textEl.textContent  = oracle.text;
}

/* ── BLOG POSTS ── */
function initBlog() {
  const grid = $('#blogGrid');
  if (!grid) return;
  BLOG_POSTS.forEach((post, i) => {
    const card = document.createElement('a');
    card.href = `blog-detail.html?id=${i+1}`;
    card.className = 'blog-card';
    card.id = `blog-${i+1}`;
    const thumb = post.image
      ? `<img src="${post.image}" alt="${post.title}" loading="lazy" />`
      : post.icon;
    card.innerHTML = `
      <div class="blog-thumb">${thumb}</div>
      <div class="blog-body">
        <span class="blog-cat">${post.cat}</span>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <div class="blog-meta">
          <span>📅 ${post.date}</span>
          <span>⏱ ${post.read}</span>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

/* ── TESTIMONIALS SLIDER ── */
function initTestimonials() {
  const items = $$('.testimonial-item');
  const dots  = $$('.dot');
  if (!items.length) return;
  let current = 0;
  let interval;

  function show(idx) {
    items.forEach((it, i) => it.classList.toggle('active', i === idx));
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    current = idx;
  }
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(interval);
      show(parseInt(dot.dataset.idx));
      startAuto();
    });
  });
  function startAuto() {
    interval = setInterval(() => show((current + 1) % items.length), 4500);
  }
  startAuto();
}

/* ── COMPASS ANIMATION (CSS) — already handled in CSS, but add hover pause ── */
function initCompass() {
  const compass = $('.compass-outer');
  if (!compass) return;
  compass.addEventListener('mouseenter', () => {
    $$('.compass-ring').forEach(r => r.style.animationPlayState = 'paused');
  });
  compass.addEventListener('mouseleave', () => {
    $$('.compass-ring').forEach(r => r.style.animationPlayState = 'running');
  });
}

/* ── SMOOTH ANCHOR SCROLL ── */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── RING-1 COMPASS TEXT POSITIONING ── */
function positionCompassText() {
  const ring1 = $('.ring-1');
  if (!ring1) return;
  const items = $$('span', ring1);
  items.forEach((span, i) => {
    span.style.position = 'absolute';
    const angle = (i * 45) * Math.PI / 180;
    const r = 145;
    span.style.left = `calc(50% + ${Math.sin(angle)*r}px - 12px)`;
    span.style.top  = `calc(50% - ${Math.cos(angle)*r}px - 12px)`;
    span.style.transform = `rotate(${i*45}deg)`;
  });
  const ring2 = $('.ring-2');
  if (!ring2) return;
  const items2 = $$('span', ring2);
  items2.forEach((span, i) => {
    span.style.position = 'absolute';
    const angle = (i * 45) * Math.PI / 180;
    const r = 80;
    span.style.left = `calc(50% + ${Math.sin(angle)*r}px - 8px)`;
    span.style.top  = `calc(50% - ${Math.cos(angle)*r}px - 8px)`;
    span.style.transform = `rotate(${i*45}deg)`;
    span.style.fontSize = '0.7rem';
  });
}

/* ── ZODIAC WHEEL SEGMENTS LABEL ── */
function initZodiacWheelSegments() {
  const wheel = $('#zodiacWheel');
  if (!wheel) return;
  ZODIAC_ANIMALS.forEach((z, i) => {
    const angle = i * 30;
    const label = document.createElement('span');
    label.textContent = z.emoji;
    label.title = `${z.name} ${z.zh}`;
    label.style.cssText = `
      position: absolute;
      font-size: 1.25rem;
      pointer-events: none;
      left: calc(50% + ${Math.sin(angle * Math.PI / 180) * 140}px - 12px);
      top:  calc(50% - ${Math.cos(angle * Math.PI / 180) * 140}px - 12px);
      animation: wheelRotate 60s linear infinite reverse;
      line-height: 1;
    `;
    wheel.appendChild(label);
  });
}

/* ── NOTIFICATION TOAST ── */
function showToast(msg, type='success') {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed; bottom: 5rem; right: 2rem; z-index: 9000;
    background: ${type === 'success' ? 'var(--crimson)' : '#333'};
    color: white; padding: 0.85rem 1.5rem;
    border-radius: var(--r-md);
    font-size: 0.875rem; font-weight: 600;
    box-shadow: var(--shadow-lg);
    transform: translateX(110%);
    transition: transform 0.3s ease;
    max-width: 300px;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.style.transform = 'translateX(0)');
  setTimeout(() => {
    toast.style.transform = 'translateX(110%)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* ── CONSULT BTN ── */
function initConsultBtn() {
  ['#consultBtn','#heroConsult','#ctaConsultNow'].forEach(id => {
    const el = $(id);
    el?.addEventListener('click', e => {
      // Will navigate to consult.html — just show toast for demo
      if (!$('.consult-form')) {
        e.preventDefault();
        showToast('กรุณารอสักครู่ กำลังโหลดหน้าปรึกษา...');
        setTimeout(() => { window.location.href = 'consult.html'; }, 800);
      }
    });
  });
}

/* ── INIT ALL ── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initParticles();
  initNavbar();
  initBackToTop();
  addRevealClasses();
  initScrollReveal();
  initZodiac();
  initZodiacWheelSegments();
  initIching();
  initOracle();
  initBlog();
  initTestimonials();
  initCompass();
  initSmoothScroll();
  positionCompassText();
  initConsultBtn();
});

/* ── ADMIN MODULE (loaded only on admin pages) ── */
if (document.body.classList.contains('admin-body')) {
  window.AdminModule = {
    init() {
      this.initSidebar();
      this.initStats();
      this.initCharts();
      this.initForms();
    },

    initSidebar() {
      const toggle = $('#adminMenuToggle');
      const sidebar = $('.admin-sidebar');
      toggle?.addEventListener('click', () => sidebar?.classList.toggle('open'));
      // Highlight active
      $$('.admin-nav-item').forEach(item => {
        if (item.href === window.location.href) item.classList.add('active');
      });
    },

    initStats() {
      $$('[data-admin-target]').forEach(el => {
        const target = parseInt(el.dataset.adminTarget);
        let count = 0;
        const step = target / 60;
        const interval = setInterval(() => {
          count = Math.min(count + step, target);
          el.textContent = Math.floor(count).toLocaleString('th-TH');
          if (count >= target) clearInterval(interval);
        }, 16);
      });
    },

    initCharts() {
      // Mini sparkline charts using canvas
      $$('.sparkline').forEach(canvas => {
        const ctx = canvas.getContext('2d');
        const data = JSON.parse(canvas.dataset.values || '[1,2,3,4,3,5,4,6,5,7]');
        const W = canvas.width = canvas.offsetWidth || 120;
        const H = canvas.height = 36;
        const max = Math.max(...data);
        const min = Math.min(...data);
        const step = W / (data.length - 1);
        const color = canvas.dataset.color || '#c9922a';
        ctx.clearRect(0,0,W,H);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.lineJoin = 'round';
        data.forEach((v, i) => {
          const x = i * step;
          const y = H - ((v - min) / (max - min || 1)) * (H - 8) - 4;
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        });
        ctx.stroke();
        // Fill area
        ctx.lineTo((data.length-1)*step, H);
        ctx.lineTo(0, H);
        ctx.closePath();
        ctx.fillStyle = color.replace(')', ',0.12)').replace('rgb','rgba').replace('#','rgba(').replace('rgba(c9922a','rgba(201,146,42');
        ctx.fill();
      });
    },

    initForms() {
      $$('.admin-form form').forEach(form => {
        form.addEventListener('submit', e => {
          e.preventDefault();
          const btn = form.querySelector('[type=submit]');
          const orig = btn.textContent;
          btn.textContent = 'กำลังบันทึก...';
          btn.disabled = true;
          setTimeout(() => {
            btn.textContent = orig;
            btn.disabled = false;
            showToast('บันทึกข้อมูลสำเร็จ ✓');
          }, 1000);
        });
      });
    }
  };
  document.addEventListener('DOMContentLoaded', () => window.AdminModule.init());
}
