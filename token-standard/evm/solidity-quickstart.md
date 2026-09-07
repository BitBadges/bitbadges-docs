---
description: "Get from zero to a working Solidity contract on BitBadges precompiles in five minutes: constants, addresses, JSON helpers, common patterns, errors."
---

# Solidity quickstart

This page gets a Solidity developer to a working contract on the tokenization precompile in a few minutes. Read it before the full [API reference](tokenization-precompile/api.md).

## The essentials

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/ITokenizationPrecompile.sol";
import "./libraries/TokenizationJSONHelpers.sol";

contract MyToken {
    // Precompile address (same on all BitBadges networks)
    ITokenizationPrecompile constant PRECOMPILE =
        ITokenizationPrecompile(0x0000000000000000000000000000000000001001);

    function transfer(uint256 collectionId, address to, uint256 amount) external {
        address[] memory recipients = new address[](1);
        recipients[0] = to;

        // Use FOREVER, not type(uint256).max
        string memory tokenIds = TokenizationJSONHelpers.uintRangeToJson(1, 1);
        string memory times = TokenizationJSONHelpers.uintRangeToJson(
            1,
            TokenizationJSONHelpers.FOREVER
        );

        string memory json = TokenizationJSONHelpers.transferTokensJSON(
            collectionId, recipients, amount, tokenIds, times
        );

        require(PRECOMPILE.transferTokens(json), "Transfer failed");
    }
}
```

## Constants

BitBadges stores IDs and timestamps as `uint64`. `type(uint256).max` fails with a range overflow error.

```solidity
// Wrong: fails with "range overflow"
TokenizationJSONHelpers.uintRangeToJson(1, type(uint256).max);

// Correct: use the FOREVER constant
TokenizationJSONHelpers.uintRangeToJson(1, TokenizationJSONHelpers.FOREVER);
```

| Constant | Value | Use |
| --- | --- | --- |
| `FOREVER` | `18446744073709551615` | Ownership that never expires |
| `MAX_TIME` | `18446744073709551615` | Maximum timestamp |
| `MAX_ID` | `18446744073709551615` | Maximum token ID |
| `MIN_ID` | `1` | Minimum ID (ranges start at 1, not 0) |
| `FOREVER_STR` | `"18446744073709551615"` | The same value as a string, for hand-built JSON |

All four numeric constants equal `type(uint64).max` except `MIN_ID`. They are defined in both `TokenizationJSONHelpers` and `TokenizationHelpers`.

## Precompile addresses

| Precompile | Address | Purpose |
| --- | --- | --- |
| Tokenization | `0x0000000000000000000000000000000000001001` | Collections, transfers, balances |
| GAMM | `0x0000000000000000000000000000000000001002` | Liquidity pools, swaps |
| Send manager | `0x0000000000000000000000000000000000001003` | Native coin sends, alias denoms |

## Why JSON

BitBadges precompiles take JSON strings, not Solidity structs.

```solidity
// This is how BitBadges precompiles work:
precompile.transferTokens('{"collectionId":"1",...}');

// Not like ERC20:
token.transfer(to, amount);  // BitBadges does not use this pattern
```

The JSON maps directly to the Cosmos SDK protobuf messages, so the same shape works from the EVM, the CLI, and the SDK, and new fields do not break the interface. The helper libraries build the JSON for you; hand-written JSON is rare.

## Import the libraries

```solidity
// Interface for calling the precompile
import "./interfaces/ITokenizationPrecompile.sol";

// Helpers for constructing JSON (always use these)
import "./libraries/TokenizationJSONHelpers.sol";

// Helpers for constructing structs
import "./libraries/TokenizationHelpers.sol";

// Type definitions
import "./types/TokenizationTypes.sol";

// Error handling
import "./libraries/TokenizationErrors.sol";
```

The files live under [`contracts/`](https://github.com/BitBadges/bitbadgeschain/tree/master/contracts) in the chain repo.

## Common patterns

### Transfer tokens

```solidity
function transfer(
    uint256 collectionId,
    address to,
    uint256 amount,
    uint256 tokenId
) external returns (bool) {
    address[] memory recipients = new address[](1);
    recipients[0] = to;

    string memory tokenIds = TokenizationJSONHelpers.uintRangeToJson(tokenId, tokenId);
    string memory times = TokenizationJSONHelpers.uintRangeToJson(
        1, TokenizationJSONHelpers.FOREVER
    );

    string memory json = TokenizationJSONHelpers.transferTokensJSON(
        collectionId, recipients, amount, tokenIds, times
    );

    return PRECOMPILE.transferTokens(json);
}
```

### Check a balance

```solidity
function balanceOf(uint256 collectionId, address user) external view returns (uint256) {
    string memory json = TokenizationJSONHelpers.getBalanceAmountJSON(
        collectionId,
        user,
        1,  // tokenId
        block.timestamp  // ownershipTime
    );

    return PRECOMPILE.getBalanceAmount(json);
}
```

`ownershipTime` is a single point in time. Pass the same unit your collection uses for ownership times (the chain convention is milliseconds, so `block.timestamp * 1000` for wall-clock times).

### Create a collection

```solidity
function createCollection() external returns (uint256) {
    string memory validTokenIds = TokenizationJSONHelpers.uintRangeToJson(
        1, 1000  // Token IDs 1-1000
    );

    string memory metadata = TokenizationJSONHelpers.collectionMetadataToJson(
        "ipfs://my-metadata", ""
    );

    string memory balances = TokenizationJSONHelpers.simpleUserBalanceStoreToJson(
        true, true, false  // auto-approve settings
    );

    string[] memory standards = new string[](0);
    string memory standardsJson = TokenizationJSONHelpers.stringArrayToJson(standards);

    string memory json = TokenizationJSONHelpers.createCollectionJSON(
        validTokenIds,
        TokenizationJSONHelpers.addressToString(address(this)),  // manager
        metadata,
        balances,
        "{}",  // permissions (empty = default)
        standardsJson,
        "",    // customData
        false  // isArchived
    );

    return PRECOMPILE.createCollection(json);
}
```

### KYC registry (dynamic store)

```solidity
uint256 public kycStoreId;

function initKYC() external {
    string memory json = TokenizationJSONHelpers.createDynamicStoreJSON(
        false,  // default: not KYC'd
        "", ""  // metadata
    );
    kycStoreId = PRECOMPILE.createDynamicStore(json);
}

function setKYC(address user, bool status) external {
    string memory json = TokenizationJSONHelpers.setDynamicStoreValueJSON(
        kycStoreId, user, status
    );
    PRECOMPILE.setDynamicStoreValue(json);
}
```

## Error handling

```solidity
import "./libraries/TokenizationErrors.sol";

contract MyContract {
    function safeTransfer(...) external {
        // Validate before calling precompile
        TokenizationErrors.requireValidCollectionId(collectionId);

        try PRECOMPILE.transferTokens(json) returns (bool success) {
            require(success, "Transfer failed");
        } catch Error(string memory reason) {
            revert(reason);
        }
    }
}
```

Common errors:

- `"range overflow"`: use `FOREVER` instead of `type(uint256).max`.
- `"address cannot be empty"`: check the JSON field names.
- `"failed to unmarshal"`: invalid JSON format.

See [Errors](tokenization-precompile/errors.md) for the full list.

## UintRange

Token IDs and ownership times are arrays of inclusive ranges.

```solidity
// Single value: token ID 5
TokenizationJSONHelpers.uintRangeToJson(5, 5);
// Produces: [{"start":"5","end":"5"}]

// Range: token IDs 1-100
TokenizationJSONHelpers.uintRangeToJson(1, 100);
// Produces: [{"start":"1","end":"100"}]

// Forever ownership (never expires)
TokenizationJSONHelpers.uintRangeToJson(1, TokenizationJSONHelpers.FOREVER);
// Produces: [{"start":"1","end":"18446744073709551615"}]

// Multiple ranges
uint256[] memory starts = new uint256[](2);
uint256[] memory ends = new uint256[](2);
starts[0] = 1; ends[0] = 100;
starts[1] = 200; ends[1] = 300;
TokenizationJSONHelpers.uintRangeArrayToJson(starts, ends);
// Produces: [{"start":"1","end":"100"},{"start":"200","end":"300"}]
```

Concept page: [UintRanges](../concepts/uint-ranges.md).

## Address formats

```solidity
// In Solidity, use EVM addresses (0x...)
address user = 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb;

// Convert to Cosmos bech32 format if needed
string memory bech32 = PRECOMPILE.convertEvmAddressToBech32(user);
// Returns: "bb1ws5a0nfzue5cxetfmx56y0gu30aw7h08agd7fg"

// Convert back
address evm = PRECOMPILE.convertBech32ToEvmAddress("bb1...");
```

Both forms name the same account. Precompiles accept either form in JSON address fields and convert to bech32 internally.

## Utility methods

```solidity
// Address conversion
string memory bech32 = PRECOMPILE.convertEvmAddressToBech32(evmAddress);
address evm = PRECOMPILE.convertBech32ToEvmAddress(bech32Address);

// Range checks
bool inRange = PRECOMPILE.rangeContains(10, 20, 15);  // true
bool overlap = PRECOMPILE.rangesOverlap(10, 20, 15, 25);  // true

// Search in range array
bool found = PRECOMPILE.searchInRanges('[{"start":"1","end":"100"}]', 50);

// Get balance for specific token/time
uint256 amount = PRECOMPILE.getBalanceForIdAndTime(balancesJson, tokenId, timestamp);

// Get reserved list ID for address
string memory listId = PRECOMPILE.getReservedListId(userAddress);
```

## Quick reference

| Library | Purpose |
| --- | --- |
| `TokenizationJSONHelpers` | Build JSON strings for precompile calls |
| `TokenizationHelpers` | Build structs, constants, utilities |
| `TokenizationErrors` | Input validation, custom errors |
| `TokenizationTypes` | Type definitions |

| Method | Returns | Purpose |
| --- | --- | --- |
| `transferTokens(json)` | `bool` | Transfer tokens |
| `createCollection(json)` | `uint256` | Create collection, returns ID |
| `getBalanceAmount(json)` | `uint256` | Get balance amount |
| `createDynamicStore(json)` | `uint256` | Create store, returns ID |

## Related

- [Tokenization precompile API](tokenization-precompile/api.md)
- [Errors](tokenization-precompile/errors.md)
- [Example contracts](https://github.com/BitBadges/bitbadgeschain/tree/master/contracts/examples)
- [GAMM precompile](gamm-precompile/README.md)
