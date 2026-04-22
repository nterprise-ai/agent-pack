# Extraction Examples

Worked examples of the JSON shape to produce per document type. Each example keeps the output terse — omit keys where no signal is present; do not fill with null.

## intake_brief

**Input (document excerpt):**
> Our claims team handles ~2000 general insurance claims per month. The biggest pain is duplicate-entry between the portal and the core policy system. We want a single interface.

**Output:**
```json
{
  "_docType": "intake_brief",
  "_docTitle": "Claims Portal Unification Brief",
  "industry": "General Insurance",
  "capabilitiesInScope": ["claims intake", "policy lookup", "duplicate reconciliation"],
  "volume": { "claimsPerMonth": 2000 },
  "painPoints": ["duplicate entry between portal and policy core"],
  "constraints": [],
  "verbatimQuotes": [
    { "text": "The biggest pain is duplicate-entry between the portal and the core policy system.", "context": "problem statement" }
  ]
}
```

## architecture_diagram

**Input (image):** Boxes labelled `Web App` → `API Gateway` → `Orders Service` + `Payments Service`; both talk to `Postgres`.

**Output:**
```json
{
  "_docType": "architecture_diagram",
  "_docTitle": "Orders Architecture (v2)",
  "components": [
    { "name": "Web App", "type": "frontend" },
    { "name": "API Gateway", "type": "gateway" },
    { "name": "Orders Service", "type": "service" },
    { "name": "Payments Service", "type": "service" },
    { "name": "Postgres", "type": "datastore" }
  ],
  "dataFlows": [
    { "from": "Web App", "to": "API Gateway" },
    { "from": "API Gateway", "to": "Orders Service" },
    { "from": "API Gateway", "to": "Payments Service" },
    { "from": "Orders Service", "to": "Postgres" },
    { "from": "Payments Service", "to": "Postgres" }
  ],
  "stackHints": ["Postgres"]
}
```

## requirements_doc

**Input:** `REQ-1: MUST support SSO via Okta. REQ-2: SHOULD log audit events to BetterStack. AC-1.1: Login time < 3s p95.`

**Output:**
```json
{
  "_docType": "requirements_doc",
  "_docTitle": "Auth Requirements v1.2",
  "requirements": [
    { "id": "REQ-1", "level": "MUST", "text": "support SSO via Okta", "acceptanceCriteria": [{ "id": "AC-1.1", "text": "Login time < 3s p95" }] },
    { "id": "REQ-2", "level": "SHOULD", "text": "log audit events to BetterStack" }
  ]
}
```

## process_map

**Input (image):** Swimlane for "Customer" → "Intake Bot" → "Human Review" → "Decision".

**Output:**
```json
{
  "_docType": "process_map",
  "_docTitle": "Claim intake flow",
  "swimlanes": ["Customer", "Intake Bot", "Human Review", "Decision"],
  "steps": [
    { "lane": "Customer", "action": "submits claim form" },
    { "lane": "Intake Bot", "action": "auto-classifies + triages" },
    { "lane": "Human Review", "action": "verifies and annotates" },
    { "lane": "Decision", "action": "approve / reject / escalate" }
  ]
}
```

## org_chart

**Output:**
```json
{
  "_docType": "org_chart",
  "_docTitle": "Product & Engineering Org",
  "leadership": [
    { "name": "Jane Doe", "role": "CTO", "reportsTo": null },
    { "name": "Sam Lee", "role": "VP Engineering", "reportsTo": "Jane Doe" }
  ]
}
```

## other

Best-effort extraction. Always include `_docType: 'other'` + a plain-English `_summary` string and any structured facts you could pull out.
