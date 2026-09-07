---
description: "Subscribe to chain events over the CometBFT WebSocket: endpoint, subscribe and unsubscribe, queries by message type and sender, a Node.js listener."
---

# WebSocket Events

The chain exposes the standard CometBFT JSON-RPC WebSocket for real-time events. Bots use it to react to transfers, mints, and collection updates as they land.

```json
{
  "jsonrpc": "2.0",
  "method": "subscribe",
  "id": 1,
  "params": {
    "query": "tm.event='Tx'"
  }
}
```

## Connection

| Network | WebSocket URL |
| --- | --- |
| mainnet | `wss://rpc.bitbadges.io/websocket` |
| testnet | `wss://rpc-testnet.bitbadges.io/websocket` (offline, see [Testnet](testnet.md)) |

## Queries

Use the `subscribe` method with a CometBFT event query.

All transactions:

```text
tm.event='Tx'
```

New blocks:

```text
tm.event='NewBlock'
```

Transactions by message type:

```text
tm.event='Tx' AND message.action='/tokenization.MsgTransferTokens'
```

Transactions by sender:

```text
tm.event='Tx' AND message.sender='bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d'
```

Combined:

```text
tm.event='Tx' AND message.action='/tokenization.MsgCreateCollection' AND message.sender='bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d'
```

## Message Type URLs

The `message.action` attribute is the message type URL, `/<proto package>.<Msg>`. The tokenization package is `tokenization`.

| Message | `message.action` |
| --- | --- |
| Transfer tokens | `/tokenization.MsgTransferTokens` |
| Create collection | `/tokenization.MsgCreateCollection` |
| Update collection | `/tokenization.MsgUpdateCollection` |
| Delete collection | `/tokenization.MsgDeleteCollection` |
| Update user approvals | `/tokenization.MsgUpdateUserApprovals` |
| Create address lists | `/tokenization.MsgCreateAddressLists` |
| Swap (gamm) | `/gamm.v1beta1.MsgSwapExactAmountIn` |
| Send with alias routing | `/sendmanager.MsgSendWithAliasRouting` |

The full message list is in [Messages](../token-standard/messages/README.md).

## Node.js Listener

```ts
import WebSocket from 'ws';

const ws = new WebSocket('wss://rpc.bitbadges.io/websocket');

ws.on('open', () => {
  console.log('Connected to BitBadges mainnet WebSocket');

  // Subscribe to all transactions
  ws.send(JSON.stringify({
    jsonrpc: '2.0',
    method: 'subscribe',
    id: 1,
    params: {
      query: "tm.event='Tx'"
    }
  }));
});

ws.on('message', (data: WebSocket.Data) => {
  const msg = JSON.parse(data.toString());

  if (msg.result?.data?.value?.TxResult) {
    const txResult = msg.result.data.value.TxResult;
    const txHash = msg.result.events?.['tx.hash']?.[0];

    console.log('New transaction:', txHash);
    console.log('Height:', txResult.height);

    // Parse events for specific actions
    const events = txResult.result?.events || [];
    for (const event of events) {
      if (event.type === 'message') {
        const action = event.attributes?.find(
          (a: any) => atob(a.key) === 'action'
        );
        if (action) {
          console.log('Action:', atob(action.value));
        }
      }
    }
  }
});

ws.on('error', (err) => {
  console.error('WebSocket error:', err);
});

ws.on('close', () => {
  console.log('Disconnected. Reconnecting...');
  // Implement reconnection logic here
});
```

Install the `ws` package:

```bash
bun add ws
bun add -d @types/ws  # if using TypeScript
```

## Unsubscribe

One query:

```json
{
  "jsonrpc": "2.0",
  "method": "unsubscribe",
  "id": 2,
  "params": {
    "query": "tm.event='Tx'"
  }
}
```

All queries:

```json
{
  "jsonrpc": "2.0",
  "method": "unsubscribe_all",
  "id": 2,
  "params": {}
}
```

## Behavior

- Event attributes can be base64-encoded in CometBFT responses. Decode with `atob()` or `Buffer.from(str, 'base64').toString()`. Newer CometBFT versions return plain strings; handle both.
- Connections drop on network issues. Reconnect with exponential backoff in production bots.
- The BitBadges API's internal WebSocket (activity feeds, candlestick data) is not public. Use the REST API for indexed data.
- For historical data, use the [BitBadges API](../api/README.md) rather than replaying events.

## Related

- [Network](README.md)
- [Bot Examples](../agents/bot-examples.md)
- [Messages](../token-standard/messages/README.md)
