import { Braces, Layers, Terminal, Network } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import type { SkillCategory as SkillCategoryType } from '@/data/skills'
const icons = [Braces, Layers, Terminal, Network]
export default function SkillCategory({
  category,
  index,
}: {
  category: SkillCategoryType
  index: number
}) {
  const Icon = icons[index % icons.length]
  return (
    <article className="skill-card">
      <span className="card-icon">
        <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
      </span>
      <div className="skill-content">
        <h3>{category.title}</h3>
        <div className="tags">
          {category.items.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>
    </article>
  )
}
