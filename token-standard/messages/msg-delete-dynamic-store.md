---
description: "MsgDeleteDynamicStore deletes a dynamic store. Creator only."
---

# MsgDeleteDynamicStore

Deletes a dynamic store. Only the store's creator can sign it.

## Example

```bash
bb tx tokenization delete-dynamic-store 1 --from <key> --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgDeleteDynamicStore } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const result = await client.signAndBroadcast([
  new MsgDeleteDynamicStore({ creator: client.address, storeId: 1n })
]);
```

```json
{
  "creator": "bb1abc...",
  "storeId": "1"
}
```

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Must equal the store's `createdBy`. |
| `storeId` | Uint | yes | Store to delete. |

The response is empty.

## Behavior

- Fails with `ErrInvalidDynamicStoreID` if the store does not exist or the signer is not its creator.
- Removes the store record. Approvals that still reference the store ID in a `DynamicStoreChallenge` fail at transfer time.
- To pause instead of delete, set `globalEnabled: false` with [MsgUpdateDynamicStore](msg-update-dynamic-store.md).

## Related

- [MsgUpdateDynamicStore](msg-update-dynamic-store.md)
- [Dynamic store challenges](../approval-criteria/dynamic-store-challenges.md)
