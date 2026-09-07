---
description: "BitBadgesSigningClient provides a wallet-agnostic interface for signing and broadcasting transactions on the BitBadges blockchain."
---

# Class: BitBadgesSigningClient

Defined in: [packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts:85](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts#L85)

BitBadgesSigningClient provides a wallet-agnostic interface for signing and broadcasting
transactions on the BitBadges blockchain.

It supports both Cosmos wallets (Keplr, Leap, etc.) and EVM wallets (MetaMask via ethers.js)
through the adapter pattern.

## Example

```typescript
// With a Cosmos wallet (Keplr)
const adapter = await GenericCosmosAdapter.fromKeplr('bitbadges-1');
const client = new BitBadgesSigningClient({ adapter });

const result = await client.signAndBroadcast([
  MsgTransferBadges.create({ ... }).toProto()
]);

// With an EVM wallet (ethers.js)
const provider = new BrowserProvider(window.ethereum);
const signer = await provider.getSigner();
const adapter = await GenericEvmAdapter.fromSigner(signer);
const client = new BitBadgesSigningClient({ adapter });

const result = await client.signAndBroadcast([msg]); // Uses precompile path
```

## Constructors

### Constructor

> **new BitBadgesSigningClient**(`options`): `BitBadgesSigningClient`

Defined in: [packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts#L105)

Create a new BitBadgesSigningClient.

#### Parameters

##### options

[`SigningClientOptions`](/sdk/reference/interfaces/signing-client-options)

Configuration options for the client

#### Returns

`BitBadgesSigningClient`

#### Throws

Error if EVM adapter is used and MetaMask is on wrong network

## Accessors

### address

#### Get Signature

> **get** **address**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts:149](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts#L149)

Get the BitBadges address (bb-prefixed) for this client.

##### Returns

`string`

***

### chainType

#### Get Signature

> **get** **chainType**(): `"evm"` \| `"cosmos"`

Defined in: [packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts#L161)

Get the chain type from the adapter.

##### Returns

`"evm"` \| `"cosmos"`

***

### config

#### Get Signature

> **get** **config**(): [`NetworkConfig`](/sdk/reference/interfaces/network-config)

Defined in: [packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts:142](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts#L142)

Get the network configuration.

##### Returns

[`NetworkConfig`](/sdk/reference/interfaces/network-config)

***

### evmChainId

#### Get Signature

> **get** **evmChainId**(): `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts:175](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts#L175)

Get the EVM chain ID being used.

##### Returns

`number`

## Methods

### clearCache()

> **clearCache**(): `void`

Defined in: [packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts:262](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts#L262)

Clear the cached account info. Call this after transactions to force a refresh.

#### Returns

`void`

***

### getAccountInfo()

> **getAccountInfo**(`forceRefresh?`): `Promise`\<[`AccountInfo`](/sdk/reference/interfaces/account-info)\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts:200](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts#L200)

Get account information from the blockchain.
Results are cached to minimize RPC calls.

#### Parameters

##### forceRefresh?

`boolean` = `false`

Force a refresh from the chain instead of using cache

#### Returns

`Promise`\<[`AccountInfo`](/sdk/reference/interfaces/account-info)\>

Account information including accountNumber, sequence, and publicKey

***

### signAndBroadcast()

> **signAndBroadcast**(`messages`, `options?`): `Promise`\<[`BroadcastResult`](/sdk/reference/interfaces/broadcast-result)\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts:521](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts#L521)

Sign and broadcast a transaction.

#### Parameters

##### messages

[`TransactionMessage`](/sdk/reference/type-aliases/transaction-message)[]

Messages to include in the transaction

##### options?

[`SignAndBroadcastOptions`](/sdk/reference/interfaces/sign-and-broadcast-options)

Signing and broadcast options

#### Returns

`Promise`\<[`BroadcastResult`](/sdk/reference/interfaces/broadcast-result)\>

Broadcast result including transaction hash

***

### simulate()

> **simulate**(`messages`, `options?`): `Promise`\<[`SimulateResult`](/sdk/reference/interfaces/simulate-result)\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts:285](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts#L285)

Simulate a transaction to estimate gas usage.

#### Parameters

##### messages

[`TransactionMessage`](/sdk/reference/type-aliases/transaction-message)[]

Messages to include in the transaction

##### options?

Optional memo

###### gasMultiplier?

`number`

###### memo?

`string`

#### Returns

`Promise`\<[`SimulateResult`](/sdk/reference/interfaces/simulate-result)\>

Simulation result with gas estimates

***

### simulateAndReview()

> **simulateAndReview**(`messages`, `options?`): `Promise`\<[`SimulateAndReviewResult`](/sdk/reference/interfaces/simulate-and-review-result)\>

Defined in: [packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts:471](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/BitBadgesSigningClient.ts#L471)

Simulate a transaction and return parsed event data with net balance changes.

This combines gas estimation with full event parsing, giving a complete
preview of what the transaction will do (coin transfers, badge transfers,
IBC transfers, fees) before signing.

For Cosmos wallets, events come from the standard simulate endpoint.
For EVM wallets, a separate Cosmos-style simulation is run to obtain events
(since EVM estimateGas does not return Cosmos events).

#### Parameters

##### messages

[`TransactionMessage`](/sdk/reference/type-aliases/transaction-message)[]

Messages to include in the transaction

##### options?

Optional memo and txsInfo for IBC transfer detection

###### memo?

`string`

###### txsInfo?

[`TxMessageInfo`](/sdk/reference/interfaces/tx-message-info)[]

#### Returns

`Promise`\<[`SimulateAndReviewResult`](/sdk/reference/interfaces/simulate-and-review-result)\>

Full simulation result with parsed events and net changes

#### Example

```typescript
const review = await client.simulateAndReview([msg], {
  txsInfo: [{ type: 'MsgTransferBadges', msg: { ... } }]
});

console.log('Gas:', review.gasUsed);
console.log('Coin changes:', review.netChanges.coinChanges);
console.log('Badge changes:', review.netChanges.badgeChanges);
```
