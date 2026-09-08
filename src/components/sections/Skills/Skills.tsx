import Section from '@/components/layout/Section'
import SectionTitle from '@/components/layout/SectionTitle'
import { skillCategories } from '@/data/skills'
import SkillCategory from './SkillCategory'
import Languages from './Languages'
export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle
        id="skills-title"
        kicker="THE TOOLKIT"
        title="理解原理，熟悉工具。"
        description="在项目中使用，在实践中学习。"
      />
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <SkillCategory key={category.title} category={category} index={index} />
        ))}
      </div>
      <Languages />
    </Section>
  )
}
