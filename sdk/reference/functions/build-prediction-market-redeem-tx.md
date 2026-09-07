---
description: "Build redeem msgs by state. Mirrors PredictionRedeemPanel.tsx:"
---

# Function: buildPredictionMarketRedeemTx()

> **buildPredictionMarketRedeemTx**(`args`): `object`

Defined in: [packages/bitbadgesjs-sdk/src/core/prediction-markets.ts:1071](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/prediction-markets.ts#L1071)

Build redeem msgs by state. Mirrors `PredictionRedeemPanel.tsx`:
  - active: burn YES+NO pairs to reclaim depositDenom 1:1.
  - push: burn YES + NO separately, each gets half payout.
  - yes-wins / no-wins: redeem winner 1:1, burn loser without payout.

Returns `{messages: [...]}` ready for `bb deploy`. Emits empty array
when nothing is redeemable.

## Parameters

### args

[`RedeemArgs`](/sdk/reference/interfaces/redeem-args)

## Returns

`object`

### messages

> **messages**: `MsgEnvelope`[]
