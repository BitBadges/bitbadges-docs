---
description: "Simulate a signed BitBadges transaction, broadcast it through the API or a node, and poll for the receipt; plus the bitbadges.io developer broadcast page."
---

# Broadcast

After signing you have a `{ tx_bytes, mode }` body. Simulate it to get gas, broadcast it, then poll a node for the receipt.

## Example

```bash
bb simulate ./tx.json
bb deploy ./tx.json --browser          # sign in the browser wallet and broadcast
bb tx wait <hash>                      # poll until the tx commits or fails
```

```ts
import { BitBadgesAPI, BigIntify } from 'bitbadges';
import axios from 'axios';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });

// 1. Simulate. Signatures are not checked, so the body from a simulate=true signing pass works.
const sim = await api.simulateTx(simBody); // POST https://api.bitbadges.io/api/v0/simulate
console.log(sim.gas_info.gas_used);
// Update txContext.fee from gas_used, re-create the payload, sign for real.

// 2. Broadcast
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
- [Websocket events](../../token-standard/network/websocket-events.md)
