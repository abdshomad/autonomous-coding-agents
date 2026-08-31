# Deep Research (`docs/deep-research/`)

Houses feasibility reports, competitor analysis, benchmarks informing the PRD.

## Engine Landscape Briefs (2026-08-31 Baseline)

| Brief | Domain |
|:---|:---|
| [tts.md](tts.md) | Text-to-speech engines |
| [stt.md](stt.md) | Speech-to-text engines |
| [s2s.md](s2s.md) | Speech-to-speech engines |
| [ocr.md](ocr.md) | OCR engines |
| [object-detection.md](object-detection.md) | Object detection engines |
| [segmentation.md](segmentation.md) | Segmentation engines |
| [object-counting.md](object-counting.md) | Object counting engines |
| [grok-bot-use-cases.md](grok-bot-use-cases.md) | Grok Bot use cases |

## Integration Research

| Brief | Domain |
|:---|:---|
| [ai-memory-integration.md](ai-memory-integration.md) | AI memory submodule |
| [no-mistakes-integration.md](no-mistakes-integration.md) | No-mistakes submodule |
| [submodules-expansion.md](submodules-expansion.md) | Submodule architecture |

## Directives
* **Plan Mode & Deep Reasoning**: Always run research in Plan Mode with high reasoning budget.
* **User Input**: Paste external research (Gemini, Perplexity, OpenAI) into `docs/deep-research/`.
* **Agent Flow**: `i`/`init` triggers automated web search/benchmarking. `/grill-me` interviews requirements.
* **PRD Handoff**: Synthesize research directly into `docs/prd/`.
* **Weekly Updates**: Specialist bots scan Monday ICT → `docs/deep-research/weekly-delta.md`.

