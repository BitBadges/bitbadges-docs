---
description: "T extends NumberType"
---

# Class: SiwbbChallenge\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:42](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L42)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`SiwbbChallenge`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iSiwbbChallenge`](/sdk/reference/interfaces/i-siwbb-challenge)\<`T`\>

## Constructors

### Constructor

> **new SiwbbChallenge**\<`T`\>(`data`): `SiwbbChallenge`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:52](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L52)

#### Parameters

##### data

[`iSiwbbChallenge`](/sdk/reference/interfaces/i-siwbb-challenge)\<`T`\>

#### Returns

`SiwbbChallenge`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:43](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L43)

The user's address

#### Implementation of

[`iSiwbbChallenge`](/sdk/reference/interfaces/i-siwbb-challenge).[`address`](/sdk/reference/interfaces/i-siwbb-challenge#address)

***

### bitbadgesAddress

> **bitbadgesAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:46](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L46)

The converted BitBadges address of params.address. This can be used as the
unique identifier for the user (e.g. avoid duplicate sign ins from equivalent 0x and bb1 addresses).

#### Implementation of

[`iSiwbbChallenge`](/sdk/reference/interfaces/i-siwbb-challenge).[`bitbadgesAddress`](/sdk/reference/interfaces/i-siwbb-challenge#bitbadgesaddress)

***

### chain

> **chain**: [`SupportedChain`](/sdk/reference/enumerations/supported-chain)

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L44)

The chain of the address

#### Implementation of

[`iSiwbbChallenge`](/sdk/reference/interfaces/i-siwbb-challenge).[`chain`](/sdk/reference/interfaces/i-siwbb-challenge#chain)

***

### ownershipRequirements?

> `optional` **ownershipRequirements?**: [`SiwbbAssetConditionGroup`](/sdk/reference/type-aliases/siwbb-asset-condition-group)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:45](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L45)

The ownership requirements for the user

#### Implementation of

[`iSiwbbChallenge`](/sdk/reference/interfaces/i-siwbb-challenge).[`ownershipRequirements`](/sdk/reference/interfaces/i-siwbb-challenge#ownershiprequirements)

***

### verificationResponse?

> `optional` **verificationResponse?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:47](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L47)

Verification response

#### errorMessage?

> `optional` **errorMessage?**: `string`

#### success

> **success**: `boolean`

#### Implementation of

[`iSiwbbChallenge`](/sdk/reference/interfaces/i-siwbb-challenge).[`verificationResponse`](/sdk/reference/interfaces/i-siwbb-challenge#verificationresponse)

## Methods

### clone()

> **clone**(): `SiwbbChallenge`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`SiwbbChallenge`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `SiwbbChallenge`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:69](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L69)

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

`SiwbbChallenge`\<`U`\>

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
