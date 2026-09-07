---
description: "T extends NumberType"
---

# Class: UserBalanceStore\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L16)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`UserBalanceStore`\<`T`\>\>

## Extended by

- [`UserBalanceStoreWithDetails`](/sdk/reference/classes/user-balance-store-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store)\<`T`\>

## Constructors

### Constructor

> **new UserBalanceStore**\<`T`\>(`data`): `UserBalanceStore`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L25)

#### Parameters

##### data

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store)\<`T`\>

#### Returns

`UserBalanceStore`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### autoApproveAllIncomingTransfers

> **autoApproveAllIncomingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L23)

Whether the user's all incoming transfers are auto-approved. If not, they must be explicitly approved using the incoming approvals.

#### Implementation of

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`autoApproveAllIncomingTransfers`](/sdk/reference/interfaces/i-user-balance-store#autoapproveallincomingtransfers)

***

### autoApproveSelfInitiatedIncomingTransfers

> **autoApproveSelfInitiatedIncomingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:22](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L22)

Whether the user's self-initiated incoming transfers are auto-approved. If not, they must be explicitly approved using the incoming approvals.

#### Implementation of

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`autoApproveSelfInitiatedIncomingTransfers`](/sdk/reference/interfaces/i-user-balance-store#autoapproveselfinitiatedincomingtransfers)

***

### autoApproveSelfInitiatedOutgoingTransfers

> **autoApproveSelfInitiatedOutgoingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L21)

Whether the user's self-initiated outgoing transfers are auto-approved. If not, they must be explicitly approved using the outgoing approvals.

#### Implementation of

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`autoApproveSelfInitiatedOutgoingTransfers`](/sdk/reference/interfaces/i-user-balance-store#autoapproveselfinitiatedoutgoingtransfers)

***

### balances

> **balances**: [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L17)

The user's balances.

#### Implementation of

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`balances`](/sdk/reference/interfaces/i-user-balance-store#balances)

***

### incomingApprovals

> **incomingApprovals**: [`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:18](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L18)

The user's incoming approvals.

#### Implementation of

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`incomingApprovals`](/sdk/reference/interfaces/i-user-balance-store#incomingapprovals)

***

### outgoingApprovals

> **outgoingApprovals**: [`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:19](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L19)

The user's outgoing approvals.

#### Implementation of

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`outgoingApprovals`](/sdk/reference/interfaces/i-user-balance-store#outgoingapprovals)

***

### userPermissions

> **userPermissions**: [`UserPermissions`](/sdk/reference/classes/user-permissions)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:20](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L20)

The user's permissions.

#### Implementation of

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`userPermissions`](/sdk/reference/interfaces/i-user-balance-store#userpermissions)

## Methods

### clone()

> **clone**(): `UserBalanceStore`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`UserBalanceStore`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `UserBalanceStore`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L36)

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

`UserBalanceStore`\<`U`\>

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

> **toBech32Addresses**(`prefix`): `UserBalanceStore`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:64](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L64)

#### Parameters

##### prefix

`string`

#### Returns

`UserBalanceStore`\<`T`\>

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

> **toProto**(): `UserBalanceStore`

Defined in: [packages/bitbadgesjs-sdk/src/core/userBalances.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/userBalances.ts#L40)

#### Returns

`UserBalanceStore`

***

### fromProto()

> `static` **fromProto**\<`T`\>(`item`, `convertFunction`): `UserBalanceStore`\<`T`\>

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

`UserBalanceStore`\<`T`\>
