---
description: "The GAMM precompile at 0x0000000000000000000000000000000000001002: join and exit pools, swap, swap with an IBC transfer, create and query pools from Solidity."
---

# GAMM Precompile

The GAMM precompile gives Solidity contracts access to the `x/gamm` liquidity pools: join, exit, swap (single and multi-hop), swap with an IBC transfer, create a pool, and read pool state. Address: `0x0000000000000000000000000000000000001002`.

## Example

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IGammPrecompile.sol";
import "./libraries/GammJSONHelpers.sol";

contract MyPoolContract {
    IGammPrecompile constant GAMM =
        IGammPrecompile(0x0000000000000000000000000000000000001002);

    // Join a pool
    function joinPool(
        uint64 poolId,
        uint256 shareOutAmount,
        string memory tokenInMaxsJson  // e.g. [{"denom":"ubadge","amount":"1000000000"}]
    ) external returns (uint256 sharesReceived) {
        string memory msgJson = GammJSONHelpers.joinPoolJSON(
            poolId,
            shareOutAmount,
            tokenInMaxsJson
        );

        (sharesReceived, ) = GAMM.joinPool(msgJson);
        return sharesReceived;
    }

    // Swap tokens
    function swap(
        string memory routesJson,   // e.g. [{"pool_id":"1","token_out_denom":"badgeslp:64:utoken"}]
        string memory tokenInJson,  // e.g. {"denom":"ubadge","amount":"1000000000"}
        uint256 minTokenOutAmount
    ) external returns (uint256 tokenOutAmount) {
        string memory msgJson = GammJSONHelpers.swapExactAmountInJSON(
            routesJson,
            tokenInJson,
            minTokenOutAmount,
            "[]"  // affiliates
        );

        return GAMM.swapExactAmountIn(msgJson);
    }
}
```

## How It Works

Every method takes one `string calldata msgJson`. The JSON is the protobuf JSON of the matching `x/gamm` message or query. The precompile sets `sender` from `msg.sender`, converts any `0x` affiliate addresses to bech32, runs `ValidateBasic`, and calls the keeper.

```solidity
// Correct: JSON string
string memory json = GammJSONHelpers.joinPoolJSON(poolId, shareOutAmount, tokenInMaxsJson);
(uint256 shares, ) = GAMM.joinPool(json);

// Wrong: struct parameters (old interface)
GAMM.joinPool(poolId, shareOutAmount, tokenInMaxs);
```

Use `GammJSONHelpers` to build the strings:

```solidity
import "./libraries/GammJSONHelpers.sol";

// Simple operations
string memory json = GammJSONHelpers.getPoolJSON(poolId);
bytes memory pool = GAMM.getPool(json);

// Complex operations
string memory swapJson = GammJSONHelpers.swapExactAmountInJSON(
    '[{"pool_id":"1","token_out_denom":"badgeslp:64:utoken"}]',
    '{"denom":"ubadge","amount":"1000000000"}',
    60,
    "[]"
);
uint256 amountOut = GAMM.swapExactAmountIn(swapJson);
```

Field names in the JSON are snake_case (`pool_id`, `share_out_amount`, `token_in_maxs`). See [Gotchas](gotchas.md#field-names-are-snake_case).

## Methods

Transactions:

| Method | Returns |
| --- | --- |
| `joinPool(msgJson)` | `(uint256 shareOutAmount, Coin[] tokenIn)` |
| `exitPool(msgJson)` | `Coin[] tokenOut` |
| `swapExactAmountIn(msgJson)` | `uint256 tokenOutAmount` |
| `swapExactAmountInWithIBCTransfer(msgJson)` | `uint256 tokenOutAmount` |
| `createPool(msgJson)` | `uint256 poolId` |

Queries:

| Method | Returns |
| --- | --- |
| `getPool(msgJson)` | `bytes` (protobuf pool) |
| `getPools(msgJson)` | `bytes` (protobuf pool list) |
| `getPoolType(msgJson)` | `string` |
| `calcJoinPoolNoSwapShares(msgJson)` | `(Coin[] tokensOut, uint256 sharesOut)` |
| `calcExitPoolCoinsFromShares(msgJson)` | `Coin[] tokensOut` |
| `calcJoinPoolShares(msgJson)` | `(uint256 shareOutAmount, Coin[] tokensOut)` |
| `getPoolParams(msgJson)` | `bytes` (protobuf params) |
| `getTotalShares(msgJson)` | `Coin totalShares` |
| `getTotalLiquidity(msgJson)` | `Coin[] liquidity` |

Signatures and JSON shapes: [API reference](api.md).

## Patterns

### Join a Pool

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IGammPrecompile.sol";
import "./libraries/GammJSONHelpers.sol";
import "./types/GammTypes.sol";

contract JoinPoolExample {
    IGammPrecompile constant GAMM =
        IGammPrecompile(0x0000000000000000000000000000000000001002);

    function joinPool(
        uint64 poolId,
        uint256 desiredShares,
        string memory denom1,
        uint256 amount1,
        string memory denom2,
        uint256 amount2
    ) external returns (uint256 sharesReceived) {
        GammTypes.Coin[] memory maxIn = new GammTypes.Coin[](2);
        maxIn[0] = GammTypes.Coin(denom1, amount1);
        maxIn[1] = GammTypes.Coin(denom2, amount2);

        string memory msgJson = GammJSONHelpers.joinPoolJSON(
            poolId,
            desiredShares,
            GammJSONHelpers.coinsToJson(maxIn)
        );

        (sharesReceived, ) = GAMM.joinPool(msgJson);
        return sharesReceived;
    }
}
```

### Exit a Pool

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IGammPrecompile.sol";
import "./libraries/GammJSONHelpers.sol";
import "./types/GammTypes.sol";

contract ExitPoolExample {
    IGammPrecompile constant GAMM =
        IGammPrecompile(0x0000000000000000000000000000000000001002);

    function exitPool(
        uint64 poolId,
        uint256 shareAmount,
        string memory tokenOutMinsJson
    ) external returns (uint256[] memory amountsOut) {
        string memory msgJson = GammJSONHelpers.exitPoolJSON(
            poolId,
            shareAmount,
            tokenOutMinsJson
        );

        GammTypes.Coin[] memory tokensOut = GAMM.exitPool(msgJson);

        // Convert to array
        amountsOut = new uint256[](tokensOut.length);
        for (uint i = 0; i < tokensOut.length; i++) {
            amountsOut[i] = tokensOut[i].amount;
        }

        return amountsOut;
    }
}
```

### Single-Hop Swap

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IGammPrecompile.sol";
import "./libraries/GammJSONHelpers.sol";
import "./types/GammTypes.sol";

contract SingleHopSwapExample {
    IGammPrecompile constant GAMM =
        IGammPrecompile(0x0000000000000000000000000000000000001002);

    function swapTokens(
        uint64 poolId,
        string memory tokenInDenom,
        uint256 tokenInAmount,
        string memory tokenOutDenom,
        uint256 minTokenOutAmount
    ) external returns (uint256 tokenOutAmount) {
        GammTypes.SwapAmountInRoute[] memory routes = new GammTypes.SwapAmountInRoute[](1);
        routes[0] = GammTypes.SwapAmountInRoute(poolId, tokenOutDenom);

        string memory msgJson = GammJSONHelpers.swapExactAmountInJSON(
            GammJSONHelpers.swapRoutesToJson(routes),
            GammJSONHelpers.coinToJson(GammTypes.Coin(tokenInDenom, tokenInAmount)),
            minTokenOutAmount,
            "[]"
        );

        return GAMM.swapExactAmountIn(msgJson);
    }
}
```

### Multi-Hop Swap

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IGammPrecompile.sol";
import "./libraries/GammJSONHelpers.sol";
import "./types/GammTypes.sol";

contract MultiHopSwapExample {
    IGammPrecompile constant GAMM =
        IGammPrecompile(0x0000000000000000000000000000000000001002);

    function multiHopSwap(
        uint64[] memory poolIds,
        string[] memory tokenOutDenoms,  // one per hop
        string memory tokenInDenom,
        uint256 tokenInAmount,
        uint256 minTokenOutAmount
    ) external returns (uint256 finalAmountOut) {
        GammTypes.SwapAmountInRoute[] memory routes = new GammTypes.SwapAmountInRoute[](poolIds.length);
        for (uint i = 0; i < poolIds.length; i++) {
            routes[i] = GammTypes.SwapAmountInRoute(poolIds[i], tokenOutDenoms[i]);
        }

        string memory msgJson = GammJSONHelpers.swapExactAmountInJSON(
            GammJSONHelpers.swapRoutesToJson(routes),
            GammJSONHelpers.coinToJson(GammTypes.Coin(tokenInDenom, tokenInAmount)),
            minTokenOutAmount,
            "[]"
        );

        return GAMM.swapExactAmountIn(msgJson);
    }
}
```

## Helper Library

`GammJSONHelpers` builds JSON for every method:

| Group | Functions |
| --- | --- |
| Transactions | `joinPoolJSON`, `exitPoolJSON`, `swapExactAmountInJSON`, `swapExactAmountInWithIBCTransferJSON` |
| Queries | `getPoolJSON`, `getPoolsJSON`, `getPoolTypeJSON`, `calcJoinPoolNoSwapSharesJSON`, `calcExitPoolCoinsFromSharesJSON`, `calcJoinPoolSharesJSON`, `getPoolParamsJSON`, `getTotalSharesJSON`, `getTotalLiquidityJSON` |
| Building blocks | `coinToJson`, `coinsToJson`, `swapRouteToJson`, `swapRoutesToJson`, `affiliateToJson`, `affiliatesToJson`, `ibcTransferInfoToJson`, `paginationToJson` |

`GammHelpers`, `GammBuilders`, `GammWrappers`, `GammDecoders`, and `GammErrors` in the same folder add struct builders, typed wrappers, and validation.

## Return Values

`uint256` directly:

```solidity
uint256 tokenOutAmount = GAMM.swapExactAmountIn(swapJson);
```

Tuples:

```solidity
(uint256 shares, GammTypes.Coin[] memory tokens) = GAMM.joinPool(joinJson);
```

Protobuf bytes from `getPool`, `getPools`, and `getPoolParams`. Decode off-chain with the TypeScript SDK or emit them in an event for an indexer.

## Security

- `sender` is set from `msg.sender` on the Go side and cannot be spoofed. A contract can only spend its own balances.
- Invalid JSON reverts with a structured error.
- Set minimum and maximum amounts on every call. See [Gotchas](gotchas.md#slippage-protection).
- Use the helper functions so the JSON matches the schema.

## Best Practices

Use the helpers:

```solidity
// Good: type-safe and readable
string memory json = GammJSONHelpers.joinPoolJSON(poolId, shareOutAmount, tokenInMaxsJson);

// Bad: error-prone manual construction
string memory json = string(abi.encodePacked(
    '{"pool_id":"', GammJSONHelpers.uintToString(poolId),
    '","share_out_amount":"', GammJSONHelpers.uintToString(shareOutAmount),
    '","token_in_maxs":', tokenInMaxsJson, '}'
));
```

Validate before building JSON:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IGammPrecompile.sol";
import "./libraries/GammJSONHelpers.sol";
import "./types/GammTypes.sol";

contract ValidatedJoinExample {
    IGammPrecompile constant GAMM =
        IGammPrecompile(0x0000000000000000000000000000000000001002);

    function joinPool(uint64 poolId, uint256 shares, string memory tokenInMaxsJson) external {
        require(poolId > 0, "Invalid pool ID");
        require(shares > 0, "Invalid share amount");

        // Now build JSON
        string memory json = GammJSONHelpers.joinPoolJSON(poolId, shares, tokenInMaxsJson);
        GAMM.joinPool(json);
    }
}
```

Handle slippage:

```solidity
// Always specify minimum/maximum amounts
string memory exitJson = GammJSONHelpers.exitPoolJSON(
    poolId,
    shareAmount,
    minTokenOutAmountsJson  // Protect against slippage
);
```

## Related

- [GAMM Precompile API](api.md)
- [Gotchas](gotchas.md)
- [GAMM module](../../modules/gamm/README.md)
- [Example contracts](https://github.com/BitBadges/bitbadgeschain/tree/master/contracts/examples)
