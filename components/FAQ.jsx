'use client';
import { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  { q: 'What insurance does a security guard company need?', a: 'At minimum, most security guard companies need general liability, professional liability, and workers\' compensation. Armed guard companies also need firearms liability and assault and battery coverage. We help you identify exactly what your operation requires based on your services, client contracts, and state licensing requirements.' },
  { q: 'Do you insure both armed and unarmed security companies?', a: 'Yes. We work with unarmed guard companies, armed security firms, executive protection agencies, event security providers, patrol services, alarm monitoring companies, and private investigation firms. Our coverage programs are tailored to the specific risk profile of each operation.' },
  { q: 'Can you help with contract insurance requirements?', a: 'Absolutely. We understand the insurance requirements that clients, property managers, and venues impose on security contractors. We can help ensure your certificates of insurance, additional insured endorsements, and policy limits align with your contractual obligations.' },
  { q: 'How quickly can I get a quote?', a: 'In most cases, we can provide an initial quote within 24 hours of receiving your completed information. For more complex accounts or large operations, the process may take slightly longer to ensure we explore the best options across our carrier network.' },
  { q: 'Do you offer assault and battery coverage?', a: 'Yes. Assault and battery insurance is one of the most critical coverages for security companies, filling the gap that general liability policies leave when physical confrontations occur. We include this coverage in most security company programs.' },
  { q: 'Can coverage be customized for my operation?', a: 'Every policy we place is built around your specific operation. We consider your services, guard count, client types, state licensing requirements, and risk profile to design a program that provides the right coverage at a competitive price — not a generic package.' },
];

function FaqItem({ faq, isOpen, onClick }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(() => { setHeight(isOpen && contentRef.current ? contentRef.current.scrollHeight : 0); }, [isOpen]);

  return (
    <div className="border-2 border-ash rounded-[2rem] overflow-hidden" style={{ background: isOpen ? 'rgba(255,255,255,0.5)' : 'transparent', transition: 'background 0.5s ease' }}>
      <button onClick={onClick} className="w-full flex items-center justify-between p-6 text-left group cursor-pointer">
        <span className="text-brand font-bold pr-8 group-hover:text-blue-dark" style={{ fontSize: '1rem', transition: 'color 0.2s' }}>{faq.q}</span>
        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: isOpen ? '#ffbf3b' : '#25475e', transition: 'all 0.5s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
          <svg className="w-4 h-4" style={{ color: isOpen ? '#25475e' : '#f4f4ec' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </button>
      <div ref={contentRef} style={{ height: isOpen ? height + 'px' : '0px', overflow: 'hidden', transition: 'height 0.5s ease' }}>
        <p className="text-brand/70 px-6 pb-6" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const headerRef = useScrollAnimation();
  const listRef = useScrollAnimation(0.05);

  return (
    <section id="faq" className="bg-stone" style={{ padding: '7rem 0' }}>
      <div className="max-w-[900px] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center mb-14 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Frequently Asked Questions</p>
          <h2 className="text-brand font-bold leading-[1.3] tracking-tight" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Common Questions About Security Guard Insurance</h2>
        </div>
        <div ref={listRef} className="space-y-4 stagger-children">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} isOpen={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
