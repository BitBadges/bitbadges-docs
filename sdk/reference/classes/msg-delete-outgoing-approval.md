---
description: "MsgDeleteOutgoingApproval is a helper message to delete a single outgoing approval."
---

# Class: MsgDeleteOutgoingApproval

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts#L16)

MsgDeleteOutgoingApproval is a helper message to delete a single outgoing approval.

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`MsgDeleteOutgoingApproval`\>

## Implements

- [`iMsgDeleteOutgoingApproval`](/sdk/reference/interfaces/i-msg-delete-outgoing-approval)

## Constructors

### Constructor

> **new MsgDeleteOutgoingApproval**(`msg`): `MsgDeleteOutgoingApproval`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts#L21)

#### Parameters

##### msg

[`iMsgDeleteOutgoingApproval`](/sdk/reference/interfaces/i-msg-delete-outgoing-approval)

#### Returns

`MsgDeleteOutgoingApproval`

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts:19](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts#L19)

The ID of the approval to delete.

#### Implementation of

[`iMsgDeleteOutgoingApproval`](/sdk/reference/interfaces/i-msg-delete-outgoing-approval).[`approvalId`](/sdk/reference/interfaces/i-msg-delete-outgoing-approval#approvalid)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts:18](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts#L18)

The ID of the collection.

#### Implementation of

[`iMsgDeleteOutgoingApproval`](/sdk/reference/interfaces/i-msg-delete-outgoing-approval).[`collectionId`](/sdk/reference/interfaces/i-msg-delete-outgoing-approval#collectionid)

***

### creator

> **creator**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts#L17)

The creator of the transaction.

#### Implementation of

[`iMsgDeleteOutgoingApproval`](/sdk/reference/interfaces/i-msg-delete-outgoing-approval).[`creator`](/sdk/reference/interfaces/i-msg-delete-outgoing-approval#creator)

## Methods

### clone()

> **clone**(): `MsgDeleteOutgoingApproval`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`MsgDeleteOutgoingApproval`

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

> **toBech32Addresses**(`prefix`): `MsgDeleteOutgoingApproval`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts:52](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts#L52)

#### Parameters

##### prefix

`string`

#### Returns

`MsgDeleteOutgoingApproval`

***

### toCosmWasmPayloadString()

> **toCosmWasmPayloadString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts:60](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts#L60)

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

> **toProto**(): `MsgDeleteOutgoingApproval`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts:28](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts#L28)

#### Returns

`MsgDeleteOutgoingApproval`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `MsgDeleteOutgoingApproval`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts#L36)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MsgDeleteOutgoingApproval`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `MsgDeleteOutgoingApproval`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts#L40)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MsgDeleteOutgoingApproval`

***

### fromProto()

> `static` **fromProto**(`protoMsg`): `MsgDeleteOutgoingApproval`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgDeleteOutgoingApproval.ts#L44)

#### Parameters

##### protoMsg

`MsgDeleteOutgoingApproval`

#### Returns

`MsgDeleteOutgoingApproval`
