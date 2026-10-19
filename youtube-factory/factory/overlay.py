"""Pillow-drawn overlays: on-screen text over photos and title cards when no photo exists.
Uses Pillow's built-in font, so no system fonts are needed (works the same on Windows/Mac/Linux).
Set FONT_PATH to a .ttf/.otf to use your channel font."""
import hashlib, os
from PIL import Image, ImageDraw, ImageFont

CACHE = os.path.join(os.path.dirname(__file__), "..", ".cache", "overlays")
NAVY, AMBER, OFFWHITE = (15, 27, 45), (242, 169, 59), (245, 241, 232)


def _font(px: int):
    path = os.environ.get("FONT_PATH")
    return ImageFont.truetype(path, px) if path else ImageFont.load_default(size=px)


def _wrap(draw, text, font, max_w):
    lines, cur = [], ""
    for word in text.split():
        trial = f"{cur} {word}".strip()
        if draw.textlength(trial, font=font) <= max_w:
            cur = trial
        else:
            lines.append(cur)
            cur = word
    return lines + [cur] if cur else lines


def _path(kind, text, size):
    os.makedirs(CACHE, exist_ok=True)
    return os.path.join(CACHE, hashlib.sha1(f"{kind}|{text}|{size}".encode()).hexdigest()[:16] + ".png")


def text_overlay(text: str, size: tuple[int, int]) -> str:
    """Transparent PNG: soft bottom scrim + big off-white text with an amber rule above it."""
    out = _path("ov", text, size)
    if os.path.exists(out):
        return out
    w, h = size
    img = Image.new("RGBA", size, (0, 0, 0, 0))
    scrim = Image.new("RGBA", size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(scrim)
    top = int(h * 0.55)
    for y in range(top, h):  # linear gradient, darkest at the bottom
        sd.line([(0, y), (w, y)], fill=(0, 0, 0, int(190 * (y - top) / (h - top))))
    img.alpha_composite(scrim)
    d = ImageDraw.Draw(img)
    px = int(h * 0.085)
    font = _font(px)
    lines = _wrap(d, text, font, w * 0.84)
    lh = int(px * 1.15)
    y = int(h * 0.90) - lh * len(lines)
    d.rectangle([(w * 0.08, y - px * 0.35), (w * 0.08 + px * 1.6, y - px * 0.35 + max(4, px // 14))], fill=AMBER)
    for line in lines:
        d.text((w * 0.08 + 3, y + 3), line, font=font, fill=(0, 0, 0, 160))  # drop shadow
        d.text((w * 0.08, y), line, font=font, fill=OFFWHITE)
        y += lh
    img.save(out)
    return out


def title_card(text: str, size: tuple[int, int]) -> str:
    """Full-frame fallback when a scene has no photo: navy gradient, amber accent, centred text."""
    out = _path("card", text, size)
    if os.path.exists(out):
        return out
    w, h = size
    img = Image.new("RGB", size, NAVY)
    d = ImageDraw.Draw(img)
    for y in range(h):  # subtle vertical lift toward the centre
        t = 1 - abs(y - h / 2) / (h / 2)
        d.line([(0, y), (w, y)], fill=tuple(int(c + 18 * t) for c in NAVY))
    px = int(h * 0.075)
    font = _font(px)
    lines = _wrap(d, text, font, w * 0.78)
    lh = int(px * 1.2)
    y = (h - lh * len(lines)) / 2
    d.rectangle([(w / 2 - px, y - px * 0.8), (w / 2 + px, y - px * 0.8 + max(4, px // 12))], fill=AMBER)
    for line in lines:
        d.text(((w - d.textlength(line, font=font)) / 2, y), line, font=font, fill=OFFWHITE)
        y += lh
    img.save(out)
    return out
