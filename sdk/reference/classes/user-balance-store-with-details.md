---
description: "T extends NumberType"
---

# Class: UserBalanceStoreWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:77](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L77)

## Extends

- [`UserBalanceStore`](/sdk/reference/classes/user-balance-store)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iUserBalanceStoreWithDetails`](/sdk/reference/interfaces/i-user-balance-store-with-details)\<`T`\>
- [`CustomType`](/sdk/reference/interfaces/custom-type)\<`UserBalanceStoreWithDetails`\<`T`\>\>

## Constructors

### Constructor

> **new UserBalanceStoreWithDetails**\<`T`\>(`data`): `UserBalanceStoreWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:85](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L85)

#### Parameters

##### data

[`iUserBalanceStoreWithDetails`](/sdk/reference/interfaces/i-user-balance-store-with-details)\<`T`\>

#### Returns

`UserBalanceStoreWithDetails`\<`T`\>

#### Overrides

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store).[`constructor`](/sdk/reference/classes/user-balance-store#constructor)

## Properties

### autoApproveAllIncomingTransfers

> **autoApproveAllIncomingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L23)

Whether the user's all incoming transfers are auto-approved. If not, they must be explicitly approved using the incoming approvals.

#### Implementation of

[`iUserBalanceStoreWithDetails`](/sdk/reference/interfaces/i-user-balance-store-with-details).[`autoApproveAllIncomingTransfers`](/sdk/reference/interfaces/i-user-balance-store-with-details#autoapproveallincomingtransfers)

#### Inherited from

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store).[`autoApproveAllIncomingTransfers`](/sdk/reference/classes/user-balance-store#autoapproveallincomingtransfers)

***

### autoApproveSelfInitiatedIncomingTransfers

> **autoApproveSelfInitiatedIncomingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:22](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L22)

Whether the user's self-initiated incoming transfers are auto-approved. If not, they must be explicitly approved using the incoming approvals.

#### Implementation of

[`iUserBalanceStoreWithDetails`](/sdk/reference/interfaces/i-user-balance-store-with-details).[`autoApproveSelfInitiatedIncomingTransfers`](/sdk/reference/interfaces/i-user-balance-store-with-details#autoapproveselfinitiatedincomingtransfers)

#### Inherited from

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store).[`autoApproveSelfInitiatedIncomingTransfers`](/sdk/reference/classes/user-balance-store#autoapproveselfinitiatedincomingtransfers)

***

### autoApproveSelfInitiatedOutgoingTransfers

> **autoApproveSelfInitiatedOutgoingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L21)

Whether the user's self-initiated outgoing transfers are auto-approved. If not, they must be explicitly approved using the outgoing approvals.

#### Implementation of

[`iUserBalanceStoreWithDetails`](/sdk/reference/interfaces/i-user-balance-store-with-details).[`autoApproveSelfInitiatedOutgoingTransfers`](/sdk/reference/interfaces/i-user-balance-store-with-details#autoapproveselfinitiatedoutgoingtransfers)

#### Inherited from

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store).[`autoApproveSelfInitiatedOutgoingTransfers`](/sdk/reference/classes/user-balance-store#autoapproveselfinitiatedoutgoingtransfers)

***

### balances

> **balances**: [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L17)

The user's balances.

#### Implementation of

[`iUserBalanceStoreWithDetails`](/sdk/reference/interfaces/i-user-balance-store-with-details).[`balances`](/sdk/reference/interfaces/i-user-balance-store-with-details#balances)

#### Inherited from

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store).[`balances`](/sdk/reference/classes/user-balance-store#balances)

***

### incomingApprovals

> **incomingApprovals**: [`UserIncomingApprovalWithDetails`](/sdk/reference/classes/user-incoming-approval-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:82](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L82)

The user's incoming approvals.

#### Implementation of

[`iUserBalanceStoreWithDetails`](/sdk/reference/interfaces/i-user-balance-store-with-details).[`incomingApprovals`](/sdk/reference/interfaces/i-user-balance-store-with-details#incomingapprovals)

#### Overrides

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store).[`incomingApprovals`](/sdk/reference/classes/user-balance-store#incomingapprovals)

***

### outgoingApprovals

> **outgoingApprovals**: [`UserOutgoingApprovalWithDetails`](/sdk/reference/classes/user-outgoing-approval-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:81](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L81)

The user's outgoing approvals.

#### Implementation of

[`iUserBalanceStoreWithDetails`](/sdk/reference/interfaces/i-user-balance-store-with-details).[`outgoingApprovals`](/sdk/reference/interfaces/i-user-balance-store-with-details#outgoingapprovals)

#### Overrides

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store).[`outgoingApprovals`](/sdk/reference/classes/user-balance-store#outgoingapprovals)

***

### userPermissions

> **userPermissions**: [`UserPermissionsWithDetails`](/sdk/reference/classes/user-permissions-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:83](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L83)

The user's permissions.

#### Implementation of

[`iUserBalanceStoreWithDetails`](/sdk/reference/interfaces/i-user-balance-store-with-details).[`userPermissions`](/sdk/reference/interfaces/i-user-balance-store-with-details#userpermissions)

#### Overrides

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store).[`userPermissions`](/sdk/reference/classes/user-balance-store#userpermissions)

## Methods

### clone()

> **clone**(): `UserBalanceStoreWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:96](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L96)

Deep copies the object and returns a new instance.

#### Returns

`UserBalanceStoreWithDetails`\<`T`\>

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`clone`](/sdk/reference/interfaces/custom-type#clone)

#### Overrides

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store).[`clone`](/sdk/reference/classes/user-balance-store#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `UserBalanceStoreWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:92](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L92)

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

`UserBalanceStoreWithDetails`\<`U`\>

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`convert`](/sdk/reference/interfaces/custom-type#convert)

#### Overrides

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store).[`convert`](/sdk/reference/classes/user-balance-store#convert)

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

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`equals`](/sdk/reference/interfaces/custom-type#equals)

#### Inherited from

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store).[`equals`](/sdk/reference/classes/user-balance-store#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L157)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`getNumberFieldNames`](/sdk/reference/interfaces/custom-type#getnumberfieldnames)

#### Inherited from

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store).[`getNumberFieldNames`](/sdk/reference/classes/user-balance-store#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`hasNumberFields`](/sdk/reference/interfaces/custom-type#hasnumberfields)

#### Inherited from

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store).[`hasNumberFields`](/sdk/reference/classes/user-balance-store#hasnumberfields)

***

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): [`UserBalanceStore`](/sdk/reference/classes/user-balance-store)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:64](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L64)

#### Parameters

##### prefix

`string`

#### Returns

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store)\<`T`\>

#### Inherited from

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store).[`toBech32Addresses`](/sdk/reference/classes/user-balance-store#tobech32addresses)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`toJson`](/sdk/reference/interfaces/custom-type#tojson)

#### Inherited from

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store).[`toJson`](/sdk/reference/classes/user-balance-store#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`toJsonString`](/sdk/reference/interfaces/custom-type#tojsonstring)

#### Inherited from

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store).[`toJsonString`](/sdk/reference/classes/user-balance-store#tojsonstring)

***

### toProto()

> **toProto**(): `UserBalanceStore`

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L40)

#### Returns

`UserBalanceStore`

#### Inherited from

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store).[`toProto`](/sdk/reference/classes/user-balance-store#toproto)

***

### fromProto()

> `static` **fromProto**\<`T`\>(`item`, `convertFunction`): [`UserBalanceStore`](/sdk/reference/classes/user-balance-store)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L44)

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`UserBalanceStore`

##### convertFunction

(`item`) => `T`

#### Returns

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store)\<`T`\>

#### Inherited from

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store).[`fromProto`](/sdk/reference/classes/user-balance-store#fromproto)
