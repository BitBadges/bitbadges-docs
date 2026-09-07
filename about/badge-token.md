---
description: "BADGE, the native coin of the BitBadges chain. Its purposes, supply and distribution, and the validator rewards and proof-of-authority model."
---

# BADGE token

BADGE is the native gas coin of the BitBadges chain (denom `ubadge`). Read the [BADGE disclosure](https://bitbadges.io/credits-disclosure) and the other policies on the site for full disclaimers.

## Purposes

1. Gas and transaction fees.
2. Proof of stake and proof of authority. Validators bond BADGE to secure the network.
3. In-site currency. The site prioritizes more established coins such as USDC for in-site use.
4. Fee sink. The 0.1% taker fee on swaps goes to the community pool. See [FAQ](faq.md) for the fee schedule.

## Distribution

The [explorer](https://explorer.bitbadges.io) shows current supply, distribution, and validators. Excluding block rewards, the initial circulating supply was 100M BADGE.

BADGE trades on Osmosis at [app.osmosis.zone/assets/BADGE](https://app.osmosis.zone/assets/BADGE) and works with other IBC-enabled services.

## Security model

BitBadges combines proof-of-stake validator rewards with a proof-of-authority delegation model.

### Validator rewards program (about 20% of supply)

The incentivized rewards program ran for one year, from 12 August 2025 to 12 August 2026. Validators earned BADGE based on uptime, measured by sampling block signatures:

- Mission Decentralization candidates (the first roughly 40 validators): a base allocation of 200,000 BADGE scaled by uptime, with a 50,000 BADGE floor.
- All other eligible validators (registered by block 8,998,000): a base of 100,000 BADGE scaled by uptime.

At the end of the program, earned BADGE is awarded and the program delegations shift to the proof-of-authority model. During the program, delegations did not reflect awards: most validators held about 200K or more in delegations that end with the program.

### Proof-of-authority model (about 60% of supply)

The proof-of-authority model took effect at launch, ran in parallel with the rewards program, and is the sole delegation model after 12 August 2026. The remaining allocations, including the 50M community pool, other team delegations, and leftover awards, go to well-known, trusted validators through governance proposals under a know-your-validator process, with preference for institutions and recognized brands. These tokens can only be delegated, never sold, which lowers the effective circulating supply by more than 60M BADGE.

## Related

- [FAQ](faq.md)
- [Network](../chain/README.md)
- [Run a node](../chain/run-a-node.md)
