---
description: "BB-402 protocol specification v1 (draft, 2026-03-05): flow, message formats, AccessCondition grammar, verification, security, versioning, x402 comparison."
---

# BB-402 specification

Version 1. Status: draft. Date: 2026-03-05. This is the normative text; [BB-402](README.md) is the overview and [Gate access](../../guides/gate-access.md) has the code.

## Abstract

BB-402 is an HTTP-based protocol for gating API access behind on-chain token ownership requirements. A server returns a `402 Payment Required` response containing an `AccessCondition` describing what the caller must own. The caller proves identity by signing a server-provided message, and the server verifies the signature, checks on-chain ownership, and serves the response if the requirements are met.

## Protocol flow

```text
1. Agent sends a normal HTTP request.

   GET /api/data HTTP/1.1
   Host: example.com

2. Server returns 402 with ownership requirements and a message to sign.

   HTTP/1.1 402 Payment Required
   Content-Type: application/json

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

3. Agent signs the message, resubmits with proof header.

   GET /api/data HTTP/1.1
   Host: example.com
   X-BB-Proof: <base64-encoded JSON proof>

4. Server verifies signature, checks ownership, returns response.

   HTTP/1.1 200 OK
   (or 403 if ownership check fails)
```

### 402 response body

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `version` | `string` | yes | Protocol version. Currently `"1"`. |
| `ownershipRequirements` | `AccessCondition` | yes | Token ownership the caller must satisfy |
| `message` | `string` | yes | Opaque string the agent must sign. Server-defined format (nonce, SIWE, JWT). The server generates it, validates it, and decides its validity duration. |

### Proof header (`X-BB-Proof`)

Base64-encoded JSON:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | yes | Address claiming to meet the requirements |
| `chain` | `string` | yes | Signing scheme: `"BitBadges"` (secp256k1), `"Ethereum"` (EIP-191 or EIP-712), `"Solana"` (ed25519) |
| `message` | `string` | yes | Exact message from the 402 response |
| `signature` | `string` | yes | Signature over `message` by `address` |

### Server verification

1. Decode the proof header and parse the JSON.
2. Validate the message: confirm the server issued it (nonce check, expiry).
3. Verify the signature with the `chain` signing scheme.
4. Resolve the address to its canonical format for the ownership lookup.
5. Check ownership against `ownershipRequirements`.
6. Return `200` if all pass, `403` if the signature is valid but ownership fails, or `402` with a fresh message if the proof is invalid or expired.

The 402 versus 403 distinction matters for agents: 403 means "identity confirmed, go acquire tokens", 402 means "start the auth flow over".

## Ownership requirements (`AccessCondition`)

A recursive type: a boolean combinator or a leaf `TokenCheck`.

```text
AccessCondition = { "$and": AccessCondition[] }
                | { "$or":  AccessCondition[] }
                | TokenCheck
```

### `TokenCheck`

```json
{
  "tokens": [
    {
      "chain": "BitBadges",
      "collectionId": "42",
      "tokenIds": [
        { "start": "1", "end": "10" }
      ],
      "mustOwnAmounts": { "start": "1", "end": "1" }
    }
  ],
  "options": { "numMatchesForVerification": "3" }
}
```

`options.numMatchesForVerification`: when set, only this many token IDs need to satisfy the requirement. The example passes when the caller owns any 3 of token IDs 1 to 10.

### `TokenRequirement`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chain` | `string` | yes | `"BitBadges"`, `"Ethereum"`, `"Polygon"`, `"Solana"` |
| `collectionId` | `string` | yes | Collection or contract identifier |
| `tokenIds` | `Range[]` | yes | Token ID ranges `{ "start": string, "end": string }`, inclusive |
| `ownershipTimes` | `Range[]` | no | Time ranges (Unix ms) during which ownership must hold. BitBadges-specific: the chain tracks ownership across time, so a server can ask "did this address own token X during March 2026?". Not supported on Ethereum, Polygon, or Solana; omit it there. When omitted or empty, the check is "owns at time of request", which works on every chain. Most use cases leave it empty. |
| `mustOwnAmounts` | `Range` | yes | Quantity range, inclusive. `{1, 1}` is exactly one. `{0, 0}` is must not own. |

### Example: compound condition

Has an active subscription and does not hold a ban token:

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

## Security considerations

### Replay attacks

A signed proof can be replayed if it is not scoped. The server controls the `message` and SHOULD include entropy or expiry:

- Nonce tracking: stateful servers SHOULD track issued nonces and reject reuse.
- Timestamp embedding: servers MAY embed a timestamp and reject proofs older than a threshold (for example 30 s). This gives stateless replay protection.
- Endpoint binding: servers MAY include the method and path in the message to prevent cross-endpoint replay.

Agents SHOULD treat signed proofs as sensitive credentials and never log or share them.

### Ownership state changes

On-chain state is not static. Tokens can be transferred, time-bounded ownership can expire, and balances can decrease between verification and response delivery. This is inherent to any on-chain verification system, including x402.

- Servers SHOULD keep the gap between verification and response delivery minimal.
- For most API use cases, a brief window of stale state is acceptable.
- For high-value operations, servers SHOULD re-verify at the point of execution.
- Servers that cache verification results should document the cache TTL. 30 seconds is reasonable for general API access; 0 seconds for sensitive operations.

### Transport security

BB-402 MUST only be used over HTTPS. Proof headers intercepted over plaintext HTTP can be replayed by a man-in-the-middle within the message's validity window.

### 402 endpoint abuse

The 402 response is unauthenticated. Servers SHOULD rate limit it to prevent nonce exhaustion. Servers using self-contained messages (HMAC-signed timestamps) avoid nonce-tracking state. Ownership requirements in 402 responses should be assumed public.

## Versioning

The `version` field enables protocol evolution. Agents SHOULD check the version and fail gracefully on unsupported versions. Agents MAY send `Accept-BB-Version: 1, 2` to negotiate. Servers and agents MUST ignore unrecognized fields for forward compatibility.

Future versions may introduce multi-address proofs, delegated proofs, session tokens, bidirectional authentication, and batch requests.

## Implementation notes

Servers: verify signatures per chain scheme, convert addresses to canonical format, evaluate the `AccessCondition` tree recursively (`$and` = all pass, `$or` = any passes, `TokenCheck` = verify balances). Middleware (Express, Hono) that wraps route handlers fits well; see [Gate access](../../guides/gate-access.md).

Agents: detect 402 responses, parse the requirements, optionally check whether they are already satisfied, sign the message, resubmit with `X-BB-Proof`. On 403, acquire the required tokens and retry. Fulfillment (minting, purchasing) is agent-specific and outside the protocol.

## Comparison with x402

x402 (Coinbase, 2025) pioneered HTTP 402 for AI agent payments. BB-402 uses the same HTTP pattern and replaces x402's single-dimensional payment model with a general ownership verification system.

### x402 is one-dimensional

x402 is designed around one operation: transfer a token payment to an address (mostly USDC on Base, though the spec allows other tokens and chains). Every request is a standalone payment with no memory, state, or conditions beyond "did the money arrive". Subscriptions, tiered access, reputation requirements, and multi-condition invoicing need custom server logic on top.

### BB-402 is multi-dimensional

BB-402 replaces "did they pay?" with "do they own the right tokens?". Token ownership can represent anything, including payment itself. In its simplest form BB-402 replicates x402: a soulbound (non-transferable) token that costs X USDC to mint is a verifiable on-chain receipt. The agent pays to mint it, and ownership proves payment permanently, verifiably, and without the server tracking payment state. The receipt can be checked on any future request without paying again, composed with other conditions, and verified by any third party.

| x402 | BB-402 |
| --- | --- |
| Pay per request (USDC transfer) | Pay per request: soulbound token costing X USDC is a verifiable on-chain receipt |
| none | Subscriptions: time-bounded token ownership (BitBadges). Check once, valid for the period. |
| none | Tiered access: different token ID ranges are different service tiers |
| none | Reputation gates: non-transferable tokens from prior services. Cannot be faked. |
| none | Prepaid credits: fungible token balance decremented over time |
| none | Short-lived 2FA: token valid for seconds, proving a recent action |
| none | Milestone access: own token A (phase 1) and token B (payment) to open phase 2 |
| none | Blocklists: must not own a ban token (`mustOwnAmounts: {0, 0}`) |
| none | Compound conditions: `$and` and `$or` nesting. "Subscribed and reputable and not banned." |
| none | Cross-chain: tokens on BitBadges, Ethereum, Polygon, or Solana in one condition |
| Single payment type (ERC-20 transfer) | Custom token rules: non-transferable, revocable, frozen, approval-gated, supply-capped, time-bounded |
| Fixed EIP-712 payment signature | Server-defined auth: message format is opaque (nonce, SIWE, JWT, anything) |

### Custom token rules

With x402, transferred USDC is gone: no refunds, revocation, or restrictions. BB-402 tokens inherit the rules of their collection:

- Non-transferable: identity-bound access; prevents secondary markets for credentials.
- Revocable: the provider revokes tokens on-chain; enforcement on the next request.
- Approval-gated transfers: controlled resale; transfers require creator approval.
- Time-bounded ownership: on-chain expiry with no stale state to manage.
- Supply caps: natural scarcity for premium tiers.

Tradeoff: agents must understand the collection's rules. A non-transferable token cannot be resold; a revocable token means the issuer can pull access. The collection creator chooses the tradeoffs, and agents can inspect the on-chain configuration before acquiring tokens.

### Infrastructure comparison

Both protocols depend on infrastructure, with different trust models. x402 introduces a facilitator (for example Coinbase) that verifies payment signatures, checks funds, and settles on-chain; the server trusts the facilitator to confirm payments before serving. Anyone can run a facilitator in theory; Coinbase operates the reference one. BB-402 has no settlement step; it performs read-only ownership checks against the BitBadges API (or another chain's indexer), and a server that wants to minimize trust runs its own node.

| | x402 | BB-402 |
| --- | --- | --- |
| What is verified | Payment validity and fund transfer | Token ownership (read-only) |
| Who verifies | Facilitator service | BitBadges API, another indexer, or your own node |
| Settlement | Facilitator settles on-chain | None; ownership is pre-existing state |
| Self-hostable | Yes (run a facilitator) | Yes (run a node or indexer) |

## Related

- [BB-402](README.md)
- [Gate access](../../guides/gate-access.md)
- [Collection recipes](collection-recipes.md)
