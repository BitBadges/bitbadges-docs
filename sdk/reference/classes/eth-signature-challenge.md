---
description: "ETHSignatureChallenge is used to represent an Ethereum signature challenge for an approval."
---

# Class: ETHSignatureChallenge

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1250](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1250)

ETHSignatureChallenge is used to represent an Ethereum signature challenge for an approval.

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`ETHSignatureChallenge`\>

## Implements

- [`iETHSignatureChallenge`](/sdk/reference/interfaces/i-eth-signature-challenge)

## Constructors

### Constructor

> **new ETHSignatureChallenge**(`ethSignatureChallenge`): `ETHSignatureChallenge`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1256](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1256)

#### Parameters

##### ethSignatureChallenge

[`iETHSignatureChallenge`](/sdk/reference/interfaces/i-eth-signature-challenge)

#### Returns

`ETHSignatureChallenge`

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### challengeTrackerId

> **challengeTrackerId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1252](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1252)

The ID of this ETH signature challenge for tracking the number of uses per signature.

#### Implementation of

[`iETHSignatureChallenge`](/sdk/reference/interfaces/i-eth-signature-challenge).[`challengeTrackerId`](/sdk/reference/interfaces/i-eth-signature-challenge#challengetrackerid)

***

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1254](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1254)

Arbitrary custom data associated with this ETH signature challenge.

#### Implementation of

[`iETHSignatureChallenge`](/sdk/reference/interfaces/i-eth-signature-challenge).[`customData`](/sdk/reference/interfaces/i-eth-signature-challenge#customdata)

***

### signer

> **signer**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1251](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1251)

The Ethereum address that must sign the nonce for verification.

#### Implementation of

[`iETHSignatureChallenge`](/sdk/reference/interfaces/i-eth-signature-challenge).[`signer`](/sdk/reference/interfaces/i-eth-signature-challenge#signer)

***

### uri

> **uri**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1253](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1253)

The URI associated with this ETH signature challenge, optionally providing metadata about the challenge.

#### Implementation of

[`iETHSignatureChallenge`](/sdk/reference/interfaces/i-eth-signature-challenge).[`uri`](/sdk/reference/interfaces/i-eth-signature-challenge#uri)

## Methods

### clone()

> **clone**(): `ETHSignatureChallenge`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1277](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1277)

Deep copies the object and returns a new instance.

#### Returns

`ETHSignatureChallenge`

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`clone`](/sdk/reference/classes/custom-type-class#clone)

***

### ~~convert()~~

> **convert**\<`U`\>(`convertFunction`, `options?`): `ETHSignatureChallenge`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1281](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1281)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`ETHSignatureChallenge`

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

***

### toProto()

> **toProto**(): `ETHSignatureChallenge`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1273](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1273)

#### Returns

`ETHSignatureChallenge`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `ETHSignatureChallenge`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1286](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1286)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`ETHSignatureChallenge`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `ETHSignatureChallenge`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1290](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1290)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`ETHSignatureChallenge`

***

### fromProto()

> `static` **fromProto**(`item`): `ETHSignatureChallenge`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1294](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1294)

#### Parameters

##### item

`ETHSignatureChallenge`

#### Returns

`ETHSignatureChallenge`

***

### required()

> `static` **required**(): `ETHSignatureChallenge`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1264](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1264)

#### Returns

`ETHSignatureChallenge`
