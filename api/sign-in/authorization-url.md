---
description: "Build the Sign In with BitBadges authorization URL. Parameters, scopes, attaching a claim, and the SDK helper that generates it."
---

# Authorization URL

The user authenticates at `https://bitbadges.io/siwbb/authorize` with your parameters in the query string. On success they receive an authorization code, delivered to your redirect URI (digital flows) or shown as a QR code (in-person and delayed flows).

See the [API reference](/api-reference) for every route's request and response schema.

## Example

```ts
import crypto from 'crypto';
import { generateBitBadgesAuthUrl, CodeGenQueryParams } from 'bitbadges';

const state = crypto.randomBytes(16).toString('hex'); // store it in the session for the callback check

const params: CodeGenQueryParams = {
  client_id: 'app_demo_01',
  redirect_uri: 'https://example.com/api/callback',
  state,
  scope: 'completeClaims,readPrivateClaimData',
  claimId: 'claim_demo_01',
  hideIfAlreadyClaimed: true,
  expectVerifySuccess: true
};

const authUrl = generateBitBadgesAuthUrl(params);
```

The generated URL, with `state` set to `f3a9c2e1b7d4a6c8`:

```bash
https://bitbadges.io/siwbb/authorize?client_id=app_demo_01&redirect_uri=https%3A%2F%2Fexample.com%2Fapi%2Fcallback&state=f3a9c2e1b7d4a6c8&scope=completeClaims%2CreadPrivateClaimData&claimId=claim_demo_01&hideIfAlreadyClaimed=true&expectVerifySuccess=true
```

Three ways to produce the URL:

- **Developer portal (recommended).** Open your app and click **Create SIWBB URL**.
- **Link generator.** [https://bitbadges.io/auth/linkgen](https://bitbadges.io/auth/linkgen) also lists every available scope.
- **SDK.** `generateBitBadgesAuthUrl` from `bitbadges`, shown above. Object values are JSON-encoded and URI-escaped; falsy values are skipped.

## Parameters

```ts
interface CodeGenQueryParams {
  client_id: string;
  redirect_uri?: string;
  state?: string;
  scope?: string;

  claimId?: string;
  hideIfAlreadyClaimed?: boolean;
  expectVerifySuccess?: boolean;
}
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `client_id` | string | yes | Your app's client ID from the developer portal. |
| `redirect_uri` | string | for instant auth | Must match a registered redirect URI. Omit it for QR code or delayed flows; the code is then generated and stored in the user's account. |
| `state` | string | no | Opaque value passed back to your redirect URI. Use it for CSRF protection. |
| `scope` | string | no | Comma-separated BitBadges API scopes, for example `completeClaims,readClaimAlerts`. Omit it to verify address ownership only. |
| `claimId` | string | no | Show this claim on the authorize screen. Display only. Verify the claim yourself after authentication. |
| `hideIfAlreadyClaimed` | boolean | no | Hide the claim when the user already has a success (`successCount >= 1`). |
| `expectVerifySuccess` | boolean | no | Block sign in unless the claim verification succeeds. Users can edit URL parameters, so this is not a replacement for a server-side check. |

## Scopes

Scopes are only needed for authenticated API access on the user's behalf. Without scopes you still get address ownership and access to the health check route. Scope names are the camelCase form of the labels below (`completeClaims` for `Complete Claims`).

| Scope | Grants |
| --- | --- |
| `Full Access` | Full access to all features. |
| `Report` | Report users or collections. |
| `Read Profile` | Read private profile information: email, approved sign-in methods, connections. |
| `Manage Applications` | Create, update, and delete applications. |
| `Manage Utility Pages` | Create, update, and delete utility pages. |
| `Approve Sign In With BitBadges Requests` | Sign In with BitBadges on behalf of the user. |
| `Read Authentication Codes` | Read authentication codes. |
| `Delete Authentication Codes` | Delete authentication codes. |
| `Manage Claims` | Create, update, and delete claims. |
| `Manage Developer Apps` | Create, update, and delete developer apps. |
| `Manage Dynamic Stores` | Create, update, and delete dynamic stores. |
| `Read Private Claim Data` | Read private claim data (codes, passwords, private lists). |
| `Complete Claims` | Complete claims on behalf of the user. |

The [API reference](/api-reference) states the scope each route requires.

## Claims

A `claimId` attaches a claim to the authorize screen. Create the claim in the developer portal. Claims can require anything: token ownership, a payment, a code. They are not part of the core authentication step. After the code exchange, verify the claim server-side with `checkClaimSuccess`. See [Claims](../claims/README.md).

## Related

- [Callback](callback.md)
- [Verification](verification.md)
- [Setup](setup.md)
