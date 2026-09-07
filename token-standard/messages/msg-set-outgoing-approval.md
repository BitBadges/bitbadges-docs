---
description: "MsgSetOutgoingApproval creates or replaces one outgoing approval by ID without rebuilding the full approval list."
---

# MsgSetOutgoingApproval

Creates or replaces a single outgoing approval for the signer in one collection. It is a wrapper around [MsgUpdateUserApprovals](msg-update-user-approvals.md) that handles the list merge and versioning for you.

## Example

```bash
bb tx tokenization set-outgoing-approval 1 ./approval.json --from <key> --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgSetOutgoingApproval } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgSetOutgoingApproval({
  creator: client.address,
  collectionId: 1n,
  approval: {
    approvalId: 'my-approval-1',
    toListId: 'All',
    initiatedByListId: 'All',
    transferTimes: [{ start: 1n, end: 18446744073709551615n }],
    tokenIds: [{ start: 1n, end: 18446744073709551615n }],
    ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
    uri: '',
    customData: '',
    version: 0n,
    approvalCriteria: undefined
  }
});

const result = await client.signAndBroadcast([msg]);
```

```json
{
  "creator": "bb1user...",
  "collectionId": "1",
  "approval": {
    "approvalId": "my-approval-1",
    "toListId": "All",
    "initiatedByListId": "All",
    "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "tokenIds": [{ "start": "1", "end": "18446744073709551615" }],
    "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "uri": "",
    "customData": "",
    "version": "0"
  }
}
```

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Users can only set their own approvals. |
| `collectionId` | Uint | yes | Collection. `"0"` resolves to the most recently created collection. |
| `approval` | `UserOutgoingApproval` | yes | The approval to create or replace. Matched to an existing approval by `approvalId`. `version` is assigned by the chain; pass `0`. |

## Response

| Field | Type | Description |
| --- | --- | --- |
| `action` | string | `created` or `edited`. |
| `version` | string | Version of the approval after the update. |
| `reviewItems` | string[] | Advisory notes. |

## Behavior

- Loads the signer's current outgoing approvals (or the collection defaults), replaces the entry with the same `approvalId` or appends a new one, then runs the full [MsgUpdateUserApprovals](msg-update-user-approvals.md) path with `updateOutgoingApprovals: true`.
- A new approval starts at version `0`. A changed approval gets an incremented version. An identical approval keeps its version and the response reports `edited` with the unchanged version.
- The update is validated against the signer's `canUpdateOutgoingApprovals` permission and the collection's archived state.
- Approvals that cannot be auto-scanned get `mustPrioritize` forced on.

## Related

- [MsgUpdateUserApprovals](msg-update-user-approvals.md)
- [MsgDeleteOutgoingApproval](msg-delete-outgoing-approval.md)
- [MsgSetIncomingApproval](msg-set-incoming-approval.md)
