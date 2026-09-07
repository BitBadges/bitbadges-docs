---
description: "T extends NumberType"
---

# Class: GetCollectionOwnersSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:67](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L67)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`GetCollectionOwnersSuccessResponse`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iGetCollectionOwnersSuccessResponse`](/sdk/reference/interfaces/i-get-collection-owners-success-response)\<`T`\>

## Constructors

### Constructor

> **new GetCollectionOwnersSuccessResponse**\<`T`\>(`data`): `GetCollectionOwnersSuccessResponse`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:75](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L75)

#### Parameters

##### data

[`iGetCollectionOwnersSuccessResponse`](/sdk/reference/interfaces/i-get-collection-owners-success-response)\<`T`\>

#### Returns

`GetCollectionOwnersSuccessResponse`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### counts?

> `optional` **counts?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:73](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L73)

Present only when `tokenId` was provided. Holder counts for that tier.
Plain integers (holder counts, well within safe-integer range) — not
NumberType, so they aren't affected by number-type conversion.

#### active

> **active**: `number`

#### expired

> **expired**: `number`

#### total

> **total**: `number`

#### Implementation of

[`iGetCollectionOwnersSuccessResponse`](/sdk/reference/interfaces/i-get-collection-owners-success-response).[`counts`](/sdk/reference/interfaces/i-get-collection-owners-success-response#counts)

***

### owners

> **owners**: [`BalanceDoc`](/sdk/reference/classes/balance-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:71](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L71)

#### Implementation of

[`iGetCollectionOwnersSuccessResponse`](/sdk/reference/interfaces/i-get-collection-owners-success-response).[`owners`](/sdk/reference/interfaces/i-get-collection-owners-success-response#owners)

***

### pagination

> **pagination**: [`PaginationInfo`](/sdk/reference/interfaces/pagination-info)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:72](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L72)

#### Implementation of

[`iGetCollectionOwnersSuccessResponse`](/sdk/reference/interfaces/i-get-collection-owners-success-response).[`pagination`](/sdk/reference/interfaces/i-get-collection-owners-success-response#pagination)

## Methods

### clone()

> **clone**(): `GetCollectionOwnersSuccessResponse`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`GetCollectionOwnersSuccessResponse`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `GetCollectionOwnersSuccessResponse`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:86](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L86)

Converts the object to a different NumberType equivalent.

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`val`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`GetCollectionOwnersSuccessResponse`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:82](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L82)

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
