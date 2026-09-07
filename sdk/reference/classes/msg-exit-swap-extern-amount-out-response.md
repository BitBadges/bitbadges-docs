---
description: "Base class that implements the CustomType interface. It provides default implementations for all methods."
---

# Class: MsgExitSwapExternAmountOutResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1614](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1614)

Base class that implements the CustomType interface. It provides default implementations for all methods.

IMPORTANT: You must implement the `getNumberFieldNames` method yourself for this class to work properly.
Also, you will need to implement the `convert` method yourself if you want to use it in a typed manner. This
can be done by simply calling `convertClassPropertiesAndMaintainNumberTypes(this, convertFunction, options)` and casting the result to the correct type.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`MsgExitSwapExternAmountOutResponse`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iMsgExitSwapExternAmountOutResponse`](/sdk/reference/interfaces/i-msg-exit-swap-extern-amount-out-response)\<`T`\>

## Constructors

### Constructor

> **new MsgExitSwapExternAmountOutResponse**\<`T`\>(`data`): `MsgExitSwapExternAmountOutResponse`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1620](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1620)

#### Parameters

##### data

[`iMsgExitSwapExternAmountOutResponse`](/sdk/reference/interfaces/i-msg-exit-swap-extern-amount-out-response)\<`T`\>

#### Returns

`MsgExitSwapExternAmountOutResponse`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### shareInAmount

> **shareInAmount**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1618](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1618)

#### Implementation of

[`iMsgExitSwapExternAmountOutResponse`](/sdk/reference/interfaces/i-msg-exit-swap-extern-amount-out-response).[`shareInAmount`](/sdk/reference/interfaces/i-msg-exit-swap-extern-amount-out-response#shareinamount)

## Methods

### clone()

> **clone**(): `MsgExitSwapExternAmountOutResponse`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`MsgExitSwapExternAmountOutResponse`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `MsgExitSwapExternAmountOutResponse`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1629](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1629)

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

`MsgExitSwapExternAmountOutResponse`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1625](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1625)

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

> **toBech32Addresses**(`prefix`): `MsgExitSwapExternAmountOutResponse`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1667](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1667)

#### Parameters

##### prefix

`string`

#### Returns

`MsgExitSwapExternAmountOutResponse`\<`T`\>

***

### toCosmWasmPayloadString()

> **toCosmWasmPayloadString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1673](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1673)

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

> **toProto**(): `MsgExitSwapExternAmountOutResponse`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1633](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1633)

#### Returns

`MsgExitSwapExternAmountOutResponse`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `MsgExitSwapExternAmountOutResponse`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1639](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1639)

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

`MsgExitSwapExternAmountOutResponse`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `MsgExitSwapExternAmountOutResponse`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1647](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1647)

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

`MsgExitSwapExternAmountOutResponse`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `MsgExitSwapExternAmountOutResponse`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:1658](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L1658)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`MsgExitSwapExternAmountOutResponse`

##### convertFunction

(`item`) => `U`

#### Returns

`MsgExitSwapExternAmountOutResponse`\<`U`\>
