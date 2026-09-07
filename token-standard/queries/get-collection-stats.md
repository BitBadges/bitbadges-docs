---
description: "GetCollectionStats returns a collection's unique holder count and circulating supply."
---

# GetCollectionStats

Returns the number of unique holders and the circulating supply of a collection.

## Example

```bash
bb query tokenization collection-stats 1
```

```bash
curl https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/get_collection_stats/1
```

## Request

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | string | Collection ID. |

## Response

```json
{
  "stats": {
    "holderCount": "150",
    "balances": [
      {
        "amount": "10000",
        "tokenIds": [{ "start": "1", "end": "100" }],
        "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }]
      }
    ]
  }
}
```

| Field | Type | Description |
| --- | --- | --- |
| `holderCount` | Uint | Addresses with a non-zero balance. |
| `balances` | `Balance[]` | Circulating supply as balance ranges: total minted minus tokens locked in a backed path. |

## Behavior

- `holderCount` excludes the special addresses `Mint` and `Total`, backed path addresses, and cosmos coin wrapper path addresses.
- Both values update on every mint, transfer, backing, and unbacking.
- A collection with no stats record yet returns `holderCount: "0"` and an empty `balances` array.
- Fails with `ErrInvalidCollectionID` for an unknown collection.
- Uses: holder analytics, supply displays, and compliance checks on holder-count limits.

## Related

- [GetCollection](get-collection.md)
- [GetBalance](get-balance.md)
- [Minting and supply](../concepts/minting-and-supply.md)
