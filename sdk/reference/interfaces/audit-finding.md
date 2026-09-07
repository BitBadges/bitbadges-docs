---
description: "A single audit finding."
---

# Interface: AuditFinding

Defined in: [packages/bitbadgesjs-sdk/src/core/audit.ts:22](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/audit.ts#L22)

A single audit finding.

## Properties

### agentOnly?

> `optional` **agentOnly?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/audit.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/audit.ts#L34)

Hidden from human consumers (frontend sidebar) when true. Used for
findings that just restate permission state ("canUpdateX is NEUTRAL")
— redundant for humans who can already see the permissions tab, but
useful for CLI / indexer / MCP agents who need a flat summary.

***

### category

> **category**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/audit.ts:24](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/audit.ts#L24)

***

### detail

> **detail**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/audit.ts:26](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/audit.ts#L26)

***

### recommendation

> **recommendation**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/audit.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/audit.ts#L27)

***

### severity

> **severity**: [`AuditSeverity`](/sdk/reference/type-aliases/audit-severity)

Defined in: [packages/bitbadgesjs-sdk/src/core/audit.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/audit.ts#L23)

***

### title

> **title**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/audit.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/audit.ts#L25)
