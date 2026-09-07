---
description: "T extends NumberType"
---

# Interface: iSearchPluginsSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2694](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2694)

## Extends

- [`iGetPluginsSuccessResponse`](/sdk/reference/interfaces/i-get-plugins-success-response)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### bookmark?

> `optional` **bookmark?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2667](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2667)

Bookmark for pagination of the plugins. Only applicable if fetching the directory.

#### Inherited from

[`iGetPluginsSuccessResponse`](/sdk/reference/interfaces/i-get-plugins-success-response).[`bookmark`](/sdk/reference/interfaces/i-get-plugins-success-response#bookmark)

***

### plugins

> **plugins**: [`iPluginDoc`](/sdk/reference/interfaces/i-plugin-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2664](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2664)

#### Inherited from

[`iGetPluginsSuccessResponse`](/sdk/reference/interfaces/i-get-plugins-success-response).[`plugins`](/sdk/reference/interfaces/i-get-plugins-success-response#plugins)
