export const site = {
  name: 'Collaborate Solutions',
  tagline: 'Turning Ideas Into Reality',
  description:
    'We bridge the gap between your business goals and operational excellence with innovative IT, marketing, and healthcare solutions.',
  phone: '+92 333 4415825',
  phoneHref: 'tel:+923334415825',
  email: 'info@collaborate-solutions.com',
  emailHref: 'mailto:info@collaborate-solutions.com',
  whatsapp: 'https://wa.me/923334415825',
  address: '71 D, DHA Phase 8, Lahore',
  mapUrl:
    'https://maps.google.com/maps?q=Collaborate+Solutions+71+D+DHA+Phase+8+Lahore',
  socials: {
    linkedin: 'https://pk.linkedin.com/company/collaborate-solutions',
    facebook: 'https://www.facebook.com/collaboratesolutions22/',
    instagram: 'https://www.instagram.com/collaborate_solutions',
    youtube: 'https://www.youtube.com/@CollaborateSolutions',
  },
} as const

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Healthcare IT', to: '/healthcare' },
  { label: 'Careers', to: '/careers' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
] as const
