---
description: "The initial version configuration"
---

# Interface: iCreatePluginPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2411](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2411)

## Properties

### initialVersion

> **initialVersion**: [`PluginVersionConfigPayload`](/sdk/reference/interfaces/plugin-version-config-payload)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2438](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2438)

The initial version configuration

***

### locale?

> `optional` **locale?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2441](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2441)

Locale that is supported by the plugin. By default, we assume 'en' is supported if not specified.

***

### metadata

> **metadata**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2415](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2415)

#### createdBy

> **createdBy**: `string`

The creator of the plugin

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2413](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2413)

The unique plugin ID

***

### toPublish

> **toPublish**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2435](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2435)

To publish in the directory. This will trigger the start of the review process.
