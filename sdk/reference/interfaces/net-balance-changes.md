---
description: "Net balance changes per address from a simulation."
---

# Interface: NetBalanceChanges

Defined in: [packages/bitbadgesjs-sdk/src/core/simulation.ts:84](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/simulation.ts#L84)

Net balance changes per address from a simulation.
- coinChanges: address -> denom -> amount (positive = received, negative = sent)
- badgeChanges: address -> collectionId -> balances

## Properties

### badgeChanges

> **badgeChanges**: `Record`\<`string`, `Record`\<`string`, [`BalanceArray`](/sdk/reference/classes/balance-array)\<`bigint`\>\>\>

Defined in: [packages/bitbadgesjs-sdk/src/core/simulation.ts:86](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/simulation.ts#L86)

***

### coinChanges

> **coinChanges**: `Record`\<`string`, `Record`\<`string`, `bigint`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/core/simulation.ts:85](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/simulation.ts#L85)
