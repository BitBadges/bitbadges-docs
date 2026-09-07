---
description: "Parsed prediction-market data plus the collection's approval documents. Approvals arrive over the wire as JSON (BigInts serialized to strings) — use the SDK's…"
---

# Interface: iGetPredictionDetailSuccessResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5382](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5382)

## Properties

### prediction

> **prediction**: [`iPredictionMarketApiData`](/sdk/reference/interfaces/i-prediction-market-api-data) & `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5388](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5388)

Parsed prediction-market data plus the collection's approval documents.
Approvals arrive over the wire as JSON (BigInts serialized to strings) —
use the SDK's `.convert(BigIntify)` to get a `bigint`-typed view.

#### Type Declaration

##### approvals

> **approvals**: [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`string`\>[]
