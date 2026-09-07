---
description: "Network configuration with all endpoints and chain IDs."
---

# Interface: NetworkConfig

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:87](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L87)

Network configuration with all endpoints and chain IDs.

## Properties

### apiUrl

> **apiUrl**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:89](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L89)

BitBadges API URL (indexer)

***

### cosmosChainId

> **cosmosChainId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L93)

Cosmos chain ID (e.g., 'bitbadges-1')

***

### disabled?

> `optional` **disabled?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:104](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L104)

If true, this network is currently offline / disabled. Selecting it
will throw via `assertNetworkAvailable` unless the override env var
`BITBADGES_TESTNET_OFFLINE=false` is set. URL fields are kept intact
so the network can be revived by flipping this flag back to false.

***

### evmChainId

> **evmChainId**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:95](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L95)

EVM chain ID for MetaMask (e.g., 90123 for local)

***

### evmRpcUrl

> **evmRpcUrl**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L97)

EVM JSON-RPC URL for server-side EVM signing

***

### nodeUrl

> **nodeUrl**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:91](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L91)

Node REST API URL (LCD)
