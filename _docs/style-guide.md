# BitBadges docs style guide

These rules apply to every page. They exist so the corpus reads as one voice, stays short, and works for both humans and AI agents.

## Page shape

- One `# H1`. Title Case (see "Capitalization"). No emoji in headings.
- Line 2: a single sentence that says what the page is for and who needs it. Not "In this section you will find". Say the thing.
- Frontmatter with one `description:` line (under 160 characters), written as a sentence in sentence case. It feeds search and page previews.
- Headings are `##` and `###` only. Title Case. Stable, descriptive, no numbering.
- A folder `README.md` is a real page: a short intro plus a table of what is inside and when to read it. Never a page that is only a list of links with no context.
- End with a "Related" list of at most 4 links only when the reader needs a next step. No "Conclusion" sections.

## Capitalization

Title Case for the `# H1`, for every `##` and `###` heading, and for the link text of a nav entry in `SUMMARY.md`. Sentence case for everything else: the frontmatter `description:`, body prose, table cells, list items, callouts, and figure captions.

Title Case means:

- Capitalize the first word, the last word, and every noun, pronoun, verb, adjective, adverb, and subordinating conjunction.
- Keep these lowercase when they fall in the middle: the articles `a`, `an`, `the`; the coordinating conjunctions `and`, `but`, `or`, `nor`, `for`, `yet`, `so`; and prepositions of four letters or fewer, such as `at`, `by`, `for`, `from`, `in`, `into`, `of`, `on`, `onto`, `out`, `over`, `per`, `to`, `up`, `via`, `vs`, `with`.
- Capitalize prepositions of five letters or more: Between, Through, Against, Without, Versus, Instead.
- Capitalize the particle of a phrasal verb: "Sign In Users", "Set Up Your AI", "Hand Off to the Browser".
- Capitalize the word after a colon: "Example: Automated Balance Check and Mint".
- Hyphenated compounds capitalize both parts when both carry meaning (Cross-Chain, Time-Based, No-Code, On-Demand, Proof-of-Authority). A true prefix keeps a lowercase second part: Pre-flight, Pre-warm, Re-entrancy.

Never re-case these, in a heading or anywhere else:

- Anything in backticks, and any code identifier: `approvalCriteria`, `ownershipTimes`, `customData`, `snake_case`, `uint64`.
- Message and type names: MsgTransferTokens, ApprovalCriteria, UintRange.
- CLI commands, subcommands, and flags: `bb build`, `tx status`, `--burner`.
- Module names (`x/tokenization`, `x/gamm`), denominations (`ubadge`, `badges:1:utoken`), file names, and URLs.
- Protocol and product names as they are already written: BB-402, x402, IBC, EVM, LCD, RPC, MCP, SDK, API, CLI, JSON, TypeScript, Solidity, Cosmos, Ethereum, BitBadges, Claude Code, Cursor, Scalar.

A heading that is only a code identifier stays exactly as it is: `## approvalCriteria`, `## MsgSetManager`, `## bb build`, `## x/gamm`.

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
- A diagram is a ```mermaid fence, never a pasted bitmap. The site renders it to inline SVG at build time in the page's own colors, and the corpus test fails on a fence the renderer cannot parse. Add `title="..."` on the fence for a caption. Flowcharts (`flowchart LR` or `TD`), sequence, state, class, and ER diagrams are supported. Quote labels that contain punctuation. Keep a diagram to what one paragraph could not say: an order of checks, a branch, two paths that meet.
- Long JSON examples hide their boilerplate. The site renders two views with Collapsed and Full tabs in the caption: Collapsed is the same document with its empty arrays, empty objects, zeros and false flags removed, so it still parses and can be copied and sent as-is; Full is the source untouched. This is automatic for `json` blocks over 24 lines; add `nofold` to keep one fully open. `fold=12-40` still marks line ranges in other languages, and is ignored for JSON because cutting arbitrary lines there would not parse.

## Widgets

- A widget shows what the reader would see on bitbadges.io. A code block shows what they would send. Use both when the page explains an object the site renders (an approval, a permission set, an address list); use only the code block on reference pages.
- One `::widget` per section, with a one-sentence `caption` in sentence case. Widget names and syntax are in `_docs/architecture.md`.
- Widget props use the fixture values in `_docs/fixtures.md`, so the mock agrees with the JSON around it.

## Terminology (use exactly these)

- token, not badge. The only exceptions: `BADGE` the native coin, `ubadge` the denom, and field or type names that still contain "badge" in source.
- collection, token ID, balance, approval, approval criteria, permission, manager, address list, dynamic store, standard, claim, plugin.
- "collection-level approval", "outgoing approval", "incoming approval" (not "user-level" unless contrasting with collection-level).
- `bb` for the CLI in every example. Mention `bitbadgeschaind` once on the install page only.
- "BitBadges API" for the indexer REST API. "chain" or "node" for Cosmos RPC/LCD. Never "indexer API".
- "MCP builder tools" for the MCP server. "Claude Code plugin" for the plugin.
- Mainnet and testnet, lowercase in prose. In a heading they follow Title Case like any other noun ("Test on Mainnet Instead").

## Formatting

- Tables for options, fields, flags, and comparisons. Columns: name, type, required, description (drop columns that are empty everywhere).
- Bullet lists for parallel items only. Max 7 items. Nested bullets max one level.
- Callouts: use the site's supported hint syntax `{% hint style="warning" %}...{% endhint %}` sparingly (info, warning, danger). At most two per page.
- Relative links between pages. Link text is the target page title, so it carries the target's Title Case. Never "here" or "this page".
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

# Concept Name

One or two sentences: what it is and why it exists.

## Shape

The data structure with a JSON example and a field table.

## How It Works

The rules. Short paragraphs. Worked example where helpful.

## Related
```

## Guide page template

```
---
description: One line.
---

# Verb the Thing

One sentence: what you will have at the end. Prerequisites as a short list only if non-obvious.

## 1. Step
code
## 2. Step
code
## Next Steps
```
