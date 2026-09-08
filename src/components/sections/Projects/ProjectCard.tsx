import { Plus } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import type { Project } from '@/data/projects'
import ProjectArtwork from './ProjectArtwork'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <ProjectArtwork id={project.id} label={project.category} />
      <div className="project-content">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <div className="project-metric">
          <strong>{project.metric.value}</strong>
          <span>{project.metric.label}</span>
        </div>
        <div className="tags">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <details className="project-details">
          <summary>
            技术细节 <Plus size={16} aria-hidden="true" />
          </summary>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <div className="tags" style={{ marginTop: 16 }}>
            {project.tags.slice(3).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </details>
      </div>
    </article>
  )
}
