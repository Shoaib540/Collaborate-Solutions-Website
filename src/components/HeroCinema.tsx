import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Play } from 'lucide-react'
import { ehrMedia } from '../data/media'
import { useLanguage } from '../i18n'

export function HeroCinema() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#081c15]">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={ehrMedia.heroPoster}
        >
          <source src={ehrMedia.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,28,21,0.88)_0%,rgba(8,28,21,0.55)_48%,rgba(8,28,21,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,28,21,0.8)_0%,transparent_40%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-24 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e6d5a8]/35 bg-[#081c15]/55 px-3.5 py-1.5 text-xs font-semibold text-[#e6d5a8] backdrop-blur-sm">
            <BadgeCheck className="h-4 w-4 text-[#c6a75e]" />
            {t.home.trustLine}
          </div>

          <p className="mt-5 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#e6d5a8]">
            {t.home.eyebrow}
          </p>

          <h1 className="mt-3 text-[2.35rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.45rem] text-balance">
            {t.home.heroTitle}{' '}
            <span className="text-[#e6d5a8]">{t.home.heroTitleAccent}</span>
          </h1>

          <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-white/90 sm:text-lg">
            {t.home.heroBody}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/contact" className="btn-gold">
              {t.cta.demo}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
            <Link to="/ehr" className="btn-ghost">
              <Play className="h-4 w-4 fill-current" />
              {t.cta.exploreEhr}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
