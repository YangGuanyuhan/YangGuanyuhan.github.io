import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { buttonTap } from '@/lib/motion'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  className?: string
  onClick?: () => void
}

const variantStyles = {
  primary:
    'bg-[var(--accent-blue)] text-white shadow-[0_2px_12px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.35)] hover:brightness-110',
  secondary:
    'bg-white border border-[var(--glass-border)] text-[var(--text-primary)] shadow-[var(--glass-shadow)] hover:border-[var(--accent-blue)]/20 hover:shadow-[0_4px_20px_rgba(37,99,235,0.1)]',
  ghost:
    'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center gap-2 rounded-[var(--radius-full)] px-6 py-3 font-medium text-[var(--text-sm)] transition-all duration-300 backdrop-blur-sm'

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        whileHover={{ scale: 1.03 }}
        whileTap={buttonTap}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={buttonTap}
    >
      {children}
    </motion.button>
  )
}
