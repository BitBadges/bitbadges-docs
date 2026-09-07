---
description: "Turn chain simulation events into per-address coin and token balance changes with simulateAndReview, parseSimulationEvents, and calculateNetChanges."
---

# Simulation balance diffs

Simulate a transaction and see what moves, per address and per denom or collection, before you sign. The signing client wraps it in one call; the parsers are exported for raw events.

## Example

```bash
bb simulate ./tx.json
```

```ts
import { BitBadgesSigningClient } from 'bitbadges';

const client = new BitBadgesSigningClient({ adapter });
const review = await client.simulateAndReview(messages);

console.log('Gas used:', review.gasUsed, 'gas limit:', review.gasLimit);
console.log('Fee:', review.fee);

// Coins: address -> denom -> signed delta
for (const [address, denoms] of Object.entries(review.netChanges.coinChanges)) {
  for (const [denom, amount] of Object.entries(denoms)) {
    console.log(`${address}: ${amount > 0n ? '+' : ''}${amount} ${denom}`);
  }
}

// Tokens: address -> collectionId -> BalanceArray delta
console.log(review.netChanges.badgeChanges);

// Broadcast only after a human or a policy accepts the diff
if (acceptChanges(review.netChanges)) {
  const result = await client.signAndBroadcast(messages);
}
```

Lower level, when you already hold raw simulation events (for example from the API's `simulateTx`):

```ts
import { parseSimulationEvents, calculateNetChanges } from 'bitbadges';

const parsed = parseSimulationEvents(events, txsInfo);
// parsed.coinTransferEvents: { from, to, amount, denom, isProtocolFee }[]
// parsed.badgeTransferEvents: { from, to, balances, collectionId }[]
// parsed.ibcTransferEvents: { from, to, amount, denom, sourcePort, sourceChannel, receiver }[]

const netChanges = calculateNetChanges(parsed, { amount: fee.amount, denom: fee.denom }, signerAddress);
// netChanges.coinChanges: Record<address, Record<denom, bigint>>
// netChanges.badgeChanges: Record<address, Record<collectionId, BalanceArray<bigint>>>
```

## Fields

`simulateAndReview(messages, options?)` returns:

| Field | Type | Description |
| --- | --- | --- |
| `gasUsed` | `number` | From the simulation |
| `gasLimit` | `number` | `gasUsed` times the client's `gasMultiplier` |
| `fee` | `SigningFee` | `{ amount, denom, gas }` computed from `gasLimit` |
| `events` | `SimulationEvent[]` | Raw chain events |
| `parsed` | `ParsedSimulationEvents` | Coin, token, and IBC transfer events |
| `netChanges` | `NetBalanceChanges` | Per-address deltas, with the fee charged to the signer |

`options.txsInfo` is an optional `{ type, msg }[]` that names each message so token transfer events can be attributed.

## Behavior

Parsed event types:

- Coin transfers from `transfer`, `delegate`, and `redelegate` events
- Mint and burn from `coinbase` and `burn` events (IBC voucher burns that belong to an IBC transfer are suppressed)
- Token transfers from the tokenization module
- IBC transfers
- Protocol fees, flagged with `isProtocolFee`

For an EVM adapter, `simulateAndReview` runs a Cosmos simulation of the same messages to obtain events, since the precompile path does not return them. The MCP `simulate_transaction` tool returns the same `parsedEvents` and `netChanges`.

## Related

- [Signing client](../transactions/signing-client.md)
- [Broadcast](../transactions/broadcast.md)
- [Interpret a transaction](interpret-transaction.md)
