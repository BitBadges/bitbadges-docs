---
description: "Use Sign In with BitBadges through Auth0, WordPress, Supabase, Discourse, Passport.js, and other frameworks that already speak OAuth 2.0."
---

# Frameworks

Sign In with BitBadges is a standard OAuth 2.0 provider, so most frameworks connect to it with configuration rather than code. This page collects the ready-made integrations.

## Auth0

Auth0 lists BitBadges as a preconfigured social connection: [https://marketplace.auth0.com/integrations/bitbadges](https://marketplace.auth0.com/integrations/bitbadges). Enter your client ID and client secret, then register your Auth0 callback as a redirect URI in the developer portal. It ends with `/callback`, for example `https://dev-pgv803tz4ztg35oi.us.auth0.com/login/callback`.

### Custom connection

A custom connection lets you add parameters beyond the standard flow. The callback is the same.

| Setting | Value |
| --- | --- |
| Authorization URL | `https://bitbadges.io/siwbb/authorize` |
| Token URL | `https://api.bitbadges.io/api/v0/siwbb/token` |
| Scopes | None needed for the address. Add scopes as required. |
| Fields | API key, client ID, and client secret from [https://bitbadges.io/developer](https://bitbadges.io/developer) |
| Custom headers | `{ "x-api-key": "YOUR_API_KEY" }` |

Fetch profile script (replace the API key in both the custom headers and the script):

```js
function fetchUserProfile(accessToken, ctx, cb) {
  request.post(
    {
      url: 'https://api.bitbadges.io/api/v0/auth/status',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'ENTER_API_KEY_HERE',
        Authorization: 'Bearer ' + accessToken
      }
    },
    (err, resp, body) => {
      if (err) {
        return cb(err);
      }
      if (resp.statusCode !== 200) {
        return cb(new Error(body));
      }
      let bodyParsed;
      try {
        bodyParsed = JSON.parse(body);
      } catch (jsonError) {
        return cb(new Error('Failed JSON parsing for user profile response.'));
      }

      const account = bodyParsed;
      const profile = {
        address: account.address,
        chain: account.chain,
        id: account.bitbadgesAddress,
        name: account.address
      };
      return cb(null, profile);
    }
  );
}
```

## WordPress

The **Sign in with BitBadges** plugin adds a "Sign in with BitBadges" button to the WordPress login form and can gate the site on a claim.

- Directory: [https://wordpress.org/plugins/sign-in-with-bitbadges/](https://wordpress.org/plugins/sign-in-with-bitbadges/)
- Source: [https://github.com/BitBadges/bitbadges-wp-plugin](https://github.com/BitBadges/bitbadges-wp-plugin)

The plugin handles authentication only. It does not restrict access by itself. Pair it with [Force Login](https://wordpress.org/plugins/wp-force-login/), [Restrict Content](https://wordpress.org/plugins/restrict-content/), [Members](https://wordpress.org/plugins/members/), or another access-control plugin.

### Install and configure

1. Upload the plugin files to `/wp-content/plugins/` and activate the plugin from the **Plugins** menu.
2. Create an OAuth app in the [developer portal](https://bitbadges.io/developer).
3. Set the redirect URI to `https://your-wordpress-site.com/wp-login.php?action=bitbadges-callback`.
4. In WordPress open **Settings** then **BitBadges SIWBB**. Enter the client ID and client secret.
5. Optionally set a claim ID to gate access, then save.

### Features

- Creates WordPress users automatically on first sign in.
- OAuth 2.0 with `state` verification, WordPress nonce checks, input sanitization, and secure credential storage.
- Optional exclusive mode that disables the normal WordPress login, with an emergency admin access URL.
- Claim-gated access and configurable claim visibility on the authorization page.
- Shortened wallet addresses as display names.

Requirements: WordPress 5.0 or higher, PHP 7.0 or higher, HTTPS. License: GPL v2 or later. Version 1.0.0 is the initial release with the features above.

## Supabase

[https://github.com/BitBadges/bitbadges-supabase-demo](https://github.com/BitBadges/bitbadges-supabase-demo) is a starting point, not production code. The repository is archived. It uses the Next.js and Supabase template with normal Supabase authentication, then adds Sign In with BitBadges on top, which gives you a username to address mapping.

Setup:

1. Set up Supabase per its documentation.
2. Add your BitBadges API key, client ID, and client secret to `.env`.
3. Run the SQL in `supabase/migrations` from the Supabase SQL editor to create the tables.

Left to you: gating the whole site instead of using traditional auth, gating specific pages, and linking claims. Supabase is flexible; Express, Auth0, or another route works as well. Supabase also supports Auth0 as a provider: [https://supabase.com/partners/integrations/auth0](https://supabase.com/partners/integrations/auth0).

## Discourse

There is no dedicated Discourse plugin. Because SIWBB is OAuth2 compatible, reuse an existing plugin:

- **Through Auth0.** Set up the Auth0 connection above, then follow [Configure sign up and log in with Auth0 using the OAuth2 Basic plugin](https://meta.discourse.org/t/configure-sign-up-and-log-in-with-auth0-using-the-oauth2-basic-plugin/64633).
- **Direct.** Use the [Discourse OAuth2 Basic plugin](https://meta.discourse.org/t/discourse-oauth2-basic/33879) with the endpoints from [Sign In with BitBadges](README.md).

## Express and Passport.js

[https://github.com/BitBadges/bitbadges-passportjs-example](https://github.com/BitBadges/bitbadges-passportjs-example) is a Passport.js integration example for Express. The whole example lives in its `index.ts`.

## Others

Frameworks that support Auth0 can use Sign In with BitBadges through it:

- Auth.js (NextAuth): [https://authjs.dev/getting-started/providers/auth0](https://authjs.dev/getting-started/providers/auth0)
- Amazon Cognito: [https://auth0.com/docs/customize/integrations/aws/amazon-cognito#configure-amazon-web-services](https://auth0.com/docs/customize/integrations/aws/amazon-cognito#configure-amazon-web-services)
- Supabase: [https://supabase.com/partners/integrations/auth0](https://supabase.com/partners/integrations/auth0)

You are not locked into Sign In with BitBadges. Any Web3 authentication provider plus a claim success check gates anything. Suggestions for other integrations are welcome.

## Related

- [Sign In with BitBadges](README.md)
- [Verification](verification.md)
- [Claims](../claims/README.md)
