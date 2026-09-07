---
description: "T extends NumberType"
---

# Interface: iIncomingApprovalCriteria\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:288](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L288)

## Extended by

- [`iIncomingApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-incoming-approval-criteria-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### altTimeChecks?

> `optional` **altTimeChecks?**: [`iAltTimeChecks`](/sdk/reference/interfaces/i-alt-time-checks)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:316](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L316)

Alternative time-based checks for approval denial (offline hours/days).

***

### approvalAmounts?

> `optional` **approvalAmounts?**: [`iApprovalAmounts`](/sdk/reference/interfaces/i-approval-amounts)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:298](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L298)

The maximum approved amounts for this approval.

***

### autoDeletionOptions?

> `optional` **autoDeletionOptions?**: [`iAutoDeletionOptions`](/sdk/reference/interfaces/i-auto-deletion-options)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:302](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L302)

Whether the approval should be deleted after one use.

***

### coinTransfers?

> `optional` **coinTransfers?**: [`iCoinTransfer`](/sdk/reference/interfaces/i-coin-transfer)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:290](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L290)

The BADGE or sdk.coin transfers to be executed upon every approval.

***

### dynamicStoreChallenges?

> `optional` **dynamicStoreChallenges?**: [`iDynamicStoreChallenge`](/sdk/reference/interfaces/i-dynamic-store-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:308](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L308)

The list of dynamic store challenges that the initiator must pass for approval.

***

### ethSignatureChallenges?

> `optional` **ethSignatureChallenges?**: [`iETHSignatureChallenge`](/sdk/reference/interfaces/i-eth-signature-challenge)[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:310](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L310)

The list of ETH signature challenges that the initiator must pass for approval.

***

### evmQueryChallenges?

> `optional` **evmQueryChallenges?**: [`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:322](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L322)

EVM query challenges that must pass for approval. Read-only contract queries that verify external EVM state.

***

### initiatorChecks?

> `optional` **initiatorChecks?**: [`iAddressChecks`](/sdk/reference/interfaces/i-address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:314](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L314)

Address checks for initiator

***

### maxNumTransfers?

> `optional` **maxNumTransfers?**: [`iMaxNumTransfers`](/sdk/reference/interfaces/i-max-num-transfers)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:300](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L300)

The max num transfers for this approval.

***

### merkleChallenges?

> `optional` **merkleChallenges?**: [`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:292](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L292)

The list of merkle challenges that need valid proofs to be approved.

***

### mustOwnTokens?

> `optional` **mustOwnTokens?**: [`iMustOwnToken`](/sdk/reference/interfaces/i-must-own-token)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:294](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L294)

The list of must own tokens that need valid proofs to be approved.

***

### mustPrioritize?

> `optional` **mustPrioritize?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:318](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L318)

If true, this approval must be explicitly prioritized in PrioritizedApprovals to be used.

***

### predeterminedBalances?

> `optional` **predeterminedBalances?**: [`iPredeterminedBalances`](/sdk/reference/interfaces/i-predetermined-balances)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:296](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L296)

The predetermined balances for each transfer using this approval.

***

### requireFromDoesNotEqualInitiatedBy?

> `optional` **requireFromDoesNotEqualInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:306](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L306)

Whether the from address must not equal the initiatedBy address.

***

### requireFromEqualsInitiatedBy?

> `optional` **requireFromEqualsInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:304](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L304)

Whether the from address must equal the initiatedBy address.

***

### senderChecks?

> `optional` **senderChecks?**: [`iAddressChecks`](/sdk/reference/interfaces/i-address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:312](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L312)

Address checks for sender

***

### votingChallenges?

> `optional` **votingChallenges?**: [`iVotingChallenge`](/sdk/reference/interfaces/i-voting-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:320](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L320)

The list of voting challenges that must be satisfied for approval.
