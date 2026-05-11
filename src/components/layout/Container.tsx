import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1080px] px-4 tablet:px-6 desktop:px-8 ${className}`}
    >
      {children}
    </div>
  )
}
