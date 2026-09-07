---
description: "ETHSignatureProof is used to represent an Ethereum signature proof. The ETH signature proof is used to prove that a specific nonce was signed by an Ethereum…"
---

# Class: ETHSignatureProof

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1310](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1310)

ETHSignatureProof is used to represent an Ethereum signature proof.
The ETH signature proof is used to prove that a specific nonce was signed by an Ethereum address.

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`ETHSignatureProof`\>

## Implements

- [`iETHSignatureProof`](/sdk/reference/interfaces/i-eth-signature-proof)

## Constructors

### Constructor

> **new ETHSignatureProof**(`ethSignatureProof`): `ETHSignatureProof`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1314](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1314)

#### Parameters

##### ethSignatureProof

[`iETHSignatureProof`](/sdk/reference/interfaces/i-eth-signature-proof)

#### Returns

`ETHSignatureProof`

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### nonce

> **nonce**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1311](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1311)

The nonce that was signed. The signature scheme is ETHSign(nonce + "-" + creatorAddress).

#### Implementation of

[`iETHSignatureProof`](/sdk/reference/interfaces/i-eth-signature-proof).[`nonce`](/sdk/reference/interfaces/i-eth-signature-proof#nonce)

***

### signature

> **signature**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1312](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1312)

The Ethereum signature of the nonce.

#### Implementation of

[`iETHSignatureProof`](/sdk/reference/interfaces/i-eth-signature-proof).[`signature`](/sdk/reference/interfaces/i-eth-signature-proof#signature)

## Methods

### clone()

> **clone**(): `ETHSignatureProof`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1331](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1331)

Deep copies the object and returns a new instance.

#### Returns

`ETHSignatureProof`

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`clone`](/sdk/reference/classes/custom-type-class#clone)

***

### ~~convert()~~

> **convert**\<`U`\>(`convertFunction`, `options?`): `ETHSignatureProof`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1335](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1335)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`ETHSignatureProof`

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

> **toProto**(): `ETHSignatureProof`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1327](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1327)

#### Returns

`ETHSignatureProof`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `ETHSignatureProof`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1340](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1340)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`ETHSignatureProof`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `ETHSignatureProof`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1344](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1344)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`ETHSignatureProof`

***

### fromProto()

> `static` **fromProto**(`item`): `ETHSignatureProof`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1348](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1348)

#### Parameters

##### item

`ETHSignatureProof`

#### Returns

`ETHSignatureProof`

***

### required()

> `static` **required**(): `ETHSignatureProof`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1320](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1320)

#### Returns

`ETHSignatureProof`
