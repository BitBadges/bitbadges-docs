---
description: "Sign In with BitBadges (SIWBB) is an OAuth 2.0 flow that proves address ownership and grants your app BitBadges API scopes."
---

# Sign In with BitBadges

Sign In with BitBadges (SIWBB) is an OAuth 2.0 provider. A user proves they own an address on BitBadges, your app receives an authorization code, and you exchange it for the address plus access and refresh tokens. Use it when you need authenticated BitBadges API access on a user's behalf, or when you want one flow that combines address ownership with claim criteria.

See the [API reference](/api-reference) for every route's request and response schema.

## Example

```ts
import crypto from 'crypto';
import { BigIntify, BitBadgesAPI, generateBitBadgesAuthUrl } from 'bitbadges';

const BitBadgesApi = new BitBadgesAPI({ apiKey: process.env.BITBADGES_API_KEY, convertFunction: BigIntify }); // key from https://bitbadges.io/developer

// 1. Send the user here. Store `state` in the session so the callback can check it.
const state = crypto.randomBytes(16).toString('hex');
const authUrl = generateBitBadgesAuthUrl({
  client_id: 'app_demo_01',
  redirect_uri: 'https://example.com/api/callback',
  state,
  scope: 'completeClaims,readPrivateClaimData' // optional
});

// 2. At the redirect URI, exchange the code
const res = await BitBadgesApi.exchangeSIWBBAuthorizationCode({
  code: req.query.code as string,
  grant_type: 'authorization_code',
  client_id: 'app_demo_01',
  client_secret: process.env.SIWBB_CLIENT_SECRET,
  redirect_uri: 'https://example.com/api/callback'
});

const { address, chain, bitbadgesAddress, verificationResponse, access_token } = res;
if (!verificationResponse?.success) throw new Error('Not authenticated');
```

```bash
curl -X POST https://api.bitbadges.io/api/v0/siwbb/token \
  -H "Content-Type: application/json" -H "x-api-key: $BITBADGES_API_KEY" \
  -d '{ "code": "9c1f4e2b7a6d5c4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e",
        "grant_type": "authorization_code",
        "client_id": "app_demo_01", "client_secret": "'"$SIWBB_CLIENT_SECRET"'",
        "redirect_uri": "https://example.com/api/callback" }'
```

```json
{
  "address": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
  "chain": "Cosmos",
  "bitbadgesAddress": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
  "verificationResponse": { "success": true },
  "access_token": "siwbb_at_7d2e9f4a1b6c3d8e5f0a2b9c4d7e1f6a",
  "token_type": "Bearer",
  "access_token_expires_at": "1788825600000",
  "refresh_token": "siwbb_rt_2b9c4d7e1f6a7d2e9f4a1b6c3d8e5f0a",
  "refresh_token_expires_at": "1793923200000"
}
```

{% hint style="info" %}
**Ask your agent.** With the MCP builder tools connected, a prompt like this works: "Check whether bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue owns at least one token from collection 1, then tell me which Sign In with BitBadges scopes my backend needs to complete claims on that user's behalf." The agent calls `verify_ownership` and `fetch_docs` and answers with the scope names to put in the authorization URL.
{% endhint %}

## OAuth Endpoints

| Endpoint | URL |
| --- | --- |
| Authorization | `https://bitbadges.io/siwbb/authorize?<params>` |
| Token | `https://api.bitbadges.io/api/v0/siwbb/token` |
| Revoke | `https://api.bitbadges.io/api/v0/siwbb/token/revoke` |

[Demo](https://bitbadges.io/siwbb/authorize?client_id=example-client-id&redirect_uri=https://example.com&)

## What Is in This Section

| Page | Read it when |
| --- | --- |
| [Setup](setup.md) | You register an OAuth app and get a client ID and secret. |
| [Authorization URL](authorization-url.md) | You build the URL the user visits, with scopes and an optional claim. |
| [Callback](callback.md) | You handle the redirect with `code` and `state`. |
| [Verification](verification.md) | You exchange the code, manage access and refresh tokens, and know what is and is not verified. |
| [Frameworks](frameworks.md) | You integrate through Auth0, WordPress, Supabase, Discourse, or Passport.js. |

The short guide version is [Sign In Users](../../guides/sign-in-users.md). The CLI has the same flow for terminals and agents under `bb auth` (`login`, `challenge`, `verify`, `status`, `logout`), see [CLI auth](../../cli/auth.md).

## Flow

1. **BitBadges side.** The user opens your authorization URL (direct link or popup), proves address ownership, meets any extra criteria you attached (for example a claim), and receives an authorization code. With a redirect URI the code goes to your callback; without one it is shown as a QR code and stored in the user's account for delayed or in-person flows.
2. **Your side.** Receive the code, exchange it for the address and tokens, check any other criteria server-side, and apply your own security (state validation, replay protection). Then get on with your app.

## When to Use Something Else

SIWBB exists mainly for OAuth authorization of the BitBadges API. If you only need Web3 login and never call the API on the user's behalf, a general Web3 auth provider (WalletConnect, Magic, and others) works too. You can still combine any authentication with claim checks:

```ts
// 1. Authenticate the user with your existing setup, which yields `address`
// 2. Verify claim success through the API
const res = await BitBadgesApi.checkClaimSuccess('claim_demo_01', address);
if (res.successCount < 1) throw new Error('Claim not completed');
```

## Related

- [Setup](setup.md)
- [Sign In Users](../../guides/sign-in-users.md)
- [Claims](../claims/README.md)
- [API reference](/api-reference)
