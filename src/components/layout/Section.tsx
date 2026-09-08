import type { ReactNode } from 'react'
import Container from './Container'

export default function Section({
  id,
  children,
  className = '',
}: {
  id: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}>
      <Container>{children}</Container>
    </section>
  )
}
