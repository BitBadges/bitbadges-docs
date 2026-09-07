---
description: "Conservative status fallback when the indexer hasn't enriched standardsInfo yet."
---

# Function: derivePredictionMarketStatusFallback()

> **derivePredictionMarketStatusFallback**(`deadlineMs`): [`PredictionMarketStatus`](/sdk/reference/type-aliases/prediction-market-status)

Defined in: [packages/bitbadgesjs-sdk/src/core/prediction-markets.ts:813](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/prediction-markets.ts#L813)

Conservative status fallback when the indexer hasn't enriched
standardsInfo yet.

Pre-deadline the market is genuinely `active` (trading open) — safe to
assert. Past-deadline it could be `closed` OR `resolved-yes/no/push`;
the fallback CANNOT tell which without the indexer, so it returns
`unknown` rather than the misleading `closed`. Returning `closed` here
let `bb prediction-markets status` show a resolved market as closed,
which a user could act on with `redeem --state ...` against the wrong
actual outcome.

## Parameters

### deadlineMs

`bigint`

## Returns

[`PredictionMarketStatus`](/sdk/reference/type-aliases/prediction-market-status)
