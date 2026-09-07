---
description: "MsgSetValidTokenIds sets the validTokenIds and canUpdateValidTokenIds permission."
---

# Class: MsgSetValidTokenIds\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts:19](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts#L19)

MsgSetValidTokenIds sets the validTokenIds and canUpdateValidTokenIds permission.

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`MsgSetValidTokenIds`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iMsgSetValidTokenIds`](/sdk/reference/interfaces/i-msg-set-valid-token-ids)\<`T`\>

## Constructors

### Constructor

> **new MsgSetValidTokenIds**\<`T`\>(`msg`): `MsgSetValidTokenIds`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts#L25)

#### Parameters

##### msg

[`iMsgSetValidTokenIds`](/sdk/reference/interfaces/i-msg-set-valid-token-ids)\<`T`\>

#### Returns

`MsgSetValidTokenIds`\<`T`\>

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### canUpdateValidTokenIds

> **canUpdateValidTokenIds**: [`TokenIdsActionPermission`](/sdk/reference/classes/token-ids-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts#L23)

Permission to update valid token IDs.

#### Implementation of

[`iMsgSetValidTokenIds`](/sdk/reference/interfaces/i-msg-set-valid-token-ids).[`canUpdateValidTokenIds`](/sdk/reference/interfaces/i-msg-set-valid-token-ids#canupdatevalidtokenids)

***

### collectionId

> **collectionId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts#L21)

The ID of the collection.

#### Implementation of

[`iMsgSetValidTokenIds`](/sdk/reference/interfaces/i-msg-set-valid-token-ids).[`collectionId`](/sdk/reference/interfaces/i-msg-set-valid-token-ids#collectionid)

***

### creator

> **creator**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts:20](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts#L20)

The creator of the transaction.

#### Implementation of

[`iMsgSetValidTokenIds`](/sdk/reference/interfaces/i-msg-set-valid-token-ids).[`creator`](/sdk/reference/interfaces/i-msg-set-valid-token-ids#creator)

***

### validTokenIds

> **validTokenIds**: [`UintRange`](/sdk/reference/classes/uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts:22](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts#L22)

New token IDs to add to this collection.

#### Implementation of

[`iMsgSetValidTokenIds`](/sdk/reference/interfaces/i-msg-set-valid-token-ids).[`validTokenIds`](/sdk/reference/interfaces/i-msg-set-valid-token-ids#validtokenids)

## Methods

### clone()

> **clone**(): `MsgSetValidTokenIds`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`MsgSetValidTokenIds`

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

> **toBech32Addresses**(`prefix`): `MsgSetValidTokenIds`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts:59](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts#L59)

#### Parameters

##### prefix

`string`

#### Returns

`MsgSetValidTokenIds`\<`T`\>

***

### toCosmWasmPayloadString()

> **toCosmWasmPayloadString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts:68](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts#L68)

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

> **toProto**(): `MsgSetValidTokenIds`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts#L33)

#### Returns

`MsgSetValidTokenIds`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `MsgSetValidTokenIds`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts:42](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts#L42)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MsgSetValidTokenIds`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `MsgSetValidTokenIds`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts:46](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts#L46)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MsgSetValidTokenIds`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

***

### fromProto()

> `static` **fromProto**(`protoMsg`): `MsgSetValidTokenIds`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts:50](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetValidTokenIds.ts#L50)

#### Parameters

##### protoMsg

`MsgSetValidTokenIds`

#### Returns

`MsgSetValidTokenIds`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>
