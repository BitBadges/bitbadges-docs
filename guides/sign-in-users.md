---
description: "Add Sign In with BitBadges to your app. Register an OAuth app, build the authorize URL, handle the callback, exchange the code, and check your own criteria."
---

# Sign In Users

At the end your app authenticates a user's BitBadges address through an OAuth2 flow, then checks claims, token ownership, or API scopes on top. Sign In with BitBadges (SIWBB) replaces a "Sign In with X" button and handles address authentication, token ownership verification, integration with 7000+ apps and plugins, and BitBadges API scope authorization in one flow. The endpoint reference is in [Sign In with BitBadges](../api/sign-in/README.md).

SIWBB exists mainly for OAuth authorization of the BitBadges API. If you only need wallet authentication, a Web3 auth service such as WalletConnect or Magic works too; you can then check criteria with the API directly:

```ts
import { BigIntify, BitBadgesAPI } from 'bitbadges';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY }); // key from https://bitbadges.io/developer

// Pre-req: Create claim in BitBadges site
// 1. Authenticate your user (using your existing setup)
// 2. Verify claim success
const res = await api.checkClaimSuccess('claim_demo_01', address);
```

The flow:

1. BitBadges side. The user opens your authorize URL (direct or popup), proves address ownership and any other criteria, and receives an authorization code (via redirect behind the scenes, or as a QR code).
2. Your side. Receive the code, exchange it, check your own criteria, apply replay protection, and start the session.

Endpoints:

- Authorization: `https://bitbadges.io/siwbb/authorize?your_params`
- Token: `https://api.bitbadges.io/api/v0/siwbb/token`
- Revoke: `https://api.bitbadges.io/api/v0/siwbb/token/revoke`

[Demo](https://bitbadges.io/siwbb/authorize?client_id=example-client-id&redirect_uri=https://example.com&)

## 1. Register an App

1. Go to [bitbadges.io/developer](https://bitbadges.io/developer), OAuth Apps, and register an app.
2. Record the client ID and client secret.
3. Add your redirect URIs.

| Item | Rules |
| --- | --- |
| Client ID | Unique identifier for your app, assigned at registration. |
| Client secret | Required to fetch authentication details. Confidential: never in client-side code, treated like a password. |
| Redirect URIs | Where users land after authentication. Pre-registered, HTTPS, and an exact match with what you send. Not needed for delayed or QR code authentication. |

{% hint style="info" %}
**Ask your agent.** With the MCP builder tools installed, paste one of these:

```text
Read the Sign In with BitBadges docs and write me an Express callback handler that exchanges the code and starts a session.
```

```text
Check whether the signed-in address bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue has completed claim claim_demo_01.
```
{% endhint %}

## 2. Build the Authorization URL

The base URL is `https://bitbadges.io/siwbb/authorize`. Parameters follow `CodeGenQueryParams`:

```ts
interface CodeGenQueryParams {
    client_id: string; // Required: Your app's client ID
    redirect_uri?: string; // Required for instant auth. Not needed for QR code auth.
    state?: string; // Optional: Additional data passed to redirect
    scope?: string; // Optional: Comma-separated BitBadges API permission scopes (e.g. 'completeClaims,readClaimAlerts')

    // Claim UI Options (optional)
    claimId?: string; // ID of required claim
    hideIfAlreadyClaimed?: boolean; // Hide if already claimed
    expectVerifySuccess?: boolean;

}
```

Generate it with the SDK, with [bitbadges.io/auth/linkgen](https://bitbadges.io/auth/linkgen), or with Create SIWBB URL on your app in the developer portal (recommended):

```ts
import crypto from 'crypto';
import { generateBitBadgesAuthUrl, CodeGenQueryParams } from 'bitbadges';

const params: CodeGenQueryParams = {
    client_id: process.env.SIWBB_CLIENT_ID!,
    redirect_uri: 'https://example.com/api/callback',
    state: crypto.randomUUID(), // store it in the session and compare on callback
    scope: 'completeClaims,readClaimAlerts'
};

const authUrl = generateBitBadgesAuthUrl(params);
// https://bitbadges.io/siwbb/authorize?client_id=...&redirect_uri=...&state=...&scope=...&
```

The helper URL-encodes object values as JSON and skips empty ones:

```ts
export const generateBitBadgesAuthUrl = (params: CodeGenQueryParams) => {
    let url = `https://bitbadges.io/siwbb/authorize?`;
    for (const [key, value] of Object.entries(params)) {
        if (value) {
            if (typeof value === 'object') {
                const valueString = JSON.stringify(value);
                const encodedValue = encodeURIComponent(valueString);
                url = url.concat(`${key}=${encodedValue}&`);
            } else {
                url = url.concat(`${key}=${value}&`);
            }
        }
    }
    return url;
};
```

What the parameters do:

- `redirect_uri` set: the code is delivered to your callback immediately. Blank: BitBadges generates a QR code and stores it in the user's account for in-person or delayed flows.
- `scope`: only for authorized BitBadges API access. With no scopes you still verify address ownership. All scopes are listed at [bitbadges.io/auth/linkgen](https://bitbadges.io/auth/linkgen).
- `claimId`: shows a claim on the authorize screen. This is display only; verify the claim server-side in step 5. `hideIfAlreadyClaimed` hides it once `successCount >= 1`. `expectVerifySuccess` blocks sign-in until the claim verifies, but users can edit URL parameters, so it does not replace your own check.

## 3. Handle the Callback

With a `redirect_uri`, the user never sees the code. BitBadges redirects to your URI with `code` and `state` as query parameters, following standard OAuth2:

```ts
// GET /api/callback?code=...&state=...
const callbackHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const code = req.query.code as string;   // 32 byte hex string
    const state = req.query.state as string;

    // Validate state, then exchange the code (step 4)
};
```

Validate `state` according to your requirements, and serve the callback over HTTPS. For QR code flows, the code is the QR content and you exchange it the same way; see [Callback](../api/sign-in/callback.md).

## 4. Exchange the Code

One exchange per code; BitBadges enforces this. `issuedAtTimeWindowMs` rejects codes older than the window (default 10 minutes, `0` disables). In-person flows usually need a longer window or `0`.

```ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { BigIntify, BitBadgesAPI } from 'bitbadges';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });

async function myHandler(req: NextApiRequest, res: NextApiResponse) {
    const code = req.query.code as string;

    const options = {
        issuedAtTimeWindowMs: 1000 * 60 * 10, // 10 minutes (set to 0 to disable)
    };

    // POST https://api.bitbadges.io/api/v0/siwbb/token
    const res = await api.exchangeSIWBBAuthorizationCode({
        code,
        options,
        grant_type: 'authorization_code',
        client_secret: process.env.SIWBB_CLIENT_SECRET!,
        client_id: process.env.SIWBB_CLIENT_ID!,
        redirect_uri: 'https://example.com/api/callback', //only needed for digital immediate flow
    });

    const { address, chain, verificationResponse } = res;
    if (!verificationResponse.success) {
        console.log(verificationResponse.errorMessage);
        throw new Error('Not authenticated');
    }

    const { access_token, access_token_expires_at, refresh_token, refresh_token_expires_at } = res;
    // Use these for session management and authorized API access (step 6)
}
```

The same call is available as `bb api auth exchange-siwbb-authorization-code --body '{...}'`; see [API commands](../cli/api.md).

## 5. Check Your Own Criteria

The exchange proves address ownership. It does not prove anything you attached to the URL. Check claims, ownership requirements, and attestations yourself, now that you know the user owns `address`:

```ts
// Claim success for this address
const claimAttemptsByAddress = await api.getClaimAttempts('claim_demo_01', { address });
const success = await api.checkClaimSuccess('claim_demo_01', address);

// Token ownership: holds token 1 of collection 1 right now
const ownership = await api.verifyOwnershipRequirements({
    address,
    assetOwnershipRequirements: {
        $and: [
            {
                assets: [
                    {
                        chain: 'BitBadges',
                        collectionId: '1',
                        assetIds: [{ start: '1', end: '1' }],
                        ownershipTimes: [],
                        mustOwnAmounts: { start: '1', end: '1' }
                    }
                ]
            }
        ]
    }
});
```

Verified natively by the exchange:

- Proof of address ownership via the user's authenticated BitBadges account
- Anything specified in the verify challenge options
- Code age within `options.issuedAtTimeWindowMs` (default 10 minutes)
- One exchange per authorization code

Not verified natively:

- App-specific criteria (claims, ownership requirements, attestations)
- Flash ownership attacks, replay attacks, or man-in-the-middle attacks beyond what OAuth2 protects against

Your checklist for the handler:

- Prevent replay with timestamps or nonces.
- Cache what you need for later.
- If gating on an asset, ask whether it is transferable and open to flash ownership (for example, one use per asset).
- Apply any other sign-in rules (address whitelist or blacklist).
- If receiving attestations, verify the message contents, the creator, the metadata, and the on-chain anchors and update history.

The ownership requirement shape is in [Gate access](gate-access.md).

## 6. Manage the Session

Access tokens expire in 1 day and refresh tokens in 60 days by default; both become invalid when the user revokes access. Send the access token as `Authorization: Bearer <token>`, or let the SDK set it:

```ts
api.setAccessToken(access_token);
api.unsetAccessToken();
```

Health check (works with no scopes; returns `signedIn: false` when unauthenticated, expired, or revoked):

```ts
// POST /api/v0/auth/status {}
const res = await api.checkIfSignedIn({})
// 200 { signedIn: boolean, scopes: [...], ... }
console.log(res.signedIn)
```

Refresh on a rolling basis, as often as needed:

```ts
const res = await api.exchangeSIWBBAuthorizationCode({
    refresh_token,
    grant_type: 'refresh_token',
    client_secret: process.env.SIWBB_CLIENT_SECRET!,
    client_id: process.env.SIWBB_CLIENT_ID!,
    redirect_uri: 'https://example.com/api/callback' //only needed if redirected
});

const { access_token, access_token_expires_at, refresh_token, refresh_token_expires_at } = res;
```

Revoke when done. The user can also revoke under Connections, Authorizations, in-site:

```ts
// POST https://api.bitbadges.io/api/v0/siwbb/token/revoke
await api.revokeOauthAuthorization({ token: access_token });
```

Sessions do not have to use these tokens. Checking IDs, stamping hands, or claim numbers are valid alternatives for in-person flows. Full token semantics and the security notes are in [Verification](../api/sign-in/verification.md).

## Next Steps

- [Sign In with BitBadges](../api/sign-in/README.md) for the endpoint reference, callback details, and framework templates (Auth0, WordPress, Supabase, Discourse).
- [Distribute with Claims](distribute-with-claims.md) to define what a signed-in user must satisfy.
- [Auth commands](../cli/auth.md) for the CLI's own SIWBB session (`bb auth login --browser`).
