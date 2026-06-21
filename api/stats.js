// api/stats.js
const supabase = require('../lib/supabase');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Admin-Key');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const [artResult, catResult] = await Promise.all([
    supabase.from('articles').select('status'),
    supabase.from('categories').select('id', { count: 'exact', head: true })
  ]);

  const articles  = artResult.data || [];
  const published = articles.filter(a => a.status === 'เผยแพร่').length;
  const draft     = articles.filter(a => a.status === 'แบบร่าง').length;

  return res.json({ total: articles.length, published, draft, categories: catResult.count || 0 });
};
