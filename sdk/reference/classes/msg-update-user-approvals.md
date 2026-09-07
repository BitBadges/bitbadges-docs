---
description: "MsgUpdateUserApprovals represents the message for updating user approvals."
---

# Class: MsgUpdateUserApprovals\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:32](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L32)

MsgUpdateUserApprovals represents the message for updating user approvals.

For a transfer to be successful, the transfer has to satisfy the following conditions:
- Be approved on the collection level
- Be approved by the recipient's incoming transfers (if not forcefully overriden by the collection)
- Be approved by the sender's outgoing transfers (if not forcefully overriden by the collection)
- The sender must have enough tokens to transfer
- All restrictions and challenges for each approval must be satisfied (merkle challenges, approved amounts, max num transfers, ...)

For successful execution, the user must have the necessary permissions to update the corresponding fields. If not, it will throw an error.
Permissions are updated last, so any permissions checked are the permissions BEFORE the update.

To specify you would like to update a field, the corresponding update field must be set to true. If it is set to false, we ignore it.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`MsgUpdateUserApprovals`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iMsgUpdateUserApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals)\<`T`\>

## Constructors

### Constructor

> **new MsgUpdateUserApprovals**\<`T`\>(`msg`): `MsgUpdateUserApprovals`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:51](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L51)

#### Parameters

##### msg

[`iMsgUpdateUserApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals)\<`T`\>

#### Returns

`MsgUpdateUserApprovals`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### autoApproveAllIncomingTransfers?

> `optional` **autoApproveAllIncomingTransfers?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:47](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L47)

The new auto approve all incoming transfers. Must have the necessary permissions to update.

#### Implementation of

[`iMsgUpdateUserApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals).[`autoApproveAllIncomingTransfers`](/sdk/reference/interfaces/i-msg-update-user-approvals#autoapproveallincomingtransfers)

***

### autoApproveSelfInitiatedIncomingTransfers?

> `optional` **autoApproveSelfInitiatedIncomingTransfers?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:45](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L45)

The new auto approve self initiated incoming transfers. Must have the necessary permissions to update.

#### Implementation of

[`iMsgUpdateUserApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals).[`autoApproveSelfInitiatedIncomingTransfers`](/sdk/reference/interfaces/i-msg-update-user-approvals#autoapproveselfinitiatedincomingtransfers)

***

### autoApproveSelfInitiatedOutgoingTransfers?

> `optional` **autoApproveSelfInitiatedOutgoingTransfers?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:43](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L43)

The new auto approve self initiated outgoing transfers. Must have the necessary permissions to update.

#### Implementation of

[`iMsgUpdateUserApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals).[`autoApproveSelfInitiatedOutgoingTransfers`](/sdk/reference/interfaces/i-msg-update-user-approvals#autoapproveselfinitiatedoutgoingtransfers)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:37](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L37)

The ID of the collection to transfer tokens from.

#### Implementation of

[`iMsgUpdateUserApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals).[`collectionId`](/sdk/reference/interfaces/i-msg-update-user-approvals#collectionid)

***

### creator

> **creator**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L36)

The creator of the transaction.

#### Implementation of

[`iMsgUpdateUserApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals).[`creator`](/sdk/reference/interfaces/i-msg-update-user-approvals#creator)

***

### incomingApprovals?

> `optional` **incomingApprovals?**: [`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:41](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L41)

The new incoming approvals. Must have the necessary permissions to update.

#### Implementation of

[`iMsgUpdateUserApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals).[`incomingApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals#incomingapprovals)

***

### outgoingApprovals?

> `optional` **outgoingApprovals?**: [`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:39](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L39)

The new outgoing approvals. Must have the necessary permissions to update.

#### Implementation of

[`iMsgUpdateUserApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals).[`outgoingApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals#outgoingapprovals)

***

### updateAutoApproveAllIncomingTransfers?

> `optional` **updateAutoApproveAllIncomingTransfers?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:46](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L46)

Whether or not to update the auto approve all incoming transfers.

#### Implementation of

[`iMsgUpdateUserApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals).[`updateAutoApproveAllIncomingTransfers`](/sdk/reference/interfaces/i-msg-update-user-approvals#updateautoapproveallincomingtransfers)

***

### updateAutoApproveSelfInitiatedIncomingTransfers?

> `optional` **updateAutoApproveSelfInitiatedIncomingTransfers?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L44)

Whether or not to update the auto approve self initiated incoming transfers (i.e. to == the user and initiator == the user).

#### Implementation of

[`iMsgUpdateUserApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals).[`updateAutoApproveSelfInitiatedIncomingTransfers`](/sdk/reference/interfaces/i-msg-update-user-approvals#updateautoapproveselfinitiatedincomingtransfers)

***

### updateAutoApproveSelfInitiatedOutgoingTransfers?

> `optional` **updateAutoApproveSelfInitiatedOutgoingTransfers?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:42](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L42)

Whether or not to update the auto approve self initiated outgoing transfers (i.e. from == the user and initiator == the user).

#### Implementation of

[`iMsgUpdateUserApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals).[`updateAutoApproveSelfInitiatedOutgoingTransfers`](/sdk/reference/interfaces/i-msg-update-user-approvals#updateautoapproveselfinitiatedoutgoingtransfers)

***

### updateIncomingApprovals?

> `optional` **updateIncomingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L40)

Whether or not to update the incoming approvals.

#### Implementation of

[`iMsgUpdateUserApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals).[`updateIncomingApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals#updateincomingapprovals)

***

### updateOutgoingApprovals?

> `optional` **updateOutgoingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:38](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L38)

Whether or not to update the outgoing approvals.

#### Implementation of

[`iMsgUpdateUserApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals).[`updateOutgoingApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals#updateoutgoingapprovals)

***

### updateUserPermissions?

> `optional` **updateUserPermissions?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:48](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L48)

Whether or not to update the user permissions.

#### Implementation of

[`iMsgUpdateUserApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals).[`updateUserPermissions`](/sdk/reference/interfaces/i-msg-update-user-approvals#updateuserpermissions)

***

### userPermissions?

> `optional` **userPermissions?**: [`UserPermissions`](/sdk/reference/classes/user-permissions)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:49](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L49)

The new user permissions. Must have the necessary permissions to update.

#### Implementation of

[`iMsgUpdateUserApprovals`](/sdk/reference/interfaces/i-msg-update-user-approvals).[`userPermissions`](/sdk/reference/interfaces/i-msg-update-user-approvals#userpermissions)

## Methods

### clone()

> **clone**(): `MsgUpdateUserApprovals`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`MsgUpdateUserApprovals`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `MsgUpdateUserApprovals`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:73](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L73)

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

`MsgUpdateUserApprovals`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:69](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L69)

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

> **toBech32Addresses**(`prefix`): `MsgUpdateUserApprovals`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:127](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L127)

#### Parameters

##### prefix

`string`

#### Returns

`MsgUpdateUserApprovals`\<`T`\>

***

### toCosmWasmPayloadString()

> **toCosmWasmPayloadString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:138](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L138)

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

> **toProto**(): `MsgUpdateUserApprovals`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:77](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L77)

#### Returns

`MsgUpdateUserApprovals`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `MsgUpdateUserApprovals`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:81](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L81)

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

`MsgUpdateUserApprovals`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `MsgUpdateUserApprovals`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:89](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L89)

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

`MsgUpdateUserApprovals`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`protoMsg`, `convertFunction`): `MsgUpdateUserApprovals`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/msgUpdateUserApprovals.ts#L97)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### protoMsg

`MsgUpdateUserApprovals`

##### convertFunction

(`item`) => `U`

#### Returns

`MsgUpdateUserApprovals`\<`U`\>
