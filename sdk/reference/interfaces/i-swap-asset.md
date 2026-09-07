---
description: "A single asset entry in the consolidated /swap/assets response."
---

# Interface: iSwapAsset

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4581](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4581)

A single asset entry in the consolidated /swap/assets response.

Mirrors Skip's asset shape (denom, chain_id, origin_*, symbol, name,
logo_uri, decimals) and adds `source` + `isWrapped`.

## Properties

### chain\_id

> **chain\_id**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4583](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4583)

***

### decimals?

> `optional` **decimals?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4589](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4589)

***

### denom

> **denom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4582](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4582)

***

### isWrapped?

> `optional` **isWrapped?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4593](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4593)

True iff this is a wrapped BitBadges denom (badgeslp:/badges:) sourced from a verified AssetInfoDoc.

***

### logo\_uri?

> `optional` **logo\_uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4588](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4588)

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4587](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4587)

***

### origin\_chain\_id?

> `optional` **origin\_chain\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4585](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4585)

***

### origin\_denom?

> `optional` **origin\_denom?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4584](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4584)

***

### source

> **source**: [`SwapAssetSource`](/sdk/reference/type-aliases/swap-asset-source)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4591](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4591)

Where this entry came from.

***

### symbol?

> `optional` **symbol?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4586](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4586)
