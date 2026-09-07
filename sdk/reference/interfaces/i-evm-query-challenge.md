---
description: "EVMQueryChallenge defines a rule for approval via read-only EVM contract query."
---

# Interface: iEVMQueryChallenge\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:807](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L807)

EVMQueryChallenge defines a rule for approval via read-only EVM contract query.

The challenge executes a staticcall to the specified contract with the given calldata.
The result is compared against the expected result (if provided) or checked for non-zero return.

IMPORTANT: This is read-only and cannot modify state. The query is executed with a gas limit
to prevent DoS attacks. All results are deterministic since EVM state is consistent within a block.

## Extended by

- [`iEVMQueryChallengeWithDetails`](/sdk/reference/interfaces/i-evm-query-challenge-with-details)

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

***

### comparisonOperator?

> `optional` **comparisonOperator?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:830](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L830)

Comparison operator: "eq" (equals), "ne" (not equals), "gt" (greater than), "gte", "lt", "lte"
Only "eq" and "ne" work for non-numeric types. Default is "eq".

***

### contractAddress

> **contractAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:811](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L811)

The EVM contract address to query (0x format or bb1 format)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:845](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L845)

Arbitrary custom data

***

### expectedResult?

> `optional` **expectedResult?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:824](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L824)

Expected return value (hex string). If empty, any non-error result passes.
For boolean checks, use "0000...0001" for true.

***

### gasLimit

> **gasLimit**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:835](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L835)

Gas limit for the query (default 100000, max 500000)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:840](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L840)

The URI associated with this challenge (metadata)
