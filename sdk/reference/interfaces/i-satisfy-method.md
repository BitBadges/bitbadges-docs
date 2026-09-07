---
description: "Conditions can either be the instance ID string of the plugin to check success for or another satisfyMethod object."
---

# Interface: iSatisfyMethod

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1070](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1070)

## Properties

### conditions

> **conditions**: (`string` \| `iSatisfyMethod`)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1073](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1073)

Conditions can either be the instance ID string of the plugin to check success for or another satisfyMethod object.

***

### options?

> `optional` **options?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1074](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1074)

#### minNumSatisfied?

> `optional` **minNumSatisfied?**: `number`

Only applicable to OR logic. Implements M of N logic.

***

### type

> **type**: `"AND"` \| `"OR"` \| `"NOT"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1071](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1071)
