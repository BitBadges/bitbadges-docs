---
description: "OutgoingApprovalCriteria represents the details of an outgoing approval."
---

# Class: OutgoingApprovalCriteria\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:303](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L303)

OutgoingApprovalCriteria represents the details of an outgoing approval.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`OutgoingApprovalCriteria`\<`T`\>\>

## Extended by

- [`OutgoingApprovalCriteriaWithDetails`](/sdk/reference/classes/outgoing-approval-criteria-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria)\<`T`\>

## Constructors

### Constructor

> **new OutgoingApprovalCriteria**\<`T`\>(`msg`): `OutgoingApprovalCriteria`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:326](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L326)

#### Parameters

##### msg

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria)\<`T`\>

#### Returns

`OutgoingApprovalCriteria`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### altTimeChecks?

> `optional` **altTimeChecks?**: [`AltTimeChecks`](/sdk/reference/classes/alt-time-checks)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:321](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L321)

Alternative time-based checks for approval denial (offline hours/days).

#### Implementation of

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`altTimeChecks`](/sdk/reference/interfaces/i-outgoing-approval-criteria#alttimechecks)

***

### approvalAmounts?

> `optional` **approvalAmounts?**: [`ApprovalAmounts`](/sdk/reference/classes/approval-amounts)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:310](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L310)

The maximum approved amounts for this approval.

#### Implementation of

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`approvalAmounts`](/sdk/reference/interfaces/i-outgoing-approval-criteria#approvalamounts)

***

### autoDeletionOptions?

> `optional` **autoDeletionOptions?**: [`AutoDeletionOptions`](/sdk/reference/classes/auto-deletion-options)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:312](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L312)

Whether the approval should be deleted after one use.

#### Implementation of

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`autoDeletionOptions`](/sdk/reference/interfaces/i-outgoing-approval-criteria#autodeletionoptions)

***

### coinTransfers?

> `optional` **coinTransfers?**: [`CoinTransfer`](/sdk/reference/classes/coin-transfer)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:316](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L316)

The BADGE or sdk.coin transfers to be executed upon every approval.

#### Implementation of

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`coinTransfers`](/sdk/reference/interfaces/i-outgoing-approval-criteria#cointransfers)

***

### dynamicStoreChallenges?

> `optional` **dynamicStoreChallenges?**: [`DynamicStoreChallenge`](/sdk/reference/classes/dynamic-store-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:317](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L317)

The list of dynamic store challenges that the initiator must pass for approval.

#### Implementation of

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`dynamicStoreChallenges`](/sdk/reference/interfaces/i-outgoing-approval-criteria#dynamicstorechallenges)

***

### ethSignatureChallenges?

> `optional` **ethSignatureChallenges?**: [`ETHSignatureChallenge`](/sdk/reference/classes/eth-signature-challenge)[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:318](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L318)

The list of ETH signature challenges that the initiator must pass for approval.

#### Implementation of

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`ethSignatureChallenges`](/sdk/reference/interfaces/i-outgoing-approval-criteria#ethsignaturechallenges)

***

### evmQueryChallenges?

> `optional` **evmQueryChallenges?**: [`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:324](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L324)

EVM query challenges that must pass for approval. Read-only contract queries that verify external EVM state.

#### Implementation of

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`evmQueryChallenges`](/sdk/reference/interfaces/i-outgoing-approval-criteria#evmquerychallenges)

***

### initiatorChecks?

> `optional` **initiatorChecks?**: [`AddressChecks`](/sdk/reference/classes/address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:320](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L320)

Address checks for initiator

#### Implementation of

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`initiatorChecks`](/sdk/reference/interfaces/i-outgoing-approval-criteria#initiatorchecks)

***

### maxNumTransfers?

> `optional` **maxNumTransfers?**: [`MaxNumTransfers`](/sdk/reference/classes/max-num-transfers)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:311](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L311)

The max num transfers for this approval.

#### Implementation of

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`maxNumTransfers`](/sdk/reference/interfaces/i-outgoing-approval-criteria#maxnumtransfers)

***

### merkleChallenges?

> `optional` **merkleChallenges?**: [`MerkleChallenge`](/sdk/reference/classes/merkle-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:307](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L307)

The list of merkle challenges that need valid proofs to be approved.

#### Implementation of

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`merkleChallenges`](/sdk/reference/interfaces/i-outgoing-approval-criteria#merklechallenges)

***

### mustOwnTokens?

> `optional` **mustOwnTokens?**: [`MustOwnTokens`](/sdk/reference/classes/must-own-tokens)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:308](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L308)

The list of must own tokens that need valid proofs to be approved.

#### Implementation of

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`mustOwnTokens`](/sdk/reference/interfaces/i-outgoing-approval-criteria#mustowntokens)

***

### mustPrioritize?

> `optional` **mustPrioritize?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:322](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L322)

If true, this approval must be explicitly prioritized in PrioritizedApprovals to be used.

#### Implementation of

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`mustPrioritize`](/sdk/reference/interfaces/i-outgoing-approval-criteria#mustprioritize)

***

### predeterminedBalances?

> `optional` **predeterminedBalances?**: [`PredeterminedBalances`](/sdk/reference/classes/predetermined-balances)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:309](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L309)

The predetermined balances for each transfer. These allow approvals to use predetermined balance amounts rather than an incrementing tally system.

#### Implementation of

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`predeterminedBalances`](/sdk/reference/interfaces/i-outgoing-approval-criteria#predeterminedbalances)

***

### recipientChecks?

> `optional` **recipientChecks?**: [`AddressChecks`](/sdk/reference/classes/address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:319](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L319)

Address checks for recipient

#### Implementation of

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`recipientChecks`](/sdk/reference/interfaces/i-outgoing-approval-criteria#recipientchecks)

***

### requireToDoesNotEqualInitiatedBy?

> `optional` **requireToDoesNotEqualInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:315](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L315)

Whether the to address must not equal the initiatedBy  address.

#### Implementation of

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`requireToDoesNotEqualInitiatedBy`](/sdk/reference/interfaces/i-outgoing-approval-criteria#requiretodoesnotequalinitiatedby)

***

### requireToEqualsInitiatedBy?

> `optional` **requireToEqualsInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:314](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L314)

Whether the to address must equal the initiatedBy address.

#### Implementation of

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`requireToEqualsInitiatedBy`](/sdk/reference/interfaces/i-outgoing-approval-criteria#requiretoequalsinitiatedby)

***

### votingChallenges?

> `optional` **votingChallenges?**: [`VotingChallenge`](/sdk/reference/classes/voting-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:323](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L323)

The list of voting challenges that must be satisfied for approval.

#### Implementation of

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`votingChallenges`](/sdk/reference/interfaces/i-outgoing-approval-criteria#votingchallenges)

## Methods

### castToCollectionApprovalCriteria()

> **castToCollectionApprovalCriteria**(): [`ApprovalCriteria`](/sdk/reference/classes/approval-criteria)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:420](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L420)

#### Returns

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria)\<`T`\>

***

### clone()

> **clone**(): `OutgoingApprovalCriteria`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`OutgoingApprovalCriteria`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `OutgoingApprovalCriteria`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:347](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L347)

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

`OutgoingApprovalCriteria`\<`U`\>

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

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): `OutgoingApprovalCriteria`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:447](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L447)

#### Parameters

##### prefix

`string`

#### Returns

`OutgoingApprovalCriteria`\<`T`\>

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

> **toProto**(): `OutgoingApprovalCriteria`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:369](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L369)

#### Returns

`OutgoingApprovalCriteria`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `OutgoingApprovalCriteria`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:377](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L377)

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

`OutgoingApprovalCriteria`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `OutgoingApprovalCriteria`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:385](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L385)

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

`OutgoingApprovalCriteria`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `OutgoingApprovalCriteria`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:393](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L393)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`OutgoingApprovalCriteria`

##### convertFunction

(`item`) => `U`

#### Returns

`OutgoingApprovalCriteria`\<`U`\>
