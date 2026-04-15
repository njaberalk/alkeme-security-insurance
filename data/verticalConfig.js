export const verticalConfig = {
  id: 'security', label: 'Security Guard Insurance',
  heading: 'Get a Security Insurance Quote',
  subtext: 'Answer a few quick questions and our security specialists will design coverage for your operation.',
  businessTypes: [
    { value: 'armed', label: 'Armed Guard Services' },
    { value: 'unarmed', label: 'Unarmed Security' },
    { value: 'executive', label: 'Executive Protection' },
    { value: 'event', label: 'Event Security' },
    { value: 'patrol', label: 'Patrol Services' },
    { value: 'monitoring', label: 'Alarm / Monitoring' },
  ],
  customQuestions: [
    { id: 'armed_unarmed', label: 'Armed or unarmed?', type: 'select', options: ['Armed', 'Unarmed', 'Both'] },
    { id: 'guard_count', label: 'How many guards?', type: 'select', options: ['1-10', '11-25', '26-50', '51-100', '100+'] },
    { id: 'service_type', label: 'Primary service type?', type: 'select', options: ['Standing Guard', 'Patrol', 'Executive Protection', 'Event Security', 'Campus'] },
  ],
  coverageOptions: ['General Liability', 'Professional Liability', 'Workers\' Compensation', 'Commercial Auto', 'Security Operations Liability', 'Surveillance Data Liability', 'Umbrella / Excess', 'Employment Practices', 'Assault & Battery', 'Firearms Liability'],
};
