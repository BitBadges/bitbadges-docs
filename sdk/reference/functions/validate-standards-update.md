---
description: "Validates a state transition (old to new) for standards, given the current permissions that are set."
---

# Function: validateStandardsUpdate()

> **validateStandardsUpdate**\<`T`\>(`oldStandards`, `newStandards`, `canUpdateStandards`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:887](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L887)

Validates a state transition (old to new) for standards, given the current permissions that are set.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### oldStandards

`string`[]

### newStandards

`string`[]

### canUpdateStandards

[`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

## Returns

`Error` \| `null`

## Remarks

Can also be used via the corresponding wrapper function in BitBadgesCollection
