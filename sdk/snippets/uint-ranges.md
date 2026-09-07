---
description: "UintRange and UintRangeArray helpers in the bitbadges SDK, sort and merge, search, invert, remove, and overlap checks."
---

# Uint Ranges

`UintRange` is an inclusive `{ start, end }` span of unsigned 64-bit integers. Token IDs and times are always expressed as arrays of these ranges.

## Example

```ts
import { GO_MAX_UINT_64, UintRange, UintRangeArray } from 'bitbadges';

// Single range
const range = new UintRange<bigint>({ start: 1n, end: 10n });
range.size(); // 10n
range.search(5n); // true
range.isFull(); // false

const fullRange = UintRange.FullRange(); // 1n to GO_MAX_UINT_64
fullRange.isFull(); // true

const inverted = range.invert(); // UintRangeArray: [{ start: 11n, end: GO_MAX_UINT_64 }]
range.overlaps(inverted); // false
range.getOverlaps(fullRange); // [{ start: 1n, end: 10n }]
range.getOverlapDetails(fullRange); // [inCurrentButNotInOther, overlaps] = [[], [{ start: 1n, end: 10n }]]

// Arrays of ranges
const rangeArr = UintRangeArray.From<bigint>([
  { start: 1n, end: 10n },
  { start: 11n, end: 20n }
]);
rangeArr.size(); // 20n
UintRangeArray.FullRanges().isFull(); // true
rangeArr.toInverted({ start: 1n, end: GO_MAX_UINT_64 }); // [{ start: 21n, end: GO_MAX_UINT_64 }]

// Sort and merge adjacent or overlapping ranges (in place)
const unsorted = UintRangeArray.From<bigint>([
  { start: 11n, end: 20n },
  { start: 1n, end: 15n }
]);
unsorted.hasOverlaps(); // true
unsorted.sortAndMerge(); // [{ start: 1n, end: 20n }]

// Overlap details against another list
const [inCurrButNotOther, overlaps, inOtherButNotCurr] = unsorted.getOverlapDetails([{ start: 10n, end: 30n }]);
// [[{ start: 1n, end: 9n }], [{ start: 10n, end: 20n }], [{ start: 21n, end: 30n }]]

// Remove (in place) and search
const sorted = unsorted.clone();
sorted.remove({ start: 1n, end: 10n }); // [{ start: 11n, end: 20n }]
const [idx, found] = sorted.search(11n); // [0n, true]
sorted.searchIfExists(11n); // true
sorted.searchIndex(11n); // 0n
```

## Behavior

| Method | On | Returns | Notes |
| --- | --- | --- | --- |
| `size()` | both | `T` | Count of integers covered |
| `isFull()` | both | `boolean` | True when the span is `1` to `GO_MAX_UINT_64` |
| `FullRange()` / `FullRanges()` | static | full span | `UintRange.FullRange()` returns one range; `UintRangeArray.FullRanges()` returns an array with one range |
| `search(id)` | `UintRange` | `boolean` | Membership |
| `search(id)` | `UintRangeArray` | `[bigint, boolean]` | Index of the containing range and whether it was found. `searchIfExists` and `searchIndex` return one half each |
| `invert(min?, max?)` | `UintRange` | `UintRangeArray` | Gaps between `min` (default `1n`) and `max` (default `GO_MAX_UINT_64`) |
| `invert(bounds)` / `toInverted(bounds)` | `UintRangeArray` | array | `invert` mutates; `toInverted` returns a new array. `bounds` is one `{ start, end }` |
| `sortAndMerge()` | `UintRangeArray` | this | Sorts by `start` and merges overlapping or adjacent ranges |
| `hasOverlaps()` | `UintRangeArray` | `boolean` | True if any two ranges in the list overlap each other |
| `overlaps(other)` | both | `boolean` | True if this overlaps any range in `other` |
| `getOverlaps(other)` | both | array | The intersection |
| `getOverlapDetails(other)` | `UintRange` | `[remaining, overlaps]` | Two arrays |
| `getOverlapDetails(other)` | `UintRangeArray` | `[inCurrentOnly, overlaps, inOtherOnly]` | Three arrays |
| `remove(ranges)` | `UintRangeArray` | this | Subtracts in place |

The chain rejects lists with overlapping ranges in most fields. Call `sortAndMerge()` before you submit a message you assembled by hand.

## Related

- [Uint ranges concept](../../token-standard/concepts/uint-ranges.md)
- [Balances](balances.md)
