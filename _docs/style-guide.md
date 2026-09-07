# BitBadges docs style guide

These rules apply to every page. They exist so the corpus reads as one voice, stays short, and works for both humans and AI agents.

## Page shape

- One `# H1`. Sentence case. No emoji in headings.
- Line 2: a single sentence that says what the page is for and who needs it. Not "In this section you will find". Say the thing.
- Frontmatter with one `description:` line (under 160 characters). It feeds search and page previews.
- Headings are `##` and `###` only. Sentence case. Stable, descriptive, no numbering.
- A folder `README.md` is a real page: a short intro plus a table of what is inside and when to read it. Never a page that is only a list of links with no context.
- End with a "Related" list of at most 4 links only when the reader needs a next step. No "Conclusion" sections.

## Sentences

- Short sentences. One idea each. Aim under 20 words.
- Active voice, present tense. "The chain rejects the transfer" not "the transfer will be rejected by the chain".
- No em-dashes or en-dashes. Use a period, a comma, or parentheses.
- No hype. Banned words and phrases: seamlessly, revolutionary, next-generation, powerful, robust, leverage, unlock, 100x, 1000x, game-changing, cutting-edge, battle-tested, out of the box, plug-and-play, infinitely, simply, just (as filler), "all you need", "everything you need", "look no further", "dive in", "let's", "whether you're ... or ...".
- No rhetorical questions as headings or lead sentences.
- No "Note that", "It is important to note", "Please note". State the fact.
- No first-person plural marketing voice ("we believe", "our revolutionary"). Third person or imperative.
- Do not repeat a concept. Explain it once on its canonical page and link to it elsewhere with at most one sentence of context.

## Code

- Code before prose. Show the working example first, then explain only the parts a reader would get wrong.
- Every reference page (message, query, CLI command, SDK function, API concept) has at least one complete, copyable example.
- Prefer showing the same action in the surfaces that matter, in this order when applicable: `bb` CLI, TypeScript SDK, raw JSON. Do not show a surface that adds nothing.
- Fenced blocks always carry a language: `bash`, `ts`, `json`, `go`, `solidity`, `proto`, `yaml`.
- Placeholders are `<angle-brackets>` or obviously fake values (`bb1abc...`). Never a real private key or mnemonic.
- Field names, flags, types, and message names go in backticks and use the exact casing from source.

## Terminology (use exactly these)

- token, not badge. The only exceptions: `BADGE` the native coin, `ubadge` the denom, and field or type names that still contain "badge" in source.
- collection, token ID, balance, approval, approval criteria, permission, manager, address list, dynamic store, standard, claim, plugin.
- "collection-level approval", "outgoing approval", "incoming approval" (not "user-level" unless contrasting with collection-level).
- `bb` for the CLI in every example. Mention `bitbadgeschaind` once on the install page only.
- "BitBadges API" for the indexer REST API. "chain" or "node" for Cosmos RPC/LCD. Never "indexer API".
- "MCP builder tools" for the MCP server. "Claude Code plugin" for the plugin.
- Mainnet and testnet, lowercase.

## Formatting

- Tables for options, fields, flags, and comparisons. Columns: name, type, required, description (drop columns that are empty everywhere).
- Bullet lists for parallel items only. Max 7 items. Nested bullets max one level.
- Callouts: use the site's supported hint syntax `{% hint style="warning" %}...{% endhint %}` sparingly (info, warning, danger). At most two per page.
- Relative links between pages. Link text is the target page title, not "here" or "this page".
- Images only when they carry information a sentence cannot. Every image has alt text.
- No horizontal rules.
- No "Table of contents" sections. The site renders one.

## Reference page template (messages, queries, CLI commands, API concepts)

```
---
description: One line.
---

# MsgName

One sentence: what it does and who signs it.

## Example

```bash
bb ...
```

```ts
...
```

```json
{ ... }
```

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |

## Behavior

Short bullets or paragraphs: validation rules, permissions checked, side effects, errors.

## Related
- ...
```

## Concept page template

```
---
description: One line.
---

# Concept name

One or two sentences: what it is and why it exists.

## Shape

The data structure with a JSON example and a field table.

## How it works

The rules. Short paragraphs. Worked example where helpful.

## Related
```

## Guide page template

```
---
description: One line.
---

# Verb the thing

One sentence: what you will have at the end. Prerequisites as a short list only if non-obvious.

## 1. Step
code
## 2. Step
code
## Next steps
```
