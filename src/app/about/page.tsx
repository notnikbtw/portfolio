import type { Metadata } from 'next';
import { AboutHeader } from '@/components/about/about-header';
import { AboutWhoami } from '@/components/about/about-whoami';
import { AboutWorkstation } from '@/components/about/about-workstation';
import { AboutConnect } from '@/components/about/about-connect';

export const metadata: Metadata = {
  title: 'About | !Nik',
  description: 'A page about me, my engineering background, and my setup.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8 pt-8 pb-16 sm:gap-10 sm:pt-12 sm:pb-24">
      <AboutHeader />
      <AboutWhoami />
      <AboutWorkstation />
      <AboutConnect />
    </div>
  );
}
