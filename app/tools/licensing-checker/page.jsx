import LicensingCheckerContent from './LicensingCheckerContent';

export const metadata = {
  title: 'Guard Licensing & Insurance Requirements Checker',
  description: 'Find out what insurance coverage and licensing your security guard company needs. Select your state and service type to see requirements, training mandates, and recommended coverages.',
  alternates: {
    canonical: 'https://alkemeins.com/security/tools/licensing-checker/',
  },
  openGraph: {
    title: 'Guard Licensing & Insurance Requirements Checker | ALKEME Insurance Services',
    description: 'Interactive tool to determine your security guard licensing and insurance requirements by state and service type.',
    url: 'https://alkemeins.com/security/tools/licensing-checker/',
    type: 'website',
  },
};

export default function LicensingCheckerPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Guard Licensing & Insurance Requirements Checker',
      url: 'https://alkemeins.com/security/tools/licensing-checker/',
      applicationCategory: 'BusinessApplication',
      provider: { '@type': 'InsuranceAgency', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
      description: 'Interactive tool to determine security guard licensing and insurance requirements by state and service type.',
    },
  ];

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
      <LicensingCheckerContent />
    </>
  );
}
