---
description: "GenericEvmAdapter provides wallet adapter functionality for EVM wallets like MetaMask via ethers.js or direct EIP-1193 providers."
---

# Class: GenericEvmAdapter

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts:94](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts#L94)

GenericEvmAdapter provides wallet adapter functionality for EVM wallets
like MetaMask via ethers.js or direct EIP-1193 providers.

EVM transactions are sent through precompile contracts on the BitBadges chain.

## Example

```typescript
// With ethers.js v6
import { BrowserProvider } from 'ethers';

const provider = new BrowserProvider(window.ethereum);
const signer = await provider.getSigner();
const adapter = await GenericEvmAdapter.fromSigner(signer);
const client = new BitBadgesSigningClient({ adapter });

// Direct from window.ethereum
const adapter = await GenericEvmAdapter.fromProvider(window.ethereum);
```

## Extends

- [`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter)

## Implements

- [`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter)

## Properties

### address

> `readonly` **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts:96](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts#L96)

The address managed by this adapter (BitBadges bb-prefixed for Cosmos, 0x for EVM)

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`address`](/sdk/reference/interfaces/wallet-adapter#address)

#### Overrides

[`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter).[`address`](/sdk/reference/classes/base-wallet-adapter#address)

***

### chainType

> `readonly` **chainType**: `"evm"`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts:95](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts#L95)

The chain type this adapter supports

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`chainType`](/sdk/reference/interfaces/wallet-adapter#chaintype)

#### Overrides

[`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter).[`chainType`](/sdk/reference/classes/base-wallet-adapter#chaintype)

## Methods

### estimateEvmGas()

> **estimateEvmGas**(`tx`): `Promise`\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts:372](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts#L372)

Estimate gas for an EVM transaction via the connected provider.

#### Parameters

##### tx

[`EvmTransaction`](/sdk/reference/interfaces/evm-transaction)

The EVM transaction to estimate

#### Returns

`Promise`\<`bigint`\>

Estimated gas as bigint

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`estimateEvmGas`](/sdk/reference/interfaces/wallet-adapter#estimateevmgas)

#### Overrides

[`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter).[`estimateEvmGas`](/sdk/reference/classes/base-wallet-adapter#estimateevmgas)

***

### getPublicKey()

> **getPublicKey**(): `Promise`\<`string`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts:275](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts#L275)

Get the public key.
Note: EVM wallets don't directly expose public keys for Cosmos signing.

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`getPublicKey`](/sdk/reference/interfaces/wallet-adapter#getpublickey)

#### Overrides

[`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter).[`getPublicKey`](/sdk/reference/classes/base-wallet-adapter#getpublickey)

***

### sendEvmTransaction()

> **sendEvmTransaction**(`tx`): `Promise`\<`string`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts:334](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts#L334)

Send an EVM transaction to a precompile contract.

#### Parameters

##### tx

[`EvmTransaction`](/sdk/reference/interfaces/evm-transaction)

The EVM transaction to send

#### Returns

`Promise`\<`string`\>

The transaction hash

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`sendEvmTransaction`](/sdk/reference/interfaces/wallet-adapter#sendevmtransaction)

#### Overrides

[`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter).[`sendEvmTransaction`](/sdk/reference/classes/base-wallet-adapter#sendevmtransaction)

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

#### Inherited from

[`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter).[`signDirect`](/sdk/reference/classes/base-wallet-adapter#signdirect)

***

### signTypedData()

> **signTypedData**(`typed`): `Promise`\<`string`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts:296](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts#L296)

Sign EIP-712 typed-data with the connected EVM wallet.

The output is a `0x...`-prefixed 65-byte hex signature (r || s || v).
Pair with `recoverEvmPublicKey()` from `@/eip712` to derive the
pubkey used in the Cosmos AuthInfo, or strip the trailing recovery
byte to feed the chain's ethsecp256k1 verifier directly.

Routes through the wallet's `eth_signTypedData_v4` (EIP-1193) when
available, otherwise through ethers' `Signer.signTypedData`. Native
MetaMask / Privy / Coinbase Smart Wallet take the canonical Cosmos
EVM domain (`verifyingContract: "cosmos"`, `salt: "0"`) without
complaint; ethers v6 hard-rejects it, so prefer the EIP-1193 path
when both are wired.

#### Parameters

##### typed

[`EIP712TypedData`](/sdk/reference/interfaces/eip712-typed-data)

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`signTypedData`](/sdk/reference/interfaces/wallet-adapter#signtypeddata)

#### Overrides

[`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter).[`signTypedData`](/sdk/reference/classes/base-wallet-adapter#signtypeddata)

***

### supportsEvmTransaction()

> **supportsEvmTransaction**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts:416](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts#L416)

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

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts:412](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts#L412)

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

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts:408](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts#L408)

Check if the adapter supports SignDirect signing

#### Returns

`boolean`

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`supportsSignDirect`](/sdk/reference/interfaces/wallet-adapter#supportssigndirect)

#### Overrides

[`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter).[`supportsSignDirect`](/sdk/reference/classes/base-wallet-adapter#supportssigndirect)

***

### supportsSignTypedData()

> **supportsSignTypedData**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts:420](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts#L420)

Check if the adapter supports EIP-712 typed-data signing

#### Returns

`boolean`

#### Implementation of

[`WalletAdapter`](/sdk/reference/interfaces/wallet-adapter).[`supportsSignTypedData`](/sdk/reference/interfaces/wallet-adapter#supportssigntypeddata)

#### Overrides

[`BaseWalletAdapter`](/sdk/reference/classes/base-wallet-adapter).[`supportsSignTypedData`](/sdk/reference/classes/base-wallet-adapter#supportssigntypeddata)

***

### fromBrowserWallet()

> `static` **fromBrowserWallet**(`options?`): `Promise`\<`GenericEvmAdapter`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts:264](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts#L264)

Create an adapter from window.ethereum (MetaMask, etc.).

#### Parameters

##### options?

[`EvmAdapterOptions`](/sdk/reference/interfaces/evm-adapter-options)

Optional configuration including expected chain ID

#### Returns

`Promise`\<`GenericEvmAdapter`\>

A new GenericEvmAdapter connected to the browser wallet

#### Throws

Error if expectedChainId is provided and wallet is on wrong network

***

### fromMnemonic()

> `static` **fromMnemonic**(`mnemonic`, `evmRpcUrl`, `options?`): `Promise`\<`GenericEvmAdapter`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts:206](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts#L206)

Create an adapter from a mnemonic phrase for server-side EVM signing.

Uses ETH HD path (m/44'/60'/0'/0/0) and connects to an EVM JSON-RPC provider.

**Security Note**: Only use in secure server-side environments.

#### Parameters

##### mnemonic

`string`

The BIP-39 mnemonic phrase (12 or 24 words)

##### evmRpcUrl

`string`

The EVM JSON-RPC endpoint URL

##### options?

[`EvmAdapterOptions`](/sdk/reference/interfaces/evm-adapter-options)

Optional configuration including expected chain ID

#### Returns

`Promise`\<`GenericEvmAdapter`\>

A new GenericEvmAdapter for server-side signing

#### Example

```typescript
const adapter = await GenericEvmAdapter.fromMnemonic(
  'word1 word2 ...',
  'https://evm-rpc-testnet.bitbadges.io'
);
const client = new BitBadgesSigningClient({ adapter, network: 'testnet' });
```

***

### fromPrivateKey()

> `static` **fromPrivateKey**(`privateKey`, `evmRpcUrl`, `options?`): `Promise`\<`GenericEvmAdapter`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts:237](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts#L237)

Create an adapter from a private key for server-side EVM signing.

Connects to an EVM JSON-RPC provider for transaction broadcasting.

**Security Note**: Only use in secure server-side environments.

#### Parameters

##### privateKey

`string`

The private key (hex string, with or without 0x prefix)

##### evmRpcUrl

`string`

The EVM JSON-RPC endpoint URL

##### options?

[`EvmAdapterOptions`](/sdk/reference/interfaces/evm-adapter-options)

Optional configuration including expected chain ID

#### Returns

`Promise`\<`GenericEvmAdapter`\>

A new GenericEvmAdapter for server-side signing

***

### fromProvider()

> `static` **fromProvider**(`provider`, `options?`): `Promise`\<`GenericEvmAdapter`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts:169](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts#L169)

Create an adapter from an EIP-1193 provider (like window.ethereum).

#### Parameters

##### provider

`EIP1193Provider`

An EIP-1193 compliant provider

##### options?

[`EvmAdapterOptions`](/sdk/reference/interfaces/evm-adapter-options)

Optional configuration including expected chain ID

#### Returns

`Promise`\<`GenericEvmAdapter`\>

A new GenericEvmAdapter connected to the provider

#### Throws

Error if expectedChainId is provided and wallet is on wrong network

***

### fromSigner()

> `static` **fromSigner**(`signer`, `options?`): `Promise`\<`GenericEvmAdapter`\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts:144](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/adapters/GenericEvmAdapter.ts#L144)

Create an adapter from an ethers.js Signer (v6).

#### Parameters

##### signer

`EthersSigner`

An ethers.js Signer instance

##### options?

[`EvmAdapterOptions`](/sdk/reference/interfaces/evm-adapter-options)

Optional configuration including expected chain ID

#### Returns

`Promise`\<`GenericEvmAdapter`\>

A new GenericEvmAdapter connected to the signer

#### Throws

Error if expectedChainId is provided and wallet is on wrong network
