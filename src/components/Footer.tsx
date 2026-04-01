import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>杨官宇涵</h3>
            <p>计算机视觉 · 后端开发 · 深度学习</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>导航</h4>
              <ul>
                <li><a href="#about">关于我</a></li>
                <li><a href="#skills">技能</a></li>
                <li><a href="#projects">项目</a></li>
                <li><a href="#contact">联系</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>社交</h4>
              <ul>
                <li><a href="https://github.com/YangGuanyuhan" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="mailto:yanggyh2023@mail.sustech.edu.cn">邮箱</a></li>
                <li><a href="tel:+8618387311225">电话</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} 杨官宇涵 All Rights Reserved.</p>
          <p>Built with React + TypeScript + Vite</p>
        </div>
      </div>
    </footer>
  )
}
