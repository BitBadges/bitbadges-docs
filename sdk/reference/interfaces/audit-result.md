---
description: "The complete result returned by auditCollection."
---

# Interface: AuditResult

Defined in: [packages/bitbadgesjs-sdk/src/core/audit.ts:38](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/audit.ts#L38)

The complete result returned by [auditCollection](/sdk/reference/functions/audit-collection).

## Properties

### approvalSummary

> **approvalSummary**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/audit.ts:43](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/audit.ts#L43)

***

### error?

> `optional` **error?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/audit.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/audit.ts#L44)

***

### findings

> **findings**: [`AuditFinding`](/sdk/reference/interfaces/audit-finding)[]

Defined in: [packages/bitbadgesjs-sdk/src/core/audit.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/audit.ts#L40)

***

### permissionSummary

> **permissionSummary**: `Record`\<`string`, `string`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/audit.ts:42](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/audit.ts#L42)

***

### success

> **success**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/audit.ts:39](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/audit.ts#L39)

***

### summary

> **summary**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/core/audit.ts:41](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/audit.ts#L41)

#### critical

> **critical**: `number`

#### info

> **info**: `number`

#### verdict

> **verdict**: `string`

#### warning

> **warning**: `number`
