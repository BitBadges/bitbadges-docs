---
description: "Whether the approval should be deleted after one use."
---

# Interface: iAutoDeletionOptions

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:230](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L230)

## Properties

### afterOneUse

> **afterOneUse**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:232](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L232)

Whether the approval should be deleted after one use.

***

### afterOverallMaxNumTransfers

> **afterOverallMaxNumTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:234](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L234)

Whether the approval should be deleted after the overall max number of transfers threshold is met.

***

### allowCounterpartyPurge

> **allowCounterpartyPurge**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:236](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L236)

Allow counterparty to purge this approval if they are the only initiator

***

### allowPurgeIfExpired

> **allowPurgeIfExpired**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:238](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L238)

Allow others to call PurgeApprovals on behalf of this approval owner
