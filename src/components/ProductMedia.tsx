import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  /** Browser chrome bar label */
  url?: string
}

/** Consistent 16:9 product frame so images/videos never stretch oddly. */
export function ProductMedia({ children, className = '', url = 'app.collaboratesolutions.com' }: Props) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-[#e2e8f0] bg-[#0b2920] shadow-[0_28px_70px_-40px_rgba(15,61,46,0.55)] ${className}`}
    >
      <div className="flex h-9 items-center gap-1.5 border-b border-white/10 bg-[#0f3d2e] px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ms-2 truncate rounded bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/80">
          {url}
        </span>
      </div>
      <div className="relative aspect-video w-full bg-[#0a2a20] [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-top [&_video]:h-full [&_video]:w-full [&_video]:object-cover [&_video]:object-top">
        {children}
      </div>
    </div>
  )
}
