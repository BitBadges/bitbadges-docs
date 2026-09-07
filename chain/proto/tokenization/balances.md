---
description: "Generated schema for tokenization/balances.proto: 3 messages in the x/tokenization module."
---

# tokenization/balances.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 3 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/balances.proto).

## Messages

### Balance

Balance represents the balance of a token for a specific user. The user amounts xAmount of a token specified for the time ranges specified.

Example: User A owns x10 of token IDs 1-10 from 1/1/2020 to 1/1/2021.

If times or tokenIDs have len &gt; 1, then the user owns all token IDs specified for all time ranges specified.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `amount` | 1 | `string` | singular | The amount of the token owned by the user. |
| `ownershipTimes` | 2 | [`UintRange`](#uintrange) | repeated | The time ranges during which the user owns the token. |
| `tokenIds` | 3 | [`UintRange`](#uintrange) | repeated | The token IDs for which the user owns the token. |

### PrecalculationOptions

PrecalculationOptions defines the options for precalculating the balances.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `overrideTimestamp` | 1 | `string` | singular | The timestamp to override with when calculating the balances. |
| `tokenIdsOverride` | 2 | [`UintRange`](#uintrange) | repeated | The IDs to override for the transfer. Only applicable if using this option in precalculation. |
| `scalingMultiplier` | 3 | `string` | singular | When &gt; 0 and allowAmountScaling is true on the approval, all precalculated balance amounts are multiplied by this value. Must be &lt;= maxScalingMultiplier. 0 means no scaling (returns 1x base). |

### UintRange

The UintRange is a range of IDs from some start to some end (inclusive). uintRanges are one of the core types used.

They are used for everything from token IDs to time ranges to min/max balance amounts.

See the BitBadges documentation for more information.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `start` | 1 | `string` | singular | The starting value of the range (inclusive). |
| `end` | 2 | `string` | singular | The ending value of the range (inclusive). |
