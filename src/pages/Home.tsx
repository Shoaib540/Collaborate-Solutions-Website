import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Building2, Globe2, Quote } from 'lucide-react'
import { HeroCinema } from '../components/HeroCinema'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { DemoButton } from '../components/DemoButton'
import { CtaBand } from '../components/CtaBand'
import { ProductMedia } from '../components/ProductMedia'
import { ehrMedia } from '../data/media'
import { useLanguage } from '../i18n'

/**
 * Home = marketing landing (athenahealth-style):
 * hero → pillars → outcomes → markets teaser → proof → CTA
 * Deep product modules live on /ehr — not duplicated here.
 */
export function Home() {
  const { t } = useLanguage()

  return (
    <div className="bg-white">
      <Seo title={t.home.seoTitle} description={t.home.seoDesc} path="/" />
      <HeroCinema />

      {/* Trust strip */}
      <section className="border-b border-[#e2e8f0] bg-white py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-4 sm:gap-3 sm:px-6 lg:px-8">
          {t.badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 rounded-md border border-[#e2e8f0] bg-[#f8fafc] px-3 py-1.5 text-[11px] font-semibold text-[#0f3d2e] sm:text-xs"
            >
              <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-[#1a6b4f]" />
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* Pillars → link into EHR product page */}
      <section className="border-b border-[#e2e8f0] py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow">{t.home.pillarsEyebrow}</p>
            <h2 className="section-title mt-3 max-w-3xl">{t.home.pillarsTitle}</h2>
            <p className="prose-muted mt-3 max-w-2xl">{t.home.pillarsBody}</p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.04}>
                <Link
                  to="/ehr#solutions"
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#e2e8f0] bg-white transition hover:border-[#0f3d2e]/30 hover:shadow-[0_18px_40px_-28px_rgba(15,61,46,0.35)]"
                >
                  <div className="aspect-video overflow-hidden bg-[#f1f5f4]">
                    <img
                      src={ehrMedia.pillars[i]}
                      alt={pillar.title}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-[#0f172a]">{pillar.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#475569]">{pillar.text}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0f3d2e]">
                      {pillar.cta} <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/ehr" className="btn-primary">
              {t.cta.exploreEhr}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-b border-[#e2e8f0] bg-[#f8fafc] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow">{t.home.outcomesEyebrow}</p>
            <h2 className="section-title mt-3 max-w-3xl">{t.home.outcomesTitle}</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.outcomes.map((o, i) => (
              <Reveal key={o.label} delay={i * 0.04}>
                <div className="h-full rounded-xl border border-[#e2e8f0] bg-white p-5">
                  <div className="text-3xl font-bold tracking-tight text-[#0f3d2e]">{o.value}</div>
                  <div className="mt-1 text-sm font-bold text-[#0f172a]">{o.label}</div>
                  <p className="mt-2 text-xs leading-relaxed text-[#64748b]">{o.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Markets teaser */}
      <section className="border-b border-[#e2e8f0] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow">{t.home.marketsEyebrow}</p>
            <h2 className="section-title mt-3 max-w-3xl">{t.home.marketsTitle}</h2>
            <p className="prose-muted mt-3 max-w-2xl">{t.home.marketsBody}</p>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <article className="overflow-hidden rounded-xl border border-[#e2e8f0] bg-white">
                <div className="aspect-video bg-[#f1f5f4]">
                  <img src={ehrMedia.screens.dashboard} alt="" className="h-full w-full object-cover object-top" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#0f3d2e]">
                    <Building2 className="h-5 w-5" />
                    <h3 className="text-xl font-bold text-[#0f172a]">{t.home.usTitle}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">{t.home.usBody}</p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.05}>
              <article className="overflow-hidden rounded-xl border border-[#e2e8f0] bg-white">
                <div className="aspect-video bg-[#f1f5f4]">
                  <img src={ehrMedia.screens.interop} alt="" className="h-full w-full object-cover object-top" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#0f3d2e]">
                    <Globe2 className="h-5 w-5" />
                    <h3 className="text-xl font-bold text-[#0f172a]">{t.home.gulfTitle}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">{t.home.gulfBody}</p>
                </div>
              </article>
            </Reveal>
          </div>
          <Link to="/markets" className="btn-ghost mt-8 inline-flex">
            {t.nav.markets}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>

      {/* Why + product proof shot */}
      <section className="border-b border-[#e2e8f0] bg-[#f8fafc] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <Reveal>
            <p className="eyebrow">{t.home.whyEyebrow}</p>
            <h2 className="section-title mt-3">{t.home.whyTitle}</h2>
            <p className="prose-muted mt-3">{t.home.whyBody}</p>
            <div className="mt-8 space-y-4">
              {t.whyItems.map((item) => (
                <div key={item.title} className="rounded-xl border border-[#e2e8f0] bg-white p-4">
                  <h3 className="text-sm font-bold text-[#0f172a]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#475569]">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/ehr" className="btn-primary">
                {t.cta.exploreEhr}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
              <DemoButton className="btn-ghost">{t.cta.demo}</DemoButton>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <ProductMedia url="app.collaboratesolutions.com/analytics">
              <img src={ehrMedia.screens.billing} alt="Collaborate Solutions revenue analytics" />
            </ProductMedia>
            <div className="mt-4 rounded-xl border border-[#e2e8f0] bg-white p-5">
              <Quote className="h-5 w-5 text-[#1a6b4f]" />
              <p className="mt-2 text-sm leading-relaxed text-[#334155]">
                Scheduling, charting, billing, and NPHIES exchange in one Collaborate Solutions workspace —
                built for US ambulatory teams and bilingual Gulf clinics.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
