---
description: "Validates a state transition (old to new) for manager, given the current permissions that are set."
---

# Function: validateManagerUpdate()

> **validateManagerUpdate**\<`T`\>(`oldManager`, `newManager`, `canUpdateManager`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:843](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L843)

Validates a state transition (old to new) for manager, given the current permissions that are set.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### oldManager

`string`

### newManager

`string`

### canUpdateManager

[`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

## Returns

`Error` \| `null`

## Remarks

Can also be used via the corresponding wrapper function in BitBadgesCollection
