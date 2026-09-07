---
description: "Base interface for wallet adapters. This is re-exported from WalletAdapter.ts for convenience."
---

# Interface: WalletAdapterInterface

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:308](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L308)

Base interface for wallet adapters.
This is re-exported from WalletAdapter.ts for convenience.

## Properties

### address

> `readonly` **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:312](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L312)

The address managed by this adapter

***

### chainType

> `readonly` **chainType**: `"evm"` \| `"cosmos"`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:310](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L310)

The chain type this adapter supports

## Methods

### estimateEvmGas()?

> `optional` **estimateEvmGas**(`tx`): `Promise`\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:324](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L324)

Estimate gas for an EVM transaction (for EVM wallets)

#### Parameters

##### tx

[`EvmTransaction`](/sdk/reference/interfaces/evm-transaction)

#### Returns

`Promise`\<`bigint`\>

***

### getPublicKey()

> **getPublicKey**(): `Promise`\<`string`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:315](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L315)

Get the public key in base64 format

#### Returns

`Promise`\<`string`\>

***

### sendEvmTransaction()?

> `optional` **sendEvmTransaction**(`tx`): `Promise`\<`string`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:321](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L321)

Send an EVM transaction (for EVM wallets)

#### Parameters

##### tx

[`EvmTransaction`](/sdk/reference/interfaces/evm-transaction)

#### Returns

`Promise`\<`string`\>

***

### signDirect()?

> `optional` **signDirect**(`payload`, `accountNumber`): `Promise`\<[`SigningResult`](/sdk/reference/interfaces/signing-result)\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:318](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L318)

Sign a transaction using Cosmos SignDirect (for Cosmos wallets)

#### Parameters

##### payload

`any`

##### accountNumber

`string` \| `number` \| `bigint`

#### Returns

`Promise`\<[`SigningResult`](/sdk/reference/interfaces/signing-result)\>

***

### signTypedData()?

> `optional` **signTypedData**(`typed`): `Promise`\<`string`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:327](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L327)

Sign EIP-712 typed-data (for EVM wallets)

#### Parameters

##### typed

`any`

#### Returns

`Promise`\<`string`\>

***

### supportsEvmTransaction()

> **supportsEvmTransaction**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:334](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L334)

Check if the adapter supports EVM transactions

#### Returns

`boolean`

***

### supportsSignAmino()

> **supportsSignAmino**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:332](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L332)

Check if the adapter supports Amino signing

#### Returns

`boolean`

***

### supportsSignDirect()

> **supportsSignDirect**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:330](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L330)

Check if the adapter supports SignDirect signing

#### Returns

`boolean`

***

### supportsSignTypedData()

> **supportsSignTypedData**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:336](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L336)

Check if the adapter supports EIP-712 typed-data signing

#### Returns

`boolean`
