"""Visuals: public-domain / CC images from Wikimedia Commons, cached, with credits recorded."""
import hashlib, os, re, time
import requests

CACHE = os.path.join(os.path.dirname(__file__), "..", ".cache", "images")
API = "https://commons.wikimedia.org/w/api.php"
UA = {"User-Agent": "history-of-things-channel/0.1 (educational video pipeline)"}
OK_LICENSE = re.compile(r"public domain|pd|cc0|cc[- ]by(?!-nc)", re.I)


def _get(url, params=None):
    """GET with backoff on Wikimedia 429s (they rate-limit shared IPs hard)."""
    for wait in (0, 5, 15, 45):
        time.sleep(wait)
        r = requests.get(url, headers=UA, params=params, timeout=60)
        if r.status_code != 429:
            return r
    return r


def fetch(query: str, credits: list[str]) -> str | None:
    os.makedirs(CACHE, exist_ok=True)
    key = hashlib.sha1(query.encode()).hexdigest()[:16]
    out = os.path.join(CACHE, key + ".jpg")
    if os.path.exists(out):
        return out
    try:
        r = _get(API, params={
            "action": "query", "format": "json", "generator": "search", "gsrnamespace": 6,
            "gsrsearch": f"{query} filetype:bitmap", "gsrlimit": 10, "prop": "imageinfo",
            "iiprop": "url|size|extmetadata", "iiurlwidth": 1920})
        pages = sorted(r.json().get("query", {}).get("pages", {}).values(), key=lambda p: p["index"])
    except Exception as e:  # network / parse failure -> caller falls back to a title card
        print(f"  ! image search failed for '{query}': {e}")
        return None
    for p in pages:
        info = p["imageinfo"][0]
        meta = info.get("extmetadata", {})
        lic = meta.get("LicenseShortName", {}).get("value", "")
        if info["width"] < 1000 or not OK_LICENSE.search(lic):
            continue
        img = _get(info["thumburl"])
        if img.status_code != 200:
            continue
        with open(out, "wb") as f:
            f.write(img.content)
        artist = re.sub(r"<[^>]+>", "", meta.get("Artist", {}).get("value", "unknown"))
        credits.append(f"{p['title']} - {artist} - {lic} - {info['descriptionurl']}")
        return out
    return None
