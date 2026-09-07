---
description: "The full approvalCriteria interface, which fields exist on which approval level, one line per criterion with a link, and the require* address flags."
---

# Approval Criteria

`approvalCriteria` holds every extra condition an approval can impose beyond who, when, and what. All criteria on an approval must pass for that approval to match.

## Shape

```ts
export interface iApprovalCriteria<T extends NumberType> {
  /** The BADGE or sdk.coin transfers to be executed upon every approval. */
  coinTransfers?: iCoinTransfer<T>[];
  /** The list of merkle challenges that need valid proofs to be approved. */
  merkleChallenges?: iMerkleChallenge<T>[];
  /** The list of must own tokens that need valid proofs to be approved. */
  mustOwnTokens?: iMustOwnToken<T>[];
  /** The predetermined balances for each transfer. These allow approvals to use predetermined balance amounts rather than an incrementing tally system. */
  predeterminedBalances?: iPredeterminedBalances<T>;
  /** The maximum approved amounts for this approval. */
  approvalAmounts?: iApprovalAmounts<T>;
  /** The max num transfers for this approval. */
  maxNumTransfers?: iMaxNumTransfers<T>;
  /** Whether the approval should be deleted after one use. */
  autoDeletionOptions?: iAutoDeletionOptions;
  /** Whether the to address must equal the initiatedBy address. */
  requireToEqualsInitiatedBy?: boolean;
  /** Whether the from address must equal the initiatedBy address. */
  requireFromEqualsInitiatedBy?: boolean;
  /** Whether the to address must not equal the initiatedBy address. */
  requireToDoesNotEqualInitiatedBy?: boolean;
  /** Whether the from address must not equal the initiatedBy address. */
  requireFromDoesNotEqualInitiatedBy?: boolean;
  /** Whether this approval overrides the from address's approved outgoing transfers. */
  overridesFromOutgoingApprovals?: boolean;
  /** Whether this approval overrides the to address's approved incoming transfers. */
  overridesToIncomingApprovals?: boolean;
  /** Issuer-imposed constraints on user-level approvals. Includes royalties, allowed denoms, and coin transfer restrictions. */
  userApprovalSettings?: iUserApprovalSettings<T>;
  /** The list of dynamic store challenges that the initiator must pass for approval. */
  dynamicStoreChallenges?: iDynamicStoreChallenge<T>[];
  /** The list of ETH signature challenges that the initiator must pass for approval. */
  ethSignatureChallenges?: iETHSignatureChallenge[];
  /** Address checks for sender */
  senderChecks?: iAddressChecks;
  /** Address checks for recipient */
  recipientChecks?: iAddressChecks;
  /** Address checks for initiator */
  initiatorChecks?: iAddressChecks;
  /** Alternative time-based checks for approval denial (offline hours/days). */
  altTimeChecks?: iAltTimeChecks<T>;
  /** If true, this approval must be explicitly prioritized in PrioritizedApprovals to be used. */
  mustPrioritize?: boolean;
  /** The list of voting challenges that must be satisfied for approval. */
  votingChallenges?: iVotingChallenge<T>[];
  /** EVM query challenges that must pass for approval. Read-only contract queries that verify external EVM state. */
  evmQueryChallenges?: iEVMQueryChallenge<T>[];
  /** If true, this collection approval allows backed minting operations (CosmosCoinBackedPath). When false, this approval cannot be used for transfers involving backed minting addresses. This prevents accidental allowances when toListIds is "All". */
  allowBackedMinting?: boolean;
  /** If true, this collection approval allows special wrapping operations (CosmosCoinWrapperPath). When false, this approval cannot be used for transfers involving wrapping addresses. This prevents accidental allowances when toListIds is "All". */
  allowSpecialWrapping?: boolean;
}
```

Royalties are inside `userApprovalSettings.userRoyalties`. There is no top-level `userRoyalties` field (proto field 13 is reserved).

:::widget{name="approval-criteria" caption="A paid mint on bitbadges.io: the criteria that are set show as on, the rest are dimmed."}
{
  "coinTransfers": [{ "to": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d", "coins": [{ "denom": "ubadge", "amount": "1000000" }] }],
  "maxNumTransfers": { "overallMaxNumTransfers": "100", "perInitiatedByAddressMaxNumTransfers": "1" },
  "predeterminedBalances": {
    "incrementedBalances": { "startBalances": [{ "amount": "1", "tokenIds": [{ "start": "1", "end": "1" }] }], "incrementTokenIdsBy": "1" },
    "orderCalculationMethod": { "useOverallNumTransfers": true }
  },
  "requireToEqualsInitiatedBy": true,
  "overridesFromOutgoingApprovals": true
}
:::

### Criteria

| Criterion | One line | Auto-scannable |
| --- | --- | --- |
| [`approvalAmounts`, `maxNumTransfers`](approval-trackers.md) | Increment-only tallies that cap amounts and transfer counts, overall or per address, with optional periodic resets | yes |
| [`predeterminedBalances`](predetermined-balances.md) | Force each transfer to move exact balances, in order, computed manually or by increments | no |
| [`merkleChallenges`](merkle-challenges.md) | Require a SHA256 Merkle proof (whitelist or claim code) with per-leaf use limits | no |
| [`ethSignatureChallenges`](eth-signature-challenges.md) | Require a one-time Ethereum signature from a named signer | no |
| [`votingChallenges`](voting-challenges.md) | Require a weighted quorum of on-chain votes, with optional timelock and reset | yes |
| [`dynamicStoreChallenges`](dynamic-store-challenges.md) | Require a party to be `true` in an address-to-bool store with a global kill switch | yes |
| [`evmQueryChallenges`](evm-query-challenges.md) | Require a read-only EVM call to return an expected value | yes |
| [`mustOwnTokens`](token-ownership.md) | Require a party to hold tokens from some collection | yes |
| [`coinTransfers`](coin-transfers.md) | Move `x/bank` coins every time the approval is used | no |
| [`overridesFromOutgoingApprovals`, `overridesToIncomingApprovals`](overrides.md) | Skip the sender's or recipient's user-level approvals (collection only) | yes |
| `require*` flags (below) | Constrain equality between initiator and sender or recipient | yes |
| [`senderChecks`, `recipientChecks`, `initiatorChecks`](address-checks.md) | Require or forbid EVM contracts and liquidity pools | yes |
| [`altTimeChecks`](alt-time-checks.md) | Deny by hour, weekday, month, day of month, or ISO week, with a timezone offset | yes |
| [`autoDeletionOptions`](auto-deletion.md) | Delete the approval after use or allow others to purge it | yes |
| [`mustPrioritize`](../concepts/prioritized-approvals.md) | Remove the approval from auto-scan | n/a |
| [`allowBackedMinting`, `allowSpecialWrapping`](special-address-flags.md) | Opt an approval into backed-path and wrapper-path transfers (collection only) | requires prioritization |
| [`userApprovalSettings`](user-approval-settings.md) | Constrain user-level coin transfers and add royalties (collection only) | yes |

Post-transfer EVM checks that live on the collection rather than an approval are on [Invariants](invariants.md).

### Which Level Has Which Fields

The proto defines three criteria types. Fields missing from a level cannot be set there.

| Field | Collection | Outgoing | Incoming |
| --- | --- | --- | --- |
| `merkleChallenges`, `predeterminedBalances`, `approvalAmounts`, `maxNumTransfers`, `coinTransfers`, `autoDeletionOptions`, `mustOwnTokens`, `dynamicStoreChallenges`, `ethSignatureChallenges`, `initiatorChecks`, `altTimeChecks`, `mustPrioritize`, `votingChallenges`, `evmQueryChallenges` | yes | yes | yes |
| `requireToEqualsInitiatedBy`, `requireToDoesNotEqualInitiatedBy`, `recipientChecks` | yes | yes | no (recipient is the owner) |
| `requireFromEqualsInitiatedBy`, `requireFromDoesNotEqualInitiatedBy`, `senderChecks` | yes | no (sender is the owner) | yes |
| `overridesFromOutgoingApprovals`, `overridesToIncomingApprovals`, `allowBackedMinting`, `allowSpecialWrapping`, `userApprovalSettings` | yes | no | no |

{% hint style="info" %}
Ask your agent:

```text
Add a collection approval to collection 1 that lets anyone mint one token each, and show me the full approvalCriteria it generates.
```

The MCP builder tools (`add_approval, add_preset_approval`) produce the objects on this page.
{% endhint %}

## How It Works

### require flags

```ts
interface ApprovalCriteria<T extends NumberType> {
  requireToEqualsInitiatedBy?: boolean;
  requireToDoesNotEqualInitiatedBy?: boolean;
  requireFromEqualsInitiatedBy?: boolean;
  requireFromDoesNotEqualInitiatedBy?: boolean;
}
```

| Flag | Requires |
| --- | --- |
| `requireToEqualsInitiatedBy` | recipient == initiator (self-claims) |
| `requireToDoesNotEqualInitiatedBy` | recipient != initiator |
| `requireFromEqualsInitiatedBy` | sender == initiator (no delegated sends) |
| `requireFromDoesNotEqualInitiatedBy` | sender != initiator |

These apply after the address lists match. An address must be in the relevant list and then satisfy the flag.

### Tracker IDs

Trackers (amount, transfer count, Merkle leaf use, ETH signature use, votes) are keyed by the approval they belong to plus a user-chosen ID. Full key formats are on each page. Two rules hold everywhere:

- Trackers are increment-only and never deleted. Changing an approval does not reset its trackers.
- To start from zero, use an ID with no history (change `amountTrackerId`, `challengeTrackerId`, or `proposalId`). Reusing an old ID resumes the old tally.

### Evaluation Order

The chain evaluates criteria in a fixed pipeline for each approval that matches the core fields. Any failure rejects that approval for this transfer; the scan then moves to the next candidate. Side effects (coin transfers, tracker increments, auto-deletion) run only after every check on the chosen approval passes.

## Related

- [Transferability](../concepts/transferability.md)
- [Prioritized Approvals](../concepts/prioritized-approvals.md)
- [Invariants](invariants.md)
