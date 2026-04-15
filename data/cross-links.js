// Cross-linking maps for dense internal linking
// Coverage → which industries commonly need this coverage
export const coverageToIndustries = {
  'general-liability': ['armed-guards', 'unarmed-security', 'event-security', 'estate-security'],
  'professional-liability': ['mobile-patrol', 'executive-protection', 'campus-security', 'loss-prevention'],
  'workers-compensation': ['unarmed-security', 'event-security', 'patrol-services', 'armed-guards'],
  'commercial-auto': ['patrol-services', 'executive-protection', 'estate-security', 'mobile-patrol'],
  'security-operations-liability': ['mobile-patrol', 'unarmed-security', 'patrol-services', 'loss-prevention'],
  'surveillance-data-liability': ['mobile-patrol', 'campus-security', 'executive-protection', 'loss-prevention'],
  'umbrella-excess': ['armed-guards', 'executive-protection', 'event-security', 'campus-security'],
  'employment-practices': ['unarmed-security', 'estate-security', 'patrol-services'],
  'assault-battery': ['event-security', 'armed-guards', 'cannabis-security', 'unarmed-security'],
  'firearms-liability': ['armed-guards', 'executive-protection', 'cannabis-security'],
};

// Coverage → which resources are most relevant
export const coverageToResources = {
  'general-liability': ['security-guard-insurance-cost', 'guard-licensing-guide', 'coi-guide'],
  'professional-liability': ['use-of-force-liability-guide', 'security-contract-requirements', 'security-guard-insurance-cost'],
  'workers-compensation': ['security-guard-insurance-cost', 'guard-licensing-guide'],
  'commercial-auto': ['security-guard-insurance-cost', 'security-insurance-glossary'],
  'security-operations-liability': ['security-guard-insurance-cost', 'security-contract-requirements', 'security-claims-guide'],
  'surveillance-data-liability': ['cyber-security-companies-guide', 'security-insurance-glossary'],
  'umbrella-excess': ['security-guard-insurance-cost', 'security-claims-guide'],
  'employment-practices': ['security-guard-insurance-cost', 'guard-licensing-guide'],
  'assault-battery': ['use-of-force-liability-guide', 'security-claims-guide'],
  'firearms-liability': ['armed-vs-unarmed-guide', 'use-of-force-liability-guide', 'guard-licensing-guide'],
};

// Industry → top states for that industry
export const industryToStates = {
  'armed-guards': ['california', 'texas', 'florida', 'new-york', 'illinois'],
  'unarmed-security': ['california', 'texas', 'florida', 'new-york', 'pennsylvania'],
  'executive-protection': ['california', 'new-york', 'florida', 'texas', 'illinois'],
  'event-security': ['california', 'texas', 'florida', 'new-york', 'nevada'],
  'campus-security': ['california', 'texas', 'florida', 'new-york', 'pennsylvania'],
  'cannabis-security': ['california', 'colorado', 'illinois', 'florida', 'new-york'],
  'estate-security': ['california', 'florida', 'texas', 'new-york', 'new-jersey'],
  'patrol-services': ['california', 'texas', 'florida', 'georgia', 'ohio'],
  'mobile-patrol': ['california', 'texas', 'florida', 'georgia', 'arizona'],
  'loss-prevention': ['california', 'texas', 'new-york', 'florida', 'illinois'],
};

// Industry → relevant resources
export const industryToResources = {
  'armed-guards': ['armed-vs-unarmed-guide', 'guard-licensing-guide', 'use-of-force-liability-guide'],
  'unarmed-security': ['security-guard-insurance-cost', 'guard-licensing-guide', 'coi-guide'],
  'executive-protection': ['security-guard-insurance-cost', 'security-contract-requirements'],
  'event-security': ['event-security-guide', 'use-of-force-liability-guide', 'coi-guide'],
  'campus-security': ['security-contract-requirements', 'security-guard-insurance-cost'],
  'cannabis-security': ['security-guard-insurance-cost', 'armed-vs-unarmed-guide'],
  'estate-security': ['security-guard-insurance-cost', 'coi-guide'],
  'patrol-services': ['security-guard-insurance-cost', 'security-claims-guide'],
  'mobile-patrol': ['security-guard-insurance-cost', 'security-claims-guide'],
  'loss-prevention': ['security-guard-insurance-cost', 'use-of-force-liability-guide', 'coi-guide'],
};
