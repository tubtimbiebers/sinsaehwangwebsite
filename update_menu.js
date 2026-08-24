const fs = require('fs');
const path = require('path');

const replacement = `<nav class="nav-menu" id="navMenu">
      <a href="index.html" class="nav-link">หน้าแรก</a>
      <a href="blog.html" class="nav-link">บทความ ซินแสหวาง</a>
      <a href="tangduang.html" class="nav-link">โปรแกรมตั้งดวง</a>
      <a href="contact.html" class="nav-link">ติดต่อ</a>
    </nav>`;

const regex = /<nav class="nav-menu" id="navMenu">[\s\S]*?<\/nav>/g;

function updateDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        updateDir(filePath);
      }
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      if (regex.test(content)) {
        content = content.replace(regex, replacement);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated ' + filePath);
      }
    }
  }
}

updateDir('.');
