export type LeadPayload = {
  name: string
  email: string
  message: string
  phone?: string
  organization?: string
  subject?: string
  source?: string
  role?: string
}

export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
    if (!res.ok || !data.ok) {
      return { ok: false, error: data.error || 'Submission failed' }
    }
    return { ok: true }
  } catch {
    // Local vite / offline fallback
    const subject = encodeURIComponent(payload.subject || 'Website inquiry')
    const body = encodeURIComponent(
      [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        payload.phone ? `Phone: ${payload.phone}` : '',
        payload.organization ? `Organization: ${payload.organization}` : '',
        payload.role ? `Role: ${payload.role}` : '',
        '',
        payload.message,
      ]
        .filter(Boolean)
        .join('\n'),
    )
    window.location.href = `mailto:info@collaborate-solutions.com?subject=${subject}&body=${body}`
    return { ok: true }
  }
}
