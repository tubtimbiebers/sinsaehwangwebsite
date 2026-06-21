/**
 * migrate-to-supabase.js
 * รัน: node migrate-to-supabase.js
 * สคริปต์นี้จะย้ายข้อมูลทั้งหมดจาก data/articles.json และ data/categories.json → Supabase
 */
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// ─── CONFIG ─────────────────────────────────────────────────────────────────
// ใส่ค่าจาก Supabase Dashboard → Settings → API
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('\n❌ กรุณาตั้งค่า environment variables:\n');
  console.error('  $env:SUPABASE_URL="https://xxxx.supabase.co"');
  console.error('  $env:SUPABASE_SERVICE_KEY="eyJhbGci..."\n');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

function readJSON(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch { return fallback; }
}

async function migrateArticles() {
  const raw = readJSON(path.join(__dirname, 'data', 'articles.json'), []);
  if (!raw.length) { console.log('⚠️  ไม่มีบทความ'); return; }

  // แปลงโครงสร้างจาก JSON → Supabase columns
  const articles = raw.map((a, i) => ({
    title:     a.title     || 'ไม่มีหัวข้อ',
    cat:       a.cat       || 'Uncategorized',
    status:    a.status    || 'เผยแพร่',
    content:   a.content   || '',
    excerpt:   a.excerpt   || '',
    meta_desc: a.metaDesc  || '',
    keywords:  a.keywords  || '',
    image:     a.image     || '',
    author:    a.author    || 'ซินแสหวาง',
    date:      a.date      || '',
    date_iso:  a.dateISO   || null,
    created_at: a.createdAt || a.dateISO
      ? (a.createdAt || (a.dateISO + 'T00:00:00Z'))
      : new Date(Date.now() - (raw.length - i) * 1000).toISOString()
  }));

  console.log(`\n📦 กำลัง Migrate บทความ ${articles.length} รายการ...`);

  // แบ่งเป็น batch ละ 50 เพื่อไม่ให้ request ใหญ่เกินไป
  const BATCH = 50;
  let totalInserted = 0;
  for (let i = 0; i < articles.length; i += BATCH) {
    const batch = articles.slice(i, i + BATCH);
    const { data, error } = await supabase.from('articles').insert(batch).select();
    if (error) {
      console.error(`❌ Batch ${Math.floor(i/BATCH)+1} ล้มเหลว:`, error.message);
    } else {
      totalInserted += data.length;
      console.log(`  ✅ Batch ${Math.floor(i/BATCH)+1}: เพิ่ม ${data.length} รายการ (รวม ${totalInserted})`);
    }
  }
  console.log(`\n🎉 Migration เสร็จ! บทความทั้งหมด ${totalInserted} รายการ\n`);
}

async function migrateCategories() {
  const cats = readJSON(path.join(__dirname, 'data', 'categories.json'), []);
  if (!cats.length) { console.log('⚠️  ไม่มีหมวดหมู่'); return; }

  console.log(`📂 กำลัง Migrate หมวดหมู่ ${cats.length} รายการ...`);
  const { error } = await supabase.from('categories').upsert(
    cats.map(c => ({ name: c.name, icon: c.icon || '文' })),
    { onConflict: 'name' }
  );
  if (error) console.error('❌ Categories:', error.message);
  else console.log(`  ✅ หมวดหมู่ ${cats.length} รายการ เสร็จสิ้น\n`);
}

async function main() {
  console.log('\n╔══════════════════════════════════════════════╗');
  console.log('║   📤 Sinsae Hwang → Supabase Migration Tool  ║');
  console.log('╚══════════════════════════════════════════════╝');
  console.log(`   URL: ${SUPABASE_URL}\n`);

  // ตรวจสอบการเชื่อมต่อ
  const { error: connErr } = await supabase.from('articles').select('id').limit(1);
  if (connErr && connErr.code !== 'PGRST116') {
    console.error('❌ เชื่อมต่อ Supabase ไม่ได้:', connErr.message);
    console.error('\n⚠️  ตรวจสอบว่ารัน supabase-schema.sql แล้วหรือยัง?\n');
    process.exit(1);
  }

  // ตรวจสอบว่ามีข้อมูลอยู่แล้วไหม
  const { data: existing } = await supabase.from('articles').select('id', { count: 'exact', head: true });
  const count = existing ? existing.length : 0;
  if (count > 0) {
    console.log(`⚠️  มีข้อมูล ${count} รายการใน Supabase อยู่แล้ว`);
    console.log('   ถ้าต้องการเพิ่มซ้ำ กรุณาลบข้อมูลเก่าออกก่อน (DELETE FROM articles;)\n');
  }

  await migrateCategories();
  await migrateArticles();
}

main().catch(err => { console.error('❌ Error:', err); process.exit(1); });
