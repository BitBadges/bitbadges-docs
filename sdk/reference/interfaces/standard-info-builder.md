---
description: "Contract for a per-standard info builder. Implementations live in the indexer (where extra fetches are available) and are registered into the builders map…"
---

# Interface: StandardInfoBuilder\<TInfo\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:74](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L74)

Contract for a per-standard info builder. Implementations live in the
indexer (where extra fetches are available) and are registered into the
builders map passed to `buildStandardsInfo`.

A builder owns EVERYTHING about its standard:
 - `build()` produces the live `standardsInfo` (fetch-time, attached to the
   collection response).
 - `index()` maps that same computed `info` into the persisted, indexable
   [CollectionIndexProjection](/sdk/reference/interfaces/collection-index-projection). Omit it to fall back to a
   status-only projection (`{ status: info.status, extras: info }`).
 - `expiry` declares the standard's clock-only status transition, if any.

## Type Parameters

### TInfo

`TInfo`

## Properties

### expiry?

> `readonly` `optional` **expiry?**: [`StandardExpiryRule`](/sdk/reference/interfaces/standard-expiry-rule)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:80](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L80)

Clock-only status transition for the query layer, if this standard has one.

***

### standardName

> `readonly` **standardName**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:75](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L75)

## Methods

### build()

> **build**(`collection`, `ctx`): `Promise`\<`TInfo` \| `null`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:76](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L76)

#### Parameters

##### collection

[`BitBadgesCollection`](/sdk/reference/classes/bit-badges-collection)\<`bigint`\>

##### ctx

[`StandardInfoCtx`](/sdk/reference/interfaces/standard-info-ctx)

#### Returns

`Promise`\<`TInfo` \| `null`\>

***

### index()?

> `optional` **index**(`collection`, `info`, `ctx`): [`CollectionIndexProjection`](/sdk/reference/interfaces/collection-index-projection)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:78](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L78)

Map the built `info` → persisted, indexable projection.

#### Parameters

##### collection

[`BitBadgesCollection`](/sdk/reference/classes/bit-badges-collection)\<`bigint`\>

##### info

`TInfo`

##### ctx

[`StandardInfoCtx`](/sdk/reference/interfaces/standard-info-ctx)

#### Returns

[`CollectionIndexProjection`](/sdk/reference/interfaces/collection-index-projection)
