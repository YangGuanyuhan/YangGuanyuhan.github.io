import { ReactNode } from 'react'

interface GradientBorderProps {
  children: ReactNode
  className?: string
}

export default function GradientBorder({ children, className = '' }: GradientBorderProps) {
  return (
    <div className={`gradient-border-wrapper ${className}`}>
      <div className="gradient-border" />
      <div className="gradient-border-content">
        {children}
      </div>
    </div>
  )
}
