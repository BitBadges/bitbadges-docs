---
description: "Private params are params that are not visible to the public. For example, the password for a claim code."
---

# Type Alias: ClaimIntegrationPrivateParamsType\<T\>

> **ClaimIntegrationPrivateParamsType**\<`T`\> = `T` *extends* `"password"` ? `object` : `T` *extends* `"codes"` ? `object` : `T` *extends* `"whitelist"` ? `object` : `Record`\<`string`, `any`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:904](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L904)

Private params are params that are not visible to the public. For example, the password for a claim code.

## Type Parameters

### T

`T` *extends* [`ClaimIntegrationPluginType`](/sdk/reference/type-aliases/claim-integration-plugin-type)
