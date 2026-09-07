---
description: "T extends NumberType"
---

# Interface: iUserOutgoingApprovalPermission\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:41](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L41)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:53](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L53)

The approval ID of the approved outgoing transfers. Can use "All" to represent all IDs, "!approvalId" to represent all IDs except approvalId, or "approvalId" to represent only approvalId.

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:45](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L45)

The list ID of the initiatedBy addresses of the approved outgoing transfers.

***

### ownershipTimes

> **ownershipTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:51](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L51)

The owned times of the approved outgoing transfers.

***

### permanentlyForbiddenTimes

> **permanentlyForbiddenTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:57](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L57)

The forbidden times of the approved outgoing transfers.

***

### permanentlyPermittedTimes

> **permanentlyPermittedTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:55](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L55)

The permitted times of the approved outgoing transfers.

***

### tokenIds

> **tokenIds**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:49](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L49)

The token IDs of the approved outgoing transfers.

***

### toListId

> **toListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:43](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L43)

The list ID of the to addresses of the approved outgoing transfers.

***

### transferTimes

> **transferTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:47](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L47)

The transfer times of the approved outgoing transfers.
