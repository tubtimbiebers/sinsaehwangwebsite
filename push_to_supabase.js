require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

async function main() {
  const data = JSON.parse(fs.readFileSync('./data/articles.json', 'utf8'));
  console.log(`Found ${data.length} articles to push.`);

  const payload = data.map(item => {
    let status = item.status;
    if (status !== 'เผยแพร่' && status !== 'แบบร่าง') {
      status = 'เผยแพร่'; // Default fallback
    }
    return {
      id: item.id,
      title: item.title || 'ไม่มีหัวข้อ',
      cat: item.cat || 'Uncategorized',
      status: status,
      content: item.content || '',
      excerpt: item.excerpt || '',
      meta_desc: item.metaDesc || item.meta_desc || '',
      keywords: item.keywords || '',
      image: item.image || '',
      author: item.author || 'ซินแสหวาง',
      date: item.date || '',
      date_iso: item.dateISO || item.date_iso || null
    };
  });

  console.log('Pushing to Supabase...');
  const { data: res, error } = await supabase
    .from('articles')
    .upsert(payload, { onConflict: 'id' });

  if (error) {
    console.error('Error inserting data:', error);
  } else {
    console.log('Successfully pushed articles to Supabase!');
  }
}

main();
