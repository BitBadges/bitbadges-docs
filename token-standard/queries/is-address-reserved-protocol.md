---
description: "IsAddressReservedProtocol returns whether an address is a reserved protocol address."
---

# IsAddressReservedProtocol

Returns whether an address is flagged as a reserved protocol address.

## Example

```bash
bb query tokenization is-address-reserved-protocol bb10smfkeymfghj4j5pv5qkfx8zjmm9n6u9kv540qrw7am6tswx6lzswcyh4z
```

```bash
curl https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/is_address_reserved_protocol/bb10smfkeymfghj4j5pv5qkfx8zjmm9n6u9kv540qrw7am6tswx6lzswcyh4z
```

## Request

| Field | Type | Description |
| --- | --- | --- |
| `address` | string | Address to check. |

## Response

```json
{ "isReservedProtocol": true }
```

| Field | Type | Description |
| --- | --- | --- |
| `isReservedProtocol` | bool | `true` when reserved. |

## Behavior

- Reserved addresses come from two sources: chain-derived path addresses (cosmos coin wrapper paths and backed paths) that are flagged automatically when a collection adds them, and addresses set by governance through [MsgSetReservedProtocolAddress](../messages/msg-set-reserved-protocol-address.md).
- Approval criteria address checks can match or exclude reserved protocol addresses. See [Special address flags](../approval-criteria/special-address-flags.md).

## Related

- [GetAllReservedProtocolAddresses](get-all-reserved-protocol-addresses.md)
- [MsgSetReservedProtocolAddress](../messages/msg-set-reserved-protocol-address.md)
