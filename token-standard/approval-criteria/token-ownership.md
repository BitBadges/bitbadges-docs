---
description: "mustOwnTokens: require the initiator, sender, recipient, or a fixed address to hold tokens from some collection before the transfer is approved."
---

# Token ownership

`mustOwnTokens` gates a transfer on the balance of another (or the same) collection. It is how one collection depends on another: KYC passports, memberships, tiers, and holding periods.

## Shape

```json
{
  "mustOwnTokens": [
    {
      "collectionId": "1",
      "amountRange": { "start": "1", "end": "1" },
      "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "tokenIds": [{ "start": "1", "end": "1" }],
      "overrideWithCurrentTime": false,
      "mustSatisfyForAllAssets": true,
      "ownershipCheckParty": "initiator"
    }
  ]
}
```

```ts
interface MustOwnTokens<T extends NumberType> {
  collectionId: T;
  amountRange: UintRange<T>;
  ownershipTimes: UintRange<T>[];
  tokenIds: UintRange<T>[];
  overrideWithCurrentTime: boolean;
  mustSatisfyForAllAssets: boolean;
  ownershipCheckParty: string;
}
```

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | Uint | Collection whose balances are checked |
| `amountRange` | UintRange | Minimum and maximum amount the party must hold. `{ "1", "1" }` means exactly one. |
| `ownershipTimes` | UintRange[] | Times during which the party must own the tokens (UNIX ms) |
| `tokenIds` | UintRange[] | Token IDs that must be owned |
| `overrideWithCurrentTime` | bool | Ignore `ownershipTimes` and check `[{ start: now, end: now }]` |
| `mustSatisfyForAllAssets` | bool | `true`: every (token ID, ownership time) combination must satisfy `amountRange`. `false`: at least one must. |
| `ownershipCheckParty` | string | `"initiator"` (default when empty), `"sender"`, `"recipient"`, or a fixed `bb1` address |

## How it works

For each entry the chain loads the party's balances in `collectionId` and expands them over `tokenIds` and `ownershipTimes` (or the current block time). Each combination's amount is compared with `amountRange`. With `mustSatisfyForAllAssets: true`, all combinations must be inside the range; with `false`, one is enough. Every entry in the array must pass.

The check is read-only and auto-scannable. It works for balances the party holds by default from `defaultBalances` as well as minted ones.

### Party examples

Initiator (default):

```json
{
  "mustOwnTokens": [
    {
      "collectionId": "1",
      "amountRange": { "start": "1", "end": "1" },
      "tokenIds": [{ "start": "1", "end": "1" }],
      "ownershipCheckParty": "initiator"
    }
  ]
}
```

Sender:

```json
{
  "mustOwnTokens": [
    {
      "collectionId": "1",
      "amountRange": { "start": "1", "end": "1" },
      "tokenIds": [{ "start": "1", "end": "1" }],
      "ownershipCheckParty": "sender"
    }
  ]
}
```

Recipient:

```json
{
  "mustOwnTokens": [
    {
      "collectionId": "1",
      "amountRange": { "start": "1", "end": "1" },
      "tokenIds": [{ "start": "1", "end": "1" }],
      "ownershipCheckParty": "recipient"
    }
  ]
}
```

A fixed address, whoever is transferring (a multisig or contract that must hold a token for the flow to be open):

```json
{
  "mustOwnTokens": [
    {
      "collectionId": "1",
      "amountRange": { "start": "1", "end": "1" },
      "tokenIds": [{ "start": "1", "end": "1" }],
      "ownershipCheckParty": "bb1kj9kt5y64n5a8677fhjqnmcc24ht2vy9atmdls"
    }
  ]
}
```

### Patterns

- Access gate: `amountRange { 1, MAX }` on a membership collection with `overrideWithCurrentTime: true`.
- Must not hold: `amountRange { 0, 0 }` to exclude holders of a blocklist token.
- Holding period: `ownershipTimes` covering the past N days to require the party has held since then.
- Same-collection cap: check `collectionId` equal to the current collection to require the recipient hold fewer than N before receiving.

## Related

- [Balances](../concepts/balances.md)
- [Dynamic store challenges](dynamic-store-challenges.md)
- [Compliance zones](../concepts/compliance-zones.md)
