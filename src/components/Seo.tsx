import { Helmet } from 'react-helmet-async'

type Props = {
  title: string
  description?: string
  path?: string
}

const siteName = 'Collaborate Solutions'
const baseUrl = 'https://collaborate-solutions.com'

export function Seo({ title, description, path = '/' }: Props) {
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`
  const desc =
    description ||
    'Professional IT, digital marketing, and healthcare technology partner — turning ideas into reality.'
  const url = `${baseUrl}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  )
}
