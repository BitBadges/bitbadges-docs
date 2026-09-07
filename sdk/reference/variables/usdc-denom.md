---
description: "Canonical USDC on BitBadges: Circle's native USDC on Injective (CCTP-enabled), carried one IBC hop over the existing BitBadges <-> Injective channel."
---

# Variable: USDC\_DENOM

> `const` **USDC\_DENOM**: `"ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8"` = `'ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8'`

Defined in: [packages/bitbadgesjs-sdk/src/common/constants.ts:150](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/constants.ts#L150)

Canonical USDC on BitBadges: Circle's native USDC on Injective (CCTP-enabled),
carried one IBC hop over the existing BitBadges \<-> Injective channel.

IBC denoms hash the *full* route, so the same underlying asset reaching the
chain by a different path is a different denom. That is why USDC appears
twice in this file.

  trace: transfer/channel-40/erc20:0xa00C59fF5a080D2b954d0c75e46E22a0c371235a
         channel-40 is BitBadges -> Injective; the erc20:0x... segment is
         Injective's bank denom for Circle native USDC, checksummed exactly
         as Injective's bank module spells it — the IBC hash is
         case-sensitive.
