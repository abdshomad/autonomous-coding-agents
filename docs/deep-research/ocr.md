# OCR Engine Landscape

> **Baseline**: 2026-08-31 ICT | **Owner**: Specialist Bot | **Updates**: Weekly Monday ICT

## Layers

| Layer | Description |
|:---|:---|
| Legacy/Desktop | Tesseract, ABBYY, Adobe |
| Modular DL Pipeline | Detection + recognition modules |
| OCR VLM | Vision-language models for OCR |
| Specialized | Forms, tables, handwriting |
| Frontier Multimodal | GPT-5, Gemini, Claude with OCR |
| Managed API/IDP | Cloud document processing |

## OmniDocBench v1.6 Rankings

Official `opendatalab/OmniDocBench` Full Overall↑ (31 Aug 2026):

| Engine | Score |
|:---|:---|
| PaddleOCR-VL-1.6 | 96.34 |
| MinerU2.5-Pro | 95.75 |
| GLM-OCR | 95.22 |
| PaddleOCR-VL-1.5 | 94.93 |
| GPT-5.2 | 86.59 |
| Marker | 78.44 |

Note: HunyuanOCR-1.5 author-reported v1.6 94.74 is NOT the official README row.

Do not mix OmniDocBench versions.

## How to Pick

1. Highest accuracy? PaddleOCR-VL-1.6
2. Existing multimodal stack? GPT-5.2 acceptable for general use
3. Document structure? MinerU2.5-Pro
4. Self-host required? PaddleOCR-VL weights

## Living Catalog

Full matrix owned by OCR Specialist Bot. Weekly Monday ICT scans update `docs/deep-research/weekly-delta.md`.
