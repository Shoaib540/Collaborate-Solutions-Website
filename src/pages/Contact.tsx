import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { site } from '../data/site'
import { submitLead } from '../lib/submitLead'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')
    const result = await submitLead({
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
      subject: `Website inquiry from ${form.name}`,
      source: 'contact',
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
      <Seo
        title="Contact"
        description="Contact Collaborate Solutions in Lahore — phone, email, WhatsApp, and project inquiry form."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Let’s build something durable"
        subtitle="Tell us about your goals — marketing, software, or healthcare IT. We’ll respond with a clear next step."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="space-y-6">
              <a href={site.phoneHref} className="flex items-start gap-3 text-black hover:text-[#1b4332]">
                <Phone className="mt-1 h-5 w-5 text-[#1b4332]" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a7340]">Phone</div>
                  <div className="mt-1 font-semibold">{site.phone}</div>
                </div>
              </a>
              <a href={site.emailHref} className="flex items-start gap-3 text-black hover:text-[#1b4332]">
                <Mail className="mt-1 h-5 w-5 text-[#1b4332]" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a7340]">Email</div>
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
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a7340]">Address</div>
                  <div className="mt-1 font-semibold">{site.address}</div>
                </div>
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-md border border-[#1b4332] px-4 py-2.5 text-sm font-semibold text-[#1b4332] hover:bg-[#1b4332] hover:text-[#faf8f4]"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            {submitted ? (
              <div className="border border-[#d5dcd4] bg-[#e8eee9]/60 p-8">
                <h2 className="text-2xl font-extrabold text-[#1b4332]">Message received</h2>
                <p className="mt-3 text-sm text-black">
                  Thanks — our team will follow up shortly. For urgent needs, use WhatsApp or call {site.phone}.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="border border-[#d5dcd4] bg-white p-6 sm:p-8">
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-black">Name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full border border-[#d5dcd4] bg-[#faf8f4] px-3 py-2.5 text-sm text-black outline-none focus:border-[#1b4332]"
                  />
                </label>
                <label className="mt-4 block">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-black">Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full border border-[#d5dcd4] bg-[#faf8f4] px-3 py-2.5 text-sm text-black outline-none focus:border-[#1b4332]"
                  />
                </label>
                <label className="mt-4 block">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-black">Phone</span>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-2 w-full border border-[#d5dcd4] bg-[#faf8f4] px-3 py-2.5 text-sm text-black outline-none focus:border-[#1b4332]"
                  />
                </label>
                <label className="mt-4 block">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-black">Message</span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full resize-y border border-[#d5dcd4] bg-[#faf8f4] px-3 py-2.5 text-sm text-black outline-none focus:border-[#1b4332]"
                  />
                </label>
                {error && <p className="mt-3 text-sm font-semibold text-red-700">{error}</p>}
                <button type="submit" disabled={sending} className="btn-primary mt-6 w-full disabled:opacity-60">
                  {sending ? 'Sending…' : 'Send'} <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
