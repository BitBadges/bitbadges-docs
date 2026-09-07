---
description: "T extends NumberType"
---

# Interface: iApprovalAmounts\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:212](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L212)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### amountTrackerId

> **amountTrackerId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:222](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L222)

The ID of the approval tracker. This is the key used to track tallies.

***

### overallApprovalAmount

> **overallApprovalAmount**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:214](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L214)

The overall maximum amount approved for the tokenIDs and ownershipTimes. Running tally that includes all transfers that match this approval.

***

### perFromAddressApprovalAmount

> **perFromAddressApprovalAmount**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:218](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L218)

The maximum amount approved for the tokenIDs and ownershipTimes for each from address. Running tally that includes all transfers from each unique from address that match this approval.

***

### perInitiatedByAddressApprovalAmount

> **perInitiatedByAddressApprovalAmount**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:220](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L220)

The maximum amount approved for the tokenIDs and ownershipTimes for each initiated by address. Running tally that includes all transfers from each unique initiated by address that match this approval.

***

### perToAddressApprovalAmount

> **perToAddressApprovalAmount**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:216](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L216)

The maximum amount approved for the tokenIDs and ownershipTimes for each to address. Running tally that includes all transfers from each unique to address that match this approval.

***

### resetTimeIntervals

> **resetTimeIntervals**: [`iResetTimeIntervals`](/sdk/reference/interfaces/i-reset-time-intervals)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:224](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L224)

The time intervals to reset the tracker at.
