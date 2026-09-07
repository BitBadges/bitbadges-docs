---
description: "GetWrappableBalances returns the maximum amount of a wrapper or alias denom an address can mint from its token balances."
---

# GetWrappableBalances

Returns the maximum amount of a cosmos coin denom that an address can wrap from its current token balances in the denom's collection.

## Example

```bash
bb query tokenization wrappable-balances "badges:1:mytoken" bb1abc...
bb query tokenization wrappable-balances "badgeslp:1:token123" bb1abc...
```

```bash
curl "https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/get_wrappable_balances/badges%3A1%3Amytoken/bb1abc..."
```

The denom is a path segment, so encode `:` as `%3A`.

## Request

| Field | Type | Description |
| --- | --- | --- |
| `denom` | string | `badges:<collectionId>:<suffix>` (wrapper path) or `badgeslp:<collectionId>:<suffix>` (alias path). Denoms with an `{id}` placeholder match by the numeric characters in the suffix. |
| `address` | string | Address whose balances to evaluate. |

## Response

```json
{
  "amount": "1000"
}
```

| Field | Type | Description |
| --- | --- | --- |
| `amount` | Uint | Maximum wrappable amount in the denom's base units. |

## Behavior

The query parses the collection ID from the denom, finds the matching path, and computes:

1. For each balance in the path's `conversion.sideB`, how many times it fits in the address's balances for those token IDs and ownership times (`userAmount / pathAmount`).
2. The minimum across all side B balances (every one is needed per conversion).
3. That minimum multiplied by `conversion.sideA.amount`.

Errors:

- Denom does not start with `badges:` or `badgeslp:`, or has fewer than three `:` segments.
- Collection not found.
- No path matches the denom (`wrapper path not found`).
- The path has no side B balances or a zero side A amount (returns `0` or an error).

Uses: pre-wrap validation in a UI, sizing batch wraps, verifying a path configuration.

## Related

- [Cosmos coin wrapper paths](../ibc/cosmos-coin-wrapper-paths.md)
- [Alias denoms](../ibc/alias-denoms.md)
- [GetBalance](get-balance.md)
- [Wrap to an IBC denom](../../guides/wrap-to-an-ibc-denom.md)
