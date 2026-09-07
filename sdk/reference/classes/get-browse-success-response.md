---
description: "T extends NumberType"
---

# Class: GetBrowseSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1521](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1521)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`GetBrowseSuccessResponse`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iGetBrowseSuccessResponse`](/sdk/reference/interfaces/i-get-browse-success-response)\<`T`\>

## Constructors

### Constructor

> **new GetBrowseSuccessResponse**\<`T`\>(`data`): `GetBrowseSuccessResponse`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1539](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1539)

#### Parameters

##### data

[`iGetBrowseSuccessResponse`](/sdk/reference/interfaces/i-get-browse-success-response)\<`T`\>

#### Returns

`GetBrowseSuccessResponse`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### activity

> **activity**: [`TransferActivityDoc`](/sdk/reference/classes/transfer-activity-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1527](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1527)

#### Implementation of

[`iGetBrowseSuccessResponse`](/sdk/reference/interfaces/i-get-browse-success-response).[`activity`](/sdk/reference/interfaces/i-get-browse-success-response#activity)

***

### claimActivity?

> `optional` **claimActivity?**: [`ClaimActivityDoc`](/sdk/reference/classes/claim-activity-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1535](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1535)

#### Implementation of

[`iGetBrowseSuccessResponse`](/sdk/reference/interfaces/i-get-browse-success-response).[`claimActivity`](/sdk/reference/interfaces/i-get-browse-success-response#claimactivity)

***

### claims?

> `optional` **claims?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1534](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1534)

#### Index Signature

\[`category`: `string`\]: [`ClaimDetails`](/sdk/reference/classes/claim-details)\<`T`\>[]

#### Implementation of

[`iGetBrowseSuccessResponse`](/sdk/reference/interfaces/i-get-browse-success-response).[`claims`](/sdk/reference/interfaces/i-get-browse-success-response#claims)

***

### collections

> **collections**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1525](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1525)

#### Index Signature

\[`category`: `string`\]: [`BitBadgesCollection`](/sdk/reference/classes/bit-badges-collection)\<`T`\>[]

#### Implementation of

[`iGetBrowseSuccessResponse`](/sdk/reference/interfaces/i-get-browse-success-response).[`collections`](/sdk/reference/interfaces/i-get-browse-success-response#collections)

***

### pointsActivity?

> `optional` **pointsActivity?**: [`PointsActivityDoc`](/sdk/reference/classes/points-activity-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1536](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1536)

#### Implementation of

[`iGetBrowseSuccessResponse`](/sdk/reference/interfaces/i-get-browse-success-response).[`pointsActivity`](/sdk/reference/interfaces/i-get-browse-success-response#pointsactivity)

***

### profiles

> **profiles**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1526](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1526)

#### Index Signature

\[`category`: `string`\]: [`BitBadgesUserInfo`](/sdk/reference/classes/bit-badges-user-info)\<`T`\>[]

#### Implementation of

[`iGetBrowseSuccessResponse`](/sdk/reference/interfaces/i-get-browse-success-response).[`profiles`](/sdk/reference/interfaces/i-get-browse-success-response#profiles)

***

### tokens

> **tokens**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1528](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1528)

#### Index Signature

\[`category`: `string`\]: `object`[]

#### Implementation of

[`iGetBrowseSuccessResponse`](/sdk/reference/interfaces/i-get-browse-success-response).[`tokens`](/sdk/reference/interfaces/i-get-browse-success-response#tokens)

***

### utilityPages?

> `optional` **utilityPages?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1537](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1537)

#### Index Signature

\[`category`: `string`\]: [`UtilityPageDoc`](/sdk/reference/classes/utility-page-doc)\<`T`\>[]

#### Implementation of

[`iGetBrowseSuccessResponse`](/sdk/reference/interfaces/i-get-browse-success-response).[`utilityPages`](/sdk/reference/interfaces/i-get-browse-success-response#utilitypages)

## Methods

### clone()

> **clone**(): `GetBrowseSuccessResponse`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`GetBrowseSuccessResponse`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `GetBrowseSuccessResponse`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1590](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1590)

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

`GetBrowseSuccessResponse`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L157)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

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
