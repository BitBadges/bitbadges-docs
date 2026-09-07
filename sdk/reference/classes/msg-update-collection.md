---
description: "MsgUpdateCollection is a transaction that can be used to update any collection. It is only executable by the manager."
---

# Class: MsgUpdateCollection\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:30](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L30)

MsgUpdateCollection is a transaction that can be used to update any collection. It is only executable by the manager.

Note that you must have the necessary privileges to update specific fields. If you do not have the necessary privileges, it will throw an error.
We update any CollectionPermissions at the end, so the permissions checked for the current execution are the permissions BEFORE the update.
In the case of the first MsgUpdateCollection, the previous permissions are by default all permitted.

To specify you would like to update a field, the corresponding update field must be set to true. If it is set to false, we ignore it.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`MsgUpdateCollection`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection)\<`T`\>

## Constructors

### Constructor

> **new MsgUpdateCollection**\<`T`\>(`msg`): `MsgUpdateCollection`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:56](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L56)

#### Parameters

##### msg

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection)\<`T`\>

#### Returns

`MsgUpdateCollection`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### aliasPathsToAdd?

> `optional` **aliasPathsToAdd?**: [`AliasPathAddObject`](/sdk/reference/classes/alias-path-add-object)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:53](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L53)

The alias (non-wrapping) paths to add.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`aliasPathsToAdd`](/sdk/reference/interfaces/i-msg-update-collection#aliaspathstoadd)

***

### collectionApprovals?

> `optional` **collectionApprovals?**: [`CollectionApproval`](/sdk/reference/classes/collection-approval)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:46](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L46)

The new collection approved transfers. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`collectionApprovals`](/sdk/reference/interfaces/i-msg-update-collection#collectionapprovals)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:32](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L32)

The ID of the collection to update.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`collectionId`](/sdk/reference/interfaces/i-msg-update-collection#collectionid)

***

### collectionMetadata?

> `optional` **collectionMetadata?**: [`CollectionMetadata`](/sdk/reference/classes/collection-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L40)

The new collection metadata. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`collectionMetadata`](/sdk/reference/interfaces/i-msg-update-collection#collectionmetadata)

***

### collectionPermissions?

> `optional` **collectionPermissions?**: [`CollectionPermissions`](/sdk/reference/classes/collection-permissions)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L36)

The new collection permissions. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`collectionPermissions`](/sdk/reference/interfaces/i-msg-update-collection#collectionpermissions)

***

### cosmosCoinWrapperPathsToAdd?

> `optional` **cosmosCoinWrapperPathsToAdd?**: [`CosmosCoinWrapperPathAddObject`](/sdk/reference/classes/cosmos-coin-wrapper-path-add-object)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:52](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L52)

The IBC wrapper paths to add.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`cosmosCoinWrapperPathsToAdd`](/sdk/reference/interfaces/i-msg-update-collection#cosmoscoinwrapperpathstoadd)

***

### creator

> **creator**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:31](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L31)

The creator of the transaction.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`creator`](/sdk/reference/interfaces/i-msg-update-collection#creator)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L44)

The new custom data. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`customData`](/sdk/reference/interfaces/i-msg-update-collection#customdata)

***

### invariants?

> `optional` **invariants?**: [`InvariantsAddObject`](/sdk/reference/classes/invariants-add-object)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:54](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L54)

Collection-level invariants that cannot be broken. These are set upon genesis and cannot be modified. Addresses are generated by the keeper.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`invariants`](/sdk/reference/interfaces/i-msg-update-collection#invariants)

***

### isArchived?

> `optional` **isArchived?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:50](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L50)

The new is archived flag. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`isArchived`](/sdk/reference/interfaces/i-msg-update-collection#isarchived)

***

### manager?

> `optional` **manager?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:38](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L38)

The new manager. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`manager`](/sdk/reference/interfaces/i-msg-update-collection#manager)

***

### mintEscrowCoinsToTransfer?

> `optional` **mintEscrowCoinsToTransfer?**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:51](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L51)

The coins to mint to the transfer address. Only used if collection has "Non-Public" balance type.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`mintEscrowCoinsToTransfer`](/sdk/reference/interfaces/i-msg-update-collection#mintescrowcoinstotransfer)

***

### standards?

> `optional` **standards?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:48](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L48)

The new standards. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`standards`](/sdk/reference/interfaces/i-msg-update-collection#standards)

***

### tokenMetadata?

> `optional` **tokenMetadata?**: [`TokenMetadata`](/sdk/reference/classes/token-metadata)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:42](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L42)

The new token metadata. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg. Note we take first-match only for token IDs, so do not define duplicates.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`tokenMetadata`](/sdk/reference/interfaces/i-msg-update-collection#tokenmetadata)

***

### updateCollectionApprovals?

> `optional` **updateCollectionApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:45](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L45)

Whether or not to update the collection approved transfers.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`updateCollectionApprovals`](/sdk/reference/interfaces/i-msg-update-collection#updatecollectionapprovals)

***

### updateCollectionMetadata?

> `optional` **updateCollectionMetadata?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:39](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L39)

Whether or not to update the collection metadata.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`updateCollectionMetadata`](/sdk/reference/interfaces/i-msg-update-collection#updatecollectionmetadata)

***

### updateCollectionPermissions?

> `optional` **updateCollectionPermissions?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:35](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L35)

Whether or not to update the collection permissions.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`updateCollectionPermissions`](/sdk/reference/interfaces/i-msg-update-collection#updatecollectionpermissions)

***

### updateCustomData?

> `optional` **updateCustomData?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:43](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L43)

Whether or not to update the custom data.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`updateCustomData`](/sdk/reference/interfaces/i-msg-update-collection#updatecustomdata)

***

### updateIsArchived?

> `optional` **updateIsArchived?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:49](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L49)

Whether or not to update the is archived flag.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`updateIsArchived`](/sdk/reference/interfaces/i-msg-update-collection#updateisarchived)

***

### updateManager?

> `optional` **updateManager?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:37](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L37)

Whether or not to update the manager.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`updateManager`](/sdk/reference/interfaces/i-msg-update-collection#updatemanager)

***

### updateStandards?

> `optional` **updateStandards?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:47](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L47)

Whether or not to update the standards.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`updateStandards`](/sdk/reference/interfaces/i-msg-update-collection#updatestandards)

***

### updateTokenMetadata?

> `optional` **updateTokenMetadata?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:41](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L41)

Whether or not to update the token metadata.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`updateTokenMetadata`](/sdk/reference/interfaces/i-msg-update-collection#updatetokenmetadata)

***

### updateValidTokenIds?

> `optional` **updateValidTokenIds?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L33)

Whether or not to update the valid token IDs.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`updateValidTokenIds`](/sdk/reference/interfaces/i-msg-update-collection#updatevalidtokenids)

***

### validTokenIds?

> `optional` **validTokenIds?**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L34)

The tokens to create. Newly created tokens will be sent to the "Mint" address. Must have necessary permissions in future transactions to update. However, no restrictions in this genesis Msg. Only used if collection has "Standard" balance type.

#### Implementation of

[`iMsgUpdateCollection`](/sdk/reference/interfaces/i-msg-update-collection).[`validTokenIds`](/sdk/reference/interfaces/i-msg-update-collection#validtokenids)

## Methods

### clone()

> **clone**(): `MsgUpdateCollection`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`MsgUpdateCollection`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `MsgUpdateCollection`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:89](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L89)

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

`MsgUpdateCollection`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:85](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L85)

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

> **toBech32Addresses**(`prefix`): `MsgUpdateCollection`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:147](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L147)

#### Parameters

##### prefix

`string`

#### Returns

`MsgUpdateCollection`\<`T`\>

***

### toCosmWasmPayloadString()

> **toCosmWasmPayloadString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:158](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L158)

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

> **toProto**(): `MsgUpdateCollection`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L93)

#### Returns

`MsgUpdateCollection`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `MsgUpdateCollection`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L97)

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

`MsgUpdateCollection`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `MsgUpdateCollection`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L105)

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

`MsgUpdateCollection`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`protoMsg`, `convertFunction`): `MsgUpdateCollection`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts:113](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateCollection.ts#L113)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### protoMsg

`MsgUpdateCollection`

##### convertFunction

(`item`) => `U`

#### Returns

`MsgUpdateCollection`\<`U`\>
