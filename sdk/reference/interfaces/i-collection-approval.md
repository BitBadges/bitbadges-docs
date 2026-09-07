---
description: "T extends NumberType"
---

# Interface: iCollectionApproval\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:328](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L328)

## Extended by

- [`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### approvalCriteria?

> `optional` **approvalCriteria?**: [`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:348](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L348)

The criteria to be met. These represent the restrictions that must be obeyed such as the total amount approved, max num transfers, merkle challenges, must own tokens, etc.

***

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:342](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L342)

The ID of the approval. Must not be a duplicate of another approval ID in the same timeline.

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:346](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L346)

Arbitrary custom data of the approval

***

### fromListId

> **fromListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:332](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L332)

The list ID for the user(s) who is sending the tokens. The ID is either registered on-chain for reusability or follows the reserved ID system.

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:334](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L334)

The list ID for the user(s) who initiate the transfer. The ID is either registered on-chain for reusability or follows the reserved ID system.

***

### ownershipTimes

> **ownershipTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:340](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L340)

The ownership times of the tokens being transferred.

***

### tokenIds

> **tokenIds**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:338](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L338)

The token IDs to be transferred.

***

### toListId

> **toListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:330](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L330)

The list ID for the user(s) who is receiving the tokens. The ID is either registered on-chain for reusability or follows the reserved ID system.

***

### transferTimes

> **transferTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:336](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L336)

The times allowed for the transfer transaction.

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:344](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L344)

The URI of the approval.

***

### version

> **version**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:350](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L350)

The version of the approval.0
