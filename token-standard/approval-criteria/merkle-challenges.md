---
description: "merkleChallenges: gate an approval on a SHA256 Merkle proof for whitelists or claim codes, with per-leaf use limits and leaf signatures against front-running."
---

# Merkle Challenges

A Merkle challenge stores one root on-chain and lets each user prove membership with a proof. It moves the cost of a large whitelist or a batch of claim codes from the creator to the users who claim.

## Shape

A complete `approvalCriteria` with the `merkleChallenges` array open. Folded lines are defaults.

```json fold=14-108
{
  "merkleChallenges": [
    {
      "root": "758691e922381c4327646a86e44dddf8a2e060f9f5559022638cc7fa94c55b77",
      "expectedProofLength": "1",
      "useCreatorAddressAsLeaf": false,
      "maxUsesPerLeaf": "1",
      "uri": "ipfs://Qmbbe75FaJyTHn7W5q8EaePEZ9M3J5Rj3KGNfApSfJtYyD",
      "customData": "",
      "challengeTrackerId": "uniqueId",
      "leafSigner": "0x"
    }
  ],
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
export interface MerkleChallenge<T extends NumberType> {
  root: string;
  expectedProofLength: T;
  useCreatorAddressAsLeaf: boolean;
  maxUsesPerLeaf: T;
  uri: string;
  customData: string;
  challengeTrackerId: string;
  leafSigner: string;
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `root` | string | yes | SHA256 Merkle root, hex |
| `expectedProofLength` | Uint | yes | Every proof must have exactly this many aunts. Prevents second-preimage attacks. |
| `useCreatorAddressAsLeaf` | bool | yes | `true`: the leaf is the initiator's `bb1` address (whitelist). `false`: the user supplies the leaf (claim code). |
| `maxUsesPerLeaf` | Uint | yes | Uses allowed per leaf. `0` is unlimited. Must be `1` for claim codes. |
| `challengeTrackerId` | string | yes | Scopes the per-leaf use tracker |
| `leafSigner` | string | no | Ethereum address that must sign each leaf. `"0x"` or empty disables. |
| `uri`, `customData` | string | no | Metadata |

Proofs travel in `Transfer.merkleProofs`:

```ts
interface MerkleProof {
  leaf: string;                                  // '' for whitelist trees
  aunts: { aunt: string; onRight: boolean }[];   // sibling hashes, bottom up
  leafSignature: string;                         // required when leafSigner is set
}
```

{% hint style="info" %}
Ask your agent:

```text
Gate minting of collection 1 behind a whitelist of these 200 addresses, one mint each.
```

The MCP builder tools (`add_approval`) produce the objects on this page.
{% endhint %}

## How It Works

### Two Tree Types

| | Whitelist | Claim codes |
| --- | --- | --- |
| `useCreatorAddressAsLeaf` | `true` | `false` |
| Leaves | `SHA256(bb1 address)` | `SHA256(code)` |
| Who supplies the leaf | the chain, from the initiator | the user, in `proof.leaf` |
| `initiatedByListId` | `"All"` (the tree does the gating) | as needed |
| `maxUsesPerLeaf` | as needed | `1` |
| `leafSigner` | optional | required in practice |

### Verification

For each challenge, the chain tries the transfer's proofs until one passes:

1. Determine the leaf: the initiator's address if `useCreatorAddressAsLeaf`, else `proof.leaf`. Empty fails.
2. If `leafSigner` is set, verify `proof.leafSignature` is an Ethereum signature by `leafSigner` over `leaf + "-" + initiatorAddress`.
3. Check the proof has exactly `expectedProofLength` aunts.
4. Hash up the path and compare to `root`.
5. Compute the leaf index from the path and check its use count is below `maxUsesPerLeaf`.

On success the leaf's use count increments. All challenges on the approval must pass.

### Tracking by Leaf Index

Uses are tracked per leaf index, not per leaf value, with index 0 at the far left of the bottom layer:

```ts
{
  collectionId: T;
  approvalId: string;
  approvalLevel: 'collection' | 'incoming' | 'outgoing';
  approverAddress: string;   // '' for collection level
  challengeTrackerId: string;
  leafIndex: T;
}
```

```text
1-collection- -approvalId-uniqueID-0  used 1 time
1-collection- -approvalId-uniqueID-1  unused
1-collection- -approvalId-uniqueID-2  used 3 times
```

Trackers are increment-only and scoped to the approval. A new `challengeTrackerId` starts fresh counts. Read one with [GetChallengeTracker](../queries/get-challenge-tracker.md).

### Proof Length

All leaves must sit at the same depth so every proof has the same length. This is what makes `expectedProofLength` a security check: a proof of the wrong length is rejected before hashing, which blocks preimage and second-preimage attacks on intermediate nodes.

### Front-Running and Leaf Signatures

{% hint style="danger" %}
A claim code proof in the mempool is public. Without leaf signatures, anyone who sees it can submit it first and take the token. Set `leafSigner` for every claim code tree.
{% endhint %}

With `leafSigner` set, the distributor signs `leaf + "-" + bb1AddressOfInitiator` for each user. A proof is then valid only for that address, so an intercepted proof is useless to anyone else.

```ts
leafSigner: '0x3e3adf18d0b45a3639a6cf6188b813507e958440'; // Ethereum addresses only
```

Together with `maxUsesPerLeaf: 1`, this is the standard claim code setup.

### Building a Tree

```ts
import { SHA256 } from 'crypto-js';
import MerkleTree from 'merkletreejs';

// Claim codes
const codes = ['secret1', 'secret2', 'secret3'];
const hashedCodes = codes.map((x) => SHA256(x).toString());

// Whitelist
const addresses = [
  'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
  'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue',
  'bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf',
];
const hashedAddresses = addresses.map((x) => SHA256(x));

const treeOptions = {
  fillDefaultHash: '0000000000000000000000000000000000000000000000000000000000000000',
};

const tree = new MerkleTree(hashedCodes, SHA256, treeOptions);
const root = tree.getRoot().toString('hex');
const expectedProofLength = tree.getLayerCount() - 1;
```

Keep `fillDefaultHash` so the tree pads to a full layer and every proof has the same length. Test every leaf's proof before publishing the root.

### Submitting a Proof

```ts
const passwordCodeToSubmit = 'secretCode123';
const leaf = isWhitelist
  ? SHA256(chain.bitbadgesAddress).toString()
  : SHA256(passwordCodeToSubmit).toString();

const proofObj = tree.getProof(leaf, whitelistIndex);
const isValidProof = proofObj && proofObj.length === tree.getLayerCount() - 1;

const leafSignature = signLeaf(leaf + '-' + chain.bitbadgesAddress); // if leafSigner is set
```

```ts
const txCosmosMsg: MsgTransferTokens<bigint> = {
  creator: chain.bitbadgesAddress,
  collectionId: collectionId,
  transfers: [
    {
      from: 'Mint',
      toAddresses: [chain.bitbadgesAddress],
      balances: [
        {
          amount: 1n,
          tokenIds: [{ start: 1n, end: 1n }],
          ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
        },
      ],
      merkleProofs: [
        {
          aunts: proofObj.map((proof) => ({
            aunt: proof.data.toString('hex'),
            onRight: proof.position === 'right',
          })),
          leaf: isWhitelist ? '' : passwordCodeToSubmit,
          leafSignature: leafSignature,
        },
      ],
      ethSignatureProofs: [],
      memo: '',
      prioritizedApprovals: [
        {
          approvalId: 'claim-code-mint',
          approvalLevel: 'collection',
          approverAddress: '',
          version: 0n,
        },
      ],
      onlyCheckPrioritizedCollectionApprovals: true,
      onlyCheckPrioritizedIncomingApprovals: false,
      onlyCheckPrioritizedOutgoingApprovals: false,
    },
  ],
};
```

Approvals with Merkle challenges are not auto-scannable. Transfers must [prioritize](../concepts/prioritized-approvals.md) them. Leaf indices can also drive [Predetermined Balances](predetermined-balances.md) to reserve specific token IDs per leaf.

### When to Use

- Whitelists over about 100 addresses. Smaller lists are cheaper as a stored [address list](../concepts/address-lists.md).
- Claim codes and invitations.
- Any distribution where users should pay their own verification gas.

[ETH Signature Challenges](eth-signature-challenges.md) cover the same ground when a live signer can approve each transfer instead of committing to a tree up front.

## Related

- [ETH Signature Challenges](eth-signature-challenges.md)
- [Predetermined Balances](predetermined-balances.md)
- [GetChallengeTracker](../queries/get-challenge-tracker.md)
- [MsgTransferTokens](../messages/msg-transfer-tokens.md)
