---
description: "PredeterminedBalances represents the predetermined balances for an approval. This allows you to define an approval where Transfer A happens first, then…"
---

# Class: PredeterminedBalances\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:464](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L464)

PredeterminedBalances represents the predetermined balances for an approval.
This allows you to define an approval where Transfer A happens first, then Transfer B, then Transfer C, etc.
The order of the transfers is defined by the orderCalculationMethod. The order number 0 represents the first transfer, 1 represents the second transfer, etc.

IMPORTANT: if the balances of the transfer do not exactly match the predetermined balances, then the transfer will fail.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`PredeterminedBalances`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iPredeterminedBalances`](/sdk/reference/interfaces/i-predetermined-balances)\<`T`\>

## Constructors

### Constructor

> **new PredeterminedBalances**\<`T`\>(`msg`): `PredeterminedBalances`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:469](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L469)

#### Parameters

##### msg

[`iPredeterminedBalances`](/sdk/reference/interfaces/i-predetermined-balances)\<`T`\>

#### Returns

`PredeterminedBalances`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### incrementedBalances

> **incrementedBalances**: [`IncrementedBalances`](/sdk/reference/classes/incremented-balances)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:466](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L466)

Define a starting balance and increment the token IDs and owned times by a certain amount after each transfer. Cannot be used with manualBalances. Order number corresponds to number of times we increment.

#### Implementation of

[`iPredeterminedBalances`](/sdk/reference/interfaces/i-predetermined-balances).[`incrementedBalances`](/sdk/reference/interfaces/i-predetermined-balances#incrementedbalances)

***

### manualBalances

> **manualBalances**: [`ManualBalances`](/sdk/reference/classes/manual-balances)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:465](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L465)

Manually define the balances for each transfer. Cannot be used with incrementedBalances. Order number corresponds to the index of the balance in the array.

#### Implementation of

[`iPredeterminedBalances`](/sdk/reference/interfaces/i-predetermined-balances).[`manualBalances`](/sdk/reference/interfaces/i-predetermined-balances#manualbalances)

***

### orderCalculationMethod

> **orderCalculationMethod**: [`PredeterminedOrderCalculationMethod`](/sdk/reference/classes/predetermined-order-calculation-method)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:467](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L467)

The order calculation method.

#### Implementation of

[`iPredeterminedBalances`](/sdk/reference/interfaces/i-predetermined-balances).[`orderCalculationMethod`](/sdk/reference/interfaces/i-predetermined-balances#ordercalculationmethod)

## Methods

### clone()

> **clone**(): `PredeterminedBalances`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`PredeterminedBalances`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `PredeterminedBalances`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:476](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L476)

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

`PredeterminedBalances`\<`U`\>

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

> **toProto**(): `PredeterminedBalances`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:486](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L486)

#### Returns

`PredeterminedBalances`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `PredeterminedBalances`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:490](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L490)

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

`PredeterminedBalances`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `PredeterminedBalances`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:498](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L498)

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

`PredeterminedBalances`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `PredeterminedBalances`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:506](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L506)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`PredeterminedBalances`

##### convertFunction

(`item`) => `U`

#### Returns

`PredeterminedBalances`\<`U`\>
