---
description: "Auto-scan vs prioritized approval matching, approval versions, the onlyCheckPrioritized flags, and the mustPrioritize criterion."
---

# Prioritized approvals

A transfer either lets the chain scan for a matching approval (auto-scan) or names the approvals it wants to use (prioritized). Approvals with side effects are excluded from the scan, so transfers that use them must prioritize.

## Shape

```ts
import { MsgTransferTokens } from 'bitbadges';

const msg: MsgTransferTokens = {
  creator: 'bb1initiator...',
  collectionId: '1',
  transfers: [
    {
      from: 'bb1sender...',
      toAddresses: ['bb1recipient...'],
      balances: [
        {
          amount: 1n,
          tokenIds: [{ start: 1n, end: 1n }],
          ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
        },
      ],
      prioritizedApprovals: [
        {
          approvalId: 'abc123',
          approvalLevel: 'collection',
          approverAddress: '', // '' for collection, the owner for user approvals
          version: 2n,          // must equal the approval's current version
        },
      ],
      onlyCheckPrioritizedCollectionApprovals: true,
    },
  ],
};
```

| Field on `Transfer` | Type | Description |
| --- | --- | --- |
| `prioritizedApprovals` | ApprovalIdentifierDetails[] | Approvals to try first, in order |
| `prioritizedApprovals[].approvalId` | string | ID on the given level |
| `prioritizedApprovals[].approvalLevel` | `"collection"` \| `"outgoing"` \| `"incoming"` | Level of the approval |
| `prioritizedApprovals[].approverAddress` | string | `""` for collection, the owner's address for user levels |
| `prioritizedApprovals[].version` | Uint | Must match the approval's current `version` or the entry is ignored |
| `onlyCheckPrioritizedCollectionApprovals` | bool | Do not fall back to scanning collection approvals |
| `onlyCheckPrioritizedOutgoingApprovals` | bool | Same for the sender's outgoing approvals |
| `onlyCheckPrioritizedIncomingApprovals` | bool | Same for the recipient's incoming approvals |

## How it works

### Auto-scan mode

With no `prioritizedApprovals`, the chain walks the approvals on each level in stored order and uses the first ones that match. Only auto-scannable approvals are considered.

```ts
const msg: MsgTransferTokens = {
  creator: 'bb1initiator...',
  collectionId: '1',
  transfers: [
    {
      from: 'bb1sender...',
      toAddresses: ['bb1recipient...'],
      balances: [
        {
          amount: '1',
          tokenIds: [{ start: '1', end: '1' }],
          ownershipTimes: [{ start: '1', end: '18446744073709551615' }],
        },
      ],
      // no prioritizedApprovals: auto-scan
    },
  ],
};
```

### What is auto-scannable

An approval is auto-scannable when all of these hold:

1. `mustPrioritize` is not `true`
2. `coinTransfers` is empty
3. `predeterminedBalances` is empty or unused
4. `merkleChallenges` is empty
5. `ethSignatureChallenges` is empty

Backed minting and cosmos coin wrapping approvals also require prioritization through the [special address flags](../approval-criteria/special-address-flags.md).

```go
func CollectionApprovalIsAutoScannable(approvalCriteria *ApprovalCriteria) bool {
	if approvalCriteria == nil {
		return true
	}
	if approvalCriteria.MustPrioritize {
		return false
	}
	if len(approvalCriteria.CoinTransfers) > 0 {
		return false
	}
	if approvalCriteria.PredeterminedBalances != nil && !PredeterminedBalancesIsBasicallyNil(approvalCriteria.PredeterminedBalances) {
		return false
	}
	if len(approvalCriteria.MerkleChallenges) > 0 {
		return false
	}
	if len(approvalCriteria.EthSignatureChallenges) > 0 {
		return false
	}
	return true
}
```

Read-only criteria stay auto-scannable: `mustOwnTokens`, address checks, the `require*` flags, overrides, `autoDeletionOptions`, `approvalAmounts`, `maxNumTransfers`, dynamic store, voting, and EVM query challenges.

```ts
// Auto-scannable: read-only checks only
const approval: CollectionApproval<bigint> = {
  approvalId: 'simple-transfer',
  fromListId: '!Mint',
  toListId: 'All',
  initiatedByListId: 'All',
  transferTimes: [{ start: 1n, end: 18446744073709551615n }],
  tokenIds: [{ start: 1n, end: 18446744073709551615n }],
  ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
  version: 0n,
  approvalCriteria: {
    mustOwnTokens: [
      {
        tokenIds: [{ start: 1n, end: 1n }],
        ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
      },
    ],
  },
};

// Not auto-scannable: has coin transfers
const approvalWithSideEffects: CollectionApproval<bigint> = {
  approvalId: 'paid-transfer',
  fromListId: '!Mint',
  toListId: 'All',
  initiatedByListId: 'All',
  transferTimes: [{ start: 1n, end: 18446744073709551615n }],
  tokenIds: [{ start: 1n, end: 18446744073709551615n }],
  ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
  version: 0n,
  approvalCriteria: {
    coinTransfers: [
      {
        to: 'bb1...',
        coins: [{ denom: 'ubadge', amount: 1000000n }],
      },
    ],
  },
};
```

Liquidity pools and other automated environments transfer in auto-scan mode. A collection whose post-mint approval carries `coinTransfers` cannot be traded in a pool.

### Prioritized mode

List the approvals in `prioritizedApprovals`. The chain tries them first, in order. With the matching `onlyCheckPrioritized*` flag set, it stops there and fails if none match. Without the flag, it continues into auto-scan for the remainder.

```ts
const msg: MsgTransferTokens = {
  // ... other fields
  transfers: [
    {
      // ... other fields
      prioritizedApprovals: [
        {
          approvalId: 'abc123',
          approvalLevel: 'collection',
          approverAddress: '',
          version: '0',
        },
      ],
      onlyCheckPrioritizedCollectionApprovals: true,
      onlyCheckPrioritizedIncomingApprovals: true,
      onlyCheckPrioritizedOutgoingApprovals: true,
    },
  ],
};
```

Prioritization is also a selection tool. Use it to choose between two auto-scannable approvals, or to pin exactly one approval for a transfer.

### Versions

Every approval carries a `version`. The chain increments it on every update to that approval. A prioritized entry whose `version` does not match the current one is ignored, so a user cannot be switched onto changed terms between signing and execution.

```ts
const approval: CollectionApproval<bigint> = {
  approvalId: 'my-approval',
  fromListId: '!Mint',
  toListId: 'All',
  initiatedByListId: 'All',
  transferTimes: [{ start: 1n, end: 18446744073709551615n }],
  tokenIds: [{ start: 1n, end: 18446744073709551615n }],
  ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
  version: 0n, // becomes 1n after the first update
  // ... other fields
};

const msg: MsgTransferTokens = {
  creator: 'bb1initiator...',
  collectionId: '1',
  transfers: [
    {
      from: 'bb1sender...',
      toAddresses: ['bb1recipient...'],
      balances: [
        {
          amount: 1n,
          tokenIds: [{ start: 1n, end: 1n }],
          ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
        },
      ],
      prioritizedApprovals: [
        {
          approvalId: 'my-approval',
          approvalLevel: 'collection',
          approverAddress: '',
          version: 1n, // must match the current version
        },
      ],
    },
  ],
};
```

### mustPrioritize

`approvalCriteria.mustPrioritize: true` removes an approval from auto-scan even when it has no side effects. Use it for forceful transfers, approvals that increment trackers, or anything a user should consent to by name.

```json
{
  "approvalCriteria": {
    "mustPrioritize": true,
    "coinTransfers": [
      {
        "to": "bb1...",
        "coins": [{ "denom": "ubadge", "amount": "1000000" }]
      }
    ]
  }
}
```

A transfer that uses this approval must include it in `prioritizedApprovals` with the current version, and should set `onlyCheckPrioritizedCollectionApprovals: true` for deterministic behavior. The transfer fails if the approval is missing from the list, the version is stale, or the transfer does not match the approval.

The chain normalizes the stored value: when an approval is not auto-scannable for any other reason, it stores `mustPrioritize: true`. When the approval is auto-scannable, the value you set is kept. The default is `false`.

### Multiple prioritized approvals

```ts
const msg: MsgTransferTokens = {
  creator: 'bb1initiator...',
  collectionId: '1',
  transfers: [
    {
      from: 'bb1sender...',
      toAddresses: ['bb1recipient...'],
      balances: [
        {
          amount: '1',
          tokenIds: [{ start: '1', end: '1' }],
          ownershipTimes: [{ start: '1', end: '18446744073709551615' }],
        },
      ],
      prioritizedApprovals: [
        {
          approvalId: 'collection-approval',
          approvalLevel: 'collection',
          approverAddress: '',
          version: '2',
        },
        {
          approvalId: 'outgoing-approval',
          approvalLevel: 'outgoing',
          approverAddress: 'bb1sender...',
          version: '0',
        },
      ],
    },
  ],
};
```

### Default balances

`defaultBalances` on a collection cannot contain approvals that are not auto-scannable, because new users inherit them without ever prioritizing. See [Collections](collections.md).

## Related

- [Transferability](transferability.md)
- [Approval criteria](../approval-criteria/README.md)
- [Predetermined balances](../approval-criteria/predetermined-balances.md)
- [MsgTransferTokens](../messages/msg-transfer-tokens.md)
