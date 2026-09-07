---
description: "Gets the permission variables from a permission name. Variables include the flags, question, and validation function. Cast functions are directly used on the…"
---

# Function: getPermissionVariablesFromName()

> **getPermissionVariablesFromName**(`permissionName`): `object`

Defined in: [packages/bitbadgesjs-sdk/src/core/permission-utils.ts:39](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permission-utils.ts#L39)

Gets the permission variables from a permission name. Variables include the flags, question, and validation function.
Cast functions are directly used on the object itself.

## Parameters

### permissionName

[`PermissionNameString`](/sdk/reference/type-aliases/permission-name-string)

## Returns

`object`

### flags

> **flags**: [`UsedFlags`](/sdk/reference/interfaces/used-flags)

### question

> **question**: `string`

### validateFunction

> **validateFunction**: `any`

### validatePermissionUpdateFunction

> **validatePermissionUpdateFunction**: `any`
