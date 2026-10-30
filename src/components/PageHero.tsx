import { Reveal } from './Reveal'

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  image?: string
}

export function PageHero({ eyebrow, title, subtitle, image }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-[#d5dcd4] bg-[#081c15] pt-28 pb-16 text-[#faf8f4] sm:pt-32 sm:pb-20">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,#081c15_10%,rgba(8,28,21,0.88)_60%,rgba(8,28,21,0.65)_100%)]" />
        </div>
      )}
      {!image && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(198,167,94,0.18),transparent_45%)]" />}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          {eyebrow && (
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#e6d5a8]">
              {eyebrow}
            </p>
          )}
          <h1
            className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-balance"
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#faf8f4]/80 sm:text-lg">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
