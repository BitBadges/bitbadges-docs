---
description: "MsgUpdateUserApprovals replaces a user's outgoing and incoming approvals, auto-approve flags, and user permissions in one collection."
---

# MsgUpdateUserApprovals

Updates the signer's own approval settings for one collection. Each field has an update flag; only flagged fields change.

## Example

```bash
bb tx tokenization update-user-approved-transfers ./user-approvals.json --from <key> --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgUpdateUserApprovals } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgUpdateUserApprovals({
  creator: client.address,
  collectionId: 1n,
  updateOutgoingApprovals: false,
  outgoingApprovals: [],
  updateIncomingApprovals: false,
  incomingApprovals: [],
  updateAutoApproveSelfInitiatedOutgoingTransfers: true,
  autoApproveSelfInitiatedOutgoingTransfers: true,
  updateAutoApproveSelfInitiatedIncomingTransfers: false,
  autoApproveSelfInitiatedIncomingTransfers: true,
  updateAutoApproveAllIncomingTransfers: false,
  autoApproveAllIncomingTransfers: false,
  updateUserPermissions: false,
  userPermissions: {
    canUpdateOutgoingApprovals: [],
    canUpdateIncomingApprovals: [],
    canUpdateAutoApproveSelfInitiatedOutgoingTransfers: [],
    canUpdateAutoApproveSelfInitiatedIncomingTransfers: [],
    canUpdateAutoApproveAllIncomingTransfers: []
  }
});

const result = await client.signAndBroadcast([msg]);
```

```json
{
  "creator": "bb1user...",
  "collectionId": "1",
  "updateOutgoingApprovals": false,
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
  "userPermissions": {
    "canUpdateOutgoingApprovals": [],
    "canUpdateIncomingApprovals": [],
    "canUpdateAutoApproveSelfInitiatedOutgoingTransfers": [],
    "canUpdateAutoApproveSelfInitiatedIncomingTransfers": [],
    "canUpdateAutoApproveAllIncomingTransfers": []
  }
}
```

## Fields

When an `update*` flag is `false` the paired value is ignored, so placeholder data is safe.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Users can only update their own approvals. |
| `collectionId` | Uint | yes | Collection. `"0"` resolves to the most recently created collection. |
| `updateOutgoingApprovals`, `outgoingApprovals` | bool, `UserOutgoingApproval[]` | no | Full replacement list of outgoing approvals. |
| `updateIncomingApprovals`, `incomingApprovals` | bool, `UserIncomingApproval[]` | no | Full replacement list of incoming approvals. |
| `updateAutoApproveSelfInitiatedOutgoingTransfers`, `autoApproveSelfInitiatedOutgoingTransfers` | bool, bool | no | Approve transfers where `from == initiatedBy`. |
| `updateAutoApproveSelfInitiatedIncomingTransfers`, `autoApproveSelfInitiatedIncomingTransfers` | bool, bool | no | Approve transfers where `to == initiatedBy`. |
| `updateAutoApproveAllIncomingTransfers`, `autoApproveAllIncomingTransfers` | bool, bool | no | Approve every incoming transfer. Shorthand for an accept-all incoming approval. |
| `updateUserPermissions`, `userPermissions` | bool, `UserPermissions` | no | Permissions that guard future updates to the fields above. |

## Response

| Field | Type | Description |
| --- | --- | --- |
| `incomingChanges` | `ApprovalChange[]` | Incoming approvals created, edited, or deleted. |
| `outgoingChanges` | `ApprovalChange[]` | Outgoing approvals created, edited, or deleted. |
| `reviewItems` | string[] | Advisory notes, including a summary of the changes. |

## Behavior

- Fails with `ErrCollectionNotExists` for an unknown collection and `ErrCollectionIsArchived` for an archived one.
- If the user has no stored balance record, the collection's `defaultBalances` are applied first. In that case every approval keeps version `0`.
- Otherwise a new or changed approval gets an incremented `version`; unchanged approvals keep theirs. Versions are what `prioritizedApprovals` in `MsgTransferTokens` pin.
- Approvals that cannot be auto-scanned get `mustPrioritize` forced on.
- Outgoing and incoming lists are validated against `canUpdateOutgoingApprovals` and `canUpdateIncomingApprovals`.
- Auto-approve flags are checked against their permission only when the value actually changes.
- New `userPermissions` cannot re-open a permanently forbidden time.
- User permissions are almost always left permanently allowed. Customize them only when you need to lock a user's own approvals, for example a vault address.

## Related

- [MsgSetIncomingApproval](msg-set-incoming-approval.md)
- [MsgSetOutgoingApproval](msg-set-outgoing-approval.md)
- [User approval settings](../approval-criteria/user-approval-settings.md)
- [Set transferability](../../guides/set-transferability.md)
