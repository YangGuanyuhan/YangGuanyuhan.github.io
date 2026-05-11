import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { cardHover } from '@/lib/motion'
import { useIsMobile } from '@/hooks/useMediaQuery'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  tilt?: boolean
  variant?: 'default' | 'elevated' | 'outlined'
}

export default function GlassCard({
  children,
  className = '',
  hover = false,
  tilt = false,
  variant = 'default',
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || isMobile || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    if (!tilt || isMobile) return
    mouseX.set(0)
    mouseY.set(0)
  }

  const variantStyles = {
    default: [
      'bg-[var(--glass-bg)]',
      'border border-[var(--glass-border)]',
      'shadow-[var(--glass-shadow)]',
    ].join(' '),
    elevated: [
      'bg-[var(--glass-bg)]',
      'border border-[var(--glass-border)]',
      'shadow-[0_4px_24px_rgba(0,0,0,0.06),0_0_1px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]',
    ].join(' '),
    outlined: [
      'bg-transparent',
      'border border-[var(--glass-border)]',
    ].join(' '),
  }

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-[var(--radius-xl)] backdrop-blur-[var(--glass-blur)] overflow-hidden transition-shadow duration-300 ${variantStyles[variant]} ${className}`}
      style={{
        transformStyle: tilt && !isMobile ? 'preserve-3d' : undefined,
        perspective: tilt && !isMobile ? '1000px' : undefined,
        rotateX: tilt && !isMobile ? rotateX : undefined,
        rotateY: tilt && !isMobile ? rotateY : undefined,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial="rest"
      whileHover={
        hover
          ? {
              ...cardHover.hover,
              boxShadow:
                '0 8px 32px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.9)',
            }
          : undefined
      }
      animate="rest"
      variants={hover ? cardHover : undefined}
    >
      {/* Top edge highlight */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--glass-highlight), transparent)',
        }}
      />
      {children}
    </motion.div>
  )
}
