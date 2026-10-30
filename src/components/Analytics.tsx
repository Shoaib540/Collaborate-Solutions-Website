import { useEffect } from 'react'

/**
 * Loads Google Analytics when VITE_GA_ID is set (e.g. G-XXXXXXXX).
 * Optional Meta Pixel via VITE_META_PIXEL_ID.
 */
export function Analytics() {
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_ID as string | undefined
    const pixelId = import.meta.env.VITE_META_PIXEL_ID as string | undefined

    if (gaId && !document.getElementById('cs-ga')) {
      const s = document.createElement('script')
      s.id = 'cs-ga'
      s.async = true
      s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
      document.head.appendChild(s)

      const inline = document.createElement('script')
      inline.id = 'cs-ga-inline'
      inline.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}');
      `
      document.head.appendChild(inline)
    }

    if (pixelId && !document.getElementById('cs-meta-pixel')) {
      const inline = document.createElement('script')
      inline.id = 'cs-meta-pixel'
      inline.innerHTML = `
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${pixelId}');
        fbq('track', 'PageView');
      `
      document.head.appendChild(inline)
    }
  }, [])

  return null
}
