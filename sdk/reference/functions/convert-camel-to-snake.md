---
description: "Recursively convert all keys in an object/array tree from camelCase to snakecase. Used at the wire boundary when serializing request bodies. Bigints are…"
---

# Function: convertCamelToSnake()

> **convertCamelToSnake**\<`T`\>(`input`): `T`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts:245](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts#L245)

Recursively convert all keys in an object/array tree from camelCase to snake_case.
Used at the wire boundary when serializing request bodies. Bigints are stringified.

## Type Parameters

### T

`T` = `any`

## Parameters

### input

`unknown`

## Returns

`T`
