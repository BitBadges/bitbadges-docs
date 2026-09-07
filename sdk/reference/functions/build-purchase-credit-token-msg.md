---
description: "Build the MsgTransferTokens for purchasing N credit-token units from a scaled tier. The chain handles the rate math via the approval's scalingBalances — we…"
---

# Function: buildPurchaseCreditTokenMsg()

> **buildPurchaseCreditTokenMsg**(`creator`, `collectionId`, `tier`, `units`): [`PurchaseCreditTokenMsg`](/sdk/reference/interfaces/purchase-credit-token-msg)

Defined in: [packages/bitbadgesjs-sdk/src/core/credit-tokens.ts:156](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/credit-tokens.ts#L156)

Build the MsgTransferTokens for purchasing N credit-token units from a
scaled tier. The chain handles the rate math via the approval's
`scalingBalances` — we just set the balances to
`mintAmount × multiplier` and prioritize the approval.

For legacy (per-tier) approvals, pass `tier.isScaled === false` and we
fall back to the precalculate-from-approval flow (one tx per unit).
Caller can repeat the same msg N times for N units.

## Parameters

### creator

`string`

### collectionId

`string`

### tier

[`CreditTokenTier`](/sdk/reference/interfaces/credit-token-tier)

### units

`bigint`

## Returns

[`PurchaseCreditTokenMsg`](/sdk/reference/interfaces/purchase-credit-token-msg)
