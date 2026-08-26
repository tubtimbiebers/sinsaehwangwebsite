// api/contact-page.js — อ่าน/บันทึกข้อมูลหน้าติดต่อ (เก็บไว้ใน homepage table ช่อง contactPage)
const supabase = require('../lib/supabase');
const ADMIN_KEY = process.env.ADMIN_KEY || 'sinsae2568';

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Admin-Key');
  if (req.method === 'OPTIONS') return res.status(200).end();

  // GET — ดึงข้อมูลหน้าติดต่อ
  if (req.method === 'GET') {
    const { data } = await supabase.from('homepage').select('content').eq('id', 1).single();
    const contactPage = data?.content?.contactPage || getDefaults();
    return res.json(contactPage);
  }

  // PUT — บันทึกข้อมูล (ต้องล็อกอิน)
  if (req.method === 'PUT') {
    if (req.headers['x-admin-key'] !== ADMIN_KEY) return res.status(401).json({ error: 'Unauthorized' });

    // โหลด content ปัจจุบัน
    const { data: existing } = await supabase.from('homepage').select('content').eq('id', 1).single();
    const currentContent = existing?.content || {};

    // อัปเดตเฉพาะ contactPage
    const updatedContent = { ...currentContent, contactPage: req.body };

    let error;
    if (existing) {
      ({ error } = await supabase.from('homepage').update({ content: updatedContent, updated_at: new Date().toISOString() }).eq('id', 1));
    } else {
      ({ error } = await supabase.from('homepage').insert({ id: 1, content: updatedContent }));
    }

    if (error) return res.status(500).json({ error: error.message });
    return res.json({ ok: true });
  }

  res.status(405).json({ error: 'Method not allowed' });
};

function getDefaults() {
  return {
    address: '4 Thian Talay 22 Yaek 16, Tha Kham, Bang Khun Thian, Bangkok 10150',
    addressTh: '4 เทียนทะเล 22 แยก 16 แขวงท่าข้าม เขตบางขุนเทียน กรุงเทพมหานคร 10150',
    phone: '085-514-5459',
    email: 'sinsaehwang@yahoo.com',
    lineId: 'sawang',
    lineUrl: '',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.864387817757!2d100.52848971534934!3d13.726613990363695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298d254b1f48f%3A0xe5a3c9be0768798e!2z4LiW4LiZ4LiZ4Liq4Li14Lil4Lih!5e0!3m2!1sth!2sth!4v1624021234567!5m2!1sth!2sth',
    openHours: 'จันทร์ – เสาร์ 09:00 – 18:00 น.',
    heroTitle: 'ติดต่อเรา',
    heroSubtitle: 'สอบถามการนัดหมายและที่ตั้งสำนักงาน',
    heroDesc: 'สำนักงานซินแสหวาง ยินดีต้อนรับทุกท่านด้วยคำแนะนำและทางออกชีวิต'
  };
}
