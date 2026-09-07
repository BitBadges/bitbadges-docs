---
description: "VoteProof represents a vote cast for a voting challenge."
---

# Interface: iVoteProof\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:774](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L774)

VoteProof represents a vote cast for a voting challenge.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### proposalId

> **proposalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:778](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L778)

The proposal ID this vote is for.

***

### votedAt?

> `optional` **votedAt?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:793](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L793)

Timestamp (unix ms) when this vote was cast. Set automatically by the chain.

***

### voter

> **voter**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:783](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L783)

The address of the voter casting the vote.

***

### yesWeight

> **yesWeight**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:790](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L790)

The percentage weight (0-100) allocated to "yes" vote.
The remaining percentage (100 - yesWeight) is allocated to "no" vote.
Example: yesWeight=70 means 70% yes, 30% no.
