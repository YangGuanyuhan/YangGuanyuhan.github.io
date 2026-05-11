import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Badge({ children, className = '', animate = false }: BadgeProps) {
  const Tag = animate ? motion.span : 'span'
  const props = animate ? { variants: badgeVariants } : {}

  return (
    <Tag
      className={`inline-block rounded-[var(--radius-full)] border border-[rgba(0,0,0,0.06)] bg-[var(--surface-overlay)] px-3 py-1 font-mono text-[var(--text-xs)] text-[var(--text-secondary)] transition-all duration-200 hover:border-[rgba(0,0,0,0.12)] hover:bg-white hover:text-[var(--text-primary)] hover:shadow-sm ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
