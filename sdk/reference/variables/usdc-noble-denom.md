---
description: "Legacy Noble-direct USDC, displayed as USDC.n — Skip Go's ecosystem-wide name for the Noble voucher, including Skip's own bitbadges-1 registry entry."
---

# Variable: USDC\_NOBLE\_DENOM

> `const` **USDC\_NOBLE\_DENOM**: `"ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349"` = `'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349'`

Defined in: [packages/bitbadgesjs-sdk/src/common/constants.ts:169](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/constants.ts#L169)

Legacy Noble-direct USDC, displayed as `USDC.n` — Skip Go's ecosystem-wide
name for the Noble voucher, including Skip's own bitbadges-1 registry entry.

  trace: transfer/channel-2/uusdc

Kept only for backwards compatibility with existing balances and
collections — nothing new is steered toward it. Fully supported:
collections that declared a backed path against it cannot be repointed,
because the backed-path escrow address is derived from the denom string
itself. Balances stay spendable. There is no
in-place migration to [USDC\_DENOM](/sdk/reference/variables/usdc-denom): reaching canonical USDC means
exiting to Noble and swapping/CCTP-ing into native USDC on Injective, then
one IBC hop in — not IBC forwarding.
