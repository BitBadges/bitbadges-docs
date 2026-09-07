---
description: "Pre-fetched context passed to each standard's info builder. The indexer populates this before calling builders; SDK callers can pass {} to skip extra-fetch…"
---

# Interface: StandardInfoCtx

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:10](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L10)

Pre-fetched context passed to each standard's info builder. The indexer
populates this before calling builders; SDK callers can pass `{}` to skip
extra-fetch sections (those builders will return `null` or partial data).

## Properties

### nowMs?

> `optional` **nowMs?**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:18](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L18)

Optional override for "now" in ms — used by tests. Defaults to `Date.now()` at builder time.

***

### predictionState?

> `optional` **predictionState?**: `unknown`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L16)

Optional pre-fetched prediction market state (used by Prediction Market).
Indexer fills with the typed shape; SDK interface stays loose to avoid a
circular dep with the indexer-side state model.
