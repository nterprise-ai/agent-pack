# Classification Examples

Worked examples for each combination of complexity and operational fit.

---

## Low / Strong

**Engagement:** Shopify → Klaviyo order sync for a boutique retailer

**Why low complexity:** Two cloud SaaS platforms, standard webhook/API integration, < 10k orders/day, no regulatory requirements.

**Why strong fit:** Defined deliverable, budget approved ($15k), clear go-live (before Christmas trading), client IT team can maintain post-delivery.

**Classification:**
```json
{ "complexity": "low", "operationalFit": "strong", "pricingTier": "standard", "escalate": false }
```

---

## Medium / Strong

**Engagement:** Guidewire PolicyCenter → Salesforce FSC policy sync for TrustLine Insurance

**Why medium complexity:** On-prem Guidewire with SOAP API, cloud Salesforce, APRA compliance context, moderate data transformation.

**Why strong fit:** Named economic buyer, approved budget ($100–140k), hard deadline (June 30), dedicated technical contact.

**Classification:**
```json
{ "complexity": "medium", "operationalFit": "strong", "pricingTier": "standard", "escalate": false }
```

---

## Medium / Moderate

**Engagement:** Data warehouse migration for a logistics company

**Why medium complexity:** Multi-source ETL (5 operational systems), 3 years of historical data, some data quality issues.

**Why moderate fit:** Budget "expected to be approved next month", technical contact is junior (data analyst, not architect), scope may expand.

**Classification:**
```json
{ "complexity": "medium", "operationalFit": "moderate", "pricingTier": "dual", "escalate": false }
```

---

## High / Strong

**Engagement:** Real-time clinical data exchange for a hospital network

**Why high complexity:** HL7 FHIR, multiple hospital systems, real-time SLA (< 2 second), highly regulated (Health Records Act).

**Why strong fit:** CTO is economic buyer, $350k budget approved, 20-week timeline, dedicated integration architect on client side.

**Classification:**
```json
{ "complexity": "high", "operationalFit": "strong", "pricingTier": "dual", "escalate": false }
```

---

## High / Weak — Escalate

**Engagement:** "AI transformation" for a large state government agency

**Why high complexity:** No defined scope, multiple business units, procurement process (open tender), 18-month timeline.

**Why weak fit:** No technical contact in conversation (procurement team only), no approved budget, open-ended "explore AI" framing, likely 10+ vendor shortlist.

**Classification:**
```json
{ "complexity": "high", "operationalFit": "weak", "pricingTier": "senior", "escalate": true }
```

**Escalation note:** "Government procurement with undefined scope and no technical stakeholder in conversation. Principal review required before committing any resources."
