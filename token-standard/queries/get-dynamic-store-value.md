---
description: "GetDynamicStoreValue returns the boolean stored for one address in a dynamic store."
---

# GetDynamicStoreValue

Returns the boolean value for one address in a dynamic store.

## Example

```bash
bb query tokenization dynamic-store-value 1 bb1abc...
```

```bash
curl https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/get_dynamic_store_value/1/bb1abc...
```

## Request

| Field | Type | Description |
| --- | --- | --- |
| `storeId` | string | Store ID. |
| `address` | string | Address to look up. |

## Response

```json
{
  "value": {
    "storeId": "1",
    "address": "bb1abc...",
    "value": true
  }
}
```

| Field | Type | Description |
| --- | --- | --- |
| `storeId` | Uint | Store ID. |
| `address` | string | Address. |
| `value` | bool | Stored value, or the store's `defaultValue` when no entry exists. |

## Behavior

- This query returns the per-address value only. It does not apply the `globalEnabled` kill switch; check [GetDynamicStore](get-dynamic-store.md) for that.

## Related

- [GetDynamicStore](get-dynamic-store.md)
- [MsgSetDynamicStoreValue](../messages/msg-set-dynamic-store-value.md)
