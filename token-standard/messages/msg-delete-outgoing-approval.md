---
description: "MsgDeleteOutgoingApproval deletes one outgoing approval by ID without rebuilding the full approval list."
---

# MsgDeleteOutgoingApproval

Deletes a single outgoing approval for the signer in one collection. It is a wrapper around [MsgUpdateUserApprovals](msg-update-user-approvals.md).

## Example

```bash
bb tx tokenization delete-outgoing-approval 1 sell-token-5-to-bob --from alice --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgDeleteOutgoingApproval } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgDeleteOutgoingApproval({
  creator: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
  collectionId: 1n,
  approvalId: 'sell-token-5-to-bob'
});

const result = await client.signAndBroadcast([msg]);
console.log(result.txHash, result.success);
```

```json
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionId": "1",
  "approvalId": "sell-token-5-to-bob"
}
```

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Users can only delete their own approvals. |
| `collectionId` | Uint | yes | Collection. `"0"` resolves to the most recently created collection. |
| `approvalId` | string | yes | ID of the outgoing approval to delete. |

## Response

| Field | Type | Description |
| --- | --- | --- |
| `found` | bool | Whether the approval existed. Always `true` on success; a missing ID is an error. |
| `version` | string | Version of the deleted approval. |
| `reviewItems` | string[] | Advisory notes. |

## Behavior

- Loads the signer's current outgoing approvals (or the collection defaults) and removes the entry with `approvalId`.
- Fails with `ErrApprovalNotFound` if no outgoing approval has that ID.
- Runs the full [MsgUpdateUserApprovals](msg-update-user-approvals.md) path with `updateOutgoingApprovals: true`, so `canUpdateOutgoingApprovals` and the archived check apply.

## Related

- [MsgUpdateUserApprovals](msg-update-user-approvals.md)
- [MsgSetOutgoingApproval](msg-set-outgoing-approval.md)
- [MsgDeleteIncomingApproval](msg-delete-incoming-approval.md)
