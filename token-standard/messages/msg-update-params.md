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
        "allowed_denoms": [
          "ubadge",
          "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349",
          "ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701",
          "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
          "badges:49:chaosnet",
          "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8"
        ],
        "affiliate_percentage": "0"
      }
    }
  ],
  "metadata": "",
  "deposit": "10000000000ubadge",
  "title": "Update tokenization params",
  "summary": "Appends ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8 to allowed_denoms. Every other parameter is carried over unchanged."
}
```

```bash
bb query gov params   # read min_deposit first
bb tx gov submit-proposal ./proposal.json --from alice --chain-id bitbadges-1
```

Read the current values first so the proposal carries every parameter:

```bash
bb query tokenization params
```

The TypeScript SDK has no wrapper class for this message. Build the proposal JSON and submit it with the chain CLI. The deposit shown is the mainnet `min_deposit` (10,000 BADGE); an expedited proposal needs 20,000 BADGE.

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
