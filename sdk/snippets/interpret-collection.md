---
description: "Generate a plain-language markdown report of any on-chain collection with interpretCollection in the bitbadges SDK."
---

# Interpret a Collection

`interpretCollection` turns a `BitBadgesCollection` into a markdown explanation of its permissions, approvals, claims, invariants, metadata, and risks. The same function backs `bb explain`, the MCP `explain_collection` tool, and the collection overview on bitbadges.io.

## Example

```bash
bb explain 1
```

```ts
import { BitBadgesAPI, BigIntify, interpretCollection } from 'bitbadges';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });
const res = await api.getCollections({ collectionsToFetch: [{ collectionId: '1' }] });
const collection = res.collections[0];
if (!collection) throw new Error('Collection not found');

const explanation: string = interpretCollection(collection);
console.log(explanation);
```

## Behavior

`interpretCollection(collection)` accepts a `BitBadgesCollection` instance or the plain `iBitBadgesCollection` interface and returns one markdown string with these sections:

- Overview: name, type, token range, standards
- How tokens are created and obtained: every mint approval, explained
- Transferability: every transfer approval, explained
- Default balances and auto-approve settings
- What the manager can and cannot change: the state of every permission
- On-chain invariants and guarantees
- Claims: plugin types, flow, rewards, with secrets stripped
- IBC and cross-chain details

Sensitive claim parameters (`seedCode`, `preimages`, private plugin params) are removed, so the output is safe to show to any user.

Fetch the collection with metadata and claims included (the default for `getCollections`) so the report can name tokens and describe claim flows. Convert with `BigIntify`; the interpreter does numeric comparisons.

## Related

- [Interpret a Transaction](interpret-transaction.md)
- [CLI analyze](../../cli/analyze.md)
- [MCP tools](../../agents/mcp-tools.md)
