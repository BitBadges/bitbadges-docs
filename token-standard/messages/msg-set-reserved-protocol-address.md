---
description: "MsgSetReservedProtocolAddress marks or unmarks an address as a reserved protocol address. Governance only."
---

# MsgSetReservedProtocolAddress

Marks an address as a reserved protocol address, or removes the mark. Only the x/gov module account (`bb10d07y265gmmuvt4z0w9aw880jnsr700jelmk2z`) can sign it, so it ships inside a governance proposal. There is no `bb tx tokenization` subcommand.

## Example

Proposal file:

```json
{
  "messages": [
    {
      "@type": "/tokenization.MsgSetReservedProtocolAddress",
      "authority": "bb10d07y265gmmuvt4z0w9aw880jnsr700jelmk2z",
      "address": "bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr",
      "isReservedProtocol": true
    }
  ],
  "metadata": "",
  "deposit": "10000000000ubadge",
  "title": "Reserve protocol address",
  "summary": "Marks bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr as a reserved protocol address."
}
```

```bash
bb query gov params   # read min_deposit first
bb tx gov submit-proposal ./proposal.json --from alice --chain-id bitbadges-1
```

Raw message:

```json
{
  "authority": "bb10d07y265gmmuvt4z0w9aw880jnsr700jelmk2z",
  "address": "bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr",
  "isReservedProtocol": true
}
```

The TypeScript SDK has no wrapper class for this message. Build the proposal JSON and submit it with the chain CLI. The deposit shown is the mainnet `min_deposit` (10,000 BADGE); an expedited proposal needs 20,000 BADGE.

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authority` | string | yes | Must equal the module authority (the x/gov account). |
| `address` | string | yes | Valid `bb`-prefixed bech32 address to mark or unmark. |
| `isReservedProtocol` | bool | yes | `true` to reserve, `false` to release. |

The response is empty.

## Behavior

- Fails with `ErrInvalidSigner` if `authority` is not the module authority, and with `ErrInvalidRequest` for an invalid address.
- Writes the flag to the reserved-protocol-address store. Query it with [IsAddressReservedProtocol](../queries/is-address-reserved-protocol.md) or [GetAllReservedProtocolAddresses](../queries/get-all-reserved-protocol-addresses.md).
- The chain marks its own derived addresses automatically: cosmos coin wrapper path addresses and backed path addresses become reserved when a collection adds them. This message is for addresses the protocol reserves by governance decision.
- Approval criteria address checks can match or exclude reserved protocol addresses. See [Special Address Flags](../approval-criteria/special-address-flags.md).

## Related

- [IsAddressReservedProtocol](../queries/is-address-reserved-protocol.md)
- [GetAllReservedProtocolAddresses](../queries/get-all-reserved-protocol-addresses.md)
- [MsgUpdateParams](msg-update-params.md)
