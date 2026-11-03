import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type FormEvent,
  type ReactNode,
} from 'react'
import { Send, X } from 'lucide-react'
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

type DemoModalContextValue = {
  openDemo: () => void
  closeDemo: () => void
}

const DemoModalContext = createContext<DemoModalContextValue | null>(null)

export function useDemoModal() {
  const ctx = useContext(DemoModalContext)
  if (!ctx) throw new Error('useDemoModal must be used within DemoModalProvider')
  return ctx
}

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
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

  const openDemo = useCallback(() => {
    setOpen(true)
    setSubmitted(false)
    setError('')
  }, [])

  const closeDemo = useCallback(() => {
    setOpen(false)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDemo()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, closeDemo])

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
      source: 'ehr-demo-modal',
    })
    setSending(false)
    if (!result.ok) {
      setError(result.error || 'Something went wrong. Please try WhatsApp or email.')
      return
    }
    setSubmitted(true)
  }

  const value = useMemo(() => ({ openDemo, closeDemo }), [openDemo, closeDemo])

  return (
    <DemoModalContext.Provider value={value}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/50 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
          onClick={closeDemo}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-[#e2e8f0] bg-white shadow-[0_40px_100px_-40px_rgba(15,61,46,0.55)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeDemo}
              className="absolute end-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e2e8f0] text-[#0f172a] hover:bg-[#f8fafc]"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="border-b border-[#e2e8f0] bg-[#f8fafc] px-6 py-5 pe-14">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1a6b4f]">
                {t.home.demoEyebrow}
              </p>
              <h2 id="demo-modal-title" className="mt-1 text-xl font-bold text-[#0f172a]">
                {t.contact.formTitle}
              </h2>
              <p className="mt-2 text-sm text-[#475569]">{t.home.demoBody}</p>
            </div>

            <div className="px-6 py-5">
              {submitted ? (
                <p className="py-6 text-center text-base font-semibold text-[#0f3d2e]">
                  {t.contact.success}
                </p>
              ) : (
                <form onSubmit={onSubmit} className="space-y-3.5">
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0f172a]">
                      {t.contact.name}
                    </span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2.5 text-sm outline-none focus:border-[#0f3d2e]"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0f172a]">
                      {t.contact.email}
                    </span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2.5 text-sm outline-none focus:border-[#0f3d2e]"
                    />
                  </label>
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0f172a]">
                        {t.contact.phone}
                      </span>
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="mt-1.5 w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2.5 text-sm outline-none focus:border-[#0f3d2e]"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0f172a]">
                        {t.contact.org}
                      </span>
                      <input
                        value={form.org}
                        onChange={(e) => setForm({ ...form, org: e.target.value })}
                        className="mt-1.5 w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2.5 text-sm outline-none focus:border-[#0f3d2e]"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0f172a]">
                      {t.contact.region}
                    </span>
                    <select
                      value={form.region}
                      onChange={(e) => setForm({ ...form, region: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2.5 text-sm outline-none focus:border-[#0f3d2e]"
                    >
                      {regions.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0f172a]">
                      {t.contact.message}
                    </span>
                    <textarea
                      required
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2.5 text-sm outline-none focus:border-[#0f3d2e]"
                    />
                  </label>
                  {error && <p className="text-sm text-red-700">{error}</p>}
                  <button type="submit" disabled={sending} className="btn-primary w-full">
                    <Send className="h-4 w-4" />
                    {sending ? '...' : t.contact.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </DemoModalContext.Provider>
  )
}
