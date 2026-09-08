---
description: "The inclusive { start, end } range type that represents token IDs, times, and amounts everywhere in the module."
---

# UintRanges

A `UintRange` is an inclusive range of unsigned integers. The module uses arrays of them for token IDs, transfer times, ownership times, and amount bounds so that large sets stay small in state.

## Shape

```json
{ "start": "1", "end": "10" }
```

```proto
message UintRange {
  string start = 1 [(gogoproto.customtype) = "Uint", (gogoproto.nullable) = false];
  string end = 2 [(gogoproto.customtype) = "Uint", (gogoproto.nullable) = false];
}
```

```ts
export interface UintRange<T extends NumberType> {
  start: T;
  end: T;
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `start` | Uint (string in JSON) | yes | First value in the range, inclusive |
| `end` | Uint (string in JSON) | yes | Last value in the range, inclusive |

{% hint style="info" %}
Ask your agent:

```text
Set the valid token IDs of the collection I am building to 1 through 250. Then scope an approval to IDs 1 through 100 and 200 through 250.
```

The MCP builder tools (`set_valid_token_ids`) produce the objects on this page.
{% endhint %}

## How It Works

Where ranges appear:

| Use | Example | Meaning |
| --- | --- | --- |
| Token IDs | `[{ "start": "1", "end": "100" }]` | IDs 1 through 100 |
| Times (UNIX milliseconds) | `[{ "start": "1640995200000", "end": "1672531199999" }]` | The year 2022 |
| Amount bounds | `{ "start": "1", "end": "5" }` | Between 1 and 5 |
| Ownership times | `[{ "start": "1", "end": "18446744073709551615" }]` | Owned forever |

Validation rules:

- `start` must be less than or equal to `end`.
- Ranges in the same array must not overlap.
- Unless a field says otherwise, values run from 1 to `18446744073709551615` (Go `math.MaxUint64`). Zero is not allowed.
- Balance amounts cannot be zero.

Fields that document their own bounds (for example the 0-based hours and weekdays in [Alt Time Checks](../approval-criteria/alt-time-checks.md)) allow zero.

### Full Range

`[{ "start": "1", "end": "18446744073709551615" }]` means "all values". It is the usual value for `transferTimes` and `ownershipTimes` when there is no time restriction.

```json
{ "transferTimes": [{ "start": "1", "end": "18446744073709551615" }] }
```

### Single Value

Use the same value for both ends: `{ "start": "5", "end": "5" }` is token ID 5.

### Inversion

Inverting a range array yields every value from 1 to `18446744073709551615` that the array does not contain. Address lists use the same idea with the `!` prefix.

### Examples

```ts
const tokenIds: UintRange<bigint>[] = [{ start: 1n, end: 10n }];

const multiple: UintRange<bigint>[] = [
  { start: 1n, end: 10n },
  { start: 20n, end: 50n },
];
```

```go
tokenIdRange := UintRange{Start: NewUint(1), End: NewUint(10)}
unlimitedAmount := UintRange{Start: NewUint(1), End: MaxUint}
single := UintRange{Start: NewUint(5), End: NewUint(5)}
```

Transferring `[{ start: 1, end: 10 }, { start: 20, end: 50 }]` moves IDs 1 to 10 and 20 to 50 in one message.

## Related

- [Balances](balances.md)
- [Address Lists](address-lists.md)
- [UintRange snippets](../../sdk/snippets/uint-ranges.md)
