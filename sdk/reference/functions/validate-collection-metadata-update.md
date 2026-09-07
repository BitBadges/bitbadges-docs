---
description: "Validates a state transition (old to new) for collection metadata, given the current permissions that are set."
---

# Function: validateCollectionMetadataUpdate()

> **validateCollectionMetadataUpdate**\<`T`\>(`oldCollectionMetadata`, `newCollectionMetadata`, `canUpdateCollectionMetadata`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:821](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L821)

Validates a state transition (old to new) for collection metadata, given the current permissions that are set.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### oldCollectionMetadata

[`iCollectionMetadata`](/sdk/reference/interfaces/i-collection-metadata)

### newCollectionMetadata

[`iCollectionMetadata`](/sdk/reference/interfaces/i-collection-metadata)

### canUpdateCollectionMetadata

[`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

## Returns

`Error` \| `null`

## Remarks

Can also be used via the corresponding wrapper function in BitBadgesCollection
