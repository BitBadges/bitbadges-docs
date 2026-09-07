---
description: "Register an OAuth app in the BitBadges developer portal and get the client ID, client secret, and redirect URIs that Sign In with BitBadges needs."
---

# Setup

Register an OAuth app before building an authorization URL. Registration gives you a client ID and client secret and records the redirect URIs your app may use.

This page is also part of the [API reference](/api-reference).

## Register the App

1. Open [https://bitbadges.io/developer](https://bitbadges.io/developer) and choose **OAuth Apps**.
2. Create an app and add your redirect URIs.
3. Save the client ID and client secret.

## Components

| Component | Purpose | Rules |
| --- | --- | --- |
| Client ID | Public identifier for your app. Goes in the authorization URL. | Assigned at registration. |
| Client secret | Proves your backend is the app when exchanging codes. | Keep it server-side. Treat it like a password. Never ship it in client code. |
| Redirect URIs | Where the user lands after authenticating, carrying `code` and `state`. | Pre-registered, HTTPS, and an exact match with the `redirect_uri` you send. Not needed for delayed or QR code flows. |

## Security

- The client secret is required to fetch a user's authentication details. Anyone holding it can act as your app.
- Registered and used redirect URIs must match exactly.
- Use HTTPS for every redirect.

## Related

- [Authorization URL](authorization-url.md)
- [Sign In with BitBadges](README.md)
