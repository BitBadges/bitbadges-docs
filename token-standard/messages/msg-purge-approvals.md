---
description: "MsgPurgeApprovals removes expired user approvals, your own or another user's when their auto-deletion options allow it."
---

# MsgPurgeApprovals

Removes specific expired incoming or outgoing approvals from a user's balance store. The signer can purge their own approvals, or another user's when that user's approval criteria opt in.

## Example

```bash
# [collection-id] [purge-expired] [approver-address] [purge-counterparty-approvals] [approvals-to-purge-json-or-file]
bb tx tokenization purge-approvals 1 true "" false '[{"approvalId":"let-alice-move-token-1","approvalLevel":"outgoing","approverAddress":"bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue","version":"0"}]' --from bob --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgPurgeApprovals } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

// bob removes his own expired outgoing approval.
const msg = new MsgPurgeApprovals({
  creator: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue',
  collectionId: 1n,
  purgeExpired: true,
  approverAddress: '',
  purgeCounterpartyApprovals: false,
  approvalsToPurge: [
    {
      approvalId: 'let-alice-move-token-1',
      approvalLevel: 'outgoing',
      approverAddress: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue',
      version: 0n
    }
  ]
});

const result = await client.signAndBroadcast([msg]);
console.log(result.txHash, result.success);
```

```json
{
  "creator": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
  "collectionId": "1",
  "purgeExpired": true,
  "approverAddress": "",
  "purgeCounterpartyApprovals": false,
  "approvalsToPurge": [
    {
      "approvalId": "let-alice-move-token-1",
      "approvalLevel": "outgoing",
      "approverAddress": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
      "version": "0"
    }
  ]
}
```

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. |
| `collectionId` | Uint | yes | Collection. `"0"` resolves to the most recently created collection. |
| `purgeExpired` | bool | yes | Purge approvals with no future transfer times. Must be `true` for a self-purge. |
| `approverAddress` | string | no | Whose approvals to purge. Empty means the signer. |
| `purgeCounterpartyApprovals` | bool | no | Required when `approverAddress` is not the signer. Must be `false` for a self-purge. |
| `approvalsToPurge` | `ApprovalIdentifierDetails[]` | yes | Exact approvals to purge. Cannot be empty. |

`ApprovalIdentifierDetails`:

| Field | Type | Description |
| --- | --- | --- |
| `approvalId` | string | ID of the approval. |
| `approvalLevel` | string | `incoming` or `outgoing`. Collection approvals cannot be purged. |
| `approverAddress` | string | Must equal the target user (`approverAddress` on the message, or the signer). |
| `version` | Uint | Must match the stored version or the entry is skipped. |

## Response

| Field | Type | Description |
| --- | --- | --- |
| `numPurged` | Uint | Number of approvals removed. |
| `purgedApprovalIds` | string[] | IDs removed. |
| `reviewItems` | string[] | Advisory notes, including `N approvals purged`. |

## Behavior

Two modes:

- **Self-purge.** `approverAddress` is empty or the signer. Set `purgeExpired: true` and `purgeCounterpartyApprovals: false`. Listed approvals are removed when they are expired.
- **Purge for another user.** `approverAddress` is someone else. `purgeCounterpartyApprovals` must be `true` or the message fails. The approval's `autoDeletionOptions` decide whether the signer may purge it:
  - `allowCounterpartyPurge`: the signer may purge when they are the only initiator, meaning `initiatedByListId` is a whitelist of exactly the signer.
  - `allowPurgeIfExpired`: anyone may purge once the approval is expired.

An approval is expired when no `transferTimes` range ends after the current block time. Approvals with future transfer times are never purged. Entries whose `version` does not match, or that are not found, are skipped without error.

The purge runs through the target user's [MsgUpdateUserApprovals](msg-update-user-approvals.md) path, so their `canUpdateIncomingApprovals` and `canUpdateOutgoingApprovals` permissions must allow the change. A counterparty purge acts on behalf of the user, and the user's permissions still apply.

## Related

- [Auto-deletion](../approval-criteria/auto-deletion.md)
- [MsgUpdateUserApprovals](msg-update-user-approvals.md)
- [MsgDeleteIncomingApproval](msg-delete-incoming-approval.md)
- [MsgDeleteOutgoingApproval](msg-delete-outgoing-approval.md)
