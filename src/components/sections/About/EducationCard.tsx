import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import { education } from '@/data/education'

export default function EducationCard() {
  return (
    <GlassCard variant="default" hover>
      <div className="p-6">
        <h3 className="mb-4 text-[var(--text-xl)] font-semibold text-[var(--text-primary)]">
          教育背景
        </h3>
        <div className="space-y-2">
          <p className="text-[var(--text-lg)] font-medium text-[var(--text-primary)]">
            {education.school}
          </p>
          <p className="text-[var(--text-base)] text-[var(--text-secondary)]">
            {education.major}
          </p>
          <p className="text-[var(--text-sm)] text-[var(--text-tertiary)]">
            {education.level}
          </p>
          <div className="flex flex-wrap gap-2 pt-2 text-[var(--text-xs)] text-[var(--text-tertiary)]">
            <span>{education.year}</span>
            <span>·</span>
            <span>{education.location}</span>
          </div>
          {education.honors.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-3">
              {education.honors.map((honor, i) => (
                <Badge key={i}>{honor}</Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  )
}
