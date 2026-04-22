# Complexity Signals

Signals used to classify an intake as low, medium, or high complexity.

---

## Low Complexity

All of these are present:
- Single system integration (one source, one destination)
- Both systems are well-known, cloud-hosted SaaS platforms with documented APIs
- Data volume < 100k records per day
- No regulatory or compliance requirements beyond standard privacy
- Greenfield — no legacy migration required
- Client team has technical capacity to maintain post-delivery

**Examples:**
- Zapier-level integration between Xero and HubSpot
- Webhook from Shopify to a Slack notification
- Exporting data from one SaaS to a CSV for reporting

---

## Medium Complexity

One or more of:
- Two or more systems integrated (or one integration with complex data transformation)
- One system is on-prem or has a non-standard / SOAP API
- Data volume 100k–5M records per day
- Standard regulatory compliance required (APRA, Privacy Act, PCI DSS)
- Moderate data quality issues requiring cleansing/mapping
- Light migration component (< 2 years of historical data)
- Client team has limited technical capacity — handover effort required

**Examples:**
- Guidewire PolicyCenter (on-prem) → Salesforce FSC (cloud) policy sync
- Netsuite → Xero migration for a 50-person professional services firm
- Claims data pipeline with APRA reporting outputs

---

## High Complexity

One or more of:
- Distributed systems architecture (microservices, event-driven, message broker)
- Real-time processing requirements (< 1 second latency SLA)
- Machine learning or AI model training/deployment component
- Data lake, warehouse, or large-scale ETL (> 5M records/day or multi-year migration)
- Highly regulated environment (clinical systems, AUSTRAC, ASIC reporting)
- Novel technical problem with no established nterprise reference architecture
- Multiple client teams and stakeholders with conflicting requirements
- Multi-vendor coordination required (nterprise is not the only delivery party)

**Examples:**
- Real-time fraud detection model integrated with a banking core system
- FHIR-compliant clinical data exchange between 3 hospital systems
- Rebuilding a legacy mainframe insurance system on modern cloud architecture
- Multi-country data platform with regulatory data residency requirements
