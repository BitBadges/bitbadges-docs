---
description: "EVMQueryChallenge defines a rule for approval via read-only EVM contract query."
---

# Class: EVMQueryChallenge\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1485](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1485)

EVMQueryChallenge defines a rule for approval via read-only EVM contract query.

The challenge executes a staticcall to the specified contract with the given calldata.
The result is compared against the expected result (if provided) or checked for non-zero return.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`EVMQueryChallenge`\<`T`\>\>

## Extended by

- [`EVMQueryChallengeWithDetails`](/sdk/reference/classes/evm-query-challenge-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge)\<`T`\>

## Constructors

### Constructor

> **new EVMQueryChallenge**\<`T`\>(`evmQueryChallenge`): `EVMQueryChallenge`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1494](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1494)

#### Parameters

##### evmQueryChallenge

[`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge)\<`T`\>

#### Returns

`EVMQueryChallenge`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### calldata

> **calldata**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1487](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1487)

ABI-encoded function selector + arguments (hex string).
Example: "70a08231000000000000000000000000{address}" for balanceOf(address)
Placeholders: $initiator, $sender, $recipient, $collectionId, $recipients

#### Implementation of

[`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge).[`calldata`](/sdk/reference/interfaces/i-evm-query-challenge#calldata)

***

### comparisonOperator?

> `optional` **comparisonOperator?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1489](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1489)

Comparison operator: "eq" (equals), "ne" (not equals), "gt" (greater than), "gte", "lt", "lte"
Only "eq" and "ne" work for non-numeric types. Default is "eq".

#### Implementation of

[`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge).[`comparisonOperator`](/sdk/reference/interfaces/i-evm-query-challenge#comparisonoperator)

***

### contractAddress

> **contractAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1486](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1486)

The EVM contract address to query (0x format or bb1 format)

#### Implementation of

[`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge).[`contractAddress`](/sdk/reference/interfaces/i-evm-query-challenge#contractaddress)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1492](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1492)

Arbitrary custom data

#### Implementation of

[`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge).[`customData`](/sdk/reference/interfaces/i-evm-query-challenge#customdata)

***

### expectedResult?

> `optional` **expectedResult?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1488](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1488)

Expected return value (hex string). If empty, any non-error result passes.
For boolean checks, use "0000...0001" for true.

#### Implementation of

[`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge).[`expectedResult`](/sdk/reference/interfaces/i-evm-query-challenge#expectedresult)

***

### gasLimit

> **gasLimit**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1490](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1490)

Gas limit for the query (default 100000, max 500000)

#### Implementation of

[`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge).[`gasLimit`](/sdk/reference/interfaces/i-evm-query-challenge#gaslimit)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1491](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1491)

The URI associated with this challenge (metadata)

#### Implementation of

[`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge).[`uri`](/sdk/reference/interfaces/i-evm-query-challenge#uri)

## Methods

### clone()

> **clone**(): `EVMQueryChallenge`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`EVMQueryChallenge`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `EVMQueryChallenge`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1509](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1509)

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

`EVMQueryChallenge`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1505](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1505)

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

> **toProto**(): `EVMQueryChallenge`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1525](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1525)

#### Returns

`EVMQueryChallenge`

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `EVMQueryChallenge`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1513](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1513)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`EVMQueryChallenge`

##### convertFunction

(`item`) => `U`

#### Returns

`EVMQueryChallenge`\<`U`\>
