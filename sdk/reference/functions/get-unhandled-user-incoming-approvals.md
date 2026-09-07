---
description: "Wrapper for getUnhandledCollectionApprovals that returns the unhandled approvals for a user."
---

# Function: getUnhandledUserIncomingApprovals()

> **getUnhandledUserIncomingApprovals**(`approvals`, `userAddress`, `ignoreTrackerIds`, `doNotMerge?`): [`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`bigint`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approval-utils.ts:209](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approval-utils.ts#L209)

Wrapper for [getUnhandledCollectionApprovals](/sdk/reference/functions/get-unhandled-collection-approvals) that returns the unhandled approvals for a user.

## Parameters

### approvals

[`UserIncomingApprovalWithDetails`](/sdk/reference/classes/user-incoming-approval-with-details)\<`bigint`\>[]

### userAddress

`string`

### ignoreTrackerIds

`boolean`

### doNotMerge?

`boolean`

## Returns

[`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`bigint`\>[]
