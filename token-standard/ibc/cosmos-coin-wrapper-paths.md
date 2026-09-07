---
description: "Wrapper paths burn native tokens into a generated badges:COLLECTION_ID:denom x/bank coin and back. Fields, conversion rates, {id} denoms, approvals."
---

# Cosmos coin wrapper paths

A wrapper path gives a collection a generated x/bank denom, `badges:<collectionId>:<denom>`, that is IBC-compatible. Sending tokens to the path's wrapper address burns them and mints the coin. Sending the coin back burns the coin and mints the tokens. The denom is new and generated; it is not an existing IBC denom (for that, see [Backed minting](backed-minting.md)).

Use cases:

- Keep tokens native for time-based logic, then convert them to plain Cosmos coins later.
- Reach chains and services that only understand x/bank coins (Osmosis, Juno, and others).

{% hint style="warning" %}
Wrapper addresses have no private key. Collection approvals must override the wrapper address's user-level approvals where needed, and every approval used for a wrap or unwrap must set `allowSpecialWrapping: true` in `approvalCriteria`. See [Special address flags](../approval-criteria/special-address-flags.md).
{% endhint %}

## Shape

A collection with one wrapper path and one alias path:

A complete `MsgCreateCollection` with both paths open:

```json fold=3-17,21-171,202-209
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
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
  "validTokenIds": [
    { "start": "1", "end": "100" }
  ],
  "collectionPermissions": {
    "canDeleteCollection": [],
    "canArchiveCollection": [],
    "canUpdateStandards": [],
    "canUpdateCustomData": [],
    "canUpdateManager": [],
    "canUpdateCollectionMetadata": [],
    "canUpdateValidTokenIds": [],
    "canUpdateTokenMetadata": [],
    "canUpdateCollectionApprovals": [],
    "canAddMoreAliasPaths": [],
    "canAddMoreCosmosCoinWrapperPaths": []
  },
  "manager": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionMetadata": {
    "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json",
    "customData": ""
  },
  "tokenMetadata": [
    {
      "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/{id}.json",
      "customData": "",
      "tokenIds": [
        { "start": "1", "end": "100" }
      ]
    }
  ],
  "customData": "",
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
  "standards": [
    "NFTs"
  ],
  "isArchived": false,
  "mintEscrowCoinsToTransfer": [],
  "cosmosCoinWrapperPathsToAdd": [
    {
      "denom": "utoken",
      "conversion": {
        "sideA": { "amount": "1" },
        "sideB": [
          {
            "amount": "1",
            "tokenIds": [
              { "start": "1", "end": "100" }
            ],
            "ownershipTimes": [
              { "start": "1", "end": "18446744073709551615" }
            ]
          }
        ]
      },
      "symbol": "TOKEN",
      "denomUnits": [
        {
          "decimals": "6",
          "symbol": "TOKEN",
          "isDefaultDisplay": true,
          "metadata": { "uri": "", "customData": "" }
        }
      ],
      "allowOverrideWithAnyValidToken": false,
      "metadata": { "uri": "", "customData": "" }
    }
  ],
  "invariants": {
    "noCustomOwnershipTimes": false,
    "maxSupplyPerId": "0",
    "cosmosCoinBackedPath": null,
    "noForcefulPostMintTransfers": false,
    "disablePoolCreation": false,
    "evmQueryChallenges": []
  },
  "aliasPathsToAdd": [
    {
      "denom": "utoken-alias",
      "conversion": {
        "sideA": { "amount": "1" },
        "sideB": [
          {
            "amount": "1",
            "tokenIds": [
              { "start": "1", "end": "100" }
            ],
            "ownershipTimes": [
              { "start": "1", "end": "18446744073709551615" }
            ]
          }
        ]
      },
      "symbol": "ALIAS",
      "denomUnits": [
        {
          "decimals": "6",
          "symbol": "ALIAS",
          "isDefaultDisplay": true,
          "metadata": { "uri": "", "customData": "" }
        }
      ],
      "metadata": { "uri": "", "customData": "" }
    }
  ]
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `denom` | string | yes | Base denom. Full x/bank denom becomes `badges:<collectionId>:<denom>`. May contain `{id}`. |
| `conversion` | `ConversionWithoutDenom` | yes | `sideA.amount` wrapped units = `sideB[]` token balances |
| `symbol` | string | yes | On-chain symbol used for identification. May contain `{id}`. |
| `denomUnits` | `DenomUnit[]` | no | Display units with `decimals`, `symbol`, `isDefaultDisplay`, optional `metadata` |
| `allowOverrideWithAnyValidToken` | bool | no | Accept any single valid token ID and override `sideB[].tokenIds` at transfer time |
| `metadata` | `PathMetadata` | no | `uri` and `customData` |
| `address` | string | derived | The wrapper address, generated from `denom`. Not present on alias paths. |

{% hint style="info" %}
Ask your agent: "Add a wrapper path to collection 1 with denom utoken and symbol TOKEN, plus the wrap and unwrap approvals it needs." The MCP builder tools (`add_cosmos_wrapper_path, generate_wrapper_address, add_approval`) produce the objects on this page.
{% endhint %}

## Wrapper paths versus alias paths

The chain keeps two separate path types.

Cosmos coin wrapper paths do real wrapping:

- Purpose: convert tokens to native Cosmos SDK coins and back.
- Behavior: tokens burn when wrapping and coins mint; coins burn when unwrapping and tokens mint.
- Use case: IBC transfers and Cosmos ecosystem compatibility.
- Storage: the `cosmosCoinWrapperPaths` array.
- Extra fields: `address` (the wrapper address) and `allowOverrideWithAnyValidToken`.

```json
{
  "denom": "utoken",
  "conversion": {
    "sideA": { "amount": "1" },
    "sideB": [
      {
        "amount": "1",
        "tokenIds": [
          { "start": "1", "end": "100" }
        ],
        "ownershipTimes": [
          { "start": "1", "end": "18446744073709551615" }
        ]
      }
    ]
  },
  "symbol": "TOKEN",
  "denomUnits": [
    {
      "decimals": "6",
      "symbol": "TOKEN",
      "isDefaultDisplay": true,
      "metadata": { "uri": "", "customData": "" }
    }
  ],
  "allowOverrideWithAnyValidToken": false,
  "metadata": { "uri": "", "customData": "" }
}
```

Alias paths do no wrapping:

- Purpose: alias denom support (`badgeslp:COLLECTION_ID:denom`).
- Behavior: no mint or burn; the alias is informational.
- Use case: liquidity pools and DeFi code that expects `sdk.Coin`.
- Storage: the `aliasPaths` array, separate from wrapper paths.
- No `address` and no `allowOverrideWithAnyValidToken` fields.

```json
{
  "denom": "utoken",
  "conversion": {
    "sideA": { "amount": "1" },
    "sideB": [
      {
        "amount": "1",
        "tokenIds": [
          { "start": "1", "end": "100" }
        ],
        "ownershipTimes": [
          { "start": "1", "end": "18446744073709551615" }
        ]
      }
    ]
  },
  "symbol": "TOKEN",
  "denomUnits": [
    {
      "decimals": "6",
      "symbol": "TOKEN",
      "isDefaultDisplay": true,
      "metadata": { "uri": "", "customData": "" }
    }
  ],
  "metadata": { "uri": "", "customData": "" }
}
```

See [Alias denoms](alias-denoms.md) for the alias side.

## Wrapper address generation

The wrapper address derives from the base denom only, not from the full `badges:collectionId:denom` string.

```ts
import { generateAliasAddressForDenom } from 'bitbadges';

const denom = 'utoken';
const wrapperAddress = generateAliasAddressForDenom(denom);
console.log('Wrapper Address:', wrapperAddress);
```

## Conversion structure

Wrapper paths and alias paths both use `ConversionWithoutDenom`. The denom is stored at the path level, which is why the type carries "WithoutDenom".

```json fold=17-27
{
  "denom": "utoken",
  "conversion": {
    "sideA": { "amount": "1" },
    "sideB": [
      {
        "amount": "1",
        "tokenIds": [
          { "start": "1", "end": "100" }
        ],
        "ownershipTimes": [
          { "start": "1", "end": "18446744073709551615" }
        ]
      }
    ]
  },
  "symbol": "TOKEN",
  "denomUnits": [
    {
      "decimals": "6",
      "symbol": "TOKEN",
      "isDefaultDisplay": true,
      "metadata": { "uri": "", "customData": "" }
    }
  ],
  "allowOverrideWithAnyValidToken": false,
  "metadata": { "uri": "", "customData": "" }
}
```

- `sideA.amount` is the number of wrapped or alias units. It is required and cannot be `"0"` or nil.
- `sideB` is the `Balance[]` that takes part in the conversion.
- Rate: `sideA.amount` wrapped units = `sideB[]` tokens.

With `sideA.amount = "1"` and `sideB = [{ amount: 1n, ... }]`, one wrapped coin equals one token (1:1). With `sideA.amount = "100"` and the same `sideB`, 100 wrapped coins equal one token (100:1).

## Configuration fields

### Denom

The full Cosmos denom is `badges:collectionId:denom`. `badges:` is the wrapper prefix; `badgeslp:` is the alias prefix.

```json fold=3-27
{
  "denom": "utoken",
  "conversion": {
    "sideA": { "amount": "1" },
    "sideB": [
      {
        "amount": "1",
        "tokenIds": [
          { "start": "1", "end": "100" }
        ],
        "ownershipTimes": [
          { "start": "1", "end": "18446744073709551615" }
        ]
      }
    ]
  },
  "symbol": "TOKEN",
  "denomUnits": [
    {
      "decimals": "6",
      "symbol": "TOKEN",
      "isDefaultDisplay": true,
      "metadata": { "uri": "", "customData": "" }
    }
  ],
  "allowOverrideWithAnyValidToken": false,
  "metadata": { "uri": "", "customData": "" }
}
```

### Conversion

```json fold=17-27
{
  "denom": "utoken",
  "conversion": {
    "sideA": { "amount": "1" },
    "sideB": [
      {
        "amount": "1",
        "tokenIds": [
          { "start": "1", "end": "100" }
        ],
        "ownershipTimes": [
          { "start": "1", "end": "18446744073709551615" }
        ]
      }
    ]
  },
  "symbol": "TOKEN",
  "denomUnits": [
    {
      "decimals": "6",
      "symbol": "TOKEN",
      "isDefaultDisplay": true,
      "metadata": { "uri": "", "customData": "" }
    }
  ],
  "allowOverrideWithAnyValidToken": false,
  "metadata": { "uri": "", "customData": "" }
}
```

Rate: `conversion.sideA.amount` wrapped coin = `conversion.sideB[]` tokens.

### Denom units

Several display units can describe the same base unit.

```json fold=2-17,32-33
{
  "denom": "utoken",
  "conversion": {
    "sideA": { "amount": "1" },
    "sideB": [
      {
        "amount": "1",
        "tokenIds": [
          { "start": "1", "end": "100" }
        ],
        "ownershipTimes": [
          { "start": "1", "end": "18446744073709551615" }
        ]
      }
    ]
  },
  "symbol": "TOKEN",
  "denomUnits": [
    {
      "decimals": "3",
      "symbol": "mtoken",
      "isDefaultDisplay": false,
      "metadata": { "uri": "", "customData": "" }
    },
    {
      "decimals": "6",
      "symbol": "TOKEN",
      "isDefaultDisplay": true,
      "metadata": { "uri": "", "customData": "" }
    }
  ],
  "allowOverrideWithAnyValidToken": false,
  "metadata": { "uri": "", "customData": "" }
}
```

- `utoken` is the base unit (0 decimals).
- `mtoken` is 1,000 `utoken` (3 decimals).
- `TOKEN` is 1,000,000 `utoken` (6 decimals, default display).

Each `DenomUnit` carries an optional `metadata` field of type `PathMetadata`.

### Allow override with any valid token

When `true`, the wrapper accepts any single token ID inside the collection's `validTokenIds`.

```json fold=17-25
{
  "denom": "utoken",
  "conversion": {
    "sideA": { "amount": "1" },
    "sideB": [
      {
        "amount": "1",
        "tokenIds": [
          { "start": "1", "end": "1" }
        ],
        "ownershipTimes": [
          { "start": "1", "end": "18446744073709551615" }
        ]
      }
    ]
  },
  "symbol": "TOKEN",
  "denomUnits": [
    {
      "decimals": "6",
      "symbol": "TOKEN",
      "isDefaultDisplay": true,
      "metadata": { "uri": "", "customData": "" }
    }
  ],
  "allowOverrideWithAnyValidToken": true,
  "metadata": { "uri": "", "customData": "" }
}
```

1. A user transfers token ID 5 to the wrapper.
2. The chain checks that token ID 5 is in `validTokenIds`.
3. The chain replaces `conversion.sideB[].tokenIds` with `[{ start: 5n, end: 5n }]` for this transfer and ignores the stored values.
4. The conversion proceeds with token ID 5.

### `{id}` placeholder

`{id}` in `denom` or `symbol` is replaced by the actual token ID.

```json fold=3-16,18-25
{
  "denom": "utoken{id}",
  "conversion": {
    "sideA": { "amount": "1" },
    "sideB": [
      {
        "amount": "1",
        "tokenIds": [
          { "start": "1", "end": "1" }
        ],
        "ownershipTimes": [
          { "start": "1", "end": "18446744073709551615" }
        ]
      }
    ]
  },
  "symbol": "TOKEN:{id}",
  "denomUnits": [
    {
      "decimals": "6",
      "symbol": "TOKEN",
      "isDefaultDisplay": true,
      "metadata": { "uri": "", "customData": "" }
    }
  ],
  "allowOverrideWithAnyValidToken": true,
  "metadata": { "uri": "", "customData": "" }
}
```

Transferring token ID 5 produces the denom `utoken5`.

### Metadata

```json fold=2-26
{
  "denom": "utoken",
  "conversion": {
    "sideA": { "amount": "1" },
    "sideB": [
      {
        "amount": "1",
        "tokenIds": [
          { "start": "1", "end": "100" }
        ],
        "ownershipTimes": [
          { "start": "1", "end": "18446744073709551615" }
        ]
      }
    ]
  },
  "symbol": "TOKEN",
  "denomUnits": [
    {
      "decimals": "6",
      "symbol": "TOKEN",
      "isDefaultDisplay": true,
      "metadata": { "uri": "", "customData": "" }
    }
  ],
  "allowOverrideWithAnyValidToken": false,
  "metadata": {
    "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/path.json",
    "customData": "{\"key\": \"value\"}"
  }
}
```

The hosted JSON is usually `{ name, image, description }`; the image is the main use. The on-chain `symbol` identifies the path, not the metadata name. Metadata is optional on the path and on each `DenomUnit`.

## Transferability requirements

A wrapper address follows the same approval rules as any other address. You can gate by user, rate-limit, or apply any criteria.

```ts
// Example: Rate-limited wrapping
const collectionApprovals = [
    {
        fromListId: 'AllWithoutMint',
        toListId: wrapperAddress,
        initiatedByListId: 'All',
        transferTimes: [{ start: 1n, end: 18446744073709551615n }],
        tokenIds: [{ start: 1n, end: 100n }],
        ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
        approvalId: 'wrap-approval',
        version: 0n,
        approvalCriteria: {
            allowSpecialWrapping: true, // Required for wrapper path operations
            mustPrioritize: true, // Chain-enforced: required for allowSpecialWrapping
            maxNumTransfers: {
                overallMaxNumTransfers: 0n,
                perToAddressMaxNumTransfers: 0n,
                perFromAddressMaxNumTransfers: 0n,
                perInitiatedByAddressMaxNumTransfers: 10n, // 10 wraps per day
                amountTrackerId: 'wrap-daily',
                resetTimeIntervals: { startTime: 1788739200000n, intervalLength: 86400000n },
            },
        },
    },
    {
        fromListId: wrapperAddress,
        toListId: 'All',
        initiatedByListId: 'All',
        transferTimes: [{ start: 1n, end: 18446744073709551615n }],
        tokenIds: [{ start: 1n, end: 100n }],
        ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
        approvalId: 'unwrap-approval',
        version: 0n,
        approvalCriteria: {
            allowSpecialWrapping: true, // Required for wrapper path operations
            mustPrioritize: true, // Chain-enforced: required for allowSpecialWrapping
            // Override wrapper's outgoing approvals (wrapper is the sender for unwrapping)
            overridesFromOutgoingApprovals: true,
        },
    },
];
```

## Conversion process

### Token to coin (wrapping)

1. The user transfers tokens to the wrapper address.
2. The chain processes the denom (replaces `{id}`, validates the override if enabled).
3. The chain burns the tokens from the user's balance.
4. The chain mints the equivalent native coins.
5. The coins are credited to the user's account.

```ts
// Wrapping tokens
// Wrapping/unwrapping requires prioritized approvals (not compatible with auto-scan mode)
const wrapTokens: MsgTransferTokens = {
    creator: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue',
    collectionId: '1',
    transfers: [
        {
            from: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue',
            toAddresses: [wrapperAddress],
            balances: [
                {
                    amount: 10n,
                    tokenIds: [{ start: 1n, end: 100n }],
                    ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
                },
            ],
            prioritizedApprovals: [
                {
                    approvalId: 'wrap-approval',
                    approvalLevel: 'collection',
                    approverAddress: '',
                    version: 0n,
                },
            ],
            onlyCheckPrioritizedCollectionApprovals: true,
        },
    ],
};

// Result: User receives 10 badges:1:utoken coins (based on conversion.sideA.amount = 1)
// 10 tokens are burned (based on conversion.sideB balances)
```

### Coin to token (unwrapping)

Unwrapping also uses `MsgTransferTokens`. The user initiates a transfer on behalf of the wrapper address.

1. The user submits `MsgTransferTokens` with the wrapper address as `from`.
2. The chain processes the denom (replaces `{id}`, validates the override if enabled).
3. The chain burns the native coins from the wrapper address.
4. The chain mints the equivalent tokens.
5. The tokens are credited to the user's balance.

```ts
// Unwrapping coins
// Wrapping/unwrapping requires prioritized approvals (not compatible with auto-scan mode)
// You initiate a transfer on behalf of the wrapper address
const unwrapCoins: MsgTransferTokens = {
    creator: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue',
    collectionId: '1',
    transfers: [
        {
            from: wrapperAddress, // Transfer from wrapper address
            toAddresses: ['bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'], // To user
            balances: [
                {
                    amount: 10n,
                    tokenIds: [{ start: 1n, end: 100n }],
                    ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
                },
            ],
            prioritizedApprovals: [
                {
                    approvalId: 'unwrap-approval',
                    approvalLevel: 'collection',
                    approverAddress: '',
                    version: 0n,
                },
            ],
            onlyCheckPrioritizedCollectionApprovals: true,
        },
    ],
};

// Result: User receives 10 tokens (based on conversion.sideB balances)
// 10 badges:1:utoken coins are burned from wrapper address (based on conversion.sideA.amount = 1)
```

## Use cases

### IBC transfers

Wrap, then send the x/bank coin over ICS-20.

```ts
// Wrap tokens for IBC transfer
// Requires prioritized approvals
// The conversion rate is defined in the wrapper path's conversion field
const wrapForIBC: MsgTransferTokens = {
    creator: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue',
    collectionId: '1',
    transfers: [
        {
            from: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue',
            toAddresses: [wrapperAddress],
            balances: [
                {
                    amount: 100n,
                    tokenIds: [{ start: 1n, end: 100n }],
                    ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
                },
            ],
            prioritizedApprovals: [
                {
                    approvalId: 'wrap-approval',
                    approvalLevel: 'collection',
                    approverAddress: '',
                    version: 0n,
                },
            ],
            onlyCheckPrioritizedCollectionApprovals: true,
        },
    ],
};

// Transfer wrapped coins via IBC
const ibcTransfer = {
    sourcePort: 'transfer',
    sourceChannel: 'channel-0',
    token: {
        denom: 'badges:1:utoken',
        amount: '100',
    },
    sender: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue',
    receiver: 'cosmos1py4mfpg6uf59qkyzg0nmau322c5873ee8df8qg',
};
```

### DeFi integration

```ts
// Add wrapped tokens to liquidity pool
const addLiquidity = {
    poolId: '1',
    sender: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue',
    tokenInMaxs: [
        {
            denom: 'badges:1:utoken',
            amount: '1000000',
        },
        {
            denom: 'uatom',
            amount: '500000',
        },
    ],
};
```

## Permission control

The `canAddMoreCosmosCoinWrapperPaths` collection permission controls when the manager may add wrapper paths. It is an `ActionPermission` with time-based controls.

- Empty or nil means adding paths is allowed (neutral state).
- Collections migrated from v21 have empty permissions, so adding paths is allowed by default.

Allow at all times:

```ts
// Empty = allowed by default
const collectionPermissions: CollectionPermissions<bigint> = {
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

Explicitly permit forever:

```ts
const collectionPermissions: CollectionPermissions<bigint> = {
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
  canAddMoreCosmosCoinWrapperPaths: [
    {
      permanentlyPermittedTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
      permanentlyForbiddenTimes: [],
    },
  ],
};
```

Lock forever:

```ts
const collectionPermissions: CollectionPermissions<bigint> = {
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
  canAddMoreCosmosCoinWrapperPaths: [
    {
      permanentlyPermittedTimes: [],
      permanentlyForbiddenTimes: [
        { start: 1n, end: 18446744073709551615n },
      ],
    },
  ],
};
```

Allow only during a window:

```ts
const collectionPermissions: CollectionPermissions<bigint> = {
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
  canAddMoreCosmosCoinWrapperPaths: [
    {
      permanentlyPermittedTimes: [
        { start: 1704067200000n, end: 1735689600000n },
      ],
      permanentlyForbiddenTimes: [],
    },
  ],
};
```

When `MsgUniversalUpdateCollection` carries `cosmosCoinWrapperPathsToAdd`, the chain checks `canAddMoreCosmosCoinWrapperPaths` before it processes the paths. A failed check rejects the transaction. The check happens before the paths are added, but the permission itself can still be updated at the end of the same transaction when `updateCollectionPermissions` is `true`. Paths can be added but never edited.

## Differences from backed paths

| Feature | Wrapper path | Backed path |
| --- | --- | --- |
| Minting | Mints and burns a new denom | No mint or burn; uses an existing IBC denom |
| Denom source | Generated | Existing IBC denom |
| Configuration | Paths can be added, never edited | Collection invariant, set once |
| Mint address | Enabled | Disabled |

## Related

- [Wrap to an IBC denom](../../guides/wrap-to-an-ibc-denom.md)
- [Backed minting](backed-minting.md)
- [Special address flags](../approval-criteria/special-address-flags.md)
- [MsgTransferTokens](../messages/msg-transfer-tokens.md)
