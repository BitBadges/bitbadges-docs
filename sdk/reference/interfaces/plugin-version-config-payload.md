---
description: "Custom details display for the plugin. Use {{publicParamKey}} to dynamically display the values of public parameters."
---

# Interface: PluginVersionConfigPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2362](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2362)

## Properties

### customDetailsDisplay?

> `optional` **customDetailsDisplay?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2405](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2405)

Custom details display for the plugin. Use {{publicParamKey}} to dynamically display the values of public parameters.

***

### duplicatesAllowed

> **duplicatesAllowed**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2370](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2370)

Whether it makes sense for multiple of this plugin to be allowed

***

### finalized

> **finalized**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2364](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2364)

Finalized

***

### ignoreSimulations?

> `optional` **ignoreSimulations?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2379](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2379)

Ignore simulations?

***

### privateParamsSchema?

> `optional` **privateParamsSchema?**: [`JsonBodyInputSchema`](/sdk/reference/type-aliases/json-body-input-schema)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2392](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2392)

***

### publicParamsSchema?

> `optional` **publicParamsSchema?**: [`JsonBodyInputSchema`](/sdk/reference/type-aliases/json-body-input-schema)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2391](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2391)

***

### receiveStatusWebhook

> **receiveStatusWebhook**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2373](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2373)

Whether the plugin should receive status webhooks

***

### requireSignIn?

> `optional` **requireSignIn?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2402](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2402)

Require BitBadges sign-in to use the plugin?

***

### requiresSessions

> **requiresSessions**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2388](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2388)

This means that the plugin can be used w/o any session cookies or authentication.

***

### requiresUserInputs

> **requiresUserInputs**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2385](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2385)

This is a flag for being compatible with auto-triggered claims, meaning no user interaction is needed.

***

### reuseForNonIndexed

> **reuseForNonIndexed**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2382](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2382)

Reuse for non-indexed?

***

### skipProcessingWebhook?

> `optional` **skipProcessingWebhook?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2376](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2376)

Whether the plugin should skip processing webhooks. We will just auto-treat it as successful.

***

### stateFunctionPreset

> **stateFunctionPreset**: [`PluginPresetType`](/sdk/reference/enumerations/plugin-preset-type)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2367](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2367)

Preset type for how the plugin state is to be maintained.

***

### userInputsSchema?

> `optional` **userInputsSchema?**: [`JsonBodyInputSchema`](/sdk/reference/type-aliases/json-body-input-schema)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2390](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2390)

***

### verificationCall?

> `optional` **verificationCall?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2395](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2395)

The verification URL

#### hardcodedInputs

> **hardcodedInputs**: [`JsonBodyInputWithValue`](/sdk/reference/type-aliases/json-body-input-with-value)[]

#### passAddress?

> `optional` **passAddress?**: `boolean`

#### uri

> **uri**: `string`
