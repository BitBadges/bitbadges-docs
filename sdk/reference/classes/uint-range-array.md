---
description: "T extends NumberType"
---

# Class: UintRangeArray\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:233](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L233)

## Extends

- `BaseTypedArray`\<`UintRangeArray`\<`T`\>, [`UintRange`](/sdk/reference/classes/uint-range)\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Indexable

> \[`n`: `number`\]: [`UintRange`](/sdk/reference/classes/uint-range)\<`T`\>

## Constructors

### Constructor

> **new UintRangeArray**\<`T`\>(`arrayLength`): `UintRangeArray`\<`T`\>

Defined in: gauntlet/.worktrees/bitbadges-docs/feat-docs-rewrite/site/node\_modules/typescript/lib/lib.es5.d.ts:1513

#### Parameters

##### arrayLength

`number`

#### Returns

`UintRangeArray`\<`T`\>

#### Inherited from

`BaseTypedArray<UintRangeArray<T>, UintRange<T>>.constructor`

### Constructor

> **new UintRangeArray**\<`T`\>(...`items`): `UintRangeArray`\<`T`\>

Defined in: gauntlet/.worktrees/bitbadges-docs/feat-docs-rewrite/site/node\_modules/typescript/lib/lib.es5.d.ts:1514

#### Parameters

##### items

...[`UintRange`](/sdk/reference/classes/uint-range)\<`T`\>[]

#### Returns

`UintRangeArray`\<`T`\>

#### Inherited from

`BaseTypedArray<UintRangeArray<T>, UintRange<T>>.constructor`

## Methods

### assertNoOverlaps()

> **assertNoOverlaps**(`overlappingRange`): `void`

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:514](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L514)

Asserts two UintRanges[] do not overlap at all with each other.
For example, if we have a list of permitted and forbidden times, we want to make sure that the forbidden times do not overlap with the permitted times.

#### Parameters

##### overlappingRange

[`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

#### Returns

`void`

***

### clone()

> **clone**(): `UintRangeArray`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:301](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L301)

#### Returns

`UintRangeArray`\<`T`\>

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `UintRangeArray`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:305](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L305)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`UintRangeArray`\<`U`\>

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

### getOverlapDetails()

> **getOverlapDetails**(`idsToRemove`): \[`UintRangeArray`\<`T`\>, `UintRangeArray`\<`T`\>, `UintRangeArray`\<`T`\>\]

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:415](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L415)

Gets the overlap details between two lists of UintRanges.
Returns a tuple of [remainingInThis, overlaps, remainingInOther].

#### Parameters

##### idsToRemove

`UintRangeArray`\<`T`\> \| [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\> \| [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

#### Returns

\[`UintRangeArray`\<`T`\>, `UintRangeArray`\<`T`\>, `UintRangeArray`\<`T`\>\]

***

### getOverlaps()

> **getOverlaps**(`idsToRemove`): `UintRangeArray`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:424](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L424)

Gets the overlap between the current range and another

#### Parameters

##### idsToRemove

`UintRangeArray`\<`T`\> \| [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\> \| [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

#### Returns

`UintRangeArray`\<`T`\>

***

### hasOverlaps()

> **hasOverlaps**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:323](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L323)

Checks if any of the array's elements overlap with each other.

#### Returns

`boolean`

#### Remarks

Overlap here is considered inclusive, so [1, 10] and [10, 20] would be considered overlapping. [1, 10] and [11, 20] would not be considered overlapping.

***

### invert()

> **invert**(`bounds`): `UintRangeArray`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:384](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L384)

Invert a list of UintRanges (i.e. get all values in some bounds not in current list) in-place.

#### Parameters

##### bounds

[`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>

#### Returns

`UintRangeArray`\<`T`\>

***

### isFull()

> **isFull**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:312](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L312)

Checks if the provided id ranges are full (i.e. they cover all possible IDs from 1 to max uint64).

#### Returns

`boolean`

***

### remove()

> **remove**(`idsToRemove`): `this`

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:455](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L455)

Remove a range from the current range in-place

#### Parameters

##### idsToRemove

`UintRangeArray`\<`T`\> \| [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\> \| [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

#### Returns

`this`

***

### search()

> **search**(`id`): \[`bigint`, `boolean`\]

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:467](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L467)

Search ID ranges for a specific ID. Return [idx, found], where idx is the index of the range that contains the ID, and found is true if the ID was found.

If you just want one or the other, use searchIndex() or searchIfExists().

#### Parameters

##### id

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

\[`bigint`, `boolean`\]

***

### searchIfExists()

> **searchIfExists**(`val`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:499](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L499)

Search ID ranges for a specific ID. Return true, if found.

#### Parameters

##### val

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`boolean`

***

### searchIndex()

> **searchIndex**(`val`): `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:506](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L506)

Search for the first index of an element that includes the provided value.

#### Parameters

##### val

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`bigint`

***

### size()

> **size**(): `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:292](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L292)

Gets the total number of IDs covered by a list of UintRanges.
for example, [{start: 1, end: 3}, {start: 5, end: 7}] would return 6.

#### Returns

`T`

***

### sortAndMerge()

> **sortAndMerge**(): `UintRangeArray`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:346](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L346)

Sorts and merges a list of UintRanges. If ranges overlap, they are merged.

#### Returns

`UintRangeArray`\<`T`\>

#### Example

```ts
[{start: 1, end: 3}, {start: 2, end: 4}] => [{start: 1, end: 4}]
```

#### Remarks

Does not return a new list. Modifies the list in place. To get a new list, use `clone().sortAndMerge()`.

***

### toInverted()

> **toInverted**(`bounds`): `UintRangeArray`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:407](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L407)

Wrapper for invert that returns a new list instead of modifying the current list.

#### Parameters

##### bounds

[`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>

#### Returns

`UintRangeArray`\<`T`\>

***

### From()

> `static` **From**\<`T`\>(`arr`): `UintRangeArray`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:241](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L241)

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### arr

[`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\> \| [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[] \| `UintRangeArray`\<`T`\> \| `null` \| `undefined`

#### Returns

`UintRangeArray`\<`T`\>

***

### FullRanges()

> `static` **FullRanges**(): `UintRangeArray`\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:237](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L237)

Returns a new UintRangeArray from 1 to 18446744073709551615 (max uint64).

#### Returns

`UintRangeArray`\<`bigint`\>
