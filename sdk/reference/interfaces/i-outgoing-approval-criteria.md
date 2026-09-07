---
description: "T extends NumberType"
---

# Interface: iOutgoingApprovalCriteria\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:88](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L88)

## Extended by

- [`iOutgoingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-outgoing-approval-criteria-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### altTimeChecks?

> `optional` **altTimeChecks?**: [`iAltTimeChecks`](/sdk/reference/interfaces/i-alt-time-checks)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:116](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L116)

Alternative time-based checks for approval denial (offline hours/days).

***

### approvalAmounts?

> `optional` **approvalAmounts?**: [`iApprovalAmounts`](/sdk/reference/interfaces/i-approval-amounts)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:98](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L98)

The maximum approved amounts for this approval.

***

### autoDeletionOptions?

> `optional` **autoDeletionOptions?**: [`iAutoDeletionOptions`](/sdk/reference/interfaces/i-auto-deletion-options)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:106](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L106)

Whether the approval should be deleted after one use.

***

### coinTransfers?

> `optional` **coinTransfers?**: [`iCoinTransfer`](/sdk/reference/interfaces/i-coin-transfer)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:90](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L90)

The BADGE or sdk.coin transfers to be executed upon every approval.

***

### dynamicStoreChallenges?

> `optional` **dynamicStoreChallenges?**: [`iDynamicStoreChallenge`](/sdk/reference/interfaces/i-dynamic-store-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:108](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L108)

The list of dynamic store challenges that the initiator must pass for approval.

***

### ethSignatureChallenges?

> `optional` **ethSignatureChallenges?**: [`iETHSignatureChallenge`](/sdk/reference/interfaces/i-eth-signature-challenge)[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:110](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L110)

The list of ETH signature challenges that the initiator must pass for approval.

***

### evmQueryChallenges?

> `optional` **evmQueryChallenges?**: [`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:122](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L122)

EVM query challenges that must pass for approval. Read-only contract queries that verify external EVM state.

***

### initiatorChecks?

> `optional` **initiatorChecks?**: [`iAddressChecks`](/sdk/reference/interfaces/i-address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:114](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L114)

Address checks for initiator

***

### maxNumTransfers?

> `optional` **maxNumTransfers?**: [`iMaxNumTransfers`](/sdk/reference/interfaces/i-max-num-transfers)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:100](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L100)

The max num transfers for this approval.

***

### merkleChallenges?

> `optional` **merkleChallenges?**: [`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:94](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L94)

The list of merkle challenges that need valid proofs to be approved.

***

### mustOwnTokens?

> `optional` **mustOwnTokens?**: [`iMustOwnToken`](/sdk/reference/interfaces/i-must-own-token)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:92](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L92)

The list of must own tokens that need valid proofs to be approved.

***

### mustPrioritize?

> `optional` **mustPrioritize?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:118](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L118)

If true, this approval must be explicitly prioritized in PrioritizedApprovals to be used.

***

### predeterminedBalances?

> `optional` **predeterminedBalances?**: [`iPredeterminedBalances`](/sdk/reference/interfaces/i-predetermined-balances)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:96](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L96)

The predetermined balances for each transfer. These allow approvals to use predetermined balance amounts rather than an incrementing tally system.

***

### recipientChecks?

> `optional` **recipientChecks?**: [`iAddressChecks`](/sdk/reference/interfaces/i-address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:112](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L112)

Address checks for recipient

***

### requireToDoesNotEqualInitiatedBy?

> `optional` **requireToDoesNotEqualInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:104](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L104)

Whether the to address must not equal the initiatedBy  address.

***

### requireToEqualsInitiatedBy?

> `optional` **requireToEqualsInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:102](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L102)

Whether the to address must equal the initiatedBy address.

***

### votingChallenges?

> `optional` **votingChallenges?**: [`iVotingChallenge`](/sdk/reference/interfaces/i-voting-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:120](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L120)

The list of voting challenges that must be satisfied for approval.
