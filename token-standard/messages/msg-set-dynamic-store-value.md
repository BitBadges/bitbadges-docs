---
description: "MsgSetDynamicStoreValue sets the boolean for one address in a dynamic store. Creator only."
---

# MsgSetDynamicStoreValue

Sets the boolean value for one address in a dynamic store. Only the store's creator can sign it. Approvals with a `DynamicStoreChallenge` read this value at transfer time.

## Example

```bash
bb tx tokenization set-dynamic-store-value 1 bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue true --from alice --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgSetDynamicStoreValue } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgSetDynamicStoreValue({
  creator: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
  storeId: 1n,
  address: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue',
  value: true
});

const result = await client.signAndBroadcast([msg]);
console.log(result.txHash, result.success);
```

```json
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "storeId": "1",
  "address": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
  "value": true
}
```

{% hint style="info" %}
Ask your agent: "Allowlist bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue in dynamic store 1."
{% endhint %}

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Must equal the store's `createdBy`. |
| `storeId` | Uint | yes | Store to write to. |
| `address` | string | yes | Address the value applies to. Must be a valid `bb`-prefixed bech32 address. |
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
