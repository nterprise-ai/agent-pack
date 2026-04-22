# Application Domain Reference

Full industry taxonomy for nterprise engagements. Each entry includes ANZSIC codes, common platforms, typical integration patterns, and regulatory context.

---

## General Insurance

**ANZSIC Division:** K — Finance and Insurance  
**ANZSIC Class:** 6321 General Insurance

### Common Platforms

| Category | Vendors |
|----------|---------|
| Core Policy | Guidewire PolicyCenter, Duck Creek Policy, Majesco Policy |
| Claims | Guidewire ClaimCenter, Duck Creek Claims, EbixExchange |
| Billing | Guidewire BillingCenter, Duck Creek Billing |
| CRM | Salesforce Financial Services Cloud, Microsoft Dynamics 365 |
| Document | OpenText, DocuSign, Guidewire DocumentCenter |
| Reinsurance | RI3K, Sequel, Rein4ce |

### Integration Patterns

- Policy admin system → CRM (customer 360 for brokers)
- Claims system → ERP (payments, reserving)
- Data warehouse for actuarial and reporting
- API gateway for broker portals and aggregator feeds

### Regulatory Context

- APRA CPS 234 (information security), CPS 230 (operational risk)
- ASIC RG 271 (complaints handling)
- ICA General Insurance Code of Practice

---

## Financial Services (Banking & Wealth)

**ANZSIC Division:** K — Finance and Insurance  
**ANZSIC Class:** 6221 Banking, 6231 Life Insurance, 6241 Superannuation Funds

### Common Platforms

| Category | Vendors |
|----------|---------|
| Core Banking | Temenos Transact, FIS Modern Banking, nCino |
| Wealth | IRESS Xplan, Midwinter AdviserLogic, Salesforce FSC |
| CRM | Salesforce Financial Services Cloud, Microsoft Dynamics 365 |
| Payments | NPP (New Payments Platform), BPAY, Mastercard/Visa gateway |
| Compliance | NICE Actimize, Refinitiv World-Check, ComplyAdvantage |

### Integration Patterns

- Core banking → CRM (relationship banking)
- Wealth platform → Document management (SoA generation)
- Transaction monitoring → AML/KYC platforms
- Open banking (CDR) API exposure

### Regulatory Context

- APRA CPS 234, CPS 231, CPS 232
- ASIC RG 175 (AFS licensing), RG 255 (best interests)
- AML/CTF Act (AUSTRAC reporting)
- Consumer Data Right (CDR) obligations

---

## Logistics & Supply Chain

**ANZSIC Division:** I — Transport, Postal and Warehousing  
**ANZSIC Class:** 4610 Road Freight Transport, 5010 Water Freight Transport, 4800 Warehousing and Storage

### Common Platforms

| Category | Vendors |
|----------|---------|
| TMS | SAP Transportation Management, Oracle TMS, Blue Yonder TMS, MercuryGate |
| WMS | Körber (HighJump), Manhattan Associates, SAP EWM, Infor WMS |
| ERP | SAP S/4HANA, Oracle ERP Cloud, Microsoft Dynamics 365 |
| Track & Trace | project44, Descartes, FourKites |
| Last-Mile | Onfleet, Routific, Circuit |

### Integration Patterns

- ERP → TMS (order-to-shipment)
- TMS → WMS (inbound receipt, outbound pick)
- Track & trace → customer portal (visibility)
- IoT sensors → WMS (inventory accuracy)

### Regulatory Context

- Chain of Responsibility (HVNL) for heavy vehicle operators
- Dangerous goods (ADG Code)
- Cold chain compliance (TGA, FSANZ)

---

## Public Sector

**ANZSIC Division:** O — Public Administration and Safety  
**ANZSIC Class:** 7510 Central Government, 7520 State Government, 7530 Local Government

### Common Platforms

| Category | Vendors |
|----------|---------|
| ERP / Finance | TechOne, SAP S/4HANA Public Sector, Microsoft Dynamics 365 |
| CRM / Case | Salesforce Government Cloud, Microsoft Dynamics 365, ServiceNow |
| Document / Records | TRIM (OpenText), Objective ECM, SharePoint |
| GIS | ESRI ArcGIS, MapInfo |
| Grants | SmartyGrants, GovGrants |

### Integration Patterns

- ERP → HR/payroll (Chris21, Ascender, SAP SuccessFactors)
- CRM → document management (case evidence)
- GIS → asset management
- Single sign-on via Microsoft Entra ID (formerly Azure AD)

### Regulatory Context

- Australian Privacy Act 1988 (APP compliance)
- PSPF (Protective Security Policy Framework)
- ISM (Information Security Manual, ACSC)
- State-specific procurement and ICT policies

---

## Retail & E-Commerce

**ANZSIC Division:** G — Retail Trade  
**ANZSIC Class:** 4111–4292 (various retail classes)

### Common Platforms

| Category | Vendors |
|----------|---------|
| E-Commerce | Shopify Plus, BigCommerce, Salesforce Commerce Cloud, Magento |
| POS | Square, Lightspeed, Vend, Shopify POS |
| ERP | SAP Retail, Microsoft Dynamics 365 Commerce, MYOB Advanced |
| OMS / WMS | Manhattan Associates OMS, Fluent Commerce, Körber |
| Loyalty | Salesforce Loyalty Management, Yotpo, LoyaltyLion |

### Integration Patterns

- E-commerce platform → ERP (orders, inventory)
- POS → inventory system (real-time stock)
- OMS → 3PL / fulfilment (shipping)
- Loyalty → CRM (customer data)

### Regulatory Context

- Australian Consumer Law (ACL) — returns, warranties
- Privacy Act (customer data, email marketing consent)
- Payment Card Industry DSS (PCI DSS) for card data

---

## Healthcare

**ANZSIC Division:** Q — Health Care and Social Assistance  
**ANZSIC Class:** 8401 Hospitals, 8511 General Practice, 8599 Allied Health

### Common Platforms

| Category | Vendors |
|----------|---------|
| Clinical (Hospital) | Epic, Cerner (Oracle Health), Meditech |
| Clinical (GP/Allied) | Best Practice, MedTech, Genie, Zedmed |
| Practice Management | Cliniko, Nookal, Coreplus |
| Pathology / Imaging | Mirth Connect (HL7), Sectra, RIS/PACS systems |
| Pharmacy | Fred Dispense, Minfos |

### Integration Patterns

- Clinical system → Pathology via HL7/FHIR
- Practice management → Medicare (bulk billing claims)
- Hospital EHR → patient portal
- Clinical → state health information exchange

### Regulatory Context

- My Health Records Act 2012
- Privacy Act (Health Records — APP 3, 6, 11)
- TGA (medical devices software)
- State Health Records legislation

---

## Professional Services

**ANZSIC Division:** M — Professional, Scientific and Technical Services  
**ANZSIC Class:** 6910–7329 (various)

### Common Platforms

| Category | Vendors |
|----------|---------|
| CRM | Salesforce, HubSpot, Pipedrive, Microsoft Dynamics 365 |
| PSA / Project | Mavenlink (Kantata), Teamwork, Float, Microsoft Project |
| Accounting | Xero, MYOB AccountRight, QuickBooks |
| HR | Employment Hero, ELMO, Bamboo HR |
| Document | SharePoint, Google Workspace, DocuSign |

### Integration Patterns

- CRM → PSA (opportunity to project)
- PSA → accounting (time billing, invoicing)
- HR → payroll integration
- Document signing → CRM (proposal acceptance)

### Regulatory Context

- Privacy Act (client data handling)
- Tax File Number Declaration handling (payroll)
- Trust accounting (legal/financial advisers — varies by state)

---

## Construction & Property

**ANZSIC Division:** E — Construction  
**ANZSIC Class:** 3010–3290 (various construction classes)

### Common Platforms

| Category | Vendors |
|----------|---------|
| Project Management | Procore, Aconex (Oracle), Autodesk Construction Cloud |
| Estimating | Buildxact, Cubit Estimating, Cheops |
| ERP | Viewpoint Vista, Sage 300 Construction, MYOB Advanced |
| Document | Aconex, Procore Docs, SharePoint |
| HR/Payroll | Employment Hero, Astute Payroll, Chris21 |

### Integration Patterns

- Project management → ERP (cost tracking, subcontractor payments)
- Estimating → project management (budget import)
- Site IoT → safety reporting
- Document control → BIM (Revit, Navisworks)

### Regulatory Context

- Building Code of Australia (NCC)
- Security of Payment legislation (varies by state)
- Work Health and Safety Act (WHS Act)
- Modern Slavery Act (supply chain due diligence)

---

## Manufacturing

**ANZSIC Division:** C — Manufacturing  
**ANZSIC Class:** 1100–2599 (various manufacturing classes)

### Common Platforms

| Category | Vendors |
|----------|---------|
| ERP | SAP S/4HANA, Microsoft Dynamics 365, SYSPRO, Epicor |
| MES | Rockwell FactoryTalk, Siemens Opcenter, Tulip |
| WMS | SAP EWM, Infor WMS, Körber |
| PLM | Siemens Teamcenter, PTC Windchill, Dassault ENOVIA |
| Quality | ETQ, MasterControl, SAP QM |

### Integration Patterns

- ERP → MES (production orders, BOM)
- MES → WMS (goods receipt, material consumption)
- SCADA/IoT → MES (OEE, downtime)
- PLM → ERP (engineering change orders)

### Regulatory Context

- ISO 9001 (quality management)
- ISO 14001 (environmental)
- HACCP / FSANZ (food manufacturers)
- TGA (therapeutic goods manufacturers)

---

## Education

**ANZSIC Division:** P — Education and Training  
**ANZSIC Class:** 8010–8290 (various education classes)

### Common Platforms

| Category | Vendors |
|----------|---------|
| SIS | TechOne Student Management, Civica Synergetic, Ellucian |
| LMS | Canvas, Moodle, Blackboard, D2L Brightspace |
| CRM | Salesforce Education Cloud, Microsoft Dynamics 365 |
| Finance | TechOne Finance, Microsoft Dynamics 365, SAP |
| Library | Ex Libris Alma, Innovative Interfaces |

### Integration Patterns

- SIS → LMS (enrolment, results)
- CRM → SIS (prospectus to enrolment)
- SIS → finance (fee calculation, HECS/HELP)
- LMS → analytics (learning analytics dashboards)

### Regulatory Context

- TEQSA (higher education) / ASQA (VET)
- Australian Qualifications Framework (AQF)
- Privacy Act (student records)
- ESOS Act (international students)
