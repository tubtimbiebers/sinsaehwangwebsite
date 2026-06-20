import re

with open('d:\\website sinsae\\css\\style.css', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'\*\{box-sizing:border-box;margin:0;padding:0\}', '', content)

with open('d:\\website sinsae\\css\\style.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("Bazi wildcard CSS removed.")
