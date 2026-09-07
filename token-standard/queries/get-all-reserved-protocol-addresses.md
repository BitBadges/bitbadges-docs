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
  "addresses": [
    "bb10smfkeymfghj4j5pv5qkfx8zjmm9n6u9kv540qrw7am6tswx6lzswcyh4z",
    "bb126j5d7en78tfjtxdusqgn62cm8sh4c3gvr2nlwj6yknfvsrhcajqu523q7",
    "bb12mdruht2nfqfgkjt2mgtfqn0e02s5vmqduyv3plskx67fv9gsq9qlrxrxv"
  ]
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
