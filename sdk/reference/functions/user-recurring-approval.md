---
description: "Build the user-side recurring approval doc for a subscription. Returns the chain-friendly proto shape (iUserIncomingApproval<bigint>) — no fromList /…"
---

# Function: userRecurringApproval()

> **userRecurringApproval**(`args`): [`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval)\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/subscriptions.ts:386](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/subscriptions.ts#L386)

Build the user-side recurring approval doc for a subscription.
Returns the chain-friendly proto shape (`iUserIncomingApproval<bigint>`)
— no `fromList` / `initiatedByList` / `details` FE-enrichment fields.
The FE wrapper in `UserIncomingApprovalRegistry.userRecurringApproval`
re-attaches those for its own display layer.

## Parameters

### args

[`UserRecurringApprovalArgs`](/sdk/reference/interfaces/user-recurring-approval-args)

## Returns

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval)\<`bigint`\>
