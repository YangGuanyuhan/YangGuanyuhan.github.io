import { motion } from 'framer-motion'
import { letterVariants } from '@/lib/motion'

interface TextRevealProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export default function TextReveal({ text, className = '', as: Tag = 'h1' }: TextRevealProps) {
  const MotionTag = motion.create(Tag)

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={letterVariants}
          custom={i}
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </MotionTag>
  )
}
