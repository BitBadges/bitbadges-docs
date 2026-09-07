---
description: "MsgUpdateDynamicStore replaces a dynamic store's default value, global kill switch, and metadata. Creator only."
---

# MsgUpdateDynamicStore

Replaces the default value, the `globalEnabled` kill switch, and the metadata of a dynamic store. Only the store's creator can sign it. Every field is overwritten, so pass the current values for anything you want to keep.

## Example

```bash
# [store-id] [default-value] [global-enabled]
bb tx tokenization update-dynamic-store 1 true false --from <key> --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgUpdateDynamicStore } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

// Halt every approval that depends on store 1.
const msg = new MsgUpdateDynamicStore({
  creator: client.address,
  storeId: 1n,
  defaultValue: true,
  globalEnabled: false,
  uri: 'https://example.com/updated-metadata',
  customData: ''
});

const result = await client.signAndBroadcast([msg]);
```

```json
{
  "creator": "bb1abc...",
  "storeId": "1",
  "defaultValue": true,
  "globalEnabled": false,
  "uri": "https://example.com/updated-metadata",
  "customData": ""
}
```

To change only the metadata, pass the current `defaultValue` and `globalEnabled`:

```json
{
  "creator": "bb1abc...",
  "storeId": "1",
  "defaultValue": true,
  "globalEnabled": true,
  "uri": "https://example.com/updated-metadata",
  "customData": "{\"updated\": true, \"timestamp\": \"2024-01-01\"}"
}
```

To clear the metadata, pass empty strings.

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Must equal the store's `createdBy`. |
| `storeId` | Uint | yes | Store to update. |
| `defaultValue` | bool | yes | New default for addresses without an entry. |
| `globalEnabled` | bool | yes | `false` halts every approval that uses this store. Proto3 bools default to `false`, so pass `true` explicitly to keep the store enabled. |
| `uri` | string | no | New metadata URI. Empty clears it. |
| `customData` | string | no | New custom data. Empty clears it. |

The response is empty.

## Behavior

- Fails with `ErrInvalidDynamicStoreID` if the store does not exist or the signer is not its creator.
- All four fields are written unconditionally. Query [GetDynamicStore](../queries/get-dynamic-store.md) first if you need to preserve values.
- When `globalEnabled` is `false`, every `DynamicStoreChallenge` that references the store fails with `dynamic store storeId {id} is globally disabled`, regardless of per-address values. Use it as an emergency stop, for example when a dependent protocol is compromised.
- Per-address values set with [MsgSetDynamicStoreValue](msg-set-dynamic-store-value.md) are not touched.

## Related

- [Dynamic store challenges](../approval-criteria/dynamic-store-challenges.md)
- [MsgCreateDynamicStore](msg-create-dynamic-store.md)
- [MsgDeleteDynamicStore](msg-delete-dynamic-store.md)
