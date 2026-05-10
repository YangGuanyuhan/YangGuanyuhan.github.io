import { ReactNode } from 'react'

interface NeonTextProps {
  children: ReactNode
  color?: string
  className?: string
}

export default function NeonText({ children, color = '#00d4ff', className = '' }: NeonTextProps) {
  return (
    <span
      className={`neon-text ${className}`}
      style={{
        color,
        textShadow: `
          0 0 7px ${color},
          0 0 10px ${color},
          0 0 21px ${color},
          0 0 42px ${color},
          0 0 82px ${color},
          0 0 92px ${color}
        `,
        animation: 'neon-flicker 1.5s infinite alternate'
      }}
    >
      {children}
    </span>
  )
}
