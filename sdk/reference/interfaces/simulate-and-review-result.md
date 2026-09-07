---
description: "Result from simulating a transaction with full event parsing and net change calculation."
---

# Interface: SimulateAndReviewResult

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:257](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L257)

Result from simulating a transaction with full event parsing and net change calculation.

## Properties

### events

> **events**: [`SimulationEvent`](/sdk/reference/interfaces/simulation-event)[]

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:265](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L265)

Raw events from Cosmos simulation

***

### fee

> **fee**: [`SigningFee`](/sdk/reference/interfaces/signing-fee)

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:263](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L263)

Calculated fee based on gas limit

***

### gasLimit

> **gasLimit**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:261](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L261)

Recommended gas limit (gasUsed * multiplier)

***

### gasUsed

> **gasUsed**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:259](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L259)

Estimated gas used

***

### netChanges

> **netChanges**: [`NetBalanceChanges`](/sdk/reference/interfaces/net-balance-changes)

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:269](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L269)

Net balance changes per address

***

### parsed

> **parsed**: [`ParsedSimulationEvents`](/sdk/reference/interfaces/parsed-simulation-events)

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:267](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L267)

Parsed simulation events (coin transfers, badge transfers, IBC transfers)
