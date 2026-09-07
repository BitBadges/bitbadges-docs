---
description: "MsgSetCollectionApprovals replaces a collection's approvals and sets the canUpdateCollectionApprovals permission in one message."
---

# MsgSetCollectionApprovals

Sets the full list of collection-level approvals and the permission that guards future changes. Only the current manager can sign it. For multi-field updates use [MsgUpdateCollection](msg-update-collection.md).

## Example

```bash
bb tx tokenization set-setcollectionapprovals ./set-collection-approvals.json --from <manager-key> --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgSetCollectionApprovals } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const full = [{ start: 1n, end: 18446744073709551615n }];

const msg = new MsgSetCollectionApprovals({
  creator: client.address,
  collectionId: 1n,
  collectionApprovals: [
    {
      approvalId: 'transferable',
      fromListId: 'AllWithoutMint',
      toListId: 'All',
      initiatedByListId: 'All',
      transferTimes: full,
      tokenIds: full,
      ownershipTimes: full,
      uri: '',
      customData: '',
      version: 0n,
      approvalCriteria: undefined
    }
  ],
  canUpdateCollectionApprovals: []
});

const result = await client.signAndBroadcast([msg]);
```

```json
{
  "creator": "bb1manager...",
  "collectionId": "1",
  "collectionApprovals": [
    {
      "approvalId": "approval1",
      "fromListId": "list1",
      "toListId": "list2",
      "initiatedByListId": "list3",
      "transferTimes": [{ "start": "1000", "end": "2000" }],
      "tokenIds": [{ "start": "1", "end": "10" }],
      "ownershipTimes": [{ "start": "1", "end": "100" }],
      "uri": "",
      "customData": "",
      "approvalCriteria": {
        "mustOwnTokens": [],
        "merkleChallenges": [],
        "ethSignatureChallenges": [],
        "coinTransfers": [],
        "predeterminedBalances": null,
        "approvalAmounts": null,
        "autoDeletionOptions": null,
        "maxNumTransfers": null,
        "dynamicStoreChallenges": []
      }
    }
  ],
  "canUpdateCollectionApprovals": [
    {
      "fromListId": "list1",
      "toListId": "list2",
      "initiatedByListId": "list3",
      "transferTimes": [{ "start": "1000", "end": "2000" }],
      "tokenIds": [{ "start": "1", "end": "10" }],
      "ownershipTimes": [{ "start": "1", "end": "100" }],
      "approvalId": "approval1",
      "permanentlyPermittedTimes": [{ "start": "1000", "end": "2000" }],
      "permanentlyForbiddenTimes": []
    }
  ]
}
```

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Must be the current manager. |
| `collectionId` | Uint | yes | Collection to update. |
| `collectionApprovals` | `CollectionApproval[]` | yes | Full replacement list. Approvals not in the list are deleted. |
| `canUpdateCollectionApprovals` | `CollectionApprovalPermission[]` | no | New permission, scoped by the approval's lists, times, and IDs. |

## Response

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | Uint | The updated collection. |
| `approvalChanges` | `ApprovalChange[]` | Each approval created, edited, or deleted, with its new version. |
| `reviewItems` | string[] | Advisory notes. |

## Behavior

- Builds a [MsgUniversalUpdateCollection](msg-universal-update-collection.md) with `updateCollectionApprovals: true` and `updateCollectionPermissions: true`. Every other permission is copied from the stored collection.
- Every created, edited, or deleted approval is checked against the stored `canUpdateCollectionApprovals` and against the collection's invariants.
- Unchanged approvals keep their `version`. New or changed approvals get an incremented version, which invalidates `prioritizedApprovals` entries that pinned the old version.
- Approvals that cannot be auto-scanned get `mustPrioritize` forced on. `mustOwnTokens` with `collectionId: "0"` resolve to this collection.
- An approval with `Mint` in `fromListId` must be a whitelist of only `Mint` and set `overridesFromOutgoingApprovals: true`.
- Errors: `ErrCollectionNotExists`, `ErrSenderIsNotManager`, `ErrCollectionIsArchived`, permission forbidden, invariant violated.

## Related

- [MsgUpdateCollection](msg-update-collection.md)
- [Transferability](../concepts/transferability.md)
- [Approval criteria](../approval-criteria/README.md)
- [Set transferability](../../guides/set-transferability.md)
