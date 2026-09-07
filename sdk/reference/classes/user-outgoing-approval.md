---
description: "UserOutgoingApproval defines the rules for the approval of an outgoing transfer from a user."
---

# Class: UserOutgoingApproval\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:211](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L211)

UserOutgoingApproval defines the rules for the approval of an outgoing transfer from a user.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`UserOutgoingApproval`\<`T`\>\>

## Extended by

- [`UserOutgoingApprovalWithDetails`](/sdk/reference/classes/user-outgoing-approval-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval)\<`T`\>

## Constructors

### Constructor

> **new UserOutgoingApproval**\<`T`\>(`msg`): `UserOutgoingApproval`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:223](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L223)

#### Parameters

##### msg

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval)\<`T`\>

#### Returns

`UserOutgoingApproval`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### approvalCriteria?

> `optional` **approvalCriteria?**: [`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:220](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L220)

The criteria to be met. These represent the restrictions that must be obeyed such as the total amount approved, max num transfers, merkle challenges, must own tokens, etc.

#### Implementation of

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`approvalCriteria`](/sdk/reference/interfaces/i-user-outgoing-approval#approvalcriteria)

***

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:217](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L217)

The ID of the approval. Must not be a duplicate of another approval ID in the same timeline.

#### Implementation of

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`approvalId`](/sdk/reference/interfaces/i-user-outgoing-approval#approvalid)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:219](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L219)

Arbitrary custom data of the approval

#### Implementation of

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`customData`](/sdk/reference/interfaces/i-user-outgoing-approval#customdata)

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:213](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L213)

The list ID for the user(s) who initiate the transfer. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Implementation of

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`initiatedByListId`](/sdk/reference/interfaces/i-user-outgoing-approval#initiatedbylistid)

***

### ownershipTimes

> **ownershipTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:216](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L216)

The ownership times of the tokens being transferred.

#### Implementation of

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`ownershipTimes`](/sdk/reference/interfaces/i-user-outgoing-approval#ownershiptimes)

***

### tokenIds

> **tokenIds**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:215](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L215)

The token IDs to be transferred.

#### Implementation of

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`tokenIds`](/sdk/reference/interfaces/i-user-outgoing-approval#tokenids)

***

### toListId

> **toListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:212](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L212)

The list ID for the user(s) who is sending the tokens. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Implementation of

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`toListId`](/sdk/reference/interfaces/i-user-outgoing-approval#tolistid)

***

### transferTimes

> **transferTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:214](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L214)

The times allowed for the transfer transaction.

#### Implementation of

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`transferTimes`](/sdk/reference/interfaces/i-user-outgoing-approval#transfertimes)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:218](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L218)

The URI of the approval.

#### Implementation of

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`uri`](/sdk/reference/interfaces/i-user-outgoing-approval#uri)

***

### version

> **version**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:221](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L221)

The version of the approval.

#### Implementation of

[`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval).[`version`](/sdk/reference/interfaces/i-user-outgoing-approval#version)

## Methods

### castToCollectionTransfer()

> **castToCollectionTransfer**(`fromListId`): [`CollectionApproval`](/sdk/reference/classes/collection-approval)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:289](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L289)

#### Parameters

##### fromListId

`string`

#### Returns

[`CollectionApproval`](/sdk/reference/classes/collection-approval)\<`T`\>

***

### clone()

> **clone**(): `UserOutgoingApproval`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`UserOutgoingApproval`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `UserOutgoingApproval`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:241](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L241)

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

`UserOutgoingApproval`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:237](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L237)

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

> **toBech32Addresses**(`prefix`): `UserOutgoingApproval`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:280](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L280)

#### Parameters

##### prefix

`string`

#### Returns

`UserOutgoingApproval`\<`T`\>

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

> **toProto**(): `UserOutgoingApproval`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:245](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L245)

#### Returns

`UserOutgoingApproval`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `UserOutgoingApproval`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:249](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L249)

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

`UserOutgoingApproval`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `UserOutgoingApproval`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:257](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L257)

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

`UserOutgoingApproval`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `UserOutgoingApproval`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:265](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L265)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`UserOutgoingApproval`

##### convertFunction

(`item`) => `U`

#### Returns

`UserOutgoingApproval`\<`U`\>
