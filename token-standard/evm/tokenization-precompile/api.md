---
description: "Every function on the tokenization precompile from abi.json: 25 transactions, executeMultiple, 17 queries, 7 utilities, with signatures and JSON."
---

# Tokenization precompile API

Reference for all 50 functions on the tokenization precompile at `0x0000000000000000000000000000000000001001`, regenerated from `x/tokenization/precompile/abi.json`. Each method takes one `string calldata msgJson`, except `executeMultiple` and the pure utilities.

## Interface

```solidity
interface ITokenizationPrecompile {
    struct MessageInput {
        string messageType;  // e.g., "createCollection", "transferTokens"
        string msgJson;      // JSON matching the protobuf format
    }

    // Transaction methods
    function transferTokens(string calldata msgJson) external returns (bool success);
    function setIncomingApproval(string calldata msgJson) external returns (bool success);
    function setOutgoingApproval(string calldata msgJson) external returns (bool success);
    function deleteIncomingApproval(string calldata msgJson) external returns (bool success);
    function deleteOutgoingApproval(string calldata msgJson) external returns (bool success);
    function updateUserApprovals(string calldata msgJson) external returns (bool success);
    function purgeApprovals(string calldata msgJson) external returns (uint256 numPurged);
    function createCollection(string calldata msgJson) external returns (uint256 collectionId);
    function updateCollection(string calldata msgJson) external returns (uint256 collectionId);
    function universalUpdateCollection(string calldata msgJson) external returns (uint256 collectionId);
    function deleteCollection(string calldata msgJson) external returns (bool success);
    function setValidTokenIds(string calldata msgJson) external returns (uint256 collectionId);
    function setManager(string calldata msgJson) external returns (uint256 collectionId);
    function setCollectionMetadata(string calldata msgJson) external returns (uint256 collectionId);
    function setTokenMetadata(string calldata msgJson) external returns (uint256 collectionId);
    function setCustomData(string calldata msgJson) external returns (uint256 collectionId);
    function setStandards(string calldata msgJson) external returns (uint256 collectionId);
    function setCollectionApprovals(string calldata msgJson) external returns (uint256 collectionId);
    function setIsArchived(string calldata msgJson) external returns (uint256 collectionId);
    function createDynamicStore(string calldata msgJson) external returns (uint256 storeId);
    function updateDynamicStore(string calldata msgJson) external returns (bool success);
    function deleteDynamicStore(string calldata msgJson) external returns (bool success);
    function setDynamicStoreValue(string calldata msgJson) external returns (bool success);
    function createAddressLists(string calldata msgJson) external returns (bool success);
    function castVote(string calldata msgJson) external returns (bool success);
    function executeMultiple(MessageInput[] calldata messages) external returns (bool success, bytes[] memory results);

    // Query methods
    function getCollection(string calldata msgJson) external view returns (bytes memory collection);
    function getCollectionStats(string calldata msgJson) external view returns (bytes memory stats);
    function getBalance(string calldata msgJson) external view returns (bytes memory balance);
    function getBalanceAmount(string calldata msgJson) external view returns (uint256 amount);
    function getTotalSupply(string calldata msgJson) external view returns (uint256 amount);
    function getAddressList(string calldata msgJson) external view returns (bytes memory list);
    function getApprovalTracker(string calldata msgJson) external view returns (bytes memory tracker);
    function getChallengeTracker(string calldata msgJson) external view returns (uint256 numUsed);
    function getETHSignatureTracker(string calldata msgJson) external view returns (uint256 numUsed);
    function getDynamicStore(string calldata msgJson) external view returns (bytes memory store);
    function getDynamicStoreValue(string calldata msgJson) external view returns (bytes memory value);
    function getWrappableBalances(string calldata msgJson) external view returns (uint256 amount);
    function isAddressReservedProtocol(string calldata msgJson) external view returns (bool isReserved);
    function getAllReservedProtocolAddresses(string calldata msgJson) external view returns (address[] memory addresses);
    function getVote(string calldata msgJson) external view returns (bytes memory vote);
    function getVotes(string calldata msgJson) external view returns (bytes memory votes);
    function params(string calldata msgJson) external view returns (bytes memory params);

    // Utility methods (pure)
    function convertEvmAddressToBech32(address evmAddress) external pure returns (string memory bech32Address);
    function convertBech32ToEvmAddress(string calldata bech32Address) external pure returns (address evmAddress);
    function rangeContains(uint256 start, uint256 end, uint256 value) external pure returns (bool contains);
    function rangesOverlap(uint256 start1, uint256 end1, uint256 start2, uint256 end2) external pure returns (bool overlap);
    function searchInRanges(string calldata rangesJson, uint256 value) external pure returns (bool found);
    function getBalanceForIdAndTime(string calldata balancesJson, uint256 tokenId, uint256 time) external pure returns (uint256 amount);
    function getReservedListId(address addr) external pure returns (string memory listId);
}
```

The full interface with events and doc comments is [`contracts/interfaces/ITokenizationPrecompile.sol`](https://github.com/BitBadges/bitbadgeschain/blob/master/contracts/interfaces/ITokenizationPrecompile.sol).

## JSON rules

- The JSON is the protobuf JSON of the `x/tokenization` message or query request, decoded with the module codec. Field names are camelCase, exactly as on the [message pages](../../messages/README.md).
- Numbers are strings (`"123"`, never `123`). Booleans are raw (`true`). Arrays and objects are standard JSON.
- Addresses may be `0x` hex or `bb1` bech32. The precompile converts hex to bech32 in `toAddresses`, `manager`, approval criteria, address lists, and query address fields.
- `creator` is set from `msg.sender`. A value in the JSON is ignored.
- Unknown fields, wrong types, and missing required fields revert with code 1. See [Errors](errors.md).
- Invariants and cosmos coin wrapper paths are settable at creation (`createCollectionWithInvariantsJSON`); the chain README notes some deeply nested items may be skipped silently on conversion, so verify with `getCollection` after creation.

## Transaction methods

### transferTokens

Transfer tokens from the caller (or from an address that has approved the caller) to one or more recipients. Message: [MsgTransferTokens](../../messages/msg-transfer-tokens.md).

```solidity
function transferTokens(string calldata msgJson) external returns (bool success)
```

```json
{
  "collectionId": "123",
  "transfers": [
    {
      "from": "bb1sender...",
      "toAddresses": ["bb1recipient..."],
      "balances": [
        {
          "amount": "1000",
          "tokenIds": [{"start": "1", "end": "1"}],
          "ownershipTimes": [{"start": "1", "end": "18446744073709551615"}]
        }
      ],
      "prioritizedApprovals": [],
      "onlyCheckPrioritizedCollectionApprovals": false,
      "onlyCheckPrioritizedIncomingApprovals": false,
      "onlyCheckPrioritizedOutgoingApprovals": false
    }
  ]
}
```

`from` defaults to the caller. Set it to another address only when that address has granted the contract an outgoing approval. Other `Transfer` fields (`precalculateBalancesFromApproval`, `merkleProofs`, `ethSignatureProofs`, `memo`) are accepted as in the message.

Helper (the common single-balance case):

```solidity
string memory json = TokenizationJSONHelpers.transferTokensJSON(
    collectionId,
    recipients,        // address[] recipients
    amount,            // uint256
    tokenIdsJson,      // uintRangeToJson(...)
    ownershipTimesJson // uintRangeToJson(...)
);
```

Explicit `from` and balances with `balanceToJson`:

```solidity
string memory balancesJson = TokenizationJSONHelpers.balanceToJson(
    amount,
    TokenizationJSONHelpers.uintRangeToJson(1, 1),           // tokenIds
    TokenizationJSONHelpers.uintRangeToJson(1, TokenizationJSONHelpers.FOREVER)  // ownershipTimes
);

string memory transferJson = string(abi.encodePacked(
    '{"collectionId":"', TokenizationJSONHelpers.uintToString(collectionId),
    '","transfers":[{"from":"bb1sender...","toAddresses":["bb1recipient..."],',
    '"balances":[', balancesJson, ']}]}'
));

bool success = TOKENIZATION.transferTokens(transferJson);
```

Emits `precompile_transfer_tokens` with `collection_id`, `from`, `to_addresses`, `amount`, `token_ids`, `ownership_times`.

### setIncomingApproval

Set or replace one incoming approval on the caller's balance store. Message: [MsgSetIncomingApproval](../../messages/msg-set-incoming-approval.md).

```solidity
function setIncomingApproval(string calldata msgJson) external returns (bool success)
```

```json
{
  "collectionId": "123",
  "approval": {
    "fromListId": "All",
    "initiatedByListId": "All",
    "transferTimes": [{"start": "1", "end": "18446744073709551615"}],
    "tokenIds": [{"start": "1", "end": "100"}],
    "ownershipTimes": [{"start": "1", "end": "18446744073709551615"}],
    "approvalId": "accept-all",
    "approvalCriteria": {}
  }
}
```

Helper: `setIncomingApprovalJSON(collectionId, approvalJson)`; build the approval with `userIncomingApprovalToJson`. Addresses in `approvalCriteria` are converted from hex. Emits `precompile_set_incoming_approval`.

### setOutgoingApproval

Set or replace one outgoing approval on the caller's balance store. Message: [MsgSetOutgoingApproval](../../messages/msg-set-outgoing-approval.md).

```solidity
function setOutgoingApproval(string calldata msgJson) external returns (bool success)
```

```json
{
  "collectionId": "123",
  "approval": {
    "toListId": "All",
    "initiatedByListId": "bb1contract...",
    "transferTimes": [{"start": "1", "end": "18446744073709551615"}],
    "tokenIds": [{"start": "1", "end": "100"}],
    "ownershipTimes": [{"start": "1", "end": "18446744073709551615"}],
    "approvalId": "allow-contract",
    "approvalCriteria": {}
  }
}
```

Helper: `setOutgoingApprovalJSON(collectionId, approvalJson)` with `userOutgoingApprovalToJson`. Emits `precompile_set_outgoing_approval`.

### deleteIncomingApproval and deleteOutgoingApproval

Delete an approval by ID. Messages: [MsgDeleteIncomingApproval](../../messages/msg-delete-incoming-approval.md), [MsgDeleteOutgoingApproval](../../messages/msg-delete-outgoing-approval.md).

```solidity
function deleteIncomingApproval(string calldata msgJson) external returns (bool success)
function deleteOutgoingApproval(string calldata msgJson) external returns (bool success)
```

```json
{
  "collectionId": "123",
  "approvalId": "approval-123"
}
```

```solidity
string memory json = TokenizationJSONHelpers.deleteIncomingApprovalJSON(
    collectionId,
    approvalId
);

string memory json = TokenizationJSONHelpers.deleteOutgoingApprovalJSON(
    collectionId,
    approvalId
);
```

### updateUserApprovals

Replace the caller's outgoing approvals, incoming approvals, auto-approve flags, and user permissions in one message. Each group has an `update*` flag. Message: [MsgUpdateUserApprovals](../../messages/msg-update-user-approvals.md).

```solidity
function updateUserApprovals(string calldata msgJson) external returns (bool success)
```

```json
{
  "collectionId": "123",
  "updateOutgoingApprovals": true,
  "outgoingApprovals": [],
  "updateIncomingApprovals": false,
  "incomingApprovals": [],
  "updateAutoApproveSelfInitiatedOutgoingTransfers": true,
  "autoApproveSelfInitiatedOutgoingTransfers": true,
  "updateAutoApproveSelfInitiatedIncomingTransfers": false,
  "autoApproveSelfInitiatedIncomingTransfers": true,
  "updateAutoApproveAllIncomingTransfers": false,
  "autoApproveAllIncomingTransfers": false,
  "updateUserPermissions": false,
  "userPermissions": {}
}
```

Helper: `updateUserApprovalsJSON(...)`.

### purgeApprovals

Remove expired approvals, or counterparty approvals that name the caller, from a balance store. Returns the number purged. Message: [MsgPurgeApprovals](../../messages/msg-purge-approvals.md).

```solidity
function purgeApprovals(string calldata msgJson) external returns (uint256 numPurged)
```

```json
{
  "collectionId": "123",
  "purgeExpired": true,
  "approverAddress": "bb1...",
  "purgeCounterpartyApprovals": false,
  "approvalsToPurge": []
}
```

Helper: `purgeApprovalsJSON(...)`.

### createCollection

Create a collection. The caller becomes the creator; `manager` may be any address. Returns the new collection ID. Message: [MsgCreateCollection](../../messages/msg-create-collection.md).

```solidity
function createCollection(string calldata msgJson) external returns (uint256 collectionId)
```

```json
{
  "validTokenIds": [{"start": "1", "end": "1000"}],
  "manager": "bb1abc...",
  "collectionMetadata": {
    "uri": "ipfs://...",
    "customData": "{\"name\":\"My Token\"}"
  },
  "defaultBalances": {
    "autoApproveSelfInitiatedOutgoingTransfers": true,
    "autoApproveSelfInitiatedIncomingTransfers": true,
    "balances": []
  },
  "standards": ["ERC-3643"],
  "isArchived": false
}
```

Other accepted fields: `collectionPermissions`, `tokenMetadata`, `customData`, `collectionApprovals`, `mintEscrowCoinsToTransfer`, `cosmosCoinWrapperPathsToAdd`, `invariants`, `aliasPathsToAdd`.

```solidity
string memory json = TokenizationJSONHelpers.createCollectionJSON(
    validTokenIdsJson,        // Use uintRangeToJson or uintRangeArrayToJson
    manager,                   // address string (0x or bb1)
    collectionMetadataJson,   // Use collectionMetadataToJson
    defaultBalancesJson,      // Use simpleUserBalanceStoreToJson or custom JSON
    collectionPermissionsJson, // "{}" for empty
    standardsJson,             // Use stringArrayToJson
    customData,                // Optional string
    isArchived                 // bool
);
```

```solidity
string memory validTokenIdsJson = TokenizationJSONHelpers.uintRangeToJson(1, 1000);
string memory metadataJson = TokenizationJSONHelpers.collectionMetadataToJson(
    "ipfs://metadata",
    "{\"name\":\"My Token\"}"
);
string memory defaultBalancesJson = TokenizationJSONHelpers.simpleUserBalanceStoreToJson(
    true, true, false
);
string[] memory standards = new string[](1);
standards[0] = "ERC-3643";
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

uint256 collectionId = TOKENIZATION.createCollection(createJson);
```

Emits `CollectionCreated`.

### updateCollection

Update the fields of a collection that the caller (the manager) is permitted to change. Each field has an `update*` flag. Returns the collection ID. Message: [MsgUpdateCollection](../../messages/msg-update-collection.md).

```solidity
function updateCollection(string calldata msgJson) external returns (uint256 collectionId)
```

```json
{
  "collectionId": "123",
  "updateCollectionMetadata": true,
  "collectionMetadata": {"uri": "ipfs://new", "customData": ""},
  "updateManager": false,
  "updateValidTokenIds": false,
  "updateCollectionPermissions": false,
  "updateTokenMetadata": false,
  "updateCustomData": false,
  "updateCollectionApprovals": false,
  "updateStandards": false,
  "updateIsArchived": false
}
```

Emits `CollectionUpdated`.

### universalUpdateCollection

The superset message: create (`collectionId` `"0"`) or update a collection, with `defaultBalances` and every `update*` flag from `updateCollection`. Returns the collection ID. Message: [MsgUniversalUpdateCollection](../../messages/msg-universal-update-collection.md).

```solidity
function universalUpdateCollection(string calldata msgJson) external returns (uint256 collectionId)
```

```json
{
  "collectionId": "0",
  "defaultBalances": {"autoApproveSelfInitiatedOutgoingTransfers": true, "autoApproveSelfInitiatedIncomingTransfers": true, "balances": []},
  "updateValidTokenIds": true,
  "validTokenIds": [{"start": "1", "end": "100"}],
  "updateManager": true,
  "manager": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  "updateCollectionMetadata": true,
  "collectionMetadata": {"uri": "ipfs://...", "customData": ""},
  "updateCollectionPermissions": false,
  "updateTokenMetadata": false,
  "updateCustomData": false,
  "updateCollectionApprovals": false,
  "updateStandards": false,
  "updateIsArchived": false
}
```

### deleteCollection

Delete a collection. Only the manager with the `canDeleteCollection` permission can delete. Message: [MsgDeleteCollection](../../messages/msg-delete-collection.md).

```solidity
function deleteCollection(string calldata msgJson) external returns (bool success)
```

```json
{
  "collectionId": "123"
}
```

```solidity
string memory json = TokenizationJSONHelpers.deleteCollectionJSON(collectionId);
```

Emits `CollectionDeleted`.

### setValidTokenIds

Set the collection's valid token ID ranges and, optionally, lock the permission. Returns the collection ID. Message: [MsgSetValidTokenIds](../../messages/msg-set-valid-token-ids.md).

```solidity
function setValidTokenIds(string calldata msgJson) external returns (uint256 collectionId)
```

```json
{
  "collectionId": "123",
  "validTokenIds": [{"start": "1", "end": "2000"}],
  "canUpdateValidTokenIds": []
}
```

Helper: `setValidTokenIdsJSON(collectionId, validTokenIdsJson, canUpdateValidTokenIdsJson)`.

### setManager

Transfer the manager role. Returns the collection ID. Message: [MsgSetManager](../../messages/msg-set-manager.md).

```solidity
function setManager(string calldata msgJson) external returns (uint256 collectionId)
```

```json
{
  "collectionId": "123",
  "manager": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  "canUpdateManager": []
}
```

Helper: `setManagerJSON(collectionId, manager, canUpdateManagerJson)`. The hex manager address is converted to bech32.

### setCollectionMetadata

Set the collection metadata (`uri`, `customData`). Returns the collection ID. Message: [MsgSetCollectionMetadata](../../messages/msg-set-collection-metadata.md).

```solidity
function setCollectionMetadata(string calldata msgJson) external returns (uint256 collectionId)
```

```json
{
  "collectionId": "123",
  "collectionMetadata": {"uri": "ipfs://...", "customData": ""},
  "canUpdateCollectionMetadata": []
}
```

Helper: `setCollectionMetadataJSON(collectionId, collectionMetadataJson, canUpdateCollectionMetadataJson)`. URIs and customData are capped at 10,000 characters.

### setTokenMetadata

Set per-token-ID metadata. Returns the collection ID. Message: [MsgSetTokenMetadata](../../messages/msg-set-token-metadata.md).

```solidity
function setTokenMetadata(string calldata msgJson) external returns (uint256 collectionId)
```

```json
{
  "collectionId": "123",
  "tokenMetadata": [
    {"uri": "ipfs://.../{id}", "customData": "", "tokenIds": [{"start": "1", "end": "100"}]}
  ],
  "canUpdateTokenMetadata": []
}
```

Helper: `setTokenMetadataJSON(...)` with `tokenMetadataToJson`.

### setCustomData

Set the collection's `customData` string. Returns the collection ID. Message: [MsgSetCustomData](../../messages/msg-set-custom-data.md).

```solidity
function setCustomData(string calldata msgJson) external returns (uint256 collectionId)
```

```json
{
  "collectionId": "123",
  "customData": "{\"symbol\":\"MYT\"}",
  "canUpdateCustomData": []
}
```

Helper: `setCustomDataJSON(collectionId, customData, canUpdateCustomDataJson)`.

### setStandards

Set the collection's standards list. Returns the collection ID. Message: [MsgSetStandards](../../messages/msg-set-standards.md).

```solidity
function setStandards(string calldata msgJson) external returns (uint256 collectionId)
```

```json
{
  "collectionId": "123",
  "standards": ["ERC-3643"],
  "canUpdateStandards": []
}
```

Helper: `setStandardsJSON(collectionId, standardsJson, canUpdateStandardsJson)`.

### setCollectionApprovals

Replace the collection-level approvals. Returns the collection ID. Message: [MsgSetCollectionApprovals](../../messages/msg-set-collection-approvals.md).

```solidity
function setCollectionApprovals(string calldata msgJson) external returns (uint256 collectionId)
```

```json
{
  "collectionId": "123",
  "collectionApprovals": [
    {
      "fromListId": "Mint",
      "toListId": "All",
      "initiatedByListId": "bb1contract...",
      "transferTimes": [{"start": "1", "end": "18446744073709551615"}],
      "tokenIds": [{"start": "1", "end": "100"}],
      "ownershipTimes": [{"start": "1", "end": "18446744073709551615"}],
      "approvalId": "mint-by-contract",
      "approvalCriteria": {"overridesFromOutgoingApprovals": true}
    }
  ],
  "canUpdateCollectionApprovals": []
}
```

Helper: `setCollectionApprovalsJSON(...)` with `collectionApprovalToJson` and `collectionApprovalArrayToJson`. Hex addresses inside approvals and criteria are converted. Criteria reference: [Approval criteria](../../approval-criteria/README.md).

### setIsArchived

Archive or unarchive a collection. Returns the collection ID. Message: [MsgSetIsArchived](../../messages/msg-set-is-archived.md).

```solidity
function setIsArchived(string calldata msgJson) external returns (uint256 collectionId)
```

```json
{
  "collectionId": "123",
  "isArchived": false,
  "canArchiveCollection": []
}
```

Helper: `setIsArchivedJSON(collectionId, isArchived, canArchiveCollectionJson)`.

### createDynamicStore

Create a dynamic boolean store (for example a KYC registry). Returns the store ID. Message: [MsgCreateDynamicStore](../../messages/msg-create-dynamic-store.md).

```solidity
function createDynamicStore(string calldata msgJson) external returns (uint256 storeId)
```

```json
{
  "defaultValue": false,
  "uri": "ipfs://store-metadata",
  "customData": "{\"type\":\"kyc\"}"
}
```

```solidity
string memory json = TokenizationJSONHelpers.createDynamicStoreJSON(
    defaultValue,  // bool
    uri,           // string
    customData     // string
);
```

```solidity
string memory createJson = TokenizationJSONHelpers.createDynamicStoreJSON(
    false,
    "ipfs://kyc-registry",
    "{\"type\":\"kyc\"}"
);

uint256 storeId = TOKENIZATION.createDynamicStore(createJson);
```

Emits `DynamicStoreCreated`.

### updateDynamicStore

Update a store's default value, global enabled flag, or metadata. Only the store creator may update. Message: [MsgUpdateDynamicStore](../../messages/msg-update-dynamic-store.md).

```solidity
function updateDynamicStore(string calldata msgJson) external returns (bool success)
```

```json
{
  "storeId": "123",
  "defaultValue": false,
  "globalEnabled": true,
  "uri": "ipfs://...",
  "customData": ""
}
```

Helper: `updateDynamicStoreJSON(...)`.

### deleteDynamicStore

Delete a store. Only the creator may delete. Message: [MsgDeleteDynamicStore](../../messages/msg-delete-dynamic-store.md).

```solidity
function deleteDynamicStore(string calldata msgJson) external returns (bool success)
```

```json
{
  "storeId": "123"
}
```

Helper: `deleteDynamicStoreJSON(storeId)`.

### setDynamicStoreValue

Set the boolean for an address in a store. Only the creator may set. Message: [MsgSetDynamicStoreValue](../../messages/msg-set-dynamic-store-value.md).

```solidity
function setDynamicStoreValue(string calldata msgJson) external returns (bool success)
```

```json
{
  "storeId": "123",
  "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  "value": true
}
```

```solidity
string memory json = TokenizationJSONHelpers.setDynamicStoreValueJSON(
    storeId,  // uint256
    address_, // address
    value     // bool
);
```

```solidity
string memory setValueJson = TokenizationJSONHelpers.setDynamicStoreValueJSON(
    kycRegistryId,
    user,
    true
);

TOKENIZATION.setDynamicStoreValue(setValueJson);
```

### createAddressLists

Create one or more address lists. Message: [MsgCreateAddressLists](../../messages/msg-create-address-lists.md).

```solidity
function createAddressLists(string calldata msgJson) external returns (bool success)
```

```json
{
  "addressLists": [
    {
      "listId": "my-allowlist",
      "addresses": ["0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb", "bb1..."],
      "whitelist": true,
      "uri": "",
      "customData": ""
    }
  ]
}
```

Helper: `createAddressListsJSON(...)` with `addressListInputToJson`. At most 1,000 addresses per list. Emits `AddressListsCreated`. Concept: [Address lists](../../concepts/address-lists.md).

### castVote

Cast a vote on a voting challenge attached to an approval. Message: [MsgCastVote](../../messages/msg-cast-vote.md).

```solidity
function castVote(string calldata msgJson) external returns (bool success)
```

```json
{
  "collectionId": "123",
  "approvalLevel": "collection",
  "approverAddress": "",
  "approvalId": "gated-transfer",
  "proposalId": "proposal-1",
  "yesWeight": "1"
}
```

Helper: `castVoteJSON(...)`. Criteria: [Voting challenges](../../approval-criteria/voting-challenges.md).

### executeMultiple

Run several transaction messages in order, atomically, in one call.

```solidity
function executeMultiple(MessageInput[] calldata messages) external returns (bool success, bytes[] memory results)
```

```solidity
struct MessageInput {
    string messageType;  // Method name: "createCollection", "transferTokens", ...
    string msgJson;      // JSON for that method
}
```

```solidity
ITokenizationPrecompile.MessageInput[] memory messages = new ITokenizationPrecompile.MessageInput[](2);

// Message 1: Create Collection
string memory createJson = TokenizationJSONHelpers.createCollectionJSON(...);
messages[0] = ITokenizationPrecompile.MessageInput({
    messageType: "createCollection",
    msgJson: createJson
});

// Message 2: Transfer Tokens (using collectionId = 0 for auto-prev)
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

// Decode results
uint256 collectionId = abi.decode(results[0], (uint256));
bool transferSuccess = abi.decode(results[1], (bool));
```

Behavior:

- Every transaction method name is a valid `messageType`.
- Atomic: any failure reverts the whole batch. The error names the failing index and type.
- Sequential, in array order. At most 50 messages (`MaxMessagesPerBatch`).
- `collectionId: "0"` refers to the collection created earlier in the same transaction (the module's auto-prev rule, `resolveCollectionIdWithAutoPrev`).
- Each result is ABI-encoded like the method's own return: `abi.decode(results[i], (bool))` or `(uint256)`.
- Gas: 10,000 base + 1,000 per message + 100 per 32-byte input chunk, then the transaction buffer. See [Gas](gas.md#executemultiple).

## Query methods

Most getters return the protobuf-encoded gRPC response as `bytes`. See [Return values](README.md#return-values) for how to use them. The request JSON is the query request type from the [queries reference](../../queries/README.md); `0x` addresses are converted.

### getCollection

Query: [GetCollection](../../queries/get-collection.md).

```solidity
function getCollection(string calldata msgJson) external view returns (bytes memory collection)
```

```json
{
  "collectionId": "123"
}
```

```solidity
string memory json = TokenizationJSONHelpers.getCollectionJSON(collectionId);
```

```solidity
string memory queryJson = TokenizationJSONHelpers.getCollectionJSON(collectionId);
bytes memory collection = TOKENIZATION.getCollection(queryJson);
// Protobuf-encoded QueryGetCollectionResponse; decode off-chain
```

### getCollectionStats

Holder count and circulating supply. Query: [GetCollectionStats](../../queries/get-collection-stats.md).

```solidity
function getCollectionStats(string calldata msgJson) external view returns (bytes memory stats)
```

```json
{
  "collectionId": "123"
}
```

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | string | Collection ID (uint as string) |

```solidity
string memory queryJson = string(abi.encodePacked(
    '{"collectionId":"', Strings.toString(collectionId), '"}'
));

bytes memory stats = TOKENIZATION.getCollectionStats(queryJson);
uint256 holders = TokenizationDecoders.parseHolderCountFromStats(stats);
```

`parseHolderCountFromStats` reads the holder count from the protobuf bytes on-chain. `contracts/test/MaxUniqueHoldersChecker.sol` uses it to enforce a holder cap as an invariant.

### getBalance

The full balance store for an address: balances, approvals, permissions. Query: [GetBalance](../../queries/get-balance.md).

```solidity
function getBalance(string calldata msgJson) external view returns (bytes memory balance)
```

```json
{
  "collectionId": "123",
  "address": "bb1..."
}
```

`userAddress` is accepted as an alias of `address`. Helper: `getBalanceJSON(collectionId, userAddress)`. For an amount, use `getBalanceAmount` instead.

### getBalanceAmount

The amount held for one `(tokenId, ownershipTime)` pair. Returns `uint256` directly. For range queries, use `getBalance` and process the store off-chain, or pass the balances JSON through `getBalanceForIdAndTime`.

```solidity
function getBalanceAmount(string calldata msgJson) external view returns (uint256 amount)
```

```json
{
  "collectionId": "123",
  "address": "bb1...",
  "tokenId": "1",
  "ownershipTime": "1609459200000"
}
```

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | string | Collection ID (uint as string) |
| `address` | string | User address (bech32 or 0x hex) |
| `tokenId` | string | Single token ID to query (uint as string) |
| `ownershipTime` | string | Single ownership time to query (uint as string, typically a ms timestamp) |

```solidity
// Build JSON manually or use a helper
string memory balanceJson = string(abi.encodePacked(
    '{"collectionId":"', Strings.toString(collectionId),
    '","address":"', userAddress,
    '","tokenId":"', Strings.toString(tokenId),
    '","ownershipTime":"', Strings.toString(block.timestamp * 1000),
    '"}'
));

uint256 balance = TOKENIZATION.getBalanceAmount(balanceJson);
```

Helper: `getBalanceAmountJSON(collectionId, userAddress, tokenId, ownershipTime)`. Emits `precompile_get_balance_amount`. Reverts with code 7 if the amount exceeds `uint256`.

### getTotalSupply

Total minted supply for one `(tokenId, ownershipTime)` pair. Returns `uint256`.

```solidity
function getTotalSupply(string calldata msgJson) external view returns (uint256 amount)
```

```json
{
  "collectionId": "123",
  "tokenId": "1",
  "ownershipTime": "1609459200000"
}
```

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | string | Collection ID (uint as string) |
| `tokenId` | string | Single token ID to query (uint as string) |
| `ownershipTime` | string | Single ownership time to query (uint as string, typically a ms timestamp) |

```solidity
string memory supplyJson = string(abi.encodePacked(
    '{"collectionId":"', Strings.toString(collectionId),
    '","tokenId":"', Strings.toString(tokenId),
    '","ownershipTime":"', Strings.toString(block.timestamp * 1000),
    '"}'
));

uint256 supply = TOKENIZATION.getTotalSupply(supplyJson);
```

Helper: `getTotalSupplyJSON(collectionId, tokenId, ownershipTime)`. Concept: [Minting and supply](../../concepts/minting-and-supply.md).

### getAddressList

Query: [GetAddressList](../../queries/get-address-list.md).

```solidity
function getAddressList(string calldata msgJson) external view returns (bytes memory list)
```

```json
{
  "listId": "my-list-id"
}
```

```solidity
string memory json = TokenizationJSONHelpers.getAddressListJSON(listId);
```

### getApprovalTracker

Tallied amounts and transfer counts for an approval tracker. Query: [GetApprovalTracker](../../queries/get-approval-tracker.md).

```solidity
function getApprovalTracker(string calldata msgJson) external view returns (bytes memory tracker)
```

```json
{
  "collectionId": "123",
  "approvalLevel": "collection",
  "approverAddress": "",
  "approvalId": "mint",
  "amountTrackerId": "mint",
  "trackerType": "overall",
  "approvedAddress": ""
}
```

Helper: `getApprovalTrackerJSON(...)`. `approverAddress` and `approvedAddress` accept hex. Criteria: [Approval trackers](../../approval-criteria/approval-trackers.md).

### getChallengeTracker

How many times a merkle challenge leaf has been used. Returns `uint256`. Query: [GetChallengeTracker](../../queries/get-challenge-tracker.md).

```solidity
function getChallengeTracker(string calldata msgJson) external view returns (uint256 numUsed)
```

```json
{
  "collectionId": "123",
  "approvalLevel": "collection",
  "approverAddress": "",
  "approvalId": "claim",
  "challengeTrackerId": "claim",
  "leafIndex": "0"
}
```

Helper: `getChallengeTrackerJSON(...)`. Criteria: [Merkle challenges](../../approval-criteria/merkle-challenges.md).

### getETHSignatureTracker

How many times an ETH signature has been used against an approval. Returns `uint256`. Query: [GetETHSignatureTracker](../../queries/get-eth-signature-tracker.md).

```solidity
function getETHSignatureTracker(string calldata msgJson) external view returns (uint256 numUsed)
```

```json
{
  "collectionId": "123",
  "approvalLevel": "collection",
  "approverAddress": "",
  "approvalId": "signed-claim",
  "challengeTrackerId": "signed-claim",
  "signature": "0x..."
}
```

Criteria: [ETH signature challenges](../../approval-criteria/eth-signature-challenges.md).

### getDynamicStore

Store configuration: creator, default value, global enabled flag, metadata. Query: [GetDynamicStore](../../queries/get-dynamic-store.md).

```solidity
function getDynamicStore(string calldata msgJson) external view returns (bytes memory store)
```

```json
{
  "storeId": "123"
}
```

Helper: `getDynamicStoreJSON(storeId)`.

### getDynamicStoreValue

The boolean for an address in a store, as protobuf bytes. Query: [GetDynamicStoreValue](../../queries/get-dynamic-store-value.md).

```solidity
function getDynamicStoreValue(string calldata msgJson) external view returns (bytes memory value)
```

```json
{
  "storeId": "123",
  "address": "bb1..."
}
```

```solidity
string memory json = TokenizationJSONHelpers.getDynamicStoreValueJSON(
    storeId,
    userAddress
);
```

```solidity
string memory getValueJson = TokenizationJSONHelpers.getDynamicStoreValueJSON(
    kycRegistryId,
    user
);

bytes memory result = TOKENIZATION.getDynamicStoreValue(getValueJson);
// Protobuf-encoded QueryGetDynamicStoreValueResponse. Decode off-chain, or
// enforce the store on-chain with a dynamic store challenge instead.
```

`userAddress` is accepted as an alias of `address`.

### getWrappableBalances

How much of a wrapped denom the address can unwrap back into collection tokens. Returns `uint256`. Query: [GetWrappableBalances](../../queries/get-wrappable-balances.md).

```solidity
function getWrappableBalances(string calldata msgJson) external view returns (uint256 amount)
```

```json
{
  "denom": "badges:123:mytoken",
  "address": "bb1..."
}
```

Helper: `getWrappableBalancesJSON(denom, address)`. Concept: [Cosmos coin wrapper paths](../../ibc/cosmos-coin-wrapper-paths.md).

### isAddressReservedProtocol

Whether an address is a reserved protocol address. Returns `bool`. The zero address returns `false`. Query: [IsAddressReservedProtocol](../../queries/is-address-reserved-protocol.md).

```solidity
function isAddressReservedProtocol(string calldata msgJson) external view returns (bool isReserved)
```

```json
{
  "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb"
}
```

Helper: `isAddressReservedProtocolJSON(address)`.

### getAllReservedProtocolAddresses

All reserved protocol addresses, returned as EVM addresses. Query: [GetAllReservedProtocolAddresses](../../queries/get-all-reserved-protocol-addresses.md).

```solidity
function getAllReservedProtocolAddresses(string calldata msgJson) external view returns (address[] memory addresses)
```

```json
{}
```

Helper: `getAllReservedProtocolAddressesJSON()`. Pass `"{}"` or an empty string.

### getVote

One voter's vote on a proposal. Query: [GetVote](../../queries/get-vote.md).

```solidity
function getVote(string calldata msgJson) external view returns (bytes memory vote)
```

```json
{
  "collectionId": "123",
  "approvalLevel": "collection",
  "approverAddress": "",
  "approvalId": "gated-transfer",
  "proposalId": "proposal-1",
  "voterAddress": "bb1..."
}
```

Helper: `getVoteJSON(...)`.

### getVotes

All votes on a proposal. Query: [GetVotes](../../queries/get-votes.md).

```solidity
function getVotes(string calldata msgJson) external view returns (bytes memory votes)
```

```json
{
  "collectionId": "123",
  "approvalLevel": "collection",
  "approverAddress": "",
  "approvalId": "gated-transfer",
  "proposalId": "proposal-1"
}
```

Helper: `getVotesJSON(...)`.

### params

Module parameters. Query: [Params](../../queries/params.md).

```solidity
function params(string calldata msgJson) external view returns (bytes memory params)
```

```json
{}
```

Helper: `paramsJSON()`. Also the cheapest connectivity check: `precompile.params("{}")`.

## Utility methods

Pure functions with no state access.

### convertEvmAddressToBech32

```solidity
function convertEvmAddressToBech32(address evmAddress) external pure returns (string memory bech32Address)
```

```solidity
string memory bech32 = TOKENIZATION.convertEvmAddressToBech32(msg.sender);
// Returns: "bb1qy2q3j4k5l6m7n8p9q0r..."
```

### convertBech32ToEvmAddress

```solidity
function convertBech32ToEvmAddress(string calldata bech32Address) external pure returns (address evmAddress)
```

```solidity
address evm = TOKENIZATION.convertBech32ToEvmAddress("bb1qy2q3j4k5l6m7n8p9q0r...");
// Returns: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb
```

### rangeContains

Inclusive check.

```solidity
function rangeContains(uint256 start, uint256 end, uint256 value) external pure returns (bool contains)
```

```solidity
bool isInRange = TOKENIZATION.rangeContains(10, 20, 15);
// Returns: true (15 is in [10, 20])

bool notInRange = TOKENIZATION.rangeContains(10, 20, 25);
// Returns: false (25 is not in [10, 20])
```

### rangesOverlap

```solidity
function rangesOverlap(uint256 start1, uint256 end1, uint256 start2, uint256 end2) external pure returns (bool overlap)
```

```solidity
bool overlap = TOKENIZATION.rangesOverlap(10, 20, 15, 25);
// Returns: true (ranges [10,20] and [15,25] overlap)

bool noOverlap = TOKENIZATION.rangesOverlap(10, 20, 25, 35);
// Returns: false (ranges [10,20] and [25,35] don't overlap)
```

### searchInRanges

Whether a value falls inside any range of a JSON range array.

```solidity
function searchInRanges(string calldata rangesJson, uint256 value) external pure returns (bool found)
```

```solidity
string memory rangesJson = '[{"start":"1","end":"100"},{"start":"200","end":"300"}]';

bool found = TOKENIZATION.searchInRanges(rangesJson, 50);
// Returns: true (50 is in [1,100])

bool notFound = TOKENIZATION.searchInRanges(rangesJson, 150);
// Returns: false (150 is not in any range)
```

### getBalanceForIdAndTime

The amount for a token ID and time inside a JSON balances array. Useful for balances you obtained off-chain or built yourself. This pure helper parses the legacy `badgeIds` key for the token ID ranges (the handler in `precompile.go` reads `badgeIds`, not `tokenIds`).

```solidity
function getBalanceForIdAndTime(string calldata balancesJson, uint256 tokenId, uint256 time) external pure returns (uint256 amount)
```

```solidity
string memory balancesJson = '[{"amount":"100","badgeIds":[{"start":"1","end":"10"}],"ownershipTimes":[{"start":"0","end":"18446744073709551615"}]}]';

uint256 amount = TOKENIZATION.getBalanceForIdAndTime(balancesJson, 5, block.timestamp * 1000);
// Returns: 100 (token ID 5 is in range [1,10] and time is in [0, max])

uint256 notFound = TOKENIZATION.getBalanceForIdAndTime(balancesJson, 15, block.timestamp * 1000);
// Returns: 0 (token ID 15 is not in any range)
```

### getReservedListId

The reserved address list ID for an address, which is its bech32 form. Every address has an implicit list containing only itself.

```solidity
function getReservedListId(address addr) external pure returns (string memory listId)
```

```solidity
string memory listId = TOKENIZATION.getReservedListId(msg.sender);
// Returns: "bb1qy2q3j4k5l6m7n8p9q0r..." (the bech32 address)
```

To test whether a list ID is `"All"`, compare the string: `keccak256(bytes(listId)) == keccak256(bytes("All"))`. Reserved IDs: [Address lists](../../concepts/address-lists.md).

## Helper library reference

Building blocks in `TokenizationJSONHelpers`:

```solidity
string memory json = TokenizationJSONHelpers.uintRangeToJson(1, 100);
// Returns: [{"start":"1","end":"100"}]
```

```solidity
uint256[] memory starts = new uint256[](2);
uint256[] memory ends = new uint256[](2);
starts[0] = 1; ends[0] = 100;
starts[1] = 200; ends[1] = 300;

string memory json = TokenizationJSONHelpers.uintRangeArrayToJson(starts, ends);
// Returns: [{"start":"1","end":"100"},{"start":"200","end":"300"}]
```

```solidity
string memory json = TokenizationJSONHelpers.collectionMetadataToJson(
    "ipfs://metadata",
    "{\"name\":\"My Token\"}"
);
```

```solidity
string memory json = TokenizationJSONHelpers.simpleUserBalanceStoreToJson(
    true,   // autoApproveSelfInitiatedOutgoingTransfers
    true,   // autoApproveSelfInitiatedIncomingTransfers
    false   // autoApproveAllIncomingTransfers
);
```

```solidity
string[] memory standards = new string[](2);
standards[0] = "ERC-3643";
standards[1] = "Security Token";
string memory json = TokenizationJSONHelpers.stringArrayToJson(standards);
// Returns: ["ERC-3643","Security Token"]
```

```solidity
string memory str = TokenizationJSONHelpers.uintToString(123);
// Returns: "123"
```

Further builders: `balanceToJson`, `balanceArrayToJson`, `tokenMetadataToJson`, `collectionApprovalToJson`, `userOutgoingApprovalToJson`, `userIncomingApprovalToJson`, `collectionPermissionsToJson`, `userPermissionsToJson`, `evmQueryChallengeToJson`, `collectionInvariantsToJson`, `cosmosCoinWrapperPathToJson`, `aliasPathToJson`, `denomUnitToJson`, `addressListInputToJson`, `approvalIdentifierDetailsToJson`. Source: [`TokenizationJSONHelpers.sol`](https://github.com/BitBadges/bitbadgeschain/blob/master/contracts/libraries/TokenizationJSONHelpers.sol).

## Events

The precompile emits Cosmos events (`precompile_transfer_tokens`, `precompile_set_incoming_approval`, `precompile_set_outgoing_approval`, `precompile_get_balance_amount`) with `module=evm_precompile`. The Solidity interface declares the matching EVM events `TransferTokens`, `SetIncomingApproval`, `SetOutgoingApproval`, `CollectionCreated`, `CollectionUpdated`, `CollectionDeleted`, `AddressListsCreated`, `DynamicStoreCreated`. The module's own events are emitted too; see [WebSocket events](../../network/websocket-events.md).

## Related

- [Tokenization precompile](README.md)
- [Errors](errors.md)
- [Gas](gas.md)
- [Messages](../../messages/README.md)
