---
description: "Sign a BitBadges transaction payload by hand with Keplr or another Cosmos wallet using signDirect, then build the broadcast body."
---

# Sign with a Cosmos wallet

Manual Cosmos signing takes the `signDirect` payload from `createTransactionPayload`, asks the wallet for a signature over it, and wraps the result with `createTxBroadcastBody`. Use [Signing client](signing-client.md) unless you need this level of control.

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
const payload = createTransactionPayload(txContext, msgs);
const simBody = await signTxn(txContext, payload, msgs, true);
const sim = await api.simulateTx(simBody); // read gas_info.gas_used, adjust txContext.fee
const txBody = await signTxn(txContext, createTransactionPayload(txContext, msgs), msgs, false);
const res = await api.broadcastTx(txBody);
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
- [Signing client](signing-client.md)
