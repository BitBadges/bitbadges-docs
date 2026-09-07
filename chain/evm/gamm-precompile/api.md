---
description: "GAMM precompile reference: the 14-function Solidity interface, the snake_case JSON for each message and query, gas constants, and error codes."
---

# GAMM Precompile API

Reference for every function on the GAMM precompile at `0x0000000000000000000000000000000000001002`: 5 transactions and 9 queries, regenerated from `x/gamm/precompile/abi.json`.

## Interface

```solidity
interface IGammPrecompile {
    // Transaction methods
    function joinPool(string calldata msgJson) external returns (uint256 shareOutAmount, Coin[] memory tokenIn);
    function exitPool(string calldata msgJson) external returns (Coin[] memory tokenOut);
    function swapExactAmountIn(string calldata msgJson) external returns (uint256 tokenOutAmount);
    function swapExactAmountInWithIBCTransfer(string calldata msgJson) external returns (uint256 tokenOutAmount);
    function createPool(string calldata msgJson) external returns (uint256 poolId);

    // Query methods
    function getPool(string calldata msgJson) external view returns (bytes memory pool);
    function getPools(string calldata msgJson) external view returns (bytes memory pools);
    function getPoolType(string calldata msgJson) external view returns (string memory poolType);
    function calcJoinPoolNoSwapShares(string calldata msgJson) external view returns (Coin[] memory tokensOut, uint256 sharesOut);
    function calcExitPoolCoinsFromShares(string calldata msgJson) external view returns (Coin[] memory tokensOut);
    function calcJoinPoolShares(string calldata msgJson) external view returns (uint256 shareOutAmount, Coin[] memory tokensOut);
    function getPoolParams(string calldata msgJson) external view returns (bytes memory params);
    function getTotalShares(string calldata msgJson) external view returns (Coin memory totalShares);
    function getTotalLiquidity(string calldata msgJson) external view returns (Coin[] memory liquidity);
}

struct Coin {
    string denom;
    uint256 amount;
}
```

## JSON Formats

The precompile decodes `msgJson` with Go's `encoding/json` into the `x/gamm` protobuf structs, so keys are the snake_case protobuf field names. All integers are strings. `sender` is always overwritten with the caller.

### joinPool

`MsgJoinPool`. Buy `share_out_amount` LP shares, paying at most `token_in_maxs`.

```json
{
  "pool_id": "1",
  "share_out_amount": "1000000",
  "token_in_maxs": [{"denom": "ubadge", "amount": "1000000000"}]
}
```

Returns the shares minted and the coins actually taken.

### exitPool

`MsgExitPool`. Burn `share_in_amount` LP shares, receiving at least `token_out_mins`.

```json
{
  "pool_id": "1",
  "share_in_amount": "1000000",
  "token_out_mins": [{"denom": "ubadge", "amount": "0"}]
}
```

Returns the coins paid out.

### swapExactAmountIn

`MsgSwapExactAmountIn`. Swap a fixed input through one or more pools.

```json
{
  "routes": [{"pool_id": "1", "token_out_denom": "badgeslp:64:utoken"}],
  "token_in": {"denom": "ubadge", "amount": "1000000000"},
  "token_out_min_amount": "60",
  "affiliates": [{"address": "bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf", "basis_points_fee": "10"}]
}
```

Each `affiliates` entry carries an `address` (bech32 or `0x`, converted to bech32 on the Go side) and a `basis_points_fee` integer string, as in the example above. Returns the output amount.

### swapExactAmountInWithIBCTransfer

`MsgSwapExactAmountInWithIBCTransfer`. Same as `swapExactAmountIn` plus an `ibc_transfer_info` that forwards the output over IBC.

```json
{
  "routes": [
    {"pool_id": "1", "token_out_denom": "ubadge"},
    {"pool_id": "4", "token_out_denom": "ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701"}
  ],
  "token_in": {"denom": "badgeslp:64:utoken", "amount": "10"},
  "token_out_min_amount": "900000",
  "ibc_transfer_info": {
    "source_channel": "channel-3",
    "receiver": "cosmos1py4mfpg6uf59qkyzg0nmau322c5873ee8df8qg",
    "memo": "",
    "timeout_timestamp": "1788825600000000000"
  },
  "affiliates": []
}
```

Returns the output amount before the transfer.

### createPool

`MsgCreateBalancerPool`. Creates a weighted (Balancer) pool. Fees are decimal strings.

```json
{
  "pool_params": {"swap_fee": "0.003", "exit_fee": "0"},
  "pool_assets": [
    {"token": {"denom": "ubadge", "amount": "1000000"}, "weight": "1"},
    {"token": {"denom": "badgeslp:64:utoken", "amount": "1000000"}, "weight": "1"}
  ]
}
```

Returns the new pool ID. See [GAMM messages](../../modules/gamm/messages.md) for the pool creation rules.

### Queries

| Method | Request type | JSON |
| --- | --- | --- |
| `getPool` | `QueryPoolRequest` | `{"pool_id": "1"}` |
| `getPools` | `QueryPoolsRequest` | `{"pagination": {"limit": "50"}}` (optional) |
| `getPoolType` | `QueryPoolTypeRequest` | `{"pool_id": "1"}` |
| `calcJoinPoolNoSwapShares` | `QueryCalcJoinPoolNoSwapSharesRequest` | `{"pool_id": "1", "tokens_in": [{"denom": "ubadge", "amount": "1000000"}]}` |
| `calcExitPoolCoinsFromShares` | `QueryCalcExitPoolCoinsFromSharesRequest` | `{"pool_id": "1", "share_in_amount": "1000000"}` |
| `calcJoinPoolShares` | `QueryCalcJoinPoolSharesRequest` | `{"pool_id": "1", "tokens_in": [{"denom": "ubadge", "amount": "1000000"}]}` |
| `getPoolParams` | `QueryPoolParamsRequest` | `{"pool_id": "1"}` |
| `getTotalShares` | `QueryTotalSharesRequest` | `{"pool_id": "1"}` |
| `getTotalLiquidity` | `QueryTotalLiquidityRequest` | `{}` |

`getPool`, `getPools`, and `getPoolParams` return the protobuf-encoded response as `bytes`. Decode off-chain. The other queries return typed values. Query request types run `ValidateBasic` before the keeper call.

## Gas

`RequiredGas` charges a per-method base plus a fixed buffer: `+200,000` for transactions, `+50,000` for queries. The constants come from `x/gamm/precompile/gas.go`.

| Method | Base gas | Charged up front |
| --- | --- | --- |
| `joinPool` | 10,000 | 210,000 |
| `exitPool` | 10,000 | 210,000 |
| `swapExactAmountIn` | 10,000 | 210,000 |
| `swapExactAmountInWithIBCTransfer` | 15,000 | 215,000 |
| `createPool` | 15,000 | 215,000 |
| `getPool` | 3,000 | 53,000 |
| `getPools` | 5,000 | 55,000 |
| `getPoolType` | 2,000 | 52,000 |
| `calcJoinPoolNoSwapShares` | 5,000 | 55,000 |
| `calcExitPoolCoinsFromShares` | 5,000 | 55,000 |
| `calcJoinPoolShares` | 5,000 | 55,000 |
| `getPoolParams` | 3,000 | 53,000 |
| `getTotalShares` | 3,000 | 53,000 |
| `getTotalLiquidity` | 5,000 | 55,000 |

Per-element constants for dynamic estimates (`CalculateDynamicGas`): 5,000 per route, 2,000 per coin, 3,000 per affiliate, 10 per memo byte. Swaps typically use 150k to 300k gas in total depending on pool complexity; the buffer exists so `eth_estimateGas` converges.

## Error Codes

Errors revert with `precompile error [code=N]: message: details`.

| Code | Name | Description | Mapped from |
| --- | --- | --- | --- |
| 1 | `InvalidInput` | Invalid JSON, failed `ValidateBasic`, zero pool ID, empty routes, non-positive amount | `ErrNotPositiveRequireAmount`, `ErrEmptyRoutes` |
| 2 | `PoolNotFound` | Pool not found | `ErrPoolNotFound` |
| 3 | `SwapFailed` | Swap failed: limit breached, denom not in pool, math approximation | `ErrLimitMaxAmount`, `ErrLimitMinAmount`, `ErrDenomNotFoundInPool`, `ErrInvalidMathApprox` |
| 4 | `QueryFailed` | Query failed | |
| 5 | `InternalError` | Internal error | |
| 6 | `Unauthorized` | Unauthorized (zero caller) | |
| 7 | `JoinPoolFailed` | Join pool failed | |
| 8 | `ExitPoolFailed` | Exit pool failed | `ErrTooManyTokensOut` |
| 9 | `IBCTransferFailed` | IBC transfer failed | |

## Events

Successful transactions emit `precompile_join_pool`, `precompile_exit_pool`, and the matching swap and create events with `module=evm_precompile`, `pool_id`, `sender`, and the amounts.

## Related

- [GAMM Precompile](README.md)
- [Gotchas](gotchas.md)
- [GAMM module messages](../../modules/gamm/messages.md)
- [GAMM module queries](../../modules/gamm/queries.md)
