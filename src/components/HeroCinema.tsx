import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Play } from 'lucide-react'
import { ehrMedia } from '../data/media'
import { useLanguage } from '../i18n'
import { DemoButton } from './DemoButton'

export function HeroCinema() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden border-b border-[#e2e8f0] bg-[#f8fafc] pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pb-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d5e5de] bg-white px-3 py-1.5 text-xs font-semibold text-[#0f3d2e]">
            <BadgeCheck className="h-4 w-4 text-[#1a6b4f]" />
            {t.home.trustLine}
          </div>

          <p className="eyebrow mt-6">{t.home.eyebrow}</p>
          <h1 className="mt-3 text-[2.2rem] font-bold leading-[1.12] tracking-tight text-[#0f172a] sm:text-5xl lg:text-[3.15rem] text-balance">
            {t.home.heroTitle}{' '}
            <span className="text-[#1a6b4f]">{t.home.heroTitleAccent}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#475569] sm:text-lg">
            {t.home.heroBody}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <DemoButton className="btn-primary">
              {t.cta.demo}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </DemoButton>
            <Link to="/ehr" className="btn-ghost">
              <Play className="h-4 w-4 fill-current" />
              {t.cta.exploreEhr}
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-xl border border-[#e2e8f0] bg-[#0a2a20] shadow-[0_30px_80px_-40px_rgba(15,61,46,0.55)]">
            <video
              className="aspect-[16/10] w-full object-cover object-top"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="auto"
              poster={ehrMedia.heroPoster}
            >
              <source src={ehrMedia.heroVideo} type="video/mp4" />
            </video>
            <p className="pointer-events-none absolute bottom-12 start-3 rounded bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white sm:bottom-14">
              Unmute for EHR overview narration
            </p>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[ehrMedia.screens.chart, ehrMedia.screens.schedule, ehrMedia.screens.billing].map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="aspect-[16/10] w-full border border-[#e2e8f0] object-cover object-top"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
