---
description: "T extends NumberType"
---

# Class: SIWBBRequestDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2091](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2091)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`SIWBBRequestDoc`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc)\<`T`\>

## Constructors

### Constructor

> **new SIWBBRequestDoc**\<`T`\>(`data`): `SIWBBRequestDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2110](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2110)

#### Parameters

##### data

[`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc)\<`T`\>

#### Returns

`SIWBBRequestDoc`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2092](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2092)

A unique stringified document ID

#### Implementation of

[`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc).[`_docId`](/sdk/reference/interfaces/i-siwbb-request-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2093](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2093)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc).[`_id`](/sdk/reference/interfaces/i-siwbb-request-doc#_id)

***

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2105)

The native address of the signer

#### Implementation of

[`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc).[`address`](/sdk/reference/interfaces/i-siwbb-request-doc#address)

***

### bitbadgesAddress

> **bitbadgesAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2099](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2099)

The BitBadges address of the signer

#### Implementation of

[`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc).[`bitbadgesAddress`](/sdk/reference/interfaces/i-siwbb-request-doc#bitbadgesaddress)

***

### chain

> **chain**: [`SupportedChain`](/sdk/reference/enumerations/supported-chain)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2106](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2106)

The native chain for the user

#### Implementation of

[`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc).[`chain`](/sdk/reference/interfaces/i-siwbb-request-doc#chain)

***

### clientId

> **clientId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2095](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2095)

The client ID of the app that requested the signature

#### Implementation of

[`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc).[`clientId`](/sdk/reference/interfaces/i-siwbb-request-doc#clientid)

***

### code

> **code**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2094](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2094)

The actual code itself

#### Implementation of

[`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc).[`code`](/sdk/reference/interfaces/i-siwbb-request-doc#code)

***

### codeChallenge?

> `optional` **codeChallenge?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2107](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2107)

The code challenge for the SIWBB request (if used with PKCE).

#### Implementation of

[`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc).[`codeChallenge`](/sdk/reference/interfaces/i-siwbb-request-doc#codechallenge)

***

### codeChallengeMethod?

> `optional` **codeChallengeMethod?**: `"S256"` \| `"plain"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2108](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2108)

The code challenge method for the SIWBB request (if used with PKCE).

#### Implementation of

[`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc).[`codeChallengeMethod`](/sdk/reference/interfaces/i-siwbb-request-doc#codechallengemethod)

***

### createdAt

> **createdAt**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2100](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2100)

The timestamp of when the signature was created (milliseconds since epoch)

#### Implementation of

[`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc).[`createdAt`](/sdk/reference/interfaces/i-siwbb-request-doc#createdat)

***

### deletedAt?

> `optional` **deletedAt?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2103](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2103)

If deleted, we still store temporarily for a period of time. We use a deletedAt timestamp to determine when to delete.

#### Implementation of

[`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc).[`deletedAt`](/sdk/reference/interfaces/i-siwbb-request-doc#deletedat)

***

### description?

> `optional` **description?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2097](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2097)

#### Implementation of

[`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc).[`description`](/sdk/reference/interfaces/i-siwbb-request-doc#description)

***

### expiresAt

> **expiresAt**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2102](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2102)

#### Implementation of

[`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc).[`expiresAt`](/sdk/reference/interfaces/i-siwbb-request-doc#expiresat)

***

### image?

> `optional` **image?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2098](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2098)

#### Implementation of

[`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc).[`image`](/sdk/reference/interfaces/i-siwbb-request-doc#image)

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2096](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2096)

#### Implementation of

[`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc).[`name`](/sdk/reference/interfaces/i-siwbb-request-doc#name)

***

### redirectUri?

> `optional` **redirectUri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2104](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2104)

The redirect URI of the app

#### Implementation of

[`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc).[`redirectUri`](/sdk/reference/interfaces/i-siwbb-request-doc#redirecturi)

***

### scopes

> **scopes**: [`OAuthScopeDetails`](/sdk/reference/interfaces/o-auth-scope-details)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2101](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2101)

#### Implementation of

[`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc).[`scopes`](/sdk/reference/interfaces/i-siwbb-request-doc#scopes)

## Methods

### clone()

> **clone**(): `SIWBBRequestDoc`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`SIWBBRequestDoc`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `SIWBBRequestDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2135](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2135)

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

`SIWBBRequestDoc`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2131](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2131)

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
