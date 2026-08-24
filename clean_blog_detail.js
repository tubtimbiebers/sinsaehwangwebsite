const fs = require('fs');

let html = fs.readFileSync('blog-detail.html', 'utf8');

// Find the first (new API-based) script block start
const newScriptStart = html.indexOf('<script>\nconst CATEGORY_ICONS');
const newScriptEnd = html.indexOf('document.addEventListener(\'DOMContentLoaded\', initArticleDetail);', newScriptStart);
const newScriptEndFull = newScriptEnd + 'document.addEventListener(\'DOMContentLoaded\', initArticleDetail);'.length;

if (newScriptStart === -1) {
  console.log('ERROR: Could not find new API script block');
  process.exit(1);
}

// Build the clean ending
const bodyEnd = '\n</script>\n\n</body>\n</html>';

// Get content up through the new script, then close properly
const cleanHtml = html.substring(0, newScriptEndFull) + bodyEnd;

fs.writeFileSync('blog-detail.html', cleanHtml, 'utf8');

const newLines = cleanHtml.split('\n').length;
console.log(`Done. File now has ${newLines} lines`);

// Verify
const check = fs.readFileSync('blog-detail.html', 'utf8');
const scriptCount = (check.match(/<script>/g) || []).length;
console.log(`Script blocks: ${scriptCount} (should be 1)`);
