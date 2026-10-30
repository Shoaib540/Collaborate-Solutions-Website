import React, { useState, useMemo } from 'react';
import {
  Activity,
  ShieldCheck,
  Zap,
  Globe,
  Award,
  Users,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Calculator,
  Server,
  FileText,
  Stethoscope,
  HeartPulse,
  Brain,
  Bandage,
  Footprints,
  PhoneCall,
  Sliders,
  Send,
  X,
  ArrowRight,
  TrendingUp,
  Clock,
  Sparkles,
  Search,
  Check,
  Building,
  HelpCircle,
  FileCheck,
  BadgeCheck,
  ExternalLink,
  Lock,
  Code2
} from 'lucide-react';

export default function App() {
  // Navigation / Filter State
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  // ROI Calculator State
  const [providerCount, setProviderCount] = useState(5);
  const [patientVolume, setPatientVolume] = useState(1200);
  const [rpmAdoption, setRpmAdoption] = useState(25); // % of eligible chronic patients

  // Lead Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    organization: '',
    providerSize: '1-5',
    region: 'Saudi Arabia / GCC',
    selectedProducts: [],
    complianceDocs: []
  });

  // Official Regulatory Certifications Data
  const certificationsData = [
    {
      id: 'onc-fhir',
      title: 'ONC Health IT 2015 Edition Cures Update',
      shortName: 'ONC Health IT Certified',
      code: 'CHPL-ID: 15.04.04.2981.Omni.2026.01',
      issuer: 'ONC-ACB / Drummond Group',
      badgeColor: 'from-emerald-400 to-teal-500',
      tag: 'HL7® FHIR® R4',
      summary: 'ONC Certified Health IT conforming to §170.315 g(7)-g(10) standardized API specifications for seamless EHR interoperability.',
      criteria: [
        '§170.315(g)(10) Standardized API for Patient & Population Services (FHIR R4)',
        '§170.315(b)(10) Electronic Health Information (EHI) Export',
        '§170.315(d)(12)-(d)(13) Encrypted Authentication & Multi-factor Security Controls',
        '§170.315(e)(1) Patient Health Portal Access & Direct API Streaming'
      ],
      impact: 'Enables instant US CDEX, SMART-on-FHIR apps, and national Saudi NPHIES exchange compatibility.'
    },
    {
      id: 'cms-mips',
      title: 'CMS MIPS Qualified Direct Registry',
      shortName: 'CMS MIPS 2026 Registry',
      code: 'CMS-REG-ID: QREG-88204-KSA-US',
      issuer: 'Centers for Medicare & Medicaid Services (CMS)',
      badgeColor: 'from-sky-400 to-blue-600',
      tag: 'MIPS Score Maximizer',
      summary: 'Certified CMS registry pipeline for automated calculation, real-time score auditing, and direct QRDA-III reporting.',
      criteria: [
        'Quality Performance Category: 200+ eCQM & Registry Measures Auto-deducted',
        'Promoting Interoperability (PI): Automated objective counter & CEHRT verification',
        'Improvement Activities (IA): Direct attestation verification & audit-log generator',
        'Cost Category: Episode-based benchmark analytics & predictive scoring'
      ],
      impact: 'Guarantees protection against the 9% penalty while positioning practices for high-performer bonuses.'
    },
    {
      id: 'mu3-pi',
      title: 'Stage 3 Meaningful Use (MU3) / PI',
      shortName: 'CEHRT Stage 3 Certified',
      code: 'CEHRT ID: 0015EQC8821094M',
      issuer: 'U.S. Department of HHS / ONC',
      badgeColor: 'from-indigo-400 to-purple-500',
      tag: 'Promoting Interoperability',
      summary: 'Certified Health IT module ensuring compliance with Stage 3 Meaningful Use clinical exchange and public health reporting.',
      criteria: [
        'Electronic Prescribing (eRx) via DoctorFirst with real-time benefit check',
        'Health Information Exchange (HIE) Dual-directional C-CDA transition summaries',
        'Provider to Patient Communication via encrypted FHIR portals',
        'Public Health Registries: Syndromic, Immunization, and Cancer Registry automated reporting'
      ],
      impact: 'Full compliance for Medicaid/Medicare EHR Incentive Programs and Hospital Quality Reporting.'
    }
  ];

  // Solutions Data
  const solutions = [
    // Pillar 1: Core Clinical Systems
    {
      id: 'ehr',
      pillar: 'core',
      title: 'Next-Gen EHR System',
      subtitle: 'AI-assisted, specialty-optimized Electronic Health Records',
      icon: Activity,
      badge: 'Core Clinical',
      summary: 'Streamline encounter documentation, e-prescribing, and chart management with single-click clinical templates.',
      features: [
        'Specialty-specific macros & voice-to-text integration',
        'Built-in decision support & drug interaction checks',
        'Patient portal & automated recall scheduling',
        'Seamless chart sync with practice management'
      ],
      specialties: ['Primary Care', 'Cardiology', 'Multispecialty'],
      roi: '+35% faster charting, 2.5 hrs saved per provider daily'
    },
    {
      id: 'pms',
      pillar: 'core',
      title: 'Practice Management (PMS)',
      subtitle: 'End-to-end medical billing, scheduling & revenue cycle platform',
      icon: Building2,
      badge: 'Core Clinical',
      summary: 'Automate front-desk operations, insurance eligibility checks, and claim scrubbers to minimize rejections.',
      features: [
        'Real-time insurance eligibility & pre-authorization',
        'Automated appointment reminders (SMS/WhatsApp/Email)',
        'Integrated merchant payments & patient balance billing',
        'Advanced financial analytics and denial management'
      ],
      specialties: ['All Specialties', 'Private Clinics', 'Hospital Networks'],
      roi: '40% reduction in claim denials, 15-day faster RCM turnaround'
    },
    {
      id: 'fhir',
      pillar: 'core',
      title: 'FHIR Interoperability Engine',
      subtitle: 'HL7 FHIR R4 compliant data hub & API integration hub',
      icon: Server,
      badge: 'Core Clinical',
      summary: 'Connect disparate systems, lab networks, and national health exchanges with zero friction.',
      features: [
        'Native HL7 FHIR R4 API endpoints for seamless exchange',
        'Unified patient record aggregation from external labs & hospital systems',
        'Secure RESTful developer portal for third-party tools',
        'Full alignment with international & regional interoperability mandates'
      ],
      specialties: ['Enterprise Networks', 'Hospitals', 'Digital Health Vendors'],
      roi: '100% data exchange compliance with zero custom middleware costs'
    },
    {
      id: 'drfirst',
      pillar: 'core',
      title: 'DoctorFirst e-Prescribing',
      subtitle: 'Intelligent e-Prescribing & Care Networking Solution',
      icon: FileText,
      badge: 'Core Clinical',
      summary: 'Empower clinicians with instant medication history, price transparency, and clinical decision support at the point of care.',
      features: [
        'Real-time prescription benefit checks & medication history',
        'Controlled substance e-prescribing (EPCS)',
        'Direct connection to retail & mail-order pharmacy networks',
        'Automated patient medication adherence alerts'
      ],
      specialties: ['Primary Care', 'Psychiatry', 'Cardiology', 'Internal Medicine'],
      roi: '90% reduction in pharmacy callbacks & prescription entry errors'
    },

    // Pillar 2: Virtual & Remote Care
    {
      id: 'telehealth',
      pillar: 'virtual',
      title: 'Telehealth & Telemedicine',
      subtitle: 'HD virtual visits with integrated clinical workflows & e-rx',
      icon: PhoneCall,
      badge: 'Virtual Care',
      summary: 'Browser-based, HD virtual consultations fully embedded within clinician EHR charting flows.',
      features: [
        'No download required for patients; click-to-join SMS links',
        'Virtual waiting room with dynamic triage intake forms',
        'In-visit split-screen documentation & device video streaming',
        'Multi-party visits for family members, translators, or specialists'
      ],
      specialties: ['Urgent Care', 'Behavioral Health', 'Pediatrics', 'Follow-ups'],
      roi: '25% increase in daily patient encounter capacity'
    },
    {
      id: 'tele-wound',
      pillar: 'virtual',
      title: 'Tele-Wound Care Platform',
      subtitle: 'AI-assisted wound measurement, tracking & specialist consultation',
      icon: Bandage,
      badge: 'Virtual Care',
      summary: 'Empower home health nurses and providers with precise digital wound mapping, surface area analysis, and treatment logging.',
      features: [
        'Computer vision wound perimeter & area measurement tool',
        'Tissue composition analysis (granulation, slough, eschar tracking)',
        'Longitudinal healing progression comparison timelines',
        'Remote wound specialist sign-off & treatment plan generation'
      ],
      specialties: ['Wound Care', 'Podiatry', 'Dermatology', 'Vascular Surgery'],
      roi: '50% faster wound resolution & reduced hospital readmissions'
    },
    {
      id: 'rpm',
      pillar: 'virtual',
      title: 'Remote Patient Monitoring (RPM)',
      subtitle: 'Continuous cellular device monitoring & clinical triage',
      icon: HeartPulse,
      badge: 'Virtual Care',
      summary: 'Keep high-risk chronic patients connected via pre-configured cellular blood pressure cuffs, glucometers, scales, and pulse oximeters.',
      features: [
        'Plug-and-play cellular devices (no home Wi-Fi setup needed)',
        'Automated out-of-range vital sign alerts & clinical escalation queues',
        'Time-tracking dashboard for automated CPT / reimbursement log generation',
        'Engaging patient mobile app for trend visualization'
      ],
      specialties: ['Cardiology', 'Endocrinology', 'Pulmonology', 'Primary Care'],
      roi: 'Avg. $120–$180 additional monthly recurring revenue per patient'
    },

    // Pillar 3: Value-Based & Chronic Care Management
    {
      id: 'ccm',
      pillar: 'value',
      title: 'Chronic Care Management (CCM)',
      subtitle: 'Structured non-face-to-face care coordination for complex patients',
      icon: Users,
      badge: 'Value-Based Care',
      summary: 'Turn chronic care coordination into a predictable revenue stream while keeping multi-condition patients out of the emergency room.',
      features: [
        'Comprehensive 24/7 care plan generation & multi-provider sync',
        'Automated time tracking for monthly care management billing thresholds',
        'Medication reconciliation & community resource coordination',
        'Dedicated nurse triage care management support tools'
      ],
      specialties: ['Primary Care', 'Geriatrics', 'Internal Medicine'],
      roi: 'Unlocks $65+ per patient/month in non-face-to-face reimbursement'
    },
    {
      id: 'apcm',
      pillar: 'value',
      title: 'Advanced Primary Care Management',
      subtitle: 'Holistic population health & risk stratification engine',
      icon: Sparkles,
      badge: 'Value-Based Care',
      summary: 'Transition smoothly into capitated & value-based contracts with proactive risk stratification and preventative gap closure.',
      features: [
        'Real-time population health risk scoring (HCC coding assistants)',
        'Payer gap-in-care identification & outreach automation',
        'Post-discharge care transition management workflows',
        'Value-based contract performance analytics'
      ],
      specialties: ['Primary Care Networks', 'ACOs', 'Family Medicine'],
      roi: 'Maximized ACO shared savings & improved quality score bonuses'
    },
    {
      id: 'cocm',
      pillar: 'value',
      title: 'Collaborative Care Model (CoCM)',
      subtitle: 'Psychiatric consultation integration within primary care settings',
      icon: Brain,
      badge: 'Value-Based Care',
      summary: 'Embed psychiatric registry tracking and consulting psychiatrist oversight into standard outpatient medical visits.',
      features: [
        'PHQ-9 and GAD-7 registry tracking with trend scoring',
        'Psychiatric consultant caseload review workspace',
        'Behavioral Health Care Manager task assignment & logging',
        'Automated CPT CoCM billing compliance tracking'
      ],
      specialties: ['Primary Care', 'Psychiatry', 'Behavioral Health Clinics'],
      roi: 'Generates up to $150/patient/month while expanding mental health access'
    },
    {
      id: 'bhi',
      pillar: 'value',
      title: 'Behavioral Health Integration (BHI)',
      subtitle: 'General behavioral health assessment & care management tools',
      icon: Stethoscope,
      badge: 'Value-Based Care',
      summary: 'Seamlessly screen, monitor, and treat common mental health conditions directly inside standard medical clinical workflows.',
      features: [
        'Standardized mental health screenings embedded in patient check-in',
        'Systematic follow-up tracking for depression & anxiety care plans',
        'Integrated psychotropic medication management templates',
        'Continuous care management timer for reimbursement compliance'
      ],
      specialties: ['Primary Care', 'Pediatrics', 'Women’s Health'],
      roi: 'Closes behavioral health gaps while diversifying clinic practice revenue'
    },

    // Pillar 4: Regulatory & Quality Compliance
    {
      id: 'mips',
      pillar: 'regulatory',
      title: 'MIPS Optimization Suite',
      subtitle: 'Merit-based Incentive Payment System score maximization',
      icon: Award,
      badge: 'CMS Qualified Registry',
      certBadge: 'CMS-REG-ID: QREG-88204',
      summary: 'Eliminate CMS penalty risks and maximize positive payment adjustments with real-time MIPS dashboard tracking.',
      features: [
        'Automated Quality, Promoting Interoperability & IA measure tracking',
        'Real-time provider score projections & performance benchmarking',
        'Direct CMS QRDA-III registry submission pipeline',
        'AI guidance to identify missed MIPS documentation opportunities'
      ],
      specialties: ['US Ambulatory Practices', 'Specialty Clinics', 'Hospitals'],
      roi: 'Protects up to 9% negative penalty and secures positive performance bonuses'
    },
    {
      id: 'mu3',
      pillar: 'regulatory',
      title: 'MU3 & Promoting Interoperability',
      subtitle: 'Certified EHR technology (CEHRT) compliance & reporting',
      icon: ShieldCheck,
      badge: 'Stage 3 CEHRT',
      certBadge: 'ONC-ACB Certified 2015',
      summary: 'Fulfill all Stage 3 Meaningful Use objectives, patient access API requirements, and electronic health exchange standards.',
      features: [
        'Full ONC-ATCB Certified EHR Technology infrastructure',
        'Secure FHIR-enabled patient access portal & API metrics',
        'Electronic public health reporting (immunization, syndromic, registries)',
        'Audit-ready reporting dashboards'
      ],
      specialties: ['Hospitals', 'Health Systems', 'Ambulatory Groups'],
      roi: 'Ensures 100% compliance with federal health IT mandates'
    },
    {
      id: 'nphies',
      pillar: 'regulatory',
      title: 'NPHIES & Saudi Vision 2030 Ready',
      subtitle: 'Direct integration with Saudi Arabia’s National Health Information Exchange',
      icon: Globe,
      badge: 'Saudi NPHIES Validated',
      certBadge: 'CHI KSA Compliant',
      summary: 'Purpose-built to support Council of Health Insurance (CHI) and Ministry of Health mandates for digital health transformation in KSA.',
      features: [
        'Direct NPHIES API integration for real-time eligibility & claims',
        'Saudi Ministry of Health (MoH) cloud deployment compliance',
        'Bilingual Arabic / English clinician & patient interface',
        'Health Cluster interoperability and referral pipeline support'
      ],
      specialties: ['Saudi Hospitals', 'KSA Medical Complexes', 'GCC Healthcare Chains'],
      roi: 'Instant pre-approval turnaround & accelerated insurance settlement in KSA'
    }
  ];

  // Filter Solutions
  const filteredSolutions = useMemo(() => {
    if (activeTab === 'all') return solutions;
    return solutions.filter(s => s.pillar === activeTab);
  }, [activeTab]);

  // Dynamic ROI Calculations
  const estimatedRpmPatients = Math.round((patientVolume * 0.3) * (rpmAdoption / 100));
  const estimatedCcmPatients = Math.round((patientVolume * 0.25) * (rpmAdoption / 100));
  
  // Avg monthly RPM revenue ~$120/pt, CCM ~$65/pt
  const monthlyRpmRevenue = estimatedRpmPatients * 125 * providerCount;
  const monthlyCcmRevenue = estimatedCcmPatients * 65 * providerCount;
  const totalMonthlyROI = monthlyRpmRevenue + monthlyCcmRevenue;
  const totalAnnualROI = totalMonthlyROI * 12;

  // Handle Form Submit
  const handleProductToggle = (id) => {
    setFormData(prev => {
      const exists = prev.selectedProducts.includes(id);
      if (exists) {
        return { ...prev, selectedProducts: prev.selectedProducts.filter(item => item !== id) };
      } else {
        return { ...prev, selectedProducts: [...prev.selectedProducts, id] };
      }
    });
  };

  const handleDocToggle = (doc) => {
    setFormData(prev => {
      const exists = prev.complianceDocs.includes(doc);
      if (exists) {
        return { ...prev, complianceDocs: prev.complianceDocs.filter(item => item !== doc) };
      } else {
        return { ...prev, complianceDocs: [...prev.complianceDocs, doc] };
      }
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-white">
      {/* BACKGROUND GRADIENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* HEADER / NAVIGATION */}
        <header className="sticky top-0 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 transition-all z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-teal-400 to-sky-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
                <Activity className="h-6 w-6 text-slate-950 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  OmniCare
                </span>
                <span className="text-xs font-semibold tracking-widest text-teal-400 block -mt-1 uppercase">
                  Digital Health
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              <a href="#solutions" className="hover:text-teal-400 transition-colors">Solutions</a>
              <a href="#certifications" className="hover:text-teal-400 transition-colors">Official Certifications</a>
              <a href="#specialties" className="hover:text-teal-400 transition-colors">Specialties</a>
              <a href="#compliance" className="hover:text-teal-400 transition-colors">Compliance & NPHIES</a>
              <a href="#roi-calculator" className="hover:text-teal-400 transition-colors">ROI Calculator</a>
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  const elem = document.getElementById('contact-demo');
                  elem?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-sky-500 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Schedule Demo
                <ChevronRight className="w-4 h-4 ml-1 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium mb-6 shadow-inner">
                <BadgeCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">ONC 2015 Cures Certified • CMS MIPS Registry • HL7® FHIR® R4</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                The Certified Operating System for{' '}
                <span className="bg-gradient-to-r from-teal-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  Modern Healthcare Delivery
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-8">
                Unify your EHR, Practice Management, Telehealth, RPM, and Care Management into a certified interoperable ecosystem. Tested and accredited for ONC Health IT, CMS MIPS 2026, MU3, and Saudi NPHIES data exchange.
              </p>

              {/* Certification Badges Ribbon in Hero */}
              <div className="flex flex-wrap justify-center items-center gap-3 mb-10 max-w-3xl mx-auto">
                <div className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-emerald-400" />
                  <span>ONC 2015 Edition Cures Update</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-sky-500/30 text-sky-300 text-xs font-bold flex items-center gap-2">
                  <Award className="w-4 h-4 text-sky-400" />
                  <span>CMS MIPS Qualified Registry</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-purple-500/30 text-purple-300 text-xs font-bold flex items-center gap-2">
                  <Server className="w-4 h-4 text-purple-400" />
                  <span>HL7® FHIR® R4 Validated</span>
                </div>
              </div>

              {/* Dual Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <button
                  onClick={() => {
                    const elem = document.getElementById('contact-demo');
                    elem?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-teal-400 via-teal-500 to-sky-500 text-slate-950 font-extrabold text-base shadow-xl shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Request Custom Demo
                </button>
                <button
                  onClick={() => {
                    const elem = document.getElementById('certifications');
                    elem?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-200 font-bold text-base hover:border-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  View Certification Details
                  <ArrowRight className="w-5 h-5 text-teal-400" />
                </button>
              </div>

              {/* System Badges / Capabilities Banner */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80 max-w-4xl mx-auto text-xs sm:text-sm font-semibold text-slate-400">
                <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-slate-900/40 border border-slate-800/50">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>EHR & PMS Integrated</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-slate-900/40 border border-slate-800/50">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Telehealth & RPM</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-slate-900/40 border border-slate-800/50">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>CCM / BHI / CoCM</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-slate-900/40 border border-slate-800/50">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>MIPS & NPHIES Ready</span>
                </div>
              </div>
            </div>

            {/* Metric Highlights */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { label: 'ONC Certified', value: '2015 Cures', sub: 'Drummond Group Tested' },
                { label: 'CMS Registry', value: 'MIPS 2026', sub: 'Direct Direct QRDA-III' },
                { label: 'Interoperability', value: 'FHIR R4', sub: 'Native API Architecture' },
                { label: 'Reimbursement Boost', value: '+$180', sub: 'Avg. per RPM patient / mo' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-2xl p-5 text-center hover:border-slate-700 transition-all">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1 bg-gradient-to-r from-teal-300 to-sky-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-200">{stat.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEDICATED OFFICIAL CERTIFICATIONS & ACCREDITATIONS SECTION */}
        <section id="certifications" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-y border-slate-800 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-3">
                <BadgeCheck className="w-4 h-4" />
                Verified & Audit-Ready
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Official Regulatory Certifications & Accreditations
              </h2>
              <p className="text-slate-400 mt-3 text-base">
                Engineered to meet the stringent technical, interoperability, and quality standards established by ONC, CMS, HL7®, and regional authorities like Saudi NPHIES.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group shadow-xl"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cert.badgeColor}`} />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-teal-400">
                        {cert.tag}
                      </span>
                      <ShieldCheck className="w-6 h-6 text-emerald-400" />
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors mb-2">
                      {cert.title}
                    </h3>

                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 mb-4 text-xs font-mono text-slate-400 flex items-center justify-between">
                      <span className="truncate">{cert.code}</span>
                      <FileCheck className="w-4 h-4 text-teal-400 shrink-0 ml-2" />
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      {cert.summary}
                    </p>

                    <div className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Certified Capabilities</div>
                      {cert.criteria.map((crit, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                          <span>{crit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-semibold mb-4">
                      {cert.impact}
                    </div>

                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="w-full py-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-teal-300 font-bold text-xs transition-all flex items-center justify-center gap-2"
                    >
                      <span>Explore Certification Matrix</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS NAVIGATOR SECTION */}
        <section id="solutions" className="py-20 bg-slate-900/40 border-y border-slate-800/60 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-3">Comprehensive Platform Suite</h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Modular HealthTech Built for Scale & Care Excellence
              </p>
              <p className="text-slate-400 mt-3 text-base">
                Deploy standalone modules or the complete unified clinical & financial ecosystem.
              </p>

              {/* Filter Tabs */}
              <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-950 border border-slate-800 max-w-2xl mx-auto">
                {[
                  { id: 'all', label: 'All Modules' },
                  { id: 'core', label: 'Core Clinical' },
                  { id: 'virtual', label: 'Virtual & RPM' },
                  { id: 'value', label: 'Value-Based Care' },
                  { id: 'regulatory', label: 'Compliance & Quality' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-teal-400 to-sky-500 text-slate-950 shadow-md font-bold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSolutions.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="group bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-12 w-12 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-teal-500/40 flex items-center justify-center text-teal-400 transition-colors">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-400">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs font-medium text-teal-400/90 mb-3">{item.subtitle}</p>
                      
                      {item.certBadge && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-mono mb-3">
                          <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{item.certBadge}</span>
                        </div>
                      )}

                      <p className="text-sm text-slate-400 line-clamp-3 mb-6 leading-relaxed">
                        {item.summary}
                      </p>

                      <div className="space-y-2 mb-6 border-t border-slate-800/60 pt-4">
                        {item.features.slice(0, 2).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-teal-300 font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Explore Feature Matrix</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CLINICAL SPECIALTIES SECTION */}
        <section id="specialties" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-3">Tailored Workflows</h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Designed for Key Clinical Specialties
              </p>
              <p className="text-slate-400 mt-3 text-base">
                Out-of-the-box clinical templates, custom vitals tracking, and specialty-specific decision support.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Primary Care & Internal Med',
                  icon: Stethoscope,
                  desc: 'Streamlined annual wellness visits, preventive gap closures, integrated EHR/PMS, and CCM/APCM automated tracking.'
                },
                {
                  title: 'Cardiology',
                  icon: HeartPulse,
                  desc: 'Cellular ECG & BP Remote Patient Monitoring (RPM), specialized cardiology templates, and risk stratification.'
                },
                {
                  title: 'Wound Care & Podiatry',
                  icon: Bandage,
                  desc: 'Computer vision tele-wound area calculation, ulcer progression tracking, and mobile nurse photo capture.'
                },
                {
                  title: 'Behavioral Health & Psychiatry',
                  icon: Brain,
                  desc: 'CoCM & BHI billing compliance, automated PHQ-9 / GAD-7 score registries, and tele-psychiatry HD sessions.'
                },
                {
                  title: 'Pediatrics & Family Medicine',
                  icon: Users,
                  desc: 'Immunization tracking, developmental milestone checklists, and rapid guardian portal scheduling.'
                },
                {
                  title: 'Multispecialty Health Clusters',
                  icon: Building2,
                  desc: 'Cross-facility patient record sharing, enterprise FHIR interoperability, and centralized revenue cycle management.'
                }
              ].map((spec, sIdx) => {
                const SpecIcon = spec.icon;
                return (
                  <div key={sIdx} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all">
                    <div className="h-10 w-10 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mb-4">
                      <SpecIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{spec.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{spec.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* COMPLIANCE & GLOBAL INTEROPERABILITY BANNER */}
        <section id="compliance" className="py-16 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold mb-4">
                    <ShieldCheck className="w-4 h-4" />
                    Global & Saudi Regulatory Readiness
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                    Full Compliance with NPHIES, MIPS, MU3 & HL7 FHIR
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    Whether operating in Saudi Arabia under Saudi Vision 2030 MoH mandates or managing US Medicare quality payment programs (MIPS/MU3), OmniCare guarantees total compliance, data privacy, and effortless interoperability.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-300">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>Saudi NPHIES Certified</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2">
                      <Server className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>HL7 FHIR R4 Ready</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>MIPS / MU3 CEHRT</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>HIPAA & GDPR Aligned</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>DrFirst Prescribing</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>Saudi MoH Cloud Hosting</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 shadow-inner">
                  <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-teal-400" />
                    Built for Regional Mandates
                  </h3>
                  <div className="space-y-3 text-xs text-slate-400">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80">
                      <div className="font-bold text-slate-200 mb-0.5">Saudi Arabia (NPHIES)</div>
                      Real-time insurance pre-authorizations, claims adjudication, and health cluster data sharing.
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80">
                      <div className="font-bold text-slate-200 mb-0.5">United States (CMS & ONC)</div>
                      MIPS Quality measure tracking, Promoting Interoperability (MU3), and DoctorFirst e-prescribing.
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80">
                      <div className="font-bold text-slate-200 mb-0.5">GCC & Global Markets</div>
                      Multi-currency, bilingual Arabic/English interfaces, and customizable regional coding standards (ICD-10-AM / ACHI / CPT).
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE ROI & REIMBURSEMENT CALCULATOR */}
        <section id="roi-calculator" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-semibold mb-3">
                <Calculator className="w-4 h-4" />
                Value Estimator
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Calculate Your Projected RPM & CCM Revenue Boost
              </h2>
              <p className="text-slate-400 mt-3 text-base">
                See how implementing Remote Patient Monitoring & Chronic Care Management can expand your practice revenue.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Sliders Column */}
                <div className="md:col-span-7 space-y-6">
                  {/* Slider 1: Providers */}
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm font-semibold mb-2">
                      <span className="text-slate-300">Number of Full-Time Providers</span>
                      <span className="text-teal-400 font-bold text-base">{providerCount}</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={providerCount}
                      onChange={(e) => setProviderCount(parseInt(e.target.value))}
                      className="w-full accent-teal-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                      <span>1 Solo Practitioner</span>
                      <span>50+ Group Practice</span>
                    </div>
                  </div>

                  {/* Slider 2: Patient Volume */}
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm font-semibold mb-2">
                      <span className="text-slate-300">Active Monthly Active Patient Base</span>
                      <span className="text-teal-400 font-bold text-base">{patientVolume.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="200"
                      max="10000"
                      step="100"
                      value={patientVolume}
                      onChange={(e) => setPatientVolume(parseInt(e.target.value))}
                      className="w-full accent-teal-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                      <span>200</span>
                      <span>10,000 Patients</span>
                    </div>
                  </div>

                  {/* Slider 3: Adoption Rate */}
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm font-semibold mb-2">
                      <span className="text-slate-300">Target RPM / CCM Patient Enrolment</span>
                      <span className="text-teal-400 font-bold text-base">{rpmAdoption}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="80"
                      step="5"
                      value={rpmAdoption}
                      onChange={(e) => setRpmAdoption(parseInt(e.target.value))}
                      className="w-full accent-teal-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                      <span>5% Conservative</span>
                      <span>80% High Adoption</span>
                    </div>
                  </div>
                </div>

                {/* Calculation Results Card */}
                <div className="md:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">
                      Estimated Additional Revenue
                    </span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-teal-400 tracking-tight my-2">
                      ${totalMonthlyROI.toLocaleString()}
                      <span className="text-xs font-normal text-slate-400 block mt-0.5">/ month</span>
                    </div>

                    <div className="my-4 py-3 border-y border-slate-800/80 space-y-2 text-xs text-slate-300">
                      <div className="flex justify-between">
                        <span>Est. RPM Enrolled Patients:</span>
                        <span className="font-bold text-white">{estimatedRpmPatients * providerCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Est. CCM Enrolled Patients:</span>
                        <span className="font-bold text-white">{estimatedCcmPatients * providerCount}</span>
                      </div>
                    </div>

                    <div className="text-sm font-bold text-slate-200 mb-1">
                      ${totalAnnualROI.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/ year</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const elem = document.getElementById('contact-demo');
                      elem?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-sky-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-lg shadow-teal-500/20"
                  >
                    Get Detailed ROI Breakdown
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* DEMO & LEAD CAPTURE SECTION */}
        <section id="contact-demo" className="py-20 bg-slate-900/60 border-t border-slate-800 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Info Column */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-2">Get Started</h2>
                  <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Schedule Your Custom Platform Walkthrough
                  </p>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  Connect with our clinical HealthTech advisors to evaluate your current setup, discuss NPHIES or MIPS readiness, and build your custom module package.
                </p>

                <div className="space-y-4 pt-4">
                  {[
                    { title: 'Tailored Live Demo', desc: 'Customized to your clinical specialty & provider count.' },
                    { title: 'Interoperability Audit', desc: 'Free assessment of FHIR, NPHIES, or HL7 migration paths.' },
                    { title: 'Turnkey Hardware Included', desc: 'Cellular RPM kits shipped pre-configured directly to patients.' }
                  ].map((item, iIdx) => (
                    <div key={iIdx} className="flex gap-3 text-xs">
                      <div className="h-6 w-6 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-200">{item.title}</div>
                        <div className="text-slate-400">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-2">
                  <div className="flex items-center gap-2 text-slate-200 font-bold">
                    <Globe className="w-4 h-4 text-teal-400" /> Regional Offices
                  </div>
                  <p>Riyadh, Saudi Arabia • Dubai, UAE • Boston, MA (USA)</p>
                </div>
              </div>

              {/* Right Form Column */}
              <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
                {formSubmitted ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="h-16 w-16 bg-teal-500/20 text-teal-400 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Demo & Compliance Request Received!</h3>
                    <p className="text-slate-400 text-sm max-w-md mx-auto">
                      Thank you for contacting OmniCare Digital Health. One of our HealthTech solutions specialists will reach out within 24 hours to provide your requested certification dossiers and schedule your live demo.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-850"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Dr. Sarah Al-Mansoor"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-800 focus:border-teal-400 rounded-xl px-4 py-2.5 text-xs text-white outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">Work Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="s.almansoor@hospital.com"
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-800 focus:border-teal-400 rounded-xl px-4 py-2.5 text-xs text-white outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">Organization / Practice Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Riyadh Specialty Clinic"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-800 focus:border-teal-400 rounded-xl px-4 py-2.5 text-xs text-white outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">Region / Location</label>
                        <select
                          value={formData.region}
                          onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-800 focus:border-teal-400 rounded-xl px-4 py-2.5 text-xs text-white outline-none transition-all"
                        >
                          <option>Saudi Arabia / GCC</option>
                          <option>United States</option>
                          <option>Europe / UK</option>
                          <option>Global / Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Products Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Select Modules of Interest (Multi-select)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {[
                          'EHR & PMS', 'Telehealth & Telemed', 'Tele-Wound',
                          'RPM', 'CCM / APCM', 'CoCM & BHI',
                          'FHIR Interoperability', 'DoctorFirst e-Rx', 'MIPS / NPHIES'
                        ].map((prod) => {
                          const isSelected = formData.selectedProducts.includes(prod);
                          return (
                            <button
                              type="button"
                              key={prod}
                              onClick={() => handleProductToggle(prod)}
                              className={`p-2 rounded-xl text-[11px] font-medium border text-left transition-all ${
                                isSelected
                                  ? 'bg-teal-500/10 border-teal-400 text-teal-300 font-bold'
                                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                              }`}
                            >
                              {prod}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Compliance Verification Documents Requested */}
                    <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                      <label className="block text-xs font-bold text-teal-400 uppercase tracking-wider">
                        Request Official Compliance Dossiers
                      </label>
                      <div className="space-y-2">
                        {[
                          'Request ONC Health IT 2015 Edition Certification Matrix',
                          'Request CMS MIPS 2026 Qualified Registry Portfolio',
                          'Request HL7® FHIR® R4 API Integration Documentation',
                          'Request Saudi NPHIES Compliance Whitepaper'
                        ].map((doc) => {
                          const isDocSelected = formData.complianceDocs.includes(doc);
                          return (
                            <label
                              key={doc}
                              onClick={() => handleDocToggle(doc)}
                              className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none hover:text-white"
                            >
                              <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                                isDocSelected ? 'bg-teal-400 border-teal-400 text-slate-950' : 'border-slate-700 bg-slate-950'
                              }`}>
                                {isDocSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <span>{doc}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-400 via-teal-500 to-sky-500 text-slate-950 font-bold text-sm shadow-xl shadow-teal-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Submit & Request Live Demo
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400 text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-lg">
                  <Activity className="h-5 w-5 text-teal-400" /> OmniCare Digital Health
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Next-generation health technology connecting providers, payers, and patients across unified care pathways.
                </p>
              </div>

              <div>
                <div className="font-bold text-slate-200 text-sm mb-3">Core Platform</div>
                <ul className="space-y-2">
                  <li><a href="#solutions" className="hover:text-teal-400">Electronic Health Records (EHR)</a></li>
                  <li><a href="#solutions" className="hover:text-teal-400">Practice Management (PMS)</a></li>
                  <li><a href="#solutions" className="hover:text-teal-400">DoctorFirst e-Prescribing</a></li>
                  <li><a href="#solutions" className="hover:text-teal-400">FHIR R4 Interoperability Engine</a></li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-slate-200 text-sm mb-3">Virtual & Care Management</div>
                <ul className="space-y-2">
                  <li><a href="#solutions" className="hover:text-teal-400">Telehealth & Virtual Care</a></li>
                  <li><a href="#solutions" className="hover:text-teal-400">Tele-Wound Monitoring</a></li>
                  <li><a href="#solutions" className="hover:text-teal-400">Remote Patient Monitoring (RPM)</a></li>
                  <li><a href="#solutions" className="hover:text-teal-400">CCM / APCM / CoCM / BHI</a></li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-slate-200 text-sm mb-3">Compliance & Governance</div>
                <ul className="space-y-2">
                  <li><a href="#compliance" className="hover:text-teal-400">Saudi Arabia NPHIES Integration</a></li>
                  <li><a href="#compliance" className="hover:text-teal-400">US CMS MIPS Quality Suite</a></li>
                  <li><a href="#compliance" className="hover:text-teal-400">Meaningful Use Stage 3 (MU3)</a></li>
                  <li><a href="#compliance" className="hover:text-teal-400">HIPAA & GDPR Compliance</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-4">
              <div>© {new Date().getFullYear()} OmniCare Digital Health Inc. All rights reserved.</div>
              <div className="flex gap-6">
                <a href="#privacy" className="hover:text-slate-300">Privacy Policy</a>
                <a href="#terms" className="hover:text-slate-300">Terms of Service</a>
                <a href="#security" className="hover:text-slate-300">Security Overview</a>
              </div>
            </div>
          </div>
        </footer>

        {/* CERTIFICATION EXPLORER MODAL */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white rounded-full bg-slate-950 border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <BadgeCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">{selectedCert.issuer}</span>
                  <h3 className="text-2xl font-bold text-white">{selectedCert.title}</h3>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 flex items-center justify-between">
                <span>Verification ID: {selectedCert.code}</span>
                <span className="text-emerald-400 font-bold">STATUS: ACTIVE</span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedCert.summary}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">Certified Criteria & Tested Capabilities</h4>
                <div className="space-y-2">
                  {selectedCert.criteria.map((crit, cIdx) => (
                    <div key={cIdx} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{crit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                <div className="text-xs font-bold text-emerald-300 uppercase tracking-wide">Business & Operational Benefit</div>
                <div className="text-sm font-semibold text-white">{selectedCert.impact}</div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-semibold text-xs hover:bg-slate-850"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedCert(null);
                    const elem = document.getElementById('contact-demo');
                    elem?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-sky-500 text-slate-950 font-bold text-xs shadow-md"
                >
                  Request Official Certification Dossier
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FEATURE MODAL VIEW */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white rounded-full bg-slate-950 border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center">
                  <selectedProduct.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">{selectedProduct.badge}</span>
                  <h3 className="text-2xl font-bold text-white">{selectedProduct.title}</h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProduct.summary}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">Detailed Feature Capabilities</h4>
                <div className="space-y-2">
                  {selectedProduct.features.map((feat, fIdx) => (
                    <div key={fIdx} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 space-y-1">
                <div className="text-xs font-bold text-teal-300 uppercase tracking-wide">Measured Financial & Clinical Impact</div>
                <div className="text-sm font-semibold text-white">{selectedProduct.roi}</div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-semibold text-xs hover:bg-slate-850"
                >
                  Close Window
                </button>
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    const elem = document.getElementById('contact-demo');
                    elem?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-sky-500 text-slate-950 font-bold text-xs shadow-md"
                >
                  Request Demo for {selectedProduct.title}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}