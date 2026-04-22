# Organization.context JSONB Shape

This document is the ground-truth schema for the `Organization.context` JSONB column. The context-merge skill owns the structural contract.

## Top-Level Keys

| Key | Type | Description |
|-----|------|-------------|
| `industry` | `string` | Primary industry classification (e.g. "Healthcare", "Financial Services") |
| `size` | `string` | Organisation headcount range (e.g. "50-200", "1000+") |
| `leadership[]` | `Array<{ name: string; title: string; linkedIn?: string }>` | Key executives and decision-makers |
| `techStack{}` | `Record<string, string>` | Technology categories mapped to product/vendor names (e.g. `{ crm: "Salesforce", erp: "SAP" }`) |
| `publicSignals[]` | `Array<{ signal: string; source: string; date?: string }>` | Publicly observable signals (news, job posts, funding rounds, etc.) |
| `lastEnrichmentAt` | `string (ISO 8601)` | Timestamp of the most recent automated enrichment run |
| `_sources[]` | `Array<ContextSource>` | Provenance entries — append-only; see merge rules |
| `conflicts[]` | `Array<ConflictEntry>` | Fields with unresolved confidence conflicts — append-only |

## Type Definitions

### ContextSource

```typescript
interface ContextSource {
  kind: 'document' | 'crm' | 'enrichment' | 'manual' | 'conversation';
  ref: string;        // Unique source identifier (e.g. file hash, CRM record ID, conversation ID)
  confidence: number; // 0–1 float; higher = more authoritative
}
```

### ConflictEntry

```typescript
interface ConflictEntry {
  field: string;              // Top-level key that has a conflict
  existing: unknown;          // Current stored value
  existingConfidence: number; // Max confidence among existing _sources
  incoming: unknown;          // Proposed incoming value
  incomingConfidence: number; // Confidence of the incoming source
  incomingRef: string;        // source.ref of the incoming update
}
```

### LeadershipEntry

```typescript
interface LeadershipEntry {
  name: string;
  title: string;
  linkedIn?: string;
}
```

### PublicSignalEntry

```typescript
interface PublicSignalEntry {
  signal: string;   // Human-readable description of the signal
  source: string;   // URL or reference where signal was observed
  date?: string;    // ISO 8601 date when signal was observed
}
```

## Field Lifecycle Notes

- `industry` and `size`: Scalar fields. Higher-confidence source wins on conflict.
- `leadership[]`: Array. Union-merge on equal/higher confidence. Dedup by `name`.
- `techStack{}`: Object. Shallow-merge on equal/higher confidence. Key-level granularity for conflicts is not tracked in v1 — whole field is treated as one unit.
- `publicSignals[]`: Array. Always union-merge (listedSignals semantics). Dedup by `signal` string.
- `lastEnrichmentAt`: Scalar. Always overwrite with the more recent timestamp.
- `_sources[]`: Internal. Append-only. Never modified by merge logic directly.
- `conflicts[]`: Internal. Append-only. Manual or automated resolution required.

## Example Context Object

```json
{
  "industry": "Healthcare",
  "size": "200-500",
  "leadership": [
    { "name": "Jane Smith", "title": "CTO", "linkedIn": "https://linkedin.com/in/janesmith" }
  ],
  "techStack": {
    "crm": "Salesforce",
    "ehr": "Epic",
    "cloud": "AWS"
  },
  "publicSignals": [
    {
      "signal": "Series B funding round $40M",
      "source": "https://techcrunch.com/...",
      "date": "2025-03-15"
    }
  ],
  "lastEnrichmentAt": "2026-04-22T10:00:00Z",
  "_sources": [
    { "kind": "enrichment", "ref": "enrich-2026-04-22", "confidence": 0.85 }
  ],
  "conflicts": []
}
```
