---
description: "Every claim plugin id with its parameters, state, and where it runs, plus the request and response contract for custom plugin endpoints."
---

# Plugins

A claim is a list of plugin instances. Each plugin checks one criterion and reports pass or fail. This page is the reference for the built-in plugin ids and for the HTTP contract that custom plugins implement. The tutorial for writing one is [Build a Claim Plugin](../../guides/build-a-claim-plugin.md).

See the [API reference](/api-reference) for every route's request and response schema.

## Look Up Any Plugin

```bash
curl https://api.bitbadges.io/api/v0/plugins/must-own-badges -H "x-api-key: $BITBADGES_API_KEY"
```

```ts
const { plugin } = await BitBadgesApi.getPlugin('must-own-badges');
const latest = plugin.versions[plugin.versions.length - 1];
console.log(latest.userInputsSchema);     // what the claiming user provides
console.log(latest.publicParamsSchema);   // creator-configured, public
console.log(latest.privateParamsSchema);  // creator-configured, private
console.log(latest.verificationCall);     // HTTP endpoint config
console.log(latest.stateFunctionPreset);  // 'Stateless' | 'ClaimToken' | 'ClaimNumbers' | 'CustomResponseHandler'

// Several at once: POST /api/v0/plugins/fetch
const many = await BitBadgesApi.getPlugins({
  pluginIds: ['must-own-badges', 'min-badge', 'url-clicker'],
  returnSensitiveData: false // true = include pluginSecret (owner only)
});

// Directory search: GET /api/v0/plugins/search
const found = await BitBadgesApi.searchPlugins({ searchValue: 'badge', bookmark: '', locale: 'en' });

// Execution errors for your own plugin: GET /api/v0/plugins/errors
const errors = await BitBadgesApi.getPluginErrors({ pluginId: 'ticket-check', bookmark: '' });
```

The `must-own-badges` plugin document (synthesized from the indexer's seed data; timestamps vary):

```json fold=15-19,24-25
{
  "plugin": {
    "_docId": "must-own-badges",
    "pluginId": "must-own-badges",
    "createdBy": "",
    "managedBy": "",
    "metadata": {
      "name": "Token Requirements",
      "description": "Which tokens must the user own?",
      "image": "https://bitbadges.io/images/bitbadgeslogo.png",
      "createdBy": "BitBadges",
      "documentation": "https://docs.bitbadges.io",
      "sourceCode": ""
    },
    "locale": "en",
    "toPublish": false,
    "reviewCompleted": true,
    "lastUpdated": "1788652800000",
    "createdAt": "1788652800000",
    "versions": [
      {
        "version": "0",
        "finalized": true,
        "createdAt": "1788652800000",
        "lastUpdated": "1788652800000",
        "requiresSessions": false,
        "requiresUserInputs": false,
        "duplicatesAllowed": true,
        "reuseForNonIndexed": true,
        "receiveStatusWebhook": false,
        "stateFunctionPreset": "Stateless",
        "userInputsSchema": [],
        "privateParamsSchema": [],
        "publicParamsSchema": [
          { "key": "ownershipRequirements", "label": "Requirements", "type": "ownershipRequirements", "required": true }
        ],
        "verificationCall": {
          "uri": "https://api.bitbadges.io/api/v0/integrations/query/must-own-badges",
          "passAddress": true,
          "hardcodedInputs": []
        }
      }
    ]
  }
}
```

`getPluginErrors` returns the stored failures for a plugin you own:

```json
{
  "docs": [
    {
      "_docId": "ticket-check-1788739200000",
      "pluginId": "ticket-check",
      "timestamp": 1788739200000,
      "error": "Ticket 4821 was already redeemed",
      "context": { "claimId": "claim_demo_01", "claimAttemptId": "8e1c4a6f2d9b3e7a5c0f1d4b6a8e2c9f", "instanceId": "ticket-gate" }
    }
  ],
  "bookmark": "eyJza2lwIjoyNX0",
  "total": 1
}
```

The eight core plugins below are not plugin documents, so `getPlugin` does not return them. Their schemas are fixed and listed here. Every other id is a plugin document that `getPlugin` describes in full.

Plugin ids are localized. The English document is the bare id (`min-badge`); other locales append a suffix (`min-badge-es`).

## Core Plugins

Core plugins run in memory inside the API. No HTTP call is made.

| Plugin id | Purpose | Duplicates allowed | Stateful |
| --- | --- | --- | --- |
| `numUses` | Cap total claims and assign claim numbers | no | yes |
| `codes` | One-time codes | yes | yes |
| `password` | Shared secret | yes | no |
| `transferTimes` | Time windows | yes | no |
| `initiatedBy` | Proof of address (sign in) | yes | no |
| `whitelist` | Address list or dynamic store gate | yes | yes |
| `halt` | Pause the claim | yes | no |
| `anonymous` | Allow claims with no address | no | no |

### `numUses`

Limits total successful claims. This plugin is always required and cannot be made optional through success logic. It is the default claim number assigner: the claim number is the prior `numUses` count (zero-based).

```ts
// Public params
{ maxUses: number; hideCurrentState?: boolean; displayAsUnlimited?: boolean }

// Public state
{ numUses?: number; usedClaimNumbers?: UintRange[]; claimedUsers?: { [bitbadgesAddress: string]: number[] } }
```

No user input. Fails with `Overall max uses exceeded` once `numUses >= maxUses`. `claimedUsers` is populated when you fetch the claim with `fetchAllClaimedUsers: true`.

### `codes`

Codes are either generated from `seedCode` or listed explicitly. Generated code `i` is `sha256("<seedCode>-<i>") + "-<i>"`. When `seedCode` is set, the index after the dash is checked against the regenerated hash. When only `codes` is set, `codes.length` must equal `numCodes`.

```ts
// User input
{ code: string }

// Public params
{ numCodes: number; hideCurrentState?: boolean }

// Private params
{ codes: string[]; seedCode: string }

// Public state
{ usedCodeRanges?: UintRange[] }   // ranges of used code indices
```

When this plugin is the claim number assigner, the claim number is the code index. Errors: `Invalid code in body provided.`, `Invalid code. Not found in list of codes.`, `Code already used`.

### `password`

```ts
// User input
{ password: string }

// Private params
{ password: string }
```

No public params or state. The comparison is constant-time. Error: `Incorrect password`.

### `transferTimes`

```ts
// Public params
{ transferTimes: UintRange[] }  // allowed windows, UNIX ms
```

No user input, state, or private params. Passes when `Date.now()` falls inside a range. Error: `We are currently outside the approved time window.`

### `initiatedBy`

Requires the claiming address to be signed in to BitBadges, or approved with the `Complete Claims` scope. No configurable params. Configuration happens in the claim builder UI. Errors: `Must be authenticated to claim`, `Invalid address. Provided address does not match the address of the signed in user.`

### `whitelist`

Gates on an address list. The list can be public (in `publicParams`), private (in `privateParams`), or a dynamic store. Both `0x` and `bb1` forms of an address match.

```ts
// Public params
{ listId?: string; list?: AddressList; maxUsesPerAddress?: number; hasPrivateList?: boolean }

// Private params
{ useDynamicStore?: boolean; dynamicDataId?: string; dataSecret?: string; listId?: string; list?: AddressList }

// Private state
{ addresses: { [address: string]: number } }  // claims per address
```

A `whitelist: false` list acts as a denylist. When this plugin is the claim number assigner, the claim number is the address's index in the list. A public dynamic store (`publicUseInClaims`) needs no `dataSecret` for reads; other stores do. See [Dynamic Stores](dynamic-stores.md). Errors: `User not in whitelist`, `User in denylist`, `User already exceeded max uses`, `Dynamic data doc not found`, `Invalid data secret`.

### `halt`

No params. Every attempt fails with `Claim halted` while the plugin is present. Add it to pause, remove it to resume.

### `anonymous`

No params. Requires the claiming address to be the null address `bb1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqs7gvmv`. Error: `BitBadges address must be anonymous.`

## BitBadges-Hosted Plugins

These are plugin documents created by BitBadges. Their `verificationCall.uri` points at `https://api.bitbadges.io/api/v0/integrations/query/<id>`, and the API handles them in-process rather than over the network. All are `Stateless`, finalized, and allow duplicates.

| Plugin id | Checks | Public params | User inputs | `passAddress` | On-demand compatible |
| --- | --- | --- | --- | --- | --- |
| `must-own-badges` | Ownership requirements (`$and` / `$or` groups of assets, amounts, times) | `ownershipRequirements` (type `ownershipRequirements`, required) | none | yes | yes |
| `min-badge` | `BADGE` balance of at least `minBalance` (whole `BADGE`, `ubadge / 1e9`) | `minBalance` (number, required) | none | yes | yes |
| `satisfies-claim` | The address has at least one success on another claim. Indexed claims check history; on-demand claims re-run the criteria. | `claimIdToCheck` (string, required) | none | yes | yes |
| `username-set` | The address has set a BitBadges username | none | none | yes | yes |
| `url-clicker` | Shows a link the user must open before claiming. The check always passes. | `url` (url, required, rendered as a hyperlink) | none (requires user interaction) | no | no |
| `custom-instructions` | Shows instructions to the user. The check always passes. | `instructions` (string, required) | none (requires user interaction) | no | no |

`must-own-badges` example public params:

```json
{
  "ownershipRequirements": {
    "$and": [
      {
        "assets": [
          {
            "chain": "BitBadges",
            "collectionId": "1",
            "assetIds": [{ "start": "1", "end": "20" }],
            "ownershipTimes": [],
            "mustOwnAmounts": { "start": "1", "end": "1" }
          }
        ],
        "options": {}
      }
    ]
  }
}
```

Nested `satisfies-claim` checks on on-demand claims have a depth limit of 5. Circular references are rejected. Results for `min-badge` are cached briefly (60 seconds on success, 10 seconds on failure) so a simulation and the real attempt share one check.

## Social Account Plugins

| Plugin id | Checks |
| --- | --- |
| `discord` | The user's connected Discord account |
| `github` | The user's connected GitHub account |
| `github-contributions` | The user's GitHub contributions to a repository |
| `google` | The user's connected Google account |
| `twitch` | The user's connected Twitch account |
| `twitter` | The user's connected X (Twitter) account |

`discord`, `github`, `google`, `twitch`, and `twitter` share one shape. The creator lists allowed accounts; the user must be signed in to that provider on BitBadges (the site's **Connections** flow).

```ts
// Public params
{ users: string[]; maxUsesPerUser: number; hasPrivateList: boolean }

// Private params
{ usernames: string[] }   // the allowed list when hasPrivateList is true

// State (per instance)
{ ids: { [id: string]: number }; usernames: { [username: string]: number } }
```

`github-contributions` is `Stateless` with `verificationCall.uri` `https://api.bitbadges.io/api/v0/integrations/query/github-contributions` and no creator params in source. Fetch its current schema with `getPlugin('github-contributions')`.

These six run inside the BitBadges service with the user's OAuth session. Their handlers are not part of the open-source indexer repository, so this page documents only the parameter shapes found in source. Use `getPlugin` for the authoritative schema.

## Custom Plugin Contract

A custom plugin is an HTTPS endpoint you register in the developer portal (**Plugins** tab). BitBadges calls it during simulation and execution, and optionally after the claim resolves. The endpoint answers `200` to pass or any other status to fail.

### Request

BitBadges always sends `POST` with a JSON body. Fields from every source are merged into one flat object. The example is a plugin `ticket-check` with one user input (`ticketNumber`), one public param (`eventId`), one private param (`venueSecret`), and `passAddress: true`, running as instance `ticket-gate` in `claim_demo_01`:

```json
{
  "ticketNumber": "4821",
  "eventId": "demo-launch-2026",
  "venueSecret": "vs_9b2d7a4f1e8c5f3a0e6c9b2d7a4f1e8c",

  "bitbadgesAddress": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
  "ethAddress": "0x092bb4851ae26850588243e7bef22a56287f4739",
  "isAddressSignedIn": true,

  "pluginSecret": "ps_3f9c1e7a2b8d6f4a0c5e9b2d7a4f1e8c",
  "version": 0,
  "claimId": "claim_demo_01",
  "claimAttemptId": "3b9d2f7a1c4e6b8d0f2a4c6e8b1d3f5a",
  "instanceId": "ticket-gate",
  "_isSimulation": false,
  "_attemptStatus": "executing",
  "lastUpdated": 1788652800000,
  "createdAt": 1788652800000,
  "locale": "en"
}
```

| Field | Source | Description |
| --- | --- | --- |
| `ticketNumber`, `eventId`, `venueSecret` | your schemas | `userInputsSchema`, `publicParamsSchema`, `privateParamsSchema`, and `hardcodedInputs`, flattened into the body (or sent as headers when `headerField` is set). |
| `bitbadgesAddress`, `ethAddress`, `isAddressSignedIn` | identity | Only when `verificationCall.passAddress` is true; otherwise `null`. `ethAddress` is derived from `bitbadgesAddress` when the user has no ETH wallet. `isAddressSignedIn` is true when the claiming address is signed in. |
| `pluginSecret` | context | Verify BitBadges is the caller. |
| `version` | context | Plugin version in use. |
| `claimId`, `claimAttemptId`, `instanceId` | context | The claim, the attempt (empty for simulations), and this plugin instance in the claim. |
| `_isSimulation` | context | `true` for a dry run. |
| `_attemptStatus` | context | `executing` during the claim, `success` or `failure` on the status webhook. |
| `lastUpdated`, `createdAt` | context | Claim last updated and created, UNIX ms. |
| `locale` | context | The claiming user's locale. |

Headers:

| Header | Value |
| --- | --- |
| `X-BitBadges-Signature` | HMAC-SHA256 hex of `` `${timestamp}.${JSON.stringify(body)}` `` keyed with your `pluginSecret` |
| `X-BitBadges-Timestamp` | The `timestamp` used in the signature (UNIX ms as a string) |
| `X-BitBadges-Version` | `1` |
| any schema field with `headerField: true` | Sent as a header instead of a body field |

Reserved keys that your schemas cannot use: `pluginSecret`, `version`, `claimId`, `bitbadgesAddress`, `claimAttemptId`, `_isSimulation`, `_isQueueHandler`, `_attemptStatus`, `lastUpdated`, `createdAt`, `email`, `isAddressSignedIn`, `locale`, `instanceId`, `X-BitBadges-Signature`, `X-BitBadges-Timestamp`, `X-BitBadges-Version`.

Constraints on the endpoint:

- Public HTTPS URL that passes SSRF validation (no private or internal addresses). DNS is pinned for the request.
- Calls to `api.bitbadges.io` are blocked to prevent loops.
- Respond within 10 seconds.
- Handle CORS and method yourself. The caller is a server, not a browser.

### Identifying the User

The address is only trustworthy when `isAddressSignedIn` is `true`, which requires the claim (or your plugin's `requireSignIn`) to demand sign in. If you identify users your own way, or do not want to trust BitBadges, issue a one-time code from your service while the user is authenticated with you, collect it as a user input, and verify it in the handler.

### Response

Return `200` and a JSON body that matches the version's `stateFunctionPreset`:

| Preset | Body | Meaning |
| --- | --- | --- |
| `Stateless` | `{}` | Pass. Nothing else is read. |
| `ClaimToken` | `{ "claimToken": "ticket-4821" }` | A one-time token you issued. BitBadges marks it used only if the whole claim succeeds; a failed claim leaves it available for retry. |
| `ClaimNumbers` | `{ "claimNumber": 0 }` | The zero-based claim number to assign. Only one plugin per claim can assign claim numbers. |
| `CustomResponseHandler` | your shape | You manage state and interpretation yourself. |

A `200` is a hypothetical state transition. The claim can still fail on another plugin. Do not commit external state on `200` alone (see state below).

Returned JSON keys must not contain `.` (write `bob@abc[dot]com`, not `bob@abc.com`). This is a storage constraint.

### Errors

Return a non-200 status with a `message` field:

```json
{ "message": "Ticket 4821 was already redeemed" }
```

BitBadges stores the error for debugging (`getPluginErrors`) and may show it to the claiming user or the creator. Be informative without revealing secrets or internal details.

### Simulations

BitBadges simulates before execution. Detect a dry run with `_isSimulation === true` (and an empty `claimAttemptId`). Validate inputs and preconditions, return the status you would return for real, and do not mutate state, send notifications, or consume tokens. Set `ignoreSimulations: true` in the version config to skip the simulation call entirely; the plugin then auto-passes simulation and is only called at execution.

For a custom plugin, the execution step trusts the simulation result and replays it through the state handler. Your endpoint is called once per attempt, not twice.

### Status Webhook

With `receiveStatusWebhook: true`, BitBadges POSTs the same payload to your endpoint after the claim resolves with `_attemptStatus: 'success'` or `'failure'`. Retries use exponential backoff: base delay 1 hour, `2^retries * base`, maximum 7 days (1h, 2h, 4h, 8h, 16h, and so on). Make the handler idempotent and deduplicate on `claimAttemptId`.

### State Rules

- All plugins in a claim run in parallel against the state as it was before the attempt. A plugin cannot depend on another plugin's state change in the same attempt.
- Attempts process through a queue. Live claim totals may be stale by the time your handler runs. Your own params and the context fields are safe to depend on.
- Prefer BitBadges-managed state (`Stateless`, `ClaimToken`, `ClaimNumbers`). Updates commit only when your plugin returned `200` and the whole claim succeeded.
- For self-managed state, verify the outcome first with `getClaimAttemptStatus(claimAttemptId)` or the status webhook, and use idempotency keys because attempts run concurrently.

### On-Demand Compatibility

To work with on-demand (non-indexed) claims, set `reuseForNonIndexed: true`. The plugin must be stateless, take no user inputs, and work from the address and hardcoded params alone.

## Plugin Version Config

```ts
interface PluginVersionConfig {
  version: number;                 // auto-incrementing
  finalized: boolean;              // immutable and usable by others once true
  stateFunctionPreset: 'Stateless' | 'ClaimToken' | 'ClaimNumbers' | 'CustomResponseHandler';

  duplicatesAllowed: boolean;
  requiresSessions: boolean;
  requiresUserInputs: boolean;
  reuseForNonIndexed: boolean;
  receiveStatusWebhook: boolean;
  skipProcessingWebhook?: boolean;
  ignoreSimulations?: boolean;
  requireSignIn?: boolean;

  userInputsSchema: JsonBodyInputSchema[];
  publicParamsSchema: JsonBodyInputSchema[];
  privateParamsSchema: JsonBodyInputSchema[];

  verificationCall?: {
    uri: string;
    hardcodedInputs: JsonBodyInputWithValue[];
    passAddress?: boolean;
  };

  customDetailsDisplay?: string;   // "Requires {{minBalance}} tokens"
}
```

| Field | Description |
| --- | --- |
| `finalized` | Locks schemas, URL, and settings. Unfinalized versions are usable only by the plugin creator (Claim Tester). |
| `duplicatesAllowed` | A claim may include several instances of this plugin with different params. |
| `requiresSessions` | The claim needs an active BitBadges session. |
| `requiresUserInputs` | The user must fill a form at claim time. BitBadges renders it from `userInputsSchema`. |
| `reuseForNonIndexed` | Compatible with on-demand claims. Requires stateless, no user inputs. |
| `receiveStatusWebhook` | Receive the final outcome POST described above. |
| `skipProcessingWebhook` | Auto-pass without calling the endpoint. Used by display-only plugins such as `custom-instructions`. |
| `ignoreSimulations` | Do not call the endpoint during dry runs. |
| `requireSignIn` | The user must be signed in before this plugin runs. |
| `verificationCall.uri` | Your handler URL. |
| `verificationCall.hardcodedInputs` | Static key-value pairs included in every request (body or header per `headerField`). Useful for API keys. |
| `verificationCall.passAddress` | Include `bitbadgesAddress`, `ethAddress`, and `isAddressSignedIn` in the payload. |
| `customDetailsDisplay` | Template shown to users in the claim UI. `{{key}}` references public param keys. |

### Schema Fields

Each entry in a schema array describes one input:

```ts
interface JsonBodyInputSchema {
  key: string;                   // field name in the payload
  label: string;                 // shown to the person filling it
  type: string;                  // 'string' | 'number' | 'boolean' | 'date' | 'url' (date values are UNIX ms)
  required?: boolean;
  defaultValue?: string | number | boolean;
  helper?: string;
  options?: { label: string; value: string | number | boolean }[]; // renders a dropdown
  arrayField?: boolean;          // multiple values
  headerField?: boolean;         // send as an HTTP header instead of a body field
  hideFromDetailsDisplay?: boolean; // public params only: hide from the public view
  hyperlink?: { url: string; showAsGenericView?: boolean };
}
```

The `ticket-check` plugin from the request example declares its three inputs like this:

```json
{
  "userInputsSchema": [
    { "key": "ticketNumber", "label": "Ticket number", "type": "string", "required": true, "helper": "Printed on your ticket" }
  ],
  "publicParamsSchema": [
    { "key": "eventId", "label": "Event", "type": "string", "required": true }
  ],
  "privateParamsSchema": [
    { "key": "venueSecret", "label": "Venue secret", "type": "string", "required": true }
  ]
}
```

BitBadges-created plugins also use the type `ownershipRequirements`. Custom plugins use the five listed types.

Versioning: a new version starts unfinalized. Finalize it to make it immutable and usable by others. A claim keeps the version it was created with, even after you publish newer ones. Your handler receives `version` and `createdAt` in every request to branch on if needed. Private plugins (default) can be added only by you; published plugins appear in the directory for everyone.

## Internal Plugin Interface

Core plugins implement the same shape internally. Custom plugins get the same atomicity: `toSet` updates apply only if the whole claim succeeds.

```ts
interface BackendIntegrationPlugin<P extends ClaimIntegrationPluginType> {
  pluginId: P;
  metadata: {
    name: string;
    description: string;
    image: string;
    createdBy: string;
    stateless: boolean;
    scoped: boolean;             // state scoped to the claim instance
    duplicatesAllowed: boolean;
    mandatoryToSucceed?: boolean; // cannot be made optional via success logic
    toSkipIfSuccessfulSimulation: boolean;
  };
  validate: (args: {
    context: ContextInfo & { instanceId: string; pluginId: string; version: string };
    publicParams: PublicParamsType;
    privateParams: PrivateParamsType;
    customBody?: UserInputType;
    priorState?: any;
    adminInfo?: any;
    simulationResult?: CachedPluginResult;
  }) => Promise<{
    success: boolean;
    error?: string;
    toSet?: object[];       // state updates, applied only if the claim succeeds
    data?: any;
    claimNumber?: number;   // when this plugin assigns claim numbers
    apiCall?: { uri: string; method: string; body: object; headers: object };
  }>;
  defaultState: any;
  getPublicState: (currState: any) => PublicStateType;
  getBlankPublicState: () => PublicStateType;
}

interface ContextInfo {
  locale: string;
  bitbadgesAddress: string;
  ethAddress: string;
  isAddressSignedIn: boolean;
  claimId: string;
  _isQueueHandler: boolean;   // internal: processing from the queue
  _isSimulation: boolean;
  _attemptStatus: string;
  lastUpdated: number;
  createdAt: number;
  claimAttemptId: string;
  assignMethod: string;       // claim number assignment method
  isClaimNumberAssigner: boolean;
}
```

## Related

- [Build a Claim Plugin](../../guides/build-a-claim-plugin.md)
- [Claims](README.md)
- [Endpoints](endpoints.md)
- [Dynamic Stores](dynamic-stores.md)
