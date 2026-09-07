---
description: "Validates a state transition (old to new) for token metadata, given the current permissions that are set."
---

# Function: validateTokenMetadataUpdate()

> **validateTokenMetadataUpdate**\<`T`\>(`oldTokenMetadata`, `newTokenMetadata`, `canUpdateTokenMetadata`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:776](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L776)

Validates a state transition (old to new) for token metadata, given the current permissions that are set.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### oldTokenMetadata

[`TokenMetadata`](/sdk/reference/classes/token-metadata)\<`T`\>[]

### newTokenMetadata

[`TokenMetadata`](/sdk/reference/classes/token-metadata)\<`T`\>[]

### canUpdateTokenMetadata

[`TokenIdsActionPermission`](/sdk/reference/classes/token-ids-action-permission)\<`T`\>[]

## Returns

`Error` \| `null`

## Remarks

Can also be used via the corresponding wrapper function in BitBadgesCollection
