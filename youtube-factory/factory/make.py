"""Usage: python -m factory.make episodes/001-camera/script.json [--dry]
Script JSON: {"title","format":"long|short","description","tags","scenes":[{"text","image"}]}
Output (next to the script): video.mp4, credits.txt, upload.txt (title/description/tags)."""
import argparse, json, os, sys
from . import images, render, tts


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("script")
    ap.add_argument("--dry", action="store_true", help="silent audio, no ElevenLabs credits used")
    a = ap.parse_args()
    s = json.load(open(a.script))
    d = os.path.dirname(os.path.abspath(a.script))
    work = os.path.join(d, "_clips")
    os.makedirs(work, exist_ok=True)
    credits, clips = [], []
    for i, sc in enumerate(s["scenes"]):
        print(f"scene {i+1}/{len(s['scenes'])}")
        audio = tts.narrate(sc["text"], a.dry)
        img = images.fetch(sc["image"], credits)
        clip = os.path.join(work, f"{i:03d}.mp4")
        render.scene_clip(img, audio, s["title"], i, s.get("format", "long"), clip)
        clips.append(clip)
    out = os.path.join(d, "video.mp4")
    render.concat(clips, out)
    desc = s.get("description", "") + "\n\nImage credits (Wikimedia Commons):\n" + "\n".join(sorted(set(credits)))
    open(os.path.join(d, "credits.txt"), "w").write("\n".join(sorted(set(credits))))
    open(os.path.join(d, "upload.txt"), "w").write(
        f"TITLE: {s['title']}\n\nDESCRIPTION:\n{desc}\n\nTAGS: {', '.join(s.get('tags', []))}\n")
    print("done ->", out, f"({render.duration(out):.0f}s)")


if __name__ == "__main__":
    sys.exit(main())
