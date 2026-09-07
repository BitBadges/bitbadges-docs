---
description: "GetDynamicStore returns a dynamic store's creator, default value, global kill switch, and metadata."
---

# GetDynamicStore

Returns the configuration of a dynamic store.

## Example

```bash
bb query tokenization dynamic-store 1
```

```bash
curl https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/get_dynamic_store/1
```

## Request

| Field | Type | Description |
| --- | --- | --- |
| `storeId` | string | Store ID. |

## Response

```json
{
  "store": {
    "storeId": "1",
    "createdBy": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "defaultValue": false,
    "globalEnabled": true,
    "uri": "",
    "customData": "{\"name\":\"Demo Membership allowlist\"}"
  }
}
```

| Field | Type | Description |
| --- | --- | --- |
| `storeId` | Uint | ID assigned by the chain. |
| `createdBy` | string | Owner. Only this address can modify the store. |
| `defaultValue` | bool | Value for addresses without an explicit entry. |
| `globalEnabled` | bool | Kill switch. When `false`, every approval that checks this store fails, regardless of per-address values. |
| `uri` | string | Metadata URI. Empty when unset. |
| `customData` | string | Custom data. Empty when unset. |

## Behavior

- New stores are created with `globalEnabled: true`. Stores that predate the field were migrated to `true`.
- Change any field with [MsgUpdateDynamicStore](../messages/msg-update-dynamic-store.md); read it first, because that message overwrites every field.

## Related

- [GetDynamicStoreValue](get-dynamic-store-value.md)
- [Dynamic Store Challenges](../approval-criteria/dynamic-store-challenges.md)
- [MsgCreateDynamicStore](../messages/msg-create-dynamic-store.md)
