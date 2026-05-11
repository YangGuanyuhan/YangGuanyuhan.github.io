import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import TiltCard from '@/effects/TiltCard'
import { profile } from '@/data/profile'

export default function HobbyCards() {
  return (
    <motion.div
      className="relative flex gap-4 tablet:gap-6"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {profile.hobbies.map((hobby, i) => (
        <motion.div
          key={i}
          variants={fadeInUp}
          className={i === 0 ? 'flex-1' : 'flex-1 tablet:mt-12'}
        >
          <TiltCard>
            <div className="group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--glass-border)] shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <img
                src={hobby.image}
                alt={hobby.alt}
                className="h-[280px] w-full object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105 tablet:h-[360px]"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              {/* Glass label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 tablet:p-6">
                <div className="inline-block rounded-lg border border-white/20 bg-white/15 px-3 py-1.5 shadow-lg backdrop-blur-md">
                  <p className="font-mono text-[var(--text-xs)] uppercase tracking-widest text-white/70">
                    {hobby.label}
                  </p>
                  <h3 className="mt-1 text-[var(--text-xl)] font-semibold text-white">
                    {hobby.title}
                  </h3>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </motion.div>
  )
}
