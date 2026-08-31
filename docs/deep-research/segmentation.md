# Segmentation Engine Landscape

> **Baseline**: 2026-08-31 ICT | **Owner**: Specialist Bot | **Updates**: Weekly Monday ICT

## Layers

| Layer | Description |
|:---|:---|
| Promptable SAM-Family | Segment Anything models |
| SSL Backbones | DINOv3 etc. (NOT engines; feature extractors) |
| DINO-Family Detectors | Grounding DINO, DINO-X, Mask DINO |
| Instance | Per-object masks |
| Semantic/Panoptic | Scene-level segmentation |
| Open-Vocab | Text-prompted segmentation |
| Video VOS | Video object segmentation |
| Edge | Mobile/embedded |
| Medical | Domain-specific |
| 3D | Point cloud/volumetric |
| Runtimes | ONNX, TensorRT |
| Cloud | Managed segmentation APIs |

## SAM Timeline

| Model | Release | Notes |
|:---|:---|:---|
| SAM 3 | 19 Nov 2025 | Point/Click/Box Segmentation |
| SAM 3.1 | 27 Mar 2026 | Object Multiplex (~7× speed at 128 objects H100) |

License: SAM3/3.1 NOT Apache.

## DINO Family Disambiguation

Do NOT flatten:
- Meta DINOv (SSL backbone)
- IDEA DINO (detection transformer)
- Mask DINO (instance segmentation)
- Grounding DINO (open-vocab detection)
- DINO-X (grounded everything)

## How to Pick

1. Interactive segmentation? SAM 3.1
2. Multi-object speed critical? SAM 3.1 Object Multiplex
3. Text-prompted? Grounding DINO + SAM
4. Video? SAM 3.1 video mode or XMem

## Living Catalog

Full matrix owned by Segmentation Specialist Bot. Weekly Monday ICT scans update `docs/deep-research/weekly-delta.md`.
