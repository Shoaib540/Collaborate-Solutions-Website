import { Reveal } from './Reveal'

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  image?: string
}

export function PageHero({ eyebrow, title, subtitle, image }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-[#e2e8f0] bg-[#f8fafc] pt-28 pb-14 sm:pt-32 sm:pb-16">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,#f8fafc_15%,rgba(248,250,252,0.92)_55%,rgba(248,250,252,0.75)_100%)]" />
        </div>
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-[#0f172a] sm:text-5xl text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#475569] sm:text-lg">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
