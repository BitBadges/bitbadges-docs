---
description: "coinTransfers: move x/bank coins (BADGE, IBC coins, alias denoms) every time an approval is used, plus the mint escrow address that pays on behalf of Mint."
---

# Coin Transfers

`coinTransfers` executes `x/bank` sends every time the approval is used. It is how payments, payouts, and swaps ride on a token transfer.

## Shape

A complete `approvalCriteria` with the `coinTransfers` array open. Folded lines are defaults.

```json fold=2-44,55-106
{
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
  "coinTransfers": [
    {
      "to": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
      "coins": [
        { "amount": "1000000000", "denom": "ubadge" }
      ],
      "overrideFromWithApproverAddress": false,
      "overrideToWithInitiator": false
    }
  ],
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
  "mustPrioritize": true,
  "votingChallenges": [],
  "allowBackedMinting": false,
  "allowSpecialWrapping": false,
  "evmQueryChallenges": [],
  "userApprovalSettings": {
    "allowedDenoms": [],
    "disableUserCoinTransfers": false,
    "userRoyalties": { "percentage": "0", "payoutAddress": "" }
  }
}
```

```ts
interface iCoinTransfer<T extends NumberType> {
  to: string;
  coins: iCosmosCoin<T>[];
  overrideFromWithApproverAddress: boolean;
  overrideToWithInitiator: boolean;
}

interface iCosmosCoin<T extends NumberType> {
  amount: T;
  denom: string; // "ubadge", an IBC denom, or a badgeslp: alias denom
}
```

| Field | Type | Description |
| --- | --- | --- |
| `to` | string | Recipient. `"Mint"` resolves to the collection's mint escrow address. |
| `coins` | Coin[] | Amounts and denoms to send. Must not be empty. |
| `overrideFromWithApproverAddress` | bool | `false`: the initiator pays. `true`: the approval's owner pays. For a collection approval the owner is the mint escrow address. |
| `overrideToWithInitiator` | bool | `true`: send to the initiator instead of `to`. |

{% hint style="info" %}
Ask your agent: "Add a mint approval to collection 1 that charges 1000 BADGE per mint, paid to alice's address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d." The MCP builder tools (`add_approval, set_mint_escrow_coins`) produce the objects on this page.
{% endhint %}

## How It Works

For each entry, the chain sends `coins` from the payer to the recipient inside the transfer's transaction. If any send fails (for example insufficient balance), the whole transfer reverts.

Rules:

- The approval is no longer auto-scannable. Transfers must [prioritize](../concepts/prioritized-approvals.md) it.
- Denoms must be in the module's allowed denom list ([Params](../queries/params.md)). `badgeslp:` [Alias Denoms](../ibc/alias-denoms.md) are always allowed.
- An alias denom that points at the same collection as the approval is rejected. Route through another denom (for example USDC).
- With [amount scaling](predetermined-balances.md), every coin amount is multiplied by the transfer's multiplier.
- [Royalties](user-approval-settings.md) set by the collection are deducted from each coin before the remainder reaches `to`.

### Mint Escrow Address

`"Mint"` cannot hold coins. Each collection has a `mintEscrowAddress`, derived from the collection ID, that holds coins on its behalf. No one holds its key. Coins leave it only through collection approvals with `overrideFromWithApproverAddress: true`.

```ts
const mintEscrowAddress = generateAlias(
  'tokenization',
  getAliasDerivationKeysForCollection(collectionId)
);
```

Properties:

- Longer than a normal address; no private key.
- Can receive any `x/bank` coin.
- Only collection approvals move coins out of it.
- Read it from `TokenCollection.mintEscrowAddress`.

Fund it at creation with `mintEscrowCoinsToTransfer` on [MsgCreateCollection](../messages/msg-create-collection.md). The address depends on the collection ID, which is unknown before creation, so this field lets you escrow in the same transaction. A complete message with only the escrow lines open:

```json fold=3-170,174-183
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
  "mintEscrowCoinsToTransfer": [
    { "denom": "ubadge", "amount": "1000000" }
  ],
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

### Examples

Charge 1000 BADGE per mint, paid by the claimer to alice, the creator:

```json
{
  "coinTransfers": [
    {
      "to": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
      "coins": [
        { "amount": "1000000000", "denom": "ubadge" }
      ],
      "overrideFromWithApproverAddress": false,
      "overrideToWithInitiator": false
    }
  ]
}
```

Pay 1 USDC from the collection escrow to whoever redeems (a payout). `to` is ignored because `overrideToWithInitiator` is set:

```json
{
  "coinTransfers": [
    {
      "to": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
      "coins": [
        {
          "amount": "1000000",
          "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8"
        }
      ],
      "overrideFromWithApproverAddress": true,
      "overrideToWithInitiator": true
    }
  ]
}
```

## Related

- [User Approval Settings](user-approval-settings.md)
- [Predetermined Balances](predetermined-balances.md)
- [Minting and Supply](../concepts/minting-and-supply.md)
- [Alias Denoms](../ibc/alias-denoms.md)
