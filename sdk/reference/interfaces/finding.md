---
description: "A single review finding. All three text fields (title, detail, recommendation) are required. Info-severity items whose recommendation is a no-op should still…"
---

# Interface: Finding

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:30](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L30)

A single review finding. All three text fields (`title`, `detail`,
`recommendation`) are required. Info-severity items whose recommendation
is a no-op should still populate it with something like
"No action required — surfaced for visibility."

## Properties

### agentOnly?

> `optional` **agentOnly?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:50](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L50)

Agent-only escape hatch. When `true`, the finding is hidden from
human consumers (frontend sidebar) but surfaced to agents
(CLI / indexer / MCP). Default is `false` / absent — everyone sees
the finding. Use sparingly for items that are genuinely
agent-internal (e.g. meta-level tool feedback).

***

### category

> **category**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L36)

Free-form grouping label (e.g. `approvals`, `metadata`, `diff`).

***

### code

> **code**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:32](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L32)

Stable machine identifier, e.g. `review.ux.forceful_transfers_allowed`.

***

### detail

> **detail**: [`Localized`](/sdk/reference/interfaces/localized)

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L40)

Full explanation — the "why it matters" paragraph.

***

### recommendation

> **recommendation**: [`Localized`](/sdk/reference/interfaces/localized)

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:42](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L42)

How to fix it. Always populated.

***

### severity

> **severity**: [`Severity`](/sdk/reference/type-aliases/severity)

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L33)

***

### source

> **source**: [`FindingSource`](/sdk/reference/type-aliases/finding-source)

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L34)

***

### title

> **title**: [`Localized`](/sdk/reference/interfaces/localized)

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:38](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L38)

Short label shown as the finding's headline.
