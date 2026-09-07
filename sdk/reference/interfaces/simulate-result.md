---
description: "Result from simulating a transaction."
---

# Interface: SimulateResult

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:241](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L241)

Result from simulating a transaction.

## Properties

### events?

> `optional` **events?**: [`SimulationEvent`](/sdk/reference/interfaces/simulation-event)[]

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:249](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L249)

Raw events from Cosmos simulation (present for Cosmos path, populated via separate Cosmos sim for EVM path)

***

### fee

> **fee**: [`SigningFee`](/sdk/reference/interfaces/signing-fee)

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:247](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L247)

Calculated fee based on gas limit

***

### gasLimit

> **gasLimit**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:245](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L245)

Recommended gas limit (gasUsed * multiplier)

***

### gasUsed

> **gasUsed**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:243](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L243)

Estimated gas used
