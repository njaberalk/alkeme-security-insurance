'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import QuoteForm from '../../../components/QuoteForm';
import Footer from '../../../components/Footer';
import { useScrollAnimations } from '../../../hooks/useScrollAnimation';

const serviceTypes = [
  { id: 'unarmed-guards', label: 'Unarmed Guard Services', description: 'Standard security guard services without firearms', requiredCoverages: [
    { coverage: 'General Liability', minimum: '$1,000,000/$2,000,000', slug: 'general-liability', notes: 'Required by virtually all clients' },
    { coverage: 'Professional Liability', minimum: '$1,000,000', slug: 'professional-liability', notes: 'Covers negligent security claims' },
    { coverage: 'Workers\' Compensation', minimum: 'Per state law', slug: 'workers-compensation', notes: 'Required in most states for W-2 employees' },
    { coverage: 'Commercial Auto', minimum: 'State minimums', slug: 'commercial-auto', notes: 'Required if you operate patrol or company vehicles' },
  ]},
  { id: 'armed-guards', label: 'Armed Guard Services', description: 'Security services with armed officers carrying firearms', requiredCoverages: [
    { coverage: 'General Liability', minimum: '$1,000,000/$2,000,000', slug: 'general-liability', notes: 'Required by all clients' },
    { coverage: 'Professional Liability', minimum: '$1,000,000+', slug: 'professional-liability', notes: 'Higher limits recommended for armed operations' },
    { coverage: 'Firearms Liability', minimum: 'Per carrier/contract', slug: 'firearms-liability', notes: 'Required for armed guard operations' },
    { coverage: 'Assault & Battery', minimum: '$1,000,000', slug: 'assault-battery', notes: 'Critical for armed guards; covers use-of-force claims' },
    { coverage: 'Workers\' Compensation', minimum: 'Per state law', slug: 'workers-compensation', notes: 'Armed guard classification codes apply' },
    { coverage: 'Umbrella / Excess', minimum: '$5,000,000+', slug: 'umbrella-excess', notes: 'Most armed contracts require high limits' },
  ]},
  { id: 'executive-protection', label: 'Executive Protection', description: 'Close protection and bodyguard services for individuals', requiredCoverages: [
    { coverage: 'Professional Liability', minimum: '$5,000,000+', slug: 'professional-liability', notes: 'High limits required for high-net-worth clients' },
    { coverage: 'General Liability', minimum: '$1,000,000/$2,000,000', slug: 'general-liability', notes: 'Standard requirement' },
    { coverage: 'Firearms Liability', minimum: 'Per assignment', slug: 'firearms-liability', notes: 'If agents carry weapons' },
    { coverage: 'Commercial Auto', minimum: '$1,000,000', slug: 'commercial-auto', notes: 'For executive vehicles and transport' },
    { coverage: 'Umbrella / Excess', minimum: '$10,000,000+', slug: 'umbrella-excess', notes: 'Executive protection clients require very high limits' },
  ]},
  { id: 'event-security', label: 'Event Security', description: 'Security for concerts, festivals, sporting events, and gatherings', requiredCoverages: [
    { coverage: 'General Liability', minimum: '$2,000,000+', slug: 'general-liability', notes: 'Higher limits for large events' },
    { coverage: 'Assault & Battery', minimum: '$1,000,000', slug: 'assault-battery', notes: 'Essential for event environments' },
    { coverage: 'Professional Liability', minimum: '$1,000,000', slug: 'professional-liability', notes: 'Covers crowd management failures' },
    { coverage: 'Workers\' Compensation', minimum: 'Per state law', slug: 'workers-compensation', notes: 'Required for all guards at events' },
    { coverage: 'Umbrella / Excess', minimum: '$5,000,000+', slug: 'umbrella-excess', notes: 'Venues typically require high limits' },
  ]},
  { id: 'patrol-monitoring', label: 'Patrol & Monitoring Services', description: 'Mobile patrol, alarm monitoring, and response services', requiredCoverages: [
    { coverage: 'Commercial Auto', minimum: '$1,000,000', slug: 'commercial-auto', notes: 'Primary coverage for patrol vehicle fleet' },
    { coverage: 'General Liability', minimum: '$1,000,000/$2,000,000', slug: 'general-liability', notes: 'Standard requirement' },
    { coverage: 'Professional Liability', minimum: '$1,000,000', slug: 'professional-liability', notes: 'Covers missed alarms and response failures' },
    { coverage: 'Cyber Liability', minimum: '$1,000,000', slug: 'cyber-liability', notes: 'For monitoring system data protection' },
  ]},
];

export default function LicensingCheckerContent() {
  useScrollAnimations();
  const [selected, setSelected] = useState(null);
  const selectedType = serviceTypes.find(t => t.id === selected);

  return (
    <div className="min-h-screen bg-stone">
      <Header />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Tools' }, { label: 'Guard Licensing & Insurance Checker' }]} />
      <section className="bg-stone" style={{ padding: '4rem 0' }}>
        <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Interactive Tool</p>
            <h1 className="text-brand font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Security Guard Insurance Requirements Checker</h1>
            <p className="text-brand" style={{ fontSize: '1rem', lineHeight: '1.6' }}>Select your service type to see recommended insurance coverages and typical minimum requirements.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {serviceTypes.map(type => (
              <button key={type.id} onClick={() => setSelected(type.id)} className={`border-2 rounded-[2rem] p-6 text-left cursor-pointer ${selected === type.id ? 'border-gold bg-gold/10' : 'border-ash hover:border-blue-dark'}`} style={{ transition: 'all 0.24s' }}>
                <h3 className="text-brand font-bold mb-2" style={{ fontSize: '1rem' }}>{type.label}</h3>
                <p className="text-brand/60" style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>{type.description}</p>
              </button>
            ))}
          </div>
          {selectedType && (
            <div className="max-w-3xl mx-auto">
              <div className="border-2 border-gold rounded-[2rem] p-8 mb-8">
                <h2 className="text-brand font-bold mb-6" style={{ fontSize: '1.3rem' }}>Required Coverage for {selectedType.label}</h2>
                <div className="space-y-4">
                  {selectedType.requiredCoverages.map(cov => (
                    <div key={cov.slug} className="border border-ash rounded-[1.5rem] p-5">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <Link href={`/coverage/${cov.slug}/`} className="text-brand font-bold hover:text-blue-dark no-underline" style={{ fontSize: '1rem', transition: 'color 0.2s' }}>{cov.coverage}</Link>
                        <span className="text-gold font-bold shrink-0" style={{ fontSize: '0.85rem' }}>{cov.minimum}</span>
                      </div>
                      <p className="text-brand/60" style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>{cov.notes}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <a href="https://alkemeins.com/form" className="inline-flex items-center justify-center border-2 border-gold bg-gold text-brand text-center uppercase tracking-[0.16em] rounded-[2rem] font-semibold hover:border-brand hover:bg-brand hover:text-stone no-underline" style={{ padding: '0.8rem 2.5rem 0.7rem', fontSize: '0.75rem', lineHeight: '2', transition: 'all 0.24s' }}>Get a Quote for {selectedType.label}</a>
              </div>
            </div>
          )}
        </div>
      </section>
      <QuoteForm />
      <Footer />
    </div>
  );
}
