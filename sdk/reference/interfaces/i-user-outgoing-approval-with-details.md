---
description: "T extends NumberType"
---

# Interface: iUserOutgoingApprovalWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1846](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1846)

## Extends

- [`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### approvalCriteria?

> `optional` **approvalCriteria?**: [`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1851](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1851)

The criteria to be met. These represent the restrictions that must be obeyed such as the total amount approved, max num transfers, merkle challenges, must own tokens, etc.

#### Overrides

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`approvalCriteria`](/sdk/reference/interfaces/i-user-outgoing-approval#approvalcriteria)

***

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:74](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L74)

The ID of the approval. Must not be a duplicate of another approval ID in the same timeline.

#### Inherited from

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`approvalId`](/sdk/reference/interfaces/i-user-outgoing-approval#approvalid)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:78](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L78)

Arbitrary custom data of the approval

#### Inherited from

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`customData`](/sdk/reference/interfaces/i-user-outgoing-approval#customdata)

***

### details?

> `optional` **details?**: [`iApprovalInfoDetails`](/sdk/reference/interfaces/i-approval-info-details)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1852](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1852)

***

### initiatedByList

> **initiatedByList**: [`iAddressList`](/sdk/reference/interfaces/i-address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1850](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1850)

The populated address list for the initiatedByListId

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:66](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L66)

The list ID for the user(s) who initiate the transfer. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Inherited from

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`initiatedByListId`](/sdk/reference/interfaces/i-user-outgoing-approval#initiatedbylistid)

***

### ownershipTimes

> **ownershipTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:72](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L72)

The ownership times of the tokens being transferred.

#### Inherited from

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`ownershipTimes`](/sdk/reference/interfaces/i-user-outgoing-approval#ownershiptimes)

***

### tokenIds

> **tokenIds**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:70](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L70)

The token IDs to be transferred.

#### Inherited from

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`tokenIds`](/sdk/reference/interfaces/i-user-outgoing-approval#tokenids)

***

### toList

> **toList**: [`iAddressList`](/sdk/reference/interfaces/i-address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1848](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1848)

The populated address list for the toListId

***

### toListId

> **toListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:64](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L64)

The list ID for the user(s) who is sending the tokens. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Inherited from

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`toListId`](/sdk/reference/interfaces/i-user-outgoing-approval#tolistid)

***

### transferTimes

> **transferTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:68](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L68)

The times allowed for the transfer transaction.

#### Inherited from

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`transferTimes`](/sdk/reference/interfaces/i-user-outgoing-approval#transfertimes)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:76](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L76)

The URI of the approval.

#### Inherited from

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`uri`](/sdk/reference/interfaces/i-user-outgoing-approval#uri)

***

### version

> **version**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:82](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L82)

The version of the approval.

#### Inherited from

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`version`](/sdk/reference/interfaces/i-user-outgoing-approval#version)
