require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// Load the image map
const code = fs.readFileSync('./js/blog-images.js', 'utf8');
const context = { window: {} };
require('vm').runInNewContext(code, context);
const imagesMap = context.window.ARTICLE_IMAGES;

async function main() {
  const ids = Object.keys(imagesMap);
  console.log(`Found ${ids.length} image mappings. Updating Supabase...`);

  let successCount = 0;
  for (const id of ids) {
    const { error } = await supabase
      .from('articles')
      .update({ image: imagesMap[id] })
      .eq('id', id);

    if (error) {
      console.error(`Error updating article ${id}:`, error.message);
    } else {
      successCount++;
    }
  }

  console.log(`Successfully updated ${successCount} articles with their images!`);
}

main();
