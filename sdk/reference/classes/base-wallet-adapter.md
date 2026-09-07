---
description: "Abstract base class for wallet adapters with common functionality."
---

# Abstract Class: BaseWalletAdapter

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:82](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L82)

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

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:84](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L84)

The address managed by this adapter (BitBadges bb-prefixed for Cosmos, 0x for EVM)

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`address`](/sdk/reference/interfaces/wallet-adapter#address)

***

### chainType

> `abstract` `readonly` **chainType**: `"evm"` \| `"cosmos"`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:83](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L83)

The chain type this adapter supports

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`chainType`](/sdk/reference/interfaces/wallet-adapter#chaintype)

## Methods

### estimateEvmGas()?

> `optional` **estimateEvmGas**(`tx`): `Promise`\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:90](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L90)

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

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:86](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L86)

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

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:89](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L89)

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

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:88](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L88)

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

### signTypedData()?

> `optional` **signTypedData**(`typed`): `Promise`\<`string`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:91](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L91)

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

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`signTypedData`](/sdk/reference/interfaces/wallet-adapter#signtypeddata)

***

### supportsEvmTransaction()

> **supportsEvmTransaction**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:101](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L101)

Check if the adapter supports EVM transactions

#### Returns

`boolean`

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`supportsEvmTransaction`](/sdk/reference/interfaces/wallet-adapter#supportsevmtransaction)

***

### supportsSignAmino()

> **supportsSignAmino**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L97)

Check if the adapter supports Amino signing (legacy)

#### Returns

`boolean`

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`supportsSignAmino`](/sdk/reference/interfaces/wallet-adapter#supportssignamino)

***

### supportsSignDirect()

> **supportsSignDirect**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L93)

Check if the adapter supports SignDirect signing

#### Returns

`boolean`

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`supportsSignDirect`](/sdk/reference/interfaces/wallet-adapter#supportssigndirect)

***

### supportsSignTypedData()

> **supportsSignTypedData**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/WalletAdapter.ts#L105)

Check if the adapter supports EIP-712 typed-data signing

#### Returns

`boolean`

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`supportsSignTypedData`](/sdk/reference/interfaces/wallet-adapter#supportssigntypeddata)
