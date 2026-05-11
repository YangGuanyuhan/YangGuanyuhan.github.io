import { motion } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'
import { useIsMobile } from '@/hooks/useMediaQuery'

export default function GlowOrb() {
  const { x, y } = useMousePosition()
  const isMobile = useIsMobile()

  if (isMobile) return null

  return (
    <motion.div
      className="pointer-events-none fixed z-0 rounded-full"
      style={{
        width: 500,
        height: 500,
        background:
          'radial-gradient(circle, rgba(37,99,235,0.06), transparent 70%)',
        filter: 'blur(80px)',
      }}
      animate={{
        x: x - 250,
        y: y - 250,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 200,
      }}
    />
  )
}
