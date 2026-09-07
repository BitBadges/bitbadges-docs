---
description: "MsgUniversalUpdateCollection creates or updates a collection in one legacy interface. All other collection messages route through it."
---

# MsgUniversalUpdateCollection

Creates a collection when `collectionId` is `"0"` and updates one otherwise. It is the handler that `MsgCreateCollection`, `MsgUpdateCollection`, and every `MsgSet*` helper call internally. Prefer those messages; use this one when a single message must do both jobs.

## Example

```bash
bb tx tokenization universal-update-collection ./universal-update.json --from <key> --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgUniversalUpdateCollection } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

// Update an existing collection: grow validTokenIds only.
const msg = new MsgUniversalUpdateCollection({
  creator: client.address,
  collectionId: 1n,
  updateValidTokenIds: true,
  validTokenIds: [{ start: 1n, end: 200n }],
  updateCollectionPermissions: false,
  updateManager: false,
  updateCollectionMetadata: false,
  updateTokenMetadata: false,
  updateCustomData: false,
  updateCollectionApprovals: false,
  updateStandards: false,
  updateIsArchived: false,
  mintEscrowCoinsToTransfer: [],
  cosmosCoinWrapperPathsToAdd: [],
  aliasPathsToAdd: []
});

const result = await client.signAndBroadcast([msg]);
```

Create (`collectionId: "0"`):

```json
{
  "creator": "bb1abc...",
  "collectionId": "0",
  "defaultBalances": {
    "balances": [],
    "outgoingApprovals": [],
    "incomingApprovals": [],
    "autoApproveSelfInitiatedOutgoingTransfers": false,
    "autoApproveSelfInitiatedIncomingTransfers": true,
    "autoApproveAllIncomingTransfers": false,
    "userPermissions": {
      "canUpdateOutgoingApprovals": [],
      "canUpdateIncomingApprovals": [],
      "canUpdateAutoApproveSelfInitiatedOutgoingTransfers": [],
      "canUpdateAutoApproveSelfInitiatedIncomingTransfers": [],
      "canUpdateAutoApproveAllIncomingTransfers": []
    }
  },
  "updateValidTokenIds": true,
  "validTokenIds": [{ "start": "1", "end": "100" }],
  "updateCollectionPermissions": true,
  "collectionPermissions": {
    "canDeleteCollection": [],
    "canArchiveCollection": [],
    "canUpdateStandards": [],
    "canUpdateCustomData": [],
    "canUpdateManager": [],
    "canUpdateCollectionMetadata": [],
    "canUpdateValidTokenIds": [],
    "canUpdateTokenMetadata": [],
    "canUpdateCollectionApprovals": [],
    "canAddMoreAliasPaths": [],
    "canAddMoreCosmosCoinWrapperPaths": []
  },
  "updateManager": true,
  "manager": "bb1abc...",
  "updateCollectionMetadata": true,
  "collectionMetadata": { "uri": "https://example.com/collection.json", "customData": "" },
  "updateTokenMetadata": true,
  "tokenMetadata": [],
  "updateCustomData": true,
  "customData": "",
  "updateCollectionApprovals": true,
  "collectionApprovals": [],
  "updateStandards": true,
  "standards": [],
  "updateIsArchived": true,
  "isArchived": false,
  "mintEscrowCoinsToTransfer": [],
  "cosmosCoinWrapperPathsToAdd": [],
  "aliasPathsToAdd": [],
  "invariants": {
    "noCustomOwnershipTimes": true,
    "maxSupplyPerId": "0",
    "noForcefulPostMintTransfers": false,
    "disablePoolCreation": false,
    "evmQueryChallenges": []
  }
}
```

Update (`collectionId` set): same shape without `defaultBalances` and without `invariants`. Including `invariants` on an update fails with `ErrInvariantsImmutable`.

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Anyone for create; the manager (or x/gov) for update. |
| `collectionId` | Uint | yes | `"0"` to create. An existing ID to update. |
| `defaultBalances` | `UserBalanceStore` | no | Creation only. Ignored on update. |
| `updateValidTokenIds`, `validTokenIds` | bool, `UintRange[]` | no | Token IDs. Must merge to one range starting at 1. |
| `updateCollectionPermissions`, `collectionPermissions` | bool, `CollectionPermissions` | no | Applied after every other change. |
| `updateManager`, `manager` | bool, string | no | On create, the manager defaults to `creator` if the flag is `false`. |
| `updateCollectionMetadata`, `collectionMetadata` | bool, `CollectionMetadata` | no | |
| `updateTokenMetadata`, `tokenMetadata` | bool, `TokenMetadata[]` | no | |
| `updateCustomData`, `customData` | bool, string | no | |
| `updateCollectionApprovals`, `collectionApprovals` | bool, `CollectionApproval[]` | no | Full replacement list. |
| `updateStandards`, `standards` | bool, string[] | no | |
| `updateIsArchived`, `isArchived` | bool, bool | no | |
| `mintEscrowCoinsToTransfer` | `Coin[]` | no | Sent from `creator` to `mintEscrowAddress`. |
| `cosmosCoinWrapperPathsToAdd` | `CosmosCoinWrapperPathAddObject[]` | no | `denom`, `conversion`, `symbol`, `denomUnits`, `allowOverrideWithAnyValidToken`, `metadata`. |
| `aliasPathsToAdd` | `AliasPathAddObject[]` | no | `denom`, `conversion`, `symbol`, `denomUnits`, `metadata`. |
| `invariants` | `InvariantsAddObject` | no | Creation only. |

## Response

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | Uint | Created or updated collection. |
| `approvalChanges` | `ApprovalChange[]` | Set only when `updateCollectionApprovals` is `true`. |
| `reviewItems` | string[] | Advisory notes. |

## Behavior

Order of operations in the handler:

1. Validate the message (`CheckAndCleanMsg`): valid creator, valid ranges, metadata, approvals, custom data.
2. Create: allocate the next collection ID, derive `mintEscrowAddress`, set `createdBy` and `manager` to `creator`, and convert `invariants`. Update: load the collection or fail with `ErrCollectionNotExists`.
3. Require the signer to be the current manager (`ErrSenderIsNotManager`). The x/gov authority bypasses this check.
4. Apply `isArchived` if flagged (checked against `canArchiveCollection` when the value changes). If the collection was archived and stays archived, fail with `ErrCollectionIsArchived`.
5. Apply collection approvals: validate against `canUpdateCollectionApprovals` and invariants, force `mustPrioritize` on approvals that cannot be auto-scanned, resolve `mustOwnTokens.collectionId: "0"` to self, and bump `version` only for new or changed approvals.
6. Apply collection metadata, token metadata, manager, standards, and custom data, each against its permission.
7. Apply `validTokenIds`. Only IDs not already valid are checked against `canUpdateValidTokenIds`.
8. Send `mintEscrowCoinsToTransfer` from the creator to the escrow address.
9. Add wrapper paths (needs `canAddMoreCosmosCoinWrapperPaths`) and alias paths (needs `canAddMoreAliasPaths`). Wrapper path addresses are derived from the denom, marked as reserved protocol addresses, and given auto-approve flags.
10. Apply invariants (create only). A backed path gets a derived, reserved address.
11. Reject duplicate wrapper denoms, duplicate alias denoms, alias denoms that collide with wrapper denoms, duplicate symbols across all paths, zero decimals, duplicate decimals in one path, and more than one `isDefaultDisplay` unit.
12. Apply `collectionPermissions` last. A permission cannot re-permit a permanently forbidden time.
13. If a backed path exists, prepend a permanent permission that forbids changes to any approval with `fromListId: "Mint"`.
14. Any approval whose `fromListId` includes `Mint` must be a whitelist of only `Mint` and must set `overridesFromOutgoingApprovals: true`.
15. Store the collection, emit events, and compute `approvalChanges` and `reviewItems`.

## Related

- [MsgCreateCollection](msg-create-collection.md)
- [MsgUpdateCollection](msg-update-collection.md)
- [Collections](../concepts/collections.md)
- [Invariants](../approval-criteria/invariants.md)
