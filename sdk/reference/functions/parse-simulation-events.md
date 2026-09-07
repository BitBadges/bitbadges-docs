---
description: "Parses raw Cosmos SDK simulation events into structured transfer events."
---

# Function: parseSimulationEvents()

> **parseSimulationEvents**(`events`, `txsInfo`): [`ParsedSimulationEvents`](/sdk/reference/interfaces/parsed-simulation-events)

Defined in: [packages/bitbadgesjs-sdk/src/core/simulation.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/simulation.ts#L139)

Parses raw Cosmos SDK simulation events into structured transfer events.

Extracts:
- Coin transfers from `transfer`, `delegate`, `redelegate` events
- Badge transfers from `usedApprovalDetails` events
- Mint/burn synthetic transfers from `burn`/`coinbase` events
- Protocol fee detection from `usedApprovalDetails` coinTransfers attribute
- IBC transfers from transaction message info (MsgTransfer)

## Parameters

### events

[`SimulationEvent`](/sdk/reference/interfaces/simulation-event)[]

Raw events from Cosmos SDK simulation response

### txsInfo

[`TxMessageInfo`](/sdk/reference/interfaces/tx-message-info)[]

Transaction message info array (used for IBC transfer detection)

## Returns

[`ParsedSimulationEvents`](/sdk/reference/interfaces/parsed-simulation-events)

Parsed simulation events grouped by type
