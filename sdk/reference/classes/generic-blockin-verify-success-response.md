---
description: "iVerifySignInSuccessResponse"
---

# Class: GenericBlockinVerifySuccessResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1836](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1836)

## Extends

- [`VerifySignInSuccessResponse`](/sdk/reference/classes/verify-sign-in-success-response)

## Constructors

### Constructor

> **new GenericBlockinVerifySuccessResponse**(`data`): `GenericBlockinVerifySuccessResponse`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1150](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1150)

#### Parameters

##### data

[`iVerifySignInSuccessResponse`](/sdk/reference/interfaces/i-verify-sign-in-success-response)

#### Returns

`GenericBlockinVerifySuccessResponse`

#### Inherited from

[`VerifySignInSuccessResponse`](/sdk/reference/classes/verify-sign-in-success-response).[`constructor`](/sdk/reference/classes/verify-sign-in-success-response#constructor)

## Properties

### message?

> `optional` **message?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1148](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1148)

Optional informational message returned by the indexer.

#### Inherited from

[`VerifySignInSuccessResponse`](/sdk/reference/classes/verify-sign-in-success-response).[`message`](/sdk/reference/classes/verify-sign-in-success-response#message)

## Methods

### clone()

> **clone**(): [`VerifySignInSuccessResponse`](/sdk/reference/classes/verify-sign-in-success-response)

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

[`VerifySignInSuccessResponse`](/sdk/reference/classes/verify-sign-in-success-response)

#### Inherited from

[`VerifySignInSuccessResponse`](/sdk/reference/classes/verify-sign-in-success-response).[`clone`](/sdk/reference/classes/verify-sign-in-success-response#clone)

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

[`VerifySignInSuccessResponse`](/sdk/reference/classes/verify-sign-in-success-response).[`convert`](/sdk/reference/classes/verify-sign-in-success-response#convert)

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

[`VerifySignInSuccessResponse`](/sdk/reference/classes/verify-sign-in-success-response).[`equals`](/sdk/reference/classes/verify-sign-in-success-response#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:111](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L111)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`VerifySignInSuccessResponse`](/sdk/reference/classes/verify-sign-in-success-response).[`getNumberFieldNames`](/sdk/reference/classes/verify-sign-in-success-response#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L115)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`VerifySignInSuccessResponse`](/sdk/reference/classes/verify-sign-in-success-response).[`hasNumberFields`](/sdk/reference/classes/verify-sign-in-success-response#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L93)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`VerifySignInSuccessResponse`](/sdk/reference/classes/verify-sign-in-success-response).[`toJson`](/sdk/reference/classes/verify-sign-in-success-response#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L97)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`VerifySignInSuccessResponse`](/sdk/reference/classes/verify-sign-in-success-response).[`toJsonString`](/sdk/reference/classes/verify-sign-in-success-response#tojsonstring)
