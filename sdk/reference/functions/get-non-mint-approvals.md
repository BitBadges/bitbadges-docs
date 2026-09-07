---
description: "Returns the approvals without the \"Mint\" address in any fromList. For ones with \"Mint\" and other addresses ABC, for example, it will return just ABC."
---

# Function: getNonMintApprovals()

> **getNonMintApprovals**\<`T`\>(`collectionApprovals`): [`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approval-utils.ts:235](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approval-utils.ts#L235)

Returns the approvals without the "Mint" address in any fromList.
For ones with "Mint" and other addresses ABC, for example, it will return just ABC.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### collectionApprovals

[`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`T`\>[]

## Returns

[`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`T`\>[]
