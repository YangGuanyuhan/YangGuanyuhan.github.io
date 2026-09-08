import type { ReactNode } from 'react'

interface SectionTitleProps {
  id: string
  kicker: string
  title: string
  description: string
  action?: ReactNode
}
export default function SectionTitle({
  id,
  kicker,
  title,
  description,
  action,
}: SectionTitleProps) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{kicker}</p>
        <h2 id={id}>{title}</h2>
        <p>{description}</p>
      </div>
      {action}
    </div>
  )
}
