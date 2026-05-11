import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, letterVariants } from '@/lib/motion'
import { profile } from '@/data/profile'

export default function HeroText() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.p
        className="mb-4 font-mono text-[var(--text-xs)] font-medium uppercase tracking-[0.15em] text-[var(--accent-blue)]"
        variants={fadeInUp}
      >
        {profile.kicker}
      </motion.p>

      <motion.h1
        className="text-[var(--text-hero)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)]"
        initial="hidden"
        animate="visible"
      >
        {profile.name.split('').map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={letterVariants}
            custom={i}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        className="mt-4 font-mono text-[var(--text-sm)] tracking-wide text-[var(--accent-purple)]"
        variants={fadeInUp}
      >
        {profile.subtitle}
      </motion.p>

      <motion.p
        className="mt-6 max-w-[480px] text-[var(--text-lg)] leading-relaxed text-[var(--text-secondary)]"
        variants={fadeInUp}
      >
        {profile.description.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i === 0 && <br />}
          </span>
        ))}
      </motion.p>
    </motion.div>
  )
}
