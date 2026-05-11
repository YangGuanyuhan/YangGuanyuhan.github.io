import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import TiltCard from '@/effects/TiltCard'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <TiltCard>
      <GlassCard variant="elevated" hover>
        <div className="p-6 tablet:p-8">
          {/* Header */}
          <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="text-[var(--text-xl)] font-semibold text-[var(--text-primary)]">
                {project.title}
              </h3>
              <p className="mt-1 text-[var(--text-sm)] text-[var(--accent-purple)]">
                {project.subtitle}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[var(--surface-overlay)] px-3 py-1 font-mono text-[var(--text-xs)] text-[var(--text-tertiary)]">
                {project.type}
              </span>
              <span className="font-mono text-[var(--text-xs)] text-[var(--text-tertiary)]">
                {project.year}
              </span>
            </div>
          </div>

          {/* Highlights */}
          <ul className="mb-5 space-y-2">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex gap-2 text-[var(--text-sm)] leading-relaxed text-[var(--text-secondary)]">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent-blue)]/40" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <Badge key={i}>{tag}</Badge>
            ))}
          </div>
        </div>
      </GlassCard>
    </TiltCard>
  )
}
