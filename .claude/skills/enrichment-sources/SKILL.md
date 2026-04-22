---
name: enrichment-sources
description: Guide for enrichment agents on which data sources to use for which organisation types, with ABN lookup integration.
---

# Enrichment Sources

This skill guides `nt-enrichment` on which external sources to query based on the organisation type and available identifiers.

## Purpose

Before proposal prep, enriching the organisation context improves proposal quality by surfacing:
- Verified company details (legal name, ABN, registered address)
- Leadership and key contacts
- Technology signals (job posts, product mentions, tech stack indicators)
- Financial signals (funding rounds, acquisitions, ASX announcements)
- Industry context (regulatory obligations, recent sector events)

## Source Selection by Organisation Type

| Org Type | Primary Sources | Secondary Sources |
|----------|----------------|-------------------|
| Australian private company | ABN Lookup, LinkedIn, ASIC Connect | Company website, Glassdoor, job boards |
| ASX-listed company | ABN Lookup, ASX announcements, ASIC | LinkedIn, annual reports, news |
| Government agency | ABR (ABN Lookup), agency website | AusTender, Parliamentary Budget Office |
| Foreign company (AU ops) | ASIC Connect, LinkedIn | Company global IR site, news |
| Non-profit / NFP | ACNC Register, ABN Lookup | Annual reports, media |

## Enrichment Priority

Run sources in this order (stop when context is adequately filled):

1. **ABN Lookup** — verify legal name, ABN, ACN, entity type, status (active/cancelled)
2. **ASIC Connect** — directors, registered address, share structure (for Pty Ltd)
3. **LinkedIn** — leadership, headcount, recent posts, job openings (tech stack signals)
4. **ASX announcements** — material events, financial results (if listed)
5. **Company website** — products/services, case studies, press releases
6. **Job boards (Seek, LinkedIn Jobs)** — infer tech stack from job descriptions

## Scripts

| Script | Purpose |
|--------|---------|
| `scripts/abn-lookup.ts` | Thin wrapper for ABN Lookup API |

## ABN Lookup Integration

See `scripts/abn-lookup.ts`. In production, this calls `@repo/research`'s ABN client which handles:
- GUID-authenticated requests to abr.business.gov.au
- JSON response parsing
- Rate limiting and caching

The script exports `lookupAbn(abn: string)` and `lookupAcn(acn: string)`.

## Context Fields Populated

Enrichment output maps to `Organization.context` fields (see `context-merge-rules` skill):

| Enrichment Source | Context Fields |
|-------------------|---------------|
| ABN Lookup | `industry` (via ANZSIC), `size` (proxy via ABN type), `lastEnrichmentAt` |
| LinkedIn | `leadership[]`, `techStack{}`, `publicSignals[]` |
| ASX | `publicSignals[]` (funding/M&A events) |
| Job boards | `techStack{}` (inferred from job descriptions) |

## Confidence Levels by Source

| Source | Confidence | Rationale |
|--------|-----------|-----------|
| ABN Lookup (government) | 0.95 | Official government register |
| ASIC Connect | 0.90 | Legal regulatory filing |
| ASX announcements | 0.85 | Verified market disclosure |
| LinkedIn (company page) | 0.70 | Self-reported, may be outdated |
| Company website | 0.65 | Self-reported |
| Job boards | 0.50 | Inferred, not self-reported |

## What Not to Enrich

- Do not store PII beyond what is necessary for the engagement context
- Do not infer individual employee contact details from enrichment sources
- Do not use enrichment sources that require authentication credentials not held by the platform
