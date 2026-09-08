---
description: "T extends NumberType"
---

# Class: IncomingApprovalCriteriaWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2147](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2147)

## Extends

- [`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details)\<`T`\>

## Constructors

### Constructor

> **new IncomingApprovalCriteriaWithDetails**\<`T`\>(`data`): `IncomingApprovalCriteriaWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2154](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2154)

#### Parameters

##### data

[`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details)\<`T`\>

#### Returns

`IncomingApprovalCriteriaWithDetails`\<`T`\>

#### Overrides

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`constructor`](/sdk/reference/classes/incoming-approval-criteria#constructor)

## Properties

### altTimeChecks?

> `optional` **altTimeChecks?**: [`AltTimeChecks`](/sdk/reference/classes/alt-time-checks)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1159](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1159)

Alternative time-based checks for approval denial (offline hours/days).

#### Implementation of

[`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details).[`altTimeChecks`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details#alttimechecks)

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`altTimeChecks`](/sdk/reference/classes/incoming-approval-criteria#alttimechecks)

***

### approvalAmounts?

> `optional` **approvalAmounts?**: [`ApprovalAmounts`](/sdk/reference/classes/approval-amounts)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1149](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1149)

The maximum approved amounts for this approval.

#### Implementation of

[`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details).[`approvalAmounts`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details#approvalamounts)

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`approvalAmounts`](/sdk/reference/classes/incoming-approval-criteria#approvalamounts)

***

### autoDeletionOptions?

> `optional` **autoDeletionOptions?**: [`AutoDeletionOptions`](/sdk/reference/classes/auto-deletion-options)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1151)

Whether the approval should be deleted after one use.

#### Implementation of

[`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details).[`autoDeletionOptions`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details#autodeletionoptions)

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`autoDeletionOptions`](/sdk/reference/classes/incoming-approval-criteria#autodeletionoptions)

***

### coinTransfers?

> `optional` **coinTransfers?**: [`CoinTransfer`](/sdk/reference/classes/coin-transfer)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1154](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1154)

The BADGE or sdk.coin transfers to be executed upon every approval.

#### Implementation of

[`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details).[`coinTransfers`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details#cointransfers)

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`coinTransfers`](/sdk/reference/classes/incoming-approval-criteria#cointransfers)

***

### dynamicStoreChallenges?

> `optional` **dynamicStoreChallenges?**: [`DynamicStoreChallenge`](/sdk/reference/classes/dynamic-store-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1155](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1155)

The list of dynamic store challenges that the initiator must pass for approval.

#### Implementation of

[`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details).[`dynamicStoreChallenges`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details#dynamicstorechallenges)

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`dynamicStoreChallenges`](/sdk/reference/classes/incoming-approval-criteria#dynamicstorechallenges)

***

### ethSignatureChallenges?

> `optional` **ethSignatureChallenges?**: [`ETHSignatureChallenge`](/sdk/reference/classes/eth-signature-challenge)[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1156](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1156)

The list of ETH signature challenges that the initiator must pass for approval.

#### Implementation of

[`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details).[`ethSignatureChallenges`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details#ethsignaturechallenges)

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`ethSignatureChallenges`](/sdk/reference/classes/incoming-approval-criteria#ethsignaturechallenges)

***

### evmQueryChallenges?

> `optional` **evmQueryChallenges?**: [`EVMQueryChallengeWithDetails`](/sdk/reference/classes/evm-query-challenge-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2152](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2152)

EVM query challenges that must pass for approval. Read-only contract queries that verify external EVM state.

#### Implementation of

[`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details).[`evmQueryChallenges`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details#evmquerychallenges)

#### Overrides

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`evmQueryChallenges`](/sdk/reference/classes/incoming-approval-criteria#evmquerychallenges)

***

### initiatorChecks?

> `optional` **initiatorChecks?**: [`AddressChecks`](/sdk/reference/classes/address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1158](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1158)

Address checks for initiator

#### Implementation of

[`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details).[`initiatorChecks`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details#initiatorchecks)

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`initiatorChecks`](/sdk/reference/classes/incoming-approval-criteria#initiatorchecks)

***

### maxNumTransfers?

> `optional` **maxNumTransfers?**: [`MaxNumTransfers`](/sdk/reference/classes/max-num-transfers)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1150](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1150)

The max num transfers for this approval.

#### Implementation of

[`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details).[`maxNumTransfers`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details#maxnumtransfers)

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`maxNumTransfers`](/sdk/reference/classes/incoming-approval-criteria#maxnumtransfers)

***

### merkleChallenges?

> `optional` **merkleChallenges?**: [`MerkleChallengeWithDetails`](/sdk/reference/classes/merkle-challenge-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2151)

The list of merkle challenges that need valid proofs to be approved.

#### Implementation of

[`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details).[`merkleChallenges`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details#merklechallenges)

#### Overrides

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`merkleChallenges`](/sdk/reference/classes/incoming-approval-criteria#merklechallenges)

***

### mustOwnTokens?

> `optional` **mustOwnTokens?**: [`MustOwnTokens`](/sdk/reference/classes/must-own-tokens)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1147](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1147)

The list of must own tokens that need valid proofs to be approved.

#### Implementation of

[`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details).[`mustOwnTokens`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details#mustowntokens)

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`mustOwnTokens`](/sdk/reference/classes/incoming-approval-criteria#mustowntokens)

***

### mustPrioritize?

> `optional` **mustPrioritize?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1160](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1160)

If true, this approval must be explicitly prioritized in PrioritizedApprovals to be used.

#### Implementation of

[`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details).[`mustPrioritize`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details#mustprioritize)

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`mustPrioritize`](/sdk/reference/classes/incoming-approval-criteria#mustprioritize)

***

### predeterminedBalances?

> `optional` **predeterminedBalances?**: [`PredeterminedBalances`](/sdk/reference/classes/predetermined-balances)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1148](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1148)

The predetermined balances for each transfer using this approval.

#### Implementation of

[`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details).[`predeterminedBalances`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details#predeterminedbalances)

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`predeterminedBalances`](/sdk/reference/classes/incoming-approval-criteria#predeterminedbalances)

***

### requireFromDoesNotEqualInitiatedBy?

> `optional` **requireFromDoesNotEqualInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1153](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1153)

Whether the from address must not equal the initiatedBy address.

#### Implementation of

[`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details).[`requireFromDoesNotEqualInitiatedBy`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details#requirefromdoesnotequalinitiatedby)

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`requireFromDoesNotEqualInitiatedBy`](/sdk/reference/classes/incoming-approval-criteria#requirefromdoesnotequalinitiatedby)

***

### requireFromEqualsInitiatedBy?

> `optional` **requireFromEqualsInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1152](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1152)

Whether the from address must equal the initiatedBy address.

#### Implementation of

[`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details).[`requireFromEqualsInitiatedBy`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details#requirefromequalsinitiatedby)

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`requireFromEqualsInitiatedBy`](/sdk/reference/classes/incoming-approval-criteria#requirefromequalsinitiatedby)

***

### senderChecks?

> `optional` **senderChecks?**: [`AddressChecks`](/sdk/reference/classes/address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1157)

Address checks for sender

#### Implementation of

[`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details).[`senderChecks`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details#senderchecks)

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`senderChecks`](/sdk/reference/classes/incoming-approval-criteria#senderchecks)

***

### votingChallenges?

> `optional` **votingChallenges?**: [`VotingChallenge`](/sdk/reference/classes/voting-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1161)

The list of voting challenges that must be satisfied for approval.

#### Implementation of

[`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details).[`votingChallenges`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details#votingchallenges)

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`votingChallenges`](/sdk/reference/classes/incoming-approval-criteria#votingchallenges)

## Methods

### castToCollectionApprovalCriteria()

> **castToCollectionApprovalCriteria**(): [`ApprovalCriteriaWithDetails`](/sdk/reference/classes/approval-criteria-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2170](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2170)

#### Returns

[`ApprovalCriteriaWithDetails`](/sdk/reference/classes/approval-criteria-with-details)\<`T`\>

#### Overrides

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`castToCollectionApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria#casttocollectionapprovalcriteria)

***

### clone()

> **clone**(): `IncomingApprovalCriteriaWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2166](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2166)

Deep copies the object and returns a new instance.

#### Returns

`IncomingApprovalCriteriaWithDetails`\<`T`\>

#### Overrides

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`clone`](/sdk/reference/classes/incoming-approval-criteria#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `IncomingApprovalCriteriaWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2162](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2162)

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

`IncomingApprovalCriteriaWithDetails`\<`U`\>

#### Overrides

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`convert`](/sdk/reference/classes/incoming-approval-criteria#convert)

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

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`equals`](/sdk/reference/classes/incoming-approval-criteria#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L157)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`getNumberFieldNames`](/sdk/reference/classes/incoming-approval-criteria#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`hasNumberFields`](/sdk/reference/classes/incoming-approval-criteria#hasnumberfields)

***

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): [`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1285](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1285)

#### Parameters

##### prefix

`string`

#### Returns

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria)\<`T`\>

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`toBech32Addresses`](/sdk/reference/classes/incoming-approval-criteria#tobech32addresses)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`toJson`](/sdk/reference/classes/incoming-approval-criteria#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`toJsonString`](/sdk/reference/classes/incoming-approval-criteria#tojsonstring)

***

### toProto()

> **toProto**(): `IncomingApprovalCriteria`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1207](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1207)

#### Returns

`IncomingApprovalCriteria`

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`toProto`](/sdk/reference/classes/incoming-approval-criteria#toproto)

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): [`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1215](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1215)

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

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria)\<`U`\>

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`fromJson`](/sdk/reference/classes/incoming-approval-criteria#fromjson)

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): [`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1223](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1223)

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

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria)\<`U`\>

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`fromJsonString`](/sdk/reference/classes/incoming-approval-criteria#fromjsonstring)

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): [`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1231](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1231)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`IncomingApprovalCriteria`

##### convertFunction

(`item`) => `U`

#### Returns

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria)\<`U`\>

#### Inherited from

[`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria).[`fromProto`](/sdk/reference/classes/incoming-approval-criteria#fromproto)
