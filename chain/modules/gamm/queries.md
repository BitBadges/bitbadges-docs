---
description: "All 16 x/gamm queries with LCD paths and live mainnet examples: pools, liquidity, shares, spot price, join and exit calculators, estimates, params."
---

# x/gamm queries

The gamm query service exposes 16 methods. Most are reachable on the LCD under `/osmosis/gamm/v1beta1/` (the paths keep the Osmosis prefix). Several are marked deprecated in favor of [x/poolmanager](../pool-manager.md) equivalents but still work. Examples below run against mainnet.

```bash
curl https://lcd.bitbadges.io/osmosis/gamm/v1beta1/pools/1/total_pool_liquidity
```

```json
{"liquidity":[{"denom":"badgeslp:64:utoken","amount":"800"},{"denom":"ubadge","amount":"12523362993"}]}
```

{% hint style="info" %}
Ask your agent: "Show me pool 1 on mainnet: its assets, total shares, and the spot price of badgeslp:64:utoken in BADGE." The `bb pools show 1` and `bb price` commands read the queries on this page.
{% endhint %}

## All queries

| Query | LCD path | Status | Returns |
| --- | --- | --- | --- |
| `Pools` | `GET /osmosis/gamm/v1beta1/pools` | current | Paginated list of pools (`Any`, `PoolI`) |
| `NumPools` | `GET /osmosis/gamm/v1beta1/num_pools` | deprecated, use poolmanager | Pool count |
| `TotalLiquidity` | `GET /osmosis/gamm/v1beta1/total_liquidity` | current | Sum of liquidity across all pools |
| `PoolsWithFilter` | `GET /osmosis/gamm/v1beta1/filtered_pools` | current | Pools matching `min_liquidity` and `pool_type` |
| `Pool` | `GET /osmosis/gamm/v1beta1/pools/{pool_id}` | deprecated, use poolmanager | One pool |
| `PoolType` | `GET /osmosis/gamm/v1beta1/pool_type/{pool_id}` | current | `"Balancer"` or `"Stableswap"` |
| `CalcJoinPoolNoSwapShares` | gRPC only | current | Shares and tokens for a proportional join |
| `CalcJoinPoolShares` | `GET /osmosis/gamm/v1beta1/pools/{pool_id}/join_swap_exact_in` | current | Shares out and tokens out for a join |
| `CalcExitPoolCoinsFromShares` | `GET /osmosis/gamm/v1beta1/pools/{pool_id}/exit_swap_share_amount_in` | current | Coins returned for a share amount |
| `PoolParams` | `GET /osmosis/gamm/v1beta1/pools/{pool_id}/params` | current | Swap fee and exit fee |
| `TotalPoolLiquidity` | `GET /osmosis/gamm/v1beta1/pools/{pool_id}/total_pool_liquidity` | deprecated, use poolmanager | Reserves of one pool |
| `TotalShares` | `GET /osmosis/gamm/v1beta1/pools/{pool_id}/total_shares` | current | LP share supply |
| `SpotPrice` | `GET /osmosis/gamm/v1beta1/pools/{pool_id}/prices` | deprecated, use v2 or poolmanager | Price of base in quote |
| `EstimateSwapExactAmountIn` | `GET /osmosis/gamm/v1beta1/{pool_id}/estimate/swap_exact_amount_in` | deprecated, use poolmanager | Output for an exact input |
| `EstimateSwapExactAmountOut` | `GET /osmosis/gamm/v1beta1/{pool_id}/estimate/swap_exact_amount_out` | deprecated, use poolmanager | Input for an exact output |
| `Params` | `GET /osmosis/gamm/v1beta1/params` | current | Module params (currently empty) |

A v2 service adds `SpotPrice` at `GET /osmosis/gamm/v2/pools/{pool_id}/prices` with the same request fields.

{% hint style="info" %}
`CalcJoinPoolShares`, `CalcExitPoolCoinsFromShares`, and the two estimate queries take `Coin` or `Int` request fields. The LCD gateway cannot encode those as URL query parameters and returns `unsupported field type`. Call them over gRPC, or use the poolmanager estimate endpoints, which accept plain strings.
{% endhint %}

## Pools

```bash
curl "https://lcd.bitbadges.io/osmosis/gamm/v1beta1/pools?pagination.limit=1"
```

```json
{
  "pools": [
    {
      "@type": "/gamm.poolmodels.balancer.Pool",
      "address": "bb19e2mf7cywkv7zaug6nk5f87d07fxrdgrladvymh2gwv5crvm3vnsy5m66z",
      "id": "1",
      "pool_params": { "swap_fee": "0.003000000000000000", "exit_fee": "0.000000000000000000" },
      "total_shares": { "denom": "gamm/pool/1", "amount": "100000000000000000000" },
      "pool_assets": [
        { "token": { "denom": "badgeslp:64:utoken", "amount": "800" }, "weight": "1073741824" },
        { "token": { "denom": "ubadge", "amount": "12523362993" }, "weight": "1073741824" }
      ],
      "total_weight": "2147483648"
    }
  ],
  "pagination": { "next_key": "AAAAAAAAAAI=", "total": "0" }
}
```

Request: `pagination` (`PageRequest`). Response: `pools` (`Any[]`), `pagination`.

## NumPools

```bash
curl https://lcd.bitbadges.io/osmosis/gamm/v1beta1/num_pools
```

```json
{"num_pools":"7"}
```

Deprecated. Prefer `GET /osmosis/poolmanager/v1beta1/num_pools`.

## TotalLiquidity

```bash
curl https://lcd.bitbadges.io/osmosis/gamm/v1beta1/total_liquidity
```

```json
{"liquidity":[{"denom":"badges:49:chaosnet","amount":"761389759510602"},{"denom":"badgeslp:64:utoken","amount":"800"},{"denom":"badgeslp:73:cubadge","amount":"6991373129902"},{"denom":"ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701","amount":"1169539"},{"denom":"ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8","amount":"4655"},{"denom":"ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518","amount":"31960810"},{"denom":"ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349","amount":"14765962"},{"denom":"ubadge","amount":"63007504431337"}]}
```

No request fields. Response: `liquidity` (`Coin[]`) summed across all pools.

## PoolsWithFilter

```bash
curl "https://lcd.bitbadges.io/osmosis/gamm/v1beta1/filtered_pools?min_liquidity=1ubadge&pool_type=Balancer"
```

| Request field | Type | Description |
| --- | --- | --- |
| `min_liquidity` | string | Coins in one comma-separated string, for example `10uatom,100uosmo` |
| `pool_type` | string | `Balancer` or `Stableswap` |
| `pagination` | `PageRequest` | Optional |

Response: `pools` (`Any[]`), `pagination`.

## Pool

```bash
curl https://lcd.bitbadges.io/osmosis/gamm/v1beta1/pools/1
```

Response: `pool` (`Any`, a `/gamm.poolmodels.balancer.Pool` or stableswap pool). Deprecated; prefer `GET /osmosis/poolmanager/v1beta1/pools/{pool_id}`.

## PoolType

```bash
curl https://lcd.bitbadges.io/osmosis/gamm/v1beta1/pool_type/1
```

```json
{"pool_type":"Balancer"}
```

Errors if the pool cannot be type-cast.

## CalcJoinPoolNoSwapShares

gRPC only: `gamm.v1beta1.Query/CalcJoinPoolNoSwapShares`. Simulates a proportional join.

| Request field | Type | Description |
| --- | --- | --- |
| `pool_id` | uint64 | Pool |
| `tokens_in` | `Coin[]` | Assets you intend to deposit |

Response: `tokens_out` (`Coin[]`, the deposit actually consumed) and `shares_out` (Int).

```bash
grpcurl -d '{"pool_id":"1","tokens_in":[{"denom":"ubadge","amount":"1000000"},{"denom":"badgeslp:64:utoken","amount":"1"}]}' \
  grpc.bitbadges.io:443 gamm.v1beta1.Query/CalcJoinPoolNoSwapShares
```

## CalcJoinPoolShares

Path: `GET /osmosis/gamm/v1beta1/pools/{pool_id}/join_swap_exact_in`. Request: `pool_id`, `tokens_in` (`Coin[]`). Response: `share_out_amount` (Int), `tokens_out` (`Coin[]`). Use gRPC; see the hint above.

## CalcExitPoolCoinsFromShares

Path: `GET /osmosis/gamm/v1beta1/pools/{pool_id}/exit_swap_share_amount_in`. Request: `pool_id`, `share_in_amount` (Int). Response: `tokens_out` (`Coin[]`). Use gRPC; see the hint above.

## PoolParams

```bash
curl https://lcd.bitbadges.io/osmosis/gamm/v1beta1/pools/1/params
```

```json
{"params":{"@type":"/gamm.poolmodels.balancer.PoolParams","swap_fee":"0.003000000000000000","exit_fee":"0.000000000000000000"}}
```

## TotalPoolLiquidity

```bash
curl https://lcd.bitbadges.io/osmosis/gamm/v1beta1/pools/1/total_pool_liquidity
```

```json
{"liquidity":[{"denom":"badgeslp:64:utoken","amount":"800"},{"denom":"ubadge","amount":"12523362993"}]}
```

Deprecated; prefer `GET /osmosis/poolmanager/v1beta1/pools/{pool_id}/total_pool_liquidity`.

## TotalShares

```bash
curl https://lcd.bitbadges.io/osmosis/gamm/v1beta1/pools/1/total_shares
```

```json
{"total_shares":{"denom":"gamm/pool/1","amount":"100000000000000000000"}}
```

## SpotPrice

```bash
curl "https://lcd.bitbadges.io/osmosis/gamm/v1beta1/pools/1/prices?base_asset_denom=badgeslp:64:utoken&quote_asset_denom=ubadge"
```

```json
{"spot_price":"0.000000063880605000"}
```

| Request field | Type | Description |
| --- | --- | --- |
| `pool_id` | uint64 | Pool |
| `base_asset_denom` | string | Denom being priced |
| `quote_asset_denom` | string | Denom the price is expressed in |

The v1beta1 response is expressed as quote per base with the pool's raw weights. The v2 endpoint returns the inverse orientation for the same pair:

```bash
curl "https://lcd.bitbadges.io/osmosis/gamm/v2/pools/1/prices?base_asset_denom=badgeslp:64:utoken&quote_asset_denom=ubadge"
```

```json
{"spot_price":"15654203.741250000000000000"}
```

Check which orientation you need against a known pool before relying on either. For routing, prefer `GET /osmosis/poolmanager/v1beta1/pools/{pool_id}/prices`.

## EstimateSwapExactAmountIn

Path: `GET /osmosis/gamm/v1beta1/{pool_id}/estimate/swap_exact_amount_in`. Request: `sender`, `pool_id`, `token_in` (string such as `1000ubadge`), `routes` (`SwapAmountInRoute[]`). Response: `token_out_amount` (Int). Deprecated; the poolmanager equivalent takes plain strings:

```bash
curl "https://lcd.bitbadges.io/osmosis/poolmanager/v1beta1/1/estimate/single_pool_swap_exact_amount_in?pool_id=1&token_in=1000000000ubadge&token_out_denom=badgeslp:64:utoken"
```

## EstimateSwapExactAmountOut

Path: `GET /osmosis/gamm/v1beta1/{pool_id}/estimate/swap_exact_amount_out`. Request: `sender`, `pool_id`, `routes` (`SwapAmountOutRoute[]`), `token_out` (string). Response: `token_in_amount` (Int). Deprecated; use the poolmanager `estimate/single_pool_swap_exact_amount_out` endpoint.

## Params

```bash
curl https://lcd.bitbadges.io/osmosis/gamm/v1beta1/params
```

```json
{"params":{}}
```

## Related

- [x/gamm messages](messages.md)
- [x/poolmanager](../pool-manager.md)
- [Swaps in the API](../../../api/swaps.md)
- [Trade on the DEX](../../../guides/trade-on-the-dex.md)
