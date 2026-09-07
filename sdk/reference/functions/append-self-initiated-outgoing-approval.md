---
description: "Appends the default approval (self-initiated is approved) to the front of the list. This will have \"self-initiated-outgoing\" for IDs."
---

# Function: appendSelfInitiatedOutgoingApproval()

> **appendSelfInitiatedOutgoingApproval**(`currApprovals`, `userAddress`): [`UserOutgoingApprovalWithDetails`](/sdk/reference/classes/user-outgoing-approval-with-details)\<`bigint`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approval-utils.ts:74](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approval-utils.ts#L74)

Appends the default approval (self-initiated is approved) to the front of the list.
This will have "self-initiated-outgoing" for IDs.

## Parameters

### currApprovals

[`UserOutgoingApprovalWithDetails`](/sdk/reference/classes/user-outgoing-approval-with-details)\<`bigint`\>[]

### userAddress

`string`

## Returns

[`UserOutgoingApprovalWithDetails`](/sdk/reference/classes/user-outgoing-approval-with-details)\<`bigint`\>[]
