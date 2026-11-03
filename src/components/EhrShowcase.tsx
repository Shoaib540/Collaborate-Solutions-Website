import { Link } from 'react-router-dom'
import { ArrowRight, MonitorSmartphone } from 'lucide-react'
import { ehrMedia } from '../data/media'
import { useLanguage } from '../i18n'
import { Reveal } from './Reveal'

export function EhrShowcase() {
  const { t, locale } = useLanguage()

  const title =
    locale === 'ar' ? 'واجهة Collaborate EHR البرمجية' : 'Collaborate EHR software interface'
  const body =
    locale === 'ar'
      ? 'شاهد شاشات السجلات الطبية الحقيقية: لوحة التحكم، مخطط المريض، المواعيد، الفوترة، والتبادل.'
      : 'Watch the actual EHR product screens — dashboard, patient chart, scheduling, billing, and exchange — not stock doctor footage.'

  return (
    <section className="border-b border-[#e2e8f0] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-3 py-1.5 text-xs font-bold text-[#0f3d2e]">
              <MonitorSmartphone className="h-3.5 w-3.5" />
              {locale === 'ar' ? 'عرض المنتج' : 'Product UI tour'}
            </div>
            <h2 className="section-title mt-4 text-balance">{title}</h2>
            <p className="prose-muted mt-4 max-w-md">{body}</p>
            <Link to="/contact" className="btn-primary mt-8">
              {t.cta.demo}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-7">
            <div className="overflow-hidden border border-[#e2e8f0] bg-[#0a2a20] shadow-[0_24px_60px_-36px_rgba(10,42,32,0.45)]">
              <video
                className="aspect-[16/10] w-full object-cover object-top"
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
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[ehrMedia.screens.dashboard, ehrMedia.screens.telehealth, ehrMedia.screens.interop].map((src) => (
                <img key={src} src={src} alt="" className="aspect-[4/3] w-full border border-[#e2e8f0] object-cover object-top" />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
