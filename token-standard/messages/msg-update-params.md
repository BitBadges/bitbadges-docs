---
description: "MsgUpdateParams replaces the x/tokenization module parameters (allowed denoms and affiliate percentage). Governance only."
---

# MsgUpdateParams

Replaces every module parameter. Only the x/gov module account (`bb10d07y265gmmuvt4z0w9aw880jnsr700jelmk2z`) can sign it, so it ships inside a governance proposal. All parameters must be supplied; there is no partial update.

## Example

Proposal file:

```json
{
  "messages": [
    {
      "@type": "/tokenization.MsgUpdateParams",
      "authority": "bb10d07y265gmmuvt4z0w9aw880jnsr700jelmk2z",
      "params": {
        "allowed_denoms": ["ubadge", "ibc/E1116484..."],
        "affiliate_percentage": "0"
      }
    }
  ],
  "metadata": "ipfs://...",
  "deposit": "<deposit>ubadge",
  "title": "Update tokenization params",
  "summary": "Adds a denom to allowed_denoms."
}
```

```bash
bb query gov params   # read min_deposit first
bb tx gov submit-proposal ./proposal.json --from <key> --chain-id bitbadges-1
```

Read the current values first so the proposal carries every parameter:

```bash
bb query tokenization params
```

The TypeScript SDK has no wrapper class for this message. Build the proposal JSON and submit it with the chain CLI.

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authority` | string | yes | Must equal the module authority (the x/gov account). |
| `params` | `Params` | yes | Full parameter set. |

`Params`:

| Field | Type | Description |
| --- | --- | --- |
| `allowed_denoms` | string[] | Denoms that approval criteria `coinTransfers` may move. |
| `affiliate_percentage` | Uint | Percentage of a transfer amount that goes to the affiliate. |

The response is empty.

## Behavior

- Fails if `authority` is not the module authority.
- The whole `Params` object replaces the stored one. Omitted fields become their zero values.
- Query the result with [Params](../queries/params.md).

## Related

- [Params](../queries/params.md)
- [Coin transfers](../approval-criteria/coin-transfers.md)
- [MsgSetReservedProtocolAddress](msg-set-reserved-protocol-address.md)
