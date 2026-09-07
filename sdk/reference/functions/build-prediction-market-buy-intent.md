---
description: "Build a prediction-market BUY intent — INCOMING approval where the creator wants to RECEIVE tokenAmount of token-id (1=YES / 2=NO) and pays paymentAmount of…"
---

# Function: buildPredictionMarketBuyIntent()

> **buildPredictionMarketBuyIntent**(`args`): `Record`\<`string`, `unknown`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/prediction-markets.ts:846](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/prediction-markets.ts#L846)

Build a prediction-market BUY intent — INCOMING approval where the
creator wants to RECEIVE `tokenAmount` of token-id (1=YES / 2=NO) and
pays `paymentAmount` of `paymentDenom`. Proto-shape only.

Pair with `MsgSetIncomingApproval` to post on-chain. Mirrors the FE's
`UserOutgoingApprovalRegistry.predictionMarketBuyIntent` (the FE name
is misleading — it's an incoming approval, posted via MsgSetIncomingApproval).

## Parameters

### args

[`PredictionMarketSideArgs`](/sdk/reference/interfaces/prediction-market-side-args)

## Returns

`Record`\<`string`, `unknown`\>
