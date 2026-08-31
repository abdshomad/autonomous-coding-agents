# Object Detection Engine Landscape

> **Baseline**: 2026-08-31 ICT | **Owner**: Specialist Bot | **Updates**: Weekly Monday ICT

## Layers

| Layer | Description |
|:---|:---|
| YOLO-Class | Single-stage real-time detectors |
| Two-Stage | R-CNN family |
| DETR-Style | Transformer-based detection |
| Open-Vocab | Text-prompted detection |
| Edge | Mobile/embedded optimized |
| Video/Tracking | Detection + tracking coupled |
| Cloud API | Managed detection endpoints |
| Runtime | ONNX, TensorRT, CoreML |
| Skip | Deprecated or adjacent |

## Ultralytics Flagship: YOLO26

Released Jan 2026. NMS-free architecture. License: AGPL-3.0.

| Model | COCO val mAP |
|:---|:---|
| YOLO26x | 57.5 |
| YOLO11x | 54.7 |

YOLO12: Not recommended for production by Ultralytics.

## YOLOv13 Distinction

YOLOv13 (iMoonLab) is a distinct community line, NOT YOLO26.

## Sibling Coverage

- Segmentation: See `docs/deep-research/segmentation.md`
- Counting: See `docs/deep-research/object-counting.md`

## How to Pick

1. Production real-time? YOLO26x
2. Open-vocab detection? Grounding DINO or DINO-X
3. Edge deployment? YOLO26n or YOLO26s
4. Commercial license needed? Check AGPL-3.0 constraints

## Living Catalog

Full matrix owned by Detection Specialist Bot. Weekly Monday ICT scans update `docs/deep-research/weekly-delta.md`.
