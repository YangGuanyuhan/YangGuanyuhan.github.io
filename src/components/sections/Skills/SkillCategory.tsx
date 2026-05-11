import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import StaggerChildren from '@/effects/StaggerChildren'
import type { SkillCategory as SkillCategoryType } from '@/data/skills'

interface SkillCategoryProps {
  category: SkillCategoryType
}

export default function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <GlassCard variant="default" hover>
      <div className="p-6">
        <h3 className="mb-4 text-[var(--text-lg)] font-semibold text-text-primary">
          {category.title}
        </h3>
        <StaggerChildren className="flex flex-wrap gap-2">
          {category.items.map((skill, i) => (
            <Badge key={i} animate>
              {skill}
            </Badge>
          ))}
        </StaggerChildren>
      </div>
    </GlassCard>
  )
}
