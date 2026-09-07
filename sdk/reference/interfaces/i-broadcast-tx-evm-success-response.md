---
description: "The cosmos-side MsgEthereumTx wrapping hash. Cosmos tooling (explorer, indexer, Skip Go tracker) must use this hash — txhash alone won't resolve there. May be…"
---

# Interface: iBroadcastTxEvmSuccessResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5571](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5571)

## Properties

### cosmosTxHash?

> `optional` **cosmosTxHash?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5579](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5579)

The cosmos-side `MsgEthereumTx` wrapping hash. Cosmos tooling (explorer,
indexer, Skip Go tracker) must use this hash — `txhash` alone won't
resolve there. May be `undefined` if the tx didn't mine in time.

***

### success

> **success**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5580](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5580)

***

### txhash

> **txhash**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5573](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5573)

The EVM keccak256 transaction hash.
