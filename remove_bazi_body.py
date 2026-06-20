import re

with open('d:\\website sinsae\\css\\style.css', 'r', encoding='utf-8') as f:
    content = f.read()

# The Bazi appended CSS had a body and body::before rule which breaks the site.
# It looks like:
# body{font-family:'Helvetica Neue',Arial,sans-serif;background:#2a0000;color:var(--bz-paper);min-height:100vh}
# body::before{content:'';position:fixed;inset:0;pointer-events:none;z-index:0;
#   background:
#     radial-gradient(ellipse at 20% 10%,rgba(180,20,20,0.6),transparent 55%),
#     ...
#     repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(212,168,67,.018) 60px)}

content = re.sub(r'body\{font-family:\'Helvetica Neue\',Arial,sans-serif;background:#2a0000;color:var\(--bz-paper\);min-height:100vh\}', '', content)

content = re.sub(r'body::before\{content:\'\';position:fixed;inset:0;pointer-events:none;z-index:0;\s*background:.*?60px\)\}', '', content, flags=re.DOTALL)

with open('d:\\website sinsae\\css\\style.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("Bazi body CSS removed.")
