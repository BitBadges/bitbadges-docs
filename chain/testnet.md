---
description: "Testnet status (offline since 2026-04-25), how to test on mainnet as a chaosnet instead, and the testnet endpoints and faucet API kept for when it returns."
---

# Testnet

The BitBadges testnet (`bitbadges-2`) is offline. This page records its status, the recommended substitute, and the endpoint and faucet shapes so they are ready when it returns.

{% hint style="warning" %}
Testnet has been offline since 2026-04-25 to reduce hosting costs while usage was minimal. Every testnet URL below returns an error (503 or connection refused as of 2026-09-06), and the SDK's `NETWORK_CONFIGS.testnet` is marked `disabled: true`. To ask for a relaunch, [contact the team](https://bitbadges.io/contact).
{% endhint %}

## Test on mainnet instead

Mainnet operates as a chaosnet: fully live, but safe to experiment on.

- Gas fees can be set to zero while activity is low.
- Transact with worthless assets such as `CHAOS` (`badges:49:chaosnet`) instead of real-value coins.
- Contracts, transactions, and integrations run against the real network at no real cost. Pick your assets accordingly.

Every example in these docs targets mainnet. See [Network](README.md) for endpoints and [Supported denoms](supported-denoms.md) for `CHAOS`.

## What testnet was

A separate environment isolated from production, with its own chain, database, API, and site. Nothing carried over between the two: not profiles, tokens, settings, or anything else. Third-party integrations such as claim plugins behaved the same in both.

Differences from production:

- Some features were unavailable: off-chain balances managed by BitBadges were not hosted on a CDN, BADGE credits could not be bought, no push notifications, and more.
- Some restrictions were relaxed: no API keys required, a more lenient faucet.
- Performance differed from production.

### Endpoints (offline)

| Surface | URL |
| --- | --- |
| Site | `https://testnet.bitbadges.io` |
| BitBadges API | `https://api.bitbadges.io/testnet` (append the normal routes) |
| CometBFT RPC | `https://rpc-testnet.bitbadges.io` |
| WebSocket | `wss://rpc-testnet.bitbadges.io/websocket` |
| LCD (REST) | `https://lcd-testnet.bitbadges.io` |
| EVM JSON-RPC | `https://evm-rpc-testnet.bitbadges.io` |
| Cosmos chain ID | `bitbadges-2` |
| EVM chain ID | `50025` |

## Faucet API (offline)

The faucet gave free BADGE for testing and bot development. No API key and relaxed CORS. Kept here as the contract for when testnet returns; do not call it as a live step today.

```text
POST https://api.bitbadges.io/testnet/api/v0/faucet
```

Request:

```json
{
  "address": "bb1..."
}
```

The address must be in `bb1...` format. Use the SDK's `convertToCosmosAddress()` to convert from Ethereum or other formats.

Response: `200` with an empty body on success (tokens are queued and arrive shortly). `500` with a JSON error otherwise:

| Error | Cause |
| --- | --- |
| `Already_airdropped` | The address already received faucet tokens |
| `Invalid_request._Origin_not_found.` | The request origin could not be determined |

Behavior:

- Amount: 1000 `ubadge` per request.
- Limit: one airdrop per address, lifetime. For more, use another address or ask on Discord.
- Processing: asynchronous queue; tokens can take a few seconds.
- Authentication: none on testnet.

```bash
curl -X POST https://api.bitbadges.io/testnet/api/v0/faucet \
  -H "Content-Type: application/json" \
  -d '{"address": "bb1abc123..."}'
```

```ts
// Using fetch directly
const response = await fetch('https://api.bitbadges.io/testnet/api/v0/faucet', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ address: 'bb1abc123...' })
});

if (!response.ok) {
  const error = await response.json();
  console.error('Faucet error:', error);
}
```

Bot bootstrap pattern:

```ts
import { GenericEvmAdapter, NETWORK_CONFIGS } from 'bitbadges';

// Generate a new bot wallet
const adapter = await GenericEvmAdapter.fromMnemonic(
  process.env.BOT_MNEMONIC!,
  NETWORK_CONFIGS['testnet'].evmRpcUrl
);

// Fund it (one-time)
await fetch('https://api.bitbadges.io/testnet/api/v0/faucet', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ address: adapter.address })
});

// Wait briefly for tokens to arrive
await new Promise(r => setTimeout(r, 5000));

// Now ready to sign and broadcast transactions
```

On mainnet there is no faucet; acquire BADGE through normal channels.

## Related

- [Network](README.md)
- [Supported denoms](supported-denoms.md)
- [Bot examples](../agents/bot-examples.md)
