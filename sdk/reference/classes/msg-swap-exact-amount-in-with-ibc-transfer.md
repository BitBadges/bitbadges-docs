---
description: "Base class that implements the CustomType interface. It provides default implementations for all methods."
---

# Class: MsgSwapExactAmountInWithIBCTransfer\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:747](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L747)

Base class that implements the CustomType interface. It provides default implementations for all methods.

IMPORTANT: You must implement the `getNumberFieldNames` method yourself for this class to work properly.
Also, you will need to implement the `convert` method yourself if you want to use it in a typed manner. This
can be done by simply calling `convertClassPropertiesAndMaintainNumberTypes(this, convertFunction, options)` and casting the result to the correct type.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`MsgSwapExactAmountInWithIBCTransfer`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iMsgSwapExactAmountInWithIBCTransfer`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in-with-ibc-transfer)\<`T`\>

## Constructors

### Constructor

> **new MsgSwapExactAmountInWithIBCTransfer**\<`T`\>(`data`): `MsgSwapExactAmountInWithIBCTransfer`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:758](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L758)

#### Parameters

##### data

[`iMsgSwapExactAmountInWithIBCTransfer`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in-with-ibc-transfer)\<`T`\>

#### Returns

`MsgSwapExactAmountInWithIBCTransfer`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### affiliates

> **affiliates**: [`Affiliate`](/sdk/reference/classes/affiliate)[]

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:756](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L756)

affiliates are fee recipients that receive fees calculated from token_out_min_amount

#### Implementation of

[`iMsgSwapExactAmountInWithIBCTransfer`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in-with-ibc-transfer).[`affiliates`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in-with-ibc-transfer#affiliates)

***

### ibcTransferInfo

> **ibcTransferInfo**: [`IBCTransferInfo`](/sdk/reference/classes/ibc-transfer-info)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:755](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L755)

#### Implementation of

[`iMsgSwapExactAmountInWithIBCTransfer`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in-with-ibc-transfer).[`ibcTransferInfo`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in-with-ibc-transfer#ibctransferinfo)

***

### routes

> **routes**: [`SwapAmountInRoute`](/sdk/reference/classes/swap-amount-in-route)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:752](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L752)

#### Implementation of

[`iMsgSwapExactAmountInWithIBCTransfer`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in-with-ibc-transfer).[`routes`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in-with-ibc-transfer#routes)

***

### sender

> **sender**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:751](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L751)

#### Implementation of

[`iMsgSwapExactAmountInWithIBCTransfer`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in-with-ibc-transfer).[`sender`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in-with-ibc-transfer#sender)

***

### tokenIn

> **tokenIn**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:753](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L753)

#### Implementation of

[`iMsgSwapExactAmountInWithIBCTransfer`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in-with-ibc-transfer).[`tokenIn`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in-with-ibc-transfer#tokenin)

***

### tokenOutMinAmount

> **tokenOutMinAmount**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:754](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L754)

#### Implementation of

[`iMsgSwapExactAmountInWithIBCTransfer`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in-with-ibc-transfer).[`tokenOutMinAmount`](/sdk/reference/interfaces/i-msg-swap-exact-amount-in-with-ibc-transfer#tokenoutminamount)

## Methods

### clone()

> **clone**(): `MsgSwapExactAmountInWithIBCTransfer`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`MsgSwapExactAmountInWithIBCTransfer`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `MsgSwapExactAmountInWithIBCTransfer`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:772](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L772)

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

`MsgSwapExactAmountInWithIBCTransfer`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:768](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L768)

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

> **toBech32Addresses**(`prefix`): `MsgSwapExactAmountInWithIBCTransfer`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:830](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L830)

#### Parameters

##### prefix

`string`

#### Returns

`MsgSwapExactAmountInWithIBCTransfer`\<`T`\>

***

### toCosmWasmPayloadString()

> **toCosmWasmPayloadString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:841](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L841)

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

> **toProto**(): `MsgSwapExactAmountInWithIBCTransfer`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:776](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L776)

#### Returns

`MsgSwapExactAmountInWithIBCTransfer`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `MsgSwapExactAmountInWithIBCTransfer`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:787](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L787)

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

`MsgSwapExactAmountInWithIBCTransfer`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `MsgSwapExactAmountInWithIBCTransfer`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:795](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L795)

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

`MsgSwapExactAmountInWithIBCTransfer`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `MsgSwapExactAmountInWithIBCTransfer`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:806](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L806)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`MsgSwapExactAmountInWithIBCTransfer`

##### convertFunction

(`item`) => `U`

#### Returns

`MsgSwapExactAmountInWithIBCTransfer`\<`U`\>
