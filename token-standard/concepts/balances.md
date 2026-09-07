---
description: "How a Balance combines an amount, token ID ranges, and ownership time ranges, and the rules for expanding, subtracting, and merging them."
---

# Balances

A `Balance` says how many of which token IDs an address owns, and during which times. Ownership times let a token belong to someone for a window rather than forever, which is how vesting, subscriptions, and time-bound access work without extra logic.

## Shape

```json
{
  "amount": "1",
  "tokenIds": [
    { "start": "1", "end": "10" },
    { "start": "20", "end": "30" }
  ],
  "ownershipTimes": [
    { "start": "20", "end": "50" },
    { "start": "100", "end": "200" }
  ]
}
```

```ts
export interface Balance<T extends NumberType> {
  amount: T;
  tokenIds: UintRange<T>[];
  ownershipTimes: UintRange<T>[];
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | Uint | yes | Quantity owned. Must be greater than zero. |
| `tokenIds` | UintRange[] | yes | Token ID ranges the amount applies to |
| `ownershipTimes` | UintRange[] | yes | Time ranges (UNIX milliseconds) during which the tokens are owned |

A user's balance store holds an array of these. Approvals, trackers, and transfers all use the same structure.

{% hint style="info" %}
Ask your agent: "Show bob's balance of token ID 1 in collection 1 right now." The MCP builder tools (`query_balance`) produce the objects on this page.
{% endhint %}

## How It Works

### Expansion

One `Balance` with several ID ranges and several time ranges means every combination. Read it as nested loops:

```js
for (const balance of balances) {
  for (const tokenIdRange of balance.tokenIds) {
    for (const ownershipTimeRange of balance.ownershipTimes) {
      // owns balance.amount of tokenIdRange during ownershipTimeRange
    }
  }
}
```

The example above expands to:

1. 1x of IDs 1-10 during times 20-50
2. 1x of IDs 1-10 during times 100-200
3. 1x of IDs 20-30 during times 20-50
4. 1x of IDs 20-30 during times 100-200

### Subtraction

Subtracting a slice can split one `Balance` into several. Removing "1x of IDs 1-10 during times 20-50" from the example leaves:

```json
[
  {
    "amount": "1",
    "tokenIds": [
      { "start": "1", "end": "10" },
      { "start": "20", "end": "30" }
    ],
    "ownershipTimes": [{ "start": "100", "end": "200" }]
  },
  {
    "amount": "1",
    "tokenIds": [{ "start": "20", "end": "30" }],
    "ownershipTimes": [{ "start": "20", "end": "50" }]
  }
]
```

### Duplicates Add

Overlapping ranges inside one `Balance` are summed, not deduplicated:

```json
{
  "amount": "1",
  "tokenIds": [
    { "start": "1", "end": "10" },
    { "start": "1", "end": "10" }
  ],
  "ownershipTimes": [{ "start": "100", "end": "200" }]
}
```

is the same as:

```json
{
  "amount": "2",
  "tokenIds": [{ "start": "1", "end": "10" }],
  "ownershipTimes": [{ "start": "100", "end": "200" }]
}
```

### Ownership Times in Practice

Most collections do not need time-bound ownership. Use the full range `[{ "start": "1", "end": "18446744073709551615" }]` and set the `noCustomOwnershipTimes` invariant to lock that in. Transfers, approvals, and trackers all carry ownership times, so a transfer can move "IDs 1-10 for 2026 only" and leave the rest with the sender.

### Guidance

- Store balances in the most compact form: merge adjacent ranges and avoid duplicate ranges.
- When you subtract, split the remainder correctly across both dimensions.
- Treat time as a real dimension. Two balances with the same IDs but different times are different holdings.

## Related

- [UintRanges](uint-ranges.md)
- [Minting and Supply](minting-and-supply.md)
- [Balance snippets](../../sdk/snippets/balances.md)
- [GetBalance](../queries/get-balance.md)
