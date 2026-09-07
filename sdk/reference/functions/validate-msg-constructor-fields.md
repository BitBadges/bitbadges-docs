---
description: "Constructor sanity check for MsgUniversalUpdateCollection. Mirrors what the SDK's new MsgUniversalUpdateCollection() and the frontend constructors expect…"
---

# Function: validateMsgConstructorFields()

> **validateMsgConstructorFields**(`value`, `basePath`, `issues`): `void`

Defined in: [packages/bitbadgesjs-sdk/src/core/validate.ts:715](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/validate.ts#L715)

Constructor sanity check for MsgUniversalUpdateCollection.
Mirrors what the SDK's `new MsgUniversalUpdateCollection()` and the frontend constructors expect.
Every field that the SDK/frontend calls .map() or accesses as a property must exist with the right type.
This prevents "Cannot read properties of undefined (reading 'map')" crashes.

## Parameters

### value

`Record`\<`string`, `unknown`\>

### basePath

`string`

### issues

[`ValidationIssue`](/sdk/reference/interfaces/validation-issue)[]

## Returns

`void`
