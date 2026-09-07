---
description: "Project a standard's computed info into its CollectionIndexProjection, using the builder's index() when present and a status-only default otherwise. Single…"
---

# Function: projectStandardIndex()

> **projectStandardIndex**(`builder`, `collection`, `info`, `ctx`): [`CollectionIndexProjection`](/sdk/reference/interfaces/collection-index-projection)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:90](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L90)

Project a standard's computed `info` into its [CollectionIndexProjection](/sdk/reference/interfaces/collection-index-projection),
using the builder's `index()` when present and a status-only default otherwise.
Single source of the default so every indexed standard behaves consistently.

## Parameters

### builder

[`StandardInfoBuilder`](/sdk/reference/interfaces/standard-info-builder)\<`unknown`\>

### collection

[`BitBadgesCollection`](/sdk/reference/classes/bit-badges-collection)\<`bigint`\>

### info

`unknown`

### ctx

[`StandardInfoCtx`](/sdk/reference/interfaces/standard-info-ctx)

## Returns

[`CollectionIndexProjection`](/sdk/reference/interfaces/collection-index-projection)
