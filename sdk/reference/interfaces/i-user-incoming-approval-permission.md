---
description: "T extends NumberType"
---

# Interface: iUserIncomingApprovalPermission\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:63](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L63)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:75](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L75)

The approval ID of the approved incoming transfers. Can use "All" to represent all IDs, "!approvalId" to represent all IDs except approvalId, or "approvalId" to represent only approvalId.

***

### fromListId

> **fromListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:65](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L65)

The list ID of the from addresses of the approved incoming transfers.

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:67](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L67)

The list ID of the initiatedBy addresses of the approved incoming transfers.

***

### ownershipTimes

> **ownershipTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:73](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L73)

The owned times of the approved incoming transfers.

***

### permanentlyForbiddenTimes

> **permanentlyForbiddenTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:79](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L79)

The forbidden times of the approved incoming transfers.

***

### permanentlyPermittedTimes

> **permanentlyPermittedTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:77](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L77)

The permitted times of the approved incoming transfers.

***

### tokenIds

> **tokenIds**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:71](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L71)

The token IDs of the approved incoming transfers.

***

### transferTimes

> **transferTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:69](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L69)

The transfer times of the approved incoming transfers.
