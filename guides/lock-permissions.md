---
description: "Freeze supply, approvals, token IDs, metadata, or a whole BitBadges collection with collection permissions, and lock user permissions for escrow accounts."
---

# Lock permissions

At the end you know which manager actions are frozen forever, which stay editable, and how to target the freeze at one approval, one token range, or everything.

Permissions say what the manager may still change and when; see [Permissions](../token-standard/concepts/permissions.md). Each permission entry has two time lists plus, for some types, a scope:

1. `permanentlyPermittedTimes`: the action is always allowed for the scoped values.
2. `permanentlyForbiddenTimes`: the action is always forbidden for the scoped values.
3. Not in either list: the action is allowed now, but the manager can change that later (soft-enabled).

An empty array `[]` is the neutral state. It is not a freeze.

```ts
const FullTimeRanges = [
    {
        start: '1',
        end: '18446744073709551615',
    },
];

const CanArchiveCollection = {
    permanentlyPermittedTimes: [],
    permanentlyForbiddenTimes: FullTimeRanges, // frozen forever
};
```

```ts
// Part 1. Enabled vs disabled times for executing the permission
const permanentlyPermittedTimes = [];
const permanentlyForbiddenTimes = FullTimeRanges;

// Part 2. Which values it applies to. Depends on the permission type.
const {
    tokenIds,
    fromListId,
    toListId,
    initiatedByListId,
    transferTimes,
    ownershipTimes,
    approvalId,
} = permission;
```

## 1. Choose a baseline

### No manager

Set `manager` to an empty string. Permission values then never matter, because nobody can execute them.

```ts
const manager = '';
```

### Complete control, soft-enabled

Every permission enabled, none frozen. The manager can do anything now and can freeze any of them later.

```ts
const collectionPermissions = {
    canDeleteCollection: [],
    canArchiveCollection: [],
    canUpdateStandards: [],
    canUpdateCustomData: [],
    canUpdateManager: [],
    canUpdateCollectionMetadata: [],
    canUpdateTokenMetadata: [],
    canUpdateCollectionApprovals: [],
    canUpdateValidTokenIds: [],
    canAddMoreAliasPaths: [],
    canAddMoreCosmosCoinWrapperPaths: [],
};
```

### Presets

| Preset | Frozen | Neutral (`[]`) | Use when |
| --- | --- | --- | --- |
| Fully immutable | every permission | none | nothing may change after creation |
| Manager controlled | `canDeleteCollection` | everything else | the manager needs full control (issuer-controlled tokens, evolving collections) |
| Locked approvals (recommended default) | `canDeleteCollection`, `canUpdateStandards`, `canUpdateManager`, `canUpdateValidTokenIds`, `canUpdateCollectionApprovals` | `canUpdateCollectionMetadata`, `canUpdateTokenMetadata`, `canArchiveCollection`, `canUpdateCustomData` | supply and rules must be immutable but metadata needs updates |

For editable fields, use neutral `[]` rather than `permanentlyPermittedTimes`. Neutral gives the same behavior today and keeps the option to freeze later. `permanentlyPermittedTimes: FullTimeRanges` means the field can never be frozen; use it only when someone explicitly needs that guarantee.

## 2. Decide the two permissions that matter most

1. Can the set of token IDs grow? Frozen at genesis? Handle with `canUpdateValidTokenIds`.
2. Can transferability change? Handle with `canUpdateCollectionApprovals`. Frozen at genesis? Frozen for some token IDs, some approvals, Mint only, post-mint only?

The second one is a supply question. If the manager can add or edit approvals from `Mint`, they can mint any amount. Default to frozen for `Mint` unless the collection must stay open.

## 3. Freeze mint approvals (fixed supply)

A `canUpdateCollectionApprovals` entry applies to every approval that matches all of its criteria. `approvalId: 'All'` matches any approval.

```ts
const collectionPermissions = {
    canDeleteCollection: [],
    canArchiveCollection: [],
    canUpdateStandards: [],
    canUpdateCustomData: [],
    canUpdateManager: [],
    canUpdateCollectionMetadata: [],
    canUpdateValidTokenIds: [],
    canUpdateTokenMetadata: [],
    canUpdateCollectionApprovals: [
        {
            // Which approvals does this permission apply to? Approvals must match ALL criteria.
            fromListId: 'Mint',
            toListId: 'All',
            initiatedByListId: 'All',
            transferTimes: FullTimeRanges,
            tokenIds: FullTimeRanges,
            ownershipTimes: FullTimeRanges,
            approvalId: 'All',

            // Status at any given time (unhandled = soft-enabled)
            permanentlyPermittedTimes: [],
            permanentlyForbiddenTimes: FullTimeRanges,
        },
    ],
};

const createCollection = {
    // ... other collection fields
    collectionPermissions,
    collectionApprovals: [
        // Include every initial mint approval here.
        // These are the ONLY mint approvals ever possible.
        {
            fromListId: 'Mint',
            toListId: 'creator-address',
            // ... initial mint approval configuration
        },
    ],
};
```

```json
{
  "canUpdateCollectionApprovals": [{
    "fromListId": "Mint",
    "toListId": "All",
    "initiatedByListId": "All",
    "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "tokenIds": [{ "start": "1", "end": "18446744073709551615" }],
    "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "approvalId": "All",
    "permanentlyForbiddenTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "permanentlyPermittedTimes": []
  }]
}
```

{% hint style="danger" %}
This is irreversible. Once mint approvals are permanently forbidden, no mint approval can be added, edited, or removed. Put every mint approval you will ever need in place before you freeze.
{% endhint %}

To freeze all transfer rules, mint and post-mint alike, change `fromListId` to `"All"`:

```json
{
  "collectionPermissions": {
    "canUpdateCollectionApprovals": [{
      "fromListId": "All",
      "toListId": "All",
      "initiatedByListId": "All",
      "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "tokenIds": [{ "start": "1", "end": "18446744073709551615" }],
      "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "approvalId": "All",
      "permanentlyForbiddenTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "permanentlyPermittedTimes": []
    }]
  }
}
```

List IDs inside permissions must be reserved IDs or direct addresses: `"All"`, `"Mint"`, `"!Mint"`, `"bb1..."`, `"!bb1..."` (everyone except that address), or colon-separated `"bb1abc:bb1xyz"`. Custom list IDs are not allowed here.

## 4. Freeze one approval, or all but one

Target a specific `approvalId`. Prefix with `!` to target every approval except that one.

```ts
const collectionPermissions = {
    canDeleteCollection: [],
    canArchiveCollection: [],
    canUpdateStandards: [],
    canUpdateCustomData: [],
    canUpdateManager: [],
    canUpdateCollectionMetadata: [],
    canUpdateValidTokenIds: [],
    canUpdateTokenMetadata: [],
    canUpdateCollectionApprovals: [
        {
            fromListId: 'All',
            toListId: 'All',
            initiatedByListId: 'All',
            transferTimes: FullTimeRanges,
            tokenIds: FullTimeRanges,
            ownershipTimes: FullTimeRanges,
            approvalId: 'abc123', // Only targets this specific approval ID

            permanentlyPermittedTimes: [],
            permanentlyForbiddenTimes: FullTimeRanges, // Permanently locked
        },
    ],
};
```

```ts
const collectionPermissions = {
    // ... other permissions as above
    canUpdateCollectionApprovals: [
        {
            fromListId: 'All',
            toListId: 'All',
            initiatedByListId: 'All',
            transferTimes: FullTimeRanges,
            tokenIds: FullTimeRanges,
            ownershipTimes: FullTimeRanges,
            approvalId: '!abc123', // All approvals EXCEPT abc123

            permanentlyPermittedTimes: [],
            permanentlyForbiddenTimes: FullTimeRanges, // All others permanently locked
        },
    ],
};

const createCollection = {
    // ... other collection fields
    collectionPermissions,
    collectionApprovals: [
        {
            approvalId: 'abc123',
            // ... frozen or editable depending on the entry above
        },
        {
            approvalId: 'other-approval',
            // ... updateability depends on the entry above
        },
    ],
};
```

```json
{
  "canUpdateCollectionApprovals": [{
    "fromListId": "All",
    "toListId": "All",
    "initiatedByListId": "All",
    "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "tokenIds": [{ "start": "1", "end": "18446744073709551615" }],
    "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "approvalId": "mint-approval",
    "permanentlyForbiddenTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "permanentlyPermittedTimes": []
  }]
}
```

## 5. Freeze approvals for a token range

The entry applies only to approvals that overlap the listed `tokenIds`. Approvals entirely outside the range stay updatable. Use this to lock founder tokens or a limited edition (IDs 1 to 100) while later tiers keep evolving.

```ts
const collectionPermissions = {
    canDeleteCollection: [],
    canArchiveCollection: [],
    canUpdateStandards: [],
    canUpdateCustomData: [],
    canUpdateManager: [],
    canUpdateCollectionMetadata: [],
    canUpdateValidTokenIds: [],
    canUpdateTokenMetadata: [],
    canUpdateCollectionApprovals: [
        {
            fromListId: 'All',
            toListId: 'All',
            initiatedByListId: 'All',
            transferTimes: FullTimeRanges,
            tokenIds: [
                {
                    start: '1',
                    end: '100', // Only targets tokens 1-100
                },
            ],
            ownershipTimes: FullTimeRanges,
            approvalId: 'All',

            permanentlyPermittedTimes: [],
            permanentlyForbiddenTimes: FullTimeRanges, // Permanently locked
        },
    ],
};
```

Lock everything except 1 to 100:

```ts
const collectionPermissions = {
    // ... other permissions as above
    canUpdateCollectionApprovals: [
        {
            fromListId: 'All',
            toListId: 'All',
            initiatedByListId: 'All',
            transferTimes: FullTimeRanges,
            tokenIds: [
                {
                    start: '101',
                    end: '18446744073709551615', // All tokens except 1-100
                },
            ],
            ownershipTimes: FullTimeRanges,
            approvalId: 'All',

            permanentlyPermittedTimes: [],
            permanentlyForbiddenTimes: FullTimeRanges, // All others permanently locked
        },
    ],
};

const createCollection = {
    // ... other collection fields
    collectionPermissions,
    collectionApprovals: [
        {
            tokenIds: [{ start: '1', end: '50' }],
            // ... locked if it overlaps the permission criteria
        },
        {
            tokenIds: [{ start: '150', end: '200' }],
            // ... updateability depends on the entry above
        },
    ],
};
```

## 6. Freeze the valid token IDs

`canUpdateValidTokenIds` controls whether `validTokenIds` can change. Lock all IDs forever:

```ts
const collectionPermissions = {
    canDeleteCollection: [],
    canArchiveCollection: [],
    canUpdateStandards: [],
    canUpdateCustomData: [],
    canUpdateManager: [],
    canUpdateCollectionMetadata: [],
    canUpdateValidTokenIds: [
        {
            // Which token IDs does this permission apply to?
            tokenIds: FullTimeRanges, // All token IDs

            // Status at any given time
            permanentlyPermittedTimes: [],
            permanentlyForbiddenTimes: FullTimeRanges, // Never allowed to update
        },
    ],
    canUpdateTokenMetadata: [],
    canUpdateCollectionApprovals: [],
    canAddMoreAliasPaths: [],
    canAddMoreCosmosCoinWrapperPaths: [],
};
```

Lock IDs 1 to 100 and allow expansion beyond them:

```ts
const collectionPermissions = {
    // ... other permissions as above
    canUpdateValidTokenIds: [
        {
            tokenIds: [
                {
                    start: '1',
                    end: '100', // Only applies to tokens 1-100
                },
            ],
            permanentlyPermittedTimes: [],
            permanentlyForbiddenTimes: FullTimeRanges, // Token IDs 1-100 locked forever
        },
        // Token IDs 101+ remain soft-enabled (manager can update)
    ],
};

const createCollection = {
    // ... other collection fields
    collectionPermissions,
    validTokenIds: [
        {
            start: '1',
            end: '100', // Initial valid range
        },
    ],
};
```

- Unlisted ranges stay soft-enabled.
- Locked IDs cannot be removed; only expansion of ranges that are not locked is possible.
- `canUpdateTokenMetadata` uses the same `tokenIds` scope.

## 7. Lock user permissions (escrow accounts)

User permissions control whether a user can change their own approvals and auto-approve flags. Leave them soft-enabled (empty arrays) in almost every collection. Lock them only for escrow-style accounts that must not be able to change their own rules.

`canUpdateOutgoingApprovals` and `canUpdateIncomingApprovals` follow `canUpdateCollectionApprovals`, except that `fromListId` is fixed to the user's address for outgoing entries and `toListId` is fixed to the user's address for incoming entries.

```ts
const userPermissions = {
    canUpdateOutgoingApprovals: [
        {
            // fromListId is locked to the user's address
            toListId: 'All', // Can specify recipients
            initiatedByListId: 'All',
            transferTimes: FullTimeRanges,
            tokenIds: FullTimeRanges,
            ownershipTimes: FullTimeRanges,
            approvalId: 'All',
            permanentlyPermittedTimes: [],
            permanentlyForbiddenTimes: FullTimeRanges, // Lock forever
        },
    ],
    canUpdateIncomingApprovals: [
        {
            fromListId: 'All', // Can specify senders
            // toListId is locked to the user's address
            initiatedByListId: 'All',
            transferTimes: FullTimeRanges,
            tokenIds: FullTimeRanges,
            ownershipTimes: FullTimeRanges,
            approvalId: 'All',
            permanentlyPermittedTimes: [],
            permanentlyForbiddenTimes: FullTimeRanges, // Lock forever
        },
    ],
    canUpdateAutoApproveSelfInitiatedOutgoingTransfers: [
        {
            permanentlyPermittedTimes: [],
            permanentlyForbiddenTimes: FullTimeRanges,
        },
    ],
    canUpdateAutoApproveSelfInitiatedIncomingTransfers: [
        {
            permanentlyPermittedTimes: [],
            permanentlyForbiddenTimes: FullTimeRanges,
        },
    ],
    canUpdateAutoApproveAllIncomingTransfers: [
        {
            permanentlyPermittedTimes: [],
            permanentlyForbiddenTimes: FullTimeRanges,
        },
    ],
};

const updateUserApprovals = {
    creator: 'bb1...', // User's address
    collectionId: '1',
    updateUserPermissions: true,
    userPermissions,
    // ... other approval updates
};
```

The manager can also set defaults for every new holder through `defaultBalances.userPermissions` at creation; see [Create a collection](create-a-collection.md).

## 8. Deploy

Permissions are set in `collectionPermissions` at creation, or later with `MsgUniversalUpdateCollection` and `updateCollectionPermissions: true`. A permission can move from neutral to frozen at any time; it can never move back.

```bash
bb check ./collection.json     # structural validation plus a design review
bb deploy --msg-file ./collection.json --browser
```

Mint escrow, alias paths, and wrapper paths have their own switches: `canAddMoreAliasPaths` and `canAddMoreCosmosCoinWrapperPaths` (see [Wrap to an IBC denom](wrap-to-an-ibc-denom.md)).

## Common mistakes

- An entry with both `permanentlyPermittedTimes: []` and `permanentlyForbiddenTimes: []` is redundant. Replace the whole entry with `[]`. This applies to action permissions (`canDeleteCollection`, `canArchiveCollection`, ...), token ID action permissions (`canUpdateTokenMetadata`, `canUpdateValidTokenIds`), and `canUpdateCollectionApprovals`.
- Reading `[]` as frozen. Empty means still updatable.
- Leaving `Mint` approvals updatable when supply is meant to be fixed.
- Custom list IDs in permission entries.
- Using `permanentlyPermittedTimes` for an editable field. It removes the option to freeze later.

## Next steps

- [Permissions](../token-standard/concepts/permissions.md)
- [Minting and supply](../token-standard/concepts/minting-and-supply.md)
- [MsgUniversalUpdateCollection](../token-standard/messages/msg-universal-update-collection.md)
