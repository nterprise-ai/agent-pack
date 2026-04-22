# Pricing Rubric

Quality checklist for `proposal/pricing.md`.

---

## Must Criteria (all required to pass gate)

- [ ] **Rate shown.** Daily or monthly rate shown for each resource type.
- [ ] **Effort shown.** Days or hours shown per line item.
- [ ] **Total shown.** Total AUD shown per line item and overall.
- [ ] **Payment schedule stated.** Specific milestones and percentages (e.g. "50% on engagement start, 50% on final acceptance").
- [ ] **Billing mode stated.** Daily, subscription, or milestone — stated explicitly.
- [ ] **GST noted.** All prices stated as exclusive or inclusive of GST.

## Should Criteria (80% required)

- [ ] Rate computed using `scripts/compute-rate.ts` (or manually verified against the same table)
- [ ] Minimum engagement days noted (where billing mode has a minimum)
- [ ] Out-of-scope commercial terms stated (what triggers a change order)
- [ ] Expenses policy stated (travel, software licensing)
- [ ] Section length ≥ 200 words

## Minimum Word Count

200 words for the pricing section.

## Structure

```markdown
## Pricing Summary

| Item | Rate (AUD/day) | Days | Total (AUD ex GST) |
|------|---------------|------|-------------------|
| [resource/deliverable] | $X | N | $Y |
| ... | | | |
| **Total** | | | **$Z** |

## Billing Mode
[daily / subscription / milestone — description]

## Payment Schedule
[milestone → percentage breakdown]

## Expenses
[travel, software, etc.]

## Change Order Trigger
[what is out of scope commercially]
```

## Rate Reference

See `scripts/compute-rate.ts` for the authoritative rate table. Standard rates:

| Tier | Daily Rate (AUD) | Subscription Modifier | Milestone Modifier |
|------|-----------------|----------------------|-------------------|
| standard | $1,500 | ×0.9 = $1,350/day | ×1.1 = $1,650/day |
| dual | $2,200 | ×0.9 = $1,980/day | ×1.1 = $2,420/day |
| senior | $3,000 | ×0.9 = $2,700/day | ×1.1 = $3,300/day |

Monthly rate = daily rate × 20 working days.
Minimum engagement: daily = 3 days, subscription = 20 days, milestone = 5 days.
