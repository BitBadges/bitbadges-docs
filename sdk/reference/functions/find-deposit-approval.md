---
description: "Find the deposit approval in a collection. Uses substring match (deposit | back) to handle both the new naming (smart-token-deposit) and legacy collections…"
---

# Function: findDepositApproval()

> **findDepositApproval**(`approvals`): [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\> \| `undefined`

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:100](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L100)

Find the deposit approval in a collection. Uses substring match
(deposit | back) to handle both the new naming (`smart-token-deposit`)
and legacy collections (`smart-account-backing`, `smart-token-backing`).

Order matters: we check 'deposit' first (most specific) before falling
back to 'back' to avoid matching 'unbacking' (which contains 'back').

## Parameters

### approvals

readonly [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\>[]

## Returns

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\> \| `undefined`
