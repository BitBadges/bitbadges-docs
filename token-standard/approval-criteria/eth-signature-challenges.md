---
description: "ethSignatureChallenges: require a one-time Ethereum signature from a named signer over a message bound to the transfer context."
---

# ETH signature challenges

An ETH signature challenge requires the transfer to carry a signature from a fixed Ethereum address. The signer authorizes one specific transfer by signing a nonce plus the transfer context, and each signature can be used once. It is off-chain authorization without a Merkle tree.

## Shape

```json
{
  "ethSignatureChallenges": [
    {
      "signer": "0x1234567890123456789012345678901234567890",
      "challengeTrackerId": "challenge1",
      "uri": "",
      "customData": ""
    }
  ]
}
```

```ts
interface ETHSignatureChallenge {
  signer: string;             // Ethereum address that must sign
  challengeTrackerId: string; // scopes the used-signature tracker
  uri?: string;
  customData?: string;
}

interface ETHSignatureProof {
  nonce: string;     // user-chosen, the only user-provided part of the message
  signature: string; // Ethereum signature of the full message
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `signer` | string | yes | `0x` address whose signature is required |
| `challengeTrackerId` | string | yes | Tracker scope. Changing it resets used signatures. |
| `uri`, `customData` | string | no | Metadata |

The transfer supplies proofs in `Transfer.ethSignatureProofs`.

## How it works

### Message format

The signer signs this exact string, values joined with literal `-`:

```text
{nonce}-{initiatorAddress}-{collectionId}-{approverAddress}-{approvalLevel}-{approvalId}-{challengeTrackerId}
```

| Part | Value |
| --- | --- |
| `nonce` | Any string the user and signer agree on. Must be unique per authorization. |
| `initiatorAddress` | The `bb1` address that will submit the transfer |
| `collectionId` | The collection |
| `approverAddress` | `""` for a collection approval, the owner for user approvals |
| `approvalLevel` | `collection`, `outgoing`, or `incoming` |
| `approvalId` | The approval's ID |
| `challengeTrackerId` | From the challenge |

Because the context is inside the message, a signature is useless for any other initiator, collection, approver, level, approval, or tracker ID.

### Verification

For each challenge, the chain tries every proof in the transfer:

1. Rebuild the message from `proof.nonce` and the transfer context.
2. Recover the signer from `proof.signature` (secp256k1 personal-sign).
3. Compare with `challenge.signer`.
4. Check the used-signature tracker. The count must be 0.

A challenge is satisfied by the first proof that passes all four. All challenges on the approval must be satisfied. On success the tracker for that signature is incremented.

### Tracker

Used signatures are stored under a key built from collection ID, approver address, approval level, approval ID, `challengeTrackerId`, and the signature. The value is a use count that only increases. Read it with [GetEthSignatureTracker](../queries/get-eth-signature-tracker.md).

Changing `challengeTrackerId` starts a new tracker, so old signatures become valid again for the new tracker ID. Rotate IDs only when that is the intent.

### Multiple signers

Each challenge names one signer. Require several by listing several challenges:

```json
{
  "ethSignatureChallenges": [
    { "signer": "0x1234567890123456789012345678901234567890", "challengeTrackerId": "challenge1" },
    { "signer": "0x0987654321098765432109876543210987654321", "challengeTrackerId": "challenge2" }
  ]
}
```

### Errors

| Error | Cause |
| --- | --- |
| Invalid signature | Recovered address is not `signer`, or the message was built differently |
| Already used | This signature has a use count above 0 for this tracker |
| Missing proof | No proof in the transfer satisfies the challenge |
| Context mismatch | The signature was made for a different initiator, collection, approver, level, or approval |

### Compared to Merkle challenges

Both verify an off-chain authorization on-chain. A [Merkle challenge](merkle-challenges.md) also proves the signed value was committed in a tree in advance; an ETH signature challenge only checks that the signer signed and that the signature is unused. Use ETH signatures when a live signer can authorize each transfer; use Merkle trees when the set of valid claims is fixed up front.

Approvals with ETH signature challenges are not auto-scannable. Transfers must [prioritize](../concepts/prioritized-approvals.md) them.

## Related

- [Merkle challenges](merkle-challenges.md)
- [GetEthSignatureTracker](../queries/get-eth-signature-tracker.md)
- [MsgTransferTokens](../messages/msg-transfer-tokens.md)
