---
description: "Tokenization precompile errors: the nine codes from errors.go, the uint64 range trap, common failures with fixes, Solidity handling, debugging."
---

# Errors

Every tokenization precompile failure reverts with a `PrecompileError` in the form `precompile error [code=N]: message: details`. This page lists the codes, the common failures, and how to handle them in Solidity.

```solidity
try precompile.transferTokens(json) returns (bool success) {
    require(success, "Transfer failed");
} catch Error(string memory reason) {
    // reason = "precompile error [code=4]: transfer failed: ..."
    revert(reason);
}
```

## Error codes

From `x/tokenization/precompile/errors.go`.

| Code | Name | Message | Raised when |
| --- | --- | --- | --- |
| 1 | `InvalidInput` | `invalid input parameters` | Bad JSON, missing or mistyped field, failed `ValidateBasic`, zero address, invalid range, amount zero, size limit exceeded |
| 2 | `CollectionNotFound` | `collection not found` | The collection ID does not exist (`ErrCollectionNotExists`, `ErrInvalidCollectionID`) |
| 3 | `BalanceNotFound` | `balance not found` | The user balance store does not exist (`ErrUserBalanceNotExists`) |
| 4 | `TransferFailed` | `transfer failed` | Disallowed transfer, underflow (insufficient balance), overflow (`ErrDisallowedTransfer`, `ErrUnderflow`, `ErrOverflow`) |
| 5 | `ApprovalFailed` | `approval operation failed` | An approval message failed in the keeper |
| 6 | `QueryFailed` | `query failed` | Account, address list, or approval not found; other keeper query errors (`ErrAccountNotFound`, `ErrAddressListNotFound`, `ErrApprovalNotFound`, `ErrNotFound`) |
| 7 | `InternalError` | `internal error` | Nil response, marshal failure, value above `uint256` |
| 8 | `Unauthorized` | `unauthorized operation` | Zero-address caller, inadequate approvals, manager or permission checks (`ErrInadequateApprovals`, `ErrUnauthorized`) |
| 9 | `CollectionArchived` | `collection is archived (read-only)` | Write to an archived collection (`ErrCollectionIsArchived`) |

Keeper errors are mapped by `MapCosmosErrorToPrecompileError`; unmapped errors take the default code of the handler that caught them. Details are sanitized and truncated to 500 characters. Field-level input errors carry a path such as `field 'transfers[0].balances[0].amount': ...`.

## The uint64 trap

The most common error for new developers. IDs and timestamps are `uint64` on the chain.

```solidity
// Wrong: causes a range overflow error
string memory ownershipJson = TokenizationJSONHelpers.uintRangeToJson(1, type(uint256).max);

// Correct: use the FOREVER constant
string memory ownershipJson = TokenizationJSONHelpers.uintRangeToJson(
    1,
    TokenizationJSONHelpers.FOREVER  // = type(uint64).max = 18446744073709551615
);
```

| Constant | Value | Use |
| --- | --- | --- |
| `FOREVER` | `18446744073709551615` | Ownership times that never expire |
| `MAX_TIME` | `18446744073709551615` | Maximum valid timestamp |
| `MAX_ID` | `18446744073709551615` | Maximum valid token ID |
| `MIN_ID` | `1` | Minimum valid ID (ranges start at 1) |
| `FOREVER_STR` | `"18446744073709551615"` | For direct JSON string use |

Defined in both `TokenizationJSONHelpers` and `TokenizationHelpers`.

## Handling errors in Solidity

Basic:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/ITokenizationPrecompile.sol";
import "./libraries/TokenizationJSONHelpers.sol";

contract SafeTransfer {
    ITokenizationPrecompile constant precompile =
        ITokenizationPrecompile(0x0000000000000000000000000000000000001001);

    function safeTransfer(string memory json) external {
        try precompile.transferTokens(json) returns (bool success) {
            require(success, "Transfer failed");
        } catch Error(string memory reason) {
            // Precompile error with message
            revert(reason);
        } catch (bytes memory lowLevelData) {
            // Low-level error - decode if possible
            revert("Unknown precompile error");
        }
    }
}
```

With the `TokenizationErrors` library, which validates before the call:

```solidity
import "./libraries/TokenizationErrors.sol";

contract MyContract {
    using TokenizationErrors for *;

    function transfer(uint256 collectionId, string memory json) external {
        // Validate inputs before calling precompile
        TokenizationErrors.requireValidCollectionId(collectionId);
        TokenizationErrors.requireNonEmptyString(json, "JSON");

        bool success = precompile.transferTokens(json);
        require(success, "Transfer failed");
    }
}
```

## Common failures

### Range value overflow

```text
precompile error [code=1]: invalid input parameters: message validation failed: invalid balance times:
range at index 0 has end 115792089237316195423570985008687907853269984665640564039457584007913129639935
greater than max 18446744073709551615
```

Cause: `type(uint256).max` instead of `type(uint64).max`.

```solidity
// Use the FOREVER constant
string memory ownershipJson = TokenizationJSONHelpers.uintRangeToJson(
    1,
    TokenizationJSONHelpers.FOREVER
);

// Or use the MAX_TIME/MAX_ID constants from TokenizationHelpers
uint64 maxTime = TokenizationHelpers.MAX_TIME;
```

### Address cannot be empty

```text
precompile error [code=1]: invalid input parameters: address cannot be empty
```

Cause: a wrong field name, or an empty address. Query requests accept `userAddress` as an alias of `address` only for `getBalance` and `getDynamicStoreValue`; messages do not.

```solidity
// Wrong: "userAddress" is not a field of MsgSetDynamicStoreValue
'{"storeId":"1","userAddress":"0x0bc63cfe31d5218eb414b142c799e20964a54a1a","value":true}'

// Correct: use "address"
'{"storeId":"1","address":"0x0bc63cfe31d5218eb414b142c799e20964a54a1a","value":true}'

// Or use the helper
string memory json = TokenizationJSONHelpers.setDynamicStoreValueJSON(
    storeId,
    userAddress,  // address type, not string
    true
);
```

### Failed to unmarshal JSON

```text
failed to unmarshal JSON for method X: precompile error [code=1]: invalid input parameters: ...
```

Causes: invalid JSON syntax (missing quotes, commas, brackets); wrong field types (numbers as raw numbers, booleans as strings); missing required fields; unknown fields.

| Type | Correct | Wrong |
| --- | --- | --- |
| Numbers | `"123"` | `123` |
| Booleans | `true` / `false` | `"true"` / `"false"` |
| Addresses | `"0x0bc63cfe31d5218eb414b142c799e20964a54a1a"` | `0x0bc63cfe31d5218eb414b142c799e20964a54a1a` (unquoted) |
| Ranges | `[{"start":"1","end":"100"}]` | `[{start:1,end:100}]` |

```json
{
  "storeId": "123",
  "address": "0x0bc63cfe31d5218eb414b142c799e20964a54a1a",
  "value": true
}
```

### Collection not found

```text
precompile error [code=2]: collection not found: collectionId: 12345
```

```solidity
// Check collection exists before operations
try precompile.getCollection(TokenizationJSONHelpers.getCollectionJSON(collectionId)) {
    // Collection exists, proceed
} catch {
    revert("Collection does not exist");
}
```

### Insufficient balance

```text
precompile error [code=4]: transfer failed: underflow error: ...
```

Cause: the transfer exceeds what the sender holds for those token IDs and ownership times.

```solidity
// Check balance before transfer
uint256 balance = precompile.getBalanceAmount(
    TokenizationJSONHelpers.getBalanceAmountJSON(
        collectionId,
        msg.sender,
        tokenId,
        block.timestamp
    )
);
require(balance >= amount, "Insufficient balance");
```

Inside a contract, `msg.sender` here is the contract's own caller, but the precompile transfers from the contract's balance. Check the address that actually holds the tokens.

### Not authorized

```text
precompile error [code=8]: unauthorized operation: ...
```

Causes: the caller is not the collection manager; no approval covers the transfer; the permission is locked in the collection permissions; the time window for the operation has passed.

Debugging steps:

1. Check who the collection manager is (`getCollection`).
2. Verify the outgoing, incoming, and collection approvals cover the transfer.
3. Check whether the permission is locked (`permanentlyForbiddenTimes`).
4. Verify the current time is inside the allowed window.

```solidity
// Get collection to check manager
bytes memory collectionBytes = precompile.getCollection(
    TokenizationJSONHelpers.getCollectionJSON(collectionId)
);
// Decode off-chain and check the manager field

// For transfers, ensure approvals are set
// Check outgoing approval from sender
// Check incoming approval for recipient
```

Concepts: [Transferability](../../../token-standard/concepts/transferability.md), [Permissions](../../../token-standard/concepts/permissions.md).

### Collection archived

```text
precompile error [code=9]: collection is archived (read-only): collectionId: 123
```

```solidity
// If you are the manager and need to modify, unarchive first
string memory json = TokenizationJSONHelpers.setIsArchivedJSON(
    collectionId,
    false,  // unarchive
    "[]"    // canArchiveCollection permission
);
precompile.setIsArchived(json);
```

### Invalid range (start > end)

```text
precompile error [code=1]: invalid input parameters: invalid range: start 100 is greater than end 50
```

```solidity
// Validate ranges before building JSON
require(startTime <= endTime, "Invalid time range");
require(startTokenId <= endTokenId, "Invalid token ID range");

string memory rangeJson = TokenizationJSONHelpers.uintRangeToJson(startTime, endTime);
```

### EVM query challenge failed

A transfer gated by an [EVM query challenge](../../../token-standard/approval-criteria/evm-query-challenges.md) or an invariant fails as a transfer or authorization error (code 4 or 8) with the challenge result in the details, for example `contract returned 0, expected >= 1`.

Debugging:

1. Check which contract the challenge calls.
2. Verify the calldata (including `$sender` style placeholders).
3. Check the expected result and the comparison operator.
4. Confirm the target contract is deployed and returns a value.

```solidity
// Test the EVM query manually before using in invariants
(bool success, bytes memory result) = targetContract.staticcall(callData);
require(success, "EVM call failed");
uint256 value = abi.decode(result, (uint256));
require(value >= 1, "challenge would fail: contract returned 0, expected >= 1");
```

### Dynamic store not found

```text
precompile error [code=6]: query failed: ... store 999 does not exist
```

```solidity
// Verify store exists
try precompile.getDynamicStore(TokenizationJSONHelpers.getDynamicStoreJSON(storeId)) {
    // Store exists
} catch {
    // Create the store first
    uint256 newStoreId = precompile.createDynamicStore(
        TokenizationJSONHelpers.createDynamicStoreJSON(false, "", "")
    );
}
```

### Approval not found

```text
precompile error [code=6]: query failed: approval "my-approval" does not exist
```

Cause: deleting or referencing an approval ID that does not exist.

```solidity
// Approvals are identified by approvalId string. Delete inside try/catch so a
// missing approval does not revert the whole call.
try precompile.deleteOutgoingApproval(
    TokenizationJSONHelpers.deleteOutgoingApprovalJSON(collectionId, "my-approval")
) returns (bool) {
    // deleted
} catch Error(string memory reason) {
    // "precompile error [code=6]: query failed: approval \"my-approval\" does not exist"
    emit ApprovalMissing(reason);
}
```

### Invalid approval criteria

```text
precompile error [code=1]: invalid input parameters: message validation failed: merkle root is required for merkle challenge
```

Common causes: a merkle challenge without a root; voting criteria without a proposal ID; an approval tracker without limits. Field reference: [Approval criteria](../../../token-standard/approval-criteria/README.md).

## Debugging

Log the JSON before sending:

```solidity
// Emit event with JSON for debugging (remove in production)
event DebugJSON(string json);

function debugTransfer(uint256 collectionId, address to, uint256 amount) external {
    address[] memory recipients = new address[](1);
    recipients[0] = to;
    string memory json = TokenizationJSONHelpers.transferTokensJSON(
        collectionId,
        recipients,
        amount,
        TokenizationJSONHelpers.uintRangeToJson(1, 1),
        TokenizationJSONHelpers.uintRangeToJson(1, TokenizationJSONHelpers.FOREVER)
    );
    emit DebugJSON(json);
    precompile.transferTokens(json);
}
```

Validate the JSON outside the chain: copy it from the log, check it in a JSON validator, and compare field names against the [message page](../../../token-standard/messages/README.md).

Test components on their own:

```solidity
// Test range construction
string memory rangeJson = TokenizationJSONHelpers.uintRangeToJson(1, 100);
// Expected: [{"start":"1","end":"100"}]

// Test address conversion
string memory addrStr = TokenizationJSONHelpers.addressToString(0x0bc63cfe31d5218eb414b142c799e20964a54a1a);
// Expected: 0x0bc63cfe31d5218eb414b142c799e20964a54a1a
```

Check that the precompile responds:

```solidity
// Simple connectivity test
try precompile.params("{}") {
    // Precompile is responding
} catch {
    revert("Precompile not available");
}
```

Convert the caller for a Cosmos-side check:

```solidity
// Convert EVM address to bech32 for checking on Cosmos side
string memory bech32 = precompile.convertEvmAddressToBech32(0x0bc63cfe31d5218eb414b142c799e20964a54a1a);
// Returns: bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
```

## JSON quick reference

| Field type | JSON format | Example |
| --- | --- | --- |
| `uint256` | String | `"123456789"` |
| `uint64` | String | `"18446744073709551615"` |
| `bool` | Raw boolean | `true` or `false` |
| `address` | Hex string or bech32 | `"0x0bc63cfe31d5218eb414b142c799e20964a54a1a"` or `"bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"` |
| `string` | Quoted string | `"hello world"` |
| `UintRange[]` | Object array | `[{"start":"1","end":"100"}]` |
| `string[]` | String array | `["a","b","c"]` |
| Empty object | `{}` | `{}` |
| Empty array | `[]` | `[]` |

## Related

- [API reference](api.md)
- [Security](security.md)
- [Example contracts](https://github.com/BitBadges/bitbadgeschain/tree/master/contracts/examples)
- [Errors source](https://github.com/BitBadges/bitbadgeschain/blob/master/x/tokenization/precompile/errors.go)
