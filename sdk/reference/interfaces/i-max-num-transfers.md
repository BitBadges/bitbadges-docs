---
description: "T extends NumberType"
---

# Interface: iMaxNumTransfers\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:244](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L244)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### amountTrackerId

> **amountTrackerId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:254](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L254)

The ID of the approval tracker. This is the key used to track tallies.

***

### overallMaxNumTransfers

> **overallMaxNumTransfers**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:246](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L246)

The overall maximum number of transfers for the tokenIDs and ownershipTimes. Running tally that includes all transfers that match this approval.

***

### perFromAddressMaxNumTransfers

> **perFromAddressMaxNumTransfers**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:250](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L250)

The maximum number of transfers for the tokenIDs and ownershipTimes for each from address. Running tally that includes all transfers from each unique from address that match this approval.

***

### perInitiatedByAddressMaxNumTransfers

> **perInitiatedByAddressMaxNumTransfers**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:252](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L252)

The maximum number of transfers for the tokenIDs and ownershipTimes for each initiated by address. Running tally that includes all transfers from each unique initiated by address that match this approval.

***

### perToAddressMaxNumTransfers

> **perToAddressMaxNumTransfers**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:248](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L248)

The maximum number of transfers for the tokenIDs and ownershipTimes for each to address. Running tally that includes all transfers from each unique to address that match this approval.

***

### resetTimeIntervals

> **resetTimeIntervals**: [`iResetTimeIntervals`](/sdk/reference/interfaces/i-reset-time-intervals)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:256](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L256)

The time intervals to reset the tracker at.
