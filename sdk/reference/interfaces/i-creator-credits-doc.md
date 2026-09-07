---
description: "T extends NumberType"
---

# Interface: iCreatorCreditsDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1623](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1623)

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

### apiTokensUsed?

> `optional` **apiTokensUsed?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1629](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1629)

Unified APITOKEN spend counter — charged by both the AI Builder and the main API-metering middleware against the same on-chain APITOKEN balance. 1 USDC = 100,000 APITOKEN.

***

### credits

> **credits**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1625](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1625)

The total credits

***

### creditsLimit?

> `optional` **creditsLimit?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1627](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1627)

The limit of credits
