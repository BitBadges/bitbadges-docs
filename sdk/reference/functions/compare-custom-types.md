---
description: "Compares two CustomType objects for equality, accounting for bigints."
---

# Function: compareCustomTypes()

> **compareCustomTypes**\<`T`, `U`\>(`obj1`, `obj2`, `normalizeNumberTypes?`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:287](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L287)

Compares two CustomType objects for equality, accounting for bigints.

## Type Parameters

### T

`T` *extends* [`CustomType`](/sdk/reference/interfaces/custom-type)\<`T`\>

### U

`U` *extends* [`CustomType`](/sdk/reference/interfaces/custom-type)\<`U`\>

## Parameters

### obj1

[`CustomType`](/sdk/reference/interfaces/custom-type)\<`T`\> \| `null` \| `undefined`

### obj2

[`CustomType`](/sdk/reference/interfaces/custom-type)\<`U`\> \| `null` \| `undefined`

### normalizeNumberTypes?

`boolean`

## Returns

`boolean`
