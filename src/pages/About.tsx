import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { CtaBand } from '../components/CtaBand'
import { Seo } from '../components/Seo'
import { leadership, timeline } from '../data/about'
import { ehrMedia } from '../data/media'
import { useLanguage } from '../i18n'

export function About() {
  const { t, locale } = useLanguage()

  return (
    <>
      <Seo title={t.about.seoTitle} description={t.about.seoDesc} path="/about" />
      <PageHero
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        subtitle={t.about.subtitle}
        image={ehrMedia.aboutHero}
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img
              src={ehrMedia.about}
              alt=""
              className="aspect-[16/11] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-3xl font-extrabold text-black sm:text-4xl">{t.about.whoTitle}</h2>
            <p className="mt-4 leading-relaxed text-black">{t.about.whoBody}</p>
            <p className="mt-6 text-sm font-semibold text-[#1b4332]">{t.about.growthNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#d5dcd4] bg-[#e8eee9]/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow">{t.about.journeyEyebrow}</p>
            <h2 className="section-title mt-3">{t.about.journeyTitle}</h2>
          </Reveal>
          <div className="mt-12 space-y-0">
            {timeline.map((item, i) => (
              <Reveal key={item.date} delay={i * 0.05}>
                <div className="grid gap-4 border-t border-[#d5dcd4] py-8 md:grid-cols-[180px_1fr]">
                  <div className="text-sm font-bold text-[#8a7340]">{item.date}</div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#1b4332]">
                      {locale === 'ar' ? item.titleAr : item.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm text-black">
                      {locale === 'ar' ? item.textAr : item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow">{t.about.teamEyebrow}</p>
            <h2 className="section-title mt-3">{t.about.teamTitle}</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {leadership.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.05}>
                <article>
                  <img src={person.image} alt={person.name} className="aspect-[4/5] w-full object-cover" />
                  <h3 className="mt-5 text-xl font-extrabold text-black">{person.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#8a7340]">
                    {locale === 'ar' ? person.roleAr : person.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-black">
                    {locale === 'ar' ? person.bioAr : person.bio}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
