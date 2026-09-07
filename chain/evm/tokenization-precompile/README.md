---
description: "The tokenization precompile at 0x...1001: the token standard from Solidity through JSON messages, with helpers, patterns, and executeMultiple."
---

# Tokenization precompile

The tokenization precompile exposes the whole `x/tokenization` module to Solidity contracts: transfers, collections, approvals, dynamic stores, address lists, votes, and every query. Address: `0x0000000000000000000000000000000000001001`.

## Example

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/ITokenizationPrecompile.sol";
import "./libraries/TokenizationJSONHelpers.sol";

contract MyTokenContract {
    ITokenizationPrecompile constant TOKENIZATION =
        ITokenizationPrecompile(0x0000000000000000000000000000000000001001);

    // Transfer tokens using JSON helper
    function transfer(
        uint256 collectionId,
        address to,
        uint256 amount,
        uint256 tokenId
    ) external returns (bool) {
        address[] memory recipients = new address[](1);
        recipients[0] = to;

        // Build JSON using helpers
        string memory tokenIdsJson = TokenizationJSONHelpers.uintRangeToJson(tokenId, tokenId);
        string memory ownershipTimesJson = TokenizationJSONHelpers.uintRangeToJson(1, TokenizationJSONHelpers.FOREVER);

        string memory transferJson = TokenizationJSONHelpers.transferTokensJSON(
            collectionId,
            recipients,
            amount,
            tokenIdsJson,
            ownershipTimesJson
        );

        return TOKENIZATION.transferTokens(transferJson);
    }

    // Query balance using JSON helper
    function balanceOf(
        uint256 collectionId,
        address user,
        uint256 tokenId
    ) external view returns (uint256) {
        string memory balanceJson = TokenizationJSONHelpers.getBalanceAmountJSON(
            collectionId,
            user,
            tokenId,
            block.timestamp * 1000
        );

        return TOKENIZATION.getBalanceAmount(balanceJson);
    }
}
```

## How it works

Every method takes one `string calldata msgJson`. The JSON is the protobuf JSON of the matching `x/tokenization` message or query request, the same shape the CLI and SDK use. See [Messages](../../../token-standard/messages/README.md) and [Queries](../../../token-standard/queries/README.md) for the field references.

```solidity
// Correct: JSON string
string memory json = TokenizationJSONHelpers.transferTokensJSON(
    collectionId, recipients, amount, tokenIdsJson, ownershipTimesJson
);
bool success = TOKENIZATION.transferTokens(json);

// Wrong: struct parameters (old interface)
TOKENIZATION.transferTokens(collectionId, recipients, amount, tokenIds, ownershipTimes);
```

On the Go side the precompile:

1. Unmarshals the JSON into the Msg with the module codec (proto JSON, camelCase keys, integers as strings).
2. Overwrites `creator` with the caller's bech32 address. A contract calling the precompile is the creator; see [Developer guide](../developer-guide.md#precompile-caller).
3. Converts `0x` addresses in address fields (`toAddresses`, `manager`, approval criteria, address lists) to bech32.
4. Runs `ValidateBasic`, then the module msg server.

Why JSON: it maps one-to-one to the protobuf messages, new fields never break the ABI, and one shape works across the EVM, CLI, and SDK. The helper libraries build the strings so you rarely write JSON by hand.

`TokenizationJSONHelpers` covers the common calls:

```solidity
import "./libraries/TokenizationJSONHelpers.sol";

// Simple operations
string memory json = TokenizationJSONHelpers.getCollectionJSON(collectionId);
bytes memory collection = TOKENIZATION.getCollection(json);

// Complex operations with ranges
string memory tokenIdsJson = TokenizationJSONHelpers.uintRangeToJson(1, 100);
string memory ownershipJson = TokenizationJSONHelpers.uintRangeToJson(block.timestamp, expiration);
```

Token IDs and ownership times are `UintRange` arrays:

```solidity
// Single range
string memory singleRange = TokenizationJSONHelpers.uintRangeToJson(start, end);

// Multiple ranges
uint256[] memory starts = new uint256[](2);
uint256[] memory ends = new uint256[](2);
starts[0] = 1; ends[0] = 100;
starts[1] = 200; ends[1] = 300;
string memory multiRange = TokenizationJSONHelpers.uintRangeArrayToJson(starts, ends);
```

Range ends are `uint64`. Use `TokenizationJSONHelpers.FOREVER`, never `type(uint256).max`.

## Methods

50 functions in the ABI: 25 transactions, 1 batch executor, 17 queries, 7 pure utilities. Full signatures and JSON on the [API page](api.md).

| Group | Methods |
| --- | --- |
| Transfers and approvals | `transferTokens`, `setIncomingApproval`, `setOutgoingApproval`, `deleteIncomingApproval`, `deleteOutgoingApproval`, `updateUserApprovals`, `purgeApprovals` |
| Collections | `createCollection`, `updateCollection`, `universalUpdateCollection`, `deleteCollection`, `setValidTokenIds`, `setManager`, `setCollectionMetadata`, `setTokenMetadata`, `setCustomData`, `setStandards`, `setCollectionApprovals`, `setIsArchived` |
| Dynamic stores | `createDynamicStore`, `updateDynamicStore`, `deleteDynamicStore`, `setDynamicStoreValue` |
| Lists and votes | `createAddressLists`, `castVote` |
| Batch | `executeMultiple` |
| Queries | `getCollection`, `getCollectionStats`, `getBalance`, `getBalanceAmount`, `getTotalSupply`, `getAddressList`, `getApprovalTracker`, `getChallengeTracker`, `getETHSignatureTracker`, `getDynamicStore`, `getDynamicStoreValue`, `getWrappableBalances`, `isAddressReservedProtocol`, `getAllReservedProtocolAddresses`, `getVote`, `getVotes`, `params` |
| Utilities (pure) | `convertEvmAddressToBech32`, `convertBech32ToEvmAddress`, `rangeContains`, `rangesOverlap`, `searchInRanges`, `getBalanceForIdAndTime`, `getReservedListId` |

Transaction methods return `bool success`, or a `uint256` for methods that create or update something (`createCollection`, `updateCollection`, `createDynamicStore`, the `set*` collection methods, `universalUpdateCollection`, `purgeApprovals`).

Query methods return `uint256` for `getBalanceAmount`, `getTotalSupply`, `getChallengeTracker`, `getETHSignatureTracker`, and `getWrappableBalances`; `bool` for `isAddressReservedProtocol`; `address[]` for `getAllReservedProtocolAddresses`; and protobuf-encoded `bytes` for everything else. See [Return values](#return-values).

## Patterns

### Simple token transfer

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/ITokenizationPrecompile.sol";
import "./libraries/TokenizationJSONHelpers.sol";

contract SimpleTransfer {
    ITokenizationPrecompile constant TOKENIZATION =
        ITokenizationPrecompile(0x0000000000000000000000000000000000001001);

    function transferToken(
        uint256 collectionId,
        address to,
        uint256 amount,
        uint256 tokenId
    ) external returns (bool) {
        address[] memory recipients = new address[](1);
        recipients[0] = to;

        // Full ownership (no expiration)
        string memory tokenIdsJson = TokenizationJSONHelpers.uintRangeToJson(tokenId, tokenId);
        string memory ownershipJson = TokenizationJSONHelpers.uintRangeToJson(1, TokenizationJSONHelpers.FOREVER);

        string memory transferJson = TokenizationJSONHelpers.transferTokensJSON(
            collectionId,
            recipients,
            amount,
            tokenIdsJson,
            ownershipJson
        );

        return TOKENIZATION.transferTokens(transferJson);
    }
}
```

### Time-bound transfer

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/ITokenizationPrecompile.sol";
import "./libraries/TokenizationJSONHelpers.sol";

contract TimeBoundTransfer {
    ITokenizationPrecompile constant TOKENIZATION =
        ITokenizationPrecompile(0x0000000000000000000000000000000000001001);

    function transferWithExpiration(
        uint256 collectionId,
        address to,
        uint256 amount,
        uint256 tokenId,
        uint256 expirationTime
    ) external returns (bool) {
        address[] memory recipients = new address[](1);
        recipients[0] = to;

        // Time-bound ownership
        string memory tokenIdsJson = TokenizationJSONHelpers.uintRangeToJson(tokenId, tokenId);
        string memory ownershipJson = TokenizationJSONHelpers.uintRangeToJson(
            block.timestamp,
            expirationTime
        );

        string memory transferJson = TokenizationJSONHelpers.transferTokensJSON(
            collectionId,
            recipients,
            amount,
            tokenIdsJson,
            ownershipJson
        );

        return TOKENIZATION.transferTokens(transferJson);
    }
}
```

Concept: [Balances](../../../token-standard/concepts/balances.md) (ownership times).

### KYC registry with a dynamic store

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/ITokenizationPrecompile.sol";
import "./libraries/TokenizationJSONHelpers.sol";

contract KycRegistry {
    ITokenizationPrecompile constant TOKENIZATION =
        ITokenizationPrecompile(0x0000000000000000000000000000000000001001);

    uint256 public kycRegistryId;

    function initializeKYCRegistry() external {
        string memory createJson = TokenizationJSONHelpers.createDynamicStoreJSON(
            false,  // defaultValue: not KYC'd by default
            "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json",
            "{\"type\":\"kyc\"}"
        );

        kycRegistryId = TOKENIZATION.createDynamicStore(createJson);
    }

    function setKYCStatus(address user, bool isKYCd) external {
        string memory setValueJson = TokenizationJSONHelpers.setDynamicStoreValueJSON(
            kycRegistryId,
            user,
            isKYCd
        );

        TOKENIZATION.setDynamicStoreValue(setValueJson);
    }

    function kycValueBytes(address user) external view returns (bytes memory) {
        string memory getValueJson = TokenizationJSONHelpers.getDynamicStoreValueJSON(
            kycRegistryId,
            user
        );

        // Protobuf-encoded QueryGetDynamicStoreValueResponse. Decode off-chain,
        // or let the chain enforce the store with a dynamic store challenge.
        return TOKENIZATION.getDynamicStoreValue(getValueJson);
    }
}
```

To enforce the registry on transfers without a contract in the loop, add a [dynamic store challenge](../../../token-standard/approval-criteria/dynamic-store-challenges.md) to the collection approvals.

### Create a collection

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/ITokenizationPrecompile.sol";
import "./libraries/TokenizationJSONHelpers.sol";

contract CollectionFactory {
    ITokenizationPrecompile constant TOKENIZATION =
        ITokenizationPrecompile(0x0000000000000000000000000000000000001001);

    function createMyCollection(
        string memory name,
        string memory symbol
    ) external returns (uint256) {
        // Build JSON components
        string memory validTokenIdsJson = TokenizationJSONHelpers.uintRangeToJson(1, 1000);

        string memory defaultBalancesJson = TokenizationJSONHelpers.simpleUserBalanceStoreToJson(
            true,   // autoApproveSelfInitiatedOutgoingTransfers
            true,   // autoApproveSelfInitiatedIncomingTransfers
            false   // autoApproveAllIncomingTransfers
        );

        string memory metadataJson = TokenizationJSONHelpers.collectionMetadataToJson(
            "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json",
            string(abi.encodePacked("{\"name\":\"", name, "\",\"symbol\":\"", symbol, "\"}"))
        );

        string[] memory standards = new string[](1);
        standards[0] = "ERC-3643";
        string memory standardsJson = TokenizationJSONHelpers.stringArrayToJson(standards);

        // Build complete JSON
        string memory createJson = TokenizationJSONHelpers.createCollectionJSON(
            validTokenIdsJson,
            TokenizationJSONHelpers.addressToString(address(this)),  // manager
            metadataJson,
            defaultBalancesJson,
            "{}",  // collectionPermissions (empty)
            standardsJson,
            "",    // customData
            false  // isArchived
        );

        return TOKENIZATION.createCollection(createJson);
    }
}
```

Invariants and cosmos coin wrapper paths can be set at creation through `createCollectionWithInvariantsJSON` or by writing the `invariants` and `cosmosCoinWrapperPathsToAdd` fields yourself. See [MsgCreateCollection](../../../token-standard/messages/msg-create-collection.md).

### Create a collection and transfer in one transaction

`executeMultiple` runs several messages atomically in one call.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/ITokenizationPrecompile.sol";
import "./libraries/TokenizationJSONHelpers.sol";

contract CreateAndTransfer {
    ITokenizationPrecompile constant TOKENIZATION =
        ITokenizationPrecompile(0x0000000000000000000000000000000000001001);

    function createAndTransfer(
        string memory name,
        address recipient,
        uint256 amount
    ) external returns (uint256 collectionId) {
        // Prepare messages array
        ITokenizationPrecompile.MessageInput[] memory messages = new ITokenizationPrecompile.MessageInput[](2);

        // Message 1: Create Collection
        string memory validTokenIdsJson = TokenizationJSONHelpers.uintRangeToJson(1, 1000);
        string memory defaultBalancesJson = TokenizationJSONHelpers.simpleUserBalanceStoreToJson(true, true, false);
        string memory metadataJson = TokenizationJSONHelpers.collectionMetadataToJson(
            "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json",
            string(abi.encodePacked("{\"name\":\"", name, "\"}"))
        );
        string[] memory standards = new string[](0);
        string memory standardsJson = TokenizationJSONHelpers.stringArrayToJson(standards);

        string memory createJson = TokenizationJSONHelpers.createCollectionJSON(
            validTokenIdsJson,
            TokenizationJSONHelpers.addressToString(address(this)),
            metadataJson,
            defaultBalancesJson,
            "{}",
            standardsJson,
            "",
            false
        );

        messages[0] = ITokenizationPrecompile.MessageInput({
            messageType: "createCollection",
            msgJson: createJson
        });

        // Message 2: Transfer Tokens (collectionId 0 = the collection created in the previous message)
        address[] memory recipients = new address[](1);
        recipients[0] = recipient;
        string memory tokenIdsJson = TokenizationJSONHelpers.uintRangeToJson(1, 1);
        string memory ownershipJson = TokenizationJSONHelpers.uintRangeToJson(1, TokenizationJSONHelpers.FOREVER);

        string memory transferJson = TokenizationJSONHelpers.transferTokensJSON(
            0,  // collectionId = 0 means "use previous collection" (auto-prev)
            recipients,
            amount,
            tokenIdsJson,
            ownershipJson
        );

        messages[1] = ITokenizationPrecompile.MessageInput({
            messageType: "transferTokens",
            msgJson: transferJson
        });

        // Execute both messages atomically
        (bool success, bytes[] memory results) = TOKENIZATION.executeMultiple(messages);
        require(success, "Multi-message execution failed");

        // Decode collectionId from first result
        collectionId = abi.decode(results[0], (uint256));

        // Verify transfer succeeded (second result is bool)
        bool transferSuccess = abi.decode(results[1], (bool));
        require(transferSuccess, "Transfer failed");

        return collectionId;
    }
}
```

Rules for `executeMultiple`:

- Atomic: all messages succeed or the whole call reverts, with the failing index and type in the error.
- Sequential, in array order. At most 50 messages per batch (`MaxMessagesPerBatch`).
- `messageType` is the method name string (`"createCollection"`, `"transferTokens"`, and so on). Any transaction method is accepted.
- Results come back as `bytes[]`. Decode each with `abi.decode(results[i], (bool))` or `(uint256)` according to the method's return type.
- `collectionId: "0"` in a later message refers to the collection created earlier in the same batch (the module's auto-prev rule).

## Helper library

`TokenizationJSONHelpers` has a builder for every method:

| Group | Functions |
| --- | --- |
| Transfers | `transferTokensJSON`, `uintRangeToJson`, `uintRangeArrayToJson`, `balanceToJson` |
| Collections | `createCollectionJSON`, `createCollectionWithInvariantsJSON`, `collectionMetadataToJson`, `simpleUserBalanceStoreToJson`, `stringArrayToJson`, `deleteCollectionJSON`, `setValidTokenIdsJSON`, `setManagerJSON`, `setCollectionMetadataJSON`, `setTokenMetadataJSON`, `setCustomDataJSON`, `setStandardsJSON`, `setCollectionApprovalsJSON`, `setIsArchivedJSON` |
| Approvals | `setIncomingApprovalJSON`, `setOutgoingApprovalJSON`, `deleteIncomingApprovalJSON`, `deleteOutgoingApprovalJSON`, `updateUserApprovalsJSON`, `purgeApprovalsJSON` |
| Dynamic stores | `createDynamicStoreJSON`, `updateDynamicStoreJSON`, `deleteDynamicStoreJSON`, `setDynamicStoreValueJSON`, `getDynamicStoreJSON`, `getDynamicStoreValueJSON` |
| Lists and votes | `createAddressListsJSON`, `getAddressListJSON`, `castVoteJSON`, `getVoteJSON`, `getVotesJSON` |
| Queries | `getCollectionJSON`, `getCollectionStatsJSON`, `getBalanceJSON`, `getBalanceAmountJSON`, `getTotalSupplyJSON`, `getApprovalTrackerJSON`, `getChallengeTrackerJSON`, `getWrappableBalancesJSON`, `isAddressReservedProtocolJSON`, `getAllReservedProtocolAddressesJSON`, `paramsJSON` |
| Utilities | `uintToString`, `addressToString`, constants `FOREVER`, `MAX_TIME`, `MAX_ID`, `MIN_ID`, `FOREVER_STR` |

The precompile's own pure utilities:

```solidity
// Address conversion
string memory bech32 = TOKENIZATION.convertEvmAddressToBech32(evmAddress);
address evm = TOKENIZATION.convertBech32ToEvmAddress("bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d");

// Range utilities
bool inRange = TOKENIZATION.rangeContains(10, 20, 15);  // true
bool overlap = TOKENIZATION.rangesOverlap(10, 20, 15, 25);  // true
bool found = TOKENIZATION.searchInRanges('[{"start":"1","end":"100"}]', 50);  // true

// Balance utilities
uint256 amount = TOKENIZATION.getBalanceForIdAndTime(balancesJson, tokenId, timestamp);

// List ID utilities
string memory listId = TOKENIZATION.getReservedListId(user);  // returns the bech32 form, e.g. bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
```

## Return values

`uint256` directly:

```solidity
uint256 balance = TOKENIZATION.getBalanceAmount(balanceJson);
uint256 supply = TOKENIZATION.getTotalSupply(supplyJson);
uint256 collectionId = TOKENIZATION.createCollection(createJson);
```

Protobuf `bytes` from `getCollection`, `getBalance`, `getCollectionStats`, `getAddressList`, `getApprovalTracker`, `getDynamicStore`, `getDynamicStoreValue`, `getVote`, `getVotes`, and `params`. The bytes are the marshalled gRPC response (for example `QueryGetCollectionResponse`). Options:

1. Prefer a direct query when one exists (`getBalanceAmount`, `getTotalSupply`, `getChallengeTracker`).
2. Extract single fields on-chain with `TokenizationDecoders` (`parseHolderCountFromStats`, `readVarint`). `contracts/test/MaxUniqueHoldersChecker.sol` shows this for an invariant.
3. Decode off-chain with the TypeScript SDK and pass the values back in as parameters, or emit the bytes in an event for an indexer.

Full protobuf decoding in Solidity is not implemented; the `decodeCollection`, `decodeBalance`, `decodeAddressList`, and `decodeDynamicStore` stubs revert.

## Security

1. `creator` is set from `msg.sender` on the Go side. A JSON `creator` value is ignored.
2. Invalid JSON reverts with a structured error and field path.
3. Array sizes are capped (100 recipients, 100 ranges, and so on). See [Security](security.md).
4. Cache JSON strings you reuse; construction costs gas.

## Best practices

Use the helpers:

```solidity
// Good: type-safe and readable
string memory json = TokenizationJSONHelpers.transferTokensJSON(
    collectionId, recipients, amount, tokenIdsJson, ownershipTimesJson
);

// Bad: error-prone manual construction
string memory json = string(abi.encodePacked(
    '{"collectionId":"', TokenizationJSONHelpers.uintToString(collectionId),
    '","transfers":[{"toAddresses":["', TokenizationJSONHelpers.addressToString(recipients[0]),
    '"],"balances":[{"amount":"', TokenizationJSONHelpers.uintToString(amount),
    '","tokenIds":', tokenIdsJson, ',"ownershipTimes":', ownershipTimesJson, '}]}]}'
));
```

Cache JSON you reuse:

```solidity
// Good: cache for reuse
string memory tokenIdsJson = TokenizationJSONHelpers.uintRangeToJson(1, 1000);
// Use tokenIdsJson multiple times

// Bad: reconstruct every time
// Rebuilding JSON on every call wastes gas
```

Validate before building:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/ITokenizationPrecompile.sol";
import "./libraries/TokenizationJSONHelpers.sol";

contract ValidatedTransfer {
    ITokenizationPrecompile constant TOKENIZATION =
        ITokenizationPrecompile(0x0000000000000000000000000000000000001001);

    function transfer(uint256 collectionId, address to, uint256 amount) external {
        require(collectionId > 0, "Invalid collection");
        require(to != address(0), "Invalid recipient");
        require(amount > 0, "Invalid amount");

        // Now build JSON
        address[] memory recipients = new address[](1);
        recipients[0] = to;
        string memory json = TokenizationJSONHelpers.transferTokensJSON(
            collectionId,
            recipients,
            amount,
            TokenizationJSONHelpers.uintRangeToJson(1, 1),
            TokenizationJSONHelpers.uintRangeToJson(1, TokenizationJSONHelpers.FOREVER)
        );
        TOKENIZATION.transferTokens(json);
    }
}
```

Check results:

```solidity
bool success = TOKENIZATION.transferTokens(transferJson);
if (!success) {
    // Handle failure - check events or revert with custom error
    revert TransferFailed();
}
```

Validate the batch in `executeMultiple`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/ITokenizationPrecompile.sol";
import "./libraries/TokenizationJSONHelpers.sol";

contract ValidatedBatch {
    ITokenizationPrecompile constant TOKENIZATION =
        ITokenizationPrecompile(0x0000000000000000000000000000000000001001);

    // Good: validate inputs before building messages
    function createAndTransfer(
        string memory name,
        address recipient,
        uint256 amount
    ) external returns (uint256 collectionId) {
        require(bytes(name).length > 0, "Name required");
        require(recipient != address(0), "Invalid recipient");
        require(amount > 0, "Amount must be positive");

        ITokenizationPrecompile.MessageInput[] memory messages = new ITokenizationPrecompile.MessageInput[](2);

        // Build messages
        string[] memory standards = new string[](0);
        string memory createCollectionJson = TokenizationJSONHelpers.createCollectionJSON(
            TokenizationJSONHelpers.uintRangeToJson(1, 1000),
            TokenizationJSONHelpers.addressToString(address(this)),
            TokenizationJSONHelpers.collectionMetadataToJson(
                "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json",
                string(abi.encodePacked("{\"name\":\"", name, "\"}"))
            ),
            TokenizationJSONHelpers.simpleUserBalanceStoreToJson(true, true, false),
            "{}",
            TokenizationJSONHelpers.stringArrayToJson(standards),
            "",
            false
        );
        messages[0] = ITokenizationPrecompile.MessageInput({
            messageType: "createCollection",
            msgJson: createCollectionJson
        });

        address[] memory recipients = new address[](1);
        recipients[0] = recipient;
        string memory transferTokensJson = TokenizationJSONHelpers.transferTokensJSON(
            0,
            recipients,
            amount,
            TokenizationJSONHelpers.uintRangeToJson(1, 1),
            TokenizationJSONHelpers.uintRangeToJson(1, TokenizationJSONHelpers.FOREVER)
        );
        messages[1] = ITokenizationPrecompile.MessageInput({
            messageType: "transferTokens",
            msgJson: transferTokensJson
        });

        // Execute atomically
        (bool success, bytes[] memory results) = TOKENIZATION.executeMultiple(messages);
        require(success, "Multi-message execution failed");

        // Decode and validate results
        require(results.length == 2, "Unexpected result count");
        collectionId = abi.decode(results[0], (uint256));
        require(collectionId > 0, "Invalid collection ID");

        bool transferSuccess = abi.decode(results[1], (bool));
        require(transferSuccess, "Transfer failed");

        return collectionId;
    }
}
```

## Examples

- [CarbonCreditToken](https://github.com/BitBadges/bitbadgeschain/blob/master/contracts/examples/CarbonCreditToken.sol): carbon credit tracking with vintages
- [TwoFactorSecurityToken](https://github.com/BitBadges/bitbadgeschain/blob/master/contracts/examples/TwoFactorSecurityToken.sol): 2FA-protected security tokens
- [RealEstateSecurityToken](https://github.com/BitBadges/bitbadgeschain/blob/master/contracts/examples/RealEstateSecurityToken.sol): ERC-3643 style real estate tokens
- [PrivateEquityToken](https://github.com/BitBadges/bitbadgeschain/blob/master/contracts/examples/PrivateEquityToken.sol): private equity fund tokens
- [ERC3643Template](https://github.com/BitBadges/bitbadgeschain/blob/master/contracts/templates/ERC3643Template.sol): the ERC-3643 template

## Related

- [API reference](api.md)
- [Errors](errors.md)
- [Gas](gas.md)
- [Security](security.md)
