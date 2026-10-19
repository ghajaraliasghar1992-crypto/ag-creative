# History of Things — YouTube pipeline

Channel concept: "How was X made?" — camera, computer, phone, airplane… from first idea to today.
English narration, 1 long video/day (6–10 min) + 2 Shorts/day (≤45 s).

## Run
```bash
pip install -r requirements.txt
export ELEVENLABS_API_KEY=...   ELEVENLABS_VOICE_ID=...
python -m factory.make episodes/001-camera/script.json          # real voice
python -m factory.make episodes/001-camera/script.json --dry    # silent test, costs nothing
```
Output next to the script: `video.mp4`, `credits.txt`, `upload.txt` (title/description/tags).
Narration and images are cached in `.cache/`, so re-renders cost nothing.

## Script format
`{"title","format":"long|short","description","tags","scenes":[{"text","image"}]}`
`image` is a Wikimedia Commons search (public domain / CC-BY only; credits are added to the description).
Shorts: `"format":"short"` renders 1080x1920.

## Token/cost budget (per day)
- Long script ~1,200 words ≈ 2K output tokens; two Shorts ≈ 600 tokens. Everything else (TTS, images, render) is code, zero tokens.
- ElevenLabs is the real cost: ~1,200 words ≈ 7K characters per long video + ~1K per Short.
  Check your plan's character quota: ~9K chars/day ≈ 270K/month.
- Write scripts in batches (7 at a time) from one research pass per topic.

## Monetization reality (read this)
- YouTube Partner Program: 1,000 subs + 4,000 public watch hours (12 months), or 10M Shorts views (90 days).
  Early-access tier: 500 subs + 3,000 hours (fan funding only, no ad revenue).
- Since July 2025 YouTube demonetizes "inauthentic / mass-produced" content: templated videos with
  the same look and a generic synthetic voice. To pass: consistent real editorial value, original scripts
  and fact-checking, varied visuals, your own voice identity. Disclose AI-altered realistic content.
- Expect months before revenue. Volume alone does not earn; retention does.
- Backup income while growing: affiliate links (books, documentaries, gear in the description),
  sponsorship after ~10K subs, a newsletter, and Shorts → long-form funneling.
