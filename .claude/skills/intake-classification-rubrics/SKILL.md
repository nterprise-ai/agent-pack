---
name: intake-classification-rubrics
description: Rubrics and fallback heuristics for classifying intake complexity and operational fit.
---

# Intake Classification Rubrics

This skill defines how `nt-classify-intake` classifies an intake record by complexity and operational fit.

## Purpose

Classification drives:
- Pricing tier selection (standard / dual / senior)
- Engagement model recommendation
- Whether to escalate to senior principals for proposal review

## Reference Documents

| Document | Contents |
|----------|----------|
| `references/complexity-signals.md` | Low / medium / high complexity indicators |
| `references/operational-fit-taxonomy.md` | Strong / moderate / weak operational fit indicators |
| `references/classification-examples.md` | Worked examples for each classification bucket |

## Scripts

| Script | Purpose |
|--------|---------|
| `scripts/fallback-heuristic.ts` | Deterministic keyword-based classification when AI classification is unavailable |
| `scripts/fallback-heuristic.test.ts` | Unit tests for the fallback heuristic |

## Classification Output

`nt-classify-intake` outputs:

```json
{
  "complexity": "medium",
  "operationalFit": "strong",
  "rationale": "Single system integration with well-understood platforms (Guidewire + Salesforce). Client has dedicated technical contact and approved budget. No regulatory complexity beyond standard APRA obligations.",
  "pricingTier": "standard",
  "escalate": false
}
```

## Classification Matrix

| Complexity | Strong Fit | Moderate Fit | Weak Fit |
|------------|-----------|--------------|----------|
| Low | standard | standard | standard (note) |
| Medium | standard | dual | dual (note) |
| High | dual | senior | Escalate to principal |

**Escalate to principal** = human review required before committing to the engagement.

## Pricing Tier Mapping

| Tier | Description |
|------|-------------|
| standard | Single practitioner. Routine integration or automation work. |
| dual | Lead + specialist. Complex integration, data, or regulated context. |
| senior | Principal-led. Architecture-heavy, regulated, or novel problem. |

## Escalation Triggers

Escalate to a human principal when:
- Complexity = high AND operationalFit = weak
- Any signal of regulatory complexity beyond the agent's rubric (novel regulatory regime)
- Client is a government entity (public sector) with procurement requirements
- Engagement value likely exceeds $500,000 AUD
