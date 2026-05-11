import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/useMediaQuery'

const blobs = [
  {
    color: 'var(--gradient-aurora-1)',
    size: 700,
    x: ['0%', '20%', '-10%', '0%'],
    y: ['0%', '-15%', '10%', '0%'],
    scale: [1, 1.2, 0.9, 1],
    duration: 20,
  },
  {
    color: 'var(--gradient-aurora-2)',
    size: 600,
    x: ['0%', '-15%', '20%', '0%'],
    y: ['0%', '10%', '-20%', '0%'],
    scale: [1, 0.9, 1.15, 1],
    duration: 25,
  },
  {
    color: 'var(--gradient-aurora-3)',
    size: 500,
    x: ['0%', '10%', '-15%', '0%'],
    y: ['0%', '20%', '-10%', '0%'],
    scale: [1, 1.1, 0.85, 1],
    duration: 22,
  },
]

export default function AuroraBackground() {
  const isMobile = useIsMobile()
  const activeBlobs = isMobile ? blobs.slice(0, 2) : blobs

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {activeBlobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle, ${blob.color}, transparent 70%)`,
            filter: isMobile ? 'blur(100px)' : 'blur(140px)',
            opacity: 0.35,
            marginLeft: -blob.size / 2,
            marginTop: -blob.size / 2,
          }}
          animate={{
            x: blob.x,
            y: blob.y,
            scale: blob.scale,
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
