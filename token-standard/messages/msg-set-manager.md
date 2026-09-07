---
description: "MsgSetManager transfers a collection's manager role and sets the canUpdateManager permission in one message."
---

# MsgSetManager

Sets the manager of a collection and the permission that guards future manager changes. Only the current manager can sign it. For multi-field updates use [MsgUpdateCollection](msg-update-collection.md).

## Example

```bash
bb tx tokenization set-manager ./set-manager.json --from <manager-key> --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgSetManager } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgSetManager({
  creator: client.address,
  collectionId: 1n,
  manager: 'bb1newmanager...',
  canUpdateManager: [
    { permanentlyPermittedTimes: [{ start: 1n, end: 18446744073709551615n }], permanentlyForbiddenTimes: [] }
  ]
});

const result = await client.signAndBroadcast([msg]);
```

```json
{
  "creator": "bb1manager...",
  "collectionId": "1",
  "manager": "bb1newmanager...",
  "canUpdateManager": [
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
| `manager` | string | yes | New manager address. An empty string leaves the collection with no manager, which locks every manager-only action. |
| `canUpdateManager` | `ActionPermission[]` | no | New permission. `permanentlyPermittedTimes`, `permanentlyForbiddenTimes`. |

The response contains `collectionId`.

## Behavior

- Builds a [MsgUniversalUpdateCollection](msg-universal-update-collection.md) with `updateManager: true` and `updateCollectionPermissions: true`. Every other permission is copied from the stored collection.
- The change is checked against the stored `canUpdateManager` for the current time.
- The new manager takes effect immediately after this message. The signer loses manager rights in the same block.
- Errors: `ErrCollectionNotExists`, `ErrSenderIsNotManager`, `ErrCollectionIsArchived`, permission forbidden.

## Related

- [MsgUpdateCollection](msg-update-collection.md)
- [Permissions](../concepts/permissions.md)
