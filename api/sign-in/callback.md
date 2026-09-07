---
description: "Handle the Sign In with BitBadges redirect callback. Read code and state from the query string, then exchange the code."
---

# Callback

With a `redirect_uri` in the authorization URL, BitBadges sends the user back to your app with `code` and `state` as query parameters as soon as authentication finishes. The user never sees the code.

This page is also part of the [API reference](/api-reference).

## Example

A Next.js API route at `https://example.com/api/callback`. BitBadges redirects to `/api/callback?code=9c1f4e2b7a6d5c4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e&state=f3a9c2e1b7d4a6c8`.

```ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { BigIntify, BitBadgesAPI } from 'bitbadges';
import { getSession } from '../../lib/session'; // your own session helper

const BitBadgesApi = new BitBadgesAPI({ apiKey: process.env.BITBADGES_API_KEY, convertFunction: BigIntify }); // key from https://bitbadges.io/developer

export default async function callbackHandler(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code as string;
  const state = req.query.state as string;
  const session = await getSession(req, res);

  // 1. Validate state against the value you issued when building the authorization URL
  if (!state || state !== session.siwbbState) {
    return res.status(400).json({ error: 'Invalid state' });
  }
  delete session.siwbbState;

  // 2. Exchange the code (see Verification)
  const auth = await BitBadgesApi.exchangeSIWBBAuthorizationCode({
    code,
    grant_type: 'authorization_code',
    client_id: 'app_demo_01',
    client_secret: process.env.SIWBB_CLIENT_SECRET,
    redirect_uri: 'https://example.com/api/callback'
  });
  if (!auth.verificationResponse?.success) {
    return res.status(401).json({ error: auth.verificationResponse?.errorMessage ?? 'Not authenticated' });
  }

  // 3. Apply your own checks and start a session
  session.bitbadgesAddress = auth.bitbadgesAddress;
  session.accessToken = auth.access_token;
  session.refreshToken = auth.refresh_token;
  await session.save();

  return res.redirect('/dashboard');
}
```

## How It Works

1. The user opens your authorization URL.
2. BitBadges walks them through authentication. On completion it redirects to your `redirect_uri` with `code` and `state`.
3. Your handler exchanges the code with your client secret and reads the authentication details. See [Verification](verification.md).

This is the standard OAuth 2.0 authorization code flow. Any OAuth tutorial applies.

## Requirements

- The `redirect_uri` in the URL must match a registered URI exactly. See [Setup](setup.md).
- Validate `state` to reject requests you did not start.
- Serve the callback over HTTPS.

Without a redirect URI, the code is shown as a QR code and stored in the user's account for in-person or delayed use. That path skips this page and goes straight to [Verification](verification.md).

## Related

- [Verification](verification.md)
- [Authorization URL](authorization-url.md)
