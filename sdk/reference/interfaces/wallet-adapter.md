---
description: "Base interface for wallet adapters. Wallet adapters provide a unified interface for different wallet types (Cosmos, EVM)."
---

# Interface: WalletAdapter

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L13)

Base interface for wallet adapters.
Wallet adapters provide a unified interface for different wallet types (Cosmos, EVM).

Implementations must support either Cosmos signing (signDirect) or EVM transactions (sendEvmTransaction).

## Properties

### address

> `readonly` **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:18](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L18)

The address managed by this adapter (BitBadges bb-prefixed for Cosmos, 0x for EVM)

***

### chainType

> `readonly` **chainType**: `"evm"` \| `"cosmos"`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:15](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L15)

The chain type this adapter supports

## Methods

### estimateEvmGas()?

> `optional` **estimateEvmGas**(`tx`): `Promise`\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:52](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L52)

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

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L25)

Get the public key in base64 format.
Required for Cosmos transactions (used to build the auth info).
Returns empty string for EVM-only adapters.

#### Returns

`Promise`\<`string`\>

***

### sendEvmTransaction()?

> `optional` **sendEvmTransaction**(`tx`): `Promise`\<`string`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:46](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L46)

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

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:37](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L37)

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

### signTypedData()?

> `optional` **signTypedData**(`typed`): `Promise`\<`string`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:62](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L62)

Sign EIP-712 typed-data with the wallet.
Only implemented by EVM wallet adapters; lets BitBadges Cosmos
messages be signed via the standard EVM signing flow
(`eth_signTypedData_v4` / `Signer.signTypedData`) so any EVM
wallet can produce a valid Cosmos transaction signature.
Returns a `0x...`-prefixed 65-byte hex signature (r || s || v).

#### Parameters

##### typed

[`EIP712TypedData`](/sdk/reference/interfaces/eip712-typed-data)

#### Returns

`Promise`\<`string`\>

***

### supportsEvmTransaction()

> **supportsEvmTransaction**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:71](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L71)

Check if the adapter supports EVM transactions

#### Returns

`boolean`

***

### supportsSignAmino()

> **supportsSignAmino**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:68](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L68)

Check if the adapter supports Amino signing (legacy)

#### Returns

`boolean`

***

### supportsSignDirect()

> **supportsSignDirect**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:65](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L65)

Check if the adapter supports SignDirect signing

#### Returns

`boolean`

***

### supportsSignTypedData()

> **supportsSignTypedData**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:74](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L74)

Check if the adapter supports EIP-712 typed-data signing

#### Returns

`boolean`
