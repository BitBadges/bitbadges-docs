---
description: "T extends NumberType"
---

# Class: GetVotesByVoterSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5419](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5419)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`GetVotesByVoterSuccessResponse`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iGetVotesByVoterSuccessResponse`](/sdk/reference/interfaces/i-get-votes-by-voter-success-response)\<`T`\>

## Constructors

### Constructor

> **new GetVotesByVoterSuccessResponse**\<`T`\>(`data`): `GetVotesByVoterSuccessResponse`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5426](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5426)

#### Parameters

##### data

[`iGetVotesByVoterSuccessResponse`](/sdk/reference/interfaces/i-get-votes-by-voter-success-response)\<`T`\>

#### Returns

`GetVotesByVoterSuccessResponse`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### pagination

> **pagination**: [`PaginationInfo`](/sdk/reference/interfaces/pagination-info)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5424](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5424)

#### Implementation of

[`iGetVotesByVoterSuccessResponse`](/sdk/reference/interfaces/i-get-votes-by-voter-success-response).[`pagination`](/sdk/reference/interfaces/i-get-votes-by-voter-success-response#pagination)

***

### votes

> **votes**: [`iVoteApiData`](/sdk/reference/interfaces/i-vote-api-data)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5423](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5423)

#### Implementation of

[`iGetVotesByVoterSuccessResponse`](/sdk/reference/interfaces/i-get-votes-by-voter-success-response).[`votes`](/sdk/reference/interfaces/i-get-votes-by-voter-success-response#votes)

## Methods

### clone()

> **clone**(): `GetVotesByVoterSuccessResponse`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`GetVotesByVoterSuccessResponse`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `GetVotesByVoterSuccessResponse`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:5432](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L5432)

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

`GetVotesByVoterSuccessResponse`\<`U`\>

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
