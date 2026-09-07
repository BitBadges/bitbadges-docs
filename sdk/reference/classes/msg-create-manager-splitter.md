---
description: "MsgCreateManagerSplitter creates a new manager splitter entity."
---

# Class: MsgCreateManagerSplitter

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts#L16)

MsgCreateManagerSplitter creates a new manager splitter entity.

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`MsgCreateManagerSplitter`\>

## Implements

- [`iMsgCreateManagerSplitter`](/sdk/reference/interfaces/i-msg-create-manager-splitter)

## Constructors

### Constructor

> **new MsgCreateManagerSplitter**(`msg`): `MsgCreateManagerSplitter`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts:20](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts#L20)

#### Parameters

##### msg

[`iMsgCreateManagerSplitter`](/sdk/reference/interfaces/i-msg-create-manager-splitter)

#### Returns

`MsgCreateManagerSplitter`

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### admin

> **admin**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts#L17)

The admin address creating the entity.

#### Implementation of

[`iMsgCreateManagerSplitter`](/sdk/reference/interfaces/i-msg-create-manager-splitter).[`admin`](/sdk/reference/interfaces/i-msg-create-manager-splitter#admin)

***

### permissions

> **permissions**: [`ManagerSplitterPermissions`](/sdk/reference/classes/manager-splitter-permissions)

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts:18](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts#L18)

Permissions mapping each CollectionPermission field to execution criteria.

#### Implementation of

[`iMsgCreateManagerSplitter`](/sdk/reference/interfaces/i-msg-create-manager-splitter).[`permissions`](/sdk/reference/interfaces/i-msg-create-manager-splitter#permissions)

## Methods

### clone()

> **clone**(): `MsgCreateManagerSplitter`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`MsgCreateManagerSplitter`

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

> **toBech32Addresses**(`prefix`): `MsgCreateManagerSplitter`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts:48](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts#L48)

#### Parameters

##### prefix

`string`

#### Returns

`MsgCreateManagerSplitter`

***

### toCosmWasmPayloadString()

> **toCosmWasmPayloadString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts:55](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts#L55)

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

> **toProto**(): `MsgCreateManagerSplitter`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts:26](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts#L26)

#### Returns

`MsgCreateManagerSplitter`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `MsgCreateManagerSplitter`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts#L33)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MsgCreateManagerSplitter`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `MsgCreateManagerSplitter`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts:37](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts#L37)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MsgCreateManagerSplitter`

***

### fromProto()

> `static` **fromProto**(`protoMsg`): `MsgCreateManagerSplitter`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts:41](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/msgCreateManagerSplitter.ts#L41)

#### Parameters

##### protoMsg

`MsgCreateManagerSplitter`

#### Returns

`MsgCreateManagerSplitter`
