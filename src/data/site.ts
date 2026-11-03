export const site = {
  name: 'Collaborate Solutions',
  tagline: 'EHR that simplifies care delivery',
  description:
    'Clean, certified Electronic Health Records for clinics and hospitals across the United States and Saudi Arabia / Gulf.',
  phone: '+92 333 4415825',
  phoneHref: 'tel:+923334415825',
  email: 'info@collaborate-solutions.com',
  emailHref: 'mailto:info@collaborate-solutions.com',
  whatsapp: 'https://wa.me/923334415825',
  address: '71 D, DHA Phase 8, Lahore',
  mapUrl:
    'https://maps.google.com/maps?q=Collaborate+Solutions+71+D+DHA+Phase+8+Lahore',
  socials: {
    linkedin: 'https://pk.linkedin.com/company/collaborate-solutions',
    facebook: 'https://www.facebook.com/collaboratesolutions22/',
    instagram: 'https://www.instagram.com/collaborate_solutions',
    youtube: 'https://www.youtube.com/@CollaborateSolutions',
  },
} as const

export const navLinks = [
  { key: 'home' as const, to: '/' },
  { key: 'ehr' as const, to: '/ehr' },
  { key: 'markets' as const, to: '/markets' },
  { key: 'about' as const, to: '/about' },
  { key: 'contact' as const, to: '/contact' },
]

export const ehrModuleLinks = [
  { label: 'Electronic Health Records', labelAr: 'السجلات الصحية الإلكترونية', hash: 'solutions' },
  { label: 'Practice Management', labelAr: 'إدارة الممارسة', hash: 'solutions' },
  { label: 'Telehealth & RPM', labelAr: 'التطبيب والمراقبة عن بُعد', hash: 'solutions' },
  { label: 'MIPS & NPHIES', labelAr: 'MIPS و NPHIES', hash: 'compliance' },
] as const
