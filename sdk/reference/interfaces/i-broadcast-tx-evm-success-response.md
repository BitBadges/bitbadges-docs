---
description: "The cosmos-side MsgEthereumTx wrapping hash. Cosmos tooling (explorer, indexer, Skip Go tracker) must use this hash — txhash alone won't resolve there. May be…"
---

# Interface: iBroadcastTxEvmSuccessResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5466](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5466)

## Properties

### cosmosTxHash?

> `optional` **cosmosTxHash?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5474](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5474)

The cosmos-side `MsgEthereumTx` wrapping hash. Cosmos tooling (explorer,
indexer, Skip Go tracker) must use this hash — `txhash` alone won't
resolve there. May be `undefined` if the tx didn't mine in time.

***

### success

> **success**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5475](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5475)

***

### txhash

> **txhash**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5468](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5468)

The EVM keccak256 transaction hash.
