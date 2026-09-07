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
    "allowedDenoms": ["ubadge", "ibc/E1116484..."],
    "affiliatePercentage": "0"
  }
}
```

| Field | Type | Description |
| --- | --- | --- |
| `allowedDenoms` | string[] | Denoms that approval criteria `coinTransfers` may move. |
| `affiliatePercentage` | Uint | Percentage of a transfer amount that goes to the affiliate. |

## Related

- [MsgUpdateParams](../messages/msg-update-params.md)
- [Coin transfers](../approval-criteria/coin-transfers.md)
