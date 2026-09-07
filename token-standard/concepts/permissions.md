---
description: "The manager role, the three permission states, first-match evaluation, and the action, token ID, and approval permission types for collections and users."
---

# Permissions

Permissions decide whether the manager (or a user, for their own store) can change something, and whether that decision is frozen. They are the on-chain check and balance that makes "this can never change" enforceable.

## Shape

```ts
const collectionPermissions: CollectionPermissions<bigint> = {
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

const userPermissions: UserPermissions<bigint> = {
  canUpdateOutgoingApprovals: [],
  canUpdateIncomingApprovals: [],
  canUpdateAutoApproveSelfInitiatedOutgoingTransfers: [],
  canUpdateAutoApproveSelfInitiatedIncomingTransfers: [],
  canUpdateAutoApproveAllIncomingTransfers: [],
};
```

Every permission is an array. Each element has criteria (none, token IDs, or transfer fields) plus two time arrays:

| Field | Type | Description |
| --- | --- | --- |
| `permanentlyPermittedTimes` | UintRange[] | Times when the action is allowed and that can never be changed |
| `permanentlyForbiddenTimes` | UintRange[] | Times when the action is blocked and that can never be changed |

A time cannot be in both arrays of the same element.

### Collection Permissions

| Permission | Type | Controls |
| --- | --- | --- |
| `canDeleteCollection` | action | [MsgDeleteCollection](../messages/msg-delete-collection.md) |
| `canArchiveCollection` | action | Changing `isArchived` |
| `canUpdateStandards` | action | `standards` |
| `canUpdateCustomData` | action | Collection `customData` |
| `canUpdateManager` | action | `manager` |
| `canUpdateCollectionMetadata` | action | `collectionMetadata` |
| `canAddMoreAliasPaths` | action | Adding alias paths |
| `canAddMoreCosmosCoinWrapperPaths` | action | Adding cosmos coin wrapper paths |
| `canUpdateValidTokenIds` | token ID action | `validTokenIds` per token ID |
| `canUpdateTokenMetadata` | token ID action | `tokenMetadata` per token ID |
| `canUpdateCollectionApprovals` | approval | `collectionApprovals` per transfer tuple |

### User Permissions

| Permission | Type | Controls |
| --- | --- | --- |
| `canUpdateOutgoingApprovals` | approval (no `fromListId`) | The user's outgoing approvals |
| `canUpdateIncomingApprovals` | approval (no `toListId`) | The user's incoming approvals |
| `canUpdateAutoApproveSelfInitiatedOutgoingTransfers` | action | That flag |
| `canUpdateAutoApproveSelfInitiatedIncomingTransfers` | action | That flag |
| `canUpdateAutoApproveAllIncomingTransfers` | action | That flag |

User permissions are rarely needed. Leave them as empty arrays unless you must lock a user's ability to change their own approvals, for example an escrow account.

{% hint style="info" %}
Ask your agent:

```text
Lock collection 1 so its approvals and metadata can never change, but leave the manager updatable.
```

The MCP builder tools (`set_permissions`) produce the objects on this page.
{% endhint %}

## How It Works

### The Manager

The manager is the address that runs the collection. It can update metadata, token metadata, approvals, valid token IDs, standards, custom data, archive status, and the manager address itself, each subject to the matching permission. It cannot change user balances except through the approval system, and it cannot touch users' keys or private data.

A complete `MsgUniversalUpdateCollection` that names alice as manager and permits manager changes forever:

```json fold=3-23,25-28,37-42,46-198
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionId": "1",
  "defaultBalances": {
    "balances": [],
    "outgoingApprovals": [],
    "incomingApprovals": [],
    "autoApproveSelfInitiatedOutgoingTransfers": true,
    "autoApproveSelfInitiatedIncomingTransfers": true,
    "autoApproveAllIncomingTransfers": true,
    "userPermissions": {
      "canUpdateOutgoingApprovals": [],
      "canUpdateIncomingApprovals": [],
      "canUpdateAutoApproveSelfInitiatedOutgoingTransfers": [],
      "canUpdateAutoApproveSelfInitiatedIncomingTransfers": [],
      "canUpdateAutoApproveAllIncomingTransfers": []
    }
  },
  "updateValidTokenIds": true,
  "validTokenIds": [
    { "start": "1", "end": "100" }
  ],
  "updateCollectionPermissions": true,
  "collectionPermissions": {
    "canDeleteCollection": [],
    "canArchiveCollection": [],
    "canUpdateStandards": [],
    "canUpdateCustomData": [],
    "canUpdateManager": [
      {
        "permanentlyPermittedTimes": [
          { "start": "1", "end": "18446744073709551615" }
        ],
        "permanentlyForbiddenTimes": []
      }
    ],
    "canUpdateCollectionMetadata": [],
    "canUpdateValidTokenIds": [],
    "canUpdateTokenMetadata": [],
    "canUpdateCollectionApprovals": [],
    "canAddMoreAliasPaths": [],
    "canAddMoreCosmosCoinWrapperPaths": []
  },
  "updateManager": true,
  "manager": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "updateCollectionMetadata": true,
  "collectionMetadata": {
    "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json",
    "customData": ""
  },
  "updateTokenMetadata": true,
  "tokenMetadata": [
    {
      "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/{id}.json",
      "customData": "",
      "tokenIds": [
        { "start": "1", "end": "100" }
      ]
    }
  ],
  "updateCustomData": true,
  "customData": "",
  "updateCollectionApprovals": true,
  "collectionApprovals": [
    {
      "fromListId": "Mint",
      "toListId": "All",
      "initiatedByListId": "All",
      "transferTimes": [
        { "start": "1", "end": "18446744073709551615" }
      ],
      "tokenIds": [
        { "start": "1", "end": "18446744073709551615" }
      ],
      "ownershipTimes": [
        { "start": "1", "end": "18446744073709551615" }
      ],
      "uri": "",
      "customData": "",
      "approvalId": "mint",
      "approvalCriteria": {
        "merkleChallenges": [],
        "predeterminedBalances": {
          "manualBalances": [],
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
            "useOverallNumTransfers": false,
            "usePerToAddressNumTransfers": false,
            "usePerFromAddressNumTransfers": false,
            "usePerInitiatedByAddressNumTransfers": false,
            "useMerkleChallengeLeafIndex": false,
            "challengeTrackerId": ""
          }
        },
        "approvalAmounts": {
          "overallApprovalAmount": "0",
          "perToAddressApprovalAmount": "0",
          "perFromAddressApprovalAmount": "0",
          "perInitiatedByAddressApprovalAmount": "0",
          "amountTrackerId": "",
          "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
        },
        "maxNumTransfers": {
          "overallMaxNumTransfers": "0",
          "perToAddressMaxNumTransfers": "0",
          "perFromAddressMaxNumTransfers": "0",
          "perInitiatedByAddressMaxNumTransfers": "0",
          "amountTrackerId": "",
          "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
        },
        "coinTransfers": [],
        "requireToEqualsInitiatedBy": false,
        "requireFromEqualsInitiatedBy": false,
        "requireToDoesNotEqualInitiatedBy": false,
        "requireFromDoesNotEqualInitiatedBy": false,
        "overridesFromOutgoingApprovals": true,
        "overridesToIncomingApprovals": false,
        "autoDeletionOptions": {
          "afterOneUse": false,
          "afterOverallMaxNumTransfers": false,
          "allowCounterpartyPurge": false,
          "allowPurgeIfExpired": false
        },
        "mustOwnTokens": [],
        "dynamicStoreChallenges": [],
        "ethSignatureChallenges": [],
        "senderChecks": {
          "mustBeEvmContract": false,
          "mustNotBeEvmContract": false,
          "mustBeLiquidityPool": false,
          "mustNotBeLiquidityPool": false
        },
        "recipientChecks": {
          "mustBeEvmContract": false,
          "mustNotBeEvmContract": false,
          "mustBeLiquidityPool": false,
          "mustNotBeLiquidityPool": false
        },
        "initiatorChecks": {
          "mustBeEvmContract": false,
          "mustNotBeEvmContract": false,
          "mustBeLiquidityPool": false,
          "mustNotBeLiquidityPool": false
        },
        "altTimeChecks": {
          "offlineHours": [],
          "offlineDays": [],
          "offlineMonths": [],
          "offlineDaysOfMonth": [],
          "offlineWeeksOfYear": [],
          "timezoneOffsetMinutes": "0",
          "timezoneOffsetNegative": false
        },
        "mustPrioritize": false,
        "votingChallenges": [],
        "allowBackedMinting": false,
        "allowSpecialWrapping": false,
        "evmQueryChallenges": [],
        "userApprovalSettings": {
          "allowedDenoms": [],
          "disableUserCoinTransfers": false,
          "userRoyalties": { "percentage": "0", "payoutAddress": "" }
        }
      },
      "version": "0"
    }
  ],
  "updateStandards": true,
  "standards": [
    "NFTs"
  ],
  "updateIsArchived": true,
  "isArchived": false,
  "mintEscrowCoinsToTransfer": [],
  "cosmosCoinWrapperPathsToAdd": [],
  "invariants": {
    "noCustomOwnershipTimes": false,
    "maxSupplyPerId": "0",
    "cosmosCoinBackedPath": null,
    "noForcefulPostMintTransfers": false,
    "disablePoolCreation": false,
    "evmQueryChallenges": []
  },
  "aliasPathsToAdd": []
}
```

Set `manager: ''` for no manager. Permission values are then irrelevant because no one can execute them. Off-chain permission schemes (for example a multisig or a splitter in front of the manager address) are the application's business; the chain sees one address.

### Three States

| State | Meaning | Can change later |
| --- | --- | --- |
| Permanently permitted | Allowed at these times, frozen | no |
| Permanently forbidden | Blocked at these times, frozen | no |
| Neutral | Not listed | yes. Allowed by default now, can be set either way later. |

There is no "forbidden but changeable" state. It would be equivalent to permitted, because the manager could flip it and act in the same block.

```ts
// Lock deletion forever
const locked: CollectionPermissions<bigint> = {
  canDeleteCollection: [
    {
      permanentlyPermittedTimes: [],
      permanentlyForbiddenTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
    },
  ],
  canArchiveCollection: [],
  canUpdateStandards: [],
  canUpdateCustomData: [],
  canUpdateManager: [],
  canUpdateCollectionMetadata: [],
  canUpdateValidTokenIds: [],
  canUpdateTokenMetadata: [],
  canUpdateCollectionApprovals: [],
  canAddMoreAliasPaths: [],
  canAddMoreCosmosCoinWrapperPaths: [],
};

// Neutral: allowed now, can be locked later
const soft: CollectionPermissions<bigint> = {
  canDeleteCollection: [],
  canArchiveCollection: [],
  canUpdateStandards: [],
  canUpdateCustomData: [],
  canUpdateManager: [],
  canUpdateCollectionMetadata: [],
  canUpdateValidTokenIds: [],
  canUpdateTokenMetadata: [],
  canUpdateCollectionApprovals: [],
  canAddMoreAliasPaths: [],
  canAddMoreCosmosCoinWrapperPaths: [],
};
```

Once a time is permitted or forbidden, an update that tries to change it is rejected.

### First Match

The chain walks the array and applies the first element whose criteria match. Later elements are ignored for that combination, even if they say the opposite.

```text
For each request:
  find the first element whose criteria match the request
    no element matches         -> ALLOW (neutral)
    time in permanentlyPermittedTimes -> ALLOW
    time in permanentlyForbiddenTimes -> DENY
    otherwise                  -> ALLOW (neutral)
```

All criteria in an element must match. A partial match is no match.

```ts
const collectionPermissions: CollectionPermissions<bigint> = {
  canDeleteCollection: [],
  canArchiveCollection: [],
  canUpdateStandards: [],
  canUpdateCustomData: [],
  canUpdateManager: [],
  canUpdateCollectionMetadata: [],
  canUpdateValidTokenIds: [],
  canUpdateTokenMetadata: [
    {
      tokenIds: [
        { start: 1n, end: 10n },
      ],
      permanentlyPermittedTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
      permanentlyForbiddenTimes: [],
    },
  ],
  canUpdateCollectionApprovals: [],
  canAddMoreAliasPaths: [],
  canAddMoreCosmosCoinWrapperPaths: [],
};
```

This element covers token IDs 1-10 only. Token ID 11 is unhandled and therefore allowed by default.

### Brute Force to Lock

To forbid a specific slice, name it and set every other criterion to its full range so nothing slips past.

```ts
// Freeze approvals that touch token IDs 1-10
const collectionPermissions: CollectionPermissions<bigint> = {
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
      transferTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
      tokenIds: [
        { start: 1n, end: 10n },
      ],
      ownershipTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
      approvalId: 'All',
      permanentlyPermittedTimes: [],
      permanentlyForbiddenTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
    },
  ],
  canAddMoreAliasPaths: [],
  canAddMoreCosmosCoinWrapperPaths: [],
};
```

### Action Permissions

Time only.

```ts
// Forbidden forever
const a: CollectionPermissions<bigint> = {
  canDeleteCollection: [
    {
      permanentlyPermittedTimes: [],
      permanentlyForbiddenTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
    },
  ],
  canArchiveCollection: [],
  canUpdateStandards: [],
  canUpdateCustomData: [],
  canUpdateManager: [],
  canUpdateCollectionMetadata: [],
  canUpdateValidTokenIds: [],
  canUpdateTokenMetadata: [],
  canUpdateCollectionApprovals: [],
  canAddMoreAliasPaths: [],
  canAddMoreCosmosCoinWrapperPaths: [],
};

// Permitted only during 2024
const b: CollectionPermissions<bigint> = {
  canDeleteCollection: [
    {
      permanentlyPermittedTimes: [
        { start: 1704067200000n, end: 1735689600000n },
      ],
      permanentlyForbiddenTimes: [],
    },
  ],
  canArchiveCollection: [],
  canUpdateStandards: [],
  canUpdateCustomData: [],
  canUpdateManager: [],
  canUpdateCollectionMetadata: [],
  canUpdateValidTokenIds: [],
  canUpdateTokenMetadata: [],
  canUpdateCollectionApprovals: [],
  canAddMoreAliasPaths: [],
  canAddMoreCosmosCoinWrapperPaths: [],
};

// Neutral
const c: CollectionPermissions<bigint> = {
  canDeleteCollection: [],
  canArchiveCollection: [],
  canUpdateStandards: [],
  canUpdateCustomData: [],
  canUpdateManager: [],
  canUpdateCollectionMetadata: [],
  canUpdateValidTokenIds: [],
  canUpdateTokenMetadata: [],
  canUpdateCollectionApprovals: [],
  canAddMoreAliasPaths: [],
  canAddMoreCosmosCoinWrapperPaths: [],
};
```

### Token ID Action Permissions

Criteria: `tokenIds`. Used by `canUpdateValidTokenIds` and `canUpdateTokenMetadata`.

```text
For each token ID in the request:
  no element matches the ID -> ALLOW
  else apply the time check of the first match
```

```ts
// Lock metadata for IDs 1-100 forever
const a: CollectionPermissions<bigint> = {
  canDeleteCollection: [],
  canArchiveCollection: [],
  canUpdateStandards: [],
  canUpdateCustomData: [],
  canUpdateManager: [],
  canUpdateCollectionMetadata: [],
  canUpdateValidTokenIds: [],
  canUpdateTokenMetadata: [
    {
      tokenIds: [
        { start: 1n, end: 100n },
      ],
      permanentlyPermittedTimes: [],
      permanentlyForbiddenTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
    },
  ],
  canUpdateCollectionApprovals: [],
  canAddMoreAliasPaths: [],
  canAddMoreCosmosCoinWrapperPaths: [],
};

// Allow metadata updates for IDs 1-100 only during 2024
const b: CollectionPermissions<bigint> = {
  canDeleteCollection: [],
  canArchiveCollection: [],
  canUpdateStandards: [],
  canUpdateCustomData: [],
  canUpdateManager: [],
  canUpdateCollectionMetadata: [],
  canUpdateValidTokenIds: [],
  canUpdateTokenMetadata: [
    {
      tokenIds: [
        { start: 1n, end: 100n },
      ],
      permanentlyPermittedTimes: [
        { start: 1704067200000n, end: 1735689600000n },
      ],
      permanentlyForbiddenTimes: [],
    },
  ],
  canUpdateCollectionApprovals: [],
  canAddMoreAliasPaths: [],
  canAddMoreCosmosCoinWrapperPaths: [],
};

// Lock all valid token ID updates
const c: CollectionPermissions<bigint> = {
  canDeleteCollection: [],
  canArchiveCollection: [],
  canUpdateStandards: [],
  canUpdateCustomData: [],
  canUpdateManager: [],
  canUpdateCollectionMetadata: [],
  canUpdateValidTokenIds: [
    {
      tokenIds: [
        { start: 1n, end: 18446744073709551615n },
      ],
      permanentlyPermittedTimes: [],
      permanentlyForbiddenTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
    },
  ],
  canUpdateTokenMetadata: [],
  canUpdateCollectionApprovals: [],
  canAddMoreAliasPaths: [],
  canAddMoreCosmosCoinWrapperPaths: [],
};

// Lock IDs 1-100; leave later IDs neutral
const d: CollectionPermissions<bigint> = {
  canDeleteCollection: [],
  canArchiveCollection: [],
  canUpdateStandards: [],
  canUpdateCustomData: [],
  canUpdateManager: [],
  canUpdateCollectionMetadata: [],
  canUpdateValidTokenIds: [
    {
      tokenIds: [
        { start: 1n, end: 100n },
      ],
      permanentlyPermittedTimes: [],
      permanentlyForbiddenTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
    },
  ],
  canUpdateTokenMetadata: [],
  canUpdateCollectionApprovals: [],
  canAddMoreAliasPaths: [],
  canAddMoreCosmosCoinWrapperPaths: [],
};

// Permit adding IDs 101 and up forever
const e: CollectionPermissions<bigint> = {
  canDeleteCollection: [],
  canArchiveCollection: [],
  canUpdateStandards: [],
  canUpdateCustomData: [],
  canUpdateManager: [],
  canUpdateCollectionMetadata: [],
  canUpdateValidTokenIds: [
    {
      tokenIds: [
        { start: 101n, end: 18446744073709551615n },
      ],
      permanentlyPermittedTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
      permanentlyForbiddenTimes: [],
    },
  ],
  canUpdateTokenMetadata: [],
  canUpdateCollectionApprovals: [],
  canAddMoreAliasPaths: [],
  canAddMoreCosmosCoinWrapperPaths: [],
};
```

`canUpdateValidTokenIds` is checked only for IDs that are new to the collection.

### Approval Permissions

Criteria: the approval tuple `(fromListId, toListId, initiatedByListId, transferTimes, tokenIds, ownershipTimes, approvalId)`. Used by `canUpdateCollectionApprovals`, `canUpdateOutgoingApprovals` (no `fromListId`), and `canUpdateIncomingApprovals` (no `toListId`). An approval update matches an element when every part of the tuple overlaps.

```text
For each approval being added, changed, or removed:
  no element matches the tuple -> ALLOW
  else apply the time check of the first match
```

```ts
// Lock every approval that touches token IDs 1-100
const a: CollectionPermissions<bigint> = {
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
      transferTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
      tokenIds: [
        { start: 1n, end: 100n },
      ],
      ownershipTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
      approvalId: 'All',
      permanentlyPermittedTimes: [],
      permanentlyForbiddenTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
    },
  ],
  canAddMoreAliasPaths: [],
  canAddMoreCosmosCoinWrapperPaths: [],
};

// Lock one approval by ID
const b: CollectionPermissions<bigint> = {
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
      transferTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
      tokenIds: [
        { start: 1n, end: 18446744073709551615n },
      ],
      ownershipTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
      approvalId: 'specific-approval-id',
      permanentlyPermittedTimes: [],
      permanentlyForbiddenTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
    },
  ],
  canAddMoreAliasPaths: [],
  canAddMoreCosmosCoinWrapperPaths: [],
};

// Freeze all approvals
const c: CollectionPermissions<bigint> = {
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
      transferTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
      tokenIds: [
        { start: 1n, end: 18446744073709551615n },
      ],
      ownershipTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
      approvalId: 'All',
      permanentlyPermittedTimes: [],
      permanentlyForbiddenTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
    },
  ],
  canAddMoreAliasPaths: [],
  canAddMoreCosmosCoinWrapperPaths: [],
};
```

Three locking strategies: lock one approval by ID, lock a token range and every approval that overlaps it, or freeze everything. `approvalId: 'All'` in a permission matches every approval ID.

## Related

- [Transferability](transferability.md)
- [Minting and Supply](minting-and-supply.md)
- [Collections](collections.md)
- [MsgSetManager](../messages/msg-set-manager.md)
