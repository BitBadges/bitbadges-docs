---
description: "Base class that implements the CustomType interface. It provides default implementations for all methods."
---

# Class: IBCTransferInfo\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:672](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L672)

Base class that implements the CustomType interface. It provides default implementations for all methods.

IMPORTANT: You must implement the `getNumberFieldNames` method yourself for this class to work properly.
Also, you will need to implement the `convert` method yourself if you want to use it in a typed manner. This
can be done by simply calling `convertClassPropertiesAndMaintainNumberTypes(this, convertFunction, options)` and casting the result to the correct type.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`IBCTransferInfo`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iIBCTransferInfo`](/sdk/reference/interfaces/i-ibc-transfer-info)\<`T`\>

## Constructors

### Constructor

> **new IBCTransferInfo**\<`T`\>(`data`): `IBCTransferInfo`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:678](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L678)

#### Parameters

##### data

[`iIBCTransferInfo`](/sdk/reference/interfaces/i-ibc-transfer-info)\<`T`\>

#### Returns

`IBCTransferInfo`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### memo

> **memo**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:675](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L675)

#### Implementation of

[`iIBCTransferInfo`](/sdk/reference/interfaces/i-ibc-transfer-info).[`memo`](/sdk/reference/interfaces/i-ibc-transfer-info#memo)

***

### receiver

> **receiver**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:674](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L674)

#### Implementation of

[`iIBCTransferInfo`](/sdk/reference/interfaces/i-ibc-transfer-info).[`receiver`](/sdk/reference/interfaces/i-ibc-transfer-info#receiver)

***

### sourceChannel

> **sourceChannel**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:673](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L673)

#### Implementation of

[`iIBCTransferInfo`](/sdk/reference/interfaces/i-ibc-transfer-info).[`sourceChannel`](/sdk/reference/interfaces/i-ibc-transfer-info#sourcechannel)

***

### timeoutTimestamp

> **timeoutTimestamp**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:676](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L676)

#### Implementation of

[`iIBCTransferInfo`](/sdk/reference/interfaces/i-ibc-transfer-info).[`timeoutTimestamp`](/sdk/reference/interfaces/i-ibc-transfer-info#timeouttimestamp)

## Methods

### clone()

> **clone**(): `IBCTransferInfo`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`IBCTransferInfo`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `IBCTransferInfo`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:690](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L690)

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

`IBCTransferInfo`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:686](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L686)

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

> **toBech32Addresses**(`prefix`): `IBCTransferInfo`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:728](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L728)

#### Parameters

##### prefix

`string`

#### Returns

`IBCTransferInfo`\<`T`\>

***

### toCosmWasmPayloadString()

> **toCosmWasmPayloadString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:737](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L737)

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

> **toProto**(): `IBCTransferInfo`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:694](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L694)

#### Returns

`IBCTransferInfo`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `IBCTransferInfo`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:703](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L703)

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

`IBCTransferInfo`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `IBCTransferInfo`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:711](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L711)

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

`IBCTransferInfo`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `IBCTransferInfo`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:719](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L719)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`IBCTransferInfo`

##### convertFunction

(`item`) => `U`

#### Returns

`IBCTransferInfo`\<`U`\>
