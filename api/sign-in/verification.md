---
description: "Exchange a Sign In with BitBadges code for the address and tokens, manage access and refresh tokens, and know what is verified natively and what is not."
---

# Verification

Exchange the authorization code (a 32-byte hex string) at the token endpoint. The response carries the address, a `verificationResponse`, and access and refresh tokens for session management and authorized API calls.

This page is also part of the [API reference](/api-reference).

## Example

```bash
curl -X POST https://api.bitbadges.io/api/v0/siwbb/token \
  -H "Content-Type: application/json" -H "x-api-key: $BITBADGES_API_KEY" \
  -d '{
    "code": "9c1f4e2b7a6d5c4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e",
    "grant_type": "authorization_code",
    "client_id": "app_demo_01",
    "client_secret": "'"$SIWBB_CLIENT_SECRET"'",
    "redirect_uri": "https://example.com/api/callback",
    "options": { "issuedAtTimeWindowMs": 600000 }
  }'
```

```ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { BigIntify, BitBadgesAPI } from 'bitbadges';

const BitBadgesApi = new BitBadgesAPI({ apiKey: process.env.BITBADGES_API_KEY, convertFunction: BigIntify });

async function myHandler(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code as string;

  const auth = await BitBadgesApi.exchangeSIWBBAuthorizationCode({
    code,
    options: { issuedAtTimeWindowMs: 1000 * 60 * 10 }, // 10 minutes (default). 0 disables the check.
    grant_type: 'authorization_code',
    client_secret: process.env.SIWBB_CLIENT_SECRET,
    client_id: 'app_demo_01',
    redirect_uri: 'https://example.com/api/callback' // only when the code was created with a redirect URI
  });

  const { address, chain, bitbadgesAddress, verificationResponse } = auth;
  if (!verificationResponse?.success) {
    console.log(verificationResponse?.errorMessage);
    throw new Error('Not authenticated');
  }

  const { access_token, access_token_expires_at, refresh_token, refresh_token_expires_at } = auth;
  // Session management and authorized API access

  // The address is now proven. Check anything else you require. For example, a claim:
  const claim = await BitBadgesApi.checkClaimSuccess('claim_demo_01', bitbadgesAddress);
  if (claim.successCount < 1) throw new Error('Claim not completed');

  // Or token ownership:
  const ownership = await BitBadgesApi.verifyOwnershipRequirements({
    address: bitbadgesAddress,
    assetOwnershipRequirements: {
      $and: [
        {
          assets: [
            {
              chain: 'BitBadges',
              collectionId: '1',
              assetIds: [{ start: '1', end: '100' }],
              ownershipTimes: [],
              mustOwnAmounts: { start: '1', end: '1' }
            }
          ],
          options: {}
        }
      ]
    }
  });
  if (!ownership.success) throw new Error(ownership.errorMessage ?? 'Ownership check failed');

  // Other checks to consider:
  // - Replay protection: timestamps or nonces
  // - Flash ownership: is the qualifying asset transferable? one use per asset?
  // - Allowlist or denylist of addresses that may sign in
  // - Cache anything you need later
  res.status(200).json({ address, chain, bitbadgesAddress });
}
```

## Request

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | string | for `authorization_code` | The authorization code. |
| `grant_type` | `'authorization_code'` or `'refresh_token'` | yes | Which exchange to perform. |
| `client_id` | string | yes | Your app's client ID. |
| `client_secret` | string | yes | Your app's client secret. Server-side only. |
| `redirect_uri` | string | when used | Required only if the code was created with a redirect URI. |
| `refresh_token` | string | for `refresh_token` | The refresh token to rotate. |
| `options.issuedAtTimeWindowMs` | number | no | How recent the code must be. Default 10 minutes. `0` disables the check, which in-person flows often need. |
| `code_verifier` | string | no | PKCE code verifier, when you used PKCE. |

## Response

```ts
{
  address: string;
  chain: SupportedChain;               // 'Cosmos' | 'ETH' | 'Unknown'
  bitbadgesAddress: string;
  verificationResponse?: { success: boolean; errorMessage?: string };
  access_token: string;
  token_type: 'Bearer';
  access_token_expires_at?: number;   // UNIX ms
  refresh_token?: string;
  refresh_token_expires_at?: number;  // UNIX ms
}
```

```json
{
  "address": "0x092bb4851ae26850588243e7bef22a56287f4739",
  "chain": "ETH",
  "bitbadgesAddress": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
  "verificationResponse": { "success": true },
  "access_token": "siwbb_at_7d2e9f4a1b6c3d8e5f0a2b9c4d7e1f6a",
  "token_type": "Bearer",
  "access_token_expires_at": "1788825600000",
  "refresh_token": "siwbb_rt_2b9c4d7e1f6a7d2e9f4a1b6c3d8e5f0a",
  "refresh_token_expires_at": "1793923200000"
}
```

`address` is the address the user signed in with (an `0x` address for an Ethereum wallet). `bitbadgesAddress` is its `bb1` form; use it as the unique identifier so the same user cannot sign in twice through the two forms. Each code can be exchanged once. BitBadges enforces this.

## Access Tokens

Send the access token as `Authorization: Bearer <token>` on authenticated routes. The SDK sets and clears the header for you:

```ts
BitBadgesApi.setAccessToken(auth.access_token);
BitBadgesApi.unsetAccessToken();
```

Access tokens expire after 1 day. Refresh tokens expire after 60 days. Both become invalid when the user revokes access.

### Health Check

```ts
// POST /api/v0/auth/status
const res = await BitBadgesApi.checkIfSignedIn({});
console.log(res.signedIn); // false when expired, revoked, or not authenticated
```

```json
{
  "signedIn": true,
  "address": "0x092bb4851ae26850588243e7bef22a56287f4739",
  "bitbadgesAddress": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
  "chain": "ETH",
  "scopes": [
    { "scopeName": "Complete Claims", "scopeId": "completeClaims" },
    { "scopeName": "Read Private Claim Data", "scopeId": "readPrivateClaimData" }
  ],
  "message": "https://bitbadges.io wants you to sign in with your Ethereum address 0x092bb4851ae26850588243e7bef22a56287f4739",
  "email": ""
}
```

This route works even when you requested no scopes. Use it to confirm the user has not revoked your app. `scopes` lists the approved scopes with their camelCase `scopeId`; `message` is the signed sign-in message; `email` is filled only when the session was created through an email sign in.

### Refreshing

```ts
const res = await BitBadgesApi.exchangeSIWBBAuthorizationCode({
  grant_type: 'refresh_token',
  refresh_token: session.refreshToken,
  client_secret: process.env.SIWBB_CLIENT_SECRET,
  client_id: 'app_demo_01',
  redirect_uri: 'https://example.com/api/callback' // only if redirected
});

const { access_token, access_token_expires_at, refresh_token: newRefreshToken, refresh_token_expires_at } = res;
```

A refresh returns a new access token and a new refresh token with reset expirations. Repeat on a rolling basis for as long as the user keeps the authorization.

### Revoking

```ts
// POST https://api.bitbadges.io/api/v0/siwbb/token/revoke
await BitBadgesApi.revokeOauthAuthorization({ token: session.accessToken });
```

Revoke when you are done with a token. Users can also revoke from **Connections** then **Authorizations** on the site.

Sessions are your call. Tokens are one option; checking IDs, stamping hands, and claim numbers are others.

## What Is Verified Natively

Checked by BitBadges:

- Proof of address ownership through the user's authenticated BitBadges account.
- Anything in the verify challenge options.
- The code was issued within `options.issuedAtTimeWindowMs` (default 10 minutes).
- One exchange per authorization code.

Not checked by BitBadges:

- App-specific criteria (claims, ownership requirements, attestations). Adding `claimId` to the URL does not verify the claim. Check it server-side.
- Flash ownership, replay, or man-in-the-middle beyond what OAuth 2.0 itself protects against.

## Security Considerations

The flow is OAuth 2.0 compatible. Follow the OAuth 2.0 specification and its security guidance for the protocol itself.

Flash criteria checks are your problem to solve. Bob signs in with a token, transfers it to Alice, and Alice signs in with the same token. Both hold a valid session from one asset. The same applies to any transferable criterion. Design your claim criteria and any attestations so this cannot happen when it matters.

## Related

- [Authorization URL](authorization-url.md)
- [Claims endpoints](../claims/endpoints.md)
- [Frameworks](frameworks.md)
- [API reference](/api-reference)
