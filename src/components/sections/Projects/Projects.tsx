import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import Section from '@/components/layout/Section'
import SectionTitle from '@/components/layout/SectionTitle'
import StaggerChildren from '@/effects/StaggerChildren'
import Button from '@/components/ui/Button'
import { fadeInUp } from '@/lib/motion'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <Section id="projects" withGrid>
      <SectionTitle
        kicker="Projects"
        title="项目经历"
        description="从算法研究到系统部署，追求工程与理论的极致平衡。"
      />
      <StaggerChildren className="space-y-6">
        {projects.map((project) => (
          <motion.div key={project.id} variants={fadeInUp}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </StaggerChildren>

      <motion.div
        className="mt-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <p className="mb-4 text-[var(--text-sm)] text-text-tertiary">
          更多项目和代码示例，请访问我的 GitHub
        </p>
        <Button href="https://github.com/YangGuanyuhan" variant="secondary">
          <Github size={18} />
          GitHub 主页
        </Button>
      </motion.div>
    </Section>
  )
}
