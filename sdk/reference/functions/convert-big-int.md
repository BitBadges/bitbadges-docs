---
description: "Convert a value to bigint, handling string or bigint inputs"
---

# Function: convertBigInt()

> **convertBigInt**(`value`, `defaultValue?`): `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/helpers.ts:107](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/helpers.ts#L107)

Convert a value to bigint, handling string or bigint inputs

## Parameters

### value

`string` \| `number` \| `bigint` \| `null` \| `undefined`

The value to convert

### defaultValue?

`bigint` = `0n`

Default value if value is null/undefined

## Returns

`bigint`

The bigint value
