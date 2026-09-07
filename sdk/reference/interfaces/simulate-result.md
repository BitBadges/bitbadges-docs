---
description: "Result from simulating a transaction."
---

# Interface: SimulateResult

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:253](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L253)

Result from simulating a transaction.

## Properties

### events?

> `optional` **events?**: [`SimulationEvent`](/sdk/reference/interfaces/simulation-event)[]

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:261](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L261)

Raw events from Cosmos simulation (present for Cosmos path, populated via separate Cosmos sim for EVM path)

***

### fee

> **fee**: [`SigningFee`](/sdk/reference/interfaces/signing-fee)

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:259](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L259)

Calculated fee based on gas limit

***

### gasLimit

> **gasLimit**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:257](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L257)

Recommended gas limit (gasUsed * multiplier)

***

### gasUsed

> **gasUsed**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:255](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L255)

Estimated gas used
