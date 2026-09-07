---
description: "MsgDeleteManagerSplitter deletes a manager splitter entity."
---

# Class: MsgDeleteManagerSplitter

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts:15](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts#L15)

MsgDeleteManagerSplitter deletes a manager splitter entity.

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`MsgDeleteManagerSplitter`\>

## Implements

- [`iMsgDeleteManagerSplitter`](/sdk/reference/interfaces/i-msg-delete-manager-splitter)

## Constructors

### Constructor

> **new MsgDeleteManagerSplitter**(`msg`): `MsgDeleteManagerSplitter`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts:19](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts#L19)

#### Parameters

##### msg

[`iMsgDeleteManagerSplitter`](/sdk/reference/interfaces/i-msg-delete-manager-splitter)

#### Returns

`MsgDeleteManagerSplitter`

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts#L17)

Address of the manager splitter to delete.

#### Implementation of

[`iMsgDeleteManagerSplitter`](/sdk/reference/interfaces/i-msg-delete-manager-splitter).[`address`](/sdk/reference/interfaces/i-msg-delete-manager-splitter#address)

***

### admin

> **admin**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts#L16)

The admin address deleting the entity.

#### Implementation of

[`iMsgDeleteManagerSplitter`](/sdk/reference/interfaces/i-msg-delete-manager-splitter).[`admin`](/sdk/reference/interfaces/i-msg-delete-manager-splitter#admin)

## Methods

### clone()

> **clone**(): `MsgDeleteManagerSplitter`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`MsgDeleteManagerSplitter`

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

> **toBech32Addresses**(`prefix`): `MsgDeleteManagerSplitter`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts:47](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts#L47)

#### Parameters

##### prefix

`string`

#### Returns

`MsgDeleteManagerSplitter`

***

### toCosmWasmPayloadString()

> **toCosmWasmPayloadString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts:54](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts#L54)

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

> **toProto**(): `MsgDeleteManagerSplitter`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts#L25)

#### Returns

`MsgDeleteManagerSplitter`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `MsgDeleteManagerSplitter`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts:32](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts#L32)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MsgDeleteManagerSplitter`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `MsgDeleteManagerSplitter`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts#L36)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MsgDeleteManagerSplitter`

***

### fromProto()

> `static` **fromProto**(`protoMsg`): `MsgDeleteManagerSplitter`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgDeleteManagerSplitter.ts#L40)

#### Parameters

##### protoMsg

`MsgDeleteManagerSplitter`

#### Returns

`MsgDeleteManagerSplitter`
