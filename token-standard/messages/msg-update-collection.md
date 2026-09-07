---
description: "MsgUpdateCollection updates an existing collection's fields with update flags. Manager only, permissions enforced."
---

# MsgUpdateCollection

Updates fields of an existing collection. Only the current manager can sign it, and every change must be allowed by the permissions that were in effect before the message.

## Example

```bash
bb tx tokenization update-collection ./update-collection.json --from alice --chain-id bitbadges-1
```

```ts fold=14-24
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgUpdateCollection } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

// Grow the collection to 200 token IDs and point their metadata at the same URI.
const msg = new MsgUpdateCollection({
  creator: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
  collectionId: 1n,
  updateValidTokenIds: true,
  validTokenIds: [{ start: 1n, end: 200n }],
  updateCollectionPermissions: false,
  collectionPermissions: {
    canDeleteCollection: [],
    canArchiveCollection: [],
    canUpdateStandards: [],
    canUpdateCustomData: [],
    canUpdateManager: [],
    canUpdateCollectionMetadata: [],
    canUpdateValidTokenIds: [],
    canUpdateTokenMetadata: [],
    canUpdateCollectionApprovals: [],
    canAddMoreAliasPaths: [],
    canAddMoreCosmosCoinWrapperPaths: []
  },
  updateManager: false,
  manager: '',
  updateCollectionMetadata: false,
  collectionMetadata: { uri: '', customData: '' },
  updateTokenMetadata: true,
  tokenMetadata: [
    {
      uri: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/{id}.json',
      customData: '',
      tokenIds: [{ start: 1n, end: 200n }]
    }
  ],
  updateCustomData: false,
  customData: '',
  updateCollectionApprovals: false,
  collectionApprovals: [],
  updateStandards: false,
  standards: [],
  updateIsArchived: false,
  isArchived: false,
  mintEscrowCoinsToTransfer: [],
  cosmosCoinWrapperPathsToAdd: [],
  aliasPathsToAdd: []
});

const result = await client.signAndBroadcast([msg]);
console.log(result.txHash, result.success);
```

```json fold=8-18
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionId": "1",
  "updateValidTokenIds": true,
  "validTokenIds": [{ "start": "1", "end": "200" }],
  "updateCollectionPermissions": false,
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
  "updateManager": false,
  "manager": "",
  "updateCollectionMetadata": false,
  "collectionMetadata": { "uri": "", "customData": "" },
  "updateTokenMetadata": true,
  "tokenMetadata": [
    {
      "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/{id}.json",
      "customData": "",
      "tokenIds": [{ "start": "1", "end": "200" }]
    }
  ],
  "updateCustomData": false,
  "customData": "",
  "updateCollectionApprovals": false,
  "collectionApprovals": [],
  "updateStandards": false,
  "standards": [],
  "updateIsArchived": false,
  "isArchived": false,
  "mintEscrowCoinsToTransfer": [],
  "cosmosCoinWrapperPathsToAdd": [],
  "aliasPathsToAdd": []
}
```

## Fields

Each updatable field pairs with an `update*` flag. When the flag is `true` the value replaces the stored value. When the flag is `false` the value is ignored, so placeholder data is safe.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Must be the current manager. |
| `collectionId` | Uint | yes | Collection to update. |
| `updateValidTokenIds`, `validTokenIds` | bool, `UintRange[]` | no | Add token IDs. Must stay one range from 1. Only newly added IDs are checked against `canUpdateValidTokenIds`. |
| `updateCollectionPermissions`, `collectionPermissions` | bool, `CollectionPermissions` | no | New permissions. Applied last; cannot re-open a permanently forbidden time. |
| `updateManager`, `manager` | bool, string | no | New manager. Checked against `canUpdateManager`. |
| `updateCollectionMetadata`, `collectionMetadata` | bool, `CollectionMetadata` | no | Checked against `canUpdateCollectionMetadata`. |
| `updateTokenMetadata`, `tokenMetadata` | bool, `TokenMetadata[]` | no | Checked against `canUpdateTokenMetadata` for the affected token IDs. |
| `updateCustomData`, `customData` | bool, string | no | Checked against `canUpdateCustomData`. |
| `updateCollectionApprovals`, `collectionApprovals` | bool, `CollectionApproval[]` | no | Full replacement list. Checked against `canUpdateCollectionApprovals`. |
| `updateStandards`, `standards` | bool, string[] | no | Checked against `canUpdateStandards`. |
| `updateIsArchived`, `isArchived` | bool, bool | no | Checked against `canArchiveCollection` when the value changes. |
| `mintEscrowCoinsToTransfer` | `Coin[]` | no | Coins sent from the creator to the mint escrow address. |
| `cosmosCoinWrapperPathsToAdd` | `CosmosCoinWrapperPathAddObject[]` | no | Needs `canAddMoreCosmosCoinWrapperPaths`. |
| `aliasPathsToAdd` | `AliasPathAddObject[]` | no | Needs `canAddMoreAliasPaths`. |

There is no `invariants` field. Invariants are creation-only; set them with [MsgCreateCollection](msg-create-collection.md).

## Response

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | Uint | The updated collection. |
| `approvalChanges` | `ApprovalChange[]` | Approvals created, edited, or deleted (only when `updateCollectionApprovals` is `true`). |
| `reviewItems` | string[] | Advisory notes. |

## Behavior

- The handler forwards to [MsgUniversalUpdateCollection](msg-universal-update-collection.md) with invariants omitted. Every rule there applies.
- Permission checks use the permissions stored before the message. New permissions in the same message apply last, so they take effect from the next transaction.
- The x/gov authority may sign in place of the manager.
- An archived collection rejects every update except one that sets `isArchived: false`.
- Collection approvals keep their `version` when unchanged. A new or changed approval gets an incremented version. Approvals that are not auto-scannable get `mustPrioritize` forced on.
- `mustOwnTokens` entries with `collectionId: "0"` resolve to this collection.
- Errors: `ErrCollectionNotExists`, `ErrSenderIsNotManager`, `ErrCollectionIsArchived`, plus the permission error for the field that was locked.

## Related

- [MsgUniversalUpdateCollection](msg-universal-update-collection.md)
- [Permissions](../concepts/permissions.md)
- [Lock permissions](../../guides/lock-permissions.md)
