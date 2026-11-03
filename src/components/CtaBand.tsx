import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './Reveal'
import { useLanguage } from '../i18n'

type Props = {
  eyebrow?: string
  title?: string
  body?: string
  ctaLabel?: string
  ctaTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export function CtaBand({
  eyebrow,
  title,
  body,
  ctaLabel,
  ctaTo = '/contact',
  secondaryLabel,
  secondaryTo = '/ehr',
}: Props) {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden border-t border-[#e2e8f0] bg-[#f8fafc] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl border border-[#e2e8f0] bg-white p-8 sm:p-10">
            <p className="eyebrow">{eyebrow ?? t.home.demoEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl text-balance">
              {title ?? t.home.demoTitle}
            </h2>
            <p className="mt-4 max-w-xl text-[#475569]">{body ?? t.home.demoBody}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={ctaTo} className="btn-primary">
                {ctaLabel ?? t.cta.demo}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
              <Link to={secondaryTo} className="btn-ghost">
                {secondaryLabel ?? t.cta.exploreEhr}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
