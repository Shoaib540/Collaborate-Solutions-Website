import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#0f241c] bg-[#081c15] text-[#faf8f4]">
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#c6a75e]/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <img src="/logo/cs-logo.png" alt="" className="h-12 w-12 rounded-md bg-[#faf8f4] object-contain p-1" />
            <div>
              <div className="text-2xl font-extrabold">{site.name}</div>
              <p className="mt-1 text-sm text-[#e6d5a8]">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#faf8f4]/72">{site.description}</p>
          <p className="mt-6 text-sm italic text-[#e6d5a8]/90">
            “Where every challenge is met with collective expertise and creativity.”
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#c6a75e]">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#faf8f4]/78">
              <li><Link className="hover:text-[#e6d5a8]" to="/about">About Us</Link></li>
              <li><Link className="hover:text-[#e6d5a8]" to="/careers">Careers</Link></li>
              <li><Link className="hover:text-[#e6d5a8]" to="/blog">Blog</Link></li>
              <li><Link className="hover:text-[#e6d5a8]" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#c6a75e]">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#faf8f4]/78">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link className="hover:text-[#e6d5a8]" to={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#c6a75e]">Core Platform</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#faf8f4]/78">
              <li><Link className="hover:text-[#e6d5a8]" to="/healthcare#solutions">Electronic Health Records</Link></li>
              <li><Link className="hover:text-[#e6d5a8]" to="/healthcare#solutions">Practice Management</Link></li>
              <li><Link className="hover:text-[#e6d5a8]" to="/healthcare#solutions">DoctorFirst e-Prescribing</Link></li>
              <li><Link className="hover:text-[#e6d5a8]" to="/healthcare#solutions">FHIR R4 Engine</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#c6a75e]">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#faf8f4]/78">
              <li><a className="hover:text-[#e6d5a8]" href={site.phoneHref}>{site.phone}</a></li>
              <li><a className="hover:text-[#e6d5a8]" href={site.emailHref}>{site.email}</a></li>
              <li>{site.address}</li>
              <li className="flex flex-wrap gap-3 pt-1">
                {Object.entries(site.socials).map(([key, href]) => (
                  <a key={key} href={href} target="_blank" rel="noreferrer" className="capitalize text-[#e6d5a8] hover:text-[#faf8f4]">
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
          <span>© {new Date().getFullYear()} | All Right Reserved collaborate-solutions.com</span>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="hover:text-[#e6d5a8]">Privacy</Link>
            <Link to="/terms" className="hover:text-[#e6d5a8]">Terms</Link>
            <Link to="/security" className="hover:text-[#e6d5a8]">Security</Link>
            <Link to="/credits" className="hover:text-[#e6d5a8]">Credits</Link>
            <Link to="/healthcare#compliance" className="hover:text-[#e6d5a8]">NPHIES / MIPS</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
