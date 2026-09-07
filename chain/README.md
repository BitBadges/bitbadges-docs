---
description: "The BitBadges chain: what runs on it, chain IDs, the BADGE denom and EVM decimals, public endpoints (RPC, LCD, EVM RPC, explorer, chain registry), IBC channels."
---

# Chain

BitBadges is an L1 delegated proof-of-stake chain built with the Cosmos SDK and CometBFT. Blocks reach instant finality. Accounts can sign with Cosmos keys (`bb1` bech32 addresses) or with Ethereum keys (`0x` addresses) through the EVM precompiles. This tab covers the chain around the token standard; the standard itself is the [Token Standard](../token-standard/README.md) tab.

| Area | What it covers | Read when |
| --- | --- | --- |
| [Chain API reference](/chain-api-reference) | Every LCD (REST) route the chain serves, with a live playground against `https://lcd.bitbadges.io` | You want to call a node query directly, or see a message's exact payload |
| [Modules](modules/README.md) | `x/tokenization` (the token standard), `x/gamm`, `x/poolmanager`, `x/sendmanager`, `x/managersplitter`, IBC hooks, rate limits | You use the DEX, shared management, or IBC middleware |
| [EVM](evm/README.md) | Precompiles at `0x0000000000000000000000000000000000001001` through `0x...1003`, Solidity quickstart, JSON-RPC | You write contracts against tokens or connect an Ethereum wallet |
| [Cross-Chain Queries](cross-chain-queries.md) | Interchain queries that verify ownership from another chain | Another chain gates on BitBadges balances |
| [Supported Denoms](supported-denoms.md) | The IBC coins the chain accepts for payments and pools | You attach a payment or seed a pool |
| [Run a Node](run-a-node.md) | Full node and validator setup, cosmovisor, upgrades | You operate infrastructure |
| [Testnet](testnet.md) | Status and the faucet API shape | You need a sandbox |
| [WebSocket Events](websocket-events.md) | CometBFT event subscriptions | A bot reacts to transfers in real time |

The rest of this page holds the constants every integration needs.

```bash
curl https://lcd.bitbadges.io/cosmos/base/tendermint/v1beta1/node_info | jq .default_node_info.network
# "bitbadges-1"

curl -s -X POST -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}' https://evm-rpc.bitbadges.io
# {"jsonrpc":"2.0","id":1,"result":"0xc368"}   (50024)
```

## Chain IDs

| Network | Cosmos chain ID | EVM chain ID | Status |
| --- | --- | --- | --- |
| mainnet | `bitbadges-1` | `50024` | live |
| testnet | `bitbadges-2` | `50025` | offline since 2026-04-25, see [Testnet](testnet.md) |
| local | `bitbadges-1` (default from `init`) | `90123` | your machine |

Both EVM chain IDs are claimed in the ethereum-lists/chains registry.

## Native Coin

| Property | Value |
| --- | --- |
| Base denom | `ubadge` |
| Display denom | `BADGE` |
| Cosmos decimals | 9 (1 BADGE = 10^9 `ubadge`) |
| EVM decimals | 18, through the precisebank module |
| EVM base unit | `abadge` (1 `ubadge` = 10^9 `abadge`, 1 BADGE = 10^18 `abadge`) |

In Cosmos messages, use 9-decimal precision (`1000000000ubadge` is one BADGE). In Solidity and EVM JSON-RPC, use 18-decimal precision (one BADGE is `1e18` wei-equivalent). The precisebank module converts between the two; `abadge` is only visible on the EVM side. See [About BADGE](../about/badge-token.md) for supply and rewards.

## Endpoints

| Surface | mainnet | Notes |
| --- | --- | --- |
| CometBFT RPC | `https://rpc.bitbadges.io` | Tx broadcast, block and tx queries |
| WebSocket | `wss://rpc.bitbadges.io/websocket` | Event subscriptions, see [WebSocket Events](websocket-events.md) |
| LCD (REST) | `https://lcd.bitbadges.io` | gRPC-gateway for every module; `/bitbadges/bitbadgeschain/tokenization/...`, `/osmosis/gamm/...`, `/cosmos/...` |
| EVM JSON-RPC | `https://evm-rpc.bitbadges.io` | `eth_`, `net_`, `web3_` namespaces, see [EVM RPC Endpoints](evm/rpc-endpoints.md) |
| Explorer | `https://explorer.bitbadges.io` | Blocks, validators, staking |
| BitBadges API | `https://api.bitbadges.io` | Indexed data, needs an API key, see [API](../api/README.md) |
| Source | `https://github.com/bitbadges/bitbadgeschain` | Chain source and proto definitions |
| Chain registry | `https://github.com/cosmos/chain-registry/tree/master/bitbadges` | Official metadata, assets, IBC connections, peer lists |

Testnet endpoints are listed on [Testnet](testnet.md) and are down.

## IBC Connections

BitBadges (`bitbadges-1`) keeps these ICS-20 transfer channels, all registered in the chain registry `_IBC` directory and all active:

| Peer chain | BitBadges channel | Peer channel | Connection (BitBadges side) | Notable assets |
| --- | --- | --- | --- | --- |
| Osmosis | `channel-0` | `channel-104311` | `connection-1` | OSMO; BADGE liquidity on Osmosis |
| Noble | `channel-2` | `channel-158` | `connection-6` | Legacy `USDC.n` (backwards compatibility only) |
| Cosmos Hub | `channel-3` | `channel-1420` | `connection-8` | ATOM |
| Injective | `channel-40` | `channel-464` | `connection-89` | Canonical `USDC`: Circle's native `USDC.inj` (`erc20:0xa00C59fF5a080D2b954d0c75e46E22a0c371235a`), arriving as `ibc/E1116484...` |

The Injective connection (`_IBC/bitbadges-injective.json`) carries the canonical USDC denom, one IBC hop from Injective's native USDC. See [Supported Denoms](supported-denoms.md) for the full table and the canonical-versus-legacy USDC policy.

## Pages in This Section

| Page | Read when |
| --- | --- |
| [Supported Denoms](supported-denoms.md) | You price, pay, or back a collection in a coin other than BADGE |
| [Run a Node](run-a-node.md) | You operate a full node or validator |
| [Testnet](testnet.md) | You are looking for the testnet or faucet |
| [WebSocket Events](websocket-events.md) | Your bot reacts to on-chain events in real time |

## Related

- [Accounts](../token-standard/concepts/accounts.md)
- [EVM](evm/README.md)
- [IBC and x/bank Compatibility](../token-standard/ibc/README.md)
