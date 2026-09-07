---
description: "any"
---

# Class: GetClaimAttemptStatusPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:584](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L584)

## Extends

- [`EmptyResponseClass`](/sdk/reference/classes/empty-response-class)

## Constructors

### Constructor

> **new GetClaimAttemptStatusPayload**(`data?`): `GetClaimAttemptStatusPayload`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:130](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L130)

#### Parameters

##### data?

`any`

#### Returns

`GetClaimAttemptStatusPayload`

#### Inherited from

[`EmptyResponseClass`](/sdk/reference/classes/empty-response-class).[`constructor`](/sdk/reference/classes/empty-response-class#constructor)

## Methods

### clone()

> **clone**(): [`EmptyResponseClass`](/sdk/reference/classes/empty-response-class)

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

[`EmptyResponseClass`](/sdk/reference/classes/empty-response-class)

#### Inherited from

[`EmptyResponseClass`](/sdk/reference/classes/empty-response-class).[`clone`](/sdk/reference/classes/empty-response-class#clone)

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

[`EmptyResponseClass`](/sdk/reference/classes/empty-response-class).[`convert`](/sdk/reference/classes/empty-response-class#convert)

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

[`EmptyResponseClass`](/sdk/reference/classes/empty-response-class).[`equals`](/sdk/reference/classes/empty-response-class#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:111](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L111)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`EmptyResponseClass`](/sdk/reference/classes/empty-response-class).[`getNumberFieldNames`](/sdk/reference/classes/empty-response-class#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L115)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`EmptyResponseClass`](/sdk/reference/classes/empty-response-class).[`hasNumberFields`](/sdk/reference/classes/empty-response-class#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L93)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`EmptyResponseClass`](/sdk/reference/classes/empty-response-class).[`toJson`](/sdk/reference/classes/empty-response-class#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L97)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`EmptyResponseClass`](/sdk/reference/classes/empty-response-class).[`toJsonString`](/sdk/reference/classes/empty-response-class#tojsonstring)
