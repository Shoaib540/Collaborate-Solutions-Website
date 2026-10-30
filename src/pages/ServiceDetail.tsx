import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { CtaBand } from '../components/CtaBand'
import { Seo } from '../components/Seo'
import { services } from '../data/services'

export function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  const related = services.filter((s) => s.slug !== slug).slice(0, 3)

  if (!service) return <Navigate to="/services" replace />

  return (
    <>
      <Seo title={service.title} description={service.summary} path={`/services/${service.slug}`} />
      <PageHero
        eyebrow="Service"
        title={service.title}
        subtitle={service.summary}
        image={service.image}
      />

      {/* Overview */}
      <section className="border-b border-[#d5dcd4] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8a7340]">
              {service.short}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              How we deliver {service.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-black">{service.overview}</p>
            <p className="mt-4 text-base leading-relaxed text-black">
              <span className="font-bold">Best fit for: </span>
              {service.audience}
            </p>
            {service.stack && (
              <div className="mt-6 flex flex-wrap gap-2">
                {service.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[#d5dcd4] bg-white px-3 py-1.5 text-xs font-bold text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-5">
            <img
              src={service.image}
              alt={service.title}
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Process — unique steps */}
      <section className="border-b border-[#d5dcd4] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8a7340]">
              Our process
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              From kickoff to measurable results
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {service.process.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.04}>
                <article className="h-full border border-[#d5dcd4] bg-[#faf8f4] p-6">
                  <div className="text-sm font-extrabold text-[#1b4332]">{item.step}</div>
                  <h3 className="mt-2 text-xl font-bold text-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + Outcomes */}
      <section className="border-b border-[#d5dcd4] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-black sm:text-3xl">What you receive</h2>
            <ul className="mt-6 space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-black">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1b4332]" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-2xl font-extrabold text-black sm:text-3xl">Outcomes we aim for</h2>
            <ul className="mt-6 space-y-3">
              {service.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-black">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#c6a75e]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl border border-[#1b4332]/20 bg-[#e8eee9] p-5">
              <p className="text-sm font-bold text-black">Core capabilities included</p>
              <ul className="mt-3 space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="text-sm text-black">
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-b border-[#d5dcd4] bg-[#f4f1ea] py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-extrabold text-black">Ready to start {service.title}?</h2>
            <p className="mt-2 text-sm text-black">
              Tell us your goals — we’ll reply with a clear next step and timeline.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Talk to us <ArrowRight className="h-4 w-4" />
            </Link>
            {service.slug === 'healthcare-it' && (
              <Link
                to="/healthcare"
                className="inline-flex items-center rounded-md border border-[#1b4332] px-5 py-3 text-sm font-bold text-[#1b4332]"
              >
                Open Healthcare Platform
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-black sm:text-3xl">Related services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="group border border-[#d5dcd4] bg-white transition hover:border-[#1b4332]/40"
              >
                <img src={item.image} alt="" className="aspect-[16/10] w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-black group-hover:text-[#1b4332]">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-black">{item.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#1b4332]">
                    View details <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
