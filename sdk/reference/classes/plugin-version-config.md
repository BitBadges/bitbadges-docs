---
description: "T extends NumberType"
---

# Class: PluginVersionConfig\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2028](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2028)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`PluginVersionConfig`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config)\<`T`\>

## Constructors

### Constructor

> **new PluginVersionConfig**\<`T`\>(`data`): `PluginVersionConfig`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2052](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2052)

#### Parameters

##### data

[`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config)\<`T`\>

#### Returns

`PluginVersionConfig`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### createdAt

> **createdAt**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2048](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2048)

The time the version was created

#### Implementation of

[`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config).[`createdAt`](/sdk/reference/interfaces/i-plugin-version-config#createdat)

***

### customDetailsDisplay?

> `optional` **customDetailsDisplay?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2042](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2042)

Custom details display for the plugin. Use {{publicParamKey}} to dynamically display the values of public parameters.

#### Implementation of

[`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config).[`customDetailsDisplay`](/sdk/reference/interfaces/i-plugin-version-config#customdetailsdisplay)

***

### duplicatesAllowed

> **duplicatesAllowed**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2032](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2032)

Whether it makes sense for multiple of this plugin to be allowed

#### Implementation of

[`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config).[`duplicatesAllowed`](/sdk/reference/interfaces/i-plugin-version-config#duplicatesallowed)

***

### finalized

> **finalized**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2030](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2030)

True if the version is finalized

#### Implementation of

[`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config).[`finalized`](/sdk/reference/interfaces/i-plugin-version-config#finalized)

***

### ignoreSimulations?

> `optional` **ignoreSimulations?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2038](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2038)

Ignore simulations?

#### Implementation of

[`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config).[`ignoreSimulations`](/sdk/reference/interfaces/i-plugin-version-config#ignoresimulations)

***

### lastUpdated

> **lastUpdated**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2049](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2049)

The time the version was last updated

#### Implementation of

[`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config).[`lastUpdated`](/sdk/reference/interfaces/i-plugin-version-config#lastupdated)

***

### privateParamsSchema

> **privateParamsSchema**: [`JsonBodyInputSchema`](/sdk/reference/type-aliases/json-body-input-schema)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2041](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2041)

#### Implementation of

[`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config).[`privateParamsSchema`](/sdk/reference/interfaces/i-plugin-version-config#privateparamsschema)

***

### publicParamsSchema

> **publicParamsSchema**: [`JsonBodyInputSchema`](/sdk/reference/type-aliases/json-body-input-schema)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2040](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2040)

#### Implementation of

[`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config).[`publicParamsSchema`](/sdk/reference/interfaces/i-plugin-version-config#publicparamsschema)

***

### receiveStatusWebhook

> **receiveStatusWebhook**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2037](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2037)

Whether the plugin should receive status webhooks

#### Implementation of

[`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config).[`receiveStatusWebhook`](/sdk/reference/interfaces/i-plugin-version-config#receivestatuswebhook)

***

### requireSignIn?

> `optional` **requireSignIn?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2050](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2050)

Require BitBadges sign-in to use the plugin?

#### Implementation of

[`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config).[`requireSignIn`](/sdk/reference/interfaces/i-plugin-version-config#requiresignin)

***

### requiresSessions

> **requiresSessions**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2033](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2033)

This means that the plugin can be used w/o any session cookies or authentication.

#### Implementation of

[`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config).[`requiresSessions`](/sdk/reference/interfaces/i-plugin-version-config#requiressessions)

***

### requiresUserInputs

> **requiresUserInputs**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2034](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2034)

This is a flag for being compatible with auto-triggered claims, meaning no user interaction is needed.

#### Implementation of

[`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config).[`requiresUserInputs`](/sdk/reference/interfaces/i-plugin-version-config#requiresuserinputs)

***

### reuseForNonIndexed

> **reuseForNonIndexed**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2035](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2035)

Reuse for nonindexed balances? Only applicable if is stateless, requires no user inputs, and requires no sessions.

#### Implementation of

[`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config).[`reuseForNonIndexed`](/sdk/reference/interfaces/i-plugin-version-config#reusefornonindexed)

***

### skipProcessingWebhook?

> `optional` **skipProcessingWebhook?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2036](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2036)

Whether the plugin should skip processing webhooks. We will just auto-treat it as successful.

#### Implementation of

[`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config).[`skipProcessingWebhook`](/sdk/reference/interfaces/i-plugin-version-config#skipprocessingwebhook)

***

### stateFunctionPreset

> **stateFunctionPreset**: [`PluginPresetType`](/sdk/reference/enumerations/plugin-preset-type)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2031](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2031)

Preset type for how the plugin state is to be maintained.

#### Implementation of

[`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config).[`stateFunctionPreset`](/sdk/reference/interfaces/i-plugin-version-config#statefunctionpreset)

***

### userInputsSchema

> **userInputsSchema**: [`JsonBodyInputSchema`](/sdk/reference/type-aliases/json-body-input-schema)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2039](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2039)

#### Implementation of

[`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config).[`userInputsSchema`](/sdk/reference/interfaces/i-plugin-version-config#userinputsschema)

***

### verificationCall?

> `optional` **verificationCall?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2043](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2043)

The verification URL config. This lets us know what should be passed to the plugin payload.

#### hardcodedInputs

> **hardcodedInputs**: [`JsonBodyInputWithValue`](/sdk/reference/type-aliases/json-body-input-with-value)[]

#### passAddress?

> `optional` **passAddress?**: `boolean`

#### uri

> **uri**: `string`

#### Implementation of

[`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config).[`verificationCall`](/sdk/reference/interfaces/i-plugin-version-config#verificationcall)

***

### version

> **version**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2029](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2029)

Version of the plugin

#### Implementation of

[`iPluginVersionConfig`](/sdk/reference/interfaces/i-plugin-version-config).[`version`](/sdk/reference/interfaces/i-plugin-version-config#version)

## Methods

### clone()

> **clone**(): `PluginVersionConfig`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2082](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2082)

Deep copies the object and returns a new instance.

#### Returns

`PluginVersionConfig`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `PluginVersionConfig`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2078](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2078)

Converts the object to a different NumberType equivalent.

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`PluginVersionConfig`\<`U`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`convert`](/sdk/reference/classes/base-number-type-class#convert)

***

### equals()

> **equals**\<`U`\>(`other`, `normalizeNumberTypes?`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:147](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L147)

Compares this object's fields to another object's fields for equality. Equality is determined by comparing the JSON representations of the objects.

If `normalizeNumberTypes` is true, then all number types will be compared as strings (i.e. "1n" === "1" === 1). Else, they will be compared as their native types (i.e. 1n !== 1 !== "1").

#### Type Parameters

##### U

`U` *extends* [`CustomType`](/sdk/reference/interfaces/custom-type)\<`U`\>

#### Parameters

##### other

[`CustomType`](/sdk/reference/interfaces/custom-type)\<`U`\> \| `null` \| `undefined`

##### normalizeNumberTypes?

`boolean`

#### Returns

`boolean`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`equals`](/sdk/reference/classes/base-number-type-class#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2074](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2074)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`getNumberFieldNames`](/sdk/reference/classes/base-number-type-class#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`hasNumberFields`](/sdk/reference/classes/base-number-type-class#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`toJson`](/sdk/reference/classes/base-number-type-class#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`toJsonString`](/sdk/reference/classes/base-number-type-class#tojsonstring)
