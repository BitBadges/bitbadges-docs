---
description: "T extends NumberType"
---

# Class: ApprovalCriteriaWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2115)

## Extends

- [`ApprovalCriteria`](/sdk/reference/classes/approval-criteria)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details)\<`T`\>

## Constructors

### Constructor

> **new ApprovalCriteriaWithDetails**\<`T`\>(`data`): `ApprovalCriteriaWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2119](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2119)

#### Parameters

##### data

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details)\<`T`\>

#### Returns

`ApprovalCriteriaWithDetails`\<`T`\>

#### Overrides

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`constructor`](/sdk/reference/classes/approval-criteria#constructor)

## Properties

### allowBackedMinting?

> `optional` **allowBackedMinting?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1743](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1743)

If true, this collection approval allows backed minting operations (CosmosCoinBackedPath). When false, this approval cannot be used for transfers involving backed minting addresses. This prevents accidental allowances when toListIds is "All".

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`allowBackedMinting`](/sdk/reference/interfaces/i-approval-criteria-with-details#allowbackedminting)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`allowBackedMinting`](/sdk/reference/classes/approval-criteria#allowbackedminting)

***

### allowSpecialWrapping?

> `optional` **allowSpecialWrapping?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1744](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1744)

If true, this collection approval allows special wrapping operations (CosmosCoinWrapperPath). When false, this approval cannot be used for transfers involving wrapping addresses. This prevents accidental allowances when toListIds is "All".

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`allowSpecialWrapping`](/sdk/reference/interfaces/i-approval-criteria-with-details#allowspecialwrapping)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`allowSpecialWrapping`](/sdk/reference/classes/approval-criteria#allowspecialwrapping)

***

### altTimeChecks?

> `optional` **altTimeChecks?**: [`AltTimeChecks`](/sdk/reference/classes/alt-time-checks)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1739](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1739)

Alternative time-based checks for approval denial (offline hours/days).

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`altTimeChecks`](/sdk/reference/interfaces/i-approval-criteria-with-details#alttimechecks)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`altTimeChecks`](/sdk/reference/classes/approval-criteria#alttimechecks)

***

### approvalAmounts?

> `optional` **approvalAmounts?**: [`ApprovalAmounts`](/sdk/reference/classes/approval-amounts)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1723](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1723)

The maximum approved amounts for this approval.

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`approvalAmounts`](/sdk/reference/interfaces/i-approval-criteria-with-details#approvalamounts)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`approvalAmounts`](/sdk/reference/classes/approval-criteria#approvalamounts)

***

### autoDeletionOptions?

> `optional` **autoDeletionOptions?**: [`AutoDeletionOptions`](/sdk/reference/classes/auto-deletion-options)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1725](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1725)

Whether the approval should be deleted after one use.

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`autoDeletionOptions`](/sdk/reference/interfaces/i-approval-criteria-with-details#autodeletionoptions)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`autoDeletionOptions`](/sdk/reference/classes/approval-criteria#autodeletionoptions)

***

### coinTransfers?

> `optional` **coinTransfers?**: [`CoinTransfer`](/sdk/reference/classes/coin-transfer)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1732](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1732)

The BADGE or sdk.coin transfers to be executed upon every approval.

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`coinTransfers`](/sdk/reference/interfaces/i-approval-criteria-with-details#cointransfers)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`coinTransfers`](/sdk/reference/classes/approval-criteria#cointransfers)

***

### dynamicStoreChallenges?

> `optional` **dynamicStoreChallenges?**: [`DynamicStoreChallenge`](/sdk/reference/classes/dynamic-store-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1734](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1734)

The list of dynamic store challenges that the initiator must pass for approval.

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`dynamicStoreChallenges`](/sdk/reference/interfaces/i-approval-criteria-with-details#dynamicstorechallenges)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`dynamicStoreChallenges`](/sdk/reference/classes/approval-criteria#dynamicstorechallenges)

***

### ethSignatureChallenges?

> `optional` **ethSignatureChallenges?**: [`ETHSignatureChallenge`](/sdk/reference/classes/eth-signature-challenge)[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1735](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1735)

The list of ETH signature challenges that the initiator must pass for approval.

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`ethSignatureChallenges`](/sdk/reference/interfaces/i-approval-criteria-with-details#ethsignaturechallenges)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`ethSignatureChallenges`](/sdk/reference/classes/approval-criteria#ethsignaturechallenges)

***

### evmQueryChallenges?

> `optional` **evmQueryChallenges?**: [`EVMQueryChallengeWithDetails`](/sdk/reference/classes/evm-query-challenge-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2117](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2117)

EVM query challenges that must pass for approval. Read-only contract queries that verify external EVM state.

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`evmQueryChallenges`](/sdk/reference/interfaces/i-approval-criteria-with-details#evmquerychallenges)

#### Overrides

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`evmQueryChallenges`](/sdk/reference/classes/approval-criteria#evmquerychallenges)

***

### initiatorChecks?

> `optional` **initiatorChecks?**: [`AddressChecks`](/sdk/reference/classes/address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1738](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1738)

Address checks for initiator

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`initiatorChecks`](/sdk/reference/interfaces/i-approval-criteria-with-details#initiatorchecks)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`initiatorChecks`](/sdk/reference/classes/approval-criteria#initiatorchecks)

***

### maxNumTransfers?

> `optional` **maxNumTransfers?**: [`MaxNumTransfers`](/sdk/reference/classes/max-num-transfers)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1724](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1724)

The max num transfers for this approval.

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`maxNumTransfers`](/sdk/reference/interfaces/i-approval-criteria-with-details#maxnumtransfers)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`maxNumTransfers`](/sdk/reference/classes/approval-criteria#maxnumtransfers)

***

### merkleChallenges?

> `optional` **merkleChallenges?**: [`MerkleChallengeWithDetails`](/sdk/reference/classes/merkle-challenge-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2116](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2116)

The list of merkle challenges that need valid proofs to be approved.

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`merkleChallenges`](/sdk/reference/interfaces/i-approval-criteria-with-details#merklechallenges)

#### Overrides

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`merkleChallenges`](/sdk/reference/classes/approval-criteria#merklechallenges)

***

### mustOwnTokens?

> `optional` **mustOwnTokens?**: [`MustOwnTokens`](/sdk/reference/classes/must-own-tokens)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1721](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1721)

The list of must own tokens that need valid proofs to be approved.

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`mustOwnTokens`](/sdk/reference/interfaces/i-approval-criteria-with-details#mustowntokens)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`mustOwnTokens`](/sdk/reference/classes/approval-criteria#mustowntokens)

***

### mustPrioritize?

> `optional` **mustPrioritize?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1740](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1740)

If true, this approval must be explicitly prioritized in PrioritizedApprovals to be used.

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`mustPrioritize`](/sdk/reference/interfaces/i-approval-criteria-with-details#mustprioritize)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`mustPrioritize`](/sdk/reference/classes/approval-criteria#mustprioritize)

***

### overridesFromOutgoingApprovals?

> `optional` **overridesFromOutgoingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1730](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1730)

Whether this approval overrides the from address's approved outgoing transfers.

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`overridesFromOutgoingApprovals`](/sdk/reference/interfaces/i-approval-criteria-with-details#overridesfromoutgoingapprovals)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`overridesFromOutgoingApprovals`](/sdk/reference/classes/approval-criteria#overridesfromoutgoingapprovals)

***

### overridesToIncomingApprovals?

> `optional` **overridesToIncomingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1731](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1731)

Whether this approval overrides the to address's approved incoming transfers.

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`overridesToIncomingApprovals`](/sdk/reference/interfaces/i-approval-criteria-with-details#overridestoincomingapprovals)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`overridesToIncomingApprovals`](/sdk/reference/classes/approval-criteria#overridestoincomingapprovals)

***

### predeterminedBalances?

> `optional` **predeterminedBalances?**: [`PredeterminedBalances`](/sdk/reference/classes/predetermined-balances)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1722](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1722)

The predetermined balances for each transfer. These allow approvals to use predetermined balance amounts rather than an incrementing tally system.

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`predeterminedBalances`](/sdk/reference/interfaces/i-approval-criteria-with-details#predeterminedbalances)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`predeterminedBalances`](/sdk/reference/classes/approval-criteria#predeterminedbalances)

***

### recipientChecks?

> `optional` **recipientChecks?**: [`AddressChecks`](/sdk/reference/classes/address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1737](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1737)

Address checks for recipient

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`recipientChecks`](/sdk/reference/interfaces/i-approval-criteria-with-details#recipientchecks)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`recipientChecks`](/sdk/reference/classes/approval-criteria#recipientchecks)

***

### requireFromDoesNotEqualInitiatedBy?

> `optional` **requireFromDoesNotEqualInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1729](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1729)

Whether the from address must not equal the initiatedBy address.

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`requireFromDoesNotEqualInitiatedBy`](/sdk/reference/interfaces/i-approval-criteria-with-details#requirefromdoesnotequalinitiatedby)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`requireFromDoesNotEqualInitiatedBy`](/sdk/reference/classes/approval-criteria#requirefromdoesnotequalinitiatedby)

***

### requireFromEqualsInitiatedBy?

> `optional` **requireFromEqualsInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1727](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1727)

Whether the from address must equal the initiatedBy address.

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`requireFromEqualsInitiatedBy`](/sdk/reference/interfaces/i-approval-criteria-with-details#requirefromequalsinitiatedby)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`requireFromEqualsInitiatedBy`](/sdk/reference/classes/approval-criteria#requirefromequalsinitiatedby)

***

### requireToDoesNotEqualInitiatedBy?

> `optional` **requireToDoesNotEqualInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1728](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1728)

Whether the to address must not equal the initiatedBy address.

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`requireToDoesNotEqualInitiatedBy`](/sdk/reference/interfaces/i-approval-criteria-with-details#requiretodoesnotequalinitiatedby)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`requireToDoesNotEqualInitiatedBy`](/sdk/reference/classes/approval-criteria#requiretodoesnotequalinitiatedby)

***

### requireToEqualsInitiatedBy?

> `optional` **requireToEqualsInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1726](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1726)

Whether the to address must equal the initiatedBy address.

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`requireToEqualsInitiatedBy`](/sdk/reference/interfaces/i-approval-criteria-with-details#requiretoequalsinitiatedby)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`requireToEqualsInitiatedBy`](/sdk/reference/classes/approval-criteria#requiretoequalsinitiatedby)

***

### senderChecks?

> `optional` **senderChecks?**: [`AddressChecks`](/sdk/reference/classes/address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1736](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1736)

Address checks for sender

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`senderChecks`](/sdk/reference/interfaces/i-approval-criteria-with-details#senderchecks)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`senderChecks`](/sdk/reference/classes/approval-criteria#senderchecks)

***

### userApprovalSettings?

> `optional` **userApprovalSettings?**: [`UserApprovalSettings`](/sdk/reference/classes/user-approval-settings)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1733](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1733)

Issuer-imposed constraints on user-level approvals. Includes royalties, allowed denoms, and coin transfer restrictions.

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`userApprovalSettings`](/sdk/reference/interfaces/i-approval-criteria-with-details#userapprovalsettings)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`userApprovalSettings`](/sdk/reference/classes/approval-criteria#userapprovalsettings)

***

### votingChallenges?

> `optional` **votingChallenges?**: [`VotingChallenge`](/sdk/reference/classes/voting-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1741](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1741)

The list of voting challenges that must be satisfied for approval.

#### Implementation of

[`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details).[`votingChallenges`](/sdk/reference/interfaces/i-approval-criteria-with-details#votingchallenges)

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`votingChallenges`](/sdk/reference/classes/approval-criteria#votingchallenges)

## Methods

### clone()

> **clone**(): `ApprovalCriteriaWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2131](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2131)

Deep copies the object and returns a new instance.

#### Returns

`ApprovalCriteriaWithDetails`\<`T`\>

#### Overrides

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`clone`](/sdk/reference/classes/approval-criteria#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `ApprovalCriteriaWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2127](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2127)

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

`ApprovalCriteriaWithDetails`\<`U`\>

#### Overrides

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`convert`](/sdk/reference/classes/approval-criteria#convert)

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

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`equals`](/sdk/reference/classes/approval-criteria#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L157)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`getNumberFieldNames`](/sdk/reference/classes/approval-criteria#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`hasNumberFields`](/sdk/reference/classes/approval-criteria#hasnumberfields)

***

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): [`ApprovalCriteria`](/sdk/reference/classes/approval-criteria)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1835](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1835)

#### Parameters

##### prefix

`string`

#### Returns

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria)\<`T`\>

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`toBech32Addresses`](/sdk/reference/classes/approval-criteria#tobech32addresses)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`toJson`](/sdk/reference/classes/approval-criteria#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`toJsonString`](/sdk/reference/classes/approval-criteria#tojsonstring)

***

### toProto()

> **toProto**(): `ApprovalCriteria`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1779](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1779)

#### Returns

`ApprovalCriteria`

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`toProto`](/sdk/reference/classes/approval-criteria#toproto)

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): [`ApprovalCriteria`](/sdk/reference/classes/approval-criteria)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1787](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1787)

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

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria)\<`U`\>

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`fromJson`](/sdk/reference/classes/approval-criteria#fromjson)

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): [`ApprovalCriteria`](/sdk/reference/classes/approval-criteria)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1795](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1795)

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

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria)\<`U`\>

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`fromJsonString`](/sdk/reference/classes/approval-criteria#fromjsonstring)

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): [`ApprovalCriteria`](/sdk/reference/classes/approval-criteria)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1803](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1803)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`ApprovalCriteria`

##### convertFunction

(`item`) => `U`

#### Returns

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria)\<`U`\>

#### Inherited from

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria).[`fromProto`](/sdk/reference/classes/approval-criteria#fromproto)
