---
description: "Generated schema for tokenization/predetermined_balances.proto: 5 messages in the x/tokenization module."
---

# tokenization/predetermined_balances.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 5 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/predetermined_balances.proto).

## Messages

### IncrementedBalances

IncrementedBalances represents balances that are incremented by specific amounts, according to the order calculation method.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `startBalances` | 1 | [`Balance`](balances.md#balance) | repeated |   |
| `incrementTokenIdsBy` | 2 | `string` | singular | The amount by which to increment token IDs. |
| `incrementOwnershipTimesBy` | 3 | `string` | singular | The amount by which to increment ownership times. Incompatible with approveStartingFromNowBy. |
| `durationFromTimestamp` | 4 | `string` | singular | The amount of unix milliseconds to approve starting from now. Incompatible with incrementOwnershipTimesBy. |
| `allowOverrideTimestamp` | 5 | `bool` | singular | Whether to allow overriding the timestamp for the balances (only applicable with durationFromTimestamp set). |
| `recurringOwnershipTimes` | 6 | [`RecurringOwnershipTimes`](#recurringownershiptimes) | singular | Recurring ownership times. |
| `allowOverrideWithAnyValidToken` | 7 | `bool` | singular | Allow override of any valid ID |
| `allowAmountScaling` | 8 | `bool` | singular | When true, the actual transfer can be any evenly divisible integer multiple (&gt;=1x) of startBalances. approvalCriteria.coinTransfers are scaled by the same multiplier. All other IncrementedBalances fields must be zero/false/nil when this is true. |
| `maxScalingMultiplier` | 9 | `string` | singular | Maximum allowed scaling multiplier. Must be &gt; 0 when allowAmountScaling is true. The chain rejects transfers where the computed multiplier exceeds this cap. Ignored (set to "0") when allowAmountScaling is false. |

### ManualBalances

ManualBalances represents a list of manual balances entered for the predetermined balances criteria. Order is calculated according to the calculation method set.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `balances` | 1 | [`Balance`](balances.md#balance) | repeated |   |

### PredeterminedBalances

PredeterminedBalances represents balances with predetermined order calculation.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `manualBalances` | 1 | [`ManualBalances`](#manualbalances) | repeated | Manual balances that can be entered. If this is nil, then we use the incremented balances. |
| `incrementedBalances` | 2 | [`IncrementedBalances`](#incrementedbalances) | singular | Balances that have a starting amount and increment. If this is nil, then we use the manual balances. |
| `orderCalculationMethod` | 3 | [`PredeterminedOrderCalculationMethod`](#predeterminedordercalculationmethod) | singular | The method to calculate the order of predetermined balances. |

### PredeterminedOrderCalculationMethod

PredeterminedOrderCalculationMethod defines the method to calculate predetermined balances order.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `useOverallNumTransfers` | 1 | `bool` | singular | Use the overall number of transfers to calculate the order. Ex: First transfer gets the first balance, second transfer gets the second balance, etc. |
| `usePerToAddressNumTransfers` | 2 | `bool` | singular | Use the number of transfers per "to" address to calculate the order. Ex: First transfer to address A gets the first balance, second transfer to address A gets the second balance, etc. |
| `usePerFromAddressNumTransfers` | 3 | `bool` | singular | Use the number of transfers per "from" address to calculate the order. Ex: First transfer from address A gets the first balance, second transfer from address A gets the second balance, etc. |
| `usePerInitiatedByAddressNumTransfers` | 4 | `bool` | singular | Use the number of transfers per "initiated by" address to calculate the order. Ex: First transfer initiated by address A gets the first balance, second transfer initiated by address A gets the second balance, etc. |
| `useMerkleChallengeLeafIndex` | 5 | `bool` | singular | Use the Merkle challenge leaf index to calculate the order. Ex: Transfer that uses leaf index 0 gets the first balance, transfer that uses leaf index 1 gets the second balance, etc. |
| `challengeTrackerId` | 6 | `string` | singular | If useMerkleChallengeLeafIndex is set, then this is the ID of the challenge tracker associated with this calculation method. |

### RecurringOwnershipTimes

RecurringOwnershipTimes represents a list of recurring ownership times.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `startTime` | 1 | `string` | singular | The original start time of the first interval. |
| `intervalLength` | 2 | `string` | singular | The interval length in unix milliseconds. |
| `chargePeriodLength` | 3 | `string` | singular | Grace period length where you can charge the next interval (nextStartTime - chargePeriodLength) until (nextStartTime) = charge period |
