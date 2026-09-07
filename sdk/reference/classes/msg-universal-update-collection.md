---
description: "MsgUniversalUpdateCollection is a universal transaction that can be used to create / update any collection. It is only executable by the manager…"
---

# Class: MsgUniversalUpdateCollection\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:38](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L38)

MsgUniversalUpdateCollection is a universal transaction that can be used to create / update any collection. It is only executable by the manager.
MsgCreateCollection and MsgUpdateCollection are special cases of this message.

Upon initial creation, you can set the default approved outgoing transfers, default approved incoming transfers, default user permissions, and balances type.
However, after that, they are final and ignored in subsequent MsgUniversalUpdateCollection calls.

For a new collection, specify collectionId == "0".

Note that you must have the necessary privileges to update specific fields. If you do not have the necessary privileges, it will throw an error.
We update any CollectionPermissions at the end, so the permissions checked for the current execution are the permissions BEFORE the update.
In the case of the first MsgUniversalUpdateCollection, the previous permissions are by default all permitted.

To specify you would like to update a field, the corresponding update field must be set to true. If it is set to false, we ignore it.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`MsgUniversalUpdateCollection`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection)\<`T`\>

## Constructors

### Constructor

> **new MsgUniversalUpdateCollection**\<`T`\>(`msg`): `MsgUniversalUpdateCollection`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:68](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L68)

#### Parameters

##### msg

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection)\<`T`\>

#### Returns

`MsgUniversalUpdateCollection`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### aliasPathsToAdd?

> `optional` **aliasPathsToAdd?**: [`AliasPathAddObject`](/sdk/reference/classes/alias-path-add-object)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:65](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L65)

The alias (non-wrapping) paths to add.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`aliasPathsToAdd`](/sdk/reference/interfaces/i-msg-universal-update-collection#aliaspathstoadd)

***

### collectionApprovals?

> `optional` **collectionApprovals?**: [`CollectionApproval`](/sdk/reference/classes/collection-approval)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:58](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L58)

The new collection approved transfers. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`collectionApprovals`](/sdk/reference/interfaces/i-msg-universal-update-collection#collectionapprovals)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:43](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L43)

The ID of the collection to update.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`collectionId`](/sdk/reference/interfaces/i-msg-universal-update-collection#collectionid)

***

### collectionMetadata?

> `optional` **collectionMetadata?**: [`CollectionMetadata`](/sdk/reference/classes/collection-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:52](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L52)

The new collection metadata. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`collectionMetadata`](/sdk/reference/interfaces/i-msg-universal-update-collection#collectionmetadata)

***

### collectionPermissions?

> `optional` **collectionPermissions?**: [`CollectionPermissions`](/sdk/reference/classes/collection-permissions)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:48](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L48)

The new collection permissions. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`collectionPermissions`](/sdk/reference/interfaces/i-msg-universal-update-collection#collectionpermissions)

***

### cosmosCoinWrapperPathsToAdd?

> `optional` **cosmosCoinWrapperPathsToAdd?**: [`CosmosCoinWrapperPathAddObject`](/sdk/reference/classes/cosmos-coin-wrapper-path-add-object)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:64](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L64)

The IBC wrapper paths to add.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`cosmosCoinWrapperPathsToAdd`](/sdk/reference/interfaces/i-msg-universal-update-collection#cosmoscoinwrapperpathstoadd)

***

### creator

> **creator**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:42](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L42)

The creator of the transaction.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`creator`](/sdk/reference/interfaces/i-msg-universal-update-collection#creator)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:56](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L56)

The new custom data. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`customData`](/sdk/reference/interfaces/i-msg-universal-update-collection#customdata)

***

### defaultBalances?

> `optional` **defaultBalances?**: [`UserBalanceStore`](/sdk/reference/classes/user-balance-store)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L44)

The default balances for users who have not interacted with the collection yet. Only can be set on initial creation. Only used if collection has "Standard" balance type.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`defaultBalances`](/sdk/reference/interfaces/i-msg-universal-update-collection#defaultbalances)

***

### invariants?

> `optional` **invariants?**: [`InvariantsAddObject`](/sdk/reference/classes/invariants-add-object)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:66](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L66)

Collection-level invariants that cannot be broken. These are set upon genesis and cannot be modified. Addresses are generated by the keeper.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`invariants`](/sdk/reference/interfaces/i-msg-universal-update-collection#invariants)

***

### isArchived?

> `optional` **isArchived?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:62](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L62)

The new is archived flag. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`isArchived`](/sdk/reference/interfaces/i-msg-universal-update-collection#isarchived)

***

### manager?

> `optional` **manager?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:50](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L50)

The new manager. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`manager`](/sdk/reference/interfaces/i-msg-universal-update-collection#manager)

***

### mintEscrowCoinsToTransfer?

> `optional` **mintEscrowCoinsToTransfer?**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:63](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L63)

The coins to mint to the transfer address. Only used if collection has "Non-Public" balance type.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`mintEscrowCoinsToTransfer`](/sdk/reference/interfaces/i-msg-universal-update-collection#mintescrowcoinstotransfer)

***

### standards?

> `optional` **standards?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:60](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L60)

The new standards. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`standards`](/sdk/reference/interfaces/i-msg-universal-update-collection#standards)

***

### tokenMetadata?

> `optional` **tokenMetadata?**: [`TokenMetadata`](/sdk/reference/classes/token-metadata)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:54](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L54)

The new token metadata. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg. Note we take first-match only for token IDs, so do not define duplicates.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`tokenMetadata`](/sdk/reference/interfaces/i-msg-universal-update-collection#tokenmetadata)

***

### updateCollectionApprovals?

> `optional` **updateCollectionApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:57](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L57)

Whether or not to update the collection approved transfers.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`updateCollectionApprovals`](/sdk/reference/interfaces/i-msg-universal-update-collection#updatecollectionapprovals)

***

### updateCollectionMetadata?

> `optional` **updateCollectionMetadata?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:51](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L51)

Whether or not to update the collection metadata.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`updateCollectionMetadata`](/sdk/reference/interfaces/i-msg-universal-update-collection#updatecollectionmetadata)

***

### updateCollectionPermissions?

> `optional` **updateCollectionPermissions?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:47](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L47)

Whether or not to update the collection permissions.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`updateCollectionPermissions`](/sdk/reference/interfaces/i-msg-universal-update-collection#updatecollectionpermissions)

***

### updateCustomData?

> `optional` **updateCustomData?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:55](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L55)

Whether or not to update the custom data.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`updateCustomData`](/sdk/reference/interfaces/i-msg-universal-update-collection#updatecustomdata)

***

### updateIsArchived?

> `optional` **updateIsArchived?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:61](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L61)

Whether or not to update the is archived flag.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`updateIsArchived`](/sdk/reference/interfaces/i-msg-universal-update-collection#updateisarchived)

***

### updateManager?

> `optional` **updateManager?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:49](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L49)

Whether or not to update the manager.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`updateManager`](/sdk/reference/interfaces/i-msg-universal-update-collection#updatemanager)

***

### updateStandards?

> `optional` **updateStandards?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:59](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L59)

Whether or not to update the standards.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`updateStandards`](/sdk/reference/interfaces/i-msg-universal-update-collection#updatestandards)

***

### updateTokenMetadata?

> `optional` **updateTokenMetadata?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:53](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L53)

Whether or not to update the token metadata.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`updateTokenMetadata`](/sdk/reference/interfaces/i-msg-universal-update-collection#updatetokenmetadata)

***

### updateValidTokenIds?

> `optional` **updateValidTokenIds?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:45](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L45)

Whether or not to update the valid token IDs.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`updateValidTokenIds`](/sdk/reference/interfaces/i-msg-universal-update-collection#updatevalidtokenids)

***

### validTokenIds?

> `optional` **validTokenIds?**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:46](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L46)

The tokens to create. Newly created tokens will be sent to the "Mint" address. Must have necessary permissions in future transactions to update. However, no restrictions in this genesis Msg. Only used if collection has "Standard" balance type.

#### Implementation of

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`validTokenIds`](/sdk/reference/interfaces/i-msg-universal-update-collection#validtokenids)

## Methods

### clone()

> **clone**(): `MsgUniversalUpdateCollection`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`MsgUniversalUpdateCollection`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `MsgUniversalUpdateCollection`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:103](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L103)

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

`MsgUniversalUpdateCollection`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:99](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L99)

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

> **toBech32Addresses**(`prefix`): `MsgUniversalUpdateCollection`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:163](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L163)

#### Parameters

##### prefix

`string`

#### Returns

`MsgUniversalUpdateCollection`\<`T`\>

***

### toCosmWasmPayloadString()

> **toCosmWasmPayloadString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:174](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L174)

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

> **toProto**(): `MsgUniversalUpdateCollection`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:107](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L107)

#### Returns

`MsgUniversalUpdateCollection`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `MsgUniversalUpdateCollection`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:110](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L110)

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

`MsgUniversalUpdateCollection`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `MsgUniversalUpdateCollection`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:118](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L118)

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

`MsgUniversalUpdateCollection`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`protoMsg`, `convertFunction`): `MsgUniversalUpdateCollection`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts:126](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUniversalUpdateCollection.ts#L126)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### protoMsg

`MsgUniversalUpdateCollection`

##### convertFunction

(`item`) => `U`

#### Returns

`MsgUniversalUpdateCollection`\<`U`\>
