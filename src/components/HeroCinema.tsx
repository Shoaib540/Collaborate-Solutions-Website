import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Play } from 'lucide-react'
import { ehrMedia } from '../data/media'
import { useLanguage } from '../i18n'
import { DemoButton } from './DemoButton'
import { ProductMedia } from './ProductMedia'

export function HeroCinema() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden border-b border-[#e2e8f0] bg-[linear-gradient(165deg,#f8fafc_0%,#eef5f2_48%,#f8fafc_100%)] pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pb-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(26,107,79,0.08), transparent 40%), radial-gradient(circle at 80% 0%, rgba(15,61,46,0.06), transparent 35%)',
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d5e5de] bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#0f3d2e]">
            <BadgeCheck className="h-4 w-4 text-[#1a6b4f]" />
            {t.home.trustLine}
          </div>

          <p className="eyebrow mt-6">{t.brand.name}</p>
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

        <div>
          <ProductMedia url="app.collaboratesolutions.com/dashboard">
            <video
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
          </ProductMedia>
          <p className="mt-2 text-center text-[11px] font-medium text-[#64748b]">
            Unmute for Collaborate Solutions EHR overview narration · 16:9 product UI
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { src: ehrMedia.screens.chart, url: 'chart' },
              { src: ehrMedia.screens.schedule, url: 'schedule' },
              { src: ehrMedia.screens.billing, url: 'billing' },
            ].map((item) => (
              <div key={item.url} className="overflow-hidden rounded-lg border border-[#e2e8f0] bg-white">
                <div className="aspect-video">
                  <img src={item.src} alt="" className="h-full w-full object-cover object-top" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
