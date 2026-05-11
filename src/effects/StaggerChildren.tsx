import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { staggerContainer } from '@/lib/motion'

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
}

export default function StaggerChildren({ children, className = '' }: StaggerChildrenProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  )
}
