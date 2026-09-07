---
description: "MsgSetCollectionMetadata sets the collection metadata timeline and canUpdateCollectionMetadata permission."
---

# Class: MsgSetCollectionMetadata\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts:20](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts#L20)

MsgSetCollectionMetadata sets the collection metadata timeline and canUpdateCollectionMetadata permission.

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`MsgSetCollectionMetadata`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iMsgSetCollectionMetadata`](/sdk/reference/interfaces/i-msg-set-collection-metadata)\<`T`\>

## Constructors

### Constructor

> **new MsgSetCollectionMetadata**\<`T`\>(`msg`): `MsgSetCollectionMetadata`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts:29](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts#L29)

#### Parameters

##### msg

[`iMsgSetCollectionMetadata`](/sdk/reference/interfaces/i-msg-set-collection-metadata)\<`T`\>

#### Returns

`MsgSetCollectionMetadata`\<`T`\>

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### canUpdateCollectionMetadata

> **canUpdateCollectionMetadata**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts#L27)

Permission to update collection metadata.

#### Implementation of

[`iMsgSetCollectionMetadata`](/sdk/reference/interfaces/i-msg-set-collection-metadata).[`canUpdateCollectionMetadata`](/sdk/reference/interfaces/i-msg-set-collection-metadata#canupdatecollectionmetadata)

***

### collectionId

> **collectionId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts#L25)

The ID of the collection.

#### Implementation of

[`iMsgSetCollectionMetadata`](/sdk/reference/interfaces/i-msg-set-collection-metadata).[`collectionId`](/sdk/reference/interfaces/i-msg-set-collection-metadata#collectionid)

***

### collectionMetadata

> **collectionMetadata**: [`iCollectionMetadata`](/sdk/reference/interfaces/i-collection-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts:26](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts#L26)

New collection metadata to set.

#### Implementation of

[`iMsgSetCollectionMetadata`](/sdk/reference/interfaces/i-msg-set-collection-metadata).[`collectionMetadata`](/sdk/reference/interfaces/i-msg-set-collection-metadata#collectionmetadata)

***

### creator

> **creator**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts:24](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts#L24)

The creator of the transaction.

#### Implementation of

[`iMsgSetCollectionMetadata`](/sdk/reference/interfaces/i-msg-set-collection-metadata).[`creator`](/sdk/reference/interfaces/i-msg-set-collection-metadata#creator)

## Methods

### clone()

> **clone**(): `MsgSetCollectionMetadata`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`MsgSetCollectionMetadata`

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

> **toBech32Addresses**(`prefix`): `MsgSetCollectionMetadata`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts:67](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts#L67)

#### Parameters

##### prefix

`string`

#### Returns

`MsgSetCollectionMetadata`\<`T`\>

***

### toCosmWasmPayloadString()

> **toCosmWasmPayloadString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts:76](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts#L76)

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

> **toProto**(): `MsgSetCollectionMetadata`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts:37](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts#L37)

#### Returns

`MsgSetCollectionMetadata`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `MsgSetCollectionMetadata`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts:47](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts#L47)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MsgSetCollectionMetadata`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `MsgSetCollectionMetadata`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts:51](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts#L51)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`MsgSetCollectionMetadata`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

***

### fromProto()

> `static` **fromProto**(`protoMsg`): `MsgSetCollectionMetadata`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts:55](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgSetCollectionMetadata.ts#L55)

#### Parameters

##### protoMsg

`MsgSetCollectionMetadata`

#### Returns

`MsgSetCollectionMetadata`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>
