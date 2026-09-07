---
description: "The small, flat, indexable projection of a standard's computed info. Materialized into the persisted CollectionIndex so the server-side collection-index query…"
---

# Interface: CollectionIndexProjection

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:30](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L30)

The small, flat, indexable projection of a standard's computed `info`.
Materialized into the persisted `CollectionIndex` so the server-side
collection-index query can filter + facet by these scalars. Anything
heavy (approvals, metadata) stays off this — the full `info` rides along
as `extras` purely for display.

## Properties

### amountStr?

> `optional` **amountStr?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L34)

The standard's headline amount (price, TVL, …) — exact bigint string, for display.

***

### denom?

> `optional` **denom?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L36)

Denom paired with the headline amount.

***

### endTime?

> `optional` **endTime?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:38](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L38)

Deadline in ms, for the query-time clock transition (see `expiry` below).

***

### extras?

> `optional` **extras?**: `unknown`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:43](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L43)

The full computed `info` blob, carried verbatim for client display.

***

### payerAddress?

> `optional` **payerAddress?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L40)

Counterparty addresses for role filtering (e.g. PaymentRequest payer/recipient). Indexed for exact-match.

***

### recipientAddress?

> `optional` **recipientAddress?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:41](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L41)

***

### status?

> `optional` **status?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:32](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L32)

Durable, tx-derived status enum for this standard (filterable/facetable).
