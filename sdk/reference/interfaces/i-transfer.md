---
description: "T extends NumberType"
---

# Interface: iTransfer\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:347](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L347)

## Extended by

- [`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### balances

> **balances**: [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:361](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L361)

The balances to transfer.

***

### ethSignatureProofs?

> `optional` **ethSignatureProofs?**: [`iETHSignatureProof`](/sdk/reference/interfaces/i-eth-signature-proof)[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:376](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L376)

The ETH signature proofs that satisfy the ETH signature challenges in the approvals. If the transfer deducts from multiple approvals, we check all the ETH signature proofs and assert at least one is valid for every challenge.

***

### from

> **from**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:351](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L351)

The address to transfer from.

***

### memo?

> `optional` **memo?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:381](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L381)

Arbitrary memo for the transfer.

***

### merkleProofs?

> `optional` **merkleProofs?**: [`iMerkleProof`](/sdk/reference/interfaces/i-merkle-proof)[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:371](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L371)

The merkle proofs that satisfy the mkerkle challenges in the approvals. If the transfer deducts from multiple approvals, we check all the merkle proofs and assert at least one is valid for every challenge.

***

### onlyCheckPrioritizedCollectionApprovals?

> `optional` **onlyCheckPrioritizedCollectionApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:393](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L393)

Whether or not to only check the prioritized approvals. If false, we will check all approvals with any prioritized first.

This only applies to the "collection" level approvals specified.

***

### onlyCheckPrioritizedIncomingApprovals?

> `optional` **onlyCheckPrioritizedIncomingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:400](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L400)

Whether or not to only check the prioritized approvals. If false, we will check all approvals with any prioritized first.

This only applies to the "incoming" level approvals specified.

***

### onlyCheckPrioritizedOutgoingApprovals?

> `optional` **onlyCheckPrioritizedOutgoingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:407](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L407)

Whether or not to only check the prioritized approvals. If false, we will check all approvals with any prioritized first.

This only applies to the "outgoing" level approvals specified.

***

### precalculateBalancesFromApproval?

> `optional` **precalculateBalancesFromApproval?**: [`iPrecalculateBalancesFromApprovalDetails`](/sdk/reference/interfaces/i-precalculate-balances-from-approval-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:366](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L366)

If specified, we will precalculate from this approval and override the balances. This can only be used when the specified approval has predeterminedBalances set.

***

### prioritizedApprovals?

> `optional` **prioritizedApprovals?**: [`iApprovalIdentifierDetails`](/sdk/reference/interfaces/i-approval-identifier-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:386](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L386)

The prioritized approvals to use for the transfer. If specified, we will check these first.

***

### toAddresses

> **toAddresses**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:356](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L356)

The addresses to transfer to.
