import { Link } from 'react-router-dom'
import { ArrowRight, MonitorSmartphone } from 'lucide-react'
import { ehrMedia } from '../data/media'
import { useLanguage } from '../i18n'
import { Reveal } from './Reveal'

export function EhrShowcase() {
  const { t, locale } = useLanguage()

  const title =
    locale === 'ar' ? 'شاهد Collaborate EHR أثناء العمل' : 'See Collaborate EHR in clinical motion'
  const body =
    locale === 'ar'
      ? 'من التوثيق على الشاشة إلى رعاية العيادة — فيديو يوضح كيف يبدو نظام السجلات الطبية في بيئة رعاية حقيقية.'
      : 'From on-screen charting to floor-side care — a look at how electronic health records feel in a real clinical setting.'

  return (
    <section className="border-y border-[#d5dcd4] bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5dcd4] bg-[#faf8f4] px-3 py-1.5 text-xs font-bold text-[#1b4332]">
              <MonitorSmartphone className="h-3.5 w-3.5" />
              {locale === 'ar' ? 'تجربة النظام' : 'Product walkthrough'}
            </div>
            <h2 className="section-title mt-4 text-balance">{title}</h2>
            <p className="prose-muted mt-4 max-w-md">{body}</p>
            <Link to="/ehr" className="btn-primary mt-8">
              {t.cta.exploreEhr}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="overflow-hidden border border-[#d5dcd4] bg-[#081c15] shadow-[0_24px_60px_-36px_rgba(8,28,21,0.55)]">
              <video
                className="aspect-[16/10] w-full object-cover"
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
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[ehrMedia.modules[0], ehrMedia.modules[2], ehrMedia.patient].map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="aspect-[4/3] w-full object-cover border border-[#d5dcd4]"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
