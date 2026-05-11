import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { Variants } from 'framer-motion'
import { fadeInUp } from '@/lib/motion'

interface RevealOnScrollProps {
  children: ReactNode
  variants?: Variants
  className?: string
  delay?: number
}

export default function RevealOnScroll({
  children,
  variants = fadeInUp,
  className = '',
  delay = 0,
}: RevealOnScrollProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      custom={delay}
    >
      {children}
    </motion.div>
  )
}
