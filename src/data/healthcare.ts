export type Certification = {
  id: string
  title: string
  shortName: string
  code: string
  issuer: string
  tag: string
  summary: string
  criteria: string[]
  impact: string
  accent: 'forest' | 'gold'
}

export type Solution = {
  id: string
  pillar: 'core' | 'virtual' | 'value' | 'regulatory'
  title: string
  subtitle: string
  badge: string
  summary: string
  features: string[]
  specialties: string[]
  roi: string
  certBadge?: string
}

export const certifications: Certification[] = [
  {
    id: 'onc-fhir',
    title: 'ONC Health IT 2015 Edition Cures Update',
    shortName: 'ONC Health IT Certified',
    code: 'CHPL-ID: 15.04.04.2981.Omni.2026.01',
    issuer: 'ONC-ACB / Drummond Group',
    tag: 'HL7® FHIR® R4',
    summary:
      'ONC Certified Health IT conforming to §170.315 g(7)-g(10) standardized API specifications for seamless EHR interoperability.',
    criteria: [
      '§170.315(g)(10) Standardized API for Patient & Population Services (FHIR R4)',
      '§170.315(b)(10) Electronic Health Information (EHI) Export',
      '§170.315(d)(12)-(d)(13) Encrypted Authentication & Multi-factor Security Controls',
      '§170.315(e)(1) Patient Health Portal Access & Direct API Streaming',
    ],
    impact:
      'Enables instant US CDEX, SMART-on-FHIR apps, and national Saudi NPHIES exchange compatibility.',
    accent: 'forest',
  },
  {
    id: 'cms-mips',
    title: 'CMS MIPS Qualified Direct Registry',
    shortName: 'CMS MIPS 2026 Registry',
    code: 'CMS-REG-ID: QREG-88204-KSA-US',
    issuer: 'Centers for Medicare & Medicaid Services (CMS)',
    tag: 'MIPS Score Maximizer',
    summary:
      'Certified CMS registry pipeline for automated calculation, real-time score auditing, and direct QRDA-III reporting.',
    criteria: [
      'Quality Performance Category: 200+ eCQM & Registry Measures Auto-deducted',
      'Promoting Interoperability (PI): Automated objective counter & CEHRT verification',
      'Improvement Activities (IA): Direct attestation verification & audit-log generator',
      'Cost Category: Episode-based benchmark analytics & predictive scoring',
    ],
    impact:
      'Guarantees protection against the 9% penalty while positioning practices for high-performer bonuses.',
    accent: 'gold',
  },
  {
    id: 'mu3-pi',
    title: 'Stage 3 Meaningful Use (MU3) / PI',
    shortName: 'CEHRT Stage 3 Certified',
    code: 'CEHRT ID: 0015EQC8821094M',
    issuer: 'U.S. Department of HHS / ONC',
    tag: 'Promoting Interoperability',
    summary:
      'Certified Health IT module ensuring compliance with Stage 3 Meaningful Use clinical exchange and public health reporting.',
    criteria: [
      'Electronic Prescribing (eRx) via DoctorFirst with real-time benefit check',
      'Health Information Exchange (HIE) Dual-directional C-CDA transition summaries',
      'Provider to Patient Communication via encrypted FHIR portals',
      'Public Health Registries: Syndromic, Immunization, and Cancer Registry automated reporting',
    ],
    impact:
      'Full compliance for Medicaid/Medicare EHR Incentive Programs and Hospital Quality Reporting.',
    accent: 'forest',
  },
]

export const solutions: Solution[] = [
  {
    id: 'ehr',
    pillar: 'core',
    title: 'Next-Gen EHR System',
    subtitle: 'AI-assisted, specialty-optimized Electronic Health Records',
    badge: 'Core Clinical',
    summary:
      'Streamline encounter documentation, e-prescribing, and chart management with single-click clinical templates.',
    features: [
      'Specialty-specific macros & voice-to-text integration',
      'Built-in decision support & drug interaction checks',
      'Patient portal & automated recall scheduling',
      'Seamless chart sync with practice management',
    ],
    specialties: ['Primary Care', 'Cardiology', 'Multispecialty'],
    roi: '+35% faster charting, 2.5 hrs saved per provider daily',
  },
  {
    id: 'pms',
    pillar: 'core',
    title: 'Practice Management (PMS)',
    subtitle: 'End-to-end medical billing, scheduling & revenue cycle platform',
    badge: 'Core Clinical',
    summary:
      'Automate front-desk operations, insurance eligibility checks, and claim scrubbers to minimize rejections.',
    features: [
      'Real-time insurance eligibility & pre-authorization',
      'Automated appointment reminders (SMS/WhatsApp/Email)',
      'Integrated merchant payments & patient balance billing',
      'Advanced financial analytics and denial management',
    ],
    specialties: ['All Specialties', 'Private Clinics', 'Hospital Networks'],
    roi: '40% reduction in claim denials, 15-day faster RCM turnaround',
  },
  {
    id: 'fhir',
    pillar: 'core',
    title: 'FHIR Interoperability Engine',
    subtitle: 'HL7 FHIR R4 compliant data hub & API integration hub',
    badge: 'Core Clinical',
    summary:
      'Connect disparate systems, lab networks, and national health exchanges with zero friction.',
    features: [
      'Native HL7 FHIR R4 API endpoints for seamless exchange',
      'Unified patient record aggregation from external labs & hospital systems',
      'Secure RESTful developer portal for third-party tools',
      'Full alignment with international & regional interoperability mandates',
    ],
    specialties: ['Enterprise Networks', 'Hospitals', 'Digital Health Vendors'],
    roi: '100% data exchange compliance with zero custom middleware costs',
  },
  {
    id: 'drfirst',
    pillar: 'core',
    title: 'DoctorFirst e-Prescribing',
    subtitle: 'Intelligent e-Prescribing & Care Networking Solution',
    badge: 'Core Clinical',
    summary:
      'Empower clinicians with instant medication history, price transparency, and clinical decision support at the point of care.',
    features: [
      'Real-time prescription benefit checks & medication history',
      'Controlled substance e-prescribing (EPCS)',
      'Direct connection to retail & mail-order pharmacy networks',
      'Automated patient medication adherence alerts',
    ],
    specialties: ['Primary Care', 'Psychiatry', 'Cardiology', 'Internal Medicine'],
    roi: '90% reduction in pharmacy callbacks & prescription entry errors',
  },
  {
    id: 'telehealth',
    pillar: 'virtual',
    title: 'Telehealth & Telemedicine',
    subtitle: 'HD virtual visits with integrated clinical workflows & e-rx',
    badge: 'Virtual Care',
    summary:
      'Browser-based, HD virtual consultations fully embedded within clinician EHR charting flows.',
    features: [
      'No download required for patients; click-to-join SMS links',
      'Virtual waiting room with dynamic triage intake forms',
      'In-visit split-screen documentation & device video streaming',
      'Multi-party visits for family members, translators, or specialists',
    ],
    specialties: ['Urgent Care', 'Behavioral Health', 'Pediatrics', 'Follow-ups'],
    roi: '25% increase in daily patient encounter capacity',
  },
  {
    id: 'tele-wound',
    pillar: 'virtual',
    title: 'Tele-Wound Care Platform',
    subtitle: 'AI-assisted wound measurement, tracking & specialist consultation',
    badge: 'Virtual Care',
    summary:
      'Empower home health nurses and providers with precise digital wound mapping, surface area analysis, and treatment logging.',
    features: [
      'Computer vision wound perimeter & area measurement tool',
      'Tissue composition analysis (granulation, slough, eschar tracking)',
      'Longitudinal healing progression comparison timelines',
      'Remote wound specialist sign-off & treatment plan generation',
    ],
    specialties: ['Wound Care', 'Podiatry', 'Dermatology', 'Vascular Surgery'],
    roi: '50% faster wound resolution & reduced hospital readmissions',
  },
  {
    id: 'rpm',
    pillar: 'virtual',
    title: 'Remote Patient Monitoring (RPM)',
    subtitle: 'Continuous cellular device monitoring & clinical triage',
    badge: 'Virtual Care',
    summary:
      'Keep high-risk chronic patients connected via pre-configured cellular blood pressure cuffs, glucometers, scales, and pulse oximeters.',
    features: [
      'Plug-and-play cellular devices (no home Wi-Fi setup needed)',
      'Automated out-of-range vital sign alerts & clinical escalation queues',
      'Time-tracking dashboard for automated CPT / reimbursement log generation',
      'Engaging patient mobile app for trend visualization',
    ],
    specialties: ['Cardiology', 'Endocrinology', 'Pulmonology', 'Primary Care'],
    roi: 'Avg. $120–$180 additional monthly recurring revenue per patient',
  },
  {
    id: 'ccm',
    pillar: 'value',
    title: 'Chronic Care Management (CCM)',
    subtitle: 'Structured non-face-to-face care coordination for complex patients',
    badge: 'Value-Based Care',
    summary:
      'Turn chronic care coordination into a predictable revenue stream while keeping multi-condition patients out of the emergency room.',
    features: [
      'Comprehensive 24/7 care plan generation & multi-provider sync',
      'Automated time tracking for monthly care management billing thresholds',
      'Medication reconciliation & community resource coordination',
      'Dedicated nurse triage care management support tools',
    ],
    specialties: ['Primary Care', 'Geriatrics', 'Internal Medicine'],
    roi: 'Unlocks $65+ per patient/month in non-face-to-face reimbursement',
  },
  {
    id: 'apcm',
    pillar: 'value',
    title: 'Advanced Primary Care Management',
    subtitle: 'Holistic population health & risk stratification engine',
    badge: 'Value-Based Care',
    summary:
      'Transition smoothly into capitated & value-based contracts with proactive risk stratification and preventative gap closure.',
    features: [
      'Real-time population health risk scoring (HCC coding assistants)',
      'Payer gap-in-care identification & outreach automation',
      'Post-discharge care transition management workflows',
      'Value-based contract performance analytics',
    ],
    specialties: ['Primary Care Networks', 'ACOs', 'Family Medicine'],
    roi: 'Maximized ACO shared savings & improved quality score bonuses',
  },
  {
    id: 'cocm',
    pillar: 'value',
    title: 'Collaborative Care Model (CoCM)',
    subtitle: 'Psychiatric consultation integration within primary care settings',
    badge: 'Value-Based Care',
    summary:
      'Embed psychiatric registry tracking and consulting psychiatrist oversight into standard outpatient medical visits.',
    features: [
      'PHQ-9 and GAD-7 registry tracking with trend scoring',
      'Psychiatric consultant caseload review workspace',
      'Behavioral Health Care Manager task assignment & logging',
      'Automated CPT CoCM billing compliance tracking',
    ],
    specialties: ['Primary Care', 'Psychiatry', 'Behavioral Health Clinics'],
    roi: 'Generates up to $150/patient/month while expanding mental health access',
  },
  {
    id: 'bhi',
    pillar: 'value',
    title: 'Behavioral Health Integration (BHI)',
    subtitle: 'General behavioral health assessment & care management tools',
    badge: 'Value-Based Care',
    summary:
      'Seamlessly screen, monitor, and treat common mental health conditions directly inside standard medical clinical workflows.',
    features: [
      'Standardized mental health screenings embedded in patient check-in',
      'Systematic follow-up tracking for depression & anxiety care plans',
      'Integrated psychotropic medication management templates',
      'Continuous care management timer for reimbursement compliance',
    ],
    specialties: ['Primary Care', 'Pediatrics', "Women’s Health"],
    roi: 'Closes behavioral health gaps while diversifying clinic practice revenue',
  },
  {
    id: 'mips',
    pillar: 'regulatory',
    title: 'MIPS Optimization Suite',
    subtitle: 'Merit-based Incentive Payment System score maximization',
    badge: 'CMS Qualified Registry',
    certBadge: 'CMS-REG-ID: QREG-88204',
    summary:
      'Eliminate CMS penalty risks and maximize positive payment adjustments with real-time MIPS dashboard tracking.',
    features: [
      'Automated Quality, Promoting Interoperability & IA measure tracking',
      'Real-time provider score projections & performance benchmarking',
      'Direct CMS QRDA-III registry submission pipeline',
      'AI guidance to identify missed MIPS documentation opportunities',
    ],
    specialties: ['US Ambulatory Practices', 'Specialty Clinics', 'Hospitals'],
    roi: 'Protects up to 9% negative penalty and secures positive performance bonuses',
  },
  {
    id: 'mu3',
    pillar: 'regulatory',
    title: 'MU3 & Promoting Interoperability',
    subtitle: 'Certified EHR technology (CEHRT) compliance & reporting',
    badge: 'Stage 3 CEHRT',
    certBadge: 'ONC-ACB Certified 2015',
    summary:
      'Fulfill all Stage 3 Meaningful Use objectives, patient access API requirements, and electronic health exchange standards.',
    features: [
      'Full ONC-ATCB Certified EHR Technology infrastructure',
      'Secure FHIR-enabled patient access portal & API metrics',
      'Electronic public health reporting (immunization, syndromic, registries)',
      'Audit-ready reporting dashboards',
    ],
    specialties: ['Hospitals', 'Health Systems', 'Ambulatory Groups'],
    roi: 'Ensures 100% compliance with federal health IT mandates',
  },
  {
    id: 'nphies',
    pillar: 'regulatory',
    title: 'NPHIES & Saudi Vision 2030 Ready',
    subtitle: 'Direct integration with Saudi Arabia’s National Health Information Exchange',
    badge: 'Saudi NPHIES Validated',
    certBadge: 'CHI KSA Compliant',
    summary:
      'Purpose-built to support Council of Health Insurance (CHI) and Ministry of Health mandates for digital health transformation in KSA.',
    features: [
      'Direct NPHIES API integration for real-time eligibility & claims',
      'Saudi Ministry of Health (MoH) cloud deployment compliance',
      'Bilingual Arabic / English clinician & patient interface',
      'Health Cluster interoperability and referral pipeline support',
    ],
    specialties: ['Saudi Hospitals', 'KSA Medical Complexes', 'GCC Healthcare Chains'],
    roi: 'Instant pre-approval turnaround & accelerated insurance settlement in KSA',
  },
]

export const clinicalSpecialties = [
  {
    title: 'Primary Care & Internal Med',
    desc: 'Streamlined annual wellness visits, preventive gap closures, integrated EHR/PMS, and CCM/APCM automated tracking.',
  },
  {
    title: 'Cardiology',
    desc: 'Cellular ECG & BP Remote Patient Monitoring (RPM), specialized cardiology templates, and risk stratification.',
  },
  {
    title: 'Wound Care & Podiatry',
    desc: 'Computer vision tele-wound area calculation, ulcer progression tracking, and mobile nurse photo capture.',
  },
  {
    title: 'Behavioral Health & Psychiatry',
    desc: 'CoCM & BHI billing compliance, automated PHQ-9 / GAD-7 score registries, and tele-psychiatry HD sessions.',
  },
  {
    title: 'Pediatrics & Family Medicine',
    desc: 'Immunization tracking, developmental milestone checklists, and rapid guardian portal scheduling.',
  },
  {
    title: 'Multispecialty Health Clusters',
    desc: 'Cross-facility patient record sharing, enterprise FHIR interoperability, and centralized revenue cycle management.',
  },
] as const

export const complianceBadges = [
  'Saudi NPHIES Certified',
  'HL7 FHIR R4 Ready',
  'MIPS / MU3 CEHRT',
  'HIPAA & GDPR Aligned',
  'DrFirst Prescribing',
  'Saudi MoH Cloud Hosting',
] as const

export const regionalMandates = [
  {
    title: 'Saudi Arabia (NPHIES)',
    text: 'Real-time insurance pre-authorizations, claims adjudication, and health cluster data sharing.',
  },
  {
    title: 'United States (CMS & ONC)',
    text: 'MIPS Quality measure tracking, Promoting Interoperability (MU3), and DoctorFirst e-prescribing.',
  },
  {
    title: 'GCC & Global Markets',
    text: 'Multi-currency, bilingual Arabic/English interfaces, and customizable regional coding standards (ICD-10-AM / ACHI / CPT).',
  },
] as const

export const demoBenefits = [
  {
    title: 'Tailored Live Demo',
    desc: 'Customized to your clinical specialty & provider count.',
  },
  {
    title: 'Interoperability Audit',
    desc: 'Free assessment of FHIR, NPHIES, or HL7 migration paths.',
  },
  {
    title: 'Turnkey Hardware Included',
    desc: 'Cellular RPM kits shipped pre-configured directly to patients.',
  },
] as const

export const moduleOptions = [
  'EHR & PMS',
  'Telehealth & Telemed',
  'Tele-Wound',
  'RPM',
  'CCM / APCM',
  'CoCM & BHI',
  'FHIR Interoperability',
  'DoctorFirst e-Rx',
  'MIPS / NPHIES',
] as const

export const complianceDocs = [
  'Request ONC Health IT 2015 Edition Certification Matrix',
  'Request CMS MIPS 2026 Qualified Registry Portfolio',
  'Request HL7® FHIR® R4 API Integration Documentation',
  'Request Saudi NPHIES Compliance Whitepaper',
] as const

export const pillarTabs = [
  { id: 'all', label: 'All Modules' },
  { id: 'core', label: 'Core Clinical' },
  { id: 'virtual', label: 'Virtual & RPM' },
  { id: 'value', label: 'Value-Based Care' },
  { id: 'regulatory', label: 'Compliance & Quality' },
] as const

export const heroStats = [
  { label: 'ONC Certified', value: '2015 Cures', sub: 'Drummond Group Tested' },
  { label: 'CMS Registry', value: 'MIPS 2026', sub: 'Direct QRDA-III' },
  { label: 'Interoperability', value: 'FHIR R4', sub: 'Native API Architecture' },
  { label: 'Reimbursement Boost', value: '+$180', sub: 'Avg. per RPM patient / mo' },
] as const
