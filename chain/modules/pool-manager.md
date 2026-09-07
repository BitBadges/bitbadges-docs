---
description: "x/poolmanager: pool ID registry, cross-pool swap routing, split routes, taker fees, and the estimate endpoints that replace the deprecated gamm ones."
---

# x/poolmanager

`x/poolmanager` sits above [x/gamm](gamm/README.md). It owns the pool ID counter, maps each pool ID to the module that implements it, routes swaps across pools, and charges the taker fee. Most integrators only need its query endpoints for estimates and prices; traders can send its swap messages instead of the gamm ones.

```bash
curl https://lcd.bitbadges.io/osmosis/poolmanager/v1beta1/num_pools
```

```json
{"num_pools":"7"}
```

## Params

```bash
curl https://lcd.bitbadges.io/osmosis/poolmanager/v1beta1/Params
```

```json
{
  "params": {
    "taker_fee_params": {
      "default_taker_fee": "0.001000000000000000",
      "osmo_taker_fee_distribution": { "staking_rewards": "1.000000000000000000", "community_pool": "0.000000000000000000" },
      "non_osmo_taker_fee_distribution": { "staking_rewards": "0.670000000000000000", "community_pool": "0.330000000000000000" },
      "admin_addresses": [],
      "community_pool_denom_to_swap_non_whitelisted_assets_to": "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
      "reduced_fee_whitelist": [],
      "community_pool_denom_whitelist": []
    }
  }
}
```

The taker fee (0.1% by default on mainnet) is charged on top of each pool's own swap fee and split between staking rewards and the community pool. Field names keep Osmosis spelling (`osmo_taker_fee_distribution` applies to the native BADGE denom).

## Messages

All signed by `sender`. Type URLs are `/poolmanager.v1beta1.Msg<Name>`.

| Message | Purpose |
| --- | --- |
| `MsgSwapExactAmountIn` | Same fields as the gamm message (`routes`, `token_in`, `token_out_min_amount`) but without `affiliates`; routes across any pool type |
| `MsgSwapExactAmountOut` | Same fields as the gamm message (`routes`, `token_in_max_amount`, `token_out`) |
| `MsgSplitRouteSwapExactAmountIn` | Splits one input across several routes: `routes[]` of `{ pools[], token_in_amount }`, plus `token_in_denom`, `token_out_min_amount` |
| `MsgSplitRouteSwapExactAmountOut` | Split-route variant for an exact output: `routes[]` of `{ pools[], token_out_amount }`, plus `token_out_denom`, `token_in_max_amount` |
| `MsgSetDenomPairTakerFee` | Sets a custom taker fee for denom pairs; sender must be in `admin_addresses` |
| `MsgSetTakerFeeShareAgreementForDenom` | Sets a `skim_percent` and `skim_address` for a denom's taker fee share; admin only |

```json
{
  "@type": "/poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn",
  "sender": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "routes": [
    { "pools": [{ "pool_id": "1", "token_out_denom": "badgeslp:64:utoken" }], "token_in_amount": "600000000" },
    { "pools": [{ "pool_id": "4", "token_out_denom": "badgeslp:64:utoken" }], "token_in_amount": "400000000" }
  ],
  "token_in_denom": "ubadge",
  "token_out_min_amount": "10"
}
```

Swaps that touch a native token still run through `MsgTransferTokens` and the collection's approvals, exactly as in x/gamm.

{% hint style="info" %}
Ask your agent: "Estimate how much badgeslp:64:utoken I get for 1 BADGE and split the route across pools 1 and 4 if that is cheaper." The `bb swap estimate ubadge badgeslp:64:utoken 1000000000` command uses the poolmanager estimate endpoints below.
{% endhint %}

## Queries

| Query | LCD path |
| --- | --- |
| `Params` | `GET /osmosis/poolmanager/v1beta1/Params` |
| `NumPools` | `GET /osmosis/poolmanager/v1beta1/num_pools` |
| `Pool` | `GET /osmosis/poolmanager/v1beta1/pools/{pool_id}` |
| `AllPools` | `GET /osmosis/poolmanager/v1beta1/all-pools` |
| `ListPoolsByDenom` | `GET /osmosis/poolmanager/v1beta1/list-pools-by-denom?denom=...` |
| `SpotPrice` | `GET /osmosis/poolmanager/pools/{pool_id}/prices?base_asset_denom=...&quote_asset_denom=...` |
| `TotalPoolLiquidity` | `GET /osmosis/poolmanager/v1beta1/pools/{pool_id}/total_pool_liquidity` |
| `TotalLiquidity` | `GET /osmosis/poolmanager/v1beta1/total_liquidity` |
| `TotalVolumeForPool` | `GET /osmosis/poolmanager/v1beta1/pools/{pool_id}/total_volume` |
| `EstimateSwapExactAmountIn` | `GET /osmosis/poolmanager/v1beta1/{pool_id}/estimate/swap_exact_amount_in?token_in=...&routes=...` |
| `EstimateSinglePoolSwapExactAmountIn` | `GET /osmosis/poolmanager/v1beta1/{pool_id}/estimate/single_pool_swap_exact_amount_in?pool_id=...&token_in=...&token_out_denom=...` |
| `EstimateSwapExactAmountOut` | `GET /osmosis/poolmanager/v1beta1/{pool_id}/estimate/swap_exact_amount_out?token_out=...&routes=...` |
| `EstimateSinglePoolSwapExactAmountOut` | `GET /osmosis/poolmanager/v1beta1/{pool_id}/estimate/single_pool_swap_exact_amount_out?pool_id=...&token_out=...&token_in_denom=...` |
| `EstimateTradeBasedOnPriceImpact` | `GET /osmosis/poolmanager/v1beta1/{pool_id}/estimate_trade` |
| `TradingPairTakerFee` | `GET /osmosis/poolmanager/v1beta1/trading_pair_takerfee?denom_0=...&denom_1=...` |
| `AllTakerFeeShareAgreements`, `TakerFeeShareAgreementFromDenom`, `TakerFeeShareDenomsToAccruedValue`, `AllTakerFeeShareAccumulators` | taker fee share bookkeeping under `/osmosis/poolmanager/v1beta1/` |
| `RegisteredAlloyedPoolFromDenom`, `RegisteredAlloyedPoolFromPoolId`, `AllRegisteredAlloyedPools` | alloyed pool registry (inherited from Osmosis, unused on BitBadges) |
| `SpotPriceV2` | `GET /osmosis/poolmanager/v2/pools/{pool_id}/prices` |

The `EstimateSinglePoolSwap*` and `*WithPrimitiveTypes` variants take plain string parameters and work over the LCD, unlike the deprecated gamm calculators.

```bash
curl "https://lcd.bitbadges.io/osmosis/poolmanager/v1beta1/1/estimate/single_pool_swap_exact_amount_in?pool_id=1&token_in=1000000000ubadge&token_out_denom=badgeslp:64:utoken"
```

```json
{"token_out_amount":"58"}
```

An input too small to produce one unit of output returns `calculated token out amount must be positive`.

## Related

- [x/gamm](gamm/README.md)
- [x/gamm Queries](gamm/queries.md)
- [Swaps in the API](../../api/swaps.md)
- [Trade on the DEX](../../guides/trade-on-the-dex.md)
