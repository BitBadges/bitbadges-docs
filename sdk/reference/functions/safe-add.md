---
description: "Safe adds two uints and returns an error if the result is invalid."
---

# Function: safeAdd()

> **safeAdd**\<`T`\>(`a`, `b`): `T`

Defined in: [packages/bitbadgesjs-sdk/src/common/math.ts:18](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/math.ts#L18)

Safe adds two uints and returns an error if the result is invalid.

Note this doesn't actually overflow because we use bigint. This returns an error
if either of the inputs are negative.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### a

`T`

### b

`T`

## Returns

`T`
