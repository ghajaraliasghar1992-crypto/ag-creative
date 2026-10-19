"""SRT captions (upload as a subtitle track: accessibility + extra search text). Sentence-level timing,
split proportionally by length inside each scene."""
import re


def _ts(t: float) -> str:
    ms = int(round(t * 1000))
    return f"{ms//3600000:02}:{ms//60000%60:02}:{ms//1000%60:02},{ms%1000:03}"


def build(scenes: list[dict], durations: list[float]) -> str:
    out, n, t = [], 1, 0.0
    for sc, dur in zip(scenes, durations):
        parts = []
        for p in re.split(r"(?<=[.!?])\s+", sc["text"]):
            if parts and (len(parts[-1]) < 25 or parts[-1].count('"') % 2):  # keep quotes/short bits together
                parts[-1] += " " + p
            elif p.strip():
                parts.append(p.strip())
        total = sum(len(p) for p in parts) or 1
        speak = dur - 0.35
        cur = t
        for p in parts:
            span = speak * len(p) / total
            out.append(f"{n}\n{_ts(cur)} --> {_ts(cur + span)}\n{p}\n")
            n += 1
            cur += span
        t += dur
    return "\n".join(out)
