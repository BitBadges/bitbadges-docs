---
description: "DEX and swap commands: estimate and execute swaps, browse pools and asset pairs, read prices and balances, and do coin amount math."
---

# bb swap, pools, pairs, price, assets, balances, amount

These groups read the DEX and cross-chain swap surface of the BitBadges API and do amount math locally. Only `swap execute` signs anything. The user walkthrough is in [Trade on the DEX](../guides/trade-on-the-dex.md).

## Example

```bash
USDC=ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8

bb swap estimate ubadge $USDC 1000000000 --slippage 1 --addresses '{"bitbadges-1":"bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"}'
bb swap estimate ubadge $USDC 1000000000 --addresses '{"bitbadges-1":"bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"}' --execute --browser --track      # BitBadges-only route, sign in the wallet
bb pools by-assets BADGE USDC
bb pairs top-gainers --limit 10
bb price BADGE USDC
bb balances ics20 bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
bb amount to-raw 1.5 --denom USDC                                     # 1500000
```

`bb price BADGE USDC` on mainnet:

```json
{
  "ok": true,
  "data": {
    "prices": [
      {
        "input": "BADGE",
        "denom": "ubadge",
        "symbol": "BADGE",
        "price": 0.000339440035304325,
        "percentageChange24h": 0.1543262877676005,
        "volume24h": 0,
        "lastUpdated": "1788749829910"
      },
      {
        "input": "USDC",
        "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8",
        "symbol": "USDC",
        "price": 0.963995116374474,
        "percentageChange24h": 0.08866507119397671,
        "volume24h": 0,
        "lastUpdated": "1788750132152"
      }
    ]
  },
  "warnings": [],
  "error": null
}
```

All read verbs accept the [network flags](README.md#network-flags), `--condensed`, and `--output-file`.

{% hint style="info" %}
Ask your agent. `lookup_token_info` and `query_balance` cover the lookups here; swaps themselves stay in the wallet. "What is 1 BADGE worth in USDC right now, and which pool has the most BADGE liquidity?" runs `bb price` and `bb pools` for you.
{% endhint %}

{% hint style="warning" %}
Chain releases before the forwarder fix do not forward `amount`, `balances`, or `assets`. If they print unknown command, run them as `bitbadges-cli amount`, `bitbadges-cli balances`, or `bitbadges-cli assets` with the same arguments.
{% endhint %}

## swap

Cross-chain swap helpers backed by Skip:Go through the BitBadges API's `/swap/*` routes.

| Verb | Purpose |
| --- | --- |
| `assets [--include-svm] [--include-cw20]` | Cross-chain assets (Skip:Go plus the BitBadges coins registry and verified metadata) |
| `chains [--include-svm] [--only-testnets]` | Chain registry entries for BitBadges-allowed chains |
| `balances <chains-to-addresses-json>` | Consolidated balances. Pass `{"bitbadges-1": ["bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"], "1": [{"address": "0x0bc63cfe31d5218eb414b142c799e20964a54a1a", "denoms": ["ethereum-native"]}]}`, `-`, or `@file.json`. BitBadges chains include server-side wrappable amounts. |
| `estimate <from> <to> <amount>` | Route estimate |
| `execute [estimate]` | Sign and broadcast a BitBadges-only estimate |
| `track <tx-hash>` | Start cross-chain tracking of a broadcast transaction |
| `status <tx-hash>` | Current state of a tracked transaction |
| `activities [--bookmark <b>]` | Recent swap activity indexed by BitBadges |

### estimate

```bash
USDC=ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8

bb swap estimate ubadge $USDC 1000000000 --addresses '{"bitbadges-1":"bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"}'
bb swap estimate ubadge $USDC 1000000000 --dest-chain osmosis-1 --addresses '{"bitbadges-1":"bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"}'
bb swap estimate ubadge $USDC 1000000000 --local-only --addresses '{"bitbadges-1":"bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"}'
```

The first command on mainnet (1 BADGE at 9 decimals into USDC; `skipGoMsgs` trimmed to its message):

```json
{
  "ok": true,
  "data": {
    "success": true,
    "estimate": {
      "tokenOutAmount": "326",
      "tokenInAmount": "1000000000",
      "lowLiquidityWarning": true,
      "doesSwap": true,
      "skipGoMsgs": [
        {
          "multi_chain_msg": {
            "chain_id": "bitbadges-1",
            "path": ["bitbadges-1"],
            "msg": "{\"sender\":\"bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d\",\"routes\":[{\"poolId\":\"7\",\"tokenOutDenom\":\"ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8\"}],\"tokenIn\":{\"denom\":\"ubadge\",\"amount\":\"1000000000\"},\"tokenOutMinAmount\":\"322\",\"affiliates\":[{\"address\":\"bb1akp5qudlhyp08m4k6826hn8mhqwmely6xvr7t2\",\"basisPointsFee\":\"10\"}]}",
            "msg_type_url": "/gamm.v1beta1.MsgSwapExactAmountIn"
          }
        }
      ],
      "complianceNotPassedWarning": false,
      "assetPath": [
        { "denom": "ubadge", "chainId": "bitbadges-1", "how": "genesis" },
        { "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8", "chainId": "bitbadges-1", "how": "swap" }
      ],
      "estimatedTime": 10,
      "autoRedirectedToWETH": false,
      "rerouted": false
    }
  },
  "warnings": [],
  "error": null
}
```

Without `--addresses` the API rejects the request: it needs a `bitbadges-1` address for the sender and generates the other chain addresses itself.

| Argument or flag | Description |
| --- | --- |
| `<from>`, `<to>` | Denoms, for example `ubadge` or the canonical USDC denom above |
| `<amount>` | Integer base units of the input (`1000000000` is 1 BADGE at 9 decimals) |
| `--source-chain <id>`, `--dest-chain <id>` | Default `bitbadges-1` |
| `--addresses <json>` | Chain ID to address map; the `bitbadges-1` entry is always required |
| `--slippage <pct>` | Percent, 0 to 100 (default `1`) |
| `--local-only` | Restrict to BitBadges native pools; both chains must be `bitbadges-*` |
| `--execute` | Sign and broadcast when the route is BitBadges-only. Reuses the deploy flags (`--browser`). |
| `--force` | With `--execute --browser`: broadcast a route flagged for compliance or low liquidity |
| `--track` | With `--execute --browser`: call `swap track` after a successful broadcast |

### execute

```bash
bb swap estimate ubadge $USDC 1000000000 --addresses '{"bitbadges-1":"bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"}' | bb swap execute | bb deploy --browser --msg-stdin
bb swap estimate ubadge $USDC 1000000000 --addresses '{"bitbadges-1":"bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"}' --execute --browser
bb swap execute @estimate.json --force --track
```

`execute` takes the estimate JSON on stdin, as `@file.json`, or inline. Without a deploy flag it emits the signable message. With `--browser` it signs and broadcasts through the sign bridge; no EVM keyring is added to the CLI. Only a single native swap on the BitBadges chain is executed: no Skip:Go rerouting, no EVM transaction, no IBC leg, no WETH redirect. Cross-chain, EVM, and multi-hop estimates are returned but `execute` throws a not-implemented error; sign those in the wallet, broadcast the first transaction, then:

```bash
bb swap track 903D4A6E205AD77D334933E3C9BB455012D8A334AA2D98DFD301C3F7E8AB92C6 --chain-id bitbadges-1 --token-in 1000000000ubadge
bb swap status 903D4A6E205AD77D334933E3C9BB455012D8A334AA2D98DFD301C3F7E8AB92C6 --chain-id bitbadges-1
```

`bb swap pools` and `bb swap asset-pairs` are deprecated aliases for `bb pools` and `bb pairs`.

## pools

```bash
bb pools list --sort-by liquidity --sort-order desc
bb pools show 2
bb pools by-denom BADGE
bb pools by-assets BADGE USDC
bb pools batch 1 2 3
```

`bb pools by-assets BADGE USDC` on mainnet (volume buckets trimmed):

```json
{
  "ok": true,
  "data": {
    "pools": [
      {
        "poolId": "2",
        "collectionId": "",
        "address": "bb18ddcsq4jzf33x9f3vplv9779uvjq6ypx3en3wt9sd93njmas7yksnhhucq",
        "allAssetDenoms": ["ubadge", "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349"],
        "asset1": "ubadge",
        "asset2": "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349",
        "volume": {
          "daily": [
            { "amount": "3296000000000", "denom": "ubadge" },
            { "amount": "5000000", "denom": "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349" }
          ]
        }
      }
    ]
  },
  "warnings": [],
  "error": null
}
```

`--sort-by` accepts `liquidity`, `volume`, `dailyVolume`, `weeklyVolume`, `monthlyVolume`, `allTimeVolume`, `lastLiquidityUpdate`, `lastVolumeUpdate`. `show` returns assets, total liquidity, total shares, and volume buckets. `by-assets` is order-insensitive. Pool mechanics: [gamm](../chain/modules/gamm/README.md).

## pairs

```bash
bb pairs list
bb pairs search badge
bb pairs by-denoms ubadge ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8
bb pairs top-gainers --limit 10
```

Analytics verbs, each with `--bookmark` and `--limit`: `top-gainers`, `top-losers`, `highest-volume` (24h), `weekly-top-gainers`, `weekly-top-losers`, `price-sorted`. Each record carries `asset`, `symbol`, `price`, `lastUpdated`, and `totalLiquidity` per denom.

## price

```bash
bb price ubadge
bb price BADGE                         # symbol resolved through /assetPairs/search
bb price ubadge,ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8        # comma-separated batch
bb price BADGE USDC --local
```

USD prices for BitBadges-chain assets from the API's asset records. For assets not on the BitBadges chain use `bb swap assets`. `price` takes `--testnet`, `--local`, `--url`, and `--api-key` but not `--network` or `--mainnet`.

## assets

```bash
bb assets list --sort-by volume24h --sort-direction desc --limit 50
bb assets show BADGE                   # or a denom
bb assets browse                       # top gainers, losers, and volume, as on bitbadges.io
bb assets price ubadge BADGE
```

`--sort-by` accepts `price`, `volume24h`, `volume7d`, `percentageChange24h`, `percentageChange7d`. `--limit` is 1 to 100.

## balances

```bash
bb balances ics20 bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --denom ubadge
bb balances bitbadges bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --collection 1 --token 7 --limit 25
bb balances assets bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --chain bitbadges-1
```

`bb balances ics20` for an address that holds nothing (mainnet output):

```json
{ "ok": true, "data": { "balances": [], "pagination": { "next_key": null, "total": "0" } }, "warnings": [], "error": null }
```

| Verb | Source | Returns |
| --- | --- | --- |
| `ics20` | Chain LCD bank module, no API key | Native and IBC fungible balances. `--lcd` targets any Cosmos chain; `--page-key` pages. |
| `bitbadges` | BitBadges API | BitBadges-standard balances (multi-token-ID, time-ranged). `--token` needs `--collection`; `--bookmark` pages. |
| `assets` | BitBadges API swap routes | Server-merged Skip:Go plus verified BitBadges assets, including `badgeslp:` and `badges:` wrapped assets with numeric amounts. `--all-chains` widens the set. Use for swap UIs. |

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
bb amount max-wrappable 88 --address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --path-index 0 --path-kind cosmos-coin
bb amount wrap-preview 88 --coin-amount 10000000
bb amount unwrap-preview 88 --token-amount 10
```

`to-raw`, `slippage`, and `min-amount` print:

```json
{ "ok": true, "data": { "denom": "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349", "decimals": 6, "symbol": "USDC", "display": "1.5", "raw": "1500000" }, "warnings": [], "error": null }
```

```json
{ "ok": true, "data": { "expected": "1000000", "actual": "995000", "slippagePercent": 0.5 }, "warnings": [], "error": null }
```

```json
{ "ok": true, "data": { "expected": "1000000", "slippageTolerance": 0.005, "minAmount": "995000" }, "warnings": [], "error": null }
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
