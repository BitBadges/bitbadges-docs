---
description: "IncrementedBalances represents predetermined incremented balances for transfers of an approval. You can define a starting balance and increment the token IDs…"
---

# Class: IncrementedBalances\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:656](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L656)

IncrementedBalances represents predetermined incremented balances for transfers of an approval.
You can define a starting balance and increment the token IDs and owned times by a certain amount.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`IncrementedBalances`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iIncrementedBalances`](/sdk/reference/interfaces/i-incremented-balances)\<`T`\>

## Constructors

### Constructor

> **new IncrementedBalances**\<`T`\>(`msg`): `IncrementedBalances`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:667](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L667)

#### Parameters

##### msg

[`iIncrementedBalances`](/sdk/reference/interfaces/i-incremented-balances)\<`T`\>

#### Returns

`IncrementedBalances`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### allowAmountScaling

> **allowAmountScaling**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:664](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L664)

When true, transfers can be any evenly divisible integer multiple of startBalances. coinTransfers scale by the same multiplier. All other fields must be zero/false/nil.

#### Implementation of

[`iIncrementedBalances`](/sdk/reference/interfaces/i-incremented-balances).[`allowAmountScaling`](/sdk/reference/interfaces/i-incremented-balances#allowamountscaling)

***

### allowOverrideTimestamp

> **allowOverrideTimestamp**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:661](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L661)

Whether to allow the override timestamp to be used.

#### Implementation of

[`iIncrementedBalances`](/sdk/reference/interfaces/i-incremented-balances).[`allowOverrideTimestamp`](/sdk/reference/interfaces/i-incremented-balances#allowoverridetimestamp)

***

### allowOverrideWithAnyValidToken

> **allowOverrideWithAnyValidToken**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:663](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L663)

Whether to allow the override with any valid ID.

#### Implementation of

[`iIncrementedBalances`](/sdk/reference/interfaces/i-incremented-balances).[`allowOverrideWithAnyValidToken`](/sdk/reference/interfaces/i-incremented-balances#allowoverridewithanyvalidtoken)

***

### durationFromTimestamp

> **durationFromTimestamp**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:660](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L660)

The number of unix milliseconds to approve starting from now. Incompatible with incrementOwnershipTimesBy.

#### Implementation of

[`iIncrementedBalances`](/sdk/reference/interfaces/i-incremented-balances).[`durationFromTimestamp`](/sdk/reference/interfaces/i-incremented-balances#durationfromtimestamp)

***

### incrementOwnershipTimesBy

> **incrementOwnershipTimesBy**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:659](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L659)

The amount to increment the owned times by after each transfer. Incompatible with durationFromTimestamp.

#### Implementation of

[`iIncrementedBalances`](/sdk/reference/interfaces/i-incremented-balances).[`incrementOwnershipTimesBy`](/sdk/reference/interfaces/i-incremented-balances#incrementownershiptimesby)

***

### incrementTokenIdsBy

> **incrementTokenIdsBy**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:658](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L658)

The amount to increment the token IDs by after each transfer.

#### Implementation of

[`iIncrementedBalances`](/sdk/reference/interfaces/i-incremented-balances).[`incrementTokenIdsBy`](/sdk/reference/interfaces/i-incremented-balances#incrementtokenidsby)

***

### maxScalingMultiplier

> **maxScalingMultiplier**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:665](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L665)

Maximum allowed scaling multiplier. Must be > 0 when allowAmountScaling is true. 0 means N/A (scaling disabled).

#### Implementation of

[`iIncrementedBalances`](/sdk/reference/interfaces/i-incremented-balances).[`maxScalingMultiplier`](/sdk/reference/interfaces/i-incremented-balances#maxscalingmultiplier)

***

### recurringOwnershipTimes

> **recurringOwnershipTimes**: [`RecurringOwnershipTimes`](/sdk/reference/classes/recurring-ownership-times)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:662](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L662)

The recurring ownership times for the approval.

#### Implementation of

[`iIncrementedBalances`](/sdk/reference/interfaces/i-incremented-balances).[`recurringOwnershipTimes`](/sdk/reference/interfaces/i-incremented-balances#recurringownershiptimes)

***

### startBalances

> **startBalances**: [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:657](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L657)

The starting balances for each transfer. Order number corresponds to the number of times we increment.

#### Implementation of

[`iIncrementedBalances`](/sdk/reference/interfaces/i-incremented-balances).[`startBalances`](/sdk/reference/interfaces/i-incremented-balances#startbalances)

## Methods

### clone()

> **clone**(): `IncrementedBalances`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`IncrementedBalances`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `IncrementedBalances`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:684](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L684)

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

`IncrementedBalances`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:680](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L680)

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

> **toProto**(): `IncrementedBalances`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:700](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L700)

#### Returns

`IncrementedBalances`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `IncrementedBalances`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:704](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L704)

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

`IncrementedBalances`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `IncrementedBalances`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:712](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L712)

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

`IncrementedBalances`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `IncrementedBalances`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:720](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L720)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`IncrementedBalances`

##### convertFunction

(`item`) => `U`

#### Returns

`IncrementedBalances`\<`U`\>
