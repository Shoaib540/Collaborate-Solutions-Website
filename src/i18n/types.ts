export type Locale = 'en' | 'ar'

export type NavKey = 'home' | 'ehr' | 'markets' | 'about' | 'contact'

export type Dictionary = {
  brand: {
    name: string
    tagline: string
    description: string
  }
  nav: Record<NavKey, string>
  cta: {
    demo: string
    contact: string
    learnMore: string
    getStarted: string
    viewCerts: string
    exploreEhr: string
  }
  lang: {
    en: string
    ar: string
    switchTo: string
  }
  home: {
    seoTitle: string
    seoDesc: string
    eyebrow: string
    heroTitle: string
    heroTitleAccent: string
    heroBody: string
    trustLine: string
    pillarsEyebrow: string
    pillarsTitle: string
    pillarsBody: string
    outcomesEyebrow: string
    outcomesTitle: string
    marketsEyebrow: string
    marketsTitle: string
    marketsBody: string
    usTitle: string
    usBody: string
    gulfTitle: string
    gulfBody: string
    modulesEyebrow: string
    modulesTitle: string
    modulesBody: string
    whyEyebrow: string
    whyTitle: string
    whyBody: string
    certsEyebrow: string
    certsTitle: string
    certsBody: string
    demoEyebrow: string
    demoTitle: string
    demoBody: string
  }
  ehr: {
    seoTitle: string
    seoDesc: string
    eyebrow: string
    title: string
    body: string
  }
  about: {
    seoTitle: string
    seoDesc: string
    eyebrow: string
    title: string
    subtitle: string
    whoTitle: string
    whoBody: string
    journeyEyebrow: string
    journeyTitle: string
    teamEyebrow: string
    teamTitle: string
    growthNote: string
  }
  contact: {
    seoTitle: string
    seoDesc: string
    eyebrow: string
    title: string
    subtitle: string
    formTitle: string
    name: string
    email: string
    phone: string
    org: string
    region: string
    message: string
    submit: string
    success: string
  }
  footer: {
    company: string
    platform: string
    contact: string
    quote: string
    privacy: string
    terms: string
    security: string
    rights: string
  }
  markets: {
    us: string
    saudi: string
    uae: string
    bahrain: string
    qatar: string
    kuwait: string
  }
  badges: string[]
  pillars: { title: string; text: string; cta: string }[]
  outcomes: { value: string; label: string; detail: string }[]
  whyItems: { title: string; text: string }[]
  moduleHighlights: { title: string; text: string }[]
}
