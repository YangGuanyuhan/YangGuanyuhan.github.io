import { ScanLine } from 'lucide-react'
export default function CareerCard() {
  return (
    <article className="info-card">
      <span className="card-icon">
        <ScanLine size={21} strokeWidth={1.5} aria-hidden="true" />
      </span>
      <h3>正在深入的方向</h3>
      <p className="school-name">视觉理解与高效推理</p>
      <p className="card-description">
        关注人体运动表征、步态识别与复杂场景下的鲁棒性，希望从可复现的基线出发，连接视觉研究和实际部署。
      </p>
      <div className="interest-tags">
        <span>计算机视觉</span>
        <span>人体运动表征</span>
        <span>边缘智能</span>
      </div>
    </article>
  )
}
