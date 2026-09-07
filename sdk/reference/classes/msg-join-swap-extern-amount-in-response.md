---
description: "Base class that implements the CustomType interface. It provides default implementations for all methods."
---

# Class: MsgJoinSwapExternAmountInResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1151)

Base class that implements the CustomType interface. It provides default implementations for all methods.

IMPORTANT: You must implement the `getNumberFieldNames` method yourself for this class to work properly.
Also, you will need to implement the `convert` method yourself if you want to use it in a typed manner. This
can be done by simply calling `convertClassPropertiesAndMaintainNumberTypes(this, convertFunction, options)` and casting the result to the correct type.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`MsgJoinSwapExternAmountInResponse`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iMsgJoinSwapExternAmountInResponse`](/sdk/reference/interfaces/i-msg-join-swap-extern-amount-in-response)\<`T`\>

## Constructors

### Constructor

> **new MsgJoinSwapExternAmountInResponse**\<`T`\>(`data`): `MsgJoinSwapExternAmountInResponse`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1157)

#### Parameters

##### data

[`iMsgJoinSwapExternAmountInResponse`](/sdk/reference/interfaces/i-msg-join-swap-extern-amount-in-response)\<`T`\>

#### Returns

`MsgJoinSwapExternAmountInResponse`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### shareOutAmount

> **shareOutAmount**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1155](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1155)

#### Implementation of

[`iMsgJoinSwapExternAmountInResponse`](/sdk/reference/interfaces/i-msg-join-swap-extern-amount-in-response).[`shareOutAmount`](/sdk/reference/interfaces/i-msg-join-swap-extern-amount-in-response#shareoutamount)

## Methods

### clone()

> **clone**(): `MsgJoinSwapExternAmountInResponse`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`MsgJoinSwapExternAmountInResponse`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `MsgJoinSwapExternAmountInResponse`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1166](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1166)

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

`MsgJoinSwapExternAmountInResponse`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1162](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1162)

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

> **toBech32Addresses**(`prefix`): `MsgJoinSwapExternAmountInResponse`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1204](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1204)

#### Parameters

##### prefix

`string`

#### Returns

`MsgJoinSwapExternAmountInResponse`\<`T`\>

***

### toCosmWasmPayloadString()

> **toCosmWasmPayloadString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1210](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1210)

#### Returns

`string`

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

> **toProto**(): `MsgJoinSwapExternAmountInResponse`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1170](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1170)

#### Returns

`MsgJoinSwapExternAmountInResponse`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `MsgJoinSwapExternAmountInResponse`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1176](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1176)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### jsonValue

`JsonValue`

##### convertFunction

(`item`) => `U`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MsgJoinSwapExternAmountInResponse`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `MsgJoinSwapExternAmountInResponse`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1184](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1184)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### jsonString

`string`

##### convertFunction

(`item`) => `U`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MsgJoinSwapExternAmountInResponse`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `MsgJoinSwapExternAmountInResponse`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1195](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1195)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`MsgJoinSwapExternAmountInResponse`

##### convertFunction

(`item`) => `U`

#### Returns

`MsgJoinSwapExternAmountInResponse`\<`U`\>
