import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'
import { site } from '../data/site'

export function HeroCinema() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#081c15]">
      <div className="absolute inset-0">
        <video
          key="hero-office"
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/media/images/hero-workspace.jpg"
        >
          <source src="/media/videos/hero-team.mp4" type="video/mp4" />
          <source src="/media/videos/hero-office.mp4" type="video/mp4" />
        </video>
        {/* Lighter overlays so video stays visible */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,28,21,0.78)_0%,rgba(8,28,21,0.45)_48%,rgba(8,28,21,0.2)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,28,21,0.75)_0%,transparent_38%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-24 lg:px-8">
        <div className="max-w-3xl rounded-2xl border border-white/10 bg-[#081c15]/45 p-6 shadow-2xl backdrop-blur-md sm:p-8">
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#e6d5a8]">
            {site.name} · {site.tagline}
          </p>

          <h1 className="mt-4 text-[2.4rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.5rem] text-balance">
            Cutting-edge IT solutions for business excellence
          </h1>

          <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-white/90 sm:text-lg">
            At Collaborate Solutions, we bridge the gap between your business goals and operational
            excellence — innovative IT, marketing, and certified healthcare systems from a trusted partner.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/contact" className="btn-gold">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/healthcare" className="btn-ghost">
              <Play className="h-4 w-4 fill-current" />
              Explore Healthcare IT
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
