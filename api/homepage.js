// api/homepage.js
const supabase = require('../lib/supabase');
const ADMIN_KEY = process.env.ADMIN_KEY || 'sinsae2568';

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Admin-Key');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    const { data } = await supabase.from('homepage').select('*').eq('id', 1).single();
    return res.json(data?.content || {});
  }

  if (req.method === 'PUT') {
    if (req.headers['x-admin-key'] !== ADMIN_KEY) return res.status(401).json({ error: 'Unauthorized' });
    const { data: existing } = await supabase.from('homepage').select('id').eq('id', 1).single();
    let error;
    if (existing) {
      ({ error } = await supabase.from('homepage').update({ content: req.body, updated_at: new Date().toISOString() }).eq('id', 1));
    } else {
      ({ error } = await supabase.from('homepage').insert({ id: 1, content: req.body }));
    }
    if (error) return res.status(500).json({ error: error.message });
    return res.json({ ok: true });
  }

  res.status(405).json({ error: 'Method not allowed' });
};
