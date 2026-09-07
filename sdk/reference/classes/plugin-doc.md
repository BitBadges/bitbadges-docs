---
description: "T extends NumberType"
---

# Class: PluginDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1955](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1955)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`PluginDoc`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iPluginDoc`](/sdk/reference/interfaces/i-plugin-doc)\<`T`\>

## Constructors

### Constructor

> **new PluginDoc**\<`T`\>(`data`): `PluginDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1980](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1980)

#### Parameters

##### data

[`iPluginDoc`](/sdk/reference/interfaces/i-plugin-doc)\<`T`\>

#### Returns

`PluginDoc`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1956](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1956)

A unique stringified document ID

#### Implementation of

[`iPluginDoc`](/sdk/reference/interfaces/i-plugin-doc).[`_docId`](/sdk/reference/interfaces/i-plugin-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1957](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1957)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iPluginDoc`](/sdk/reference/interfaces/i-plugin-doc).[`_id`](/sdk/reference/interfaces/i-plugin-doc#_id)

***

### createdAt

> **createdAt**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1975](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1975)

#### Implementation of

[`iPluginDoc`](/sdk/reference/interfaces/i-plugin-doc).[`createdAt`](/sdk/reference/interfaces/i-plugin-doc#createdat)

***

### createdBy

> **createdBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1962](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1962)

The BitBadges address who created the plugin doc

#### Implementation of

[`iPluginDoc`](/sdk/reference/interfaces/i-plugin-doc).[`createdBy`](/sdk/reference/interfaces/i-plugin-doc#createdby)

***

### deletedAt?

> `optional` **deletedAt?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1976](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1976)

#### Implementation of

[`iPluginDoc`](/sdk/reference/interfaces/i-plugin-doc).[`deletedAt`](/sdk/reference/interfaces/i-plugin-doc#deletedat)

***

### lastUpdated

> **lastUpdated**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1974](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1974)

#### Implementation of

[`iPluginDoc`](/sdk/reference/interfaces/i-plugin-doc).[`lastUpdated`](/sdk/reference/interfaces/i-plugin-doc#lastupdated)

***

### locale?

> `optional` **locale?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1978](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1978)

Locale that is supported by the plugin. By default, we assume 'en' is supported if not specified.

#### Implementation of

[`iPluginDoc`](/sdk/reference/interfaces/i-plugin-doc).[`locale`](/sdk/reference/interfaces/i-plugin-doc#locale)

***

### managedBy

> **managedBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1963](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1963)

The BitBadges address of the user who is currently managing this

#### Implementation of

[`iPluginDoc`](/sdk/reference/interfaces/i-plugin-doc).[`managedBy`](/sdk/reference/interfaces/i-plugin-doc#managedby)

***

### metadata

> **metadata**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1964](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1964)

#### createdBy

> **createdBy**: `string`

#### description

> **description**: `string`

#### documentation?

> `optional` **documentation?**: `string`

#### image

> **image**: `string`

#### name

> **name**: `string`

#### parentApp?

> `optional` **parentApp?**: `string`

#### sourceCode?

> `optional` **sourceCode?**: `string`

#### supportLink?

> `optional` **supportLink?**: `string`

#### Implementation of

[`iPluginDoc`](/sdk/reference/interfaces/i-plugin-doc).[`metadata`](/sdk/reference/interfaces/i-plugin-doc#metadata)

***

### pluginId

> **pluginId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1958](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1958)

The unique plugin ID

#### Implementation of

[`iPluginDoc`](/sdk/reference/interfaces/i-plugin-doc).[`pluginId`](/sdk/reference/interfaces/i-plugin-doc#pluginid)

***

### pluginSecret?

> `optional` **pluginSecret?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1959](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1959)

The secret of the plugin. Used to verify BitBadges as origin of request.

#### Implementation of

[`iPluginDoc`](/sdk/reference/interfaces/i-plugin-doc).[`pluginSecret`](/sdk/reference/interfaces/i-plugin-doc#pluginsecret)

***

### reviewCompleted

> **reviewCompleted**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1961](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1961)

Review process completed

#### Implementation of

[`iPluginDoc`](/sdk/reference/interfaces/i-plugin-doc).[`reviewCompleted`](/sdk/reference/interfaces/i-plugin-doc#reviewcompleted)

***

### toPublish

> **toPublish**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1960](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1960)

To publish to directory?

#### Implementation of

[`iPluginDoc`](/sdk/reference/interfaces/i-plugin-doc).[`toPublish`](/sdk/reference/interfaces/i-plugin-doc#topublish)

***

### versions

> **versions**: [`PluginVersionConfig`](/sdk/reference/classes/plugin-version-config)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1977](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1977)

Array of version-controlled plugin configurations

#### Implementation of

[`iPluginDoc`](/sdk/reference/interfaces/i-plugin-doc).[`versions`](/sdk/reference/interfaces/i-plugin-doc#versions)

## Methods

### clone()

> **clone**(): `PluginDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2015](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2015)

Deep copies the object and returns a new instance.

#### Returns

`PluginDoc`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `PluginDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2011](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2011)

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

`PluginDoc`\<`U`\>

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

### getLatestVersion()

> **getLatestVersion**(): [`PluginVersionConfig`](/sdk/reference/classes/plugin-version-config)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2019](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2019)

#### Returns

[`PluginVersionConfig`](/sdk/reference/classes/plugin-version-config)\<`T`\>

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2007](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2007)

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
