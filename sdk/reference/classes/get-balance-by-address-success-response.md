---
description: "T extends NumberType"
---

# Class: GetBalanceByAddressSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:263](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L263)

## Extends

- [`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Constructors

### Constructor

> **new GetBalanceByAddressSuccessResponse**\<`T`\>(`data`): `GetBalanceByAddressSuccessResponse`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1022](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1022)

#### Parameters

##### data

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details)\<`T`\>

#### Returns

`GetBalanceByAddressSuccessResponse`\<`T`\>

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`constructor`](/sdk/reference/classes/balance-doc-with-details#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1011](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1011)

A unique stringified document ID

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`_docId`](/sdk/reference/classes/balance-doc-with-details#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1012](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1012)

A unique document ID (Mongo DB ObjectID)

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`_id`](/sdk/reference/classes/balance-doc-with-details#_id)

***

### autoApproveAllIncomingTransfers

> **autoApproveAllIncomingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1019](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1019)

Whether the user's all incoming transfers are auto-approved. If not, they must be explicitly approved using the incoming approvals.

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`autoApproveAllIncomingTransfers`](/sdk/reference/classes/balance-doc-with-details#autoapproveallincomingtransfers)

***

### autoApproveSelfInitiatedIncomingTransfers

> **autoApproveSelfInitiatedIncomingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1017](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1017)

Whether the user's self-initiated incoming transfers are auto-approved. If not, they must be explicitly approved using the incoming approvals.

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`autoApproveSelfInitiatedIncomingTransfers`](/sdk/reference/classes/balance-doc-with-details#autoapproveselfinitiatedincomingtransfers)

***

### autoApproveSelfInitiatedOutgoingTransfers

> **autoApproveSelfInitiatedOutgoingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1018](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1018)

Whether the user's self-initiated outgoing transfers are auto-approved. If not, they must be explicitly approved using the outgoing approvals.

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`autoApproveSelfInitiatedOutgoingTransfers`](/sdk/reference/classes/balance-doc-with-details#autoapproveselfinitiatedoutgoingtransfers)

***

### balances

> **balances**: [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1016](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1016)

The user's balances.

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`balances`](/sdk/reference/classes/balance-doc-with-details#balances)

***

### bitbadgesAddress

> **bitbadgesAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1014](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1014)

The BitBadges address of the user

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`bitbadgesAddress`](/sdk/reference/classes/balance-doc-with-details#bitbadgesaddress)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1013](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1013)

The collection ID

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`collectionId`](/sdk/reference/classes/balance-doc-with-details#collectionid)

***

### incomingApprovals

> **incomingApprovals**: [`UserIncomingApprovalWithDetails`](/sdk/reference/classes/user-incoming-approval-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1009](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1009)

The incoming approvals with details like metadata and address lists.

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`incomingApprovals`](/sdk/reference/classes/balance-doc-with-details#incomingapprovals)

***

### outgoingApprovals

> **outgoingApprovals**: [`UserOutgoingApprovalWithDetails`](/sdk/reference/classes/user-outgoing-approval-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1008](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1008)

The outgoing approvals with details like metadata and address lists.

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`outgoingApprovals`](/sdk/reference/classes/balance-doc-with-details#outgoingapprovals)

***

### tags?

> `optional` **tags?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1020](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1020)

Optional tags for this balance

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`tags`](/sdk/reference/classes/balance-doc-with-details#tags)

***

### updateHistory

> **updateHistory**: [`UpdateHistory`](/sdk/reference/classes/update-history)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1015](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1015)

The update history of this balance

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`updateHistory`](/sdk/reference/classes/balance-doc-with-details#updatehistory)

***

### userPermissions

> **userPermissions**: [`UserPermissionsWithDetails`](/sdk/reference/classes/user-permissions-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1010](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1010)

The user permissions with details like metadata and address lists.

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`userPermissions`](/sdk/reference/classes/balance-doc-with-details#userpermissions)

## Methods

### clone()

> **clone**(): [`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`clone`](/sdk/reference/classes/balance-doc-with-details#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): [`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`U`\>

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

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`U`\>

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`convert`](/sdk/reference/classes/balance-doc-with-details#convert)

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

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`equals`](/sdk/reference/classes/balance-doc-with-details#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1039](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1039)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`getNumberFieldNames`](/sdk/reference/classes/balance-doc-with-details#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`hasNumberFields`](/sdk/reference/classes/balance-doc-with-details#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`toJson`](/sdk/reference/classes/balance-doc-with-details#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details).[`toJsonString`](/sdk/reference/classes/balance-doc-with-details#tojsonstring)
