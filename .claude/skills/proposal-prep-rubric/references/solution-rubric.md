# Solution Rubric

Quality checklist for `proposal/solution.md`.

---

## Must Criteria (all required to pass gate)

- [ ] **Data flow described in one sentence.** Before any component detail, one sentence describes how data or work moves through the system end-to-end.
- [ ] **All technologies named specifically.** No generic terms. "Python FastAPI on Azure App Service" not "a REST API". "Salesforce REST API v56" not "CRM API".
- [ ] **All integrations named specifically.** Each integration names the source, destination, protocol, and data exchanged.
- [ ] **AI layer described (if applicable).** If AI is part of the solution, the model, the prompt pattern, and the data inputs are named.
- [ ] **Security approach stated.** Authentication method, data-in-transit encryption, and any compliance requirements addressed.
- [ ] **No consulting-speak.** Brand voice check passes.

## Should Criteria (80% required)

- [ ] Architecture diagram described in text (Mermaid or prose diagram reference)
- [ ] Known risks for each major component identified
- [ ] Scalability approach noted (even if "not applicable at current volume")
- [ ] Monitoring and observability approach described
- [ ] Section length ≥ 600 words

## Minimum Word Count

600 words for the solution section.

## Structure

```markdown
## Overview
[one-sentence data flow + solution summary]

## Architecture
[component-by-component description]

## Integrations
[named integrations table or descriptions]

## AI Layer
[if applicable]

## Security
[auth, encryption, compliance]

## Risks and Mitigations
[per component]
```
