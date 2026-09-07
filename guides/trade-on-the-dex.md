---
description: "Find pools and prices, check balances, estimate and execute a swap, and add or remove liquidity on the BitBadges DEX from the bb CLI, TypeScript, or raw messages."
---

# Trade on the DEX

At the end you have swapped one asset for another on the BitBadges chain and know how to join or exit a liquidity pool. The DEX is the `x/gamm` module (a generalized automated market maker with balancer pools); the messages, queries, and fee rules are in [x/gamm](../chain/modules/gamm/README.md). Routing can also cross IBC chains such as Osmosis through Skip:Go; the estimate endpoint is documented in [Swaps](../api/swaps.md).

Prerequisites:

- The `bb` CLI with a BitBadges API key configured (`bb settings`), or the `bitbadges` npm package.
- A wallet with `ubadge` for fees. `--browser` signs through the BitBadges `/sign` page with Keplr or MetaMask.

Amounts are raw base units everywhere: `1000000` is 1 BADGE at 6 decimals.

## 1. Find Pools and Prices

```bash
# Every pool, sorted by liquidity (also: volume, dailyVolume, weeklyVolume,
# monthlyVolume, allTimeVolume, lastLiquidityUpdate, lastVolumeUpdate)
bb pools list --sort-by liquidity --sort-order desc

# One pool: assets, total liquidity, total shares, volume buckets
bb pools show 1

# Pools that contain an asset, by symbol or canonical denom
bb pools by-denom BADGE
bb pools by-denom ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8

# Pools for a pair, order-insensitive
bb pools by-assets ubadge USDC

# Several pools at once
bb pools batch 1 2 3
```

Prices come from the BitBadges API's asset records. Symbols resolve through asset-pair search:

```bash
bb price ubadge                     # native BADGE
bb price BADGE                      # same, symbol resolved
bb price ubadge,ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8     # batch via CSV
bb price BADGE USDC
```

Asset-pair analytics and the asset browser:

```bash
bb pairs list
bb pairs search USDC
bb pairs by-denoms ubadge ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8
bb pairs top-gainers          # last 24h
bb pairs top-losers
bb pairs highest-volume       # sorted by 24h volume
bb pairs weekly-top-gainers   # last 7d
bb pairs weekly-top-losers
bb pairs price-sorted

bb assets list --sort-by volume24h --limit 20
bb assets show BADGE
bb assets browse              # top gainers, losers, and highest volume, as on bitbadges.io
bb assets price ubadge BADGE  # same lookup as bb price
```

`bb pairs` and `bb pools` were `bb swap asset-pairs` and `bb swap pools` in CLI v1; the old spellings are deprecated aliases kept for one release. Cross-chain assets and chains come from Skip:Go:

```bash
bb swap assets --include-svm --include-cw20
bb swap chains
```

In TypeScript the same data is `api.getAllPools`, `getPoolInfoById`, `getPoolInfosByDenom`, `getPoolInfosByAssets`, and `getAssetPairs`; see [Swaps](../api/swaps.md).

{% hint style="info" %}
**Ask your agent.** With the MCP builder tools installed, paste one of these:

- "Using the liquidity-pools skill, create a balancer pool of BADGE and the wrapped token of collection 1 with a 0.3% swap fee, and give me the review link."
- "Look up the current price of BADGE in USDC and the pools that hold both."
{% endhint %}

## 2. Check Balances

Three asset-scoped views:

```bash
# Cosmos native and IBC fungibles, straight from the chain LCD (no API key)
bb balances ics20 bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
bb balances ics20 bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --denom ubadge

# BitBadges-standard tokens (multi token ID, time-ranged shape)
bb balances bitbadges bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --collection 1

# Swap-consolidated view: Skip:Go plus verified BitBadges assets, including
# wrapped assets (badgeslp:, badges:) with numeric amounts. Use this for swap UIs.
bb balances assets bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
bb balances assets 0x0bc63cfe31d5218eb414b142c799e20964a54a1a --chain 1
bb balances assets bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --all-chains
```

`bb balances ics20` accepts `--lcd <url>` for any Cosmos chain and `--page-key` for pagination. A 0x address passed to `bb balances bitbadges` is converted to `bb1` with a notice on stderr.

For several chains in one call, pass a chain-to-addresses map. Responses for BitBadges chains include server-side wrappable amounts for verified badge denoms:

```bash
bb swap balances '{"bitbadges-1": ["bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"], "1": [{"address": "0x0bc63cfe31d5218eb414b142c799e20964a54a1a", "denoms": ["ethereum-native"]}]}'
bb swap balances @chains.json
```

## 3. Convert Amounts and Set Slippage

Decimals come from the BitBadges coins registry when you pass `--denom`; pass `--decimals` to override.

```bash
bb amount to-raw 1.5 --denom BADGE              # 1500000
bb amount to-raw 1.5 --decimals 6 --round ROUND_UP
bb amount to-display 1500000 --denom ubadge     # 1.5
bb amount to-display 1500000 --denom ubadge --precision 2

# Minimum acceptable output for a 0.5% tolerance
bb amount min-amount --expected 5000000 --slippage-pct 0.5
bb amount min-amount --expected 5000000 --slippage-bps 50

# Realized slippage after the fact (positive = received less than expected)
bb amount slippage --expected 5000000 --actual 4975000
```

`bb amount max-wrappable`, `wrap-preview`, and `unwrap-preview` convert through a collection's wrapper path; see [Wrap to an IBC Denom](wrap-to-an-ibc-denom.md).

## 4. Estimate the Swap

```bash
# 1 BADGE -> USDC on the BitBadges chain, 1% slippage (default)
bb swap estimate ubadge uusdc 1000000

# Native pools only, no Skip:Go rerouting (both chains must be bitbadges-*)
bb swap estimate ubadge uusdc 1000000 --local-only --slippage 0.5

# Cross-chain: addresses are required for every chain on the route
bb swap estimate uatom ubadge 1000000 --source-chain cosmoshub-4 \
  --addresses '{"bitbadges-1":"bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d","cosmoshub-4":"cosmos1p0rrel3365scadq5k9pv0x0zp9j22js6wwxdnu"}'
```

```ts
import { BigIntify, BitBadgesAPI } from 'bitbadges';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });

const response = await api.estimateSwap({
  tokenIn: 'amount:1000000,denom:ubadge',
  tokenInChainId: 'bitbadges-1',
  tokenOutDenom: 'uusdc',
  tokenOutChainId: 'bitbadges-1',
  chainIdsToAddresses: { 'bitbadges-1': 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d' },
  slippageTolerancePercent: 1
});

console.log(response.estimate.tokenOutAmount);
console.log(response.estimate.skipGoMsgs);
// Use the msgs to get user signatures and execute the swap
```

Read these fields before you execute:

| Field | Meaning |
| --- | --- |
| `tokenOutAmount`, `tokenInAmount` | Estimated output and the input you passed |
| `skipGoMsgs` | Messages to sign: a multi-chain message for Cosmos chains or an EVM transaction for EVM chains |
| `assetPath` | Each hop: `denom`, `chainId`, and `how` (`genesis`, `swap`, `transfer`) |
| `doesSwap` | `true` if a swap happens; `false` if the route is only a transfer |
| `lowLiquidityWarning` | Pool liquidity is low; execution may differ from the estimate |
| `complianceNotPassedWarning`, `complianceErrorMessage` | Compliance checks failed; the BitBadges pool swap is likely to fail |
| `estimatedTime` | Seconds to completion, when available |
| `fallbackAsset` | Asset delivered if the swap is not possible |

`chainIdsToAddresses` accepts `bitbadges-1` (bech32 `bb` address) and `1` (EVM 0x address); other chain addresses are derived from these. `chainIdsToAffiliates` adds fee recipients per chain in basis points. `forcefulRecheckCompliance` bypasses the 5 minute compliance cache. The full payload and response types are in [Swaps](../api/swaps.md).

Skip:Go compatibility is partial. `skipGoMsgs` follow the Skip API message format, but Skip's own API, engines, explorers, and client may not support BitBadges routing; only Cosmos swaps are recommended (no ETH or SOL routes yet).

## 5. Execute the Swap

A BitBadges-only route (one native swap, no Skip:Go rerouting, no EVM transaction, no IBC-transfer leg, no WETH redirect) signs and broadcasts from the CLI:

```bash
# Sign + broadcast in one step through the /sign page
bb swap estimate ubadge uusdc 1000000 --execute --browser

# Also seed the swap activity row after broadcast
bb swap estimate ubadge uusdc 1000000 --execute --browser --track

# Or emit the signable message and pipe it into bb deploy
bb swap estimate ubadge uusdc 1000000 | bb swap execute | bb deploy --browser --msg-stdin

# From a saved estimate
bb swap execute @estimate.json --browser
```

- Without a deploy flag, `bb swap execute` prints the signable message to stdout so scripting keeps working.
- `--force` broadcasts a route flagged for compliance or low liquidity; otherwise it is refused.
- Cross-chain, EVM, and multi-hop estimates are returned but not executed. The execute path throws a not-implemented error with no partial execution. Sign the estimate in your wallet through the `/sign` page, broadcast the first transaction, then track it:

```bash
bb swap track E5B4C3A6E5B1F3B9F0F4C1F2B7A6D5C4E3F2A1B0C9D8E7F6A5B4C3D2E1F0A9B8 --chain-id bitbadges-1 --token-in 1000000ubadge
bb swap status E5B4C3A6E5B1F3B9F0F4C1F2B7A6D5C4E3F2A1B0C9D8E7F6A5B4C3D2E1F0A9B8 --chain-id bitbadges-1
bb swap activities
```

To submit the on-chain message yourself, build a `MsgSwapExactAmountIn` and deploy it. `token_out_min_amount` is the slippage guard from step 3; `routes` lists one pool per hop; `affiliates` take basis points of the output (10 = 0.1%).

```bash
bb deploy '{
  "typeUrl": "/gamm.v1beta1.MsgSwapExactAmountIn",
  "value": {
    "sender": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "routes": [{ "poolId": "1", "tokenOutDenom": "uusdc" }],
    "tokenIn": { "denom": "ubadge", "amount": "1000000" },
    "tokenOutMinAmount": "4975000",
    "affiliates": []
  }
}' --browser
```

Proto and JSON field names for every gamm message are in [x/gamm Messages](../chain/modules/gamm/messages.md). Signing options (keyring, browser, external signer via `bb gen-tx-payload`) are in [Deploy commands](../cli/deploy.md).

## 6. Provide Liquidity

Join a pool with tokens in the pool's current proportions. You receive LP shares, and `token_in_maxs` caps what can be taken from you:

```bash
bb deploy '{
  "typeUrl": "/gamm.v1beta1.MsgJoinPool",
  "value": {
    "sender": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "poolId": "1",
    "shareOutAmount": "1000000",
    "tokenInMaxs": [
      { "denom": "ubadge", "amount": "1000000" },
      { "denom": "uusdc", "amount": "5000000" }
    ]
  }
}' --browser
```

Exit by burning shares. `token_out_mins` is the floor for each asset returned; the pool decides the proportions, and some pools charge an exit fee:

```bash
bb deploy '{
  "typeUrl": "/gamm.v1beta1.MsgExitPool",
  "value": {
    "sender": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "poolId": "1",
    "shareInAmount": "100000",
    "tokenOutMins": [
      { "denom": "ubadge", "amount": "90000" },
      { "denom": "uusdc", "amount": "450000" }
    ]
  }
}' --browser
```

Create a balancer pool with initial liquidity, weights, and fees. The pool ID is in the transaction response. Wrapped BitBadges tokens trade under `badgeslp:<collectionId>:<denom>` denoms:

```bash
bb deploy '{
  "typeUrl": "/gamm.poolmodels.balancer.MsgCreateBalancerPool",
  "value": {
    "sender": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "poolParams": { "swapFee": "0.003", "exitFee": "0.000" },
    "poolAssets": [
      { "token": { "denom": "ubadge", "amount": "1000000" }, "weight": "50" },
      { "token": { "denom": "badgeslp:1:utoken", "amount": "5000000" }, "weight": "50" }
    ]
  }
}' --browser
```

Check the position afterwards with `bb pools show <pool-id>` and `bb balances ics20 <address>` (LP shares are a bank denom).

## Next Steps

- [Swaps](../api/swaps.md) for the estimate payload and response reference.
- [Swap commands](../cli/swap.md) for every `bb swap`, `pools`, `pairs`, `price`, `assets`, `balances`, and `amount` flag.
- [Wrap to an IBC Denom](wrap-to-an-ibc-denom.md) to make a collection's tokens tradable in a pool.
