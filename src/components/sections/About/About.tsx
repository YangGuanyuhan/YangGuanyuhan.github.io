import Section from '@/components/layout/Section'
import SectionTitle from '@/components/layout/SectionTitle'
import EducationCard from './EducationCard'
import CareerCard from './CareerCard'
import CoursesCard from './CoursesCard'
export default function About() {
  return (
    <Section id="about" className="about-section">
      <SectionTitle
        id="about-title"
        kicker="03 / ABOUT ME"
        title="保持深入，也保持开放。"
        description="在南方科技大学学习计算机科学，沿着视觉理解与可靠系统的方向继续探索。"
      />
      <div className="about-grid">
        <EducationCard />
        <CareerCard />
        <CoursesCard />
      </div>
    </Section>
  )
}
