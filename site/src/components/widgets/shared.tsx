/**
 * Building blocks shared by the widgets: the frontend's address chip (blockie +
 * chain logo + abbreviated address), a small stroke icon set, the chain and
 * token logos (the frontend's own image files), and the formatters the frontend
 * applies to times and ranges.
 *
 * Everything here is a pure function of its props. No hooks, no context, no
 * fetches: `renderStatic` walks these at build time.
 */
import type { ReactNode } from 'react';
import { z } from 'zod';

import { withBasePath } from '../../lib/docs/config';
import { blockieSvg } from './blockies';

/* ---------- schemas shared across widgets ---------- */

/** Chain and node values accept strings so authors can paste `"18446744073709551615"`. */
export const uintSchema = z.union([z.string().regex(/^\d+$/), z.number().int().nonnegative()]).transform(String);
export const rangeSchema = z.object({ start: uintSchema, end: uintSchema });
export const rangesSchema = z.array(rangeSchema);

export const CHAINS = ['BitBadges', 'Ethereum', 'Solana', 'Bitcoin', 'Cosmos'] as const;
export const chainSchema = z.enum(CHAINS);
export type Chain = (typeof CHAINS)[number];

/* ---------- formatting ---------- */

export const MAX_UINT64 = '18446744073709551615';

/** `getAbbreviatedAddress` from the SDK, as the frontend shows it. */
export function abbreviate(address: string): string {
  if (address === 'Mint' || address === 'All') return address;
  if (address.length === 0) return '...';
  if (address.length < 13) return address;
  return `${address.slice(0, 10)}...${address.slice(-4)}`;
}

/** Chain from the address prefix, the way `getChainForAddress` guesses it. */
export function chainForAddress(address: string): Chain {
  if (address.startsWith('0x')) return 'Ethereum';
  if (address.startsWith('bb1')) return 'BitBadges';
  if (/^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,}$/.test(address)) return 'Bitcoin';
  if (/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address)) return 'Solana';
  if (/^[a-z]+1[a-z0-9]{38}$/.test(address)) return 'Cosmos';
  return 'BitBadges';
}

const dateFormat = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric', year: 'numeric' });

/** Milliseconds to a fixed UTC date so output is identical on every machine. */
export function formatTime(ms: string): string {
  if (ms === MAX_UINT64) return 'Forever';
  const n = Number(ms);
  if (!Number.isFinite(n) || n < 1e11) return ms === '1' ? 'Genesis' : ms;
  return dateFormat.format(new Date(n));
}

export function formatTimeRanges(ranges: { start: string; end: string }[]): string {
  if (ranges.length === 0) return 'None';
  return ranges
    .map(({ start, end }) => {
      if ((start === '1' || start === '0') && end === MAX_UINT64) return 'All time';
      return `${formatTime(start)} to ${formatTime(end)}`;
    })
    .join(', ');
}

export function formatIdRanges(ranges: { start: string; end: string }[]): string {
  if (ranges.length === 0) return 'None';
  return ranges
    .map(({ start, end }) => {
      if (start === '1' && end === MAX_UINT64) return 'All';
      return start === end ? start : `${start}-${end}`;
    })
    .join(', ');
}

/** `1000000` + `ubadge` -> `1 BADGE`; unknown denoms stay raw. */
export function formatCoin(amount: string, denom: string): string {
  const known: Record<string, [string, number]> = {
    ubadge: ['BADGE', 6],
    uusdc: ['USDC', 6],
  };
  const hit = known[denom];
  if (!hit) return `${amount} ${denom}`;
  const [symbol, decimals] = hit;
  const n = Number(amount) / 10 ** decimals;
  return `${n.toLocaleString('en-US', { maximumFractionDigits: decimals })} ${symbol}`;
}

/* ---------- icons ---------- */

const ICON_PATHS = {
  check: 'M20 6 9 17l-5-5',
  x: 'M18 6 6 18M6 6l12 12',
  lock: 'M7 11V7a5 5 0 0 1 10 0v4M5 11h14v10H5z',
  unlock: 'M7 11V7a5 5 0 0 1 9.9-1M5 11h14v10H5z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  coins: 'M8 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4M16.71 13.88l.7.71-2.82 2.82',
  scale: 'M12 3v18M7 21h10M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2M16 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1zM2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z',
  medal: 'M12 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM15.5 12.9 17 22l-5-3-5 3 1.5-9.1',
  clipboard: 'M9 2h6v4H9zM16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 14l2 2 4-4',
  tree: 'M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21V9a9 9 0 0 0 9 9',
  list: 'M10 6h11M10 12h11M10 18h11M4 6h1v4M4 10h2M6 18H4c0-1 2-2 2-3s-1-1.5-2-1',
  hash: 'M4 9h16M4 15h16M10 3 8 21M16 3l-2 18',
  userCheck: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM16 11l2 2 4-4',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  arrowDown: 'M12 5v14M19 12l-7 7-7-7',
  arrowRight: 'M5 12h14M12 5l7 7-7 7',
  swap: 'M16 3l4 4-4 4M20 7H4M8 21l-4-4 4-4M4 17h16',
  cog: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1',
  snowflake: 'M12 2v20M2 12h20M5 5l14 14M19 5 5 19',
  image: 'M3 5h18v14H3zM3 15l5-5 4 4 3-3 6 6M16 9h.01',
  info: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16v-4M12 8h.01',
  warning: 'M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01',
} as const;

export type IconName = keyof typeof ICON_PATHS;

export function Icon({ name, className, size = 16 }: { name: IconName; className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}

/* ---------- chain and token logos ---------- */

/**
 * The frontend's logo files, copied as-is from `bitbadges-frontend/public/images`
 * into `site/public/widgets/` (`getChainLogo` and the `*_LOGO` constants in
 * `src/constants.tsx`). `bitbadges-logo.svg` is the site's own circular mark, the
 * circular mark, downscaled to 64px.
 */
export const CHAIN_LOGOS: Record<Chain, string> = {
  BitBadges: 'bitbadges-logo.svg',
  Ethereum: 'eth-logo.webp',
  Solana: 'solana-logo.webp',
  Bitcoin: 'bitcoin-logo.webp',
  Cosmos: 'cosmos-logo.webp',
};

export const TOKEN_LOGOS: Record<string, string> = {
  BADGE: CHAIN_LOGOS.BitBadges,
  ETH: CHAIN_LOGOS.Ethereum,
  BTC: CHAIN_LOGOS.Bitcoin,
  SOL: CHAIN_LOGOS.Solana,
  ATOM: CHAIN_LOGOS.Cosmos,
  USDC: 'usdc.webp',
};

/**
 * One logo image. `data-site-asset` tells the markdown asset rewrite to leave
 * the `src` alone (it lives in the site's `public/`, not the content tree), and
 * `.widget img` in globals.css drops the border and background `.doc img` adds.
 */
export function Logo({ file, size, title }: { file: string; size: number; title?: string }) {
  return (
    <img
      src={withBasePath(`/widgets/${file}`)}
      alt=""
      width={size}
      height={size}
      title={title}
      className="shrink-0"
      style={{ width: size, height: size }}
      data-site-asset
    />
  );
}

/** Chain logo the frontend shows next to an address (`getChainLogo`). */
export function ChainLogo({ chain, size = 20 }: { chain: Chain; size?: number }) {
  return <Logo file={CHAIN_LOGOS[chain]} size={size} title={`This address is for a ${chain} user`} />;
}

/** Token logo for the swap widget; unknown symbols get a lettered circle. */
export function TokenMark({ symbol, size = 24 }: { symbol: string; size?: number }) {
  const file = TOKEN_LOGOS[symbol.toUpperCase()];
  if (file) return <Logo file={file} size={size} />;
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" role="img" className="shrink-0">
      <circle cx="16" cy="16" r="16" fill="#4a319d" />
      <text x="16" y="21" text-anchor="middle" font-size="14" font-weight="700" fill="#fff" font-family="ui-sans-serif, system-ui, sans-serif">
        {symbol.slice(0, 1).toUpperCase()}
      </text>
    </svg>
  );
}

/* ---------- the address chip (AddressWithBlockies) ---------- */

export type AddressChipProps = {
  address: string;
  chain?: Chain;
  /** Resolved username or ENS name, shown instead of the address. */
  name?: string;
  /** Profile picture URL; replaces the blockie. */
  avatar?: string;
  /** `compact` is the card footer size: 16px marks, 13px text. */
  size?: 'compact' | 'small' | 'large';
};

const CHIP_SIZES = { compact: [16, 13], small: [20, 16], large: [32, 20] } as const;

/**
 * Blockie (or the Mint / All avatars), chain logo, then the bold abbreviated
 * address. The label truncates with an ellipsis instead of wrapping, so a chip
 * in a narrow cell stays on one line; the full address is the tooltip.
 */
export function AddressChip({ address, chain, name, avatar, size = 'small' }: AddressChipProps) {
  const [px, fontSize] = CHIP_SIZES[size];
  const special = address === 'Mint' || address === 'All';
  const resolvedChain = chain ?? chainForAddress(address);
  const label = name ?? abbreviate(address);

  return (
    <span className="inline-flex min-w-0 max-w-full items-center gap-2 align-middle" data-address={address}>
      <span className="inline-flex shrink-0 items-center gap-2">
        {address === 'Mint' ? (
          <span className="inline-flex items-center justify-center rounded text-white" style={{ width: px, height: px, backgroundColor: '#4CAF50' }}>
            <Icon name="coins" size={px * 0.6} />
          </span>
        ) : address === 'All' ? (
          <span className="inline-flex items-center justify-center rounded text-white" style={{ width: px, height: px, backgroundColor: '#2196F3' }}>
            <Icon name="users" size={px * 0.6} />
          </span>
        ) : avatar ? (
          <img src={avatar} alt="" width={px} height={px} className="rounded object-cover" style={{ width: px, height: px }} />
        ) : (
          <span className="inline-flex overflow-hidden rounded" style={{ width: px, height: px }} dangerouslySetInnerHTML={{ __html: blockieSvg(address, px) }} />
        )}
        {!special && <ChainLogo chain={resolvedChain} size={px} />}
      </span>
      <span className="min-w-0 truncate font-bold text-[var(--fg)]" style={{ fontSize }} title={address}>
        {label}
      </span>
    </span>
  );
}

/* ---------- card chrome (frontend `displayClassName`) ---------- */

export function Card({ children, className = '', muted = false }: { children: ReactNode; className?: string; muted?: boolean }) {
  return (
    <div
      className={`widget-panel p-3 text-left ${muted ? 'opacity-55' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

/** Icon-in-a-box plus bold title, the frontend's `ApiPluginMetadataDisplay` header. */
export function CardHeader({ icon, color, title, right }: { icon: IconName; color: string; title: string; right?: ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-2">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--bg-inset)]" style={{ color }}>
          <Icon name={icon} size={20} />
        </span>
        <span className="text-base font-bold leading-tight text-[var(--fg)]">{title}</span>
      </div>
      {right}
    </div>
  );
}

export function Chip({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'good' | 'bad' | 'warn' | 'brand' }) {
  const tones = {
    neutral: 'bg-[var(--bg-inset)] text-[var(--fg-muted)]',
    good: 'bg-[#1c9c62]/12 text-[#1c9c62]',
    bad: 'bg-[#e0443e]/12 text-[#e0443e]',
    warn: 'bg-[#d98324]/12 text-[#d98324]',
    brand: 'bg-[var(--brand)]/12 text-[var(--brand)]',
  };
  return <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}

/**
 * Outer wrapper every widget renders into. `widget-surface` (globals.css) is
 * the code-figure surface, so all widgets share one look by construction;
 * `widget-panel` is the one-step-inset panel for the boxes inside. Widgets add
 * their own padding and width through `className`. The gallery and the tests
 * key off `data-widget`.
 */
export function WidgetFrame({ name, children, className = '' }: { name: string; children: ReactNode; className?: string }) {
  return (
    <div className={`widget widget-surface not-prose text-[var(--fg)] ${className}`.trimEnd()} data-widget={name}>
      {children}
    </div>
  );
}
