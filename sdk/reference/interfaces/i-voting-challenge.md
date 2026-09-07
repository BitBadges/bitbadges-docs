---
description: "T extends NumberType"
---

# Interface: iVotingChallenge\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:720](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L720)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:746](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L746)

Arbitrary custom data associated with this voting challenge.

***

### delayAfterQuorum?

> `optional` **delayAfterQuorum?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:756](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L756)

Mandatory delay in milliseconds after quorum is reached before the transfer can execute.

***

### proposalId

> **proposalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:725](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L725)

The ID of this voting challenge for tracking votes (scoped like challengeTrackerId).
Format: collectionId-approverAddress-approvalLevel-approvalId-challengeId

***

### quorumThreshold

> **quorumThreshold**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:731](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L731)

The quorum threshold as a percentage (0-100) of total possible weight that must vote "yes".
Example: 50 means 50% of total voter weight must vote yes for approval.

***

### resetAfterExecution?

> `optional` **resetAfterExecution?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:751](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L751)

If true, all votes for this challenge are cleared after a successful transfer execution.

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:741](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L741)

The URI associated with this voting challenge.

***

### voters

> **voters**: [`iVoter`](/sdk/reference/interfaces/i-voter)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:736](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L736)

List of voters with their weights. Each voter can cast a weighted vote.
