import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { CtaBand } from '../components/CtaBand'
import { Seo } from '../components/Seo'
import { services } from '../data/services'

export function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Digital marketing, web & software development, call center, healthcare IT, medical billing, and credentialing."
        path="/services"
      />
      <PageHero
        eyebrow="Services"
        title="Solutions matched to how you grow"
        subtitle="From digital marketing and software to healthcare IT and revenue cycle — a complete delivery partner."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 2) * 0.05}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group grid gap-5 border border-[#d5dcd4] bg-white p-4 transition hover:border-[#1b4332]/35 sm:grid-cols-[1.05fr_1fr] sm:p-5"
                >
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt=""
                      className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-extrabold tracking-tight text-black group-hover:text-[#1b4332] sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-1 text-sm font-bold text-[#8a7340]">{service.short}</p>
                    <p className="mt-3 text-sm leading-relaxed text-black">{service.summary}</p>
                    <ul className="mt-4 space-y-1.5">
                      {service.points.slice(0, 3).map((p) => (
                        <li key={p} className="text-xs font-medium text-black">
                          • {p}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#1b4332]">
                      View full details <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
