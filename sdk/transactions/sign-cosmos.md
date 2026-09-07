---
description: "Sign a BitBadges transaction payload by hand with Keplr or another Cosmos wallet using signDirect, then build the broadcast body."
---

# Sign with a Cosmos Wallet

Manual Cosmos signing takes the `signDirect` payload from `createTransactionPayload`, asks the wallet for a signature over it, and wraps the result with `createTxBroadcastBody`. Use [Signing Client](signing-client.md) unless you need this level of control.

## Example

```ts
import { createTransactionPayload, createTxBroadcastBody, type TxContext, type TransactionPayload } from 'bitbadges';

const chainId = 'bitbadges-1';

const signTxn = async (context: TxContext, payload: TransactionPayload, msgs: any[], simulate: boolean) => {
  const sender = context.sender!;
  await window.keplr?.enable(chainId);

  // Simulations do not check signatures, so an empty signature is fine.
  let hexSig = '';

  if (!simulate) {
    const signResponse = await window.keplr?.signDirect(
      chainId,
      sender.address,
      {
        bodyBytes: payload.signDirect.body.toBinary(),
        authInfoBytes: payload.signDirect.authInfo.toBinary(),
        chainId,
        // v34+ account numbers exceed Number.MAX_SAFE_INTEGER. Build the value from the
        // string the API returned. Never `Number()` it, and never `new Long(n)` from a JS number.
        accountNumber: BigInt(String(sender.accountNumber)) as any
      },
      { preferNoSetFee: true }
    );
    if (!signResponse) throw new Error('No signature returned from Keplr');

    hexSig = Buffer.from(signResponse.signature.signature, 'base64').toString('hex');
  }

  return createTxBroadcastBody(context, msgs, hexSig);
};
```

```ts
// Usage
import { BitBadgesAPI, BigIntify, MsgTransferTokens } from 'bitbadges';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });
const ALICE = 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d';

const msgs = [
  new MsgTransferTokens({
    creator: ALICE,
    collectionId: '1',
    transfers: [
      {
        from: ALICE,
        toAddresses: ['bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'],
        balances: [{ amount: '1', tokenIds: [{ start: '1', end: '1' }], ownershipTimes: [{ start: '1', end: '18446744073709551615' }] }]
      }
    ]
  })
];
const { account } = await api.getAccount({ address: ALICE });
const txContext: TxContext = {
  sender: { address: account.address, sequence: account.sequence ?? 0n, accountNumber: account.accountNumber, publicKey: account.publicKey },
  fee: { amount: '0', denom: 'ubadge', gas: '400000' },
  memo: ''
};

const payload = createTransactionPayload(txContext, msgs);
const simBody = await signTxn(txContext, payload, msgs, true);
const sim = await api.simulateTx(simBody);
txContext.fee.gas = String(Math.ceil(Number(sim.gas_info.gas_used) * 1.3));
const txBody = await signTxn(txContext, createTransactionPayload(txContext, msgs), msgs, false);
const res = await api.broadcastTx(txBody);
console.log(res.tx_response.txhash);
```

## Behavior

- `payload.signDirect.body` and `.authInfo` are protobuf classes. `toBinary()` gives the bytes Keplr expects.
- `accountNumber` in the sign doc must be the exact chain value. Keplr's type for this field is a `Long`; if your Keplr typings reject a bigint, use `Long.fromString(String(sender.accountNumber), true)` from the `long` package. Never construct it from a JS `number`.
- `preferNoSetFee: true` stops Keplr from replacing the fee you computed in `txContext.fee`.
- `createTxBroadcastBody(txContext, messages, hexSignature)` returns `{ tx_bytes, mode }`, the body both `simulateTx` and `broadcastTx` accept. It throws when `sender` or `sender.publicKey` is missing, since a Cosmos signature needs the public key in `authInfo`.
- Leap and Cosmostation expose the same `signDirect` shape. `GenericCosmosAdapter.fromBrowserWallet(wallet, chainId)` wraps any such provider if you want the signing client instead.
- Server-side keys: `GenericCosmosAdapter.fromMnemonic` or `fromPrivateKey` sign the sha256 of the `SignDoc` bytes with secp256k1. `payload.signDirect.signBytes` is keccak256-hashed for ethermint compatibility, so do not sign that field with a plain Cosmos key.

## Related

- [Transactions](README.md)
- [Broadcast](broadcast.md)
- [Signing Client](signing-client.md)
