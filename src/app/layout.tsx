import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: '!Nik | Full-Stack Developer',
    template: '%s | !Nik',
  },
  description:
    'Personal portfolio, projects, and notes on web development, backend, and systems by !Nik',
  keywords: [
    'Full-Stack Developer',
    'TypeScript',
    'Golang',
    'React',
    'Next.js',
    'Node.js',
    'DevOps',
  ],
  authors: [{ name: '!Nik' }],
  creator: '!Nik',
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-background text-foreground flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 sm:px-6">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
