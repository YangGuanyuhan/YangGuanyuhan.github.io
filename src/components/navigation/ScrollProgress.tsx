import { motion, useSpring } from 'framer-motion'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()
  const scaleX = useSpring(progress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[110] h-[2px] origin-left"
      style={{
        scaleX,
        background:
          'linear-gradient(90deg, var(--accent-blue), var(--accent-purple), var(--accent-cyan))',
      }}
    />
  )
}
