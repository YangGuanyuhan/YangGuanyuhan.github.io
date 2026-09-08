import { ArrowUpRight, Plus } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import type { Project } from '@/data/projects'
import ProjectArtwork from './ProjectArtwork'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card ${project.id === 1 ? 'project-featured' : ''}`}>
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
          {project.links && (
            <div className="project-sources">
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
          <div className="tags" style={{ marginTop: 16 }}>
            {project.tags.slice(3).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </details>
        {project.id === 1 && (
          <a
            className="project-source-link"
            href="https://github.com/opencv/opencv/pull/28986"
            target="_blank"
            rel="noopener noreferrer"
          >
            查看已合并 PR #28986 <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}
