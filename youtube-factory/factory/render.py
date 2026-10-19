"""ffmpeg rendering: Ken Burns clip per scene (+ optional text overlay), concat, music bed with ducking."""
import json, os, subprocess

FORMATS = {"long": (1920, 1080), "short": (1080, 1920)}


def _run(cmd):
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", *cmd], check=True)


def duration(path: str) -> float:
    out = subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                                  "-of", "json", path])
    return float(json.loads(out)["format"]["duration"])


def scene_clip(image: str, overlay: str | None, audio: str, idx: int, fmt: str, out: str) -> float:
    """Returns the clip length in seconds (needed for caption timing)."""
    w, h = FORMATS[fmt]
    secs = duration(audio) + 0.35  # tiny breath between scenes
    frames = int(secs * 30)
    zoom = "min(zoom+0.0006,1.15)" if idx % 2 == 0 else "if(eq(on,1),1.15,max(zoom-0.0006,1.0))"
    bg = (f"[0:v]scale={w*2}:{h*2}:force_original_aspect_ratio=increase,crop={w*2}:{h*2},"
          f"zoompan=z='{zoom}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={frames}:s={w}x{h}:fps=30[bg];")
    fade = f"fade=t=in:d=0.3,fade=t=out:st={secs-0.25:.2f}:d=0.25,format=yuv420p"
    inputs = ["-framerate", "30", "-loop", "1", "-i", image]
    if overlay:
        inputs += ["-framerate", "30", "-loop", "1", "-i", overlay]
        graph = (bg + "[1:v]format=rgba,fade=t=in:st=0.6:d=0.5:alpha=1[ov];"
                 f"[bg][ov]overlay=0:0:shortest=1,{fade}[v]")
        aidx = 2
    else:
        graph = bg + f"[bg]{fade}[v]"
        aidx = 1
    _run([*inputs, "-i", audio, "-t", f"{secs:.2f}", "-filter_complex", graph,
          "-map", "[v]", "-map", f"{aidx}:a", "-af", "apad", "-c:v", "libx264", "-preset", "veryfast",
          "-crf", "20", "-r", "30", "-c:a", "aac", "-b:a", "160k", "-ar", "44100", "-ac", "2",
          "-shortest", out])
    return secs


def concat(clips: list[str], out: str):
    lst = out + ".txt"
    with open(lst, "w") as f:  # forward slashes: the concat demuxer chokes on Windows backslashes
        f.writelines(f"file '{os.path.abspath(c).replace(os.sep, '/')}'\n" for c in clips)
    _run(["-f", "concat", "-safe", "0", "-i", lst, "-c", "copy", out])
    os.remove(lst)


def add_music(video: str, music: str, out: str, level: float = 0.22):
    """Loop a music bed under the narration; it ducks while the voice speaks and fades out at the end."""
    total = duration(video)
    graph = (f"[1:a]volume={level},afade=t=in:d=2[mus];[0:a]asplit=2[vo1][vo2];"
             "[mus][vo1]sidechaincompress=threshold=0.03:ratio=10:attack=20:release=600[duck];"
             f"[vo2][duck]amix=inputs=2:duration=first:normalize=0,afade=t=out:st={total-3:.2f}:d=3[a]")
    _run(["-i", video, "-stream_loop", "-1", "-i", music, "-filter_complex", graph,
          "-map", "0:v", "-map", "[a]", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", "-t", f"{total:.2f}", out])
