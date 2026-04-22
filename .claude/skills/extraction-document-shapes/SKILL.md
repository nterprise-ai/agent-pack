---
name: extraction-document-shapes
description: Canonical taxonomy and JSON extraction shapes for documents uploaded during an engagement — intake briefs, architecture diagrams, requirements docs, process maps, org charts.
---

# extraction-document-shapes

Defines the canonical document types that `nt-ingestion` can extract from, and the JSON shape each produces. The `Organization.context` merge assumes these shapes; ingesting into the wrong shape produces silent data loss.

## Document types

| Type | Signals | Shape file |
|------|---------|-----------|
| `intake_brief` | Client-written narrative; sections like "Problem", "Goals", "Success criteria" | `references/extraction-examples.md#intake_brief` |
| `architecture_diagram` | Image of boxes + arrows; cloud/system names; data-flow indicators | `references/extraction-examples.md#architecture_diagram` |
| `requirements_doc` | Numbered requirements, MUST/SHOULD language, acceptance criteria | `references/extraction-examples.md#requirements_doc` |
| `process_map` | Swimlanes, decision diamonds, sequence of steps | `references/extraction-examples.md#process_map` |
| `org_chart` | Role titles + reporting lines + names | `references/extraction-examples.md#org_chart` |
| `other` | None of the above — still extract to a best-effort shape | `references/extraction-examples.md#other` |

## Classification algorithm

When the agent first sees a document:

1. **Text-first check** — if the document has parseable text (markdown, PDF with OCR), scan for signal phrases:
   - "Problem statement", "Goals", "Success criteria" → `intake_brief`
   - "MUST", "SHALL", "REQ-", "AC-" → `requirements_doc`
   - "Step 1", "then", "approve → reject" → `process_map`
2. **Vision check** (for images / PDFs without text):
   - Boxes with arrows + cloud names → `architecture_diagram`
   - Hierarchy of role boxes → `org_chart`
   - Swimlanes → `process_map`
3. **Fallback** — if none match, use `other`.

## Output rules

Every extraction MUST include:
- `_docType` — one of the types above
- `_docTitle` — inferred from filename + first heading
- `confidence` — baseline 0.85, adjust per the `nt-ingestion` agent's rules

Each shape adds type-specific keys. See the reference file for exhaustive examples.

## Hard rules

- Never misclassify — if unsure between two types, prefer the more specific (requirements_doc over intake_brief; architecture_diagram over other).
- Never fabricate relationships in an org chart — if a reporting line isn't explicitly drawn, omit.
- For architecture diagrams: if you can't identify a system name with confidence ≥ 0.75, record it as `{ name: 'unknown-<position>', position: 'top-left' | 'center' | ... }`.
