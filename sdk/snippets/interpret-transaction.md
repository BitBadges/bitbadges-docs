---
description: "Explain an unsigned MsgUniversalUpdateCollection transaction body in plain language with interpretTransaction in the bitbadges SDK."
---

# Interpret a transaction

`interpretTransaction` explains a raw `MsgUniversalUpdateCollection` body before it is signed. It is the transaction-side counterpart of [Interpret a collection](interpret-collection.md).

## Example

```bash
bb explain ./tx.json
```

```ts
import { readFileSync } from 'node:fs';
import { interpretTransaction } from 'bitbadges';

// tx.json is { "messages": [{ "typeUrl": "/tokenization.MsgUniversalUpdateCollection", "value": {} }] } from bb build or get_transaction
const tx = JSON.parse(readFileSync('./tx.json', 'utf8'));
const messages: { typeUrl: string; value: Record<string, any> }[] = tx.messages;
const txBody = messages[0].value;

// A new collection: describe every field
const created = interpretTransaction(txBody);

// An update: describe only the fields being changed
const updated = interpretTransaction(txBody, true, ['updateCollectionApprovals', 'updatePermissions']);

// A multi-message transaction: also explain bundled MsgTransferTokens
const bundle = interpretTransaction(txBody, false, [], messages);
console.log(bundle);
```

## Fields

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `txBody` | `Record<string, any>` | yes | The `value` of a `MsgUniversalUpdateCollection` (or the message object itself) |
| `isUpdate` | `boolean` | no | Default `false`. When true, limits the output to changed fields |
| `activeUpdateFlags` | `string[]` | no | Which `update*` flags are set, for example `updateCollectionApprovals` |
| `messages` | `any[]` | no | The full message array, so bundled transfers are explained too |

Returns one markdown string.

## Behavior

| | `interpretCollection` | `interpretTransaction` |
| --- | --- | --- |
| Input | Hydrated `BitBadgesCollection` from the API | Raw message JSON |
| When | Explaining an existing collection | Reviewing a transaction before or after signing |
| Claims | Includes claim plugin details | No claim data (not part of the transaction) |

Use it in a review step before `signAndBroadcast`, together with [Simulation balance diffs](simulation-balance-diffs.md) for the numbers.

## Related

- [Interpret a collection](interpret-collection.md)
- [MsgUniversalUpdateCollection](../../token-standard/messages/msg-universal-update-collection.md)
