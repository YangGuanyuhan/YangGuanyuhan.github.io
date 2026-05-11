import { motion } from 'framer-motion'
import Section from '@/components/layout/Section'
import SectionTitle from '@/components/layout/SectionTitle'
import StaggerChildren from '@/effects/StaggerChildren'
import { fadeInUp } from '@/lib/motion'
import { skillCategories } from '@/data/skills'
import SkillCategory from './SkillCategory'
import Languages from './Languages'

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle
        kicker="Skills"
        title="技能栈"
        description="持续学习，不断精进的技术能力矩阵。"
      />
      <StaggerChildren className="grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:gap-6">
        {skillCategories.map((category, i) => (
          <motion.div key={i} variants={fadeInUp}>
            <SkillCategory category={category} />
          </motion.div>
        ))}
      </StaggerChildren>
      <Languages />
    </Section>
  )
}
