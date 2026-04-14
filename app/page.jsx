import HomeContent from './HomeContent';

export const metadata = {
  title: 'Security Guard Insurance Solutions',
  description: 'ALKEME Insurance Services provides specialized security guard insurance for armed and unarmed guard companies, executive protection, event security, and patrol services. Coverage for general liability, professional liability, firearms liability, and more.',
  openGraph: {
    title: 'Security Guard Insurance | ALKEME Insurance Services',
    description: 'Specialized security guard insurance for armed and unarmed guard companies, executive protection, event security, and patrol services across all 50 states.',
    url: 'https://alkemeins.com/security/',
  },
};

export default function HomePage() {
  return (
    <>
      <meta name="author" content="ALKEME Insurance Services" />
      <meta property="article:published_time" content="2025-06-01T00:00:00Z" />
      <meta property="article:modified_time" content="2026-04-01T00:00:00Z" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InsuranceAgency',
            name: 'ALKEME Insurance Services',
            url: 'https://alkemeins.com',
            telephone: '+18559255363',
            email: 'info@alkemeins.com',
            description: 'ALKEME Insurance Services provides specialized security guard insurance solutions for armed and unarmed guard companies, executive protection firms, event security providers, and patrol services across all 50 states.',
            areaServed: { '@type': 'Country', name: 'United States' },
            parentOrganization: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
            foundingDate: '2003',
            numberOfEmployees: { '@type': 'QuantitativeValue', value: 100 },
            knowsAbout: ['Security Guard Insurance', 'Armed Guard Insurance', 'Professional Liability', 'Firearms Liability'],
            hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional License', name: 'Licensed Insurance Brokerage' },
            serviceType: ['Security Guard Insurance', 'Armed Guard Insurance', 'Executive Protection Insurance', 'Event Security Insurance', 'Patrol Service Insurance', 'General Liability', 'Professional Liability'],
            citation: { '@type': 'CreativeWork', name: 'Insurance Information Institute', url: 'https://www.iii.org' },
            about: { '@type': 'Thing', name: 'Security Guard Insurance' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What insurance does a security guard company need?', acceptedAnswer: { '@type': 'Answer', text: 'At minimum, most security guard companies need general liability, professional liability, and workers\u0027 compensation. Armed guard companies also need firearms liability and assault and battery coverage. We help you identify exactly what your operation requires based on your services, client contracts, and state licensing requirements.' } },
              { '@type': 'Question', name: 'Do you insure both armed and unarmed security companies?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We work with unarmed guard companies, armed security firms, executive protection agencies, event security providers, patrol services, alarm monitoring companies, and private investigation firms. Our coverage programs are tailored to the specific risk profile of each operation.' } },
              { '@type': 'Question', name: 'Can you help with contract insurance requirements?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We understand the insurance requirements that clients, property managers, and venues impose on security contractors. We help ensure your certificates of insurance, additional insured endorsements, and policy limits align with your contractual obligations.' } },
              { '@type': 'Question', name: 'How quickly can I get a quote?', acceptedAnswer: { '@type': 'Answer', text: 'In most cases, we can provide an initial quote within 24 hours of receiving your completed information. For more complex accounts or large operations, the process may take slightly longer to ensure we explore the best options across our company network.' } },
              { '@type': 'Question', name: 'Do you offer assault and battery coverage?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Assault and battery insurance is one of the most critical coverages for security companies, filling the gap that general liability policies leave when physical confrontations occur. We include this coverage in most security company programs.' } },
              { '@type': 'Question', name: 'Can coverage be customized for my operation?', acceptedAnswer: { '@type': 'Answer', text: 'Every policy we place is built around your specific operation. We consider your services, guard count, client types, state licensing requirements, and risk profile to design a program that provides the right coverage at a competitive price.' } },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Security Guard Insurance Solutions',
            datePublished: '2025-06-01',
            dateModified: '2026-04-01',
            author: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
            publisher: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
          }),
        }}
      />
      <HomeContent />
    </>
  );
}
