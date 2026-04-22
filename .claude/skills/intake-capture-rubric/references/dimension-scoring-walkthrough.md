# Dimension Scoring Walkthrough

Step-by-step guide for scoring each dimension of an intake record.

---

## Step 1: Problem Definition

Read the intake transcript looking for answers to:

1. What is happening right now that is wrong or suboptimal?
2. What is the measurable impact of the current state?
3. Why is this being addressed now?

**Scoring:**
- If all three are present and specific → 90–100
- If 2 of 3 are present → 60–75
- If only a general statement exists → 25–50
- If the "problem" is stated as a solution ("we need X") with no underlying problem → 25
- If nothing is captured → 0

**Common traps:**
- "We want to improve efficiency" — no current state, no measurement → 25
- "We lose $50k/month to manual errors" — strong, but no trigger for why now → 75

---

## Step 2: Expectations

Read the intake for:

1. What form should the output take?
2. How should the engagement be structured?
3. What does the client bring to the engagement?
4. What are their non-negotiables on approach?

**Scoring:**
- 4 elements present and specific → 90–100
- 3 elements present → 70–85
- 2 elements present → 50–65
- 1 element present → 25
- Nothing → 0

---

## Step 3: Success Criteria

Count the number of falsifiable criteria present.

**Falsifiable test:** Can a third party determine at a specific moment whether this criterion is met or not met?

- "Processing time reduced" — not falsifiable (no threshold)
- "Processing time < 3 seconds for 95% of requests" — falsifiable

**Scoring:**
- 3+ falsifiable criteria → 90–100
- 2 falsifiable criteria → 75–85
- 1 falsifiable criterion → 50
- Only vague statements → 25
- Nothing → 0

---

## Step 4: Constraints

Identify which constraint categories are present:
- Budget (even indicative range)
- Timeline (specific date or relative deadline)
- Technical (platforms, security, architecture)
- Resourcing (team size, location, availability)

**Scoring:**
- 4 categories with specifics → 90–100
- 3 categories → 75–85
- 2 categories → 50–65
- 1 category → 25
- Nothing → 0

---

## Step 5: Stakeholders

Identify which stakeholder types are captured:
- Economic buyer (approves spend)
- Technical contact (owns systems)
- Project sponsor (business champion)
- Known blockers or opponents

**Scoring:**
- All 4 types identified by name → 90–100
- Economic buyer + 2 others → 75–85
- Economic buyer + 1 other → 50–65
- Only 1 stakeholder named → 25
- Only company name, no individuals → 0

---

## Final Calculation

Apply weights and sum:

```
overallScore = round(
  (problemDefinition * 0.25) +
  (expectations * 0.20) +
  (successCriteria * 0.20) +
  (constraints * 0.20) +
  (stakeholders * 0.15)
)
```

Determine readiness:
```
readyForPrep = overallScore >= 70 AND min(all dimensions) > 0
```

Write gaps: one bullet per dimension scoring below 75, describing the specific missing element in plain language.
