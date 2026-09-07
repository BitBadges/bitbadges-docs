---
description: "VoteProof represents a vote cast for a voting challenge."
---

# Class: VoteProof\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1445](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1445)

VoteProof represents a vote cast for a voting challenge.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`VoteProof`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iVoteProof`](/sdk/reference/interfaces/i-vote-proof)\<`T`\>

## Constructors

### Constructor

> **new VoteProof**\<`T`\>(`voteProof`): `VoteProof`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1451](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1451)

#### Parameters

##### voteProof

[`iVoteProof`](/sdk/reference/interfaces/i-vote-proof)\<`T`\>

#### Returns

`VoteProof`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### proposalId

> **proposalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1446](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1446)

The proposal ID this vote is for.

#### Implementation of

[`iVoteProof`](/sdk/reference/interfaces/i-vote-proof).[`proposalId`](/sdk/reference/interfaces/i-vote-proof#proposalid)

***

### votedAt?

> `optional` **votedAt?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1449](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1449)

Timestamp (unix ms) when this vote was cast. Set automatically by the chain.

#### Implementation of

[`iVoteProof`](/sdk/reference/interfaces/i-vote-proof).[`votedAt`](/sdk/reference/interfaces/i-vote-proof#votedat)

***

### voter

> **voter**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1447](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1447)

The address of the voter casting the vote.

#### Implementation of

[`iVoteProof`](/sdk/reference/interfaces/i-vote-proof).[`voter`](/sdk/reference/interfaces/i-vote-proof#voter)

***

### yesWeight

> **yesWeight**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1448](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1448)

The percentage weight (0-100) allocated to "yes" vote.
The remaining percentage (100 - yesWeight) is allocated to "no" vote.
Example: yesWeight=70 means 70% yes, 30% no.

#### Implementation of

[`iVoteProof`](/sdk/reference/interfaces/i-vote-proof).[`yesWeight`](/sdk/reference/interfaces/i-vote-proof#yesweight)

## Methods

### clone()

> **clone**(): `VoteProof`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`VoteProof`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `VoteProof`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1463](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1463)

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

`VoteProof`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1459](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1459)

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

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `VoteProof`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1467](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1467)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`VoteProof`

##### convertFunction

(`item`) => `U`

#### Returns

`VoteProof`\<`U`\>
