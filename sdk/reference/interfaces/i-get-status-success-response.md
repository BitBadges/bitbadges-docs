---
description: "T extends NumberType"
---

# Interface: iGetStatusSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:194](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L194)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### outOfSync?

> `optional` **outOfSync?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:204](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L204)

If true, we are out of sync with the blockchain.
If undefined, we did not check for out of sync.

***

### prices?

> `optional` **prices?**: `Record`\<`string`, `number`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:209](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L209)

Prices for the assets

***

### status

> **status**: [`iStatusDoc`](/sdk/reference/interfaces/i-status-doc)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:198](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L198)

Status details about the indexer / blockchain.
