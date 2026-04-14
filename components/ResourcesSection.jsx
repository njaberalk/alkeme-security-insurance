'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const featuredResources = [
  { slug: 'security-guard-insurance-cost', title: 'How Much Does Security Guard Insurance Cost?', category: 'Guide', desc: 'Average costs by company size, pricing factors, and strategies to reduce your premiums.' },
  { slug: 'guard-licensing-guide', title: 'Guard Licensing Requirements by State', category: 'Guide', desc: 'State-by-state guide to BSIS, DCJS, DPS requirements, training hours, and insurance mandates.' },
  { slug: 'armed-vs-unarmed-guide', title: 'Armed vs Unarmed Insurance Comparison', category: 'Comparison', desc: 'Key coverage differences and cost impacts between armed and unarmed guard operations.' },
  { slug: 'use-of-force-liability-guide', title: 'Use-of-Force Liability for Security Guards', category: 'Guide', desc: 'Legal standards, insurance coverage, and risk management strategies for use of force.' },
  { slug: 'security-contract-requirements', title: 'Insurance Requirements in Security Contracts', category: 'Guide', desc: 'What clients require and how to structure your program to win bids.' },
  { slug: 'security-insurance-glossary', title: 'Security Guard Insurance Glossary', category: 'Reference', desc: '40+ key terms every security company owner should know, explained clearly.' },
];

export default function ResourcesSection() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="resources" className="bg-stone" style={{ padding: '7rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Resources</p>
          <h2 className="text-brand font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Security Guard Insurance Guides & Tools</h2>
          <p className="text-brand" style={{ fontSize: '1rem', lineHeight: '1.6' }}>Expert resources to help you understand your coverage options, reduce costs, and stay compliant.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {featuredResources.map((resource) => (
            <Link key={resource.slug} href={`/resources/${resource.slug}/`} className="block border-2 border-ash rounded-[2rem] p-7 group no-underline hover:border-blue-dark" style={{ transition: 'all 0.24s' }}>
              <span className="text-blue-dark uppercase tracking-[0.12em] font-bold mb-3 block" style={{ fontSize: '0.65rem' }}>{resource.category}</span>
              <h3 className="text-brand font-bold mb-2 group-hover:text-blue-dark" style={{ fontSize: '1.05rem', lineHeight: '1.4', transition: 'color 0.24s' }}>{resource.title}</h3>
              <p className="text-brand/60" style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>{resource.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
