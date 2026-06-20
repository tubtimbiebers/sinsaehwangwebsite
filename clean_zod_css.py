import re

with open('d:\\website sinsae\\css\\style.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

# This is the offending block
offending_block = """.bazi-widget .zod {
  border: 1px solid var(--gold-deep) !important;
  box-shadow: none !important;
  background: var(--cream) !important;
  color: var(--charcoal) !important;
}"""

css_content = css_content.replace(offending_block, "")

with open('d:\\website sinsae\\css\\style.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

print("Offending zod block removed.")
