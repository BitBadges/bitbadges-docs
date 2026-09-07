---
description: "Result from simulating a transaction with full event parsing and net change calculation."
---

# Interface: SimulateAndReviewResult

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:269](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L269)

Result from simulating a transaction with full event parsing and net change calculation.

## Properties

### events

> **events**: [`SimulationEvent`](/sdk/reference/interfaces/simulation-event)[]

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:277](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L277)

Raw events from Cosmos simulation

***

### fee

> **fee**: [`SigningFee`](/sdk/reference/interfaces/signing-fee)

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:275](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L275)

Calculated fee based on gas limit

***

### gasLimit

> **gasLimit**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:273](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L273)

Recommended gas limit (gasUsed * multiplier)

***

### gasUsed

> **gasUsed**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:271](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L271)

Estimated gas used

***

### netChanges

> **netChanges**: [`NetBalanceChanges`](/sdk/reference/interfaces/net-balance-changes)

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:281](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L281)

Net balance changes per address

***

### parsed

> **parsed**: [`ParsedSimulationEvents`](/sdk/reference/interfaces/parsed-simulation-events)

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:279](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L279)

Parsed simulation events (coin transfers, badge transfers, IBC transfers)
