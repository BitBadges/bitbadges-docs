---
description: "GetAddressList returns an address list by ID, including reserved IDs such as All, Mint, and inverted lists."
---

# GetAddressList

Returns an address list by ID.

## Example

```bash
bb query tokenization address-list teamwallets
```

```bash
curl https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/get_address_list/teamwallets
```

## Request

| Field | Type | Description |
| --- | --- | --- |
| `listId` | string | List ID. Created IDs, reserved IDs (`All`, `AllWithoutMint`, `Mint`, `None`, a bare address), and inverted IDs (`!listId`) all resolve. |

## Response

```json
{
  "list": {
    "listId": "teamwallets",
    "addresses": ["bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d", "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue"],
    "whitelist": true,
    "uri": "",
    "customData": "",
    "createdBy": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"
  }
}
```

| Field | Type | Description |
| --- | --- | --- |
| `listId` | string | ID. |
| `addresses` | string[] | Listed addresses. |
| `whitelist` | bool | `true` includes `addresses`; `false` includes everyone else. |
| `uri` | string | Metadata URI, usually empty. |
| `customData` | string | Custom data, usually empty. |
| `createdBy` | string | Creator. Empty for reserved lists. |

## Behavior

- Reserved lists are generated on the fly and never stored.
- Lists are immutable; the response for a created ID never changes.

## Related

- [Address Lists](../concepts/address-lists.md)
- [MsgCreateAddressLists](../messages/msg-create-address-lists.md)
