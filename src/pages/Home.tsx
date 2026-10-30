import { Link } from 'react-router-dom'
import { ArrowUpRight, CheckCircle2, Star } from 'lucide-react'
import { HeroCinema } from '../components/HeroCinema'
import { ComplianceBanner } from '../components/ComplianceBanner'
import { Partners } from '../components/Partners'
import { Reveal } from '../components/Reveal'
import { CtaBand } from '../components/CtaBand'
import { Seo } from '../components/Seo'
import { offerPillars, services, testimonials, whyUs } from '../data/services'

export function Home() {
  return (
    <div>
      <Seo
        title="Collaborate Solutions | Professional IT Solutions"
        description="Collaborate Solutions — IT, digital marketing, software, call center, and certified Healthcare IT partner in Lahore."
        path="/"
      />
      <HeroCinema />
      <ComplianceBanner />

      {/* We Offer — improved */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(198,167,94,0.14),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1.4fr] lg:items-end">
            <Reveal>
              <p className="eyebrow">We Offer</p>
              <h2 className="section-title mt-3 text-balance">
                A Complete Package For Your Business
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-black">
                You have to look no further. Collaborate Solutions is the one-stop partner for your needs —
                bridging the gap between business goals and operational excellence.
              </p>
              <Link to="/services" className="btn-primary mt-8">
                Explore what we deliver <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {offerPillars.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <article className="group h-full border border-[#d5dcd4] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#1b4332]/35 hover:shadow-[0_18px_40px_-28px_rgba(27,67,50,0.45)]">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-extrabold tracking-[0.16em] text-[#c6a75e]">
                        {item.step}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wide text-[#1b4332]">
                        {item.hint}
                      </span>
                    </div>
                    <div className="mt-4 h-1 w-10 bg-[#1b4332] transition group-hover:w-16 group-hover:bg-[#c6a75e]" />
                    <h3 className="mt-4 text-xl font-extrabold leading-snug text-black">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-black">{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d5dcd4] bg-[#e8eee9]/55 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Our Services</p>
                <h2 className="section-title mt-3">From digital innovation to healthcare solutions</h2>
                <p className="prose-muted mt-3 max-w-xl">
                  Comprehensive services designed to grow your business and streamline operations.
                </p>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#1b4332] hover:text-[#2d6a4f]"
              >
                All services <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.04}>
                <Link to={`/services/${service.slug}`} className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="aspect-[5/3.4] w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-[1.55rem] font-extrabold text-black transition group-hover:text-[#1b4332]">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-[#8a7340]">{service.short}</p>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-black">
                        {service.summary}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[#1b4332] opacity-50 transition group-hover:opacity-100" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden">
              <video
                className="aspect-[16/11] w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/media/images/healthcare-ops.jpg"
              >
                <source src="/media/videos/hero-team.mp4" type="video/mp4" />
                <source src="/media/videos/hero-office.mp4" type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081c15]/35 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow">Healthcare IT Platform</p>
            <h2 className="section-title mt-3 text-balance">
              Certified clinical systems for modern care delivery
            </h2>
            <p className="prose-muted mt-4">
              Unify EHR, Practice Management, Telehealth, RPM, and Care Management into a certified interoperable
              ecosystem — ONC Health IT, CMS MIPS 2026, MU3, and Saudi NPHIES ready.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                'ONC 2015 Cures Certified • HL7® FHIR® R4',
                'CMS MIPS Qualified Registry & Promoting Interoperability',
                'Interactive RPM / CCM revenue calculator & demo request',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-black">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1b4332]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/healthcare" className="btn-primary mt-9">
              Open full platform suite <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#d5dcd4] bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="section-title mt-3">Features that you will love</h2>
            <p className="prose-muted mt-3 max-w-2xl">
              Count on us as your reliable partner, dedicated to delivering high-quality services on time and within budget.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article>
                  <img src={item.image} alt="" className="aspect-[4/3] w-full object-cover" />
                  <h3 className="mt-6 text-2xl font-extrabold text-[#1b4332]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow">Customers Feedback</p>
            <h2 className="section-title mt-3">Read what our clients think</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <blockquote className="flex h-full flex-col border border-[#d5dcd4] bg-white p-7 shadow-sm">
                  <div className="flex gap-1 text-[#c6a75e]">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-black">“{t.quote}”</p>
                  <footer className="mt-7 border-t border-[#d5dcd4] pt-4">
                    <div className="font-semibold text-black">{t.name}</div>
                    <div className="text-xs text-black">{t.role}</div>
                    <div className="mt-1 text-[11px] font-medium text-[#8a7340]">{t.date}</div>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners moved to end (before final CTA) */}
      <Partners />
      <CtaBand />
    </div>
  )
}
