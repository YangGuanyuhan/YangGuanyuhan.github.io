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
        kicker="03 / MY TOOLKIT"
        title="让好想法，有好工具。"
        description="从底层原理到开发框架，在实践中不断拓展技术边界。"
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
