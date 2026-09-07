---
description: "Wrapper for getUnhandledCollectionApprovals that returns the unhandled approvals for a user."
---

# Function: getUnhandledUserOutgoingApprovals()

> **getUnhandledUserOutgoingApprovals**(`approvals`, `userAddress`, `ignoreTrackerIds`, `doNotMerge?`): [`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`bigint`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approval-utils.ts:184](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approval-utils.ts#L184)

Wrapper for [getUnhandledCollectionApprovals](/sdk/reference/functions/get-unhandled-collection-approvals) that returns the unhandled approvals for a user.

## Parameters

### approvals

[`UserOutgoingApprovalWithDetails`](/sdk/reference/classes/user-outgoing-approval-with-details)\<`bigint`\>[]

### userAddress

`string`

### ignoreTrackerIds

`boolean`

### doNotMerge?

`boolean`

## Returns

[`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`bigint`\>[]
