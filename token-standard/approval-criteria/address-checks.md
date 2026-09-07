---
description: "senderChecks, recipientChecks, and initiatorChecks: require or forbid EVM contracts and liquidity pools for each party of a transfer."
---

# Address checks

Address checks constrain the type of address on each side of a transfer. They are how a collection keeps tokens out of pools, or requires that only contracts initiate a flow.

## Shape

```json
{
  "approvalCriteria": {
    "recipientChecks": {
      "mustBeEvmContract": true,
      "mustNotBeLiquidityPool": true
    },
    "initiatorChecks": {
      "mustNotBeEvmContract": true
    }
  }
}
```

```ts
interface AddressChecks {
  mustBeEvmContract?: boolean;
  mustNotBeEvmContract?: boolean;
  mustBeLiquidityPool?: boolean;
  mustNotBeLiquidityPool?: boolean;
}
```

| Field | Type | Description |
| --- | --- | --- |
| `mustBeEvmContract` | bool | The address must have EVM code |
| `mustNotBeEvmContract` | bool | The address must not have EVM code |
| `mustBeLiquidityPool` | bool | The address must be an `x/gamm` pool |
| `mustNotBeLiquidityPool` | bool | The address must not be an `x/gamm` pool |

The checks attach to a party:

| Criterion | Party checked | Collection | Outgoing | Incoming |
| --- | --- | --- | --- | --- |
| `senderChecks` | `from` | yes | no | yes |
| `recipientChecks` | `to` | yes | yes | no |
| `initiatorChecks` | `initiatedBy` | yes | yes | yes |

An outgoing approval cannot check the sender and an incoming approval cannot check the recipient, because that party is the approval's owner.

## How it works

The chain converts the `bb1` address to its 20-byte EVM form and asks the EVM module whether code exists there. For pools it looks the address up in the pool address cache that `x/gamm` fills at pool creation. If the EVM or gamm module is not wired in, the corresponding check answers `false`.

Checks run after the address lists match. An address must be in `fromListId`, `toListId`, or `initiatedByListId` first, then pass its checks. Several flags on one party combine with AND.

### Examples

Only contracts can receive:

```json
{ "approvalCriteria": { "recipientChecks": { "mustBeEvmContract": true } } }
```

Pools cannot send (collection approval):

```json
{ "approvalCriteria": { "senderChecks": { "mustNotBeLiquidityPool": true } } }
```

Only contracts can initiate (incoming approval):

```json
{ "approvalCriteria": { "initiatorChecks": { "mustBeEvmContract": true } } }
```

Never send to a pool (outgoing approval):

```json
{ "approvalCriteria": { "recipientChecks": { "mustNotBeLiquidityPool": true } } }
```

Uses: contract-only integrations, keeping a token out of liquidity pools, requiring that a human (non-contract) initiates, and protocol-specific routing rules. Pair `mustNotBeLiquidityPool` with the reserved-address protection described on [Overrides](overrides.md) when you use forceful transfers.

## Related

- [Overrides](overrides.md)
- [Approval criteria](README.md)
- [gamm](../modules/gamm/README.md)
