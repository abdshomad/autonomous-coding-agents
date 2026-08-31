# TTS Engine Landscape

> **Baseline**: 2026-08-31 ICT | **Owner**: Specialist Bot | **Updates**: Weekly Monday ICT

## Layers

| Layer | Description |
|:---|:---|
| Realtime/Agent | Sub-200ms TTFB for voice agents |
| Studio/Expressive | High-quality long-form, emotion control |
| Enterprise/SSML | SSML tags, custom lexicons, SLA |
| Open-Weight | Self-hostable weights (Apache/MIT/AGPL) |
| On-Device | Mobile/edge inference |
| Voice Cloning | Few-shot voice replication |
| Multilingual | 10+ language support |
| Research | Papers/preprints not production |
| Dead/Adjacent-S2S | Deprecated or S2S-only (out of scope) |

## Indonesian Support

Flag `Yes` only if vendor language table explicitly names `id` / `id-ID` / `Bahasa Indonesia`.

| Engine | ID Support | Notes |
|:---|:---|:---|
| Eleven v3 | Yes | Premium tier |
| Cartesia Sonic-3.6 | Yes | Low latency |
| Inworld TTS-2 | Yes | Game NPCs |
| MiniMax Speech 2.8 | Yes | |
| Fish S2.1 Pro | Yes | |
| OpenAI gpt-4o-mini-tts | Yes | |
| Gemini TTS | Yes | |
| Chirp 3 HD | Yes | Google Cloud |
| Azure Neural id-ID | Yes | |
| Amazon Polly | No | |
| Hume Octave 2 | No | |
| Qwen3-TTS | No | Community FT only |

## Evals

- Artificial Analysis arenas (31 Aug 2026)
- Vendor blind tests
- Papers: WER/MOS/InstructTTSEval

## How to Pick

1. Indonesian required? Filter by ID=Yes
2. Realtime agent? Prioritize TTFB <200ms
3. Self-host required? Open-weight layer only
4. Voice cloning? Check licensing constraints

## Living Catalog

Full engine matrix owned by TTS Specialist Bot. Weekly Monday ICT scans update `docs/deep-research/weekly-delta.md`.
