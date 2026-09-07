---
description: "MsgDeleteDynamicStore deletes a dynamic store. Creator only."
---

# MsgDeleteDynamicStore

Deletes a dynamic store. Only the store's creator can sign it.

## Example

```bash
bb tx tokenization delete-dynamic-store 1 --from alice --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgDeleteDynamicStore } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgDeleteDynamicStore({ creator: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d', storeId: 1n });

const result = await client.signAndBroadcast([msg]);
console.log(result.txHash, result.success);
```

```json
{ "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d", "storeId": "1" }
```

{% hint style="info" %}
Ask your agent: "Delete dynamic store 1."
{% endhint %}

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
- [Dynamic Store Challenges](../approval-criteria/dynamic-store-challenges.md)
