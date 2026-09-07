---
description: "Convert UintRange array from SDK format to JSON format (strings for bigint values)"
---

# Function: convertUintRanges()

> **convertUintRanges**(`ranges`): `object`[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/helpers.ts:91](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/helpers.ts#L91)

Convert UintRange array from SDK format to JSON format (strings for bigint values)

## Parameters

### ranges

[`UintRange`](/sdk/reference/classes/uint-range)\<`string` \| `bigint`\>[]

Array of UintRange from SDK (can be string or bigint)

## Returns

`object`[]

Array of {start: string, end: string} for JSON serialization
