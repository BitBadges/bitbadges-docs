---
description: "Convert a millisecond-epoch timestamp (bigint) to a human-readable date string such as \"January 1, 2025\" or \"January 1, 2025 at 14:30 UTC\". Returns descriptive…"
---

# Function: timestampToDate()

> **timestampToDate**(`ms`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/interpret-shared.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/interpret-shared.ts#L25)

Convert a millisecond-epoch timestamp (bigint) to a human-readable date
string such as "January 1, 2025" or "January 1, 2025 at 14:30 UTC".
Returns descriptive text for boundary values.

## Parameters

### ms

`bigint`

## Returns

`string`
