import re

with open('d:\\website sinsae\\css\\style.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Old crimson rgba(243, 129, 129) -> New pink rgba(245, 109, 136)
content = re.sub(r'rgba\(\s*243\s*,\s*129\s*,\s*129\s*,', 'rgba(245, 109, 136,', content)

# Old dark red rgba(139, 26, 26) -> New periwinkle rgba(201, 187, 244) for shadows, or coral rgba(255, 132, 94)
content = re.sub(r'rgba\(\s*139\s*,\s*26\s*,\s*26\s*,', 'rgba(201, 187, 244,', content)

# Old gold rgba(232, 184, 75) and rgba(201, 146, 42) -> New Jasmine rgba(255, 227, 130)
content = re.sub(r'rgba\(\s*232\s*,\s*184\s*,\s*75\s*,', 'rgba(255, 227, 130,', content)
content = re.sub(r'rgba\(\s*201\s*,\s*146\s*,\s*42\s*,', 'rgba(255, 227, 130,', content)

with open('d:\\website sinsae\\css\\style.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced RGB values.")
