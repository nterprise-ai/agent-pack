---
name: intake-capture-rubric
description: Rubric and scoring framework for evaluating project intake completeness before moving to proposal preparation.
---

# Intake Capture Rubric

This skill defines the structure, scoring framework, and worked examples for evaluating project intake completeness.

## Purpose

Before moving an intake to proposal preparation (`nt-proposal-orchestrator`), the intake must meet a minimum completeness threshold. This skill provides the rubric used by `nt-assess-completeness` to score intakes and determine readiness.

## Reference Documents

| Document | Contents |
|----------|----------|
| `references/capture-targets.md` | Definitions of what must be captured — problem, expectations, success criteria |
| `references/completeness-scoring.md` | 5-dimension scoring framework and `readyForPrep` threshold |
| `references/capture-good.md` | Worked example of a complete intake |
| `references/capture-incomplete.md` | Worked example of an incomplete intake with gap analysis |
| `references/dimension-scoring-walkthrough.md` | Step-by-step scoring guide for each dimension |

## Quick Reference — Scoring Dimensions

| Dimension | Weight | What It Tests |
|-----------|--------|---------------|
| Problem Definition | 25% | Is the core problem clearly stated? |
| Expectations | 20% | Are delivery expectations articulated? |
| Success Criteria | 20% | Can we know when done? |
| Constraints | 20% | Are technical, budget, and timeline limits known? |
| Stakeholders | 15% | Are decision-makers and contacts identified? |

**readyForPrep threshold:** overall weighted score ≥ 70 AND no dimension scores 0.

## Output Format

`nt-assess-completeness` outputs:

```json
{
  "overallScore": 82,
  "readyForPrep": true,
  "dimensions": {
    "problemDefinition": { "score": 90, "notes": "..." },
    "expectations": { "score": 75, "notes": "..." },
    "successCriteria": { "score": 80, "notes": "..." },
    "constraints": { "score": 70, "notes": "..." },
    "stakeholders": { "score": 85, "notes": "..." }
  },
  "gaps": ["No budget range provided", "Timeline not confirmed"]
}
```
