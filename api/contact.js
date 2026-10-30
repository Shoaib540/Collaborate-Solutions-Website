/**
 * Vercel Serverless Function — POST /api/contact
 * Set RESEND_API_KEY (+ CONTACT_TO) or FORMSPREE_ID in Vercel env.
 */

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}
  const name = String(body.name || '').trim()
  const email = String(body.email || '').trim()
  const message = String(body.message || '').trim()
  const phone = String(body.phone || '').trim()
  const organization = String(body.organization || '').trim()
  const subject = String(body.subject || 'Website inquiry').trim()
  const source = String(body.source || 'contact').trim()
  const role = String(body.role || '').trim()

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Name, email, and message are required.' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Please provide a valid email.' })
  }

  const to = process.env.CONTACT_TO || 'info@collaborate-solutions.com'
  const payloadText = [
    `Source: ${source}`,
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : '',
    organization ? `Organization: ${organization}` : '',
    role ? `Role: ${role}` : '',
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n')

  try {
    if (process.env.RESEND_API_KEY) {
      const from = process.env.CONTACT_FROM || 'Collaborate Solutions <onboarding@resend.dev>'
      const send = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: `[CS Web] ${subject}`,
          text: payloadText,
        }),
      })
      if (!send.ok) {
        const err = await send.text()
        return res.status(502).json({ ok: false, error: `Email provider error: ${err}` })
      }
      return res.status(200).json({ ok: true, delivered: 'resend' })
    }

    if (process.env.FORMSPREE_ID) {
      const send = await fetch(`https://formspree.io/f/${process.env.FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message: payloadText,
          _subject: `[CS Web] ${subject}`,
        }),
      })
      if (!send.ok) {
        return res.status(502).json({ ok: false, error: 'Formspree delivery failed' })
      }
      return res.status(200).json({ ok: true, delivered: 'formspree' })
    }

    console.log('[contact]', payloadText)
    return res.status(200).json({
      ok: true,
      delivered: 'logged',
      note: 'Set RESEND_API_KEY or FORMSPREE_ID on Vercel to send live email.',
    })
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message || 'Server error' })
  }
}
