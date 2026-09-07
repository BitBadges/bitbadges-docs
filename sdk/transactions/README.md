---
description: "The TypeScript transaction pipeline: build messages, create a transaction context, produce the payload, sign with a Cosmos or EVM wallet, and broadcast."
---

# Transactions

A BitBadges transaction is a list of messages, a signer context, a signature, and a broadcast. `BitBadgesSigningClient` runs the whole pipeline in one call; the manual functions are exported for full control.

## Example

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgTransferTokens } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromKeplr('bitbadges-1');
const client = new BitBadgesSigningClient({ adapter });

// Send bob one unit of token ID 1 from collection 1
const result = await client.signAndBroadcast([
  new MsgTransferTokens({
    creator: client.address,
    collectionId: '1',
    transfers: [
      {
        from: client.address,
        toAddresses: ['bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'],
        balances: [{ amount: '1', tokenIds: [{ start: '1', end: '1' }], ownershipTimes: [{ start: '1', end: '18446744073709551615' }] }]
      }
    ]
  })
]);
console.log(result.txHash);
```

The same pipeline by hand, signed with Keplr:

```ts
import { BitBadgesAPI, BigIntify, MsgTransferTokens, createTransactionPayload, createTxBroadcastBody, type TxContext } from 'bitbadges';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY }); // key from https://bitbadges.io/developer
const ALICE = 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d';
const BOB = 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue';

// 1. Build messages
const msgs = [
  new MsgTransferTokens({
    creator: ALICE,
    collectionId: '1',
    transfers: [
      {
        from: ALICE,
        toAddresses: [BOB],
        balances: [{ amount: '1', tokenIds: [{ start: '1', end: '1' }], ownershipTimes: [{ start: '1', end: '18446744073709551615' }] }]
      }
    ]
  })
];

// 2. Transaction context (account number, sequence, public key, fee)
const { account } = await api.getAccount({ address: ALICE });
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

// 4. Sign (Keplr shown; see sign-cosmos and sign-ethereum for the other wallets)
await window.keplr!.enable('bitbadges-1');
const signed = await window.keplr!.signDirect(
  'bitbadges-1',
  ALICE,
  {
    bodyBytes: payload.signDirect.body.toBinary(),
    authInfoBytes: payload.signDirect.authInfo.toBinary(),
    chainId: 'bitbadges-1',
    accountNumber: BigInt(String(account.accountNumber)) as any
  },
  { preferNoSetFee: true }
);
const hexSignature = Buffer.from(signed.signature.signature, 'base64').toString('hex');

// 5. Broadcast body, then simulate or broadcast
const txBody = createTxBroadcastBody(txContext, msgs, hexSignature);
const sim = await api.simulateTx(txBody);
const res = await api.broadcastTx(txBody);
console.log(sim.gas_info.gas_used, res.tx_response.txhash);
```

{% hint style="info" %}
Ask your agent. The MCP builder tools run steps 1 and 3 for you (`build_transfer`, `validate_transaction`, `simulate_transaction`) and stop at `get_review_url`:

```text
Build a transfer of one unit of token 1 in collection 1 from me to bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue, simulate it, and give me the link to sign.
```

Signing stays with your wallet.
{% endhint %}

## Choose a Path

| | `bb` CLI | `BitBadgesSigningClient` | Manual functions |
| --- | --- | --- | --- |
| Language | Terminal | TypeScript | TypeScript |
| Account info | Automatic | Fetched and cached | You fetch it |
| Gas | `--gas auto` | Simulated, multiplier applied | You simulate |
| Sequence retry | None | Automatic | You handle it |
| Wallets | Keyring, browser handoff, burner | Keplr, Leap, Cosmostation, MetaMask, EIP-1193, mnemonic, private key | Anything that can sign bytes |
| Best for | Scripts, agents, no Node.js | Apps and services | Custom fee logic, existing tx infrastructure |

The CLI path is on [Deploy](../../cli/deploy.md) and [Chain](../../cli/chain.md). The rest of this section is TypeScript.

## 1. Build Messages

```ts
import { MsgCreateCollection, MsgTransferTokens, proto } from 'bitbadges';

// SDK classes: generic over NumberType, have toProto()
const sdkMsg = new MsgTransferTokens<bigint>({
  creator: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
  collectionId: 1n,
  transfers: [
    {
      from: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
      toAddresses: ['bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'],
      balances: [{ amount: 1n, tokenIds: [{ start: 1n, end: 1n }], ownershipTimes: [{ start: 1n, end: 18446744073709551615n }] }]
    }
  ]
});

// Proto classes: what the chain encodes; numbers are strings
const protoMsg = new proto.tokenization.MsgDeleteCollection({ creator: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d', collectionId: '1' });
```

Both forms are accepted by `signAndBroadcast`, `createTransactionPayload`, and `createTxBroadcastBody`. Standard Cosmos messages live under `proto.cosmos` (for example `proto.cosmos.bank.v1beta1.MsgSend`). Every message page under [Messages](../../token-standard/messages/README.md) shows the fields.

Messages execute in array order inside one transaction. When a later message depends on an earlier one (for example `MsgCreateAddressLists` followed by a `MsgCreateCollection` that references the new list ID), put the dependency first.

## 2. Transaction Context

```ts
import { BitBadgesAPI, BigIntify, type TxContext } from 'bitbadges';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });
const { account } = await api.getAccount({ address: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d' });

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
  evmAddress: '0x0bc63cfe31d5218eb414b142c799e20964a54a1a'
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

Starting with v35, price the full gas limit at a minimum of `10ubadge` per unit. Simulate first, add a buffer, and finalize the fee before signing. The standard SDK signing client handles this automatically. For low-level payloads:

```ts
const gasLimit = (BigInt(gasUsed) * 13n + 9n) / 10n; // 30% buffer, rounded up
if (gasLimit < 1n || gasLimit > 100000000n) throw new Error("Invalid gas limit");
const feeInUbadge = gasLimit * 10n;
txContext.fee = { gas: gasLimit.toString(), amount: feeInUbadge.toString(), denom: "ubadge" };
```

## 3. Create the Payload

```ts
import { createTransactionPayload } from 'bitbadges';

const payload = createTransactionPayload(txContext, msgs);
```

```ts
interface TransactionPayload {
  signDirect: { body: TxBody; authInfo: AuthInfo; signBytes: string }; // present when sender is set
  legacyAmino: { body: TxBody; authInfo: AuthInfo; signBytes: string }; // present when sender is set
  evmTx?: {
    to: string; // precompile address: 0x0000000000000000000000000000000000001001 tokenization, 0x0000000000000000000000000000000000001002 gamm, 0x0000000000000000000000000000000000001003 sendmanager
    data: string; // ABI-encoded call data
    value: string; // always "0"
    functionName: string; // for logging
  };
}
```

`createTransactionPayload` throws if neither `sender` nor `evmAddress` is set. With only `evmAddress`, only `evmTx` is produced. With both, you get both and can pick a path at sign time. `evmTx` is `undefined` when a message has no precompile mapping; fall back to Cosmos signing in that case.

## 4. Sign

- [Sign with a Cosmos Wallet](sign-cosmos.md): `signDirect` with Keplr, then `createTxBroadcastBody`.
- [Sign with an Ethereum Wallet](sign-ethereum.md): send `payload.evmTx` as an EVM transaction with ethers or Privy.
- [Signing Client](signing-client.md): both, without the steps.

## 5. Broadcast

[Broadcast](broadcast.md) covers `simulateTx`, `broadcastTx`, polling for the receipt, and the bitbadges.io broadcast page.

## Related

- [Signing Client](signing-client.md)
- [Messages](../../token-standard/messages/README.md)
- [Accounts](../../token-standard/concepts/accounts.md)
