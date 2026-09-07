---
description: "GetCollection returns the full on-chain record of a collection by ID."
---

# GetCollection

Returns the complete `TokenCollection` record for a collection ID.

## Example

```bash
bb query tokenization collection 1
```

```bash
curl https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/get_collection/1
```

## Request

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | string | Collection ID. |

## Response

```json
{
  "collection": {
    "collectionId": "1",
    "collectionMetadata": { "uri": "https://example.com/collection.json", "customData": "" },
    "tokenMetadata": [{ "uri": "https://example.com/{id}.json", "customData": "", "tokenIds": [{ "start": "1", "end": "100" }] }],
    "customData": "",
    "manager": "bb1manager...",
    "collectionPermissions": { "canDeleteCollection": [], "canArchiveCollection": [], "canUpdateStandards": [], "canUpdateCustomData": [], "canUpdateManager": [], "canUpdateCollectionMetadata": [], "canUpdateValidTokenIds": [], "canUpdateTokenMetadata": [], "canUpdateCollectionApprovals": [], "canAddMoreAliasPaths": [], "canAddMoreCosmosCoinWrapperPaths": [] },
    "collectionApprovals": [],
    "standards": [],
    "isArchived": false,
    "defaultBalances": { "balances": [], "outgoingApprovals": [], "incomingApprovals": [], "autoApproveSelfInitiatedOutgoingTransfers": true, "autoApproveSelfInitiatedIncomingTransfers": true, "autoApproveAllIncomingTransfers": false, "userPermissions": {} },
    "createdBy": "bb1creator...",
    "validTokenIds": [{ "start": "1", "end": "100" }],
    "mintEscrowAddress": "bb1escrow...",
    "cosmosCoinWrapperPaths": [],
    "aliasPaths": [],
    "invariants": { "noCustomOwnershipTimes": false, "maxSupplyPerId": "0", "noForcefulPostMintTransfers": false, "disablePoolCreation": false, "evmQueryChallenges": [] }
  }
}
```

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | Uint | ID. |
| `collectionMetadata` | `CollectionMetadata` | `uri`, `customData`. |
| `tokenMetadata` | `TokenMetadata[]` | Per-range metadata. |
| `customData` | string | Collection custom data. |
| `manager` | string | Current manager. |
| `collectionPermissions` | `CollectionPermissions` | Manager permissions. |
| `collectionApprovals` | `CollectionApproval[]` | Collection-level approvals with versions. |
| `standards` | string[] | Declared standards. |
| `isArchived` | bool | Read-only flag. |
| `defaultBalances` | `UserBalanceStore` | Defaults applied to addresses with no record. |
| `createdBy` | string | Creator. |
| `validTokenIds` | `UintRange[]` | Token IDs that exist. |
| `mintEscrowAddress` | string | Chain-derived escrow account for the collection. |
| `cosmosCoinWrapperPaths` | `CosmosCoinWrapperPath[]` | Wrapper paths with derived addresses. |
| `aliasPaths` | `AliasPath[]` | Alias denoms. |
| `invariants` | `CollectionInvariants` | Immutable rules set at creation. |

## Behavior

- Fails with `ErrCollectionNotExists` for an unknown ID.
- Balances are not included. Use [GetBalance](get-balance.md).

## Related

- [Collections](../concepts/collections.md)
- [GetCollectionStats](get-collection-stats.md)
- [GetBalance](get-balance.md)
