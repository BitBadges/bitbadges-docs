---
description: "MsgSetDynamicStoreValue sets the boolean for one address in a dynamic store. Creator only."
---

# MsgSetDynamicStoreValue

Sets the boolean value for one address in a dynamic store. Only the store's creator can sign it. Approvals with a `DynamicStoreChallenge` read this value at transfer time.

## Example

```bash
bb tx tokenization set-dynamic-store-value 1 bb1member... true --from <key> --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgSetDynamicStoreValue } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const result = await client.signAndBroadcast([
  new MsgSetDynamicStoreValue({ creator: client.address, storeId: 1n, address: 'bb1member...', value: true })
]);
```

```json
{
  "creator": "bb1abc...",
  "storeId": "1",
  "address": "bb1member...",
  "value": true
}
```

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Must equal the store's `createdBy`. |
| `storeId` | Uint | yes | Store to write to. |
| `address` | string | yes | Address the value applies to. Must be a valid `bb1...` address. |
| `value` | bool | yes | Value to store. |

## Response

| Field | Type | Description |
| --- | --- | --- |
| `previousValue` | string | `"true"` or `"false"`: the value before this write. Falls back to the store's `defaultValue` when the address had no entry. |
| `reviewItems` | string[] | Advisory notes. |

## Behavior

- Fails with `ErrInvalidDynamicStoreID` if the store does not exist or the signer is not its creator, and with an address error for an invalid `address`.
- Writes the value even when it equals the default, so the address then has an explicit entry.
- Emits `store_id`, `address`, and `value` event attributes.

## Related

- [GetDynamicStoreValue](../queries/get-dynamic-store-value.md)
- [Dynamic store challenges](../approval-criteria/dynamic-store-challenges.md)
- [MsgCreateDynamicStore](msg-create-dynamic-store.md)
