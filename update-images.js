const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function main() {
  const coversDir = path.join(__dirname, 'images', 'blog', 'covers');
  const files = fs.readdirSync(coversDir);
  
  let count = 0;
  for (let i = 1; i <= 172; i++) {
    const padded = String(i).padStart(3, '0');
    const prefix = `article-${padded}`;
    const file = files.find(f => f.startsWith(prefix));
    
    if (file) {
      const imagePath = `images/blog/covers/${file}`;
      const { error } = await supabase.from('articles').update({ image: imagePath }).eq('id', i);
      if (error) {
        console.error(`❌ Error updating ID ${i}:`, error.message);
      } else {
        count++;
      }
    }
  }
  console.log(`\n✅ อัปเดตที่อยู่รูปภาพเสร็จสิ้นทั้งหมด ${count} รายการ!`);
}

main().catch(err => console.error(err));
