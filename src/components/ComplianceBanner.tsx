import { Globe, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'
import { complianceBadges, regionalMandates } from '../data/healthcare'
import { useLanguage } from '../i18n'

type Props = {
  showCta?: boolean
}

export function ComplianceBanner({ showCta = true }: Props) {
  const { t, locale } = useLanguage()

  const title =
    locale === 'ar'
      ? 'امتثال كامل لـ NPHIES وMIPS وMU3 وHL7 FHIR'
      : 'Full compliance with NPHIES, MIPS, MU3 & HL7 FHIR'

  const body =
    locale === 'ar'
      ? 'سواء كنت تعمل في السعودية وفق متطلبات وزارة الصحة ورؤية 2030 أو تدير برامج جودة Medicare الأمريكية، يضمن Collaborate EHR الامتثال وخصوصية البيانات والتشغيل البيني.'
      : 'Whether you operate under Saudi Vision 2030 MoH mandates or US Medicare quality programs, Collaborate EHR is built for compliance, privacy, and clean interoperability.'

  const badge = locale === 'ar' ? 'جاهزية تنظيمية أمريكية وسعودية' : 'US & Saudi regulatory readiness'
  const regionalTitle = locale === 'ar' ? 'مصمم للمتطلبات الإقليمية' : 'Built for regional mandates'

  return (
    <section className="border-y border-[#e2e8f0] bg-[#f8fafc] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-8 border border-[#e2e8f0] bg-white p-7 sm:p-10 lg:grid-cols-12 lg:p-12">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d5e5de] bg-[#f1f5f4] px-3 py-1 text-xs font-bold text-[#0f3d2e]">
                <ShieldCheck className="h-4 w-4" />
                {badge}
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl text-balance">{title}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#475569] sm:text-base">{body}</p>
              <div className="mt-6 grid grid-cols-2 gap-2.5 text-xs font-semibold sm:grid-cols-3">
                {complianceBadges.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-md border border-[#e2e8f0] bg-[#f8fafc] p-3 text-[#0f172a]"
                  >
                    <Globe className="h-4 w-4 shrink-0 text-[#1a6b4f]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              {showCta && (
                <Link to="/ehr#compliance" className="btn-primary mt-8 inline-flex">
                  {t.cta.viewCerts}
                </Link>
              )}
            </div>
            <div className="border border-[#e2e8f0] bg-[#f8fafc] p-5 lg:col-span-5">
              <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-[#0f172a]">
                <Sparkles className="h-4 w-4 text-[#1a6b4f]" />
                {regionalTitle}
              </h3>
              <div className="space-y-3 text-xs text-[#475569]">
                {regionalMandates.map((m) => (
                  <div key={m.title} className="rounded-md border border-[#e2e8f0] bg-white p-3.5">
                    <div className="mb-1 font-bold text-[#0f172a]">{m.title}</div>
                    {m.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
