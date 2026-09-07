---
description: "Mistakes that break GAMM precompile calls: string pool IDs, integer amounts, snake_case keys, tuple and bytes returns, slippage, multi-hop routes."
---

# GAMM precompile gotchas

This page lists the errors developers hit most on the GAMM precompile and the fix for each. Read it after the [API reference](api.md).

## Pool IDs are strings in JSON

Pool IDs are `uint64` in Go, but the JSON must carry them as strings.

```solidity
// Correct: pool ID as a string in JSON
string memory json = string(abi.encodePacked(
    '{"pool_id":"1",',  // Note: "1" not 1
    '"share_out_amount":"1000000",',
    '"token_in_maxs":[{"denom":"ubadge","amount":"1000000000"}]}'
));

// Wrong: pool ID as a number
string memory json = string(abi.encodePacked(
    '{"pool_id":1,',  // This will fail!
    '"share_out_amount":"1000000",',
    '"token_in_maxs":[{"denom":"ubadge","amount":"1000000000"}]}'
));
```

The helper converts for you:

```solidity
// Use helper to ensure correct format
string memory json = GammJSONHelpers.joinPoolJSON(
    1,  // uint64 poolId - helper converts to "1" in JSON
    shareOutAmount,
    tokenInMaxsJson
);
```

Why: protobuf JSON encodes 64-bit numbers as strings so large values keep their precision, and the same format is used everywhere on the Cosmos side.

## Field names are snake_case

The GAMM precompile decodes JSON with Go's `encoding/json` against the protobuf struct tags, which are snake_case (`pool_id`, `share_out_amount`, `token_in_maxs`, `token_out_mins`, `token_in`, `token_out_min_amount`, `ibc_transfer_info`). A camelCase key does not match its snake_case tag, so the field silently stays at its zero value and validation then fails (for example `poolId cannot be zero`). See the full field list on the [API page](api.md#json-formats).

## Amounts are integer strings

Cosmos SDK computes with `sdk.Dec` (18 decimal places of fixed-point precision), but JSON amounts are strings of integers in the smallest unit. No decimal point.

```solidity
// Correct: amount as a string
string memory json = string(abi.encodePacked(
    '{"token_in":{',
    '"denom":"ubadge",',
    '"amount":"1000000000"',  // String, no decimal point
    '}}'
));

// Wrong: amount as a number or with a decimal
string memory json = string(abi.encodePacked(
    '{"token_in":{',
    '"denom":"ubadge",',
    '"amount":1000000000',  // Number - will fail!
    // or
    '"amount":"1.0"',  // Decimal point - will fail!
    '}}'
));
```

A conversion helper:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IGammPrecompile.sol";
import "./libraries/GammJSONHelpers.sol";
import "./types/GammTypes.sol";

contract AmountExample {
    IGammPrecompile constant GAMM =
        IGammPrecompile(0x0000000000000000000000000000000000001002);

    // Convert human-readable amount to smallest unit string
    function amountToJson(uint256 amount, uint8 decimals) internal pure returns (string memory) {
        // amount is already in smallest unit (e.g., 1000000000 for 1 token with 9 decimals)
        return GammJSONHelpers.uintToString(amount);
    }

    // Example: 1 BADGE with 9 decimals = 1000000000
    string memory amountJson = amountToJson(1e9, 9);  // Returns "1000000000"
}
```

Three common mistakes:

```solidity
// Wrong
'"amount":"1.5"'

// Correct
'"amount":"1500000000"'  // 1.5 tokens with 9 decimals
```

```solidity
// Wrong
'"amount":1000000000'

// Correct
'"amount":"1000000000"'
```

```solidity
// Wrong: assumes 1 token = 1 unit
uint256 amount = 1;  // This is 0.000000001 tokens with 9 decimals!

// Correct: account for decimals
uint256 amount = 1 * 10**9;  // 1 token with 9 decimals
```

Native `BADGE` is 9 decimals on the Cosmos side (`ubadge`). Alias denoms for collection tokens use the decimals declared in the collection's denom units. See [Developer guide](../developer-guide.md#decimals-9-on-the-cosmos-side-18-on-the-evm-side).

### Every amount field is a string

```json
{
  "pool_id": "1",
  "share_out_amount": "1000000",
  "token_in_maxs": [
    {
      "denom": "ubadge",
      "amount": "1000000000"
    }
  ]
}
```

```json
{
  "pool_id": "1",
  "share_out_amount": 1000000,
  "token_in_maxs": [
    {
      "denom": "ubadge",
      "amount": 1000000000
    }
  ]
}
```

The first block is valid; the second fails on both numbers. The helpers convert `uint256` values to strings:

```solidity
// Helper converts uint256 to string automatically
string memory json = GammJSONHelpers.joinPoolJSON(
    poolId,
    shareOutAmount,  // uint256 - helper converts to string
    tokenInMaxsJson  // built with GammJSONHelpers.coinsToJson
);
```

## Return values differ by method

Tuple returns:

```solidity
// Method signature
function joinPool(string calldata msgJson)
    external
    returns (uint256 shareOutAmount, GammTypes.Coin[] memory tokenIn);

// Usage
(uint256 shares, GammTypes.Coin[] memory tokens) = GAMM.joinPool(json);
```

Coin arrays:

```solidity
struct Coin {
    string denom;
    uint256 amount;
}

// Access values
for (uint i = 0; i < tokens.length; i++) {
    string memory denom = tokens[i].denom;
    uint256 amount = tokens[i].amount;
}
```

Protobuf bytes (`getPool`, `getPools`, `getPoolParams`):

```solidity
bytes memory poolBytes = GAMM.getPool(json);
// Decode off-chain using TypeScript SDK or protobuf library
```

## Slippage protection

Always set a limit. Without one, a price move between simulation and execution changes what you pay or receive.

Join pool: `token_in_maxs` caps what you pay.

```solidity
// Correct: specify maximum amounts you are willing to pay
string memory json = GammJSONHelpers.joinPoolJSON(
    poolId,
    desiredShares,
    GammJSONHelpers.coinsToJson(maxAmounts)  // Maximum you are willing to pay per denom
);

// Wrong: no slippage protection
// If pool price changes, you might pay more than expected
```

Exit pool: `token_out_mins` floors what you receive.

```solidity
// Correct: specify minimum amounts you want to receive
string memory json = GammJSONHelpers.exitPoolJSON(
    poolId,
    shareAmount,
    GammJSONHelpers.coinsToJson(minAmounts)  // Minimum you want to receive per denom
);

// Wrong: no slippage protection
// If pool price changes, you might receive less than expected
```

Swap: `token_out_min_amount` floors the output.

```solidity
// Correct: specify minimum output amount
string memory json = GammJSONHelpers.swapExactAmountInJSON(
    routesJson,
    tokenInJson,
    minTokenOutAmount,  // Minimum you want to receive
    affiliatesJson
);

// Wrong: no slippage protection
// If pool price changes, you might receive less than expected
```

A 1% tolerance:

```solidity
// Example: 1% slippage tolerance
uint256 tokenInAmount = 1000000000;  // 1 token
uint256 minTokenOutAmount = tokenInAmount * 99 / 100;  // 0.99 tokens (1% slippage)

string memory json = GammJSONHelpers.swapExactAmountInJSON(
    routesJson,
    tokenInJson,
    minTokenOutAmount,
    affiliatesJson
);
```

Use `calcJoinPoolShares`, `calcJoinPoolNoSwapShares`, and `calcExitPoolCoinsFromShares` to simulate first, then derive the limit from the result.

## Multi-hop swaps

Slippage compounds across hops. Two hops at 1% each need about 2% total tolerance.

```solidity
// Multi-hop: A -> B -> C
// Slippage accumulates: 1% per hop = ~2% total for 2 hops

uint256 tokenInAmount = 1000000000;
uint256 minTokenOutAmount = tokenInAmount * 98 / 100;  // 2% slippage tolerance

string memory json = GammJSONHelpers.swapExactAmountInJSON(
    routesJson,      // two routes: pool 1 -> ubadge, pool 4 -> ATOM
    tokenInJson,     // {"denom":"badgeslp:64:utoken","amount":"1000000000"}
    minTokenOutAmount,
    affiliatesJson
);
```

Route format:

```json
{
  "routes": [
    {
      "pool_id": "1",
      "token_out_denom": "ubadge"
    },
    {
      "pool_id": "4",
      "token_out_denom": "ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701"
    }
  ],
  "token_in": {
    "denom": "badgeslp:64:utoken",
    "amount": "10"
  },
  "token_out_min_amount": "900000",
  "affiliates": []
}
```

Each route names the pool and the denom that comes out of it. The input denom of hop N+1 is the output denom of hop N.

## Common error messages

### `poolId cannot be zero`

The pool ID is 0 or the JSON key did not match.

```solidity
// Correct
require(poolId > 0, "Invalid pool ID");
string memory json = GammJSONHelpers.joinPoolJSON(poolId, shareOutAmount, tokenInMaxsJson);

// Wrong
uint64 poolId = 0;  // Will fail validation
```

### `amount must be greater than zero`

The amount is zero or not formatted as an integer string.

```solidity
// Correct
require(amount > 0, "Amount must be positive");
string memory amountStr = GammJSONHelpers.uintToString(amount);

// Wrong
uint256 amount = 0;  // Will fail validation
```

### `invalid JSON syntax`

The JSON is malformed or uses the wrong types.

```solidity
// Correct: use helper functions
string memory json = GammJSONHelpers.joinPoolJSON(poolId, shareOutAmount, tokenInMaxsJson);

// Wrong: manual construction prone to errors
string memory json = string(abi.encodePacked(
    '{"pool_id":', GammJSONHelpers.uintToString(poolId),  // Missing quotes: the number is not a string
    ',"share_out_amount":', GammJSONHelpers.uintToString(shareOutAmount), '}'
));
```

### `denom cannot be empty`

```solidity
// Correct
require(bytes(denom).length > 0, "Denom cannot be empty");
string memory json = GammJSONHelpers.joinPoolJSON(poolId, shareAmount, tokenInMaxsJson);

// Wrong
string memory denom = "";  // Will fail validation
```

## Checklist

1. Use the helper functions for JSON. They handle type conversion.
2. Validate pool IDs, amounts, and denoms before building JSON.
3. Set `token_in_maxs`, `token_out_mins`, or `token_out_min_amount` on every call.
4. Convert human-readable amounts to the smallest unit.
5. Match the return type: tuple, `Coin[]`, `Coin`, `uint256`, `string`, or `bytes`.
6. Test with small amounts first.

## Debugging

Log the JSON before sending:

```solidity
import "hardhat/console.sol";

string memory json = GammJSONHelpers.joinPoolJSON(poolId, shareOutAmount, tokenInMaxsJson);
console.log("JSON:", json);  // Verify format
```

Check return values:

```solidity
(uint256 shares, GammTypes.Coin[] memory tokens) = GAMM.joinPool(json);
console.log("Shares:", shares);
for (uint i = 0; i < tokens.length; i++) {
    console.log("Token:", tokens[i].denom, tokens[i].amount);
}
```

Use a static call to test without sending a transaction:

```typescript
// Test without sending a transaction (ethers.js v6 against the precompile address)
const gamm = new ethers.Contract("0x0000000000000000000000000000000000001002", gammAbi, signer);
const [shares] = await gamm.joinPool.staticCall(json);
console.log("Expected shares:", shares);
```

## Related

- [GAMM precompile](README.md)
- [GAMM precompile API](api.md)
- [GAMM module](../../modules/gamm/README.md)
- [Developer guide](../developer-guide.md)
