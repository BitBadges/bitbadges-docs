---
description: "predeterminedBalances: force each use of an approval to move exact balances in order, by manual list or increments, with precalculation and scaling."
---

# Predetermined Balances

Predetermined balances replace "up to N" with "exactly these". Each use of the approval must move precisely the balances the approval computes for that transfer number, which is how sequential minting, subscriptions, and pay-per-unit flows are enforced on-chain.

## Shape

```ts
export interface PredeterminedBalances<T extends NumberType> {
  manualBalances: ManualBalances<T>[];
  incrementedBalances: IncrementedBalances<T>;
  orderCalculationMethod: PredeterminedOrderCalculationMethod;
}

export interface PredeterminedOrderCalculationMethod {
  useOverallNumTransfers: boolean;
  usePerToAddressNumTransfers: boolean;
  usePerFromAddressNumTransfers: boolean;
  usePerInitiatedByAddressNumTransfers: boolean;
  useMerkleChallengeLeafIndex: boolean;
  challengeTrackerId: string;
}
```

| Field | Type | Description |
| --- | --- | --- |
| `manualBalances` | `{ balances: Balance[] }[]` | One entry per transfer number. Exclusive with `incrementedBalances`. |
| `incrementedBalances` | IncrementedBalances | A start set plus rules for each subsequent transfer |
| `orderCalculationMethod` | PredeterminedOrderCalculationMethod | Which counter gives the transfer number. Exactly one `use*` may be `true`. |

Balances are never approximate. If the transfer's balances differ from the computed set, the approval does not match.

### Manual Balances

A complete `predeterminedBalances` with `manualBalances` open:

```json fold=31-53
{
  "predeterminedBalances": {
    "manualBalances": [
      {
        "balances": [
          {
            "amount": "1",
            "tokenIds": [
              { "start": "1", "end": "1" }
            ],
            "ownershipTimes": [
              { "start": "1691978400000", "end": "1723514400000" }
            ]
          }
        ]
      },
      {
        "balances": [
          {
            "amount": "5",
            "tokenIds": [
              { "start": "2", "end": "6" }
            ],
            "ownershipTimes": [
              { "start": "1691978400000", "end": "1723514400000" }
            ]
          }
        ]
      }
    ],
    "incrementedBalances": {
      "startBalances": [],
      "incrementTokenIdsBy": "0",
      "incrementOwnershipTimesBy": "0",
      "durationFromTimestamp": "0",
      "allowOverrideTimestamp": false,
      "recurringOwnershipTimes": {
        "startTime": "0",
        "intervalLength": "0",
        "chargePeriodLength": "0"
      },
      "allowOverrideWithAnyValidToken": false,
      "allowAmountScaling": false,
      "maxScalingMultiplier": "0"
    },
    "orderCalculationMethod": {
      "useOverallNumTransfers": true,
      "usePerToAddressNumTransfers": false,
      "usePerFromAddressNumTransfers": false,
      "usePerInitiatedByAddressNumTransfers": false,
      "useMerkleChallengeLeafIndex": false,
      "challengeTrackerId": ""
    }
  }
}
```

Transfer number 0 moves `manualBalances[0]`, number 1 moves `manualBalances[1]`, and so on. A number past the end matches nothing. `incrementedBalances` stays at its zero values when `manualBalances` is used.

### Incremented Balances

A complete `predeterminedBalances` with `incrementedBalances` open:

```json fold=29-36
{
  "predeterminedBalances": {
    "manualBalances": [],
    "incrementedBalances": {
      "startBalances": [
        {
          "amount": "1",
          "tokenIds": [
            { "start": "1", "end": "1" }
          ],
          "ownershipTimes": [
            { "start": "1691978400000", "end": "1723514400000" }
          ]
        }
      ],
      "incrementTokenIdsBy": "1",
      "incrementOwnershipTimesBy": "0",
      "durationFromTimestamp": "0",
      "allowOverrideTimestamp": false,
      "recurringOwnershipTimes": {
        "startTime": "0",
        "intervalLength": "0",
        "chargePeriodLength": "0"
      },
      "allowOverrideWithAnyValidToken": false,
      "allowAmountScaling": false,
      "maxScalingMultiplier": "0"
    },
    "orderCalculationMethod": {
      "useOverallNumTransfers": true,
      "usePerToAddressNumTransfers": false,
      "usePerFromAddressNumTransfers": false,
      "usePerInitiatedByAddressNumTransfers": false,
      "useMerkleChallengeLeafIndex": false,
      "challengeTrackerId": ""
    }
  }
}
```

| Field | Description | Example |
| --- | --- | --- |
| `startBalances` | Balances for transfer number 0 | |
| `incrementTokenIdsBy` | Add to every token ID per transfer number | `"1"`: transfer 1 gets ID 2, transfer 2 gets ID 3 |
| `incrementOwnershipTimesBy` | Add to every ownership time per transfer number | `"86400000"`: shift by one day each |
| `durationFromTimestamp` | Replace ownership times with `[base, base + duration - 1]` | `"2592000000"`: 30 days from now |
| `allowOverrideTimestamp` | Let the transfer supply `base` instead of block time | |
| `allowOverrideWithAnyValidToken` | Let the transfer pick any single valid token ID | |
| `allowAmountScaling` | Let the transfer move any integer multiple of `startBalances` | |
| `maxScalingMultiplier` | Cap on the multiplier. Required and greater than 0 when scaling is on. | `"1000000000000"` for micro-unit bases |
| `recurringOwnershipTimes` | Repeating windows for subscriptions | monthly with a 7-day charge window |

Most options exclude each other. Transfer number 0 uses `startBalances` as-is; number N applies the increments N times.

{% hint style="info" %}
Ask your agent:

```text
Add a mint approval to collection 1 that hands out token IDs 1 to 100 in order, one token per transfer.
```

The MCP builder tools (`add_approval, add_preset_approval`) produce the objects on this page.
{% endhint %}

## How It Works

### Order Calculation

The transfer number comes from one counter:

| Method | Counter | Typical use |
| --- | --- | --- |
| `useOverallNumTransfers` | Uses of the approval overall | Sequential mint: everyone gets the next ID |
| `usePerToAddressNumTransfers` | Uses per recipient | Each recipient gets their own sequence |
| `usePerFromAddressNumTransfers` | Uses per sender | |
| `usePerInitiatedByAddressNumTransfers` | Uses per initiator | |
| `useMerkleChallengeLeafIndex` | Leaf index from the Merkle challenge with `challengeTrackerId` | Reserve ID N for leaf N (specific codes or addresses) |

The `use*NumTransfers` methods read the same tracker as [`maxNumTransfers`](approval-trackers.md). The count is incremented even when `maxNumTransfers` sets `0` for that scope, and it is never reset by approval edits. Give an approval that should start at zero a fresh `amountTrackerId`.

```json
{
  "orderCalculationMethod": {
    "useOverallNumTransfers": false,
    "usePerToAddressNumTransfers": false,
    "usePerFromAddressNumTransfers": false,
    "usePerInitiatedByAddressNumTransfers": false,
    "useMerkleChallengeLeafIndex": true,
    "challengeTrackerId": "uniqueId"
  }
}
```

### Precalculation

Between signing and execution, other users' transfers can move the counter, so hand-computed balances go stale. Instead, ask the chain to compute them at execution time with `precalculateBalancesFromApproval` on the transfer:

```ts
{
  precalculateBalancesFromApproval: {
    approvalId: string;
    approvalLevel: 'collection' | 'incoming' | 'outgoing';
    approverAddress: string; // '' for collection
    version: string;         // must match the approval's version
    precalculationOptions: {
      overrideTimestamp: string;      // when allowOverrideTimestamp
      tokenIdsOverride: UintRange[];  // when allowOverrideWithAnyValidToken
      scalingMultiplier: string;      // when allowAmountScaling
    }
  }
}
```

| Option | Applies when | Validation |
| --- | --- | --- |
| `overrideTimestamp` | `durationFromTimestamp` set and `allowOverrideTimestamp` is `true` | `0` means block time. Ownership times become `[t, t + duration - 1]`. |
| `tokenIdsOverride` | `allowOverrideWithAnyValidToken` is `true` | Exactly one range with `start == end`, inside `validTokenIds` |
| `scalingMultiplier` | `allowAmountScaling` is `true` | At most `maxScalingMultiplier`. `0` means 1x. |

Options whose flag is off are ignored without error.

```json
{
  "precalculateBalancesFromApproval": {
    "approvalId": "approval-1",
    "approvalLevel": "collection",
    "approverAddress": "",
    "version": "1",
    "precalculationOptions": {
      "overrideTimestamp": "1704067200000",
      "tokenIdsOverride": [
        { "start": "5", "end": "5" }
      ],
      "scalingMultiplier": "0"
    }
  }
}
```

### Duration from Timestamp

`durationFromTimestamp` overwrites every ownership time in `startBalances` with `[base, base + duration - 1]`, where `base` is the block time or, when allowed, `overrideTimestamp`. Common durations in milliseconds:

| Duration | ms |
| --- | --- |
| 5 minutes | 300000 |
| 1 hour | 3600000 |
| 1 day | 86400000 |
| 1 week | 604800000 |
| 30 days | 2592000000 |
| 1 year | 31536000000 |

```json fold=3-15,18-25
{
  "incrementedBalances": {
    "startBalances": [
      {
        "amount": "1",
        "tokenIds": [
          { "start": "1", "end": "1" }
        ],
        "ownershipTimes": [
          { "start": "1", "end": "18446744073709551615" }
        ]
      }
    ],
    "incrementTokenIdsBy": "0",
    "incrementOwnershipTimesBy": "0",
    "durationFromTimestamp": "2592000000",
    "allowOverrideTimestamp": true,
    "recurringOwnershipTimes": {
      "startTime": "0",
      "intervalLength": "0",
      "chargePeriodLength": "0"
    },
    "allowOverrideWithAnyValidToken": false,
    "allowAmountScaling": false,
    "maxScalingMultiplier": "0"
  }
}
```

### Recurring Ownership Times

```json fold=3-17,23-25
{
  "incrementedBalances": {
    "startBalances": [
      {
        "amount": "1",
        "tokenIds": [
          { "start": "1", "end": "1" }
        ],
        "ownershipTimes": [
          { "start": "1", "end": "18446744073709551615" }
        ]
      }
    ],
    "incrementTokenIdsBy": "0",
    "incrementOwnershipTimesBy": "0",
    "durationFromTimestamp": "0",
    "allowOverrideTimestamp": false,
    "recurringOwnershipTimes": {
      "startTime": "1691978400000",
      "intervalLength": "2592000000",
      "chargePeriodLength": "604800000"
    },
    "allowOverrideWithAnyValidToken": false,
    "allowAmountScaling": false,
    "maxScalingMultiplier": "0"
  }
}
```

Intervals of `intervalLength` begin at `startTime`. A transfer is accepted only inside the charge window, the `chargePeriodLength` milliseconds before the next interval starts, and it grants ownership for that whole next interval. Outside the window the approval fails with `outside charge period`. `chargePeriodLength` must be above 0 and at most `intervalLength`. The example is a monthly subscription from Aug 13, 2023 that can be paid up to 7 days in advance.

### Amount Scaling

With `allowAmountScaling`, `startBalances` is the 1x unit and a transfer may move any integer multiple of it. `coinTransfers` on the same approval scale by the same multiplier.

```json fold=29-36
{
  "predeterminedBalances": {
    "manualBalances": [],
    "incrementedBalances": {
      "startBalances": [
        {
          "amount": "1",
          "tokenIds": [
            { "start": "1", "end": "1" }
          ],
          "ownershipTimes": [
            { "start": "1", "end": "18446744073709551615" }
          ]
        }
      ],
      "incrementTokenIdsBy": "0",
      "incrementOwnershipTimesBy": "0",
      "durationFromTimestamp": "0",
      "allowOverrideTimestamp": false,
      "recurringOwnershipTimes": {
        "startTime": "0",
        "intervalLength": "0",
        "chargePeriodLength": "0"
      },
      "allowOverrideWithAnyValidToken": false,
      "allowAmountScaling": true,
      "maxScalingMultiplier": "1000000000000"
    },
    "orderCalculationMethod": {
      "useOverallNumTransfers": true,
      "usePerToAddressNumTransfers": false,
      "usePerFromAddressNumTransfers": false,
      "usePerInitiatedByAddressNumTransfers": false,
      "useMerkleChallengeLeafIndex": false,
      "challengeTrackerId": ""
    }
  }
}
```

Rules:

- Every other `incrementedBalances` field must be zero, `false`, or empty. The base must be static.
- `maxScalingMultiplier` must be greater than 0. The chain rejects unlimited scaling.
- `multiplier = transferAmount / baseAmount` must be an integer of at least 1 and at most `maxScalingMultiplier`.
- Precalculation accepts `scalingMultiplier` and returns the scaled balances. Or compute balances client-side.

Set `startBalances` to the smallest unit (`amount: "1"` of a micro-unit) with a large `maxScalingMultiplier` so users can buy any amount. Uses: pay-per-token (1 micro-token for 1 micro-unit of payment), prediction market deposits (1 micro-YES plus 1 micro-NO per micro-USDC, so 1 USDC is a 1000000x multiplier), credit purchases.

{% hint style="warning" %}
`maxScalingMultiplier` bounds one transfer, not the total. Pair scaling with `maxNumTransfers` or `approvalAmounts` to cap total exposure. When `coinTransfers` use `overrideFromWithApproverAddress: true`, the escrow pays `multiplier * base` per transfer, so bound it.
{% endhint %}

Amount scaling is incompatible with the Quest, Subscription, Invoice, Product, Bid/Listing, and Scheduled Payment standards, which require fixed amounts per transfer. The `review_collection` MCP tool flags `allowAmountScaling` combined with `overrideFromWithApproverAddress`.

### Bounds

The approval's own `tokenIds` and `ownershipTimes` still apply. If the computed balances fall entirely outside them (transfer number 101 on an approval for IDs 1-100 with increment 1), the approval does not match. If they fall partly outside (IDs 95-105 against a bound of 1-100), this approval covers 95-100 and another approval must cover 101-105, or the transfer fails. The transfer must still move the exact computed set.

Approvals with predetermined balances are not auto-scannable. Transfers must [prioritize](../concepts/prioritized-approvals.md) them.

## Related

- [Approval Trackers](approval-trackers.md)
- [Merkle Challenges](merkle-challenges.md)
- [Coin Transfers](coin-transfers.md)
- [MsgTransferTokens](../messages/msg-transfer-tokens.md)
