import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface IconButtonProps {
  children: ReactNode
  href: string
  title?: string
  className?: string
}

export default function IconButton({ children, href, title, className = '' }: IconButtonProps) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      title={title}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-[var(--glass-border)] bg-white text-[var(--text-secondary)] shadow-sm transition-all duration-200 hover:border-[var(--accent-blue)]/20 hover:text-[var(--accent-blue)] hover:shadow-[var(--glow-blue)] ${className}`}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  )
}
