import { useState, type FormEvent } from 'react'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { CtaBand } from '../components/CtaBand'
import { Seo } from '../components/Seo'
import { jobs } from '../data/careers'
import { submitLead } from '../lib/submitLead'

export function Careers() {
  const [activeJob, setActiveJob] = useState<(typeof jobs)[number] | null>(null)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', linkedin: '', note: '' })

  const onApply = async (e: FormEvent) => {
    e.preventDefault()
    if (!activeJob) return
    setSending(true)
    setError('')
    const result = await submitLead({
      name: form.name,
      email: form.email,
      phone: form.phone,
      role: activeJob.title,
      subject: `Career application — ${activeJob.title}`,
      source: 'careers',
      message: [
        `Applying for: ${activeJob.title}`,
        form.linkedin ? `LinkedIn/Portfolio: ${form.linkedin}` : '',
        '',
        form.note || 'No additional note provided.',
      ]
        .filter(Boolean)
        .join('\n'),
    })
    setSending(false)
    if (!result.ok) {
      setError(result.error || 'Could not submit. Please email info@collaborate-solutions.com')
      return
    }
    setSent(true)
  }

  return (
    <>
      <Seo
        title="Careers"
        description="Join Collaborate Solutions in Lahore — open roles in engineering, healthcare IT, RCM, and marketing."
        path="/careers"
      />
      <PageHero
        eyebrow="Careers"
        title="Build with a team that ships"
        subtitle="Join Collaborate Solutions in Lahore — product, healthcare IT, marketing, and operations roles for people who care about craft."
        image="/media/images/why-scale.jpg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <Reveal key={job.id} delay={i * 0.05}>
                <article className="flex flex-col gap-4 border border-[#d5dcd4] bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-extrabold text-black">{job.title}</h2>
                    <p className="mt-1 text-sm font-semibold text-[#8a7340]">
                      {job.type} · {job.location}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm text-black">{job.summary}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveJob(job)
                      setSent(false)
                      setError('')
                    }}
                    className="btn-primary shrink-0"
                  >
                    Apply
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />

      {activeJob && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/50 p-4 sm:items-center">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto border border-[#d5dcd4] bg-[#faf8f4] p-6 shadow-2xl">
            {sent ? (
              <div>
                <h3 className="text-2xl font-extrabold text-[#1b4332]">Application sent</h3>
                <p className="mt-3 text-sm text-black">
                  Thanks for applying to {activeJob.title}. HR will review and reach out if there’s a fit.
                </p>
                <button type="button" className="btn-primary mt-6" onClick={() => setActiveJob(null)}>
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={onApply} className="space-y-4">
                <div>
                  <h3 className="text-2xl font-extrabold text-black">Apply — {activeJob.title}</h3>
                  <p className="mt-1 text-sm text-black">{activeJob.location}</p>
                </div>
                <label className="block text-sm">
                  <span className="font-bold">Full name *</span>
                  <input required className="mt-1 w-full border border-[#d5dcd4] bg-white px-3 py-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </label>
                <label className="block text-sm">
                  <span className="font-bold">Email *</span>
                  <input required type="email" className="mt-1 w-full border border-[#d5dcd4] bg-white px-3 py-2" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </label>
                <label className="block text-sm">
                  <span className="font-bold">Phone</span>
                  <input className="mt-1 w-full border border-[#d5dcd4] bg-white px-3 py-2" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </label>
                <label className="block text-sm">
                  <span className="font-bold">LinkedIn / Portfolio URL</span>
                  <input className="mt-1 w-full border border-[#d5dcd4] bg-white px-3 py-2" value={form.linkedin} onChange={(e) => setForm({ ...form, linkedin: e.target.value })} />
                </label>
                <label className="block text-sm">
                  <span className="font-bold">Why Collaborate Solutions?</span>
                  <textarea rows={4} className="mt-1 w-full border border-[#d5dcd4] bg-white px-3 py-2" value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} />
                </label>
                {error && <p className="text-sm font-semibold text-red-700">{error}</p>}
                <div className="flex gap-3 pt-2">
                  <button type="button" className="flex-1 border border-[#d5dcd4] py-3 text-sm font-bold" onClick={() => setActiveJob(null)}>
                    Cancel
                  </button>
                  <button type="submit" disabled={sending} className="btn-primary flex-1 disabled:opacity-60">
                    {sending ? 'Submitting…' : 'Submit application'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
