---
description: "MsgCreateCollection is a transaction that can be used to create a collection."
---

# Class: MsgCreateCollection\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L27)

MsgCreateCollection is a transaction that can be used to create a collection.

Upon initial creation, you can set the default approved outgoing transfers, default approved incoming transfers, default user permissions, and balances type.
However, after that, they are final and ignored in subsequent MsgCreateCollection calls.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`MsgCreateCollection`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection)\<`T`\>

## Constructors

### Constructor

> **new MsgCreateCollection**\<`T`\>(`msg`): `MsgCreateCollection`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L44)

#### Parameters

##### msg

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection)\<`T`\>

#### Returns

`MsgCreateCollection`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### aliasPathsToAdd?

> `optional` **aliasPathsToAdd?**: [`AliasPathAddObject`](/sdk/reference/classes/alias-path-add-object)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:41](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L41)

The alias (non-wrapping) paths to add.

#### Implementation of

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`aliasPathsToAdd`](/sdk/reference/interfaces/i-msg-create-collection#aliaspathstoadd)

***

### collectionApprovals?

> `optional` **collectionApprovals?**: [`CollectionApproval`](/sdk/reference/classes/collection-approval)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L36)

The new collection approved transfers. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`collectionApprovals`](/sdk/reference/interfaces/i-msg-create-collection#collectionapprovals)

***

### collectionMetadata?

> `optional` **collectionMetadata?**: [`CollectionMetadata`](/sdk/reference/classes/collection-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L33)

The new collection metadata. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`collectionMetadata`](/sdk/reference/interfaces/i-msg-create-collection#collectionmetadata)

***

### collectionPermissions?

> `optional` **collectionPermissions?**: [`CollectionPermissions`](/sdk/reference/classes/collection-permissions)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:31](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L31)

The new collection permissions. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`collectionPermissions`](/sdk/reference/interfaces/i-msg-create-collection#collectionpermissions)

***

### cosmosCoinWrapperPathsToAdd?

> `optional` **cosmosCoinWrapperPathsToAdd?**: [`CosmosCoinWrapperPathAddObject`](/sdk/reference/classes/cosmos-coin-wrapper-path-add-object)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L40)

The IBC wrapper paths to add.

#### Implementation of

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`cosmosCoinWrapperPathsToAdd`](/sdk/reference/interfaces/i-msg-create-collection#cosmoscoinwrapperpathstoadd)

***

### creator

> **creator**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:28](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L28)

The creator of the transaction.

#### Implementation of

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`creator`](/sdk/reference/interfaces/i-msg-create-collection#creator)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:35](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L35)

The new custom data. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`customData`](/sdk/reference/interfaces/i-msg-create-collection#customdata)

***

### defaultBalances?

> `optional` **defaultBalances?**: [`UserBalanceStore`](/sdk/reference/classes/user-balance-store)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:29](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L29)

The default balances for users who have not interacted with the collection yet. Only can be set on initial creation. Only used if collection has "Standard" balance type.

#### Implementation of

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`defaultBalances`](/sdk/reference/interfaces/i-msg-create-collection#defaultbalances)

***

### invariants?

> `optional` **invariants?**: [`InvariantsAddObject`](/sdk/reference/classes/invariants-add-object)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:42](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L42)

Collection-level invariants that cannot be broken. These are set upon genesis and cannot be modified. Addresses are generated by the keeper.

#### Implementation of

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`invariants`](/sdk/reference/interfaces/i-msg-create-collection#invariants)

***

### isArchived?

> `optional` **isArchived?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:38](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L38)

The new is archived flag. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`isArchived`](/sdk/reference/interfaces/i-msg-create-collection#isarchived)

***

### manager?

> `optional` **manager?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:32](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L32)

The new manager. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`manager`](/sdk/reference/interfaces/i-msg-create-collection#manager)

***

### mintEscrowCoinsToTransfer?

> `optional` **mintEscrowCoinsToTransfer?**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:39](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L39)

The coins to mint to the transfer address. Only used if collection has "Non-Public" balance type.

#### Implementation of

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`mintEscrowCoinsToTransfer`](/sdk/reference/interfaces/i-msg-create-collection#mintescrowcoinstotransfer)

***

### standards?

> `optional` **standards?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:37](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L37)

The new standards. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Implementation of

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`standards`](/sdk/reference/interfaces/i-msg-create-collection#standards)

***

### tokenMetadata?

> `optional` **tokenMetadata?**: [`TokenMetadata`](/sdk/reference/classes/token-metadata)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L34)

The new token metadata. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg. Note we take first-match only for token IDs, so do not define duplicates.

#### Implementation of

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`tokenMetadata`](/sdk/reference/interfaces/i-msg-create-collection#tokenmetadata)

***

### validTokenIds?

> `optional` **validTokenIds?**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:30](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L30)

The tokens to create. Newly created tokens will be sent to the "Mint" address. Must have necessary permissions in future transactions to update. However, no restrictions in this genesis Msg. Only used if collection has "Standard" balance type.

#### Implementation of

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`validTokenIds`](/sdk/reference/interfaces/i-msg-create-collection#validtokenids)

## Methods

### clone()

> **clone**(): `MsgCreateCollection`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`MsgCreateCollection`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `MsgCreateCollection`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:63](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L63)

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

`MsgCreateCollection`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L157)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

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

> **toBech32Addresses**(`prefix`): `MsgCreateCollection`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:112](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L112)

#### Parameters

##### prefix

`string`

#### Returns

`MsgCreateCollection`\<`T`\>

***

### toCosmWasmPayloadString()

> **toCosmWasmPayloadString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:123](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L123)

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

> **toProto**(): `MsgCreateCollection`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:67](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L67)

#### Returns

`MsgCreateCollection`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `MsgCreateCollection`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:71](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L71)

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

`MsgCreateCollection`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `MsgCreateCollection`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:79](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L79)

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

`MsgCreateCollection`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`protoMsg`, `convertFunction`): `MsgCreateCollection`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts:87](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgCreateCollection.ts#L87)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### protoMsg

`MsgCreateCollection`

##### convertFunction

(`item`) => `U`

#### Returns

`MsgCreateCollection`\<`U`\>
