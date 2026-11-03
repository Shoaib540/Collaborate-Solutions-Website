import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { HeroCinema } from '../components/HeroCinema'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { ehrMedia } from '../data/media'
import { useLanguage } from '../i18n'

export function Home() {
  const { t } = useLanguage()

  return (
    <div className="bg-white">
      <Seo title={t.home.seoTitle} description={t.home.seoDesc} path="/" />
      <HeroCinema />

      <section className="border-b border-[#e2e8f0] py-14 sm:py-16">
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
                  className="group flex h-full flex-col overflow-hidden border border-[#e2e8f0] bg-white transition hover:border-[#0f3d2e]/35 hover:shadow-[0_18px_40px_-28px_rgba(15,61,46,0.35)]"
                >
                  <img
                    src={ehrMedia.pillars[i]}
                    alt={pillar.title}
                    className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  />
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

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/ehr" className="btn-primary">
              {t.cta.exploreEhr}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
            <Link to="/markets" className="btn-ghost">
              {t.nav.markets}
            </Link>
            <Link to="/contact" className="btn-ghost">
              {t.cta.demo}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
