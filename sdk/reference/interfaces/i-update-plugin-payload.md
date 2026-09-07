---
description: "Locale that is supported by the plugin. By default, we assume 'en' is supported if not specified."
---

# Interface: iUpdatePluginPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2457](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2457)

## Properties

### locale?

> `optional` **locale?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2498](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2498)

Locale that is supported by the plugin. By default, we assume 'en' is supported if not specified.

***

### metadata?

> `optional` **metadata?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2461](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2461)

#### createdBy?

> `optional` **createdBy?**: `string`

Creator of the plugin

#### description

> **description**: `string`

Description of the plugin

#### documentation?

> `optional` **documentation?**: `string`

Documentation for the plugin

#### image

> **image**: `string`

The image of the plugin

#### name

> **name**: `string`

The name of the plugin

#### parentApp?

> `optional` **parentApp?**: `string`

Parent app of the plugin. If blank, treated as its own app / entity.

#### sourceCode?

> `optional` **sourceCode?**: `string`

Source code for the plugin

#### supportLink?

> `optional` **supportLink?**: `string`

Support link for the plugin

***

### pluginId

> **pluginId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2459](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2459)

The unique plugin ID

***

### rotatePluginSecret?

> `optional` **rotatePluginSecret?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2484](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2484)

Rotate the plugin secret?

***

### toPublish?

> `optional` **toPublish?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2481](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2481)

To publish in the directory. This will trigger the start of the review process.

***

### versionCreate?

> `optional` **versionCreate?**: [`PluginVersionConfigPayload`](/sdk/reference/interfaces/plugin-version-config-payload)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2495](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2495)

Create a new version

***

### versionUpdates?

> `optional` **versionUpdates?**: `object`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2487](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2487)

Update an existing version

#### config

> **config**: `Partial`\<[`PluginVersionConfigPayload`](/sdk/reference/interfaces/plugin-version-config-payload)\>

The configuration for this version

#### version

> **version**: [`NumberType`](/sdk/reference/type-aliases/number-type)

The version to update
