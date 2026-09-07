---
description: "MsgSetIsArchived archives or unarchives a collection and sets the canArchiveCollection permission in one message."
---

# MsgSetIsArchived

Sets the archive flag of a collection and the permission that guards future changes. An archived collection is read-only: every transfer and update fails until it is unarchived. Only the current manager can sign it.

## Example

```bash
bb tx tokenization set-setisarchived ./set-is-archived.json --from <manager-key> --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgSetIsArchived } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgSetIsArchived({
  creator: client.address,
  collectionId: 1n,
  isArchived: true,
  canArchiveCollection: [
    { permanentlyPermittedTimes: [{ start: 1n, end: 18446744073709551615n }], permanentlyForbiddenTimes: [] }
  ]
});

const result = await client.signAndBroadcast([msg]);
```

```json
{
  "creator": "bb1manager...",
  "collectionId": "1",
  "isArchived": true,
  "canArchiveCollection": [
    {
      "permanentlyPermittedTimes": [{ "start": "1", "end": "18446744073709551615" }],
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
| `isArchived` | bool | yes | `true` to archive, `false` to unarchive. |
| `canArchiveCollection` | `ActionPermission[]` | no | New permission. |

The response contains `collectionId`.

## Behavior

- Builds a [MsgUniversalUpdateCollection](msg-universal-update-collection.md) with `updateIsArchived: true` and `updateCollectionPermissions: true`. Every other permission is copied from the stored collection.
- The change is checked against the stored `canArchiveCollection` only when the value actually changes.
- Archiving is the one update an archived collection accepts in reverse: a message that sets `isArchived: false` on an archived collection succeeds. Any other message on an archived collection fails with `ErrCollectionIsArchived`.
- If `canArchiveCollection` is permanently forbidden while the collection is archived, the collection is frozen forever.
- Errors: `ErrCollectionNotExists`, `ErrSenderIsNotManager`, permission forbidden.

## Related

- [MsgDeleteCollection](msg-delete-collection.md)
- [MsgUpdateCollection](msg-update-collection.md)
- [Permissions](../concepts/permissions.md)
