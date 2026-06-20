import re

# 1. Update style.css to allow Zodiac inline backgrounds and colors
with open('d:\\website sinsae\\css\\style.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

css_content = css_content.replace(
    ".bazi-widget .zod {\n  background: #ffffff !important;\n  border: 1px solid #d1d5db !important;\n}",
    ".bazi-widget .zod {\n  border: 1px solid #d1d5db !important;\n}"
)
# Make sure text color inside .zod doesn't get overridden by .bazi-widget * { color: #000000 } if it exists
css_content = css_content.replace(
    ".bazi-widget .zcn, .bazi-widget .zth, .bazi-widget .zan {\n  color: var(--charcoal) !important;\n}",
    "/* zodiac colors are inline now */"
)

with open('d:\\website sinsae\\css\\style.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

# 2. Update bazi.js ZR array
with open('d:\\website sinsae\\js\\bazi.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# bg colors based on requested elements:
# Water: #0ea5e9
# Wood: #16a34a
# Fire: #ef4444
# Metal: #4b5563
# Earth: #8b4513
# Text is white: #ffffff

zodiac_bg_colors = {
    '12': '#0ea5e9', # Water (Pig)
    '1': '#0ea5e9',  # Water (Rat)
    '2': '#8b4513',  # Earth (Ox)
    
    '3': '#16a34a',  # Wood (Tiger)
    '4': '#16a34a',  # Wood (Rabbit)
    '5': '#8b4513',  # Earth (Dragon)
    
    '6': '#ef4444',  # Fire (Snake)
    '7': '#ef4444',  # Fire (Horse)
    '8': '#8b4513',  # Earth (Goat)
    
    '9': '#4b5563',  # Metal (Monkey)
    '10': '#4b5563', # Metal (Rooster)
    '11': '#8b4513', # Earth (Dog)
}

def replace_zodiac(match):
    br = match.group(1)
    bg = zodiac_bg_colors.get(br, '#fff')
    return f"{{br:{br}, cn:'{match.group(2)}',th:'{match.group(3)}',an:'{match.group(4)}', bg:'{bg}',tc:'#ffffff',sp:{match.group(5)}}}"

zodiac_pattern = r"\{br:(\d+),\s*cn:'([^']+)',th:'([^']+)',an:'([^']+)',\s*bg:'[^']+',tc:'[^']+',sp:(true|false)\}"
js_content = re.sub(zodiac_pattern, replace_zodiac, js_content)

# Make sure inline styles don't get overwritten by making sure we render the span with style="color:"+z.tc
# Actually, earlier I changed zcn, zth, zan to just class names, but bazi.js originally didn't have inline colors for them unless they were applied.
# Wait, let's verify how the HTML is generated in bazi.js:
# html+='<div class="zod" style="background:'+z.bg+';color:'+z.tc+';border:'+border+';box-shadow:'+shadow+'">'
#    +'<span class="zcn">'+z.cn+'</span>'
#    +'<span class="zth">'+z.th+'</span>'
#    +'<span class="zan">'+z.an+'</span>'
# Since color:z.tc is on the wrapper .zod, we need to ensure the spans inherit it, or we apply it directly.
js_content = js_content.replace(
    '\'<span class="zcn">\'+z.cn+\'</span>\'',
    '\'<span class="zcn" style="color:\'+z.tc+\'">\'+z.cn+\'</span>\''
)
js_content = js_content.replace(
    '\'<span class="zth">\'+z.th+\'</span>\'',
    '\'<span class="zth" style="color:\'+z.tc+\'">\'+z.th+\'</span>\''
)
js_content = js_content.replace(
    '\'<span class="zan">\'+z.an+\'</span>\'',
    '\'<span class="zan" style="color:\'+z.tc+\'">\'+z.an+\'</span>\''
)


with open('d:\\website sinsae\\js\\bazi.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Zodiac solid backgrounds applied.")
