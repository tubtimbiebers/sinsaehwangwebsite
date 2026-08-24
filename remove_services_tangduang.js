const fs = require('fs');

let content = fs.readFileSync('tangduang.html', 'utf8');

// Find the SERVICES PRE-FOOTER section
const startMarker = content.indexOf('<!-- ✦ SERVICES PRE-FOOTER ✦ -->');
if (startMarker === -1) {
  console.log('Section not found');
  process.exit(1);
}

// Find the closing </section> for this block
const sectionOpen = content.indexOf('<section', startMarker);
let depth = 0;
let pos = sectionOpen;
while (pos < content.length) {
  if (content.startsWith('<section', pos)) {
    depth++;
    pos += 8;
  } else if (content.startsWith('</section>', pos)) {
    depth--;
    if (depth === 0) {
      pos += '</section>'.length;
      break;
    }
    pos += '</section>'.length;
  } else {
    pos++;
  }
}

// Remove the block (including any trailing newlines)
while (content[pos] === '\n' || content[pos] === '\r') pos++;

const newContent = content.substring(0, startMarker) + content.substring(pos);
fs.writeFileSync('tangduang.html', newContent, 'utf8');
console.log('Done! Removed services section from tangduang.html');
