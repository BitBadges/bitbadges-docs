---
description: "Safe subtracts two uints and returns an error if the result is invalid."
---

# Function: safeSubtract()

> **safeSubtract**\<`T`\>(`left`, `right`, `allowNegative?`): `T`

Defined in: [packages/bitbadgesjs-sdk/src/common/math.ts:43](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/math.ts#L43)

Safe subtracts two uints and returns an error if the result is invalid.

Underflows when result is less than 0.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### left

`T`

### right

`T`

### allowNegative?

`boolean` = `false`

## Returns

`T`
