---
description: "MsgSetManager transfers a collection's manager role and sets the canUpdateManager permission in one message."
---

# MsgSetManager

Sets the manager of a collection and the permission that guards future manager changes. Only the current manager can sign it. For multi-field updates use [MsgUpdateCollection](msg-update-collection.md).

## Example

```bash
bb tx tokenization set-manager ./set-manager.json --from alice --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgSetManager } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

// alice hands the manager role to bob.
const msg = new MsgSetManager({
  creator: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
  collectionId: 1n,
  manager: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue',
  canUpdateManager: [
    {
      permanentlyPermittedTimes: [{ start: 1n, end: 18446744073709551615n }],
      permanentlyForbiddenTimes: []
    }
  ]
});

const result = await client.signAndBroadcast([msg]);
console.log(result.txHash, result.success);
```

```json
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionId": "1",
  "manager": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
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
