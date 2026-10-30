import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { site } from '../data/site'

function LegalShell({
  title,
  path,
  description,
  children,
}: {
  title: string
  path: string
  description: string
  children: ReactNode
}) {
  return (
    <>
      <Seo title={title} description={description} path={path} />
      <PageHero eyebrow="Legal" title={title} subtitle={`Last updated: October 30, 2026 · ${site.name}`} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-black sm:px-6 lg:px-8">
          {children}
          <p className="pt-6 text-sm">
            Questions?{' '}
            <Link to="/contact" className="font-bold text-[#1b4332] underline">
              Contact us
            </Link>{' '}
            or email{' '}
            <a href={site.emailHref} className="font-bold text-[#1b4332] underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}

export function Privacy() {
  return (
    <LegalShell
      title="Privacy Policy"
      path="/privacy"
      description="How Collaborate Solutions collects, uses, and protects personal information."
    >
      <p>
        Collaborate Solutions (“we”, “us”) respects your privacy. This policy explains what information we collect
        through collaborate-solutions.com and related forms, and how we use it.
      </p>
      <h2 className="text-xl font-extrabold">Information we collect</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Contact details you submit (name, email, phone, organization, message).</li>
        <li>Career application details when you apply for a role.</li>
        <li>Basic technical data such as browser type and pages visited (via analytics, if enabled).</li>
      </ul>
      <h2 className="text-xl font-extrabold">How we use information</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>To respond to inquiries and schedule demos.</li>
        <li>To evaluate job applications.</li>
        <li>To improve our website and services.</li>
        <li>To meet legal or contractual obligations where required.</li>
      </ul>
      <h2 className="text-xl font-extrabold">Sharing</h2>
      <p>
        We do not sell personal data. We may share information with trusted processors (email delivery, hosting,
        analytics) solely to operate this site, or when required by law.
      </p>
      <h2 className="text-xl font-extrabold">Retention & security</h2>
      <p>
        We retain inquiry and application data only as long as needed for the stated purpose, then delete or archive
        it. We use reasonable administrative and technical safeguards; no method of transmission is 100% secure.
      </p>
      <h2 className="text-xl font-extrabold">Your choices</h2>
      <p>
        You may request access, correction, or deletion of your personal data by emailing {site.email}. If analytics
        cookies are enabled in your region, you can control cookies through your browser settings.
      </p>
    </LegalShell>
  )
}

export function Terms() {
  return (
    <LegalShell
      title="Terms of Service"
      path="/terms"
      description="Terms governing use of the Collaborate Solutions website and inquiry forms."
    >
      <p>
        By using this website, you agree to these terms. If you do not agree, please discontinue use of the site.
      </p>
      <h2 className="text-xl font-extrabold">Website use</h2>
      <p>
        Content on this site is for general information. Service descriptions, ROI estimates, and healthcare module
        details are illustrative and may change. Formal statements of work govern paid engagements.
      </p>
      <h2 className="text-xl font-extrabold">No professional advice</h2>
      <p>
        Nothing on this site constitutes legal, clinical, billing, or regulatory advice. Always validate compliance
        requirements with qualified counsel and your local authorities (including NPHIES, CMS, ONC, and MoH rules).
      </p>
      <h2 className="text-xl font-extrabold">Intellectual property</h2>
      <p>
        Logos, copy, and design of Collaborate Solutions are protected. You may not copy or reuse them without written
        permission, except for personal non-commercial viewing.
      </p>
      <h2 className="text-xl font-extrabold">Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Collaborate Solutions is not liable for indirect or consequential
        damages arising from use of this website or reliance on its content.
      </p>
      <h2 className="text-xl font-extrabold">Governing law</h2>
      <p>These terms are governed by the laws of Pakistan, without regard to conflict-of-law principles.</p>
    </LegalShell>
  )
}

export function Security() {
  return (
    <LegalShell
      title="Security Overview"
      path="/security"
      description="How Collaborate Solutions approaches security for client delivery and this website."
    >
      <p>
        Security is part of how we design software, healthcare IT deployments, and this marketing site. Below is a
        high-level overview — project-specific controls are defined in each engagement.
      </p>
      <h2 className="text-xl font-extrabold">Website & forms</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Hosted on modern HTTPS infrastructure (e.g. Vercel).</li>
        <li>Contact and career submissions validated server-side when the API is enabled.</li>
        <li>Secrets (email API keys, analytics IDs) stored as environment variables — never in frontend code.</li>
      </ul>
      <h2 className="text-xl font-extrabold">Client delivery practices</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Role-based access and least-privilege credentials for systems we configure.</li>
        <li>Secure handling of clinical and billing data according to engagement requirements (HIPAA/GDPR alignment where applicable).</li>
        <li>Change management and documented handoff for production systems.</li>
      </ul>
      <h2 className="text-xl font-extrabold">Report a concern</h2>
      <p>
        If you believe you’ve found a security issue on this website, email {site.email} with details. Please do not
        publicly disclose before we’ve had a chance to respond.
      </p>
    </LegalShell>
  )
}

export function Credits() {
  return (
    <LegalShell
      title="Media Credits & Licenses"
      path="/credits"
      description="Attribution for photography and media used on the Collaborate Solutions website."
    >
      <p>
        Brand logo and partner marks belong to Collaborate Solutions and respective partners. Photography on this site
        includes licensed stock used under Unsplash / Pexels license terms for commercial websites.
      </p>
      <h2 className="text-xl font-extrabold">Photography</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>EHR clinical imagery sourced from Unsplash (unsplash.com/license).</li>
        <li>EHR hero and clinic walkthrough videos sourced from Pexels (pexels.com/license).</li>
        <li>Leadership portraits currently use licensed stock stand-ins until official company photos are supplied.</li>
      </ul>
      <h2 className="text-xl font-extrabold">Replace with your assets</h2>
      <p>
        To use official Collaborate Solutions photography or a custom Muse/Wonder hero video, drop files into{' '}
        <code className="rounded bg-[#e8eee9] px-1.5 py-0.5 text-sm">public/media/</code> and update paths in the
        components/data files — or send assets to your web team for injection.
      </p>
      <h2 className="text-xl font-extrabold">Trademarks</h2>
      <p>
        Product names such as HL7®, FHIR®, ONC, CMS, and NPHIES are trademarks of their respective owners. Use on this
        site is for descriptive purposes only.
      </p>
    </LegalShell>
  )
}
