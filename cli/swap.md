---
description: "DEX and swap commands: estimate and execute swaps, browse pools and asset pairs, read prices and balances, and do coin amount math."
---

# bb swap, pools, pairs, price, assets, balances, amount

These groups read the DEX and cross-chain swap surface of the BitBadges API and do amount math locally. Only `swap execute` signs anything. The user walkthrough is in [Trade on the DEX](../guides/trade-on-the-dex.md).

## Example

```bash
bb swap estimate ubadge uusdc 1000000 --slippage 1
bb swap estimate ubadge uusdc 1000000 --execute --browser --track      # BitBadges-only route, sign in the wallet
bb pools by-assets BADGE USDC
bb pairs top-gainers --limit 10
bb price BADGE USDC
bb balances ics20 bb1abc...
bb amount to-raw 1.5 --denom USDC                                     # 1500000
```

All read verbs accept the [network flags](README.md#network-flags), `--condensed`, and `--output-file`.

{% hint style="warning" %}
Chain releases before the forwarder fix do not forward `amount`, `balances`, or `assets`. If they print unknown command, run them as `bitbadges-cli <verb>`.
{% endhint %}

## swap

Cross-chain swap helpers backed by Skip:Go through the BitBadges API's `/swap/*` routes.

| Verb | Purpose |
| --- | --- |
| `assets [--include-svm] [--include-cw20]` | Cross-chain assets (Skip:Go plus the BitBadges coins registry and verified metadata) |
| `chains [--include-svm] [--only-testnets]` | Chain registry entries for BitBadges-allowed chains |
| `balances <chains-to-addresses-json>` | Consolidated balances. Pass `{"bitbadges-1": ["bb1..."], "1": [{"address": "0x...", "denoms": ["ethereum-native"]}]}`, `-`, or `@file.json`. BitBadges chains include server-side wrappable amounts. |
| `estimate <from> <to> <amount>` | Route estimate |
| `execute [estimate]` | Sign and broadcast a BitBadges-only estimate |
| `track <tx-hash>` | Start cross-chain tracking of a broadcast transaction |
| `status <tx-hash>` | Current state of a tracked transaction |
| `activities [--bookmark <b>]` | Recent swap activity indexed by BitBadges |

### estimate

```bash
bb swap estimate ubadge uusdc 1000000
bb swap estimate ubadge uusdc 1000000 --dest-chain osmosis-1 --addresses '{"bitbadges-1":"bb1...","osmosis-1":"osmo1..."}'
bb swap estimate ubadge uusdc 1000000 --local-only
```

| Argument or flag | Description |
| --- | --- |
| `<from>`, `<to>` | Denoms, for example `ubadge`, `uusdc` |
| `<amount>` | Integer base units of the input (`1000000` is 1 BADGE at 6 decimals) |
| `--source-chain <id>`, `--dest-chain <id>` | Default `bitbadges-1` |
| `--addresses <json>` | Chain ID to address map; required for cross-chain routes |
| `--slippage <pct>` | Percent, 0 to 100 (default `1`) |
| `--local-only` | Restrict to BitBadges native pools; both chains must be `bitbadges-*` |
| `--execute` | Sign and broadcast when the route is BitBadges-only. Reuses the deploy flags (`--browser`). |
| `--force` | With `--execute --browser`: broadcast a route flagged for compliance or low liquidity |
| `--track` | With `--execute --browser`: call `swap track` after a successful broadcast |

### execute

```bash
bb swap estimate ubadge uusdc 1000000 | bb swap execute | bb deploy --browser --msg-stdin
bb swap estimate ubadge uusdc 1000000 --execute --browser
bb swap execute @estimate.json --force --track
```

`execute` takes the estimate JSON on stdin, as `@file.json`, or inline. Without a deploy flag it emits the signable message. With `--browser` it signs and broadcasts through the sign bridge; no EVM keyring is added to the CLI. Only a single native swap on the BitBadges chain is executed: no Skip:Go rerouting, no EVM transaction, no IBC leg, no WETH redirect. Cross-chain, EVM, and multi-hop estimates are returned but `execute` throws a not-implemented error; sign those in the wallet, broadcast the first transaction, then:

```bash
bb swap track <tx-hash> --chain-id <source-chain> [--token-in 1000000ubadge]
bb swap status <tx-hash> --chain-id <source-chain>
```

`bb swap pools` and `bb swap asset-pairs` are deprecated aliases for `bb pools` and `bb pairs`.

## pools

```bash
bb pools list [--bookmark <b>] [--sort-by liquidity] [--sort-order desc]
bb pools show <pool-id>
bb pools by-denom BADGE
bb pools by-assets BADGE USDC
bb pools batch 1 2 3
```

`--sort-by` accepts `liquidity`, `volume`, `dailyVolume`, `weeklyVolume`, `monthlyVolume`, `allTimeVolume`, `lastLiquidityUpdate`, `lastVolumeUpdate`. `show` returns assets, total liquidity, total shares, and volume buckets. `by-assets` is order-insensitive. Pool mechanics: [gamm](../token-standard/modules/gamm/README.md).

## pairs

```bash
bb pairs list [--bookmark <b>]
bb pairs search <query>
bb pairs by-denoms ubadge ibc/E1116484...
bb pairs top-gainers [--limit 10]
```

Analytics verbs, each with `--bookmark` and `--limit`: `top-gainers`, `top-losers`, `highest-volume` (24h), `weekly-top-gainers`, `weekly-top-losers`, `price-sorted`.

## price

```bash
bb price ubadge
bb price BADGE                         # symbol resolved through /assetPairs/search
bb price ubadge,ibc/E1116484...        # comma-separated batch
bb price BADGE USDC --local
```

USD prices for BitBadges-chain assets from the API's asset records. For assets not on the BitBadges chain use `bb swap assets`. `price` takes `--testnet`, `--local`, `--url`, and `--api-key` but not `--network` or `--mainnet`.

## assets

```bash
bb assets list [--sort-by volume24h] [--sort-direction desc] [--limit 50] [--tags <list>] [--bookmark <b>]
bb assets show BADGE                   # or a denom
bb assets browse                       # top gainers, losers, and volume, as on bitbadges.io
bb assets price ubadge BADGE
```

`--sort-by` accepts `price`, `volume24h`, `volume7d`, `percentageChange24h`, `percentageChange7d`. `--limit` is 1 to 100.

## balances

```bash
bb balances ics20 bb1abc... [--denom ubadge] [--page-key <key>] [--lcd <url>] [--testnet] [--local]
bb balances bitbadges bb1abc... [--collection 42] [--token 7] [--bookmark <b>] [--limit 25]
bb balances assets bb1abc... [--chain bitbadges-1] [--all-chains]
```

| Verb | Source | Returns |
| --- | --- | --- |
| `ics20` | Chain LCD bank module, no API key | Native and IBC fungible balances. `--lcd` targets any Cosmos chain. |
| `bitbadges` | BitBadges API | BitBadges-standard balances (multi-token-ID, time-ranged). `--token` needs `--collection`. |
| `assets` | BitBadges API swap routes | Server-merged Skip:Go plus verified BitBadges assets, including `badgeslp:` and `badges:` wrapped assets with numeric amounts. Use for swap UIs. |

## amount

Local math; no network except the two wrapper previews and `max-wrappable`.

```bash
bb amount to-raw 1.5 --denom USDC                    # 1500000
bb amount to-raw 1.123456789 --decimals 6 --round ROUND_UP
bb amount to-display 1500000 --denom USDC            # 1.5
bb amount to-display 1500000 --decimals 6 --precision 2
bb amount slippage --expected 1000000 --actual 995000        # 0.5
bb amount min-amount --expected 1000000 --slippage-pct 0.5   # 995000
bb amount min-amount --expected 1000000 --slippage-bps 50
bb amount max-wrappable 88 --address bb1abc... [--path-index 0] [--path-kind cosmos-coin]
bb amount wrap-preview 88 --coin-amount 10000000
bb amount unwrap-preview 88 --token-amount 10
```

| Verb | Flags | Description |
| --- | --- | --- |
| `to-raw <display>` | `--denom`, `--decimals`, `--round ROUND_DOWN\|ROUND_UP` | Display amount to base units. Decimals come from the coins registry via `--denom` or from `--decimals`. |
| `to-display <raw>` | `--denom`, `--decimals`, `--precision`, `--round` | Base units to a display string |
| `slippage` | `--expected`, `--actual`, `--precision` (default 6) | Percent difference; positive means you received less |
| `min-amount` | `--expected`, `--slippage-pct` or `--slippage-bps`, `--round` | Minimum acceptable amount for a tolerance |
| `max-wrappable <collection-id>` | `--address`, `--path-index`, `--path-kind cosmos-coin\|alias` | How many wrapped tokens the address could mint from its backing balance (wraps the SDK `getMaxWrappableAmount`) |
| `wrap-preview <collection-id>` | `--coin-amount`, `--path-index`, `--path-kind` | Backing coin to wrapped tokens through the wrapper path |
| `unwrap-preview <collection-id>` | `--token-amount`, `--path-index`, `--path-kind` | Wrapped tokens back to backing coin |

## Related

- [Trade on the DEX](../guides/trade-on-the-dex.md)
- [Swaps](../api/swaps.md)
- [Cosmos coin wrapper paths](../token-standard/ibc/cosmos-coin-wrapper-paths.md)
- [Account](account.md)
