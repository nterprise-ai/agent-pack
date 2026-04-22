---
name: application-domains
description: Industry taxonomy for nterprise engagements — maps client industries to ANZSIC codes, common platforms, and engagement patterns.
---

# Application Domains

This skill provides the industry taxonomy used across nterprise intake, classification, and proposal workflows.

## Purpose

When classifying a client engagement, agents use this taxonomy to:
1. Identify the primary and secondary industry verticals
2. Match to known platforms and system patterns in that vertical
3. Surface relevant regulatory or compliance context
4. Calibrate proposal language and solution patterns

## Industries Covered

See `references/domains.md` for the full taxonomy including:
- ANZSIC codes for each industry
- Common ERP, CRM, and platform stacks by vertical
- Regulatory context (where applicable)
- Typical integration patterns

## Quick Reference — Primary Verticals

| Industry | ANZSIC Division | Typical Platforms |
|----------|----------------|-------------------|
| General Insurance | K — Finance and Insurance | Guidewire, Duck Creek, Majesco, Salesforce FSC |
| Financial Services | K — Finance and Insurance | Salesforce FSC, nCino, Temenos, FIS |
| Logistics & Supply Chain | I — Transport, Postal, Warehousing | SAP TM, Oracle TMS, Blue Yonder, Körber |
| Public Sector | O — Public Administration | Microsoft Dynamics, ServiceNow, TechOne, Civica |
| Retail & E-Commerce | G — Retail Trade | Shopify, Salesforce Commerce, SAP Retail, MYOB |
| Healthcare | Q — Health Care and Social Assistance | Epic, Cerner, MedTech, Genie, Best Practice |
| Professional Services | M — Professional, Scientific, Technical | Salesforce, HubSpot, Xero, MYOB, ConnectWise |
| Construction & Property | E — Construction | Procore, Aconex, Buildxact, Viewpoint |
| Manufacturing | C — Manufacturing | SAP S/4HANA, Microsoft Dynamics 365, SYSPRO |
| Education | P — Education and Training | Canvas, Blackboard, Salesforce EDU, TechOne |

## Usage in Classification

When the intake mentions an industry, look up the vertical in `references/domains.md` to:
- Confirm the ANZSIC code to include in classification output
- Identify systems the client likely runs (helps scope integration work)
- Apply the right regulatory lens (e.g. APRA for financial services, TGA for healthcare)

## Usage in Proposal

In `nt-prepare-solution.md`, reference this skill to:
- Name the industry-standard platforms in the solution architecture
- Describe integration patterns using the correct vendor terminology
- Surface known compliance requirements that affect the architecture
