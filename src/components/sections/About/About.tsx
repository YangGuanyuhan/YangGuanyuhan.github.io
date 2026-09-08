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
        kicker="02 / A LITTLE ABOUT ME"
        title="认真构建，也自由探索。"
        description="扎实的计算机基础，是将好奇心转化为创造力的起点。"
      />
      <div className="about-grid">
        <EducationCard />
        <CareerCard />
        <CoursesCard />
      </div>
    </Section>
  )
}
