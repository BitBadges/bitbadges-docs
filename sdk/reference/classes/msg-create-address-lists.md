---
description: "MsgCreateAddressLists defines address lists on-chain."
---

# Class: MsgCreateAddressLists

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts:19](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts#L19)

MsgCreateAddressLists defines address lists on-chain.

AddressLists must be validly formatted and have a unique ID not used before. Note that some such as ("Mint", etc) are reserved as well.

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`MsgCreateAddressLists`\>

## Implements

- `MsgCreateAddressLists`

## Constructors

### Constructor

> **new MsgCreateAddressLists**(`msg`): `MsgCreateAddressLists`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts#L23)

#### Parameters

##### msg

[`iMsgCreateAddressLists`](/sdk/reference/interfaces/i-msg-create-address-lists)

#### Returns

`MsgCreateAddressLists`

#### Overrides

`CustomTypeClass<MsgCreateAddressLists>.constructor`

## Properties

### addressLists

> **addressLists**: [`AddressList`](/sdk/reference/classes/address-list)[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts#L21)

#### Implementation of

`MsgCreateAddressLists.addressLists`

***

### creator

> **creator**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts:20](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts#L20)

#### Implementation of

`MsgCreateAddressLists.creator`

## Methods

### clone()

> **clone**(): `MsgCreateAddressLists`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`MsgCreateAddressLists`

#### Implementation of

`MsgCreateAddressLists.clone`

#### Inherited from

`CustomTypeClass.clone`

***

### ~~convert()~~

> **convert**\<`U`\>(`_convertFunction?`, `options?`): [`CustomType`](/sdk/reference/interfaces/custom-type)\<`any`\>

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:124](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L124)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### \_convertFunction?

(`val`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

[`CustomType`](/sdk/reference/interfaces/custom-type)\<`any`\>

#### Deprecated

This function is unnecessary as this field has no numeric types.
Please use the `.clone()` method instead.

#### Implementation of

`MsgCreateAddressLists.convert`

#### Inherited from

`CustomTypeClass.convert`

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

#### Implementation of

`MsgCreateAddressLists.equals`

#### Inherited from

`CustomTypeClass.equals`

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:111](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L111)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Implementation of

`MsgCreateAddressLists.getNumberFieldNames`

#### Inherited from

`CustomTypeClass.getNumberFieldNames`

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L115)

Checks if the object has number fields.

#### Returns

`boolean`

#### Implementation of

`MsgCreateAddressLists.hasNumberFields`

#### Inherited from

`CustomTypeClass.hasNumberFields`

***

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): `MsgCreateAddressLists`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts:69](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts#L69)

#### Parameters

##### prefix

`string`

#### Returns

`MsgCreateAddressLists`

#### Implementation of

`MsgCreateAddressLists.toBech32Addresses`

***

### toCosmWasmPayloadString()

> **toCosmWasmPayloadString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts:85](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts#L85)

#### Returns

`string`

#### Implementation of

`MsgCreateAddressLists.toCosmWasmPayloadString`

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L93)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Implementation of

`MsgCreateAddressLists.toJson`

#### Inherited from

`CustomTypeClass.toJson`

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L97)

Converts the object to a JSON string.

#### Returns

`string`

#### Implementation of

`MsgCreateAddressLists.toJsonString`

#### Inherited from

`CustomTypeClass.toJsonString`

***

### toProto()

> **toProto**(): `MsgCreateAddressLists`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts:29](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts#L29)

#### Returns

`MsgCreateAddressLists`

#### Implementation of

`MsgCreateAddressLists.toProto`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `MsgCreateAddressLists`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts:45](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts#L45)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MsgCreateAddressLists`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `MsgCreateAddressLists`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts:49](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts#L49)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MsgCreateAddressLists`

***

### fromProto()

> `static` **fromProto**(`protoMsg`): `MsgCreateAddressLists`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts:53](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateAddressLists.ts#L53)

#### Parameters

##### protoMsg

`MsgCreateAddressLists`

#### Returns

`MsgCreateAddressLists`
