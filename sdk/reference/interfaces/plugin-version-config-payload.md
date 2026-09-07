---
description: "Custom details display for the plugin. Use {{publicParamKey}} to dynamically display the values of public parameters."
---

# Interface: PluginVersionConfigPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2361](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2361)

## Properties

### customDetailsDisplay?

> `optional` **customDetailsDisplay?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2404](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2404)

Custom details display for the plugin. Use {{publicParamKey}} to dynamically display the values of public parameters.

***

### duplicatesAllowed

> **duplicatesAllowed**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2369](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2369)

Whether it makes sense for multiple of this plugin to be allowed

***

### finalized

> **finalized**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2363](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2363)

Finalized

***

### ignoreSimulations?

> `optional` **ignoreSimulations?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2378](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2378)

Ignore simulations?

***

### privateParamsSchema?

> `optional` **privateParamsSchema?**: [`JsonBodyInputSchema`](/sdk/reference/type-aliases/json-body-input-schema)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2391](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2391)

***

### publicParamsSchema?

> `optional` **publicParamsSchema?**: [`JsonBodyInputSchema`](/sdk/reference/type-aliases/json-body-input-schema)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2390](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2390)

***

### receiveStatusWebhook

> **receiveStatusWebhook**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2372](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2372)

Whether the plugin should receive status webhooks

***

### requireSignIn?

> `optional` **requireSignIn?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2401](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2401)

Require BitBadges sign-in to use the plugin?

***

### requiresSessions

> **requiresSessions**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2387](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2387)

This means that the plugin can be used w/o any session cookies or authentication.

***

### requiresUserInputs

> **requiresUserInputs**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2384](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2384)

This is a flag for being compatible with auto-triggered claims, meaning no user interaction is needed.

***

### reuseForNonIndexed

> **reuseForNonIndexed**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2381](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2381)

Reuse for non-indexed?

***

### skipProcessingWebhook?

> `optional` **skipProcessingWebhook?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2375](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2375)

Whether the plugin should skip processing webhooks. We will just auto-treat it as successful.

***

### stateFunctionPreset

> **stateFunctionPreset**: [`PluginPresetType`](/sdk/reference/enumerations/plugin-preset-type)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2366](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2366)

Preset type for how the plugin state is to be maintained.

***

### userInputsSchema?

> `optional` **userInputsSchema?**: [`JsonBodyInputSchema`](/sdk/reference/type-aliases/json-body-input-schema)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2389](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2389)

***

### verificationCall?

> `optional` **verificationCall?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2394](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2394)

The verification URL

#### hardcodedInputs

> **hardcodedInputs**: [`JsonBodyInputWithValue`](/sdk/reference/type-aliases/json-body-input-with-value)[]

#### passAddress?

> `optional` **passAddress?**: `boolean`

#### uri

> **uri**: `string`
