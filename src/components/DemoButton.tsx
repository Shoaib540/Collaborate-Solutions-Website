import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { useDemoModal } from '../context/DemoModalContext'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  className?: string
}

/** Opens the Request Demo popup instead of navigating to Contact. */
export function DemoButton({ children, className = 'btn-primary', onClick, ...rest }: Props) {
  const { openDemo } = useDemoModal()

  return (
    <button
      type="button"
      className={className}
      onClick={(e) => {
        onClick?.(e)
        openDemo()
      }}
      {...rest}
    >
      {children}
    </button>
  )
}
