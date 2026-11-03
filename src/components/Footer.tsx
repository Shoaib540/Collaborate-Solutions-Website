import { Link } from 'react-router-dom'
import { ehrModuleLinks, site } from '../data/site'
import { useLanguage } from '../i18n'

export function Footer() {
  const { t, locale } = useLanguage()

  return (
    <footer className="border-t border-[#0a2a20] bg-[#0a2a20] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <img src="/logo/cs-logo.png" alt="" className="h-10 w-10 rounded bg-white object-contain p-0.5" />
            <div>
              <div className="text-xl font-bold">{site.name}</div>
              <p className="mt-1 text-sm text-[#9fd5bf]">{t.brand.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">{t.brand.description}</p>
          <p className="mt-5 text-sm italic text-[#9fd5bf]/90">“{t.footer.quote}”</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#9fd5bf]">{t.footer.company}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li><Link className="hover:text-white" to="/about">{t.nav.about}</Link></li>
              <li><Link className="hover:text-white" to="/ehr">{t.nav.ehr}</Link></li>
              <li><Link className="hover:text-white" to="/contact">{t.nav.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#9fd5bf]">{t.footer.platform}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {ehrModuleLinks.map((item) => (
                <li key={item.label}>
                  <Link className="hover:text-white" to={`/ehr#${item.hash}`}>
                    {locale === 'ar' ? item.labelAr : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#9fd5bf]">{t.footer.contact}</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li><a className="hover:text-white" href={site.phoneHref}>{site.phone}</a></li>
              <li><a className="hover:text-white" href={site.emailHref}>{site.email}</a></li>
              <li>{site.address}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} | {t.footer.rights} collaborate-solutions.com</span>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="hover:text-white">{t.footer.privacy}</Link>
            <Link to="/terms" className="hover:text-white">{t.footer.terms}</Link>
            <Link to="/security" className="hover:text-white">{t.footer.security}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
