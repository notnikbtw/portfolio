import Link from 'next/link';
import { navItems, socialLinks } from '@/config/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border bg-background w-full border-t">
      <div className="text-muted-foreground mx-auto flex w-full max-w-3xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs sm:flex-row sm:px-6 sm:text-sm">
        <p className="font-mono">
          &copy; {currentYear}{' '}
          <Link
            href="/"
            className="text-foreground hover:text-foreground/80 transition-colors"
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
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <span className="text-border/60 hidden sm:inline">•</span>

          <nav className="flex items-center gap-4" aria-label="Social links">
            {socialLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
