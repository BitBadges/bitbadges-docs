---
description: "T extends NumberType"
---

# Class: OutgoingApprovalCriteriaWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2208](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2208)

## Extends

- [`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details)\<`T`\>

## Constructors

### Constructor

> **new OutgoingApprovalCriteriaWithDetails**\<`T`\>(`data`): `OutgoingApprovalCriteriaWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2215](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2215)

#### Parameters

##### data

[`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details)\<`T`\>

#### Returns

`OutgoingApprovalCriteriaWithDetails`\<`T`\>

#### Overrides

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`constructor`](/sdk/reference/classes/outgoing-approval-criteria#constructor)

## Properties

### altTimeChecks?

> `optional` **altTimeChecks?**: [`AltTimeChecks`](/sdk/reference/classes/alt-time-checks)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:321](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L321)

Alternative time-based checks for approval denial (offline hours/days).

#### Implementation of

[`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details).[`altTimeChecks`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details#alttimechecks)

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`altTimeChecks`](/sdk/reference/classes/outgoing-approval-criteria#alttimechecks)

***

### approvalAmounts?

> `optional` **approvalAmounts?**: [`ApprovalAmounts`](/sdk/reference/classes/approval-amounts)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:310](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L310)

The maximum approved amounts for this approval.

#### Implementation of

[`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details).[`approvalAmounts`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details#approvalamounts)

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`approvalAmounts`](/sdk/reference/classes/outgoing-approval-criteria#approvalamounts)

***

### autoDeletionOptions?

> `optional` **autoDeletionOptions?**: [`AutoDeletionOptions`](/sdk/reference/classes/auto-deletion-options)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:312](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L312)

Whether the approval should be deleted after one use.

#### Implementation of

[`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details).[`autoDeletionOptions`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details#autodeletionoptions)

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`autoDeletionOptions`](/sdk/reference/classes/outgoing-approval-criteria#autodeletionoptions)

***

### coinTransfers?

> `optional` **coinTransfers?**: [`CoinTransfer`](/sdk/reference/classes/coin-transfer)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:316](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L316)

The BADGE or sdk.coin transfers to be executed upon every approval.

#### Implementation of

[`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details).[`coinTransfers`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details#cointransfers)

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`coinTransfers`](/sdk/reference/classes/outgoing-approval-criteria#cointransfers)

***

### dynamicStoreChallenges?

> `optional` **dynamicStoreChallenges?**: [`DynamicStoreChallenge`](/sdk/reference/classes/dynamic-store-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:317](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L317)

The list of dynamic store challenges that the initiator must pass for approval.

#### Implementation of

[`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details).[`dynamicStoreChallenges`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details#dynamicstorechallenges)

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`dynamicStoreChallenges`](/sdk/reference/classes/outgoing-approval-criteria#dynamicstorechallenges)

***

### ethSignatureChallenges?

> `optional` **ethSignatureChallenges?**: [`ETHSignatureChallenge`](/sdk/reference/classes/eth-signature-challenge)[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:318](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L318)

The list of ETH signature challenges that the initiator must pass for approval.

#### Implementation of

[`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details).[`ethSignatureChallenges`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details#ethsignaturechallenges)

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`ethSignatureChallenges`](/sdk/reference/classes/outgoing-approval-criteria#ethsignaturechallenges)

***

### evmQueryChallenges?

> `optional` **evmQueryChallenges?**: [`EVMQueryChallengeWithDetails`](/sdk/reference/classes/evm-query-challenge-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2213](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2213)

EVM query challenges that must pass for approval. Read-only contract queries that verify external EVM state.

#### Implementation of

[`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details).[`evmQueryChallenges`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details#evmquerychallenges)

#### Overrides

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`evmQueryChallenges`](/sdk/reference/classes/outgoing-approval-criteria#evmquerychallenges)

***

### initiatorChecks?

> `optional` **initiatorChecks?**: [`AddressChecks`](/sdk/reference/classes/address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:320](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L320)

Address checks for initiator

#### Implementation of

[`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details).[`initiatorChecks`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details#initiatorchecks)

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`initiatorChecks`](/sdk/reference/classes/outgoing-approval-criteria#initiatorchecks)

***

### maxNumTransfers?

> `optional` **maxNumTransfers?**: [`MaxNumTransfers`](/sdk/reference/classes/max-num-transfers)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:311](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L311)

The max num transfers for this approval.

#### Implementation of

[`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details).[`maxNumTransfers`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details#maxnumtransfers)

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`maxNumTransfers`](/sdk/reference/classes/outgoing-approval-criteria#maxnumtransfers)

***

### merkleChallenges?

> `optional` **merkleChallenges?**: [`MerkleChallengeWithDetails`](/sdk/reference/classes/merkle-challenge-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2212](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2212)

The list of merkle challenges that need valid proofs to be approved.

#### Implementation of

[`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details).[`merkleChallenges`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details#merklechallenges)

#### Overrides

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`merkleChallenges`](/sdk/reference/classes/outgoing-approval-criteria#merklechallenges)

***

### mustOwnTokens?

> `optional` **mustOwnTokens?**: [`MustOwnTokens`](/sdk/reference/classes/must-own-tokens)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:308](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L308)

The list of must own tokens that need valid proofs to be approved.

#### Implementation of

[`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details).[`mustOwnTokens`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details#mustowntokens)

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`mustOwnTokens`](/sdk/reference/classes/outgoing-approval-criteria#mustowntokens)

***

### mustPrioritize?

> `optional` **mustPrioritize?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:322](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L322)

If true, this approval must be explicitly prioritized in PrioritizedApprovals to be used.

#### Implementation of

[`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details).[`mustPrioritize`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details#mustprioritize)

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`mustPrioritize`](/sdk/reference/classes/outgoing-approval-criteria#mustprioritize)

***

### predeterminedBalances?

> `optional` **predeterminedBalances?**: [`PredeterminedBalances`](/sdk/reference/classes/predetermined-balances)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:309](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L309)

The predetermined balances for each transfer. These allow approvals to use predetermined balance amounts rather than an incrementing tally system.

#### Implementation of

[`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details).[`predeterminedBalances`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details#predeterminedbalances)

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`predeterminedBalances`](/sdk/reference/classes/outgoing-approval-criteria#predeterminedbalances)

***

### recipientChecks?

> `optional` **recipientChecks?**: [`AddressChecks`](/sdk/reference/classes/address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:319](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L319)

Address checks for recipient

#### Implementation of

[`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details).[`recipientChecks`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details#recipientchecks)

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`recipientChecks`](/sdk/reference/classes/outgoing-approval-criteria#recipientchecks)

***

### requireToDoesNotEqualInitiatedBy?

> `optional` **requireToDoesNotEqualInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:315](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L315)

Whether the to address must not equal the initiatedBy  address.

#### Implementation of

[`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details).[`requireToDoesNotEqualInitiatedBy`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details#requiretodoesnotequalinitiatedby)

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`requireToDoesNotEqualInitiatedBy`](/sdk/reference/classes/outgoing-approval-criteria#requiretodoesnotequalinitiatedby)

***

### requireToEqualsInitiatedBy?

> `optional` **requireToEqualsInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:314](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L314)

Whether the to address must equal the initiatedBy address.

#### Implementation of

[`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details).[`requireToEqualsInitiatedBy`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details#requiretoequalsinitiatedby)

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`requireToEqualsInitiatedBy`](/sdk/reference/classes/outgoing-approval-criteria#requiretoequalsinitiatedby)

***

### votingChallenges?

> `optional` **votingChallenges?**: [`VotingChallenge`](/sdk/reference/classes/voting-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:323](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L323)

The list of voting challenges that must be satisfied for approval.

#### Implementation of

[`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details).[`votingChallenges`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details#votingchallenges)

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`votingChallenges`](/sdk/reference/classes/outgoing-approval-criteria#votingchallenges)

## Methods

### castToCollectionApprovalCriteria()

> **castToCollectionApprovalCriteria**(): [`ApprovalCriteriaWithDetails`](/sdk/reference/classes/approval-criteria-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2231](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2231)

#### Returns

[`ApprovalCriteriaWithDetails`](/sdk/reference/classes/approval-criteria-with-details)\<`T`\>

#### Overrides

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`castToCollectionApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria#casttocollectionapprovalcriteria)

***

### clone()

> **clone**(): `OutgoingApprovalCriteriaWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2227](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2227)

Deep copies the object and returns a new instance.

#### Returns

`OutgoingApprovalCriteriaWithDetails`\<`T`\>

#### Overrides

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`clone`](/sdk/reference/classes/outgoing-approval-criteria#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `OutgoingApprovalCriteriaWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2223](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2223)

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

`OutgoingApprovalCriteriaWithDetails`\<`U`\>

#### Overrides

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`convert`](/sdk/reference/classes/outgoing-approval-criteria#convert)

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

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`equals`](/sdk/reference/classes/outgoing-approval-criteria#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L157)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`getNumberFieldNames`](/sdk/reference/classes/outgoing-approval-criteria#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`hasNumberFields`](/sdk/reference/classes/outgoing-approval-criteria#hasnumberfields)

***

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): [`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:447](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L447)

#### Parameters

##### prefix

`string`

#### Returns

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria)\<`T`\>

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`toBech32Addresses`](/sdk/reference/classes/outgoing-approval-criteria#tobech32addresses)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`toJson`](/sdk/reference/classes/outgoing-approval-criteria#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`toJsonString`](/sdk/reference/classes/outgoing-approval-criteria#tojsonstring)

***

### toProto()

> **toProto**(): `OutgoingApprovalCriteria`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:369](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L369)

#### Returns

`OutgoingApprovalCriteria`

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`toProto`](/sdk/reference/classes/outgoing-approval-criteria#toproto)

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): [`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria)\<`U`\>

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

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria)\<`U`\>

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`fromJson`](/sdk/reference/classes/outgoing-approval-criteria#fromjson)

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): [`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria)\<`U`\>

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

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria)\<`U`\>

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`fromJsonString`](/sdk/reference/classes/outgoing-approval-criteria#fromjsonstring)

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): [`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria)\<`U`\>

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

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria)\<`U`\>

#### Inherited from

[`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria).[`fromProto`](/sdk/reference/classes/outgoing-approval-criteria#fromproto)
