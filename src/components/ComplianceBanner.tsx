import { Globe, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'
import { complianceBadges, regionalMandates } from '../data/healthcare'

type Props = {
  showCta?: boolean
}

export function ComplianceBanner({ showCta = true }: Props) {
  return (
    <section className="border-y border-[#d5dcd4] bg-[#081c15] py-14 text-[#faf8f4] sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-[#faf8f4]/12 bg-[#0f241c] p-7 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-[#c6a75e]/15 blur-3xl" />
            <div className="relative grid items-start gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c6a75e]/35 bg-[#081c15] px-3 py-1 text-xs font-bold text-[#e6d5a8]">
                  <ShieldCheck className="h-4 w-4" />
                  Global & Saudi Regulatory Readiness
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
                  Full Compliance with NPHIES, MIPS, MU3 & HL7 FHIR
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#faf8f4]/85 sm:text-base">
                  Whether operating in Saudi Arabia under Saudi Vision 2030 MoH mandates or managing US Medicare
                  quality payment programs (MIPS/MU3), Collaborate Solutions guarantees total compliance, data
                  privacy, and effortless interoperability.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-2.5 text-xs font-semibold sm:grid-cols-3">
                  {complianceBadges.map((badge) => (
                    <div
                      key={badge}
                      className="flex items-center gap-2 rounded-lg border border-[#faf8f4]/12 bg-[#081c15]/85 p-3"
                    >
                      <Globe className="h-4 w-4 shrink-0 text-[#c6a75e]" />
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>
                {showCta && (
                  <Link to="/healthcare#compliance" className="btn-gold mt-8 inline-flex">
                    Explore Healthcare Compliance
                  </Link>
                )}
              </div>
              <div className="rounded-xl border border-[#faf8f4]/12 bg-[#081c15]/90 p-5 lg:col-span-5">
                <h3 className="mb-4 flex items-center gap-2 text-base font-bold">
                  <Sparkles className="h-4 w-4 text-[#c6a75e]" />
                  Built for Regional Mandates
                </h3>
                <div className="space-y-3 text-xs text-[#faf8f4]/70">
                  {regionalMandates.map((m) => (
                    <div key={m.title} className="rounded-lg border border-[#faf8f4]/10 bg-[#0f241c] p-3.5">
                      <div className="mb-1 font-bold text-[#faf8f4]">{m.title}</div>
                      {m.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
