# S2S Engine Landscape

> **Baseline**: 2026-08-31 ICT | **Owner**: Specialist Bot | **Updates**: Weekly Monday ICT

## Scope

Speech-to-Speech engines only. NOT STT. NOT TTS. Native audio-in audio-out.

## Types

| Type | Description |
|:---|:---|
| Native E2E | Single model speech→speech |
| Hosted S2S API | Cloud endpoints (OpenAI, Google, xAI) |
| S2ST | Speech-to-speech translation |
| Cascaded | STT+LLM+TTS pipeline (must label) |
| Framework | Orchestration layer (LiveKit, Pipecat, RTVI) |

## Indonesian Support

Flag key: `yes` = speech in AND out; `in` = input only; `out` = output only; `no` = exists without ID; `?` = undocumented.

| Engine | ID | Notes |
|:---|:---|:---|
| Gemini 3.1 Flash Live | Yes | Preview Mar 2026 |
| Qwen3.5-Omni Realtime | Yes | |
| Grok Voice | Yes | |
| gpt-realtime-2.1 | ? | 6 Jul 2026 |
| gpt-realtime-2.1-mini | ? | 6 Jul 2026 |
| Nova 2 Sonic | ? | |

## Production Hosted Leaders

- gpt-realtime-2.1 / 2.1-mini (6 Jul 2026)
- gemini-3.1-flash-live-preview (Mar 2026)
- Nova 2 Sonic

## Dedicated S2ST

- gpt-realtime-translate (May 2026)
- gemini-3.5-live-translate-preview (9 Jun 2026)

## Open Weights

- NVIDIA PersonaPlex-7B (15 Jan 2026)
- VoiceChat-11B (3 Aug 2026)
- Kyutai Hibiki-Zero
- MoshiRAG
- MiniCPM-o 4.5
- Qwen3-Omni weights

## Not S2S (Exclusions)

- Cascaded pipelines (LiveKit/Pipecat/RTVI) — framework layer
- Sesame CSM-1B — conversation model not S2S
- Fish S2 — TTS not S2S
- Ultravox — emits text tokens not speech

## How to Pick

1. Indonesian in+out? Gemini 3.1 Flash Live or Qwen3.5-Omni
2. Lowest latency hosted? gpt-realtime-2.1-mini
3. Self-host? Kyutai Hibiki-Zero or Qwen3-Omni weights
4. Translation? Dedicated S2ST endpoints

## Living Catalog

Full matrix owned by S2S Specialist Bot. Weekly Monday ICT scans update `docs/deep-research/weekly-delta.md`.
