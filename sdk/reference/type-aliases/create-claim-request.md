---
description: "T extends NumberType"
---

# Type Alias: CreateClaimRequest\<T\>

> **CreateClaimRequest**\<`T`\> = `Omit`\<[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details)\<`T`\>, `"plugins"` \| `"version"` \| `"trackerDetails"` \| `"_includesPrivateParams"` \| `"_templateInfo"` \| `"managedBy"` \| `"createdBy"` \| `"standaloneClaim"` \| `"lastUpdated"`\> & `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1029](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1029)

## Type Declaration

### cid?

> `optional` **cid?**: `string`

### metadata?

> `optional` **metadata?**: [`iMetadataWithoutInternals`](/sdk/reference/type-aliases/i-metadata-without-internals)\<`T`\>

### plugins

> **plugins**: [`ManagePluginRequest`](/sdk/reference/type-aliases/manage-plugin-request)[]

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)
