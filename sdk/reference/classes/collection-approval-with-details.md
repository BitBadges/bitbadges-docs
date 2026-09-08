---
description: "T extends NumberType"
---

# Class: CollectionApprovalWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2276](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2276)

## Extends

- [`CollectionApproval`](/sdk/reference/classes/collection-approval)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details)\<`T`\>

## Constructors

### Constructor

> **new CollectionApprovalWithDetails**\<`T`\>(`data`): `CollectionApprovalWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2283](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2283)

#### Parameters

##### data

[`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details)\<`T`\>

#### Returns

`CollectionApprovalWithDetails`\<`T`\>

#### Overrides

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`constructor`](/sdk/reference/classes/collection-approval#constructor)

## Properties

### approvalCriteria?

> `optional` **approvalCriteria?**: [`ApprovalCriteriaWithDetails`](/sdk/reference/classes/approval-criteria-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2281](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2281)

The criteria to be met. These represent the restrictions that must be obeyed such as the total amount approved, max num transfers, merkle challenges, must own tokens, etc.

#### Implementation of

[`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details).[`approvalCriteria`](/sdk/reference/interfaces/i-collection-approval-with-details#approvalcriteria)

#### Overrides

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`approvalCriteria`](/sdk/reference/classes/collection-approval#approvalcriteria)

***

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1305](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1305)

The ID of the approval. Must not be a duplicate of another approval ID in the same timeline.

#### Implementation of

[`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details).[`approvalId`](/sdk/reference/interfaces/i-collection-approval-with-details#approvalid)

#### Inherited from

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`approvalId`](/sdk/reference/classes/collection-approval#approvalid)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1307](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1307)

Arbitrary custom data of the approval

#### Implementation of

[`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details).[`customData`](/sdk/reference/interfaces/i-collection-approval-with-details#customdata)

#### Inherited from

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`customData`](/sdk/reference/classes/collection-approval#customdata)

***

### details?

> `optional` **details?**: [`ApprovalInfoDetails`](/sdk/reference/classes/approval-info-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2277](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2277)

The approval metadata details

#### Implementation of

[`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details).[`details`](/sdk/reference/interfaces/i-collection-approval-with-details#details)

***

### fromList

> **fromList**: [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2279](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2279)

The populated address list for the fromListId

#### Implementation of

[`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details).[`fromList`](/sdk/reference/interfaces/i-collection-approval-with-details#fromlist)

***

### fromListId

> **fromListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1300](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1300)

The list ID for the user(s) who is sending the tokens. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Implementation of

[`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details).[`fromListId`](/sdk/reference/interfaces/i-collection-approval-with-details#fromlistid)

#### Inherited from

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`fromListId`](/sdk/reference/classes/collection-approval#fromlistid)

***

### initiatedByList

> **initiatedByList**: [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2280](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2280)

The populated address list for the initiatedByListId

#### Implementation of

[`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details).[`initiatedByList`](/sdk/reference/interfaces/i-collection-approval-with-details#initiatedbylist)

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1301](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1301)

The list ID for the user(s) who initiate the transfer. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Implementation of

[`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details).[`initiatedByListId`](/sdk/reference/interfaces/i-collection-approval-with-details#initiatedbylistid)

#### Inherited from

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`initiatedByListId`](/sdk/reference/classes/collection-approval#initiatedbylistid)

***

### ownershipTimes

> **ownershipTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1304](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1304)

The ownership times of the tokens being transferred.

#### Implementation of

[`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details).[`ownershipTimes`](/sdk/reference/interfaces/i-collection-approval-with-details#ownershiptimes)

#### Inherited from

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`ownershipTimes`](/sdk/reference/classes/collection-approval#ownershiptimes)

***

### tokenIds

> **tokenIds**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1303](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1303)

The token IDs to be transferred.

#### Implementation of

[`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details).[`tokenIds`](/sdk/reference/interfaces/i-collection-approval-with-details#tokenids)

#### Inherited from

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`tokenIds`](/sdk/reference/classes/collection-approval#tokenids)

***

### toList

> **toList**: [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2278](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2278)

The populated address list for the toListId

#### Implementation of

[`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details).[`toList`](/sdk/reference/interfaces/i-collection-approval-with-details#tolist)

***

### toListId

> **toListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1299](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1299)

The list ID for the user(s) who is receiving the tokens. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Implementation of

[`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details).[`toListId`](/sdk/reference/interfaces/i-collection-approval-with-details#tolistid)

#### Inherited from

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`toListId`](/sdk/reference/classes/collection-approval#tolistid)

***

### transferTimes

> **transferTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1302](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1302)

The times allowed for the transfer transaction.

#### Implementation of

[`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details).[`transferTimes`](/sdk/reference/interfaces/i-collection-approval-with-details#transfertimes)

#### Inherited from

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`transferTimes`](/sdk/reference/classes/collection-approval#transfertimes)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1306](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1306)

The URI of the approval.

#### Implementation of

[`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details).[`uri`](/sdk/reference/interfaces/i-collection-approval-with-details#uri)

#### Inherited from

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`uri`](/sdk/reference/classes/collection-approval#uri)

***

### version

> **version**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1309](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1309)

The version of the approval.0

#### Implementation of

[`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details).[`version`](/sdk/reference/interfaces/i-collection-approval-with-details#version)

#### Inherited from

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`version`](/sdk/reference/classes/collection-approval#version)

## Methods

### castToIncomingApproval()

> **castToIncomingApproval**(): [`UserIncomingApprovalWithDetails`](/sdk/reference/classes/user-incoming-approval-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2364](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2364)

#### Returns

[`UserIncomingApprovalWithDetails`](/sdk/reference/classes/user-incoming-approval-with-details)\<`T`\>

#### Overrides

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`castToIncomingApproval`](/sdk/reference/classes/collection-approval#casttoincomingapproval)

***

### castToOutgoingApproval()

> **castToOutgoingApproval**(): [`UserOutgoingApprovalWithDetails`](/sdk/reference/classes/user-outgoing-approval-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2350](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2350)

#### Returns

[`UserOutgoingApprovalWithDetails`](/sdk/reference/classes/user-outgoing-approval-with-details)\<`T`\>

#### Overrides

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`castToOutgoingApproval`](/sdk/reference/classes/collection-approval#casttooutgoingapproval)

***

### castToUniversalPermission()

> **castToUniversalPermission**(): [`UniversalPermission`](/sdk/reference/interfaces/universal-permission)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2300](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2300)

#### Returns

[`UniversalPermission`](/sdk/reference/interfaces/universal-permission)

***

### clone()

> **clone**(): `CollectionApprovalWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2296](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2296)

Deep copies the object and returns a new instance.

#### Returns

`CollectionApprovalWithDetails`\<`T`\>

#### Overrides

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`clone`](/sdk/reference/classes/collection-approval#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `CollectionApprovalWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2292](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2292)

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

`CollectionApprovalWithDetails`\<`U`\>

#### Overrides

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`convert`](/sdk/reference/classes/collection-approval#convert)

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

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`equals`](/sdk/reference/classes/collection-approval#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1338](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1338)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`getNumberFieldNames`](/sdk/reference/classes/collection-approval#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`hasNumberFields`](/sdk/reference/classes/collection-approval#hasnumberfields)

***

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): [`CollectionApproval`](/sdk/reference/classes/collection-approval)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1408](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1408)

#### Parameters

##### prefix

`string`

#### Returns

[`CollectionApproval`](/sdk/reference/classes/collection-approval)\<`T`\>

#### Inherited from

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`toBech32Addresses`](/sdk/reference/classes/collection-approval#tobech32addresses)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`toJson`](/sdk/reference/classes/collection-approval#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`toJsonString`](/sdk/reference/classes/collection-approval#tojsonstring)

***

### toProto()

> **toProto**(): `CollectionApproval`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1346](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1346)

#### Returns

`CollectionApproval`

#### Inherited from

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`toProto`](/sdk/reference/classes/collection-approval#toproto)

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): [`CollectionApproval`](/sdk/reference/classes/collection-approval)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1350](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1350)

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

[`CollectionApproval`](/sdk/reference/classes/collection-approval)\<`U`\>

#### Inherited from

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`fromJson`](/sdk/reference/classes/collection-approval#fromjson)

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): [`CollectionApproval`](/sdk/reference/classes/collection-approval)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1358](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1358)

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

[`CollectionApproval`](/sdk/reference/classes/collection-approval)\<`U`\>

#### Inherited from

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`fromJsonString`](/sdk/reference/classes/collection-approval#fromjsonstring)

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): [`CollectionApproval`](/sdk/reference/classes/collection-approval)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1366](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1366)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`CollectionApproval`

##### convertFunction

(`item`) => `U`

#### Returns

[`CollectionApproval`](/sdk/reference/classes/collection-approval)\<`U`\>

#### Inherited from

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`fromProto`](/sdk/reference/classes/collection-approval#fromproto)

***

### validateUpdate()

> `static` **validateUpdate**\<`U`\>(`oldApprovals`, `newApprovals`, `canUpdateCollectionApprovals`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2377](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2377)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### oldApprovals

`CollectionApprovalWithDetails`\<`U`\>[]

##### newApprovals

`CollectionApprovalWithDetails`\<`U`\>[]

##### canUpdateCollectionApprovals

[`CollectionApprovalPermissionWithDetails`](/sdk/reference/classes/collection-approval-permission-with-details)\<`U`\>[]

#### Returns

`Error` \| `null`

#### Overrides

[`CollectionApproval`](/sdk/reference/classes/collection-approval).[`validateUpdate`](/sdk/reference/classes/collection-approval#validateupdate)
