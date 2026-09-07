---
description: "Minify + base64 + data:image/svg+xml;base64,... wrap. Returns { uri, bytes, minified } for observability + tests."
---

# Function: toDataUri()

> **toDataUri**(`svg`): `object`

Defined in: [packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/encode.ts:50](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/encode.ts#L50)

Minify + base64 + `data:image/svg+xml;base64,...` wrap.
Returns `{ uri, bytes, minified }` for observability + tests.

## Parameters

### svg

`string`

## Returns

`object`

### bytes

> **bytes**: `number`

### minified

> **minified**: `string`

### uri

> **uri**: `string`
