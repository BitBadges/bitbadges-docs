---
description: "All 12 x/gamm messages with fields and a JSON example each: pool creation, join, exit, swaps, single-asset joins and exits, stableswap, IBC swap."
---

# x/gamm Messages

Every message is signed by `sender`. Amounts are integer strings in the coin's base unit. Native tokens appear as `badgeslp:<collectionId>:<denom>` alias denoms and are subject to the collection's approvals (see [x/gamm](README.md)). Type URLs use the proto package: `/gamm.v1beta1.Msg<Name>`, except pool creation which lives under `/gamm.poolmodels.balancer.` and `/gamm.poolmodels.stableswap.`.

| Message | Purpose |
| --- | --- |
| [MsgCreateBalancerPool](#msgcreatebalancerpool) | Create a weighted pool with initial liquidity |
| [MsgJoinPool](#msgjoinpool) | Deposit all assets proportionally for LP shares |
| [MsgExitPool](#msgexitpool) | Burn LP shares for all assets proportionally |
| [MsgSwapExactAmountIn](#msgswapexactamountin) | Swap an exact input for at least a minimum output |
| [MsgSwapExactAmountOut](#msgswapexactamountout) | Swap at most a maximum input for an exact output |
| [MsgSwapExactAmountInWithIBCTransfer](#msgswapexactamountinwithibctransfer) | Swap, then send the output over IBC |
| [MsgJoinSwapExternAmountIn](#msgjoinswapexternamountin) | Single-asset join with an exact token amount |
| [MsgJoinSwapShareAmountOut](#msgjoinswapshareamountout) | Single-asset join for an exact share amount |
| [MsgExitSwapShareAmountIn](#msgexitswapshareamountin) | Exit an exact share amount into one asset |
| [MsgExitSwapExternAmountOut](#msgexitswapexternamountout) | Exit into an exact single-asset amount |
| [MsgCreateStableswapPool](#msgcreatestableswappool) | Create a stableswap pool |
| [MsgStableSwapAdjustScalingFactors](#msgstableswapadjustscalingfactors) | Adjust a stableswap pool's scaling factors |

{% hint style="info" %}
Ask your agent:

```text
Swap 1 BADGE for badgeslp:64:utoken through pool 1 with 1% slippage and show me the transaction before you sign it.
```

The `bb swap estimate ubadge badgeslp:64:utoken 1000000 --slippage 1` command and the liquidity-pools skill produce the `MsgSwapExactAmountIn` on this page.
{% endhint %}

## MsgCreateBalancerPool

Creates a balancer pool. The pool ID is assigned at execution and returned in the response. The creator supplies the initial liquidity and sets the fees and weights; a dedicated module account is created for the pool.

```json
{
    "@type": "/gamm.poolmodels.balancer.MsgCreateBalancerPool",
    "sender": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "pool_params": {
        "swap_fee": "0.003000000000000000",
        "exit_fee": "0.000000000000000000"
    },
    "pool_assets": [
        {
            "token": { "denom": "ubadge", "amount": "1000000" },
            "weight": "50"
        },
        {
            "token": { "denom": "badgeslp:21:utoken", "amount": "5000000" },
            "weight": "50"
        }
    ]
}
```

```proto
message MsgCreateBalancerPool {
  option (amino.name) = "gamm/CreateBalancerPool";
  option (cosmos.msg.v1.signer) = "sender";

  string sender = 1;
  gamm.poolmodels.balancer.PoolParams pool_params = 2;
  repeated gamm.poolmodels.balancer.PoolAsset pool_assets = 3;
}

// Returns the poolID
message MsgCreateBalancerPoolResponse {
  uint64 pool_id = 1;
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sender` | string | yes | Pool creator; funds the initial liquidity |
| `pool_params.swap_fee` | LegacyDec string | yes | Fee taken on each swap, for example `0.003` for 0.3%. Some serializers render this as an 18-decimal integer string such as `3000000000000000`. |
| `pool_params.exit_fee` | LegacyDec string | yes | Fee taken on exit |
| `pool_assets[].token` | Coin | yes | Denom and initial amount |
| `pool_assets[].weight` | Int string | yes | Relative weight of the asset |

Behavior: pool creation fails when any native asset's collection sets the `disablePoolCreation` invariant. There is no pool creation fee. The response `pool_id` is also emitted in transaction events.

## MsgJoinPool

Joins a pool by depositing every asset in the current pool ratio. LP shares are minted to the sender. Internally this is "join pool, no swap".

```json
{
    "@type": "/gamm.v1beta1.MsgJoinPool",
    "sender": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "pool_id": "1",
    "share_out_amount": "1000000",
    "token_in_maxs": [
        { "denom": "badgeslp:64:utoken", "amount": "10" },
        { "denom": "ubadge", "amount": "160000000" }
    ]
}
```

```proto
message MsgJoinPool {
  option (amino.name) = "gamm/JoinPool";
  option (cosmos.msg.v1.signer) = "sender";

  string sender = 1;
  uint64 pool_id = 2;
  string share_out_amount = 3;                       // math.Int
  repeated cosmos.base.v1beta1.Coin token_in_maxs = 4;
}

message MsgJoinPoolResponse {
  string share_out_amount = 1;                       // math.Int
  repeated cosmos.base.v1beta1.Coin token_in = 2;
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sender` | string | yes | Depositor |
| `pool_id` | uint64 | yes | Target pool |
| `share_out_amount` | Int string | yes | Exact LP shares to receive |
| `token_in_maxs` | Coin[] | yes | Slippage cap: the most of each asset the join may consume |

Behavior: tokens must be provided in the pool's current proportions; otherwise the transaction fails. Shares are minted to `sender`, pool liquidity rises, and the sender starts earning swap fees. Shares can be held, staked in yield programs, or used for governance where a pool supports it.

## MsgExitPool

Burns LP shares and returns every underlying asset in proportion to the share. The sender cannot pick which assets to receive.

```json
{
    "@type": "/gamm.v1beta1.MsgExitPool",
    "sender": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "pool_id": "1",
    "share_in_amount": "100000",
    "token_out_mins": [
        { "denom": "badgeslp:64:utoken", "amount": "1" },
        { "denom": "ubadge", "amount": "15000000" }
    ]
}
```

```proto
message MsgExitPool {
  option (amino.name) = "gamm/ExitPool";
  option (cosmos.msg.v1.signer) = "sender";

  string sender = 1;
  uint64 pool_id = 2;
  string share_in_amount = 3;                        // math.Int
  repeated cosmos.base.v1beta1.Coin token_out_mins = 4;
}

message MsgExitPoolResponse {
  repeated cosmos.base.v1beta1.Coin token_out = 1;
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sender` | string | yes | Share holder |
| `pool_id` | uint64 | yes | Pool to exit |
| `share_in_amount` | Int string | yes | LP shares to burn |
| `token_out_mins` | Coin[] | yes | Slippage floor: the least of each asset that must come back |

Behavior: shares are burned, the exit fee (if the pool has one) is deducted, and the assets are returned proportionally. A native asset's collection approvals must allow the transfer from the pool to the sender.

## MsgSwapExactAmountIn

Swaps an exact `token_in` for at least `token_out_min_amount` of the last route's output denom.

```json
{
    "@type": "/gamm.v1beta1.MsgSwapExactAmountIn",
    "sender": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "routes": [
        { "pool_id": "1", "token_out_denom": "badgeslp:64:utoken" }
    ],
    "token_in": { "denom": "ubadge", "amount": "1000000000" },
    "token_out_min_amount": "60",
    "affiliates": [
        { "basis_points_fee": "10", "address": "bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf" }
    ]
}
```

```proto
message MsgSwapExactAmountIn {
  option (amino.name) = "gamm/SwapExactAmountIn";
  option (cosmos.msg.v1.signer) = "sender";

  string sender = 1;
  repeated poolmanager.v1beta1.SwapAmountInRoute routes = 2;
  cosmos.base.v1beta1.Coin token_in = 3;
  string token_out_min_amount = 4;                   // math.Int
  repeated poolmanager.v1beta1.Affiliate affiliates = 5;
}

message MsgSwapExactAmountInResponse {
  string token_out_amount = 1;                       // math.Int
}

message Affiliate {
  string basis_points_fee = 1;
  string address = 2;
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sender` | string | yes | Trader |
| `routes` | `SwapAmountInRoute[]` | yes | Ordered hops; each names a `pool_id` and `token_out_denom` |
| `token_in` | Coin | yes | Exact input |
| `token_out_min_amount` | Int string | yes | Slippage floor on the final output |
| `affiliates` | `Affiliate[]` | no | Fee recipients paid from the swap output |

Behavior: multi-hop swaps run through each pool in sequence. Each pool's swap fee is deducted from the input before the swap. Price impact depends on pool liquidity. Affiliate fees are optional, given in basis points (1 basis point = 0.01%, 100 = 1%), computed on the output, and several affiliates may be listed. With an output of 1,000,000 and one affiliate at 10 basis points, the affiliate receives 1,000 and the sender 999,000.

## MsgSwapExactAmountOut

Swaps up to `token_in_max_amount` of the first route's input denom for exactly `token_out`.

```json
{
    "@type": "/gamm.v1beta1.MsgSwapExactAmountOut",
    "sender": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "routes": [
        { "pool_id": "1", "token_in_denom": "ubadge" }
    ],
    "token_in_max_amount": "2000000000",
    "token_out": { "denom": "badgeslp:64:utoken", "amount": "1" }
}
```

```proto
message MsgSwapExactAmountOut {
  option (amino.name) = "gamm/SwapExactAmountOut";
  option (cosmos.msg.v1.signer) = "sender";

  string sender = 1;
  repeated poolmanager.v1beta1.SwapAmountOutRoute routes = 2;
  string token_in_max_amount = 3;                    // math.Int
  cosmos.base.v1beta1.Coin token_out = 4;
}

message MsgSwapExactAmountOutResponse {
  string token_in_amount = 1;                        // math.Int
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sender` | string | yes | Trader |
| `routes` | `SwapAmountOutRoute[]` | yes | Ordered hops; each names a `pool_id` and `token_in_denom` |
| `token_in_max_amount` | Int string | yes | Slippage cap on the input |
| `token_out` | Coin | yes | Exact output |

Behavior: the response reports the input actually spent. No affiliate field exists on this message. Use it when the output amount matters more than the input, for example buying exactly one token.

## MsgSwapExactAmountInWithIBCTransfer

Runs `MsgSwapExactAmountIn`, then sends the output to another chain over IBC in the same transaction. If any step fails, everything is rolled back.

```json
{
    "@type": "/gamm.v1beta1.MsgSwapExactAmountInWithIBCTransfer",
    "sender": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "routes": [
        { "pool_id": "1", "token_out_denom": "ubadge" },
        { "pool_id": "4", "token_out_denom": "ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701" }
    ],
    "token_in": { "denom": "badgeslp:64:utoken", "amount": "10" },
    "token_out_min_amount": "900000",
    "ibc_transfer_info": {
        "source_channel": "channel-3",
        "receiver": "cosmos1py4mfpg6uf59qkyzg0nmau322c5873ee8df8qg",
        "memo": "",
        "timeout_timestamp": "1788825600000000000"
    },
    "affiliates": [
        { "basis_points_fee": "10", "address": "bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf" }
    ]
}
```

```ts
export interface iIBCTransferInfo<T extends NumberType> {
    sourceChannel: string;
    receiver: string;
    memo: string;
    timeoutTimestamp: T;
}

export interface iMsgSwapExactAmountInWithIBCTransfer<T extends NumberType> {
    sender: string;
    routes: iSwapAmountInRoute<T>[];
    tokenIn: iCosmosCoin<T>;
    tokenOutMinAmount: T;
    ibcTransferInfo: iIBCTransferInfo<T>;
    affiliates?: iAffiliate[];
}

export interface iAffiliate {
    basisPointsFee: string;
    address: string;
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sender` | string | yes | Trader and IBC sender |
| `routes` | `SwapAmountInRoute[]` | yes | Swap hops, executed in order before the transfer |
| `token_in` | Coin | yes | Exact input |
| `token_out_min_amount` | Int string | yes | Slippage floor |
| `ibc_transfer_info.source_channel` | string | yes | IBC channel to send through |
| `ibc_transfer_info.receiver` | string | yes | Destination chain address |
| `ibc_transfer_info.memo` | string | no | Memo attached to the IBC transfer |
| `ibc_transfer_info.timeout_timestamp` | uint64 | yes | Nanosecond timestamp after which the IBC transfer times out |
| `affiliates` | `Affiliate[]` | no | Fee recipients, paid from the output before the IBC transfer |

Behavior, in order: swap through the routes, check the minimum output, deduct affiliate fees (on the output, before transfer), send the remainder over IBC. Each pool's swap fee comes off the input; the IBC transfer fee comes off the output. With an output of 1,000,000 and an affiliate at 10 basis points, 1,000 goes to the affiliate and 999,000 is transferred. The output denom must be an x/bank coin, since native `x/tokenization` balances cannot cross IBC.

## MsgJoinSwapExternAmountIn

Joins a pool with a single asset. The pool swaps part of the deposit internally so the join stays balanced. The sender specifies the exact `token_in` and a minimum share amount.

```json
{
    "@type": "/gamm.v1beta1.MsgJoinSwapExternAmountIn",
    "sender": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "pool_id": "1",
    "token_in": { "denom": "ubadge", "amount": "1000000000" },
    "share_out_min_amount": "1000000000000000"
}
```

```proto
message MsgJoinSwapExternAmountIn {
  option (amino.name) = "gamm/JoinSwapExternAmountIn";
  option (cosmos.msg.v1.signer) = "sender";

  string sender = 1;
  uint64 pool_id = 2;
  cosmos.base.v1beta1.Coin token_in = 3;
  string share_out_min_amount = 4;                   // math.Int
}

message MsgJoinSwapExternAmountInResponse {
  string share_out_amount = 1;                       // math.Int
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sender` | string | yes | Depositor |
| `pool_id` | uint64 | yes | Target pool |
| `token_in` | Coin | yes | Exact single-asset deposit; its denom must be a pool asset |
| `share_out_min_amount` | Int string | yes | Slippage floor on shares received |

Behavior: the response reports the shares minted. The internal swap pays the pool's swap fee on the swapped portion.

## MsgJoinSwapShareAmountOut

Single-asset join for an exact number of shares. The pool computes how much of `token_in_denom` it needs, capped by `token_in_max_amount`.

```json
{
    "@type": "/gamm.v1beta1.MsgJoinSwapShareAmountOut",
    "sender": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "pool_id": "1",
    "token_in_denom": "ubadge",
    "share_out_amount": "1000000000000000",
    "token_in_max_amount": "1200000000"
}
```

```proto
message MsgJoinSwapShareAmountOut {
  option (amino.name) = "gamm/JoinSwapShareAmountOut";
  option (cosmos.msg.v1.signer) = "sender";

  string sender = 1;
  uint64 pool_id = 2;
  string token_in_denom = 3;
  string share_out_amount = 4;                       // math.Int
  string token_in_max_amount = 5;                    // math.Int
}

message MsgJoinSwapShareAmountOutResponse {
  string token_in_amount = 1;                        // math.Int
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sender` | string | yes | Depositor |
| `pool_id` | uint64 | yes | Target pool |
| `token_in_denom` | string | yes | The one asset to deposit |
| `share_out_amount` | Int string | yes | Exact shares to receive |
| `token_in_max_amount` | Int string | yes | Slippage cap on the deposit |

Behavior: the response reports the input actually taken.

## MsgExitSwapShareAmountIn

Burns an exact number of shares and receives a single asset. The pool swaps the other assets into `token_out_denom` internally.

```json
{
    "@type": "/gamm.v1beta1.MsgExitSwapShareAmountIn",
    "sender": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "pool_id": "1",
    "token_out_denom": "ubadge",
    "share_in_amount": "1000000000000000",
    "token_out_min_amount": "900000000"
}
```

```proto
message MsgExitSwapShareAmountIn {
  option (amino.name) = "gamm/ExitSwapShareAmountIn";
  option (cosmos.msg.v1.signer) = "sender";

  string sender = 1;
  uint64 pool_id = 2;
  string token_out_denom = 3;
  string share_in_amount = 4;                        // math.Int
  string token_out_min_amount = 5;                   // math.Int
}

message MsgExitSwapShareAmountInResponse {
  string token_out_amount = 1;                       // math.Int
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sender` | string | yes | Share holder |
| `pool_id` | uint64 | yes | Pool to exit |
| `token_out_denom` | string | yes | The one asset to receive |
| `share_in_amount` | Int string | yes | Exact shares to burn |
| `token_out_min_amount` | Int string | yes | Slippage floor on the output |

Behavior: the exit fee and the swap fee on the internally swapped portion both apply. The response reports the output amount.

## MsgExitSwapExternAmountOut

Receives an exact single-asset `token_out` by burning at most `share_in_max_amount` shares.

```json
{
    "@type": "/gamm.v1beta1.MsgExitSwapExternAmountOut",
    "sender": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "pool_id": "1",
    "token_out": { "denom": "ubadge", "amount": "1000000000" },
    "share_in_max_amount": "1200000000000000"
}
```

```proto
message MsgExitSwapExternAmountOut {
  option (amino.name) = "gamm/ExitSwapExternAmountOut";
  option (cosmos.msg.v1.signer) = "sender";

  string sender = 1;
  uint64 pool_id = 2;
  cosmos.base.v1beta1.Coin token_out = 3;
  string share_in_max_amount = 4;                    // math.Int
}

message MsgExitSwapExternAmountOutResponse {
  string share_in_amount = 1;                        // math.Int
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sender` | string | yes | Share holder |
| `pool_id` | uint64 | yes | Pool to exit |
| `token_out` | Coin | yes | Exact single-asset output |
| `share_in_max_amount` | Int string | yes | Slippage cap on shares burned |

Behavior: the response reports the shares actually burned.

## MsgCreateStableswapPool

Creates a stableswap pool for assets that should trade near parity. Scaling factors normalize assets with different decimals.

```json
{
    "@type": "/gamm.poolmodels.stableswap.MsgCreateStableswapPool",
    "sender": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "pool_params": {
        "swap_fee": "0.001000000000000000",
        "exit_fee": "0.000000000000000000"
    },
    "initial_pool_liquidity": [
        { "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8", "amount": "1000000000" },
        { "denom": "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349", "amount": "1000000000" }
    ],
    "scaling_factors": ["1", "1"],
    "future_pool_governor": "",
    "scaling_factor_controller": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"
}
```

```proto
message MsgCreateStableswapPool {
  option (amino.name) = "gamm/CreateStableswapPool";
  option (cosmos.msg.v1.signer) = "sender";

  string sender = 1;
  PoolParams pool_params = 2;
  repeated cosmos.base.v1beta1.Coin initial_pool_liquidity = 3;
  repeated uint64 scaling_factors = 4;
  string future_pool_governor = 5;
  string scaling_factor_controller = 6;
}

message MsgCreateStableswapPoolResponse {
  uint64 pool_id = 1;
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sender` | string | yes | Pool creator |
| `pool_params.swap_fee` | LegacyDec string | yes | Swap fee |
| `pool_params.exit_fee` | LegacyDec string | yes | Exit fee |
| `initial_pool_liquidity` | Coin[] | yes | Initial deposit, one entry per asset |
| `scaling_factors` | uint64[] | yes | One factor per asset, in the same order as the liquidity |
| `future_pool_governor` | string | no | Retained from Osmosis; governor functionality is removed on BitBadges |
| `scaling_factor_controller` | string | no | Address allowed to send `MsgStableSwapAdjustScalingFactors` |

Behavior: the pool ID is returned in the response. The same `disablePoolCreation` invariant check applies to native assets.

## MsgStableSwapAdjustScalingFactors

Adjusts the scaling factors of a stableswap pool. The sender must be the pool's `scaling_factor_controller`.

```json
{
    "@type": "/gamm.poolmodels.stableswap.MsgStableSwapAdjustScalingFactors",
    "sender": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "pool_id": "3",
    "scaling_factors": ["1", "1000"]
}
```

```proto
message MsgStableSwapAdjustScalingFactors {
  option (amino.name) = "gamm/StableSwapAdjustScalingFactors";
  option (cosmos.msg.v1.signer) = "sender";

  string sender = 1;
  uint64 pool_id = 2;
  repeated uint64 scaling_factors = 3;
}

message MsgStableSwapAdjustScalingFactorsResponse {}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sender` | string | yes | Must equal the pool's `scaling_factor_controller` |
| `pool_id` | uint64 | yes | Stableswap pool |
| `scaling_factors` | uint64[] | yes | New factors, one per asset |

Behavior: the transaction fails with an unauthorized error when `sender` is not the controller.

## Related

- [x/gamm Queries](queries.md)
- [Trade on the DEX](../../../guides/trade-on-the-dex.md)
- [GAMM Precompile](../../evm/gamm-precompile/README.md)
- [IBC hooks](../../../token-standard/ibc/transfer-tokens-hook.md)
