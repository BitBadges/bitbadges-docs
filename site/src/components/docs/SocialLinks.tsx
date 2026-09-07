import { DiscordIcon, GitHubIcon, TelegramIcon, XIcon } from './Icons';

type IconComponent = (props: { className?: string }) => React.JSX.Element;

/** Community links shown in the top bar on desktop and inside the mobile drawer. */
export const SOCIAL_LINKS: { label: string; href: string; Icon: IconComponent }[] = [
  { label: 'BitBadges on GitHub', href: 'https://github.com/bitbadges', Icon: GitHubIcon },
  { label: 'BitBadges on Discord', href: 'https://discord.com/invite/TJMaEd9bar', Icon: DiscordIcon },
  { label: 'BitBadges on X', href: 'https://twitter.com/bitbadges_io', Icon: XIcon },
  { label: 'BitBadges on Telegram', href: 'https://t.me/bitbadges_chat', Icon: TelegramIcon },
];

/** Icon buttons with the same 36px chrome as the theme toggle. */
export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-1 ${className}`} aria-label="Community">
      {SOCIAL_LINKS.map(({ label, href, Icon }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noopener"
            aria-label={label}
            title={label}
            className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--border)] bg-[var(--bg-raised)] text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
          >
            <Icon className="h-[1.05rem] w-[1.05rem]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
