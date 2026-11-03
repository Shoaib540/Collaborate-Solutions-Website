import { Link } from 'react-router-dom'
import { Building2, Globe2, ArrowRight } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { CtaBand } from '../components/CtaBand'
import { Seo } from '../components/Seo'
import { ehrMedia } from '../data/media'
import { useLanguage } from '../i18n'

export function Markets() {
  const { t } = useLanguage()

  return (
    <>
      <Seo
        title={`${t.nav.markets} | Collaborate Solutions`}
        description={t.home.marketsBody}
        path="/markets"
      />
      <PageHero
        eyebrow={t.home.marketsEyebrow}
        title={t.home.marketsTitle}
        subtitle={t.home.marketsBody}
        image={ehrMedia.screens.interop}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <article className="h-full overflow-hidden border border-[#e2e8f0] bg-white">
              <img src={ehrMedia.screens.dashboard} alt="" className="aspect-[16/9] w-full object-cover object-top" />
              <div className="p-7">
                <div className="flex items-center gap-2 text-[#0f3d2e]">
                  <Building2 className="h-5 w-5" />
                  <h2 className="text-2xl font-bold">{t.home.usTitle}</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{t.home.usBody}</p>
                <ul className="mt-5 space-y-2 text-sm text-[#334155]">
                  <li>• ONC-aligned documentation & FHIR patient access</li>
                  <li>• CMS MIPS / Promoting Interoperability workflows</li>
                  <li>• DoctorFirst e-prescribing & ambulatory billing</li>
                </ul>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.05}>
            <article className="h-full overflow-hidden border border-[#e2e8f0] bg-white">
              <img src={ehrMedia.screens.interop} alt="" className="aspect-[16/9] w-full object-cover object-top" />
              <div className="p-7">
                <div className="flex items-center gap-2 text-[#0f3d2e]">
                  <Globe2 className="h-5 w-5" />
                  <h2 className="text-2xl font-bold">{t.home.gulfTitle}</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{t.home.gulfBody}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[t.markets.saudi, t.markets.uae, t.markets.bahrain, t.markets.qatar, t.markets.kuwait].map(
                    (m) => (
                      <span
                        key={m}
                        className="rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-2.5 py-1 text-[11px] font-semibold text-[#0f3d2e]"
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
      </section>

      <section className="border-y border-[#e2e8f0] bg-[#f8fafc] py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="max-w-xl text-sm text-[#475569]">{t.home.demoBody}</p>
          <Link to="/ehr" className="btn-primary shrink-0">
            {t.cta.exploreEhr}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
