"""Usage: python -m factory.brief episodes/001-kodak-mistake/script.json
Writes brief.txt next to the script: a paste-ready brief for a chat that builds the motion-graphics video
(narration + on-screen text + visual idea per scene)."""
import json, os, sys


def main():
    p = sys.argv[1]
    s = json.load(open(p, encoding="utf-8"))
    out = [f'VIDEO — "{s["title"]}"', ""]
    for i, sc in enumerate(s["scenes"], 1):
        out += [f"SCENE {i}", f'NARRATION: {sc["text"]}']
        if sc.get("overlay"):
            out.append(f'ON-SCREEN TEXT: {sc["overlay"]}')
        out += [f'VISUAL: {sc.get("visual", "")}', ""]
    dest = os.path.join(os.path.dirname(os.path.abspath(p)), "brief.txt")
    open(dest, "w", encoding="utf-8").write("\n".join(out))
    words = sum(len(x["text"].split()) for x in s["scenes"])
    print(dest, f"{len(s['scenes'])} scenes, {words} words, ~{words/2.5/60:.1f} min")


if __name__ == "__main__":
    main()
