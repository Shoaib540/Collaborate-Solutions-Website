import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { CtaBand } from '../components/CtaBand'
import { Seo } from '../components/Seo'
import { aboutIntro, leadership, timeline } from '../data/about'

export function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Collaborate Solutions — journey from 2021 to DHA Phase 8 Lahore, leadership, and partnership culture."
        path="/about"
      />
      <PageHero
        eyebrow="About Us"
        title="A premier IT company built on partnership"
        subtitle={aboutIntro.body}
        image="/media/images/about-office.jpg"
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img
              src="/media/images/about-office.jpg"
              alt="Collaborate Solutions office"
              className="aspect-[16/11] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-3xl font-extrabold sm:text-4xl text-black">{aboutIntro.title}</h2>
            <p className="mt-4 leading-relaxed text-black">{aboutIntro.body}</p>
            <p className="mt-6 text-sm font-semibold text-[#1b4332]">
              From seven people in 2021 to a full delivery organization in DHA Phase 8 — growth with purpose.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#d5dcd4] bg-[#e8eee9]/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow">Our Journey</p>
            <h2 className="section-title mt-3">A journey of growth</h2>
          </Reveal>
          <div className="mt-12 space-y-0">
            {timeline.map((item, i) => (
              <Reveal key={item.date} delay={i * 0.05}>
                <div className="grid gap-4 border-t border-[#d5dcd4] py-8 md:grid-cols-[180px_1fr]">
                  <div className="text-sm font-bold text-[#8a7340]">{item.date}</div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#1b4332]">{item.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm text-black">{item.text}</p>
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
            <p className="eyebrow">Leadership</p>
            <h2 className="section-title mt-3">The people behind the work</h2>
            <p className="mt-3 max-w-2xl text-sm text-black">
              Official portraits can replace the current licensed stand-ins anytime — drop files into{' '}
              <code className="rounded bg-[#e8eee9] px-1">public/media/team/</code>.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {leadership.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.06}>
                <article className="overflow-hidden border border-[#d5dcd4] bg-white">
                  <img src={person.image} alt={person.name} className="aspect-[4/5] w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-extrabold text-black">{person.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#8a7340]">{person.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-black">{person.bio}</p>
                  </div>
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
