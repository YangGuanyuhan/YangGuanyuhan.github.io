import type { ReactNode } from 'react'
interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  className?: string
  onClick?: () => void
}
export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  onClick,
}: ButtonProps) {
  const classes = `button button-${variant} ${className}`
  if (href) {
    const external = href.startsWith('https://')
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
