---
description: "Validates a state transition (old to new) for custom data, given the current permissions that are set."
---

# Function: validateCustomDataUpdate()

> **validateCustomDataUpdate**\<`T`\>(`oldCustomData`, `newCustomData`, `canUpdateCustomData`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:865](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L865)

Validates a state transition (old to new) for custom data, given the current permissions that are set.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### oldCustomData

`string`

### newCustomData

`string`

### canUpdateCustomData

[`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

## Returns

`Error` \| `null`

## Remarks

Can also be used via the corresponding wrapper function in BitBadgesCollection
