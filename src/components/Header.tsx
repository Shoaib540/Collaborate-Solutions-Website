import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Globe2, Menu, X } from 'lucide-react'
import { navLinks, site } from '../data/site'
import { useLanguage } from '../i18n'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, locale, toggleLocale } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? 'border-[#e2e8f0] bg-white/95 shadow-[0_8px_30px_-20px_rgba(15,23,42,0.35)] backdrop-blur-md'
          : 'border-[#e2e8f0]/80 bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-[4.25rem] lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src="/logo/cs-logo.png"
            alt={site.name}
            className="h-9 w-9 rounded object-contain"
          />
          <div className="leading-tight">
            <div className="text-[1.05rem] font-bold tracking-tight text-[#0f172a]">Collaborate</div>
            <div className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#1a6b4f]">
              Solutions
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? 'text-[#0f3d2e]' : 'text-[#334155] hover:text-[#0f3d2e]'
                }`
              }
            >
              {t.nav[link.key]}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <button
            type="button"
            onClick={toggleLocale}
            className="inline-flex items-center gap-1.5 rounded-md border border-[#e2e8f0] px-3 py-2 text-xs font-bold text-[#0f3d2e] hover:bg-[#f1f5f4]"
            aria-label={t.lang.switchTo}
          >
            <Globe2 className="h-3.5 w-3.5" />
            {locale === 'en' ? t.lang.ar : t.lang.en}
          </button>
          <Link to="/contact" className="btn-primary !py-2.5 !px-4">
            {t.cta.demo}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleLocale}
            className="inline-flex h-10 items-center gap-1 rounded-md border border-[#e2e8f0] px-2.5 text-xs font-bold text-[#0f3d2e]"
            aria-label={t.lang.switchTo}
          >
            <Globe2 className="h-3.5 w-3.5" />
            {locale === 'en' ? 'ع' : 'EN'}
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#e2e8f0] text-[#0f172a]"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#e2e8f0] bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-base font-semibold ${
                    isActive ? 'bg-[#f1f5f4] text-[#0f3d2e]' : 'text-[#0f172a] hover:bg-[#f8fafc]'
                  }`
                }
              >
                {t.nav[link.key]}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              {t.cta.demo}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
