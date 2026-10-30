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
    const onScroll = () => setScrolled(window.scrollY > 16)
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

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-[#d5dcd4] bg-[#faf8f4]/95 shadow-[0_12px_40px_-28px_rgba(15,20,18,0.45)] backdrop-blur-md'
          : 'border-b border-transparent bg-gradient-to-b from-[#081c15]/70 to-transparent'
      }`}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/logo/cs-logo.png"
            alt={site.name}
            className="h-11 w-11 rounded-md bg-[#faf8f4] object-contain p-0.5 shadow-sm"
          />
          <div className="leading-tight">
            <div
              className={`text-[1.15rem] font-extrabold tracking-tight sm:text-[1.25rem] ${
                solid ? 'text-black' : 'text-[#faf8f4]'
              }`}
            >
              Collaborate
            </div>
            <div
              className={`text-[0.62rem] font-bold uppercase tracking-[0.22em] ${
                solid ? 'text-[#1b4332]' : 'text-[#e6d5a8]'
              }`}
            >
              Solutions
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-[0.88rem] font-semibold transition-colors ${
                  solid
                    ? isActive
                      ? 'text-[#1b4332]'
                      : 'text-black hover:text-[#1b4332]'
                    : isActive
                      ? 'text-[#e6d5a8]'
                      : 'text-[#faf8f4]/88 hover:text-[#e6d5a8]'
                }`
              }
            >
              {t.nav[link.key]}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleLocale}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold tracking-wide transition ${
              solid
                ? 'border-[#1b4332]/25 text-[#1b4332] hover:bg-[#e8eee9]'
                : 'border-[#faf8f4]/35 text-[#faf8f4] hover:bg-white/10'
            }`}
            aria-label={t.lang.switchTo}
          >
            <Globe2 className="h-3.5 w-3.5" />
            {locale === 'en' ? t.lang.ar : t.lang.en}
          </button>
          <Link to="/contact" className={solid ? 'btn-primary !py-2.5 !px-4' : 'btn-gold !py-2.5 !px-4'}>
            {t.cta.demo}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleLocale}
            className={`inline-flex h-11 items-center gap-1.5 rounded-full border px-3 text-xs font-bold ${
              solid ? 'border-[#0f1412]/20 text-black' : 'border-[#faf8f4]/45 text-[#faf8f4]'
            }`}
            aria-label={t.lang.switchTo}
          >
            <Globe2 className="h-3.5 w-3.5" />
            {locale === 'en' ? 'ع' : 'EN'}
          </button>
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border ${
              solid ? 'border-[#0f1412]/20 text-black' : 'border-[#faf8f4]/45 text-[#faf8f4]'
            }`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#d5dcd4] bg-[#faf8f4] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-base font-semibold ${
                    isActive ? 'bg-[#e8eee9] text-[#1b4332]' : 'text-black hover:bg-[#e8eee9]/70'
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
