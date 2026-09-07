---
description: "MsgTransferTokens moves tokens between addresses. Each transfer must pass collection, outgoing, and incoming approvals."
---

# MsgTransferTokens

Executes one or more token transfers in a collection. The signer is the initiator; the `from` address of each transfer can be the signer, `Mint`, or any address whose approvals allow the initiator to move its tokens.

## Example

```bash
bb tx tokenization transfer-tokens ./transfer.json --from <key> --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgTransferTokens } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgTransferTokens({
  creator: client.address,
  collectionId: 1n,
  transfers: [
    {
      from: client.address,
      toAddresses: ['bb1recipient...'],
      balances: [
        {
          amount: 10n,
          tokenIds: [{ start: 1n, end: 5n }],
          ownershipTimes: [{ start: 1n, end: 18446744073709551615n }]
        }
      ],
      merkleProofs: [],
      ethSignatureProofs: [],
      memo: '',
      prioritizedApprovals: [],
      onlyCheckPrioritizedCollectionApprovals: false,
      onlyCheckPrioritizedIncomingApprovals: false,
      onlyCheckPrioritizedOutgoingApprovals: false
    }
  ]
});

const result = await client.signAndBroadcast([msg]);
```

```json
{
  "creator": "bb1initiator...",
  "collectionId": "1",
  "transfers": [
    {
      "from": "bb1sender...",
      "toAddresses": ["bb1recipient..."],
      "balances": [
        {
          "amount": "10",
          "tokenIds": [{ "start": "1", "end": "5" }],
          "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }]
        }
      ],
      "precalculateBalancesFromApproval": {
        "approvalId": "approval-1",
        "approvalLevel": "collection",
        "approverAddress": "",
        "version": "1",
        "precalculationOptions": {
          "overrideTimestamp": "0",
          "tokenIdsOverride": [],
          "scalingMultiplier": "0"
        }
      },
      "merkleProofs": [],
      "ethSignatureProofs": [],
      "memo": "",
      "prioritizedApprovals": [
        {
          "approvalId": "approval-1",
          "approvalLevel": "collection",
          "approverAddress": "",
          "version": "1"
        }
      ],
      "onlyCheckPrioritizedCollectionApprovals": true,
      "onlyCheckPrioritizedIncomingApprovals": false,
      "onlyCheckPrioritizedOutgoingApprovals": false
    }
  ]
}
```

Leave `balances` empty when `precalculateBalancesFromApproval` is set. The chain computes the balances from the approval's predetermined balances at execution time and overwrites the field.

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer and initiator of every transfer. |
| `collectionId` | Uint | yes | Collection. `"0"` resolves to the most recently created collection. |
| `transfers` | `Transfer[]` | yes | Transfers to execute in order. The message is atomic: all succeed or all fail. |

`Transfer`:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `from` | string | yes | Sender. `Mint` for minting. |
| `toAddresses` | string[] | yes | Recipients. Each receives the full `balances`. |
| `balances` | `Balance[]` | no | Amount, token IDs, and ownership times to move to each recipient. Empty when precalculating. |
| `precalculateBalancesFromApproval` | `PrecalculateBalancesFromApprovalDetails` | no | Approval whose `predeterminedBalances` compute the balances. Fields: `approvalId`, `approvalLevel`, `approverAddress`, `version`, `precalculationOptions`. |
| `merkleProofs` | `MerkleProof[]` | no | One per Merkle challenge on the approvals used. `leaf`, `aunts`, `leafSignature`. |
| `ethSignatureProofs` | `ETHSignatureProof[]` | no | One per ETH signature challenge. `nonce`, `signature`. |
| `memo` | string | no | Free text. |
| `prioritizedApprovals` | `ApprovalIdentifierDetails[]` | no | Approvals to check first, with exact `version`. Required for any approval that has side effects or that sets `mustPrioritize`. |
| `onlyCheckPrioritizedCollectionApprovals` | bool | no | If `true`, only the prioritized collection approvals are considered. |
| `onlyCheckPrioritizedIncomingApprovals` | bool | no | Same for incoming approvals. |
| `onlyCheckPrioritizedOutgoingApprovals` | bool | no | Same for outgoing approvals. |

`PrecalculationOptions`:

| Field | Type | Description |
| --- | --- | --- |
| `overrideTimestamp` | Uint | Start time for ownership when the approval sets `durationFromTimestamp` and `allowOverrideTimestamp`. `0` means block time. Ownership becomes `[overrideTimestamp, overrideTimestamp + durationFromTimestamp - 1]`. |
| `tokenIdsOverride` | `UintRange[]` | Exactly one range with `start == end`, and the ID must be in `validTokenIds`. Applies only when `allowOverrideWithAnyValidToken` is `true`. |
| `scalingMultiplier` | Uint | Multiplies every precalculated amount when the approval allows amount scaling. Must not exceed the approval's `maxScalingMultiplier`. `0` means no scaling. |

## Response

| Field | Type | Description |
| --- | --- | --- |
| `approvalsUsed` | `ApprovalUsed[]` | Approvals matched and consumed (`approvalId`, `approvalLevel`, `approverAddress`, `version`). |
| `coinTransfers` | `CoinTransferProto[]` | Bank coin movements caused by approval criteria (`from`, `to`, `amount`, `denom`, `isProtocolFee`). |
| `balancesTransferred` | `Balance[]` | Token balances actually moved. |
| `reviewItems` | string[] | Advisory notes. |

## Behavior

Each transfer goes through the same checks, in order:

1. **Precalculate** if `precalculateBalancesFromApproval` is set. The approval's `predeterminedBalances` produce the balances for this execution.
2. **Balance check.** The sender must own the balances, including ownership times. Fails otherwise.
3. **Collection approval check.** Scan collection approvals, prioritized ones first, then the rest unless `onlyCheckPrioritizedCollectionApprovals` is `true`. A match must satisfy its approval criteria (Merkle proofs, amounts, timing, challenges). The matched approval's `overridesFromOutgoingApprovals` and `overridesToIncomingApprovals` decide whether steps 4 and 5 run. If any part of the balances has no matching collection approval, the transfer fails.
4. **Outgoing approval check** unless overridden. The sender's outgoing approvals must allow the transfer. Self-initiated transfers pass when `autoApproveSelfInitiatedOutgoingTransfers` is `true`.
5. **Incoming approval check** unless overridden. Each recipient's incoming approvals must allow the transfer. `autoApproveAllIncomingTransfers` and `autoApproveSelfInitiatedIncomingTransfers` are shortcuts.
6. **Execute.** Update balances, run side effects (coin transfers, tracker increments, auto-deletion), check collection invariants, emit events.

Failure order: insufficient balances, no collection approval, blocked by sender, blocked by recipient.

### Auto-scan vs prioritized approvals

By default the chain scans approvals linearly and uses the first match. That only works for approvals with empty approval criteria (no side effects). Any approval with side effects or custom criteria must appear in `prioritizedApprovals` with its exact `version`. The version pins the approval the user reviewed, so a manager cannot swap the approval between signing and execution. Approvals that cannot be auto-scanned have `mustPrioritize` forced on when they are stored, so the chain rejects transfers that omit them. Set the `onlyCheckPrioritized*` flags to `true` when using prioritized approvals for deterministic behavior. See [Prioritized approvals](../concepts/prioritized-approvals.md).

### ETH signature proofs

Required when an approval uses [ETH signature challenges](../approval-criteria/eth-signature-challenges.md). The signed message is `nonce + "-" + initiatorAddress + "-" + collectionId + "-" + approverAddress + "-" + approvalLevel + "-" + approvalId + "-" + challengeId`. Each signature can be used once per challenge tracker; the chain tracks used signatures to prevent replay.

### Collection ID `0`

`collectionId: "0"` resolves to the most recently created collection. Use it in a multi-message transaction that creates a collection and transfers in the same transaction.

## Related

- [Transferability](../concepts/transferability.md)
- [Approval criteria](../approval-criteria/README.md)
- [Predetermined balances](../approval-criteria/predetermined-balances.md)
- [Mint and distribute](../../guides/mint-and-distribute.md)
