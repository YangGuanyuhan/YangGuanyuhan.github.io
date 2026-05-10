import { useState, useRef, ReactNode } from 'react'

interface Floating3DCardProps {
  children: ReactNode
  className?: string
}

export default function Floating3DCard({ children, className = '' }: Floating3DCardProps) {
  const [transform, setTransform] = useState('')
  const [glow, setGlow] = useState('')
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
    setGlow(`radial-gradient(circle at ${x}px ${y}px, rgba(100, 200, 255, 0.3), transparent 50%)`)
  }

  const handleMouseLeave = () => {
    setTransform('')
    setGlow('')
  }

  return (
    <div
      ref={cardRef}
      className={`floating-3d-card ${className}`}
      style={{ transform, position: 'relative', overflow: 'hidden' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="card-glow"
        style={{ background: glow }}
      />
      {children}
    </div>
  )
}
