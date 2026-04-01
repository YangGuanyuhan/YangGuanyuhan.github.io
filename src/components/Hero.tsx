import { Github, Mail, Phone, ExternalLink } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content fade-in">
          <h1 className="hero-title">杨官宇涵</h1>
          <p className="hero-subtitle">计算机视觉 · 后端开发 · 深度学习</p>
          
          <p className="hero-description">
            南方科技大学 2027 届本科生
            <br />
            追求极致的代码质量与算法效率
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              获取简历
            </a>
            <a href="https://github.com/YangGuanyuhan" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              查看 GitHub <ExternalLink size={18} />
            </a>
          </div>

          <div className="hero-contact">
            <a href="mailto:yanggyh2023@mail.sustech.edu.cn" className="contact-link" title="邮箱">
              <Mail size={20} />
            </a>
            <a href="tel:+8618387311225" className="contact-link" title="电话">
              <Phone size={20} />
            </a>
            <a href="https://github.com/YangGuanyuhan" target="_blank" rel="noopener noreferrer" className="contact-link" title="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="glow-circle glow-1"></div>
          <div className="glow-circle glow-2"></div>
        </div>
      </div>
    </section>
  )
}
