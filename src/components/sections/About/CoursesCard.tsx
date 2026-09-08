import { BookOpen } from 'lucide-react'
import { courses } from '@/data/education'
export default function CoursesCard() {
  return (
    <article className="info-card">
      <span className="card-icon">
        <BookOpen size={20} strokeWidth={1.6} aria-hidden="true" />
      </span>
      <h3>知识的底座</h3>
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </article>
  )
}
