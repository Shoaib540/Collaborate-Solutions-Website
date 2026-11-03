import { ArrowRight, MonitorSmartphone } from 'lucide-react'
import { ehrMedia } from '../data/media'
import { useLanguage } from '../i18n'
import { Reveal } from './Reveal'
import { DemoButton } from './DemoButton'
import { ProductMedia } from './ProductMedia'

const tour = [
  { src: ehrMedia.screens.dashboard, label: 'Analytics dashboard' },
  { src: ehrMedia.screens.chart, label: 'Clinical chart' },
  { src: ehrMedia.screens.schedule, label: 'Scheduling' },
  { src: ehrMedia.screens.billing, label: 'Revenue graphs' },
  { src: ehrMedia.screens.telehealth, label: 'Telehealth' },
  { src: ehrMedia.screens.interop, label: 'FHIR / NPHIES' },
]

export function EhrShowcase() {
  const { t, locale } = useLanguage()

  const title =
    locale === 'ar' ? 'جولة واجهة Collaborate Solutions EHR' : 'Collaborate Solutions EHR product tour'
  const body =
    locale === 'ar'
      ? 'شاشات منتج حقيقية بنسبة 16:9 — لوحة تحليلات، مخطط المريض، المواعيد، رسوم الفوترة، والتبادل.'
      : 'Real 16:9 product screens — analytics charts, patient charting, scheduling, billing graphs, telehealth, and national exchange.'

  return (
    <section className="border-b border-[#e2e8f0] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-3 py-1.5 text-xs font-bold text-[#0f3d2e]">
              <MonitorSmartphone className="h-3.5 w-3.5" />
              {locale === 'ar' ? 'عرض المنتج' : 'Product UI tour'}
            </div>
            <h2 className="section-title mt-4 text-balance">{title}</h2>
            <p className="prose-muted mt-4 max-w-md">{body}</p>
            <DemoButton className="btn-primary mt-8">
              {t.cta.demo}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </DemoButton>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-8">
            <ProductMedia url="app.collaboratesolutions.com/tour">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                poster={ehrMedia.clinicPoster}
              >
                <source src={ehrMedia.clinicVideo} type="video/mp4" />
              </video>
            </ProductMedia>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {tour.map((item) => (
                <figure key={item.label} className="overflow-hidden rounded-lg border border-[#e2e8f0] bg-white">
                  <div className="aspect-video">
                    <img src={item.src} alt={item.label} className="h-full w-full object-cover object-top" />
                  </div>
                  <figcaption className="border-t border-[#e2e8f0] px-2.5 py-2 text-[11px] font-semibold text-[#334155]">
                    {item.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
