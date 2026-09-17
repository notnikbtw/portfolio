import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <p className="text-muted-foreground font-mono text-xs font-semibold tracking-widest uppercase">
        404 error
      </p>

      <h1 className="text-foreground mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
        Page not found
      </h1>

      <p className="text-muted-foreground mt-4 max-w-md text-sm sm:text-base">
        The page you are looking for does not exist.
      </p>

      <div className="mt-8">
        <Link
          href="/"
          className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex items-center justify-center rounded-(--radius) px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-1 focus-visible:outline-none"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
