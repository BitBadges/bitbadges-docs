---
description: "Denormalized, indexed record powering the server-side collection-index query (filter/sort/search/facets/paginate over Mongo). ONE doc per (collection × indexed…"
---

# Interface: iCollectionIndexDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:287](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L287)

Denormalized, indexed record powering the server-side collection-index query
(filter/sort/search/facets/paginate over Mongo). ONE doc per
(collection × indexed standard); `_docId = `${collectionId}:${standard}``. A
collection declaring N indexable standards has N rows. Maintained in real time
by the indexer's tx-handlers from the standards-info builder projections, so
the client derives nothing. The `/pay` dashboard is the first consumer
(scopes by `standard`); prediction-market/auction/etc. dashboards reuse the
same shape.

## Extends

- [`Doc`](/sdk/reference/interfaces/doc)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L13)

A unique stringified document ID

#### Inherited from

[`Doc`](/sdk/reference/interfaces/doc).[`_docId`](/sdk/reference/interfaces/doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L16)

A unique document ID (Mongo DB ObjectID)

#### Inherited from

[`Doc`](/sdk/reference/interfaces/doc).[`_id`](/sdk/reference/interfaces/doc#_id)

***

### amountStr?

> `optional` **amountStr?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:310](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L310)

Headline money amount (exact bigint string), denom paired below — for display.

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:289](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L289)

The collection ID (this row is one of the collection's indexed standards).

***

### createdBlock

> **createdBlock**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:321](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L321)

Creation block (cursor sort key, mirrors createdTokens).

***

### createdBy

> **createdBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:291](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L291)

Creator bech32 address — dashboards scope per-creator.

***

### createdTimestamp

> **createdTimestamp**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:323](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L323)

Creation timestamp (unix ms).

***

### denom?

> `optional` **denom?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:312](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L312)

Headline denom (invoice/sub price/product 'from'/vault backing).

***

### endTime?

> `optional` **endTime?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:314](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L314)

Deadline in unix ms (0/absent = none); used for the query-time expiry rule.

***

### extras?

> `optional` **extras?**: `unknown`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:319](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L319)

The standard's full computed `standardsInfo` blob, carried for display.

***

### image

> **image**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:301](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L301)

Collection image URI (for the dashboard avatar; '' until metadata lands).

***

### lastSyncedBlock

> **lastSyncedBlock**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:325](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L325)

Block this record was last rebuilt at (reorg/idempotency guard).

***

### name

> **name**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:297](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L297)

Collection display name (from metadata; '' until the async fetch lands).

***

### nameLower

> **nameLower**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:299](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L299)

Lowercased name for case-insensitive search/sort.

***

### payerAddress?

> `optional` **payerAddress?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:316](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L316)

Counterparty addresses (e.g. PaymentRequest payer/recipient) for role filtering.

***

### recipientAddress?

> `optional` **recipientAddress?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:317](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L317)

***

### standard

> **standard**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:293](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L293)

THE standard this row represents (the row's primary filter key).

***

### standards

> **standards**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:295](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L295)

ALL standards the collection declares (for "is also an X" cross-filtering).

***

### status?

> `optional` **status?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:308](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L308)

Durable, tx-derived status enum (per standard). Clock-only transitions
(e.g. PaymentRequest `pending` → `expired` past its deadline) are NOT
persisted here — they are applied at query time from `endTime` + the
standard's expiry rule so they never go stale without a tx.
