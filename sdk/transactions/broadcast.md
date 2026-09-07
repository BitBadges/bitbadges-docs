---
description: "Simulate a signed BitBadges transaction, broadcast it through the API or a node, and poll for the receipt; plus the bitbadges.io developer broadcast page."
---

# Broadcast

After signing you have a `{ tx_bytes, mode }` body. Simulate it to get gas, broadcast it, then poll a node for the receipt.

## Example

```bash
bb simulate ./tx.json
bb deploy ./tx.json --browser          # sign in the browser wallet and broadcast
bb tx wait 903D4A6E205AD77D334933E3C9BB455012D8A334AA2D98DFD301C3F7E8AB92C6    # poll until the tx commits or fails
```

```ts
import { BitBadgesAPI, BigIntify, MsgTransferTokens, createTransactionPayload, createTxBroadcastBody, type TxContext } from 'bitbadges';
import axios from 'axios';

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

// 1. Simulate. Signatures are not checked, so an empty signature works.
const simBody = createTxBroadcastBody(txContext, msgs, '');
const sim = await api.simulateTx(simBody); // POST https://api.bitbadges.io/api/v0/simulate
console.log(sim.gas_info.gas_used);
txContext.fee.gas = String(Math.ceil(Number(sim.gas_info.gas_used) * 1.3));

// 2. Sign for real (Keplr signDirect shown; see sign-cosmos and sign-ethereum), then broadcast
const payload = createTransactionPayload(txContext, msgs);
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
const txBody = createTxBroadcastBody(txContext, msgs, hexSignature);
const res = await api.broadcastTx(txBody); // POST https://api.bitbadges.io/api/v0/broadcast
const { code, txhash } = res.tx_response;
if (code !== 0) {
  throw new Error(`Broadcast failed: code ${code}: ${JSON.stringify(res.tx_response, null, 2)}`);
}

// 3. Poll a node until the tx is indexed
const LCD = 'https://lcd.bitbadges.io';
let receipt: any;
while (!receipt) {
  try {
    receipt = (await axios.get(`${LCD}/cosmos/tx/v1beta1/txs/${txhash}`)).data;
  } catch {
    await new Promise((r) => setTimeout(r, 1000));
  }
}
```

## Fields

`simulateTx` returns:

```ts
interface SimulateTxSuccessResponse {
  gas_info: { gas_used: string; gas_wanted: string };
  result: {
    data: string;
    log: string;
    events: { type: string; attributes: { key: string; value: string; index: boolean }[] }[];
  };
}
```

`broadcastTx` returns:

```ts
interface BroadcastTxSuccessResponse {
  tx_response: {
    code: number; // 0 on success
    codespace: string;
    data: string;
    events: { type: string; attributes: { key: string; value: string; index: boolean }[] }[];
    gas_wanted: string;
    gas_used: string;
    height: string;
    info: string;
    logs: { events: { type: string; attributes: { key: string; value: string; index: boolean }[] }[] }[];
    raw_log: string;
    timestamp: string;
    tx: object | null;
    txhash: string;
  };
}
```

## Behavior

- Both routes accept the proto-encoded body `{ mode, tx_bytes }` that `createTxBroadcastBody` produces. `/api/v0/simulate` also accepts `{ messages, memo?, fee, creatorAddress }` with unsigned JSON messages; that form is encoded server side, covers the tokenization and baseline Cosmos message tiers, and exists for the CLI and agent tools. External integrations should send `tx_bytes`.
- A broadcast `code` other than `0` means the chain rejected the transaction. `raw_log` carries the reason.
- The broadcast route returns as soon as the node accepts the transaction. The `/cosmos/tx/v1beta1/txs/{hash}` LCD route returns 404 until the transaction is in a block, so poll it. `https://lcd.bitbadges.io` is the BitBadges-maintained node; any BitBadges node works. Other options: subscribe to new blocks over websockets, or link to an explorer.
- You can also send `tx_bytes` straight to a node at `POST {LCD}/cosmos/tx/v1beta1/txs` and skip the BitBadges API.
- The signing client does all of this in `signAndBroadcast` and returns `{ txHash, success, code, error, rawResponse }`.

{% hint style="info" %}
For development, https://bitbadges.io/dev/broadcast signs and broadcasts for you. Paste the transaction context and messages, and the site handles the wallet and the submission. It is a developer tool, not a user-facing flow.
{% endhint %}

## Related

- [Transactions](README.md)
- [Signing client](signing-client.md)
- [CLI deploy](../../cli/deploy.md)
- [Websocket events](../../chain/websocket-events.md)
