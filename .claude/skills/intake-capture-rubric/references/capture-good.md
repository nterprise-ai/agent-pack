# Worked Example — Complete Intake

**Engagement:** Guidewire–Salesforce Integration for TrustLine Insurance

---

## Problem Definition (Score: 95)

TrustLine Insurance runs Guidewire PolicyCenter for policy administration and Salesforce Financial Services Cloud for broker relationship management. Brokers manually re-key policy data into Salesforce after each policy update, consuming approximately 2 hours per broker per week across 40 brokers. This manual process introduces data errors (averaging 12 per month) that delay commission calculations by 3–5 business days. The CTO has identified this as the primary operational pain point for FY26 and has budget approved for resolution.

**Why scoring 95:** All three elements present — current state, pain/cost (quantified), urgency/trigger (FY26 priority, approved budget).

---

## Expectations (Score: 85)

TrustLine expects nterprise to deliver a working, production-grade integration between Guidewire PolicyCenter and Salesforce FSC. They want iterative delivery with a working demo at the 4-week mark. Their integration architect (James Park) will be available 3 days per week. They require all work to be performed by Australian-based resources. Documentation must cover operational runbooks for their internal IT team.

**Why scoring 85:** Delivery format clear, engagement model clear, client involvement specified, non-negotiable constraint (Australian resources) named. Loses 15 points because "documentation" scope is only partially defined.

---

## Success Criteria (Score: 90)

1. Policy updates in Guidewire PolicyCenter sync to Salesforce FSC within 5 minutes of policy status change, for 99.5% of events over any 7-day rolling window.
2. Zero manual re-keying incidents reported by brokers in the 30 days following go-live.
3. Integration monitoring dashboard live in Salesforce showing sync status, error counts, and last-sync timestamp — accessible to broker managers without IT involvement.

**Why scoring 90:** Three criteria, all falsifiable. Loses 10 points because SLA for error handling (what happens when sync fails?) is not specified.

---

## Constraints (Score: 80)

- Budget: $100,000–$140,000 AUD (inclusive of testing and documentation)
- Timeline: Production go-live by 30 June 2026 (hard deadline — FY end)
- Technical: Integration must use TrustLine's existing Azure tenant; no new cloud accounts to be provisioned. Guidewire is on-prem (version PC10.1.1); Salesforce is on the EU1 instance.
- Security: Must comply with TrustLine's Privileged Access Management policy (PAM policy document to be shared post-NDA).

**Why scoring 80:** Budget, timeline, and technical constraints present. Loses 20 points because PAM policy not yet received — creates a dependency risk.

---

## Stakeholders (Score: 100)

- Economic buyer: Sarah Chen (CTO) — approves all engagements above $50k
- Technical contact: James Park (Integration Architect) — owns Guidewire and Salesforce environments
- Project sponsor: Mark Liu (COO) — drove the business case
- Internal champion: Rachel Wong (Broker Operations Lead) — will lead UAT
- No known internal opponents; IT security team consulted and supportive

**Why scoring 100:** All four stakeholder types named. No blockers. Contact details captured (not shown here for brevity).

---

## Overall Score

```
Problem Definition: 95 × 0.25 = 23.75
Expectations:       85 × 0.20 = 17.00
Success Criteria:   90 × 0.20 = 18.00
Constraints:        80 × 0.20 = 16.00
Stakeholders:      100 × 0.15 = 15.00
────────────────────────────────────
Overall: 89.75 → 90
readyForPrep: true
```

**Gaps (non-blocking):**
- PAM policy document not yet received — note as assumption
- Error-handling SLA not defined — clarify during scope phase
