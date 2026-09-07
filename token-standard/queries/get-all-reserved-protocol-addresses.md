---
description: "GetAllReservedProtocolAddresses returns every address flagged as a reserved protocol address."
---

# GetAllReservedProtocolAddresses

Returns the full list of reserved protocol addresses.

## Example

```bash
bb query tokenization all-reserved-protocol-addresses
```

```bash
curl https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/get_all_reserved_protocol_addresses
```

## Request

No parameters.

## Response

```json
{
  "addresses": ["bb1wrapperpath...", "bb1backedpath...", "bb1protocol..."]
}
```

| Field | Type | Description |
| --- | --- | --- |
| `addresses` | string[] | Every reserved address, in store order. |

## Behavior

- The list grows as collections add wrapper or backed paths, and changes when governance runs [MsgSetReservedProtocolAddress](../messages/msg-set-reserved-protocol-address.md).
- There is no pagination. Filter client-side.

## Related

- [IsAddressReservedProtocol](is-address-reserved-protocol.md)
- [MsgSetReservedProtocolAddress](../messages/msg-set-reserved-protocol-address.md)
