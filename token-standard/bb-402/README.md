---
description: "Gate any HTTP API behind on-chain token ownership with the 402 status code. Flow, 402 body, X-BB-Proof header, AccessCondition, response codes."
---

# BB-402

BB-402 is an HTTP protocol for gating API access behind on-chain token ownership. A server answers an unauthenticated request with `402 Payment Required` and a description of the tokens the caller must own. The caller signs a server-provided message, resends with an `X-BB-Proof` header, and the server verifies the signature and the ownership before serving. It is built for AI agents, bots, and any programmatic client. This page is the protocol; the server and client code lives in [Gate access](../../guides/gate-access.md), the normative text in [Specification](spec.md), and collection setups in [Collection recipes](collection-recipes.md).

```text
Agent  -->  Server:   GET /api/data
Server -->  Agent:    402 Payment Required
                      { version, ownershipRequirements, message }

Agent signs the message, resubmits:

Agent  -->  Server:   GET /api/data
                      X-BB-Proof: { address, chain, message, signature }

Server verifies signature + ownership:

Server -->  Agent:    200 OK  (or 403 if ownership fails)
```

## Why BB-402

x402 (Coinbase) pioneered HTTP 402 for agent payments, but it supports one operation: transfer USDC per request. BB-402 replaces that with a general ownership check. Because token ownership can represent anything, one primitive covers many access models.

In its simplest form BB-402 replicates x402. A soulbound token that costs X USDC to mint is an on-chain receipt: the token is the proof of payment, persists on-chain, and can be reused. That is one configuration among many:

| Use case | How it works |
| --- | --- |
| Pay per request | Soulbound token costing X USDC is a verifiable receipt |
| Subscriptions | Time-bounded ownership through `ownershipTimes` |
| Tiered access | Different token ID ranges are different tiers |
| Reputation gates | Non-transferable tokens from prior services |
| Prepaid credits | A fungible token balance |
| 2FA | A short-lived token that proves a recent action |
| Milestone access | `$and`: own token A (phase 1) and token B (payment) |
| Blocklists | Must not own a ban token |
| Compound | `$and` and `$or` nesting: "subscribed and reputable and not banned" |
| Cross-chain | Tokens on BitBadges, Ethereum, Polygon, or Solana |

Token rules (non-transferable, revocable, time-bounded, supply-capped, approval-gated) are set on the collection and enforced by the chain.

## The 402 response

```json
{
  "version": "1",
  "ownershipRequirements": {
    "tokens": [{
      "chain": "BitBadges",
      "collectionId": "42",
      "tokenIds": [{ "start": "1", "end": "1" }],
      "mustOwnAmounts": { "start": "1", "end": "1" }
    }]
  },
  "message": "nonce:8f3a2b1c"
}
```

| Field | Description |
| --- | --- |
| `version` | Protocol version, currently `"1"` |
| `ownershipRequirements` | An `AccessCondition` describing what the caller must own |
| `message` | Opaque string the agent signs. The format is server-defined: nonce, SIWE, JWT, anything. |

## The proof header

`X-BB-Proof` is base64-encoded JSON with `address`, `chain` (the signing scheme), `message` (echoed back), and `signature`.

## Response codes

| Code | Meaning | Agent action |
| --- | --- | --- |
| `200` | Authenticated and authorized | Consume the response |
| `402` | No proof, invalid proof, or expired message | Sign the message and retry |
| `403` | Valid identity, insufficient ownership | Acquire tokens and retry |

The 402 versus 403 split tells an agent whether to restart the auth flow or go acquire tokens.

## Ownership requirements

`AccessCondition` is recursive: a boolean combinator or a leaf `TokenCheck`.

```text
AccessCondition = { "$and": AccessCondition[] }
                | { "$or":  AccessCondition[] }
                | TokenCheck
```

```json
{
  "tokens": [
    {
      "chain": "BitBadges",
      "collectionId": "100",
      "tokenIds": [{ "start": "1", "end": "1" }],
      "ownershipTimes": [{ "start": "1709654400000", "end": "1712332800000" }],
      "mustOwnAmounts": { "start": "1", "end": "1" }
    }
  ],
  "options": { "numMatchesForVerification": "3" }
}
```

| Field | Description |
| --- | --- |
| `chain` | `"BitBadges"`, `"Ethereum"`, `"Polygon"`, `"Solana"` |
| `collectionId` | Collection or contract identifier |
| `tokenIds` | Token ID ranges `{ start, end }`, inclusive |
| `ownershipTimes` | BitBadges only. Time ranges (Unix ms) when ownership must hold. Other chains do not support it; leave empty (meaning "owns right now") for cross-chain compatibility. |
| `mustOwnAmounts` | Quantity range. `{1,1}` is exactly one. `{0,0}` is must not own. |
| `numMatchesForVerification` | Only N token IDs need to match, for example any 3 of 10 |

Subscription and not banned:

```json
{
  "$and": [
    {
      "tokens": [{
        "chain": "BitBadges",
        "collectionId": "100",
        "tokenIds": [{ "start": "1", "end": "1" }],
        "ownershipTimes": [{ "start": "1709654400000", "end": "1712332800000" }],
        "mustOwnAmounts": { "start": "1", "end": "1" }
      }]
    },
    {
      "tokens": [{
        "chain": "BitBadges",
        "collectionId": "999",
        "tokenIds": [{ "start": "1", "end": "1" }],
        "mustOwnAmounts": { "start": "0", "end": "0" }
      }]
    }
  ]
}
```

{% hint style="info" %}
Ask your agent: "Check whether bob (bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue) owns token ID 1 of collection 42 right now." The MCP builder tools (`verify_ownership`) produce the objects on this page.
{% endhint %}

## Security notes

- HTTPS only. Proof headers are replayable over plaintext HTTP.
- Replay protection is the server's job through the `message`: nonces, timestamps, or endpoint binding.
- Ownership can change between verification and response. Keep windows short and re-verify for critical operations.
- Rate limit 402 responses; the endpoint is unauthenticated. HMAC-signed timestamps give stateless nonces.

## Related

- [Gate access](../../guides/gate-access.md)
- [Specification](spec.md)
- [Collection recipes](collection-recipes.md)
- [Sign in with BitBadges](../../api/sign-in/README.md)
