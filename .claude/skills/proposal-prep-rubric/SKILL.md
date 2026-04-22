---
name: proposal-prep-rubric
description: Quality rubrics for each of the 5 proposal sections — scope, solution, plan, deliverables, pricing.
---

# Proposal Prep Rubric

This skill defines the quality rubrics used by each `nt-prepare-*` agent when drafting proposal sections, and by `nt-proposal-orchestrator` when enforcing review gates.

## Purpose

Each proposal section must meet the minimum quality bar defined in its rubric before the next section begins. Rubrics prevent the pipeline from progressing with underspecified content.

## Reference Documents

| Document | Contents |
|----------|----------|
| `references/scope-rubric.md` | Quality checklist for `proposal/scope.md` |
| `references/solution-rubric.md` | Quality checklist for `proposal/solution.md` |
| `references/plan-rubric.md` | Quality checklist for `proposal/plan.md` |
| `references/deliverables-rubric.md` | Quality checklist for `proposal/deliverables.md` |
| `references/pricing-rubric.md` | Quality checklist for `proposal/pricing.md` |

## Scripts

| Script | Purpose |
|--------|---------|
| `scripts/compute-rate.ts` | Daily rate calculator by tier and billing mode |
| `scripts/compute-rate.test.ts` | Unit tests for all rate combinations |

## How Review Gates Work

After each `nt-prepare-*` agent writes its section, `nt-proposal-orchestrator` evaluates the output against the relevant rubric. If the section fails the gate:

1. The orchestrator records the specific failing criteria
2. It sends the section back to the prepare agent with the failure notes
3. The prepare agent revises and resubmits
4. Maximum 2 revision cycles before escalating to human review

A section passes when all "must" criteria are met and at least 80% of "should" criteria are met.

## Section → Agent → Rubric Mapping

| Section | Agent | Rubric |
|---------|-------|--------|
| `proposal/scope.md` | `nt-prepare-scope` | `references/scope-rubric.md` |
| `proposal/solution.md` | `nt-prepare-solution` | `references/solution-rubric.md` |
| `proposal/plan.md` | `nt-prepare-plan` | `references/plan-rubric.md` |
| `proposal/deliverables.md` | `nt-prepare-deliverables` | `references/deliverables-rubric.md` |
| `proposal/pricing.md` | `nt-prepare-pricing` | `references/pricing-rubric.md` |
