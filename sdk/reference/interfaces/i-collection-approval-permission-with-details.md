---
description: "T extends NumberType"
---

# Interface: iCollectionApprovalPermissionWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:159](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L159)

## Extends

- [`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:149](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L149)

The approval ID of the approved transfers. Can use "All" to represent all IDs, "!approvalId" to represent all IDs except approvalId, or "approvalId" to represent only approvalId.

#### Inherited from

[`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission).[`approvalId`](/sdk/reference/interfaces/i-collection-approval-permission#approvalid)

***

### fromList

> **fromList**: [`iAddressList`](/sdk/reference/interfaces/i-address-list)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L161)

***

### fromListId

> **fromListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:137](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L137)

The list ID of the from addresses of the approved transfers.

#### Inherited from

[`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission).[`fromListId`](/sdk/reference/interfaces/i-collection-approval-permission#fromlistid)

***

### initiatedByList

> **initiatedByList**: [`iAddressList`](/sdk/reference/interfaces/i-address-list)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:162](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L162)

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:141](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L141)

The list ID of the initiatedBy addresses of the approved transfers.

#### Inherited from

[`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission).[`initiatedByListId`](/sdk/reference/interfaces/i-collection-approval-permission#initiatedbylistid)

***

### ownershipTimes

> **ownershipTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:147](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L147)

The owned times of the approved transfers.

#### Inherited from

[`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission).[`ownershipTimes`](/sdk/reference/interfaces/i-collection-approval-permission#ownershiptimes)

***

### permanentlyForbiddenTimes

> **permanentlyForbiddenTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:153](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L153)

The forbidden times of this permission.

#### Inherited from

[`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission).[`permanentlyForbiddenTimes`](/sdk/reference/interfaces/i-collection-approval-permission#permanentlyforbiddentimes)

***

### permanentlyPermittedTimes

> **permanentlyPermittedTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L151)

The permitted times of this permission.

#### Inherited from

[`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission).[`permanentlyPermittedTimes`](/sdk/reference/interfaces/i-collection-approval-permission#permanentlypermittedtimes)

***

### tokenIds

> **tokenIds**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:145](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L145)

The token IDs of the approved transfers.

#### Inherited from

[`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission).[`tokenIds`](/sdk/reference/interfaces/i-collection-approval-permission#tokenids)

***

### toList

> **toList**: [`iAddressList`](/sdk/reference/interfaces/i-address-list)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:160](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L160)

***

### toListId

> **toListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L139)

The list ID of the to addresses of the approved transfers.

#### Inherited from

[`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission).[`toListId`](/sdk/reference/interfaces/i-collection-approval-permission#tolistid)

***

### transferTimes

> **transferTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L143)

The transfer times of the approved transfers.

#### Inherited from

[`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission).[`transferTimes`](/sdk/reference/interfaces/i-collection-approval-permission#transfertimes)
