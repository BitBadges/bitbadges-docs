import { z } from 'zod';

import { AddressChip, chainSchema, WidgetFrame } from './shared';

/** One address the way `AddressDisplay` shows it: blockie, chain logo, bold abbreviated address. */
export const schema = z.object({
  address: z.string().min(1),
  chain: chainSchema.optional(),
  name: z.string().optional(),
  avatar: z.string().url().optional(),
  size: z.enum(['small', 'large']).default('small'),
  /** A tag under the address, as the frontend shows "Mint Escrow" or a backing label. */
  tag: z.string().optional(),
});

export type Props = z.output<typeof schema>;

export function Component({ address, chain, name, avatar, size, tag }: Props) {
  return (
    <WidgetFrame name="address">
      <div className="inline-flex flex-col items-start gap-1">
        <AddressChip address={address} chain={chain} name={name} avatar={avatar} size={size} />
        {tag && <span className="ml-0.5 rounded-md bg-[var(--bg-inset)] px-2 py-0.5 text-xs font-semibold text-[var(--fg-muted)]">{tag}</span>}
      </div>
    </WidgetFrame>
  );
}

export const examples: { name: string; props: z.input<typeof schema> }[] = [
  { name: 'bitbadges', props: { address: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d' } },
  { name: 'ethereum', props: { address: '0x0bc63cfe31d5218eb414b142c799e20964a54a1a' } },
  { name: 'with-name', props: { address: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue', name: 'bob', size: 'large' } },
  { name: 'solana', props: { address: '4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T', chain: 'Solana' } },
  { name: 'mint', props: { address: 'Mint' } },
  { name: 'tagged', props: { address: 'bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr', tag: 'Mint Escrow' } },
];
