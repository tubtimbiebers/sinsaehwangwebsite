// api/categories/[name].js
const supabase = require('../../lib/supabase');
const ADMIN_KEY = process.env.ADMIN_KEY || 'sinsae2568';

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Admin-Key');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'DELETE') return res.status(405).json({ error: 'Method not allowed' });
  if (req.headers['x-admin-key'] !== ADMIN_KEY) return res.status(401).json({ error: 'Unauthorized' });

  const name = decodeURIComponent(req.query.name);
  const { error } = await supabase.from('categories').delete().eq('name', name);
  if (error) return res.status(500).json({ error: error.message });
  return res.json({ ok: true });
};
