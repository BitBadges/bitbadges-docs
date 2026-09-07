---
description: "Optional raw EVM-encoded tx bytes (hex string or Uint8Array)."
---

# Interface: iBroadcastTxEvmPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5448](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5448)

## Properties

### evmTx?

> `optional` **evmTx?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5450](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5450)

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5449](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5449)

***

### tx\_bytes?

> `optional` **tx\_bytes?**: `string` \| `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5460](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5460)

Optional raw EVM-encoded tx bytes (hex string or Uint8Array).

***

### txHash?

> `optional` **txHash?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5458](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5458)

Optional already-broadcast EVM tx hash to track.
