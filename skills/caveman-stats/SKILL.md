---
name: caveman-stats
description: Report cumulative token savings and output compression efficiency achieved via Caveman.
---

# Caveman Stats Skill: Token Efficiency Metrics

Quantify conversational and documentation token compression.

---

## 📊 Metric Dimensions

1. **Output Token Reduction**: Estimated percentage of tokens saved vs verbose baseline.
2. **Context Window Savings**: Average tokens per turn preserved for prompt headroom.
3. **Artifact Density**: LOC and word density in generated docs/plans.

---

## 📈 Stats Template

```markdown
### 🦣 Caveman Compression Stats
- **Output Token Reduction**: ~65% (Mode: `full`)
- **Filler Words Pruned**: 100%
- **Artifact Concision**: Zero conversational fluff; max token density
```
