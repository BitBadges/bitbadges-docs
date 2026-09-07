---
description: "EVM query challenge with optional resolved metadata (WithDetails pattern). Used in approval criteria and collection invariants when returned from the API."
---

# Interface: iEVMQueryChallengeWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:869](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L869)

EVM query challenge with optional resolved metadata (WithDetails pattern).
Used in approval criteria and collection invariants when returned from the API.

## Extends

- [`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### calldata

> **calldata**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:818](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L818)

ABI-encoded function selector + arguments (hex string).
Example: "70a08231000000000000000000000000{address}" for balanceOf(address)
Placeholders: $initiator, $sender, $recipient, $collectionId, $recipients

#### Inherited from

[`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge).[`calldata`](/sdk/reference/interfaces/i-evm-query-challenge#calldata)

***

### comparisonOperator?

> `optional` **comparisonOperator?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:830](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L830)

Comparison operator: "eq" (equals), "ne" (not equals), "gt" (greater than), "gte", "lt", "lte"
Only "eq" and "ne" work for non-numeric types. Default is "eq".

#### Inherited from

[`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge).[`comparisonOperator`](/sdk/reference/interfaces/i-evm-query-challenge#comparisonoperator)

***

### contractAddress

> **contractAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:811](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L811)

The EVM contract address to query (0x format or bb1 format)

#### Inherited from

[`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge).[`contractAddress`](/sdk/reference/interfaces/i-evm-query-challenge#contractaddress)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:845](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L845)

Arbitrary custom data

#### Inherited from

[`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge).[`customData`](/sdk/reference/interfaces/i-evm-query-challenge#customdata)

***

### expectedResult?

> `optional` **expectedResult?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:824](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L824)

Expected return value (hex string). If empty, any non-error result passes.
For boolean checks, use "0000...0001" for true.

#### Inherited from

[`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge).[`expectedResult`](/sdk/reference/interfaces/i-evm-query-challenge#expectedresult)

***

### gasLimit

> **gasLimit**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:835](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L835)

Gas limit for the query (default 100000, max 500000)

#### Inherited from

[`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge).[`gasLimit`](/sdk/reference/interfaces/i-evm-query-challenge#gaslimit)

***

### metadata?

> `optional` **metadata?**: [`iEVMQueryChallengeMetadata`](/sdk/reference/interfaces/i-evm-query-challenge-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:871](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L871)

Resolved metadata from the challenge URI, when populated by the indexer/API

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:840](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L840)

The URI associated with this challenge (metadata)

#### Inherited from

[`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge).[`uri`](/sdk/reference/interfaces/i-evm-query-challenge#uri)
