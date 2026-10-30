import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './Reveal'

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[#1b4332] py-20 text-[#faf8f4]">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-[#c6a75e] blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#2d6a4f] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#e6d5a8]">Let’s Collaborate</p>
            <h2
              className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl text-balance"
            >
              Empower Your Vision, with Our Proven Strategies
            </h2>
            <p className="mt-4 max-w-xl text-[#faf8f4]/80">
              Let’s Collaborate for Success and explore the limitless possibilities to elevate your business to new heights.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold">
                Join Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-ghost">
                View Services
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
