---
description: "MsgSetCustomData sets a collection's customData string and the canUpdateCustomData permission in one message."
---

# MsgSetCustomData

Sets the collection-level `customData` string and the permission that guards future changes. Only the current manager can sign it. For multi-field updates use [MsgUpdateCollection](msg-update-collection.md).

## Example

```bash
bb tx tokenization set-setcustomdata ./set-custom-data.json --from <manager-key> --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgSetCustomData } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgSetCustomData({
  creator: client.address,
  collectionId: 1n,
  customData: JSON.stringify({ description: 'My custom data', version: '1.0' }),
  canUpdateCustomData: [
    { permanentlyPermittedTimes: [{ start: 1n, end: 18446744073709551615n }], permanentlyForbiddenTimes: [] }
  ]
});

const result = await client.signAndBroadcast([msg]);
```

```json
{
  "creator": "bb1manager...",
  "collectionId": "1",
  "customData": "{\"description\": \"My custom data\", \"version\": \"1.0\"}",
  "canUpdateCustomData": [
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
| `customData` | string | yes | Arbitrary string. Often JSON. |
| `canUpdateCustomData` | `ActionPermission[]` | no | New permission. |

The response contains `collectionId`.

## Behavior

- Builds a [MsgUniversalUpdateCollection](msg-universal-update-collection.md) with `updateCustomData: true` and `updateCollectionPermissions: true`. Every other permission is copied from the stored collection.
- The change is checked against the stored `canUpdateCustomData` for the current time.
- Errors: `ErrCollectionNotExists`, `ErrSenderIsNotManager`, `ErrCollectionIsArchived`, permission forbidden.

## Related

- [MsgUpdateCollection](msg-update-collection.md)
- [Collections](../concepts/collections.md)
