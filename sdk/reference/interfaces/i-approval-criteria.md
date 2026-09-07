---
description: "T extends NumberType"
---

# Interface: iApprovalCriteria\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:356](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L356)

## Extended by

- [`iApprovalCriteriaWithDetails`](/sdk/reference/interfaces/i-approval-criteria-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### allowBackedMinting?

> `optional` **allowBackedMinting?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:404](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L404)

If true, this collection approval allows backed minting operations (CosmosCoinBackedPath). When false, this approval cannot be used for transfers involving backed minting addresses. This prevents accidental allowances when toListIds is "All".

***

### allowSpecialWrapping?

> `optional` **allowSpecialWrapping?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:406](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L406)

If true, this collection approval allows special wrapping operations (CosmosCoinWrapperPath). When false, this approval cannot be used for transfers involving wrapping addresses. This prevents accidental allowances when toListIds is "All".

***

### altTimeChecks?

> `optional` **altTimeChecks?**: [`iAltTimeChecks`](/sdk/reference/interfaces/i-alt-time-checks)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:396](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L396)

Alternative time-based checks for approval denial (offline hours/days).

***

### approvalAmounts?

> `optional` **approvalAmounts?**: [`iApprovalAmounts`](/sdk/reference/interfaces/i-approval-amounts)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:366](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L366)

The maximum approved amounts for this approval.

***

### autoDeletionOptions?

> `optional` **autoDeletionOptions?**: [`iAutoDeletionOptions`](/sdk/reference/interfaces/i-auto-deletion-options)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:370](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L370)

Whether the approval should be deleted after one use.

***

### coinTransfers?

> `optional` **coinTransfers?**: [`iCoinTransfer`](/sdk/reference/interfaces/i-coin-transfer)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:358](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L358)

The BADGE or sdk.coin transfers to be executed upon every approval.

***

### dynamicStoreChallenges?

> `optional` **dynamicStoreChallenges?**: [`iDynamicStoreChallenge`](/sdk/reference/interfaces/i-dynamic-store-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:386](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L386)

The list of dynamic store challenges that the initiator must pass for approval.

***

### ethSignatureChallenges?

> `optional` **ethSignatureChallenges?**: [`iETHSignatureChallenge`](/sdk/reference/interfaces/i-eth-signature-challenge)[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:388](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L388)

The list of ETH signature challenges that the initiator must pass for approval.

***

### evmQueryChallenges?

> `optional` **evmQueryChallenges?**: [`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:402](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L402)

EVM query challenges that must pass for approval. Read-only contract queries that verify external EVM state.

***

### initiatorChecks?

> `optional` **initiatorChecks?**: [`iAddressChecks`](/sdk/reference/interfaces/i-address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:394](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L394)

Address checks for initiator

***

### maxNumTransfers?

> `optional` **maxNumTransfers?**: [`iMaxNumTransfers`](/sdk/reference/interfaces/i-max-num-transfers)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:368](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L368)

The max num transfers for this approval.

***

### merkleChallenges?

> `optional` **merkleChallenges?**: [`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:360](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L360)

The list of merkle challenges that need valid proofs to be approved.

***

### mustOwnTokens?

> `optional` **mustOwnTokens?**: [`iMustOwnToken`](/sdk/reference/interfaces/i-must-own-token)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:362](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L362)

The list of must own tokens that need valid proofs to be approved.

***

### mustPrioritize?

> `optional` **mustPrioritize?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:398](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L398)

If true, this approval must be explicitly prioritized in PrioritizedApprovals to be used.

***

### overridesFromOutgoingApprovals?

> `optional` **overridesFromOutgoingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:380](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L380)

Whether this approval overrides the from address's approved outgoing transfers.

***

### overridesToIncomingApprovals?

> `optional` **overridesToIncomingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:382](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L382)

Whether this approval overrides the to address's approved incoming transfers.

***

### predeterminedBalances?

> `optional` **predeterminedBalances?**: [`iPredeterminedBalances`](/sdk/reference/interfaces/i-predetermined-balances)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:364](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L364)

The predetermined balances for each transfer. These allow approvals to use predetermined balance amounts rather than an incrementing tally system.

***

### recipientChecks?

> `optional` **recipientChecks?**: [`iAddressChecks`](/sdk/reference/interfaces/i-address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:392](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L392)

Address checks for recipient

***

### requireFromDoesNotEqualInitiatedBy?

> `optional` **requireFromDoesNotEqualInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:378](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L378)

Whether the from address must not equal the initiatedBy address.

***

### requireFromEqualsInitiatedBy?

> `optional` **requireFromEqualsInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:374](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L374)

Whether the from address must equal the initiatedBy address.

***

### requireToDoesNotEqualInitiatedBy?

> `optional` **requireToDoesNotEqualInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:376](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L376)

Whether the to address must not equal the initiatedBy address.

***

### requireToEqualsInitiatedBy?

> `optional` **requireToEqualsInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:372](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L372)

Whether the to address must equal the initiatedBy address.

***

### senderChecks?

> `optional` **senderChecks?**: [`iAddressChecks`](/sdk/reference/interfaces/i-address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:390](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L390)

Address checks for sender

***

### userApprovalSettings?

> `optional` **userApprovalSettings?**: [`iUserApprovalSettings`](/sdk/reference/interfaces/i-user-approval-settings)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:384](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L384)

Issuer-imposed constraints on user-level approvals. Includes royalties, allowed denoms, and coin transfer restrictions.

***

### votingChallenges?

> `optional` **votingChallenges?**: [`iVotingChallenge`](/sdk/reference/interfaces/i-voting-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:400](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L400)

The list of voting challenges that must be satisfied for approval.
