---
description: "Audit a collection transaction or on-chain collection object for security risks, design flaws, and common gotchas."
---

# Function: auditCollection()

> **auditCollection**(`input`): [`AuditResult`](/sdk/reference/interfaces/audit-result)

Defined in: [packages/bitbadgesjs-sdk/src/core/audit.ts:187](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/audit.ts#L187)

Audit a collection transaction or on-chain collection object for security
risks, design flaws, and common gotchas.

## Parameters

### input

#### collection

`Record`\<`string`, `unknown`\>

The collection to audit.  Accepts:
  - A `MsgUniversalUpdateCollection` message (with `typeUrl` and `value`)
  - The `value` field directly
  - A raw collection object from `query_collection`
  - A transaction wrapper `{ messages: [...] }`

#### context?

`string`

Optional free-text context such as "NFT art collection"
  or "stablecoin vault".  Helps tailor findings.

## Returns

[`AuditResult`](/sdk/reference/interfaces/audit-result)

Structured [AuditResult](/sdk/reference/interfaces/audit-result).
