---
description: "T extends NumberType"
---

# Class: BatchTokenDetailsArray\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/batch-utils.ts:90](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/batch-utils.ts#L90)

## Extends

- `BaseTypedArray`\<`BatchTokenDetailsArray`\<`T`\>, [`BatchTokenDetails`](/sdk/reference/classes/batch-token-details)\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Indexable

> \[`n`: `number`\]: [`BatchTokenDetails`](/sdk/reference/classes/batch-token-details)\<`T`\>

## Constructors

### Constructor

> **new BatchTokenDetailsArray**\<`T`\>(`arrayLength`): `BatchTokenDetailsArray`\<`T`\>

Defined in: gauntlet/.worktrees/bitbadges-docs/feat-docs-rewrite/site/node\_modules/typescript/lib/lib.es5.d.ts:1513

#### Parameters

##### arrayLength

`number`

#### Returns

`BatchTokenDetailsArray`\<`T`\>

#### Inherited from

`BaseTypedArray<BatchTokenDetailsArray<T>, BatchTokenDetails<T>>.constructor`

### Constructor

> **new BatchTokenDetailsArray**\<`T`\>(...`items`): `BatchTokenDetailsArray`\<`T`\>

Defined in: gauntlet/.worktrees/bitbadges-docs/feat-docs-rewrite/site/node\_modules/typescript/lib/lib.es5.d.ts:1514

#### Parameters

##### items

...[`BatchTokenDetails`](/sdk/reference/classes/batch-token-details)\<`T`\>[]

#### Returns

`BatchTokenDetailsArray`\<`T`\>

#### Inherited from

`BaseTypedArray<BatchTokenDetailsArray<T>, BatchTokenDetails<T>>.constructor`

## Methods

### add()

> **add**(`other`): `void`

Defined in: [packages/bitbadgesjs-sdk/src/core/batch-utils.ts:131](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/batch-utils.ts#L131)

Adds token details to the batch details array. If the collectionId already exists, it will merge the tokenIds.

#### Parameters

##### other

`BatchTokenDetailsArray`\<`T`\> \| [`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<`T`\> \| [`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<`T`\>[]

#### Returns

`void`

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `BatchTokenDetailsArray`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/batch-utils.ts:124](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/batch-utils.ts#L124)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`BatchTokenDetailsArray`\<`U`\>

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

### getPage()

> **getPage**(`_pageNumber`, `_pageSize`, `sortBy?`): `BatchTokenDetailsArray`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/batch-utils.ts:199](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/batch-utils.ts#L199)

Get specific tokens for the batch details. Useful for displaying tokens on a page.

Assums that tokenIds are sorted, merged, and non-overlapping.

#### Parameters

##### \_pageNumber

`number`

##### \_pageSize

`number`

##### sortBy?

`"newest"` \| `"oldest"`

#### Returns

`BatchTokenDetailsArray`\<`T`\>

***

### isSubsetOf()

> **isSubsetOf**(`other`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/batch-utils.ts:179](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/batch-utils.ts#L179)

Checks if the token details completely overlap with another set of token details (i.e. all tokenIds are in the other set).

#### Parameters

##### other

`BatchTokenDetailsArray`\<`T`\> \| [`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<`T`\> \| [`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<`T`\>[]

#### Returns

`boolean`

***

### noneIn()

> **noneIn**(`other`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/batch-utils.ts:188](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/batch-utils.ts#L188)

Checks if the token details do not overlap with another set of token details (i.e. none of the token IDs are in the other set).

#### Parameters

##### other

`BatchTokenDetailsArray`\<`T`\> \| [`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<`T`\> \| [`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<`T`\>[]

#### Returns

`boolean`

***

### remove()

> **remove**(`other`): `void`

Defined in: [packages/bitbadgesjs-sdk/src/core/batch-utils.ts:158](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/batch-utils.ts#L158)

Removes token details from the batch details array. If the collectionId already exists, it will remove the tokenIds.

#### Parameters

##### other

`BatchTokenDetailsArray`\<`T`\> \| [`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<`T`\> \| [`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<`T`\>[]

#### Returns

`void`

***

### From()

> `static` **From**\<`T`\>(`arr`): `BatchTokenDetailsArray`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/batch-utils.ts:91](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/batch-utils.ts#L91)

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### arr

[`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<`T`\> \| [`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<`T`\>[] \| `BatchTokenDetailsArray`\<`T`\>

#### Returns

`BatchTokenDetailsArray`\<`T`\>
