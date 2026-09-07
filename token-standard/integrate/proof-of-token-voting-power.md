---
description: "A design proposal for gating validator voting power on a credential token. No x/pot module ships; this is app-level design guidance for chain teams."
---

# Proof-of-token voting power

Proof-of-token voting power is a design for credentialed consensus: a validator keeps its voting power only while it holds a credential token. The credential is an ordinary `x/tokenization` token, so expiry, multi-sig issuance, KYC gates, revocation, and audit trail come from the token standard. This page is a proposal for chains that embed the module. It is not a shipped feature.

{% hint style="warning" %}
There is no `x/pot` module in [bitbadgeschain](https://github.com/bitbadges/bitbadgeschain). A search of `x/` and `app/` finds no voting-power gate. Treat everything below as app-level integration guidance you implement in your own chain, in the same spirit as [Ante handler token gates](ante-handler-token-gates.md). To discuss a reference implementation, [contact the team](https://bitbadges.io/contact).
{% endhint %}

```text
voting_power = normal_power * (1 if credential_balance >= minBalance, else 0)
```

## The problem it solves

Proof of authority gives permissioned validators but no slashing; nothing economic is at risk. Proof of stake gives slashing but lets anyone with enough stake validate. Neither alone gives compliant consensus with real economic security. A credential layer on top of either model closes the gap:

- PoS chains: validators must hold a credential to have voting power. Lose it and power drops to zero; regain it and power returns. Delegation, slashing, and rewards keep working.
- PoA chains: the authority structure stays; the credential adds a token-based compliance layer.

In both cases token rules, not one admin, govern who validates.

## How it works

The gate is binary:

| Scenario | Voting power |
| --- | --- |
| 1M staked, holds credential | 1M (normal PoS) |
| 1M staked, no credential | 0 (disabled) |
| Jailed for slashing, any credential status | 0 (existing rules respected) |

Everything else is unchanged: delegation, undelegation, slashing, jailing, evidence, rewards. The gate layers on top of the existing modules rather than replacing them.

Each block, the implementation checks every active validator's credential balance. That catches both token transfers and time-based expiry. Validators that lose the credential are disabled; validators that regain it are restored, unless they are also jailed. As a safety rule, never disable all validators: leave non-compliant validators running rather than halt the chain.

Where to implement: an `EndBlocker` (or a staking hook) in your app that reads balances through the `x/tokenization` keeper, as the ante decorator does, and adjusts validator updates. For PoS, jail or unjail; for PoA, set power to zero or restore it.

## The credential token

The credential is a standard token, so every primitive applies with no extra code: time-dependent expiry, multi-sig issuance through voting challenges, non-transferability, freezing and revocation, max supply caps, KYC gates, and off-chain criteria. A credential that expires each year, needs multi-sig approval to issue, and can be revoked at once by a regulator is a token with the right configuration.

## Validator lifecycle

1. Join: the validator joins normally. Without a credential it has no voting power.
2. Credentialed: it receives the token. Next block, its power is restored.
3. Active: it produces blocks as usual.
4. Renewal: the credential has a time-bounded balance. When it expires, power drops to zero and the validator re-certifies.
5. Revocation: the authority burns or freezes the credential. Power drops to zero next block.
6. Exit: the validator leaves normally. The credential is burned or returned.

## PoS and PoA

| | PoS | PoA |
| --- | --- | --- |
| Credential lost | Validator jailed | Power set to 0 |
| Credential regained | Validator unjailed | Power restored |
| Slashing | Yes, staked tokens at risk | Not applicable |

The gate logic is the same for both; only the consensus integration differs.

## Use cases

- Regulated RWA chains: regulators require known, KYC'd validators. The credential is KYC plus a license, expires yearly, and renews by multi-sig committee approval.
- CBDC infrastructure: validators must be licensed institutions. The central bank multi-sig issues credentials; PoS economics provide security.
- Consortium networks: each member holds a credential. Same trust model as PoA with programmable membership and no single admin over the validator set.
- Cross-chain validator compliance: one KYC credential collection recognized by several Cosmos chains qualifies a validator on all of them.

## Relationship to ante handler gates

[Ante handler token gates](ante-handler-token-gates.md) gate what users can do by blocking message types unless the sender holds a credential. Proof-of-token voting power gates who can validate. A compliant chain may use both: ante handlers for KYC-gated transfers and the voting power gate for credentialed validators.

## Related

- [Ante handler token gates](ante-handler-token-gates.md)
- [Voting challenges](../approval-criteria/voting-challenges.md)
- [Balances](../concepts/balances.md)
