---
description: "Approval id — caller picks; usually a fresh UUID."
---

# Interface: UserRecurringApprovalArgs

Defined in: [packages/bitbadgesjs-sdk/src/core/subscriptions.ts:358](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/subscriptions.ts#L358)

## Properties

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/subscriptions.ts:368](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/subscriptions.ts#L368)

Approval id — caller picks; usually a fresh UUID.

***

### denom

> **denom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/subscriptions.ts:372](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/subscriptions.ts#L372)

Coin denom — must match the faucet's coinTransfer denom.

***

### detailsDescription?

> `optional` **detailsDescription?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/subscriptions.ts:376](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/subscriptions.ts#L376)

Optional override for `details.description`. Defaults to a short English string.

***

### detailsName?

> `optional` **detailsName?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/subscriptions.ts:374](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/subscriptions.ts#L374)

Optional override for `details.name`. Defaults to "Recurring Approval".

***

### firstIntervalStartTime

> **firstIntervalStartTime**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/subscriptions.ts:362](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/subscriptions.ts#L362)

First charge window's start time, in ms since epoch.

***

### subscriptionApproval

> **subscriptionApproval**: [`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details)\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/subscriptions.ts:360](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/subscriptions.ts#L360)

The faucet (collection-side) subscription approval this recurring approval consents to.

***

### tokenIds

> **tokenIds**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`bigint`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/subscriptions.ts:370](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/subscriptions.ts#L370)

Token ids the subscription mints. Lifted directly from the faucet approval.

***

### transferTimes

> **transferTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/subscriptions.ts:366](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/subscriptions.ts#L366)

Outer window during which the recurring approval is active. Typically `UintRangeArray.FullRanges()`.

***

### ubadgeTipAmount

> **ubadgeTipAmount**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/subscriptions.ts:364](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/subscriptions.ts#L364)

Optional tip added on top of the base subscription amount each interval. Pass 0n for no tip.
