---
description: "When true, drop findings tagged agentOnly: true. Frontend human consumers set this. CLI / indexer / MCP callers leave it unset (agents see everything)."
---

# Interface: ReviewContext

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:53](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L53)

## Properties

### hideAgentOnly?

> `optional` **hideAgentOnly?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:72](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L72)

When `true`, drop findings tagged `agentOnly: true`. Frontend
human consumers set this. CLI / indexer / MCP callers leave it
unset (agents see everything).

***

### onChainCollection?

> `optional` **onChainCollection?**: `unknown`

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:60](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L60)

Prior on-chain collection state. Required for diff checks
(deleted approvals, tracker-id changes, claim plugin diffs) and
for update-only suppressions. Everything else runs purely on the
proposed collection's structure.

***

### skipSources?

> `optional` **skipSources?**: [`FindingSource`](/sdk/reference/type-aliases/finding-source)[]

Defined in: [packages/bitbadgesjs-sdk/src/core/review-types.ts:66](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-types.ts#L66)

Skip whole finding families by source. Frontend humans can pass
`['audit']` to hide design-noise, but the default is to show
everything. Agents typically omit this entirely.
