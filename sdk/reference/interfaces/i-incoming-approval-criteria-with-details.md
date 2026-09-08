---
description: "T extends NumberType"
---

# Interface: iIncomingApprovalCriteriaWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2139)

## Extends

- [`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### altTimeChecks?

> `optional` **altTimeChecks?**: [`iAltTimeChecks`](/sdk/reference/interfaces/i-alt-time-checks)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:316](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L316)

Alternative time-based checks for approval denial (offline hours/days).

#### Inherited from

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`altTimeChecks`](/sdk/reference/interfaces/i-incoming-approval-criteria#alttimechecks)

***

### approvalAmounts?

> `optional` **approvalAmounts?**: [`iApprovalAmounts`](/sdk/reference/interfaces/i-approval-amounts)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:298](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L298)

The maximum approved amounts for this approval.

#### Inherited from

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`approvalAmounts`](/sdk/reference/interfaces/i-incoming-approval-criteria#approvalamounts)

***

### autoDeletionOptions?

> `optional` **autoDeletionOptions?**: [`iAutoDeletionOptions`](/sdk/reference/interfaces/i-auto-deletion-options)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:302](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L302)

Whether the approval should be deleted after one use.

#### Inherited from

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`autoDeletionOptions`](/sdk/reference/interfaces/i-incoming-approval-criteria#autodeletionoptions)

***

### coinTransfers?

> `optional` **coinTransfers?**: [`iCoinTransfer`](/sdk/reference/interfaces/i-coin-transfer)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:290](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L290)

The BADGE or sdk.coin transfers to be executed upon every approval.

#### Inherited from

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`coinTransfers`](/sdk/reference/interfaces/i-incoming-approval-criteria#cointransfers)

***

### dynamicStoreChallenges?

> `optional` **dynamicStoreChallenges?**: [`iDynamicStoreChallenge`](/sdk/reference/interfaces/i-dynamic-store-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:308](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L308)

The list of dynamic store challenges that the initiator must pass for approval.

#### Inherited from

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`dynamicStoreChallenges`](/sdk/reference/interfaces/i-incoming-approval-criteria#dynamicstorechallenges)

***

### ethSignatureChallenges?

> `optional` **ethSignatureChallenges?**: [`iETHSignatureChallenge`](/sdk/reference/interfaces/i-eth-signature-challenge)[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:310](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L310)

The list of ETH signature challenges that the initiator must pass for approval.

#### Inherited from

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`ethSignatureChallenges`](/sdk/reference/interfaces/i-incoming-approval-criteria#ethsignaturechallenges)

***

### evmQueryChallenges?

> `optional` **evmQueryChallenges?**: [`iEVMQueryChallengeWithDetails`](/sdk/reference/interfaces/i-evm-query-challenge-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2141](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2141)

EVM query challenges that must pass for approval. Read-only contract queries that verify external EVM state.

#### Overrides

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`evmQueryChallenges`](/sdk/reference/interfaces/i-incoming-approval-criteria#evmquerychallenges)

***

### initiatorChecks?

> `optional` **initiatorChecks?**: [`iAddressChecks`](/sdk/reference/interfaces/i-address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:314](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L314)

Address checks for initiator

#### Inherited from

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`initiatorChecks`](/sdk/reference/interfaces/i-incoming-approval-criteria#initiatorchecks)

***

### maxNumTransfers?

> `optional` **maxNumTransfers?**: [`iMaxNumTransfers`](/sdk/reference/interfaces/i-max-num-transfers)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:300](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L300)

The max num transfers for this approval.

#### Inherited from

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`maxNumTransfers`](/sdk/reference/interfaces/i-incoming-approval-criteria#maxnumtransfers)

***

### merkleChallenges?

> `optional` **merkleChallenges?**: [`iMerkleChallengeWithDetails`](/sdk/reference/interfaces/i-merkle-challenge-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2140](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2140)

The list of merkle challenges that need valid proofs to be approved.

#### Overrides

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`merkleChallenges`](/sdk/reference/interfaces/i-incoming-approval-criteria#merklechallenges)

***

### mustOwnTokens?

> `optional` **mustOwnTokens?**: [`iMustOwnToken`](/sdk/reference/interfaces/i-must-own-token)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:294](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L294)

The list of must own tokens that need valid proofs to be approved.

#### Inherited from

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`mustOwnTokens`](/sdk/reference/interfaces/i-incoming-approval-criteria#mustowntokens)

***

### mustPrioritize?

> `optional` **mustPrioritize?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:318](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L318)

If true, this approval must be explicitly prioritized in PrioritizedApprovals to be used.

#### Inherited from

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`mustPrioritize`](/sdk/reference/interfaces/i-incoming-approval-criteria#mustprioritize)

***

### predeterminedBalances?

> `optional` **predeterminedBalances?**: [`iPredeterminedBalances`](/sdk/reference/interfaces/i-predetermined-balances)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:296](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L296)

The predetermined balances for each transfer using this approval.

#### Inherited from

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`predeterminedBalances`](/sdk/reference/interfaces/i-incoming-approval-criteria#predeterminedbalances)

***

### requireFromDoesNotEqualInitiatedBy?

> `optional` **requireFromDoesNotEqualInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:306](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L306)

Whether the from address must not equal the initiatedBy address.

#### Inherited from

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`requireFromDoesNotEqualInitiatedBy`](/sdk/reference/interfaces/i-incoming-approval-criteria#requirefromdoesnotequalinitiatedby)

***

### requireFromEqualsInitiatedBy?

> `optional` **requireFromEqualsInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:304](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L304)

Whether the from address must equal the initiatedBy address.

#### Inherited from

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`requireFromEqualsInitiatedBy`](/sdk/reference/interfaces/i-incoming-approval-criteria#requirefromequalsinitiatedby)

***

### senderChecks?

> `optional` **senderChecks?**: [`iAddressChecks`](/sdk/reference/interfaces/i-address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:312](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L312)

Address checks for sender

#### Inherited from

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`senderChecks`](/sdk/reference/interfaces/i-incoming-approval-criteria#senderchecks)

***

### votingChallenges?

> `optional` **votingChallenges?**: [`iVotingChallenge`](/sdk/reference/interfaces/i-voting-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:320](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L320)

The list of voting challenges that must be satisfied for approval.

#### Inherited from

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`votingChallenges`](/sdk/reference/interfaces/i-incoming-approval-criteria#votingchallenges)
