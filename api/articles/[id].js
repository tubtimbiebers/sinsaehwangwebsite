// api/articles/[id].js
const supabase = require('../../lib/supabase');
const ADMIN_KEY = process.env.ADMIN_KEY || 'sinsae2568';

function requireAuth(req, res) {
  if (req.headers['x-admin-key'] !== ADMIN_KEY) { res.status(401).json({ error: 'Unauthorized' }); return false; }
  return true;
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Admin-Key');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { id } = req.query;

  if (req.method === 'GET') {
    const { data, error } = await supabase.from('articles').select('*').eq('id', id).single();
    if (error) return res.status(404).json({ error: 'Not found' });
    return res.json(data);
  }

  if (req.method === 'PUT') {
    if (!requireAuth(req, res)) return;
    const updates = { updated_at: new Date().toISOString() };
    if (req.body.title    !== undefined) updates.title     = req.body.title;
    if (req.body.cat      !== undefined) updates.cat       = req.body.cat;
    if (req.body.status   !== undefined) updates.status    = req.body.status;
    if (req.body.content  !== undefined) updates.content   = req.body.content;
    if (req.body.excerpt  !== undefined) updates.excerpt   = req.body.excerpt;
    if (req.body.metaDesc !== undefined) updates.meta_desc = req.body.metaDesc;
    if (req.body.keywords !== undefined) updates.keywords  = req.body.keywords;
    if (req.body.image    !== undefined) updates.image     = req.body.image;
    const { data, error } = await supabase.from('articles').update(updates).eq('id', id).select().single();
    if (error) return res.status(500).json({ error: error.message });
    return res.json(data);
  }

  if (req.method === 'DELETE') {
    if (!requireAuth(req, res)) return;
    const { error } = await supabase.from('articles').delete().eq('id', id);
    if (error) return res.status(500).json({ error: error.message });
    return res.json({ ok: true });
  }

  res.status(405).json({ error: 'Method not allowed' });
};
