---
description: "T extends ClaimIntegrationPluginType"
---

# Interface: IntegrationPluginDetailsUpdate\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:998](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L998)

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

### newState?

> `optional` **newState?**: [`ClaimIntegrationPublicStateType`](/sdk/reference/type-aliases/claim-integration-public-state-type)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1009](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1009)

If newState is present, we will set the state to the new state. Incompatible with resetState. Can be used alongside onlyUpdateProvidedNewState.
By default, we will overwrite the whole state. If onlyUpdateProvidedNewState is true, we will only update the specific provided fields.

Warning: This is an advanced feature and should be used with caution. Misconfiguring this can lead to unexpected behavior of this plugin.

Note: Each plugin may have different state schemas. Please refer to the documentation of the plugin you are updating for more information.

***

### onlyUpdateProvidedNewState?

> `optional` **onlyUpdateProvidedNewState?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1018](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1018)

If true, we will only update the specific fields provided in newState. If falsy, we will overwrite the whole state with newState.

Only applicable if newState is present.

Note that we do this on a recursive level. If you have nested objects, we will only update the specific fields provided for those nested objects
and leave all else as-is.

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

### publicParams

> **publicParams**: [`ClaimIntegrationPublicParamsType`](/sdk/reference/type-aliases/claim-integration-public-params-type)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:978](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L978)

The parameters of the plugin that are visible to the public. These are custom per plugin type.

#### Inherited from

[`IntegrationPluginParams`](/sdk/reference/interfaces/integration-plugin-params).[`publicParams`](/sdk/reference/interfaces/integration-plugin-params#publicparams)

***

### resetState?

> `optional` **resetState?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1000](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1000)

If resetState = true, we will reset the state of the plugin back to default. If false, we will keep the current state. Incompatible with newState.

***

### version

> **version**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:976](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L976)

The version of the plugin

#### Inherited from

[`IntegrationPluginParams`](/sdk/reference/interfaces/integration-plugin-params).[`version`](/sdk/reference/interfaces/integration-plugin-params#version)
