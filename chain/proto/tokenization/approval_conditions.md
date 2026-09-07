---
description: "Generated schema for tokenization/approval_conditions.proto: 7 messages in the x/tokenization module."
---

# tokenization/approval_conditions.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 7 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/approval_conditions.proto).

## Messages

### AddressChecks

AddressChecks defines checks for address types (EVM contract, liquidity pool, etc.)

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `mustBeEvmContract` | 1 | `bool` | singular | Require the address to be an EVM contract (has code). |
| `mustNotBeEvmContract` | 2 | `bool` | singular | Require the address to not be an EVM contract (no code). |
| `mustBeLiquidityPool` | 3 | `bool` | singular | Require the address to be a liquidity pool. |
| `mustNotBeLiquidityPool` | 4 | `bool` | singular | Require the address to not be a liquidity pool. |

### AltTimeChecks

AltTimeChecks defines alternative time-based checks for approval denial.

If the transfer time falls within any of the specified offline hours or days, the approval is denied.

Uses UTC timezone for neutral timezone approach.

offlineHours: ranges of hours (0-23) when transfers should be denied

offlineDays: ranges of days (0-6, where 0=Sunday, 1=Monday, ..., 6=Saturday) when transfers should be denied

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `offlineHours` | 1 | [`UintRange`](balances.md#uintrange) | repeated | Hours (0-23) when transfers should be denied. |
| `offlineDays` | 2 | [`UintRange`](balances.md#uintrange) | repeated | Days (0-6, where 0=Sunday, 1=Monday, ..., 6=Saturday) when transfers should be denied. |
| `offlineMonths` | 3 | [`UintRange`](balances.md#uintrange) | repeated | Months (1-12, where 1=January, 12=December) when transfers should be denied. |
| `offlineDaysOfMonth` | 4 | [`UintRange`](balances.md#uintrange) | repeated | Days of month (1-31) when transfers should be denied. |
| `offlineWeeksOfYear` | 5 | [`UintRange`](balances.md#uintrange) | repeated | Weeks of year (1-52) when transfers should be denied. Uses ISO 8601 week numbering. |
| `timezoneOffsetMinutes` | 6 | `string` | singular | Timezone offset magnitude in minutes from UTC. Default 0 = UTC. Examples: 300 for EST (UTC-5), 330 for IST (UTC+5:30). All time checks are evaluated after applying this offset to the block time. |
| `timezoneOffsetNegative` | 7 | `bool` | singular | If true, the timezone offset is subtracted (west of UTC). If false, it is added (east of UTC). Example: EST (UTC-5) = timezoneOffsetMinutes: 300, timezoneOffsetNegative: true |

### CoinTransfer

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `to` | 1 | `string` | singular | The address of the recipient of the transfer. |
| `coins` | 2 | `cosmos.base.v1beta1.Coin` | repeated | The sdk.Coins to be transferred. |
| `overrideFromWithApproverAddress` | 3 | `bool` | singular | By default, the from address is the initiator of the transaction. If this is set to true, we will override the from address with the approver address. Note: This is not applicable for collection approvals (since approverAddress == ''). |
| `overrideToWithInitiator` | 4 | `bool` | singular | By default, the to address is what is specified in the coin transfer. If this is set to true, we will override the to address with the initiator of the transaction. |

### DynamicStoreChallenge

DynamicStoreChallenge defines a challenge that requires the initiator to pass a dynamic store check.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `storeId` | 1 | `string` | singular | The ID of the dynamic store to check. |
| `ownershipCheckParty` | 2 | `string` | singular | The party to check ownership for. Options are "initiator", "sender", "recipient", or any valid bb1 address. If a valid bb1 address is provided, ownership will be checked for that specific address. This enables use cases like halt tokens where ownership is checked for an arbitrary address (e.g., halt token owner). Defaults to "initiator" if empty or if the value is not a recognized option or valid bb1 address. |

### MustOwnTokens

MustOwnTokens represents a condition where a user must own specific tokens to be approved to transfer.

- collectionId: The ID of the collection for the tokens that must be owned - amountRange: The range of amounts the user must own (min to max) - ownershipTimes: The time ranges during which the user must own the tokens. - tokenIds: The token IDs the user must own. - overrideWithCurrentTime: If true, auto override ownershipTimes with the current time. - mustSatisfyForAllAssets: If true, the user must own all specified tokens; otherwise, owning any one for &gt;= 1 millisecond is sufficient.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular | The ID of the collection. |
| `amountRange` | 2 | [`UintRange`](balances.md#uintrange) | singular | The range of amounts the user must own (min to max). |
| `ownershipTimes` | 3 | [`UintRange`](balances.md#uintrange) | repeated | The time ranges during which the user must own the tokens. |
| `tokenIds` | 4 | [`UintRange`](balances.md#uintrange) | repeated | The token IDs the user must own. |
| `overrideWithCurrentTime` | 5 | `bool` | singular | If true, override ownershipTimes with the current time. |
| `mustSatisfyForAllAssets` | 6 | `bool` | singular | If true, the user must meet ownership requirements for all specified tokens; else, must meet requirements for any single token. |
| `ownershipCheckParty` | 7 | `string` | singular | The party to check ownership for. Options are "initiator", "sender", "recipient", or any valid bb1 address. If a valid bb1 address is provided, ownership will be checked for that specific address. This enables use cases like halt tokens where ownership is checked for an arbitrary address (e.g., halt token owner). Defaults to "initiator" if empty or if the value is not a recognized option or valid bb1 address. |

### UserApprovalSettings

UserApprovalSettings defines issuer-imposed constraints on user-level approvals.

Set on collection-level ApprovalCriteria and propagated to user-level approvals

during greedy transfer matching. Each balance slice carries its own settings.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `allowedDenoms` | 1 | `string` | repeated | Restricts which denoms user-level coinTransfers can reference (beyond params-level AllowedDenoms). If empty, all params-allowed denoms are permitted. |
| `disableUserCoinTransfers` | 2 | `bool` | singular | If true, user-level approvals cannot trigger coinTransfers at all for transfers matched by this collection approval. |
| `userRoyalties` | 3 | [`UserRoyalties`](#userroyalties) | singular | User-level royalties to enforce for transfers matched by this collection approval. |

### UserRoyalties

UserRoyalties defines the royalties for a user.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `percentage` | 1 | `string` | singular | Percentage of the transfer amount to apply as royalties. 1 to 10000 represents basis points. |
| `payoutAddress` | 2 | `string` | singular | Payout address for the royalties. |
