---
description: "Sign In with BitBadges (SIWBB) is an OAuth 2.0 flow that proves address ownership and grants your app BitBadges API scopes."
---

# Sign In with BitBadges

Sign In with BitBadges (SIWBB) is an OAuth 2.0 provider. A user proves they own an address on BitBadges, your app receives an authorization code, and you exchange it for the address plus access and refresh tokens. Use it when you need authenticated BitBadges API access on a user's behalf, or when you want one flow that combines address ownership with claim criteria.

This page is also part of the [API reference](/api-reference).

## Example

```ts
import { generateBitBadgesAuthUrl } from 'bitbadges';

// 1. Send the user here
const authUrl = generateBitBadgesAuthUrl({
  client_id: '<client-id>',
  redirect_uri: 'https://example.com/api/callback',
  state: '<random-state>',
  scope: 'completeClaims,readPrivateClaimData' // optional
});

// 2. At the redirect URI, exchange the code
const res = await BitBadgesApi.exchangeSIWBBAuthorizationCode({
  code: req.query.code as string,
  grant_type: 'authorization_code',
  client_id: '<client-id>',
  client_secret: '<client-secret>',
  redirect_uri: 'https://example.com/api/callback'
});

const { address, chain, verificationResponse, access_token } = res;
if (!verificationResponse?.success) throw new Error('Not authenticated');
```

```bash
curl -X POST https://api.bitbadges.io/api/v0/siwbb/token \
  -H "Content-Type: application/json" -H "x-api-key: <key>" \
  -d '{ "code": "<code>", "grant_type": "authorization_code",
        "client_id": "<client-id>", "client_secret": "<client-secret>",
        "redirect_uri": "https://example.com/api/callback" }'
```

## OAuth endpoints

| Endpoint | URL |
| --- | --- |
| Authorization | `https://bitbadges.io/siwbb/authorize?<params>` |
| Token | `https://api.bitbadges.io/api/v0/siwbb/token` |
| Revoke | `https://api.bitbadges.io/api/v0/siwbb/token/revoke` |

[Demo](https://bitbadges.io/siwbb/authorize?client_id=example-client-id&redirect_uri=https://example.com&)

## What is in this section

| Page | Read it when |
| --- | --- |
| [Setup](setup.md) | You register an OAuth app and get a client ID and secret. |
| [Authorization URL](authorization-url.md) | You build the URL the user visits, with scopes and an optional claim. |
| [Callback](callback.md) | You handle the redirect with `code` and `state`. |
| [Verification](verification.md) | You exchange the code, manage access and refresh tokens, and know what is and is not verified. |
| [Frameworks](frameworks.md) | You integrate through Auth0, WordPress, Supabase, Discourse, or Passport.js. |

The short guide version is [Sign in users](../../guides/sign-in-users.md). The CLI has the same flow for terminals and agents under `bb auth` (`login`, `challenge`, `verify`, `status`, `logout`), see [CLI auth](../../cli/auth.md).

## Flow

1. **BitBadges side.** The user opens your authorization URL (direct link or popup), proves address ownership, meets any extra criteria you attached (for example a claim), and receives an authorization code. With a redirect URI the code goes to your callback; without one it is shown as a QR code and stored in the user's account for delayed or in-person flows.
2. **Your side.** Receive the code, exchange it for the address and tokens, check any other criteria server-side, and apply your own security (state validation, replay protection). Then get on with your app.

## When to use something else

SIWBB exists mainly for OAuth authorization of the BitBadges API. If you only need Web3 login and never call the API on the user's behalf, a general Web3 auth provider (WalletConnect, Magic, and others) works too. You can still combine any authentication with claim checks:

```ts
// 1. Authenticate the user with your existing setup
// 2. Verify claim success through the API
const res = await BitBadgesApi.checkClaimSuccess(claimId, address);
```

## Related

- [Setup](setup.md)
- [Sign in users](../../guides/sign-in-users.md)
- [Claims](../claims/README.md)
- [API reference](/api-reference)
