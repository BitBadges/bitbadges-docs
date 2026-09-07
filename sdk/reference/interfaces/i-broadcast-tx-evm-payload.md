---
description: "Optional raw EVM-encoded tx bytes (hex string or Uint8Array)."
---

# Interface: iBroadcastTxEvmPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5553](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5553)

## Properties

### evmTx?

> `optional` **evmTx?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5555](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5555)

#### chain\_id?

> `optional` **chain\_id?**: `string`

#### data

> **data**: `string`

#### signer\_address?

> `optional` **signer\_address?**: `string`

#### to

> **to**: `string`

#### value?

> `optional` **value?**: `string`

***

### mode

> **mode**: `"evm"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5554](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5554)

***

### tx\_bytes?

> `optional` **tx\_bytes?**: `string` \| `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5565](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5565)

Optional raw EVM-encoded tx bytes (hex string or Uint8Array).

***

### txHash?

> `optional` **txHash?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5563](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5563)

Optional already-broadcast EVM tx hash to track.
