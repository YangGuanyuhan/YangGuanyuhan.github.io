import { ArrowUpRight } from 'lucide-react'
import Section from '@/components/layout/Section'
import SectionTitle from '@/components/layout/SectionTitle'
import { projects } from '@/data/projects'
import { profile } from '@/data/profile'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle
        id="projects-title"
        kicker="01 / SELECTED WORK"
        title="把想法，写成作品。"
        description="从特征匹配到端侧推理，连接算法研究与工程实践。"
        action={
          <a
            className="text-link"
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            所有代码 <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        }
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <p className="project-footnote">
        项目成果来自各自测试环境，具体条件见「技术细节」。上方图形为技术概念示意。
      </p>
    </Section>
  )
}
