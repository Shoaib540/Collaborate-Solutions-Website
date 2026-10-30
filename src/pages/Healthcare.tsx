import { useMemo, useState, type FormEvent } from 'react'
import {
  Activity,
  Award,
  BadgeCheck,
  Bandage,
  Brain,
  Building2,
  Calculator,
  Check,
  CheckCircle2,
  ChevronRight,
  FileText,
  Globe,
  HeartPulse,
  PhoneCall,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  X,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { ComplianceBanner } from '../components/ComplianceBanner'
import { Seo } from '../components/Seo'
import { useLanguage } from '../i18n'
import {
  certifications,
  clinicalSpecialties,
  complianceDocs,
  demoBenefits,
  heroStats,
  moduleOptions,
  pillarTabs,
  solutions,
  type Certification,
  type Solution,
} from '../data/healthcare'
import { pillarTabsAr, solutionAr, specialtyAr } from '../data/healthcare.ar'
import { ehrMedia } from '../data/media'

const icons: Record<string, LucideIcon> = {
  ehr: Activity,
  pms: Building2,
  fhir: Server,
  drfirst: FileText,
  telehealth: PhoneCall,
  'tele-wound': Bandage,
  rpm: HeartPulse,
  ccm: Users,
  apcm: Sparkles,
  cocm: Brain,
  bhi: Stethoscope,
  mips: Award,
  mu3: ShieldCheck,
  nphies: Globe,
}

const specialtyIcons = [Stethoscope, HeartPulse, Bandage, Brain, Users, Building2]

function localizeSolution(item: Solution, locale: string): Solution {
  if (locale !== 'ar') return item
  const ar = solutionAr[item.id]
  if (!ar) return item
  return {
    ...item,
    title: ar.title,
    subtitle: ar.subtitle,
    summary: ar.summary,
    features: ar.features,
    roi: ar.roi,
    badge: ar.badge,
  }
}

export function Healthcare() {
  const { t, locale } = useLanguage()
  const [activeTab, setActiveTab] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState<Solution | null>(null)
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)
  const [providerCount, setProviderCount] = useState(5)
  const [patientVolume, setPatientVolume] = useState(1200)
  const [rpmAdoption, setRpmAdoption] = useState(25)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    organization: '',
    region: 'Saudi Arabia / GCC',
    selectedProducts: [] as string[],
    complianceDocs: [] as string[],
  })

  const filtered = useMemo(() => {
    const base = activeTab === 'all' ? solutions : solutions.filter((s) => s.pillar === activeTab)
    return base.map((s) => localizeSolution(s, locale))
  }, [activeTab, locale])

  const estimatedRpmPatients = Math.round(patientVolume * 0.3 * (rpmAdoption / 100))
  const estimatedCcmPatients = Math.round(patientVolume * 0.25 * (rpmAdoption / 100))
  const monthlyRpmRevenue = estimatedRpmPatients * 125 * providerCount
  const monthlyCcmRevenue = estimatedCcmPatients * 65 * providerCount
  const totalMonthlyROI = monthlyRpmRevenue + monthlyCcmRevenue
  const totalAnnualROI = totalMonthlyROI * 12

  const toggleProduct = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedProducts: prev.selectedProducts.includes(id)
        ? prev.selectedProducts.filter((x) => x !== id)
        : [...prev.selectedProducts, id],
    }))
  }

  const toggleDoc = (doc: string) => {
    setFormData((prev) => ({
      ...prev,
      complianceDocs: prev.complianceDocs.includes(doc)
        ? prev.complianceDocs.filter((x) => x !== doc)
        : [...prev.complianceDocs, doc],
    }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="bg-[#f4f1ea]">
      <Seo title={t.ehr.seoTitle} description={t.ehr.seoDesc} path="/ehr" />
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#d5dcd4] bg-[#081c15] pt-28 pb-16 text-[#faf8f4] sm:pt-32 sm:pb-20">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover opacity-40"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={ehrMedia.productHero}
          >
            <source src={ehrMedia.clinicVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(100deg,#081c15_0%,rgba(8,28,21,0.88)_55%,rgba(8,28,21,0.7)_100%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c6a75e]/35 bg-[#081c15]/60 px-3.5 py-1.5 text-xs font-semibold text-[#e6d5a8]">
            <BadgeCheck className="h-4 w-4" />
            {t.home.trustLine}
          </div>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#c6a75e]">{t.ehr.eyebrow}</p>
          <h1
            className="mt-3 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {t.ehr.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#faf8f4]/80 sm:text-lg">
            {t.ehr.body}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['ONC 2015 Edition Cures Update', 'CMS MIPS Qualified Registry', 'HL7® FHIR® R4 Validated'].map(
              (badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#faf8f4]/15 bg-[#081c15]/70 px-3 py-1.5 text-xs font-bold text-[#e6d5a8]"
                >
                  <BadgeCheck className="h-3.5 w-3.5" />
                  {badge}
                </span>
              ),
            )}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact-demo" className="btn-gold">
              {t.cta.demo}
            </a>
            <a href="#certifications" className="btn-ghost">
              {t.cta.viewCerts}
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 border-t border-[#faf8f4]/15 pt-6 text-xs font-semibold text-[#faf8f4]/75 sm:grid-cols-4 sm:text-sm">
            {['EHR & PMS Integrated', 'Telehealth & RPM', 'CCM / BHI / CoCM', 'MIPS & NPHIES Ready'].map(
              (item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg border border-[#faf8f4]/10 bg-[#081c15]/45 p-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#c6a75e]" />
                  {item}
                </div>
              ),
            )}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-[#faf8f4]/12 bg-[#081c15]/55 p-4 text-center">
                <div className="text-2xl font-semibold text-[#e6d5a8] sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-bold text-[#faf8f4] sm:text-sm">{stat.label}</div>
                <div className="text-[11px] text-[#faf8f4]/55">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="border-b border-[#d5dcd4] bg-[#e8eee9]/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1b4332]/15 bg-white px-3.5 py-1.5 text-xs font-bold text-[#1b4332]">
                <BadgeCheck className="h-4 w-4" />
                Verified & Audit-Ready
              </div>
              <h2 className="section-title mt-4">Official Regulatory Certifications & Accreditations</h2>
              <p className="prose-muted mt-3">
                Engineered to meet the stringent technical, interoperability, and quality standards established by
                ONC, CMS, HL7®, and regional authorities like Saudi NPHIES.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {certifications.map((cert) => (
              <Reveal key={cert.id}>
                <article className="group relative flex h-full flex-col overflow-hidden border border-[#d5dcd4] bg-white shadow-[0_12px_40px_-28px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-[#1b4332]/35 hover:shadow-[0_20px_50px_-28px_rgba(27,67,50,0.45)]">
                  <div className={`h-1.5 w-full ${cert.accent === 'gold' ? 'bg-[#c6a75e]' : 'bg-[#1b4332]'}`} />
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-3">
                      <span className="bg-[#1b4332] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#faf8f4]">
                        {cert.tag}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center bg-[#e8eee9] text-[#1b4332]">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="mt-5 text-[1.2rem] font-extrabold leading-snug text-black">
                      {cert.title}
                    </h3>
                    <div className="mt-3 flex items-center justify-between gap-2 border border-[#d5dcd4] bg-[#faf8f4] px-3 py-2 font-mono text-[11px] text-black">
                      <span className="truncate">{cert.code}</span>
                      <FileText className="h-3.5 w-3.5 shrink-0 text-[#1b4332]" />
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-black">{cert.summary}</p>
                    <div className="mt-5 flex-1 space-y-2.5 border-t border-[#d5dcd4] pt-4">
                      <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#1b4332]">
                        Certified Capabilities
                      </div>
                      {cert.criteria.map((c) => (
                        <div key={c} className="flex items-start gap-2 text-xs leading-snug text-black">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1b4332]" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 border-l-4 border-[#c6a75e] bg-[#f4f1ea] px-3 py-2.5 text-xs font-semibold text-black">
                      {cert.impact}
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="mt-5 flex w-full items-center justify-center gap-2 bg-[#1b4332] py-3 text-xs font-bold text-[#faf8f4] transition hover:bg-[#081c15]"
                    >
                      Explore Certification Matrix
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="border-b border-[#d5dcd4] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Comprehensive Platform Suite</p>
              <h2 className="section-title mt-3">Modular HealthTech Built for Scale & Care Excellence</h2>
              <p className="prose-muted mt-3">
                Deploy standalone modules or the complete unified clinical & financial ecosystem.
              </p>
              <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2 rounded-2xl border border-[#d5dcd4] bg-white p-1.5">
                {pillarTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-xl px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                      activeTab === tab.id
                        ? 'bg-[#1b4332] text-[#faf8f4]'
                        : 'text-black hover:bg-[#e8eee9] hover:text-black'
                    }`}
                  >
                    {locale === 'ar' ? pillarTabsAr[tab.id] ?? tab.label : tab.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((item) => {
              const Icon = icons[item.id] ?? Activity
              return (
                <article
                  key={item.id}
                  className="group relative flex h-full flex-col justify-between overflow-hidden border border-[#d5dcd4] bg-white transition hover:-translate-y-0.5 hover:border-[#1b4332]/40 hover:shadow-[0_18px_40px_-24px_rgba(27,67,50,0.4)]"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-[#c6a75e] opacity-0 transition group-hover:opacity-100" />
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-11 w-11 items-center justify-center bg-[#1b4332] text-[#faf8f4] transition group-hover:bg-[#081c15]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="border border-[#d5dcd4] bg-[#faf8f4] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-black">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-extrabold leading-snug text-black group-hover:text-[#1b4332]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs font-semibold text-[#8a7340]">{item.subtitle}</p>
                    {item.certBadge && (
                      <div className="mt-3 inline-flex items-center gap-1.5 bg-[#e8eee9] px-2.5 py-1 font-mono text-[11px] font-semibold text-[#1b4332]">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        {item.certBadge}
                      </div>
                    )}
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-black">{item.summary}</p>
                    <div className="mt-4 space-y-2 border-t border-[#d5dcd4] pt-4">
                      {item.features.slice(0, 2).map((f) => (
                        <div key={f} className="flex items-start gap-2 text-xs text-black">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1b4332]" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(item)}
                    className="mx-6 mb-6 flex items-center justify-center gap-1.5 border border-[#1b4332] py-2.5 text-xs font-bold text-[#1b4332] transition hover:bg-[#1b4332] hover:text-[#faf8f4]"
                  >
                    Explore Feature Matrix <ChevronRight className="h-4 w-4" />
                  </button>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section id="specialties" className="border-b border-[#d5dcd4] bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Tailored Workflows</p>
              <h2 className="section-title mt-3">Designed for Key Clinical Specialties</h2>
              <p className="prose-muted mt-3">
                Out-of-the-box clinical templates, custom vitals tracking, and specialty-specific decision support.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clinicalSpecialties.map((spec, i) => {
              const Icon = specialtyIcons[i] ?? Stethoscope
              const ar = specialtyAr[spec.title]
              const photo = [
                ehrMedia.modules[0],
                ehrMedia.modules[2],
                ehrMedia.surgery,
                ehrMedia.modules[3],
                ehrMedia.patient,
                ehrMedia.modules[1],
              ][i]
              return (
                <article
                  key={spec.title}
                  className="overflow-hidden border border-[#d5dcd4] bg-[#faf8f4] transition hover:border-[#1b4332]/35 hover:bg-white hover:shadow-[0_14px_36px_-24px_rgba(27,67,50,0.4)]"
                >
                  <img src={photo} alt="" className="aspect-[16/9] w-full object-cover" />
                  <div className="p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center bg-[#1b4332] text-[#faf8f4]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-extrabold text-black">
                      {locale === 'ar' && ar ? ar.title : spec.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-black">
                      {locale === 'ar' && ar ? ar.desc : spec.desc}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <div id="compliance">
        <ComplianceBanner showCta={false} />
      </div>

      {/* ROI */}
      <section id="roi-calculator" className="border-b border-[#d5dcd4] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5dcd4] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1b4332]">
              <Calculator className="h-4 w-4" />
              Value Estimator
            </div>
            <h2 className="section-title mt-4">Calculate Your Projected RPM & CCM Revenue Boost</h2>
            <p className="prose-muted mt-3">
              See how implementing Remote Patient Monitoring & Chronic Care Management can expand your practice revenue.
            </p>
          </div>
          <div className="mx-auto max-w-4xl rounded-3xl border border-[#d5dcd4] bg-white p-6 shadow-xl sm:p-10">
            <div className="grid items-center gap-8 md:grid-cols-12">
              <div className="space-y-6 md:col-span-7">
                <div>
                  <div className="mb-2 flex justify-between text-xs font-semibold sm:text-sm">
                    <span className="text-black">Number of Full-Time Providers</span>
                    <span className="text-base font-bold text-[#1b4332]">{providerCount}</span>
                  </div>
                  <input type="range" min={1} max={50} value={providerCount} onChange={(e) => setProviderCount(+e.target.value)} className="h-2 w-full cursor-pointer accent-[#1b4332]" />
                  <div className="mt-1 flex justify-between text-[10px] text-black/80">
                    <span>1 Solo Practitioner</span>
                    <span>50+ Group Practice</span>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-xs font-semibold sm:text-sm">
                    <span className="text-black">Active Monthly Active Patient Base</span>
                    <span className="text-base font-bold text-[#1b4332]">{patientVolume.toLocaleString()}</span>
                  </div>
                  <input type="range" min={200} max={10000} step={100} value={patientVolume} onChange={(e) => setPatientVolume(+e.target.value)} className="h-2 w-full cursor-pointer accent-[#1b4332]" />
                  <div className="mt-1 flex justify-between text-[10px] text-black/80">
                    <span>200</span>
                    <span>10,000 Patients</span>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-xs font-semibold sm:text-sm">
                    <span className="text-black">Target RPM / CCM Patient Enrolment</span>
                    <span className="text-base font-bold text-[#1b4332]">{rpmAdoption}%</span>
                  </div>
                  <input type="range" min={5} max={80} step={5} value={rpmAdoption} onChange={(e) => setRpmAdoption(+e.target.value)} className="h-2 w-full cursor-pointer accent-[#1b4332]" />
                  <div className="mt-1 flex justify-between text-[10px] text-black/80">
                    <span>5% Conservative</span>
                    <span>80% High Adoption</span>
                  </div>
                </div>
              </div>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-[#d5dcd4] bg-[#081c15] p-6 text-center text-[#faf8f4] md:col-span-5">
                <div>
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#faf8f4]/55">
                    Estimated Additional Revenue
                  </span>
                  <div className="my-2 text-3xl font-semibold tracking-tight text-[#e6d5a8] sm:text-4xl">
                    ${totalMonthlyROI.toLocaleString()}
                    <span className="mt-0.5 block text-xs font-normal text-[#faf8f4]/55">/ month</span>
                  </div>
                  <div className="my-4 space-y-2 border-y border-[#faf8f4]/15 py-3 text-xs text-[#faf8f4]/75">
                    <div className="flex justify-between">
                      <span>Est. RPM Enrolled Patients:</span>
                      <span className="font-bold text-white">{estimatedRpmPatients * providerCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Est. CCM Enrolled Patients:</span>
                      <span className="font-bold text-white">{estimatedCcmPatients * providerCount}</span>
                    </div>
                  </div>
                  <div className="mb-1 text-sm font-bold">
                    ${totalAnnualROI.toLocaleString()}{' '}
                    <span className="text-xs font-normal text-[#faf8f4]/55">/ year</span>
                  </div>
                </div>
                <a href="#contact-demo" className="btn-gold mt-4 w-full text-xs uppercase tracking-wider">
                  Get Detailed ROI Breakdown
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO FORM */}
      <section id="contact-demo" className="bg-[#e8eee9]/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <div>
                <p className="eyebrow">Get Started</p>
                <h2 className="section-title mt-2">Schedule Your Custom Platform Walkthrough</h2>
              </div>
              <p className="prose-muted text-sm">
                Connect with our clinical HealthTech advisors to evaluate your current setup, discuss NPHIES or MIPS
                readiness, and build your custom module package.
              </p>
              <div className="space-y-4 pt-2">
                {demoBenefits.map((item) => (
                  <div key={item.title} className="flex gap-3 text-xs">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1b4332]/10 text-[#1b4332]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-black">{item.title}</div>
                      <div className="text-black">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-2 rounded-2xl border border-[#d5dcd4] bg-white p-4 text-xs text-black">
                <div className="flex items-center gap-2 font-bold text-black">
                  <Globe className="h-4 w-4 text-[#1b4332]" /> Regional Offices
                </div>
                <p>Riyadh, Saudi Arabia • Dubai, UAE • Boston, MA (USA)</p>
              </div>
            </div>

            <div className="relative rounded-3xl border border-[#d5dcd4] bg-white p-6 shadow-xl sm:p-10 lg:col-span-7">
              {formSubmitted ? (
                <div className="space-y-4 py-16 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1b4332]/10 text-[#1b4332]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">
                    Demo & Compliance Request Received!
                  </h3>
                  <p className="mx-auto max-w-md text-sm text-black">
                    Thank you for contacting Collaborate Solutions. One of our HealthTech solutions specialists will
                    reach out within 24 hours to provide your requested certification dossiers and schedule your live demo.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="rounded-xl border border-[#d5dcd4] bg-[#f4f1ea] px-6 py-2.5 text-xs font-bold text-black"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold text-black">Full Name *</span>
                      <input required placeholder="Dr. Sarah Al-Mansoor" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full rounded-xl border border-[#d5dcd4] bg-[#f4f1ea] px-4 py-2.5 text-xs outline-none focus:border-[#1b4332]" />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold text-black">Work Email *</span>
                      <input required type="email" placeholder="s.almansoor@hospital.com" value={formData.workEmail} onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })} className="w-full rounded-xl border border-[#d5dcd4] bg-[#f4f1ea] px-4 py-2.5 text-xs outline-none focus:border-[#1b4332]" />
                    </label>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold text-black">Organization / Practice Name *</span>
                      <input required placeholder="Riyadh Specialty Clinic" value={formData.organization} onChange={(e) => setFormData({ ...formData, organization: e.target.value })} className="w-full rounded-xl border border-[#d5dcd4] bg-[#f4f1ea] px-4 py-2.5 text-xs outline-none focus:border-[#1b4332]" />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold text-black">Region / Location</span>
                      <select value={formData.region} onChange={(e) => setFormData({ ...formData, region: e.target.value })} className="w-full rounded-xl border border-[#d5dcd4] bg-[#f4f1ea] px-4 py-2.5 text-xs outline-none focus:border-[#1b4332]">
                        <option>Saudi Arabia / GCC</option>
                        <option>United States</option>
                        <option>Europe / UK</option>
                        <option>Global / Other</option>
                      </select>
                    </label>
                  </div>
                  <div>
                    <span className="mb-2 block text-xs font-semibold text-black">Select Modules of Interest (Multi-select)</span>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {moduleOptions.map((prod) => {
                        const on = formData.selectedProducts.includes(prod)
                        return (
                          <button key={prod} type="button" onClick={() => toggleProduct(prod)} className={`rounded-xl border p-2 text-left text-[11px] font-medium transition ${on ? 'border-[#1b4332] bg-[#1b4332]/10 font-bold text-[#1b4332]' : 'border-[#d5dcd4] bg-[#f4f1ea] text-black hover:border-[#1b4332]/40'}`}>
                            {prod}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                  <div className="space-y-3 rounded-2xl border border-[#d5dcd4] bg-[#f4f1ea]/80 p-4">
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#1b4332]">
                      Request Official Compliance Dossiers
                    </span>
                    <div className="space-y-2">
                      {complianceDocs.map((doc) => {
                        const on = formData.complianceDocs.includes(doc)
                        return (
                          <button key={doc} type="button" onClick={() => toggleDoc(doc)} className="flex w-full cursor-pointer items-center gap-2 text-left text-xs text-black hover:text-[#1b4332]">
                            <span className={`flex h-4 w-4 items-center justify-center rounded border ${on ? 'border-[#1b4332] bg-[#1b4332] text-white' : 'border-[#5c675f]/40 bg-white'}`}>
                              {on && <Check className="h-3 w-3 stroke-[3]" />}
                            </span>
                            <span>{doc}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                  <button type="submit" className="btn-primary w-full py-3.5">
                    <Send className="h-4 w-4" />
                    Submit & Request Live Demo
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CERT MODAL */}
      {selectedCert && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#081c15]/80 p-4 backdrop-blur-md">
          <div className="relative max-h-[90vh] w-full max-w-2xl space-y-6 overflow-y-auto rounded-3xl border border-[#d5dcd4] bg-white p-6 shadow-2xl sm:p-8">
            <button type="button" onClick={() => setSelectedCert(null)} className="absolute top-6 right-6 rounded-full border border-[#d5dcd4] bg-[#f4f1ea] p-2 text-black">
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-3 pr-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#1b4332]/15 bg-[#e8eee9] text-[#1b4332]">
                <BadgeCheck className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1b4332]">{selectedCert.issuer}</span>
                <h3 className="text-2xl font-bold text-black">{selectedCert.title}</h3>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-[#d5dcd4] bg-[#f4f1ea] p-3 font-mono text-xs text-black">
              <span>Verification ID: {selectedCert.code}</span>
              <span className="font-bold text-[#1b4332]">STATUS: ACTIVE</span>
            </div>
            <p className="text-sm leading-relaxed text-black">{selectedCert.summary}</p>
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-black">Certified Criteria & Tested Capabilities</h4>
              <div className="space-y-2">
                {selectedCert.criteria.map((c) => (
                  <div key={c} className="flex items-center gap-3 rounded-xl border border-[#d5dcd4] bg-[#f4f1ea] p-3 text-xs text-black">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1b4332]" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-1 rounded-xl border border-[#1b4332]/15 bg-[#e8eee9] p-4">
              <div className="text-xs font-bold uppercase tracking-wide text-[#1b4332]">Business & Operational Benefit</div>
              <div className="text-sm font-semibold text-black">{selectedCert.impact}</div>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button type="button" onClick={() => setSelectedCert(null)} className="rounded-xl border border-[#d5dcd4] bg-[#f4f1ea] px-5 py-2.5 text-xs font-semibold text-black">Close</button>
              <a href="#contact-demo" onClick={() => setSelectedCert(null)} className="btn-primary !py-2.5 !text-xs">Request Official Certification Dossier</a>
            </div>
          </div>
        </div>
      )}

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#081c15]/80 p-4 backdrop-blur-md">
          <div className="relative max-h-[90vh] w-full max-w-2xl space-y-6 overflow-y-auto rounded-3xl border border-[#d5dcd4] bg-white p-6 shadow-2xl sm:p-8">
            <button type="button" onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 rounded-full border border-[#d5dcd4] bg-[#f4f1ea] p-2 text-black">
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-3 pr-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#1b4332]/15 bg-[#e8eee9] text-[#1b4332]">
                {(() => {
                  const Icon = icons[selectedProduct.id] ?? Activity
                  return <Icon className="h-6 w-6" />
                })()}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1b4332]">{selectedProduct.badge}</span>
                <h3 className="text-2xl font-bold text-black">{selectedProduct.title}</h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-black">{selectedProduct.summary}</p>
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-black">Detailed Feature Capabilities</h4>
              <div className="space-y-2">
                {selectedProduct.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 rounded-xl border border-[#d5dcd4] bg-[#f4f1ea] p-3 text-xs text-black">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1b4332]" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-1 rounded-xl border border-[#1b4332]/15 bg-[#e8eee9] p-4">
              <div className="text-xs font-bold uppercase tracking-wide text-[#1b4332]">Measured Financial & Clinical Impact</div>
              <div className="text-sm font-semibold text-black">{selectedProduct.roi}</div>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button type="button" onClick={() => setSelectedProduct(null)} className="rounded-xl border border-[#d5dcd4] bg-[#f4f1ea] px-5 py-2.5 text-xs font-semibold text-black">Close Window</button>
              <a href="#contact-demo" onClick={() => setSelectedProduct(null)} className="btn-primary !py-2.5 !text-xs">
                Request Demo for {selectedProduct.title}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
