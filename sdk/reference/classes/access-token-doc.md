---
description: "iAccessTokenDoc"
---

# Class: AccessTokenDoc

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1788](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1788)

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`AccessTokenDoc`\>

## Implements

- [`iAccessTokenDoc`](/sdk/reference/interfaces/i-access-token-doc)

## Constructors

### Constructor

> **new AccessTokenDoc**(`data`): `AccessTokenDoc`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1801](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1801)

#### Parameters

##### data

[`iAccessTokenDoc`](/sdk/reference/interfaces/i-access-token-doc)

#### Returns

`AccessTokenDoc`

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1789](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1789)

A unique stringified document ID

#### Implementation of

[`iAccessTokenDoc`](/sdk/reference/interfaces/i-access-token-doc).[`_docId`](/sdk/reference/interfaces/i-access-token-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1790](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1790)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iAccessTokenDoc`](/sdk/reference/interfaces/i-access-token-doc).[`_id`](/sdk/reference/interfaces/i-access-token-doc#_id)

***

### accessToken

> **accessToken**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1791](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1791)

#### Implementation of

[`iAccessTokenDoc`](/sdk/reference/interfaces/i-access-token-doc).[`accessToken`](/sdk/reference/interfaces/i-access-token-doc#accesstoken)

***

### accessTokenExpiresAt

> **accessTokenExpiresAt**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1799](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1799)

#### Implementation of

[`iAccessTokenDoc`](/sdk/reference/interfaces/i-access-token-doc).[`accessTokenExpiresAt`](/sdk/reference/interfaces/i-access-token-doc#accesstokenexpiresat)

***

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1796](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1796)

#### Implementation of

[`iAccessTokenDoc`](/sdk/reference/interfaces/i-access-token-doc).[`address`](/sdk/reference/interfaces/i-access-token-doc#address)

***

### bitbadgesAddress

> **bitbadgesAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1795](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1795)

#### Implementation of

[`iAccessTokenDoc`](/sdk/reference/interfaces/i-access-token-doc).[`bitbadgesAddress`](/sdk/reference/interfaces/i-access-token-doc#bitbadgesaddress)

***

### clientId

> **clientId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1792](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1792)

#### Implementation of

[`iAccessTokenDoc`](/sdk/reference/interfaces/i-access-token-doc).[`clientId`](/sdk/reference/interfaces/i-access-token-doc#clientid)

***

### refreshToken

> **refreshToken**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1794](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1794)

#### Implementation of

[`iAccessTokenDoc`](/sdk/reference/interfaces/i-access-token-doc).[`refreshToken`](/sdk/reference/interfaces/i-access-token-doc#refreshtoken)

***

### refreshTokenExpiresAt

> **refreshTokenExpiresAt**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1798](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1798)

#### Implementation of

[`iAccessTokenDoc`](/sdk/reference/interfaces/i-access-token-doc).[`refreshTokenExpiresAt`](/sdk/reference/interfaces/i-access-token-doc#refreshtokenexpiresat)

***

### scopes

> **scopes**: [`OAuthScopeDetails`](/sdk/reference/interfaces/o-auth-scope-details)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1797](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1797)

#### Implementation of

[`iAccessTokenDoc`](/sdk/reference/interfaces/i-access-token-doc).[`scopes`](/sdk/reference/interfaces/i-access-token-doc#scopes)

***

### tokenType

> **tokenType**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1793](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1793)

#### Implementation of

[`iAccessTokenDoc`](/sdk/reference/interfaces/i-access-token-doc).[`tokenType`](/sdk/reference/interfaces/i-access-token-doc#tokentype)

## Methods

### clone()

> **clone**(): `AccessTokenDoc`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1820](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1820)

Deep copies the object and returns a new instance.

#### Returns

`AccessTokenDoc`

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`clone`](/sdk/reference/classes/custom-type-class#clone)

***

### ~~convert()~~

> **convert**\<`U`\>(`convertFunction`, `options?`): `AccessTokenDoc`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1816](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1816)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`AccessTokenDoc`

#### Deprecated

This function is unnecessary as this field has no numeric types.
Please use the `.clone()` method instead.

#### Overrides

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
