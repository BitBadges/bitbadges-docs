---
description: "Fetch a user's balance for a collection or a single token from the BitBadges API, the chain, or the bb CLI, full balance array or one amount."
---

# Balance lookups

Balances are stored as a list of `{ amount, tokenIds, ownershipTimes }`. Most apps only need "how much of token X does this address hold now". Both shapes are available from every surface.

| Flow | Returns | Use when |
| --- | --- | --- |
| Full | `BalanceArray` of `{ amount, tokenIds, ownershipTimes }` plus approvals | Iterating all holdings, custom UI, time-based ownership analysis |
| Simple | One `bigint` for one token ID at one instant | Gating, verification, agent checks |

## Example

```bash
# Full: all collection balances for an address, or one collection
bb balances bitbadges bb1... --collection 1

# Simple: one token in one collection
bb balances bitbadges bb1... --collection 1 --token 5

# Straight from a node (bb is the chain binary)
bb query tokenization balance 1 bb1...
bb query tokenization balance-for-token 1 bb1... 5
bb query tokenization balance-for-token 1 bb1... 5 1700000000000
```

```ts
import { BitBadgesAPI, BigIntify, getBalanceForIdNow, getBalanceForIdAndTime } from 'bitbadges';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });

// Full: the balance document, with the 3D balance array and the user's approvals
const balanceDoc = await api.getBalanceByAddress('1', 'bb1...');
const balances = balanceDoc.balances; // BalanceArray<bigint>

// Simple: one amount
const res = await api.getBalanceByAddressSpecificToken('1', '5', 'bb1...');
console.log(res.balance); // e.g. 100n

// Simple, at a chosen ownership time (unix ms). This resolves the token's
// ownership time ranges. It is not a historical chain-state query.
const later = await api.getBalanceByAddressSpecificToken('1', '5', 'bb1...', undefined, { time: 1700000000000n });

// If you already hold a balance array, resolve locally
const now = getBalanceForIdNow(5n, balances);
const then = getBalanceForIdAndTime(5n, 1700000000000n, balances);
```

```json
GET /api/v0/collection/1/5/balance/bb1...
GET /api/v0/collection/1/5/balance/bb1...?time=1700000000000

{ "balance": "100" }
```

The full flow over HTTP is `POST /api/v0/collection/:collectionId/balance/:address`. It returns the balance document with the balance array and approvals. The simple flow defaults to the current time when `time` is omitted.

## Behavior

- `getBalanceByAddress(collectionId, address, payload?)` returns a `BalanceDocWithDetails`. Read `.balances`, `.incomingApprovals`, and `.outgoingApprovals`.
- `getBalanceByAddressSpecificToken(collectionId, tokenId, address, payload?, options?)` returns `{ balance }`. `options.time` is unix milliseconds.
- The chain query `balance-for-token` takes an optional time argument and defaults to the current block time.
- MCP builder tools expose the same two shapes through `query_balance` (`tokenId` optional). See [MCP tools](../../agents/mcp-tools.md).
- Ownership times define when a balance is valid (for example a token valid from January to March). Neither flow returns past chain state.

## Related

- [Balances](balances.md)
- [Balances concept](../../token-standard/concepts/balances.md)
- [Query get-balance](../../token-standard/queries/get-balance.md)
