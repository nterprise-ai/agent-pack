# agent-pack

Platform agent + skill templates for nterprise-ai engagements.

This is a GitHub template repository. Use it to seed new engagement workspaces with a standardized `.claude/` directory layout including versioned platform agents.

## Usage

Create a new engagement repo from this template:

```bash
gh repo create my-engagement --template nterprise-ai/agent-pack --private
```

Or use the GitHub UI: click **"Use this template"** on the repository page.

## Structure

```
.claude/
  VERSION          # Semver version of this agent-pack release
  agents/          # Platform agents (13 total)
  skills/          # Skill files (seeded by claudius sync — see issue #235)
```

## Version

Current: `1.0.0`

See `.claude/VERSION`.

## Agents

### Full implementations

| Agent | Model | Purpose |
|---|---|---|
| `nt-intake-capture` | claude-opus-4-7 | Conversational project intake |
| `nt-assess-completeness` | claude-sonnet-4-6 | Intake completeness scoring |
| `nt-classify-intake` | claude-sonnet-4-6 | Complexity and fit classification |

### Stubs (implementation in progress)

| Agent | Purpose |
|---|---|
| `nt-proposal-orchestrator` | Proposal generation coordination |
| `nt-prepare-scope` | Scope document preparation |
| `nt-prepare-plan` | Engagement plan preparation |
| `nt-prepare-brief` | Client brief preparation |
| `nt-prepare-estimate` | Effort and cost estimation |
| `nt-prepare-success-criteria` | Success criteria preparation |
| `nt-refinement` | Deliverable refinement |
| `nt-enrichment` | Intake enrichment with external data |
| `nt-ingestion` | Source document ingestion |
| `nt-daily-update` | Daily project status updates |
| `nt-project-coordinator` | Cross-agent project coordination |

## License

MIT — see [LICENSE](LICENSE).
