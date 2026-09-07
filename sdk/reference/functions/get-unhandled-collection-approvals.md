---
description: "Returns all the approvals that are not handled by the inputted collectionApprovals. All returned approvals will have the ID \"disapproved\"."
---

# Function: getUnhandledCollectionApprovals()

> **getUnhandledCollectionApprovals**(`collectionApprovals`, `ignoreTrackerIds?`, `doNotMerge?`): [`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`bigint`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approval-utils.ts:111](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approval-utils.ts#L111)

Returns all the approvals that are not handled by the inputted collectionApprovals.
All returned approvals will have the ID "__disapproved__".

## Parameters

### collectionApprovals

[`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`bigint`\>[]

### ignoreTrackerIds?

`boolean` = `true`

If true, any combination of (from, to, initiatedBy, tokenIds, transferTimes, ownershipTimes) will be considered handled if
it has a single match (regardless of the IDs). For example, if we have a transfer ('Bob', 'Alice', 'Bob', 1, 1, 1) with IDs ('A', 'B', 'C'),
we won't return that ('Bob', 'Alice', 'Bob', 1, 1, 1) with IDs ('D', 'E', 'F') is unhandled.

### doNotMerge?

`boolean` = `false`

If true, we will not attempt to merge the returned approvals.

## Returns

[`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`bigint`\>[]
