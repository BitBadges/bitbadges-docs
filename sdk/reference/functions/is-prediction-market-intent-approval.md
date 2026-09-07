---
description: "Detect prediction market intents (1 coinTransfer + predeterminedBalances for badge tokens). Used for both outgoing (sell) and incoming (buy) approvals on…"
---

# Function: isPredictionMarketIntentApproval()

> **isPredictionMarketIntentApproval**(`approval`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/prediction-markets.ts:141](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/prediction-markets.ts#L141)

Detect prediction market intents (1 coinTransfer + predeterminedBalances for badge tokens).
Used for both outgoing (sell) and incoming (buy) approvals on prediction market collections.

## Parameters

### approval

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\>

## Returns

`boolean`
