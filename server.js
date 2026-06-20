'use strict';

const express = require('express');
const fs      = require('fs');
const path    = require('path');
const multer  = require('multer');

const app      = express();
const PORT     = process.env.PORT || 3000;
const ROOT     = __dirname;
const DATA_DIR = path.join(ROOT, 'data');

// ── ensure data dir exists ──────────────────────────────────────────────────
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);

const ARTICLES_FILE  = path.join(DATA_DIR, 'articles.json');
const HOMEPAGE_FILE  = path.join(DATA_DIR, 'homepage.json');
const CATEGORIES_FILE = path.join(DATA_DIR, 'categories.json');

// ── middleware ──────────────────────────────────────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.static(ROOT));

// ── image upload (multer) ───────────────────────────────────────────────────
const imgStorage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, path.join(ROOT, 'images', 'blog', 'covers')),
  filename:    (_req, file,  cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, 'upload-' + Date.now() + ext);
  }
});
const upload = multer({
  storage: imgStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (/image\/(jpeg|png|webp|gif)/.test(file.mimetype)) cb(null, true);
    else cb(new Error('รองรับเฉพาะไฟล์รูปภาพ'));
  }
});

// ── helpers ─────────────────────────────────────────────────────────────────
function readJSON(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch { return fallback; }
}
function writeJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
}

// ── auth middleware (for write operations) ───────────────────────────────────
const ADMIN_KEY = 'sinsae2568';
function requireAuth(req, res, next) {
  const key = req.headers['x-admin-key'];
  if (key !== ADMIN_KEY) return res.status(401).json({ error: 'Unauthorized' });
  next();
}

// ═══════════════════════════════════════════════════════════════════════════
// ARTICLES API
// ═══════════════════════════════════════════════════════════════════════════

// GET /api/articles  → list (with optional ?status=&cat=&search=)
app.get('/api/articles', (req, res) => {
  let articles = readJSON(ARTICLES_FILE, []);
  const { status, cat, search } = req.query;
  if (status) articles = articles.filter(a => a.status === status);
  if (cat)    articles = articles.filter(a => a.cat === cat);
  if (search) articles = articles.filter(a =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );
  res.json(articles);
});

// GET /api/articles/:id  → single article
app.get('/api/articles/:id', (req, res) => {
  const articles = readJSON(ARTICLES_FILE, []);
  const art = articles.find(a => String(a.id) === req.params.id);
  if (!art) return res.status(404).json({ error: 'Not found' });
  res.json(art);
});

// POST /api/articles  → create
app.post('/api/articles', requireAuth, (req, res) => {
  const articles = readJSON(ARTICLES_FILE, []);
  const now = new Date();
  const newArt = {
    id: Date.now(),
    title:    req.body.title    || 'ไม่มีหัวข้อ',
    cat:      req.body.cat      || 'Uncategorized',
    status:   req.body.status   || 'แบบร่าง',
    content:  req.body.content  || '',
    excerpt:  req.body.excerpt  || '',
    metaDesc: req.body.metaDesc || '',
    keywords: req.body.keywords || '',
    image:    req.body.image    || '',
    author:   'ซินแสหวาง',
    date:     now.toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' }),
    dateISO:  now.toISOString().split('T')[0],
    createdAt: now.toISOString()
  };
  articles.unshift(newArt);
  writeJSON(ARTICLES_FILE, articles);
  res.status(201).json(newArt);
});

// PUT /api/articles/:id  → update
app.put('/api/articles/:id', requireAuth, (req, res) => {
  const articles = readJSON(ARTICLES_FILE, []);
  const idx = articles.findIndex(a => String(a.id) === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  articles[idx] = {
    ...articles[idx],
    title:    req.body.title    ?? articles[idx].title,
    cat:      req.body.cat      ?? articles[idx].cat,
    status:   req.body.status   ?? articles[idx].status,
    content:  req.body.content  ?? articles[idx].content,
    excerpt:  req.body.excerpt  ?? articles[idx].excerpt,
    metaDesc: req.body.metaDesc ?? articles[idx].metaDesc,
    keywords: req.body.keywords ?? articles[idx].keywords,
    image:    req.body.image    ?? articles[idx].image,
    updatedAt: new Date().toISOString()
  };
  writeJSON(ARTICLES_FILE, articles);
  res.json(articles[idx]);
});

// DELETE /api/articles/:id
app.delete('/api/articles/:id', requireAuth, (req, res) => {
  let articles = readJSON(ARTICLES_FILE, []);
  const before = articles.length;
  articles = articles.filter(a => String(a.id) !== req.params.id);
  if (articles.length === before) return res.status(404).json({ error: 'Not found' });
  writeJSON(ARTICLES_FILE, articles);
  res.json({ ok: true });
});

// ═══════════════════════════════════════════════════════════════════════════
// HOMEPAGE API
// ═══════════════════════════════════════════════════════════════════════════

app.get('/api/homepage', (_req, res) => {
  res.json(readJSON(HOMEPAGE_FILE, {}));
});

app.put('/api/homepage', requireAuth, (req, res) => {
  writeJSON(HOMEPAGE_FILE, req.body);
  res.json({ ok: true });
});

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORIES API
// ═══════════════════════════════════════════════════════════════════════════

app.get('/api/categories', (_req, res) => {
  res.json(readJSON(CATEGORIES_FILE, []));
});

app.post('/api/categories', requireAuth, (req, res) => {
  const cats = readJSON(CATEGORIES_FILE, []);
  const { name, icon } = req.body;
  if (!name) return res.status(400).json({ error: 'name required' });
  if (cats.find(c => c.name === name)) return res.status(400).json({ error: 'มีหมวดนี้แล้ว' });
  cats.push({ name, icon: icon || '文' });
  writeJSON(CATEGORIES_FILE, cats);
  res.status(201).json({ ok: true });
});

app.delete('/api/categories/:name', requireAuth, (req, res) => {
  let cats = readJSON(CATEGORIES_FILE, []);
  cats = cats.filter(c => c.name !== decodeURIComponent(req.params.name));
  writeJSON(CATEGORIES_FILE, cats);
  res.json({ ok: true });
});

// ═══════════════════════════════════════════════════════════════════════════
// IMAGE UPLOAD
// ═══════════════════════════════════════════════════════════════════════════

app.post('/api/upload', requireAuth, (req, res) => {
  upload.single('image')(req, res, err => {
    if (err) return res.status(400).json({ error: err.message });
    if (!req.file) return res.status(400).json({ error: 'ไม่พบไฟล์' });
    res.json({ path: 'images/blog/covers/' + req.file.filename });
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// STATS (dashboard counts)
// ═══════════════════════════════════════════════════════════════════════════

app.get('/api/stats', (_req, res) => {
  const articles = readJSON(ARTICLES_FILE, []);
  const published = articles.filter(a => a.status === 'เผยแพร่').length;
  const draft     = articles.filter(a => a.status === 'แบบร่าง').length;
  const cats = readJSON(CATEGORIES_FILE, []);
  res.json({ total: articles.length, published, draft, categories: cats.length });
});

// ── start ───────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log('\n╔═══════════════════════════════════════════╗');
  console.log('║   🌟 ซินแสหวาง Backend Server            ║');
  console.log('╚═══════════════════════════════════════════╝');
  console.log(`   เว็บไซต์ : http://localhost:${PORT}`);
  console.log(`   Admin   : http://localhost:${PORT}/admin/login.html`);
  console.log('   กด Ctrl+C เพื่อหยุด\n');
});
