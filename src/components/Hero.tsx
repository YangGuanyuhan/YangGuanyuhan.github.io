import { Github, Mail, Phone, ExternalLink } from 'lucide-react'
import './Hero.css'
import divingImage from '../../images/diving.jpg'
import skiImage from '../../images/ski.jpg'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-layout fade-in">
          <div className="hero-content">
            <p className="hero-kicker">Portfolio 2026</p>
            <h1 className="hero-title">杨官宇涵</h1>
            <p className="hero-subtitle">计算机视觉 · 后端开发 · 深度学习</p>

            <p className="hero-description">
              南方科技大学 2027 届本科生
              <br />
              追求极致的代码质量与算法效率
            </p>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                查看项目
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

          <div className="hero-media">
            <article className="hobby-card hobby-card-large">
              <img src={divingImage} alt="潜水爱好" />
              <div className="hobby-overlay">
                <p className="hobby-label">Hobby</p>
                <h3>潜水探索</h3>
              </div>
            </article>
            <article className="hobby-card hobby-card-small">
              <img src={skiImage} alt="滑雪爱好" />
              <div className="hobby-overlay">
                <p className="hobby-label">Hobby</p>
                <h3>雪道驰骋</h3>
              </div>
            </article>
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
