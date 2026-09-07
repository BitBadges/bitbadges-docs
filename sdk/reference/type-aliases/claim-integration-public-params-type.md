---
description: "Public params are params that are visible to the public. For example, the number of uses for a claim code."
---

# Type Alias: ClaimIntegrationPublicParamsType\<T\>

> **ClaimIntegrationPublicParamsType**\<`T`\> = `T` *extends* `"numUses"` ? `object` : `T` *extends* `"codes"` ? `object` : `T` *extends* `"transferTimes"` ? `object` : `T` *extends* `"whitelist"` ? `object` : `Record`\<`string`, `any`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:875](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L875)

Public params are params that are visible to the public. For example, the number of uses for a claim code.

## Type Parameters

### T

`T` *extends* [`ClaimIntegrationPluginType`](/sdk/reference/type-aliases/claim-integration-plugin-type)
