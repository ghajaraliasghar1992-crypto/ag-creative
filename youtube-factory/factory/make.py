"""Usage: python -m factory.make episodes/001-kodak-mistake/script.json [--dry] [--offline] [--music bed.mp3]
Scene keys: text (narration), image (Wikimedia search), image_file (your own picture, path relative
to the episode folder), overlay (on-screen text, e.g. "1975").
Output next to the script: video.mp4, captions.srt, credits.txt, upload.txt."""
import argparse, json, os, sys
from . import captions, images, overlay, render, tts


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("script")
    ap.add_argument("--dry", action="store_true", help="silent audio, no ElevenLabs credits used")
    ap.add_argument("--offline", action="store_true", help="skip image downloads, use title cards")
    ap.add_argument("--music", help="royalty-free music file for the background bed")
    a = ap.parse_args()
    s = json.load(open(a.script, encoding="utf-8"))
    d = os.path.dirname(os.path.abspath(a.script))
    fmt = s.get("format", "long")
    size = render.FORMATS[fmt]
    work = os.path.join(d, "_clips")
    os.makedirs(work, exist_ok=True)
    credits, clips, durs = [], [], []
    for i, sc in enumerate(s["scenes"]):
        print(f"scene {i+1}/{len(s['scenes'])}")
        audio = tts.narrate(sc["text"], a.dry)
        img = None
        if sc.get("image_file"):
            img = os.path.join(d, sc["image_file"])
        elif sc.get("image") and not a.offline:
            img = images.fetch(sc["image"], credits)
        card = img is None
        if card:  # no photo: branded title card showing the overlay text (or the channel name)
            img = overlay.title_card(sc.get("overlay") or s.get("channel", "How Things Began"), size)
        ov = overlay.text_overlay(sc["overlay"], size) if sc.get("overlay") and not card else None
        clip = os.path.join(work, f"{i:03d}.mp4")
        durs.append(render.scene_clip(img, ov, audio, i, fmt, clip))
        clips.append(clip)
    out = os.path.join(d, "video.mp4")
    render.concat(clips, out)
    if a.music:
        mixed = os.path.join(d, "video_music.mp4")
        render.add_music(out, a.music, mixed)
        os.replace(mixed, out)
    open(os.path.join(d, "captions.srt"), "w", encoding="utf-8").write(captions.build(s["scenes"], durs))
    cred = "\n".join(sorted(set(credits)))
    open(os.path.join(d, "credits.txt"), "w", encoding="utf-8").write(cred)
    desc = s.get("description", "") + ("\n\nImage credits (Wikimedia Commons):\n" + cred if cred else "")
    open(os.path.join(d, "upload.txt"), "w", encoding="utf-8").write(
        f"TITLE: {s['title']}\n\nDESCRIPTION:\n{desc}\n\nTAGS: {', '.join(s.get('tags', []))}\n")
    print("done ->", out, f"({render.duration(out):.0f}s)")


if __name__ == "__main__":
    sys.exit(main())
