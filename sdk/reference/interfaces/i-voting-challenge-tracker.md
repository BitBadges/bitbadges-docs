---
description: "VotingChallengeTracker tracks the quorum state for a voting challenge."
---

# Interface: iVotingChallengeTracker\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:764](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L764)

VotingChallengeTracker tracks the quorum state for a voting challenge.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### quorumReachedTimestamp

> **quorumReachedTimestamp**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:766](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L766)

Timestamp (unix ms) when quorum was first reached. Cleared when quorum drops or after reset.
