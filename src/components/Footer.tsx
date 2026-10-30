import { Link } from 'react-router-dom'
import { ehrModuleLinks, site } from '../data/site'
import { useLanguage } from '../i18n'

export function Footer() {
  const { t, locale } = useLanguage()

  return (
    <footer className="relative overflow-hidden border-t border-[#0f241c] bg-[#081c15] text-[#faf8f4]">
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#c6a75e]/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <img src="/logo/cs-logo.png" alt="" className="h-12 w-12 rounded-md bg-[#faf8f4] object-contain p-1" />
            <div>
              <div className="text-2xl font-extrabold">{site.name}</div>
              <p className="mt-1 text-sm text-[#e6d5a8]">{t.brand.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#faf8f4]/72">{t.brand.description}</p>
          <p className="mt-6 text-sm italic text-[#e6d5a8]/90">“{t.footer.quote}”</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#c6a75e]">{t.footer.company}</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#faf8f4]/78">
              <li>
                <Link className="hover:text-[#e6d5a8]" to="/about">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#e6d5a8]" to="/ehr">
                  {t.nav.ehr}
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#e6d5a8]" to="/contact">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#c6a75e]">{t.footer.platform}</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#faf8f4]/78">
              {ehrModuleLinks.map((item) => (
                <li key={item.label}>
                  <Link className="hover:text-[#e6d5a8]" to={`/ehr#${item.hash}`}>
                    {locale === 'ar' ? item.labelAr : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#c6a75e]">{t.footer.contact}</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#faf8f4]/78">
              <li>
                <a className="hover:text-[#e6d5a8]" href={site.phoneHref}>
                  {site.phone}
                </a>
              </li>
              <li>
                <a className="hover:text-[#e6d5a8]" href={site.emailHref}>
                  {site.email}
                </a>
              </li>
              <li>{site.address}</li>
              <li className="flex flex-wrap gap-3 pt-1">
                {Object.entries(site.socials).map(([key, href]) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="capitalize text-[#e6d5a8] hover:text-[#faf8f4]"
                  >
                    {key}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#faf8f4]/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-[#faf8f4]/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>
            © {new Date().getFullYear()} | {t.footer.rights} collaborate-solutions.com
          </span>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="hover:text-[#e6d5a8]">
              {t.footer.privacy}
            </Link>
            <Link to="/terms" className="hover:text-[#e6d5a8]">
              {t.footer.terms}
            </Link>
            <Link to="/security" className="hover:text-[#e6d5a8]">
              {t.footer.security}
            </Link>
            <Link to="/ehr#compliance" className="hover:text-[#e6d5a8]">
              NPHIES / MIPS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
