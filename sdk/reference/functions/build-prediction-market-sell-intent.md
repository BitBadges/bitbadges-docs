---
description: "Build a prediction-market SELL intent — OUTGOING approval where the creator wants to SEND tokenAmount of token-id (1=YES / 2=NO) and receive paymentAmount of…"
---

# Function: buildPredictionMarketSellIntent()

> **buildPredictionMarketSellIntent**(`args`): `Record`\<`string`, `unknown`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/prediction-markets.ts:928](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/prediction-markets.ts#L928)

Build a prediction-market SELL intent — OUTGOING approval where the
creator wants to SEND `tokenAmount` of token-id (1=YES / 2=NO) and
receive `paymentAmount` of `paymentDenom`. Proto-shape only.

## Parameters

### args

[`PredictionMarketSideArgs`](/sdk/reference/interfaces/prediction-market-side-args)

## Returns

`Record`\<`string`, `unknown`\>
