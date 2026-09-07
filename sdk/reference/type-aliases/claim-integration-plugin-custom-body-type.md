---
description: "T extends ClaimIntegrationPluginType"
---

# Type Alias: ClaimIntegrationPluginCustomBodyType\<T\>

> **ClaimIntegrationPluginCustomBodyType**\<`T`\> = `T` *extends* `"codes"` ? `object` : `T` *extends* `"password"` ? `object` : `T` *extends* `"email"` ? `object` : `Record`\<`string`, `any`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:856](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L856)

## Type Parameters

### T

`T` *extends* [`ClaimIntegrationPluginType`](/sdk/reference/type-aliases/claim-integration-plugin-type)
