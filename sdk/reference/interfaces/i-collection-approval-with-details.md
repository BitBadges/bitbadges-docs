---
description: "T extends NumberType"
---

# Interface: iCollectionApprovalWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2261](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2261)

## Extends

- [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### approvalCriteria?

> `optional` **approvalCriteria?**: [`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2270](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2270)

The criteria to be met. These represent the restrictions that must be obeyed such as the total amount approved, max num transfers, merkle challenges, must own tokens, etc.

#### Overrides

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`approvalCriteria`](/sdk/reference/interfaces/i-collection-approval#approvalcriteria)

***

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:342](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L342)

The ID of the approval. Must not be a duplicate of another approval ID in the same timeline.

#### Inherited from

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`approvalId`](/sdk/reference/interfaces/i-collection-approval#approvalid)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:346](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L346)

Arbitrary custom data of the approval

#### Inherited from

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`customData`](/sdk/reference/interfaces/i-collection-approval#customdata)

***

### details?

> `optional` **details?**: [`iApprovalInfoDetails`](/sdk/reference/interfaces/i-approval-info-details)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2263](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2263)

The approval metadata details

***

### fromList

> **fromList**: [`iAddressList`](/sdk/reference/interfaces/i-address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2267](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2267)

The populated address list for the fromListId

***

### fromListId

> **fromListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:332](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L332)

The list ID for the user(s) who is sending the tokens. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Inherited from

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`fromListId`](/sdk/reference/interfaces/i-collection-approval#fromlistid)

***

### initiatedByList

> **initiatedByList**: [`iAddressList`](/sdk/reference/interfaces/i-address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2269](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2269)

The populated address list for the initiatedByListId

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:334](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L334)

The list ID for the user(s) who initiate the transfer. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Inherited from

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`initiatedByListId`](/sdk/reference/interfaces/i-collection-approval#initiatedbylistid)

***

### ownershipTimes

> **ownershipTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:340](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L340)

The ownership times of the tokens being transferred.

#### Inherited from

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`ownershipTimes`](/sdk/reference/interfaces/i-collection-approval#ownershiptimes)

***

### tokenIds

> **tokenIds**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:338](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L338)

The token IDs to be transferred.

#### Inherited from

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`tokenIds`](/sdk/reference/interfaces/i-collection-approval#tokenids)

***

### toList

> **toList**: [`iAddressList`](/sdk/reference/interfaces/i-address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2265](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2265)

The populated address list for the toListId

***

### toListId

> **toListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:330](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L330)

The list ID for the user(s) who is receiving the tokens. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Inherited from

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`toListId`](/sdk/reference/interfaces/i-collection-approval#tolistid)

***

### transferTimes

> **transferTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:336](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L336)

The times allowed for the transfer transaction.

#### Inherited from

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`transferTimes`](/sdk/reference/interfaces/i-collection-approval#transfertimes)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:344](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L344)

The URI of the approval.

#### Inherited from

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`uri`](/sdk/reference/interfaces/i-collection-approval#uri)

***

### version

> **version**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:350](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L350)

The version of the approval.0

#### Inherited from

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`version`](/sdk/reference/interfaces/i-collection-approval#version)
