---
name: review-gates
description: Pre-commit checklist for proposal sections — word count, section coherence, missing fields, and brand voice.
---

# Review Gates

This skill defines the automated review gates enforced by `nt-proposal-orchestrator` before each proposal section is committed and the next stage begins.

## Purpose

Review gates prevent low-quality sections from propagating through the proposal pipeline. A section that passes review gates can be committed to `proposal/` and shown to the client. A section that fails must be revised before the pipeline continues.

## Gate Checks

Each section runs through 4 categories of checks.

---

## 1. Minimum Word Count

| Section | Minimum Words |
|---------|--------------|
| `proposal/scope.md` | 400 |
| `proposal/solution.md` | 600 |
| `proposal/plan.md` | 300 |
| `proposal/deliverables.md` | 200 |
| `proposal/pricing.md` | 200 |

**Check:** Count words in the section body (excluding YAML frontmatter if present). Fail if below threshold.

**Failure message:** `"scope.md is 287 words — minimum is 400. Add detail to objectives, assumptions, or success metrics."`

---

## 2. Required Sections Present

Each proposal file must contain the required heading structure. Missing headings = gate failure.

### `proposal/scope.md`

Required headings (in any order):
- `## Objectives`
- `## In Scope`
- `## Out of Scope`
- `## Assumptions`
- `## Success Metrics`

### `proposal/solution.md`

Required headings:
- `## Overview`
- `## Architecture`
- `## Integrations`
- `## Security`

### `proposal/plan.md`

Required headings:
- `## Delivery Approach`
- `## Milestone Table` (or a markdown table with columns: Milestone, Phase, Working Days)

### `proposal/deliverables.md`

Required: At minimum 3 `### ` level-3 headings (one per deliverable) each containing:
- A description paragraph
- At minimum 2 acceptance criteria (bulleted list items starting with `- `)
- An `estHours` value

### `proposal/pricing.md`

Required:
- A markdown table with columns including `Rate` and `Total`
- `## Payment Schedule` heading
- `## Billing Mode` heading or inline billing mode statement

---

## 3. Entity Coherence

All entities referenced in a section must be defined somewhere in the proposal (either in the same section or a prior section).

**Rules:**

- If `solution.md` mentions a system name (e.g. "Guidewire PolicyCenter"), that system must appear in `scope.md`'s In Scope or be clearly described in solution.md itself.
- If `plan.md` references a phase deliverable, that deliverable must appear in `deliverables.md`.
- If `pricing.md` references a line item, that item must map to a deliverable or resource described in `deliverables.md` or `plan.md`.
- If `deliverables.md` references a success criterion (e.g. "meets the 5-minute SLA"), that criterion must appear in `scope.md`.

**Failure message:** `"solution.md references 'SAP EWM' but this system does not appear in scope.md In Scope. Add it to scope or remove from solution."`

---

## 4. Brand Voice Check

The brand voice check scans for consulting-speak and passive voice patterns.

**Blocked terms (any occurrence = gate failure):**

- leverage, leveraging, leveraged
- utilise, utilising, utilised, utilize
- synergise, synergy (as a verb), synergise
- holistic (without a following list of the parts)
- seamless (without a technical description of what makes it seamless)
- cutting-edge, innovative, world-class, best-in-class (without specific evidence)
- "it is important to note"
- "please find attached"
- "going forward" (use "from [date]" instead)
- "as per" (use "as" or "per", not both)
- "in order to" (use "to")
- "due to the fact that" (use "because")

**Passive voice check:**

Scan for the pattern: `is [past participle] by` or `are [past participle] by`. Flag each instance with line number and suggest rewrite.

**Failure message:** `"pricing.md line 14: 'is delivered by' — rewrite active: 'nterprise delivers'"`

---

## Gate Evaluation Logic

A section passes when:

```
wordCount >= minimumWordCount
AND allRequiredHeadingsPresent
AND noEntityCoherenceErrors
AND noBrandVoiceViolations
```

Any single failure blocks progression. The orchestrator returns:

```json
{
  "passed": false,
  "section": "scope.md",
  "failures": [
    { "gate": "wordCount", "detail": "287 words, minimum 400" },
    { "gate": "brandVoice", "detail": "line 8: 'leverage' — replace with 'use'" }
  ]
}
```

---

## Revision Cycle

1. Orchestrator evaluates section → failure
2. Failure details sent to `nt-prepare-*` agent with revision instruction
3. Agent revises and resubmits
4. Maximum 2 revision cycles per section
5. After 2 failures: pause pipeline and notify human reviewer

Human reviewer receives:
- The failing section
- The gate failure details
- The 2 revision attempts and their failure reasons
