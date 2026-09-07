---
description: "VotingChallenge defines a rule for approval in the form of a voting/multi-sig challenge. Requires a weighted quorum threshold to be met through votes from…"
---

# Class: VotingChallenge\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1399](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1399)

VotingChallenge defines a rule for approval in the form of a voting/multi-sig challenge.
Requires a weighted quorum threshold to be met through votes from specified voters.
All challenges must be met with valid solutions for the transfer to be approved.

IMPORTANT: Votes are stored separately and can be updated. The threshold is calculated as a percentage
of total possible weight (all voters), not just voted weight. If you update the proposal ID, then the
vote tracker will reset and start a new tally. We recommend using a unique proposal ID for each challenge
to prevent overlap and unexpected behavior.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`VotingChallenge`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iVotingChallenge`](/sdk/reference/interfaces/i-voting-challenge)\<`T`\>

## Constructors

### Constructor

> **new VotingChallenge**\<`T`\>(`votingChallenge`): `VotingChallenge`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1408](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1408)

#### Parameters

##### votingChallenge

[`iVotingChallenge`](/sdk/reference/interfaces/i-voting-challenge)\<`T`\>

#### Returns

`VotingChallenge`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1404](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1404)

Arbitrary custom data associated with this voting challenge.

#### Implementation of

[`iVotingChallenge`](/sdk/reference/interfaces/i-voting-challenge).[`customData`](/sdk/reference/interfaces/i-voting-challenge#customdata)

***

### delayAfterQuorum?

> `optional` **delayAfterQuorum?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1406](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1406)

Mandatory delay in milliseconds after quorum is reached before the transfer can execute.

#### Implementation of

[`iVotingChallenge`](/sdk/reference/interfaces/i-voting-challenge).[`delayAfterQuorum`](/sdk/reference/interfaces/i-voting-challenge#delayafterquorum)

***

### proposalId

> **proposalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1400](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1400)

The ID of this voting challenge for tracking votes (scoped like challengeTrackerId).
Format: collectionId-approverAddress-approvalLevel-approvalId-challengeId

#### Implementation of

[`iVotingChallenge`](/sdk/reference/interfaces/i-voting-challenge).[`proposalId`](/sdk/reference/interfaces/i-voting-challenge#proposalid)

***

### quorumThreshold

> **quorumThreshold**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1401](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1401)

The quorum threshold as a percentage (0-100) of total possible weight that must vote "yes".
Example: 50 means 50% of total voter weight must vote yes for approval.

#### Implementation of

[`iVotingChallenge`](/sdk/reference/interfaces/i-voting-challenge).[`quorumThreshold`](/sdk/reference/interfaces/i-voting-challenge#quorumthreshold)

***

### resetAfterExecution?

> `optional` **resetAfterExecution?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1405](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1405)

If true, all votes for this challenge are cleared after a successful transfer execution.

#### Implementation of

[`iVotingChallenge`](/sdk/reference/interfaces/i-voting-challenge).[`resetAfterExecution`](/sdk/reference/interfaces/i-voting-challenge#resetafterexecution)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1403](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1403)

The URI associated with this voting challenge.

#### Implementation of

[`iVotingChallenge`](/sdk/reference/interfaces/i-voting-challenge).[`uri`](/sdk/reference/interfaces/i-voting-challenge#uri)

***

### voters

> **voters**: [`Voter`](/sdk/reference/classes/voter)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1402](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1402)

List of voters with their weights. Each voter can cast a weighted vote.

#### Implementation of

[`iVotingChallenge`](/sdk/reference/interfaces/i-voting-challenge).[`voters`](/sdk/reference/interfaces/i-voting-challenge#voters)

## Methods

### clone()

> **clone**(): `VotingChallenge`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`VotingChallenge`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `VotingChallenge`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1423](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1423)

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

`VotingChallenge`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1419](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1419)

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

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `VotingChallenge`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1427](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1427)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`VotingChallenge`

##### convertFunction

(`item`) => `U`

#### Returns

`VotingChallenge`\<`U`\>
