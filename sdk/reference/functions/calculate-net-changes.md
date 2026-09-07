---
description: "Calculates net balance changes per address from parsed simulation events."
---

# Function: calculateNetChanges()

> **calculateNetChanges**(`parsed`, `fee?`, `signerAddress?`): [`NetBalanceChanges`](/sdk/reference/interfaces/net-balance-changes)

Defined in: [packages/bitbadgesjs-sdk/src/core/simulation.ts:348](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/simulation.ts#L348)

Calculates net balance changes per address from parsed simulation events.

Aggregates all coin and badge transfers to produce a net view:
- Coins sent appear as negative amounts, coins received as positive
- Badge balances are subtracted from senders and added to receivers
- Optionally includes the transaction fee as a deduction from the signer

Special addresses "Mint", "Burn", "Network Fee", and "Protocol Fee" are preserved as-is.

## Parameters

### parsed

[`ParsedSimulationEvents`](/sdk/reference/interfaces/parsed-simulation-events)

Parsed simulation events from `parseSimulationEvents`

### fee?

Optional transaction fee to include as a deduction

#### amount

`string`

#### denom

`string`

### signerAddress?

`string`

The signer's address (fee is deducted from this address)

## Returns

[`NetBalanceChanges`](/sdk/reference/interfaces/net-balance-changes)

Net balance changes per address
