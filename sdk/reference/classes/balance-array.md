---
description: "T extends NumberType"
---

# Class: BalanceArray\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:875](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L875)

## Extends

- `BaseTypedArray`\<`BalanceArray`\<`T`\>, [`Balance`](/sdk/reference/classes/balance)\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- `BalanceFunctions`\<`T`\>

## Indexable

> \[`n`: `number`\]: [`Balance`](/sdk/reference/classes/balance)\<`T`\>

## Constructors

### Constructor

> **new BalanceArray**\<`T`\>(`arrayLength`): `BalanceArray`\<`T`\>

Defined in: gauntlet/.worktrees/bitbadges-docs/feat-docs-rewrite/site/node\_modules/typescript/lib/lib.es5.d.ts:1513

#### Parameters

##### arrayLength

`number`

#### Returns

`BalanceArray`\<`T`\>

#### Inherited from

`BaseTypedArray<BalanceArray<T>, Balance<T>>.constructor`

### Constructor

> **new BalanceArray**\<`T`\>(...`items`): `BalanceArray`\<`T`\>

Defined in: gauntlet/.worktrees/bitbadges-docs/feat-docs-rewrite/site/node\_modules/typescript/lib/lib.es5.d.ts:1514

#### Parameters

##### items

...[`Balance`](/sdk/reference/classes/balance)\<`T`\>[]

#### Returns

`BalanceArray`\<`T`\>

#### Inherited from

`BaseTypedArray<BalanceArray<T>, Balance<T>>.constructor`

## Methods

### addBalance()

> **addBalance**(`balanceToAdd`): `this`

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:993](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L993)

Adds the balanceToAdd to the existing balances. Returns a new BalanceArray.

#### Parameters

##### balanceToAdd

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>

#### Returns

`this`

#### Remarks

Can also be used via the corresponding method with same name on BalanceArray

#### Implementation of

`BalanceFunctions.addBalance`

***

### addBalances()

> **addBalances**(`balancesToAdd`): `this`

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:983](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L983)

Adds multiple balances to the existing balances. Returns a new BalanceArray.

#### Parameters

##### balancesToAdd

`BalanceArray`\<`T`\> \| [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

#### Returns

`this`

#### Remarks

Can also be used via the corresponding method with same name on BalanceArray

#### Implementation of

`BalanceFunctions.addBalances`

***

### applyIncrements()

> **applyIncrements**(`incrementTokenIdsBy`, `incrementOwnershipTimesBy`, `numIncrements`, `durationFromTimestamp`, `blockTime`): `BalanceArray`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:1030](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L1030)

Applys increments to balances. Returns a new BalanceArray with the incremented balances.

#### Parameters

##### incrementTokenIdsBy

`T`

##### incrementOwnershipTimesBy

`T`

##### numIncrements

`T`

##### durationFromTimestamp

`T`

##### blockTime

`T`

#### Returns

`BalanceArray`\<`T`\>

#### Remarks

Can also be used via the applyIncrements method on BalanceArray

#### Implementation of

`BalanceFunctions.applyIncrements`

***

### clone()

> **clone**(): `BalanceArray`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:913](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L913)

#### Returns

`BalanceArray`\<`T`\>

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `BalanceArray`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:909](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L909)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`BalanceArray`\<`U`\>

***

### equalBalances()

> **equalBalances**(`other`, `checkZeroBalances?`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:962](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L962)

Checks if two balances are equal. Flag to check if the balances with zero amounts should be checked as well.

#### Parameters

##### other

`BalanceArray`\<`T`\> \| [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

##### checkZeroBalances?

`boolean` = `false`

#### Returns

`boolean`

#### Remarks

Can also be used via the corresponding method with same name on BalanceArray

#### Implementation of

`BalanceFunctions.equalBalances`

***

### every()

> **every**(`predicate`, `thisArg?`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/typed-arrays.ts:108](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/typed-arrays.ts#L108)

Determines whether all the members of an array satisfy the specified test.

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

#### Returns

`boolean`

#### Inherited from

`BaseTypedArray.every`

***

### filterZeroBalances()

> **filterZeroBalances**(): `this`

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:941](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L941)

Filters out all balances with amount == 0. Returns a new BalanceArray.

#### Returns

`this`

#### Remarks

Can also be used via the corresponding method with same name on BalanceArray

#### Implementation of

`BalanceFunctions.filterZeroBalances`

***

### getAllTokenIds()

> **getAllTokenIds**(): [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:1047](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L1047)

Gets all token IDs from the balances (sorted and merged).

#### Returns

[`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

***

### getBalanceForIdAndTime()

> **getBalanceForIdAndTime**(`tokenId`, `ownedTime`): `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:920](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L920)

Find the balance amount for a specific token ID at a specific time within a set of balances. Returns x0 if not found.

#### Parameters

##### tokenId

`T`

The Token ID to search for.

##### ownedTime

`T`

The time to search for.

#### Returns

`T`

#### Remarks

Can also be used via the corresponding method with same name on BalanceArray

#### Implementation of

`BalanceFunctions.getBalanceForIdAndTime`

***

### getBalancesForId()

> **getBalancesForId**(`tokenId`): `BalanceArray`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:927](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L927)

Returns all matching balances for a specific token ID. Returns a new BalanceArray.

#### Parameters

##### tokenId

`T`

#### Returns

`BalanceArray`\<`T`\>

#### Remarks

Can also be used via the corresponding method with same name on BalanceArray

#### Implementation of

`BalanceFunctions.getBalancesForId`

***

### getBalancesForTime()

> **getBalancesForTime**(`ownedTime`): `BalanceArray`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:934](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L934)

Returns all matching balances for a specific time via a new BalanceArray.

#### Parameters

##### ownedTime

`T`

#### Returns

`BalanceArray`\<`T`\>

#### Remarks

Can also be used via the corresponding method with same name on BalanceArray

#### Implementation of

`BalanceFunctions.getBalancesForTime`

***

### sortBalancesByAmount()

> **sortBalancesByAmount**(): `BalanceArray`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:1020](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L1020)

Sorts balances by their amount property. Returns a new BalanceArray.

#### Returns

`BalanceArray`\<`T`\>

#### Remarks

Can also be used via the corresponding method with same name on BalanceArray

#### Implementation of

`BalanceFunctions.sortBalancesByAmount`

***

### subsetOf()

> **subsetOf**(`threshold`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:951](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L951)

Checks if the current balances are a subset of the threshold balances (i.e. doesn't exceed the threshold).

#### Parameters

##### threshold

`BalanceArray`\<`T`\> \| [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

#### Returns

`boolean`

#### Implementation of

`BalanceFunctions.subsetOf`

***

### subtractBalance()

> **subtractBalance**(`balanceToSubtract`, `allowUnderflow`): `BalanceArray`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:1013](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L1013)

Subtracts the balanceToRemove from the existing balances. Returns a new BalanceArray.

Throws an error if the balances underflow.

#### Parameters

##### balanceToSubtract

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>

##### allowUnderflow

`boolean`

#### Returns

`BalanceArray`\<`T`\>

#### Remarks

Can also be used via the corresponding method with same name on BalanceArray

#### Implementation of

`BalanceFunctions.subtractBalance`

***

### subtractBalances()

> **subtractBalances**(`balancesToSubtract`, `allowNegatives?`): `BalanceArray`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:1003](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L1003)

Subtracts multiple balances from the existing balances. Returns a new BalanceArray.

Throws an error if the balances underflow.

#### Parameters

##### balancesToSubtract

`BalanceArray`\<`T`\> \| [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

##### allowNegatives?

`boolean` = `false`

#### Returns

`BalanceArray`\<`T`\>

#### Remarks

Can also be used via the corresponding method with same name on BalanceArray

#### Implementation of

`BalanceFunctions.subtractBalances`

***

### updateBalances()

> **updateBalances**(`newBalance`): `this`

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:973](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L973)

Updates the balance for what it currently is to newAmount.

#### Parameters

##### newBalance

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>

#### Returns

`this`

#### Remarks

Returns a new BalanceArray. Does not modify the original.

Can also be used via the corresponding method with same name on BalanceArray

#### Implementation of

`BalanceFunctions.updateBalances`

***

### From()

> `static` **From**\<`T`\>(`arr`): `BalanceArray`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/balances.ts:876](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/balances.ts#L876)

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### arr

[`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\> \| [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[] \| `BalanceArray`\<`T`\>

#### Returns

`BalanceArray`\<`T`\>
