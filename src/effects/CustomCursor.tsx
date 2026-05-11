import { motion } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'
import { useIsMobile } from '@/hooks/useMediaQuery'

export default function CustomCursor() {
  const { x, y } = useMousePosition()
  const isMobile = useIsMobile()

  if (isMobile) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[200] h-4 w-4 rounded-full border-2 border-[var(--accent-blue)]/40"
      animate={{
        x: x - 8,
        y: y - 8,
      }}
      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 250,
      }}
    />
  )
}
