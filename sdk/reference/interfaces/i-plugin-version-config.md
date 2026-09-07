---
description: "T extends NumberType"
---

# Interface: iPluginVersionConfig\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1821](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1821)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### createdAt

> **createdAt**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1829](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1829)

The time the version was created

***

### customDetailsDisplay?

> `optional` **customDetailsDisplay?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1872](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1872)

Custom details display for the plugin. Use {{publicParamKey}} to dynamically display the values of public parameters.

***

### duplicatesAllowed

> **duplicatesAllowed**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1850](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1850)

Whether it makes sense for multiple of this plugin to be allowed

***

### finalized

> **finalized**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1826](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1826)

True if the version is finalized

***

### ignoreSimulations?

> `optional` **ignoreSimulations?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1844](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1844)

Ignore simulations?

***

### lastUpdated

> **lastUpdated**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1832](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1832)

The time the version was last updated

***

### privateParamsSchema

> **privateParamsSchema**: [`JsonBodyInputSchema`](/sdk/reference/type-aliases/json-body-input-schema)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1860](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1860)

***

### publicParamsSchema

> **publicParamsSchema**: [`JsonBodyInputSchema`](/sdk/reference/type-aliases/json-body-input-schema)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1859](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1859)

***

### receiveStatusWebhook

> **receiveStatusWebhook**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1838](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1838)

Whether the plugin should receive status webhooks

***

### requireSignIn?

> `optional` **requireSignIn?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1877](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1877)

Require BitBadges sign-in to use the plugin?

***

### requiresSessions

> **requiresSessions**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1853](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1853)

This means that the plugin can be used w/o any session cookies or authentication.

***

### requiresUserInputs

> **requiresUserInputs**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1856](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1856)

This is a flag for being compatible with auto-triggered claims, meaning no user interaction is needed.

***

### reuseForNonIndexed

> **reuseForNonIndexed**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1835](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1835)

Reuse for nonindexed balances? Only applicable if is stateless, requires no user inputs, and requires no sessions.

***

### skipProcessingWebhook?

> `optional` **skipProcessingWebhook?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1841](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1841)

Whether the plugin should skip processing webhooks. We will just auto-treat it as successful.

***

### stateFunctionPreset

> **stateFunctionPreset**: [`PluginPresetType`](/sdk/reference/enumerations/plugin-preset-type)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1847](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1847)

Preset type for how the plugin state is to be maintained.

***

### userInputsSchema

> **userInputsSchema**: [`JsonBodyInputSchema`](/sdk/reference/type-aliases/json-body-input-schema)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1858](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1858)

***

### verificationCall?

> `optional` **verificationCall?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1863](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1863)

The verification URL config. This lets us know what should be passed to the plugin payload.

#### hardcodedInputs

> **hardcodedInputs**: [`JsonBodyInputWithValue`](/sdk/reference/type-aliases/json-body-input-with-value)[]

#### passAddress?

> `optional` **passAddress?**: `boolean`

#### uri

> **uri**: `string`

***

### version

> **version**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1823](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1823)

Version of the plugin
