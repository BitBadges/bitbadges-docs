---
description: "GetChallengeTracker returns how many times a Merkle leaf has been used for a Merkle challenge."
---

# GetChallengeTracker

Returns the number of times a leaf index has been used to satisfy a Merkle challenge.

## Example

```bash
# [collectionId] [approvalLevel] [approverAddress] [approvalId] [challengeTrackerId] [leafIndex]
bb query tokenization num-used-for-merkle-challenge 1 collection "" claim claim_demo_01 42
```

```bash
curl "https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/get_challenge_tracker/1/collection//claim_demo_01/42?approvalId=claim"
```

The REST path order is `{collectionId}/{approvalLevel}/{approverAddress}/{challengeTrackerId}/{leafIndex}`. Pass `approvalId` as a query parameter; it is part of the tracker key even though it is absent from the REST path.

## Request

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | string | Collection ID. |
| `approvalLevel` | string | `collection`, `incoming`, or `outgoing`. |
| `approverAddress` | string | Empty for `collection`. |
| `approvalId` | string | Approval ID. |
| `challengeTrackerId` | string | `challengeTrackerId` from the Merkle challenge. |
| `leafIndex` | string | Leaf index in the Merkle tree. |

## Response

```json
{ "numUsed": "1" }
```

| Field | Type | Description |
| --- | --- | --- |
| `numUsed` | string | Uses so far. `"0"` when never used. |

## Behavior

- With `maxUsesPerLeaf: 1` (the common claim code pattern), `numUsed: "1"` means the code is spent.

## Related

- [Merkle Challenges](../approval-criteria/merkle-challenges.md)
- [GetETHSignatureTracker](get-eth-signature-tracker.md)
