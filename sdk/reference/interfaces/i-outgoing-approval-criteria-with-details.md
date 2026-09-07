---
description: "T extends NumberType"
---

# Interface: iOutgoingApprovalCriteriaWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2199](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2199)

## Extends

- [`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### altTimeChecks?

> `optional` **altTimeChecks?**: [`iAltTimeChecks`](/sdk/reference/interfaces/i-alt-time-checks)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:116](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L116)

Alternative time-based checks for approval denial (offline hours/days).

#### Inherited from

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`altTimeChecks`](/sdk/reference/interfaces/i-outgoing-approval-criteria#alttimechecks)

***

### approvalAmounts?

> `optional` **approvalAmounts?**: [`iApprovalAmounts`](/sdk/reference/interfaces/i-approval-amounts)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:98](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L98)

The maximum approved amounts for this approval.

#### Inherited from

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`approvalAmounts`](/sdk/reference/interfaces/i-outgoing-approval-criteria#approvalamounts)

***

### autoDeletionOptions?

> `optional` **autoDeletionOptions?**: [`iAutoDeletionOptions`](/sdk/reference/interfaces/i-auto-deletion-options)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:106](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L106)

Whether the approval should be deleted after one use.

#### Inherited from

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`autoDeletionOptions`](/sdk/reference/interfaces/i-outgoing-approval-criteria#autodeletionoptions)

***

### coinTransfers?

> `optional` **coinTransfers?**: [`iCoinTransfer`](/sdk/reference/interfaces/i-coin-transfer)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:90](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L90)

The BADGE or sdk.coin transfers to be executed upon every approval.

#### Inherited from

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`coinTransfers`](/sdk/reference/interfaces/i-outgoing-approval-criteria#cointransfers)

***

### dynamicStoreChallenges?

> `optional` **dynamicStoreChallenges?**: [`iDynamicStoreChallenge`](/sdk/reference/interfaces/i-dynamic-store-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:108](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L108)

The list of dynamic store challenges that the initiator must pass for approval.

#### Inherited from

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`dynamicStoreChallenges`](/sdk/reference/interfaces/i-outgoing-approval-criteria#dynamicstorechallenges)

***

### ethSignatureChallenges?

> `optional` **ethSignatureChallenges?**: [`iETHSignatureChallenge`](/sdk/reference/interfaces/i-eth-signature-challenge)[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:110](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L110)

The list of ETH signature challenges that the initiator must pass for approval.

#### Inherited from

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`ethSignatureChallenges`](/sdk/reference/interfaces/i-outgoing-approval-criteria#ethsignaturechallenges)

***

### evmQueryChallenges?

> `optional` **evmQueryChallenges?**: [`iEVMQueryChallengeWithDetails`](/sdk/reference/interfaces/i-evm-query-challenge-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2201](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2201)

EVM query challenges that must pass for approval. Read-only contract queries that verify external EVM state.

#### Overrides

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`evmQueryChallenges`](/sdk/reference/interfaces/i-outgoing-approval-criteria#evmquerychallenges)

***

### initiatorChecks?

> `optional` **initiatorChecks?**: [`iAddressChecks`](/sdk/reference/interfaces/i-address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:114](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L114)

Address checks for initiator

#### Inherited from

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`initiatorChecks`](/sdk/reference/interfaces/i-outgoing-approval-criteria#initiatorchecks)

***

### maxNumTransfers?

> `optional` **maxNumTransfers?**: [`iMaxNumTransfers`](/sdk/reference/interfaces/i-max-num-transfers)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:100](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L100)

The max num transfers for this approval.

#### Inherited from

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`maxNumTransfers`](/sdk/reference/interfaces/i-outgoing-approval-criteria#maxnumtransfers)

***

### merkleChallenges?

> `optional` **merkleChallenges?**: [`iMerkleChallengeWithDetails`](/sdk/reference/interfaces/i-merkle-challenge-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2200](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2200)

The list of merkle challenges that need valid proofs to be approved.

#### Overrides

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`merkleChallenges`](/sdk/reference/interfaces/i-outgoing-approval-criteria#merklechallenges)

***

### mustOwnTokens?

> `optional` **mustOwnTokens?**: [`iMustOwnToken`](/sdk/reference/interfaces/i-must-own-token)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:92](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L92)

The list of must own tokens that need valid proofs to be approved.

#### Inherited from

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`mustOwnTokens`](/sdk/reference/interfaces/i-outgoing-approval-criteria#mustowntokens)

***

### mustPrioritize?

> `optional` **mustPrioritize?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:118](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L118)

If true, this approval must be explicitly prioritized in PrioritizedApprovals to be used.

#### Inherited from

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`mustPrioritize`](/sdk/reference/interfaces/i-outgoing-approval-criteria#mustprioritize)

***

### predeterminedBalances?

> `optional` **predeterminedBalances?**: [`iPredeterminedBalances`](/sdk/reference/interfaces/i-predetermined-balances)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:96](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L96)

The predetermined balances for each transfer. These allow approvals to use predetermined balance amounts rather than an incrementing tally system.

#### Inherited from

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`predeterminedBalances`](/sdk/reference/interfaces/i-outgoing-approval-criteria#predeterminedbalances)

***

### recipientChecks?

> `optional` **recipientChecks?**: [`iAddressChecks`](/sdk/reference/interfaces/i-address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:112](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L112)

Address checks for recipient

#### Inherited from

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`recipientChecks`](/sdk/reference/interfaces/i-outgoing-approval-criteria#recipientchecks)

***

### requireToDoesNotEqualInitiatedBy?

> `optional` **requireToDoesNotEqualInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:104](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L104)

Whether the to address must not equal the initiatedBy  address.

#### Inherited from

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`requireToDoesNotEqualInitiatedBy`](/sdk/reference/interfaces/i-outgoing-approval-criteria#requiretodoesnotequalinitiatedby)

***

### requireToEqualsInitiatedBy?

> `optional` **requireToEqualsInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:102](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L102)

Whether the to address must equal the initiatedBy address.

#### Inherited from

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`requireToEqualsInitiatedBy`](/sdk/reference/interfaces/i-outgoing-approval-criteria#requiretoequalsinitiatedby)

***

### votingChallenges?

> `optional` **votingChallenges?**: [`iVotingChallenge`](/sdk/reference/interfaces/i-voting-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:120](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L120)

The list of voting challenges that must be satisfied for approval.

#### Inherited from

[`iOutgoingApprovalCriteria`](/sdk/reference/interfaces/i-outgoing-approval-criteria).[`votingChallenges`](/sdk/reference/interfaces/i-outgoing-approval-criteria#votingchallenges)
