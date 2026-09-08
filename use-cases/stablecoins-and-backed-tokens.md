---
description: "Issue a token backed 1:1 by USDC or any IBC coin. One invariant and two approvals give you deposit-to-mint, burn-to-withdraw, and an x/bank denom."
---

# Stablecoins and Backed Tokens

A backed token is a collection whose every unit is held 1:1 against an existing IBC coin. Users send USDC to a protocol-controlled backing address and receive your token. They send your token back and receive their USDC. The chain enforces the 1:1 ratio in an invariant, so no contract holds the reserve and no admin key can mint unbacked supply.

The same shape covers a compliant stablecoin wrapper, a branded deposit receipt, a permissioned version of a foreign asset, and the vault under an AI agent.

## What Makes It Work

| Requirement | Token-standard primitive |
| --- | --- |
| Every unit is backed 1:1 | `invariants.cosmosCoinBackedPath` with a `sideA` coin and a `sideB` token conversion. See [Backed Minting](../token-standard/ibc/backed-minting.md) |
| Deposit mints, withdraw burns | Two collection approvals: `fromListId` = backing address (deposit) and `toListId` = backing address (withdraw), both with `allowBackedMinting: true`. See [Special Address Flags](../token-standard/approval-criteria/special-address-flags.md) |
| Reserve address nobody controls | The backing address is derived from the IBC denom. `bb account alias for-ibc-backing <denom>` or the `generate_backing_address` tool prints it |
| Spendable as an `x/bank` coin and over IBC | An alias path with the same decimals as the backing coin. See [Alias Denoms](../token-standard/ibc/alias-denoms.md) |
| Holders can or cannot trade | One optional post-mint approval (`fromListId: "!Mint"`, `toListId: "All"`). Omit it for a vault, include it for a wrapped asset |
| Rules can never change | `canUpdateCollectionApprovals` locked, `noForcefulPostMintTransfers: true` |

## The Fields That Matter

```json
{
  "standards": ["Smart Token"],
  "invariants": {
    "cosmosCoinBackedPath": {
      "conversion": {
        "sideA": { "amount": "1", "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8" },
        "sideB": [{ "amount": "1", "tokenIds": [{ "start": "1", "end": "1" }], "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }] }]
      }
    },
    "noForcefulPostMintTransfers": true
  },
  "collectionApprovals": [
    {
      "approvalId": "smart-token-deposit",
      "fromListId": "bb1backingaddress...",
      "toListId": "!bb1backingaddress...",
      "initiatedByListId": "All",
      "approvalCriteria": { "mustPrioritize": true, "allowBackedMinting": true }
    },
    {
      "approvalId": "smart-token-withdraw",
      "fromListId": "!Mint:bb1backingaddress...",
      "toListId": "bb1backingaddress...",
      "initiatedByListId": "All",
      "approvalCriteria": { "mustPrioritize": true, "allowBackedMinting": true }
    }
  ]
}
```

:::widget{name="transferability-row" caption="The deposit approval as the transferability tab lists it: the backing address is the sender, and anyone except that address can receive."}
{
  "approvalId": "smart-token-deposit",
  "fromListId": "bb1backingaddress...",
  "toListId": "!bb1backingaddress...",
  "initiatedByListId": "All",
  "criteria": [
    "Backed minting",
    "Must prioritize"
  ]
}
:::

The `!Mint:bb1backingaddress...` list means "everyone except Mint and the backing address", so only real holders can withdraw. There is no `fromListId: "Mint"` approval anywhere: supply exists only when a deposit backs it.

```bash
bb build smart-token --backing-coin USDC --symbol sUSDC --tradable \
  --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json
```

This emits one MsgUniversalUpdateCollection with the invariant, the two approvals above, a `usUSDC` alias path with 6 decimals, and a third transferable approval because of `--tradable`.

## Variations

- Withdraw limits: add `approvalAmounts` with `resetTimeIntervals.intervalLength: "86400000"` to the withdraw approval for a daily cap. See [Approval Trackers](../token-standard/approval-criteria/approval-trackers.md).
- Withdraw 2FA: add `mustOwnTokens` pointing at a [custom 2FA collection](memberships-and-address-lists.md) so a withdrawal needs a fresh short-lived token.
- Compliance on every hop: put `dynamicStoreChallenges` or `mustOwnTokens` (a KYC credential) on the transferable approval. Pools and orderbooks inherit the check. See [Compliance Zones](../token-standard/concepts/compliance-zones.md).
- DEX trading: add the `Liquidity Pools` standard and set `disablePoolCreation: false`. See [Trade on the DEX](../guides/trade-on-the-dex.md).
- Native coin backing: use `BADGE` as the backing coin with the same `cosmosCoinBackedPath` pattern. A [wrapper path](../token-standard/ibc/cosmos-coin-wrapper-paths.md) instead creates a new bank denom from tokens; it does not reserve an existing coin.

## Build It

- Skill: [Smart Token](../agents/skills/smart-token.md)
- Guide: [Smart Tokens and Vaults](../guides/smart-tokens-and-vaults.md), [Wrap to an IBC Denom](../guides/wrap-to-an-ibc-denom.md)
- CLI: [`bb build smart-token`](../cli/build.md#smart-token), then `bb smart-tokens deposit` and `bb smart-tokens withdraw` from [Standards](../cli/standards.md#smart-tokens)

```text
Load the smart-token skill. Build a USDC-backed token called sUSDC that holders can transfer peer to peer, with a 10000 USDC per day withdraw limit. Run validate, review, and simulate, fix anything critical, then give me the review link.
```
