---
description: "Strict structural validation for prediction market collections."
---

# Function: validatePredictionMarketCollection()

> **validatePredictionMarketCollection**(`collection`): [`PredictionMarketValidationResult`](/sdk/reference/interfaces/prediction-market-validation-result)

Defined in: [packages/bitbadgesjs-sdk/src/core/prediction-markets.ts:393](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/prediction-markets.ts#L393)

Strict structural validation for prediction market collections.

Validates every field that matters for correctness and safety:
- Standards include "Prediction Market"
- Valid token IDs are exactly [{start: 1, end: 2}]
- 2 alias paths (uyes, uno) with correct decimals and conversions
- All permissions are frozen
- 7 approvals: mint, redeem, YES wins, NO wins, push YES, push NO, transferable
- Cross-approval consistency (same denom, correct payout amounts)

## Parameters

### collection

`any`

## Returns

[`PredictionMarketValidationResult`](/sdk/reference/interfaces/prediction-market-validation-result)
