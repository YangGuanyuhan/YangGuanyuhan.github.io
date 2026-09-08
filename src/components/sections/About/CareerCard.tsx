import { ArrowUpRight, Briefcase } from 'lucide-react'
import { intentions } from '@/data/education'
export default function CareerCard() {
  return (
    <article className="info-card">
      <span className="card-icon">
        <Briefcase size={19} strokeWidth={1.6} aria-hidden="true" />
      </span>
      <h3>正在寻找的方向</h3>
      <ul className="career-list">
        {intentions.map((intention) => (
          <li key={intention}>
            <ArrowUpRight size={14} aria-hidden="true" />
            {intention}
          </li>
        ))}
      </ul>
      <p className="card-description">
        关注模型如何高效推理，也关注服务如何可靠运行。希望在真实的问题中，持续打磨代码质量与算法效率。
      </p>
    </article>
  )
}
