---
description: "Base interface for wallet adapters. This is re-exported from WalletAdapter.ts for convenience."
---

# Interface: WalletAdapterInterface

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:296](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L296)

Base interface for wallet adapters.
This is re-exported from WalletAdapter.ts for convenience.

## Properties

### address

> `readonly` **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:300](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L300)

The address managed by this adapter

***

### chainType

> `readonly` **chainType**: `"evm"` \| `"cosmos"`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:298](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L298)

The chain type this adapter supports

## Methods

### estimateEvmGas()?

> `optional` **estimateEvmGas**(`tx`): `Promise`\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:312](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L312)

Estimate gas for an EVM transaction (for EVM wallets)

#### Parameters

##### tx

[`EvmTransaction`](/sdk/reference/interfaces/evm-transaction)

#### Returns

`Promise`\<`bigint`\>

***

### getPublicKey()

> **getPublicKey**(): `Promise`\<`string`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:303](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L303)

Get the public key in base64 format

#### Returns

`Promise`\<`string`\>

***

### sendEvmTransaction()?

> `optional` **sendEvmTransaction**(`tx`): `Promise`\<`string`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:309](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L309)

Send an EVM transaction (for EVM wallets)

#### Parameters

##### tx

[`EvmTransaction`](/sdk/reference/interfaces/evm-transaction)

#### Returns

`Promise`\<`string`\>

***

### signDirect()?

> `optional` **signDirect**(`payload`, `accountNumber`): `Promise`\<[`SigningResult`](/sdk/reference/interfaces/signing-result)\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:306](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L306)

Sign a transaction using Cosmos SignDirect (for Cosmos wallets)

#### Parameters

##### payload

`any`

##### accountNumber

`string` \| `number` \| `bigint`

#### Returns

`Promise`\<[`SigningResult`](/sdk/reference/interfaces/signing-result)\>

***

### supportsEvmTransaction()

> **supportsEvmTransaction**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:319](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L319)

Check if the adapter supports EVM transactions

#### Returns

`boolean`

***

### supportsSignAmino()

> **supportsSignAmino**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:317](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L317)

Check if the adapter supports Amino signing

#### Returns

`boolean`

***

### supportsSignDirect()

> **supportsSignDirect**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:315](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L315)

Check if the adapter supports SignDirect signing

#### Returns

`boolean`
