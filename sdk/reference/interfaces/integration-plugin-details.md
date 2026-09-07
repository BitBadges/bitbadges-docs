---
description: "T extends ClaimIntegrationPluginType"
---

# Interface: IntegrationPluginDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:988](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L988)

## Extends

- [`IntegrationPluginParams`](/sdk/reference/interfaces/integration-plugin-params)\<`T`\>

## Type Parameters

### T

`T` *extends* [`ClaimIntegrationPluginType`](/sdk/reference/type-aliases/claim-integration-plugin-type)

## Properties

### instanceId

> **instanceId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:969](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L969)

The ID of the plugin instance. This is a unique identifier for referencing this instance of the plugin within this claim
(e.g. differentiate between duplicates of the same plugin type).

This is different from the pluginId, which is a unique identifier for the plugin itself. All instances of the same plugin
will have the same pluginId.

#### Inherited from

[`IntegrationPluginParams`](/sdk/reference/interfaces/integration-plugin-params).[`instanceId`](/sdk/reference/interfaces/integration-plugin-params#instanceid)

***

### metadata?

> `optional` **metadata?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:982](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L982)

Custom display metadata for the plugin. This will override the default metadata for the plugin.

#### description

> **description**: `string`

#### image?

> `optional` **image?**: `string`

#### name

> **name**: `string`

#### Inherited from

[`IntegrationPluginParams`](/sdk/reference/interfaces/integration-plugin-params).[`metadata`](/sdk/reference/interfaces/integration-plugin-params#metadata)

***

### pluginId

> **pluginId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:974](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L974)

The ID of the plugin (e.g. "numUses"). This is the reusable plugin ID.
Do not use this as a unique identifier for the plugin instance as there could be duplicate pluginIds. Use instanceId instead.

#### Inherited from

[`IntegrationPluginParams`](/sdk/reference/interfaces/integration-plugin-params).[`pluginId`](/sdk/reference/interfaces/integration-plugin-params#pluginid)

***

### privateParams

> **privateParams**: [`ClaimIntegrationPrivateParamsType`](/sdk/reference/type-aliases/claim-integration-private-params-type)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:980](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L980)

The parameters of the plugin that are not visible to the public. These are custom per plugin type.

#### Inherited from

[`IntegrationPluginParams`](/sdk/reference/interfaces/integration-plugin-params).[`privateParams`](/sdk/reference/interfaces/integration-plugin-params#privateparams)

***

### privateState?

> `optional` **privateState?**: [`ClaimIntegrationPrivateStateType`](/sdk/reference/type-aliases/claim-integration-private-state-type)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:992](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L992)

The private state of the plugin. This is the exact state used by BitBadges behind the scenes.

***

### publicParams

> **publicParams**: [`ClaimIntegrationPublicParamsType`](/sdk/reference/type-aliases/claim-integration-public-params-type)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:978](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L978)

The parameters of the plugin that are visible to the public. These are custom per plugin type.

#### Inherited from

[`IntegrationPluginParams`](/sdk/reference/interfaces/integration-plugin-params).[`publicParams`](/sdk/reference/interfaces/integration-plugin-params#publicparams)

***

### publicState

> **publicState**: [`ClaimIntegrationPublicStateType`](/sdk/reference/type-aliases/claim-integration-public-state-type)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:990](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L990)

The current state of the plugin. This is returned by BitBadges for information purposes. This is altered to not reveal sensitive information.

***

### version

> **version**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:976](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L976)

The version of the plugin

#### Inherited from

[`IntegrationPluginParams`](/sdk/reference/interfaces/integration-plugin-params).[`version`](/sdk/reference/interfaces/integration-plugin-params#version)
