---
description: "MsgSetIncomingApproval creates or replaces one incoming approval by ID without rebuilding the full approval list."
---

# MsgSetIncomingApproval

Creates or replaces a single incoming approval for the signer in one collection. It is a wrapper around [MsgUpdateUserApprovals](msg-update-user-approvals.md) that handles the list merge and versioning for you.

## Example

```bash
bb tx tokenization set-incoming-approval 1 ./approval.json --from <key> --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgSetIncomingApproval } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgSetIncomingApproval({
  creator: client.address,
  collectionId: 1n,
  approval: {
    approvalId: 'my-approval-1',
    fromListId: 'All',
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
    "fromListId": "All",
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
| `approval` | `UserIncomingApproval` | yes | The approval to create or replace. Matched to an existing approval by `approvalId`. `version` is assigned by the chain; pass `0`. |

## Response

| Field | Type | Description |
| --- | --- | --- |
| `action` | string | `created` or `edited`. |
| `version` | string | Version of the approval after the update. |
| `reviewItems` | string[] | Advisory notes. |

## Behavior

- Loads the signer's current incoming approvals (or the collection defaults), replaces the entry with the same `approvalId` or appends a new one, then runs the full [MsgUpdateUserApprovals](msg-update-user-approvals.md) path with `updateIncomingApprovals: true`.
- A new approval starts at version `0`. A changed approval gets an incremented version. An identical approval keeps its version and the response reports `edited` with the unchanged version.
- The update is validated against the signer's `canUpdateIncomingApprovals` permission and the collection's archived state.
- Approvals that cannot be auto-scanned get `mustPrioritize` forced on.

## Related

- [MsgUpdateUserApprovals](msg-update-user-approvals.md)
- [MsgDeleteIncomingApproval](msg-delete-incoming-approval.md)
- [MsgSetOutgoingApproval](msg-set-outgoing-approval.md)
