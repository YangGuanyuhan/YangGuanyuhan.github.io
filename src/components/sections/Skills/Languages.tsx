import { motion } from 'framer-motion'
import { languages } from '@/data/skills'
import { fadeInUp } from '@/lib/motion'
import StaggerChildren from '@/effects/StaggerChildren'

export default function Languages() {
  return (
    <div className="mt-12">
      <h3 className="mb-6 text-[var(--text-xl)] font-semibold text-[var(--text-primary)]">
        语言能力
      </h3>
      <StaggerChildren className="flex flex-wrap gap-4">
        {languages.map((lang, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-white/60 px-5 py-3 shadow-sm backdrop-blur-sm"
          >
            <span className="text-[var(--text-base)] font-medium text-[var(--text-primary)]">
              {lang.name}
            </span>
            <span className="rounded-full bg-[var(--accent-blue)]/10 px-2 py-0.5 font-mono text-[var(--text-xs)] text-[var(--accent-blue)]">
              {lang.level}
            </span>
          </motion.div>
        ))}
      </StaggerChildren>
    </div>
  )
}
