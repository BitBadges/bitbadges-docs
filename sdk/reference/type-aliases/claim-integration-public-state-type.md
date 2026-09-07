---
description: "Public state is the current state of the claim integration that is visible to the public. For example, the number of times a claim code has been used."
---

# Type Alias: ClaimIntegrationPublicStateType\<T\>

> **ClaimIntegrationPublicStateType**\<`T`\> = `T` *extends* `"numUses"` ? `object` : `T` *extends* `"codes"` ? `object` : `Record`\<`string`, `any`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:929](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L929)

Public state is the current state of the claim integration that is visible to the public. For example, the number of times a claim code has been used.

## Type Parameters

### T

`T` *extends* [`ClaimIntegrationPluginType`](/sdk/reference/type-aliases/claim-integration-plugin-type)
