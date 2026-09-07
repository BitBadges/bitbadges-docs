---
description: "Find the withdraw approval in a collection. Mirrors findDepositApproval — checks 'withdraw' first, then falls back to 'unback'."
---

# Function: findWithdrawApproval()

> **findWithdrawApproval**(`approvals`): [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\> \| `undefined`

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:117](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L117)

Find the withdraw approval in a collection. Mirrors findDepositApproval
— checks 'withdraw' first, then falls back to 'unback'.

## Parameters

### approvals

readonly [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\>[]

## Returns

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\> \| `undefined`
