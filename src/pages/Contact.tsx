import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { ehrMedia } from '../data/media'
import { site } from '../data/site'
import { submitLead } from '../lib/submitLead'
import { useLanguage } from '../i18n'

const regions = [
  'United States',
  'Saudi Arabia / GCC',
  'United Arab Emirates',
  'Bahrain',
  'Qatar',
  'Kuwait',
  'Other',
]

export function Contact() {
  const { t, locale } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    org: '',
    region: 'Saudi Arabia / GCC',
    message: '',
  })

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')
    const result = await submitLead({
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: `${form.message}\n\nOrganization: ${form.org}\nRegion: ${form.region}`,
      subject: `EHR demo request from ${form.name}`,
      source: 'ehr-demo',
    })
    setSending(false)
    if (!result.ok) {
      setError(result.error || 'Something went wrong. Please try WhatsApp or email.')
      return
    }
    setSubmitted(true)
  }

  return (
    <>
      <Seo title={t.contact.seoTitle} description={t.contact.seoDesc} path="/contact" />
      <PageHero
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        image={ehrMedia.contactHero}
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="space-y-6">
              <a href={site.phoneHref} className="flex items-start gap-3 text-black hover:text-[#1b4332]">
                <Phone className="mt-1 h-5 w-5 text-[#1b4332]" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a7340]">
                    {t.contact.phone}
                  </div>
                  <div className="mt-1 font-semibold">{site.phone}</div>
                </div>
              </a>
              <a href={site.emailHref} className="flex items-start gap-3 text-black hover:text-[#1b4332]">
                <Mail className="mt-1 h-5 w-5 text-[#1b4332]" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a7340]">
                    {t.contact.email}
                  </div>
                  <div className="mt-1 font-semibold">{site.email}</div>
                </div>
              </a>
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-black hover:text-[#1b4332]"
              >
                <MapPin className="mt-1 h-5 w-5 text-[#1b4332]" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a7340]">
                    {locale === 'ar' ? 'العنوان' : 'Address'}
                  </div>
                  <div className="mt-1 font-semibold">{site.address}</div>
                </div>
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-md border border-[#1b4332] px-4 py-2.5 text-sm font-semibold text-[#1b4332] hover:bg-[#1b4332] hover:text-[#faf8f4]"
              >
                WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            {submitted ? (
              <div className="border border-[#d5dcd4] bg-[#e8eee9]/60 p-8">
                <h2 className="text-2xl font-extrabold text-[#1b4332]">{t.contact.success}</h2>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="border border-[#d5dcd4] bg-white p-6 sm:p-8">
                <h2 className="mb-5 text-xl font-extrabold text-black">{t.contact.formTitle}</h2>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-black">
                    {t.contact.name}
                  </span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full border border-[#d5dcd4] bg-[#faf8f4] px-3 py-2.5 text-sm text-black outline-none focus:border-[#1b4332]"
                  />
                </label>
                <label className="mt-4 block">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-black">
                    {t.contact.email}
                  </span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full border border-[#d5dcd4] bg-[#faf8f4] px-3 py-2.5 text-sm text-black outline-none focus:border-[#1b4332]"
                  />
                </label>
                <label className="mt-4 block">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-black">
                    {t.contact.phone}
                  </span>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-2 w-full border border-[#d5dcd4] bg-[#faf8f4] px-3 py-2.5 text-sm text-black outline-none focus:border-[#1b4332]"
                  />
                </label>
                <label className="mt-4 block">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-black">
                    {t.contact.org}
                  </span>
                  <input
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    className="mt-2 w-full border border-[#d5dcd4] bg-[#faf8f4] px-3 py-2.5 text-sm text-black outline-none focus:border-[#1b4332]"
                  />
                </label>
                <label className="mt-4 block">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-black">
                    {t.contact.region}
                  </span>
                  <select
                    value={form.region}
                    onChange={(e) => setForm({ ...form, region: e.target.value })}
                    className="mt-2 w-full border border-[#d5dcd4] bg-[#faf8f4] px-3 py-2.5 text-sm text-black outline-none focus:border-[#1b4332]"
                  >
                    {regions.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="mt-4 block">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-black">
                    {t.contact.message}
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full border border-[#d5dcd4] bg-[#faf8f4] px-3 py-2.5 text-sm text-black outline-none focus:border-[#1b4332]"
                  />
                </label>
                {error && <p className="mt-3 text-sm text-red-700">{error}</p>}
                <button type="submit" disabled={sending} className="btn-primary mt-6 w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  {sending ? '...' : t.contact.submit}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
