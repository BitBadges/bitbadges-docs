---
description: "Server-side query over the CollectionIndex. ALL filtering/searching/faceting/ pagination happens in the indexer over the indexed docs — the client sends this…"
---

# Interface: iGetCollectionIndexPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L27)

Server-side query over the CollectionIndex. ALL filtering/searching/faceting/
pagination happens in the indexer over the indexed docs — the client sends this
and renders the page. Results are ordered newest-first. Standard-agnostic: scope
to one `standard` (the dashboard case — pay, prediction markets, auctions, …) or
omit it for a cross-standard query.

## Properties

### bookmark?

> `optional` **bookmark?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:41](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L41)

Pagination bookmark ("" / omitted for first page).

***

### createdBy?

> `optional` **createdBy?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:29](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L29)

Creator bech32 address. Required for per-creator dashboards; omit for global browse.

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:35](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L35)

Case-insensitive name search.

***

### payerAddress?

> `optional` **payerAddress?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:37](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L37)

Exact-match payer address (e.g. invoices where the connected user is the payer → "sending").

***

### recipientAddress?

> `optional` **recipientAddress?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:39](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L39)

Exact-match recipient address (e.g. invoices where the connected user is the recipient → "receiving").

***

### standard?

> `optional` **standard?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:31](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L31)

Standard to scope to (e.g. 'PaymentRequest', 'Prediction Market'). Omit for cross-standard.

***

### status?

> `optional` **status?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L33)

Status keys to include (OR). Clock-only statuses (e.g. 'expired') are resolved at query time.
