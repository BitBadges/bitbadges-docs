---
description: "A single balance entry in the consolidated /swap/balances response."
---

# Interface: iSwapBalance

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4570](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4570)

A single balance entry in the consolidated /swap/balances response.

## Properties

### amount

> **amount**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4572](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4572)

***

### decimals?

> `optional` **decimals?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4573](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4573)

***

### denom

> **denom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4571](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4571)

***

### source?

> `optional` **source?**: [`SwapAssetSource`](/sdk/reference/type-aliases/swap-asset-source)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4576](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4576)

Where this entry came from. Absent for legacy passthrough rows.

***

### symbol?

> `optional` **symbol?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4574](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4574)
