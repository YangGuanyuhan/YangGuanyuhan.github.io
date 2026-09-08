import { GraduationCap, Award } from 'lucide-react'
import { education } from '@/data/education'
export default function EducationCard() {
  return (
    <article className="info-card">
      <span className="card-icon">
        <GraduationCap size={21} strokeWidth={1.6} aria-hidden="true" />
      </span>
      <h3>教育背景</h3>
      <p className="school-name">{education.school}</p>
      <p className="school-english">SOUTHERN UNIVERSITY OF SCIENCE AND TECHNOLOGY</p>
      <p className="education-detail">
        {education.major} · {education.level}
      </p>
      <p className="education-date">
        {education.year} · {education.location}
      </p>
      {education.honors.map((honor) => (
        <span className="honor" key={honor}>
          <Award size={13} aria-hidden="true" />
          {honor}
        </span>
      ))}
    </article>
  )
}
