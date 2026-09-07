---
description: "GenericCosmosAdapter provides wallet adapter functionality for Cosmos signing."
---

# Class: GenericCosmosAdapter

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts:162](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts#L162)

GenericCosmosAdapter provides wallet adapter functionality for Cosmos signing.

Supports both browser wallets (Keplr, Leap, Cosmostation) and server-side
signing with mnemonic or private key.

## Example

```typescript
// Browser wallet (Keplr)
const adapter = await GenericCosmosAdapter.fromKeplr('bitbadges-1');

// Browser wallet (Leap)
const adapter = await GenericCosmosAdapter.fromLeap('bitbadges-1');

// Server-side with mnemonic
const adapter = await GenericCosmosAdapter.fromMnemonic('word1 word2 ...', 'bitbadges-1');

// Server-side with private key
const adapter = await GenericCosmosAdapter.fromPrivateKey('0x...', 'bitbadges-1');

// Use with signing client
const client = new BitBadgesSigningClient({ adapter });
```

## Extends

- [`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter)

## Implements

- [`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter)

## Properties

### address

> `readonly` **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts:164](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts#L164)

The address managed by this adapter (BitBadges bb-prefixed for Cosmos, 0x for EVM)

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`address`](/sdk/reference/interfaces/wallet-adapter#address)

#### Overrides

[`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter).[`address`](/sdk/reference/classes/base-wallet-adapter#address)

***

### chainType

> `readonly` **chainType**: `"cosmos"`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts:163](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts#L163)

The chain type this adapter supports

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`chainType`](/sdk/reference/interfaces/wallet-adapter#chaintype)

#### Overrides

[`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter).[`chainType`](/sdk/reference/classes/base-wallet-adapter#chaintype)

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

#### Inherited from

[`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter).[`estimateEvmGas`](/sdk/reference/classes/base-wallet-adapter#estimateevmgas)

***

### getPublicKey()

> **getPublicKey**(): `Promise`\<`string`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts:347](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts#L347)

Get the public key in base64 format.
Required for Cosmos transactions (used to build the auth info).
Returns empty string for EVM-only adapters.

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`getPublicKey`](/sdk/reference/interfaces/wallet-adapter#getpublickey)

#### Overrides

[`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter).[`getPublicKey`](/sdk/reference/classes/base-wallet-adapter#getpublickey)

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

#### Inherited from

[`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter).[`sendEvmTransaction`](/sdk/reference/classes/base-wallet-adapter#sendevmtransaction)

***

### signDirect()

> **signDirect**(`payload`, `accountNumber`): `Promise`\<[`SigningResult`](/sdk/reference/interfaces/signing-result)\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts:351](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts#L351)

Sign a transaction using Cosmos SignDirect format.
Only implemented by Cosmos wallet adapters.

#### Parameters

##### payload

[`TransactionPayload`](/sdk/reference/interfaces/transaction-payload)

The transaction payload containing signBytes

##### accountNumber

[`Uint64Like`](/sdk/reference/type-aliases/uint64-like)

The account number on the blockchain. Post-v34
  accounts get hash-derived numbers above 2^53 — pass the chain's string
  value or a bigint; never Number() it.

#### Returns

`Promise`\<[`SigningResult`](/sdk/reference/interfaces/signing-result)\>

The signature and public key

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`signDirect`](/sdk/reference/interfaces/wallet-adapter#signdirect)

#### Overrides

[`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter).[`signDirect`](/sdk/reference/classes/base-wallet-adapter#signdirect)

***

### supportsEvmTransaction()

> **supportsEvmTransaction**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts:393](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts#L393)

Check if the adapter supports EVM transactions

#### Returns

`boolean`

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`supportsEvmTransaction`](/sdk/reference/interfaces/wallet-adapter#supportsevmtransaction)

#### Overrides

[`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter).[`supportsEvmTransaction`](/sdk/reference/classes/base-wallet-adapter#supportsevmtransaction)

***

### supportsSignAmino()

> **supportsSignAmino**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts:389](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts#L389)

Check if the adapter supports Amino signing (legacy)

#### Returns

`boolean`

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`supportsSignAmino`](/sdk/reference/interfaces/wallet-adapter#supportssignamino)

#### Overrides

[`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter).[`supportsSignAmino`](/sdk/reference/classes/base-wallet-adapter#supportssignamino)

***

### supportsSignDirect()

> **supportsSignDirect**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts:385](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts#L385)

Check if the adapter supports SignDirect signing

#### Returns

`boolean`

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`supportsSignDirect`](/sdk/reference/interfaces/wallet-adapter#supportssigndirect)

#### Overrides

[`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter).[`supportsSignDirect`](/sdk/reference/classes/base-wallet-adapter#supportssigndirect)

***

### fromBrowserWallet()

> `static` **fromBrowserWallet**(`wallet`, `chainId`, `prefix?`): `Promise`\<`GenericCosmosAdapter`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts:237](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts#L237)

Create an adapter from any Keplr-compatible wallet interface.

#### Parameters

##### wallet

`KeplrLike`

A Keplr-compatible wallet instance

##### chainId

`string`

The chain ID to connect to

##### prefix?

`string` = `'bb'`

Optional address prefix (default: 'bb')

#### Returns

`Promise`\<`GenericCosmosAdapter`\>

A new GenericCosmosAdapter connected to the wallet

***

### fromCosmostation()

> `static` **fromCosmostation**(`chainId`): `Promise`\<`GenericCosmosAdapter`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts:222](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts#L222)

Create an adapter from Cosmostation wallet.

#### Parameters

##### chainId

`string`

The chain ID to connect to

#### Returns

`Promise`\<`GenericCosmosAdapter`\>

A new GenericCosmosAdapter connected to Cosmostation

***

### fromKeplr()

> `static` **fromKeplr**(`chainId`): `Promise`\<`GenericCosmosAdapter`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts:196](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts#L196)

Create an adapter from Keplr wallet.

#### Parameters

##### chainId

`string`

The chain ID to connect to

#### Returns

`Promise`\<`GenericCosmosAdapter`\>

A new GenericCosmosAdapter connected to Keplr

***

### fromLeap()

> `static` **fromLeap**(`chainId`): `Promise`\<`GenericCosmosAdapter`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts:209](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts#L209)

Create an adapter from Leap wallet.

#### Parameters

##### chainId

`string`

The chain ID to connect to

#### Returns

`Promise`\<`GenericCosmosAdapter`\>

A new GenericCosmosAdapter connected to Leap

***

### fromMnemonic()

> `static` **fromMnemonic**(`mnemonic`, `chainId`, `options?`): `Promise`\<`GenericCosmosAdapter`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts:279](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts#L279)

Create an adapter from a mnemonic phrase (server-side).

**Security Note**: Only use in secure server-side environments.

#### Parameters

##### mnemonic

`string`

The BIP-39 mnemonic phrase (12 or 24 words)

##### chainId

`string`

The chain ID to use

##### options?

`string` \| \{ `prefix?`: `string`; \}

Optional: prefix string (default 'bb') or options object with prefix

#### Returns

`Promise`\<`GenericCosmosAdapter`\>

A new GenericCosmosAdapter for server-side signing

#### Example

```typescript
const adapter = await GenericCosmosAdapter.fromMnemonic('word1 word2 ...', 'bitbadges-2');
const client = new BitBadgesSigningClient({ adapter, network: 'testnet' });
```

***

### fromPrivateKey()

> `static` **fromPrivateKey**(`privateKey`, `chainId`, `options?`): `Promise`\<`GenericCosmosAdapter`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts:297](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts#L297)

Create an adapter from a private key (server-side).

**Security Note**: Only use in secure server-side environments.

#### Parameters

##### privateKey

`string`

The private key (hex string, with or without 0x prefix)

##### chainId

`string`

The chain ID to use

##### options?

`string` \| \{ `prefix?`: `string`; \}

Optional: prefix string (default 'bb') or options object with prefix

#### Returns

`Promise`\<`GenericCosmosAdapter`\>

A new GenericCosmosAdapter for server-side signing

***

### ~~fromWallet()~~

> `static` **fromWallet**(`wallet`, `chainId`, `prefix?`): `Promise`\<`GenericCosmosAdapter`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts:257](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericCosmosAdapter.ts#L257)

#### Parameters

##### wallet

`KeplrLike`

##### chainId

`string`

##### prefix?

`string` = `'bb'`

#### Returns

`Promise`\<`GenericCosmosAdapter`\>

#### Deprecated

Use fromBrowserWallet instead
