---
description: "Gate an API or resource behind token ownership with BB-402. Server that returns 402, verifies a signed proof, and checks balances; client that answers it."
---

# Gate Access with BB-402

At the end you have an HTTP endpoint that serves only callers who own the tokens you require, and a client that satisfies it. BB-402 is the protocol: the server answers `402 Payment Required` with the ownership requirements and a message to sign, the caller signs it, and the server verifies the signature and the on-chain balance. The spec, versioning, and x402 comparison live in [BB-402](../token-standard/bb-402/README.md).

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

| Code | Meaning | Client action |
| --- | --- | --- |
| `200` | Authenticated and authorized | Consume the response |
| `402` | No proof, invalid proof, or expired proof | Sign the message, retry |
| `403` | Valid identity, insufficient ownership | Acquire tokens, retry |

Prerequisites:

- A collection whose tokens represent the access you sell. See [Create a Collection](create-a-collection.md). Token rules (non-transferable, revocable, time-bounded, supply-capped, approval-gated) are set at the collection level and enforced by the chain.
- A BitBadges API key for the ownership check. Create one at [bitbadges.io/developer](https://bitbadges.io/developer) and send it in the `x-api-key` header. See [BitBadges API](../api/README.md).

## 1. Write the Ownership Requirements

The `ownershipRequirements` value is an `AccessCondition`: a `TokenCheck`, or `$and` / `$or` groups of them, nested as deep as you need.

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
      "collectionId": "3",
      "tokenIds": [{ "start": "1", "end": "1" }],
      "ownershipTimes": [{ "start": "1788739200000", "end": "1791331200000" }],
      "mustOwnAmounts": { "start": "1", "end": "18446744073709551615" }
    }
  ],
  "options": { "numMatchesForVerification": "1" }
}
```

| Field | Description |
| --- | --- |
| `chain` | `"BitBadges"`, `"Ethereum"`, `"Polygon"`, `"Solana"` |
| `collectionId` | Collection or contract identifier |
| `tokenIds` | Token ID ranges `{ start, end }` (inclusive) |
| `ownershipTimes` | BitBadges only. Time ranges (Unix ms) when ownership must hold; the chain tracks ownership across time natively. Leave empty ("owns right now") for cross-chain compatibility. |
| `mustOwnAmounts` | Quantity range. `{ start: '1', end: '1' }` = exactly 1; use an upper bound of `'18446744073709551615'` for at least 1. `{ start: '0', end: '0' }` = must NOT own. |
| `numMatchesForVerification` | Only N token IDs need to match ("any 3 of 10") |

Patterns, all expressed through the collection and this condition:

| Use case | How |
| --- | --- |
| Pay per request | A paid token is a receipt. Charging for each request also requires tracking consumption or requiring a fresh receipt; an ownership check alone allows reuse. |
| Subscriptions | Time-bounded ownership via `ownershipTimes`. Check that the range overlaps now. |
| Tiered access | Different token ID ranges = different tiers (ID 1 basic, ID 2 premium, ID 3 admin) |
| Reputation gates | Non-transferable tokens from prior services |
| Prepaid credits | A fungible token balance |
| 2FA | A short-lived token proving a recent action |
| Milestone access | `$and`: own token A (phase 1) AND token B (payment) |
| Blocklists | Must NOT own a ban token |
| Compound | `$and` / `$or` nesting: "subscribed AND reputable AND not banned" |
| Multi-collection | Tokens from several collections combined with `$and` / `$or` |
| Cross-chain | Tokens on BitBadges, Ethereum, Polygon, or Solana |

Subscription AND not banned:

```json
{
  "$and": [
    {
      "tokens": [{
        "chain": "BitBadges",
        "collectionId": "3",
        "tokenIds": [{ "start": "1", "end": "1" }],
        "ownershipTimes": [{ "start": "1788739200000", "end": "1791331200000" }],
        "mustOwnAmounts": { "start": "1", "end": "18446744073709551615" }
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
**Ask your agent.** With the MCP builder tools installed, paste one of these:

```text
Check whether bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue owns token 1 of collection 1 right now.
```

```text
Using the bb-402 skill, build a soulbound receipt collection where minting costs 1 USDC, then give me the review link.
```
{% endhint %}

## 2. Check Ownership from the Server

Confirm the check works before wiring the protocol. Pick the surface you have.

Single token, current time:

```bash
bb balances bitbadges bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --collection 1 --token 1
bb query tokenization balance-for-token 1 bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue 1
```

```ts
import { BigIntify, BitBadgesAPI } from 'bitbadges';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });

const res = await api.getBalanceByAddressSpecificToken('1', '1', 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue');
console.log(res.balance); // e.g. 100n

// At a specific ownership time (ms). Queries the token's ownership time ranges,
// not historical chain state.
const at = await api.getBalanceByAddressSpecificToken('1', '1', 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue', undefined, { time: 1788739200000n });
```

```text
GET /api/v0/collection/:collectionId/:tokenId/balance/:address
GET /api/v0/collection/:collectionId/:tokenId/balance/:address?time=1700000000000
```

Returns `{ "balance": "100" }`. `time` defaults to now. The MCP builder tools expose the same lookup as `query_balance({ collectionId, address, tokenId })`. The full 3D balance array and the helpers `getBalanceForIdNow` / `getBalanceForIdAndTime` are in [Balance Lookups](../sdk/snippets/balance-lookups.md).

Compound conditions in one call. The API takes the SDK condition shape (`assets` and `assetIds` instead of `tokens` and `tokenIds`) and returns `success` with HTTP 200 whether or not the address qualifies, so check the field:

```ts
const res = await api.verifyOwnershipRequirements({
  address: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue',
  assetOwnershipRequirements: {
    $and: [{
      assets: [{
        chain: 'BitBadges',
        collectionId: '1',
        assetIds: [{ start: '1', end: '1' }],
        ownershipTimes: [],
        mustOwnAmounts: { start: '1', end: '18446744073709551615' }
      }]
    }]
  }
});
if (!res.success) throw new Error(res.errorMessage);
```

```ts
async function checkOwnership(address: string, requirements: object, apiKey: string): Promise<boolean> {
  const res = await fetch('https://api.bitbadges.io/api/v0/verifyOwnershipRequirements', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey },
    body: JSON.stringify({ address, assetOwnershipRequirements: requirements }),
  });
  if (!res.ok) return false;
  const data = await res.json();
  return data.success === true;
}
```

Session-based apps can skip the proof header and use [Sign in with BitBadges](sign-in-users.md) instead; the ownership check is the same.

## 3. Build the Server

The snippets below form one server file. Install its dependencies:

```bash
# API, HTTP server, and Cosmos signature verification
bun add bitbadges express @cosmjs/crypto @cosmjs/encoding @cosmjs/amino

# EVM signature verification
bun add ethers
```

Nonces (use Redis or a database in production):

```ts
import crypto from 'crypto';

const nonces = new Map<string, number>();
const NONCE_TTL_MS = 60_000;

function generateNonce(): string {
  const nonce = crypto.randomBytes(16).toString('hex');
  nonces.set(nonce, Date.now());
  return nonce;
}

function validateNonce(nonce: string): boolean {
  const created = nonces.get(nonce);
  if (!created || Date.now() - created > NONCE_TTL_MS) {
    nonces.delete(nonce);
    return false;
  }
  nonces.delete(nonce); // single-use
  return true;
}
```

Proof decoding. The `X-BB-Proof` header is base64 JSON with `address`, `chain` (signing scheme), `message` (echoed back), `signature`, and an optional `publicKey`:

```ts
function decodeProof(header: string) {
  return JSON.parse(Buffer.from(header, 'base64').toString());
}

// Proof shape: { address, chain, message, signature, publicKey? }
```

EVM signatures (EIP-191):

```ts
import { ethers } from 'ethers';

function verifyEvmSignature(message: string, signature: string, address: string): boolean {
  const recovered = ethers.verifyMessage(message, signature);
  return recovered.toLowerCase() === address.toLowerCase();
}
```

Cosmos signatures (ADR-036). The proof must carry `publicKey`:

```ts
import { Secp256k1, Secp256k1Signature, Sha256 } from '@cosmjs/crypto';
import { fromBase64, toBase64 } from '@cosmjs/encoding';
import { serializeSignDoc, encodeSecp256k1Pubkey, pubkeyToAddress } from '@cosmjs/amino';

async function verifyCosmosSignature(
  message: string, signature: string, publicKey: string
): Promise<{ valid: boolean; address: string }> {
  const pubKeyBytes = fromBase64(publicKey);
  const sigBytes = fromBase64(signature);
  const aminoPubKey = encodeSecp256k1Pubkey(pubKeyBytes);
  const address = pubkeyToAddress(aminoPubKey, 'bb');

  const signDoc = {
    chain_id: '',
    account_number: '0',
    sequence: '0',
    fee: { gas: '0', amount: [] },
    msgs: [{
      type: 'sign/MsgSignData',
      value: {
        signer: address,
        data: toBase64(new TextEncoder().encode(message)),
      },
    }],
    memo: '',
  };

  const hash = new Sha256(serializeSignDoc(signDoc)).digest();
  const valid = await Secp256k1.verifySignature(
    Secp256k1Signature.fromFixedLength(sigBytes), hash, pubKeyBytes
  );
  return { valid, address };
}
```

The endpoint (Express). Requirements in BB-402 shape go to the client; the ownership check uses the single-token lookup from step 2:

```ts
import express from 'express';
import { BigIntify, BitBadgesAPI, convertToBitBadgesAddress } from 'bitbadges';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });
const app = express();
app.use(express.json());

// The ownership requirements for this endpoint
const REQUIREMENTS = {
  tokens: [{
    chain: 'BitBadges',
    collectionId: '1',
    tokenIds: [{ start: '1', end: '1' }],
    ownershipTimes: [],
    mustOwnAmounts: { start: '1', end: '18446744073709551615' }
  }]
};

function challenge(res: express.Response) {
  return res.status(402).json({
    version: '1',
    ownershipRequirements: REQUIREMENTS,
    message: generateNonce()
  });
}

app.get('/api/data', async (req, res) => {
  const proofHeader = req.headers['x-bb-proof'];

  // No proof? Return 402 with requirements + message to sign
  if (!proofHeader) return challenge(res);

  try {
    const proof = decodeProof(proofHeader as string);

    // Validate nonce (single-use, expires)
    if (!validateNonce(proof.message)) return challenge(res);

    // Verify signature (chain-specific)
    let isValid = false;
    if (proof.chain === 'Ethereum') {
      isValid = verifyEvmSignature(proof.message, proof.signature, proof.address);
    } else if (proof.chain === 'BitBadges') {
      const result = await verifyCosmosSignature(proof.message, proof.signature, proof.publicKey);
      isValid = result.valid && result.address === proof.address;
    }
    if (!isValid) {
      return challenge(res);
    }

    // Check token ownership via BitBadges API
    const bbAddress = convertToBitBadgesAddress(proof.address);
    const { balance } = await api.getBalanceByAddressSpecificToken(
      REQUIREMENTS.tokens[0].collectionId, '1', bbAddress
    );
    if (balance < 1n) {
      return res.status(403).json({ error: 'Ownership requirements not met' });
    }

    res.json({ data: 'Here is your gated content' });
  } catch (err) {
    return challenge(res);
  }
});

app.listen(3000);
```

The `message` format is yours. A plain nonce works. A JSON string binds the challenge to the request, which the client signs and echoes back unchanged:

```json
{
  "version": "1",
  "ownershipRequirements": {
    "tokens": [
      {
        "chain": "BitBadges",
        "collectionId": "1",
        "tokenIds": [{ "start": "1", "end": "1" }],
        "ownershipTimes": [],
        "mustOwnAmounts": { "start": "1", "end": "18446744073709551615" }
      }
    ]
  },
  "message": "{\"nonce\":\"3f9c2a7e1b8d4c6f\",\"timestamp\":1788739200000,\"expiresAt\":1788739260000,\"domain\":\"example.com\",\"method\":\"GET\",\"path\":\"/api/data\"}"
}
```

## 4. Build the Client

A Node.js or Bun client that accepts an Ethereum signer (`chain: "Ethereum"`) or Cosmos ADR-036 signer (`chain: "BitBadges"`) (`Buffer` is a server-runtime API):

```ts
async function fetchWithBB402(url: string, signMessage: (msg: string) => Promise<{
  address: string; chain: string; signature: string; publicKey?: string;
}>) {
  const res = await fetch(url);
  if (res.status !== 402) return res;

  const { message } = await res.json();
  const signed = await signMessage(message);

  const proof = Buffer.from(JSON.stringify({
    address: signed.address,
    chain: signed.chain,
    message,
    signature: signed.signature,
    ...(signed.publicKey ? { publicKey: signed.publicKey } : {}),
  })).toString('base64');

  return fetch(url, { headers: { 'X-BB-Proof': proof } });
}
```

An agent with an Ethereum key, handling 403 as well:

```ts
import { ethers } from 'ethers';

const wallet = new ethers.Wallet(process.env.AGENT_KEY!);

async function fetchWithBB402(url: string) {
  // 1. Initial request
  let res = await fetch(url);

  // 2. Handle 402: sign the message and retry
  if (res.status === 402) {
    const { ownershipRequirements, message } = await res.json();
    const signature = await wallet.signMessage(message);

    const proof = Buffer.from(JSON.stringify({
      address: wallet.address,
      chain: 'Ethereum',
      message,
      signature
    })).toString('base64');

    res = await fetch(url, { headers: { 'X-BB-Proof': proof } });
  }

  // 3. Handle 403: need to acquire tokens
  if (res.status === 403) {
    console.log('Need to acquire required tokens. Check collection on-chain.');
    return null;
  }

  return res.json();
}

const data = await fetchWithBB402('https://example.com/api/data');
```

## 5. Harden It

- HTTPS only. Proof headers replay over plaintext HTTP.
- Replay protection is the server's job through `message`: nonces, timestamps, or endpoint binding.
- Ownership can change between verification and response, and every check is point-in-time. Use short windows, cache deliberately, and re-verify before critical operations.
- Rate-limit 402 responses. The endpoint is unauthenticated. HMAC-signed timestamps give stateless nonce generation.

## Next Steps

- [BB-402](../token-standard/bb-402/README.md) for the full specification and collection recipes.
- [Sign In Users](sign-in-users.md) for session-based gating instead of per-request proofs.
- [Subscriptions and Time-Based Tokens](subscriptions-and-time-based-tokens.md) for the collection behind a subscription gate.
