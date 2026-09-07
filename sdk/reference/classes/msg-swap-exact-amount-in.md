---
description: "Base class that implements the CustomType interface. It provides default implementations for all methods."
---

# Class: MsgSwapExactAmountIn\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:523](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L523)

Base class that implements the CustomType interface. It provides default implementations for all methods.

IMPORTANT: You must implement the `getNumberFieldNames` method yourself for this class to work properly.
Also, you will need to implement the `convert` method yourself if you want to use it in a typed manner. This
can be done by simply calling `convertClassPropertiesAndMaintainNumberTypes(this, convertFunction, options)` and casting the result to the correct type.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`MsgSwapExactAmountIn`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iMsgSwapExactAmountIn`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in)\<`T`\>

## Constructors

### Constructor

> **new MsgSwapExactAmountIn**\<`T`\>(`data`): `MsgSwapExactAmountIn`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:530](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L530)

#### Parameters

##### data

[`iMsgSwapExactAmountIn`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in)\<`T`\>

#### Returns

`MsgSwapExactAmountIn`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### affiliates

> **affiliates**: [`Affiliate`](/sdk/reference/classes/affiliate)[]

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:528](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L528)

#### Implementation of

[`iMsgSwapExactAmountIn`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in).[`affiliates`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in#affiliates)

***

### routes

> **routes**: [`SwapAmountInRoute`](/sdk/reference/classes/swap-amount-in-route)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:525](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L525)

#### Implementation of

[`iMsgSwapExactAmountIn`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in).[`routes`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in#routes)

***

### sender

> **sender**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:524](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L524)

#### Implementation of

[`iMsgSwapExactAmountIn`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in).[`sender`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in#sender)

***

### tokenIn

> **tokenIn**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:526](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L526)

#### Implementation of

[`iMsgSwapExactAmountIn`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in).[`tokenIn`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in#tokenin)

***

### tokenOutMinAmount

> **tokenOutMinAmount**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:527](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L527)

#### Implementation of

[`iMsgSwapExactAmountIn`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in).[`tokenOutMinAmount`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in#tokenoutminamount)

## Methods

### clone()

> **clone**(): `MsgSwapExactAmountIn`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`MsgSwapExactAmountIn`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `MsgSwapExactAmountIn`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:543](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L543)

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

`MsgSwapExactAmountIn`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:539](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L539)

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

> **toBech32Addresses**(`prefix`): `MsgSwapExactAmountIn`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:586](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L586)

#### Parameters

##### prefix

`string`

#### Returns

`MsgSwapExactAmountIn`\<`T`\>

***

### toCosmWasmPayloadString()

> **toCosmWasmPayloadString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:596](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L596)

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

> **toProto**(): `MsgSwapExactAmountIn`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:547](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L547)

#### Returns

`MsgSwapExactAmountIn`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `MsgSwapExactAmountIn`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:557](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L557)

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

`MsgSwapExactAmountIn`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `MsgSwapExactAmountIn`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:565](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L565)

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

`MsgSwapExactAmountIn`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `MsgSwapExactAmountIn`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:573](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L573)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`MsgSwapExactAmountIn`

##### convertFunction

(`item`) => `U`

#### Returns

`MsgSwapExactAmountIn`\<`U`\>
