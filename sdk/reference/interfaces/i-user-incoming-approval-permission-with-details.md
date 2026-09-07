---
description: "T extends NumberType"
---

# Interface: iUserIncomingApprovalPermissionWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L33)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:149](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L149)

The approval ID of the approved transfers. Can use "All" to represent all IDs, "!approvalId" to represent all IDs except approvalId, or "approvalId" to represent only approvalId.

***

### fromList

> **fromList**: [`iAddressList`](/sdk/reference/interfaces/i-address-list)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L34)

***

### fromListId

> **fromListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:137](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L137)

The list ID of the from addresses of the approved transfers.

***

### initiatedByList

> **initiatedByList**: [`iAddressList`](/sdk/reference/interfaces/i-address-list)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:35](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L35)

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:141](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L141)

The list ID of the initiatedBy addresses of the approved transfers.

***

### ownershipTimes

> **ownershipTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:147](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L147)

The owned times of the approved transfers.

***

### permanentlyForbiddenTimes

> **permanentlyForbiddenTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:153](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L153)

The forbidden times of this permission.

***

### permanentlyPermittedTimes

> **permanentlyPermittedTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L151)

The permitted times of this permission.

***

### tokenIds

> **tokenIds**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:145](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L145)

The token IDs of the approved transfers.

***

### transferTimes

> **transferTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L143)

The transfer times of the approved transfers.
