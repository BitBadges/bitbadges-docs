---
description: "Validates if a state transition (old approvals -> new approvals) is valid, given the current permissions."
---

# Function: validateCollectionApprovalsUpdate()

> **validateCollectionApprovalsUpdate**\<`T`\>(`oldApprovals`, `newApprovals`, `canUpdateCollectionApprovals`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2501](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2501)

Validates if a state transition (old approvals -> new approvals) is valid, given the current permissions.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### oldApprovals

[`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`T`\>[]

### newApprovals

[`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`T`\>[]

### canUpdateCollectionApprovals

[`CollectionApprovalPermissionWithDetails`](/sdk/reference/classes/collection-approval-permission-with-details)\<`T`\>[]

## Returns

`Error` \| `null`
