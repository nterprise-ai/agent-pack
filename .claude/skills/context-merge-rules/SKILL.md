---
name: context-merge-rules
description: Rules and merge algorithm for updating Organization.context JSONB — confidence-weighted merge, conflict recording, provenance tracking, listedSignals handling.
disable-model-invocation: true
---

# Context Merge Rules

This skill defines the authoritative merge algorithm for updating the `Organization.context` JSONB column. All AI-assisted context updates MUST follow these rules exactly.

## Merge Algorithm

### 1. Confidence-Weighted Merge

Every incoming field carries a `confidence` score (0–1 float). The effective confidence for a currently stored field is the maximum confidence value across all `_sources[]` entries present in the existing context.

| Condition | Action |
|-----------|--------|
| Incoming confidence > existing max | Overwrite the existing field value |
| Incoming confidence = existing max (equal) | Arrays: union-merge (deduplicate). Objects: shallow-merge (incoming keys win). Scalars: overwrite. |
| Incoming confidence < existing max | Record in `conflicts[]` — do NOT overwrite |

### 2. New Fields

If a field is not yet present in the existing context, it is always written regardless of confidence score.

### 3. Conflict Recording

When incoming confidence is lower than the stored field's confidence, append to `conflicts[]`:

```json
{
  "field": "<fieldName>",
  "existing": "<current value>",
  "existingConfidence": 0.9,
  "incoming": "<new value>",
  "incomingConfidence": 0.5,
  "incomingRef": "<source.ref>"
}
```

Conflicts are append-only. They accumulate for human or automated review. Do not remove resolved conflicts — mark them resolved instead (future feature).

### 4. Provenance Tracking

Every successful merge appends a source entry to `_sources[]`:

```json
{
  "kind": "<source kind: document | crm | enrichment | manual | conversation>",
  "ref": "<unique source reference string>",
  "confidence": 0.9
}
```

`_sources` is append-only. If a `source.ref` already exists in `_sources[]`, the entire update is a no-op (idempotency guard).

Internal fields (keys starting with `_`) are never overwritten via incoming extracted facts.

### 5. listedSignals Handling

Fields tagged as `listedSignals` (e.g. `publicSignals[]`, `techStack{}`, `leadership[]`) use union-merge semantics regardless of confidence level. New items are appended; existing items are preserved. Duplicates are deduplicated by string equality on the item's primary key.

### 6. Array Merge Semantics

For array fields (e.g. `leadership[]`, `publicSignals[]`):
- If incoming confidence >= existing: union-merge (append new items, preserve existing)
- If incoming confidence < existing: record conflict without modifying the array

### 7. Object Merge Semantics

For object fields (e.g. `techStack{}`):
- If incoming confidence >= existing: shallow-merge (incoming keys overwrite matching existing keys; other existing keys preserved)
- If incoming confidence < existing: record conflict for the whole object field

## Reference

See `references/context-shape.md` for the canonical `Organization.context` JSONB shape, all known top-level keys, and their types.
