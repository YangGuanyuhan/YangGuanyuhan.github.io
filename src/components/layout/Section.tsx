import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeInUp } from '@/lib/motion'
import Container from './Container'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  withGrid?: boolean
}

export default function Section({ id, children, className = '', withGrid = false }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`relative py-16 tablet:py-24 desktop:py-32 ${className}`}
      style={{ scrollMarginTop: '80px' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
    >
      {withGrid && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      )}
      <Container>{children}</Container>
    </motion.section>
  )
}
