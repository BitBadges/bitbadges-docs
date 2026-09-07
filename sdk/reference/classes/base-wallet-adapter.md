---
description: "Abstract base class for wallet adapters with common functionality."
---

# Abstract Class: BaseWalletAdapter

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:68](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L68)

Abstract base class for wallet adapters with common functionality.

## Extended by

- [`GenericCosmosAdapter`](/sdk/reference/classes/generic-cosmos-adapter)
- [`GenericEvmAdapter`](/sdk/reference/classes/generic-evm-adapter)

## Implements

- [`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter)

## Constructors

### Constructor

> **new BaseWalletAdapter**(): `BaseWalletAdapter`

#### Returns

`BaseWalletAdapter`

## Properties

### address

> `abstract` `readonly` **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:70](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L70)

The address managed by this adapter (BitBadges bb-prefixed for Cosmos, 0x for EVM)

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`address`](/sdk/reference/interfaces/wallet-adapter#address)

***

### chainType

> `abstract` `readonly` **chainType**: `"evm"` \| `"cosmos"`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:69](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L69)

The chain type this adapter supports

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`chainType`](/sdk/reference/interfaces/wallet-adapter#chaintype)

## Methods

### estimateEvmGas()?

> `optional` **estimateEvmGas**(`tx`): `Promise`\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:76](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L76)

Estimate gas for an EVM transaction.
Only implemented by EVM wallet adapters with a provider connection.

#### Parameters

##### tx

[`EvmTransaction`](/sdk/reference/interfaces/evm-transaction)

#### Returns

`Promise`\<`bigint`\>

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`estimateEvmGas`](/sdk/reference/interfaces/wallet-adapter#estimateevmgas)

***

### getPublicKey()

> `abstract` **getPublicKey**(): `Promise`\<`string`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:72](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L72)

Get the public key in base64 format.
Required for Cosmos transactions (used to build the auth info).
Returns empty string for EVM-only adapters.

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`getPublicKey`](/sdk/reference/interfaces/wallet-adapter#getpublickey)

***

### sendEvmTransaction()?

> `optional` **sendEvmTransaction**(`tx`): `Promise`\<`string`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:75](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L75)

Send an EVM transaction.
Only implemented by EVM wallet adapters.

#### Parameters

##### tx

[`EvmTransaction`](/sdk/reference/interfaces/evm-transaction)

The EVM transaction to send

#### Returns

`Promise`\<`string`\>

The transaction hash

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`sendEvmTransaction`](/sdk/reference/interfaces/wallet-adapter#sendevmtransaction)

***

### signDirect()?

> `optional` **signDirect**(`payload`, `accountNumber`): `Promise`\<[`SigningResult`](/sdk/reference/interfaces/signing-result)\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:74](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L74)

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

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`signDirect`](/sdk/reference/interfaces/wallet-adapter#signdirect)

***

### supportsEvmTransaction()

> **supportsEvmTransaction**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:86](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L86)

Check if the adapter supports EVM transactions

#### Returns

`boolean`

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`supportsEvmTransaction`](/sdk/reference/interfaces/wallet-adapter#supportsevmtransaction)

***

### supportsSignAmino()

> **supportsSignAmino**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:82](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L82)

Check if the adapter supports Amino signing (legacy)

#### Returns

`boolean`

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`supportsSignAmino`](/sdk/reference/interfaces/wallet-adapter#supportssignamino)

***

### supportsSignDirect()

> **supportsSignDirect**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:78](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L78)

Check if the adapter supports SignDirect signing

#### Returns

`boolean`

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`supportsSignDirect`](/sdk/reference/interfaces/wallet-adapter#supportssigndirect)
