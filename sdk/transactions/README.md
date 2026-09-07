---
description: "The BitBadges transaction pipeline in TypeScript, build messages, create a transaction context, produce the payload, sign with a Cosmos or EVM wallet, and broadcast."
---

# Transactions

A BitBadges transaction is a list of messages, a signer context, a signature, and a broadcast. `BitBadgesSigningClient` runs the whole pipeline in one call; the manual functions are exported for full control.

## Example

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgTransferTokens } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromKeplr('bitbadges-1');
const client = new BitBadgesSigningClient({ adapter });

const result = await client.signAndBroadcast([new MsgTransferTokens({ creator: client.address, collectionId: '1', transfers: [] })]);
console.log(result.txHash);
```

The same pipeline by hand:

```ts
import { BitBadgesAPI, BigIntify, MsgTransferTokens, createTransactionPayload, createTxBroadcastBody, type TxContext } from 'bitbadges';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });

// 1. Build messages
const msgs = [new MsgTransferTokens({ creator: 'bb1...', collectionId: '1', transfers: [] })];

// 2. Transaction context (account number, sequence, public key, fee)
const { account } = await api.getAccount({ address: 'bb1...' });
const txContext: TxContext = {
  sender: {
    address: account.address,
    sequence: account.sequence ?? 0n,
    accountNumber: account.accountNumber,
    publicKey: account.publicKey
  },
  fee: { amount: '0', denom: 'ubadge', gas: '400000' },
  memo: ''
};

// 3. Payload to sign
const payload = createTransactionPayload(txContext, msgs);

// 4. Sign (wallet specific; see sign-cosmos and sign-ethereum)
const hexSignature = await signWithYourWallet(payload);

// 5. Broadcast body, then simulate or broadcast
const txBody = createTxBroadcastBody(txContext, msgs, hexSignature);
const sim = await api.simulateTx(txBody);
const res = await api.broadcastTx(txBody);
```

## Choose a path

| | `bb` CLI | `BitBadgesSigningClient` | Manual functions |
| --- | --- | --- | --- |
| Language | Terminal | TypeScript | TypeScript |
| Account info | Automatic | Fetched and cached | You fetch it |
| Gas | `--gas auto` | Simulated, multiplier applied | You simulate |
| Sequence retry | None | Automatic | You handle it |
| Wallets | Keyring, browser handoff, burner | Keplr, Leap, Cosmostation, MetaMask, EIP-1193, mnemonic, private key | Anything that can sign bytes |
| Best for | Scripts, agents, no Node.js | Apps and services | Custom fee logic, existing tx infrastructure |

The CLI path is on [Deploy](../../cli/deploy.md) and [Chain](../../cli/chain.md). The rest of this section is TypeScript.

## 1. Build messages

```ts
import { MsgCreateCollection, MsgTransferTokens, proto } from 'bitbadges';

// SDK classes: generic over NumberType, have toProto()
const sdkMsg = new MsgTransferTokens<bigint>({ creator: 'bb1...', collectionId: '1', transfers: [] });

// Proto classes: what the chain encodes; numbers are strings
const protoMsg = new proto.tokenization.MsgDeleteCollection({ creator: 'bb1...', collectionId: '1' });
```

Both forms are accepted by `signAndBroadcast`, `createTransactionPayload`, and `createTxBroadcastBody`. Standard Cosmos messages live under `proto.cosmos` (for example `proto.cosmos.bank.v1beta1.MsgSend`). Every message page under [Messages](../../token-standard/messages/README.md) shows the fields.

Messages execute in array order inside one transaction. When a later message depends on an earlier one (for example `MsgCreateAddressLists` followed by a `MsgCreateCollection` that references the new list ID), put the dependency first.

## 2. Transaction context

```ts
import { BitBadgesAPI, BigIntify, type TxContext } from 'bitbadges';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });
const { account } = await api.getAccount({ address: 'bb1...' });

if (BigInt(account.accountNumber) <= 0n) {
  // Unregistered: the chain has never seen this address, so it cannot verify a signature from it.
  // Register it by sending any non-zero amount of any denom (BADGE works) from a registered key,
  // then fetch the account again.
  throw new Error(`Account ${account.address} is unregistered. Fund it and re-fetch before building a tx context.`);
}

const txContext: TxContext = {
  // Optional: chainIdOverride: 'bitbadges-1'
  sender: {
    address: account.address, // native bb1 form
    sequence: account.sequence ?? 0n, // string or bigint, never Number()
    accountNumber: account.accountNumber,
    publicKey: account.publicKey // base64; required for Cosmos signatures, '' for EVM
  },
  fee: { amount: '0', denom: 'ubadge', gas: '400000' },
  memo: '',
  // Optional: set evmAddress to also get an EVM precompile call in the payload
  evmAddress: '0x1234...'
};
```

{% hint style="warning" %}
Account numbers on v34 and later are hash-derived 64-bit values above `Number.MAX_SAFE_INTEGER`, and unordered-transaction sequences can be nanosecond timestamps. Keep both as the strings or bigints the API returns. `Number()` silently loses precision and the signature is computed for the wrong account. `TxContext` accepts `number | string | bigint` and rejects unsafe numbers.
{% endhint %}

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sender.address` | `string` | for Cosmos | `bb1` address of the signer |
| `sender.sequence` | `string \| bigint \| number` | for Cosmos | Account nonce |
| `sender.accountNumber` | `string \| bigint \| number` | for Cosmos | Chain-assigned account number |
| `sender.publicKey` | `string` | for Cosmos | Base64 secp256k1 public key. `''` for EVM-only |
| `fee` | `{ amount, denom, gas }` | yes | Strings. `denom` is `ubadge` |
| `memo` | `string` | no | Free text stored with the transaction |
| `evmAddress` | `string` | for EVM | `0x` address of the same signer. Enables precompile conversion |
| `testnet` | `boolean` | no | Selects the testnet chain ID. Testnet is offline; leave unset |
| `chainIdOverride` | `string` | no | Custom chain ID, for local chains |

A public key from Keplr when the account has never transacted:

```ts
const getPublicKey = async () => {
  const key = await window.keplr?.getKey('bitbadges-1');
  return key ? Buffer.from(key.pubKey).toString('base64') : '';
};
```

Fees: many transactions clear with a zero fee when the network is idle. To pay one, simulate first and price the gas. The bitbadges.io frontend uses a base gas price of `0.025 ubadge` per unit:

```ts
const baseGasPrice = 0.025;
const feeInUbadge = BigIntify(Math.round(Number(gasUsed) * baseGasPrice));
```

## 3. Create the payload

```ts
import { createTransactionPayload } from 'bitbadges';

const payload = createTransactionPayload(txContext, msgs);
```

```ts
interface TransactionPayload {
  signDirect: { body: TxBody; authInfo: AuthInfo; signBytes: string }; // present when sender is set
  legacyAmino: { body: TxBody; authInfo: AuthInfo; signBytes: string }; // present when sender is set
  evmTx?: {
    to: string; // precompile address: 0x...1001 tokenization, 0x...1002 gamm, 0x...1003 sendmanager
    data: string; // ABI-encoded call data
    value: string; // always "0"
    functionName: string; // for logging
  };
}
```

`createTransactionPayload` throws if neither `sender` nor `evmAddress` is set. With only `evmAddress`, only `evmTx` is produced. With both, you get both and can pick a path at sign time. `evmTx` is `undefined` when a message has no precompile mapping; fall back to Cosmos signing in that case.

## 4. Sign

- [Sign with a Cosmos wallet](sign-cosmos.md): `signDirect` with Keplr, then `createTxBroadcastBody`.
- [Sign with an Ethereum wallet](sign-ethereum.md): send `payload.evmTx` as an EVM transaction with ethers or Privy.
- [Signing client](signing-client.md): both, without the steps.

## 5. Broadcast

[Broadcast](broadcast.md) covers `simulateTx`, `broadcastTx`, polling for the receipt, and the bitbadges.io broadcast page.

## Related

- [Signing client](signing-client.md)
- [Messages](../../token-standard/messages/README.md)
- [Accounts](../../token-standard/concepts/accounts.md)
