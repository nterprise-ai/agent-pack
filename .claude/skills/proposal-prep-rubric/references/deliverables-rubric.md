# Deliverables Rubric

Quality checklist for `proposal/deliverables.md`.

---

## Must Criteria (all required to pass gate)

- [ ] **Each deliverable has a title.** Specific noun phrase, not "Documentation" or "System".
- [ ] **Each deliverable has a description.** 1–3 sentences describing exactly what will be produced.
- [ ] **Each deliverable has acceptance criteria.** At minimum 2 acceptance criteria per deliverable, each falsifiable.
- [ ] **Each deliverable has an estimated effort.** Hours range (indicative), flagged as indicative.
- [ ] **Deliverables JSONB shape respected.** Output matches: `{ title, description, acceptanceCriteria[], estHours }`.
- [ ] **At minimum 3 deliverables.** No engagement should have fewer than 3 named deliverables.

## Should Criteria (80% required)

- [ ] Deliverables collectively cover all in-scope items from the scope section
- [ ] Acceptance criteria reference the success metrics from the scope section
- [ ] Documentation deliverables specify what the documentation contains (not just "documentation")
- [ ] Deliverable owner (nterprise vs client) is noted where ambiguous

## Minimum Word Count

200 words (deliverables tend to be structured — word count is secondary to structure compliance).

## Output Shape

Each deliverable must be serialisable to:

```json
{
  "title": "Guidewire–Salesforce Policy Sync Integration",
  "description": "Bi-directional sync of policy records between Guidewire PolicyCenter (on-prem, PC10.1.1) and Salesforce Financial Services Cloud, triggered on policy status change events.",
  "acceptanceCriteria": [
    "Policy updates sync to Salesforce within 5 minutes of status change for 99.5% of events over any 7-day window",
    "Sync failures are logged with full error detail and trigger a Slack alert to the operations channel"
  ],
  "estHours": 120
}
```
