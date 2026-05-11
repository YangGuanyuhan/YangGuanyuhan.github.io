import Section from '@/components/layout/Section'
import SectionTitle from '@/components/layout/SectionTitle'
import StaggerChildren from '@/effects/StaggerChildren'
import { fadeInUp } from '@/lib/motion'
import { motion } from 'framer-motion'
import EducationCard from './EducationCard'
import CareerCard from './CareerCard'
import CoursesCard from './CoursesCard'

export default function About() {
  return (
    <Section id="about" withGrid>
      <SectionTitle
        kicker="About"
        title="关于我"
        description="南方科技大学计算机科学与技术专业在读，专注于计算机视觉与后端开发。"
      />
      <StaggerChildren className="grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-3 desktop:gap-6">
        <motion.div variants={fadeInUp}>
          <EducationCard />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <CareerCard />
        </motion.div>
        <motion.div variants={fadeInUp} className="tablet:col-span-2 desktop:col-span-1">
          <CoursesCard />
        </motion.div>
      </StaggerChildren>
    </Section>
  )
}
