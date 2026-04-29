"""Genera la imagen de previsualización (Open Graph) para WhatsApp/redes.
Reproduce el logo de la app: fondo oscuro, círculo rojo, "LP" en blanco.
1200×630 = ratio recomendado de Open Graph.
"""
from PIL import Image, ImageDraw, ImageFont
import os, glob

W, H = 1200, 630
BG = (15, 25, 35)        # #0F1923
ACCENT = (225, 6, 0)     # #E10600
WHITE = (245, 247, 250)  # #F5F7FA

img = Image.new('RGB', (W, H), BG)
d = ImageDraw.Draw(img)

# Círculo rojo centrado
cx, cy, r = W // 2, H // 2, 220
d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=ACCENT)

# Texto "LP" — buscamos una fuente del sistema lo más bold posible
font_candidates = [
    '/System/Library/Fonts/Helvetica.ttc',
    '/System/Library/Fonts/HelveticaNeue.ttc',
    '/System/Library/Fonts/Avenir Next.ttc',
    '/Library/Fonts/Arial.ttf',
    '/System/Library/Fonts/Supplemental/Arial Bold.ttf',
]
font = None
for path in font_candidates:
    if os.path.exists(path):
        try:
            font = ImageFont.truetype(path, 280)
            break
        except Exception:
            continue
if font is None:
    font = ImageFont.load_default()

text = 'LP'
bbox = d.textbbox((0, 0), text, font=font, stroke_width=0)
tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
# textbbox a veces deja "ascent space" arriba; centramos por bbox real
tx = cx - tw // 2 - bbox[0]
ty = cy - th // 2 - bbox[1] - 8  # ajuste fino
d.text((tx, ty), text, fill=WHITE, font=font)

# Pie con el texto "La Porra"
sub_font = None
for path in font_candidates:
    if os.path.exists(path):
        try:
            sub_font = ImageFont.truetype(path, 56)
            break
        except Exception:
            continue
if sub_font:
    sub = 'La Porra · Campeonato 2026'
    sb = d.textbbox((0, 0), sub, font=sub_font)
    sw = sb[2] - sb[0]
    d.text((W // 2 - sw // 2, H - 100), sub, fill=WHITE, font=sub_font)

out = os.path.join(os.path.dirname(__file__) or '.', 'assets', 'og-image.png')
os.makedirs(os.path.dirname(out), exist_ok=True)
img.save(out, 'PNG', optimize=True)
print(f'[ok] {out} ({os.path.getsize(out)/1024:.1f} KB)')
