# Object Counting Engine Landscape

> **Baseline**: 2026-08-31 ICT | **Owner**: Specialist Bot | **Updates**: Weekly Monday ICT

## Layers

| Layer | Description |
|:---|:---|
| Dedicated Few-Shot | Exemplar-based counting |
| Referring | Text-prompted counting |
| Crowd/Density | Density map estimation |
| Point Crowd | Point supervision counting |
| Detect-Then-Count | Detection + tally |
| Open-Vocab Count | Text-prompted counting |
| Video/Track | Counting with tracking |
| VLM-as-Counter | General VLM prompted to count |
| Counting-VLM | Purpose-built counting VLM |
| Cloud | Managed counting APIs |
| Products | End-user counting apps |
| Adjacent Benches | Related evaluation suites |
| Skip | Deprecated or irrelevant |

## 2026 Notables

| Model | Source | Notes |
|:---|:---|:---|
| Count Anything | arXiv 2605.30846 | SAM3 backbone |
| CountGD++ | CVPR 2026 | Grounded counting |
| GeCo2 | AAAI 2026 | SAM2 backbone |

## Disambiguation

A YOLO that tallies bounding boxes is NOT CountGD. CountGD is a dedicated grounded counting model.

## Sibling Coverage

- Detection: See `docs/deep-research/object-detection.md`
- Segmentation: See `docs/deep-research/segmentation.md`

## How to Pick

1. Few-shot with exemplars? Count Anything or GeCo2
2. Text-prompted? CountGD++
3. Crowd density? Dedicated density estimators
4. Quick prototype? VLM-as-counter (GPT-4o, Claude)

## Living Catalog

Full matrix owned by Counting Specialist Bot. Weekly Monday ICT scans update `docs/deep-research/weekly-delta.md`.
