---
description: "Base interface for wallet adapters. Wallet adapters provide a unified interface for different wallet types (Cosmos, EVM)."
---

# Interface: WalletAdapter

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:12](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L12)

Base interface for wallet adapters.
Wallet adapters provide a unified interface for different wallet types (Cosmos, EVM).

Implementations must support either Cosmos signing (signDirect) or EVM transactions (sendEvmTransaction).

## Properties

### address

> `readonly` **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L17)

The address managed by this adapter (BitBadges bb-prefixed for Cosmos, 0x for EVM)

***

### chainType

> `readonly` **chainType**: `"evm"` \| `"cosmos"`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:14](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L14)

The chain type this adapter supports

## Methods

### estimateEvmGas()?

> `optional` **estimateEvmGas**(`tx`): `Promise`\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:51](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L51)

Estimate gas for an EVM transaction.
Only implemented by EVM wallet adapters with a provider connection.

#### Parameters

##### tx

[`EvmTransaction`](/sdk/reference/interfaces/evm-transaction)

#### Returns

`Promise`\<`bigint`\>

***

### getPublicKey()

> **getPublicKey**(): `Promise`\<`string`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:24](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L24)

Get the public key in base64 format.
Required for Cosmos transactions (used to build the auth info).
Returns empty string for EVM-only adapters.

#### Returns

`Promise`\<`string`\>

***

### sendEvmTransaction()?

> `optional` **sendEvmTransaction**(`tx`): `Promise`\<`string`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:45](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L45)

Send an EVM transaction.
Only implemented by EVM wallet adapters.

#### Parameters

##### tx

[`EvmTransaction`](/sdk/reference/interfaces/evm-transaction)

The EVM transaction to send

#### Returns

`Promise`\<`string`\>

The transaction hash

***

### signDirect()?

> `optional` **signDirect**(`payload`, `accountNumber`): `Promise`\<[`SigningResult`](/sdk/reference/interfaces/signing-result)\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L36)

Sign a transaction using Cosmos SignDirect format.
Only implemented by Cosmos wallet adapters.

#### Parameters

##### payload

[`TransactionPayload`](/sdk/reference/interfaces/transaction-payload)

The transaction payload containing signBytes

##### accountNumber

`string` \| `number` \| `bigint`

The account number on the blockchain. Post-v34
  accounts get hash-derived numbers above 2^53 — pass the chain's string
  value or a bigint; never Number() it.

#### Returns

`Promise`\<[`SigningResult`](/sdk/reference/interfaces/signing-result)\>

The signature and public key

***

### supportsEvmTransaction()

> **supportsEvmTransaction**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:60](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L60)

Check if the adapter supports EVM transactions

#### Returns

`boolean`

***

### supportsSignAmino()

> **supportsSignAmino**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:57](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L57)

Check if the adapter supports Amino signing (legacy)

#### Returns

`boolean`

***

### supportsSignDirect()

> **supportsSignDirect**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:54](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L54)

Check if the adapter supports SignDirect signing

#### Returns

`boolean`
