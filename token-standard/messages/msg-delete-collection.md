---
description: "MsgDeleteCollection deletes a collection and purges its balances and trackers. Manager only, needs canDeleteCollection."
---

# MsgDeleteCollection

Deletes a collection and all of its state. Only the current manager can sign it, and `canDeleteCollection` must permit the action at the current time.

## Example

```bash
bb tx tokenization delete-collection 1 --from <manager-key> --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgDeleteCollection } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const result = await client.signAndBroadcast([
  new MsgDeleteCollection({ creator: client.address, collectionId: 1n })
]);
```

```json
{
  "creator": "bb1abc...",
  "collectionId": "1"
}
```

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Must be the current manager. |
| `collectionId` | Uint | yes | Collection to delete. |

The response is empty.

## Behavior

- Fails with `ErrCollectionNotExists` if the ID is unknown and `ErrSenderIsNotManager` if the signer is not the manager. The x/gov authority may sign instead.
- Checks `canDeleteCollection` for the current block time.
- Purges every balance, approval tracker, challenge tracker, ETH signature tracker, and approval version for the collection, then removes the collection record.
- Deletion is permanent. To make a collection read-only instead, use [MsgSetIsArchived](msg-set-is-archived.md).

## Related

- [MsgSetIsArchived](msg-set-is-archived.md)
- [Permissions](../concepts/permissions.md)
