---
description: "Create, add, subtract, and look up balances with BalanceArray and the balance helper functions in the bitbadges SDK."
---

# Balances

A balance is `{ amount, tokenIds, ownershipTimes }`. `BalanceArray` holds a list of them and keeps the list normalized as you add and subtract.

## Example

```ts
import { BalanceArray, getBalancesForIds } from 'bitbadges';

// 1. Define
const userBalance = BalanceArray.From([
  {
    amount: 5n,
    tokenIds: [{ start: 1n, end: 5n }],
    ownershipTimes: [{ start: 1628770800000n, end: 1628857200000n }] // unix ms
  }
]);

// 2. Add (in place)
userBalance.addBalances([
  {
    amount: 3n,
    tokenIds: [{ start: 6n, end: 8n }],
    ownershipTimes: [{ start: 1628860800000n, end: 1628947200000n }]
  }
]);

// 3. Subtract (in place). Second argument allows negative results; default false throws on underflow.
userBalance.subtractBalances(
  [
    {
      amount: 2n,
      tokenIds: [{ start: 2n, end: 3n }],
      ownershipTimes: [{ start: 1628784400000n, end: 1628870800000n }]
    }
  ],
  false
);

// 4. Look up one token at one time
const amount = userBalance.getBalanceForIdAndTime(3n, 1628784400000n); // bigint

// 5. All balances for one token ID, or for one time
const forToken = userBalance.getBalancesForId(4n); // BalanceArray
const atTime = userBalance.getBalancesForTime(1628784400000n); // BalanceArray

// 6. Balances inside ranges of IDs and times (free function)
const subset = getBalancesForIds(
  [
    { start: 1n, end: 3n },
    { start: 5n, end: 7n }
  ],
  [
    { start: 1628770800000n, end: 1628857200000n },
    { start: 1628943600000n, end: 1629030000000n }
  ],
  userBalance
);
```

## Behavior

| Call | Returns | Notes |
| --- | --- | --- |
| `BalanceArray.From(iBalance[] \| iBalance \| BalanceArray)` | `BalanceArray` | Also accepts one balance object |
| `addBalances(balances)` / `addBalance(balance)` | this | Merges overlapping ranges so the array stays minimal |
| `subtractBalances(balances, allowNegatives = false)` / `subtractBalance(balance, allowNegatives)` | this | Throws on underflow unless `allowNegatives` is true |
| `getBalanceForIdAndTime(tokenId, time)` | `T` | Amount of one token at one instant |
| `getBalancesForId(tokenId)` | `BalanceArray` | Every entry that covers the token, with only that ID kept |
| `getBalancesForTime(time)` | `BalanceArray` | Every entry that covers the instant |
| `getBalancesForIds(idRanges, timeRanges, balances)` | `BalanceArray` | Free function; the intersection of both range lists |
| `getBalanceForIdNow(tokenId, balances)` | `T` | Free function; uses `Date.now()` |
| `filterZeroBalances()` | this | Drops entries with `amount` 0 |
| `subsetOf(threshold)` / `equalBalances(other)` | `boolean` | Comparisons |
| `applyIncrements(incrementTokenIdsBy, incrementOwnershipTimesBy, numIncrements, durationFromTimestamp, blockTime)` | void | Used by transfers with increments |

Ownership times are unix milliseconds. A balance with `ownershipTimes` of `1` to `GO_MAX_UINT_64` is owned forever. The expansion and merge rules are on [Balances](../../token-standard/concepts/balances.md).

## Related

- [Balance lookups](balance-lookups.md)
- [Transfers](transfers.md)
- [Uint ranges](uint-ranges.md)
