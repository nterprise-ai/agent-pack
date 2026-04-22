# Plan Rubric

Quality checklist for `proposal/plan.md`.

---

## Must Criteria (all required to pass gate)

- [ ] **Phases named by outcome.** Each phase name states what is complete at the end of that phase. "Phase 1: Ingestion pipeline live in staging" not "Phase 1: Discovery".
- [ ] **Durations in working days.** Each phase has a duration in working days, not weeks or calendar weeks.
- [ ] **Milestones are binary.** Each milestone can be evaluated as delivered or not delivered. No "in progress" milestones.
- [ ] **Dependencies identified.** At minimum, client dependencies (access, approvals, UAT) are stated.
- [ ] **Milestone table present.** A markdown table with columns: Milestone | Phase | Working Days | Owner | Dependency.

## Should Criteria (80% required)

- [ ] Phases total to within 10% of the agreed timeline
- [ ] Risk events identified (e.g. "If data access is delayed by > 5 days, timeline shifts accordingly")
- [ ] Client review points explicitly scheduled
- [ ] Go-live milestone is the last milestone in the table
- [ ] Section length ≥ 300 words

## Minimum Word Count

300 words for the plan section.

## Structure

```markdown
## Delivery Approach
[brief framing of approach — iterative, fixed-phase, etc.]

## Phases

### Phase 1: [Outcome Name]
Duration: N working days
[description]

### Phase N: ...

## Milestone Table
| Milestone | Phase | Working Days | Owner | Dependency |
|...|

## Client Commitments
[what nterprise needs from the client to hit the plan]
```
