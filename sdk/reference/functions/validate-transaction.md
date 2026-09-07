---
description: "Validate a BitBadges transaction object against critical rules."
---

# Function: validateTransaction()

> **validateTransaction**(`txBody`): [`ValidationResult`](/sdk/reference/interfaces/validation-result)

Defined in: [packages/bitbadgesjs-sdk/src/core/validate.ts:967](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/validate.ts#L967)

Validate a BitBadges transaction object against critical rules.

Checks for common errors like numbers not being strings, missing required fields,
invalid list IDs, and SDK constructor compatibility.

## Parameters

### txBody

`any`

The parsed transaction object (must have a `messages` array).

## Returns

[`ValidationResult`](/sdk/reference/interfaces/validation-result)

A `ValidationResult` with `valid` (true if no errors) and `issues`.
