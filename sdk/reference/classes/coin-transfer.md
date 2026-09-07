---
description: "T extends NumberType"
---

# Class: CoinTransfer\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:184](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L184)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`CoinTransfer`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iCoinTransfer`](/sdk/reference/interfaces/i-coin-transfer)\<`T`\>

## Constructors

### Constructor

> **new CoinTransfer**\<`T`\>(`coinTransfer`): `CoinTransfer`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:190](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L190)

#### Parameters

##### coinTransfer

[`iCoinTransfer`](/sdk/reference/interfaces/i-coin-transfer)\<`T`\>

#### Returns

`CoinTransfer`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### coins

> **coins**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:186](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L186)

The coins

#### Implementation of

[`iCoinTransfer`](/sdk/reference/interfaces/i-coin-transfer).[`coins`](/sdk/reference/interfaces/i-coin-transfer#coins)

***

### overrideFromWithApproverAddress

> **overrideFromWithApproverAddress**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:187](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L187)

Whether or not to override the from address with the approver address.

#### Implementation of

[`iCoinTransfer`](/sdk/reference/interfaces/i-coin-transfer).[`overrideFromWithApproverAddress`](/sdk/reference/interfaces/i-coin-transfer#overridefromwithapproveraddress)

***

### overrideToWithInitiator

> **overrideToWithInitiator**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:188](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L188)

Whether or not to override the to address with the initiator of the transaction.

#### Implementation of

[`iCoinTransfer`](/sdk/reference/interfaces/i-coin-transfer).[`overrideToWithInitiator`](/sdk/reference/interfaces/i-coin-transfer#overridetowithinitiator)

***

### to

> **to**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:185](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L185)

The recipient of the coin transfer. This should be a Bech32 BitBadges address.

#### Implementation of

[`iCoinTransfer`](/sdk/reference/interfaces/i-coin-transfer).[`to`](/sdk/reference/interfaces/i-coin-transfer#to)

## Methods

### clone()

> **clone**(): `CoinTransfer`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`CoinTransfer`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `CoinTransfer`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:202](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L202)

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

`CoinTransfer`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:198](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L198)

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

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): `CoinTransfer`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:224](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L224)

#### Parameters

##### prefix

`string`

#### Returns

`CoinTransfer`\<`T`\>

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

### toProto()

> **toProto**(): `CoinTransfer`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:211](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L211)

#### Returns

`CoinTransfer`

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `CoinTransfer`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:215](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L215)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`CoinTransfer`

##### convertFunction

(`item`) => `U`

#### Returns

`CoinTransfer`\<`U`\>
