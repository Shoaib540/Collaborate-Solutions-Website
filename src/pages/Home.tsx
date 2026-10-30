import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Globe2,
  ShieldCheck,
} from 'lucide-react'
import { HeroCinema } from '../components/HeroCinema'
import { ComplianceBanner } from '../components/ComplianceBanner'
import { EhrShowcase } from '../components/EhrShowcase'
import { Reveal } from '../components/Reveal'
import { CtaBand } from '../components/CtaBand'
import { Seo } from '../components/Seo'
import { certifications, heroStats } from '../data/healthcare'
import { ehrMedia } from '../data/media'
import { useLanguage } from '../i18n'

export function Home() {
  const { t } = useLanguage()

  return (
    <div>
      <Seo title={t.home.seoTitle} description={t.home.seoDesc} path="/" />
      <HeroCinema />
      <ComplianceBanner />
      <EhrShowcase />

      <section className="border-b border-[#d5dcd4] bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 sm:px-6 lg:px-8">
          {t.badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full border border-[#d5dcd4] bg-[#faf8f4] px-3.5 py-1.5 text-xs font-bold text-[#1b4332]"
            >
              <BadgeCheck className="h-3.5 w-3.5 text-[#c6a75e]" />
              {badge}
            </span>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow">{t.home.marketsEyebrow}</p>
            <h2 className="section-title mt-3 max-w-3xl text-balance">{t.home.marketsTitle}</h2>
            <p className="prose-muted mt-4 max-w-2xl">{t.home.marketsBody}</p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="relative overflow-hidden border border-[#d5dcd4] bg-white">
                <img src={ehrMedia.usMarket} alt="" className="aspect-[16/9] w-full object-cover" />
                <div className="p-7 sm:p-8">
                  <div className="flex items-center gap-2 text-[#1b4332]">
                    <Building2 className="h-5 w-5" />
                    <h3 className="text-2xl font-extrabold">{t.home.usTitle}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-black">{t.home.usBody}</p>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#8a7340]">
                    {t.markets.us}
                  </p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.06}>
              <article className="relative overflow-hidden border border-[#d5dcd4] bg-white">
                <img src={ehrMedia.gulfMarket} alt="" className="aspect-[16/9] w-full object-cover" />
                <div className="p-7 sm:p-8">
                  <div className="flex items-center gap-2 text-[#1b4332]">
                    <Globe2 className="h-5 w-5" />
                    <h3 className="text-2xl font-extrabold">{t.home.gulfTitle}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-black">{t.home.gulfBody}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[t.markets.saudi, t.markets.uae, t.markets.bahrain, t.markets.qatar, t.markets.kuwait].map(
                      (m) => (
                        <span
                          key={m}
                          className="rounded-full border border-[#d5dcd4] bg-[#faf8f4] px-2.5 py-1 text-[11px] font-bold text-[#1b4332]"
                        >
                          {m}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d5dcd4] bg-[#e8eee9]/55 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">{t.home.modulesEyebrow}</p>
                <h2 className="section-title mt-3 max-w-2xl">{t.home.modulesTitle}</h2>
                <p className="prose-muted mt-3 max-w-xl">{t.home.modulesBody}</p>
              </div>
              <Link
                to="/ehr#solutions"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#1b4332] hover:text-[#2d6a4f]"
              >
                {t.cta.exploreEhr} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {t.moduleHighlights.map((mod, i) => (
              <Reveal key={mod.title} delay={i * 0.04}>
                <Link to="/ehr#solutions" className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={ehrMedia.modules[i]}
                      alt=""
                      className="aspect-[5/3.4] w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                    />
                  </div>
                  <h3 className="mt-5 text-[1.45rem] font-extrabold text-black transition group-hover:text-[#1b4332]">
                    {mod.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black">{mod.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow">{t.home.whyEyebrow}</p>
            <h2 className="section-title mt-3 max-w-3xl">{t.home.whyTitle}</h2>
            <p className="prose-muted mt-4 max-w-2xl">{t.home.whyBody}</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {t.whyItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="h-full border border-[#d5dcd4] bg-white p-7">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1b4332]" />
                    <div>
                      <h3 className="text-xl font-extrabold text-black">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-black">{item.text}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d5dcd4] bg-[#081c15] py-20 text-[#faf8f4] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c6a75e]">{t.home.certsEyebrow}</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              {t.home.certsTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#faf8f4]/75">{t.home.certsBody}</p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-2xl font-extrabold text-[#e6d5a8]">{stat.value}</div>
                <div className="mt-1 text-sm font-bold">{stat.label}</div>
                <div className="mt-1 text-xs text-[#faf8f4]/55">{stat.sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {certifications.map((cert) => (
              <article key={cert.id} className="border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#c6a75e]">
                    {cert.tag}
                  </span>
                  <ShieldCheck className="h-5 w-5 text-[#e6d5a8]" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold leading-snug">{cert.shortName}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#faf8f4]/72">{cert.summary}</p>
              </article>
            ))}
          </div>

          <Link to="/ehr#certifications" className="btn-gold mt-10 inline-flex">
            {t.cta.viewCerts} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBand
        eyebrow={t.home.demoEyebrow}
        title={t.home.demoTitle}
        body={t.home.demoBody}
        ctaLabel={t.cta.demo}
        ctaTo="/contact"
      />
    </div>
  )
}
