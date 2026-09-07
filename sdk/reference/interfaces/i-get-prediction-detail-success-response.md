---
description: "Parsed prediction-market data plus the collection's approval documents. Approvals arrive over the wire as JSON (BigInts serialized to strings) — use the SDK's…"
---

# Interface: iGetPredictionDetailSuccessResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5487](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5487)

## Properties

### prediction

> **prediction**: [`iPredictionMarketApiData`](/sdk/reference/interfaces/i-prediction-market-api-data) & `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5493](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5493)

Parsed prediction-market data plus the collection's approval documents.
Approvals arrive over the wire as JSON (BigInts serialized to strings) —
use the SDK's `.convert(BigIntify)` to get a `bigint`-typed view.

#### Type Declaration

##### approvals

> **approvals**: [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`string`\>[]
