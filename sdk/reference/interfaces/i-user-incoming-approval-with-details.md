---
description: "T extends NumberType"
---

# Interface: iUserIncomingApprovalWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:434](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L434)

## Extends

- [`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### approvalCriteria?

> `optional` **approvalCriteria?**: [`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:439](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L439)

The criteria to be met. These represent the restrictions that must be obeyed such as the total amount approved, max num transfers, merkle challenges, must own tokens, etc.

#### Overrides

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`approvalCriteria`](/sdk/reference/interfaces/i-user-incoming-approval#approvalcriteria)

***

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:274](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L274)

The ID of the approval. Must not be a duplicate of another approval ID in the same timeline.

#### Inherited from

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`approvalId`](/sdk/reference/interfaces/i-user-incoming-approval#approvalid)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:278](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L278)

Arbitrary custom data of the approval

#### Inherited from

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`customData`](/sdk/reference/interfaces/i-user-incoming-approval#customdata)

***

### details?

> `optional` **details?**: [`iApprovalInfoDetails`](/sdk/reference/interfaces/i-approval-info-details)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:440](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L440)

***

### fromList

> **fromList**: [`iAddressList`](/sdk/reference/interfaces/i-address-list)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:436](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L436)

The populated address list for fromListId

***

### fromListId

> **fromListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:264](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L264)

The list ID for the user(s) who is sending the tokens. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Inherited from

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`fromListId`](/sdk/reference/interfaces/i-user-incoming-approval#fromlistid)

***

### initiatedByList

> **initiatedByList**: [`iAddressList`](/sdk/reference/interfaces/i-address-list)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:438](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L438)

The populated address list for initiatedByListId

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:266](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L266)

The list ID for the user(s) who initiate the transfer. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Inherited from

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`initiatedByListId`](/sdk/reference/interfaces/i-user-incoming-approval#initiatedbylistid)

***

### ownershipTimes

> **ownershipTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:272](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L272)

The ownership times of the tokens being transferred.

#### Inherited from

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`ownershipTimes`](/sdk/reference/interfaces/i-user-incoming-approval#ownershiptimes)

***

### tokenIds

> **tokenIds**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:270](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L270)

The token IDs to be transferred.

#### Inherited from

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`tokenIds`](/sdk/reference/interfaces/i-user-incoming-approval#tokenids)

***

### transferTimes

> **transferTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:268](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L268)

The times allowed for the transfer transaction.

#### Inherited from

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`transferTimes`](/sdk/reference/interfaces/i-user-incoming-approval#transfertimes)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:276](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L276)

The URI of the approval.

#### Inherited from

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`uri`](/sdk/reference/interfaces/i-user-incoming-approval#uri)

***

### version

> **version**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:282](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L282)

The version of the approval.

#### Inherited from

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`version`](/sdk/reference/interfaces/i-user-incoming-approval#version)
