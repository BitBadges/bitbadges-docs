---
description: "Start a BitBadges mainnet full node or validator: init, genesis, peers, timeout_commit, EVM chain ID, sync check, snapshots, Cosmovisor, JSON-RPC settings."
---

# Run a node

This page brings up a BitBadges mainnet full node or validator, one copyable step at a time. The daemon binary is `bitbadgeschaind`; the `bb` developer CLI does not run a node. If you already run Cosmos SDK chains, the flow is the standard one. For help, ask in the `#validators` channel of the [Discord](https://discord.com/invite/TJMaEd9Kar) and ping `@trevormil` for the Validator role.

```bash
bitbadgeschaind init <moniker> --chain-id bitbadges-1
curl -L https://raw.githubusercontent.com/BitBadges/bitbadgeschain/master/genesis-711316.json \
  -o ~/.bitbadgeschain/config/genesis.json
sed -i 's/^timeout_commit = "5s"/timeout_commit = "2s"/' ~/.bitbadgeschain/config/config.toml
bitbadgeschaind start
```

{% hint style="warning" %}
A validator is responsible for the security and uptime of the network. Use normal production precautions (firewalls, monitoring, sentry nodes, key management) to avoid slashing or losing staked funds.
{% endhint %}

## 1. Install the binary

Download a release from [GitHub releases](https://github.com/BitBadges/bitbadgeschain/releases) or build from source, then confirm the binary is on your `PATH`:

```bash
bitbadgeschaind version
```

## 2. Initialize the node

Pick a moniker (the public name of your node). `init` creates `~/.bitbadgeschain/` with a default `config/config.toml`, `config/app.toml`, and a placeholder `config/genesis.json`.

```bash
bitbadgeschaind init <moniker> --chain-id bitbadges-1
```

## 3. Download the canonical genesis

Replace the placeholder with the pinned mainnet genesis (post-711316 hard fork):

```bash
curl -L https://raw.githubusercontent.com/BitBadges/bitbadgeschain/master/genesis-711316.json \
  -o ~/.bitbadgeschain/config/genesis.json
```

Check that the file is non-empty and parses as JSON before you continue.

## 4. Configure peers

Set `persistent_peers` (and or `seeds`) in `config.toml` to known-good mainnet nodes. One working peer is enough to discover the rest.

```toml
# ~/.bitbadgeschain/config/config.toml
persistent_peers = "<nodeID>@<host>:<port>,<nodeID>@<host>:<port>"
```

A first-party peer list is pending. Ask in `#validators` for current peer addresses. Active validators publish their own peer IDs in their guides (see the community guides below), and the chain registry lists peers and seeds.

## 5. Set timeout_commit

`timeout_commit` must match the network or the node falls out of sync. `init` writes `5s`; mainnet uses `2s`.

```toml
# ~/.bitbadgeschain/config/config.toml
timeout_commit = "2s"
```

Non-interactively:

```bash
sed -i 's/^timeout_commit = "5s"/timeout_commit = "2s"/' \
  ~/.bitbadgeschain/config/config.toml
```

## 6. Set the EVM chain ID

`evm-chain-id` in `app.toml` must match the network: `50024` on mainnet, `50025` on testnet. The default after `init` (`90123`) is wrong for both.

```toml
[evm]
evm-chain-id = 50024
```

With the wrong value, wallets such as MetaMask reject transactions with `incorrect chain-id`. See [EVM JSON-RPC configuration](#evm-json-rpc-configuration) for the rest of the EVM settings.

## 7. Start the node

```bash
bitbadgeschaind start
```

Block heights should tick up within a minute or two once peers connect. If the node stays at height `0` or logs `No addresses added` for more than a few minutes, the peer list is wrong; revisit step 4.

## 8. Verify sync

```bash
bitbadgeschaind status 2>&1 | jq '.sync_info'
```

`catching_up: false` means the node is synced. Compare `latest_block_height` with the [explorer](https://explorer.bitbadges.io/BitBadges%20Mainnet/staking).

## 9. Optional: restore a snapshot

A full sync from genesis takes hours. Restore a state snapshot from a community validator instead:

- [provewithryd: network overview and snapshots](https://docs.provewithryd.xyz/mainnet/bitbadges/network-overview)
- [nodestake: BitBadges snapshot](https://nodestake.org/bitbadges)

Restore the snapshot after steps 1 to 6 and before step 7.

## 10. Optional: run under Cosmovisor

Upgrades are announced in the `#chain-upgrades` Discord channel and use the Cosmos SDK `x/upgrade` module. [Cosmovisor](https://docs.cosmos.network/main/tooling/cosmovisor) applies them automatically at the scheduled height.

```bash
export DAEMON_HOME=$HOME/.bitbadgeschain
export DAEMON_NAME=bitbadgeschaind
cosmovisor init $(which bitbadgeschaind)
cosmovisor run start
```

For download-upgrade, backup policy, and other options follow the official Cosmovisor docs with `bitbadgeschaind` in place of the example daemon.

## Relayers

The official IBC connections BitBadges supports are in the [Cosmos chain registry](https://github.com/cosmos/chain-registry/tree/master/_IBC) and summarized on [Network](README.md).

## EVM JSON-RPC configuration

To expose Ethereum-compatible JSON-RPC (MetaMask, ethers.js), configure the EVM settings in `app.toml`.

### EVM chain ID

```toml
[evm]
# Set this to match your network's EVM chain ID
# Mainnet: 50024
# Testnet: 50025
# The default value (90123) will cause wallet transaction failures!
evm-chain-id = 50024
```

`evm-chain-id` feeds the `net_version` RPC method, which EIP-155 signature verification uses. If it differs from `eth_chainId` (read from chain state), wallets fail with `incorrect chain-id; expected 50024, got 90123`.

### JSON-RPC server options

```toml
[json-rpc]
# Enable JSON-RPC server
enable = true

# Address to listen on (use 0.0.0.0:8545 for external access)
address = "127.0.0.1:8545"

# WebSocket address for subscriptions
ws-address = "127.0.0.1:8546"

# API namespaces to enable
api = ["eth", "net", "web3"]

# Allow unprotected (non EIP-155) transactions
allow-unprotected-txs = false

# Enable custom tx indexer for better query performance
enable-indexer = true

# Maximum requests in a batch
batch-request-limit = 1000

# Maximum server response size (bytes)
batch-response-max-size = 25000000

# Max block range for eth_getLogs queries
block-range-cap = 10000

# Max results from eth_getLogs
logs-cap = 10000

# Timeout for eth_call (0 = infinite)
evm-timeout = "5s"

# Global filter cap
filter-cap = 200

# Gas cap for eth_call/estimateGas (0 = infinite)
gas-cap = 25000000

# Transaction fee cap (in BADGE)
txfee-cap = 1.0

# HTTP timeouts
http-timeout = "30s"
http-idle-timeout = "2m0s"

# Maximum simultaneous connections (0 = unlimited)
max-open-connections = 0
```

### Command-line flags

Every JSON-RPC option is also a flag:

| Flag | Default | Description |
| --- | --- | --- |
| `--json-rpc.enable` | `false` | Enable JSON-RPC server |
| `--json-rpc.address` | `127.0.0.1:8545` | HTTP server address |
| `--json-rpc.ws-address` | `127.0.0.1:8546` | WebSocket server address |
| `--json-rpc.api` | `eth,net,web3` | Enabled API namespaces |
| `--json-rpc.enable-indexer` | `false` | Enable custom tx indexer |
| `--json-rpc.evm-timeout` | `5s` | Timeout for eth_call |
| `--json-rpc.gas-cap` | `25000000` | Gas cap for calls |
| `--json-rpc.txfee-cap` | `1.0` | Transaction fee cap |
| `--json-rpc.filter-cap` | `200` | Max active filters |
| `--json-rpc.block-range-cap` | `10000` | Max block range for logs |
| `--json-rpc.logs-cap` | `10000` | Max log results |
| `--json-rpc.batch-request-limit` | `1000` | Max batch requests |
| `--json-rpc.batch-response-max-size` | `25000000` | Max response size |
| `--json-rpc.http-timeout` | `30s` | HTTP read and write timeout |
| `--json-rpc.http-idle-timeout` | `2m0s` | HTTP idle timeout |
| `--json-rpc.max-open-connections` | `0` | Max connections |
| `--json-rpc.allow-unprotected-txs` | `false` | Allow non-EIP155 txs |
| `--json-rpc.ws-origins` | `127.0.0.1,localhost` | WebSocket allowed origins |

### Production recommendations

1. Put a reverse proxy (nginx, caddy) in front of JSON-RPC for TLS termination and rate limiting.
2. Set gas and fee caps to prevent resource exhaustion.
3. Enable the indexer (`--json-rpc.enable-indexer`) for faster queries.
4. Configure WebSocket origins if you accept external WS connections.
5. Monitor resource usage; JSON-RPC is resource-intensive under load.

## References

- [Binary releases](https://github.com/BitBadges/bitbadgeschain/releases)
- [Canonical genesis file](https://github.com/BitBadges/bitbadgeschain/blob/master/genesis-711316.json)
- [Block explorer](https://explorer.bitbadges.io/BitBadges%20Mainnet/staking)
- [Cosmos SDK: running a node](https://docs.cosmos.network/main/user/run-node/run-node)
- [Cosmos tutorials: path to production](https://tutorials.cosmos.network/tutorials/9-path-to-prod/1-overview.html)

Community guides that cover the same ground: [provewithryd](https://docs.provewithryd.xyz/mainnet/bitbadges/network-overview) and [nodestake](https://nodestake.org/bitbadges). Most active validators in `#validators` have their own write-ups.

## Related

- [Network](README.md)
- [EVM RPC endpoints](evm/rpc-endpoints.md)
- [WebSocket events](websocket-events.md)
