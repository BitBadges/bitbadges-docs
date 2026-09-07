---
description: "EVM query challenge with optional resolved metadata (WithDetails pattern). Used in approval criteria and collection invariants when returned from the API."
---

# Class: EVMQueryChallengeWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1544](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1544)

EVM query challenge with optional resolved metadata (WithDetails pattern).
Used in approval criteria and collection invariants when returned from the API.

## Extends

- [`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iEVMQueryChallengeWithDetails`](/sdk/reference/interfaces/i-evm-query-challenge-with-details)\<`T`\>

## Constructors

### Constructor

> **new EVMQueryChallengeWithDetails**\<`T`\>(`evmQueryChallenge`): `EVMQueryChallengeWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1550](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1550)

#### Parameters

##### evmQueryChallenge

[`iEVMQueryChallengeWithDetails`](/sdk/reference/interfaces/i-evm-query-challenge-with-details)\<`T`\>

#### Returns

`EVMQueryChallengeWithDetails`\<`T`\>

#### Overrides

[`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge).[`constructor`](/sdk/reference/classes/evm-query-challenge#constructor)

## Properties

### calldata

> **calldata**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1487](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1487)

ABI-encoded function selector + arguments (hex string).
Example: "70a08231000000000000000000000000{address}" for balanceOf(address)
Placeholders: $initiator, $sender, $recipient, $collectionId, $recipients

#### Implementation of

[`iEVMQueryChallengeWithDetails`](/sdk/reference/interfaces/i-evm-query-challenge-with-details).[`calldata`](/sdk/reference/interfaces/i-evm-query-challenge-with-details#calldata)

#### Inherited from

[`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge).[`calldata`](/sdk/reference/classes/evm-query-challenge#calldata)

***

### comparisonOperator?

> `optional` **comparisonOperator?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1489](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1489)

Comparison operator: "eq" (equals), "ne" (not equals), "gt" (greater than), "gte", "lt", "lte"
Only "eq" and "ne" work for non-numeric types. Default is "eq".

#### Implementation of

[`iEVMQueryChallengeWithDetails`](/sdk/reference/interfaces/i-evm-query-challenge-with-details).[`comparisonOperator`](/sdk/reference/interfaces/i-evm-query-challenge-with-details#comparisonoperator)

#### Inherited from

[`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge).[`comparisonOperator`](/sdk/reference/classes/evm-query-challenge#comparisonoperator)

***

### contractAddress

> **contractAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1486](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1486)

The EVM contract address to query (0x format or bb1 format)

#### Implementation of

[`iEVMQueryChallengeWithDetails`](/sdk/reference/interfaces/i-evm-query-challenge-with-details).[`contractAddress`](/sdk/reference/interfaces/i-evm-query-challenge-with-details#contractaddress)

#### Inherited from

[`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge).[`contractAddress`](/sdk/reference/classes/evm-query-challenge#contractaddress)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1492](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1492)

Arbitrary custom data

#### Implementation of

[`iEVMQueryChallengeWithDetails`](/sdk/reference/interfaces/i-evm-query-challenge-with-details).[`customData`](/sdk/reference/interfaces/i-evm-query-challenge-with-details#customdata)

#### Inherited from

[`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge).[`customData`](/sdk/reference/classes/evm-query-challenge#customdata)

***

### expectedResult?

> `optional` **expectedResult?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1488](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1488)

Expected return value (hex string). If empty, any non-error result passes.
For boolean checks, use "0000...0001" for true.

#### Implementation of

[`iEVMQueryChallengeWithDetails`](/sdk/reference/interfaces/i-evm-query-challenge-with-details).[`expectedResult`](/sdk/reference/interfaces/i-evm-query-challenge-with-details#expectedresult)

#### Inherited from

[`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge).[`expectedResult`](/sdk/reference/classes/evm-query-challenge#expectedresult)

***

### gasLimit

> **gasLimit**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1490](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1490)

Gas limit for the query (default 100000, max 500000)

#### Implementation of

[`iEVMQueryChallengeWithDetails`](/sdk/reference/interfaces/i-evm-query-challenge-with-details).[`gasLimit`](/sdk/reference/interfaces/i-evm-query-challenge-with-details#gaslimit)

#### Inherited from

[`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge).[`gasLimit`](/sdk/reference/classes/evm-query-challenge#gaslimit)

***

### metadata?

> `optional` **metadata?**: [`iEVMQueryChallengeMetadata`](/sdk/reference/interfaces/i-evm-query-challenge-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1548](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1548)

Resolved metadata from the challenge URI, when populated by the indexer/API

#### Implementation of

[`iEVMQueryChallengeWithDetails`](/sdk/reference/interfaces/i-evm-query-challenge-with-details).[`metadata`](/sdk/reference/interfaces/i-evm-query-challenge-with-details#metadata)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1491](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1491)

The URI associated with this challenge (metadata)

#### Implementation of

[`iEVMQueryChallengeWithDetails`](/sdk/reference/interfaces/i-evm-query-challenge-with-details).[`uri`](/sdk/reference/interfaces/i-evm-query-challenge-with-details#uri)

#### Inherited from

[`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge).[`uri`](/sdk/reference/classes/evm-query-challenge#uri)

## Methods

### clone()

> **clone**(): `EVMQueryChallengeWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1559](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1559)

Deep copies the object and returns a new instance.

#### Returns

`EVMQueryChallengeWithDetails`\<`T`\>

#### Overrides

[`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge).[`clone`](/sdk/reference/classes/evm-query-challenge#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `EVMQueryChallengeWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1555](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1555)

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

`EVMQueryChallengeWithDetails`\<`U`\>

#### Overrides

[`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge).[`convert`](/sdk/reference/classes/evm-query-challenge#convert)

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

[`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge).[`equals`](/sdk/reference/classes/evm-query-challenge#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1505](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1505)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge).[`getNumberFieldNames`](/sdk/reference/classes/evm-query-challenge#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge).[`hasNumberFields`](/sdk/reference/classes/evm-query-challenge#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge).[`toJson`](/sdk/reference/classes/evm-query-challenge#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge).[`toJsonString`](/sdk/reference/classes/evm-query-challenge#tojsonstring)

***

### toProto()

> **toProto**(): `EVMQueryChallenge`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1525](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1525)

#### Returns

`EVMQueryChallenge`

#### Inherited from

[`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge).[`toProto`](/sdk/reference/classes/evm-query-challenge#toproto)

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): [`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge)\<`U`\>

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

[`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge)\<`U`\>

#### Inherited from

[`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge).[`fromProto`](/sdk/reference/classes/evm-query-challenge#fromproto)
