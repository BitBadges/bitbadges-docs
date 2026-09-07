---
description: "GetBalanceForToken returns the amount of one token ID an address owns at one point in time."
---

# GetBalanceForToken

Returns a single amount: how much of one token ID an address owns at one timestamp. Use it for ownership checks without parsing balance ranges.

## Example

```bash
bb query tokenization balance-for-token 1 bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue 1
bb query tokenization balance-for-token 1 bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue 1 1791331200000
```

```bash
curl https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/get_balance_for_token/1/bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue/1
curl "https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/get_balance_for_token/1/bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue/1?time=1791331200000"
```

## Request

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | string | Collection ID. |
| `address` | string | Address to look up. |
| `tokenId` | string | One token ID. |
| `time` | string | Optional. Milliseconds since epoch. Empty or `0` means the current block time. |

## Response

```json
{ "balance": "1" }
```

| Field | Type | Description |
| --- | --- | --- |
| `balance` | string | Amount owned for that token ID whose ownership time range contains `time`. `"0"` when none. |

## Behavior

- Fails with `ErrCollectionNotExists` for an unknown collection.
- An address with no stored record is evaluated against the collection's `defaultBalances`.
- Ownership times matter: a balance whose range ends before `time` counts as `0`. Pass a future `time` to check a subscription or time-locked balance.

## Related

- [GetBalance](get-balance.md)
- [Balances](../concepts/balances.md)
- [Gate access](../../guides/gate-access.md)
