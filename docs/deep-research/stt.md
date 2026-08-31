# STT Engine Landscape

> **Baseline**: 2026-08-31 ICT | **Owner**: Specialist Bot | **Updates**: Weekly Monday ICT

## Layers

| Layer | Description |
|:---|:---|
| Foundation Engine | Core ASR models (Whisper, Canary, Parakeet) |
| Runtime | Inference backends (faster-whisper, whisper.cpp) |
| Browser STT | Web Speech API, MediaRecorder pipelines |
| Streaming Stack | Real-time transcription (Deepgram, AssemblyAI) |
| Cloud API | Managed ASR endpoints |
| App | End-user transcription apps |
| Adjacent | Translation, diarization-only |
| Skip | Deprecated or irrelevant |

## 2026 Competition Axes

Accuracy on clean English plateaued. Current fight:
- Streaming latency
- End-of-turn (EOT) detection
- Code-switching
- Diarization quality
- Cost per hour

## Indonesian Support

| Engine | ID Support | Notes |
|:---|:---|:---|
| Whisper large-v3 | Yes | Multilingual weights |
| Qwen3-ASR | Yes | |
| Fun-ASR-MLT-Nano | Yes | |
| Canary-Qwen-2.5B | No | |
| Parakeet-TDT-0.6B-v3 | No | |
| Kyutai STT | No | |
| Moonshine | No | |
| Apple SpeechAnalyzer | No | Has ms_MY not id_ID |
| Mistral Voxtral | No | |

## Evals

- Open ASR English WER
- AA-WER v2 (31 Aug 2026)
- Koedesk Track A
- Pipecat TTFS

Do not mix benchmark results across eval suites.

## How to Pick

1. Indonesian required? Whisper large-v3 or Qwen3-ASR
2. Browser-native? Web Speech API first (Ponytail)
3. Streaming latency critical? Deepgram/AssemblyAI
4. Self-host? Whisper + faster-whisper runtime

## Living Catalog

Full matrix owned by STT Specialist Bot. Weekly Monday ICT scans update `docs/deep-research/weekly-delta.md`.
