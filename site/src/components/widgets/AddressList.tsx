import { z } from 'zod';

import { AddressChip, chainSchema, Chip, Icon, WidgetFrame } from './shared';

/** An address list card: title, whitelist / all-except mode, then one chip per address. */
export const schema = z.object({
  listId: z.string().optional(),
  title: z.string().optional(),
  whitelist: z.boolean().default(true),
  addresses: z
    .array(z.union([z.string().min(1), z.object({ address: z.string().min(1), name: z.string().optional(), chain: chainSchema.optional() })]))
    .min(1),
});

export type Props = z.output<typeof schema>;

export function Component({ listId, title, whitelist, addresses }: Props) {
  const rows = addresses.map((entry) => (typeof entry === 'string' ? { address: entry } : entry));
  return (
    <WidgetFrame name="address-list">
      <div className="inline-block min-w-[18rem] max-w-full rounded-lg border border-[var(--border)] bg-[var(--bg-subtle)] p-3">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="text-sm font-bold text-[var(--fg)]">{title ?? (listId ? `Address list "${listId}"` : 'Addresses')}</span>
          <Chip tone={whitelist ? 'good' : 'bad'}>
            <Icon name={whitelist ? 'check' : 'x'} size={12} />
            {whitelist ? 'Only these' : 'All except'}
          </Chip>
        </div>
        <ul className="m-0 flex list-none flex-col gap-2 p-0">
          {rows.map((row) => (
            <li key={row.address} className="m-0 flex items-center p-0">
              <AddressChip address={row.address} name={row.name} chain={row.chain} />
            </li>
          ))}
        </ul>
        {listId && <div className="mt-2 text-xs text-[var(--fg-faint)]">ID: {listId}</div>}
      </div>
    </WidgetFrame>
  );
}

export const examples: { name: string; props: z.input<typeof schema> }[] = [
  {
    name: 'whitelist',
    props: {
      listId: 'vipMembers',
      addresses: [
        'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
        'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue',
        'bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf',
      ],
    },
  },
  {
    name: 'blacklist-mixed-chains',
    props: {
      title: 'Blocked senders',
      whitelist: false,
      addresses: [{ address: '0x0bc63cfe31d5218eb414b142c799e20964a54a1a', name: 'alice.eth' }, 'bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr'],
    },
  },
];
