---
description: "T extends NumberType"
---

# Interface: iPrecalculateBalancesFromApprovalDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:450](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L450)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:454](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L454)

The approval ID of the approval.

***

### approvalLevel

> **approvalLevel**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:459](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L459)

The approval level of the approval "collection", "incoming", or "outgoing".

***

### approverAddress

> **approverAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:464](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L464)

The address of the approval to check. If approvalLevel is "collection", this is blank "".

***

### precalculationOptions?

> `optional` **precalculationOptions?**: [`iPrecalculationOptions`](/sdk/reference/interfaces/i-precalculation-options)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:474](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L474)

The options for precalculating the balances.

***

### version

> **version**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:469](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L469)

The version of the approval.
