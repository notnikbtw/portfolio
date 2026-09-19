import Image from 'next/image';
import Link from 'next/link';
import { navItems, socialLinks } from '@/config/navigation';
import { webBadges } from '@/config/badges';
import { MOE_COUNTER_URL } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border bg-background w-full border-t">
      <div className="text-muted-foreground mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-4 py-8 text-xs sm:px-6 sm:text-sm">
        <img
          src={MOE_COUNTER_URL}
          alt="Visitor Counter"
          className="image-rendering-pixelated min-h-10"
          loading="lazy"
        />
        {webBadges.length > 0 && (
          <div
            aria-label="Web badges"
            className="mx-auto flex max-w-md flex-wrap items-center justify-center gap-2.5"
          >
            {webBadges.map(badge => {
              const badgeImage = (
                <Image
                  src={badge.src}
                  alt={badge.name}
                  width={88}
                  height={31}
                  unoptimized
                  className="image-rendering-pixelated"
                />
              );

              return badge.url ? (
                <Link
                  key={badge.name}
                  href={badge.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible:ring-ring inline-block transition-opacity hover:opacity-85 focus-visible:ring-1 focus-visible:outline-none"
                >
                  {badgeImage}
                </Link>
              ) : (
                <span key={badge.name} className="inline-block">
                  {badgeImage}
                </span>
              );
            })}
          </div>
        )}
        <div className="border-border/40 flex w-full flex-col items-center justify-between gap-4 border-t pt-5 sm:flex-row">
          <p className="font-mono">
            &copy; {currentYear}{' '}
            <Link
              href="/"
              aria-label="!Nik - Home page"
              className="text-foreground hover:text-foreground/80 focus-visible:ring-ring transition-colors focus-visible:ring-1 focus-visible:outline-none"
            >
              !Nik
            </Link>
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <nav
              className="flex items-center gap-4"
              aria-label="Footer navigation"
            >
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-foreground focus-visible:ring-ring transition-colors focus-visible:ring-1 focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <span
              className="text-border/60 hidden sm:inline"
              aria-hidden="true"
            >
              •
            </span>

            <nav className="flex items-center gap-4" aria-label="Social links">
              {socialLinks.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="hover:text-foreground focus-visible:ring-ring transition-colors focus-visible:ring-1 focus-visible:outline-none"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
