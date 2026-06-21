const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_KEY = process.env.ADMIN_KEY || 'sinsae2568';

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'POST') {
    const { username, password } = req.body;
    
    if (username === ADMIN_USER && password === ADMIN_KEY) {
      // In a real app, you'd use JWT. Here we return a success status
      // because the frontend relies on sending the ADMIN_KEY as a token.
      return res.status(200).json({ ok: true });
    } else {
      return res.status(401).json({ error: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' });
    }
  }

  res.status(405).json({ error: 'Method not allowed' });
};
