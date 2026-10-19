"""Narration: ElevenLabs TTS with on-disk cache. --dry swaps in silence sized by word count."""
import hashlib, os, subprocess
import requests

CACHE = os.path.join(os.path.dirname(__file__), "..", ".cache", "audio")


def narrate(text: str, dry: bool = False) -> str:
    os.makedirs(CACHE, exist_ok=True)
    voice = os.environ.get("ELEVENLABS_VOICE_ID", "")
    key = hashlib.sha1(f"{voice}|{dry}|{text}".encode()).hexdigest()[:16]
    out = os.path.join(CACHE, key + ".mp3")
    if os.path.exists(out):
        return out
    if dry:
        secs = max(1.5, len(text.split()) / 2.6)
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "lavfi", "-i",
                        "anullsrc=r=44100:cl=mono", "-t", f"{secs:.2f}", "-q:a", "9", out], check=True)
        return out
    r = requests.post(
        f"https://api.elevenlabs.io/v1/text-to-speech/{voice}?output_format=mp3_44100_128",
        headers={"xi-api-key": os.environ["ELEVENLABS_API_KEY"]},
        json={"text": text, "model_id": os.environ.get("ELEVENLABS_MODEL", "eleven_multilingual_v2")},
        timeout=120,
    )
    r.raise_for_status()
    with open(out, "wb") as f:
        f.write(r.content)
    return out
