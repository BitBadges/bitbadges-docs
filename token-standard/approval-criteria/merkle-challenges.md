---
description: "merkleChallenges: gate an approval on a SHA256 Merkle proof for whitelists or claim codes, with per-leaf use limits and leaf signatures against front-running."
---

# Merkle challenges

A Merkle challenge stores one root on-chain and lets each user prove membership with a proof. It moves the cost of a large whitelist or a batch of claim codes from the creator to the users who claim.

## Shape

```json
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
  ]
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

## How it works

### Two tree types

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

### Tracking by leaf index

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

### Proof length

All leaves must sit at the same depth so every proof has the same length. This is what makes `expectedProofLength` a security check: a proof of the wrong length is rejected before hashing, which blocks preimage and second-preimage attacks on intermediate nodes.

### Front-running and leaf signatures

{% hint style="danger" %}
A claim code proof in the mempool is public. Without leaf signatures, anyone who sees it can submit it first and take the token. Set `leafSigner` for every claim code tree.
{% endhint %}

With `leafSigner` set, the distributor signs `leaf + "-" + bb1AddressOfInitiator` for each user. A proof is then valid only for that address, so an intercepted proof is useless to anyone else.

```ts
leafSigner: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6'; // Ethereum addresses only
```

Together with `maxUsesPerLeaf: 1`, this is the standard claim code setup.

### Building a tree

```ts
import { SHA256 } from 'crypto-js';
import MerkleTree from 'merkletreejs';

// Claim codes
const codes = ['secret1', 'secret2', 'secret3'];
const hashedCodes = codes.map((x) => SHA256(x).toString());

// Whitelist
const addresses = ['bb1...', 'bb1...', 'bb1...'];
const hashedAddresses = addresses.map((x) => SHA256(x));

const treeOptions = {
  fillDefaultHash: '0000000000000000000000000000000000000000000000000000000000000000',
};

const tree = new MerkleTree(hashedCodes, SHA256, treeOptions);
const root = tree.getRoot().toString('hex');
const expectedProofLength = tree.getLayerCount() - 1;
```

Keep `fillDefaultHash` so the tree pads to a full layer and every proof has the same length. Test every leaf's proof before publishing the root.

### Submitting a proof

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
      // ... other fields
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
    },
  ],
};
```

Approvals with Merkle challenges are not auto-scannable. Transfers must [prioritize](../concepts/prioritized-approvals.md) them. Leaf indices can also drive [predetermined balances](predetermined-balances.md) to reserve specific token IDs per leaf.

### When to use

- Whitelists over about 100 addresses. Smaller lists are cheaper as a stored [address list](../concepts/address-lists.md).
- Claim codes and invitations.
- Any distribution where users should pay their own verification gas.

[ETH signature challenges](eth-signature-challenges.md) cover the same ground when a live signer can approve each transfer instead of committing to a tree up front.

## Related

- [ETH signature challenges](eth-signature-challenges.md)
- [Predetermined balances](predetermined-balances.md)
- [GetChallengeTracker](../queries/get-challenge-tracker.md)
- [MsgTransferTokens](../messages/msg-transfer-tokens.md)
