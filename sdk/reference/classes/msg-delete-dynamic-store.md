---
description: "MsgDeleteDynamicStore is used to delete a dynamic store."
---

# Class: MsgDeleteDynamicStore\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts#L16)

MsgDeleteDynamicStore is used to delete a dynamic store.

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`MsgDeleteDynamicStore`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iMsgDeleteDynamicStore`](/sdk/reference/interfaces/i-msg-delete-dynamic-store)\<`T`\>

## Constructors

### Constructor

> **new MsgDeleteDynamicStore**\<`T`\>(`msg`): `MsgDeleteDynamicStore`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts:20](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts#L20)

#### Parameters

##### msg

[`iMsgDeleteDynamicStore`](/sdk/reference/interfaces/i-msg-delete-dynamic-store)\<`T`\>

#### Returns

`MsgDeleteDynamicStore`\<`T`\>

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### creator

> **creator**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts#L17)

The creator of the transaction.

#### Implementation of

[`iMsgDeleteDynamicStore`](/sdk/reference/interfaces/i-msg-delete-dynamic-store).[`creator`](/sdk/reference/interfaces/i-msg-delete-dynamic-store#creator)

***

### storeId

> **storeId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts:18](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts#L18)

The ID of the dynamic store to delete.

#### Implementation of

[`iMsgDeleteDynamicStore`](/sdk/reference/interfaces/i-msg-delete-dynamic-store).[`storeId`](/sdk/reference/interfaces/i-msg-delete-dynamic-store#storeid)

## Methods

### clone()

> **clone**(): `MsgDeleteDynamicStore`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`MsgDeleteDynamicStore`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`clone`](/sdk/reference/classes/custom-type-class#clone)

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

#### Inherited from

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

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): `MsgDeleteDynamicStore`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts:48](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts#L48)

#### Parameters

##### prefix

`string`

#### Returns

`MsgDeleteDynamicStore`\<`T`\>

***

### toCosmWasmPayloadString()

> **toCosmWasmPayloadString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts:55](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts#L55)

#### Returns

`string`

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

> **toProto**(): `MsgDeleteDynamicStore`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts:26](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts#L26)

#### Returns

`MsgDeleteDynamicStore`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `MsgDeleteDynamicStore`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts#L33)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MsgDeleteDynamicStore`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `MsgDeleteDynamicStore`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts:37](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts#L37)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MsgDeleteDynamicStore`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

***

### fromProto()

> `static` **fromProto**(`protoMsg`): `MsgDeleteDynamicStore`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts:41](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteDynamicStore.ts#L41)

#### Parameters

##### protoMsg

`MsgDeleteDynamicStore`

#### Returns

`MsgDeleteDynamicStore`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>
