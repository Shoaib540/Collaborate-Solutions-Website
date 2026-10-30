export type Service = {
  slug: string
  title: string
  short: string
  summary: string
  image: string
  points: string[]
  overview: string
  audience: string
  process: { step: string; title: string; text: string }[]
  deliverables: string[]
  outcomes: string[]
  stack?: string[]
}

export const services: Service[] = [
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    short: 'Visibility that converts',
    summary:
      'From SEO and social to paid campaigns and content, we tailor strategies that grow your presence and revenue across every digital channel.',
    image: '/media/images/service-marketing.jpg',
    points: [
      'SEO & search engine marketing',
      'Social media & content systems',
      'Brand campaigns with measurable ROI',
      'Email and lifecycle marketing',
    ],
    overview:
      'We don’t run random posts and hope. Collaborate Solutions builds channel strategy around your offer, audience, and sales cycle — then executes with clear weekly reporting so you know what is driving leads, calls, and closed revenue.',
    audience:
      'Local service businesses, clinics, construction firms, SaaS teams, and brands that need predictable inbound demand — not vanity metrics.',
    process: [
      {
        step: '01',
        title: 'Audit & positioning',
        text: 'Competitor landscape, keyword map, funnel gaps, and brand message clarity before a single campaign goes live.',
      },
      {
        step: '02',
        title: 'Channel build',
        text: 'SEO foundations, paid structure, social content calendar, and tracking (GA4 / Meta / Google Ads) wired correctly.',
      },
      {
        step: '03',
        title: 'Launch & iterate',
        text: 'Creative tests, landing-page improvements, and budget shifts based on cost-per-lead and conversion quality.',
      },
      {
        step: '04',
        title: 'Scale what works',
        text: 'Double down on winning ads and content, retire waste, and hand you a growth playbook your team can follow.',
      },
    ],
    deliverables: [
      'SEO technical + content roadmap',
      'Paid search & social campaign setup',
      'Monthly content / creative package',
      'Conversion tracking & dashboard',
      'Performance report with next actions',
    ],
    outcomes: [
      'Higher qualified traffic',
      'Lower cost per lead over time',
      'Stronger local / brand search presence',
      'Clear attribution from click to inquiry',
    ],
    stack: ['SEO', 'Google Ads', 'Meta Ads', 'Content', 'Email', 'Analytics'],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    short: 'Sites that perform',
    summary:
      'Responsive websites, e-commerce, and web apps built for speed, clarity, and conversion — designed to feel premium on every device.',
    image: '/media/images/service-webdev.jpg',
    points: [
      'Corporate & marketing sites',
      'E-commerce platforms',
      'CMS & custom web applications',
      'Performance & accessibility focused',
    ],
    overview:
      'Your website is often the first serious meeting with a customer. We design and ship fast, accessible sites that look premium, load quickly, and are structured so marketing and sales can update content without breaking the layout.',
    audience:
      'Companies replacing outdated WordPress templates, launching a new brand site, or needing an e-commerce / booking experience that converts.',
    process: [
      {
        step: '01',
        title: 'Discovery & sitemap',
        text: 'Goals, audiences, page inventory, and conversion paths defined before design starts.',
      },
      {
        step: '02',
        title: 'UI design system',
        text: 'Brand-aligned layouts, typography, components, and mobile-first wireframes approved with you.',
      },
      {
        step: '03',
        title: 'Build & integrate',
        text: 'Clean frontend, CMS or headless setup, forms, payments, and third-party tools connected.',
      },
      {
        step: '04',
        title: 'Launch & handoff',
        text: 'Performance pass, SEO basics, training, and documentation so your team owns the site.',
      },
    ],
    deliverables: [
      'Responsive multi-page website',
      'CMS training for content editors',
      'Contact / lead forms with notifications',
      'Basic SEO (titles, sitemap, speed)',
      '30-day post-launch support window',
    ],
    outcomes: [
      'Faster page loads on mobile',
      'Higher form / checkout conversion',
      'Easier content updates in-house',
      'Professional brand presence online',
    ],
    stack: ['React', 'Next/Vite', 'WordPress/CMS', 'Tailwind', 'Vercel'],
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    short: 'Products that scale',
    summary:
      'Feature-rich applications engineered for engagement and reliability — from internal tools to customer-facing platforms.',
    image: '/media/images/service-software.jpg',
    points: [
      'Custom business software',
      'Mobile & cross-platform apps',
      'API integrations & automation',
      'UX/UI product design',
    ],
    overview:
      'Off-the-shelf tools force your process to bend. We build custom software that matches how your teams actually work — dashboards, portals, mobile apps, and integrations that remove manual work and errors.',
    audience:
      'Growing companies that have outgrown spreadsheets, need a client portal, or want a product MVP shipped with production-ready quality.',
    process: [
      {
        step: '01',
        title: 'Product workshop',
        text: 'Map users, workflows, must-have features, and success metrics into a scoped MVP.',
      },
      {
        step: '02',
        title: 'Architecture & UX',
        text: 'Data model, API plan, security approach, and clickable prototypes before heavy coding.',
      },
      {
        step: '03',
        title: 'Agile build sprints',
        text: 'Bi-weekly demos, backlog grooming, and continuous QA so you see progress — not surprises.',
      },
      {
        step: '04',
        title: 'Deploy & support',
        text: 'Cloud hosting, monitoring, admin training, and a maintenance retainer if you want ongoing iteration.',
      },
    ],
    deliverables: [
      'Scoped product backlog & roadmap',
      'Web and/or mobile application',
      'Admin panel & role-based access',
      'API documentation',
      'Deployment + runbook',
    ],
    outcomes: [
      'Less manual ops work',
      'Faster internal reporting',
      'Better customer self-serve',
      'A product you own — not rent forever',
    ],
    stack: ['React / Node', 'APIs', 'Databases', 'Cloud', 'Mobile'],
  },
  {
    slug: 'call-center',
    title: 'Call Center',
    short: 'Support that retains',
    summary:
      'Professional inbound and outbound support that protects your brand voice while scaling customer conversations with care.',
    image: '/media/images/service-callcenter.jpg',
    points: [
      'Inbound customer support',
      'Outbound sales & follow-ups',
      'Multichannel communication',
      'Quality monitoring & reporting',
    ],
    overview:
      'Every call is a brand moment. Our call-center teams are trained on your scripts, tone, and escalation rules — so customers get fast answers while you get clean logs, QA scores, and conversion reporting.',
    audience:
      'Clinics, logistics, e-commerce, and service businesses that need reliable coverage without hiring a full in-house floor overnight.',
    process: [
      {
        step: '01',
        title: 'Playbook & training',
        text: 'FAQs, objection handling, CRM fields, and compliance rules documented and drilled with agents.',
      },
      {
        step: '02',
        title: 'Soft launch',
        text: 'Limited volume with live listening, then refine scripts before full traffic switch.',
      },
      {
        step: '03',
        title: 'Full coverage',
        text: 'Inbound / outbound shifts with SLA targets for answer time and resolution.',
      },
      {
        step: '04',
        title: 'QA & improve',
        text: 'Call sampling, coaching, and weekly performance reviews shared with your managers.',
      },
    ],
    deliverables: [
      'Dedicated agent briefing pack',
      'Inbound & outbound coverage plan',
      'CRM / ticketing updates',
      'Weekly QA & volume reports',
      'Escalation matrix to your team',
    ],
    outcomes: [
      'Faster first response',
      'Higher customer satisfaction',
      'More booked appointments / sales',
      'Managers free from phone firefighting',
    ],
    stack: ['Voice', 'WhatsApp', 'Email', 'CRM', 'QA'],
  },
  {
    slug: 'healthcare-it',
    title: 'Healthcare IT',
    short: 'Clinical systems that comply',
    summary:
      'Technology that streamlines care operations — EHR, practice management, telehealth, RPM, and certified interoperability.',
    image: '/media/images/healthcare-ops.jpg',
    points: [
      'EHR & practice management',
      'Telehealth & remote monitoring',
      'ONC / MIPS / FHIR readiness',
      'NPHIES & regional exchange',
    ],
    overview:
      'Healthcare software only works if clinicians trust it and compliance teams can defend it. We implement and support EHR, PMS, telehealth, RPM, and interoperability stacks aligned to ONC, CMS MIPS, FHIR, and Saudi NPHIES where required.',
    audience:
      'Clinics, specialty practices, hospital groups, and healthcare networks modernizing charts, billing, and virtual care.',
    process: [
      {
        step: '01',
        title: 'Clinical workflow map',
        text: 'Document visit types, specialties, billing rules, and integration needs before configuration.',
      },
      {
        step: '02',
        title: 'Configure & integrate',
        text: 'Templates, e-Rx, claims, portals, and FHIR / NPHIES connections set up for your market.',
      },
      {
        step: '03',
        title: 'Train & go-live',
        text: 'Provider and front-desk training, parallel run if needed, then cutover with support on the floor.',
      },
      {
        step: '04',
        title: 'Optimize & report',
        text: 'Denial trends, RPM/CCM adoption, MIPS dashboards, and continuous improvement cycles.',
      },
    ],
    deliverables: [
      'Configured EHR / PMS modules',
      'Telehealth & RPM enablement',
      'Interoperability / NPHIES readiness review',
      'Staff training sessions',
      'Post go-live hypercare',
    ],
    outcomes: [
      'Faster charting & fewer callbacks',
      'Cleaner claims submission',
      'Virtual care capacity unlocked',
      'Audit-ready compliance posture',
    ],
    stack: ['EHR', 'PMS', 'FHIR', 'Telehealth', 'RPM', 'NPHIES'],
  },
  {
    slug: 'medical-billing',
    title: 'Medical Billing',
    short: 'Revenue without the friction',
    summary:
      'End-to-end RCM so your clinicians stay focused on patients while claims, denials, and collections stay under control.',
    image: '/media/images/service-billing.jpg',
    points: [
      'Claims scrubbing & submission',
      'Denial management',
      'Patient billing & collections',
      'Financial analytics dashboards',
    ],
    overview:
      'Revenue cycle is where clinics quietly lose money. Our billing teams scrub claims, chase denials, and reconcile payments with transparent reporting — so your front desk and providers stay focused on care.',
    audience:
      'Independent practices, multi-provider clinics, and specialty groups that want specialty-aware billing without building a large back office.',
    process: [
      {
        step: '01',
        title: 'Charge capture review',
        text: 'Coding patterns, payer mix, and leakage points identified from recent claim history.',
      },
      {
        step: '02',
        title: 'Clean claim engine',
        text: 'Eligibility checks, scrubbing rules, and submission cadence locked to your specialties.',
      },
      {
        step: '03',
        title: 'Denial & A/R work',
        text: 'Root-cause denial workqueues, appeals, and aging A/R reduction sprints.',
      },
      {
        step: '04',
        title: 'Monthly finance view',
        text: 'Collections rate, denial %, payer performance, and recommended process fixes.',
      },
    ],
    deliverables: [
      'Daily / weekly claim submissions',
      'Denial management workflow',
      'Patient statement support',
      'Monthly RCM dashboard',
      'Payer follow-up logs',
    ],
    outcomes: [
      'Fewer rejected claims',
      'Faster cash collection',
      'Clear visibility into leakage',
      'Less admin burden on clinic staff',
    ],
    stack: ['RCM', 'Eligibility', 'Claims', 'Denials', 'Reporting'],
  },
  {
    slug: 'medical-credentialing',
    title: 'Medical Credentialing',
    short: 'Enrollment without the backlog',
    summary:
      'We handle paperwork, verification, and payer enrollment so providers can practice — not chase insurance portals.',
    image: '/media/images/service-credentialing.jpg',
    points: [
      'Payer enrollment & revalidation',
      'Document verification',
      'CAQH & profile maintenance',
      'Follow-up until approved',
    ],
    overview:
      'Credentialing delays mean delayed revenue. We manage provider enrollment end-to-end — applications, attestations, follow-ups, and revalidations — so panels open faster and files stay audit-ready.',
    audience:
      'New practices, expanding provider groups, and clinics drowning in CAQH updates and payer portal chases.',
    process: [
      {
        step: '01',
        title: 'Provider file build',
        text: 'Licenses, malpractice, education, work history, and IDs collected into a complete packet.',
      },
      {
        step: '02',
        title: 'Portal applications',
        text: 'Payer applications and CAQH profiles submitted accurately the first time.',
      },
      {
        step: '03',
        title: 'Chase & escalate',
        text: 'Systematic follow-ups until effective dates are confirmed — not left in limbo.',
      },
      {
        step: '04',
        title: 'Maintain & revalidate',
        text: 'Calendar-driven renewals so enrollment never quietly expires.',
      },
    ],
    deliverables: [
      'Complete credentialing checklist',
      'Payer enrollment submissions',
      'CAQH profile maintenance',
      'Status tracker shared with you',
      'Revalidation reminders',
    ],
    outcomes: [
      'Faster panel effective dates',
      'Fewer incomplete applications',
      'Less admin time for providers',
      'Continuous enrollment hygiene',
    ],
    stack: ['CAQH', 'Payer portals', 'Primary source verify', 'Tracking'],
  },
]

export const offerPillars = [
  {
    step: '01',
    title: 'Services & Products',
    text: 'A wide range of IT solutions tailored to what your business actually needs — not a one-size deck.',
    hint: 'Build & deliver',
  },
  {
    step: '02',
    title: 'Marketing & Sales Strategy',
    text: 'Campaigns and funnels crafted to raise visibility and turn attention into measurable revenue.',
    hint: 'Attract & convert',
  },
  {
    step: '03',
    title: 'IT Consulting',
    text: 'Practical guidance that helps organizations operate smarter, faster, and with clearer systems.',
    hint: 'Advise & align',
  },
  {
    step: '04',
    title: 'Revenue Cycle Management',
    text: 'A solution-driven approach that keeps billing, claims, and cash flow moving without drama.',
    hint: 'Collect & grow',
  },
] as const

export const whyUs = [
  {
    title: 'Collaborative DNA',
    text: 'We listen, understand your constraints, and co-create solutions. You’re a partner — not a ticket number.',
    image: '/media/images/why-partner.jpg',
  },
  {
    title: 'Scalability with Soul',
    text: 'Startup or enterprise — we match your pace and build systems that grow with ambition, not bureaucracy.',
    image: '/media/images/why-scale.jpg',
  },
  {
    title: 'Cost-Conscious Growth',
    text: 'Powerful solutions shouldn’t break the bank. Competitive pricing with an ROI-first mindset.',
    image: '/media/images/why-growth.jpg',
  },
] as const

export const testimonials = [
  {
    name: 'Dr. Arthur',
    role: 'JK Medical Clinic',
    quote:
      'Collaborate Solutions helped manage our clinic’s administrative and financial work. From insurance enrollment to ongoing revenue cycle and healthcare IT — they’ve been a steady partner.',
    date: '8 March, 2021',
  },
  {
    name: 'Tom Jones',
    role: 'Astro Constructions',
    quote:
      'They helped us grow locally. More than 90% of new client conversations started through the online channels they built and marketed for us.',
    date: '19 Nov, 2023',
  },
  {
    name: 'Mark Wilson',
    role: 'Liam Logistics LLC',
    quote:
      'Their software keeps our team organized and our operations clean. Support is responsive whenever we need them — the systems just work.',
    date: '2 Aug, 2020',
  },
] as const
