# Completeness Scoring Framework

## Dimensions and Weights

| Dimension | Weight |
|-----------|--------|
| Problem Definition | 25% |
| Expectations | 20% |
| Success Criteria | 20% |
| Constraints | 20% |
| Stakeholders | 15% |

## Per-Dimension Scoring Scale

Each dimension is scored 0–100:

| Score | Meaning |
|-------|---------|
| 0 | Not captured at all |
| 25 | Mentioned but too vague to act on |
| 50 | Partial — enough to understand direction, not enough to specify |
| 75 | Adequate — actionable but could be more precise |
| 100 | Complete — specific, verifiable, sufficient to scope |

## Weighted Overall Score

```
overallScore = sum(dimensionScore * weight) for each dimension
```

Example:
- Problem Definition: 90 × 0.25 = 22.5
- Expectations: 75 × 0.20 = 15.0
- Success Criteria: 50 × 0.20 = 10.0
- Constraints: 75 × 0.20 = 15.0
- Stakeholders: 100 × 0.15 = 15.0
- **Total: 77.5 → overallScore: 78**

## readyForPrep Threshold

```
readyForPrep = overallScore >= 70 AND no dimension scores 0
```

A score of 0 on any dimension — even with a high overall — blocks readiness. Every dimension must have at least something captured.

## Gaps Array

The `gaps` array lists specific missing elements that prevent a score of 75+ on each dimension. Use plain language. Examples:

- "No budget range provided"
- "Success criteria are not measurable — rewrite with pass/fail conditions"
- "No technical contact named"
- "Timeline is missing — no target date or deadline mentioned"

## Score Interpretation

| overallScore | readyForPrep | Recommendation |
|-------------|--------------|----------------|
| 90–100 | true | Proceed to proposal prep immediately |
| 70–89 | true | Proceed; note gaps for assumptions register |
| 50–69 | false | Return to client with specific questions |
| < 50 | false | Re-run intake conversation; current record insufficient |
