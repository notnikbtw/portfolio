import { PrivacyHeader } from '@/components/privacy/privacy-header';
import { PrivacySections } from '@/components/privacy/privacy-sections';

export const metadata = {
  title: 'Privacy & Terms | !Nik',
  description:
    'Privacy policy, terms of use, and open source disclosure for !Nik.',
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col gap-8 pt-8 pb-16 sm:gap-10 sm:pt-12 sm:pb-24">
      <PrivacyHeader />
      <PrivacySections />
    </div>
  );
}
