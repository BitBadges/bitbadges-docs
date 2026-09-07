---
description: "Iterate collection.standards, run each registered builder, and return the aggregated info object. Builders that return null are dropped. A builder that throws…"
---

# Function: buildStandardsInfo()

> **buildStandardsInfo**(`collection`, `ctx`, `registry`): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts:109](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/info-builders.ts#L109)

Iterate `collection.standards`, run each registered builder, and return the
aggregated info object. Builders that return `null` are dropped. A builder
that throws is logged and skipped — one bad standard must not poison the
whole response.

## Parameters

### collection

[`BitBadgesCollection`](/sdk/reference/classes/bit-badges-collection)\<`bigint`\>

### ctx

[`StandardInfoCtx`](/sdk/reference/interfaces/standard-info-ctx)

### registry

`Record`\<`string`, [`StandardInfoBuilder`](/sdk/reference/interfaces/standard-info-builder)\<`unknown`\>\>

## Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>
