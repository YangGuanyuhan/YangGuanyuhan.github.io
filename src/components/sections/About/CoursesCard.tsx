import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import { courses } from '@/data/education'
import StaggerChildren from '@/effects/StaggerChildren'

export default function CoursesCard() {
  return (
    <GlassCard variant="default" hover>
      <div className="p-6">
        <h3 className="mb-4 text-[var(--text-xl)] font-semibold text-text-primary">
          核心课程
        </h3>
        <StaggerChildren className="flex flex-wrap gap-2">
          {courses.map((course, i) => (
            <Badge key={i} animate>
              {course}
            </Badge>
          ))}
        </StaggerChildren>
      </div>
    </GlassCard>
  )
}
