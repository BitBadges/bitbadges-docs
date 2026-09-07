---
description: "A single balance entry in the consolidated /swap/balances response."
---

# Interface: iSwapBalance

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4675](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4675)

A single balance entry in the consolidated /swap/balances response.

## Properties

### amount

> **amount**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4677](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4677)

***

### decimals?

> `optional` **decimals?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4678](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4678)

***

### denom

> **denom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4676](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4676)

***

### source?

> `optional` **source?**: [`SwapAssetSource`](/sdk/reference/type-aliases/swap-asset-source)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4681](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4681)

Where this entry came from. Absent for legacy passthrough rows.

***

### symbol?

> `optional` **symbol?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4679](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4679)
