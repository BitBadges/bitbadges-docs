---
description: "Base64-encode a UTF-8 string. Prefers Buffer (Node) and falls back to btoa w/ a UTF-8-safe path for browsers — the SDK runs in both."
---

# Function: base64Encode()

> **base64Encode**(`input`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/encode.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/builder/generators/placeholder-art/encode.ts#L34)

Base64-encode a UTF-8 string. Prefers Buffer (Node) and falls back
to btoa w/ a UTF-8-safe path for browsers — the SDK runs in both.

## Parameters

### input

`string`

## Returns

`string`
