import { Reveal } from './Reveal'

const partners = [
  { name: 'Rung Villa', src: '/media/partners/rung.png' },
  { name: 'Colab', src: '/media/partners/colab.png' },
  { name: 'Collaborate Solutions', src: '/media/partners/cs-partner.png' },
]

export function Partners() {
  return (
    <section className="border-y border-[#d5dcd4] bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow text-center">Meet Our Partners</p>
          <h2 className="section-title mt-3 text-center">Trusted alongside ambitious teams</h2>
        </Reveal>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex h-20 w-40 items-center justify-center border border-[#d5dcd4] bg-[#faf8f4] px-4 sm:h-24 sm:w-48"
            >
              <img src={p.src} alt={p.name} className="max-h-14 w-auto max-w-full object-contain sm:max-h-16" />
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-black">
          Partner marks shown with permission / from public brand materials. More logos welcome — send files to expand this strip.
        </p>
      </div>
    </section>
  )
}
