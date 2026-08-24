const fs = require('fs');

let htmlContent = fs.readFileSync('blog-detail.html', 'utf8');

// Find the start of the script block
const commentIndex = htmlContent.indexOf('// Detailed articles contents database');
const scriptStart = htmlContent.lastIndexOf('<script>', commentIndex);
const scriptEndStr = '</script>\n\n</body>';
let scriptEnd = htmlContent.indexOf('</script>', commentIndex);
if (scriptEnd !== -1) scriptEnd += '</script>'.length;

const newScript = `<script>
const CATEGORY_ICONS = {
  "โหราศาสตร์จีน": "命",
  "โหราศาสตร์ไทย": "ดวง",
  "อี้จิง": "易",
  "ฮวงจุ้ย": "風",
  "คู่สีมงคล": "色",
  "ราศีจีน": "生",
  "ความสำเร็จ": "功",
  "การเงิน": "財",
  "สอนพับกระดาษ": "紙",
  "เลขศาสตร์": "數",
  "โหงวเฮ้ง": "相",
  "เลข 7 ตัว": "七",
  "สัมมนา": "學",
  "วางชะตาการเงิน": "富",
  "Uncategorized": "文"
};

async function initArticleDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('id') || '1';
  
  const contentEl = document.getElementById('articleContent');
  const heroCat = document.getElementById('heroCategory');
  const heroTitle = document.getElementById('heroTitle');
  const heroMeta = document.getElementById('heroMeta');
  const articleIcon = document.getElementById('articleIcon');
  
  contentEl.innerHTML = '<div style="text-align:center;padding:3rem;color:var(--gray-400);">⏳ กำลังโหลดบทความ...</div>';
  
  try {
    const res = await fetch('/api/articles?status=เผยแพร่');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const articles = await res.json();
    
    // Find the current article
    const art = articles.find(a => String(a.id) === String(articleId));
    
    if (art) {
      document.title = art.title + " – ซินแสหวาง";
      
      if (heroCat) heroCat.textContent = art.cat || 'บทความ';
      if (heroTitle) heroTitle.textContent = art.title;
      if (heroMeta) heroMeta.textContent = 'เผยแพร่เมื่อ: ' + art.date;
      
      const icon = CATEGORY_ICONS[art.cat] || "文";
      if (articleIcon) articleIcon.textContent = icon;
      
      const content = art.content ? art.content : '<p><i>เนื้อหาบทความกำลังปรับปรุง กรุณาติดตามเร็วๆ นี้</i></p>';
      
      // Determine if there's an image
      const imagePath = (window.ARTICLE_IMAGES || {})[articleId] || art.image;
      const imageTitle = (window.ARTICLE_IMAGE_TITLES || {})[articleId] || "";
      let figureHtml = "";
      if (imagePath && typeof renderArticleFigure === "function") {
          figureHtml = renderArticleFigure(art, imagePath, imageTitle);
      } else if (imagePath) {
          figureHtml = \`
          <figure class="article-figure">
            <img src="\${imagePath}" alt="\${art.title}" class="article-main-image" loading="lazy" />
          </figure>
          \`;
      }
      
      contentEl.innerHTML = figureHtml + content;
      
      loadRelated(articles, art.cat, art.id);
    } else {
      document.title = "ไม่พบบทความ – ซินแสหวาง";
      if (heroTitle) heroTitle.textContent = "ไม่พบบทความ";
      if (heroMeta) heroMeta.textContent = "";
      contentEl.innerHTML = '<p>ขออภัย ไม่พบบทความที่คุณกำลังค้นหา</p><p><a href="blog.html" style="color:var(--crimson);">กลับไปหน้าบทความทั้งหมด</a></p>';
    }
  } catch(e) {
    contentEl.innerHTML = '<div style="text-align:center;padding:3rem;color:var(--gray-400);">ไม่สามารถโหลดบทความได้<br><small style="color:#f44336;">' + e.message + '</small></div>';
  }
}

function loadRelated(allArticles, currentCat, currentId) {
  const list = document.getElementById('relatedList');
  if (!list) return;
  
  let related = allArticles.filter(a => a.cat === currentCat && String(a.id) !== String(currentId));
  if (related.length === 0) {
    related = allArticles.filter(a => String(a.id) !== String(currentId));
  }
  
  // Shuffle and pick 5
  related = related.sort(() => 0.5 - Math.random()).slice(0, 5);
  
  if (related.length === 0) {
    list.innerHTML = '<p style="color:var(--text-secondary);font-size:0.9rem;">ไม่มีบทความที่เกี่ยวข้อง</p>';
    return;
  }
  
  list.innerHTML = related.map(r => {
    const icon = CATEGORY_ICONS[r.cat] || "文";
    return \`
      <a href="blog-detail.html?id=\${r.id}" class="related-item">
        <div class="related-icon">\${icon}</div>
        <div>
          <div style="font-weight:600;font-size:0.95rem;line-height:1.3;margin-bottom:2px;">\${r.title}</div>
          <div style="font-size:0.8rem;color:var(--text-secondary);">\${r.date}</div>
        </div>
      </a>
    \`;
  }).join('');
}

document.addEventListener('DOMContentLoaded', initArticleDetail);
</script>`;

if (scriptStart !== -1 && scriptEnd !== -1) {
  const newHtml = htmlContent.substring(0, scriptStart) + newScript + htmlContent.substring(scriptEnd);
  fs.writeFileSync('blog-detail.html', newHtml, 'utf8');
  console.log('Successfully updated blog-detail.html script block');
} else {
  console.log('Could not find script block bounds', {scriptStart, scriptEnd, commentIndex});
}
