---
description: "T extends NumberType"
---

# Class: SearchDeveloperAppsSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2284](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2284)

## Extends

- [`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iSearchDeveloperAppsSuccessResponse`](/sdk/reference/interfaces/i-search-developer-apps-success-response)\<`T`\>

## Constructors

### Constructor

> **new SearchDeveloperAppsSuccessResponse**\<`T`\>(`data`): `SearchDeveloperAppsSuccessResponse`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2288](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2288)

#### Parameters

##### data

[`iSearchDeveloperAppsSuccessResponse`](/sdk/reference/interfaces/i-search-developer-apps-success-response)\<`T`\>

#### Returns

`SearchDeveloperAppsSuccessResponse`\<`T`\>

#### Overrides

[`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response).[`constructor`](/sdk/reference/classes/get-developer-apps-success-response#constructor)

## Properties

### developerApps

> **developerApps**: [`DeveloperAppDoc`](/sdk/reference/classes/developer-app-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2266](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2266)

#### Implementation of

[`iSearchDeveloperAppsSuccessResponse`](/sdk/reference/interfaces/i-search-developer-apps-success-response).[`developerApps`](/sdk/reference/interfaces/i-search-developer-apps-success-response#developerapps)

#### Inherited from

[`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response).[`developerApps`](/sdk/reference/classes/get-developer-apps-success-response#developerapps)

***

### pagination

> **pagination**: [`PaginationInfo`](/sdk/reference/interfaces/pagination-info)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2267](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2267)

#### Implementation of

[`iSearchDeveloperAppsSuccessResponse`](/sdk/reference/interfaces/i-search-developer-apps-success-response).[`pagination`](/sdk/reference/interfaces/i-search-developer-apps-success-response#pagination)

#### Inherited from

[`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response).[`pagination`](/sdk/reference/classes/get-developer-apps-success-response#pagination)

## Methods

### clone()

> **clone**(): [`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response)

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

[`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response)

#### Inherited from

[`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response).[`clone`](/sdk/reference/classes/get-developer-apps-success-response#clone)

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

[`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response).[`convert`](/sdk/reference/classes/get-developer-apps-success-response#convert)

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

[`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response).[`equals`](/sdk/reference/classes/get-developer-apps-success-response#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:111](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L111)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response).[`getNumberFieldNames`](/sdk/reference/classes/get-developer-apps-success-response#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L115)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response).[`hasNumberFields`](/sdk/reference/classes/get-developer-apps-success-response#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L93)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response).[`toJson`](/sdk/reference/classes/get-developer-apps-success-response#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L97)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response).[`toJsonString`](/sdk/reference/classes/get-developer-apps-success-response#tojsonstring)
