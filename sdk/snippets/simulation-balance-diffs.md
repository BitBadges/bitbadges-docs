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
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgTransferTokens, type NetBalanceChanges } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const messages = [
  new MsgTransferTokens({
    creator: client.address,
    collectionId: '1',
    transfers: [
      {
        from: client.address,
        toAddresses: ['bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'],
        balances: [{ amount: '1', tokenIds: [{ start: '1', end: '1' }], ownershipTimes: [{ start: '1', end: '18446744073709551615' }] }]
      }
    ]
  })
];

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

// Policy: the signer may lose at most 1 BADGE (1e9 ubadge) in fees and nothing else
function acceptChanges(changes: NetBalanceChanges): boolean {
  const mine = changes.coinChanges[client.address] ?? {};
  return Object.entries(mine).every(([denom, delta]) => denom === 'ubadge' && delta >= -1_000_000_000n);
}

// Broadcast only after a human or a policy accepts the diff
if (acceptChanges(review.netChanges)) {
  const result = await client.signAndBroadcast(messages);
  console.log(result.txHash);
}
```

Lower level, when you already hold raw simulation events (for example from the API's `simulateTx`):

```ts
import { parseSimulationEvents, calculateNetChanges } from 'bitbadges';

// review.events and review.fee from simulateAndReview above, or sim.result.events from api.simulateTx
const events = review.events ?? [];
const txsInfo = messages.map((m) => ({ type: '/tokenization.MsgTransferTokens', msg: m }));

const parsed = parseSimulationEvents(events, txsInfo);
// parsed.coinTransferEvents: { from, to, amount, denom, isProtocolFee }[]
// parsed.badgeTransferEvents: { from, to, balances, collectionId }[]
// parsed.ibcTransferEvents: { from, to, amount, denom, sourcePort, sourceChannel, receiver }[]

const netChanges = calculateNetChanges(parsed, { amount: review.fee.amount, denom: review.fee.denom }, client.address);
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
