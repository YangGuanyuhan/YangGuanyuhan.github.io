import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/motion'

interface SectionTitleProps {
  kicker?: string
  title: string
  description?: string
}

export default function SectionTitle({ kicker, title, description }: SectionTitleProps) {
  return (
    <motion.div
      className="mb-12 tablet:mb-16 desktop:mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={staggerContainer}
    >
      {kicker && (
        <motion.p
          className="mb-3 font-mono text-[var(--text-xs)] font-medium uppercase tracking-[0.15em] text-[var(--accent-blue)]"
          variants={fadeInUp}
        >
          {kicker}
        </motion.p>
      )}
      <motion.h2
        className="text-[var(--text-3xl)] font-semibold tracking-[-0.02em] text-[var(--text-primary)]"
        variants={fadeInUp}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className="mt-4 max-w-[600px] text-[var(--text-lg)] leading-relaxed text-[var(--text-secondary)]"
          variants={fadeInUp}
        >
          {description}
        </motion.p>
      )}
      <motion.div
        className="mt-4 h-[2px] w-12 rounded-full"
        style={{
          background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-purple))',
        }}
        variants={fadeInUp}
      />
    </motion.div>
  )
}
