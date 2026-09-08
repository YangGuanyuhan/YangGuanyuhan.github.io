import { ArrowUpRight, AudioLines, BookOpen, GitPullRequest, Workflow } from 'lucide-react'
import Section from '@/components/layout/Section'
import SectionTitle from '@/components/layout/SectionTitle'

const responsibilities = [
  {
    icon: AudioLines,
    title: '实时语音交互',
    text: '参与语音输入、结构化信息整理与缺失字段追问的交互梳理，验证实时通信、打断与异常处理。',
  },
  {
    icon: Workflow,
    title: '企业智能体',
    text: '参与机器人接入与配置验证，关注资料引用、证据追溯和任务边界，让回答有依据、输出可核验。',
  },
  {
    icon: BookOpen,
    title: '知识库建设',
    text: '参与跨格式资料的分类与结构化整理，维护来源、版本和适用范围，支持后续检索与更新。',
  },
]

export default function Experience() {
  return (
    <Section id="experience">
      <SectionTitle
        id="experience-title"
        kicker="01 / EXPERIENCE"
        title="在真实场景里，打磨能力。"
        description="从开源社区到企业实践，关注技术如何被可靠地使用。"
      />
      <article className="experience-card glass-panel">
        <div className="experience-heading">
          <div>
            <span className="eyebrow">INTERNSHIP</span>
            <h3>盛弘电气</h3>
            <p>AI 运营实习生</p>
          </div>
          <span className="date-pill">2026.06 — 2026.07</span>
        </div>
        <div className="experience-responsibilities">
          {responsibilities.map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <Icon size={24} strokeWidth={1.4} aria-hidden="true" />
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="experience-bottom">
          <span>Node.js · WebSocket · AudioWorklet · 知识组织</span>
          <span>深圳 · 暑期实习</span>
        </div>
      </article>
      <article className="open-source-row">
        <span className="source-icon">
          <GitPullRequest size={23} strokeWidth={1.5} aria-hidden="true" />
        </span>
        <div>
          <h3>OpenCV 开源贡献者</h3>
          <p>2025 — 2026 · 深度特征匹配、推理正确性与回归测试</p>
        </div>
        <a
          href="https://github.com/search?q=org%3Aopencv+author%3AYangGuanyuhan+is%3Apr+is%3Amerged&type=pullrequests"
          className="text-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          5 个已合并 PR <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </article>
    </Section>
  )
}
