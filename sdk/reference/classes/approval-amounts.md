---
description: "ApprovalAmounts represents the maximum approved amounts for the token IDs / ownership times of this approval. Can be set to 0 to represent an unlimited amount…"
---

# Class: ApprovalAmounts\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:799](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L799)

ApprovalAmounts represents the maximum approved amounts for the token IDs / ownership times of this approval.
Can be set to 0 to represent an unlimited amount is approved.
If set to non-zero value, we track the running tally of the amount approved for each token ID / ownership time.
Once it reaches the max, no more transfers are allowed.

Note that we only track the approval amounts if the approval is defined and not unlimited. If it is unlimited, we do not tally.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`ApprovalAmounts`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iApprovalAmounts`](/sdk/reference/interfaces/i-approval-amounts)\<`T`\>

## Constructors

### Constructor

> **new ApprovalAmounts**\<`T`\>(`msg`): `ApprovalAmounts`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:807](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L807)

#### Parameters

##### msg

[`iApprovalAmounts`](/sdk/reference/interfaces/i-approval-amounts)\<`T`\>

#### Returns

`ApprovalAmounts`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### amountTrackerId

> **amountTrackerId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:804](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L804)

The ID of the approval tracker. This is the key used to track tallies.

#### Implementation of

[`iApprovalAmounts`](/sdk/reference/interfaces/i-approval-amounts).[`amountTrackerId`](/sdk/reference/interfaces/i-approval-amounts#amounttrackerid)

***

### overallApprovalAmount

> **overallApprovalAmount**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:800](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L800)

The overall maximum amount approved for the tokenIDs and ownershipTimes. Running tally that includes all transfers that match this approval.

#### Implementation of

[`iApprovalAmounts`](/sdk/reference/interfaces/i-approval-amounts).[`overallApprovalAmount`](/sdk/reference/interfaces/i-approval-amounts#overallapprovalamount)

***

### perFromAddressApprovalAmount

> **perFromAddressApprovalAmount**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:802](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L802)

The maximum amount approved for the tokenIDs and ownershipTimes for each from address. Running tally that includes all transfers from each unique from address that match this approval.

#### Implementation of

[`iApprovalAmounts`](/sdk/reference/interfaces/i-approval-amounts).[`perFromAddressApprovalAmount`](/sdk/reference/interfaces/i-approval-amounts#perfromaddressapprovalamount)

***

### perInitiatedByAddressApprovalAmount

> **perInitiatedByAddressApprovalAmount**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:803](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L803)

The maximum amount approved for the tokenIDs and ownershipTimes for each initiated by address. Running tally that includes all transfers from each unique initiated by address that match this approval.

#### Implementation of

[`iApprovalAmounts`](/sdk/reference/interfaces/i-approval-amounts).[`perInitiatedByAddressApprovalAmount`](/sdk/reference/interfaces/i-approval-amounts#perinitiatedbyaddressapprovalamount)

***

### perToAddressApprovalAmount

> **perToAddressApprovalAmount**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:801](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L801)

The maximum amount approved for the tokenIDs and ownershipTimes for each to address. Running tally that includes all transfers from each unique to address that match this approval.

#### Implementation of

[`iApprovalAmounts`](/sdk/reference/interfaces/i-approval-amounts).[`perToAddressApprovalAmount`](/sdk/reference/interfaces/i-approval-amounts#pertoaddressapprovalamount)

***

### resetTimeIntervals

> **resetTimeIntervals**: [`ResetTimeIntervals`](/sdk/reference/classes/reset-time-intervals)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:805](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L805)

The time intervals to reset the tracker at.

#### Implementation of

[`iApprovalAmounts`](/sdk/reference/interfaces/i-approval-amounts).[`resetTimeIntervals`](/sdk/reference/interfaces/i-approval-amounts#resettimeintervals)

## Methods

### clone()

> **clone**(): `ApprovalAmounts`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`ApprovalAmounts`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `ApprovalAmounts`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:821](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L821)

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

`ApprovalAmounts`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:817](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L817)

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

***

### toProto()

> **toProto**(): `ApprovalAmounts`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:834](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L834)

#### Returns

`ApprovalAmounts`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `ApprovalAmounts`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:838](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L838)

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

`ApprovalAmounts`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `ApprovalAmounts`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:846](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L846)

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

`ApprovalAmounts`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `ApprovalAmounts`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:854](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L854)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`ApprovalAmounts`

##### convertFunction

(`item`) => `U`

#### Returns

`ApprovalAmounts`\<`U`\>
