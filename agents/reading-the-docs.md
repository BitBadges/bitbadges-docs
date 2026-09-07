---
description: "How an agent reads these docs. llms.txt, the full-text dump, bb dev docs, the fetch_docs MCP tool, and the URL patterns of this site."
---

# Reading the docs

Agents can read this site four ways: two static files, one CLI command, and one MCP tool. Pick the one your harness already has.

```bash
# Curated index (about 16 KB): start here, then fetch 1-3 pages
curl -s https://docs.bitbadges.io/llms.txt

# Full-text dump of every page (about 1.6 MB)
curl -s https://docs.bitbadges.io/for-llms.txt

# From the CLI (fetched from GitHub, cached 24 hours in ~/.bitbadges/docs-cache.json)
bb dev docs                          # navigable tree of sections
bb dev docs all                      # the full dump
bb dev docs messages/msg-transfer-tokens
bb dev docs approvals                # partial match: first section containing "approvals"
bb dev docs --refresh                # clear the cache

# Builder skills (shorthand for docs builder-skills)
bb dev skills
bb dev skills smart-token
```

## Static files

| File | Size | Use it for |
| --- | --- | --- |
| `https://docs.bitbadges.io/llms.txt` | about 16 KB | A curated index of the pages that matter for a task, with one line each. Read it first |
| `https://docs.bitbadges.io/for-llms.txt` | about 1.6 MB | Every page concatenated. Load it into a large context or grep it locally |

## CLI

`bb dev docs [section]` browses the same content offline after the first fetch. Sections nest with slashes (`docs learn/approval-criteria/merkle-challenges`). A single word with no exact match does partial matching. Reference: [Dev commands](../cli/dev.md).

## MCP tool

`fetch_docs({ topic })` runs a keyword search over the live docs export and returns the top matching sections. `search_knowledge_base({ query, category })` searches the embedded docs, learnings, recipes, error patterns, and critical rules that ship inside the builder. Both are listed on [MCP builder tools](mcp-tools.md#instructions-and-docs).

## URL patterns

Pages follow predictable paths, so an agent can guess a URL without an index.

| Pattern | Example |
| --- | --- |
| `/token-standard/messages/msg-<kebab>` | `/token-standard/messages/msg-transfer-tokens` |
| `/token-standard/queries/<kebab>` | `/token-standard/queries/get-balance` |
| `/token-standard/concepts/<kebab>` | `/token-standard/concepts/balances`, `/token-standard/concepts/transferability` |
| `/token-standard/approval-criteria/<kebab>` | `/token-standard/approval-criteria/approval-trackers` |
| `/cli/<group>` | `/cli/build`, `/cli/deploy`, `/cli/analyze`, `/cli/dev` |
| `/api` and `/api-reference` | `/api/claims`, `/api/sign-in/setup`; `/api-reference` is the OpenAPI reference |
| `/agents/<page>` | `/agents/mcp-tools`, `/agents/skills/smart-token` |
| `/guides/<verb-the-thing>` | `/guides/create-a-collection`, `/guides/gate-access` |

Every page carries a `description:` frontmatter line, one `# H1`, and code before prose. Message names, query names, and CLI command groups use the exact casing from source.

## Related

- [Agents](README.md)
- [Dev commands](../cli/dev.md)
- [Skills](skills/README.md)
