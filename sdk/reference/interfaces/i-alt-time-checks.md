---
description: "T extends NumberType"
---

# Interface: iAltTimeChecks\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:42](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L42)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### offlineDays?

> `optional` **offlineDays?**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:46](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L46)

Days (0-6, where 0=Sunday, 1=Monday, ..., 6=Saturday) when transfers should be denied.

***

### offlineDaysOfMonth?

> `optional` **offlineDaysOfMonth?**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:50](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L50)

Days of month (1-31) when transfers should be denied.

***

### offlineHours?

> `optional` **offlineHours?**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L44)

Hours (0-23) when transfers should be denied.

***

### offlineMonths?

> `optional` **offlineMonths?**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:48](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L48)

Months (1-12, where 1=January, 12=December) when transfers should be denied.

***

### offlineWeeksOfYear?

> `optional` **offlineWeeksOfYear?**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:52](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L52)

Weeks of year (1-52) when transfers should be denied. Uses ISO 8601 week numbering.

***

### timezoneOffsetMinutes?

> `optional` **timezoneOffsetMinutes?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:54](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L54)

Timezone offset magnitude in minutes from UTC. Default 0 = UTC.

***

### timezoneOffsetNegative?

> `optional` **timezoneOffsetNegative?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:56](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L56)

If true, the timezone offset is subtracted (west of UTC).
