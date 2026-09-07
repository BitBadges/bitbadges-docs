---
description: "Recursively convert all keys in an object/array tree from snakecase to camelCase. Numeric string fields are preserved as strings (no parseInt/parseFloat)."
---

# Function: convertSnakeToCamel()

> **convertSnakeToCamel**\<`T`\>(`input`): `T`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts:227](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts#L227)

Recursively convert all keys in an object/array tree from snake_case to camelCase.
Numeric string fields are preserved as strings (no parseInt/parseFloat).

## Type Parameters

### T

`T` = `any`

## Parameters

### input

`unknown`

## Returns

`T`
