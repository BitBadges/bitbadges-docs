---
description: "Params returns the x/tokenization module parameters (allowed denoms and affiliate percentage)."
---

# Params

Returns the current module parameters.

## Example

```bash
bb query tokenization params
```

```bash
curl https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/params
```

## Request

No parameters.

## Response

```json
{
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
```

| Field | Type | Description |
| --- | --- | --- |
| `allowedDenoms` | string[] | Denoms that approval criteria `coinTransfers` may move. |
| `affiliatePercentage` | Uint | Percentage of a transfer amount that goes to the affiliate. |

## Related

- [MsgUpdateParams](../messages/msg-update-params.md)
- [Coin Transfers](../approval-criteria/coin-transfers.md)
