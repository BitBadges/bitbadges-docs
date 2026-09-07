import { z } from 'zod';

import { AddressChip, Chip, Icon, WidgetFrame } from './shared';

/** A collection as the browse grid shows it: image, name, id, standard, supply, manager. */
export const schema = z.object({
  collectionId: z.union([z.string(), z.number()]).transform(String),
  name: z.string().min(1),
  description: z.string().optional(),
  image: z.string().url().optional(),
  /** Standards from `collection.standards`; the first one is the badge on the card. */
  standards: z.array(z.string()).default([]),
  supply: z.string().optional(),
  symbol: z.string().optional(),
  manager: z.string().optional(),
  /** Bottom-left line, e.g. `10 USDC / month` or `Floor 2.5 BADGE`. */
  price: z.string().optional(),
  priceLabel: z.string().optional(),
});

export type Props = z.output<typeof schema>;

export function Component({ collectionId, name, description, image, standards, supply, symbol, manager, price, priceLabel }: Props) {
  return (
    <WidgetFrame name="collection-card">
      <div className="w-[17rem] max-w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-raised)] shadow-[var(--shadow-sm)] transition hover:shadow-[var(--shadow-md)]">
        <div className="relative aspect-square w-full bg-[var(--bg-inset)]">
          {image ? (
            <img src={image} alt="" className="h-full w-full object-cover" style={{ margin: 0, border: 0, borderRadius: 0 }} />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-[var(--fg-faint)]">
              <Icon name="image" size={40} />
            </div>
          )}
          {standards[0] && (
            <span className="absolute left-2 top-2 rounded-md bg-black/60 px-2 py-0.5 text-xs font-semibold text-white">{standards[0]}</span>
          )}
        </div>
        <div className="flex flex-col gap-1.5 p-3">
          <div className="flex items-baseline justify-between gap-2">
            <span className="truncate text-base font-bold text-[var(--fg)]">{name}</span>
            <span className="shrink-0 text-xs text-[var(--fg-faint)]">ID {collectionId}</span>
          </div>
          {description && <p className="m-0 line-clamp-2 text-sm text-[var(--fg-muted)]">{description}</p>}
          <div className="mt-1 flex flex-wrap items-center gap-1.5">
            {symbol && <Chip tone="brand">{symbol}</Chip>}
            {supply && <Chip>Supply {supply}</Chip>}
            {standards.slice(1).map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
          {(price || manager) && (
            <div className="mt-2 flex items-end justify-between gap-2 border-t border-[var(--border)] pt-2">
              {price ? (
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[var(--fg)]">{price}</span>
                  <span className="text-xs text-[var(--fg-faint)]">{priceLabel ?? 'Price'}</span>
                </div>
              ) : (
                <span />
              )}
              {manager && (
                <div className="flex flex-col items-end">
                  <span className="text-[11px] text-[var(--fg-faint)]">Manager</span>
                  <AddressChip address={manager} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </WidgetFrame>
  );
}

export const examples: { name: string; props: z.input<typeof schema> }[] = [
  {
    name: 'nft',
    props: {
      collectionId: 1,
      name: 'Demo NFTs',
      description: 'One hundred unique tokens, each with its own metadata.',
      standards: ['NFTs', 'Tradable'],
      supply: '100',
      manager: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
      price: '2.5 BADGE',
      priceLabel: 'Floor',
    },
  },
  {
    name: 'subscription',
    props: {
      collectionId: 3,
      name: 'Demo Membership',
      description: 'Members hold a token while the subscription is live.',
      standards: ['Subscriptions'],
      price: '10 USDC / month',
      priceLabel: 'Base price',
      manager: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
    },
  },
  {
    name: 'fungible',
    props: { collectionId: 2, name: 'Demo Coin', standards: ['Fungible Tokens'], symbol: 'DEMO', supply: '1,000,000' },
  },
];
