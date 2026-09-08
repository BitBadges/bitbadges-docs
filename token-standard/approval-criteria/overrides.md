---
description: "overridesFromOutgoingApprovals and overridesToIncomingApprovals: bypass user-level approvals, the Mint requirement, and reserved-address protection."
---

# Overrides

A collection approval can skip the sender's outgoing approvals, the recipient's incoming approvals, or both. Overrides are how freezing, revocation, and forced distribution work, and they are the most dangerous fields in the standard.

## Shape

A complete collection approval with `fromListId` and the two override flags open. Folded lines are defaults.

```json fold=3-16,18-65,68-113
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
```

```ts
interface ApprovalCriteria<T extends NumberType> {
  overridesFromOutgoingApprovals?: boolean;
  overridesToIncomingApprovals?: boolean;
}
```

| Field | Effect when `true` |
| --- | --- |
| `overridesFromOutgoingApprovals` | The sender's outgoing approvals are not checked |
| `overridesToIncomingApprovals` | The recipient's incoming approvals are not checked |

Collection approvals only.

{% hint style="info" %}
Ask your agent:

```text
Add a manager-only approval to collection 1 that lets alice move tokens out of any address, so she can revoke.
```

The MCP builder tools (`add_approval`) produce the objects on this page.
{% endhint %}

## How It Works

When the matched collection approval sets an override, the chain skips that user-level check entirely. The transfer then executes without the sender's or recipient's consent. Uses:

- Freeze transfers by removing or restricting collection approvals. This does not require either override flag.
- Revoke: the manager (or a list of initiators) can move tokens out of any address.
- Forced distribution: send to addresses that block incoming transfers.

### Mint Must Override

The Mint address has no outgoing approvals, so every mint approval must set `overridesFromOutgoingApprovals: true` or it can never match.

```json fold=3-16,18-65,67-113
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
```

### Dangerous Configuration

{% hint style="danger" %}
An approval that sets `overridesFromOutgoingApprovals: true` for any non-Mint sender allows transfers without the sender's consent. Forceful transfers can break protocols that hold tokens in escrow.
{% endhint %}

Example: revoking from a liquidity pool without adjusting pool shares desyncs the pool's balances. An attacker can then revoke, rejoin, and repeat for unbounded liquidity.

Before you ship an override:

- Make sure every initiator in `initiatedByListId` understands the side effects of every transfer they can trigger.
- Put a multisig or governance address behind the initiator role rather than a single key.
- Decide if you need revocation at all. Whitelists, [Token Ownership](token-ownership.md) checks, and freezing often solve the same problem with no forced movement.

To forbid overrides forever on every non-Mint approval, set the `noForcefulPostMintTransfers` [invariant](invariants.md). The chain then rejects any post-mint collection approval that sets either flag, at approval-set time and at transfer time.

### Reserved Protocol Address Protection

The chain refuses forceful transfers out of reserved protocol addresses. The check runs when `overridesFromOutgoingApprovals` is `true` and the sender is not the initiator. Reserved protocol addresses are:

- every `x/gamm` liquidity pool address (registered at pool creation)
- every cosmos coin wrapper path and backed path address (registered when the path is added)
- any address set by governance with [MsgSetReservedProtocolAddress](../messages/msg-set-reserved-protocol-address.md)

Query them with [IsAddressReservedProtocol](../queries/is-address-reserved-protocol.md) and [GetAllReservedProtocolAddresses](../queries/get-all-reserved-protocol-addresses.md).

The protection is a sanity check, not a substitute for design:

- It applies only to forceful transfers. Transfers that check the address's own approvals are unaffected.
- It is bypassed when the reserved address initiates the transfer itself.
- Treat pools and paths as external contracts: you control flow to and from them, but once tokens are escrowed you cannot pull them back. Use [Address Checks](address-checks.md) (`mustNotBeLiquidityPool`) to stop tokens from entering pools if that matters.

## Related

- [Transferability](../concepts/transferability.md)
- [Invariants](invariants.md)
- [Address Checks](address-checks.md)
- [Minting and Supply](../concepts/minting-and-supply.md)
