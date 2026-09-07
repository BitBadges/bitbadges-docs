---
description: "MaxNumTransfers represents the maximum number of transfers for the token IDs and ownershipTimes of this approval."
---

# Class: MaxNumTransfers\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:930](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L930)

MaxNumTransfers represents the maximum number of transfers for the token IDs and ownershipTimes of this approval.

Can be set to 0 to represent an unlimited number of transfers.
If set to non-zero value, we track the running tally of the number of transfers for each token ID / ownership time. Once it reaches the max, no more transfers are allowed.

Note that we only track the max num transfers if a) the max num transfers here is defined and not unlimited OR b) we need it for calculating the predetermined balances order (i.e. useXYZNumTransfers is set in the PredeterminedOrderCalculationMethod).
Otherwise, we do not track the respective number of transfers

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`MaxNumTransfers`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iMaxNumTransfers`](/sdk/reference/interfaces/i-max-num-transfers)\<`T`\>

## Constructors

### Constructor

> **new MaxNumTransfers**\<`T`\>(`msg`): `MaxNumTransfers`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:938](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L938)

#### Parameters

##### msg

[`iMaxNumTransfers`](/sdk/reference/interfaces/i-max-num-transfers)\<`T`\>

#### Returns

`MaxNumTransfers`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### amountTrackerId

> **amountTrackerId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:935](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L935)

The ID of the approval tracker. This is the key used to track tallies.

#### Implementation of

[`iMaxNumTransfers`](/sdk/reference/interfaces/i-max-num-transfers).[`amountTrackerId`](/sdk/reference/interfaces/i-max-num-transfers#amounttrackerid)

***

### overallMaxNumTransfers

> **overallMaxNumTransfers**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:931](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L931)

The overall maximum number of transfers for the tokenIDs and ownershipTimes. Running tally that includes all transfers that match this approval.

#### Implementation of

[`iMaxNumTransfers`](/sdk/reference/interfaces/i-max-num-transfers).[`overallMaxNumTransfers`](/sdk/reference/interfaces/i-max-num-transfers#overallmaxnumtransfers)

***

### perFromAddressMaxNumTransfers

> **perFromAddressMaxNumTransfers**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:933](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L933)

The maximum number of transfers for the tokenIDs and ownershipTimes for each from address. Running tally that includes all transfers from each unique from address that match this approval.

#### Implementation of

[`iMaxNumTransfers`](/sdk/reference/interfaces/i-max-num-transfers).[`perFromAddressMaxNumTransfers`](/sdk/reference/interfaces/i-max-num-transfers#perfromaddressmaxnumtransfers)

***

### perInitiatedByAddressMaxNumTransfers

> **perInitiatedByAddressMaxNumTransfers**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:934](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L934)

The maximum number of transfers for the tokenIDs and ownershipTimes for each initiated by address. Running tally that includes all transfers from each unique initiated by address that match this approval.

#### Implementation of

[`iMaxNumTransfers`](/sdk/reference/interfaces/i-max-num-transfers).[`perInitiatedByAddressMaxNumTransfers`](/sdk/reference/interfaces/i-max-num-transfers#perinitiatedbyaddressmaxnumtransfers)

***

### perToAddressMaxNumTransfers

> **perToAddressMaxNumTransfers**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:932](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L932)

The maximum number of transfers for the tokenIDs and ownershipTimes for each to address. Running tally that includes all transfers from each unique to address that match this approval.

#### Implementation of

[`iMaxNumTransfers`](/sdk/reference/interfaces/i-max-num-transfers).[`perToAddressMaxNumTransfers`](/sdk/reference/interfaces/i-max-num-transfers#pertoaddressmaxnumtransfers)

***

### resetTimeIntervals

> **resetTimeIntervals**: [`ResetTimeIntervals`](/sdk/reference/classes/reset-time-intervals)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:936](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L936)

The time intervals to reset the tracker at.

#### Implementation of

[`iMaxNumTransfers`](/sdk/reference/interfaces/i-max-num-transfers).[`resetTimeIntervals`](/sdk/reference/interfaces/i-max-num-transfers#resettimeintervals)

## Methods

### clone()

> **clone**(): `MaxNumTransfers`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`MaxNumTransfers`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `MaxNumTransfers`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:952](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L952)

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

`MaxNumTransfers`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:948](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L948)

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

> **toProto**(): `MaxNumTransfers`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:956](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L956)

#### Returns

`MaxNumTransfers`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `MaxNumTransfers`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:960](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L960)

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

`MaxNumTransfers`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `MaxNumTransfers`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:968](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L968)

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

`MaxNumTransfers`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `MaxNumTransfers`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:976](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L976)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`MaxNumTransfers`

##### convertFunction

(`item`) => `U`

#### Returns

`MaxNumTransfers`\<`U`\>
