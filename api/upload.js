// api/upload.js
const supabase = require('../lib/supabase');
const { formidable } = require('formidable');
const fs = require('fs');

const ADMIN_KEY = process.env.ADMIN_KEY || 'sinsae2568';
const BUCKET = 'blog-covers';
const MAX_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = /^image\/(jpeg|png|webp|gif)$/;

async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Admin-Key');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (req.headers['x-admin-key'] !== ADMIN_KEY) return res.status(401).json({ error: 'Unauthorized' });

  let files;
  try {
    const form = formidable({ maxFileSize: MAX_SIZE });
    [, files] = await form.parse(req);
  } catch (err) {
    return res.status(400).json({ error: 'อัปโหลดไม่สำเร็จ: ' + err.message });
  }

  const file = Array.isArray(files.image) ? files.image[0] : files.image;
  if (!file) return res.status(400).json({ error: 'ไม่พบไฟล์' });
  if (!ALLOWED_TYPES.test(file.mimetype || '')) {
    return res.status(400).json({ error: 'รองรับเฉพาะไฟล์รูปภาพ' });
  }

  const ext = (file.originalFilename || '').match(/\.[a-zA-Z0-9]+$/)?.[0]?.toLowerCase() || '';
  const filename = `upload-${Date.now()}${ext}`;
  const buffer = fs.readFileSync(file.filepath);

  const { error } = await supabase.storage.from(BUCKET).upload(filename, buffer, {
    contentType: file.mimetype,
    upsert: false
  });
  if (error) return res.status(500).json({ error: error.message });

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(filename);
  return res.json({ path: data.publicUrl });
}

handler.config = { api: { bodyParser: false } };
module.exports = handler;
