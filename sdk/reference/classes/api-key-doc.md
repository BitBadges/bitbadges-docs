---
description: "iApiKeyDoc"
---

# Class: ApiKeyDoc

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1117](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1117)

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`ApiKeyDoc`\>

## Implements

- [`iApiKeyDoc`](/sdk/reference/interfaces/i-api-key-doc)

## Constructors

### Constructor

> **new ApiKeyDoc**(`data`): `ApiKeyDoc`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1128](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1128)

#### Parameters

##### data

[`iApiKeyDoc`](/sdk/reference/interfaces/i-api-key-doc)

#### Returns

`ApiKeyDoc`

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1118](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1118)

A unique stringified document ID

#### Implementation of

[`iApiKeyDoc`](/sdk/reference/interfaces/i-api-key-doc).[`_docId`](/sdk/reference/interfaces/i-api-key-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1119](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1119)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iApiKeyDoc`](/sdk/reference/interfaces/i-api-key-doc).[`_id`](/sdk/reference/interfaces/i-api-key-doc#_id)

***

### apiKey

> **apiKey**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1121](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1121)

#### Implementation of

[`iApiKeyDoc`](/sdk/reference/interfaces/i-api-key-doc).[`apiKey`](/sdk/reference/interfaces/i-api-key-doc#apikey)

***

### bitbadgesAddress

> **bitbadgesAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1122](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1122)

#### Implementation of

[`iApiKeyDoc`](/sdk/reference/interfaces/i-api-key-doc).[`bitbadgesAddress`](/sdk/reference/interfaces/i-api-key-doc#bitbadgesaddress)

***

### createdAt

> **createdAt**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1125](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1125)

#### Implementation of

[`iApiKeyDoc`](/sdk/reference/interfaces/i-api-key-doc).[`createdAt`](/sdk/reference/interfaces/i-api-key-doc#createdat)

***

### intendedUse

> **intendedUse**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1126](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1126)

#### Implementation of

[`iApiKeyDoc`](/sdk/reference/interfaces/i-api-key-doc).[`intendedUse`](/sdk/reference/interfaces/i-api-key-doc#intendeduse)

***

### label

> **label**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1120](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1120)

#### Implementation of

[`iApiKeyDoc`](/sdk/reference/interfaces/i-api-key-doc).[`label`](/sdk/reference/interfaces/i-api-key-doc#label)

***

### lastRequest

> **lastRequest**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1124](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1124)

#### Implementation of

[`iApiKeyDoc`](/sdk/reference/interfaces/i-api-key-doc).[`lastRequest`](/sdk/reference/interfaces/i-api-key-doc#lastrequest)

***

### numRequests

> **numRequests**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1123](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1123)

#### Implementation of

[`iApiKeyDoc`](/sdk/reference/interfaces/i-api-key-doc).[`numRequests`](/sdk/reference/interfaces/i-api-key-doc#numrequests)

## Methods

### clone()

> **clone**(): `ApiKeyDoc`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`ApiKeyDoc`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`clone`](/sdk/reference/classes/custom-type-class#clone)

***

### ~~convert()~~

> **convert**\<`U`\>(`_convertFunction?`, `options?`): [`CustomType`](/sdk/reference/interfaces/custom-type)\<`any`\>

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:124](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L124)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### \_convertFunction?

(`val`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

[`CustomType`](/sdk/reference/interfaces/custom-type)\<`any`\>

#### Deprecated

This function is unnecessary as this field has no numeric types.
Please use the `.clone()` method instead.

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`convert`](/sdk/reference/classes/custom-type-class#convert)

***

### equals()

> **equals**\<`U`\>(`other`, `normalizeNumberTypes?`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:101](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L101)

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

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`equals`](/sdk/reference/classes/custom-type-class#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:111](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L111)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`getNumberFieldNames`](/sdk/reference/classes/custom-type-class#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L115)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`hasNumberFields`](/sdk/reference/classes/custom-type-class#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L93)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`toJson`](/sdk/reference/classes/custom-type-class#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L97)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`toJsonString`](/sdk/reference/classes/custom-type-class#tojsonstring)
