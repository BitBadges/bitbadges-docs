---
description: "GetETHSignatureTracker returns how many times an Ethereum signature has been used for an ETH signature challenge."
---

# GetETHSignatureTracker

Returns the number of times a given signature has been used to satisfy an ETH signature challenge.

## Example

```bash
# [collectionId] [approvalLevel] [approverAddress] [approvalId] [challengeTrackerId] [signature]
bb query tokenization num-used-for-eth-signature-challenge 1 collection "" approval-123 challenge-1 0xabc...
```

```bash
curl "https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/get_eth_signature_tracker/1/collection//approval-123/challenge-1/0xabc..."
```

The REST path order is `{collectionId}/{approvalLevel}/{approverAddress}/{approvalId}/{challengeTrackerId}/{signature}`.

## Request

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | string | Collection ID. |
| `approvalLevel` | string | `collection`, `incoming`, or `outgoing`. |
| `approverAddress` | string | Empty for `collection`. |
| `approvalId` | string | Approval ID. |
| `challengeTrackerId` | string | `challengeTrackerId` from the ETH signature challenge. |
| `signature` | string | Full `0x`-prefixed Ethereum signature. |

## Response

```json
{
  "numUsed": "1"
}
```

| Field | Type | Description |
| --- | --- | --- |
| `numUsed` | string | Uses so far. `"0"` when never used. |

## Behavior

- Each signature can be used once per challenge tracker. A value of `"1"` means the signature is spent and a transfer that presents it again fails.

## Related

- [ETH signature challenges](../approval-criteria/eth-signature-challenges.md)
- [GetChallengeTracker](get-challenge-tracker.md)
