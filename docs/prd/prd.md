# PRD: Autonomous Coding Agents + R&D Flywheel

> **Init**: Synthesize from `docs/deep-research/` via `i`/`init`.

## 1. Overview

Product: inex method repo serving dual purpose:
1. Autonomous agent workflow (n/e/i/t/f/c/r/d/m commands)
2. System of record for engine-landscape research feeding product decisions

## 2. Personas

- **Abd (Operator)**: Runs inex commands, reviews gates, ships increments
- **Chief of R&D**: Steers research priorities, validates landscape briefs
- **Specialist Research Bots**: Weekly Monday ICT catalog scans (TTS, STT, S2S, OCR, detection, segmentation, counting, Grok-Bot)
- **Cloud Agent**: Executes `n`/`e` builds autonomously

## 3. Requirements

### P0: Core Research Infrastructure
- `[P0]` 8 engine-landscape briefs exist in `docs/deep-research/` with 2026-08-31 baseline markers
  - [tts.md](docs/deep-research/tts.md): Text-to-speech engines, Indonesian support mapping
  - [stt.md](docs/deep-research/stt.md): Speech-to-text engines, streaming latency focus
  - [s2s.md](docs/deep-research/s2s.md): Speech-to-speech native engines (not cascaded)
  - [ocr.md](docs/deep-research/ocr.md): OCR engines, OmniDocBench v1.6 rankings
  - [object-detection.md](docs/deep-research/object-detection.md): YOLO-class detection engines
  - [segmentation.md](docs/deep-research/segmentation.md): SAM-family promptable segmentation
  - [object-counting.md](docs/deep-research/object-counting.md): Few-shot/referring counting
  - [grok-bot-use-cases.md](docs/deep-research/grok-bot-use-cases.md): Cursor Grok Bot patterns
- `[P0]` Research ingest verification gate: `node scripts/verify-research-ingest.mjs`
- `[P0]` PRD reflects engine+Grok-Bot landscape with cross-links

### P1: Weekly Research Cadence
- `[P1]` Weekly Monday ICT delta from specialist scans → `docs/deep-research/weekly-delta.md`
- `[P1]` Delta parser gate: `node scripts/verify-weekly-delta.mjs`

### P2: Product Bets
- `[P2]` Indonesian voice selection (Eleven v3 vs Cartesia Sonic-3.6 vs Fish S2.1)
- `[P2]` Detection/segmentation stack (YOLO26 vs SAM3.1 vs Grounding DINO)
- `[P2]` OCR pipeline (PaddleOCR-VL vs GLM-OCR vs desktop legacy)

## 4. Acceptance Criteria

- `[P0]` G7 gate passes: `node scripts/verify-research-ingest.mjs` → `ingest passed`
- `[P0]` Existing G1-G6 gates remain green
- `[P1]` Weekly delta template parses: `node scripts/verify-weekly-delta.mjs` → `weekly-delta parsed`
- `[P1]` PRD links resolve: `node scripts/verify-prd-research-links.mjs` → `prd-research-links passed`
