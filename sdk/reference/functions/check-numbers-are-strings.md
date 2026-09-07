---
description: "Recursively check for non-string numbers in an object. Skips claimConfig subtrees — claim plugin params legitimately use JS numbers."
---

# Function: checkNumbersAreStrings()

> **checkNumbersAreStrings**(`obj`, `path`, `issues`): `void`

Defined in: [packages/bitbadgesjs-sdk/src/core/validate.ts:82](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/validate.ts#L82)

Recursively check for non-string numbers in an object.
Skips claimConfig subtrees — claim plugin params legitimately use JS numbers.

## Parameters

### obj

`unknown`

### path

`string`

### issues

[`ValidationIssue`](/sdk/reference/interfaces/validation-issue)[]

## Returns

`void`
