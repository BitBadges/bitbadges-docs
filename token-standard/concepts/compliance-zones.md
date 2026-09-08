---
description: "Why BitBadges enforces compliance at the boundary of x/tokenization instead of in every module, and how the open zone and compliance zone connect."
---

# Compliance Zones

Compliance on a chain can live in the token, in the bank module, in every contract, or at one controlled boundary. BitBadges puts it at the boundary: `x/tokenization` is a siloed compliance zone, and standard bank coins remain outside collection-specific approvals. Chain-level controls, including IBC rate limits, still apply.

## Shape

| Zone | What lives there | Gated per transfer |
| --- | --- | --- |
| Open zone | `sdk.Coin` denoms (gas, IBC stablecoins, bridge wrappers), `x/bank`, staking, governance, public DEX, vanilla IBC | no |
| Compliance zone | `x/tokenization` collections. The issuer writes the rules (sanctions, KYC, jurisdiction, holding periods, multisig escrow, rate limits); the approval engine enforces them. | yes |

The two zones connect through boundary operations that the approval engine mediates:

| Boundary operation | Mechanism |
| --- | --- |
| 1:1 wrapping | `cosmosCoinBackedPath` (collection backed 1:1 by an `sdk.Coin`; wrap locks the coin and mints, unwrap reverses) or `cosmosCoinWrapperPaths` (tokens become an `x/bank` denom without a backing coin) |
| Pool swaps | An `x/gamm` pool exchanging `sdk.Coin` for a collection asset; the approval engine gates the trade, no separate wrap step |
| Side payments | `coinTransfers` on an approval move `sdk.Coin` alongside the token transfer (royalties, redemptions, subscription fees) |
| IBC-backed minting | An incoming packet mints into a collection, with approvals checked on receipt |

## How It Works

### Why Not Gate Every Layer

Putting compliance in bank, IBC, staking, governance, and every contract has four costs:

- Surface area. Compliance code spreads across modules and each integration must be audited.
- Ecosystem compatibility. If bank rejects vanilla transfers, IBC counterparties cannot predict behavior and wallets and indexers break.
- Update friction. A rule change touches many call sites, possibly in forked SDK modules.
- All or nothing. Compliant and permissionless assets cannot share a chain.

The boundary model answers each: one audit surface in `x/tokenization`, an open zone that behaves like any Cosmos chain, rule updates as approval updates ([MsgSetCollectionApprovals](../messages/msg-set-collection-approvals.md), or governance for chain-level params), and mixed postures (compliant equity tokens, a public DEX, and IBC stablecoins on one chain).

### What a Boundary Check Can Test

At boundary time the approval engine can check any [approval criterion](../approval-criteria/README.md):

- Sanctions: is the address flagged in a [dynamic store](../approval-criteria/dynamic-store-challenges.md)?
- KYC: does the address hold a passport token from an authorized issuer ([Token Ownership](../approval-criteria/token-ownership.md))?
- Jurisdiction: a `jurisdiction:US` token on a non-US asset?
- Threshold: does the amount cross a Travel Rule trigger ([Approval Trackers](../approval-criteria/approval-trackers.md))?
- External state: an [EVM query](../approval-criteria/evm-query-challenges.md) against a screening contract.
- Multisig: a [voting challenge](../approval-criteria/voting-challenges.md) with N-of-M signers and an optional `delayAfterQuorum` timelock.
- Time: `transferTimes` plus [Alt Time Checks](../approval-criteria/alt-time-checks.md) for market hours, business days, and blackout windows.

Inside the zone the same engine governs ongoing activity: transfer restrictions, ownership-window checks (`mustOwnTokens.ownershipTimes`), dividends (incremented balances plus `coinTransfers`), multisig escrow (voting plus `delayAfterQuorum`), and vesting (`Balance.ownershipTimes`).

### The Open Zone

The open zone is the chain's standard surface: the gas token as an `sdk.Coin` (`ubadge`), ICS-20 stablecoin vouchers, vanilla bank, staking, and governance, and public DEX activity. It is supervised at chain-config level (IBC channel allowlists, validator set, permitted assets) and remains subject to module rules such as [IBC rate limits](../../chain/modules/ibc-rate-limit.md). It does not inherit a collection's approval criteria.

### Cross-Chain Movement

Collection tokens do not travel over vanilla IBC, because ICS-20 moves `sdk.Coin` with no compliance semantics. The pattern is:

1. Exit the source silo: unwrap, redeem, or burn. The issuer's exit rules run and the underlying `sdk.Coin` is released.
2. Travel as `sdk.Coin` over vanilla ICS-20. Counterparties see standard ICS-20 traffic; BitBadges IBC middleware can still enforce rate limits and process transfer hooks.
3. Re-enter a silo on the destination chain. The destination issuer's entry rules run and tokens mint into the destination collection.

Each silo enforces its own rules, the hop between them is neutral, and in transit there is no siloed state to violate. This mirrors how tokenized securities move between depositories that each re-apply their own framework.

### Compared to Permissioned Tokens

ERC-3643 puts compliance in the token contract, so every transfer everywhere hits restriction logic. The EVM has no seam between plain currency and regulated assets, so the contract must be the boundary. Cosmos has that seam: `sdk.Coin` and `x/tokenization` assets are distinct first-class objects.

| | Permissioned token (ERC-3643) | Compliance zone (BitBadges) |
| --- | --- | --- |
| Where compliance lives | Token contract | Approval engine |
| What is gated | Every transfer, everywhere | Boundary entry plus intra-zone activity |
| New regime | Deploy new contracts and compliance modules | Configure new approval criteria; issue new tokens |
| Updating rules | Redeploy or upgrade contracts | Update approvals |
| Mixed activity | All or nothing | Two zones |
| Ecosystem compatibility | Permissioned tokens break vanilla DeFi | Open zone is vanilla Cosmos |
| Boundary | Implicit (the contract) | Explicit (approval-engine operations into a silo) |

The two compose: the [Tokenization Precompile](../../chain/evm/tokenization-precompile/README.md) lets ERC-3643 contracts inherit the zone's gates.

### Deploying the Pattern

1. Choose what enters the zone: which assets wrap on receipt (IBC-USDC to a wrapped token) and which stay open (gas, DEX-only).
2. Configure the wrap-step approval criteria: sanctions, KYC, jurisdiction.
3. Define intra-zone rules: holding periods, dividends, redemption, vesting. All `approvalCriteria`.
4. Optionally restrict the open zone: IBC channel allowlists, PoA validator set. Chain config, not module changes.
5. Document which assets sit in which zone.

No SDK fork and no plugin pack. The compliance zone is a configuration pattern on vanilla Cosmos.

## Related

- [Cosmos Coin Wrapper Paths](../ibc/cosmos-coin-wrapper-paths.md)
- [Backed Minting](../ibc/backed-minting.md)
- [Transferability](transferability.md)
- [Comparisons](../../about/comparisons.md)
