---
description: "Sell recurring subscriptions, prepaid credit tokens, and expiring tokens on BitBadges with bb build subscription, bb build credit-token, and ownership times."
---

# Subscriptions and Time-Based Tokens

At the end you have a subscription collection that charges each interval, a credit token that users top up with USDC, and you know how to mint tokens that expire.

All three rely on time-based ownership: a balance is owned for `ownershipTimes` ranges, in milliseconds since the epoch, and stops existing when the range ends. See [Balances](../token-standard/concepts/balances.md).

## 1. Build a Subscription

### bb CLI

```bash
bb build subscription --interval monthly \
  --price 10 --denom USDC --recipient bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d \
  --tiers 3 --transferable \
  --name "Pro plan" --image ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/pro.png --description "Monthly access" \
  | bb deploy --browser
```

| Flag | Required | Description |
| --- | --- | --- |
| `--interval <duration>` | Yes | `daily`, `monthly`, `annually`, or shorthand such as `30d` |
| `--price <amount>` | No | Price per interval in display units; use with `--denom` and `--recipient` |
| `--denom <symbol\|denom>` | No | Payment coin: `USDC`, `BADGE`, or a canonical denom (`ubadge`, `ibc/...`) |
| `--recipient <address>` | No | Payout address |
| `--payouts <json>` | No | Multiple payouts: `[{"recipient","amount","denom"}]` |
| `--tiers <n>` | No | Number of tiers (default `1`) |
| `--transferable` | No | Allow post-mint transfers between users |
| `--uri` or `--name` + `--image` + `--description` | Yes | Metadata, one mode or the other |

The output is a `MsgCreateCollection`. Add `--explain` to read what it does, `--simulate` to run it through the BitBadges API simulate endpoint, or `--json '{...}'` to pass every parameter as JSON. See [Build](../cli/build.md).

### Raw JSON

The builder emits a `MsgCreateCollection` with `standards: ["Subscriptions"]`, `validTokenIds: [{ "start": "1", "end": "1" }]`, and this faucet approval, one complete `CollectionApproval`. A subscription is a Mint approval (the "faucet") whose predetermined balance starts at the mint timestamp and lasts `durationFromTimestamp` milliseconds.

```json fold=11-15,21-24,28-32,34-46,48-54,61-68,70-114
{
  "fromListId": "Mint",
  "toListId": "All",
  "initiatedByListId": "All",
  "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "tokenIds": [{ "start": "1", "end": "1" }],
  "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "uri": "",
  "customData": "",
  "approvalId": "subscription-mint",
  "approvalCriteria": {
    "merkleChallenges": [],
    "predeterminedBalances": {
      "manualBalances": [],
      "incrementedBalances": {
        "startBalances": [
          {
            "amount": "1",
            "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
            "tokenIds": [{ "start": "1", "end": "1" }]
          }
        ],
        "incrementTokenIdsBy": "0",
        "incrementOwnershipTimesBy": "0",
        "durationFromTimestamp": "2592000000",
        "allowOverrideTimestamp": true,
        "recurringOwnershipTimes": { "startTime": "0", "intervalLength": "0", "chargePeriodLength": "0" },
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
        "coins": [{ "denom": "ubadge", "amount": "5000000000" }],
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

:::widget{name="approval-criteria" caption="The faucet on bitbadges.io: each claim charges the price and mints one token that lives for 30 days from the claim."}
{
  "predeterminedBalances": {
    "incrementedBalances": {
      "startBalances": [
        {
          "amount": "1",
          "tokenIds": [
            {
              "start": "1",
              "end": "1"
            }
          ]
        }
      ],
      "durationFromTimestamp": "2592000000"
    },
    "orderCalculationMethod": {
      "useOverallNumTransfers": true
    }
  },
  "coinTransfers": [
    {
      "to": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
      "coins": [
        {
          "denom": "ubadge",
          "amount": "5000000000"
        }
      ]
    }
  ],
  "overridesFromOutgoingApprovals": true
}
:::

Rules the chain and the validator enforce:

- `standards` includes `"Subscriptions"`.
- `invariants.noCustomOwnershipTimes` is `false` (or omitted). Each period mints a new ownership window, so custom ownership times must be allowed.
- `validTokenIds` is exactly one token ID per tier: `[{ "start": "1", "end": "1" }]`.
- The faucet approval has `fromListId: "Mint"`, `tokenIds` of exactly one token, and `overridesFromOutgoingApprovals: true`.
- `coinTransfers` has at least one entry with both override flags `false`.
- `durationFromTimestamp` is non-zero: monthly `"2592000000"` (30 days), annual `"31536000000"` (365 days), daily `"86400000"` (24 hours).
- `allowOverrideTimestamp` is `true`, so each mint starts its own window.
- `incrementTokenIdsBy` and `incrementOwnershipTimesBy` are `"0"`.
- `orderCalculationMethod` has exactly one method `true` (default `useOverallNumTransfers`).
- Only one of `durationFromTimestamp`, `incrementOwnershipTimesBy`, and `recurringOwnershipTimes` may be non-zero. Keep `recurringOwnershipTimes` as all zeros: `{ "startTime": "0", "intervalLength": "0", "chargePeriodLength": "0" }`.

See [Predetermined Balances](../token-standard/approval-criteria/predetermined-balances.md) for how `durationFromTimestamp` and `recurringOwnershipTimes` compute balances.

{% hint style="info" %}
**Ask your agent.** With the MCP builder tools installed, paste one of these:

```text
Build a subscription token called Demo Membership that renews monthly for 5 USDC paid to me, with three tiers, and give me the review link.
```

```text
Build a credit token where 1 USDC buys 100,000 API credits, non-transferable, with an alias path, and run the review.
```
{% endhint %}

## 2. Subscribe, Renew, and Charge

A subscriber's recurring approval must be derived from the live collection, not built offline, so there is no `bb build recurring-payment`. The `bb subscriptions` group reads the faucet approval and emits the right messages.

```bash
# Tiers in a collection (one per faucet approval)
bb subscriptions list 3

# Is this address subscribed, does it have a future approval, when is the next charge?
bb subscriptions status 3 --address bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue

# Claim one period (MsgTransferTokens through the faucet)
bb subscriptions claim 3 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue | bb deploy --browser

# Claim and enable auto-renewal in one transaction (mirrors the site's Subscribe button)
bb subscriptions subscribe 3 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --tier pro-tier | bb deploy --browser

# Add or remove only the recurring approval (MsgUpdateUserApprovals)
bb subscriptions enable-renewal 3 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --tip 0 | bb deploy --browser
bb subscriptions cancel 3 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue | bb deploy --browser

# Issuer side: mint the next period for every subscriber whose charge is due
bb subscriptions charge-due 3
```

`--tier <approvalId>` is required on multi-tier collections. `--tip <ubadge>` adds a per-interval tip in base denom units. `--approval-id <id>` overrides the generated recurring-approval ID. Renewal works because the subscriber's recurring incoming approval lets the faucet's coin transfer run each interval. See [Standards Commands](../cli/standards.md).

## 3. Build a Credit Token

A credit token is increment-only and non-transferable. Users pay X of an ICS20 denom (USDC, ATOM, BADGE) and receive Y tokens as proof of payment. Tokens are never redeemed, burned, or transferred; the payout address gets the coin immediately, with no escrow. For a 1:1 backed token that users can transfer and redeem, use [Smart Tokens and Vaults](smart-tokens-and-vaults.md).

### bb CLI

```bash
bb build credit-token --payment-denom USDC \
  --recipient bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --symbol CREDIT --tokens-per-unit 100 \
  --name "API credits" --image ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/credits.png --description "Prepaid API usage" \
  | bb deploy --browser
```

| Flag | Required | Description |
| --- | --- | --- |
| `--payment-denom <symbol\|denom>` | Yes | Payment coin (`--denom` is an alias) |
| `--recipient <address>` | Yes | Payment recipient |
| `--symbol <symbol>` | No | Token symbol (default `CREDIT`) |
| `--tokens-per-unit <n>` | No | Tokens per 1 display unit of payment (default `100`) |

Buy credits from any credit token collection:

```bash
bb credit-tokens list 23                       # credit-* tiers
bb credit-tokens show 23                       # symbol, decimals, alias path, tiers
bb credit-tokens purchase 23 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --units 10 | bb deploy --browser

# BitBadges' own API-credits collection on this network
bb credit-tokens purchase --api-credits --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --units 10 --browser
```

Credits are non-transferable, so sign with the wallet that should hold them (`--browser` pins the signer to `--creator`; `--burner` is create-only and is rejected). `--tier <approvalId>` picks a legacy per-tier approval when the collection has no credit-scaled tier.

### Raw JSON

Required structure:

- `standards`: `["Credit Token"]`.
- `validTokenIds`: `[{ "start": "1", "end": "1" }]`.
- `collectionApprovals`: only `fromListId: "Mint"` approvals. No transferable or burnable approval.
- `defaultBalances`: `autoApproveAllIncomingTransfers`, `autoApproveSelfInitiatedOutgoingTransfers`, and `autoApproveSelfInitiatedIncomingTransfers` all `true`.
- Every mint approval: `toListId: "All"`, `initiatedByListId: "All"`, `overridesFromOutgoingApprovals: true`, `mustPrioritize: true` (required for correct tier matching), and `coinTransfers` with the price and recipient.
- All collection permissions frozen, including `canUpdateCollectionApprovals`.
- An alias path, so balances display with a symbol and decimals.

Conversion rate: `coinTransfers.coins[0].amount` is the payment in base units and `startBalances[0].amount` is the number of tokens minted. For 1 USDC (`"1000000"` base units) = 100,000 tokens, set those two values.

Mint approval for the `credit-1` tier (1 USDC buys 100,000 tokens), one complete `CollectionApproval`. `bb build credit-token` emits a single `credit-scaled` approval that uses `allowAmountScaling` instead of fixed tiers; the per-tier layout below is the credit token skill's convention:

```json fold=11-15,21-26,28-32,34-45,48-53,64-73,75-111,113-119
{
  "fromListId": "Mint",
  "toListId": "All",
  "initiatedByListId": "All",
  "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "tokenIds": [{ "start": "1", "end": "1" }],
  "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "uri": "",
  "customData": "",
  "approvalId": "credit-1",
  "approvalCriteria": {
    "merkleChallenges": [],
    "predeterminedBalances": {
      "manualBalances": [],
      "incrementedBalances": {
        "startBalances": [
          {
            "amount": "100000",
            "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
            "tokenIds": [{ "start": "1", "end": "1" }]
          }
        ],
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
        "useOverallNumTransfers": true,
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
      "amountTrackerId": "credit-1",
      "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
    },
    "maxNumTransfers": {
      "overallMaxNumTransfers": "0",
      "perToAddressMaxNumTransfers": "0",
      "perFromAddressMaxNumTransfers": "0",
      "perInitiatedByAddressMaxNumTransfers": "0",
      "amountTrackerId": "credit-1",
      "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
    },
    "coinTransfers": [
      {
        "to": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
        "coins": [
          {
            "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8",
            "amount": "1000000"
          }
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
  },
  "version": "0"
}
```

Legacy tiers: existing collections may have 8 to 10 approvals named `credit-<multiplier>` so the site can split purchases into several transfers. New collections should use the single `credit-scaled` approval from [Credit Token](../agents/skills/credit-token.md), as the CLI builder does. The multiplier is the number of base payment units; each tier's payment is multiplier times the base payment, and tokens minted are multiplier times tokens per unit. Pick denominations that fit the expected purchase sizes; nothing is hardcoded. Example at 1 USDC = 100K tokens:

| approvalId | Payment | Tokens minted |
| --- | --- | --- |
| credit-1 | 1 USDC | 100,000 |
| credit-5 | 5 USDC | 500,000 |
| credit-10 | 10 USDC | 1,000,000 |
| credit-50 | 50 USDC | 5,000,000 |
| credit-100 | 100 USDC | 10,000,000 |
| credit-500 | 500 USDC | 50,000,000 |
| credit-1000 | 1,000 USDC | 100,000,000 |
| credit-10000 | 10,000 USDC | 1,000,000,000 |
| credit-100000 | 100,000 USDC | 10,000,000,000 |
| credit-1000000000 | 1B USDC | 100T tokens |

Alias path (required for display):

```json
{
  "aliasPathsToAdd": [
    {
      "denom": "ucredit",
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
      "symbol": "ucredit",
      "denomUnits": [{ "decimals": "6", "symbol": "CREDIT", "isDefaultDisplay": true, "metadata": { "uri": "", "customData": "" } }],
      "metadata": {
        "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/alias-ucredit.json",
        "customData": ""
      }
    }
  ]
}
```

Permissions, all frozen:

```json
{
  "collectionPermissions": {
    "canDeleteCollection": [{"permanentlyPermittedTimes": [], "permanentlyForbiddenTimes": [{"start": "1", "end": "18446744073709551615"}]}],
    "canArchiveCollection": [{"permanentlyPermittedTimes": [], "permanentlyForbiddenTimes": [{"start": "1", "end": "18446744073709551615"}]}],
    "canUpdateStandards": [{"permanentlyPermittedTimes": [], "permanentlyForbiddenTimes": [{"start": "1", "end": "18446744073709551615"}]}],
    "canUpdateCustomData": [{"permanentlyPermittedTimes": [], "permanentlyForbiddenTimes": [{"start": "1", "end": "18446744073709551615"}]}],
    "canUpdateManager": [{"permanentlyPermittedTimes": [], "permanentlyForbiddenTimes": [{"start": "1", "end": "18446744073709551615"}]}],
    "canUpdateCollectionMetadata": [{"permanentlyPermittedTimes": [], "permanentlyForbiddenTimes": [{"start": "1", "end": "18446744073709551615"}]}],
    "canUpdateValidTokenIds": [{"permanentlyPermittedTimes": [], "permanentlyForbiddenTimes": [{"start": "1", "end": "18446744073709551615"}], "tokenIds": [{"start": "1", "end": "18446744073709551615"}]}],
    "canUpdateTokenMetadata": [{"permanentlyPermittedTimes": [], "permanentlyForbiddenTimes": [{"start": "1", "end": "18446744073709551615"}], "tokenIds": [{"start": "1", "end": "18446744073709551615"}]}],
    "canUpdateCollectionApprovals": [{"permanentlyPermittedTimes": [], "permanentlyForbiddenTimes": [{"start": "1", "end": "18446744073709551615"}], "fromListId": "All", "toListId": "All", "initiatedByListId": "All", "transferTimes": [{"start": "1", "end": "18446744073709551615"}], "tokenIds": [{"start": "1", "end": "18446744073709551615"}], "ownershipTimes": [{"start": "1", "end": "18446744073709551615"}], "approvalId": "All"}],
    "canAddMoreAliasPaths": [{"permanentlyPermittedTimes": [], "permanentlyForbiddenTimes": [{"start": "1", "end": "18446744073709551615"}]}],
    "canAddMoreCosmosCoinWrapperPaths": [{"permanentlyPermittedTimes": [], "permanentlyForbiddenTimes": [{"start": "1", "end": "18446744073709551615"}]}]
  }
}
```

An empty permission array is neutral and still editable. The explicit forbidden ranges above freeze the fields; see [Lock Permissions](lock-permissions.md).

### Track Usage Off-Chain

The on-chain balance is `totalCreditsPaidFor`, the total ever purchased. Your backend tracks `totalUsed` in the same units. Remaining budget is `balance - totalUsed`; purchases and usage only increase their respective totals. Convert raw balances through the alias decimals before displaying credits.

Worked example, the BitBadges API credits collection (collection 23 / 80, `APITOKEN`):

- A user buys 10 USDC and receives 1,000,000 APITOKEN (balance 1,000,000).
- The user makes API calls; the backend records `totalUsed` = 250,000.
- Remaining budget = 1,000,000 - 250,000 = 750,000.
- The user buys 5 more USDC; the balance increments to 1,500,000 and the remaining budget is 1,250,000.

The site's credit token page shows the balance through the alias path, a purchase form with a denom amount selector, the conversion rate, and the multi-tier decomposition. Reference collection: [Collection 23](https://bitbadges.io/collections/23).

Credit token versus smart token: increment-only versus deposit and withdraw; non-transferable versus transferable; no `cosmosCoinBackedPath`; multiple tiers; credits never expire (full ownership range).

## 4. Mint Tokens That Expire

Any transfer can carry a bounded `ownershipTimes` window. This balance lasts five minutes from `1788739200000` (2026-09-06T00:00:00Z): the current timestamp in milliseconds plus `5 * 60 * 1000`:

```json
{
  "amount": "1",
  "tokenIds": [{ "start": "1", "end": "1" }],
  "ownershipTimes": [{ "start": "1788739200000", "end": "1788739500000" }]
}
```

The balance exists only inside the window; queries and approval checks outside it see nothing. Use this for passes, trials, and short-lived 2FA tokens (`bb custom-2fa mint 74 --to bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --expiration 10m` encodes the lifetime at mint time; see [Standards Commands](../cli/standards.md)). To forbid custom windows on a collection, set the `noCustomOwnershipTimes` invariant; see [Invariants](../token-standard/approval-criteria/invariants.md).

## Common Mistakes

- Non-zero `recurringOwnershipTimes` next to `durationFromTimestamp`. They are mutually exclusive.
- `durationFromTimestamp: "0"` or `allowOverrideTimestamp: false` on a subscription faucet.
- More than one token ID in a subscription or credit token.
- Coin transfer override flags set `true`; standard payments use `false` for both.
- `noCustomOwnershipTimes: true` on a subscription collection.
- A transferable or burnable approval on a credit token, or a missing `mustPrioritize: true` on its mint approvals.
- A credit token without an alias path. Balances will not display properly.
- Numbers instead of strings.

## Next Steps

- [Balances](../token-standard/concepts/balances.md)
- [Coin Transfers](../token-standard/approval-criteria/coin-transfers.md)
- [Smart Tokens and Vaults](smart-tokens-and-vaults.md)
- [Subscription skill](../agents/skills/subscription.md)
