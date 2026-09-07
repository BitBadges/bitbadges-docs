---
description: "Validates a state transition (old to new) for the timeline, given the current permissions that are set."
---

# Function: validateIsArchivedUpdate()

> **validateIsArchivedUpdate**\<`T`\>(`oldIsArchived`, `newIsArchived`, `canArchiveCollection`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:737](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L737)

Validates a state transition (old to new) for the timeline, given the current permissions that are set.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### oldIsArchived

`boolean`

### newIsArchived

`boolean`

### canArchiveCollection

[`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

## Returns

`Error` \| `null`

## Remarks

Can also be used via the corresponding wrapper function in BitBadgesCollection
