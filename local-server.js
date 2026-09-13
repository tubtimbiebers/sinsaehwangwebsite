'use strict';

const express = require('express');
const fs      = require('fs');
const path    = require('path');
const multer  = require('multer');

const app      = express();
const PORT     = process.env.PORT || 3008;
const ROOT     = __dirname;
const DATA_DIR = path.join(ROOT, 'data');

// ── ensure directories exist ────────────────────────────────────────────────
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
const UPLOAD_DIR = path.join(ROOT, 'images', 'blog', 'covers');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

process.on('uncaughtException', err => console.error('Uncaught Exception:', err));
process.on('unhandledRejection', err => console.error('Unhandled Rejection:', err));

const ARTICLES_FILE      = path.join(DATA_DIR, 'articles.json');
const HOMEPAGE_FILE      = path.join(DATA_DIR, 'homepage.json');
const CATEGORIES_FILE    = path.join(DATA_DIR, 'categories.json');
const CONSULTATIONS_FILE = path.join(DATA_DIR, 'consultations.json');
const CUSTOMERS_FILE     = path.join(DATA_DIR, 'customers.json');
const APPOINTMENTS_FILE  = path.join(DATA_DIR, 'appointments.json');
const TESTIMONIALS_FILE  = path.join(DATA_DIR, 'testimonials.json');

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

// ═══════════════════════════════════════════════════════════════════════════
// GENERIC CRUD FACTORY  (GET /api/:col, GET /api/:col/:id, POST, PUT, DELETE)
// ═══════════════════════════════════════════════════════════════════════════

function crudRoutes(route, file) {
  // GET all
  app.get(route, (_req, res) => res.json(readJSON(file, [])));

  // GET single
  app.get(route + '/:id', (req, res) => {
    const items = readJSON(file, []);
    const item = items.find(i => String(i.id) === req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json(item);
  });

  // POST create
  app.post(route, requireAuth, (req, res) => {
    const items = readJSON(file, []);
    const newItem = { id: Date.now(), ...req.body, createdAt: new Date().toISOString() };
    items.unshift(newItem);
    writeJSON(file, items);
    res.status(201).json(newItem);
  });

  // PUT update
  app.put(route + '/:id', requireAuth, (req, res) => {
    const items = readJSON(file, []);
    const idx = items.findIndex(i => String(i.id) === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    items[idx] = { ...items[idx], ...req.body, updatedAt: new Date().toISOString() };
    writeJSON(file, items);
    res.json(items[idx]);
  });

  // DELETE
  app.delete(route + '/:id', requireAuth, (req, res) => {
    let items = readJSON(file, []);
    const before = items.length;
    items = items.filter(i => String(i.id) !== req.params.id);
    if (items.length === before) return res.status(404).json({ error: 'Not found' });
    writeJSON(file, items);
    res.json({ ok: true });
  });
}

crudRoutes('/api/consultations', CONSULTATIONS_FILE);
crudRoutes('/api/customers',     CUSTOMERS_FILE);
crudRoutes('/api/appointments',  APPOINTMENTS_FILE);
crudRoutes('/api/testimonials',  TESTIMONIALS_FILE);

const server = app.listen(3333, () => {
  console.log('\n╔═══════════════════════════════════════════╗');
  console.log('║   🌟 ซินแสหวาง Backend Server            ║');
  console.log('╚═══════════════════════════════════════════╝');
  console.log('   Status:', server.listening, server.address());
  const addr = server.address();
  const actualPort = addr ? addr.port : 3008;
  console.log(`   เว็บไซต์ : http://localhost:${actualPort}`);
  console.log(`   Admin   : http://localhost:${actualPort}/admin/`);
  console.log('   กด Ctrl+C เพื่อหยุด\n');
});

server.on('error', (err) => {
  console.error('[SERVER ERROR]', err);
});

// Keep event loop alive in background environments
setInterval(() => {}, 60000);

