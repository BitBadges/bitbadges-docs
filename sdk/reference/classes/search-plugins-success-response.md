---
description: "T extends NumberType"
---

# Class: SearchPluginsSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2700](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2700)

## Extends

- [`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iSearchPluginsSuccessResponse`](/sdk/reference/interfaces/i-search-plugins-success-response)\<`T`\>

## Constructors

### Constructor

> **new SearchPluginsSuccessResponse**\<`T`\>(`data`): `SearchPluginsSuccessResponse`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2701](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2701)

#### Parameters

##### data

[`iSearchPluginsSuccessResponse`](/sdk/reference/interfaces/i-search-plugins-success-response)\<`T`\>

#### Returns

`SearchPluginsSuccessResponse`\<`T`\>

#### Overrides

[`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response).[`constructor`](/sdk/reference/classes/get-plugins-success-response#constructor)

## Properties

### bookmark?

> `optional` **bookmark?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2679](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2679)

Bookmark for pagination of the plugins. Only applicable if fetching the directory.

#### Implementation of

[`iSearchPluginsSuccessResponse`](/sdk/reference/interfaces/i-search-plugins-success-response).[`bookmark`](/sdk/reference/interfaces/i-search-plugins-success-response#bookmark)

#### Inherited from

[`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response).[`bookmark`](/sdk/reference/classes/get-plugins-success-response#bookmark)

***

### plugins

> **plugins**: [`PluginDoc`](/sdk/reference/classes/plugin-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2678](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2678)

#### Implementation of

[`iSearchPluginsSuccessResponse`](/sdk/reference/interfaces/i-search-plugins-success-response).[`plugins`](/sdk/reference/interfaces/i-search-plugins-success-response#plugins)

#### Inherited from

[`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response).[`plugins`](/sdk/reference/classes/get-plugins-success-response#plugins)

## Methods

### clone()

> **clone**(): [`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response)

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

[`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response)

#### Inherited from

[`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response).[`clone`](/sdk/reference/classes/get-plugins-success-response#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): [`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2687](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2687)

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

[`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response)\<`U`\>

#### Inherited from

[`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response).[`convert`](/sdk/reference/classes/get-plugins-success-response#convert)

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

[`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response).[`equals`](/sdk/reference/classes/get-plugins-success-response#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L157)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response).[`getNumberFieldNames`](/sdk/reference/classes/get-plugins-success-response#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response).[`hasNumberFields`](/sdk/reference/classes/get-plugins-success-response#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response).[`toJson`](/sdk/reference/classes/get-plugins-success-response#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response).[`toJsonString`](/sdk/reference/classes/get-plugins-success-response#tojsonstring)
