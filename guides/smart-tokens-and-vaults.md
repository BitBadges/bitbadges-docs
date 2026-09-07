---
description: "Issue a BitBadges smart token backed 1:1 by an IBC coin, add withdraw limits and 2FA, and give an AI agent a USDC vault it can deposit to and withdraw from."
---

# Smart Tokens and Vaults

At the end you have a smart token backed 1:1 by USDC (or another IBC coin), rules on withdrawals, and, if you want one, an AI agent that deposits and withdraws from its vault with the SDK.

A smart token uses the `cosmosCoinBackedPath` invariant: a keyless backing address holds the IBC coin, and tokens are created and destroyed only by moving through that address. See [Backed Minting](../token-standard/ibc/backed-minting.md). A vault is a smart token with no transferable approval, so tokens never move between users.

Think in three phases, each mapped to its own approval:

1. Deposits (backing): users send IBC coins to the backing address and receive tokens 1:1. The on-ramp.
2. Transferability while backed: may holders transfer peer-to-peer? Yes for wrapped assets, no for vaults and escrows.
3. Withdrawals (unbacking): users send tokens to the backing address and receive the coins 1:1. Rate limits, 2FA, and other controls go here.

## 1. Build the Collection

### bb CLI

```bash
# Wrapped asset: transferable, optionally tradable on the DEX
bb build smart-token --backing-coin USDC --symbol wUSDC \
  --name "Wrapped USDC" --image ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/wusdc.png --description "1:1 USDC" \
  --explain

# Vault with rules
bb build vault --backing-coin USDC \
  --name "My Vault" \
  --symbol vUSDC \
  --daily-withdraw-limit 1000 \
  --require-2fa 74 \
  --emergency-recovery bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf \
  --image ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/vault.png --description "Agent spending vault" \
  | bb deploy --browser
```

`bb build smart-token`:

| Flag | Required | Description |
| --- | --- | --- |
| `--backing-coin <symbol>` | Yes | `USDC`, `BADGE`, `ATOM`, or `OSMO` |
| `--symbol <symbol>` | No | Display symbol (default `v<backing>`) |
| `--tradable` | No | Adds the `Liquidity Pools` standard so the token can trade in pools |
| `--ai-agent-vault` | No | Adds the `AI Agent Vault` standard (display hint only) |
| `--allow-forceful-transfers` | No | Allow forceful post-mint transfers. Default off, the safe setting for vault-like tokens |

`bb build vault`:

| Flag | Required | Description |
| --- | --- | --- |
| `--backing-coin <symbol>` | Yes | `USDC`, `BADGE`, `ATOM`, or `OSMO` |
| `--symbol <symbol>` | No | Display symbol, for example `vUSDC` |
| `--daily-withdraw-limit <n>` | No | Max daily withdrawal in display units |
| `--require-2fa <collectionId>` | No | 2FA collection whose token the withdrawer must hold |
| `--emergency-recovery <address>` | No | Recovery address for emergency migration |

Both accept `--uri` or `--name` + `--image` + `--description` for metadata, plus the shared `--creator`, `--manager`, `--explain`, `--simulate`, `--json`, `--browser`, and `--burner` flags. See [Build](../cli/build.md). The 2FA collection itself comes from `bb build custom-2fa`; see [Standards Commands](../cli/standards.md).

The BitBadges site's Create tab also has a Smart Token flow with the same options, including an "AI Agent Vault" checkbox that adds an AI Prompt tab to the token page.

{% hint style="info" %}
**Ask your agent.** With the MCP builder tools installed, paste one of these:

- "Build a smart token backed 1:1 by USDC called Wrapped USDC, transferable, with an alias path, and give me the review link."
- "Build an AI agent vault backed by USDC with a 1,000 USDC daily withdraw limit and 2FA from collection 74, run the review, and flag anything risky."
{% endhint %}

### Raw JSON

Required structure:

- `standards` includes `"Smart Token"`. Add `"AI Agent Vault"` for the AI Prompt tab (display-only). Add `"Liquidity Pools"` and set `invariants.disablePoolCreation: false` for DEX trading, which also needs an alias path and a transferable approval.
- `invariants.cosmosCoinBackedPath` with `conversion.sideA` (the IBC coin) and `conversion.sideB` (the token).
- At least one alias path whose decimals match the IBC denom's decimals.
- No `fromListId: "Mint"` approvals. Tokens are created by backing, not by minting.
- `noForcefulPostMintTransfers: true` unless you need forceful transfers.

```json
{
  "standards": ["Smart Token"],
  "invariants": {
    "noCustomOwnershipTimes": false,
    "maxSupplyPerId": "0",
    "cosmosCoinBackedPath": {
      "conversion": {
        "sideA": {
          "amount": "1",
          "denom": "ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701"
        },
        "sideB": [
          {
            "amount": "1",
            "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
            "tokenIds": [{ "start": "1", "end": "1" }]
          }
        ]
      }
    },
    "noForcefulPostMintTransfers": true,
    "disablePoolCreation": false,
    "evmQueryChallenges": []
  }
}
```

Backing approval (deposits). `fromListId` is the backing address (`bb146hj5s6rf3f8e09cvdxs8uqz3auvlmeghwf8phtmj3pjtj49ndcs3rfdup` for this ATOM denom, derived below), never `"All"` or `"Mint"`:

```json fold=11-20,22-40,42-48,50-55,57-93,97-101
{
  "fromListId": "bb146hj5s6rf3f8e09cvdxs8uqz3auvlmeghwf8phtmj3pjtj49ndcs3rfdup",
  "toListId": "!bb146hj5s6rf3f8e09cvdxs8uqz3auvlmeghwf8phtmj3pjtj49ndcs3rfdup",
  "initiatedByListId": "All",
  "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "tokenIds": [{ "start": "1", "end": "1" }],
  "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "uri": "",
  "customData": "",
  "approvalId": "smart-token-backing",
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
        "recurringOwnershipTimes": { "startTime": "0", "intervalLength": "0", "chargePeriodLength": "0" },
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
    "mustPrioritize": true,
    "votingChallenges": [],
    "allowBackedMinting": true,
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
```

Transferable approval (optional; include for wrapped assets, omit for vaults and escrows):

```json fold=11-20,22-40,42-48,50-101
{
  "fromListId": "!Mint",
  "toListId": "All",
  "initiatedByListId": "All",
  "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "tokenIds": [{ "start": "1", "end": "18446744073709551615" }],
  "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "uri": "",
  "customData": "",
  "approvalId": "transferable-approval",
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
        "recurringOwnershipTimes": { "startTime": "0", "intervalLength": "0", "chargePeriodLength": "0" },
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
    "overridesFromOutgoingApprovals": false,
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
```

Unbacking approval (withdrawals). `!Mint:bb146hj5s6rf3f8e09cvdxs8uqz3auvlmeghwf8phtmj3pjtj49ndcs3rfdup` means everyone except Mint and the backing address, so only regular holders can unback:

```json fold=11-20,22-40,42-48,50-93,97-101
{
  "fromListId": "!Mint:bb146hj5s6rf3f8e09cvdxs8uqz3auvlmeghwf8phtmj3pjtj49ndcs3rfdup",
  "toListId": "bb146hj5s6rf3f8e09cvdxs8uqz3auvlmeghwf8phtmj3pjtj49ndcs3rfdup",
  "initiatedByListId": "All",
  "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "tokenIds": [{ "start": "1", "end": "1" }],
  "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "uri": "",
  "customData": "",
  "approvalId": "smart-token-unbacking",
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
        "recurringOwnershipTimes": { "startTime": "0", "intervalLength": "0", "chargePeriodLength": "0" },
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
    "overridesFromOutgoingApprovals": false,
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
    "allowBackedMinting": true,
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
```

Both backing approvals need `allowBackedMinting: true` and `mustPrioritize: true`; without `mustPrioritize` the chain cannot match the approval and the transfer fails. The backing address is protocol-controlled with auto-set approvals, so `overridesFromOutgoingApprovals` is irrelevant on the backing approval (`true` is fine as good practice) and must be `false` on the unbacking approval, whose sender is a regular user.

The backing address is deterministic from the IBC denom:

```ts
import { generateAliasAddressForIBCBackedDenom } from 'bitbadges';

const backingAddress = generateAliasAddressForIBCBackedDenom('ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701');
console.log(backingAddress); // bb146hj5s6rf3f8e09cvdxs8uqz3auvlmeghwf8phtmj3pjtj49ndcs3rfdup

// Canonical USDC: bb1xx5h3l85tnxgj07vef2cjtqzpg2qc9jt52z2q0lptjasajez3cgs5hklra
console.log(generateAliasAddressForIBCBackedDenom('ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8'));
```

The MCP builder tools expose the same derivation as `generate_backing_address`; see [MCP tools](../agents/mcp-tools.md).

Alias path. `symbol` on the path is the base unit; `denomUnits` lists display units with decimals greater than 0; the base unit's 0 decimals is implicit. The alias denom and symbol may contain only `a-zA-Z`, `_`, `{`, `}`, and `-`, never the raw `ibc/...` denom, and never a reserved symbol such as `USDC` or `ATOM` (prefix with `w`, for example `wUSDC`).

```json
{
  "aliasPathsToAdd": [
    {
      "denom": "uvatom",
      "conversion": {
        "sideA": { "amount": "1" },
        "sideB": [
          {
            "amount": "1",
            "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
            "tokenIds": [{ "start": "1", "end": "1" }]
          }
        ]
      },
      "symbol": "uvatom",
      "denomUnits": [
        {
          "decimals": "6",
          "symbol": "vATOM",
          "isDefaultDisplay": true,
          "metadata": {
            "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/alias-uvatom-unit.json",
            "customData": ""
          }
        }
      ],
      "metadata": {
        "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/alias-uvatom.json",
        "customData": ""
      }
    }
  ]
}
```

Every metadata field on the chain (collection, token, alias path, denom unit) is `{ uri, customData }` and nothing else. The examples above use hosted URIs. The AI builder uses placeholder URIs (`ipfs://METADATA_COLLECTION`, `ipfs://METADATA_TOKEN_<id>`, `ipfs://METADATA_ALIAS_<denom>`, `ipfs://METADATA_ALIAS_<denom>_UNIT`) and registers the real name, description, and image in a `metadataPlaceholders` sidecar keyed by those URIs; after deploy the auto-apply flow uploads the JSON and substitutes real URIs. Write real user-facing descriptions for each approval, not labels like "Backing Approval".

To wrap a native Cosmos SDK coin (not an IBC coin) alongside, add `cosmosCoinWrapperPathsToAdd` with `allowSpecialWrapping: true` on its approvals; see [Wrap to an IBC Denom](wrap-to-an-ibc-denom.md).

```json
{
  "cosmosCoinWrapperPathsToAdd": [
    {
      "denom": "uatom",
      "conversion": {
        "sideA": { "amount": "1" },
        "sideB": [
          {
            "amount": "1",
            "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
            "tokenIds": [{ "start": "1", "end": "1" }]
          }
        ]
      },
      "symbol": "uatom",
      "denomUnits": [
        {
          "decimals": "6",
          "symbol": "ATOM",
          "isDefaultDisplay": true,
          "metadata": {
            "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/wrapper-uatom-unit.json",
            "customData": ""
          }
        }
      ],
      "allowOverrideWithAnyValidToken": false,
      "metadata": {
        "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/wrapper-uatom.json",
        "customData": ""
      }
    }
  ]
}
```

## 2. Add Withdrawal Rules

Rules live in the unbacking approval's criteria. The chain enforces them; an agent cannot bypass them whatever code it runs.

| Rule | Criteria |
| --- | --- |
| Daily spending limit | `approvalAmounts` with `resetTimeIntervals` |
| Recipient allowlist | `toListId` pointing to an address list |
| Transaction rate limit | `maxNumTransfers` with `resetTimeIntervals` |
| 2FA or human approval above a threshold | `mustOwnTokens` on a 2FA collection, or ETH signature challenges |
| Emergency freeze | a locked `canUpdateCollectionApprovals` permission |

Daily limit of 1 USDC (1,000,000 base units) per sender, resetting every 24 hours (`"86400000"` ms). For a total cap instead, use `overallApprovalAmount` with `intervalLength: "0"`. `amountTrackerId` must be unique per approval. The unbacking approval of a USDC vault with that rule (backing address `bb1xx5h3l85tnxgj07vef2cjtqzpg2qc9jt52z2q0lptjasajez3cgs5hklra`):

```json fold=11-20,22-37,42-48,50-93,97-101
{
  "fromListId": "!Mint:bb1xx5h3l85tnxgj07vef2cjtqzpg2qc9jt52z2q0lptjasajez3cgs5hklra",
  "toListId": "bb1xx5h3l85tnxgj07vef2cjtqzpg2qc9jt52z2q0lptjasajez3cgs5hklra",
  "initiatedByListId": "All",
  "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "tokenIds": [{ "start": "1", "end": "1" }],
  "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "uri": "",
  "customData": "",
  "approvalId": "smart-token-unbacking",
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
        "recurringOwnershipTimes": { "startTime": "0", "intervalLength": "0", "chargePeriodLength": "0" },
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
      "perFromAddressApprovalAmount": "1000000",
      "perInitiatedByAddressApprovalAmount": "0",
      "amountTrackerId": "daily-withdraw-limit",
      "resetTimeIntervals": { "startTime": "0", "intervalLength": "86400000" }
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
    "overridesFromOutgoingApprovals": false,
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
    "allowBackedMinting": true,
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
```

2FA on withdrawal. The initiator must hold a token from collection 74 at the current time (`overrideWithCurrentTime: true` matters for expiring 2FA tokens). The same unbacking approval with that rule instead:

```json fold=11-20,22-40,42-48,50-63,73-103,107-111
{
  "fromListId": "!Mint:bb1xx5h3l85tnxgj07vef2cjtqzpg2qc9jt52z2q0lptjasajez3cgs5hklra",
  "toListId": "bb1xx5h3l85tnxgj07vef2cjtqzpg2qc9jt52z2q0lptjasajez3cgs5hklra",
  "initiatedByListId": "All",
  "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "tokenIds": [{ "start": "1", "end": "1" }],
  "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "uri": "",
  "customData": "",
  "approvalId": "smart-token-unbacking",
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
        "recurringOwnershipTimes": { "startTime": "0", "intervalLength": "0", "chargePeriodLength": "0" },
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
    "overridesFromOutgoingApprovals": false,
    "overridesToIncomingApprovals": false,
    "autoDeletionOptions": {
      "afterOneUse": false,
      "afterOverallMaxNumTransfers": false,
      "allowCounterpartyPurge": false,
      "allowPurgeIfExpired": false
    },
    "mustOwnTokens": [
      {
        "collectionId": "74",
        "amountRange": { "start": "1", "end": "18446744073709551615" },
        "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
        "tokenIds": [{ "start": "1", "end": "18446744073709551615" }],
        "overrideWithCurrentTime": true,
        "mustSatisfyForAllAssets": false,
        "ownershipCheckParty": "initiator"
      }
    ],
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
    "allowBackedMinting": true,
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
```

See [Approval Trackers](../token-standard/approval-criteria/approval-trackers.md) and [Token Ownership](../token-standard/approval-criteria/token-ownership.md).

## 3. Deposit and Withdraw

### bb CLI

```bash
bb smart-tokens list                                   # collections passing the conformance validator
bb smart-tokens show 4                                 # backing address, denom, deposit/withdraw approval ids, standards
bb smart-tokens status 4                               # backing denom, tradable and aiAgentVault flags

bb smart-tokens deposit 4 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 10 | bb deploy --browser
bb smart-tokens withdraw 4 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 5 | bb deploy --browser
```

`--amount` is in display units (10 USDC becomes 10 token units backed by 10 USDC); `--base-units` passes raw base units. The caller must hold the backing coin to deposit and the token units to withdraw; the chain routes the coin into and out of the backing alias as the approval fires. Both commands accept `--browser` inline.

### Depositing or Withdrawing for Someone Else

Backing approvals require the initiator to be the recipient on deposit and the sender on withdrawal. To act for another address, batch two messages in one transaction:

- Deposit to another address: `MsgTransferTokens` from the backing address to yourself, then `MsgTransferTokens` from yourself to the target through the transferable approval.
- Withdraw for another address: `MsgTransferTokens` from yourself to the backing address, then a bank `MsgSend` of the released coins to the target (`bb build send`).

## 4. Give an AI Agent a Vault

The agent holds vault tokens. To spend, it withdraws (unbacks) by sending tokens to the backing address; the protocol releases USDC to the agent's account.

```
Your AI agent (OpenClaw, LangChain, custom, ...)
    |
    +-- Wallet (Cosmos or EVM key pair)
    |
    +-- BitBadges smart token vault
         +-- 1:1 USDC backing
         +-- Spending rules (limits, allowlists, 2FA, ...)
         +-- Withdraw via MsgTransferTokens
```

### Create the Vault

Use `bb build vault` from step 1, or the site's Create tab with the AI Agent Vault option. Note the collection ID. `bb smart-tokens show 4` prints the backing address and the deposit and withdraw approval IDs; the token page's AI Prompt tab prints the same values as a ready-made prompt (collection ID, token name, backing address, denom, approval IDs and versions, step-by-step deposit and withdraw instructions). Give that prompt to the agent as system context.

### Set Up the Agent Wallet

EVM wallet from a mnemonic (recommended server-side):

```ts
import { BitBadgesSigningClient, GenericEvmAdapter, NETWORK_CONFIGS } from 'bitbadges';

// Store this mnemonic securely (env var, secret manager, etc.)
const adapter = await GenericEvmAdapter.fromMnemonic(
  process.env.AGENT_MNEMONIC!, // 12 or 24 word mnemonic
  NETWORK_CONFIGS['mainnet'].evmRpcUrl // 'https://evm-rpc.bitbadges.io'
);

const client = new BitBadgesSigningClient({
  adapter,
  network: 'mainnet'
});

console.log('Agent address:', client.address); // 0x...
```

EVM wallet from a private key:

```ts
import { GenericEvmAdapter, NETWORK_CONFIGS } from 'bitbadges';

const adapter = await GenericEvmAdapter.fromPrivateKey(
  process.env.AGENT_PRIVATE_KEY!, // hex private key (with or without 0x prefix)
  NETWORK_CONFIGS['mainnet'].evmRpcUrl
);

const client = new BitBadgesSigningClient({ adapter });
```

Cosmos wallet:

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(
  process.env.AGENT_MNEMONIC!,
  'bitbadges-1' // mainnet chain ID
);

const client = new BitBadgesSigningClient({
  adapter,
  network: 'mainnet'
});

console.log('Agent address:', client.address); // a bb1 address
```

The same mnemonic gives a different address through the Cosmos adapter and the EVM adapter. Fund the address that matches the adapter you use.

The agent needs a small amount of `BADGE` for gas, separate from its USDC. Send it from your main wallet (`bb build send --from bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --to bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr --amount 1 --denom BADGE`). The testnet faucet is offline; see [Testnet](../chain/testnet.md).

Then deposit USDC into the vault for the agent with `bb smart-tokens deposit` (step 3), or with the deposit message below.

### Read the Rules

```ts
import { BigIntify, BitBadgesAPI } from 'bitbadges';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY }); // key from https://bitbadges.io/developer

const collectionRes = await api.getCollection('4');
const collection = collectionRes.collection;

// The collectionApprovals array defines all transfer rules
const approvals = collection.collectionApprovals;

for (const approval of approvals) {
  console.log(`Approval: ${approval.approvalId}`);
  console.log(`  From: ${approval.fromListId}`);
  console.log(`  To: ${approval.toListId}`);
  console.log(`  Criteria:`, JSON.stringify(approval.approvalCriteria, null, 2));
}
```

### Withdraw (Spend)

```ts
import { MsgTransferTokens } from 'bitbadges';

const COLLECTION_ID = '4';
const BACKING_ADDRESS = 'bb1xx5h3l85tnxgj07vef2cjtqzpg2qc9jt52z2q0lptjasajez3cgs5hklra'; // From `bb smart-tokens show` or the AI Prompt tab
const WITHDRAW_APPROVAL_ID = 'smart-token-unbacking'; // Check your vault's approval IDs
const WITHDRAW_VERSION = '0'; // Check your vault's approval versions

// Withdraw 10 USDC worth of vault tokens.
// Amounts are base units. USDC has 6 decimals, so 10 USDC = 10000000.
const withdrawMsg = new MsgTransferTokens({
  creator: client.address,
  collectionId: COLLECTION_ID,
  transfers: [{
    from: client.address,
    toAddresses: [BACKING_ADDRESS],
    balances: [{
      amount: 10000000n, // 10 USDC in base units
      tokenIds: [{ start: 1n, end: 1n }],
      ownershipTimes: [{ start: 1n, end: 18446744073709551615n }]
    }],
    prioritizedApprovals: [{
      approvalId: WITHDRAW_APPROVAL_ID,
      approvalLevel: 'collection',
      approverAddress: '',
      version: WITHDRAW_VERSION
    }],
    onlyCheckPrioritizedCollectionApprovals: true,
    onlyCheckPrioritizedIncomingApprovals: false,
    onlyCheckPrioritizedOutgoingApprovals: false,
    merkleProofs: [],
    ethSignatureProofs: [],
    memo: ''
  }]
});

const result = await client.signAndBroadcast([withdrawMsg]);

if (result.success) {
  console.log('Withdrawal successful! TX:', result.txHash);
  // USDC is now in the agent's account
} else {
  console.error('Withdrawal failed:', result.error);
  // Common failures:
  // - Exceeds daily spending limit
  // - Recipient not on allowlist
  // - Insufficient vault balance
  // - Rate limit exceeded
}
```

Approval IDs vary by how the vault was built (`smart-token-backing` / `smart-token-unbacking` from the skill; older vaults use `smart-account-backing` / `smart-account-unbacking`). Read them from the collection rather than assuming.

### Deposit (Back)

Reverse the direction: from the backing address to the agent.

```ts
const DEPOSIT_APPROVAL_ID = 'smart-token-backing'; // Check your vault's approval IDs
const DEPOSIT_VERSION = '0';

const depositMsg = new MsgTransferTokens({
  creator: client.address,
  collectionId: COLLECTION_ID,
  transfers: [{
    from: BACKING_ADDRESS,
    toAddresses: [client.address],
    balances: [{
      amount: 5000000n, // 5 USDC in base units
      tokenIds: [{ start: 1n, end: 1n }],
      ownershipTimes: [{ start: 1n, end: 18446744073709551615n }]
    }],
    prioritizedApprovals: [{
      approvalId: DEPOSIT_APPROVAL_ID,
      approvalLevel: 'collection',
      approverAddress: '',
      version: DEPOSIT_VERSION
    }],
    onlyCheckPrioritizedCollectionApprovals: true,
    onlyCheckPrioritizedIncomingApprovals: false,
    onlyCheckPrioritizedOutgoingApprovals: false,
    merkleProofs: [],
    ethSignatureProofs: [],
    memo: ''
  }]
});

const result = await client.signAndBroadcast([depositMsg]);
```

### Expose the Operations as Agent Tools

```ts
const agentTools = {
  checkBalance: async () => {
    const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });
    const res = await api.getBalanceByAddressSpecificToken(COLLECTION_ID, '1', client.address);
    return res.balance;
  },

  withdraw: async (amountBaseUnits: bigint) => {
    const msg = new MsgTransferTokens({
      creator: client.address,
      collectionId: COLLECTION_ID,
      transfers: [{
        from: client.address,
        toAddresses: [BACKING_ADDRESS],
        balances: [{
          amount: amountBaseUnits,
          tokenIds: [{ start: 1n, end: 1n }],
          ownershipTimes: [{ start: 1n, end: 18446744073709551615n }]
        }],
        prioritizedApprovals: [{
          approvalId: WITHDRAW_APPROVAL_ID,
          approvalLevel: 'collection',
          approverAddress: '',
          version: WITHDRAW_VERSION
        }],
        onlyCheckPrioritizedCollectionApprovals: true,
        onlyCheckPrioritizedIncomingApprovals: false,
        onlyCheckPrioritizedOutgoingApprovals: false,
        merkleProofs: [],
        ethSignatureProofs: [],
        memo: ''
      }]
    });
    return client.signAndBroadcast([msg]);
  },

  getVaultRules: async () => {
    const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });
    const res = await api.getCollection(COLLECTION_ID);
    return res.collection.collectionApprovals;
  }
};
```

If the agent speaks MCP, the same operations are available as [MCP tools](../agents/mcp-tools.md). More patterns: [Agent patterns](../agents/bot-examples.md) and [Spending Authorization](../agents/spending-authorization.md).

| Concept | Details |
| --- | --- |
| Vault tokens | Smart tokens backed 1:1 by USDC. The agent holds these. |
| Backing address | Protocol-controlled escrow that holds the USDC. |
| Withdraw (unback) | Send vault tokens to the backing address, receive USDC. |
| Deposit (back) | Transfer from the backing address to your address, receive vault tokens. |
| Rules | Encoded in `collectionApprovals`. Protocol-enforced. |
| Gas | The agent needs `BADGE` for fees, separate from the USDC vault balance. |

### Troubleshooting

| Error | Cause | Fix |
| --- | --- | --- |
| Insufficient balance | Not enough vault tokens | Check the balance, deposit more USDC |
| No valid approval | Wrong approval ID or version | Read the IDs from `bb smart-tokens show` or the AI Prompt tab |
| Amount exceeds limit | Daily spending cap hit | Wait for the reset or reduce the amount |
| Sequence mismatch | Nonce out of sync | The client retries automatically, up to 3 times |
| Insufficient gas | Not enough `BADGE` | Fund the agent address with `BADGE` |

## 5. How the AI Builder Detects a Token Type

The AI builder (`bitbadges.io/create` with the Smart Detect toggle, `POST /api/v0/builder/ai-build`, and the programmatic `BitBadgesBuilderAgent`) picks one token-type skill from a prompt when the caller has not chosen one, so smart tokens, vaults, subscriptions, and the rest do not need to be classified by hand. It runs only when `selectedSkills` contains no token-type skill and `autoInferTokenType` is `true` (the default). An explicit pick always wins.

Two signals, in order. When an existing collection is available (the session transaction in `refine` mode, or an on-chain snapshot in `update` mode), its `standards` map directly to a skill with no LLM call:

| `standards[]` value | Token-type skill id |
| --- | --- |
| `"Smart Token"` | `smart-token` |
| `"Fungible Token"` | `fungible-token` |
| `"NFT Collection"` | `nft-collection` |
| `"Subscription"` | `subscription` |
| `"Custom 2FA"` | `custom-2fa` |
| `"Payment Protocol"` | `payment-protocol` |
| `"Credit Token"` | `credit-token` |
| `"Address List"` | `address-list` |
| `"Quest"` | `quest` |
| `"Bounty"` | `bounty` |
| `"PaymentRequest"` | `payment-request` |
| `"Crowdfund"` | `crowdfund` |
| `"Auction"` | `auction` |
| `"Products"` | `product-catalog` |
| `"Prediction Market"` | `prediction-market` |
| `"Liquidity Pools"` | `liquidity-pools` |

Source of truth: `STANDARD_TO_TOKEN_TYPE` exported from `bitbadges/builder/agent`.

Otherwise one Claude Haiku call classifies the prompt against the 15 token-type skills and returns `{ id, confidence, reasoning }`. Only `confidence: "high"` is acted on; low confidence, malformed JSON, an unknown id, a timeout, or a network error all fall back to a freestyle build with no token-type skill. In `refine` and `update` modes the classifier also sees the original build intent, the last 3 refinement turns, and any existing standards. The call is bounded to 200 output tokens, the catalog (~1.5k input tokens) is prompt-cached, and usage is reported through `onTokenUsage` with `round: 0`. The result carries `inferredTokenType` (a skill id, `null` for no confident match, `undefined` when skipped), `inferredTokenTypeSource` (`'standards'` or `'llm'`), and `inferredTokenTypeReasoning`. Disable with `autoInferTokenType: false`; restrict candidates with the `skills` allowlist. Full usage is on [Programmatic Agent](../agents/programmatic-agent.md).

## Common Mistakes

- `fromListId: "Mint"` on a smart token. Use the backing address.
- Missing `mustPrioritize: true` on backing or unbacking approvals.
- Assuming the transferable approval is required. Omit it for vaults and escrows.
- `"All"` as `fromListId` or `toListId` on backing operations. Use the exact backing address.
- Numbers instead of strings (`"18446744073709551615"`, not `Number.MAX_SAFE_INTEGER`).
- No alias path, or alias decimals that do not match the IBC denom.
- `image`, `name`, or `description` inside a `metadata` field. Only `uri` and `customData` exist there.

## Next Steps

- [Backed Minting](../token-standard/ibc/backed-minting.md)
- [Smart token skill](../agents/skills/smart-token.md)
- [Agents](../agents/README.md)
- [Trade on the DEX](trade-on-the-dex.md)
