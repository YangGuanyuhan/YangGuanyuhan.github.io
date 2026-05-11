import GlassCard from '@/components/ui/GlassCard'
import type { ReactNode } from 'react'

interface ContactCardProps {
  icon: ReactNode
  label: string
  value: string
  href: string
}

export default function ContactCard({ icon, label, value, href }: ContactCardProps) {
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
      <GlassCard variant="default" hover>
        <div className="flex items-start gap-4 p-6">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--accent-blue)]/10 text-[var(--accent-blue)]">
            {icon}
          </div>
          <div className="min-w-0">
            <p className="text-[var(--text-xs)] font-medium uppercase tracking-widest text-[var(--text-tertiary)]">
              {label}
            </p>
            <p className="mt-1 truncate text-[var(--text-base)] text-[var(--text-primary)]">
              {value}
            </p>
          </div>
        </div>
      </GlassCard>
    </a>
  )
}
