// api/categories.js
const supabase = require('../lib/supabase');
const ADMIN_KEY = process.env.ADMIN_KEY || 'sinsae2568';

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Admin-Key');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    const { data, error } = await supabase.from('categories').select('*').order('name');
    if (error) return res.status(500).json({ error: error.message });
    return res.json(data);
  }

  if (req.method === 'POST') {
    if (req.headers['x-admin-key'] !== ADMIN_KEY) return res.status(401).json({ error: 'Unauthorized' });
    const { name, icon } = req.body;
    if (!name) return res.status(400).json({ error: 'name required' });
    const { data, error } = await supabase.from('categories').insert({ name, icon: icon || '文' }).select().single();
    if (error) {
      if (error.code === '23505') return res.status(400).json({ error: 'มีหมวดนี้แล้ว' });
      return res.status(500).json({ error: error.message });
    }
    return res.status(201).json(data);
  }

  res.status(405).json({ error: 'Method not allowed' });
};
