#!/usr/bin/env python3
import asyncio
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parent.parent
TEXT = (ROOT / "demo-video/overview/narration.txt").read_text(encoding="utf-8")
OUT = ROOT / "demo-video/overview/narration.mp3"
OUT.parent.mkdir(parents=True, exist_ok=True)


async def main() -> None:
    communicate = edge_tts.Communicate(TEXT, "en-US-JennyNeural", rate="-6%")
    await communicate.save(str(OUT))
    print("tts ok", OUT)


if __name__ == "__main__":
    asyncio.run(main())
