---
description: "T extends NumberType"
---

# Class: BalanceDocWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1007](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1007)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`BalanceDocWithDetails`\<`T`\>\>

## Extended by

- [`GetBalanceByAddressSuccessResponse`](/sdk/reference/classes/get-balance-by-address-success-response)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details)\<`T`\>

## Constructors

### Constructor

> **new BalanceDocWithDetails**\<`T`\>(`data`): `BalanceDocWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1022](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1022)

#### Parameters

##### data

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details)\<`T`\>

#### Returns

`BalanceDocWithDetails`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1011](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1011)

A unique stringified document ID

#### Implementation of

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`_docId`](/sdk/reference/interfaces/i-balance-doc-with-details#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1012](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1012)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`_id`](/sdk/reference/interfaces/i-balance-doc-with-details#_id)

***

### autoApproveAllIncomingTransfers

> **autoApproveAllIncomingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1019](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1019)

Whether the user's all incoming transfers are auto-approved. If not, they must be explicitly approved using the incoming approvals.

#### Implementation of

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`autoApproveAllIncomingTransfers`](/sdk/reference/interfaces/i-balance-doc-with-details#autoapproveallincomingtransfers)

***

### autoApproveSelfInitiatedIncomingTransfers

> **autoApproveSelfInitiatedIncomingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1017](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1017)

Whether the user's self-initiated incoming transfers are auto-approved. If not, they must be explicitly approved using the incoming approvals.

#### Implementation of

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`autoApproveSelfInitiatedIncomingTransfers`](/sdk/reference/interfaces/i-balance-doc-with-details#autoapproveselfinitiatedincomingtransfers)

***

### autoApproveSelfInitiatedOutgoingTransfers

> **autoApproveSelfInitiatedOutgoingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1018](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1018)

Whether the user's self-initiated outgoing transfers are auto-approved. If not, they must be explicitly approved using the outgoing approvals.

#### Implementation of

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`autoApproveSelfInitiatedOutgoingTransfers`](/sdk/reference/interfaces/i-balance-doc-with-details#autoapproveselfinitiatedoutgoingtransfers)

***

### balances

> **balances**: [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1016](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1016)

The user's balances.

#### Implementation of

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`balances`](/sdk/reference/interfaces/i-balance-doc-with-details#balances)

***

### bitbadgesAddress

> **bitbadgesAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1014](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1014)

The BitBadges address of the user

#### Implementation of

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`bitbadgesAddress`](/sdk/reference/interfaces/i-balance-doc-with-details#bitbadgesaddress)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1013](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1013)

The collection ID

#### Implementation of

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`collectionId`](/sdk/reference/interfaces/i-balance-doc-with-details#collectionid)

***

### incomingApprovals

> **incomingApprovals**: [`UserIncomingApprovalWithDetails`](/sdk/reference/classes/user-incoming-approval-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1009](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1009)

The incoming approvals with details like metadata and address lists.

#### Implementation of

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`incomingApprovals`](/sdk/reference/interfaces/i-balance-doc-with-details#incomingapprovals)

***

### outgoingApprovals

> **outgoingApprovals**: [`UserOutgoingApprovalWithDetails`](/sdk/reference/classes/user-outgoing-approval-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1008](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1008)

The outgoing approvals with details like metadata and address lists.

#### Implementation of

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`outgoingApprovals`](/sdk/reference/interfaces/i-balance-doc-with-details#outgoingapprovals)

***

### tags?

> `optional` **tags?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1020](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1020)

Optional tags for this balance

#### Implementation of

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`tags`](/sdk/reference/interfaces/i-balance-doc-with-details#tags)

***

### updateHistory

> **updateHistory**: [`UpdateHistory`](/sdk/reference/classes/update-history)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1015](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1015)

The update history of this balance

#### Implementation of

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`updateHistory`](/sdk/reference/interfaces/i-balance-doc-with-details#updatehistory)

***

### userPermissions

> **userPermissions**: [`UserPermissionsWithDetails`](/sdk/reference/classes/user-permissions-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1010](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1010)

The user permissions with details like metadata and address lists.

#### Implementation of

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`userPermissions`](/sdk/reference/interfaces/i-balance-doc-with-details#userpermissions)

## Methods

### clone()

> **clone**(): `BalanceDocWithDetails`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`BalanceDocWithDetails`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `BalanceDocWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1043](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1043)

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

`BalanceDocWithDetails`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1039](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1039)

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
