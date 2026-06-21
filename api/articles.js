// api/articles.js
const supabase = require('../lib/supabase');
const ADMIN_KEY = process.env.ADMIN_KEY || 'sinsae2568';

function requireAuth(req, res) {
  if (req.headers['x-admin-key'] !== ADMIN_KEY) { res.status(401).json({ error: 'Unauthorized' }); return false; }
  return true;
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Admin-Key');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    let query = supabase.from('articles').select('*').order('created_at', { ascending: false });
    const { status, cat, search } = req.query;
    if (status) query = query.eq('status', status);
    if (cat)    query = query.eq('cat', cat);
    if (search) query = query.ilike('title', `%${search}%`);
    const { data, error } = await query;
    if (error) return res.status(500).json({ error: error.message });
    return res.json(data);
  }

  if (req.method === 'POST') {
    if (!requireAuth(req, res)) return;
    const now = new Date();
    const payload = {
      title:      req.body.title    || 'ไม่มีหัวข้อ',
      cat:        req.body.cat      || 'Uncategorized',
      status:     req.body.status   || 'แบบร่าง',
      content:    req.body.content  || '',
      excerpt:    req.body.excerpt  || '',
      meta_desc:  req.body.metaDesc || '',
      keywords:   req.body.keywords || '',
      image:      req.body.image    || '',
      author:     'ซินแสหวาง',
      date:       now.toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' }),
      date_iso:   now.toISOString().split('T')[0],
      created_at: now.toISOString()
    };
    const { data, error } = await supabase.from('articles').insert(payload).select().single();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data);
  }

  res.status(405).json({ error: 'Method not allowed' });
};
