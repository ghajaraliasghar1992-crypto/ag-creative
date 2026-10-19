"""ffmpeg rendering: Ken Burns clip per scene, concat, final mux. No re-encode of the concat step."""
import json, os, subprocess

FORMATS = {"long": (1920, 1080), "short": (1080, 1920)}


def _run(cmd):
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", *cmd], check=True)


def duration(path: str) -> float:
    out = subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                                   "-of", "json", path])
    return float(json.loads(out)["format"]["duration"])


def scene_clip(image: str | None, audio: str, title: str, idx: int, fmt: str, out: str):
    w, h = FORMATS[fmt]
    secs = duration(audio) + 0.35  # tiny breath between scenes
    frames = int(secs * 30)
    if image:
        zoom = "min(zoom+0.0006,1.15)" if idx % 2 == 0 else "if(eq(on,1),1.15,max(zoom-0.0006,1.0))"
        vf = (f"scale={w*2}:{h*2}:force_original_aspect_ratio=increase,crop={w*2}:{h*2},"
              f"zoompan=z='{zoom}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={frames}:s={w}x{h}:fps=30,"
              f"fade=t=in:d=0.3,format=yuv420p")
        src = ["-loop", "1", "-i", image]
    else:  # fallback title card
        vf = "format=yuv420p"
        src = ["-f", "lavfi", "-i", f"color=c=0x101820:s={w}x{h}:r=30"]
    _run([*src, "-i", audio, "-t", f"{secs:.2f}", "-vf", vf, "-af", "apad",
          "-c:v", "libx264", "-preset", "veryfast", "-crf", "20", "-r", "30",
          "-c:a", "aac", "-b:a", "160k", "-ar", "44100", "-ac", "2", "-shortest", out])


def concat(clips: list[str], out: str):
    lst = out + ".txt"
    with open(lst, "w") as f:
        f.writelines(f"file '{os.path.abspath(c)}'\n" for c in clips)
    _run(["-f", "concat", "-safe", "0", "-i", lst, "-c", "copy", out])
