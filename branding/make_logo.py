"""Derive the deployed logo assets from the raw logo render.

Reads branding/validation-rules-logo-source.png (opaque white studio background),
removes the background - every near-white pixel connected to the image border,
which also drops the soft shadow - crops to the brick, centres it on a square
transparent canvas, and writes:

- docs/public/validation-rules-logo.png (256x256, nav logo + home hero)
- docs/public/favicon.png (48x48)

Run from the repository root:

    uv run --with pillow python branding/make_logo.py
"""

from collections import deque
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "branding" / "validation-rules-logo-source.png"
PUBLIC = ROOT / "docs" / "public"

THRESHOLD = 225  # min(R,G,B) >= this counts as background when border-connected

im = Image.open(SRC).convert("RGBA")
w, h = im.size
px = im.load()

# Flood fill from all border pixels over near-white pixels.
bg = bytearray(w * h)
queue = deque()


def try_seed(x, y):
    r, g, b, _ = px[x, y]
    if min(r, g, b) >= THRESHOLD and not bg[y * w + x]:
        bg[y * w + x] = 1
        queue.append((x, y))


for x in range(w):
    try_seed(x, 0)
    try_seed(x, h - 1)
for y in range(h):
    try_seed(0, y)
    try_seed(w - 1, y)

while queue:
    x, y = queue.popleft()
    for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
        if 0 <= nx < w and 0 <= ny < h and not bg[ny * w + nx]:
            r, g, b, _ = px[nx, ny]
            if min(r, g, b) >= THRESHOLD:
                bg[ny * w + nx] = 1
                queue.append((nx, ny))

for y in range(h):
    for x in range(w):
        if bg[y * w + x]:
            r, g, b, _ = px[x, y]
            px[x, y] = (r, g, b, 0)

# Crop to the opaque content with a small margin.
bbox = im.getchannel("A").getbbox()
margin = 8
left = max(bbox[0] - margin, 0)
top = max(bbox[1] - margin, 0)
right = min(bbox[2] + margin, w)
bottom = min(bbox[3] + margin, h)
im = im.crop((left, top, right, bottom))

# Square canvas so the mark centres nicely.
side = max(im.width, im.height)
canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
canvas.paste(im, ((side - im.width) // 2, (side - im.height) // 2))

canvas.resize((256, 256), Image.LANCZOS).save(PUBLIC / "validation-rules-logo.png")
canvas.resize((48, 48), Image.LANCZOS).save(PUBLIC / "favicon.png")
print("logo bbox:", bbox, "canvas side:", side)
