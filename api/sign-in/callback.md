---
description: "Handle the Sign In with BitBadges redirect callback. Read code and state from the query string, then exchange the code."
---

# Callback

With a `redirect_uri` in the authorization URL, BitBadges sends the user back to your app with `code` and `state` as query parameters as soon as authentication finishes. The user never sees the code.

## Example

```ts
// GET /api/callback?code=...&state=...
const callbackHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const code = req.query.code as string;
  const state = req.query.state as string;

  // 1. Validate state against the value you issued
  // 2. Exchange the code (see Verification)
  //    const auth = await BitBadgesApi.exchangeSIWBBAuthorizationCode({ code, ... });
  // 3. Apply your own checks and start a session
};
```

## How it works

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
