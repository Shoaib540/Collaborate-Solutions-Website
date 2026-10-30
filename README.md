# Collaborate Solutions

Professional multi-page website for [Collaborate Solutions](https://collaborate-solutions.com/) — React + TypeScript + Tailwind + Vite.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- React Router 7
- Framer Motion
- Vercel-ready (`vercel.json` SPA rewrites)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

Connect this repo to Vercel (framework: Vite) or:

```bash
npx vercel
```

Copy `.env.example` → Vercel Environment Variables:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Live contact/career emails via Resend |
| `CONTACT_TO` | Destination inbox (default `info@collaborate-solutions.com`) |
| `FORMSPREE_ID` | Alternative to Resend |
| `VITE_GA_ID` | Google Analytics Measurement ID |
| `VITE_META_PIXEL_ID` | Meta Pixel ID |

Contact endpoint: `POST /api/contact`

## Brand

Colors are derived from the CS logo: forest green + muted gold on warm paper backgrounds. Assets live in `public/logo` and `public/media`.

Hero video: `public/media/videos/hero-team.mp4` (fallback `hero-office.mp4`).
Official team photos: replace files in `public/media/team/`.
Media credits: `/credits`
