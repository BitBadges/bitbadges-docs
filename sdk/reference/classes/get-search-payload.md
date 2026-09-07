---
description: "T extends NumberType"
---

# Class: GetSearchPayload\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:259](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L259)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`GetSearchPayload`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iGetSearchPayload`](/sdk/reference/interfaces/i-get-search-payload)\<`T`\>

## Constructors

### Constructor

> **new GetSearchPayload**\<`T`\>(`payload`): `GetSearchPayload`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:268](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L268)

#### Parameters

##### payload

[`iGetSearchPayload`](/sdk/reference/interfaces/i-get-search-payload)\<`T`\>

#### Returns

`GetSearchPayload`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### noAccounts?

> `optional` **noAccounts?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:261](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L261)

If true, we will skip all account queries.

#### Implementation of

[`iGetSearchPayload`](/sdk/reference/interfaces/i-get-search-payload).[`noAccounts`](/sdk/reference/interfaces/i-get-search-payload#noaccounts)

***

### noApplications?

> `optional` **noApplications?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:264](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L264)

If true, we will skip all application queries.

#### Implementation of

[`iGetSearchPayload`](/sdk/reference/interfaces/i-get-search-payload).[`noApplications`](/sdk/reference/interfaces/i-get-search-payload#noapplications)

***

### noClaims?

> `optional` **noClaims?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:265](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L265)

If true, we will skip all claim queries.

#### Implementation of

[`iGetSearchPayload`](/sdk/reference/interfaces/i-get-search-payload).[`noClaims`](/sdk/reference/interfaces/i-get-search-payload#noclaims)

***

### noCollections?

> `optional` **noCollections?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:260](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L260)

If true, we will skip all collection queries.

#### Implementation of

[`iGetSearchPayload`](/sdk/reference/interfaces/i-get-search-payload).[`noCollections`](/sdk/reference/interfaces/i-get-search-payload#nocollections)

***

### noMaps?

> `optional` **noMaps?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:263](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L263)

If true, we will skip all map queries.

#### Implementation of

[`iGetSearchPayload`](/sdk/reference/interfaces/i-get-search-payload).[`noMaps`](/sdk/reference/interfaces/i-get-search-payload#nomaps)

***

### noTokens?

> `optional` **noTokens?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:262](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L262)

If true, we will skip all badge queries.

#### Implementation of

[`iGetSearchPayload`](/sdk/reference/interfaces/i-get-search-payload).[`noTokens`](/sdk/reference/interfaces/i-get-search-payload#notokens)

***

### specificCollectionId?

> `optional` **specificCollectionId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:266](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L266)

If true, we will limit collection-based results to a single collection.

#### Implementation of

[`iGetSearchPayload`](/sdk/reference/interfaces/i-get-search-payload).[`specificCollectionId`](/sdk/reference/interfaces/i-get-search-payload#specificcollectionid)

## Methods

### clone()

> **clone**(): `GetSearchPayload`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`GetSearchPayload`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `GetSearchPayload`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:291](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L291)

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

`GetSearchPayload`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:295](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L295)

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

***

### FromQuery()

> `static` **FromQuery**(`query`): `GetSearchPayload`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:279](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L279)

#### Parameters

##### query

[`ParsedQs`](/sdk/reference/interfaces/parsed-qs)

#### Returns

`GetSearchPayload`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>
