---
description: "MsgSetCollectionApprovals sets the collection approvals and canUpdateCollectionApprovals permission."
---

# Class: MsgSetCollectionApprovals\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts:19](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts#L19)

MsgSetCollectionApprovals sets the collection approvals and canUpdateCollectionApprovals permission.

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`MsgSetCollectionApprovals`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iMsgSetCollectionApprovals`](/sdk/reference/interfaces/i-msg-set-collection-approvals)\<`T`\>

## Constructors

### Constructor

> **new MsgSetCollectionApprovals**\<`T`\>(`msg`): `MsgSetCollectionApprovals`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts:28](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts#L28)

#### Parameters

##### msg

[`iMsgSetCollectionApprovals`](/sdk/reference/interfaces/i-msg-set-collection-approvals)\<`T`\>

#### Returns

`MsgSetCollectionApprovals`\<`T`\>

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### canUpdateCollectionApprovals

> **canUpdateCollectionApprovals**: [`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts:26](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts#L26)

Permission to update collection approvals.

#### Implementation of

[`iMsgSetCollectionApprovals`](/sdk/reference/interfaces/i-msg-set-collection-approvals).[`canUpdateCollectionApprovals`](/sdk/reference/interfaces/i-msg-set-collection-approvals#canupdatecollectionapprovals)

***

### collectionApprovals

> **collectionApprovals**: [`CollectionApproval`](/sdk/reference/classes/collection-approval)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts#L25)

New collection approvals to set.

#### Implementation of

[`iMsgSetCollectionApprovals`](/sdk/reference/interfaces/i-msg-set-collection-approvals).[`collectionApprovals`](/sdk/reference/interfaces/i-msg-set-collection-approvals#collectionapprovals)

***

### collectionId

> **collectionId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts:24](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts#L24)

The ID of the collection.

#### Implementation of

[`iMsgSetCollectionApprovals`](/sdk/reference/interfaces/i-msg-set-collection-approvals).[`collectionId`](/sdk/reference/interfaces/i-msg-set-collection-approvals#collectionid)

***

### creator

> **creator**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts#L23)

The creator of the transaction.

#### Implementation of

[`iMsgSetCollectionApprovals`](/sdk/reference/interfaces/i-msg-set-collection-approvals).[`creator`](/sdk/reference/interfaces/i-msg-set-collection-approvals#creator)

## Methods

### clone()

> **clone**(): `MsgSetCollectionApprovals`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`MsgSetCollectionApprovals`

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

> **toBech32Addresses**(`prefix`): `MsgSetCollectionApprovals`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts:64](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts#L64)

#### Parameters

##### prefix

`string`

#### Returns

`MsgSetCollectionApprovals`\<`T`\>

***

### toCosmWasmPayloadString()

> **toCosmWasmPayloadString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts:73](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts#L73)

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

> **toProto**(): `MsgSetCollectionApprovals`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts#L36)

#### Returns

`MsgSetCollectionApprovals`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `MsgSetCollectionApprovals`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts:45](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts#L45)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MsgSetCollectionApprovals`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `MsgSetCollectionApprovals`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts:49](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts#L49)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MsgSetCollectionApprovals`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

***

### fromProto()

> `static` **fromProto**(`protoMsg`): `MsgSetCollectionApprovals`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts:53](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionApprovals.ts#L53)

#### Parameters

##### protoMsg

`MsgSetCollectionApprovals`

#### Returns

`MsgSetCollectionApprovals`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>
