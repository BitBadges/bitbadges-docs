---
description: "Appends the default approval (self-initiated is approved) to the front of the list. This will have \"self-initiated-incoming\" for IDs."
---

# Function: appendSelfInitiatedIncomingApproval()

> **appendSelfInitiatedIncomingApproval**(`currApprovals`, `userAddress`): [`UserIncomingApprovalWithDetails`](/sdk/reference/classes/user-incoming-approval-with-details)\<`bigint`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approval-utils.ts:42](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approval-utils.ts#L42)

Appends the default approval (self-initiated is approved) to the front of the list.
This will have "self-initiated-incoming" for IDs.

## Parameters

### currApprovals

[`UserIncomingApprovalWithDetails`](/sdk/reference/classes/user-incoming-approval-with-details)\<`bigint`\>[]

### userAddress

`string`

## Returns

[`UserIncomingApprovalWithDetails`](/sdk/reference/classes/user-incoming-approval-with-details)\<`bigint`\>[]
