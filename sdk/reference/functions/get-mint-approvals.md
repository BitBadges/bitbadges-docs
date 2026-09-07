---
description: "Returns the approvals with the \"Mint\" address in any fromList. For ones with \"Mint\" and addresses ABC, for example, it will return just Mint."
---

# Function: getMintApprovals()

> **getMintApprovals**\<`T`\>(`collectionApprovals`): [`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approval-utils.ts:272](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approval-utils.ts#L272)

Returns the approvals with the "Mint" address in any fromList.
For ones with "Mint" and addresses ABC, for example, it will return just Mint.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### collectionApprovals

[`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`T`\>[]

## Returns

[`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`T`\>[]
