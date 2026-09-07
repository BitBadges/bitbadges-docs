---
description: "T extends NumberType"
---

# Interface: iTransferWithIncrements\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:149](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L149)

## Extends

- [`iTransfer`](/sdk/reference/interfaces/i-transfer)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### balances

> **balances**: [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:361](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L361)

The balances to transfer.

#### Inherited from

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`balances`](/sdk/reference/interfaces/i-transfer#balances)

***

### durationFromTimestamp?

> `optional` **durationFromTimestamp?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:160](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L160)

The number of unix milliseconds to approve starting from now.

***

### ethSignatureProofs?

> `optional` **ethSignatureProofs?**: [`iETHSignatureProof`](/sdk/reference/interfaces/i-eth-signature-proof)[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:376](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L376)

The ETH signature proofs that satisfy the ETH signature challenges in the approvals. If the transfer deducts from multiple approvals, we check all the ETH signature proofs and assert at least one is valid for every challenge.

#### Inherited from

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`ethSignatureProofs`](/sdk/reference/interfaces/i-transfer#ethsignatureproofs)

***

### from

> **from**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:351](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L351)

The address to transfer from.

#### Inherited from

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`from`](/sdk/reference/interfaces/i-transfer#from)

***

### incrementOwnershipTimesBy?

> `optional` **incrementOwnershipTimesBy?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L157)

The number to increment the ownershipTimes by for each transfer.

***

### incrementTokenIdsBy?

> `optional` **incrementTokenIdsBy?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:154](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L154)

The number to increment the tokenIDs by for each transfer.

***

### memo?

> `optional` **memo?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:381](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L381)

Arbitrary memo for the transfer.

#### Inherited from

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`memo`](/sdk/reference/interfaces/i-transfer#memo)

***

### merkleProofs?

> `optional` **merkleProofs?**: [`iMerkleProof`](/sdk/reference/interfaces/i-merkle-proof)[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:371](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L371)

The merkle proofs that satisfy the mkerkle challenges in the approvals. If the transfer deducts from multiple approvals, we check all the merkle proofs and assert at least one is valid for every challenge.

#### Inherited from

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`merkleProofs`](/sdk/reference/interfaces/i-transfer#merkleproofs)

***

### onlyCheckPrioritizedCollectionApprovals?

> `optional` **onlyCheckPrioritizedCollectionApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:393](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L393)

Whether or not to only check the prioritized approvals. If false, we will check all approvals with any prioritized first.

This only applies to the "collection" level approvals specified.

#### Inherited from

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`onlyCheckPrioritizedCollectionApprovals`](/sdk/reference/interfaces/i-transfer#onlycheckprioritizedcollectionapprovals)

***

### onlyCheckPrioritizedIncomingApprovals?

> `optional` **onlyCheckPrioritizedIncomingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:400](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L400)

Whether or not to only check the prioritized approvals. If false, we will check all approvals with any prioritized first.

This only applies to the "incoming" level approvals specified.

#### Inherited from

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`onlyCheckPrioritizedIncomingApprovals`](/sdk/reference/interfaces/i-transfer#onlycheckprioritizedincomingapprovals)

***

### onlyCheckPrioritizedOutgoingApprovals?

> `optional` **onlyCheckPrioritizedOutgoingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:407](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L407)

Whether or not to only check the prioritized approvals. If false, we will check all approvals with any prioritized first.

This only applies to the "outgoing" level approvals specified.

#### Inherited from

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`onlyCheckPrioritizedOutgoingApprovals`](/sdk/reference/interfaces/i-transfer#onlycheckprioritizedoutgoingapprovals)

***

### precalculateBalancesFromApproval?

> `optional` **precalculateBalancesFromApproval?**: [`iPrecalculateBalancesFromApprovalDetails`](/sdk/reference/interfaces/i-precalculate-balances-from-approval-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:366](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L366)

If specified, we will precalculate from this approval and override the balances. This can only be used when the specified approval has predeterminedBalances set.

#### Inherited from

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`precalculateBalancesFromApproval`](/sdk/reference/interfaces/i-transfer#precalculatebalancesfromapproval)

***

### prioritizedApprovals?

> `optional` **prioritizedApprovals?**: [`iApprovalIdentifierDetails`](/sdk/reference/interfaces/i-approval-identifier-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:386](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L386)

The prioritized approvals to use for the transfer. If specified, we will check these first.

#### Inherited from

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`prioritizedApprovals`](/sdk/reference/interfaces/i-transfer#prioritizedapprovals)

***

### toAddresses

> **toAddresses**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:356](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L356)

The addresses to transfer to.

#### Inherited from

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`toAddresses`](/sdk/reference/interfaces/i-transfer#toaddresses)

***

### toAddressesLength?

> `optional` **toAddressesLength?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L151)

The number of addresses to send the tokens to. This takes priority over toAddresses.length (used when you don't know exact addresses (i.e. you know number of codes)).
