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
        kicker="02 / SELECTED WORK"
        title="从想法，到可运行的实现。"
        description="开源贡献、视觉系统与后端工程。每一份作品，都有具体的问题要解决。"
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
        开源状态核验于
        2026.09.08；实验指标限于各项目测试环境。图形为技术概念示意，详情与公开来源可展开查看。
      </p>
    </Section>
  )
}
