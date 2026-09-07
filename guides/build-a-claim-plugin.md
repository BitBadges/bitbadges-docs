---
description: "Write an HTTP endpoint that BitBadges calls during claims, register it in the developer portal, handle simulations and state safely, test it, and version it."
---

# Build a Claim Plugin

At the end you have a custom plugin: an HTTP endpoint that BitBadges POSTs to during claim processing, and whose response decides whether the plugin passes. Any logic you can write as an HTTP handler (auth checks, API calls, database lookups, AI evaluation, webhook triggers) can become a plugin. The request and response contract, the context fields, and the version config table live in [Plugins](../api/claims/plugins.md).

Three parties are involved. The plugin creator (you) builds and maintains the endpoint. The claim creator adds the plugin to a claim and sets its public and private params. The claiming user attempts the claim and supplies user inputs. All three sources are merged into one payload sent to your handler.

```
User claims -> BitBadges sends POST to your endpoint -> You return 200 OK or an error
```

## 1. Register the Plugin

1. Go to [bitbadges.io/developer](https://bitbadges.io/developer), Plugins tab, and create a plugin.
2. Copy the plugin secret. BitBadges sends it in every request; your handler uses it to confirm BitBadges is the caller. Store it server-side only.
3. Create version 0 (unfinalized). Set the endpoint URL and HTTP method, the three schemas, and the behavior flags.

The version config you fill in:

```ts
interface PluginVersionConfig {
  version: number;                // Auto-incrementing version number
  finalized: boolean;             // Only finalized versions are usable by other users
  stateFunctionPreset: 'Stateless' | 'ClaimToken' | 'ClaimNumbers' | 'CustomResponseHandler';

  duplicatesAllowed: boolean;     // Can a claim have multiple instances of this plugin?
  requiresSessions: boolean;      // Does the plugin need an authenticated BitBadges session?
  requiresUserInputs: boolean;    // Does the user need to provide inputs at claim time?
  reuseForNonIndexed: boolean;    // Compatible with on-demand (stateless) claims?
  receiveStatusWebhook: boolean;  // Receive POST with final claim outcome (success/failure)?
  skipProcessingWebhook?: boolean; // Auto-pass without calling your endpoint?
  ignoreSimulations?: boolean;    // Don't call your endpoint during dry-runs?
  requireSignIn?: boolean;        // Require the user to be signed in to BitBadges?

  userInputsSchema: JsonBodyInputSchema[];    // What the claiming user provides
  publicParamsSchema: JsonBodyInputSchema[];   // What the claim creator configures (public)
  privateParamsSchema: JsonBodyInputSchema[];  // What the claim creator configures (hidden)

  verificationCall?: {
    uri: string;                              // Your handler URL
    hardcodedInputs: JsonBodyInputWithValue[]; // Static values always included in requests
    passAddress?: boolean;                    // Include the user's address in the payload
  };

  customDetailsDisplay?: string;   // Template shown to users, e.g. "Requires {{minBalance}} tokens"
}
```

Each field's meaning is tabled in [Plugins](../api/claims/plugins.md). The choices that shape your handler:

- `stateFunctionPreset` decides what your 200 response must contain (step 3).
- `passAddress` sends `bitbadgesAddress` (and `ethAddress` for Ethereum wallets) so you can identify the user.
- `requireSignIn` makes BitBadges verify the address before calling you; otherwise check `isAddressSignedIn` yourself.
- `receiveStatusWebhook` sends you a second POST with the final claim outcome (step 4).
- `hardcodedInputs` are static key-value pairs (API keys, config) added to every request.

{% hint style="info" %}
**Ask your agent.** With the MCP builder tools installed, paste one of these:

```text
Search the claim plugins for one that checks GitHub contributions and explain what params it needs.
```

```text
Write a Next.js API route for a Stateless claim plugin that verifies pluginSecret, returns 200 on simulation, and rejects users whose answer does not match a private param.
```
{% endhint %}

## 2. Define Parameters and User Inputs

Three parameter sets exist. All are merged flat into the request body with the context fields:

```json
{
  "...context": "pluginSecret, claimId, addresses, etc.",
  "...publicParams": "visible to everyone, set by the claim creator",
  "...privateParams": "visible only to BitBadges and the claim creator",
  "...userInputs": "provided by the claiming user at claim time"
}
```

- Public params: minimum balances, a URL to display. Claim users can see them.
- Private params: API keys, internal thresholds, webhook URLs. Hidden from claim users.
- User inputs: a code, an answer, a file URL. Collected at claim time.

Each schema entry is a `JsonBodyInputSchema`:

```ts
interface JsonBodyInputSchema {
  key: string;                 // Field name in payload
  label: string;               // Display label shown to user
  type: string;                // 'string' | 'number' | 'boolean' | 'date' | 'url'
  required?: boolean;
  defaultValue?: string | number | boolean;
  helper?: string;             // Help text displayed below the field
  options?: {                  // If provided, renders a dropdown select
    label: string;
    value: string | number | boolean;
  }[];
  arrayField?: boolean;        // Render as array input (multiple values)
  headerField?: boolean;       // Pass as HTTP header instead of body
  hideFromDetailsDisplay?: boolean;  // Hide from public display (for public params)
  hyperlink?: {                // Link associated with this field
    url: string;
    showAsGenericView?: boolean;
  };
}
```

Types: `string` (free text), `number`, `boolean` (toggle), `date` (UNIX ms), `url` (validated URL).

Two ways to collect inputs:

- In-site form (recommended). Define the schemas; BitBadges renders the form for users and creators. Everything is outsourced to BitBadges.
- Custom frontend. Redirect the user to your UI via a redirect URL, or post values back with `window.postMessage` from your own tool. Do the sensitive work on your side, issue a one-time code, have the user enter it in-site as a user input, and validate the code in your handler.

On-demand claims and API auto-completion do not allow user inputs, because no user is present to type them.

BitBadges does not handle your authentication or hold your sensitive values. Treat it as a middleman. If you need authenticated requests on the user's behalf beyond identification, run auth end-to-end yourself: store the data, map it to a token or code, give that code to the user or creator, and look it up in your handler. This mirrors an OAuth authorization code with a custom claim code, so apply the same practices (expiring tokens, PKCE against code interception). Claim creators can store their own secrets in private params.

## 3. Implement the Handler

```ts
import { NextApiRequest, NextApiResponse } from 'next';

const handlePlugin = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      // Context
      pluginSecret,         // Verify BitBadges as the caller
      claimId,              // Which claim is being attempted
      claimAttemptId,       // Unique attempt ID (empty for simulations)
      _isSimulation,        // true = dry run, don't execute side effects
      _attemptStatus,       // 'executing' during claim processing
      lastUpdated,          // Claim last updated timestamp (UNIX ms)
      createdAt,            // Claim creation timestamp (UNIX ms)
      version,              // Claim version string
      locale,               // User's locale

      // User identification
      bitbadgesAddress,     // bb-prefixed Cosmos address
      ethAddress,           // 0x-prefixed Ethereum address
      isAddressSignedIn,    // true if address is verified via sign-in

      // Claim number context
      assignMethod,         // Claim number assignment method
      isClaimNumberAssigner, // true if this plugin assigns claim numbers

      // Your custom inputs (merged from all param sources)
      ...customInputs
    } = req.body;

    // 1. Verify origin
    if (pluginSecret !== process.env.PLUGIN_SECRET) {
      return res.status(401).json({ message: 'Invalid plugin secret' });
    }

    // 2. Handle simulations
    if (_isSimulation) {
      // Validate inputs, check preconditions, but don't mutate state
      return res.status(200).json({});
    }

    // 3. Your custom logic. This plugin passes when the user's answer matches the
    //    creator's private param `expectedAnswer`.
    if (customInputs.answer !== customInputs.expectedAnswer) {
      return res.status(400).json({ message: 'Wrong answer' });
    }

    // 4. Return response based on your preset
    return res.status(200).json({});
  } catch (err) {
    return res.status(401).json({ message: String(err) });
  }
};

export default handlePlugin;
```

Request details:

- POST, PUT, and DELETE receive the payload in the body. GET receives it as query params. Make sure the endpoint is reachable (no CORS errors) and accepts the method you configured.
- `bitbadgesAddress` is always the bb-prefixed form; an Ethereum wallet is converted for you and also sent as `ethAddress`. Both refer to the same account.
- The address is verified only if your plugin or the claim requires sign-in. Otherwise check `isAddressSignedIn`. If you identify users another way, or do not want to trust BitBadges, hand the user a secret code while authenticated on your side and verify it here.
- `claimId`, `createdAt`, `lastUpdated`, and `version` let you implement version control on your end.
- `claimAttemptId` tracks the attempt so you can look up its final status later.

Responses must arrive within 10 seconds. Return `200` to pass. Return a non-200 status with `{ "message": "..." }` to fail; the message is saved for debugging and may be shown to the claiming user or the claim creator, so make it informative without revealing secrets. Do not use `.` in returned JSON keys (`bob@abc[dot]com`, not `bob@abc.com`); it breaks the state handler.

The body of a 200 depends on the preset:

| Preset | Return | Use for |
| --- | --- | --- |
| `Stateless` | `{}` | Pass or fail checks, API verifications, webhook triggers. No state tracked. |
| `ClaimToken` | `{ "claimToken": "unique-token-abc123" }` | A one-time token you issue. BitBadges marks it used only if the whole claim succeeds; otherwise it stays available for retry. |
| `ClaimNumbers` | `{ "claimNumber": 0 }` | Custom claim number assignment. Numbers are 0-based. Only one plugin per claim can use this preset; claims using it cannot include another claim-number plugin. |
| `CustomResponseHandler` | your own | Full control over state and response handling. |

A 200 is a hypothetical state transition. It applies only if the claim eventually succeeds.

## 4. Handle Simulations and State

BitBadges runs plugins as processing hooks during claim execution, and `_attemptStatus` is `'executing'` while that happens. Before a real attempt the site always simulates once, but do not depend on every attempt having a prior simulation.

Detect a simulation by `_isSimulation === true` and an empty `claimAttemptId`; the rest of the payload is the same. In a simulation, validate inputs and preconditions and return the status you would return for real. Do not execute side effects, mutate state, send notifications, or consume tokens. A user who simulates successfully should pass at execution time. Set `ignoreSimulations: true` in the version config to skip simulation calls entirely.

State follows one rule: your plugin passing does not mean the claim succeeded. Another plugin may fail. With OR logic, your plugin may fail while the claim succeeds. BitBadges commits state only when your plugin returned 200 and the claim succeeded per the success logic (OR requirements short-circuit). Two options:

- BitBadges-managed state (recommended). Use `Stateless`, `ClaimToken`, or `ClaimNumbers`. You return an intent; BitBadges applies it on success and rolls it back on failure. No race conditions on your side. Typical pattern: tie state to unique claim tokens and let BitBadges mark them used.
- Self-managed state. Do not update your backend when your plugin passes. Verify the outcome first:

```ts
// After some delay, check if the claim actually succeeded
const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY }); // key from https://bitbadges.io/developer
const status = await api.getClaimAttemptStatus(claimAttemptId);
if (status.success) {
  // Now safe to update your external state
}
```

Claims are processed asynchronously through a queue, so the claim may complete later than your call, and BitBadges state such as the number of completed claims may be stale when you run. Depend on your own params and the context fields only. Attempts run concurrently, so use idempotency keys or atomic operations, and never hand the same one-time token to two attempts. Everything is eventually consistent.

To avoid polling, set `receiveStatusWebhook: true`. BitBadges then POSTs to your endpoint after the claim completes with `_attemptStatus: 'success'` or `'failure'`. This is a separate call from validation. Retries use exponential backoff: base delay 1 hour, `2^retries x base_delay`, max 7 days (1h, 2h, 4h, 8h, 16h, ...). The same webhook can arrive more than once, so make the handler idempotent with `claimAttemptId` as the deduplication key.

More rules that affect the design:

- All plugins in a claim run in parallel. You cannot depend on another plugin's state changes within the same attempt; each plugin sees state as it was before the attempt started.
- If your plugin checks another claim (the `satisfies-claim` pattern), nested on-demand claims are limited to 5 levels, and circular references are rejected.
- For on-demand claims (no explicit claim action), set `reuseForNonIndexed: true`. The plugin must be stateless, take no user inputs, and work from context alone (plugin info, claim info, `bitbadgesAddress`, optional `ethAddress`). Hardcoded params are fine. This usually means crypto-native checks: more than 1 ETH in the account, POAP ownership, token ownership.

Security checklist:

- Verify `pluginSecret` on every request.
- Never expose `pluginSecret` client-side.
- Sanitize all inputs; user inputs are untrusted.
- Rate-limit the endpoint yourself; it is publicly addressable.
- Keep internal details out of error messages.

## 5. Test

Local, with curl. `PLUGIN_SECRET` is the secret from step 1:

```bash
curl -X POST https://example.com/api/plugin \
  -H 'Content-Type: application/json' \
  -d '{
    "pluginSecret": "'"$PLUGIN_SECRET"'",
    "claimId": "claim_demo_01",
    "claimAttemptId": "test-attempt",
    "_isSimulation": false,
    "_attemptStatus": "executing",
    "bitbadgesAddress": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
    "lastUpdated": 1788739200000,
    "createdAt": 1788739200000,
    "version": "0"
  }'
```

Add whatever user identification and inputs your version config sends.

In the developer portal:

- Send Test Request posts mocked data to your endpoint from the browser. Use it to confirm the handler responds correctly.
- The Claim Tester tab runs the full claim flow with your plugin included. It is the only place an unfinalized version can be used in a real claim context.

To see exactly what BitBadges sends, point the endpoint at a request bin such as [webhook.site](https://webhook.site), trigger a test, and inspect the payload.

## 6. Finalize and Version

Finalize version 0 in the portal. A finalized version is immutable (schemas, endpoint URL, all settings) and becomes usable by other users. Unfinalized versions are usable only by you, in the Claim Tester.

Iterate with new versions:

```
Create v0 (unfinalized) -> Test -> Finalize v0 -> Claims use v0
Create v1 (unfinalized) -> Test -> Finalize v1 -> New claims use v1, existing claims stay on v0
```

New claims take the latest finalized version. Existing claims stay on the version they were created with, so a release cannot break them. Keeping claims compatible is your responsibility. For a breaking change, either branch on `version`, `createdAt`, or `lastUpdated` inside one handler, or create a new plugin.

## 7. Use and Publish

Add the plugin to a claim by its plugin ID in the claim builder or through the [Claims API](../api/claims/endpoints.md). Plugins are private by default: only you can add them to claims, which suits internal tools and integrations tied to your backend.

To make it available to everyone, publish it to the plugin directory from the portal's visibility settings. Published plugins need a clear description, documented schemas, and stable finalized versions. Users find them by search:

```ts
const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });
const results = await api.searchPlugins({
  searchValue: 'badge ownership',
  bookmark: undefined,
  locale: 'en'
});
```

## Next Steps

- [Plugins](../api/claims/plugins.md) for the full request and response contract and the built-in plugin list.
- [Distribute with Claims](distribute-with-claims.md) to put the plugin in a claim.
