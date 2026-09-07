---
description: "T extends NumberType"
---

# Interface: iSearchPluginsSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2695](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2695)

## Extends

- [`iGetPluginsSuccessResponse`](/sdk/reference/interfaces/i-get-plugins-success-response)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### bookmark?

> `optional` **bookmark?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2668](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2668)

Bookmark for pagination of the plugins. Only applicable if fetching the directory.

#### Inherited from

[`iGetPluginsSuccessResponse`](/sdk/reference/interfaces/i-get-plugins-success-response).[`bookmark`](/sdk/reference/interfaces/i-get-plugins-success-response#bookmark)

***

### plugins

> **plugins**: [`iPluginDoc`](/sdk/reference/interfaces/i-plugin-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2665](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2665)

#### Inherited from

[`iGetPluginsSuccessResponse`](/sdk/reference/interfaces/i-get-plugins-success-response).[`plugins`](/sdk/reference/interfaces/i-get-plugins-success-response#plugins)
