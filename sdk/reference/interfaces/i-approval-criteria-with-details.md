---
description: "T extends NumberType"
---

# Interface: iApprovalCriteriaWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2107](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2107)

## Extends

- [`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### allowBackedMinting?

> `optional` **allowBackedMinting?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:404](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L404)

If true, this collection approval allows backed minting operations (CosmosCoinBackedPath). When false, this approval cannot be used for transfers involving backed minting addresses. This prevents accidental allowances when toListIds is "All".

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`allowBackedMinting`](/sdk/reference/interfaces/i-approval-criteria#allowbackedminting)

***

### allowSpecialWrapping?

> `optional` **allowSpecialWrapping?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:406](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L406)

If true, this collection approval allows special wrapping operations (CosmosCoinWrapperPath). When false, this approval cannot be used for transfers involving wrapping addresses. This prevents accidental allowances when toListIds is "All".

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`allowSpecialWrapping`](/sdk/reference/interfaces/i-approval-criteria#allowspecialwrapping)

***

### altTimeChecks?

> `optional` **altTimeChecks?**: [`iAltTimeChecks`](/sdk/reference/interfaces/i-alt-time-checks)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:396](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L396)

Alternative time-based checks for approval denial (offline hours/days).

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`altTimeChecks`](/sdk/reference/interfaces/i-approval-criteria#alttimechecks)

***

### approvalAmounts?

> `optional` **approvalAmounts?**: [`iApprovalAmounts`](/sdk/reference/interfaces/i-approval-amounts)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:366](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L366)

The maximum approved amounts for this approval.

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`approvalAmounts`](/sdk/reference/interfaces/i-approval-criteria#approvalamounts)

***

### autoDeletionOptions?

> `optional` **autoDeletionOptions?**: [`iAutoDeletionOptions`](/sdk/reference/interfaces/i-auto-deletion-options)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:370](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L370)

Whether the approval should be deleted after one use.

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`autoDeletionOptions`](/sdk/reference/interfaces/i-approval-criteria#autodeletionoptions)

***

### coinTransfers?

> `optional` **coinTransfers?**: [`iCoinTransfer`](/sdk/reference/interfaces/i-coin-transfer)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:358](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L358)

The BADGE or sdk.coin transfers to be executed upon every approval.

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`coinTransfers`](/sdk/reference/interfaces/i-approval-criteria#cointransfers)

***

### dynamicStoreChallenges?

> `optional` **dynamicStoreChallenges?**: [`iDynamicStoreChallenge`](/sdk/reference/interfaces/i-dynamic-store-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:386](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L386)

The list of dynamic store challenges that the initiator must pass for approval.

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`dynamicStoreChallenges`](/sdk/reference/interfaces/i-approval-criteria#dynamicstorechallenges)

***

### ethSignatureChallenges?

> `optional` **ethSignatureChallenges?**: [`iETHSignatureChallenge`](/sdk/reference/interfaces/i-eth-signature-challenge)[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:388](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L388)

The list of ETH signature challenges that the initiator must pass for approval.

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`ethSignatureChallenges`](/sdk/reference/interfaces/i-approval-criteria#ethsignaturechallenges)

***

### evmQueryChallenges?

> `optional` **evmQueryChallenges?**: [`iEVMQueryChallengeWithDetails`](/sdk/reference/interfaces/i-evm-query-challenge-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2109](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2109)

EVM query challenges that must pass for approval. Read-only contract queries that verify external EVM state.

#### Overrides

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`evmQueryChallenges`](/sdk/reference/interfaces/i-approval-criteria#evmquerychallenges)

***

### initiatorChecks?

> `optional` **initiatorChecks?**: [`iAddressChecks`](/sdk/reference/interfaces/i-address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:394](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L394)

Address checks for initiator

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`initiatorChecks`](/sdk/reference/interfaces/i-approval-criteria#initiatorchecks)

***

### maxNumTransfers?

> `optional` **maxNumTransfers?**: [`iMaxNumTransfers`](/sdk/reference/interfaces/i-max-num-transfers)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:368](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L368)

The max num transfers for this approval.

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`maxNumTransfers`](/sdk/reference/interfaces/i-approval-criteria#maxnumtransfers)

***

### merkleChallenges?

> `optional` **merkleChallenges?**: [`iMerkleChallengeWithDetails`](/sdk/reference/interfaces/i-merkle-challenge-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2108](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2108)

The list of merkle challenges that need valid proofs to be approved.

#### Overrides

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`merkleChallenges`](/sdk/reference/interfaces/i-approval-criteria#merklechallenges)

***

### mustOwnTokens?

> `optional` **mustOwnTokens?**: [`iMustOwnToken`](/sdk/reference/interfaces/i-must-own-token)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:362](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L362)

The list of must own tokens that need valid proofs to be approved.

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`mustOwnTokens`](/sdk/reference/interfaces/i-approval-criteria#mustowntokens)

***

### mustPrioritize?

> `optional` **mustPrioritize?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:398](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L398)

If true, this approval must be explicitly prioritized in PrioritizedApprovals to be used.

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`mustPrioritize`](/sdk/reference/interfaces/i-approval-criteria#mustprioritize)

***

### overridesFromOutgoingApprovals?

> `optional` **overridesFromOutgoingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:380](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L380)

Whether this approval overrides the from address's approved outgoing transfers.

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`overridesFromOutgoingApprovals`](/sdk/reference/interfaces/i-approval-criteria#overridesfromoutgoingapprovals)

***

### overridesToIncomingApprovals?

> `optional` **overridesToIncomingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:382](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L382)

Whether this approval overrides the to address's approved incoming transfers.

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`overridesToIncomingApprovals`](/sdk/reference/interfaces/i-approval-criteria#overridestoincomingapprovals)

***

### predeterminedBalances?

> `optional` **predeterminedBalances?**: [`iPredeterminedBalances`](/sdk/reference/interfaces/i-predetermined-balances)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:364](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L364)

The predetermined balances for each transfer. These allow approvals to use predetermined balance amounts rather than an incrementing tally system.

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`predeterminedBalances`](/sdk/reference/interfaces/i-approval-criteria#predeterminedbalances)

***

### recipientChecks?

> `optional` **recipientChecks?**: [`iAddressChecks`](/sdk/reference/interfaces/i-address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:392](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L392)

Address checks for recipient

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`recipientChecks`](/sdk/reference/interfaces/i-approval-criteria#recipientchecks)

***

### requireFromDoesNotEqualInitiatedBy?

> `optional` **requireFromDoesNotEqualInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:378](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L378)

Whether the from address must not equal the initiatedBy address.

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`requireFromDoesNotEqualInitiatedBy`](/sdk/reference/interfaces/i-approval-criteria#requirefromdoesnotequalinitiatedby)

***

### requireFromEqualsInitiatedBy?

> `optional` **requireFromEqualsInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:374](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L374)

Whether the from address must equal the initiatedBy address.

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`requireFromEqualsInitiatedBy`](/sdk/reference/interfaces/i-approval-criteria#requirefromequalsinitiatedby)

***

### requireToDoesNotEqualInitiatedBy?

> `optional` **requireToDoesNotEqualInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:376](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L376)

Whether the to address must not equal the initiatedBy address.

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`requireToDoesNotEqualInitiatedBy`](/sdk/reference/interfaces/i-approval-criteria#requiretodoesnotequalinitiatedby)

***

### requireToEqualsInitiatedBy?

> `optional` **requireToEqualsInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:372](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L372)

Whether the to address must equal the initiatedBy address.

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`requireToEqualsInitiatedBy`](/sdk/reference/interfaces/i-approval-criteria#requiretoequalsinitiatedby)

***

### senderChecks?

> `optional` **senderChecks?**: [`iAddressChecks`](/sdk/reference/interfaces/i-address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:390](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L390)

Address checks for sender

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`senderChecks`](/sdk/reference/interfaces/i-approval-criteria#senderchecks)

***

### userApprovalSettings?

> `optional` **userApprovalSettings?**: [`iUserApprovalSettings`](/sdk/reference/interfaces/i-user-approval-settings)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:384](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L384)

Issuer-imposed constraints on user-level approvals. Includes royalties, allowed denoms, and coin transfer restrictions.

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`userApprovalSettings`](/sdk/reference/interfaces/i-approval-criteria#userapprovalsettings)

***

### votingChallenges?

> `optional` **votingChallenges?**: [`iVotingChallenge`](/sdk/reference/interfaces/i-voting-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:400](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L400)

The list of voting challenges that must be satisfied for approval.

#### Inherited from

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`votingChallenges`](/sdk/reference/interfaces/i-approval-criteria#votingchallenges)
